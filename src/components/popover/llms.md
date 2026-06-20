# Popover

> A non-modal floating surface anchored to a trigger.

- **Package:** `@billy_mcdowell/shadcn-web-components/popover`
- **Elements:** `<shadcn-popover>`, `<shadcn-popover-content>`, `<shadcn-popover-trigger>`
- **Source:** [popover.ts](./popover.ts)
- **Stories:** [popover.stories.ts](./popover.stories.ts)

## When to use

Use Popover for compact interactive content such as filters, pickers, or supplemental controls.

Do not use it when the content is a list of commands; use Dropdown Menu.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/popover';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-popover>
  <shadcn-popover-trigger>Choose date</shadcn-popover-trigger>
  <shadcn-popover-content>Calendar or controls go here.</shadcn-popover-content>
</shadcn-popover>
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

### `<shadcn-popover>`

The root popover component that manages the popover's open state.
Acts as a context provider for child components and handles positioning.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | Whether the popover is open. This property is reflected to the attribute. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `close` | `CustomEvent` | Emitted by this element. |

**Slots**

_None._

**CSS custom properties**

_None._

### `<shadcn-popover-content>`

The popover content component that conditionally renders its slotted content
based on the popover's open state. It also handles closing when clicking outside.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### `<shadcn-popover-trigger>`

The popover trigger component that toggles the popover when clicked.
Wraps its slotted content and adds click handling to toggle the popover.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the `/popover` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
