import{u as s,j as e,M as a,h as i}from"./blocks-5Aikqafl.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B5y9qznB.js";const r=`# Skeleton

> A placeholder that approximates content while it loads.

- **Package:** \`@billy_mcdowell/shadcn-web-components/skeleton\`
- **Elements:** \`<shadcn-skeleton>\`
- **Source:** [skeleton.ts](./skeleton.ts)
- **Stories:** [skeleton.stories.ts](./skeleton.stories.ts)

## When to use

Use Skeleton for preserving layout and communicating the shape of incoming content.

Do not use it when a short action has no meaningful content shape; use Spinner.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/skeleton';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-skeleton variant="text" width="12rem" height="1rem"></shadcn-skeleton>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Treat skeletons as presentational and ensure the loading region communicates its busy state separately.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-skeleton>\`

A skeleton loading component for placeholder content.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`variant\` | \`'default' \\| 'circle' \\| 'text' \\| 'heading' \\| 'avatar' \\| 'button' \\| 'card'\` | \`'default'\` | Variant of the skeleton |
| \`width\` | \`string\` | \`''\` | Width override |
| \`height\` | \`string\` | \`''\` | Height override |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--skeleton-bg\` | Skeleton background color |

## Agent checklist

1. Import the \`/skeleton\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Component Guides/Skeleton"}),`
`,e.jsx(i,{children:r})]})}function d(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{d as default};
