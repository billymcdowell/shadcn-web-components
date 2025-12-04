import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tokens, focusRing } from '../../styles/index.js';

export type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';

/**
 * A text input component with multiple types and states.
 * 
 * @element shadcn-input
 * 
 * @fires input-change - Fired when the input value changes
 * @fires input-focus - Fired when the input receives focus
 * @fires input-blur - Fired when the input loses focus
 * 
 * @cssprop --input-bg - Background color override
 * @cssprop --input-color - Text color override
 * @cssprop --input-border - Border color override
 */
@customElement('shadcn-input')
export class Input extends LitElement {
  static styles = [
    tokens,
    focusRing,
    css`
      :host {
        display: block;
      }

      .input {
        display: flex;
        width: 100%;
        height: 2.5rem;
        padding: 0 var(--spacing-3);
        font-size: var(--font-size-sm);
        font-family: var(--font-sans);
        background-color: var(--input-bg, var(--background));
        color: var(--input-color, var(--foreground));
        border: 1px solid var(--input-border, var(--input));
        border-radius: var(--input-border-radius, var(--radius-md));
        outline: 2px solid transparent;
        outline-offset: 2px;
        transition: border-color var(--transition-fast), outline var(--transition-fast);
      }

      .input::placeholder {
        color: var(--muted-foreground);
      }

      .input:focus {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .input:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .input--error {
        border-color: var(--destructive);
      }

      .input--error:focus {
        outline-color: var(--destructive);
      }
    `,
  ];

  @query('.input') inputElement!: HTMLInputElement;

  /**
   * Input type
   */
  @property({ type: String }) type: InputType = 'text';

  /**
   * Input value
   */
  @property({ type: String }) value = '';

  /**
   * Placeholder text
   */
  @property({ type: String }) placeholder = '';

  /**
   * Whether the input is disabled
   */
  @property({ type: Boolean }) disabled = false;

  /**
   * Whether the input is readonly
   */
  @property({ type: Boolean }) readonly = false;

  /**
   * Whether the input is required
   */
  @property({ type: Boolean }) required = false;

  /**
   * Whether the input has an error
   */
  @property({ type: Boolean }) error = false;

  /**
   * Name attribute
   */
  @property({ type: String }) name = '';

  /**
   * Autocomplete attribute
   */
  @property({ type: String }) autocomplete = '';

  /**
   * Min length
   */
  @property({ type: Number }) minlength?: number;

  /**
   * Max length
   */
  @property({ type: Number }) maxlength?: number;

  /**
   * Pattern for validation
   */
  @property({ type: String }) pattern?: string;

  render() {
    return html`
      <input
        part="input"
        class="input ${this.error ? 'input--error' : ''}"
        type=${this.type}
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        name=${this.name}
        autocomplete=${this.autocomplete}
        minlength=${this.minlength ?? ''}
        maxlength=${this.maxlength ?? ''}
        pattern=${this.pattern ?? ''}
        @input=${this._handleInput}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      />
    `;
  }

  private _handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('input-change', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
  }

  private _handleFocus(e: FocusEvent) {
    this.dispatchEvent(
      new CustomEvent('input-focus', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: e },
      })
    );
  }

  private _handleBlur(e: FocusEvent) {
    this.dispatchEvent(
      new CustomEvent('input-blur', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: e },
      })
    );
  }

  /**
   * Focus the input
   */
  focus() {
    this.inputElement?.focus();
  }

  /**
   * Blur the input
   */
  blur() {
    this.inputElement?.blur();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-input': Input;
  }
}
