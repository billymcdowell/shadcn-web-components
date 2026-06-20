import{u as r,j as n,M as s,h as a}from"./blocks-xLiptKi5.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DzFl6Ur1.js";const c=`# Card

> A visual container that groups related content and actions.

- **Package:** \`@billy_mcdowell/shadcn-web-components/card\`
- **Elements:** \`<shadcn-card>\`, \`<shadcn-card-header>\`, \`<shadcn-card-title>\`, \`<shadcn-card-description>\`, \`<shadcn-card-content>\`, \`<shadcn-card-footer>\`
- **Source:** [card.ts](./card.ts)
- **Stories:** [card.stories.ts](./card.stories.ts)

## When to use

Use Card for summaries, previews, settings groups, or dashboard modules.

Do not use it when ordinary page sections do not need visual containment.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/card';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-card>
  <shadcn-card-header><shadcn-card-title>Team plan</shadcn-card-title><shadcn-card-description>For growing teams.</shadcn-card-description></shadcn-card-header>
  <shadcn-card-content>$29 per month</shadcn-card-content>
  <shadcn-card-footer><shadcn-button>Choose plan</shadcn-button></shadcn-card-footer>
</shadcn-card>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing \`disabled="false"\`.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-card>\`

A card container component for grouping related content.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Card content |
| \`header\` | Card header content |
| \`footer\` | Card footer content |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--card-bg\` | Background color override |
| \`--card-border\` | Border color override |

### \`<shadcn-card-header>\`

Card header component for styled card headers.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Header content |

**CSS custom properties**

_None._

### \`<shadcn-card-title>\`

Card title component for styled card titles.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Title text |

**CSS custom properties**

_None._

### \`<shadcn-card-description>\`

Card description component for styled card descriptions.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Description text |

**CSS custom properties**

_None._

### \`<shadcn-card-content>\`

Card content component for main card content.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Content |

**CSS custom properties**

_None._

### \`<shadcn-card-footer>\`

Card footer component for card footers.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Footer content |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/card\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Component Guides/Card"}),`
`,n.jsx(a,{children:c})]})}function h(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{h as default};
