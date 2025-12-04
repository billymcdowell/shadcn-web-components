import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens, focusRing } from '../../styles/index.js';

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

/**
 * A versatile button component with multiple variants and sizes.
 * 
 * @element shadcn-button
 * 
 * @fires button-click - Fired when the button is clicked
 * 
 * @slot - Button content
 * 
 * @cssprop --button-bg - Background color override
 * @cssprop --button-color - Text color override
 * @cssprop --button-border - Border color override
 */
@customElement('shadcn-button')
export class Button extends LitElement {
  static styles = [
    tokens,
    focusRing,
    css`
      :host {
        display: inline-block;
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-2);
        white-space: nowrap;
        font-weight: var(--font-medium);
        font-family: var(--font-sans);
        transition-property: color, background-color, border-color, box-shadow;
        transition-duration: var(--transition-fast);
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        border: 1px solid transparent;
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      .button:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .button:disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      /* Variants */
      .button--default {
        background-color: var(--button-bg, var(--primary));
        color: var(--button-color, var(--primary-foreground));
      }

      .button--default:hover:not(:disabled) {
        background-color: var(--button-bg, var(--primary));
        opacity: 0.9;
      }

      .button--destructive {
        background-color: var(--button-bg, var(--destructive));
        color: var(--button-color, var(--destructive-foreground));
      }

      .button--destructive:hover:not(:disabled) {
        background-color: var(--button-bg, var(--destructive));
        opacity: 0.9;
      }

      .button--outline {
        border-color: var(--button-border, var(--input));
        background-color: transparent;
        color: var(--button-color, var(--foreground));
      }

      .button--outline:hover:not(:disabled) {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      .button--secondary {
        background-color: var(--button-bg, var(--secondary));
        color: var(--button-color, var(--secondary-foreground));
      }

      .button--secondary:hover:not(:disabled) {
        background-color: var(--button-bg, var(--secondary));
        opacity: 0.8;
      }

      .button--ghost {
        background-color: transparent;
        color: var(--button-color, var(--foreground));
      }

      .button--ghost:hover:not(:disabled) {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      .button--link {
        background-color: transparent;
        color: var(--button-color, var(--primary));
        text-decoration: underline;
        text-underline-offset: 4px;
      }

      .button--link:hover:not(:disabled) {
        text-decoration: none;
      }

      /* Sizes */
      .button--sm {
        height: 2.25rem;
        padding: 0 var(--spacing-3);
        border-radius: var(--button-border-radius, var(--radius-md));
        font-size: var(--font-size-sm);
      }

      .button--default-size {
        height: 2.5rem;
        padding: 0 var(--spacing-4);
        border-radius: var(--button-border-radius, var(--radius-md));
        font-size: var(--font-size-sm);
      }

      .button--lg {
        height: 2.75rem;
        padding: 0 var(--spacing-8);
        border-radius: var(--button-border-radius, var(--radius-md));
        font-size: var(--font-size-base);
      }

      .button--icon {
        height: 2.5rem;
        width: 2.5rem;
        padding: 0;
        border-radius: var(--button-border-radius, var(--radius-md));
      }
    `,
  ];

  /**
   * Visual style variant of the button
   */
  @property({ type: String }) variant: ButtonVariant = 'default';

  /**
   * Size variant of the button
   */
  @property({ type: String }) size: ButtonSize = 'default';

  /**
   * Whether the button is disabled
   */
  @property({ type: Boolean }) disabled = false;

  /**
   * Button type attribute
   */
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    const sizeClass = this.size === 'default' ? 'default-size' : this.size;

    return html`
      <button
        part="button"
        class="button button--${this.variant} button--${sizeClass}"
        ?disabled=${this.disabled}
        type=${this.type}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.dispatchEvent(
      new CustomEvent('button-click', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: e },
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-button': Button;
  }
}
