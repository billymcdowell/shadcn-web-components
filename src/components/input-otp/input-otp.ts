import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tokensBase } from '../../styles/index.js';

export type InputOTPMode = 'numeric' | 'text';

/**
 * A form-associated one-time-password input rendered as individual visual slots.
 *
 * @element shadcn-input-otp
 * @fires input-otp-change - Fired whenever the value changes.
 * @fires input-otp-complete - Fired when the requested length is filled.
 * @csspart input - Native transparent input.
 * @csspart group - Visual slot group.
 * @csspart slot - Individual visual slot.
 * @cssprop --input-otp-slot-size - Width and height of each slot.
 */
@customElement('shadcn-input-otp')
export class InputOTP extends LitElement {
  static formAssociated = true;
  static styles = [tokensBase, css`
    :host { display: inline-block; }
    .root { position: relative; display: inline-flex; }
    .group { display: flex; align-items: center; }
    .slot { width: var(--input-otp-slot-size, 2.5rem); height: var(--input-otp-slot-size, 2.5rem); display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--input); border-right-width: 0; color: var(--foreground); font-family: var(--font-sans); font-size: var(--font-size-sm); transition: border-color var(--transition-fast), box-shadow var(--transition-fast); }
    .slot:first-child { border-radius: var(--radius-md) 0 0 var(--radius-md); }
    .slot:last-child { border-right-width: 1px; border-radius: 0 var(--radius-md) var(--radius-md) 0; }
    .slot.active { border-right-width: 1px; border-color: var(--ring); box-shadow: 0 0 0 2px var(--ring); z-index: 1; }
    .caret { width: 1px; height: 1rem; background: currentColor; animation: blink var(--animation-caret-duration, 1s) var(--animation-caret-easing, steps(1)) infinite; }
    input { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; border: 0; margin: 0; cursor: text; }
    input:disabled { cursor: not-allowed; }
    :host([disabled]) { opacity: .5; }
    :host([invalid]) .slot { border-color: var(--destructive); }
    @keyframes blink { 50% { opacity: 0; } }
    @media (prefers-reduced-motion: reduce) { .caret { animation: none; } }
  `];

  private _internals: ElementInternals;
  @query('input') private _input!: HTMLInputElement;

  /** Current OTP value. */
  @property({ type: String }) value = '';
  /** Number of characters accepted. */
  @property({ type: Number, reflect: true }) length = 6;
  /** Input filtering and virtual keyboard mode. */
  @property({ type: String, reflect: true }) mode: InputOTPMode = 'numeric';
  /** Form field name. */
  @property({ type: String, reflect: true }) name = '';
  /** Whether the field is disabled. */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Whether the field is read-only. */
  @property({ type: Boolean, reflect: true }) readonly = false;
  /** Whether a complete value is required. */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Whether the field is marked invalid by the consumer. */
  @property({ type: Boolean, reflect: true }) invalid = false;
  /** Accessible label for the native input. */
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = 'One-time password';

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  protected render() {
    const slots = Array.from({ length: Math.max(1, this.length) }, (_, index) => this.value[index] ?? '');
    const active = Math.min(this.value.length, slots.length - 1);
    return html`
      <div class="root">
        <div part="group" class="group" aria-hidden="true">
          ${slots.map((character, index) => html`<span part="slot" class="slot ${index === active && !this.disabled && !this.readonly ? 'active' : ''}">${character || (index === active && !this.disabled && !this.readonly ? html`<span class="caret"></span>` : '')}</span>`)}
        </div>
        <input part="input" .value=${this.value} maxlength=${this.length} inputmode=${this.mode === 'numeric' ? 'numeric' : 'text'} autocomplete="one-time-code" aria-label=${this.ariaLabel} aria-invalid=${this.invalid} ?disabled=${this.disabled} ?readonly=${this.readonly} ?required=${this.required} @input=${this._handleInput} />
      </div>
    `;
  }

  protected updated(changes: Map<string, unknown>) {
    if (changes.has('value') || changes.has('required') || changes.has('length') || changes.has('disabled') || changes.has('invalid')) {
      const filtered = this._sanitize(this.value);
      if (filtered !== this.value) { this.value = filtered; return; }
      this._internals.setFormValue(this.disabled ? null : this.value);
      const missing = this.required && this.value.length !== this.length;
      this._internals.setValidity(missing || this.invalid ? { customError: true } : {}, missing ? `Enter all ${this.length} characters.` : this.invalid ? 'The code is invalid.' : '', this._input);
    }
  }

  focus(options?: FocusOptions) { this._input?.focus(options); }
  select() { this._input?.select(); }
  formResetCallback() { this.value = ''; }

  private _sanitize(value: string) {
    const filtered = this.mode === 'numeric' ? value.replace(/\D/g, '') : value;
    return filtered.slice(0, Math.max(1, this.length));
  }

  private _handleInput(event: Event) {
    this.value = this._sanitize((event.target as HTMLInputElement).value);
    this.dispatchEvent(new CustomEvent('input-otp-change', { bubbles: true, composed: true, detail: { value: this.value } }));
    if (this.value.length === this.length) this.dispatchEvent(new CustomEvent('input-otp-complete', { bubbles: true, composed: true, detail: { value: this.value } }));
  }
}

declare global { interface HTMLElementTagNameMap { 'shadcn-input-otp': InputOTP; } }
