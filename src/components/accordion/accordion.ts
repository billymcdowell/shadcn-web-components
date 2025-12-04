import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * An accordion item component.
 * 
 * @element shadcn-accordion-item
 * 
 * @slot - Accordion content
 * @slot trigger - Trigger button content
 */
@customElement('shadcn-accordion-item')
export class AccordionItem extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      .accordion-item {
        border-bottom: 1px solid var(--border);
      }

      .accordion-trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-4) 0;
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        background: none;
        border: none;
        width: 100%;
        text-align: left;
        cursor: pointer;
        color: var(--foreground);
        transition: all var(--transition-fast);
        font-family: var(--font-sans);
      }

      .accordion-trigger:hover {
        text-decoration: underline;
      }

      .accordion-trigger:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
        border-radius: var(--radius-sm);
      }

      .accordion-icon {
        transition: transform var(--transition-normal);
        flex-shrink: 0;
      }

      .accordion-trigger[aria-expanded="true"] .accordion-icon {
        transform: rotate(180deg);
      }

      .accordion-content {
        overflow: hidden;
        max-height: 0;
        transition: max-height var(--transition-normal);
      }

      .accordion-content--open {
        max-height: 1000px;
      }

      .accordion-content__inner {
        padding-bottom: var(--spacing-4);
        font-size: var(--font-size-sm);
        color: var(--foreground);
      }
    `,
    ];

    @property({ type: Boolean }) open = false;
    @property({ type: String }) value = '';

    render() {
        return html`
      <div part="accordion-item" class="accordion-item">
        <button
          part="accordion-trigger"
          class="accordion-trigger"
          aria-expanded=${this.open}
          @click=${this._handleClick}
        >
          <slot name="trigger"></slot>
          <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div part="accordion-content" class="accordion-content ${this.open ? 'accordion-content--open' : ''}">
          <div class="accordion-content__inner">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
    }

    private _handleClick() {
        this.dispatchEvent(
            new CustomEvent('accordion-item-toggle', {
                bubbles: true,
                composed: true,
                detail: { value: this.value, open: !this.open },
            })
        );
    }
}

/**
 * Container for accordion items.
 * 
 * @element shadcn-accordion
 * 
 * @fires accordion-change - Fired when accordion selection changes
 * 
 * @slot - Accordion items
 */
@customElement('shadcn-accordion')
export class Accordion extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      .accordion {
        border-top: 1px solid var(--border);
      }
    `,
    ];

    @property({ type: String }) type: 'single' | 'multiple' = 'single';
    @property({ type: String }) value = '';
    @property({ type: Boolean }) collapsible = false;

    render() {
        return html`
      <div part="accordion" class="accordion" @accordion-item-toggle=${this._handleItemToggle}>
        <slot></slot>
      </div>
    `;
    }

    private _handleItemToggle(e: Event) {
        const item = e.target as AccordionItem;
        const itemValue = item.value;

        if (this.type === 'single') {
            // Single mode: only one item can be open
            if (this.value === itemValue) {
                // Clicking the open item
                this.value = this.collapsible ? '' : itemValue;
            } else {
                this.value = itemValue;
            }
        } else {
            // Multiple mode: track array of open items
            const values = this.value ? this.value.split(',') : [];
            const index = values.indexOf(itemValue);

            if (index === -1) {
                values.push(itemValue);
            } else {
                values.splice(index, 1);
            }

            this.value = values.join(',');
        }

        this._updateItems();

        this.dispatchEvent(
            new CustomEvent('accordion-change', {
                bubbles: true,
                composed: true,
                detail: { value: this.value },
            })
        );
    }

    private _updateItems() {
        const items = this._getItems();
        const values = this.value ? this.value.split(',') : [];

        items.forEach(item => {
            if (this.type === 'single') {
                item.open = item.value === this.value;
            } else {
                item.open = values.includes(item.value);
            }
        });
    }

    private _getItems(): AccordionItem[] {
        const slot = this.shadowRoot?.querySelector('slot');
        if (!slot) return [];

        const nodes = slot.assignedElements({ flatten: true });
        return nodes.filter((node): node is AccordionItem => node.tagName.toLowerCase() === 'shadcn-accordion-item');
    }

    updated(changedProperties: Map<string, unknown>) {
        if (changedProperties.has('value')) {
            this._updateItems();
        }
    }

    firstUpdated() {
        this._updateItems();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-accordion': Accordion;
        'shadcn-accordion-item': AccordionItem;
    }
}
