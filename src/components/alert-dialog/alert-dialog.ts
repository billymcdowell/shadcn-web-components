import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Dialog } from '../dialog/dialog-core.js';
import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../dialog/dialog-parts.js';
import { ModalSurface } from '../_internal/modal-surface.js';
import { tokensBase } from '../../styles/index.js';

/**
 * Modal confirmation dialog requiring an explicit action or cancellation.
 * @element shadcn-alert-dialog
 * @slot - Alert dialog trigger and content.
 * @fires alert-dialog-open-change - Fired when the open state changes.
 */
@customElement('shadcn-alert-dialog')
export class AlertDialog extends Dialog {
  updated(changed: Map<PropertyKey, unknown>) {
    super.updated(changed);
    if (changed.has('open') && changed.get('open') !== undefined) this.dispatchEvent(new CustomEvent('alert-dialog-open-change', { bubbles: true, composed: true, detail: { open: this.open } }));
  }
}

/** @element shadcn-alert-dialog-trigger @slot - Trigger control. */
@customElement('shadcn-alert-dialog-trigger') export class AlertDialogTrigger extends DialogTrigger {}

/**
 * Modal alert dialog surface. Backdrop interaction intentionally does not dismiss it.
 * @element shadcn-alert-dialog-content
 * @slot - Alert dialog content.
 * @csspart overlay - Modal backdrop.
 * @csspart content - Alert dialog panel.
 */
@customElement('shadcn-alert-dialog-content')
export class AlertDialogContent extends ModalSurface {
  static styles = [...ModalSurface.styles, tokensBase, css`
    :host { align-items: center; justify-content: center; }
    .surface { width: min(32rem, calc(100% - 2rem)); gap: var(--spacing-4); padding: var(--spacing-6); border-radius: var(--radius-lg); }
  `];
  protected readonly titleSelector = 'shadcn-alert-dialog-title';
  protected dialogRole: 'alertdialog' = 'alertdialog';
  protected get dismissOnBackdrop() { return false; }
}

/** @element shadcn-alert-dialog-title @slot - Alert dialog heading. */
@customElement('shadcn-alert-dialog-title') export class AlertDialogTitle extends DialogTitle {}
/** @element shadcn-alert-dialog-description @slot - Consequence or supporting description. */
@customElement('shadcn-alert-dialog-description') export class AlertDialogDescription extends DialogDescription {}
/** @element shadcn-alert-dialog-header @slot - Title and description. */
@customElement('shadcn-alert-dialog-header') export class AlertDialogHeader extends DialogHeader {}
/** @element shadcn-alert-dialog-footer @slot - Cancel and action controls. */
@customElement('shadcn-alert-dialog-footer') export class AlertDialogFooter extends DialogFooter {}
/** @element shadcn-alert-dialog-cancel @slot - Cancellation control. */
@customElement('shadcn-alert-dialog-cancel') export class AlertDialogCancel extends DialogClose {}
/** @element shadcn-alert-dialog-action @slot - Confirmation control. */
@customElement('shadcn-alert-dialog-action') export class AlertDialogAction extends DialogClose {}

declare global { interface HTMLElementTagNameMap {
  'shadcn-alert-dialog': AlertDialog; 'shadcn-alert-dialog-trigger': AlertDialogTrigger; 'shadcn-alert-dialog-content': AlertDialogContent; 'shadcn-alert-dialog-title': AlertDialogTitle; 'shadcn-alert-dialog-description': AlertDialogDescription; 'shadcn-alert-dialog-header': AlertDialogHeader; 'shadcn-alert-dialog-footer': AlertDialogFooter; 'shadcn-alert-dialog-cancel': AlertDialogCancel; 'shadcn-alert-dialog-action': AlertDialogAction;
} }
