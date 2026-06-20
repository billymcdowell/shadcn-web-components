import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'list' | 'lead' | 'large' | 'small' | 'muted' | 'inline-code';

/** @element shadcn-typography @slot - Text content */
@customElement('shadcn-typography')
export class Typography extends LitElement {
  static styles = [tokens, css`
    :host { display: block; color: var(--foreground); font-family: var(--font-sans); }
    :host([variant='large']), :host([variant='small']), :host([variant='muted']), :host([variant='inline-code']) { display: inline; }
    .text { margin: 0; }
    .h1 { scroll-margin-top: 5rem; font-size: var(--font-size-4xl); font-weight: var(--font-bold); line-height: var(--leading-tight); letter-spacing: -0.025em; }
    .h2 { scroll-margin-top: 5rem; padding-bottom: var(--spacing-2); border-bottom: 1px solid var(--border); font-size: var(--font-size-3xl); font-weight: var(--font-semibold); line-height: var(--leading-tight); letter-spacing: -0.025em; }
    .h3 { scroll-margin-top: 5rem; font-size: var(--font-size-2xl); font-weight: var(--font-semibold); line-height: var(--leading-tight); letter-spacing: -0.02em; }
    .h4 { scroll-margin-top: 5rem; font-size: var(--font-size-xl); font-weight: var(--font-semibold); line-height: var(--leading-tight); letter-spacing: -0.01em; }
    .p { font-size: var(--font-size-base); line-height: var(--leading-relaxed); }
    .blockquote { margin: var(--spacing-6) 0 0; padding-left: var(--spacing-6); border-left: 2px solid var(--border); font-style: italic; line-height: var(--leading-relaxed); }
    .list { margin: var(--spacing-6) 0; padding-left: var(--spacing-6); list-style: disc; }
    .lead { color: var(--muted-foreground); font-size: var(--font-size-xl); line-height: var(--leading-relaxed); }
    .large { font-size: var(--font-size-lg); font-weight: var(--font-semibold); }
    .small { font-size: var(--font-size-sm); font-weight: var(--font-medium); line-height: var(--leading-none); }
    .muted { color: var(--muted-foreground); font-size: var(--font-size-sm); }
    .inline-code { padding: 0.2rem 0.3rem; background: var(--muted); border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: var(--font-size-sm); font-weight: var(--font-semibold); }
  `];

  @property({ type: String, reflect: true }) variant: TypographyVariant = 'p';

  render() {
    switch (this.variant) {
      case 'h1': return html`<h1 part="text" class="text h1"><slot></slot></h1>`;
      case 'h2': return html`<h2 part="text" class="text h2"><slot></slot></h2>`;
      case 'h3': return html`<h3 part="text" class="text h3"><slot></slot></h3>`;
      case 'h4': return html`<h4 part="text" class="text h4"><slot></slot></h4>`;
      case 'blockquote': return html`<blockquote part="text" class="text blockquote"><slot></slot></blockquote>`;
      case 'list': return html`<ul part="text" class="text list"><slot></slot></ul>`;
      case 'inline-code': return html`<code part="text" class="text inline-code"><slot></slot></code>`;
      case 'lead': return html`<p part="text" class="text lead"><slot></slot></p>`;
      case 'large': return html`<div part="text" class="text large"><slot></slot></div>`;
      case 'small': return html`<small part="text" class="text small"><slot></slot></small>`;
      case 'muted': return html`<p part="text" class="text muted"><slot></slot></p>`;
      default: return html`<p part="text" class="text p"><slot></slot></p>`;
    }
  }
}

declare global { interface HTMLElementTagNameMap { 'shadcn-typography': Typography; } }
