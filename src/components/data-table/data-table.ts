import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensBase } from '../../styles/index.js';

export type DataTableSortDirection = 'asc' | 'desc' | 'none';
export type DataTableColumnAlign = 'left' | 'center' | 'right';

export interface DataTableColumn<TData extends object = Record<string, unknown>> {
  id?: string;
  accessorKey: keyof TData & string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  hideable?: boolean;
  align?: DataTableColumnAlign;
  cell?: (value: unknown, row: TData) => unknown;
}

export interface DataTableSortChangeDetail {
  key: string;
  direction: DataTableSortDirection;
}

export interface DataTablePageChangeDetail {
  page: number;
  pageSize: number;
  pageCount: number;
}

export interface DataTableSelectionChangeDetail<TData extends object = Record<string, unknown>> {
  selectedRowIds: string[];
  selectedRows: TData[];
}

/**
 * A sortable, filterable, paginated data table based on the shadcn/ui Data Table pattern.
 *
 * @element shadcn-data-table
 * @fires data-table-sort-change - Fired when the active sort changes.
 * @fires data-table-filter-change - Fired when the filter query changes.
 * @fires data-table-page-change - Fired when the current page changes.
 * @fires data-table-selection-change - Fired when selected rows change.
 * @fires data-table-column-visibility-change - Fired when a column's visibility changes.
 * @csspart toolbar - The filter and column visibility toolbar.
 * @csspart table-container - The bordered, scrollable table container.
 * @csspart table - The native table element.
 * @csspart pagination - The selection summary and pagination controls.
 * @cssprop --data-table-min-width - Minimum width of the table.
 */
@customElement('shadcn-data-table')
export class DataTable<TData extends object = Record<string, unknown>> extends LitElement {
  static styles = [
    tokensBase,
    css`
      :host {
        display: block;
        width: 100%;
        color: var(--foreground);
        font-family: var(--font-sans);
        font-size: var(--font-size-sm);
      }

      * { box-sizing: border-box; }

      .toolbar {
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
        padding: var(--spacing-4) 0;
      }

      .filter {
        width: min(100%, 24rem);
        height: 2.25rem;
        padding: 0 var(--spacing-3);
        border: 1px solid var(--input);
        border-radius: var(--radius-md);
        outline: 2px solid transparent;
        outline-offset: 2px;
        background: var(--background);
        color: var(--foreground);
        font: inherit;
      }

      .filter::placeholder { color: var(--muted-foreground); }
      .filter:focus-visible, button:focus-visible, summary:focus-visible, input[type='checkbox']:focus-visible {
        outline-color: var(--ring);
      }
      .filter:disabled { cursor: not-allowed; opacity: 0.5; }

      .columns { position: relative; margin-left: auto; }
      .columns summary { list-style: none; }
      .columns summary::-webkit-details-marker { display: none; }
      .columns-menu {
        position: absolute;
        z-index: 10;
        top: calc(100% + var(--spacing-1));
        right: 0;
        min-width: 10rem;
        padding: var(--spacing-1);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--popover);
        color: var(--popover-foreground);
        box-shadow: var(--shadow-md);
      }

      .column-option {
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
        padding: var(--spacing-2);
        border-radius: var(--radius-sm);
        text-transform: capitalize;
        cursor: pointer;
      }
      .column-option:hover { background: var(--accent); color: var(--accent-foreground); }

      .button {
        display: inline-flex;
        height: 2.25rem;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-2);
        padding: 0 var(--spacing-3);
        border: 1px solid var(--input);
        border-radius: var(--radius-md);
        outline: 2px solid transparent;
        outline-offset: 2px;
        background: var(--background);
        color: var(--foreground);
        font: inherit;
        font-weight: var(--font-medium);
        white-space: nowrap;
        cursor: pointer;
      }
      .button:hover:not(:disabled) { background: var(--accent); color: var(--accent-foreground); }
      .button:disabled { cursor: not-allowed; opacity: 0.5; }

      .table-container {
        width: 100%;
        overflow: auto;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
      }
      table { width: 100%; min-width: var(--data-table-min-width, 36rem); border-collapse: collapse; }
      tr { border-bottom: 1px solid var(--border); transition: background-color var(--transition-fast); }
      tbody tr:last-child { border-bottom: 0; }
      tbody tr:hover, tbody tr[data-state='selected'] { background: color-mix(in oklch, var(--muted) 50%, transparent); }
      th, td { height: 2.75rem; padding: var(--spacing-2); text-align: left; vertical-align: middle; }
      th { color: var(--muted-foreground); font-weight: var(--font-medium); white-space: nowrap; }
      td { white-space: nowrap; }
      .align-center { text-align: center; }
      .align-right { text-align: right; }
      .select-cell { width: 2.5rem; text-align: center; }
      input[type='checkbox'] { width: 1rem; height: 1rem; accent-color: var(--primary); cursor: pointer; }
      .sort-button {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-2);
        margin: calc(var(--spacing-2) * -1);
        padding: var(--spacing-2);
        border: 0;
        border-radius: var(--radius-sm);
        outline: 2px solid transparent;
        outline-offset: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        font-weight: inherit;
        cursor: pointer;
      }
      .sort-button:hover { background: var(--accent); color: var(--accent-foreground); }
      .sort-icon { width: 1rem; color: var(--muted-foreground); font-size: var(--font-size-xs); }
      .message { height: 6rem; color: var(--muted-foreground); text-align: center; }
      .pagination {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--spacing-2);
        min-height: 4rem;
        padding: var(--spacing-4) 0;
      }
      .selection-summary { margin-right: auto; color: var(--muted-foreground); font-size: var(--font-size-xs); }
      .page-summary { color: var(--muted-foreground); font-size: var(--font-size-xs); }

      @media (max-width: 40rem) {
        .toolbar { align-items: stretch; flex-wrap: wrap; }
        .filter { width: 100%; }
        .pagination { flex-wrap: wrap; }
      }
    `,
  ];

  /** Column definitions for the table. Set as a JavaScript property. */
  @property({ attribute: false }) columns: DataTableColumn<TData>[] = [];

  /** Row data for the table. Set as a JavaScript property. */
  @property({ attribute: false }) data: TData[] = [];

  /** Number of rows shown per page. */
  @property({ type: Number, attribute: 'page-size' }) pageSize = 10;

  /** Current one-based page number. */
  @property({ type: Number }) page = 1;

  /** Current filter query. */
  @property({ type: String }) filter = '';

  /** Optional column key to filter; all filterable columns are searched when empty. */
  @property({ type: String, attribute: 'filter-column' }) filterColumn = '';

  /** Placeholder displayed in the filter input. */
  @property({ type: String, attribute: 'filter-placeholder' }) filterPlaceholder = 'Filter rows...';

  /** Message displayed when no rows match. */
  @property({ type: String, attribute: 'empty-message' }) emptyMessage = 'No results.';

  /** Whether row selection controls are shown. */
  @property({ type: Boolean }) selectable = false;

  /** Whether a loading state is displayed. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** Property used as the stable row identifier. Falls back to the row index. */
  @property({ type: String, attribute: 'row-id-key' }) rowIdKey = 'id';

  /** Active sort column key. */
  @property({ type: String, attribute: 'sort-key' }) sortKey = '';

  /** Active sort direction. */
  @property({ type: String, attribute: 'sort-direction' }) sortDirection: DataTableSortDirection = 'none';

  /** IDs of selected rows. Set as a JavaScript property. */
  @property({ attribute: false }) selectedRowIds: string[] = [];

  /** IDs of hidden columns. Set as a JavaScript property. */
  @property({ attribute: false }) hiddenColumns: string[] = [];

  @state() private _selectionAnchor: string | undefined;

  private get _visibleColumns() {
    return this.columns.filter((column) => !this.hiddenColumns.includes(this._columnId(column)));
  }

  private get _processedRows() {
    const query = this.filter.trim().toLocaleLowerCase();
    let rows = this.data.map((row, index) => ({ row, index, id: this._rowId(row, index) }));
    if (query) {
      const columns = this.columns.filter((column) => {
        const id = this._columnId(column);
        return column.filterable !== false && (!this.filterColumn || id === this.filterColumn || column.accessorKey === this.filterColumn);
      });
      rows = rows.filter(({ row }) => columns.some((column) => String(Reflect.get(row, column.accessorKey) ?? '').toLocaleLowerCase().includes(query)));
    }
    if (this.sortKey && this.sortDirection !== 'none') {
      const column = this.columns.find((candidate) => this._columnId(candidate) === this.sortKey || candidate.accessorKey === this.sortKey);
      if (column) {
        const direction = this.sortDirection === 'asc' ? 1 : -1;
        rows = [...rows].sort((a, b) => this._compare(Reflect.get(a.row, column.accessorKey), Reflect.get(b.row, column.accessorKey)) * direction);
      }
    }
    return rows;
  }

  private get _pageCount() {
    return Math.max(1, Math.ceil(this._processedRows.length / Math.max(1, this.pageSize)));
  }

  private get _pageRows() {
    const page = Math.min(Math.max(1, this.page), this._pageCount);
    const start = (page - 1) * Math.max(1, this.pageSize);
    return this._processedRows.slice(start, start + Math.max(1, this.pageSize));
  }

  protected willUpdate() {
    if (this.page < 1) this.page = 1;
    if (this.page > this._pageCount) this.page = this._pageCount;
  }

  render() {
    const visibleColumns = this._visibleColumns;
    const pageRows = this._pageRows;
    const selectedOnPage = pageRows.filter(({ id }) => this.selectedRowIds.includes(id)).length;
    const allPageSelected = pageRows.length > 0 && selectedOnPage === pageRows.length;
    const hideableColumns = this.columns.filter((column) => column.hideable !== false);

    return html`
      <div part="toolbar" class="toolbar">
        <input
          part="filter"
          class="filter"
          type="search"
          .value=${this.filter}
          placeholder=${this.filterPlaceholder}
          aria-label=${this.filterPlaceholder}
          ?disabled=${this.loading}
          @input=${this._handleFilter}
        />
        ${hideableColumns.length ? html`
          <details class="columns">
            <summary part="columns-trigger" class="button">Columns <span aria-hidden="true">v</span></summary>
            <div part="columns-menu" class="columns-menu">
              ${hideableColumns.map((column) => {
                const id = this._columnId(column);
                return html`<label class="column-option"><input type="checkbox" .checked=${!this.hiddenColumns.includes(id)} @change=${() => this._toggleColumn(id)} />${column.header}</label>`;
              })}
            </div>
          </details>
        ` : nothing}
      </div>
      <div part="table-container" class="table-container">
        <table part="table">
          <thead><tr>
            ${this.selectable ? html`<th class="select-cell"><input type="checkbox" aria-label="Select all rows on this page" .checked=${allPageSelected} .indeterminate=${selectedOnPage > 0 && !allPageSelected} ?disabled=${!pageRows.length || this.loading} @change=${this._togglePageSelection} /></th>` : nothing}
            ${visibleColumns.map((column) => html`<th class=${`align-${column.align ?? 'left'}`} aria-sort=${this._ariaSort(column)}>
              ${column.sortable ? html`<button class="sort-button" type="button" @click=${() => this._toggleSort(column)}>${column.header}<span class="sort-icon" aria-hidden="true">${this._sortIcon(column)}</span></button>` : column.header}
            </th>`)}
          </tr></thead>
          <tbody>
            ${this.loading ? html`<tr><td class="message" colspan=${visibleColumns.length + (this.selectable ? 1 : 0)}>Loading...</td></tr>` : pageRows.length ? pageRows.map(({ row, id }) => html`
              <tr data-state=${this.selectedRowIds.includes(id) ? 'selected' : nothing}>
                ${this.selectable ? html`<td class="select-cell"><input type="checkbox" aria-label="Select row" .checked=${this.selectedRowIds.includes(id)} @click=${(event: MouseEvent) => this._toggleRowSelection(id, event)} /></td>` : nothing}
                ${visibleColumns.map((column) => {
                  const value = Reflect.get(row, column.accessorKey);
                  return html`<td class=${`align-${column.align ?? 'left'}`}>${column.cell ? column.cell(value, row) : String(value ?? '')}</td>`;
                })}
              </tr>
            `) : html`<tr><td class="message" colspan=${visibleColumns.length + (this.selectable ? 1 : 0)}>${this.emptyMessage}</td></tr>`}
          </tbody>
        </table>
      </div>
      <div part="pagination" class="pagination">
        ${this.selectable ? html`<span class="selection-summary">${this.selectedRowIds.length} of ${this._processedRows.length} row(s) selected.</span>` : nothing}
        <span class="page-summary">Page ${this.page} of ${this._pageCount}</span>
        <button part="previous-button" class="button" type="button" ?disabled=${this.page <= 1 || this.loading} @click=${this.previousPage}>Previous</button>
        <button part="next-button" class="button" type="button" ?disabled=${this.page >= this._pageCount || this.loading} @click=${this.nextPage}>Next</button>
      </div>
    `;
  }

  /** Move to the previous page. */
  previousPage = () => this._setPage(this.page - 1);

  /** Move to the next page. */
  nextPage = () => this._setPage(this.page + 1);

  /** Clear sorting, filtering, pagination, selection, and hidden columns. */
  reset() {
    this.filter = '';
    this.sortKey = '';
    this.sortDirection = 'none';
    this.page = 1;
    this.selectedRowIds = [];
    this.hiddenColumns = [];
    this._selectionAnchor = undefined;
  }

  private _columnId(column: DataTableColumn<TData>) { return column.id ?? column.accessorKey; }

  private _rowId(row: TData, index: number) {
    const value = Reflect.get(row, this.rowIdKey);
    return value === undefined || value === null ? String(index) : String(value);
  }

  private _compare(a: unknown, b: unknown) {
    if (a === b) return 0;
    if (a === null || a === undefined) return -1;
    if (b === null || b === undefined) return 1;
    if (typeof a === 'number' && typeof b === 'number') return a - b;
    return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
  }

  private _ariaSort(column: DataTableColumn<TData>) {
    return this._columnId(column) === this.sortKey && this.sortDirection !== 'none' ? (this.sortDirection === 'asc' ? 'ascending' : 'descending') : 'none';
  }

  private _sortIcon(column: DataTableColumn<TData>) {
    if (this._columnId(column) !== this.sortKey || this.sortDirection === 'none') return '-';
    return this.sortDirection === 'asc' ? '^' : 'v';
  }

  private _toggleSort(column: DataTableColumn<TData>) {
    const key = this._columnId(column);
    if (this.sortKey !== key) {
      this.sortKey = key;
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : this.sortDirection === 'desc' ? 'none' : 'asc';
      if (this.sortDirection === 'none') this.sortKey = '';
    }
    this.page = 1;
    this._emit<DataTableSortChangeDetail>('data-table-sort-change', { key: this.sortKey, direction: this.sortDirection });
  }

  private _handleFilter(event: Event) {
    this.filter = (event.target as HTMLInputElement).value;
    this.page = 1;
    this._emit('data-table-filter-change', { filter: this.filter, column: this.filterColumn });
  }

  private _setPage(page: number) {
    const nextPage = Math.min(Math.max(1, page), this._pageCount);
    if (nextPage === this.page) return;
    this.page = nextPage;
    this._emit<DataTablePageChangeDetail>('data-table-page-change', { page: this.page, pageSize: this.pageSize, pageCount: this._pageCount });
  }

  private _toggleColumn(id: string) {
    this.hiddenColumns = this.hiddenColumns.includes(id) ? this.hiddenColumns.filter((columnId) => columnId !== id) : [...this.hiddenColumns, id];
    this._emit('data-table-column-visibility-change', { hiddenColumns: [...this.hiddenColumns] });
  }

  private _togglePageSelection(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    const pageIds = this._pageRows.map(({ id }) => id);
    this.selectedRowIds = checked ? [...new Set([...this.selectedRowIds, ...pageIds])] : this.selectedRowIds.filter((id) => !pageIds.includes(id));
    this._emitSelection();
  }

  private _toggleRowSelection(id: string, event: MouseEvent) {
    const checked = (event.target as HTMLInputElement).checked;
    if (event.shiftKey && this._selectionAnchor) {
      const ids = this._processedRows.map((row) => row.id);
      const start = ids.indexOf(this._selectionAnchor);
      const end = ids.indexOf(id);
      if (start >= 0 && end >= 0) {
        const range = ids.slice(Math.min(start, end), Math.max(start, end) + 1);
        this.selectedRowIds = checked ? [...new Set([...this.selectedRowIds, ...range])] : this.selectedRowIds.filter((rowId) => !range.includes(rowId));
      }
    } else {
      this.selectedRowIds = checked ? [...new Set([...this.selectedRowIds, id])] : this.selectedRowIds.filter((rowId) => rowId !== id);
    }
    this._selectionAnchor = id;
    this._emitSelection();
  }

  private _emitSelection() {
    const selected = new Set(this.selectedRowIds);
    const selectedRows = this.data.filter((row, index) => selected.has(this._rowId(row, index)));
    this._emit<DataTableSelectionChangeDetail<TData>>('data-table-selection-change', { selectedRowIds: [...this.selectedRowIds], selectedRows });
  }

  private _emit<TDetail>(name: string, detail: TDetail) {
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-data-table': DataTable;
  }
}
