# Command

> A searchable, keyboard-navigable command menu styled after shadcn/ui.

- **Package:** `@billy_mcdowell/shadcn-web-components/command`
- **Elements:** `<shadcn-command>`, `<shadcn-command-dialog>`, `<shadcn-command-input>`, `<shadcn-command-list>`, `<shadcn-command-empty>`, `<shadcn-command-group>`, `<shadcn-command-item>`, `<shadcn-command-separator>`, `<shadcn-command-shortcut>`

## Import

```js
import '@billy_mcdowell/shadcn-web-components/command';
```

## Example

```html
<shadcn-command>
  <shadcn-command-input placeholder="Type a command or search..."></shadcn-command-input>
  <shadcn-command-list>
    <shadcn-command-empty>No results found.</shadcn-command-empty>
    <shadcn-command-group heading="Suggestions">
      <shadcn-command-item value="calendar">Calendar</shadcn-command-item>
      <shadcn-command-item value="settings">Settings <shadcn-command-shortcut>⌘S</shadcn-command-shortcut></shadcn-command-item>
    </shadcn-command-group>
  </shadcn-command-list>
</shadcn-command>
```

Listen for `command-select`; its detail is `{ value: string }`. Arrow keys, Home, End, and Enter navigate and select enabled visible items. `shadcn-command-dialog` exposes `show()` and `close()`, returns focus on close, and fires `command-dialog-open-change`.
