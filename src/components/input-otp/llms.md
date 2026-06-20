# Input OTP

> A form-associated control for fixed-length one-time codes.

- **Package:** `@billy_mcdowell/shadcn-web-components/input-otp`
- **Elements:** `<shadcn-input-otp>`
- **Source:** [input-otp.ts](./input-otp.ts)
- **Stories:** [input-otp.stories.ts](./input-otp.stories.ts)

## When to use

Use Input OTP for verification, authentication, or recovery codes.

Do not use it when passwords, PIN setup, or arbitrary numeric input.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/input-otp';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-input-otp name="code" length="6" mode="numeric" aria-label="Verification code" required></shadcn-input-otp>
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

### `<shadcn-input-otp>`

A form-associated one-time-password input rendered as individual visual slots.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | `string` | `''` | Current OTP value. |
| `length` | `number` | `6` | Number of characters accepted. |
| `mode` | `InputOTPMode` | `'numeric'` | Input filtering and virtual keyboard mode. |
| `name` | `string` | `''` | Form field name. |
| `disabled` | `boolean` | `false` | Whether the field is disabled. |
| `readonly` | `boolean` | `false` | Whether the field is read-only. |
| `required` | `boolean` | `false` | Whether a complete value is required. |
| `invalid` | `boolean` | `false` | Whether the field is marked invalid by the consumer. |
| `aria-label` | `string` | `'One-time password'` | Accessible label for the native input. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `input-otp-change` | `CustomEvent` | Fired whenever the value changes. |
| `input-otp-complete` | `CustomEvent` | Fired when the requested length is filled. |

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--input-otp-slot-size` | Width and height of each slot. |

## Agent checklist

1. Import the `/input-otp` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
