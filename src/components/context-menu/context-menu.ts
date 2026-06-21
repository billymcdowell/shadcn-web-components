import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { handleMenuKeyDown } from '../_internal/menu-keyboard.js';
import { tokensBase, tokensMotion } from '../../styles/index.js';

/**
 * Context Menu container (trigger area).
 * 
 * @element shadcn-context-menu
 * 
 * @slot - Trigger content
 * @slot menu - Menu content
 */
@customElement('shadcn-context-menu')
export class ContextMenu extends LitElement {
  static styles = [
    tokensBase,
    tokensMotion,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @state() private _open = false;
  @state() private _x = 0;
  @state() private _y = 0;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('select', this._handleItemSelect as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('select', this._handleItemSelect as EventListener);
    this._removeDocumentListeners();
  }

  render() {
    return html`
      <div @contextmenu=${this._handleContextMenu}>
        <slot></slot>
        <slot name="menu"></slot>
      </div>
    `;
  }

  private _handleContextMenu(e: MouseEvent) {
    e.preventDefault();
    this._open = true;
    this._x = e.clientX;
    this._y = e.clientY;
    this._updateMenu();

    // Close on click outside
    document.addEventListener('click', this._handleDocumentClick);
    document.addEventListener('keydown', this._handleDocumentKeyDown);

    requestAnimationFrame(() => {
      const menu = this.querySelector('shadcn-context-menu-content') as ContextMenuContent | null;
      menu?.focusFirst();
    });
  }

  private _handleDocumentClick = () => {
    this._close();
  };

  private _handleItemSelect = () => {
    this._close();
  };

  private _handleDocumentKeyDown = (event: KeyboardEvent) => {
    if (!this._open) {
      return;
    }

    const menu = this.querySelector('shadcn-context-menu-content') as ContextMenuContent | null;
    handleMenuKeyDown(event, menu, () => this._close());
  };

  private _close() {
    if (!this._open) {
      return;
    }

    this._open = false;
    this._updateMenu();
    this._removeDocumentListeners();
  }

  private _removeDocumentListeners() {
    document.removeEventListener('click', this._handleDocumentClick);
    document.removeEventListener('keydown', this._handleDocumentKeyDown);
  }

  private _updateMenu() {
    const menu = this.querySelector('shadcn-context-menu-content');
    if (menu) {
      (menu as ContextMenuContent).open = this._open;
      (menu as ContextMenuContent).x = this._x;
      (menu as ContextMenuContent).y = this._y;
    }
  }
}

/**
 * Context Menu content.
 * 
 * @element shadcn-context-menu-content
 * 
 * @slot - Menu items
 */
@customElement('shadcn-context-menu-content')
export class ContextMenuContent extends LitElement {
  static styles = [
    tokensBase,
    tokensMotion,
    css`
      :host {
        display: none;
      }

      :host([open]) {
        display: contents;
      }

      .content {
        position: fixed;
        z-index: 50;
        min-width: 8rem;
        padding: var(--spacing-1);
        background-color: var(--popover);
        color: var(--popover-foreground);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        overflow: hidden;
        transform-origin: top left;
      }

      :host([open]) .content { animation: shadcn-zoom-in var(--transition-fast); }
      @media (prefers-reduced-motion: reduce) { .content { animation: none; } }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Number }) x = 0;
  @property({ type: Number }) y = 0;

  render() {
    const safeX = Math.max(8, Math.min(this.x, window.innerWidth - 8));
    const safeY = Math.max(8, Math.min(this.y, window.innerHeight - 8));
    const style = `top: ${safeY}px; left: ${safeX}px; max-width: calc(100vw - 16px); max-height: calc(100vh - 16px); overflow: auto;`;
    return html`
      <div class="content" role="menu" style=${style}>
        <slot></slot>
      </div>
    `;
  }

  private _items(): Array<ContextMenuItem | ContextMenuCheckboxItem> {
    return Array.from(this.querySelectorAll('shadcn-context-menu-item, shadcn-context-menu-checkbox-item'))
      .filter((item): item is ContextMenuItem | ContextMenuCheckboxItem => {
        return item instanceof ContextMenuItem || item instanceof ContextMenuCheckboxItem;
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
 * Context Menu item.
 * 
 * @element shadcn-context-menu-item
 * 
 * @slot - Item content
 * @slot shortcut - Keyboard shortcut
 */
@customElement('shadcn-context-menu-item')
export class ContextMenuItem extends LitElement {
  static styles = [
    tokensBase,
    tokensMotion,
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
 * Context Menu separator.
 * 
 * @element shadcn-context-menu-separator
 */
@customElement('shadcn-context-menu-separator')
export class ContextMenuSeparator extends LitElement {
  static styles = [
    tokensBase,
    tokensMotion,
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
 * Context Menu label.
 * 
 * @element shadcn-context-menu-label
 * 
 * @slot - Label text
 */
@customElement('shadcn-context-menu-label')
export class ContextMenuLabel extends LitElement {
  static styles = [
    tokensBase,
    tokensMotion,
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
 * Context Menu checkbox item.
 * 
 * @element shadcn-context-menu-checkbox-item
 * 
 * @slot - Item content
 */
@customElement('shadcn-context-menu-checkbox-item')
export class ContextMenuCheckboxItem extends LitElement {
  static styles = [
    tokensBase,
    tokensMotion,
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
    'shadcn-context-menu': ContextMenu;
    'shadcn-context-menu-content': ContextMenuContent;
    'shadcn-context-menu-item': ContextMenuItem;
    'shadcn-context-menu-separator': ContextMenuSeparator;
    'shadcn-context-menu-label': ContextMenuLabel;
    'shadcn-context-menu-checkbox-item': ContextMenuCheckboxItem;
  }
}
