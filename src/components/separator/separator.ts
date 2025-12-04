import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A separator component for visually dividing content.
 * 
 * @element shadcn-separator
 * 
 * @cssprop --separator-color - Separator color override
 */
@customElement('shadcn-separator')
export class Separator extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      .separator {
        background-color: var(--separator-color, var(--border));
        flex-shrink: 0;
      }

      .separator--horizontal {
        height: 1px;
        width: 100%;
      }

      .separator--vertical {
        width: 1px;
        height: 100%;
        align-self: stretch;
      }
    `,
    ];

    /**
     * Orientation of the separator
     */
    @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';

    /**
     * Whether the separator is decorative (no semantic meaning)
     */
    @property({ type: Boolean }) decorative = false;

    render() {
        return html`
      <div
        part="separator"
        class="separator separator--${this.orientation}"
        role=${this.decorative ? 'none' : 'separator'}
        aria-orientation=${this.orientation}
      ></div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-separator': Separator;
    }
}
