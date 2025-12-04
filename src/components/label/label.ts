import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * An accessible form label component.
 * 
 * @element shadcn-label
 * 
 * @slot - Label text content
 * 
 * @cssprop --label-color - Label text color override
 */
@customElement('shadcn-label')
export class Label extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-block;
      }

      .label {
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        line-height: var(--leading-none);
        color: var(--label-color, var(--foreground));
        cursor: default;
        user-select: none;
      }

      .label:has(+ :disabled) {
        cursor: not-allowed;
        opacity: 0.7;
      }
    `,
    ];

    /**
     * The ID of the form control this label is for
     */
    @property({ type: String }) for?: string;

    render() {
        return html`
      <label
        part="label"
        class="label"
        for=${this.for || ''}
      >
        <slot></slot>
      </label>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-label': Label;
    }
}
