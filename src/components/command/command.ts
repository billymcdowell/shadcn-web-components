import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tokensBase, tokensMotion } from '../../styles/index.js';

export interface CommandSelectDetail {
  value: string;
}

/**
 * A searchable command menu styled after shadcn/ui.
 *
 * @element shadcn-command
 * @slot - Command input, list, groups, and items.
 * @fires command-select - Fired when an enabled command item is selected.
 * @csspart root - Command menu container.
 * @cssprop --command-list-max-height - Maximum height of the command list.
 */
@customElement('shadcn-command')
export class Command extends LitElement {
  static styles = [tokensBase,
    tokensMotion, css`
    :host { display: flex; width: 100%; height: 100%; min-height: 0; }
    .root { display: flex; width: 100%; height: 100%; min-height: 0; flex-direction: column; overflow: hidden; border-radius: var(--radius-md); background: var(--popover, var(--background)); color: var(--popover-foreground, var(--foreground)); }
  `];

  /** Current search query. */
  @property({ type: String }) value = '';
  /** Disables built-in text filtering when true. */
  @property({ type: Boolean, attribute: 'disable-filter' }) disableFilter = false;

  private _activeIndex = -1;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('command-input', this._handleInput as EventListener);
    this.addEventListener('command-keydown', this._handleKeydown as EventListener);
    this.addEventListener('command-item-active', this._handleItemActive as EventListener);
    this.addEventListener('command-item-select', this._handleItemSelect as EventListener);
  }

  disconnectedCallback() {
    this.removeEventListener('command-input', this._handleInput as EventListener);
    this.removeEventListener('command-keydown', this._handleKeydown as EventListener);
    this.removeEventListener('command-item-active', this._handleItemActive as EventListener);
    this.removeEventListener('command-item-select', this._handleItemSelect as EventListener);
    super.disconnectedCallback();
  }

  protected render() {
    return html`<div part="root" class="root"><slot @slotchange=${this._filter}></slot></div>`;
  }

  protected firstUpdated() { this._filter(); }

  protected updated(changes: Map<string, unknown>) {
    if (changes.has('value') || changes.has('disableFilter')) this._filter();
  }

  private _items() {
    return Array.from(this.querySelectorAll<CommandItem>('shadcn-command-item'));
  }

  private _visibleItems() {
    return this._items().filter((item) => !item.hidden && !item.disabled);
  }

  private _filter = () => {
    const query = this.value.trim().toLocaleLowerCase();
    const items = this._items();
    for (const item of items) {
      const searchable = `${item.value || item.textContent || ''} ${item.keywords}`.toLocaleLowerCase();
      item.hidden = !this.disableFilter && query.length > 0 && !searchable.includes(query);
      item.active = false;
    }

    this.querySelectorAll<CommandGroup>('shadcn-command-group').forEach((group) => group.syncVisibility());
    const hasResults = items.some((item) => !item.hidden);
    this.querySelectorAll<CommandEmpty>('shadcn-command-empty').forEach((empty) => { empty.hidden = hasResults; });
    this.querySelectorAll<CommandSeparator>('shadcn-command-separator').forEach((separator) => { separator.hidden = !hasResults; });
    this._activeIndex = -1;
    this._syncInput();
  };

  private _handleInput = (event: CustomEvent<{ value: string }>) => {
    this.value = event.detail.value;
  };

  private _handleKeydown = (event: CustomEvent<{ key: string }>) => {
    const items = this._visibleItems();
    if (items.length === 0) return;
    const { key } = event.detail;
    if (key === 'ArrowDown') this._activeIndex = (this._activeIndex + 1) % items.length;
    else if (key === 'ArrowUp') this._activeIndex = (this._activeIndex - 1 + items.length) % items.length;
    else if (key === 'Home') this._activeIndex = 0;
    else if (key === 'End') this._activeIndex = items.length - 1;
    else if (key === 'Enter' && this._activeIndex >= 0) { items[this._activeIndex]?.select(); return; }
    else return;
    items.forEach((item, index) => { item.active = index === this._activeIndex; });
    items[this._activeIndex]?.scrollIntoView({ block: 'nearest' });
    this._syncInput();
  };

  private _handleItemSelect = (event: CustomEvent<CommandSelectDetail>) => {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent<CommandSelectDetail>('command-select', {
      bubbles: true,
      composed: true,
      detail: event.detail,
    }));
  };

  private _handleItemActive = (event: CustomEvent<{ item: CommandItem }>) => {
    const items = this._visibleItems();
    this._activeIndex = items.indexOf(event.detail.item);
    items.forEach((item, index) => { item.active = index === this._activeIndex; });
    this._syncInput();
  };

  private _syncInput() {
    const active = this._visibleItems()[this._activeIndex];
    this.querySelectorAll<CommandInput>('shadcn-command-input').forEach((input) => {
      input.value = this.value;
      input.activeDescendant = active?.id ?? '';
      input.expanded = this._visibleItems().length > 0;
    });
  }
}

/**
 * Search field for a command menu.
 * @element shadcn-command-input
 * @fires command-input - Fired as the search query changes.
 * @fires command-keydown - Fired for command-navigation keys.
 * @csspart wrapper - Search field wrapper.
 * @csspart input - Native search input.
 */
@customElement('shadcn-command-input')
export class CommandInput extends LitElement {
  static styles = [tokensBase,
    tokensMotion, css`
    :host { display: block; }
    .wrapper { display: flex; height: 2.875rem; align-items: center; gap: var(--spacing-2); border-bottom: 1px solid var(--border); padding: 0 var(--spacing-3); }
    svg { width: 1rem; height: 1rem; flex: none; opacity: .5; }
    input { display: flex; width: 100%; height: 2.75rem; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--foreground); font: inherit; font-size: var(--font-size-sm); }
    input::placeholder { color: var(--muted-foreground); }
    input:disabled { cursor: not-allowed; opacity: .5; }
  `];

  /** Input placeholder. */
  @property({ type: String }) placeholder = 'Type a command or search...';
  /** Current query. */
  @property({ type: String }) value = '';
  /** Whether the input is disabled. */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Accessible label. */
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = 'Search commands';
  @property({ type: String, attribute: false }) activeDescendant = '';
  @property({ type: Boolean, attribute: false }) expanded = false;
  @query('input') private _input!: HTMLInputElement;

  focus(options?: FocusOptions) { this._input?.focus(options); }

  protected render() {
    return html`<div part="wrapper" class="wrapper">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
      <input part="input" type="text" role="combobox" autocomplete="off" spellcheck="false" aria-label=${this.ariaLabel} aria-autocomplete="list" aria-expanded=${this.expanded} aria-activedescendant=${this.activeDescendant || nothing} .placeholder=${this.placeholder} .value=${this.value} ?disabled=${this.disabled} @input=${this._onInput} @keydown=${this._onKeydown} />
    </div>`;
  }

  private _onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('command-input', { bubbles: true, composed: true, detail: { value: this.value } }));
  }

  private _onKeydown(event: KeyboardEvent) {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter'].includes(event.key)) return;
    event.preventDefault();
    this.dispatchEvent(new CustomEvent('command-keydown', { bubbles: true, composed: true, detail: { key: event.key } }));
  }
}

/** @element shadcn-command-list @slot - Command groups, items, separators, and empty state. @csspart list - Scrollable listbox. */
@customElement('shadcn-command-list')
export class CommandList extends LitElement {
  static styles = [tokensBase,
    tokensMotion, css`
    :host { display: block; min-height: 0; }
    .list { max-height: var(--command-list-max-height, 18.75rem); overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain; scroll-padding-block: var(--spacing-1); }
  `];
  protected render() { return html`<div part="list" class="list" role="listbox"><slot></slot></div>`; }
}

/** @element shadcn-command-empty @slot - Empty-state message. @csspart empty - Empty-state container. */
@customElement('shadcn-command-empty')
export class CommandEmpty extends LitElement {
  static styles = [tokensBase,
    tokensMotion, css`:host { display: block; } :host([hidden]) { display: none; } .empty { padding: var(--spacing-6); text-align: center; font-size: var(--font-size-sm); }`];
  protected render() { return html`<div part="empty" class="empty" role="status"><slot></slot></div>`; }
}

/** @element shadcn-command-group @slot - Command items. @csspart group - Group container. @csspart heading - Group heading. */
@customElement('shadcn-command-group')
export class CommandGroup extends LitElement {
  static styles = [tokensBase,
    tokensMotion, css`
    :host { display: block; overflow: hidden; padding: var(--spacing-1); color: var(--foreground); }
    :host([hidden]) { display: none; }
    .heading { padding: var(--spacing-1-5) var(--spacing-2); color: var(--muted-foreground); font-size: var(--font-size-xs); font-weight: var(--font-medium); }
  `];
  /** Optional group heading. */
  @property({ type: String }) heading = '';
  protected render() { return html`${this.heading ? html`<div part="heading" class="heading">${this.heading}</div>` : nothing}<div part="group" role="group" aria-label=${this.heading || nothing}><slot @slotchange=${this.syncVisibility}></slot></div>`; }
  syncVisibility = () => { this.hidden = !Array.from(this.querySelectorAll<CommandItem>('shadcn-command-item')).some((item) => !item.hidden); };
}

/**
 * A selectable command menu item.
 * @element shadcn-command-item
 * @slot - Item label and optional leading content.
 * @fires command-item-select - Requests selection of this item.
 * @csspart item - Command item container.
 */
@customElement('shadcn-command-item')
export class CommandItem extends LitElement {
  static styles = [tokensBase,
    tokensMotion, css`
    :host { display: block; }
    :host([hidden]) { display: none; }
    .item { position: relative; display: flex; min-height: 2rem; cursor: default; user-select: none; align-items: center; gap: var(--spacing-2); border-radius: var(--radius-sm); padding: var(--spacing-1-5) var(--spacing-2); color: var(--foreground); font-size: var(--font-size-sm); outline: none; }
    .item.active { background: var(--accent); color: var(--accent-foreground); }
    .item.disabled { pointer-events: none; opacity: .5; }
    ::slotted(svg) { width: 1rem; height: 1rem; flex: none; pointer-events: none; }
  `];
  private static _id = 0;
  /** Stable value emitted on selection and used for filtering. */
  @property({ type: String }) value = '';
  /** Space-separated extra search terms. */
  @property({ type: String }) keywords = '';
  /** Whether the item is unavailable. */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Whether the item is the active keyboard option. */
  @property({ type: Boolean, reflect: true }) active = false;

  connectedCallback() {
    super.connectedCallback();
    if (!this.id) this.id = `shadcn-command-item-${++CommandItem._id}`;
    this.setAttribute('role', 'option');
    this.addEventListener('pointermove', this._activate);
    this.addEventListener('click', this._click);
  }
  disconnectedCallback() {
    this.removeEventListener('pointermove', this._activate);
    this.removeEventListener('click', this._click);
    super.disconnectedCallback();
  }
  protected updated() { this.setAttribute('aria-selected', String(this.active)); this.setAttribute('aria-disabled', String(this.disabled)); }
  protected render() { return html`<div part="item" class="item ${this.active ? 'active' : ''} ${this.disabled ? 'disabled' : ''}"><slot></slot></div>`; }
  select() {
    if (this.disabled || this.hidden) return;
    const value = this.value || this.textContent?.trim() || '';
    this.dispatchEvent(new CustomEvent<CommandSelectDetail>('command-item-select', { bubbles: true, composed: true, detail: { value } }));
  }
  private _activate = () => {
    if (this.disabled) return;
    this.dispatchEvent(new CustomEvent('command-item-active', { bubbles: true, composed: true, detail: { item: this } }));
  };
  private _click = () => this.select();
}

/** @element shadcn-command-separator @csspart separator - Visual separator. */
@customElement('shadcn-command-separator')
export class CommandSeparator extends LitElement {
  static styles = [tokensBase,
    tokensMotion, css`:host { display: block; height: 1px; margin: 0 calc(var(--spacing-1) * -1); background: var(--border); }`];
  protected render() { return html`<div part="separator" role="separator"></div>`; }
}

/** @element shadcn-command-shortcut @slot - Keyboard shortcut text. @csspart shortcut - Shortcut label. */
@customElement('shadcn-command-shortcut')
export class CommandShortcut extends LitElement {
  static styles = [tokensBase,
    tokensMotion, css`:host { display: inline-block; margin-left: auto; color: var(--muted-foreground); font-size: var(--font-size-xs); letter-spacing: var(--tracking-widest); }`];
  protected render() { return html`<span part="shortcut"><slot></slot></span>`; }
}

/**
 * Presents a command menu in a modal dialog.
 * @element shadcn-command-dialog
 * @slot - A shadcn-command composition.
 * @fires command-dialog-open-change - Fired when the dialog opens or closes.
 * @csspart overlay - Modal backdrop.
 * @csspart dialog - Modal command container.
 */
@customElement('shadcn-command-dialog')
export class CommandDialog extends LitElement {
  static styles = [tokensBase,
    tokensMotion, css`
    :host { position: fixed; inset: 0; z-index: 50; display: flex; align-items: flex-start; justify-content: center; padding: 20vh var(--spacing-4) var(--spacing-4); }
    :host(:not([open])) { display: none; }
    .overlay { position: fixed; inset: 0; background: oklch(0 0 0 / 80%); animation: shadcn-fade-in var(--transition-base); }
    .dialog { position: relative; z-index: 1; width: 100%; max-width: 32rem; overflow: hidden; border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--popover, var(--background)); box-shadow: var(--shadow-lg); animation: shadcn-zoom-in var(--transition-base); }
    @media (prefers-reduced-motion: reduce) { .overlay, .dialog { animation: none; } }
  `];
  /** Whether the modal is open. */
  @property({ type: Boolean, reflect: true }) open = false;
  /** Accessible dialog label. */
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = 'Command menu';
  private _previousFocus: HTMLElement | null = null;
  private _bodyOverflow: string | null = null;

  connectedCallback() { super.connectedCallback(); window.addEventListener('keydown', this._keydown); }
  disconnectedCallback() { window.removeEventListener('keydown', this._keydown); this._unlockBody(); super.disconnectedCallback(); }
  protected render() { return this.open ? html`<div part="overlay" class="overlay" @click=${this.close}></div><div part="dialog" class="dialog" role="dialog" aria-modal="true" aria-label=${this.ariaLabel}><slot></slot></div>` : nothing; }
  protected updated(changes: Map<string, unknown>) {
    if (!changes.has('open')) return;
    if (this.open) {
      this._previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      this._lockBody();
      requestAnimationFrame(() => this.querySelector<CommandInput>('shadcn-command-input')?.focus());
    } else {
      this._unlockBody();
      const target = this._previousFocus;
      this._previousFocus = null;
      requestAnimationFrame(() => target?.focus());
    }
  }
  close = () => {
    if (!this.open) return;
    this.open = false;
    this.dispatchEvent(new CustomEvent('command-dialog-open-change', { bubbles: true, composed: true, detail: { open: false } }));
  };
  show() {
    if (this.open) return;
    this.open = true;
    this.dispatchEvent(new CustomEvent('command-dialog-open-change', { bubbles: true, composed: true, detail: { open: true } }));
  }
  private _keydown = (event: KeyboardEvent) => {
    if (!this.open) return;
    if (event.key === 'Escape') { event.preventDefault(); this.close(); }
    else if (event.key === 'Tab') { event.preventDefault(); this.querySelector<CommandInput>('shadcn-command-input')?.focus(); }
  };
  private _lockBody() { if (this._bodyOverflow === null) { this._bodyOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; } }
  private _unlockBody() { if (this._bodyOverflow !== null) { document.body.style.overflow = this._bodyOverflow; this._bodyOverflow = null; } }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-command': Command;
    'shadcn-command-dialog': CommandDialog;
    'shadcn-command-empty': CommandEmpty;
    'shadcn-command-group': CommandGroup;
    'shadcn-command-input': CommandInput;
    'shadcn-command-item': CommandItem;
    'shadcn-command-list': CommandList;
    'shadcn-command-separator': CommandSeparator;
    'shadcn-command-shortcut': CommandShortcut;
  }
}
