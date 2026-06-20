# Input

> A single-line text-like form control.

- **Package:** `@billy_mcdowell/shadcn-web-components/input`
- **Elements:** `<shadcn-input>`
- **Source:** [input.ts](./input.ts)
- **Stories:** [input.stories.ts](./input.stories.ts)

## When to use

Use Input for short text, email, password, number, search, or related scalar values.

Do not use it when multi-line prose; use Textarea.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/input';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-field label="Email" required>
  <shadcn-input type="email" name="email" autocomplete="email" required></shadcn-input>
</shadcn-field>
```

For Lit templates, use the same markup inside a Lit `html` tagged template. Set non-string or frequently changing values with property bindings such as `.value=${value}`; use `?disabled=${disabled}` for boolean attributes and `@event-name=${handler}` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing `disabled="false"`.

## Do

- Use the reflected attributes for initial markup and the `.value` property for live programmatic updates.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not use placeholder text as the only label.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as `onValueChange`; web components use attributes/properties and DOM events.

## Public API

### `<shadcn-input>`

A text input component with multiple types and states.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `type` | `InputType` | `'text'` | Input type |
| `value` | `string` | `''` | Input value |
| `placeholder` | `string` | `''` | Placeholder text |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `readonly` | `boolean` | `false` | Whether the input is readonly |
| `required` | `boolean` | `false` | Whether the input is required |
| `error` | `boolean` | `false` | Whether the input has an error |
| `name` | `string` | `''` | Name attribute |
| `autocomplete` | `string` | `''` | Autocomplete attribute |
| `minlength` | `number \| undefined` | — | Min length |
| `maxlength` | `number \| undefined` | — | Max length |
| `pattern` | `string \| undefined` | — | Pattern for validation |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `input-change` | `CustomEvent` | Fired when the input value changes |
| `input-focus` | `CustomEvent` | Fired when the input receives focus |
| `input-blur` | `CustomEvent` | Fired when the input loses focus |

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--input-bg` | Background color override |
| `--input-color` | Text color override |
| `--input-border` | Border color override |

## Agent checklist

1. Import the `/input` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
