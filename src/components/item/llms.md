# Item

> A selectable or actionable row with optional leading and trailing content.

- **Package:** `@billy_mcdowell/shadcn-web-components/item`
- **Elements:** `<shadcn-item>`
- **Source:** [item.ts](./item.ts)
- **Stories:** [item.stories.ts](./item.stories.ts)

## When to use

Use Item for settings rows, result lists, command rows, or compact summaries.

Do not use it when semantic navigation or menu behavior is required; use links or a menu component.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/item';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-item>
  <span slot="icon" aria-hidden="true">★</span>
  Starred project
  <shadcn-badge slot="suffix">New</shadcn-badge>
</shadcn-item>
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

### `<shadcn-item>`

A generic list item component for use in menus, selects, and command palettes.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `selected` | `boolean` | `false` | Whether the item is selected |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `item-click` | `CustomEvent` | Fired when the item is clicked |

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Item content |
| `icon` | Optional icon slot (start) |
| `suffix` | Optional suffix content (end) |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--item-bg` | Background color override |
| `--item-color` | Text color override |

## Agent checklist

1. Import the `/item` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
