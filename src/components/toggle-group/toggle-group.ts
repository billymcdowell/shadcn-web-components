import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';
import type { Toggle } from '../toggle/toggle.js';

/**
 * A container for grouping toggle buttons with support for single or multiple selection.
 * 
 * @element shadcn-toggle-group
 * 
 * @fires toggle-group-change - Fired when the selection changes
 * 
 * @slot - Toggle buttons
 */
@customElement('shadcn-toggle-group')
export class ToggleGroup extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-flex;
      }

      .toggle-group {
        display: inline-flex;
        gap: 0;
        position: relative;
      }

      .toggle-group--vertical {
        flex-direction: column;
      }

      /* Merge adjacent borders */
      .toggle-group--horizontal ::slotted(:not(:first-child)) {
        margin-left: -1px;
      }

      .toggle-group--vertical ::slotted(:not(:first-child)) {
        margin-top: -1px;
      }

      /* Set border radius via CSS custom properties for horizontal groups */
      .toggle-group--horizontal ::slotted(*:first-child) {
        --toggle-border-radius: var(--radius-md) 0 0 var(--radius-md);
      }

      .toggle-group--horizontal ::slotted(*:last-child) {
        --toggle-border-radius: 0 var(--radius-md) var(--radius-md) 0;
      }

      .toggle-group--horizontal ::slotted(*:only-child) {
        --toggle-border-radius: var(--radius-md);
      }

      .toggle-group--horizontal ::slotted(*:not(:first-child):not(:last-child)) {
        --toggle-border-radius: 0;
      }

      /* Set border radius via CSS custom properties for vertical groups */
      .toggle-group--vertical ::slotted(*:first-child) {
        --toggle-border-radius: var(--radius-md) var(--radius-md) 0 0;
      }

      .toggle-group--vertical ::slotted(*:last-child) {
        --toggle-border-radius: 0 0 var(--radius-md) var(--radius-md);
      }

      .toggle-group--vertical ::slotted(*:only-child) {
        --toggle-border-radius: var(--radius-md);
      }

      .toggle-group--vertical ::slotted(*:not(:first-child):not(:last-child)) {
        --toggle-border-radius: 0;
      }

      /* Ensure pressed/focused toggles appear on top */
      ::slotted(*:hover),
      ::slotted(*:focus-within) {
        position: relative;
        z-index: 1;
      }
    `,
    ];

    /**
     * Selection type: single or multiple
     */
    @property({ type: String }) type: 'single' | 'multiple' = 'single';

    /**
     * Currently selected value(s) - comma-separated for multiple
     */
    @property({ type: String }) value = '';

    /**
     * Orientation of the toggle group
     */
    @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';

    /**
     * Whether the toggle group is disabled
     */
    @property({ type: Boolean }) disabled = false;

    render() {
        return html`
      <div
        part="toggle-group"
        class="toggle-group toggle-group--${this.orientation}"
        role="group"
        @toggle-change=${this._handleToggleChange}
      >
        <slot></slot>
      </div>
    `;
    }

    private _handleToggleChange(e: Event) {
        const toggle = e.target as Toggle;
        const toggleValue = toggle.value;

        if (this.type === 'single') {
            // Single selection: only one toggle can be pressed
            this.value = toggle.pressed ? toggleValue : '';
        } else {
            // Multiple selection: maintain array of pressed values
            const values = this.value ? this.value.split(',') : [];
            const index = values.indexOf(toggleValue);

            if (toggle.pressed && index === -1) {
                values.push(toggleValue);
            } else if (!toggle.pressed && index !== -1) {
                values.splice(index, 1);
            }

            this.value = values.join(',');
        }

        this._updateToggles();

        this.dispatchEvent(
            new CustomEvent('toggle-group-change', {
                bubbles: true,
                composed: true,
                detail: {
                    value: this.value,
                    values: this.value ? this.value.split(',') : [],
                },
            })
        );
    }

    private _updateToggles() {
        const toggles = this._getToggles();
        const values = this.value ? this.value.split(',') : [];

        toggles.forEach(toggle => {
            if (this.type === 'single') {
                toggle.pressed = toggle.value === this.value;
            } else {
                toggle.pressed = values.includes(toggle.value);
            }
            toggle.disabled = this.disabled || toggle.disabled;
        });
    }

    private _getToggles(): Toggle[] {
        const slot = this.shadowRoot?.querySelector('slot');
        if (!slot) return [];

        const nodes = slot.assignedElements({ flatten: true });
        return nodes.filter((node): node is Toggle => node.tagName.toLowerCase() === 'shadcn-toggle');
    }

    updated(changedProperties: Map<string, unknown>) {
        if (changedProperties.has('value') || changedProperties.has('disabled') || changedProperties.has('type')) {
            this._updateToggles();
        }
    }

    firstUpdated() {
        this._updateToggles();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-toggle-group': ToggleGroup;
    }
}
