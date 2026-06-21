import{u as i,j as n,M as s,h as a}from"./blocks-5Aikqafl.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B5y9qznB.js";const r=`# Tooltip

> A brief, non-interactive label shown on hover or focus.

- **Package:** \`@billy_mcdowell/shadcn-web-components/tooltip\`
- **Elements:** \`<shadcn-tooltip>\`, \`<shadcn-tooltip-trigger>\`, \`<shadcn-tooltip-content>\`
- **Source:** [tooltip.ts](./tooltip.ts)
- **Stories:** [tooltip.stories.ts](./tooltip.stories.ts)

## When to use

Use Tooltip for clarifying an unfamiliar icon or terse control.

Do not use it when content is essential, lengthy, or interactive; keep it visible or use Popover.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/tooltip';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-tooltip>
  <shadcn-tooltip-trigger><shadcn-button size="icon" aria-label="Archive">⌄</shadcn-button></shadcn-tooltip-trigger>
  <shadcn-tooltip-content side="top">Archive</shadcn-tooltip-content>
</shadcn-tooltip>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

The trigger must remain understandable without hover. Tooltips also open on keyboard focus and are not a place for interactive content.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-tooltip>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | Whether the tooltip is open. |
| \`delay\` | \`number\` | \`300\` | Delay before opening, in milliseconds. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`tooltip-open-change\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-tooltip-trigger>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |
| \`describedBy\` | \`string\` | \`''\` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-tooltip-content>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |
| \`side\` | \`TooltipSide\` | \`'top'\` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/tooltip\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Component Guides/Tooltip"}),`
`,n.jsx(a,{children:r})]})}function h(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{h as default};
