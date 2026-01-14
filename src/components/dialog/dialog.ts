import { LitElement, html, nothing, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ContextConsumerController, ContextProviderController, createContext } from '../../context';
// import { dialogContext, DialogContextValue } from './dialog-context.js';
import { StateSyncController } from '../../controllers/state-sync-controller';
import { FocusTrapController } from '../../controllers/focus-trap-controller';
import { tokens } from '../../styles/index.js';

/**
 * The shape of the dialog context value.
 * Contains the open state and a function to update it.
 */
export interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

/**
 * The dialog context key.
 * Used to provide and consume dialog state across the component tree.
 */
export const dialogContext = createContext<DialogContextValue>('shadcn-dialog');

/**
 * The root dialog component that manages the dialog's open state.
 * Acts as a context provider for child components.
 *
 * @example
 * ```html
 * <shadcn-dialog>
 *   <shadcn-dialog-trigger>
 *     <button>Open Dialog</button>
 *   </shadcn-dialog-trigger>
 *   <shadcn-dialog-content>
 *     <p>Dialog content</p>
 *   </shadcn-dialog-content>
 * </shadcn-dialog>
 * ```
 */
@customElement('shadcn-dialog')
export class Dialog extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: contents;
      }
    `,
  ];

  /**
   * Whether the dialog is open.
   * This property is reflected to the attribute.
   * @prop {boolean} open - Controls the open/closed state of the dialog
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  private contextProvider: ContextProviderController<DialogContextValue>;
  private escapeKeyHandler: ((event: KeyboardEvent) => void) | null = null;

  constructor() {
    super();
    this.contextProvider = new ContextProviderController(
      this,
      dialogContext,
      {
        open: this.open,
        setOpen: (open: boolean) => {
          this.open = open;
        },
      }
    );
  }

  /**
   * Handles the Escape key press to close the dialog.
   */
  private handleEscapeKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.open) {
      this.open = false;
      this.dispatchEvent(
        new CustomEvent('close', {
          bubbles: true,
          composed: true,
        })
      );
    }
  };

  willUpdate(): void {
    this.dataset.state = this.open ? 'open' : 'closed';
  }

  /**
   * Updates the context value when the open property changes.
   * Also manages the Escape key event listener.
   */
  updated(changedProperties: Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    
    if (changedProperties.has('open')) {
      this.contextProvider.setValue({
        open: this.open,
        setOpen: (open: boolean) => {
          this.open = open;
        },
      });

      // Add or remove Escape key listener based on open state
      if (this.open) {
        // Add event listener when dialog opens
        this.escapeKeyHandler = this.handleEscapeKey;
        window.addEventListener('keydown', this.escapeKeyHandler);
      } else {
        // Remove event listener when dialog closes
        if (this.escapeKeyHandler) {
          window.removeEventListener('keydown', this.escapeKeyHandler);
          this.escapeKeyHandler = null;
        }
      }
    }
  }

  /**
   * Cleanup: Remove event listener when component is disconnected.
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.escapeKeyHandler) {
      window.removeEventListener('keydown', this.escapeKeyHandler);
      this.escapeKeyHandler = null;
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}



/**
 * The dialog trigger component that opens the dialog when clicked.
 * Wraps its slotted content and adds click handling to open the dialog.
 *
 * @example
 * ```html
 * <shadcn-dialog-trigger>
 *   <button>Open Dialog</button>
 * </shadcn-dialog-trigger>
 * ```
 */
@customElement('shadcn-dialog-trigger')
export class DialogTrigger extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: inline-block;
      }
    `,
  ];

  private contextConsumer: ContextConsumerController<DialogContextValue>;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, dialogContext);
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Attach click handler to the host element
    // Clicks on slotted content will bubble up to the host
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  private handleClick = (): void => {
    const contextValue = this.contextConsumer.value;
    if (contextValue) {
      contextValue.setOpen(true);
    }
  };

  render() {
    return html`<slot></slot>`;
  }
}



/**
 * The dialog title component.
 * A shell component that renders its slotted content.
 * Future implementations may handle accessibility attributes and ARIA labeling.
 *
 * @example
 * ```html
 * <shadcn-dialog-title>Edit Profile</shadcn-dialog-title>
 * ```
 */
@customElement('shadcn-dialog-title')
export class DialogTitle extends LitElement {
  static styles = [
    tokens,
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



/**
 * The dialog portal component.
 * A shell component that renders its slotted content.
 * Future implementations may handle portal rendering to a different DOM location.
 *
 * @example
 * ```html
 * <shadcn-dialog-portal>
 *   <shadcn-dialog-overlay></shadcn-dialog-overlay>
 *   <shadcn-dialog-content></shadcn-dialog-content>
 * </shadcn-dialog-portal>
 * ```
 */
@customElement('shadcn-dialog-portal')
export class DialogPortal extends LitElement {
  static styles = [
    tokens,
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
    const contextValue = this.contextConsumer.value;
    
    // Only render portal content when dialog is open
    if (!contextValue || !contextValue.open) {
      return nothing;
    }

    return html`<slot></slot>`;
  }
}



/**
 * The dialog overlay component.
 * A shell component that renders its slotted content.
 * Future implementations may handle overlay styling and click-to-close behavior.
 *
 * @example
 * ```html
 * <shadcn-dialog-overlay class="my-overlay-styles">
 *   Overlay content
 * </shadcn-dialog-overlay>
 * ```
 */
@customElement('shadcn-dialog-overlay')
export class DialogOverlay extends LitElement {
  static styles = [
    tokens,
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
  // StateSyncController triggers re-renders when context changes (used for side effects)
  private _stateSync: StateSyncController<DialogContextValue>;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, dialogContext);
    // StateSyncController is used for side effects (triggers re-renders on context changes)
    this._stateSync = new StateSyncController(this, () => this.contextConsumer.value);
    void this._stateSync; // Mark as intentionally used for side effects
  }

  willUpdate(): void {
    const contextValue = this.contextConsumer.value;
    if (contextValue) {
      this.dataset.state = contextValue.open ? 'open' : 'closed';
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Add click handler to close dialog when overlay is clicked
    this.addEventListener('click', this.handleOverlayClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleOverlayClick);
  }

  private handleOverlayClick = (event: MouseEvent): void => {
    // Only close if clicking directly on the overlay, not on child elements
    if (event.target === this) {
      const contextValue = this.contextConsumer.value;
      if (contextValue) {
        contextValue.setOpen(false);
      }
    }
  };

  render() {
    return html`<slot></slot>`;
  }
}


/**
 * The dialog description component.
 * A shell component that renders its slotted content.
 * Used for providing additional context about the dialog's purpose.
 * Automatically linked to the dialog via aria-describedby.
 *
 * @example
 * ```html
 * <shadcn-dialog-description>
 *   Make changes to your profile here. Click save when you're done.
 * </shadcn-dialog-description>
 * ```
 */
@customElement('shadcn-dialog-description')
export class DialogDescription extends LitElement {
  static styles = [
    tokens,
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


/**
 * The dialog content component that conditionally renders its slotted content
 * based on the dialog's open state.
 *
 * @example
 * ```html
 * <shadcn-dialog-content>
 *   <p>This content only appears when the dialog is open.</p>
 * </shadcn-dialog-content>
 * ```
 */
@customElement('shadcn-dialog-content')
export class DialogContent extends LitElement {
  static styles = [
    tokens,
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
      }

      :host([data-state='open']) .backdrop {
        opacity: 1;
      }

      :host([data-state='closed']) .backdrop {
        opacity: 0;
      }

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
      }

      :host([data-state='open']) .dialog-container {
        opacity: 1;
        transform: scale(1);
      }

      :host([data-state='closed']) .dialog-container {
        opacity: 0;
        transform: scale(0.95);
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
  // StateSyncController triggers re-renders when context changes (used for side effects)
  private _stateSync: StateSyncController<DialogContextValue>;
  private focusTrap: FocusTrapController;
  private dialogContainer: HTMLElement | null = null;
  private originalBodyOverflow: string = '';
  private backdropElement: HTMLElement | null = null;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, dialogContext);
    // StateSyncController is used for side effects (triggers re-renders on context changes)
    this._stateSync = new StateSyncController(this, () => this.contextConsumer.value);
    void this._stateSync; // Mark as intentionally used for side effects
    this.focusTrap = new FocusTrapController(this);
  }

  /**
   * Generates a unique ID for an element if it doesn't already have one.
   */
  private ensureElementId(element: HTMLElement, prefix: string): string {
    if (!element.id) {
      // Generate a unique ID using a timestamp and random number
      element.id = `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    return element.id;
  }

  /**
   * Links the dialog title and description to the dialog container via ARIA attributes.
   */
  private linkAriaAttributes(): void {
    if (!this.dialogContainer) {
      return;
    }

    // Find the default slot
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) {
      return;
    }

    // Get assigned elements from the slot
    const assignedElements = slot.assignedElements({ flatten: true });

    // Find shadcn-dialog-title and shadcn-dialog-description elements
    const titleElement = assignedElements.find(
      (el) => el.tagName?.toLowerCase() === 'shadcn-dialog-title'
    ) as HTMLElement | undefined;

    const descriptionElement = assignedElements.find(
      (el) => el.tagName?.toLowerCase() === 'shadcn-dialog-description'
    ) as HTMLElement | undefined;

    // Set aria-labelledby if title exists
    if (titleElement) {
      const titleId = this.ensureElementId(titleElement, 'shadcn-dialog-title');
      this.dialogContainer.setAttribute('aria-labelledby', titleId);
    } else {
      this.dialogContainer.removeAttribute('aria-labelledby');
    }

    // Set aria-describedby if description exists
    if (descriptionElement) {
      const descriptionId = this.ensureElementId(descriptionElement, 'shadcn-dialog-description');
      this.dialogContainer.setAttribute('aria-describedby', descriptionId);
    } else {
      this.dialogContainer.removeAttribute('aria-describedby');
    }
  }

  firstUpdated(): void {
    // Get reference to the dialog container and backdrop
    this.dialogContainer = this.shadowRoot?.querySelector('[role="dialog"]') as HTMLElement | null;
    this.backdropElement = this.shadowRoot?.querySelector('.backdrop') as HTMLElement | null;
    
    // Link ARIA attributes after the component is first rendered
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
    
    // Update references after render
    this.dialogContainer = this.shadowRoot?.querySelector('[role="dialog"]') as HTMLElement | null;
    this.backdropElement = this.shadowRoot?.querySelector('.backdrop') as HTMLElement | null;
    
    // Re-link ARIA attributes when content changes
    if (contextValue?.open) {
      this.linkAriaAttributes();
    }

    // Lock/unlock body scroll and manage focus trap
    if (contextValue?.open) {
      // Lock body scroll
      this.lockBodyScroll();
      
      // Use requestAnimationFrame to ensure the DOM is fully updated
      // and the dialog container is available
      requestAnimationFrame(() => {
        if (this.dialogContainer && this.isConnected) {
          try {
            this.focusTrap.activate();
          } catch (error) {
            // Focus trap activation may fail if there are no focusable elements
            // This can happen temporarily during rendering. The focus trap will
            // activate on the next update when elements are available.
            console.debug('Focus trap activation deferred:', error);
          }
        }
      });
    } else {
      // Unlock body scroll
      this.unlockBodyScroll();
      this.focusTrap.deactivate();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    // Clean up: unlock body scroll
    this.unlockBodyScroll();
  }

  /**
   * Locks body scroll when dialog is open
   */
  private lockBodyScroll(): void {
    if (typeof document !== 'undefined' && !this.originalBodyOverflow) {
      this.originalBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
  }

  /**
   * Unlocks body scroll when dialog is closed
   */
  private unlockBodyScroll(): void {
    if (typeof document !== 'undefined' && this.originalBodyOverflow !== undefined) {
      document.body.style.overflow = this.originalBodyOverflow;
      this.originalBodyOverflow = '';
    }
  }

  /**
   * Handles backdrop click to close dialog
   */
  private handleBackdropClick = (event: MouseEvent): void => {
    // Only close if clicking directly on the backdrop, not on child elements
    if (event.target === this.backdropElement) {
      const contextValue = this.contextConsumer.value;
      if (contextValue) {
        contextValue.setOpen(false);
      }
    }
  };

  render() {
    const contextValue = this.contextConsumer.value;
    
    // If context is not available or dialog is not open, render nothing
    if (!contextValue || !contextValue.open) {
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


/**
 * The dialog close component that closes the dialog when clicked.
 * Wraps its slotted content and adds click handling to close the dialog.
 *
 * @example
 * ```html
 * <shadcn-dialog-close>
 *   <button>Close</button>
 * </shadcn-dialog-close>
 * ```
 */
@customElement('shadcn-dialog-close')
export class DialogClose extends LitElement {
  static styles = [
    tokens,
    css`
      :host {
        display: inline-block;
      }
    `,
  ];

  private contextConsumer: ContextConsumerController<DialogContextValue>;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, dialogContext);
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Attach click handler to the host element
    // Clicks on slotted content will bubble up to the host
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  private handleClick = (): void => {
    const contextValue = this.contextConsumer.value;
    if (contextValue) {
      contextValue.setOpen(false);
    }
  };

  render() {
    return html`<slot></slot>`;
  }
}


/**
 * The dialog header component.
 * Used to group the dialog title and description together.
 *
 * @example
 * ```html
 * <shadcn-dialog-header>
 *   <shadcn-dialog-title>Edit Profile</shadcn-dialog-title>
 *   <shadcn-dialog-description>
 *     Make changes to your profile here.
 *   </shadcn-dialog-description>
 * </shadcn-dialog-header>
 * ```
 */
@customElement('shadcn-dialog-header')
export class DialogHeader extends LitElement {
  static styles = [
    tokens,
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


/**
 * The dialog footer component.
 * Used to group action buttons at the bottom of the dialog.
 *
 * @example
 * ```html
 * <shadcn-dialog-footer>
 *   <shadcn-dialog-close>
 *     <shadcn-button variant="outline">Cancel</shadcn-button>
 *   </shadcn-dialog-close>
 *   <shadcn-button>Save</shadcn-button>
 * </shadcn-dialog-footer>
 * ```
 */
@customElement('shadcn-dialog-footer')
export class DialogFooter extends LitElement {
  static styles = [
    tokens,
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
