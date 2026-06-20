import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

export type HoverCardSide = 'top' | 'right' | 'bottom' | 'left';
export type HoverCardAlign = 'start' | 'center' | 'end';

/**
 * Displays rich preview content after its trigger is hovered or focused.
 * @element shadcn-hover-card
 * @slot - Hover card trigger and content.
 * @fires hover-card-open-change - Fired when the open state changes.
 */
@customElement('shadcn-hover-card')
export class HoverCard extends LitElement {
  static styles = [tokens, css`:host { position: relative; display: inline-block; }`];
  /** Whether the card is open. */
  @property({ type: Boolean, reflect: true }) open = false;
  /** Delay before opening, in milliseconds. */
  @property({ type: Number, attribute: 'open-delay' }) openDelay = 300;
  /** Delay before closing, in milliseconds. */
  @property({ type: Number, attribute: 'close-delay' }) closeDelay = 200;
  private openTimer?: ReturnType<typeof setTimeout>;
  private closeTimer?: ReturnType<typeof setTimeout>;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('hover-card-enter', this.handleEnter as EventListener);
    this.addEventListener('hover-card-leave', this.handleLeave as EventListener);
    document.addEventListener('keydown', this.handleKeyDown);
  }
  disconnectedCallback() {
    this.clearTimers();
    this.removeEventListener('hover-card-enter', this.handleEnter as EventListener);
    this.removeEventListener('hover-card-leave', this.handleLeave as EventListener);
    document.removeEventListener('keydown', this.handleKeyDown);
    super.disconnectedCallback();
  }
  protected render() { return html`<slot @slotchange=${this.syncChildren}></slot>`; }
  protected updated() { this.syncChildren(); }

  private handleEnter = () => {
    clearTimeout(this.closeTimer);
    if (this.open) return;
    this.openTimer = setTimeout(() => this.setOpen(true), Math.max(0, this.openDelay));
  };
  private handleLeave = () => {
    clearTimeout(this.openTimer);
    this.closeTimer = setTimeout(() => this.setOpen(false), Math.max(0, this.closeDelay));
  };
  private handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape' && this.open) this.setOpen(false); };
  private setOpen(open: boolean) {
    if (open === this.open) return;
    this.open = open;
    this.dispatchEvent(new CustomEvent('hover-card-open-change', { bubbles: true, composed: true, detail: { open } }));
  }
  private clearTimers() { clearTimeout(this.openTimer); clearTimeout(this.closeTimer); }
  private syncChildren = () => {
    this.querySelectorAll<HoverCardTrigger>('shadcn-hover-card-trigger').forEach((trigger) => { trigger.open = this.open; });
    this.querySelectorAll<HoverCardContent>('shadcn-hover-card-content').forEach((content) => { content.open = this.open; });
  };
}

/** @element shadcn-hover-card-trigger @slot - Preview trigger. */
@customElement('shadcn-hover-card-trigger')
export class HoverCardTrigger extends LitElement {
  static styles = css`:host { display: inline-block; }`;
  @property({ type: Boolean }) open = false;
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('pointerenter', this.enter);
    this.addEventListener('pointerleave', this.leave);
    this.addEventListener('focusin', this.enter);
    this.addEventListener('focusout', this.leave);
  }
  disconnectedCallback() {
    this.removeEventListener('pointerenter', this.enter); this.removeEventListener('pointerleave', this.leave); this.removeEventListener('focusin', this.enter); this.removeEventListener('focusout', this.leave); super.disconnectedCallback();
  }
  protected render() { return html`<span part="trigger"><slot></slot></span>`; }
  private enter = () => this.dispatchEvent(new CustomEvent('hover-card-enter', { bubbles: true, composed: true }));
  private leave = () => this.dispatchEvent(new CustomEvent('hover-card-leave', { bubbles: true, composed: true }));
}

/**
 * Rich hover card preview.
 * @element shadcn-hover-card-content
 * @slot - Preview content.
 * @csspart content - Preview panel.
 * @cssprop --hover-card-width - Preview width.
 */
@customElement('shadcn-hover-card-content')
export class HoverCardContent extends LitElement {
  static styles = [tokens, css`
    :host { position: absolute; z-index: 50; display: block; }
    :host([side='top']) { bottom: calc(100% + .5rem); }
    :host([side='bottom']) { top: calc(100% + .5rem); }
    :host([side='left']) { right: calc(100% + .5rem); top: 50%; transform: translateY(-50%); }
    :host([side='right']) { left: calc(100% + .5rem); top: 50%; transform: translateY(-50%); }
    :host([align='start']) { left: 0; }
    :host([align='center']):not([side='left']):not([side='right']) { left: 50%; transform: translateX(-50%); }
    :host([align='end']) { right: 0; }
    [hidden] { display: none !important; }
    .content { box-sizing: border-box; width: var(--hover-card-width, 20rem); padding: var(--spacing-4); border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--popover); color: var(--popover-foreground); box-shadow: 0 10px 15px -3px oklch(0 0 0 / .15); }
  `];
  @property({ type: Boolean }) open = false;
  @property({ type: String, reflect: true }) side: HoverCardSide = 'bottom';
  @property({ type: String, reflect: true }) align: HoverCardAlign = 'center';
  connectedCallback() { super.connectedCallback(); this.addEventListener('pointerenter', this.enter); this.addEventListener('pointerleave', this.leave); }
  disconnectedCallback() { this.removeEventListener('pointerenter', this.enter); this.removeEventListener('pointerleave', this.leave); super.disconnectedCallback(); }
  protected render() { return html`<div part="content" class="content" ?hidden=${!this.open}><slot></slot></div>`; }
  private enter = () => this.dispatchEvent(new CustomEvent('hover-card-enter', { bubbles: true, composed: true }));
  private leave = () => this.dispatchEvent(new CustomEvent('hover-card-leave', { bubbles: true, composed: true }));
}

declare global { interface HTMLElementTagNameMap { 'shadcn-hover-card': HoverCard; 'shadcn-hover-card-trigger': HoverCardTrigger; 'shadcn-hover-card-content': HoverCardContent; } }
