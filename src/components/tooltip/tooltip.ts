import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left';
let tooltipId = 0;

/** @element shadcn-tooltip @slot - Tooltip trigger and content. @fires tooltip-open-change - Fired when the open state changes. */
@customElement('shadcn-tooltip')
export class Tooltip extends LitElement {
  static styles = [tokens, css`:host { position: relative; display: inline-block; }`];
  /** Whether the tooltip is open. */
  @property({ type: Boolean, reflect: true }) open = false;
  /** Delay before opening, in milliseconds. */
  @property({ type: Number }) delay = 300;
  private timer?: ReturnType<typeof setTimeout>;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('tooltip-enter', this.enter as EventListener);
    this.addEventListener('tooltip-leave', this.leave as EventListener);
    document.addEventListener('keydown', this.keydown);
  }
  disconnectedCallback() {
    clearTimeout(this.timer); this.removeEventListener('tooltip-enter', this.enter as EventListener); this.removeEventListener('tooltip-leave', this.leave as EventListener); document.removeEventListener('keydown', this.keydown); super.disconnectedCallback();
  }
  protected render() { return html`<slot @slotchange=${this.syncChildren}></slot>`; }
  protected updated() { this.syncChildren(); }
  private enter = () => { clearTimeout(this.timer); if (!this.open) this.timer = setTimeout(() => this.setOpen(true), Math.max(0, this.delay)); };
  private leave = () => { clearTimeout(this.timer); this.setOpen(false); };
  private keydown = (event: KeyboardEvent) => { if (event.key === 'Escape' && this.open) this.setOpen(false); };
  private setOpen(open: boolean) { if (open === this.open) return; this.open = open; this.dispatchEvent(new CustomEvent('tooltip-open-change', { bubbles: true, composed: true, detail: { open } })); }
  private syncChildren = () => {
    const content = this.querySelector<TooltipContent>('shadcn-tooltip-content');
    const trigger = this.querySelector<TooltipTrigger>('shadcn-tooltip-trigger');
    if (content) content.open = this.open;
    if (trigger) { trigger.open = this.open; trigger.describedBy = content?.contentId ?? ''; }
  };
}

/** @element shadcn-tooltip-trigger @slot - Tooltip trigger. */
@customElement('shadcn-tooltip-trigger')
export class TooltipTrigger extends LitElement {
  static styles = css`:host { display: inline-block; }`;
  @property({ type: Boolean }) open = false;
  @property({ type: String }) describedBy = '';
  connectedCallback() { super.connectedCallback(); this.addEventListener('pointerenter', this.enter); this.addEventListener('pointerleave', this.leave); this.addEventListener('focusin', this.enter); this.addEventListener('focusout', this.leave); }
  disconnectedCallback() { this.removeEventListener('pointerenter', this.enter); this.removeEventListener('pointerleave', this.leave); this.removeEventListener('focusin', this.enter); this.removeEventListener('focusout', this.leave); super.disconnectedCallback(); }
  protected render() { return html`<span part="trigger" aria-describedby=${this.open ? this.describedBy : ''}><slot></slot></span>`; }
  private enter = () => this.dispatchEvent(new CustomEvent('tooltip-enter', { bubbles: true, composed: true }));
  private leave = () => this.dispatchEvent(new CustomEvent('tooltip-leave', { bubbles: true, composed: true }));
}

/** @element shadcn-tooltip-content @slot - Tooltip text. @csspart content - Tooltip bubble. */
@customElement('shadcn-tooltip-content')
export class TooltipContent extends LitElement {
  static styles = [tokens, css`
    :host { position: absolute; z-index: 50; display: block; pointer-events: none; }
    :host([side='top']) { bottom: calc(100% + .375rem); left: 50%; transform: translateX(-50%); }
    :host([side='bottom']) { top: calc(100% + .375rem); left: 50%; transform: translateX(-50%); }
    :host([side='left']) { right: calc(100% + .375rem); top: 50%; transform: translateY(-50%); }
    :host([side='right']) { left: calc(100% + .375rem); top: 50%; transform: translateY(-50%); }
    [hidden] { display: none !important; }
    .content { width: max-content; max-width: 18rem; padding: .375rem var(--spacing-2); border-radius: var(--radius-md); background: var(--primary); color: var(--primary-foreground); font-family: var(--font-sans); font-size: var(--font-size-xs); line-height: 1.25; box-shadow: 0 4px 8px oklch(0 0 0 / .15); }
  `];
  readonly contentId = `shadcn-tooltip-${++tooltipId}`;
  @property({ type: Boolean }) open = false;
  @property({ type: String, reflect: true }) side: TooltipSide = 'top';
  protected render() { return html`<div id=${this.contentId} part="content" class="content" role="tooltip" ?hidden=${!this.open}><slot></slot></div>`; }
}

declare global { interface HTMLElementTagNameMap { 'shadcn-tooltip': Tooltip; 'shadcn-tooltip-trigger': TooltipTrigger; 'shadcn-tooltip-content': TooltipContent; } }
