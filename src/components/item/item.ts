import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A generic list item component for use in menus, selects, and command palettes.
 * 
 * @element shadcn-item
 * 
 * @fires item-click - Fired when the item is clicked
 * 
 * @slot - Item content
 * @slot icon - Optional icon slot (start)
 * @slot suffix - Optional suffix content (end)
 * 
 * @cssprop --item-bg - Background color override
 * @cssprop --item-color - Text color override
 */
@customElement('shadcn-item')
export class Item extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      .item {
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
        padding: var(--spacing-2) var(--spacing-3);
        font-size: var(--font-size-sm);
        color: var(--item-color, var(--foreground));
        cursor: pointer;
        user-select: none;
        border-radius: var(--radius-sm);
        transition: background-color var(--transition-fast);
      }

      .item:hover:not(.item--disabled) {
        background-color: var(--item-bg, var(--accent));
        color: var(--accent-foreground);
      }

      .item--disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .item--selected {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      .item__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .item__content {
        flex: 1;
        min-width: 0;
      }

      .item__suffix {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        color: var(--muted-foreground);
      }
    `,
    ];

    /**
     * Whether the item is disabled
     */
    @property({ type: Boolean }) disabled = false;

    /**
     * Whether the item is selected
     */
    @property({ type: Boolean }) selected = false;

    render() {
        return html`
      <div
        part="item"
        class="item ${this.disabled ? 'item--disabled' : ''} ${this.selected ? 'item--selected' : ''}"
        role="option"
        aria-disabled=${this.disabled}
        aria-selected=${this.selected}
        @click=${this._handleClick}
      >
        <div class="item__icon">
          <slot name="icon"></slot>
        </div>
        <div class="item__content">
          <slot></slot>
        </div>
        <div class="item__suffix">
          <slot name="suffix"></slot>
        </div>
      </div>
    `;
    }

    private _handleClick(e: MouseEvent) {
        if (this.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        this.dispatchEvent(
            new CustomEvent('item-click', {
                bubbles: true,
                composed: true,
                detail: { originalEvent: e },
            })
        );
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-item': Item;
    }
}
