import{u as o,j as n,M as i,h as r}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const a=`# Spinner

> An indeterminate indicator for an in-progress operation.

- **Package:** \`@billy_mcdowell/shadcn-web-components/spinner\`
- **Elements:** \`<shadcn-spinner>\`
- **Source:** [spinner.ts](./spinner.ts)
- **Stories:** [spinner.stories.ts](./spinner.stories.ts)

## When to use

Use Spinner for short operations whose completion percentage is unknown.

Do not use it when loading a structured page region; use Skeleton.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/spinner';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-spinner size="md" aria-label="Saving"></shadcn-spinner>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Supply an accessible label when the surrounding live-region text does not already announce the operation.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-spinner>\`

A loading spinner component.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`size\` | \`SpinnerSize\` | \`'default'\` | Size of the spinner |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--spinner-color\` | Spinner color override |

## Agent checklist

1. Import the \`/spinner\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function s(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Component Guides/Spinner"}),`
`,n.jsx(r,{children:a})]})}function d(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s()}export{d as default};
