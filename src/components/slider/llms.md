# Slider

> A form control for selecting a numeric value from a range.

- **Package:** `@billy_mcdowell/shadcn-web-components/slider`
- **Elements:** `<shadcn-slider>`
- **Source:** [slider.ts](./slider.ts)
- **Stories:** [slider.stories.ts](./slider.stories.ts)

## When to use

Use Slider for approximate numeric choices where visual position aids understanding.

Do not use it when the user must enter an exact arbitrary number; use Input.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/slider';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-slider name="volume" min="0" max="100" step="5" value="50"></shadcn-slider>
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

### `<shadcn-slider>`

A slider input for selecting a value from a range.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | `number` | `50` | Current value |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `disabled` | `boolean` | `false` | Whether the slider is disabled |
| `name` | `string` | `''` | Name attribute |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `slider-change` | `CustomEvent` | Fired when the slider value changes |

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--slider-track-bg` | Track background color |
| `--slider-range-bg` | Range background color |
| `--slider-thumb-bg` | Thumb background color |

## Agent checklist

1. Import the `/slider` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
