import{u as s,j as n,M as i,h as a}from"./blocks-BvVVn4M2.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B6ecvixb.js";const r=`# Input Group

> A layout wrapper for an input with prefix or suffix content.

- **Package:** \`@billy_mcdowell/shadcn-web-components/input-group\`
- **Elements:** \`<shadcn-input-group>\`
- **Source:** [input-group.ts](./input-group.ts)
- **Stories:** [input-group.stories.ts](./input-group.stories.ts)

## When to use

Use Input Group for units, icons, actions, or fixed text attached to a form control.

Do not use it when several independent form fields need grouping.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/input-group';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-input-group>
  <span slot="prefix">https://</span>
  <shadcn-input name="domain" aria-label="Domain"></shadcn-input>
  <span slot="suffix">.com</span>
</shadcn-input-group>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing \`disabled="false"\`.

## Do

- The prefix and suffix are visual; ensure the contained input still has an accessible label.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not place multiple primary inputs in one input group.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-input-group>\`

A container for grouping inputs with addons (prefixes/suffixes).

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`prefix\` | Content to display before the input |
| \`default\` | Input element |
| \`suffix\` | Content to display after the input |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/input-group\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Component Guides/Input Group"}),`
`,n.jsx(a,{children:r})]})}function d(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{d as default};
