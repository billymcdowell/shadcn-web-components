import{u as a,j as n,M as s,h as l}from"./blocks-xLiptKi5.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DzFl6Ur1.js";const r=`# Table

> A set of components for semantic tabular data.

- **Package:** \`@billy_mcdowell/shadcn-web-components/table\`
- **Elements:** \`<shadcn-table>\`, \`<shadcn-table-header>\`, \`<shadcn-table-body>\`, \`<shadcn-table-footer>\`, \`<shadcn-table-row>\`, \`<shadcn-table-head>\`, \`<shadcn-table-cell>\`, \`<shadcn-table-caption>\`
- **Source:** [table.ts](./table.ts)
- **Stories:** [table.stories.ts](./table.stories.ts)

## When to use

Use Table for data whose row and column relationships are essential.

Do not use it when layout, cards, or a simple unstructured list.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/table';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-table>
  <shadcn-table-caption>Recent invoices</shadcn-table-caption>
  <shadcn-table-header><shadcn-table-row><shadcn-table-head>Invoice</shadcn-table-head><shadcn-table-head>Total</shadcn-table-head></shadcn-table-row></shadcn-table-header>
  <shadcn-table-body><shadcn-table-row><shadcn-table-cell>INV-001</shadcn-table-cell><shadcn-table-cell>$250</shadcn-table-cell></shadcn-table-row></shadcn-table-body>
</shadcn-table>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Use header cells for column or row labels and provide a caption when the table purpose is not already clear from nearby text.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-table>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-table-header>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-table-body>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-table-footer>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-table-row>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-table-head>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-table-cell>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-table-caption>\`

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

1. Import the \`/table\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Component Guides/Table"}),`
`,n.jsx(l,{children:r})]})}function b(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{b as default};
