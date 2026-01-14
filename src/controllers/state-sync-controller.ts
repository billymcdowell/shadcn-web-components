import { ReactiveController, ReactiveElement } from 'lit';

/**
 * A Lit ReactiveController that synchronizes a state value to the host element's
 * `data-state` attribute. This is useful for headless components that need to
 * expose their internal state for styling purposes.
 *
 * @template T - The type of the state value (must have an `open` boolean property)
 *
 * @example
 * ```typescript
 * interface DialogContextValue {
 *   open: boolean;
 *   setOpen: (open: boolean) => void;
 * }
 *
 * class MyComponent extends LitElement {
 *   private contextConsumer = new ContextConsumerController(this, dialogContext);
 *   private stateSync = new StateSyncController(this, () => this.contextConsumer.value);
 *
 *   render() {
 *     // data-state will be automatically updated based on context.open
 *     return html`<div>Content</div>`;
 *   }
 * }
 * ```
 */
export class StateSyncController<T extends { open: boolean }> implements ReactiveController {
  private host: ReactiveElement;
  private getState: () => T | undefined;
  private previousOpen: boolean | undefined = undefined;

  /**
   * Creates a new StateSyncController.
   *
   * @param host - The host element that will have its data-state attribute updated
   * @param getState - A function that returns the current state object (or undefined)
   */
  constructor(host: ReactiveElement, getState: () => T | undefined) {
    this.host = host;
    this.getState = getState;
    host.addController(this);
  }

  /**
   * Called when the host element is connected to the DOM.
   * Initializes the data-state attribute.
   */
  hostConnected(): void {
    this.updateState();
  }

  /**
   * Called during the host element's update lifecycle.
   * Updates the data-state attribute if the open state has changed.
   */
  hostUpdate(): void {
    this.updateState();
  }

  /**
   * Updates the host element's data-state attribute based on the current state.
   */
  private updateState(): void {
    const state = this.getState();
    if (state === undefined) {
      return;
    }

    const currentOpen = state.open;
    
    // Only update if the state has changed to avoid unnecessary DOM updates
    if (this.previousOpen !== currentOpen) {
      this.host.dataset.state = currentOpen ? 'open' : 'closed';
      this.previousOpen = currentOpen;
    }
  }
}
