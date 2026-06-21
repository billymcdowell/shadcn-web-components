import{u as s,j as e,M as r,h as a}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const i=`# Toggle Group

> A coordinated group of single- or multiple-selection toggles.

- **Package:** \`@billy_mcdowell/shadcn-web-components/toggle-group\`
- **Elements:** \`<shadcn-toggle-group>\`
- **Source:** [toggle-group.ts](./toggle-group.ts)
- **Stories:** [toggle-group.stories.ts](./toggle-group.stories.ts)

## When to use

Use Toggle Group for compact toolbar choices or segmented selection.

Do not use it when options need long labels or explanation; use Radio Group or Checkbox.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/toggle-group';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-toggle-group type="single" value="center" aria-label="Alignment">
  <shadcn-toggle value="left">Left</shadcn-toggle>
  <shadcn-toggle value="center">Center</shadcn-toggle>
  <shadcn-toggle value="right">Right</shadcn-toggle>
</shadcn-toggle-group>
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

### \`<shadcn-toggle-group>\`

A container for grouping toggle buttons with support for single or multiple selection.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`type\` | \`'single' \\| 'multiple'\` | \`'single'\` | Selection type: single or multiple |
| \`value\` | \`string\` | \`''\` | Currently selected value(s) - comma-separated for multiple |
| \`orientation\` | \`'horizontal' \\| 'vertical'\` | \`'horizontal'\` | Orientation of the toggle group |
| \`disabled\` | \`boolean\` | \`false\` | Whether the toggle group is disabled |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`toggle-group-change\` | \`CustomEvent\` | Fired when the selection changes |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Toggle buttons |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/toggle-group\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Component Guides/Toggle Group"}),`
`,e.jsx(a,{children:i})]})}function u(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{u as default};
