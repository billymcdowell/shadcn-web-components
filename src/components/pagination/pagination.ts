import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokensBase } from '../../styles/index.js';

const linkStyles = css`
  :host {
    display: inline-flex;
  }

  a {
    display: inline-flex;
    min-width: 2.25rem;
    height: 2.25rem;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-1);
    padding: 0 var(--spacing-3);
    border: 1px solid transparent;
    border-radius: var(--pagination-border-radius, var(--radius-md));
    background: transparent;
    color: var(--pagination-color, var(--foreground));
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-medium);
    line-height: var(--leading-none);
    text-decoration: none;
    white-space: nowrap;
    transition: color var(--transition-fast), background-color var(--transition-fast),
      border-color var(--transition-fast), box-shadow var(--transition-fast);
  }

  a:hover:not([aria-disabled='true']) {
    background: var(--pagination-hover-background, var(--accent));
    color: var(--pagination-hover-color, var(--accent-foreground));
  }

  a:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  a[aria-current='page'] {
    border-color: var(--pagination-active-border, var(--input));
    background: var(--pagination-active-background, var(--background));
    color: var(--pagination-active-color, var(--foreground));
  }

  a[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg,
  ::slotted(svg) {
    width: 1rem;
    height: 1rem;
    flex: none;
  }

  .direction {
    min-width: 0;
  }

  @media (max-width: 39.999rem) {
    .direction {
      width: 2.25rem;
      padding: 0;
    }

    .direction-text {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  }
`;

/**
 * Centers page navigation within its available width.
 *
 * @element shadcn-pagination
 * @slot - A `shadcn-pagination-content` element.
 * @csspart nav - The navigation landmark.
 */
@customElement('shadcn-pagination')
export class Pagination extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      nav {
        display: contents;
      }
    `,
  ];

  render() {
    return html`<nav part="nav" aria-label="Pagination"><slot></slot></nav>`;
  }
}

/**
 * List containing pagination items.
 *
 * @element shadcn-pagination-content
 * @slot - `shadcn-pagination-item` elements.
 * @csspart list - The pagination list.
 * @cssprop --pagination-gap - Space between pagination items.
 */
@customElement('shadcn-pagination-content')
export class PaginationContent extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        display: block;
      }

      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--pagination-gap, var(--spacing-1));
        padding: 0;
        margin: 0;
        list-style: none;
      }
    `,
  ];

  render() {
    return html`<ul part="list"><slot></slot></ul>`;
  }
}

/**
 * A single item in a pagination list.
 *
 * @element shadcn-pagination-item
 * @slot - A pagination link, direction link, or ellipsis.
 * @csspart item - The list item.
 */
@customElement('shadcn-pagination-item')
export class PaginationItem extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
  `;

  render() {
    return html`<li part="item"><slot></slot></li>`;
  }
}

/**
 * A page link with active and disabled states.
 *
 * @element shadcn-pagination-link
 * @slot - The page label.
 * @csspart link - The native anchor.
 * @cssprop --pagination-border-radius - Link corner radius.
 * @cssprop --pagination-color - Link text color.
 * @cssprop --pagination-hover-background - Link hover background.
 * @cssprop --pagination-hover-color - Link hover text color.
 * @cssprop --pagination-active-background - Current-page background.
 * @cssprop --pagination-active-border - Current-page border color.
 * @cssprop --pagination-active-color - Current-page text color.
 */
@customElement('shadcn-pagination-link')
export class PaginationLink extends LitElement {
  static styles = [tokensBase, linkStyles];

  /** Destination URL. Omitted from the anchor when disabled. */
  @property({ type: String }) href = '#';

  /** Browsing context in which to open the link. */
  @property({ type: String }) target = '';

  /** Relationship between the current document and the destination. */
  @property({ type: String }) rel = '';

  /** Accessible label when the visible page label is insufficient. */
  @property({ type: String }) label = '';

  /** Whether this link represents the current page. */
  @property({ type: Boolean, reflect: true }) current = false;

  /** Whether navigation is unavailable. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  protected renderAnchor(content = html`<slot></slot>`, className = '') {
    return html`
      <a
        part="link"
        class=${className}
        href=${this.disabled ? nothing : this.href}
        target=${this.target || nothing}
        rel=${this.rel || nothing}
        aria-label=${this.label || nothing}
        aria-current=${this.current ? 'page' : nothing}
        aria-disabled=${this.disabled ? 'true' : nothing}
        tabindex=${this.disabled ? '-1' : nothing}
        @click=${this.handleClick}
      >${content}</a>
    `;
  }

  render() {
    return this.renderAnchor();
  }

  private handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}

/**
 * Link to the previous page.
 *
 * @element shadcn-pagination-previous
 * @slot - Custom visible text.
 * @slot icon - Custom previous-page icon.
 * @csspart link - The native anchor.
 */
@customElement('shadcn-pagination-previous')
export class PaginationPrevious extends PaginationLink {
  /** Visible direction text. */
  @property({ type: String }) text = 'Previous';

  constructor() {
    super();
    this.label = 'Go to previous page';
  }

  render() {
    return this.renderAnchor(
      html`
        <slot name="icon">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </slot>
        <span class="direction-text"><slot>${this.text}</slot></span>
      `,
      'direction'
    );
  }
}

/**
 * Link to the next page.
 *
 * @element shadcn-pagination-next
 * @slot - Custom visible text.
 * @slot icon - Custom next-page icon.
 * @csspart link - The native anchor.
 */
@customElement('shadcn-pagination-next')
export class PaginationNext extends PaginationLink {
  /** Visible direction text. */
  @property({ type: String }) text = 'Next';

  constructor() {
    super();
    this.label = 'Go to next page';
  }

  render() {
    return this.renderAnchor(
      html`
        <span class="direction-text"><slot>${this.text}</slot></span>
        <slot name="icon">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </slot>
      `,
      'direction'
    );
  }
}

/**
 * Indicates omitted pages in a pagination list.
 *
 * @element shadcn-pagination-ellipsis
 * @slot - A custom ellipsis icon.
 * @csspart ellipsis - The ellipsis container.
 */
@customElement('shadcn-pagination-ellipsis')
export class PaginationEllipsis extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        display: inline-flex;
      }

      span {
        display: inline-flex;
        width: 2.25rem;
        height: 2.25rem;
        align-items: center;
        justify-content: center;
      }

      svg,
      ::slotted(svg) {
        width: 1rem;
        height: 1rem;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `,
  ];

  /** Accessible text describing the omitted pages. */
  @property({ type: String }) label = 'More pages';

  render() {
    return html`
      <span part="ellipsis" aria-hidden="true">
        <slot>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </slot>
      </span>
      <span class="sr-only">${this.label}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-pagination': Pagination;
    'shadcn-pagination-content': PaginationContent;
    'shadcn-pagination-item': PaginationItem;
    'shadcn-pagination-link': PaginationLink;
    'shadcn-pagination-previous': PaginationPrevious;
    'shadcn-pagination-next': PaginationNext;
    'shadcn-pagination-ellipsis': PaginationEllipsis;
  }
}
