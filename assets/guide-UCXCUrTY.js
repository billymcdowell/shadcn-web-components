import{u as o,j as e,M as a,h as i}from"./blocks-5Aikqafl.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B5y9qznB.js";const r=`# Aspect Ratio

> A container that preserves a fixed width-to-height ratio.

- **Package:** \`@billy_mcdowell/shadcn-web-components/aspect-ratio\`
- **Elements:** \`<shadcn-aspect-ratio>\`
- **Source:** [aspect-ratio.ts](./aspect-ratio.ts)
- **Stories:** [aspect-ratio.stories.ts](./aspect-ratio.stories.ts)

## When to use

Use Aspect Ratio for responsive media, maps, embeds, or placeholders that must not cause layout shift.

Do not use it when content needs intrinsic or unconstrained height.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/aspect-ratio';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-aspect-ratio ratio="1.7777778">
  <img src="hero.jpg" alt="Mountain landscape">
</shadcn-aspect-ratio>
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

### \`<shadcn-aspect-ratio>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`ratio\` | \`number\` | \`1\` | Width-to-height ratio. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/aspect-ratio\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Component Guides/Aspect Ratio"}),`
`,e.jsx(i,{children:r})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s()}export{d as default};
