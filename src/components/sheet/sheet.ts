import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Dialog, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../dialog/dialog.js';
import { ModalSurface } from '../_internal/modal-surface.js';
import { tokens } from '../../styles/index.js';

export type SheetSide = 'top' | 'right' | 'bottom' | 'left';

/** @element shadcn-sheet @slot - Sheet trigger and content. @fires sheet-open-change - Fired when the open state changes. */
@customElement('shadcn-sheet')
export class Sheet extends Dialog {
  updated(changed: Map<PropertyKey, unknown>) {
    super.updated(changed);
    if (changed.has('open') && changed.get('open') !== undefined) this.dispatchEvent(new CustomEvent('sheet-open-change', { bubbles: true, composed: true, detail: { open: this.open } }));
  }
}

/** @element shadcn-sheet-trigger @slot - Trigger control. */
@customElement('shadcn-sheet-trigger') export class SheetTrigger extends DialogTrigger {}
/** @element shadcn-sheet-close @slot - Close control. */
@customElement('shadcn-sheet-close') export class SheetClose extends DialogClose {}

/**
 * Modal panel attached to an edge of the viewport.
 * @element shadcn-sheet-content
 * @slot - Sheet content.
 * @csspart overlay - Modal backdrop.
 * @csspart content - Sheet panel.
 * @cssprop --sheet-size - Panel width or height.
 */
@customElement('shadcn-sheet-content')
export class SheetContent extends ModalSurface {
  static styles = [...ModalSurface.styles, tokens, css`
    .surface { position: absolute; gap: var(--spacing-4); padding: var(--spacing-6); transition: transform var(--transition-base); }
    :host([side='right']) .surface { inset: 0 0 0 auto; width: min(var(--sheet-size, 24rem), 85vw); border-width: 0 0 0 1px; }
    :host([side='left']) .surface { inset: 0 auto 0 0; width: min(var(--sheet-size, 24rem), 85vw); border-width: 0 1px 0 0; }
    :host([side='top']) .surface { inset: 0 0 auto; min-height: var(--sheet-size, 16rem); border-width: 0 0 1px; }
    :host([side='bottom']) .surface { inset: auto 0 0; min-height: var(--sheet-size, 16rem); border-width: 1px 0 0; }
    :host([side='right']) .surface { animation-name: shadcn-slide-in-from-right; }
    :host([side='left']) .surface { animation-name: shadcn-slide-in-from-left; }
    :host([side='top']) .surface { animation-name: shadcn-slide-in-from-top; }
    :host([side='bottom']) .surface { animation-name: shadcn-slide-in-from-bottom; }
  `];
  /** Viewport edge from which the sheet appears. */
  @property({ type: String, reflect: true }) side: SheetSide = 'right';
  protected readonly titleSelector = 'shadcn-sheet-title';
}

/** @element shadcn-sheet-title @slot - Sheet heading. */
@customElement('shadcn-sheet-title') export class SheetTitle extends DialogTitle {}
/** @element shadcn-sheet-description @slot - Sheet description. */
@customElement('shadcn-sheet-description') export class SheetDescription extends DialogDescription {}
/** @element shadcn-sheet-header @slot - Sheet title and description. */
@customElement('shadcn-sheet-header') export class SheetHeader extends DialogHeader {}
/** @element shadcn-sheet-footer @slot - Sheet actions. */
@customElement('shadcn-sheet-footer') export class SheetFooter extends DialogFooter {}

declare global { interface HTMLElementTagNameMap {
  'shadcn-sheet': Sheet; 'shadcn-sheet-trigger': SheetTrigger; 'shadcn-sheet-close': SheetClose; 'shadcn-sheet-content': SheetContent; 'shadcn-sheet-title': SheetTitle; 'shadcn-sheet-description': SheetDescription; 'shadcn-sheet-header': SheetHeader; 'shadcn-sheet-footer': SheetFooter;
} }
