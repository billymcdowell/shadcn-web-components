import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { addDays, iso, parseISO } from '../../utils/date.js';
import { tokensBase } from '../../styles/index.js';

export interface CalendarChangeDetail { value: string; date: Date; }
export interface CalendarMonthChangeDetail { month: string; date: Date; }

/**
 * An accessible single-date calendar with month navigation.
 * @element shadcn-calendar
 * @fires calendar-change - Fired after a date is selected.
 * @fires calendar-month-change - Fired after the displayed month changes.
 * @csspart calendar - Calendar container.
 * @csspart day - Each day button.
 */
@customElement('shadcn-calendar')
export class Calendar extends LitElement {
  static styles = [tokensBase, css`
    :host { --calendar-cell-size: 2.25rem; display: inline-block; color: var(--foreground); font-family: var(--font-sans); }
    .calendar { width: fit-content; padding: var(--spacing-3); border-radius: var(--radius-md); background: var(--background); }
    .header { position: relative; display: flex; height: var(--calendar-cell-size); align-items: center; justify-content: center; margin-bottom: var(--spacing-2); }
    .caption { font-size: var(--font-size-sm); font-weight: var(--font-medium); }
    .nav { position: absolute; inset: 0; display: flex; justify-content: space-between; pointer-events: none; }
    .nav button { pointer-events: auto; }
    button { border: 0; border-radius: var(--radius-sm); background: transparent; color: inherit; font: inherit; cursor: pointer; }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 1px; }
    .nav button, .day { width: var(--calendar-cell-size); height: var(--calendar-cell-size); display: inline-flex; align-items: center; justify-content: center; }
    .nav button:hover, .day:hover:not(:disabled) { background: var(--accent); color: var(--accent-foreground); }
    .weekdays, .week { display: grid; grid-template-columns: repeat(7, var(--calendar-cell-size)); }
    .weekday { display: flex; height: var(--calendar-cell-size); align-items: center; justify-content: center; color: var(--muted-foreground); font-size: .8rem; font-weight: var(--font-normal); }
    .day { position: relative; font-size: var(--font-size-sm); }
    .day.outside { color: var(--muted-foreground); opacity: .5; }
    .day.today:not(.selected) { background: var(--muted); }
    .day.selected { background: var(--primary); color: var(--primary-foreground); }
    .day:disabled { color: var(--muted-foreground); opacity: .45; cursor: not-allowed; }
  `];

  /** Selected date as YYYY-MM-DD. */
  @property({ type: String, reflect: true }) value = '';
  /** Displayed month as YYYY-MM. */
  @property({ type: String, reflect: true }) month = '';
  /** Earliest selectable date as YYYY-MM-DD. */
  @property({ type: String }) min = '';
  /** Latest selectable date as YYYY-MM-DD. */
  @property({ type: String }) max = '';
  /** BCP 47 locale used for labels. */
  @property({ type: String }) locale = '';
  /** First weekday, from 0 (Sunday) to 6 (Saturday). */
  @property({ type: Number, attribute: 'week-starts-on' }) weekStartsOn = 0;
  /** Shows dates belonging to adjacent months. */
  @property({ type: Boolean, attribute: 'show-outside-days' }) showOutsideDays = true;
  /** Prevents all date selection and navigation. */
  @property({ type: Boolean, reflect: true }) disabled = false;
  private _focused = '';

  connectedCallback() { super.connectedCallback(); this._ensureMonth(); }
  protected willUpdate() { this._ensureMonth(); }

  private _ensureMonth() {
    if (/^\d{4}-\d{2}$/.test(this.month)) return;
    const selected = parseISO(this.value) ?? new Date();
    this.month = `${selected.getFullYear()}-${String(selected.getMonth() + 1).padStart(2, '0')}`;
  }
  private _monthDate() { return parseISO(`${this.month}-01`) ?? new Date(new Date().getFullYear(), new Date().getMonth(), 1); }
  private _isDisabled(date: Date) {
    const dateValue = iso(date); return this.disabled || (!!this.min && dateValue < this.min) || (!!this.max && dateValue > this.max);
  }
  private _days() {
    const month = this._monthDate();
    const offset = (month.getDay() - Math.max(0, Math.min(6, this.weekStartsOn)) + 7) % 7;
    const start = addDays(month, -offset);
    return Array.from({ length: 42 }, (_, index) => addDays(start, index));
  }
  private _setMonth(date: Date) {
    this.month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    this.dispatchEvent(new CustomEvent<CalendarMonthChangeDetail>('calendar-month-change', { bubbles: true, composed: true, detail: { month: this.month, date } }));
  }
  private _navigate(delta: number) { const date = this._monthDate(); this._setMonth(new Date(date.getFullYear(), date.getMonth() + delta, 1)); }
  private _select(date: Date) {
    if (this._isDisabled(date)) return;
    this.value = iso(date); this._focused = this.value;
    if (date.getMonth() !== this._monthDate().getMonth()) this._setMonth(new Date(date.getFullYear(), date.getMonth(), 1));
    this.dispatchEvent(new CustomEvent<CalendarChangeDetail>('calendar-change', { bubbles: true, composed: true, detail: { value: this.value, date } }));
  }
  private _focusDate(date: Date) {
    const min = parseISO(this.min);
    const max = parseISO(this.max);
    if (min && date < min) date = min;
    if (max && date > max) date = max;
    this._focused = iso(date);
    if (date.getMonth() !== this._monthDate().getMonth()) this._setMonth(new Date(date.getFullYear(), date.getMonth(), 1));
    this.requestUpdate();
    this.updateComplete.then(() => this.shadowRoot?.querySelector<HTMLButtonElement>(`[data-date="${this._focused}"]`)?.focus());
  }
  private _keydown(event: KeyboardEvent, date: Date) {
    let next: Date | null = null;
    if (event.key === 'ArrowLeft') next = addDays(date, -1);
    if (event.key === 'ArrowRight') next = addDays(date, 1);
    if (event.key === 'ArrowUp') next = addDays(date, -7);
    if (event.key === 'ArrowDown') next = addDays(date, 7);
    if (event.key === 'Home') next = addDays(date, -((date.getDay() - this.weekStartsOn + 7) % 7));
    if (event.key === 'End') next = addDays(date, 6 - ((date.getDay() - this.weekStartsOn + 7) % 7));
    if (event.key === 'PageUp') next = new Date(date.getFullYear(), date.getMonth() - (event.shiftKey ? 12 : 1), date.getDate());
    if (event.key === 'PageDown') next = new Date(date.getFullYear(), date.getMonth() + (event.shiftKey ? 12 : 1), date.getDate());
    if (next) { event.preventDefault(); this._focusDate(next); }
  }
  /** Focuses the selected date, today, or the first enabled date. */
  focus(options?: FocusOptions) {
    this.updateComplete.then(() => {
      const target = this.shadowRoot?.querySelector<HTMLButtonElement>('.day[tabindex="0"]');
      target?.focus(options);
    });
  }
  protected render() {
    const month = this._monthDate(); const selected = parseISO(this.value); const today = iso(new Date()); const days = this._days();
    const formatter = new Intl.DateTimeFormat(this.locale || undefined, { month: 'long', year: 'numeric' });
    const weekdayFormatter = new Intl.DateTimeFormat(this.locale || undefined, { weekday: 'narrow' });
    const weekdayBase = new Date(2024, 0, 7 + this.weekStartsOn);
    const focusValue = this._focused || this.value || (days.some((day) => iso(day) === today) ? today : iso(days.find((day) => !this._isDisabled(day)) ?? days[0]));
    return html`<div part="calendar" class="calendar" role="group" aria-label=${formatter.format(month)}>
      <div class="header"><div class="caption" aria-live="polite">${formatter.format(month)}</div><div class="nav">
        <button type="button" aria-label="Previous month" ?disabled=${this.disabled} @click=${() => this._navigate(-1)}>‹</button>
        <button type="button" aria-label="Next month" ?disabled=${this.disabled} @click=${() => this._navigate(1)}>›</button>
      </div></div>
      <div class="weekdays" aria-hidden="true">${Array.from({ length: 7 }, (_, index) => html`<div class="weekday">${weekdayFormatter.format(addDays(weekdayBase, index))}</div>`)}</div>
      <div role="grid">${Array.from({ length: 6 }, (_, week) => html`<div class="week" role="row">${days.slice(week * 7, week * 7 + 7).map((date) => {
        const dateValue = iso(date); const outside = date.getMonth() !== month.getMonth(); const unavailable = this._isDisabled(date) || (outside && !this.showOutsideDays);
        return html`<button part="day" class="day ${outside ? 'outside' : ''} ${dateValue === today ? 'today' : ''} ${selected && dateValue === iso(selected) ? 'selected' : ''}"
          type="button" role="gridcell" data-date=${dateValue} aria-label=${new Intl.DateTimeFormat(this.locale || undefined, { dateStyle: 'full' }).format(date)}
          aria-selected=${dateValue === this.value} ?disabled=${unavailable} tabindex=${dateValue === focusValue && !unavailable ? 0 : -1}
          @click=${() => this._select(date)} @keydown=${(event: KeyboardEvent) => this._keydown(event, date)}>${outside && !this.showOutsideDays ? '' : date.getDate()}</button>`;
      })}</div>`)}</div>
    </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'shadcn-calendar': Calendar; } }
