import { ReactiveController, ReactiveElement } from 'lit';
import { createFocusTrap, FocusTrap } from 'focus-trap';

/**
 * A Lit ReactiveController that manages focus trapping within a specified element.
 * This controller is essential for modal accessibility as required for dialog components.
 */
export class FocusTrapController implements ReactiveController {
  private host: ReactiveElement;
  private focusTrap: FocusTrap | null = null;

  constructor(host: ReactiveElement) {
    this.host = host;
    host.addController(this);
  }

  /**
   * Called when the host element is connected to the DOM.
   * Currently unused but required by ReactiveController interface.
   */
  hostConnected(): void {
    // No-op for now
  }

  /**
   * Called when the host element is disconnected from the DOM.
   * Ensures cleanup of the focus trap to prevent memory leaks.
   */
  hostDisconnected(): void {
    this.deactivate();
  }

  /**
   * Activates the focus trap on the host element.
   * Initializes the focus-trap library and starts trapping focus.
   */
  activate(): void {
    if (this.focusTrap) {
      // If already active, deactivate first
      this.deactivate();
    }

    // Create a new focus trap instance for the host element
    this.focusTrap = createFocusTrap(this.host, {
      // Use default focus-trap configuration
      // This handles edge cases like finding tabbable elements
      returnFocusOnDeactivate: true,
    });

    // Start trapping focus
    this.focusTrap.activate();
  }

  /**
   * Deactivates the focus trap.
   * Stops trapping focus and cleans up the focus trap instance.
   */
  deactivate(): void {
    if (this.focusTrap) {
      this.focusTrap.deactivate();
      this.focusTrap = null;
    }
  }
}
