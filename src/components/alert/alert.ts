import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

export type AlertVariant = 'default' | 'destructive';

/** @element shadcn-alert @slot - Alert content @slot icon - Optional alert icon */
@customElement('shadcn-alert')
export class Alert extends LitElement {
  static styles = [tokens, css`
    :host { display: block; }
    .alert { position: relative; display: grid; grid-template-columns: 0 1fr; gap: var(--spacing-1) var(--spacing-3); width: 100%; box-sizing: border-box; padding: var(--spacing-3) var(--spacing-4); color: var(--foreground); border: 1px solid var(--border); border-radius: var(--radius-lg); font-family: var(--font-sans); font-size: var(--font-size-sm); line-height: var(--leading-relaxed); }
    .alert:has(.icon-slot:not(:empty)) { grid-template-columns: 1rem 1fr; }
    .alert--destructive { color: var(--destructive); border-color: color-mix(in oklch, var(--destructive) 50%, transparent); }
    .icon-slot { display: flex; width: 1rem; height: 1rem; margin-top: 0.125rem; }
    .content { min-width: 0; grid-column: 2; }
    ::slotted([slot='icon']) { width: 1rem; height: 1rem; }
  `];

  @property({ type: String, reflect: true }) variant: AlertVariant = 'default';

  render() {
    return html`<div part="alert" class="alert alert--${this.variant}" role="alert"><span class="icon-slot"><slot name="icon"></slot></span><div class="content"><slot></slot></div></div>`;
  }
}

/** @element shadcn-alert-title @slot - Alert heading */
@customElement('shadcn-alert-title')
export class AlertTitle extends LitElement {
  static styles = [tokens, css`:host { display: block; margin-bottom: var(--spacing-1); color: inherit; font-family: var(--font-sans); font-weight: var(--font-medium); line-height: var(--leading-none); letter-spacing: -0.01em; }`];
  render() { return html`<slot></slot>`; }
}

/** @element shadcn-alert-description @slot - Alert description */
@customElement('shadcn-alert-description')
export class AlertDescription extends LitElement {
  static styles = [tokens, css`:host { display: block; color: color-mix(in oklch, currentColor 80%, transparent); font-family: var(--font-sans); font-size: var(--font-size-sm); line-height: var(--leading-relaxed); }`];
  render() { return html`<slot></slot>`; }
}

declare global { interface HTMLElementTagNameMap { 'shadcn-alert': Alert; 'shadcn-alert-title': AlertTitle; 'shadcn-alert-description': AlertDescription; } }
