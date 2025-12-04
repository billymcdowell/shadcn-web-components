import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * An empty state component for displaying when no content is available.
 * 
 * @element shadcn-empty
 * 
 * @slot icon - Optional icon slot
 * @slot title - Title text slot
 * @slot description - Description text slot
 * @slot action - Optional action button slot
 */
@customElement('shadcn-empty')
export class Empty extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }

      .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--spacing-12) var(--spacing-6);
        gap: var(--spacing-4);
      }

      .empty__icon {
        color: var(--muted-foreground);
        opacity: 0.5;
      }

      .empty__title {
        font-size: var(--font-size-lg);
        font-weight: var(--font-semibold);
        color: var(--foreground);
        margin: 0;
      }

      .empty__description {
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
        max-width: 28rem;
        margin: 0;
      }

      .empty__action {
        margin-top: var(--spacing-2);
      }
    `,
  ];

  /**
   * Heading text (alternative to using title slot)
   */
  @property({ type: String }) heading?: string;

  /**
   * Description text (alternative to using description slot)
   */
  @property({ type: String }) description?: string;

  render() {
    return html`
      <div part="empty" class="empty">
        <div class="empty__icon">
          <slot name="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          </slot>
        </div>
        
        <div class="empty__content">
          <h3 class="empty__title">
            <slot name="title">${this.heading || 'No results found'}</slot>
          </h3>
          
          ${this.description || html`<slot name="description"></slot>`
        ? html`
              <p class="empty__description">
                <slot name="description">${this.description}</slot>
              </p>
            `
        : ''}
        </div>
        
        <div class="empty__action">
          <slot name="action"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-empty': Empty;
  }
}
