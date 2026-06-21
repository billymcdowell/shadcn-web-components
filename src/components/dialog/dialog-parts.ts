import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextConsumerController } from '../../context/index.js';
import { tokensBase } from '../../styles/index.js';
import { dialogContext, type DialogContextValue } from './dialog-core.js';

@customElement('shadcn-dialog-trigger')
export class DialogTrigger extends LitElement {
  static styles = [tokensBase, css`:host { display: inline-block; }`];

  private contextConsumer: ContextConsumerController<DialogContextValue>;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, dialogContext);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  private handleClick = (): void => {
    this.contextConsumer.value?.setOpen(true);
  };

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('shadcn-dialog-close')
export class DialogClose extends LitElement {
  static styles = [tokensBase, css`:host { display: inline-block; }`];

  private contextConsumer: ContextConsumerController<DialogContextValue>;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, dialogContext);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  private handleClick = (): void => {
    this.contextConsumer.value?.setOpen(false);
  };

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('shadcn-dialog-title')
export class DialogTitle extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        display: block;
        margin: 0;
        font-size: var(--font-size-lg);
        font-weight: var(--font-semibold);
        line-height: 1.5;
        letter-spacing: -0.025em;
        color: var(--foreground);
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('shadcn-dialog-description')
export class DialogDescription extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        display: block;
        margin: 0;
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
        line-height: 1.5;
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('shadcn-dialog-header')
export class DialogHeader extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
        text-align: center;
      }

      @media (min-width: 640px) {
        :host {
          text-align: left;
        }
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('shadcn-dialog-footer')
export class DialogFooter extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        display: flex;
        flex-direction: column-reverse;
        gap: var(--spacing-2);
      }

      @media (min-width: 640px) {
        :host {
          flex-direction: row;
          justify-content: flex-end;
        }
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }
}
