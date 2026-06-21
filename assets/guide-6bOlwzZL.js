import{u as o,j as e,M as a,h as r}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const i=`# Alert

> A persistent inline message for important contextual information.

- **Package:** \`@billy_mcdowell/shadcn-web-components/alert\`
- **Elements:** \`<shadcn-alert>\`, \`<shadcn-alert-title>\`, \`<shadcn-alert-description>\`
- **Source:** [alert.ts](./alert.ts)
- **Stories:** [alert.stories.ts](./alert.stories.ts)

## When to use

Use Alert for showing status, warnings, errors, or guidance near the content they affect.

Do not use it when the message requires an immediate decision; use Alert Dialog instead.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/alert';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-alert variant="default">
  <shadcn-alert-title>Saved</shadcn-alert-title>
  <shadcn-alert-description>Your changes are live.</shadcn-alert-description>
</shadcn-alert>
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

### \`<shadcn-alert>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`variant\` | \`AlertVariant\` | \`'default'\` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-alert-title>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-alert-description>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/alert\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Component Guides/Alert"}),`
`,e.jsx(r,{children:i})]})}function h(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{h as default};
