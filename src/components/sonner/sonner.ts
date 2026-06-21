import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensBase } from '../../styles/index.js';

export type ToastId = string | number;
export type ToastType = 'default' | 'success' | 'info' | 'warning' | 'error' | 'loading';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface ToastAction {
  label: string;
  onClick: (event: MouseEvent) => void;
}

export interface ToastOptions {
  id?: ToastId;
  description?: string;
  duration?: number;
  action?: ToastAction;
  cancel?: ToastAction;
  closeButton?: boolean;
  onDismiss?: (toast: ToastData) => void;
  onAutoClose?: (toast: ToastData) => void;
}

export interface ToastData extends ToastOptions {
  id: ToastId;
  title: string;
  type: ToastType;
  revision: number;
}

export interface ToastPromiseOptions<T> {
  loading: string;
  success: string | ((data: T) => string);
  error: string | ((error: unknown) => string);
  description?: string;
  finally?: () => void;
}

export interface ToastFunction {
  (title: string, options?: ToastOptions): ToastId;
  success(title: string, options?: ToastOptions): ToastId;
  info(title: string, options?: ToastOptions): ToastId;
  warning(title: string, options?: ToastOptions): ToastId;
  error(title: string, options?: ToastOptions): ToastId;
  loading(title: string, options?: ToastOptions): ToastId;
  promise<T>(promise: Promise<T>, options: ToastPromiseOptions<T>): ToastId;
  dismiss(id?: ToastId): void;
}

let nextToastId = 0;
let toastState: ToastData[] = [];
const subscribers = new Set<(toasts: ToastData[]) => void>();

function notify(): void {
  const snapshot = [...toastState];
  subscribers.forEach((subscriber) => subscriber(snapshot));
}

function createToast(type: ToastType, title: string, options: ToastOptions = {}): ToastId {
  const id = options.id ?? ++nextToastId;
  const existing = toastState.find((item) => item.id === id);
  const item: ToastData = {
    ...existing,
    ...options,
    id,
    title,
    type,
    duration: options.duration ?? (existing?.type === type ? existing.duration : undefined),
    revision: (existing?.revision ?? 0) + 1,
  };

  toastState = existing
    ? toastState.map((toastItem) => toastItem.id === id ? item : toastItem)
    : [...toastState, item];
  notify();
  return id;
}

function dismissToast(id?: ToastId, autoClose = false): void {
  const removed = id === undefined ? toastState : toastState.filter((item) => item.id === id);
  if (removed.length === 0) return;

  toastState = id === undefined ? [] : toastState.filter((item) => item.id !== id);
  removed.forEach((item) => autoClose ? item.onAutoClose?.(item) : item.onDismiss?.(item));
  notify();
}

const baseToast = (title: string, options?: ToastOptions) => createToast('default', title, options);

/** Imperative API for creating, updating, and dismissing notifications. */
export const toast: ToastFunction = Object.assign(baseToast, {
  success: (title: string, options?: ToastOptions) => createToast('success', title, options),
  info: (title: string, options?: ToastOptions) => createToast('info', title, options),
  warning: (title: string, options?: ToastOptions) => createToast('warning', title, options),
  error: (title: string, options?: ToastOptions) => createToast('error', title, options),
  loading: (title: string, options?: ToastOptions) => createToast('loading', title, { duration: Infinity, ...options }),
  promise: <T,>(promise: Promise<T>, options: ToastPromiseOptions<T>): ToastId => {
    const id = createToast('loading', options.loading, { description: options.description, duration: Infinity });
    promise.then(
      (data) => createToast('success', typeof options.success === 'function' ? options.success(data) : options.success, { id, description: options.description }),
      (error: unknown) => createToast('error', typeof options.error === 'function' ? options.error(error) : options.error, { id, description: options.description }),
    ).finally(options.finally);
    return id;
  },
  dismiss: (id?: ToastId) => dismissToast(id),
});

const icons: Record<Exclude<ToastType, 'default'>, unknown> = {
  success: html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>`,
  info: html`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg>`,
  warning: html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v4M12 17h.01"/></svg>`,
  error: html`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6m0-6-6 6"/></svg>`,
  loading: html`<svg class="spinner" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/></svg>`,
};

/**
 * Hosts notifications created with the exported `toast` API.
 *
 * @element shadcn-sonner
 * @csspart viewport - The notification list.
 * @csspart toast - An individual notification.
 * @csspart title - Notification title.
 * @csspart description - Notification description.
 * @csspart action - Primary action button.
 * @csspart cancel - Cancel action button.
 * @csspart close-button - Dismiss button.
 * @cssprop [--sonner-offset=1rem] - Distance from the viewport edge.
 * @cssprop [--sonner-width=22rem] - Maximum notification width.
 * @cssprop [--sonner-gap=0.75rem] - Space between notifications.
 */
@customElement('shadcn-sonner')
export class Sonner extends LitElement {
  static styles = [tokensBase, css`
    :host { display: contents; font-family: var(--font-sans); }
    .viewport { position: fixed; z-index: 100; display: flex; width: min(var(--sonner-width, 22rem), calc(100vw - 2rem)); margin: 0; padding: 0; list-style: none; pointer-events: none; }
    .viewport[data-position^='top'] { top: var(--sonner-offset, 1rem); flex-direction: column; }
    .viewport[data-position^='bottom'] { bottom: var(--sonner-offset, 1rem); flex-direction: column-reverse; }
    .viewport[data-position$='left'] { left: var(--sonner-offset, 1rem); }
    .viewport[data-position$='right'] { right: var(--sonner-offset, 1rem); }
    .viewport[data-position$='center'] { left: 50%; transform: translateX(-50%); }
    .viewport[data-expanded] { gap: var(--sonner-gap, 0.75rem); }
    .toast { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: var(--spacing-3); box-sizing: border-box; width: 100%; min-height: 3.5rem; margin-top: var(--sonner-gap, 0.75rem); padding: var(--spacing-3) var(--spacing-4); color: var(--popover-foreground); background: var(--popover); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); pointer-events: auto; animation: toast-in var(--transition-normal); }
    .viewport[data-position^='bottom'] .toast { margin-top: 0; margin-bottom: var(--sonner-gap, 0.75rem); }
    .viewport[data-expanded] .toast { margin: 0; }
    .icon { display: grid; place-items: center; width: 1rem; height: 1rem; color: var(--muted-foreground); }
    .icon:empty { display: none; }
    svg { width: 1rem; height: 1rem; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2; }
    .spinner { animation: spin var(--animation-spin-duration) linear infinite; stroke-dasharray: 42; stroke-dashoffset: 12; }
    .content { min-width: 0; }
    .title { color: inherit; font-size: var(--font-size-sm); font-weight: var(--font-medium); line-height: var(--leading-snug); }
    .description { margin-top: 0.125rem; color: var(--muted-foreground); font-size: var(--font-size-xs); line-height: var(--leading-normal); }
    .controls { display: flex; align-items: center; gap: var(--spacing-2); }
    button { min-height: 1.75rem; padding: 0 var(--spacing-2); color: var(--primary-foreground); background: var(--primary); border: 0; border-radius: var(--radius-md); font: 500 var(--font-size-xs)/1 var(--font-sans); cursor: pointer; }
    button:hover { opacity: 0.9; }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
    .cancel { color: var(--secondary-foreground); background: var(--secondary); }
    .close { width: 1.75rem; padding: 0; color: var(--muted-foreground); background: transparent; font-size: var(--font-size-lg); }
    :host([rich-colors]) .toast--success { color: oklch(0.72 0.19 145); border-color: color-mix(in oklch, currentColor 35%, var(--border)); }
    :host([rich-colors]) .toast--info { color: oklch(0.72 0.15 245); border-color: color-mix(in oklch, currentColor 35%, var(--border)); }
    :host([rich-colors]) .toast--warning { color: oklch(0.8 0.16 85); border-color: color-mix(in oklch, currentColor 35%, var(--border)); }
    :host([rich-colors]) .toast--error { color: var(--destructive); border-color: color-mix(in oklch, currentColor 45%, var(--border)); }
    @keyframes toast-in { from { opacity: 0; transform: translateY(0.75rem) scale(0.98); } }
    @keyframes spin { to { transform: rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) { .toast, .spinner { animation-duration: 0ms; } }
  `];

  /** Placement of the notification viewport. */
  @property({ reflect: true }) position: ToastPosition = 'bottom-right';
  /** Default time in milliseconds before a notification closes. */
  @property({ type: Number }) duration = 4000;
  /** Maximum number of notifications displayed at once. */
  @property({ type: Number, attribute: 'visible-toasts' }) visibleToasts = 3;
  /** Shows every notification with full spacing instead of a compact stack. */
  @property({ type: Boolean, reflect: true }) expand = false;
  /** Applies status colors to success, info, warning, and error notifications. */
  @property({ type: Boolean, reflect: true, attribute: 'rich-colors' }) richColors = false;
  /** Shows a dismiss button on every notification. */
  @property({ type: Boolean, reflect: true, attribute: 'close-button' }) closeButton = false;

  @state() private toasts: ToastData[] = [];
  @state() private paused = false;
  private timers = new Map<ToastId, number>();
  private unsubscribe?: () => void;

  connectedCallback(): void {
    super.connectedCallback();
    const subscriber = (items: ToastData[]) => {
      this.toasts = items;
      this.syncTimers();
    };
    subscribers.add(subscriber);
    subscriber([...toastState]);
    this.unsubscribe = () => subscribers.delete(subscriber);
    window.addEventListener('keydown', this.handleKeydown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.unsubscribe?.();
    window.removeEventListener('keydown', this.handleKeydown);
    this.clearTimers();
  }

  protected updated(changed: Map<PropertyKey, unknown>): void {
    if (changed.has('duration')) this.syncTimers();
  }

  private handleKeydown = (event: KeyboardEvent): void => {
    if (event.altKey && event.code === 'KeyT') {
      event.preventDefault();
      this.renderRoot.querySelector<HTMLElement>('.viewport')?.focus();
    } else if (event.key === 'Escape' && this.toasts.length > 0) {
      dismissToast(this.toasts[this.toasts.length - 1]?.id);
    }
  };

  private clearTimers(): void {
    this.timers.forEach((timer) => window.clearTimeout(timer));
    this.timers.clear();
  }

  private syncTimers(): void {
    this.clearTimers();
    if (this.paused) return;
    this.toasts.forEach((item) => {
      const delay = item.duration ?? this.duration;
      if (item.type !== 'loading' && Number.isFinite(delay) && delay > 0) {
        this.timers.set(item.id, window.setTimeout(() => dismissToast(item.id, true), delay));
      }
    });
  }

  private setPaused(paused: boolean): void {
    this.paused = paused;
    this.syncTimers();
  }

  private runAction(item: ToastData, action: ToastAction, event: MouseEvent): void {
    action.onClick(event);
    dismissToast(item.id);
  }

  private renderToast(item: ToastData) {
    const icon = item.type === 'default' ? nothing : icons[item.type];
    const role = item.type === 'error' ? 'alert' : 'status';
    return html`
      <li class="toast toast--${item.type}" part="toast" role=${role} aria-atomic="true">
        <span class="icon">${icon}</span>
        <div class="content">
          <div class="title" part="title">${item.title}</div>
          ${item.description ? html`<div class="description" part="description">${item.description}</div>` : nothing}
        </div>
        <div class="controls">
          ${item.action ? html`<button part="action" @click=${(event: MouseEvent) => this.runAction(item, item.action!, event)}>${item.action.label}</button>` : nothing}
          ${item.cancel ? html`<button class="cancel" part="cancel" @click=${(event: MouseEvent) => this.runAction(item, item.cancel!, event)}>${item.cancel.label}</button>` : nothing}
          ${this.closeButton || item.closeButton ? html`<button class="close" part="close-button" aria-label="Dismiss notification" @click=${() => dismissToast(item.id)}>&times;</button>` : nothing}
        </div>
      </li>
    `;
  }

  render() {
    const visible = this.toasts.slice(-Math.max(1, this.visibleToasts));
    return html`
      <ol
        class="viewport"
        part="viewport"
        data-position=${this.position}
        ?data-expanded=${this.expand || this.paused}
        aria-label="Notifications (Alt+T)"
        tabindex="-1"
        @pointerenter=${() => this.setPaused(true)}
        @pointerleave=${() => this.setPaused(false)}
        @focusin=${() => this.setPaused(true)}
        @focusout=${(event: FocusEvent) => {
          if (!this.contains(event.relatedTarget as Node) && !this.renderRoot.contains(event.relatedTarget as Node)) this.setPaused(false);
        }}
      >${visible.map((item) => this.renderToast(item))}</ol>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-sonner': Sonner;
  }
}
