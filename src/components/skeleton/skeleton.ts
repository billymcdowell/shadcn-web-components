import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A skeleton loading component for placeholder content.
 * 
 * @element shadcn-skeleton
 * 
 * @cssprop --skeleton-bg - Skeleton background color
 */
@customElement('shadcn-skeleton')
export class Skeleton extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      .skeleton {
        background-color: var(--skeleton-bg, var(--muted));
        border-radius: var(--skeleton-radius, var(--radius-md));
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .skeleton {
          animation: none;
        }
      }

      .skeleton--circle {
        border-radius: var(--radius-full);
      }

      .skeleton--text {
        height: 1rem;
      }

      .skeleton--heading {
        height: 2rem;
      }

      .skeleton--avatar {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: var(--radius-full);
      }

      .skeleton--button {
        height: 2.5rem;
        width: 6rem;
      }

      .skeleton--card {
        min-height: 200px;
      }
    `,
    ];

    /**
     * Variant of the skeleton
     */
    @property({ type: String }) variant: 'default' | 'circle' | 'text' | 'heading' | 'avatar' | 'button' | 'card' = 'default';

    /**
     * Width override
     */
    @property({ type: String }) width = '';

    /**
     * Height override
     */
    @property({ type: String }) height = '';

    render() {
        const styles = [];
        if (this.width) styles.push(`width: ${this.width}`);
        if (this.height) styles.push(`height: ${this.height}`);

        return html`
      <div
        part="skeleton"
        class="skeleton ${this.variant !== 'default' ? `skeleton--${this.variant}` : ''}"
        style=${styles.join('; ')}
        aria-busy="true"
        aria-live="polite"
      ></div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-skeleton': Skeleton;
    }
}
