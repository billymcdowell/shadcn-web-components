import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A container for grouping inputs with addons (prefixes/suffixes).
 * 
 * @element shadcn-input-group
 * 
 * @slot prefix - Content to display before the input
 * @slot - Input element
 * @slot suffix - Content to display after the input
 */
@customElement('shadcn-input-group')
export class InputGroup extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }

      .input-group {
        display: flex;
        width: 100%;
        align-items: stretch;
      }

      .input-group__prefix,
      .input-group__suffix {
        display: flex;
        align-items: center;
        padding: 0 var(--spacing-3);
        font-size: var(--font-size-sm);
        background-color: var(--muted);
        color: var(--muted-foreground);
        border: 1px solid var(--input);
        white-space: nowrap;
        flex-shrink: 0;
      }

      .input-group__prefix {
        border-right: none;
        border-top-left-radius: var(--radius-md);
        border-bottom-left-radius: var(--radius-md);
      }

      .input-group__suffix {
        border-left: none;
        border-top-right-radius: var(--radius-md);
        border-bottom-right-radius: var(--radius-md);
      }

      .input-group__control {
        flex: 1;
        display: flex;
      }

      /* Hide empty prefix/suffix */
      .input-group__prefix:empty,
      .input-group__suffix:empty {
        display: none;
      }

      /* Set border radius via CSS custom properties */
      ::slotted(*) {
        flex: 1;
        --input-border-radius: 0;
      }

      /* Only prefix - remove left radius */
      .input-group:has(.input-group__prefix:not(:empty)):has(.input-group__suffix:empty) ::slotted(*) {
        --input-border-radius: 0 var(--radius-md) var(--radius-md) 0;
      }

      /* Only suffix - remove right radius */
      .input-group:has(.input-group__prefix:empty):has(.input-group__suffix:not(:empty)) ::slotted(*) {
        --input-border-radius: var(--radius-md) 0 0 var(--radius-md);
      }

      /* Both prefix and suffix - no radius */
      .input-group:has(.input-group__prefix:not(:empty)):has(.input-group__suffix:not(:empty)) ::slotted(*) {
        --input-border-radius: 0;
      }

      /* Neither prefix nor suffix - full radius */
      .input-group:has(.input-group__prefix:empty):has(.input-group__suffix:empty) ::slotted(*) {
        --input-border-radius: var(--radius-md);
      }
    `,
  ];

  render() {
    return html`
      <div part="input-group" class="input-group">
        <div class="input-group__prefix">
          <slot name="prefix"></slot>
        </div>
        <div class="input-group__control">
          <slot></slot>
        </div>
        <div class="input-group__suffix">
          <slot name="suffix"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-input-group': InputGroup;
  }
}
