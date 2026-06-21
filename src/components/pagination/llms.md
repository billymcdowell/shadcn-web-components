# Pagination

> Page navigation styled after shadcn/ui.

- **Package:** `@billy_mcdowell/shadcn-web-components/pagination`
- **Elements:** `<shadcn-pagination>`, `<shadcn-pagination-content>`, `<shadcn-pagination-item>`, `<shadcn-pagination-link>`, `<shadcn-pagination-previous>`, `<shadcn-pagination-next>`, `<shadcn-pagination-ellipsis>`

## Import

```js
import '@billy_mcdowell/shadcn-web-components/pagination';
```

## Example

```html
<shadcn-pagination>
  <shadcn-pagination-content>
    <shadcn-pagination-item><shadcn-pagination-previous href="?page=1"></shadcn-pagination-previous></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-link href="?page=1">1</shadcn-pagination-link></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-link href="?page=2" current>2</shadcn-pagination-link></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-next href="?page=3"></shadcn-pagination-next></shadcn-pagination-item>
  </shadcn-pagination-content>
</shadcn-pagination>
```

Use `current` on exactly one page link and `disabled` when a previous or next destination is unavailable. Pagination uses native anchors, so standard link keyboard behavior and navigation apply.
