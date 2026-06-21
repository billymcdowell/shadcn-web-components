import{u as s,j as e,M as i,h as a}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const r=`# Empty

> A composed empty-state message with optional icon and action.

- **Package:** \`@billy_mcdowell/shadcn-web-components/empty\`
- **Elements:** \`<shadcn-empty>\`
- **Source:** [empty.ts](./empty.ts)
- **Stories:** [empty.stories.ts](./empty.stories.ts)

## When to use

Use Empty for explaining an empty collection, search result, or first-use state.

Do not use it when the interface is loading; use Skeleton or Spinner.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/empty';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-empty heading="No projects" description="Create your first project to get started.">
  <shadcn-button slot="action">Create project</shadcn-button>
</shadcn-empty>
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

### \`<shadcn-empty>\`

An empty state component for displaying when no content is available.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`heading\` | \`string \\| undefined\` | — | Heading text (alternative to using title slot) |
| \`description\` | \`string \\| undefined\` | — | Description text (alternative to using description slot) |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`icon\` | Optional icon slot |
| \`title\` | Title text slot |
| \`description\` | Description text slot |
| \`action\` | Optional action button slot |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/empty\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Component Guides/Empty"}),`
`,e.jsx(a,{children:r})]})}function m(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o()}export{m as default};
