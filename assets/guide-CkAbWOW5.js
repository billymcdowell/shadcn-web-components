import{u as a,j as e,M as r,h as s}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const i=`# Separator

> A horizontal or vertical visual divider.

- **Package:** \`@billy_mcdowell/shadcn-web-components/separator\`
- **Elements:** \`<shadcn-separator>\`
- **Source:** [separator.ts](./separator.ts)
- **Stories:** [separator.stories.ts](./separator.stories.ts)

## When to use

Use Separator for separating related groups where spacing alone is insufficient.

Do not use it when a heading or stronger semantic boundary is needed.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/separator';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-separator orientation="horizontal" decorative></shadcn-separator>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Use \`decorative\` when the divider is purely visual. Use a semantic separator only when it conveys a real boundary.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-separator>\`

A separator component for visually dividing content.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`orientation\` | \`'horizontal' \\| 'vertical'\` | \`'horizontal'\` | Orientation of the separator |
| \`decorative\` | \`boolean\` | \`false\` | Whether the separator is decorative (no semantic meaning) |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--separator-color\` | Separator color override |

## Agent checklist

1. Import the \`/separator\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Component Guides/Separator"}),`
`,e.jsx(s,{children:i})]})}function h(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{h as default};
