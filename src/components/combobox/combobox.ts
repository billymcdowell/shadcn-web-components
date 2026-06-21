import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

export interface ComboboxChangeDetail {
  value: string;
  label: string;
}

/**
 * Filterable, form-associated single-select combobox.
 *
 * @element shadcn-combobox
 * @slot - Combobox input and popup content.
 * @fires combobox-change - Fired after an item is selected.
 * @fires combobox-open-change - Fired when the popup opens or closes.
 */
@customElement('shadcn-combobox')
export class Combobox extends LitElement {
  static formAssociated = true;
  static styles = [tokens, css`
    :host { display: inline-block; position: relative; min-width: 12rem; }
  `];

  private readonly _internals: ElementInternals;
  private _defaultValue = '';

  /** Selected item value. */
  @property({ type: String }) value = '';
  /** Form field name. */
  @property({ type: String, reflect: true }) name = '';
  /** Whether the popup is open. */
  @property({ type: Boolean, reflect: true }) open = false;
  /** Whether the combobox is disabled. */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Whether the combobox is read-only. */
  @property({ type: Boolean, reflect: true }) readonly = false;
  /** Whether a non-empty selection is required. */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Placeholder shown when no item is selected. */
  @property({ type: String }) placeholder = 'Select an option';

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._defaultValue = this.getAttribute('value') ?? this.value;
    this.addEventListener('combobox-input', this._handleInput as EventListener);
    this.addEventListener('combobox-input-keydown', this._handleKeydown as EventListener);
    this.addEventListener('combobox-item-select', this._handleSelect as EventListener);
    this.addEventListener('combobox-item-pointermove', this._handlePointerMove as EventListener);
    document.addEventListener('pointerdown', this._handleOutsidePointerDown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('combobox-input', this._handleInput as EventListener);
    this.removeEventListener('combobox-input-keydown', this._handleKeydown as EventListener);
    this.removeEventListener('combobox-item-select', this._handleSelect as EventListener);
    this.removeEventListener('combobox-item-pointermove', this._handlePointerMove as EventListener);
    document.removeEventListener('pointerdown', this._handleOutsidePointerDown);
    super.disconnectedCallback();
  }

  protected render() {
    return html`<slot @slotchange=${this._sync}></slot>`;
  }

  protected firstUpdated(): void {
    this._sync();
  }

  protected updated(): void {
    this._internals.setFormValue(this.disabled ? null : this.value);
    const missing = this.required && !this.value;
    this._internals.setValidity(missing ? { valueMissing: true } : {}, missing ? 'Select an option.' : '');
    this._sync();
  }

  formResetCallback(): void {
    this.value = this._defaultValue;
    this.open = false;
    this._filter('');
  }

  formDisabledCallback(disabled: boolean): void {
    this.disabled = disabled;
  }

  /** Opens the popup unless the combobox is disabled or read-only. */
  show(): void {
    if (!this.disabled && !this.readonly) this._setOpen(true);
  }

  /** Closes the popup. */
  hide(): void {
    this._setOpen(false);
  }

  /** Focuses the editable input. */
  focus(options?: FocusOptions): void {
    this._input()?.focus(options);
  }

  private _items(): ComboboxItem[] {
    return Array.from(this.querySelectorAll<ComboboxItem>('shadcn-combobox-item'));
  }

  private _visibleItems(): ComboboxItem[] {
    return this._items().filter((item) => !item.disabled && !item.filtered);
  }

  private _input(): ComboboxInput | null {
    return this.querySelector<ComboboxInput>('shadcn-combobox-input');
  }

  private _content(): ComboboxContent | null {
    return this.querySelector<ComboboxContent>('shadcn-combobox-content');
  }

  private _handleInput = (event: CustomEvent<{ value: string }>) => {
    if (this.disabled || this.readonly) return;
    this._filter(event.detail.value);
    this._setOpen(true);
    this._setActive(this._visibleItems()[0] ?? null);
  };

  private _handleKeydown = (event: CustomEvent<{ key: string }>) => {
    const key = event.detail.key;
    if (this.disabled || this.readonly) return;
    if (key === 'Escape') {
      this._setOpen(false);
      this._restoreInputLabel();
      return;
    }
    if (key === 'Tab') {
      this._setOpen(false);
      return;
    }
    if (!this.open && ['ArrowDown', 'ArrowUp', 'Enter'].includes(key)) this._setOpen(true);
    const items = this._visibleItems();
    if (!items.length) return;
    const current = items.findIndex((item) => item.active);
    if (key === 'Enter' && current >= 0) {
      items[current]?.select();
      return;
    }
    let next = current;
    if (key === 'ArrowDown') next = current < items.length - 1 ? current + 1 : 0;
    else if (key === 'ArrowUp') next = current > 0 ? current - 1 : items.length - 1;
    else if (key === 'Home') next = 0;
    else if (key === 'End') next = items.length - 1;
    else return;
    this._setActive(items[next] ?? null);
  };

  private _handleSelect = (event: CustomEvent<ComboboxChangeDetail>) => {
    const item = event.target as ComboboxItem;
    if (this.disabled || this.readonly || item.disabled) return;
    this.value = event.detail.value;
    this._filter('');
    this._setOpen(false);
    this.dispatchEvent(new CustomEvent<ComboboxChangeDetail>('combobox-change', {
      bubbles: true,
      composed: true,
      detail: event.detail,
    }));
    queueMicrotask(() => {
      this._restoreInputLabel();
      this.focus();
    });
  };

  private _handlePointerMove = (event: Event) => {
    const item = event.target as ComboboxItem;
    if (!item.disabled && !item.filtered) this._setActive(item);
  };

  private _handleOutsidePointerDown = (event: PointerEvent) => {
    if (this.open && !event.composedPath().includes(this)) {
      this._setOpen(false);
      this._restoreInputLabel();
    }
  };

  private _filter(query: string): void {
    const normalized = query.trim().toLocaleLowerCase();
    this._items().forEach((item) => {
      item.filtered = normalized.length > 0 && !item.searchText.toLocaleLowerCase().includes(normalized);
    });
    this.querySelectorAll<ComboboxGroup>('shadcn-combobox-group').forEach((group) => group.syncVisibility());
    const hasResults = this._items().some((item) => !item.filtered);
    this.querySelectorAll<ComboboxEmpty>('shadcn-combobox-empty').forEach((empty) => { empty.visible = !hasResults; });
  }

  private _setActive(item: ComboboxItem | null): void {
    this._items().forEach((candidate) => { candidate.active = candidate === item; });
    const input = this._input();
    if (input) input.activeDescendant = item?.optionId ?? '';
    item?.scrollIntoView({ block: 'nearest' });
  }

  private _setOpen(open: boolean): void {
    if (this.open === open) return;
    this.open = open;
    this.dispatchEvent(new CustomEvent('combobox-open-change', {
      bubbles: true,
      composed: true,
      detail: { open },
    }));
  }

  private _restoreInputLabel(): void {
    const selected = this._items().find((item) => item.value === this.value);
    const input = this._input();
    if (input) input.displayValue = selected?.displayLabel ?? '';
  }

  private _sync = () => {
    const items = this._items();
    const selected = items.find((item) => item.value === this.value);
    items.forEach((item) => { item.selected = item === selected; });
    const content = this._content();
    if (content) content.open = this.open;
    const input = this._input();
    if (input) {
      input.open = this.open;
      input.disabled = this.disabled;
      input.readonly = this.readonly;
      input.required = this.required;
      input.placeholder = this.placeholder;
      input.controls = content?.listboxId ?? '';
      if (!this.open) input.displayValue = selected?.displayLabel ?? '';
    }
  };
}

/** @element shadcn-combobox-input @fires combobox-input - Fired while filtering. @fires combobox-input-keydown - Requests keyboard navigation. @csspart input - Native search input. */
@customElement('shadcn-combobox-input')
export class ComboboxInput extends LitElement {
  static styles = [tokens, css`
    :host { display: block; }
    .wrap { position: relative; }
    input { box-sizing: border-box; width: 100%; height: 2.5rem; padding: 0 var(--spacing-9) 0 var(--spacing-3); border: 1px solid var(--input); border-radius: var(--radius-md); background: var(--background); color: var(--foreground); font: inherit; font-size: var(--font-size-sm); outline: none; }
    input::placeholder { color: var(--muted-foreground); }
    input:focus-visible { border-color: var(--ring); box-shadow: 0 0 0 2px color-mix(in srgb, var(--ring) 30%, transparent); }
    input:disabled { cursor: not-allowed; opacity: .5; }
    svg { position: absolute; top: 50%; right: var(--spacing-3); width: 1rem; height: 1rem; transform: translateY(-50%); opacity: .5; pointer-events: none; }
  `];

  @property({ type: String }) placeholder = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) open = false;
  @property({ type: String }) displayValue = '';
  @property({ type: String }) activeDescendant = '';
  @property({ type: String }) controls = '';

  protected render() {
    return html`<div class="wrap"><input part="input" type="text" role="combobox" autocomplete="off" aria-autocomplete="list" aria-haspopup="listbox" aria-expanded=${this.open} aria-controls=${this.controls || ''} aria-activedescendant=${this.activeDescendant || ''} aria-required=${this.required} aria-readonly=${this.readonly} .value=${this.displayValue} placeholder=${this.placeholder} ?disabled=${this.disabled} ?readonly=${this.readonly} @focus=${this._focus} @input=${this._input} @keydown=${this._keydown}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7 10 5 5 5-5"/></svg></div>`;
  }

  focus(options?: FocusOptions): void {
    this.shadowRoot?.querySelector('input')?.focus(options);
  }

  private _focus(): void {
    if (!this.disabled && !this.readonly) this.dispatchEvent(new CustomEvent('combobox-input', { bubbles: true, composed: true, detail: { value: '' } }));
  }

  private _input(event: Event): void {
    this.displayValue = (event.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('combobox-input', { bubbles: true, composed: true, detail: { value: this.displayValue } }));
  }

  private _keydown(event: KeyboardEvent): void {
    if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', 'Escape'].includes(event.key)) event.preventDefault();
    this.dispatchEvent(new CustomEvent('combobox-input-keydown', { bubbles: true, composed: true, detail: { key: event.key } }));
  }
}

/** @element shadcn-combobox-content @slot - Empty state, groups, and items. @csspart content - Popup listbox. */
@customElement('shadcn-combobox-content')
export class ComboboxContent extends LitElement {
  private static _nextId = 0;
  static styles = [tokens, css`
    :host { display: block; position: absolute; z-index: 50; top: calc(100% + var(--spacing-1)); left: 0; width: 100%; }
    :host(:not([open])) { display: none; }
    .content { max-height: 15rem; overflow: auto; padding: var(--spacing-1); border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--popover); color: var(--popover-foreground); box-shadow: var(--shadow-md); animation: shadcn-zoom-in var(--transition-fast); }
    @media (prefers-reduced-motion: reduce) { .content { animation: none; } }
  `];
  @property({ type: Boolean, reflect: true }) open = false;
  readonly listboxId = `shadcn-combobox-listbox-${ComboboxContent._nextId++}`;
  protected render() { return html`<div id=${this.listboxId} part="content" class="content" role="listbox"><slot></slot></div>`; }
}

/** @element shadcn-combobox-empty @slot - Empty-state message. */
@customElement('shadcn-combobox-empty')
export class ComboboxEmpty extends LitElement {
  static styles = [tokens, css`:host { display: none; padding: var(--spacing-6) var(--spacing-2); text-align: center; font-size: var(--font-size-sm); } :host([visible]) { display: block; }`];
  @property({ type: Boolean, reflect: true }) visible = false;
  protected render() { return html`<slot>No items found.</slot>`; }
}

/** @element shadcn-combobox-group @slot - Group label and items. */
@customElement('shadcn-combobox-group')
export class ComboboxGroup extends LitElement {
  static styles = css`:host { display: block; } :host([hidden]) { display: none; }`;
  protected render() { return html`<slot @slotchange=${this.syncVisibility}></slot>`; }
  syncVisibility = () => { this.hidden = !Array.from(this.querySelectorAll<ComboboxItem>('shadcn-combobox-item')).some((item) => !item.filtered); };
}

/** @element shadcn-combobox-label @slot - Group label. */
@customElement('shadcn-combobox-label')
export class ComboboxLabel extends LitElement {
  static styles = [tokens, css`:host { display: block; padding: var(--spacing-2); color: var(--muted-foreground); font-size: var(--font-size-xs); font-weight: 500; }`];
  protected render() { return html`<slot></slot>`; }
}

/** @element shadcn-combobox-item @slot - Item label. @fires combobox-item-select - Requests selection. @csspart item - Option element. */
@customElement('shadcn-combobox-item')
export class ComboboxItem extends LitElement {
  private static _nextId = 0;
  static styles = [tokens, css`
    :host { display: block; }
    :host([filtered]) { display: none; }
    .item { position: relative; display: flex; min-height: 2rem; align-items: center; padding: var(--spacing-1) var(--spacing-8) var(--spacing-1) var(--spacing-2); border-radius: var(--radius-sm); font-size: var(--font-size-sm); cursor: default; outline: none; }
    .item.active { background: var(--accent); color: var(--accent-foreground); }
    .item.disabled { opacity: .5; pointer-events: none; }
    .check { position: absolute; right: var(--spacing-2); }
  `];

  /** Submitted item value. */
  @property({ type: String, reflect: true }) value = '';
  /** Optional search keywords in addition to the label. */
  @property({ type: String }) keywords = '';
  /** Whether the item cannot be selected. */
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) selected = false;
  @property({ type: Boolean }) active = false;
  @property({ type: Boolean, reflect: true }) filtered = false;
  readonly optionId = `shadcn-combobox-option-${ComboboxItem._nextId++}`;

  get displayLabel(): string { return (this.textContent ?? '').trim(); }
  get searchText(): string { return `${this.displayLabel} ${this.keywords}`.trim(); }

  protected render() {
    return html`<div id=${this.optionId} part="item" class="item ${this.active ? 'active' : ''} ${this.disabled ? 'disabled' : ''}" role="option" aria-selected=${this.selected} aria-disabled=${this.disabled} @click=${this.select} @pointermove=${this._pointerMove}><slot></slot>${this.selected ? html`<span class="check" aria-hidden="true">&#10003;</span>` : ''}</div>`;
  }

  select = () => {
    if (!this.disabled) this.dispatchEvent(new CustomEvent<ComboboxChangeDetail>('combobox-item-select', { bubbles: true, composed: true, detail: { value: this.value, label: this.displayLabel } }));
  };

  private _pointerMove(): void {
    this.dispatchEvent(new CustomEvent('combobox-item-pointermove', { bubbles: true, composed: true }));
  }
}

/** @element shadcn-combobox-separator */
@customElement('shadcn-combobox-separator')
export class ComboboxSeparator extends LitElement {
  static styles = [tokens, css`:host { display: block; height: 1px; margin: var(--spacing-1) calc(var(--spacing-1) * -1); background: var(--border); }`];
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-combobox': Combobox;
    'shadcn-combobox-input': ComboboxInput;
    'shadcn-combobox-content': ComboboxContent;
    'shadcn-combobox-empty': ComboboxEmpty;
    'shadcn-combobox-group': ComboboxGroup;
    'shadcn-combobox-label': ComboboxLabel;
    'shadcn-combobox-item': ComboboxItem;
    'shadcn-combobox-separator': ComboboxSeparator;
  }
}
