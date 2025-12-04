import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A component for displaying keyboard shortcuts and key combinations.
 * 
 * @element shadcn-kbd
 * 
 * @slot - Key text (e.g., "Ctrl", "K", "⌘")
 * 
 * @cssprop --kbd-bg - Background color override
 * @cssprop --kbd-color - Text color override
 * @cssprop --kbd-border - Border color override
 */
@customElement('shadcn-kbd')
export class Kbd extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-block;
      }

      .kbd {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.125rem 0.375rem;
        font-size: var(--font-size-xs);
        font-family: var(--font-mono);
        font-weight: var(--font-semibold);
        line-height: var(--leading-none);
        background-color: var(--kbd-bg, var(--muted));
        color: var(--kbd-color, var(--muted-foreground));
        border: 1px solid var(--kbd-border, var(--border));
        border-radius: var(--radius-sm);
        box-shadow: 0 1px 0 0 var(--border);
        min-width: 1.5rem;
        text-align: center;
      }
    `,
    ];

    render() {
        return html`
      <kbd part="kbd" class="kbd">
        <slot></slot>
      </kbd>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-kbd': Kbd;
    }
}
