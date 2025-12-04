import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

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
    tokens,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @state() private _open = false;
  @state() private _x = 0;
  @state() private _y = 0;

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
  }

  private _handleDocumentClick = () => {
    this._open = false;
    this._updateMenu();
    document.removeEventListener('click', this._handleDocumentClick);
  };

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
    tokens,
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
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Number }) x = 0;
  @property({ type: Number }) y = 0;

  render() {
    const style = `top: ${this.y}px; left: ${this.x}px;`;
    return html`
      <div class="content" role="menu" style=${style}>
        <slot></slot>
      </div>
    `;
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
      <div class="item" role="menuitem" ?aria-disabled=${this.disabled}>
        <slot></slot>
        <slot name="shortcut" class="shortcut"></slot>
      </div>
    `;
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
 * Context Menu label.
 * 
 * @element shadcn-context-menu-label
 * 
 * @slot - Label text
 */
@customElement('shadcn-context-menu-label')
export class ContextMenuLabel extends LitElement {
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
 * Context Menu checkbox item.
 * 
 * @element shadcn-context-menu-checkbox-item
 * 
 * @slot - Item content
 */
@customElement('shadcn-context-menu-checkbox-item')
export class ContextMenuCheckboxItem extends LitElement {
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
