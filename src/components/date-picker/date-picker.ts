import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';
import '../calendar/calendar.js';
import type { Calendar, CalendarChangeDetail } from '../calendar/calendar.js';

export interface DatePickerChangeDetail { value: string; date: Date; }

const parseISO = (value: string): Date | null => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return date.getFullYear() === Number(match[1]) && date.getMonth() === Number(match[2]) - 1 && date.getDate() === Number(match[3]) ? date : null;
};

/**
 * A form-associated date picker composed from a shadcn-style trigger and calendar.
 * @element shadcn-date-picker
 * @fires date-picker-change - Fired after the selected date changes.
 * @fires date-picker-open-change - Fired when the popup opens or closes.
 * @csspart trigger - Date picker trigger button.
 * @csspart content - Calendar popup.
 */
@customElement('shadcn-date-picker')
export class DatePicker extends LitElement {
  static formAssociated = true;
  static styles = [tokens, css`
    :host { position: relative; display: inline-block; width: 17.5rem; font-family: var(--font-sans); }
    .trigger { display: flex; width: 100%; height: 2.5rem; align-items: center; justify-content: flex-start; gap: var(--spacing-2); padding: 0 var(--spacing-3); border: 1px solid var(--input); border-radius: var(--radius-md); background: var(--background); color: var(--foreground); font: inherit; font-size: var(--font-size-sm); font-weight: var(--font-normal); text-align: left; cursor: pointer; }
    .trigger.empty { color: var(--muted-foreground); }
    .trigger:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
    .trigger:disabled { opacity: .5; cursor: not-allowed; }
    svg { width: 1rem; height: 1rem; flex: none; opacity: .7; }
    .content { position: absolute; z-index: 50; top: calc(100% + var(--spacing-2)); left: 0; width: max-content; overflow: hidden; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--popover); color: var(--popover-foreground); box-shadow: var(--shadow-md); transform-origin: top left; animation: shadcn-zoom-in var(--transition-fast); }
    [hidden] { display: none !important; }
    @media (prefers-reduced-motion: reduce) { .content { animation: none; } }
  `];

  /** Selected date as YYYY-MM-DD. */
  @property({ type: String, reflect: true }) value = '';
  /** Form field name. */
  @property({ type: String, reflect: true }) name = '';
  /** Placeholder displayed without a selection. */
  @property({ type: String }) placeholder = 'Pick a date';
  /** BCP 47 locale used to format the selected date. */
  @property({ type: String }) locale = '';
  /** Earliest selectable date as YYYY-MM-DD. */
  @property({ type: String }) min = '';
  /** Latest selectable date as YYYY-MM-DD. */
  @property({ type: String }) max = '';
  /** Whether a date is required for form submission. */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Prevents opening and excludes the control from form submission. */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Prevents user changes while preserving form submission. */
  @property({ type: Boolean, attribute: 'readonly', reflect: true }) readOnly = false;
  /** Whether the calendar popup is open. */
  @property({ type: Boolean, reflect: true }) open = false;
  @query('.trigger') private _trigger!: HTMLButtonElement;
  @query('shadcn-calendar') private _calendar!: Calendar;
  private _internals: ElementInternals;
  private _defaultValue = '';

  constructor() { super(); this._internals = this.attachInternals(); }
  connectedCallback() {
    super.connectedCallback(); this._defaultValue = this.getAttribute('value') ?? this.value;
    document.addEventListener('pointerdown', this._outsidePointerDown);
    document.addEventListener('keydown', this._documentKeyDown);
  }
  disconnectedCallback() {
    document.removeEventListener('pointerdown', this._outsidePointerDown);
    document.removeEventListener('keydown', this._documentKeyDown);
    super.disconnectedCallback();
  }
  protected updated(changed: Map<PropertyKey, unknown>) {
    if (changed.has('value') || changed.has('required') || changed.has('disabled') || changed.has('min') || changed.has('max')) this._syncForm();
    if ((this.disabled || this.readOnly) && this.open) this._setOpen(false);
    if (changed.has('open') && this.open) this.updateComplete.then(() => this._calendar?.focus());
  }
  private _syncForm() {
    this._internals.setFormValue(this.disabled ? null : this.value);
    const date = parseISO(this.value);
    let flags: ValidityStateFlags = {}; let message = '';
    if (this.required && !this.value) { flags = { valueMissing: true }; message = 'Please select a date.'; }
    else if (this.value && !date) { flags = { badInput: true }; message = 'Please select a valid date.'; }
    else if (this.min && this.value < this.min) { flags = { rangeUnderflow: true }; message = `Date must be on or after ${this.min}.`; }
    else if (this.max && this.value > this.max) { flags = { rangeOverflow: true }; message = `Date must be on or before ${this.max}.`; }
    this._internals.setValidity(flags, message, this._trigger);
  }
  private _setOpen(open: boolean, returnFocus = false) {
    if (this.open === open) return;
    this.open = open;
    this.dispatchEvent(new CustomEvent('date-picker-open-change', { bubbles: true, composed: true, detail: { open } }));
    if (!open && returnFocus) this.updateComplete.then(() => this._trigger?.focus());
  }
  private _toggle() { if (!this.disabled && !this.readOnly) this._setOpen(!this.open); }
  private _select(event: CustomEvent<CalendarChangeDetail>) {
    if (this.disabled || this.readOnly) return;
    this.value = event.detail.value;
    this.dispatchEvent(new CustomEvent<DatePickerChangeDetail>('date-picker-change', { bubbles: true, composed: true, detail: event.detail }));
    this._setOpen(false, true);
  }
  private _outsidePointerDown = (event: PointerEvent) => { if (this.open && !event.composedPath().includes(this)) this._setOpen(false); };
  private _documentKeyDown = (event: KeyboardEvent) => { if (this.open && event.key === 'Escape') { event.preventDefault(); this._setOpen(false, true); } };
  private _triggerKeyDown(event: KeyboardEvent) {
    if (['ArrowDown', 'Enter', ' '].includes(event.key) && !this.open) { event.preventDefault(); this._toggle(); }
  }
  formResetCallback() { this.value = this._defaultValue; this._setOpen(false); }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }
  /** Checks native form validity. */
  checkValidity() { return this._internals.checkValidity(); }
  /** Checks validity and reports any validation message. */
  reportValidity() { return this._internals.reportValidity(); }
  /** Focuses the trigger button. */
  focus(options?: FocusOptions) { this._trigger?.focus(options); }
  protected render() {
    const date = parseISO(this.value);
    const label = date ? new Intl.DateTimeFormat(this.locale || undefined, { dateStyle: 'long' }).format(date) : this.placeholder;
    return html`
      <button part="trigger" class="trigger ${date ? '' : 'empty'}" type="button" aria-haspopup="dialog" aria-expanded=${this.open}
        ?disabled=${this.disabled} aria-readonly=${this.readOnly} @click=${this._toggle} @keydown=${this._triggerKeyDown}>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"/></svg>
        <span>${label}</span>
      </button>
      <div part="content" class="content" role="dialog" aria-label="Choose date" ?hidden=${!this.open}>
        <shadcn-calendar .value=${this.value} .month=${date ? this.value.slice(0, 7) : ''} .min=${this.min} .max=${this.max} .locale=${this.locale}
          ?disabled=${this.disabled || this.readOnly} @calendar-change=${this._select}></shadcn-calendar>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'shadcn-date-picker': DatePicker; } }
