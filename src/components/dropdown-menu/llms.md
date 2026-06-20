# Dropdown Menu

> A button-triggered menu of commands or choices.

- **Package:** `@billy_mcdowell/shadcn-web-components/dropdown-menu`
- **Elements:** `<shadcn-dropdown-menu>`, `<shadcn-dropdown-menu-trigger>`, `<shadcn-dropdown-menu-content>`, `<shadcn-dropdown-menu-item>`, `<shadcn-dropdown-menu-separator>`, `<shadcn-dropdown-menu-label>`, `<shadcn-dropdown-menu-checkbox-item>`
- **Source:** [dropdown-menu.ts](./dropdown-menu.ts)
- **Stories:** [dropdown-menu.stories.ts](./dropdown-menu.stories.ts)

## When to use

Use Dropdown Menu for compact secondary actions associated with a visible trigger.

Do not use it when selecting a form value; use Select or Native Select.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/dropdown-menu';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-dropdown-menu>
  <shadcn-dropdown-menu-trigger>Actions</shadcn-dropdown-menu-trigger>
  <shadcn-dropdown-menu-content align="end">
    <shadcn-dropdown-menu-item>Edit</shadcn-dropdown-menu-item>
    <shadcn-dropdown-menu-item>Duplicate</shadcn-dropdown-menu-item>
  </shadcn-dropdown-menu-content>
</shadcn-dropdown-menu>
```

For Lit templates, use the same markup inside a Lit `html` tagged template. Set non-string or frequently changing values with property bindings such as `.value=${value}`; use `?disabled=${disabled}` for boolean attributes and `@event-name=${handler}` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing `disabled="false"`.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as `onValueChange`; web components use attributes/properties and DOM events.

## Public API

### `<shadcn-dropdown-menu>`

Dropdown Menu container.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Trigger and Content |

**CSS custom properties**

_None._

### `<shadcn-dropdown-menu-trigger>`

Dropdown Menu trigger.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Trigger content |

**CSS custom properties**

_None._

### `<shadcn-dropdown-menu-content>`

Dropdown Menu content.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | No description provided. |
| `align` | `'start' \| 'end'` | `'start'` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Menu items |

**CSS custom properties**

_None._

### `<shadcn-dropdown-menu-item>`

Dropdown Menu item.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | No description provided. |
| `inset` | `boolean` | `false` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `select` | `CustomEvent` | Emitted by this element. |

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Item content |
| `shortcut` | Keyboard shortcut |

**CSS custom properties**

_None._

### `<shadcn-dropdown-menu-separator>`

Dropdown Menu separator.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### `<shadcn-dropdown-menu-label>`

Dropdown Menu label.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `inset` | `boolean` | `false` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Label text |

**CSS custom properties**

_None._

### `<shadcn-dropdown-menu-checkbox-item>`

Dropdown Menu checkbox item.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | No description provided. |
| `disabled` | `boolean` | `false` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `change` | `CustomEvent` | Emitted by this element. |

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Item content |

**CSS custom properties**

_None._

## Agent checklist

1. Import the `/dropdown-menu` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
