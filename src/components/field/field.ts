import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A form field wrapper that combines label, input, helper text, and error message.
 * 
 * @element shadcn-field
 * 
 * @slot label - Label content
 * @slot - Main form control (input, select, etc.)
 * @slot helper - Helper text slot
 * @slot error - Error message slot
 */
@customElement('shadcn-field')
export class Field extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2);
      }

      .field__label {
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        color: var(--foreground);
      }

      .field__helper {
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
      }

      .field__error {
        font-size: var(--font-size-sm);
        color: var(--destructive);
      }

      .field--error .field__label {
        color: var(--destructive);
      }
    `,
    ];

    /**
     * Label text (alternative to using label slot)
     */
    @property({ type: String }) label?: string;

    /**
     * Helper text (alternative to using helper slot)
     */
    @property({ type: String }) helper?: string;

    /**
     * Error message (alternative to using error slot)
     */
    @property({ type: String }) error?: string;

    /**
     * Whether the field is required
     */
    @property({ type: Boolean }) required = false;

    render() {
        const hasError = Boolean(this.error) || this.querySelector('[slot="error"]');

        return html`
      <div part="field" class="field ${hasError ? 'field--error' : ''}">
        ${this.label || this.querySelector('[slot="label"]')
                ? html`
            <div class="field__label">
              <slot name="label">${this.label}${this.required ? html`<span style="color: var(--destructive);"> *</span>` : ''}</slot>
            </div>
          `
                : ''}
        
        <div class="field__control">
          <slot></slot>
        </div>
        
        ${this.helper && !hasError
                ? html`
            <div class="field__helper">
              <slot name="helper">${this.helper}</slot>
            </div>
          `
                : ''}
        
        ${hasError
                ? html`
            <div class="field__error">
              <slot name="error">${this.error}</slot>
            </div>
          `
                : ''}
      </div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-field': Field;
    }
}
