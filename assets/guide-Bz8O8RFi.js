import{u as o,j as e,M as r,h as a}from"./blocks-xLiptKi5.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DzFl6Ur1.js";const i=`# Progress

> A visual indicator of determinate task completion.

- **Package:** \`@billy_mcdowell/shadcn-web-components/progress\`
- **Elements:** \`<shadcn-progress>\`
- **Source:** [progress.ts](./progress.ts)
- **Stories:** [progress.stories.ts](./progress.stories.ts)

## When to use

Use Progress for showing known completion as a value between zero and a maximum.

Do not use it when duration or completion is unknown; use Spinner.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/progress';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-progress value="65" max="100" aria-label="Upload progress"></shadcn-progress>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Supply a concise \`aria-label\`, and keep \`value\` and \`max\` synchronized with real progress.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-progress>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`number\` | \`0\` | No description provided. |
| \`max\` | \`number\` | \`100\` | No description provided. |
| \`aria-label\` | \`string\` | \`'Progress'\` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/progress\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Component Guides/Progress"}),`
`,e.jsx(a,{children:i})]})}function u(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{u as default};
