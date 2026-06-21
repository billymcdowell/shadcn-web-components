# Data Table

> A sortable, filterable, paginated table for structured row data.

- **Package:** `@billy_mcdowell/shadcn-web-components/data-table`
- **Elements:** `<shadcn-data-table>`
- **Source:** [data-table.ts](./data-table.ts)
- **Stories:** [data-table.stories.ts](./data-table.stories.ts)

## When to use

Use Data Table for interactive tabular data with sorting, filtering, pagination, or row selection.

Do not use it when static semantic tables without built-in data behavior; use Table.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/data-table';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-data-table page-size="5" selectable filter-placeholder="Filter emails..."></shadcn-data-table>
```

For Lit templates, use the same markup inside a Lit `html` tagged template. Set non-string or frequently changing values with property bindings such as `.value=${value}`; use `?disabled=${disabled}` for boolean attributes and `@event-name=${handler}` for events.

## Configure columns and row data

Assign typed `columns` and `data` arrays as JavaScript properties. Use attributes such as `page-size`, `selectable`, `filter-placeholder`, `loading`, and `empty-message` for declarative configuration.

### Plain HTML or JavaScript

```html
<shadcn-data-table page-size="5" selectable filter-placeholder="Filter emails..."></shadcn-data-table>

<script type="module">
  import '@billy_mcdowell/shadcn-web-components/data-table';

  const table = document.querySelector('shadcn-data-table');
  table.columns = [
    { accessorKey: 'status', header: 'Status', sortable: true },
    { accessorKey: 'email', header: 'Email', sortable: true, filterable: true },
    { accessorKey: 'amount', header: 'Amount', sortable: true, align: 'right', cell: (value) => `$${Number(value).toFixed(2)}` },
  ];
  table.data = [
    { id: '1', status: 'success', email: 'ada@example.com', amount: 316 },
    { id: '2', status: 'processing', email: 'grace@example.com', amount: 837 },
  ];

  table.addEventListener('data-table-sort-change', (event) => {
    console.log(event.detail);
  });
</script>
```

### Events to observe

- `data-table-sort-change` — active sort key and direction
- `data-table-filter-change` — current filter query
- `data-table-page-change` — page, page size, and page count
- `data-table-selection-change` — selected row ids and rows
- `data-table-column-visibility-change` — column visibility toggles

## Accessibility

Column headers must describe the data. Loading and empty states should be understandable from surrounding text or the configured empty message.

## Do

- Assign typed `columns` and `data` arrays through JavaScript properties. Listen for the documented `data-table-*` events instead of reimplementing sort or pagination externally unless necessary.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not serialize complex column definitions into HTML attributes.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as `onValueChange`; web components use attributes/properties and DOM events.

## Public API

### `<shadcn-data-table>`

A sortable, filterable, paginated data table based on the shadcn/ui Data Table pattern.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `page-size` | `number` | `10` | Number of rows shown per page. |
| `page` | `number` | `1` | Current one-based page number. |
| `filter` | `string` | `''` | Current filter query. |
| `filter-column` | `string` | `''` | Optional column key to filter; all filterable columns are searched when empty. |
| `filter-placeholder` | `string` | `'Filter rows...'` | Placeholder displayed in the filter input. |
| `empty-message` | `string` | `'No results.'` | Message displayed when no rows match. |
| `selectable` | `boolean` | `false` | Whether row selection controls are shown. |
| `loading` | `boolean` | `false` | Whether a loading state is displayed. |
| `row-id-key` | `string` | `'id'` | Property used as the stable row identifier. Falls back to the row index. |
| `sort-key` | `string` | `''` | Active sort column key. |
| `sort-direction` | `DataTableSortDirection` | `'none'` | Active sort direction. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `name` | `CustomEvent` | Emitted by this element. |
| `data-table-sort-change` | `CustomEvent` | Fired when the active sort changes. |
| `data-table-filter-change` | `CustomEvent` | Fired when the filter query changes. |
| `data-table-page-change` | `CustomEvent` | Fired when the current page changes. |
| `data-table-selection-change` | `CustomEvent` | Fired when selected rows change. |
| `data-table-column-visibility-change` | `CustomEvent` | Fired when a column's visibility changes. |

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--data-table-min-width` | Minimum width of the table. |

## Agent checklist

1. Import the `/data-table` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
