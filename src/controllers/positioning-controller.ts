import { ReactiveController, ReactiveElement } from 'lit';
import { computePosition, offset, flip, shift, autoUpdate } from '@floating-ui/dom';

/**
 * A Lit ReactiveController that manages dynamic positioning of floating elements
 * relative to anchor elements using Floating UI.
 * 
 * This controller is essential for positioning non-modal components like Popover and Tooltip.
 * It uses Floating UI's `computePosition` function with middleware (`offset`, `flip`, `shift`)
 * to calculate optimal positioning and automatically updates the position on scroll, resize,
 * and other environmental changes.
 * 
 * @example
 * ```ts
 * class MyPopover extends LitElement {
 *   private positioningController = new PositioningController(this);
 *   private anchorRef: HTMLElement;
 *   private popoverRef: HTMLElement;
 * 
 *   firstUpdated() {
 *     this.positioningController.setElements(this.anchorRef, this.popoverRef);
 *     this.positioningController.start();
 *   }
 * }
 * ```
 */
export class PositioningController implements ReactiveController {
  private host: ReactiveElement;
  private anchorElement: HTMLElement | null = null;
  private floatingElement: HTMLElement | null = null;
  private cleanup: (() => void) | null = null;

  constructor(host: ReactiveElement) {
    this.host = host;
    host.addController(this);
    // Mark as intentionally used for side effects
    void this.host;
  }

  /**
   * Sets the anchor and floating elements for positioning.
   * @param anchor - The element that serves as the reference point for positioning
   * @param floater - The element that will be positioned relative to the anchor
   */
  setElements(anchor: HTMLElement, floater: HTMLElement): void {
    this.anchorElement = anchor;
    this.floatingElement = floater;
  }

  /**
   * Calculates and applies the floating element's position relative to the anchor.
   * Uses Floating UI's computePosition with offset, flip, and shift middleware.
   */
  private async updatePosition(): Promise<void> {
    if (!this.anchorElement || !this.floatingElement) {
      return;
    }

    const { x, y } = await computePosition(this.anchorElement, this.floatingElement, {
      middleware: [offset(8), flip(), shift({ padding: 8 })],
    });

    // Apply the calculated position
    Object.assign(this.floatingElement.style, {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  /**
   * Called when the host element is connected to the DOM.
   * Starts automatic position updates when elements are set.
   */
  hostConnected(): void {
    // Auto-update will be started when elements are set
  }

  /**
   * Called when the host element is disconnected from the DOM.
   * Ensures cleanup to prevent memory leaks.
   */
  hostDisconnected(): void {
    if (this.cleanup) {
      this.cleanup();
      this.cleanup = null;
    }
  }

  /**
   * Starts automatic position updates.
   * Should be called after setElements() to begin dynamic repositioning.
   */
  start(): void {
    if (!this.anchorElement || !this.floatingElement) {
      return;
    }

    // Stop any existing auto-update
    if (this.cleanup) {
      this.cleanup();
    }

    // Start auto-update with the updatePosition callback
    this.cleanup = autoUpdate(
      this.anchorElement,
      this.floatingElement,
      () => this.updatePosition()
    );
  }

  /**
   * Stops automatic position updates.
   */
  stop(): void {
    if (this.cleanup) {
      this.cleanup();
      this.cleanup = null;
    }
  }
}
