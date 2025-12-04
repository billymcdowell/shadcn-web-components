import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A two-state toggle button component.
 * 
 * @element shadcn-toggle
 * 
 * @fires toggle-change - Fired when the toggle state changes
 * 
 * @slot - Toggle content
 */
@customElement('shadcn-toggle')
export class Toggle extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: inline-block;
      }

      .toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-2);
        height: 2.5rem;
        padding: 0 var(--spacing-3);
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        font-family: var(--font-sans);
        background-color: transparent;
        color: var(--foreground);
        border: 1px solid var(--input);
        border-radius: var(--toggle-border-radius, var(--radius-md));
        cursor: pointer;
        transition: background-color var(--transition-fast), border-color var(--transition-fast);
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      .toggle:hover:not(.toggle--disabled) {
        background-color: var(--muted);
      }

      .toggle:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .toggle--pressed {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      .toggle--disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  ];

  /**
   * Whether the toggle is pressed
   */
  @property({ type: Boolean }) pressed = false;

  /**
   * Whether the toggle is disabled
   */
  @property({ type: Boolean }) disabled = false;

  /**
   * Value attribute
   */
  @property({ type: String }) value = '';

  render() {
    return html`
      <button
        part="toggle"
        class="toggle ${this.pressed ? 'toggle--pressed' : ''} ${this.disabled ? 'toggle--disabled' : ''}"
        role="button"
        aria-pressed=${this.pressed}
        aria-disabled=${this.disabled}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }

    this.pressed = !this.pressed;

    this.dispatchEvent(
      new CustomEvent('toggle-change', {
        bubbles: true,
        composed: true,
        detail: { pressed: this.pressed, value: this.value },
      })
    );
  }

  /**
   * Focus the toggle
   */
  focus() {
    this.shadowRoot?.querySelector<HTMLElement>('.toggle')?.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-toggle': Toggle;
  }
}
