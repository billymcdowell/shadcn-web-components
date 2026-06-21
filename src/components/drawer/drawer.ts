import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Dialog } from '../dialog/dialog-core.js';
import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../dialog/dialog-parts.js';
import { ModalSurface } from '../_internal/modal-surface.js';
import { tokensBase, tokensMotion } from '../../styles/index.js';

export type DrawerDirection = 'top' | 'right' | 'bottom' | 'left';

/**
 * Modal drawer rooted at a viewport edge.
 * @element shadcn-drawer
 * @slot - Drawer trigger and content.
 * @fires drawer-open-change - Fired when the open state changes.
 */
@customElement('shadcn-drawer')
export class Drawer extends Dialog {
  /** Whether Escape and backdrop interaction may dismiss the drawer. */
  @property({ type: Boolean, reflect: true }) dismissible = true;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.guardEscape, true);
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.guardEscape, true);
    super.disconnectedCallback();
  }

  updated(changed: Map<PropertyKey, unknown>) {
    super.updated(changed);
    this.querySelectorAll<DrawerContent>('shadcn-drawer-content').forEach((content) => { content.dismissible = this.dismissible; });
    if (changed.has('open') && changed.get('open') !== undefined) this.dispatchEvent(new CustomEvent('drawer-open-change', { bubbles: true, composed: true, detail: { open: this.open } }));
  }

  private guardEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open && !this.dismissible) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };
}

/** @element shadcn-drawer-trigger @slot - Trigger control. */
@customElement('shadcn-drawer-trigger') export class DrawerTrigger extends DialogTrigger {}
/** @element shadcn-drawer-close @slot - Close control. */
@customElement('shadcn-drawer-close') export class DrawerClose extends DialogClose {}

/**
 * Modal drawer surface.
 * @element shadcn-drawer-content
 * @slot - Drawer content.
 * @csspart overlay - Modal backdrop.
 * @csspart content - Drawer panel.
 * @cssprop --drawer-size - Drawer width or maximum height.
 */
@customElement('shadcn-drawer-content')
export class DrawerContent extends ModalSurface {
  static styles = [...ModalSurface.styles, tokensBase, tokensMotion, css`
    .surface { position: absolute; gap: var(--spacing-4); padding: var(--spacing-4); transition: transform var(--transition-base); }
    :host([direction='bottom']) .surface { inset: auto 0 0; max-height: var(--drawer-size, 85vh); border-radius: var(--radius-xl) var(--radius-xl) 0 0; border-width: 1px 0 0; }
    :host([direction='top']) .surface { inset: 0 0 auto; max-height: var(--drawer-size, 85vh); border-radius: 0 0 var(--radius-xl) var(--radius-xl); border-width: 0 0 1px; }
    :host([direction='left']) .surface { inset: 0 auto 0 0; width: min(var(--drawer-size, 24rem), 85vw); border-radius: 0 var(--radius-xl) var(--radius-xl) 0; border-width: 0 1px 0 0; }
    :host([direction='right']) .surface { inset: 0 0 0 auto; width: min(var(--drawer-size, 24rem), 85vw); border-radius: var(--radius-xl) 0 0 var(--radius-xl); border-width: 0 0 0 1px; }
    :host([direction='bottom']) .surface { animation-name: shadcn-slide-in-from-bottom; }
    :host([direction='top']) .surface { animation-name: shadcn-slide-in-from-top; }
    :host([direction='left']) .surface { animation-name: shadcn-slide-in-from-left; }
    :host([direction='right']) .surface { animation-name: shadcn-slide-in-from-right; }
    :host([direction='bottom']) .surface::before, :host([direction='top']) .surface::before { content: ''; align-self: center; width: 3rem; height: .25rem; border-radius: var(--radius-full); background: var(--muted); }
  `];
  /** Viewport edge from which the drawer appears. */
  @property({ type: String, reflect: true }) direction: DrawerDirection = 'bottom';
  /** Whether backdrop interaction may dismiss the drawer. */
  @property({ type: Boolean }) dismissible = true;
  protected readonly titleSelector = 'shadcn-drawer-title';
  protected get dismissOnBackdrop() { return this.dismissible; }
}

/** @element shadcn-drawer-title @slot - Drawer heading. */
@customElement('shadcn-drawer-title') export class DrawerTitle extends DialogTitle {}
/** @element shadcn-drawer-description @slot - Drawer description. */
@customElement('shadcn-drawer-description') export class DrawerDescription extends DialogDescription {}
/** @element shadcn-drawer-header @slot - Drawer title and description. */
@customElement('shadcn-drawer-header') export class DrawerHeader extends DialogHeader {}
/** @element shadcn-drawer-footer @slot - Drawer actions. */
@customElement('shadcn-drawer-footer') export class DrawerFooter extends DialogFooter {}

declare global { interface HTMLElementTagNameMap {
  'shadcn-drawer': Drawer; 'shadcn-drawer-trigger': DrawerTrigger; 'shadcn-drawer-close': DrawerClose; 'shadcn-drawer-content': DrawerContent; 'shadcn-drawer-title': DrawerTitle; 'shadcn-drawer-description': DrawerDescription; 'shadcn-drawer-header': DrawerHeader; 'shadcn-drawer-footer': DrawerFooter;
} }
