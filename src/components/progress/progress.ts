import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokensBase } from '../../styles/index.js';

/** @element shadcn-progress */
@customElement('shadcn-progress')
export class Progress extends LitElement {
  static styles = [tokensBase, css`
    :host { display: block; width: 100%; }
    .progress { position: relative; width: 100%; height: var(--progress-height, 0.5rem); overflow: hidden; background: var(--progress-track, color-mix(in oklch, var(--primary) 20%, transparent)); border-radius: var(--radius-full); }
    .indicator { width: 100%; height: 100%; background: var(--progress-indicator, var(--primary)); border-radius: inherit; transform-origin: left; transition: transform var(--transition-normal); }
  `];
  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 100;
  @property({ type: String, attribute: 'aria-label' }) label = 'Progress';

  render() {
    const max = Number.isFinite(this.max) && this.max > 0 ? this.max : 100;
    const value = Math.min(Math.max(Number.isFinite(this.value) ? this.value : 0, 0), max);
    const percent = (value / max) * 100;
    return html`<div part="track" class="progress" role="progressbar" aria-label=${this.label} aria-valuemin="0" aria-valuemax=${max} aria-valuenow=${value}><div part="indicator" class="indicator" style="transform: translateX(-${100 - percent}%)"></div></div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'shadcn-progress': Progress; } }
