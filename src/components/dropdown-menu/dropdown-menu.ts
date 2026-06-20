import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * Dropdown Menu container.
 * 
 * @element shadcn-dropdown-menu
 * 
 * @slot - Trigger and Content
 */
@customElement('shadcn-dropdown-menu')
export class DropdownMenu extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: inline-block;
        position: relative;
      }
    `,
  ];

  @state() private _open = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._handleClick);
    this.addEventListener('focusout', this._handleFocusOut);
    this.addEventListener('select', this._handleItemSelect as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleClick);
    this.removeEventListener('focusout', this._handleFocusOut);
    this.removeEventListener('select', this._handleItemSelect as EventListener);
    this._removeDocumentListeners();
  }

  render() {
    return html`<slot></slot>`;
  }

  private _handleClick(e: Event) {
    const trigger = e.target as HTMLElement;
    // Check if click was on or inside the trigger
    const triggerEl = this.querySelector('shadcn-dropdown-menu-trigger');
    if (triggerEl && (trigger === triggerEl || triggerEl.contains(trigger))) {
      this._toggle();
    }
  }

  private _handleFocusOut(e: FocusEvent) {
    if (!this.contains(e.relatedTarget as Node)) {
      this._open = false;
      this._updateChildren();
      this._removeDocumentListeners();
    }
  }

  private _handleItemSelect = () => {
    this._close();
  };

  private _handleDocumentPointerDown = (event: MouseEvent) => {
    if (!this.contains(event.target as Node)) {
      this._close();
    }
  };

  private _handleDocumentKeyDown = (event: KeyboardEvent) => {
    if (!this._open) {
      return;
    }

    const content = this.querySelector('shadcn-dropdown-menu-content') as DropdownMenuContent | null;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this._close();
        break;
      case 'ArrowDown':
        event.preventDefault();
        content?.focusNext();
        break;
      case 'ArrowUp':
        event.preventDefault();
        content?.focusPrevious();
        break;
      case 'Home':
        event.preventDefault();
        content?.focusFirst();
        break;
      case 'End':
        event.preventDefault();
        content?.focusLast();
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        content?.activateFocused();
        break;
    }
  };

  private _toggle() {
    if (this._open) {
      this._close();
    } else {
      this._openMenu();
    }
  }

  private _openMenu() {
    this._open = true;
    this._updateChildren();
    document.addEventListener('mousedown', this._handleDocumentPointerDown);
    document.addEventListener('keydown', this._handleDocumentKeyDown);

    requestAnimationFrame(() => {
      const content = this.querySelector('shadcn-dropdown-menu-content') as DropdownMenuContent | null;
      content?.focusFirst();
    });
  }

  private _close() {
    if (!this._open) {
      return;
    }

    this._open = false;
    this._updateChildren();
    this._removeDocumentListeners();
    const trigger = this.querySelector<HTMLElement>('shadcn-dropdown-menu-trigger');
    trigger?.focus();
  }

  private _removeDocumentListeners() {
    document.removeEventListener('mousedown', this._handleDocumentPointerDown);
    document.removeEventListener('keydown', this._handleDocumentKeyDown);
  }

  private _updateChildren() {
    const content = this.querySelector('shadcn-dropdown-menu-content');
    if (content) {
      (content as DropdownMenuContent).open = this._open;
    }

    const trigger = this.querySelector('shadcn-dropdown-menu-trigger');
    if (trigger) {
      trigger.setAttribute('data-state', this._open ? 'open' : 'closed');
      trigger.setAttribute('aria-haspopup', 'menu');
      trigger.setAttribute('aria-expanded', String(this._open));
    }
  }
}

/**
 * Dropdown Menu trigger.
 * 
 * @element shadcn-dropdown-menu-trigger
 * 
 * @slot - Trigger content
 */
@customElement('shadcn-dropdown-menu-trigger')
export class DropdownMenuTrigger extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: inline-block;
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('tabindex', '0');
    this.setAttribute('aria-haspopup', 'menu');
    this.setAttribute('aria-expanded', 'false');
  }
}

/**
 * Dropdown Menu content.
 * 
 * @element shadcn-dropdown-menu-content
 * 
 * @slot - Menu items
 */
@customElement('shadcn-dropdown-menu-content')
export class DropdownMenuContent extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: none;
      }

      :host([open]) {
        display: contents;
      }
      
      .content {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 50;
        min-width: 8rem;
        margin-top: var(--spacing-1);
        width: max-content;
        padding: var(--spacing-1);
        background-color: var(--popover);
        color: var(--popover-foreground);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        overflow: hidden;
      }

      :host([align="end"]) .content {
        left: auto;
        right: 0;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) align: 'start' | 'end' = 'start';

  render() {
    return html`
      <div class="content" role="menu">
        <slot></slot>
      </div>
    `;
  }

  private _items(): Array<DropdownMenuItem | DropdownMenuCheckboxItem> {
    return Array.from(this.querySelectorAll('shadcn-dropdown-menu-item, shadcn-dropdown-menu-checkbox-item'))
      .filter((item): item is DropdownMenuItem | DropdownMenuCheckboxItem => {
        return item instanceof DropdownMenuItem || item instanceof DropdownMenuCheckboxItem;
      })
      .filter((item) => !item.disabled);
  }

  private _focusedIndex(): number {
    const items = this._items();
    const activeElement = document.activeElement;
    return items.findIndex((item) => item.contains(activeElement) || item.shadowRoot?.contains(activeElement));
  }

  focusFirst(): void {
    this._items()[0]?.focusItem();
  }

  focusLast(): void {
    const items = this._items();
    items[items.length - 1]?.focusItem();
  }

  focusNext(): void {
    const items = this._items();
    if (items.length === 0) return;
    const nextIndex = (this._focusedIndex() + 1) % items.length;
    items[nextIndex]?.focusItem();
  }

  focusPrevious(): void {
    const items = this._items();
    if (items.length === 0) return;
    const index = this._focusedIndex();
    const nextIndex = index <= 0 ? items.length - 1 : index - 1;
    items[nextIndex]?.focusItem();
  }

  activateFocused(): void {
    const items = this._items();
    const focusedItem = items[this._focusedIndex()];
    focusedItem?.activate();
  }
}

/**
 * Dropdown Menu item.
 * 
 * @element shadcn-dropdown-menu-item
 * 
 * @slot - Item content
 * @slot shortcut - Keyboard shortcut
 */
@customElement('shadcn-dropdown-menu-item')
export class DropdownMenuItem extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-1-5) var(--spacing-2);
        font-size: var(--font-size-sm);
        border-radius: var(--radius-sm);
        cursor: default;
        user-select: none;
        outline: none;
        color: var(--foreground);
      }

      .item:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      .shortcut {
        margin-left: auto;
        font-size: var(--font-size-xs);
        letter-spacing: var(--tracking-widest);
        color: var(--muted-foreground);
      }
      
      :host([disabled]) .item {
        opacity: 0.5;
        pointer-events: none;
      }
      
      :host([inset]) .item {
        padding-left: var(--spacing-8);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) inset = false;

  render() {
    return html`
      <div class="item" role="menuitem" tabindex="-1" ?aria-disabled=${this.disabled} @click=${this.activate}>
        <slot></slot>
        <slot name="shortcut" class="shortcut"></slot>
      </div>
    `;
  }

  focusItem(): void {
    this.shadowRoot?.querySelector<HTMLElement>('.item')?.focus();
  }

  activate(): void {
    if (this.disabled) return;
    this.dispatchEvent(new CustomEvent('select', { bubbles: true, composed: true }));
  }
}

/**
 * Dropdown Menu separator.
 * 
 * @element shadcn-dropdown-menu-separator
 */
@customElement('shadcn-dropdown-menu-separator')
export class DropdownMenuSeparator extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: block;
        height: 1px;
        background-color: var(--muted);
        margin: var(--spacing-1) 0;
      }
    `,
  ];

  render() {
    return html``;
  }
}

/**
 * Dropdown Menu label.
 * 
 * @element shadcn-dropdown-menu-label
 * 
 * @slot - Label text
 */
@customElement('shadcn-dropdown-menu-label')
export class DropdownMenuLabel extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: block;
        padding: var(--spacing-1-5) var(--spacing-2);
        font-size: var(--font-size-sm);
        font-weight: var(--font-semibold);
        color: var(--foreground);
      }
      
      :host([inset]) {
        padding-left: var(--spacing-8);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) inset = false;

  render() {
    return html`<slot></slot>`;
  }
}

/**
 * Dropdown Menu checkbox item.
 * 
 * @element shadcn-dropdown-menu-checkbox-item
 * 
 * @slot - Item content
 */
@customElement('shadcn-dropdown-menu-checkbox-item')
export class DropdownMenuCheckboxItem extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }

      .item {
        display: flex;
        align-items: center;
        padding: var(--spacing-1-5) var(--spacing-2);
        padding-left: var(--spacing-8);
        font-size: var(--font-size-sm);
        border-radius: var(--radius-sm);
        cursor: default;
        user-select: none;
        outline: none;
        color: var(--foreground);
        position: relative;
      }

      .item:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }
      
      .check-wrapper {
        position: absolute;
        left: var(--spacing-2);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1rem;
        height: 1rem;
      }
      
      :host([disabled]) .item {
        opacity: 0.5;
        pointer-events: none;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  render() {
    return html`
      <div 
        class="item" 
        role="menuitemcheckbox" 
        tabindex="-1"
        aria-checked=${this.checked}
        ?aria-disabled=${this.disabled}
        @click=${this._toggle}
      >
        <div class="check-wrapper">
          ${this.checked ? html`
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ` : ''}
        </div>
        <slot></slot>
      </div>
    `;
  }

  private _toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', { detail: { checked: this.checked } }));
  }

  focusItem(): void {
    this.shadowRoot?.querySelector<HTMLElement>('.item')?.focus();
  }

  activate(): void {
    this._toggle();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-dropdown-menu': DropdownMenu;
    'shadcn-dropdown-menu-trigger': DropdownMenuTrigger;
    'shadcn-dropdown-menu-content': DropdownMenuContent;
    'shadcn-dropdown-menu-item': DropdownMenuItem;
    'shadcn-dropdown-menu-separator': DropdownMenuSeparator;
    'shadcn-dropdown-menu-label': DropdownMenuLabel;
    'shadcn-dropdown-menu-checkbox-item': DropdownMenuCheckboxItem;
  }
}
