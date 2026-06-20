import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ContextProviderController, ContextConsumerController, createContext } from '../../context';
import { PositioningController } from '../../controllers/positioning-controller';
import { StateSyncController } from '../../controllers/state-sync-controller';

/**
 * The shape of the popover context value.
 * Contains the open state and methods to control it.
 */
export interface PopoverContextValue {
  open: boolean;
  openPopover: () => void;
  close: () => void;
  toggle: () => void;
}

/**
 * The popover context key.
 * Used to provide and consume popover state across the component tree.
 */
export const popoverContext = createContext<PopoverContextValue>('shadcn-popover');

/**
 * The root popover component that manages the popover's open state.
 * Acts as a context provider for child components and handles positioning.
 *
 * @example
 * ```html
 * <shadcn-popover>
 *   <shadcn-popover-trigger>
 *     <button>Open Popover</button>
 *   </shadcn-popover-trigger>
 *   <shadcn-popover-content>
 *     <p>Popover content</p>
 *   </shadcn-popover-content>
 * </shadcn-popover>
 * ```
 */
@customElement('shadcn-popover')
export class Popover extends LitElement {
  /**
   * Whether the popover is open.
   * This property is reflected to the attribute.
   * @prop {boolean} open - Controls the open/closed state of the popover
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  private contextProvider: ContextProviderController<PopoverContextValue>;
  private positioningController: PositioningController;
  private triggerElement: HTMLElement | null = null;
  private contentElement: HTMLElement | null = null;
  private previouslyFocusedElement: HTMLElement | null = null;

  constructor() {
    super();
    // Initialize context provider with current open state
    this.contextProvider = new ContextProviderController(
      this,
      popoverContext,
      {
        open: this.open,
        openPopover: () => this.openPopover(),
        close: () => this.closePopover(),
        toggle: () => this.togglePopoverOpen(),
      }
    );
    this.positioningController = new PositioningController(this);
  }

  private openPopover(): void {
    if (this.open) {
      return;
    }

    this.previouslyFocusedElement = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    this.open = true;
  }

  private closePopover(): void {
    if (!this.open) {
      return;
    }

    this.open = false;
    this.dispatchEvent(
      new CustomEvent('close', {
        bubbles: true,
        composed: true,
      })
    );

    const focusTarget = this.triggerElement ?? this.previouslyFocusedElement;
    requestAnimationFrame(() => {
      focusTarget?.focus();
      this.previouslyFocusedElement = null;
    });
  }

  private togglePopoverOpen(): void {
    if (this.open) {
      this.closePopover();
    } else {
      this.openPopover();
    }
  }

  /**
   * Gets references to the slotted trigger and content elements.
   */
  private getSlottedElements(): void {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) {
      return;
    }

    const assignedElements = slot.assignedElements({ flatten: true });
    
    // Find shadcn-popover-trigger and shadcn-popover-content elements
    this.triggerElement = assignedElements.find(
      (el) => el.tagName?.toLowerCase() === 'shadcn-popover-trigger'
    ) as HTMLElement | null;

    this.contentElement = assignedElements.find(
      (el) => el.tagName?.toLowerCase() === 'shadcn-popover-content'
    ) as HTMLElement | null;
  }

  /**
   * Sets up positioning when the popover opens.
   */
  private setupPositioning(): void {
    if (!this.triggerElement || !this.contentElement) {
      return;
    }

    this.positioningController.setElements(this.triggerElement, this.contentElement);
    this.positioningController.start();
  }

  private updateTriggerAttributes(): void {
    if (!this.triggerElement) {
      return;
    }

    this.triggerElement.setAttribute('data-state', this.open ? 'open' : 'closed');
    this.triggerElement.setAttribute('aria-haspopup', 'dialog');
    this.triggerElement.setAttribute('aria-expanded', String(this.open));

    const assignedControl = this.triggerElement.querySelector<HTMLElement>(
      'button, [role="button"], a, input, select, textarea, [tabindex]'
    );
    assignedControl?.setAttribute('aria-expanded', String(this.open));
    assignedControl?.setAttribute('aria-haspopup', 'dialog');
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      this.closePopover();
    }
  };

  willUpdate(): void {
    this.dataset.state = this.open ? 'open' : 'closed';
  }

  firstUpdated(): void {
    // Get references to slotted elements after first render
    this.getSlottedElements();
    // Ensure context is synced with property value after initial render
    // This handles cases where the component is created with the open attribute
    // Safe to do in firstUpdated() as it's called after the first render completes
    this.contextProvider.setValue({
      open: this.open,
      openPopover: () => this.openPopover(),
      close: () => this.closePopover(),
      toggle: () => this.togglePopoverOpen(),
    });
    this.updateTriggerAttributes();
  }

  /**
   * Updates the context value when the open property changes.
   * Also handles positioning when the popover opens.
   */
  updated(changedProperties: Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    
    if (changedProperties.has('open')) {
      // Update context value when open property changes
      this.contextProvider.setValue({
        open: this.open,
        openPopover: () => this.openPopover(),
        close: () => this.closePopover(),
        toggle: () => this.togglePopoverOpen(),
      });
      this.updateTriggerAttributes();

      // Setup or cleanup positioning based on open state
      if (this.open) {
        document.addEventListener('keydown', this.handleKeyDown);
        // Refresh element references in case they changed
        this.getSlottedElements();
        this.updateTriggerAttributes();
        // Use requestAnimationFrame to ensure the DOM is fully updated
        requestAnimationFrame(() => {
          if (this.isConnected) {
            this.setupPositioning();
          }
        });
      } else {
        document.removeEventListener('keydown', this.handleKeyDown);
        this.positioningController.stop();
      }
    }
  }

  /**
   * Cleanup: Stop positioning when component is disconnected.
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleKeyDown);
    this.positioningController.stop();
  }

  render() {
    return html`<slot></slot>`;
  }
}


/**
 * The popover content component that conditionally renders its slotted content
 * based on the popover's open state. It also handles closing when clicking outside.
 *
 * @example
 * ```html
 * <shadcn-popover-content>
 *   <p>This content only appears when the popover is open.</p>
 * </shadcn-popover-content>
 * ```
 */
@customElement('shadcn-popover-content')
export class PopoverContent extends LitElement {
  private contextConsumer: ContextConsumerController<PopoverContextValue>;
  private stateSync: StateSyncController<PopoverContextValue>;
  private clickOutsideHandler: ((event: MouseEvent) => void) | null = null;
  private triggerElement: HTMLElement | null = null;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, popoverContext);
    // StateSyncController is used for side effects (updates data-state attribute)
    this.stateSync = new StateSyncController(this, () => this.contextConsumer.value);
    void this.stateSync; // Mark as intentionally used for side effects
  }

  /**
   * Finds the trigger element by looking for shadcn-popover-trigger in the parent's children.
   */
  private findTriggerElement(): HTMLElement | null {
    const parent = this.parentElement;
    if (!parent) {
      return null;
    }

    // Look for shadcn-popover-trigger in the parent's children
    const trigger = Array.from(parent.children).find(
      (el) => el.tagName?.toLowerCase() === 'shadcn-popover-trigger'
    ) as HTMLElement | null;

    return trigger;
  }

  /**
   * Handles clicks outside the popover content to close it.
   */
  private handleClickOutside = (event: MouseEvent): void => {
    const contextValue = this.contextConsumer.value;
    if (!contextValue || !contextValue.open) {
      return;
    }

    // Check if the click target is outside the popover content
    const path = event.composedPath();
    const isClickInsideContent = path.includes(this);
    const isClickInsideTrigger = this.triggerElement && path.includes(this.triggerElement);

    // Close if click is outside both content and trigger
    if (!isClickInsideContent && !isClickInsideTrigger) {
      contextValue.close();
    }
  };

  /**
   * Sets up or removes the click outside listener based on open state.
   */
  private setupClickOutsideListener(isOpen: boolean): void {
    if (isOpen) {
      if (this.clickOutsideHandler) {
        return;
      }
      // Add event listener when popover opens
      // Use mousedown instead of click to catch the event earlier
      this.clickOutsideHandler = this.handleClickOutside;
      document.addEventListener('mousedown', this.clickOutsideHandler);
    } else {
      // Remove event listener when popover closes
      if (this.clickOutsideHandler) {
        document.removeEventListener('mousedown', this.clickOutsideHandler);
        this.clickOutsideHandler = null;
      }
    }
  }

  firstUpdated(): void {
    // Find the trigger element
    this.triggerElement = this.findTriggerElement();
  }

  updated(): void {
    const contextValue = this.contextConsumer.value;
    
    if (!contextValue) {
      return;
    }

    // Setup or cleanup click outside listener
    this.setupClickOutsideListener(contextValue.open);
  }

  /**
   * Cleanup: Remove event listener when component is disconnected.
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.clickOutsideHandler) {
      document.removeEventListener('mousedown', this.clickOutsideHandler);
      this.clickOutsideHandler = null;
    }
  }

  render() {
    const contextValue = this.contextConsumer.value;
    
    // If context is not available, render nothing
    if (!contextValue) {
      return nothing;
    }
    
    // Only render if popover is explicitly open (strict check for true)
    if (contextValue.open !== true) {
      return nothing;
    }

    return html`
      <div role="region">
        <slot></slot>
      </div>
    `;
  }
}



/**
 * The popover trigger component that toggles the popover when clicked.
 * Wraps its slotted content and adds click handling to toggle the popover.
 *
 * @example
 * ```html
 * <shadcn-popover-trigger>
 *   <button>Open Popover</button>
 * </shadcn-popover-trigger>
 * ```
 */
@customElement('shadcn-popover-trigger')
export class PopoverTrigger extends LitElement {
  private contextConsumer: ContextConsumerController<PopoverContextValue>;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, popoverContext);
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
      contextValue.toggle();
    }
  };

  render() {
    return html`<slot></slot>`;
  }
}
