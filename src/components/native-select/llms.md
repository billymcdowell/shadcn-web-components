# Native Select

> A styled wrapper around a native HTML select.

- **Package:** `@billy_mcdowell/shadcn-web-components/native-select`
- **Elements:** `<shadcn-native-select>`
- **Source:** [native-select.ts](./native-select.ts)
- **Stories:** [native-select.stories.ts](./native-select.stories.ts)

## When to use

Use Native Select for simple form selection where native platform behavior and mobile pickers are preferred.

Do not use it when rich option content or custom popup behavior is required; use Select.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/native-select';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-native-select name="country" required>
  <option value="">Choose a country</option>
  <option value="gb">United Kingdom</option>
  <option value="us">United States</option>
</shadcn-native-select>
```

For Lit templates, use the same markup inside a Lit `html` tagged template. Set non-string or frequently changing values with property bindings such as `.value=${value}`; use `?disabled=${disabled}` for boolean attributes and `@event-name=${handler}` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing `disabled="false"`.

## Do

- Place native `<option>` elements in the default slot.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not expect rich HTML inside native options.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as `onValueChange`; web components use attributes/properties and DOM events.

## Public API

### `<shadcn-native-select>`

A styled native select element.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | `string` | `''` | Select value |
| `disabled` | `boolean` | `false` | Whether the select is disabled |
| `required` | `boolean` | `false` | Whether the select is required |
| `name` | `string` | `''` | Name attribute |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `select-change` | `CustomEvent` | Fired when the selection changes |

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Option elements |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--select-bg` | Background color override |
| `--select-color` | Text color override |
| `--select-border` | Border color override |

## Agent checklist

1. Import the `/native-select` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
