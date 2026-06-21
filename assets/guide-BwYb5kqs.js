import{u as a,j as e,M as o,h as i}from"./blocks-5Aikqafl.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B5y9qznB.js";const r=`# Sidebar

> A persistent, optionally collapsed side-region container.

- **Package:** \`@billy_mcdowell/shadcn-web-components/sidebar\`
- **Elements:** \`<shadcn-sidebar>\`
- **Source:** [sidebar.ts](./sidebar.ts)
- **Stories:** [sidebar.stories.ts](./sidebar.stories.ts)

## When to use

Use Sidebar for application navigation or tools that remain available beside main content.

Do not use it when temporary or modal supporting content; use Sheet or Drawer.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/sidebar';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-sidebar>
  <nav aria-label="Primary"><a href="/dashboard">Dashboard</a><a href="/settings">Settings</a></nav>
</shadcn-sidebar>
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

### \`<shadcn-sidebar>\`

Sidebar container.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`collapsed\` | \`boolean\` | \`false\` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Sidebar content |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/sidebar\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Component Guides/Sidebar"}),`
`,e.jsx(i,{children:r})]})}function h(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{h as default};
