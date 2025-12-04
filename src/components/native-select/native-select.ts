import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tokens, focusRing } from '../../styles/index.js';

/**
 * A styled native select element.
 * 
 * @element shadcn-native-select
 * 
 * @fires select-change - Fired when the selection changes
 * 
 * @slot - Option elements
 * 
 * @cssprop --select-bg - Background color override
 * @cssprop --select-color - Text color override
 * @cssprop --select-border - Border color override
 */
@customElement('shadcn-native-select')
export class NativeSelect extends LitElement {
  static styles = [
    tokens,
    focusRing,
    css`
      :host {
        display: block;
      }

      .select-wrapper {
        position: relative;
        display: inline-block;
        width: 100%;
      }

      .select {
        appearance: none;
        display: flex;
        width: 100%;
        height: 2.5rem;
        padding: 0 var(--spacing-8) 0 var(--spacing-3);
        font-size: var(--font-size-sm);
        font-family: var(--font-sans);
        background-color: var(--select-bg, var(--background));
        color: var(--select-color, var(--foreground));
        border: 1px solid var(--select-border, var(--input));
        border-radius: var(--radius-md);
        outline: 2px solid transparent;
        outline-offset: 2px;
        transition: border-color var(--transition-fast), outline var(--transition-fast);
        cursor: pointer;
      }

      .select:focus {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .select:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .select-icon {
        position: absolute;
        right: var(--spacing-3);
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        color: var(--muted-foreground);
      }
    `,
  ];

  @query('.select') selectElement!: HTMLSelectElement;

  /**
   * Select value
   */
  @property({ type: String }) value = '';

  /**
   * Whether the select is disabled
   */
  @property({ type: Boolean }) disabled = false;

  /**
   * Whether the select is required
   */
  @property({ type: Boolean }) required = false;

  /**
   * Name attribute
   */
  @property({ type: String }) name = '';

  @query('slot') private _slot!: HTMLSlotElement;

  firstUpdated() {
    this._updateOptions();
    this._slot.addEventListener('slotchange', () => this._updateOptions());
  }

  private _updateOptions() {
    // Clear existing options
    while (this.selectElement.firstChild) {
      this.selectElement.removeChild(this.selectElement.firstChild);
    }

    // Get assigned nodes from slot
    const nodes = this._slot.assignedNodes({ flatten: true });

    // Clone and append options to the internal select
    nodes.forEach(node => {
      if (node instanceof HTMLOptionElement || node instanceof HTMLOptGroupElement) {
        this.selectElement.appendChild(node.cloneNode(true));
      }
    });

    // Restore value if set
    if (this.value) {
      this.selectElement.value = this.value;
    }
  }

  render() {
    return html`
      <div class="select-wrapper">
        <select
          part="select"
          class="select"
          .value=${this.value}
          ?disabled=${this.disabled}
          ?required=${this.required}
          name=${this.name}
          @change=${this._handleChange}
        >
        </select>
        <slot style="display: none;"></slot>
        <svg class="select-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    `;
  }

  private _handleChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('select-change', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
  }

  /**
   * Focus the select
   */
  focus() {
    this.selectElement?.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-native-select': NativeSelect;
  }
}
