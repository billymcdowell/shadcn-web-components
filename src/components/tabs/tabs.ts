import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokensBase } from '../../styles/index.js';

export type TabsOrientation = 'horizontal' | 'vertical';
export type TabsActivationMode = 'automatic' | 'manual';

/**
 * Coordinates an accessible tablist and its tab panels.
 *
 * @element shadcn-tabs
 * @slot - Tab list and content elements.
 * @fires tabs-change - Fired when the selected tab changes.
 */
@customElement('shadcn-tabs')
export class Tabs extends LitElement {
  static styles = [tokensBase, css`:host { display: block; }`];

  /** Selected tab value. */
  @property({ type: String, reflect: true }) value = '';
  /** Tablist orientation. */
  @property({ type: String, reflect: true }) orientation: TabsOrientation = 'horizontal';
  /** Whether focus automatically activates a tab. */
  @property({ type: String, attribute: 'activation-mode' }) activationMode: TabsActivationMode = 'automatic';

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('tab-select', this._handleSelect as EventListener);
    this.addEventListener('tab-navigate', this._handleNavigate as EventListener);
  }

  disconnectedCallback() {
    this.removeEventListener('tab-select', this._handleSelect as EventListener);
    this.removeEventListener('tab-navigate', this._handleNavigate as EventListener);
    super.disconnectedCallback();
  }

  protected render() { return html`<slot @slotchange=${this._sync}></slot>`; }
  protected firstUpdated() { this._ensureValue(); }
  protected updated() { this._sync(); }

  private _triggers() { return Array.from(this.querySelectorAll<TabsTrigger>('shadcn-tabs-trigger')); }

  private _ensureValue() {
    if (!this.value) this.value = this._triggers().find((tab) => !tab.disabled)?.value ?? '';
    this._sync();
  }

  private _handleSelect = (event: CustomEvent<{ value: string }>) => {
    const trigger = event.target as TabsTrigger;
    if (trigger.disabled || trigger.value === this.value) return;
    this.value = trigger.value;
    this.dispatchEvent(new CustomEvent('tabs-change', { bubbles: true, composed: true, detail: { value: this.value } }));
  };

  private _handleNavigate = (event: CustomEvent<{ key: string }>) => {
    const enabled = this._triggers().filter((tab) => !tab.disabled);
    const current = enabled.indexOf(event.target as TabsTrigger);
    if (current < 0 || enabled.length === 0) return;
    const { key } = event.detail;
    const forward = this.orientation === 'vertical' ? key === 'ArrowDown' : key === 'ArrowRight';
    const backward = this.orientation === 'vertical' ? key === 'ArrowUp' : key === 'ArrowLeft';
    let next = current;
    if (forward) next = (current + 1) % enabled.length;
    else if (backward) next = (current - 1 + enabled.length) % enabled.length;
    else if (key === 'Home') next = 0;
    else if (key === 'End') next = enabled.length - 1;
    else return;
    enabled[next].focus();
    if (this.activationMode === 'automatic') enabled[next].select();
  };

  private _sync = () => {
    this.querySelectorAll<TabsList>('shadcn-tabs-list').forEach((list) => { list.orientation = this.orientation; });
    this._triggers().forEach((trigger) => { trigger.active = trigger.value === this.value; });
    this.querySelectorAll<TabsContent>('shadcn-tabs-content').forEach((content) => { content.active = content.value === this.value; });
  };
}

/** @element shadcn-tabs-list @slot - Tab triggers. @csspart list - Tablist container. */
@customElement('shadcn-tabs-list')
export class TabsList extends LitElement {
  static styles = [tokensBase, css`
    :host { display: inline-flex; }
    .list { display: inline-flex; align-items: center; min-height: 2.25rem; padding: var(--spacing-1); border-radius: var(--radius-lg); background: var(--muted); color: var(--muted-foreground); }
    .vertical { flex-direction: column; align-items: stretch; }
  `];
  @property({ type: String }) orientation: TabsOrientation = 'horizontal';
  protected render() { return html`<div part="list" class="list ${this.orientation === 'vertical' ? 'vertical' : ''}" role="tablist" aria-orientation=${this.orientation}><slot></slot></div>`; }
}

/**
 * Selects a tab panel.
 * @element shadcn-tabs-trigger
 * @slot - Trigger label.
 * @fires tab-select - Requests tab selection.
 * @fires tab-navigate - Requests keyboard focus navigation.
 * @csspart trigger - Native tab button.
 */
@customElement('shadcn-tabs-trigger')
export class TabsTrigger extends LitElement {
  static styles = [tokensBase, css`
    :host { display: inline-flex; }
    button { display: inline-flex; align-items: center; justify-content: center; white-space: nowrap; border: 0; border-radius: var(--radius-md); padding: var(--spacing-1) var(--spacing-3); min-height: 1.75rem; background: transparent; color: inherit; font: inherit; font-size: var(--font-size-sm); font-weight: var(--font-medium); cursor: pointer; }
    button[data-active] { background: var(--background); color: var(--foreground); box-shadow: 0 1px 2px rgb(0 0 0 / .08); }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
    button:disabled { opacity: .5; cursor: not-allowed; }
  `];
  @property({ type: String }) value = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) active = false;
  protected render() { return html`<button part="trigger" type="button" role="tab" aria-selected=${this.active} tabindex=${this.active ? 0 : -1} ?disabled=${this.disabled} ?data-active=${this.active} @click=${this.select} @keydown=${this._keydown}><slot></slot></button>`; }
  select = () => { if (!this.disabled) this.dispatchEvent(new CustomEvent('tab-select', { bubbles: true, composed: true, detail: { value: this.value } })); };
  focus(options?: FocusOptions) { this.shadowRoot?.querySelector('button')?.focus(options); }
  private _keydown(event: KeyboardEvent) {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      this.dispatchEvent(new CustomEvent('tab-navigate', { bubbles: true, composed: true, detail: { key: event.key } }));
    } else if ((event.key === 'Enter' || event.key === ' ') && !this.active) {
      event.preventDefault(); this.select();
    }
  }
}

/** @element shadcn-tabs-content @slot - Tab panel content. @csspart content - Tab panel. */
@customElement('shadcn-tabs-content')
export class TabsContent extends LitElement {
  static styles = [tokensBase, css`:host { display: block; } [hidden] { display: none !important; } .content { margin-top: var(--spacing-2); } .content:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }`];
  @property({ type: String }) value = '';
  @property({ type: Boolean }) active = false;
  protected render() { return html`<div part="content" class="content" role="tabpanel" tabindex="0" ?hidden=${!this.active}><slot></slot></div>`; }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-tabs': Tabs;
    'shadcn-tabs-list': TabsList;
    'shadcn-tabs-trigger': TabsTrigger;
    'shadcn-tabs-content': TabsContent;
  }
}
