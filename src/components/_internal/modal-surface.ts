import { LitElement, css, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ContextConsumerController } from '../../context/index.js';
import { FocusTrapController } from '../../controllers/focus-trap-controller.js';
import { StateSyncController } from '../../controllers/state-sync-controller.js';
import { dialogContext, type DialogContextValue } from '../dialog/dialog.js';
import { tokensBase, tokensMotion } from '../../styles/index.js';

/** Internal shared modal surface used by dialog-derived components. */
export abstract class ModalSurface extends LitElement {
  static styles = [tokensBase,
    tokensMotion, css`
    :host { position: fixed; inset: 0; z-index: 50; display: flex; pointer-events: none; }
    .backdrop { position: fixed; inset: 0; z-index: 49; background: oklch(0 0 0 / 80%); pointer-events: auto; animation: shadcn-fade-in var(--transition-base); }
    .surface { position: relative; z-index: 50; box-sizing: border-box; display: flex; flex-direction: column; border: 1px solid var(--border); background: var(--background); color: var(--foreground); box-shadow: 0 20px 25px -5px oklch(0 0 0 / .2), 0 8px 10px -6px oklch(0 0 0 / .2); pointer-events: auto; animation: shadcn-zoom-in var(--transition-base); }
    @media (prefers-reduced-motion: reduce) { .surface, .backdrop { animation: none !important; transition-duration: 0ms !important; } }
  `];

  /** Accessible name used when no title element is present. */
  @property({ type: String, attribute: 'aria-label' }) accessibleLabel = '';
  @state() private discoveredLabel = '';

  protected abstract readonly titleSelector: string;
  protected dialogRole: 'dialog' | 'alertdialog' = 'dialog';
  protected get dismissOnBackdrop() { return true; }
  protected contextConsumer: ContextConsumerController<DialogContextValue>;
  private stateSync: StateSyncController<DialogContextValue>;
  private focusTrap: FocusTrapController;
  private originalBodyOverflow: string | null = null;

  constructor() {
    super();
    this.contextConsumer = new ContextConsumerController(this, dialogContext);
    this.stateSync = new StateSyncController(this, () => this.contextConsumer.value);
    this.focusTrap = new FocusTrapController(this);
    void this.stateSync;
  }

  protected updated(): void {
    const open = this.contextConsumer.value?.open === true;
    this.dataset.state = open ? 'open' : 'closed';
    if (open) {
      this.lockBodyScroll();
      requestAnimationFrame(() => {
        if (!this.isConnected || !this.contextConsumer.value?.open) return;
        try { this.focusTrap.activate(); } catch { /* Focus retries after slotted controls render. */ }
      });
    } else {
      this.unlockBodyScroll();
      this.focusTrap.deactivate();
    }
  }

  disconnectedCallback(): void {
    this.unlockBodyScroll();
    this.focusTrap.deactivate();
    super.disconnectedCallback();
  }

  protected render() {
    if (!this.contextConsumer.value?.open) return nothing;
    const label = this.accessibleLabel || this.discoveredLabel || 'Dialog';
    return html`
      <div part="overlay" class="backdrop" @click=${this.handleBackdropClick}></div>
      <section part="content" class="surface" role=${this.dialogRole} aria-modal="true" aria-label=${label}>
        <slot @slotchange=${this.updateAccessibleLabel}></slot>
      </section>
    `;
  }

  private updateAccessibleLabel = () => {
    this.discoveredLabel = this.querySelector(this.titleSelector)?.textContent?.trim() ?? '';
  };

  private handleBackdropClick = (event: MouseEvent) => {
    if (this.dismissOnBackdrop && event.target === event.currentTarget) this.contextConsumer.value?.setOpen(false);
  };

  private lockBodyScroll() {
    if (this.originalBodyOverflow !== null) return;
    this.originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  private unlockBodyScroll() {
    if (this.originalBodyOverflow === null) return;
    document.body.style.overflow = this.originalBodyOverflow;
    this.originalBodyOverflow = null;
  }
}
