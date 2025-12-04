import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

export type ButtonGroupOrientation = 'horizontal' | 'vertical';

/**
 * A container for grouping related buttons together.
 * 
 * @element shadcn-button-group
 * 
 * @slot - Button elements
 * 
 * @cssprop --button-group-gap - Gap between buttons
 */
@customElement('shadcn-button-group')
export class ButtonGroup extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: inline-flex;
      }

      .button-group {
        display: inline-flex;
        gap: 0;
        position: relative;
      }

      .button-group--horizontal {
        flex-direction: row;
      }

      .button-group--vertical {
        flex-direction: column;
      }

      /* Merge borders by overlapping */
      .button-group--horizontal ::slotted(:not(:first-child)) {
        margin-left: -1px;
      }

      .button-group--vertical ::slotted(:not(:first-child)) {
        margin-top: -1px;
      }

      /* Set border radius via CSS custom properties for horizontal groups */
      .button-group--horizontal ::slotted(*:first-child) {
        --button-border-radius: var(--radius-md) 0 0 var(--radius-md);
      }

      .button-group--horizontal ::slotted(*:last-child) {
        --button-border-radius: 0 var(--radius-md) var(--radius-md) 0;
      }

      .button-group--horizontal ::slotted(*:only-child) {
        --button-border-radius: var(--radius-md);
      }

      .button-group--horizontal ::slotted(*:not(:first-child):not(:last-child)) {
        --button-border-radius: 0;
      }

      /* Set border radius via CSS custom properties for vertical groups */
      .button-group--vertical ::slotted(*:first-child) {
        --button-border-radius: var(--radius-md) var(--radius-md) 0 0;
      }

      .button-group--vertical ::slotted(*:last-child) {
        --button-border-radius: 0 0 var(--radius-md) var(--radius-md);
      }

      .button-group--vertical ::slotted(*:only-child) {
        --button-border-radius: var(--radius-md);
      }

      .button-group--vertical ::slotted(*:not(:first-child):not(:last-child)) {
        --button-border-radius: 0;
      }

      /* Ensure hovered/focused buttons appear on top */
      ::slotted(*:hover),
      ::slotted(*:focus-within) {
        position: relative;
        z-index: 1;
      }
    `,
  ];

  /**
   * Orientation of the button group
   */
  @property({ type: String }) orientation: ButtonGroupOrientation = 'horizontal';

  render() {
    return html`
      <div
        part="button-group"
        class="button-group button-group--${this.orientation}"
        role="group"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-button-group': ButtonGroup;
  }
}
