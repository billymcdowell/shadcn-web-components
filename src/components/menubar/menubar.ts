import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * Menubar container.
 * 
 * @element shadcn-menubar
 * 
 * @slot - Menubar menus
 */
@customElement('shadcn-menubar')
export class Menubar extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-block;
      }

      .menubar {
        display: flex;
        height: 2.5rem;
        align-items: center;
        gap: var(--spacing-1);
        padding: var(--spacing-1);
        background-color: var(--background);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
      }
    `,
    ];

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('menubar-menu-open', this._handleMenuOpen as EventListener);
        this.addEventListener('keydown', this._handleKeyDown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('menubar-menu-open', this._handleMenuOpen as EventListener);
        this.removeEventListener('keydown', this._handleKeyDown);
    }

    render() {
        return html`
      <div class="menubar" role="menubar">
        <slot></slot>
      </div>
    `;
    }

    private _triggers(): MenubarTrigger[] {
        return Array.from(this.querySelectorAll('shadcn-menubar-trigger'))
            .filter((trigger): trigger is MenubarTrigger => trigger instanceof MenubarTrigger);
    }

    private _focusedTriggerIndex(): number {
        const triggers = this._triggers();
        const activeElement = document.activeElement;
        return triggers.findIndex((trigger) => trigger.contains(activeElement) || trigger.shadowRoot?.contains(activeElement));
    }

    private _handleMenuOpen = (event: Event) => {
        const openedMenu = event.target;
        const menus = Array.from(this.querySelectorAll('shadcn-menubar-menu'))
            .filter((menu): menu is MenubarMenu => menu instanceof MenubarMenu);

        for (const menu of menus) {
            if (menu !== openedMenu) {
                menu.closeMenu(false);
            }
        }
    };

    private _handleKeyDown = (event: KeyboardEvent) => {
        const triggers = this._triggers();
        if (triggers.length === 0) {
            return;
        }

        const focusedIndex = this._focusedTriggerIndex();
        if (focusedIndex === -1) {
            return;
        }

        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            const direction = event.key === 'ArrowRight' ? 1 : -1;
            const nextIndex = (focusedIndex + direction + triggers.length) % triggers.length;
            triggers[nextIndex]?.focusTrigger();
            return;
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const menu = triggers[focusedIndex]?.closest('shadcn-menubar-menu') as MenubarMenu | null;
            menu?.openMenu();
        }
    };
}

/**
 * Menubar menu (wrapper for trigger and content).
 * 
 * @element shadcn-menubar-menu
 * 
 * @slot - Trigger and Content
 */
@customElement('shadcn-menubar-menu')
export class MenubarMenu extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
        position: relative;
      }
    `,
    ];

    @state() private _open = false;

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('select', this._handleItemSelect as EventListener);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('select', this._handleItemSelect as EventListener);
        document.removeEventListener('keydown', this._handleDocumentKeyDown);
    }

    render() {
        return html`
      <div 
        @click=${this._handleClick}
        @focusout=${this._handleFocusOut}
      >
        <slot></slot>
      </div>
    `;
    }

    private _handleClick(e: Event) {
        // Simple toggle logic for now. 
        // In a real app, this would coordinate with other menus in the bar.
        const trigger = e.target as HTMLElement;
        if (trigger.tagName.toLowerCase() === 'shadcn-menubar-trigger') {
            if (this._open) {
                this.closeMenu();
            } else {
                this.openMenu();
            }
        }
    }

    private _handleFocusOut(e: FocusEvent) {
        if (!this.contains(e.relatedTarget as Node)) {
            this._open = false;
            this._updateChildren();
            document.removeEventListener('keydown', this._handleDocumentKeyDown);
        }
    }

    private _handleItemSelect = () => {
        this.closeMenu();
    };

    private _handleDocumentKeyDown = (event: KeyboardEvent) => {
        if (!this._open) {
            return;
        }

        const content = this.querySelector('shadcn-menubar-content') as MenubarContent | null;

        switch (event.key) {
            case 'Escape':
                event.preventDefault();
                this.closeMenu();
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

    openMenu(): void {
        this._open = true;
        this._updateChildren();
        this.dispatchEvent(new CustomEvent('menubar-menu-open', { bubbles: true, composed: true }));
        document.addEventListener('keydown', this._handleDocumentKeyDown);

        requestAnimationFrame(() => {
            const content = this.querySelector('shadcn-menubar-content') as MenubarContent | null;
            content?.focusFirst();
        });
    }

    closeMenu(returnFocus = true): void {
        if (!this._open) {
            return;
        }

        this._open = false;
        this._updateChildren();
        document.removeEventListener('keydown', this._handleDocumentKeyDown);

        if (returnFocus) {
            const trigger = this.querySelector('shadcn-menubar-trigger') as MenubarTrigger | null;
            trigger?.focusTrigger();
        }
    }

    private _updateChildren() {
        const content = this.querySelector('shadcn-menubar-content');
        if (content) {
            (content as MenubarContent).open = this._open;
        }

        const trigger = this.querySelector('shadcn-menubar-trigger');
        if (trigger) {
            trigger.setAttribute('data-state', this._open ? 'open' : 'closed');
            trigger.setAttribute('aria-expanded', String(this._open));
            trigger.setAttribute('aria-haspopup', 'menu');
            const button = trigger.shadowRoot?.querySelector<HTMLButtonElement>('button');
            button?.setAttribute('aria-expanded', String(this._open));
            button?.setAttribute('aria-haspopup', 'menu');
        }
    }
}

/**
 * Menubar trigger.
 * 
 * @element shadcn-menubar-trigger
 * 
 * @slot - Trigger text
 */
@customElement('shadcn-menubar-trigger')
export class MenubarTrigger extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-block;
      }

      button {
        display: flex;
        align-items: center;
        padding: var(--spacing-1-5) var(--spacing-3);
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        background: transparent;
        border: none;
        border-radius: var(--radius-sm);
        color: var(--foreground);
        cursor: default;
        outline: none;
      }

      button:hover,
      :host([data-state="open"]) button {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }
      
      :host([data-state="open"]) button {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }
    `,
    ];

    render() {
        return html`
      <button type="button" role="menuitem" aria-haspopup="true" aria-expanded=${this.getAttribute('aria-expanded') ?? 'false'}>
        <slot></slot>
      </button>
    `;
    }

    focusTrigger(): void {
        this.shadowRoot?.querySelector<HTMLButtonElement>('button')?.focus();
    }
}

/**
 * Menubar content.
 * 
 * @element shadcn-menubar-content
 * 
 * @slot - Menu items
 */
@customElement('shadcn-menubar-content')
export class MenubarContent extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 50;
        min-width: 12rem;
        margin-top: var(--spacing-1);
      }

      :host([open]) {
        display: block;
      }

      .content {
        padding: var(--spacing-1);
        background-color: var(--popover);
        color: var(--popover-foreground);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        overflow: hidden;
        transform-origin: top;
      }

      :host([open]) .content { animation: shadcn-zoom-in var(--transition-fast); }
      @media (prefers-reduced-motion: reduce) { .content { animation: none; } }
    `,
    ];

    @property({ type: Boolean, reflect: true }) open = false;

    render() {
        return html`
      <div class="content" role="menu">
        <slot></slot>
      </div>
    `;
    }

    private _items(): Array<MenubarItem | MenubarCheckboxItem> {
        return Array.from(this.querySelectorAll('shadcn-menubar-item, shadcn-menubar-checkbox-item'))
            .filter((item): item is MenubarItem | MenubarCheckboxItem => {
                return item instanceof MenubarItem || item instanceof MenubarCheckboxItem;
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
 * Menubar item.
 * 
 * @element shadcn-menubar-item
 * 
 * @slot - Item content
 * @slot shortcut - Keyboard shortcut
 */
@customElement('shadcn-menubar-item')
export class MenubarItem extends LitElement {
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
 * Menubar separator.
 * 
 * @element shadcn-menubar-separator
 */
@customElement('shadcn-menubar-separator')
export class MenubarSeparator extends LitElement {
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
 * Menubar label.
 * 
 * @element shadcn-menubar-label
 * 
 * @slot - Label text
 */
@customElement('shadcn-menubar-label')
export class MenubarLabel extends LitElement {
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
 * Menubar checkbox item.
 * 
 * @element shadcn-menubar-checkbox-item
 * 
 * @slot - Item content
 */
@customElement('shadcn-menubar-checkbox-item')
export class MenubarCheckboxItem extends LitElement {
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
        'shadcn-menubar': Menubar;
        'shadcn-menubar-menu': MenubarMenu;
        'shadcn-menubar-trigger': MenubarTrigger;
        'shadcn-menubar-content': MenubarContent;
        'shadcn-menubar-item': MenubarItem;
        'shadcn-menubar-separator': MenubarSeparator;
        'shadcn-menubar-label': MenubarLabel;
        'shadcn-menubar-checkbox-item': MenubarCheckboxItem;
    }
}
