import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A card container component for grouping related content.
 * 
 * @element shadcn-card
 * 
 * @slot - Card content
 * @slot header - Card header content
 * @slot footer - Card footer content
 * 
 * @cssprop --card-bg - Background color override
 * @cssprop --card-border - Border color override
 */
@customElement('shadcn-card')
export class Card extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      .card {
        background-color: var(--card-bg, var(--card));
        border: 1px solid var(--card-border, var(--border));
        border-radius: var(--radius-lg);
        color: var(--card-foreground);
      }

      .card__header {
        padding: var(--spacing-6);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1-5);
      }

      .card__header:empty {
        display: none;
      }

      .card__content {
        padding: var(--spacing-6);
        padding-top: 0;
      }

      .card__footer {
        padding: var(--spacing-6);
        padding-top: 0;
        display: flex;
        align-items: center;
      }

      .card__footer:empty {
        display: none;
      }
    `,
    ];

    render() {
        return html`
      <div part="card" class="card">
        <div class="card__header">
          <slot name="header"></slot>
        </div>
        <div class="card__content">
          <slot></slot>
        </div>
        <div class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
    }
}

/**
 * Card header component for styled card headers.
 * 
 * @element shadcn-card-header
 * 
 * @slot - Header content
 */
@customElement('shadcn-card-header')
export class CardHeader extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }
    `,
    ];

    render() {
        return html`<slot></slot>`;
    }
}

/**
 * Card title component for styled card titles.
 * 
 * @element shadcn-card-title
 * 
 * @slot - Title text
 */
@customElement('shadcn-card-title')
export class CardTitle extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
        font-size: var(--font-size-2xl);
        font-weight: var(--font-semibold);
        line-height: var(--leading-none);
        letter-spacing: var(--tracking-tight);
      }
    `,
    ];

    render() {
        return html`<slot></slot>`;
    }
}

/**
 * Card description component for styled card descriptions.
 * 
 * @element shadcn-card-description
 * 
 * @slot - Description text
 */
@customElement('shadcn-card-description')
export class CardDescription extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
      }
    `,
    ];

    render() {
        return html`<slot></slot>`;
    }
}

/**
 * Card content component for main card content.
 * 
 * @element shadcn-card-content
 * 
 * @slot - Content
 */
@customElement('shadcn-card-content')
export class CardContent extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }
    `,
    ];

    render() {
        return html`<slot></slot>`;
    }
}

/**
 * Card footer component for card footers.
 * 
 * @element shadcn-card-footer
 * 
 * @slot - Footer content
 */
@customElement('shadcn-card-footer')
export class CardFooter extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
      }
    `,
    ];

    render() {
        return html`<slot></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-card': Card;
        'shadcn-card-header': CardHeader;
        'shadcn-card-title': CardTitle;
        'shadcn-card-description': CardDescription;
        'shadcn-card-content': CardContent;
        'shadcn-card-footer': CardFooter;
    }
}
