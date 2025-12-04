import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

export type SpinnerSize = 'sm' | 'default' | 'lg';

/**
 * A loading spinner component.
 * 
 * @element shadcn-spinner
 * 
 * @cssprop --spinner-color - Spinner color override
 */
@customElement('shadcn-spinner')
export class Spinner extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: inline-block;
      }

      .spinner {
        display: inline-block;
        border-radius: 50%;
        border: 2px solid var(--border);
        border-top-color: var(--spinner-color, var(--foreground));
        animation: spin 0.6s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .spinner {
          animation: none;
          border-top-color: var(--spinner-color, var(--foreground));
          border-right-color: var(--spinner-color, var(--foreground));
        }
      }

      .spinner--sm {
        width: 1rem;
        height: 1rem;
      }

      .spinner--default {
        width: 1.5rem;
        height: 1.5rem;
      }

      .spinner--lg {
        width: 2rem;
        height: 2rem;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
    `,
  ];

  /**
   * Size of the spinner
   */
  @property({ type: String }) size: SpinnerSize = 'default';

  render() {
    return html`
      <div
        part="spinner"
        class="spinner spinner--${this.size}"
        role="status"
        aria-label="Loading"
      >
        <span class="sr-only">Loading...</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-spinner': Spinner;
  }
}
