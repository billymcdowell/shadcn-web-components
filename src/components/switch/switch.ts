import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A switch toggle component.
 * 
 * @element shadcn-switch
 * 
 * @fires switch-change - Fired when the switch state changes
 * 
 * @cssprop --switch-bg - Background color override
 */
@customElement('shadcn-switch')
export class Switch extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-block;
      }

      .switch {
        position: relative;
        width: 2.75rem;
        height: 1.5rem;
        background-color: var(--switch-bg, var(--input));
        border-radius: var(--radius-full);
        cursor: pointer;
        transition: background-color var(--transition-fast);
        border: 2px solid transparent;
      }

      .switch:hover:not(.switch--disabled) {
        opacity: 0.9;
      }

      .switch:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .switch--checked {
        background-color: var(--primary);
      }

      .switch--disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .switch__thumb {
        position: absolute;
        top: 0.125rem;
        left: 0.125rem;
        width: 1.25rem;
        height: 1.25rem;
        background-color: var(--background);
        border-radius: var(--radius-full);
        transition: transform var(--transition-fast);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .switch--checked .switch__thumb {
        transform: translateX(1.25rem);
      }

      .switch__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
    `,
    ];

    /**
     * Whether the switch is checked
     */
    @property({ type: Boolean }) checked = false;

    /**
     * Whether the switch is disabled
     */
    @property({ type: Boolean }) disabled = false;

    /**
     * Whether the switch is required
     */
    @property({ type: Boolean }) required = false;

    /**
     * Name attribute
     */
    @property({ type: String }) name = '';

    /**
     * Value attribute
     */
    @property({ type: String }) value = '';

    render() {
        return html`
      <div
        part="switch"
        class="switch ${this.checked ? 'switch--checked' : ''} ${this.disabled ? 'switch--disabled' : ''}"
        role="switch"
        aria-checked=${this.checked}
        aria-disabled=${this.disabled}
        tabindex=${this.disabled ? '-1' : '0'}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        <div class="switch__thumb"></div>
        <input
          class="switch__input"
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          ?required=${this.required}
          name=${this.name}
          value=${this.value}
          aria-hidden="true"
          tabindex="-1"
        />
      </div>
    `;
    }

    private _handleClick(e: MouseEvent) {
        if (this.disabled) {
            e.preventDefault();
            return;
        }
        this._toggle();
    }

    private _handleKeyDown(e: KeyboardEvent) {
        if (this.disabled) return;

        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this._toggle();
        }
    }

    private _toggle() {
        this.checked = !this.checked;

        this.dispatchEvent(
            new CustomEvent('switch-change', {
                bubbles: true,
                composed: true,
                detail: { checked: this.checked, value: this.value },
            })
        );
    }

    /**
     * Focus the switch
     */
    focus() {
        this.shadowRoot?.querySelector<HTMLElement>('.switch')?.focus();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-switch': Switch;
    }
}
