# Carousel

> A swipeable, keyboard-accessible collection of scroll-snapping slides.

- **Package:** `@billy_mcdowell/shadcn-web-components/carousel`
- **Elements:** `<shadcn-carousel>`, `<shadcn-carousel-content>`, `<shadcn-carousel-item>`, `<shadcn-carousel-previous>`, `<shadcn-carousel-next>`
- **Source:** [carousel.ts](./carousel.ts)
- **Stories:** [carousel.stories.ts](./carousel.stories.ts)

## Import

```js
import '@billy_mcdowell/shadcn-web-components/carousel';
```

## Example

```html
<shadcn-carousel label="Featured products" loop>
  <shadcn-carousel-content>
    <shadcn-carousel-item>First slide</shadcn-carousel-item>
    <shadcn-carousel-item>Second slide</shadcn-carousel-item>
    <shadcn-carousel-item>Third slide</shadcn-carousel-item>
  </shadcn-carousel-content>
  <shadcn-carousel-previous></shadcn-carousel-previous>
  <shadcn-carousel-next></shadcn-carousel-next>
</shadcn-carousel>
```

Set `orientation="vertical"` for a vertical carousel. Use `--carousel-item-size` on the root to show multiple items, and set `--carousel-height` for the vertical viewport.

## Accessibility

Give each carousel a concise `label`. Previous and next controls have native button semantics and accessible names. Arrow Left/Right navigate a horizontal carousel; Arrow Up/Down navigate a vertical carousel. Slides announce their position and total count.

## Public API

### `<shadcn-carousel>`

| Attribute/property | Type | Default | Purpose |
| --- | --- | --- | --- |
| `index` | `number` | `0` | Active slide index. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Scrolling axis. |
| `loop` | `boolean` | `false` | Wrap navigation at either end. |
| `label` | `string` | `'Carousel'` | Accessible region name. |

Methods: `scrollPrevious()`, `scrollNext()`, and `scrollToSlide(index)`.

The `carousel-change` event bubbles and is composed. Its detail is `{ index, count }`.

### CSS custom properties

| Property | Default | Purpose |
| --- | --- | --- |
| `--carousel-gap` | `1rem` | Space between slides. |
| `--carousel-height` | `24rem` | Vertical viewport height. |
| `--carousel-item-size` | `100%` | Width or height of each slide. |
| `--carousel-control-offset` | `3rem` | Navigation control offset. |
