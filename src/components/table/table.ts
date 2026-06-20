import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

const base = [tokens, css`:host { display: block; box-sizing: border-box; font-family: var(--font-sans); font-size: var(--font-size-sm); color: var(--foreground); }`];

/** @element shadcn-table @slot - Table sections */
@customElement('shadcn-table')
export class Table extends LitElement {
  static styles = [tokens, css`:host { display: block; position: relative; width: 100%; overflow-x: auto; color: var(--foreground); font-family: var(--font-sans); font-size: var(--font-size-sm); } .table { display: table; width: 100%; border-collapse: collapse; }`];
  render() { return html`<div part="container"><div part="table" class="table" role="table"><slot></slot></div></div>`; }
}

/** @element shadcn-table-header @slot - Header rows */
@customElement('shadcn-table-header')
export class TableHeader extends LitElement { static styles = [...base, css`:host { display: table-header-group; }`]; connectedCallback() { super.connectedCallback(); this.setAttribute('role', 'rowgroup'); } render() { return html`<slot></slot>`; } }

/** @element shadcn-table-body @slot - Body rows */
@customElement('shadcn-table-body')
export class TableBody extends LitElement { static styles = [...base, css`:host { display: table-row-group; }`]; connectedCallback() { super.connectedCallback(); this.setAttribute('role', 'rowgroup'); } render() { return html`<slot></slot>`; } }

/** @element shadcn-table-footer @slot - Footer rows */
@customElement('shadcn-table-footer')
export class TableFooter extends LitElement { static styles = [...base, css`:host { display: table-footer-group; background: color-mix(in oklch, var(--muted) 50%, transparent); font-weight: var(--font-medium); }`]; connectedCallback() { super.connectedCallback(); this.setAttribute('role', 'rowgroup'); } render() { return html`<slot></slot>`; } }

/** @element shadcn-table-row @slot - Row cells */
@customElement('shadcn-table-row')
export class TableRow extends LitElement { static styles = [...base, css`:host { display: table-row; border-bottom: 1px solid var(--border); transition: background-color var(--transition-fast); } :host(:hover) { background: color-mix(in oklch, var(--muted) 50%, transparent); }`]; connectedCallback() { super.connectedCallback(); this.setAttribute('role', 'row'); } render() { return html`<slot></slot>`; } }

/** @element shadcn-table-head @slot - Header cell content */
@customElement('shadcn-table-head')
export class TableHead extends LitElement { static styles = [...base, css`:host { display: table-cell; height: 2.5rem; padding: 0 var(--spacing-2); color: var(--muted-foreground); font-weight: var(--font-medium); text-align: left; vertical-align: middle; white-space: nowrap; }`]; connectedCallback() { super.connectedCallback(); this.setAttribute('role', 'columnheader'); } render() { return html`<slot></slot>`; } }

/** @element shadcn-table-cell @slot - Cell content */
@customElement('shadcn-table-cell')
export class TableCell extends LitElement { static styles = [...base, css`:host { display: table-cell; padding: var(--spacing-2); vertical-align: middle; white-space: nowrap; }`]; connectedCallback() { super.connectedCallback(); this.setAttribute('role', 'cell'); } render() { return html`<slot></slot>`; } }

/** @element shadcn-table-caption @slot - Caption text */
@customElement('shadcn-table-caption')
export class TableCaption extends LitElement { static styles = [...base, css`:host { display: table-caption; caption-side: bottom; margin-top: var(--spacing-4); color: var(--muted-foreground); text-align: left; }`]; render() { return html`<slot></slot>`; } }

declare global { interface HTMLElementTagNameMap { 'shadcn-table': Table; 'shadcn-table-header': TableHeader; 'shadcn-table-body': TableBody; 'shadcn-table-footer': TableFooter; 'shadcn-table-row': TableRow; 'shadcn-table-head': TableHead; 'shadcn-table-cell': TableCell; 'shadcn-table-caption': TableCaption; } }
