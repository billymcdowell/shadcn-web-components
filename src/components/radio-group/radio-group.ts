import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A radio button component for use within a radio group.
 * 
 * @element shadcn-radio
 * 
 * @fires radio-change - Fired when this radio is selected
 * 
 * @slot - Radio label content
 */
@customElement('shadcn-radio')
export class Radio extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-block;
      }

      .radio-wrapper {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-2);
      }

      .radio {
        flex-shrink: 0;
        width: 1rem;
        height: 1rem;
        border: 1px solid var(--primary);
        border-radius: var(--radius-full);
        background-color: transparent;
        cursor: pointer;
        transition: background-color var(--transition-fast), border-color var(--transition-fast);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .radio:hover:not(.radio--disabled) {
        background-color: var(--accent);
      }

      .radio:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .radio--checked {
        border-color: var(--primary);
      }

      .radio--disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .radio__indicator {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: var(--radius-full);
        background-color: var(--primary);
        opacity: 0;
        transform: scale(0);
        transition: opacity var(--transition-fast), transform var(--transition-fast);
      }

      .radio--checked .radio__indicator {
        opacity: 1;
        transform: scale(1);
      }

      .radio__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
    `,
    ];

    /**
     * Whether the radio is checked
     */
    @property({ type: Boolean }) checked = false;

    /**
     * Whether the radio is disabled
     */
    @property({ type: Boolean }) disabled = false;

    /**
     * Whether the radio is required
     */
    @property({ type: Boolean }) required = false;

    /**
     * Name attribute (should match other radios in group)
     */
    @property({ type: String }) name = '';

    /**
     * Value attribute
     */
    @property({ type: String }) value = '';

    render() {
        return html`
      <div class="radio-wrapper">
        <div
          part="radio"
          class="radio ${this.checked ? 'radio--checked' : ''} ${this.disabled ? 'radio--disabled' : ''}"
          role="radio"
          aria-checked=${this.checked}
          aria-disabled=${this.disabled}
          tabindex=${this.disabled ? '-1' : '0'}
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
        >
          <div class="radio__indicator"></div>
          <input
            class="radio__input"
            type="radio"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            name=${this.name}
            value=${this.value}
            aria-hidden="true"
            tabindex="-1"
          />
        </div>
        <slot></slot>
      </div>
    `;
    }

    private _handleClick(e: MouseEvent) {
        if (this.disabled || this.checked) {
            e.preventDefault();
            return;
        }
        this._select();
    }

    private _handleKeyDown(e: KeyboardEvent) {
        if (this.disabled) return;

        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (!this.checked) {
                this._select();
            }
        }
    }

    private _select() {
        this.checked = true;

        this.dispatchEvent(
            new CustomEvent('radio-change', {
                bubbles: true,
                composed: true,
                detail: { value: this.value, checked: true },
            })
        );
    }

    /**
     * Focus the radio
     */
    focus() {
        this.shadowRoot?.querySelector<HTMLElement>('.radio')?.focus();
    }
}

/**
 * A radio group component for managing a set of radio buttons.
 * 
 * @element shadcn-radio-group
 * 
 * @fires radio-group-change - Fired when the selected radio changes
 * 
 * @slot - Radio buttons
 */
@customElement('shadcn-radio-group')
export class RadioGroup extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      .radio-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-3);
      }

      .radio-group--horizontal {
        flex-direction: row;
      }
    `,
    ];

    /**
     * Current selected value
     */
    @property({ type: String }) value = '';

    /**
     * Name for all radios in this group
     */
    @property({ type: String }) name = '';

    /**
     * Orientation of the radio group
     */
    @property({ type: String }) orientation: 'vertical' | 'horizontal' = 'vertical';

    /**
     * Whether the radio group is disabled
     */
    @property({ type: Boolean }) disabled = false;

    /**
     * Whether selection is required
     */
    @property({ type: Boolean }) required = false;

    render() {
        return html`
      <div
        part="radio-group"
        class="radio-group ${this.orientation === 'horizontal' ? 'radio-group--horizontal' : ''}"
        role="radiogroup"
        aria-required=${this.required}
        @radio-change=${this._handleRadioChange}
      >
        <slot></slot>
      </div>
    `;
    }

    private _handleRadioChange(e: Event) {
        const radio = e.target as Radio;
        this.value = radio.value;

        // Update all radios in the group
        this._updateRadios();

        this.dispatchEvent(
            new CustomEvent('radio-group-change', {
                bubbles: true,
                composed: true,
                detail: { value: this.value },
            })
        );
    }

    private _updateRadios() {
        const radios = this._getRadios();
        radios.forEach(radio => {
            radio.checked = radio.value === this.value;
            radio.name = this.name;
            radio.disabled = this.disabled || radio.disabled;
            radio.required = this.required;
        });
    }

    private _getRadios(): Radio[] {
        const slot = this.shadowRoot?.querySelector('slot');
        if (!slot) return [];

        const nodes = slot.assignedElements({ flatten: true });
        return nodes.filter((node): node is Radio => node.tagName.toLowerCase() === 'shadcn-radio');
    }

    updated(changedProperties: Map<string, unknown>) {
        if (changedProperties.has('value') || changedProperties.has('name') || changedProperties.has('disabled')) {
            this._updateRadios();
        }
    }

    firstUpdated() {
        this._updateRadios();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-radio': Radio;
        'shadcn-radio-group': RadioGroup;
    }
}
