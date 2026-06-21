import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokensBase } from '../../styles/index.js';

/**
 * Coordinates a collapsible trigger and content region.
 *
 * @element shadcn-collapsible
 * @slot - Collapsible trigger and content elements.
 * @fires collapsible-change - Fired when the open state changes.
 */
@customElement('shadcn-collapsible')
export class Collapsible extends LitElement {
  static styles = [tokensBase, css`:host { display: block; }`];

  /** Whether the content is visible. */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Whether interaction is disabled. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('collapsible-toggle', this._handleToggle as EventListener);
  }

  disconnectedCallback() {
    this.removeEventListener('collapsible-toggle', this._handleToggle as EventListener);
    super.disconnectedCallback();
  }

  protected render() {
    return html`<slot @slotchange=${this._syncChildren}></slot>`;
  }

  protected updated() {
    this._syncChildren();
  }

  private _handleToggle = () => {
    if (this.disabled) return;
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent('collapsible-change', {
      bubbles: true,
      composed: true,
      detail: { open: this.open },
    }));
  };

  private _syncChildren = () => {
    this.querySelectorAll<CollapsibleTrigger>('shadcn-collapsible-trigger').forEach((trigger) => {
      trigger.open = this.open;
      trigger.disabled = this.disabled;
    });
    this.querySelectorAll<CollapsibleContent>('shadcn-collapsible-content').forEach((content) => {
      content.open = this.open;
    });
  };
}

/**
 * Button that toggles its parent collapsible.
 *
 * @element shadcn-collapsible-trigger
 * @slot - Trigger content.
 * @fires collapsible-toggle - Requests that the parent toggle.
 * @csspart trigger - Native trigger button.
 */
@customElement('shadcn-collapsible-trigger')
export class CollapsibleTrigger extends LitElement {
  static styles = [tokensBase, css`
    :host { display: inline-block; }
    button { appearance: none; border: 0; background: transparent; color: inherit; font: inherit; padding: 0; cursor: pointer; }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; border-radius: var(--radius-sm); }
    button:disabled { cursor: not-allowed; opacity: .5; }
  `];

  @property({ type: Boolean }) open = false;
  @property({ type: Boolean }) disabled = false;

  protected render() {
    return html`<button part="trigger" type="button" aria-expanded=${this.open} ?disabled=${this.disabled} @click=${this._toggle}><slot></slot></button>`;
  }

  focus(options?: FocusOptions) {
    this.shadowRoot?.querySelector('button')?.focus(options);
  }

  private _toggle() {
    this.dispatchEvent(new CustomEvent('collapsible-toggle', { bubbles: true, composed: true }));
  }
}

/**
 * Content region controlled by a collapsible trigger.
 *
 * @element shadcn-collapsible-content
 * @slot - Collapsible content.
 * @csspart content - Content region.
 */
@customElement('shadcn-collapsible-content')
export class CollapsibleContent extends LitElement {
  static styles = [tokensBase, css`
    :host { display: block; }
    :host { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--transition-normal); }
    :host([open]) { grid-template-rows: 1fr; }
    .content { min-height: 0; overflow: hidden; }
    @media (prefers-reduced-motion: reduce) { :host { transition-duration: 0ms; } }
  `];

  @property({ type: Boolean, reflect: true }) open = false;

  protected render() {
    return html`<div part="content" class="content" ?inert=${!this.open} aria-hidden=${String(!this.open)}><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-collapsible': Collapsible;
    'shadcn-collapsible-trigger': CollapsibleTrigger;
    'shadcn-collapsible-content': CollapsibleContent;
  }
}
