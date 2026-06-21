# Carousel

> A scrollable gallery of slides with previous and next controls.

- **Package:** `@billy_mcdowell/shadcn-web-components/carousel`
- **Elements:** `<shadcn-carousel>`, `<shadcn-carousel-content>`, `<shadcn-carousel-item>`, `<shadcn-carousel-previous>`, `<shadcn-carousel-next>`
- **Source:** [carousel.ts](./carousel.ts)
- **Stories:** [carousel.stories.ts](./carousel.stories.ts)

## When to use

Use Carousel for featured content, image galleries, or step previews shown one viewport at a time.

Do not use it when comparing all items simultaneously; use a grid, list, or Tabs.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/carousel';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-carousel label="Featured items">
  <shadcn-carousel-content>
    <shadcn-carousel-item>Slide 1</shadcn-carousel-item>
    <shadcn-carousel-item>Slide 2</shadcn-carousel-item>
  </shadcn-carousel-content>
  <shadcn-carousel-previous></shadcn-carousel-previous>
  <shadcn-carousel-next></shadcn-carousel-next>
</shadcn-carousel>
```

For Lit templates, use the same markup inside a Lit `html` tagged template. Set non-string or frequently changing values with property bindings such as `.value=${value}`; use `?disabled=${disabled}` for boolean attributes and `@event-name=${handler}` for events.

## Accessibility

Provide a descriptive `label` for the carousel region. Previous and next controls must remain keyboard reachable.

## Do

- Keep `shadcn-carousel-content`, items, and navigation controls in the documented hierarchy.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not nest interactive controls that steal focus from slide navigation unexpectedly.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as `onValueChange`; web components use attributes/properties and DOM events.

## Public API

### `<shadcn-carousel>`

Coordinates an accessible, scroll-snapping carousel.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `index` | `number` | `0` | Active slide index. |
| `orientation` | `CarouselOrientation` | `'horizontal'` | Scrolling axis. |
| `loop` | `boolean` | `false` | Whether navigation wraps between the first and last slides. |
| `label` | `string` | `'Carousel'` | Accessible name for the carousel region. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `carousel-change` | `CustomEvent` | Fired when the active slide changes. |

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Carousel content and navigation controls. |

**CSS custom properties**

_None._

### `<shadcn-carousel-content>`

Provides the scrollable carousel viewport.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `orientation` | `CarouselOrientation` | `'horizontal'` | Scrolling axis, synchronized by the parent carousel. |
| `loop` | `boolean` | `false` | Whether parent navigation wraps, synchronized by the parent carousel. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| `carousel-select` | `CustomEvent` | Emitted by this element. |

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Carousel item elements. |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--carousel-gap` | Space between slides. |
| `--carousel-height` | Viewport height in vertical orientation. |
| `--carousel-item-size` | Width or height of each slide. |

### `<shadcn-carousel-item>`

A slide within carousel content.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `position` | `number` | `1` | One-based slide position, synchronized by carousel content. |
| `count` | `number` | `1` | Total number of slides, synchronized by carousel content. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| `default` | Slide content. |

**CSS custom properties**

_None._

### `<shadcn-carousel-previous>`

Moves the carousel to the previous slide.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | No description provided. |
| `orientation` | `CarouselOrientation` | `'horizontal'` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--carousel-control-offset` | Distance from the carousel edge. |

### `<shadcn-carousel-next>`

Moves the carousel to the next slide.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | No description provided. |
| `orientation` | `CarouselOrientation` | `'horizontal'` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--carousel-control-offset` | Distance from the carousel edge. |

## Agent checklist

1. Import the `/carousel` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
