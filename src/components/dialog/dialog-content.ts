import { LitElement, html, nothing, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextConsumerController } from '../../context/index.js';
import { StateSyncController } from '../../controllers/state-sync-controller.js';
import { FocusTrapController } from '../../controllers/focus-trap-controller.js';
import { tokensBase, tokensMotion } from '../../styles/index.js';
import { dialogContext, type DialogContextValue } from './dialog-core.js';

@customElement('shadcn-dialog-portal')
export class DialogPortal extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        position: fixed;
        inset: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
    `,
  ];

  private contextConsumer: ContextConsumerController<DialogContextValue>;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, dialogContext);
  }

  render() {
    if (!this.contextConsumer.value?.open) {
      return nothing;
    }
    return html`<slot></slot>`;
  }
}

@customElement('shadcn-dialog-overlay')
export class DialogOverlay extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        position: fixed;
        inset: 0;
        z-index: 49;
        background-color: oklch(0 0 0 / 80%);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        transition: opacity var(--transition-base);
        pointer-events: none;
      }

      :host([data-state='open']) {
        opacity: 1;
        pointer-events: auto;
      }

      :host([data-state='closed']) {
        opacity: 0;
        pointer-events: none;
      }
    `,
  ];

  private contextConsumer: ContextConsumerController<DialogContextValue>;
  private _stateSync: StateSyncController<DialogContextValue>;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, dialogContext);
    this._stateSync = new StateSyncController(this, () => this.contextConsumer.value);
    void this._stateSync;
  }

  willUpdate(): void {
    const contextValue = this.contextConsumer.value;
    if (contextValue) {
      this.dataset.state = contextValue.open ? 'open' : 'closed';
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', this.handleOverlayClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleOverlayClick);
  }

  private handleOverlayClick = (event: MouseEvent): void => {
    if (event.target === this) {
      this.contextConsumer.value?.setOpen(false);
    }
  };

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('shadcn-dialog-content')
export class DialogContent extends LitElement {
  static styles = [
    tokensBase,
    tokensMotion,
    css`
      :host {
        position: fixed;
        inset: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 49;
        background-color: oklch(0 0 0 / 80%);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        transition: opacity var(--transition-base);
        pointer-events: auto;
        animation: shadcn-fade-in var(--transition-base);
      }

      :host([data-state='open']) .backdrop { opacity: 1; }
      :host([data-state='closed']) .backdrop { opacity: 0; }

      .dialog-container {
        position: relative;
        z-index: 50;
        display: flex;
        width: 100%;
        max-width: 32rem;
        flex-direction: column;
        gap: var(--spacing-4);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background-color: var(--background);
        padding: var(--spacing-6);
        color: var(--foreground);
        box-shadow: 0 10px 15px -3px oklch(0 0 0 / 0.1), 0 4px 6px -4px oklch(0 0 0 / 0.1);
        transition: opacity var(--transition-base), transform var(--transition-base);
        transform-origin: center;
        pointer-events: auto;
        animation: shadcn-zoom-in var(--transition-base);
      }

      :host([data-state='open']) .dialog-container { opacity: 1; transform: scale(1); }
      :host([data-state='closed']) .dialog-container { opacity: 0; transform: scale(0.95); }

      @media (prefers-reduced-motion: reduce) {
        .backdrop, .dialog-container { animation: none; transition-duration: 0ms; }
      }

      @media (max-width: 640px) {
        .dialog-container {
          margin: var(--spacing-4);
          max-width: calc(100% - var(--spacing-8));
        }
      }

      [role='dialog'] {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-4);
        width: 100%;
      }
    `,
  ];

  private contextConsumer: ContextConsumerController<DialogContextValue>;
  private _stateSync: StateSyncController<DialogContextValue>;
  private focusTrap: FocusTrapController;
  private dialogContainer: HTMLElement | null = null;
  private originalBodyOverflow: string | null = null;
  private backdropElement: HTMLElement | null = null;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, dialogContext);
    this._stateSync = new StateSyncController(this, () => this.contextConsumer.value);
    void this._stateSync;
    this.focusTrap = new FocusTrapController(this);
  }

  private ensureElementId(element: HTMLElement, prefix: string): string {
    if (!element.id) {
      element.id = `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    return element.id;
  }

  private linkAriaAttributes(): void {
    if (!this.dialogContainer) return;

    const titleElement = this.querySelector<HTMLElement>('shadcn-dialog-title');
    const descriptionElement = this.querySelector<HTMLElement>('shadcn-dialog-description');

    if (titleElement) {
      this.dialogContainer.setAttribute('aria-labelledby', this.ensureElementId(titleElement, 'shadcn-dialog-title'));
    } else {
      this.dialogContainer.removeAttribute('aria-labelledby');
    }

    if (descriptionElement) {
      this.dialogContainer.setAttribute('aria-describedby', this.ensureElementId(descriptionElement, 'shadcn-dialog-description'));
    } else {
      this.dialogContainer.removeAttribute('aria-describedby');
    }
  }

  firstUpdated(): void {
    this.dialogContainer = this.shadowRoot?.querySelector('[role="dialog"]') as HTMLElement | null;
    this.backdropElement = this.shadowRoot?.querySelector('.backdrop') as HTMLElement | null;
    this.linkAriaAttributes();
  }

  willUpdate(): void {
    const contextValue = this.contextConsumer.value;
    if (contextValue) {
      this.dataset.state = contextValue.open ? 'open' : 'closed';
    }
  }

  updated(): void {
    const contextValue = this.contextConsumer.value;
    this.dialogContainer = this.shadowRoot?.querySelector('[role="dialog"]') as HTMLElement | null;
    this.backdropElement = this.shadowRoot?.querySelector('.backdrop') as HTMLElement | null;

    if (contextValue?.open) {
      this.linkAriaAttributes();
    }

    if (contextValue?.open) {
      this.lockBodyScroll();
      requestAnimationFrame(() => {
        if (this.dialogContainer && this.isConnected) {
          try {
            this.focusTrap.activate();
          } catch (error) {
            console.debug('Focus trap activation deferred:', error);
          }
        }
      });
    } else {
      this.unlockBodyScroll();
      this.focusTrap.deactivate();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.unlockBodyScroll();
  }

  private lockBodyScroll(): void {
    if (typeof document !== 'undefined' && this.originalBodyOverflow === null) {
      this.originalBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
  }

  private unlockBodyScroll(): void {
    if (typeof document !== 'undefined' && this.originalBodyOverflow !== null) {
      document.body.style.overflow = this.originalBodyOverflow;
      this.originalBodyOverflow = null;
    }
  }

  private handleBackdropClick = (event: MouseEvent): void => {
    if (event.target === this.backdropElement) {
      this.contextConsumer.value?.setOpen(false);
    }
  };

  render() {
    const contextValue = this.contextConsumer.value;
    if (!contextValue?.open) {
      return nothing;
    }

    return html`
      <div class="backdrop" @click=${this.handleBackdropClick}></div>
      <div class="dialog-container">
        <div role="dialog" aria-modal="true">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
