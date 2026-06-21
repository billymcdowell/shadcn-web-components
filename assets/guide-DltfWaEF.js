import{u as s,j as n,M as a,h as r}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const i=`# Button Group

> A layout primitive that visually joins related buttons.

- **Package:** \`@billy_mcdowell/shadcn-web-components/button-group\`
- **Elements:** \`<shadcn-button-group>\`
- **Source:** [button-group.ts](./button-group.ts)
- **Stories:** [button-group.stories.ts](./button-group.stories.ts)

## When to use

Use Button Group for grouping adjacent actions or segmented controls with equal hierarchy.

Do not use it when the actions are unrelated or need explanatory separation.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/button-group';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-button-group aria-label="Text alignment">
  <shadcn-button variant="outline">Left</shadcn-button>
  <shadcn-button variant="outline">Center</shadcn-button>
  <shadcn-button variant="outline">Right</shadcn-button>
</shadcn-button-group>
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

### \`<shadcn-button-group>\`

A container for grouping related buttons together.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`orientation\` | \`ButtonGroupOrientation\` | \`'horizontal'\` | Orientation of the button group |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Button elements |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--button-group-gap\` | Gap between buttons |

## Agent checklist

1. Import the \`/button-group\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(t){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Component Guides/Button Group"}),`
`,n.jsx(r,{children:i})]})}function h(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o()}export{h as default};
