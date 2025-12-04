import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tokens, focusRing } from '../../styles/index.js';

/**
 * A multi-line text input component.
 * 
 * @element shadcn-textarea
 * 
 * @fires textarea-change - Fired when the textarea value changes
 * 
 * @cssprop --textarea-bg - Background color override
 * @cssprop --textarea-color - Text color override
 * @cssprop --textarea-border - Border color override
 * @cssprop --textarea-min-height - Minimum height override
 */
@customElement('shadcn-textarea')
export class Textarea extends LitElement {
    static styles = [
        tokens,
        focusRing,
        css`
      :host {
        display: block;
      }

      .textarea {
        display: flex;
        width: 100%;
        min-height: var(--textarea-min-height, 5rem);
        padding: var(--spacing-3);
        font-size: var(--font-size-sm);
        font-family: var(--font-sans);
        background-color: var(--textarea-bg, var(--background));
        color: var(--textarea-color, var(--foreground));
        border: 1px solid var(--textarea-border, var(--input));
        border-radius: var(--radius-md);
        outline: 2px solid transparent;
        outline-offset: 2px;
        transition: border-color var(--transition-fast), outline var(--transition-fast);
        resize: vertical;
      }

      .textarea::placeholder {
        color: var(--muted-foreground);
      }

      .textarea:focus {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .textarea:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .textarea--error {
        border-color: var(--destructive);
      }

      .textarea--error:focus {
        outline-color: var(--destructive);
      }
    `,
    ];

    @query('.textarea') textareaElement!: HTMLTextAreaElement;

    /**
     * Textarea value
     */
    @property({ type: String }) value = '';

    /**
     * Placeholder text
     */
    @property({ type: String }) placeholder = '';

    /**
     * Whether the textarea is disabled
     */
    @property({ type: Boolean }) disabled = false;

    /**
     * Whether the textarea is readonly
     */
    @property({ type: Boolean }) readonly = false;

    /**
     * Whether the textarea is required
     */
    @property({ type: Boolean }) required = false;

    /**
     * Whether the textarea has an error
     */
    @property({ type: Boolean }) error = false;

    /**
     * Name attribute
     */
    @property({ type: String }) name = '';

    /**
     * Min length
     */
    @property({ type: Number }) minlength?: number;

    /**
     * Max length
     */
    @property({ type: Number }) maxlength?: number;

    /**
     * Rows
     */
    @property({ type: Number }) rows?: number;

    /**
     * Cols
     */
    @property({ type: Number }) cols?: number;

    render() {
        return html`
      <textarea
        part="textarea"
        class="textarea ${this.error ? 'textarea--error' : ''}"
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        name=${this.name}
        minlength=${this.minlength ?? ''}
        maxlength=${this.maxlength ?? ''}
        rows=${this.rows ?? ''}
        cols=${this.cols ?? ''}
        @input=${this._handleInput}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      ></textarea>
    `;
    }

    private _handleInput(e: Event) {
        const target = e.target as HTMLTextAreaElement;
        this.value = target.value;

        this.dispatchEvent(
            new CustomEvent('textarea-change', {
                bubbles: true,
                composed: true,
                detail: { value: this.value },
            })
        );
    }

    private _handleFocus(e: FocusEvent) {
        this.dispatchEvent(
            new CustomEvent('textarea-focus', {
                bubbles: true,
                composed: true,
                detail: { originalEvent: e },
            })
        );
    }

    private _handleBlur(e: FocusEvent) {
        this.dispatchEvent(
            new CustomEvent('textarea-blur', {
                bubbles: true,
                composed: true,
                detail: { originalEvent: e },
            })
        );
    }

    /**
     * Focus the textarea
     */
    focus() {
        this.textareaElement?.focus();
    }

    /**
     * Blur the textarea
     */
    blur() {
        this.textareaElement?.blur();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-textarea': Textarea;
    }
}
