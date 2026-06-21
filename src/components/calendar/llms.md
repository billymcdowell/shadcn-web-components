# Calendar

> An accessible single-date calendar with month navigation.

- **Package:** `@billy_mcdowell/shadcn-web-components/calendar`
- **Elements:** `<shadcn-calendar>`
- **Source:** [calendar.ts](./calendar.ts)
- **Stories:** [calendar.stories.ts](./calendar.stories.ts)

## When to use

Use Calendar for inline date grids, popover content, or custom date-selection UIs.

Do not use it when a compact labeled form field with validation; use Date Picker.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/calendar';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-calendar value="2026-06-21" month="2026-06" min="2026-01-01" max="2026-12-31"></shadcn-calendar>
```

For Lit templates, use the same markup inside a Lit `html` tagged template. Set non-string or frequently changing values with property bindings such as `.value=${value}`; use `?disabled=${disabled}` for boolean attributes and `@event-name=${handler}` for events.

## ISO dates and live updates

Use ISO `YYYY-MM-DD` for `value`, `min`, and `max`, and `YYYY-MM` for `month`. Listen for `calendar-change` and update the selected date through the `.value` property or attribute.

```js
calendar.addEventListener('calendar-change', (event) => {
  console.log(event.detail.value, event.detail.date);
});

calendar.addEventListener('calendar-month-change', (event) => {
  console.log(event.detail.month);
});
```

## Accessibility

Dates use ISO `YYYY-MM-DD` strings. Arrow keys move between days; Page Up/Down change months. Keep `min` and `max` synchronized with business rules.

## Do

- Use ISO `YYYY-MM-DD` for `value`, `min`, and `max`; use `YYYY-MM` for `month`. Listen for `calendar-change` and update `value` programmatically with the `.value` property.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not pass locale-specific display strings as `value`; always use ISO dates.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as `onValueChange`; web components use attributes/properties and DOM events.

## Public API

### `<shadcn-calendar>`

An accessible single-date calendar with month navigation.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | `string` | `''` | Selected date as YYYY-MM-DD. |
| `month` | `string` | `''` | Displayed month as YYYY-MM. |
| `min` | `string` | `''` | Earliest selectable date as YYYY-MM-DD. |
| `max` | `string` | `''` | Latest selectable date as YYYY-MM-DD. |
| `locale` | `string` | `''` | BCP 47 locale used for labels. |
| `week-starts-on` | `number` | `0` | First weekday, from 0 (Sunday) to 6 (Saturday). |
| `show-outside-days` | `boolean` | `true` | Shows dates belonging to adjacent months. |
| `disabled` | `boolean` | `false` | Prevents all date selection and navigation. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `calendar-month-change` | `CustomEvent` | Fired after the displayed month changes. |
| `calendar-change` | `CustomEvent` | Fired after a date is selected. |

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the `/calendar` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
