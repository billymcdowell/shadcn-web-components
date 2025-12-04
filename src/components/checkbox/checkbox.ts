import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A checkbox input component.
 * 
 * @element shadcn-checkbox
 * 
 * @fires checkbox-change - Fired when the checked state changes
 * 
 * @cssprop --checkbox-bg - Background color override
 * @cssprop --checkbox-border - Border color override
 */
@customElement('shadcn-checkbox')
export class Checkbox extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-block;
      }

      .checkbox-wrapper {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-2);
      }

      .checkbox {
        flex-shrink: 0;
        width: 1rem;
        height: 1rem;
        border: 1px solid var(--checkbox-border, var(--primary));
        border-radius: var(--radius-sm);
        background-color: var(--checkbox-bg, transparent);
        cursor: pointer;
        transition: background-color var(--transition-fast), border-color var(--transition-fast);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .checkbox:hover:not(.checkbox--disabled) {
        background-color: var(--accent);
      }

      .checkbox:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .checkbox--checked {
        background-color: var(--primary);
        border-color: var(--primary);
      }

      .checkbox--disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .checkbox__icon {
        color: var(--primary-foreground);
        width: 0.75rem;
        height: 0.75rem;
        opacity: 0;
        transform: scale(0);
        transition: opacity var(--transition-fast), transform var(--transition-fast);
      }

      .checkbox--checked .checkbox__icon {
        opacity: 1;
        transform: scale(1);
      }

      .checkbox__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
    `,
    ];

    @query('.checkbox__input') inputElement!: HTMLInputElement;

    /**
     * Whether the checkbox is checked
     */
    @property({ type: Boolean }) checked = false;

    /**
     * Whether the checkbox is disabled
     */
    @property({ type: Boolean }) disabled = false;

    /**
     * Whether the checkbox is required
     */
    @property({ type: Boolean }) required = false;

    /**
     * Name attribute
     */
    @property({ type: String }) name = '';

    /**
     * Value attribute
     */
    @property({ type: String }) value = '';

    render() {
        return html`
      <div class="checkbox-wrapper">
        <div
          part="checkbox"
          class="checkbox ${this.checked ? 'checkbox--checked' : ''} ${this.disabled ? 'checkbox--disabled' : ''}"
          role="checkbox"
          aria-checked=${this.checked}
          aria-disabled=${this.disabled}
          tabindex=${this.disabled ? '-1' : '0'}
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
        >
          <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <input
            class="checkbox__input"
            type="checkbox"
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
        if (this.disabled) {
            e.preventDefault();
            return;
        }
        this._toggle();
    }

    private _handleKeyDown(e: KeyboardEvent) {
        if (this.disabled) return;

        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this._toggle();
        }
    }

    private _toggle() {
        this.checked = !this.checked;

        this.dispatchEvent(
            new CustomEvent('checkbox-change', {
                bubbles: true,
                composed: true,
                detail: { checked: this.checked, value: this.value },
            })
        );
    }

    /**
     * Focus the checkbox
     */
    focus() {
        this.shadowRoot?.querySelector<HTMLElement>('.checkbox')?.focus();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-checkbox': Checkbox;
    }
}
