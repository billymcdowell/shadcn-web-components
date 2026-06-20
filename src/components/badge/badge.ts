import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

/** @element shadcn-badge @slot - Badge content */
@customElement('shadcn-badge')
export class Badge extends LitElement {
  static styles = [tokens, css`
    :host { display: inline-flex; vertical-align: middle; }
    .badge { display: inline-flex; align-items: center; justify-content: center; gap: var(--spacing-1); box-sizing: border-box; width: fit-content; min-height: 1.25rem; padding: 0.125rem var(--spacing-2); border: 1px solid transparent; border-radius: var(--radius-full); font-family: var(--font-sans); font-size: var(--font-size-xs); font-weight: var(--font-semibold); line-height: var(--leading-none); white-space: nowrap; transition: color var(--transition-fast), background-color var(--transition-fast), border-color var(--transition-fast); }
    .badge--default { color: var(--primary-foreground); background: var(--primary); }
    .badge--secondary { color: var(--secondary-foreground); background: var(--secondary); }
    .badge--destructive { color: var(--destructive-foreground); background: var(--destructive); }
    .badge--outline { color: var(--foreground); background: transparent; border-color: var(--border); }
    ::slotted(svg) { width: 0.75rem; height: 0.75rem; }
  `];
  @property({ type: String, reflect: true }) variant: BadgeVariant = 'default';
  render() { return html`<span part="badge" class="badge badge--${this.variant}"><slot></slot></span>`; }
}

declare global { interface HTMLElementTagNameMap { 'shadcn-badge': Badge; } }
