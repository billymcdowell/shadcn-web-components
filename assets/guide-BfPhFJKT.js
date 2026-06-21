import{u as o,j as e,M as i,h as a}from"./blocks-BvVVn4M2.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B6ecvixb.js";const r=`# Sheet

> A modal panel that slides from a chosen screen edge.

- **Package:** \`@billy_mcdowell/shadcn-web-components/sheet\`
- **Elements:** \`<shadcn-sheet>\`, \`<shadcn-sheet-trigger>\`, \`<shadcn-sheet-close>\`, \`<shadcn-sheet-content>\`, \`<shadcn-sheet-title>\`, \`<shadcn-sheet-description>\`, \`<shadcn-sheet-header>\`, \`<shadcn-sheet-footer>\`
- **Source:** [sheet.ts](./sheet.ts)
- **Stories:** [sheet.stories.ts](./sheet.stories.ts)

## When to use

Use Sheet for desktop forms, details, filters, or navigation that should retain page context.

Do not use it when the panel should remain persistently visible; use Sidebar.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/sheet';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-sheet>
  <shadcn-sheet-trigger>Open settings</shadcn-sheet-trigger>
  <shadcn-sheet-content side="right">
    <shadcn-sheet-header><shadcn-sheet-title>Settings</shadcn-sheet-title><shadcn-sheet-description>Update workspace preferences.</shadcn-sheet-description></shadcn-sheet-header>
    <shadcn-sheet-footer><shadcn-sheet-close>Done</shadcn-sheet-close></shadcn-sheet-footer>
  </shadcn-sheet-content>
</shadcn-sheet>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Give every sheet a title, and normally a description. Focus is trapped while open and restored on close.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-sheet>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | Whether the dialog is open. This property is reflected to the attribute. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`sheet-open-change\` | \`CustomEvent\` | Emitted by this element. |
| \`open\` | \`CustomEvent\` | Emitted by this element. |
| \`close\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-sheet-trigger>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-sheet-close>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-sheet-content>\`

Modal panel attached to an edge of the viewport.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`side\` | \`SheetSide\` | \`'right'\` | Viewport edge from which the sheet appears. |
| \`aria-label\` | \`string\` | \`''\` | Accessible name used when no title element is present. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Sheet content. |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--sheet-size\` | Panel width or height. |

### \`<shadcn-sheet-title>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-sheet-description>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-sheet-header>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-sheet-footer>\`

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

1. Import the \`/sheet\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Component Guides/Sheet"}),`
`,e.jsx(a,{children:r})]})}function p(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{p as default};
