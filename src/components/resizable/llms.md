# Resizable

> Accessible horizontal or vertical panel layouts that users can resize.

- **Package:** `@billy_mcdowell/shadcn-web-components/resizable`
- **Elements:** `<shadcn-resizable-panel-group>`, `<shadcn-resizable-panel>`, `<shadcn-resizable-handle>`

## Import

```js
import '@billy_mcdowell/shadcn-web-components/resizable';
```

## Example

```html
<shadcn-resizable-panel-group style="height: 20rem">
  <shadcn-resizable-panel default-size="30" min-size="20">Sidebar</shadcn-resizable-panel>
  <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
  <shadcn-resizable-panel default-size="70">Content</shadcn-resizable-panel>
</shadcn-resizable-panel-group>
```

Set an explicit height for vertical groups. Handles support pointer dragging and Arrow, Shift+Arrow, Home, and End keys. Listen for `resizable-change` during resizing and `resizable-commit` when resizing finishes; both events expose `{ sizes: number[] }`.

Use `getLayout()` and `setLayout(sizes)` for programmatic layout persistence and restoration.
