import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * Form-associated custom select coordinating its compound children.
 *
 * @element shadcn-select
 * @slot - Select trigger and content.
 * @fires select-change - Fired when selection changes.
 * @fires select-open-change - Fired when the popup opens or closes.
 */
@customElement('shadcn-select')
export class Select extends LitElement {
  static formAssociated = true;
  static styles = [tokens, css`:host { display: inline-block; position: relative; min-width: 12rem; }`];
  private _internals: ElementInternals;

  /** Selected item value. */
  @property({ type: String }) value = '';
  /** Form field name. */
  @property({ type: String, reflect: true }) name = '';
  /** Whether the popup is open. */
  @property({ type: Boolean, reflect: true }) open = false;
  /** Whether selection is disabled. */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Whether a non-empty selection is required. */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Placeholder shown when no item is selected. */
  @property({ type: String }) placeholder = 'Select an option';

  constructor() { super(); this._internals = this.attachInternals(); }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('select-toggle', this._toggle as EventListener);
    this.addEventListener('select-item-select', this._select as EventListener);
    this.addEventListener('select-navigate', this._navigate as EventListener);
    document.addEventListener('pointerdown', this._outsidePointerDown);
  }

  disconnectedCallback() {
    this.removeEventListener('select-toggle', this._toggle as EventListener);
    this.removeEventListener('select-item-select', this._select as EventListener);
    this.removeEventListener('select-navigate', this._navigate as EventListener);
    document.removeEventListener('pointerdown', this._outsidePointerDown);
    super.disconnectedCallback();
  }

  protected render() { return html`<slot @slotchange=${this._sync}></slot>`; }
  protected firstUpdated() { this._sync(); }
  protected updated() {
    this._internals.setFormValue(this.disabled ? null : this.value);
    this._internals.setValidity(this.required && !this.value ? { valueMissing: true } : {}, this.required && !this.value ? 'Select an option.' : '');
    this._sync();
  }

  formResetCallback() { this.value = ''; this.open = false; }

  private _items() { return Array.from(this.querySelectorAll<SelectItem>('shadcn-select-item')); }
  private _trigger() { return this.querySelector<SelectTrigger>('shadcn-select-trigger'); }
  private _content() { return this.querySelector<SelectContent>('shadcn-select-content'); }

  private _toggle = () => {
    if (this.disabled) return;
    this.open = !this.open;
    this._emitOpen();
    if (this.open) queueMicrotask(() => (this._items().find((item) => item.selected && !item.disabled) ?? this._items().find((item) => !item.disabled))?.focus());
  };

  private _select = (event: CustomEvent<{ value: string; label: string }>) => {
    const item = event.target as SelectItem;
    if (this.disabled || item.disabled) return;
    this.value = event.detail.value;
    this.open = false;
    this.dispatchEvent(new CustomEvent('select-change', { bubbles: true, composed: true, detail: event.detail }));
    this._emitOpen();
    queueMicrotask(() => this._trigger()?.focus());
  };

  private _navigate = (event: CustomEvent<{ key: string }>) => {
    const items = this._items().filter((item) => !item.disabled);
    const current = items.indexOf(event.target as SelectItem);
    if (event.detail.key === 'Escape') { this.open = false; this._emitOpen(); this._trigger()?.focus(); return; }
    if (event.detail.key === 'Tab') { this.open = false; this._emitOpen(); return; }
    if (!items.length) return;
    let next = current < 0 ? 0 : current;
    if (event.detail.key === 'ArrowDown') next = (next + 1) % items.length;
    else if (event.detail.key === 'ArrowUp') next = (next - 1 + items.length) % items.length;
    else if (event.detail.key === 'Home') next = 0;
    else if (event.detail.key === 'End') next = items.length - 1;
    else return;
    items[next].focus();
  };

  private _outsidePointerDown = (event: PointerEvent) => {
    if (this.open && !event.composedPath().includes(this)) { this.open = false; this._emitOpen(); }
  };

  private _emitOpen() { this.dispatchEvent(new CustomEvent('select-open-change', { bubbles: true, composed: true, detail: { open: this.open } })); }

  private _sync = () => {
    const selected = this._items().find((item) => item.value === this.value);
    this._items().forEach((item) => { item.selected = item === selected; });
    const trigger = this._trigger();
    if (trigger) { trigger.open = this.open; trigger.disabled = this.disabled; trigger.label = selected?.displayLabel || this.placeholder; }
    this.querySelectorAll<SelectValue>('shadcn-select-value').forEach((value) => {
      value.label = selected?.displayLabel || this.placeholder;
    });
    const content = this._content();
    if (content) content.open = this.open;
  };
}

/** @element shadcn-select-trigger @slot - Optional custom trigger content. @fires select-toggle - Requests popup toggle. @csspart trigger - Native trigger button. */
@customElement('shadcn-select-trigger')
export class SelectTrigger extends LitElement {
  static styles = [tokens, css`
    :host { display: block; }
    button { display: flex; width: 100%; min-height: 2.5rem; align-items: center; justify-content: space-between; gap: var(--spacing-2); padding: 0 var(--spacing-3); border: 1px solid var(--input); border-radius: var(--radius-md); background: var(--background); color: var(--foreground); font: inherit; font-size: var(--font-size-sm); cursor: pointer; }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
    button:disabled { opacity: .5; cursor: not-allowed; }
    svg { width: 1rem; height: 1rem; opacity: .5; }
  `];
  @property({ type: Boolean }) open = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) label = '';
  protected render() { return html`<button part="trigger" type="button" aria-haspopup="listbox" aria-expanded=${this.open} ?disabled=${this.disabled} @click=${this._toggle} @keydown=${this._keydown}><slot>${this.label}</slot><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7 10 5 5 5-5"/></svg></button>`; }
  focus(options?: FocusOptions) { this.shadowRoot?.querySelector('button')?.focus(options); }
  private _toggle() { this.dispatchEvent(new CustomEvent('select-toggle', { bubbles: true, composed: true })); }
  private _keydown(event: KeyboardEvent) { if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key) && !this.open) { event.preventDefault(); this._toggle(); } else if (event.key === 'Escape' && this.open) { event.preventDefault(); this._toggle(); } }
}

/** @element shadcn-select-value @slot - Optional value fallback. */
@customElement('shadcn-select-value')
export class SelectValue extends LitElement {
  static styles = css`:host { display: inline; }`;
  @property({ type: String }) label = '';
  protected render() { return html`<slot>${this.label}</slot>`; }
}

/** @element shadcn-select-content @slot - Select items. @csspart content - Listbox popup. */
@customElement('shadcn-select-content')
export class SelectContent extends LitElement {
  static styles = [tokens, css`
    :host { display: block; position: absolute; z-index: 50; top: calc(100% + var(--spacing-1)); left: 0; width: 100%; }
    [hidden] { display: none !important; }
    .content { max-height: 15rem; overflow: auto; padding: var(--spacing-1); border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--popover); color: var(--popover-foreground); box-shadow: 0 10px 20px rgb(0 0 0 / .15); }
  `];
  @property({ type: Boolean }) open = false;
  protected render() { return html`<div part="content" class="content" role="listbox" ?hidden=${!this.open}><slot></slot></div>`; }
}

/** @element shadcn-select-item @slot - Item label. @fires select-item-select - Requests selection. @fires select-navigate - Requests keyboard navigation. @csspart item - Option element. */
@customElement('shadcn-select-item')
export class SelectItem extends LitElement {
  static styles = [tokens, css`
    :host { display: block; }
    .item { position: relative; display: flex; align-items: center; min-height: 2rem; padding: var(--spacing-1) var(--spacing-8) var(--spacing-1) var(--spacing-2); border-radius: var(--radius-sm); color: var(--foreground); font-size: var(--font-size-sm); cursor: default; outline: none; }
    .item:hover, .item:focus-visible { background: var(--accent); color: var(--accent-foreground); }
    .item.disabled { opacity: .5; pointer-events: none; }
    .check { position: absolute; right: var(--spacing-2); }
  `];
  @property({ type: String, reflect: true }) value = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) selected = false;
  get displayLabel() { return (this.textContent ?? '').trim(); }
  protected render() { return html`<div part="item" class="item ${this.disabled ? 'disabled' : ''}" role="option" aria-selected=${this.selected} aria-disabled=${this.disabled} tabindex=${this.disabled ? -1 : 0} @click=${this.select} @keydown=${this._keydown}><slot></slot>${this.selected ? html`<span class="check" aria-hidden="true">✓</span>` : ''}</div>`; }
  select = () => { if (!this.disabled) this.dispatchEvent(new CustomEvent('select-item-select', { bubbles: true, composed: true, detail: { value: this.value, label: this.displayLabel } })); };
  focus(options?: FocusOptions) { this.shadowRoot?.querySelector<HTMLElement>('.item')?.focus(options); }
  private _keydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.select(); return; }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Escape', 'Tab'].includes(event.key)) { if (event.key !== 'Tab') event.preventDefault(); this.dispatchEvent(new CustomEvent('select-navigate', { bubbles: true, composed: true, detail: { key: event.key } })); }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-select': Select;
    'shadcn-select-trigger': SelectTrigger;
    'shadcn-select-value': SelectValue;
    'shadcn-select-content': SelectContent;
    'shadcn-select-item': SelectItem;
  }
}
