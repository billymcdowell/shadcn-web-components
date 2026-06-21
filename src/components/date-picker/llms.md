# Date Picker

> A form-associated date field with calendar popup and validation.

- **Package:** `@billy_mcdowell/shadcn-web-components/date-picker`
- **Elements:** `<shadcn-date-picker>`
- **Source:** [date-picker.ts](./date-picker.ts)
- **Stories:** [date-picker.stories.ts](./date-picker.stories.ts)

## When to use

Use Date Picker for choosing one date in a form with min/max constraints and native validity reporting.

Do not use it when an inline calendar grid without a trigger; use Calendar.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/date-picker';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-field label="Start date" required>
  <shadcn-date-picker name="startDate" placeholder="Pick a date" min="2026-01-01" required></shadcn-date-picker>
</shadcn-field>
```

For Lit templates, use the same markup inside a Lit `html` tagged template. Set non-string or frequently changing values with property bindings such as `.value=${value}`; use `?disabled=${disabled}` for boolean attributes and `@event-name=${handler}` for events.

## Accessibility

Pair with Field or supply an accessible name. The trigger exposes `aria-haspopup="dialog"` and `aria-expanded`. Validation messages surface through native form validity APIs.

## Do

- Use ISO `YYYY-MM-DD` for `value`, `min`, and `max`. Listen for `date-picker-change` and `date-picker-open-change`.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not use Calendar alone when the UI needs a labeled form field with validation.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as `onValueChange`; web components use attributes/properties and DOM events.

## Public API

### `<shadcn-date-picker>`

A form-associated date picker composed from a shadcn-style trigger and calendar.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | `string` | `''` | Selected date as YYYY-MM-DD. |
| `name` | `string` | `''` | Form field name. |
| `placeholder` | `string` | `'Pick a date'` | Placeholder displayed without a selection. |
| `locale` | `string` | `''` | BCP 47 locale used to format the selected date. |
| `min` | `string` | `''` | Earliest selectable date as YYYY-MM-DD. |
| `max` | `string` | `''` | Latest selectable date as YYYY-MM-DD. |
| `required` | `boolean` | `false` | Whether a date is required for form submission. |
| `disabled` | `boolean` | `false` | Prevents opening and excludes the control from form submission. |
| `readonly` | `boolean` | `false` | Prevents user changes while preserving form submission. |
| `open` | `boolean` | `false` | Whether the calendar popup is open. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `date-picker-open-change` | `CustomEvent` | Fired when the popup opens or closes. |
| `date-picker-change` | `CustomEvent` | Fired after the selected date changes. |

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the `/date-picker` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
