import{u as r,j as e,M as s,h as a}from"./blocks-5Aikqafl.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B5y9qznB.js";const i=`# Hover Card

> A non-modal preview revealed by hover or keyboard focus.

- **Package:** \`@billy_mcdowell/shadcn-web-components/hover-card\`
- **Elements:** \`<shadcn-hover-card>\`, \`<shadcn-hover-card-trigger>\`, \`<shadcn-hover-card-content>\`
- **Source:** [hover-card.ts](./hover-card.ts)
- **Stories:** [hover-card.stories.ts](./hover-card.stories.ts)

## When to use

Use Hover Card for supplementary previews for links, people, or referenced entities.

Do not use it when essential information or actions that must work well on touch; keep them inline or use Popover.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/hover-card';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-hover-card>
  <shadcn-hover-card-trigger><a href="/people/ada">Ada Lovelace</a></shadcn-hover-card-trigger>
  <shadcn-hover-card-content side="top">Mathematician and writer</shadcn-hover-card-content>
</shadcn-hover-card>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

The trigger must be focusable so keyboard users can reveal the preview. Do not place required actions only inside the card.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-hover-card>\`

Displays rich preview content after its trigger is hovered or focused.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | Whether the card is open. |
| \`open-delay\` | \`number\` | \`300\` | Delay before opening, in milliseconds. |
| \`close-delay\` | \`number\` | \`200\` | Delay before closing, in milliseconds. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`hover-card-open-change\` | \`CustomEvent\` | Fired when the open state changes. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Hover card trigger and content. |

**CSS custom properties**

_None._

### \`<shadcn-hover-card-trigger>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-hover-card-content>\`

Rich hover card preview.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |
| \`side\` | \`HoverCardSide\` | \`'bottom'\` | No description provided. |
| \`align\` | \`HoverCardAlign\` | \`'center'\` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Preview content. |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--hover-card-width\` | Preview width. |

## Agent checklist

1. Import the \`/hover-card\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Component Guides/Hover Card"}),`
`,e.jsx(a,{children:i})]})}function p(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{p as default};
