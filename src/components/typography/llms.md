# Typography

> A semantic text element with consistent type styles.

- **Package:** `@billy_mcdowell/shadcn-web-components/typography`
- **Elements:** `<shadcn-typography>`
- **Source:** [typography.ts](./typography.ts)
- **Stories:** [typography.stories.ts](./typography.stories.ts)

## When to use

Use Typography for headings, paragraphs, quotations, code, leads, and muted text that follow the design system.

Do not use it when text needs component-specific semantics or interaction.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/typography';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-typography variant="h2">Project settings</shadcn-typography>
<shadcn-typography variant="muted">Changes apply to every member.</shadcn-typography>
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

### `<shadcn-typography>`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `variant` | `TypographyVariant` | `'p'` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the `/typography` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
