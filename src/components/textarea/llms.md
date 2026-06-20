# Textarea

> A multi-line text form control.

- **Package:** `@billy_mcdowell/shadcn-web-components/textarea`
- **Elements:** `<shadcn-textarea>`
- **Source:** [textarea.ts](./textarea.ts)
- **Stories:** [textarea.stories.ts](./textarea.stories.ts)

## When to use

Use Textarea for messages, descriptions, notes, or other free-form prose.

Do not use it when short single-line values; use Input.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/textarea';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-field label="Message">
  <shadcn-textarea name="message" rows="5" maxlength="500"></shadcn-textarea>
</shadcn-field>
```

For Lit templates, use the same markup inside a Lit `html` tagged template. Set non-string or frequently changing values with property bindings such as `.value=${value}`; use `?disabled=${disabled}` for boolean attributes and `@event-name=${handler}` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing `disabled="false"`.

## Do

- Use `.value` for live programmatic updates and `textarea-change` for user edits.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not use placeholder text as the only label.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as `onValueChange`; web components use attributes/properties and DOM events.

## Public API

### `<shadcn-textarea>`

A multi-line text input component.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | `string` | `''` | Textarea value |
| `placeholder` | `string` | `''` | Placeholder text |
| `disabled` | `boolean` | `false` | Whether the textarea is disabled |
| `readonly` | `boolean` | `false` | Whether the textarea is readonly |
| `required` | `boolean` | `false` | Whether the textarea is required |
| `error` | `boolean` | `false` | Whether the textarea has an error |
| `name` | `string` | `''` | Name attribute |
| `minlength` | `number \| undefined` | — | Min length |
| `maxlength` | `number \| undefined` | — | Max length |
| `rows` | `number \| undefined` | — | Rows |
| `cols` | `number \| undefined` | — | Cols |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `textarea-change` | `CustomEvent` | Fired when the textarea value changes |
| `textarea-focus` | `CustomEvent` | Emitted by this element. |
| `textarea-blur` | `CustomEvent` | Emitted by this element. |

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--textarea-bg` | Background color override |
| `--textarea-color` | Text color override |
| `--textarea-border` | Border color override |
| `--textarea-min-height` | Minimum height override |

## Agent checklist

1. Import the `/textarea` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
