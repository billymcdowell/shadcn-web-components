import{u as i,j as e,M as s,h as a}from"./blocks-BvVVn4M2.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B6ecvixb.js";const r=`# Accordion

> A vertically stacked set of expandable sections.

- **Package:** \`@billy_mcdowell/shadcn-web-components/accordion\`
- **Elements:** \`<shadcn-accordion-item>\`, \`<shadcn-accordion>\`
- **Source:** [accordion.ts](./accordion.ts)
- **Stories:** [accordion.stories.ts](./accordion.stories.ts)

## When to use

Use Accordion for revealing optional or hierarchical content while keeping the page compact.

Do not use it when the user needs to compare all sections at once; use visible sections or tabs instead.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/accordion';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-accordion type="single" collapsible>
  <shadcn-accordion-item value="shipping">
    <span slot="trigger">Shipping</span>
    Orders ship in 2-3 business days.
  </shadcn-accordion-item>
</shadcn-accordion>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing \`disabled="false"\`.

## Do

- Give every item a stable unique \`value\`.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not hide information users must read to complete the current task.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-accordion-item>\`

An accordion item component.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |
| \`value\` | \`string\` | \`''\` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`accordion-item-toggle\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Accordion content |
| \`trigger\` | Trigger button content |

**CSS custom properties**

_None._

### \`<shadcn-accordion>\`

Container for accordion items.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`type\` | \`'single' \\| 'multiple'\` | \`'single'\` | No description provided. |
| \`value\` | \`string\` | \`''\` | No description provided. |
| \`collapsible\` | \`boolean\` | \`false\` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`accordion-change\` | \`CustomEvent\` | Fired when accordion selection changes |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Accordion items |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/accordion\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Component Guides/Accordion"}),`
`,e.jsx(a,{children:r})]})}function u(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{u as default};
