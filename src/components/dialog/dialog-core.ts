import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ContextProviderController, createContext } from '../../context/index.js';
import { tokensBase } from '../../styles/index.js';

export interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const dialogContext = createContext<DialogContextValue>('shadcn-dialog');

@customElement('shadcn-dialog')
export class Dialog extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        display: contents;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  open = false;

  private contextProvider: ContextProviderController<DialogContextValue>;
  private escapeKeyHandler: ((event: KeyboardEvent) => void) | null = null;
  private previouslyFocusedElement: HTMLElement | null = null;

  constructor() {
    super();
    this.contextProvider = new ContextProviderController(
      this,
      dialogContext,
      {
        open: this.open,
        setOpen: (open: boolean) => this.setDialogOpen(open),
      },
    );
  }

  private setDialogOpen(open: boolean): void {
    if (open === this.open) {
      return;
    }

    if (open) {
      this.previouslyFocusedElement = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
      this.open = true;
      this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
      return;
    }

    this.open = false;
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));

    const focusTarget = this.previouslyFocusedElement;
    requestAnimationFrame(() => {
      focusTarget?.focus();
      this.previouslyFocusedElement = null;
    });
  }

  private handleEscapeKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      this.setDialogOpen(false);
    }
  };

  willUpdate(): void {
    this.dataset.state = this.open ? 'open' : 'closed';
  }

  updated(changedProperties: Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('open')) {
      this.contextProvider.setValue({
        open: this.open,
        setOpen: (open: boolean) => this.setDialogOpen(open),
      });

      if (this.open) {
        this.escapeKeyHandler = this.handleEscapeKey;
        window.addEventListener('keydown', this.escapeKeyHandler);
      } else if (this.escapeKeyHandler) {
        window.removeEventListener('keydown', this.escapeKeyHandler);
        this.escapeKeyHandler = null;
      }
    }
  }

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
