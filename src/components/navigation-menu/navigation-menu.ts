import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * Navigation menu container.
 * 
 * @element shadcn-navigation-menu
 * 
 * @slot - Navigation menu list
 */
@customElement('shadcn-navigation-menu')
export class NavigationMenu extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
        position: relative;
        z-index: 10;
        max-width: max-content;
      }

      .navigation-menu {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
      }
    `,
    ];

    render() {
        return html`
      <nav class="navigation-menu" aria-label="Main">
        <slot></slot>
      </nav>
    `;
    }
}

/**
 * Navigation menu list.
 * 
 * @element shadcn-navigation-menu-list
 * 
 * @slot - List items
 */
@customElement('shadcn-navigation-menu-list')
export class NavigationMenuList extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      ul {
        display: flex;
        flex-direction: row;
        gap: var(--spacing-1);
        padding: 0;
        margin: 0;
        list-style: none;
        align-items: center;
      }
    `,
    ];

    render() {
        return html`
      <ul>
        <slot></slot>
      </ul>
    `;
    }
}

/**
 * Navigation menu item.
 * 
 * @element shadcn-navigation-menu-item
 * 
 * @slot - Trigger and Content
 */
@customElement('shadcn-navigation-menu-item')
export class NavigationMenuItem extends LitElement {
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
    private _closeTimer: number | null = null;

    render() {
        return html`
      <li 
        @mouseenter=${this._handleMouseEnter} 
        @mouseleave=${this._handleMouseLeave}
        @focusout=${this._handleFocusOut}
      >
        <slot></slot>
      </li>
    `;
    }

    private _handleMouseEnter() {
        if (this._closeTimer) {
            window.clearTimeout(this._closeTimer);
            this._closeTimer = null;
        }
        this._open = true;
        this._updateChildren();
    }

    private _handleMouseLeave() {
        this._closeTimer = window.setTimeout(() => {
            this._open = false;
            this._updateChildren();
        }, 150);
    }

    private _handleFocusOut(e: FocusEvent) {
        if (!this.contains(e.relatedTarget as Node)) {
            this._open = false;
            this._updateChildren();
        }
    }

    private _updateChildren() {
        const trigger = this.querySelector('shadcn-navigation-menu-trigger');
        const content = this.querySelector('shadcn-navigation-menu-content');

        if (trigger) {
            (trigger as NavigationMenuTrigger).open = this._open;
        }
        if (content) {
            (content as NavigationMenuContent).open = this._open;
        }
    }
}

/**
 * Navigation menu trigger.
 * 
 * @element shadcn-navigation-menu-trigger
 * 
 * @slot - Trigger text
 */
@customElement('shadcn-navigation-menu-trigger')
export class NavigationMenuTrigger extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-block;
      }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-1);
        border-radius: var(--radius-md);
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        line-height: var(--leading-none);
        padding: var(--spacing-2) var(--spacing-4);
        background-color: transparent;
        color: var(--foreground);
        border: none;
        cursor: pointer;
        transition: background-color var(--transition-fast), color var(--transition-fast);
        height: 2.5rem;
      }

      button:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      button:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .icon {
        transition: transform var(--transition-normal);
        width: 0.75rem;
        height: 0.75rem;
      }

      button[aria-expanded="true"] .icon {
        transform: rotate(180deg);
      }
    `,
    ];

    @property({ type: Boolean }) open = false;

    render() {
        return html`
      <button 
        aria-expanded=${this.open}
        aria-haspopup="true"
      >
        <slot></slot>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
    `;
    }
}

/**
 * Navigation menu content.
 * 
 * @element shadcn-navigation-menu-content
 * 
 * @slot - Content
 */
@customElement('shadcn-navigation-menu-content')
export class NavigationMenuContent extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        width: max-content;
        opacity: 0;
        pointer-events: none;
        transform-origin: top center;
        transform: translateY(-10px) scale(0.95);
        transition: opacity var(--transition-normal), transform var(--transition-normal);
        z-index: 50;
      }

      :host([open]) {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0) scale(1);
      }

      .content {
        margin-top: var(--spacing-1-5);
        background-color: var(--popover);
        color: var(--popover-foreground);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        padding: var(--spacing-4);
        min-width: 200px;
      }
    `,
    ];

    @property({ type: Boolean, reflect: true }) open = false;

    render() {
        return html`
      <div class="content">
        <slot></slot>
      </div>
    `;
    }
}

/**
 * Navigation menu link.
 * 
 * @element shadcn-navigation-menu-link
 * 
 * @slot - Link text
 */
@customElement('shadcn-navigation-menu-link')
export class NavigationMenuLink extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      a {
        display: block;
        padding: var(--spacing-2) var(--spacing-3);
        font-size: var(--font-size-sm);
        line-height: var(--leading-none);
        color: var(--foreground);
        text-decoration: none;
        border-radius: var(--radius-md);
        transition: background-color var(--transition-fast), color var(--transition-fast);
      }

      a:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      a:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }
    `,
    ];

    @property({ type: String }) href = '#';

    render() {
        return html`
      <a href=${this.href}>
        <slot></slot>
      </a>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-navigation-menu': NavigationMenu;
        'shadcn-navigation-menu-list': NavigationMenuList;
        'shadcn-navigation-menu-item': NavigationMenuItem;
        'shadcn-navigation-menu-trigger': NavigationMenuTrigger;
        'shadcn-navigation-menu-content': NavigationMenuContent;
        'shadcn-navigation-menu-link': NavigationMenuLink;
    }
}
