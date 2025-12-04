import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * Sidebar container.
 * 
 * @element shadcn-sidebar
 * 
 * @slot - Sidebar content
 */
@customElement('shadcn-sidebar')
export class Sidebar extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
        height: 100%;
      }

      .sidebar {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: var(--background);
        border-right: 1px solid var(--border);
        width: var(--sidebar-width, 250px);
        transition: width var(--transition-normal);
      }
      
      :host([collapsed]) .sidebar {
        width: var(--sidebar-collapsed-width, 64px);
      }
    `,
    ];

    @property({ type: Boolean, reflect: true }) collapsed = false;

    render() {
        return html`
      <aside class="sidebar">
        <slot></slot>
      </aside>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-sidebar': Sidebar;
    }
}
