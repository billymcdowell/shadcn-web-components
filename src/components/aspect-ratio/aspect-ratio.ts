import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** @element shadcn-aspect-ratio @slot - Ratio-constrained content */
@customElement('shadcn-aspect-ratio')
export class AspectRatio extends LitElement {
  static styles = css`:host { display: block; width: 100%; } .ratio { position: relative; width: 100%; overflow: hidden; } ::slotted(*) { width: 100%; height: 100%; object-fit: cover; }`;
  /** Width-to-height ratio. */
  @property({ type: Number }) ratio = 1;

  render() {
    const ratio = Number.isFinite(this.ratio) && this.ratio > 0 ? this.ratio : 1;
    return html`<div part="container" class="ratio" style="aspect-ratio: ${ratio}"><slot></slot></div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'shadcn-aspect-ratio': AspectRatio; } }
