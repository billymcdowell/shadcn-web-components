import{u as s,j as n,M as a,h as o}from"./blocks-BvVVn4M2.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B6ecvixb.js";const i=`# Breadcrumb

> A hierarchical trail showing the current page location.

- **Package:** \`@billy_mcdowell/shadcn-web-components/breadcrumb\`
- **Elements:** \`<shadcn-breadcrumb>\`, \`<shadcn-breadcrumb-item>\`, \`<shadcn-breadcrumb-link>\`, \`<shadcn-breadcrumb-page>\`, \`<shadcn-breadcrumb-separator>\`, \`<shadcn-breadcrumb-ellipsis>\`
- **Source:** [breadcrumb.ts](./breadcrumb.ts)
- **Stories:** [breadcrumb.stories.ts](./breadcrumb.stories.ts)

## When to use

Use Breadcrumb for sites or applications with multiple navigation levels.

Do not use it when representing a sequence of steps; use dedicated step navigation.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/breadcrumb';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-breadcrumb aria-label="Breadcrumb">
  <shadcn-breadcrumb-item><shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link></shadcn-breadcrumb-item>
  <shadcn-breadcrumb-separator>/</shadcn-breadcrumb-separator>
  <shadcn-breadcrumb-item><shadcn-breadcrumb-page>Settings</shadcn-breadcrumb-page></shadcn-breadcrumb-item>
</shadcn-breadcrumb>
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

### \`<shadcn-breadcrumb>\`

Breadcrumb container component.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Breadcrumb list items |

**CSS custom properties**

_None._

### \`<shadcn-breadcrumb-item>\`

Breadcrumb item component.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Item content |

**CSS custom properties**

_None._

### \`<shadcn-breadcrumb-link>\`

Breadcrumb link component.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`href\` | \`string\` | \`'#'\` | No description provided. |
| \`target\` | \`string\` | \`''\` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Link text |

**CSS custom properties**

_None._

### \`<shadcn-breadcrumb-page>\`

Breadcrumb page component (current page).

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Page title |

**CSS custom properties**

_None._

### \`<shadcn-breadcrumb-separator>\`

Breadcrumb separator component.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Custom separator icon |

**CSS custom properties**

_None._

### \`<shadcn-breadcrumb-ellipsis>\`

Breadcrumb ellipsis component.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/breadcrumb\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function r(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Component Guides/Breadcrumb"}),`
`,n.jsx(o,{children:i})]})}function b(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r()}export{b as default};
