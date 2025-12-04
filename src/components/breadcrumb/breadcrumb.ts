import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * Breadcrumb container component.
 * 
 * @element shadcn-breadcrumb
 * 
 * @slot - Breadcrumb list items
 */
@customElement('shadcn-breadcrumb')
export class Breadcrumb extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      nav {
        display: block;
      }

      ol {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-1-5);
        padding: 0;
        margin: 0;
        list-style: none;
        font-family: var(--font-sans);
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
      }

      ::slotted(shadcn-breadcrumb-separator:last-child) {
        display: none;
      }
    `,
    ];

    render() {
        return html`
      <nav aria-label="breadcrumb">
        <ol>
          <slot></slot>
        </ol>
      </nav>
    `;
    }
}

/**
 * Breadcrumb item component.
 * 
 * @element shadcn-breadcrumb-item
 * 
 * @slot - Item content
 */
@customElement('shadcn-breadcrumb-item')
export class BreadcrumbItem extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-1-5);
      }
    `,
    ];

    render() {
        return html`
      <li style="display: contents;">
        <slot></slot>
      </li>
    `;
    }
}

/**
 * Breadcrumb link component.
 * 
 * @element shadcn-breadcrumb-link
 * 
 * @slot - Link text
 */
@customElement('shadcn-breadcrumb-link')
export class BreadcrumbLink extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-block;
      }

      a {
        color: inherit;
        text-decoration: none;
        transition: color var(--transition-fast);
      }

      a:hover {
        color: var(--foreground);
      }
    `,
    ];

    @property({ type: String }) href = '#';
    @property({ type: String }) target = '';

    render() {
        return html`
      <a href=${this.href} target=${this.target || undefined}>
        <slot></slot>
      </a>
    `;
    }
}

/**
 * Breadcrumb page component (current page).
 * 
 * @element shadcn-breadcrumb-page
 * 
 * @slot - Page title
 */
@customElement('shadcn-breadcrumb-page')
export class BreadcrumbPage extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-block;
        color: var(--foreground);
        font-weight: var(--font-normal);
      }
    `,
    ];

    render() {
        return html`
      <span aria-current="page">
        <slot></slot>
      </span>
    `;
    }
}

/**
 * Breadcrumb separator component.
 * 
 * @element shadcn-breadcrumb-separator
 * 
 * @slot - Custom separator icon
 */
@customElement('shadcn-breadcrumb-separator')
export class BreadcrumbSeparator extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-flex;
        align-items: center;
        color: var(--muted-foreground);
        opacity: 0.5;
      }

      svg {
        width: 1rem;
        height: 1rem;
      }
    `,
    ];

    render() {
        return html`
      <li role="presentation" aria-hidden="true" style="display: contents;">
        <slot>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </slot>
      </li>
    `;
    }
}

/**
 * Breadcrumb ellipsis component.
 * 
 * @element shadcn-breadcrumb-ellipsis
 */
@customElement('shadcn-breadcrumb-ellipsis')
export class BreadcrumbEllipsis extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        height: 1.5rem;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
    ];

    render() {
        return html`
      <span role="presentation" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-breadcrumb': Breadcrumb;
        'shadcn-breadcrumb-item': BreadcrumbItem;
        'shadcn-breadcrumb-link': BreadcrumbLink;
        'shadcn-breadcrumb-page': BreadcrumbPage;
        'shadcn-breadcrumb-separator': BreadcrumbSeparator;
        'shadcn-breadcrumb-ellipsis': BreadcrumbEllipsis;
    }
}
