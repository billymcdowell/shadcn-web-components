import{u as s,j as e,M as i,h as o}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const r=`# Resizable

> An accessible split layout with draggable panel handles.

- **Package:** \`@billy_mcdowell/shadcn-web-components/resizable\`
- **Elements:** \`<shadcn-resizable-panel-group>\`, \`<shadcn-resizable-panel>\`, \`<shadcn-resizable-handle>\`
- **Source:** [resizable.ts](./resizable.ts)
- **Stories:** [resizable.stories.ts](./resizable.stories.ts)

## When to use

Use Resizable for IDE-style sidebars, split editors, or adjustable multi-pane layouts.

Do not use it when temporary modal panels; use Sheet or Drawer.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/resizable';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-resizable-panel-group style="height: 12.5rem; max-width: 48rem;">
  <shadcn-resizable-panel default-size="50"><div>One</div></shadcn-resizable-panel>
  <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
  <shadcn-resizable-panel default-size="50"><div>Two</div></shadcn-resizable-panel>
</shadcn-resizable-panel-group>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Handles remain keyboard operable. Do not remove visible focus indicators on drag handles.

## Do

- Alternate \`shadcn-resizable-panel\` and \`shadcn-resizable-handle\` elements inside \`shadcn-resizable-panel-group\`.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not nest scrollable page content inside panels without an explicit height on the panel group.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-resizable-panel-group>\`

Coordinates a set of resizable panels and handles.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`orientation\` | \`ResizableOrientation\` | \`'horizontal'\` | Direction in which the panels are arranged. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`name\` | \`CustomEvent\` | Emitted by this element. |
| \`resizable-change\` | \`CustomEvent\` | Fired continuously while the panel layout changes. |
| \`resizable-commit\` | \`CustomEvent\` | Fired when a pointer or keyboard resize is committed. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Resizable panels separated by resizable handles. |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--resizable-handle-color\` | Handle divider color. |
| \`--resizable-handle-size\` | Visible handle divider thickness. |

### \`<shadcn-resizable-panel>\`

A content region within a resizable panel group.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`default-size\` | \`number\` | \`0\` | Initial panel size as a percentage. Values at or below zero share remaining space. |
| \`min-size\` | \`number\` | \`10\` | Minimum panel size as a percentage. |
| \`max-size\` | \`number\` | \`100\` | Maximum panel size as a percentage. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Panel content. |

**CSS custom properties**

_None._

### \`<shadcn-resizable-handle>\`

An accessible drag and keyboard handle between two resizable panels.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`with-handle\` | \`boolean\` | \`false\` | Shows the shadcn-style grip affordance. |
| \`disabled\` | \`boolean\` | \`false\` | Prevents pointer and keyboard resizing. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--resizable-handle-color\` | Handle divider color. |
| \`--resizable-handle-size\` | Visible handle divider thickness. |

## Agent checklist

1. Import the \`/resizable\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function a(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Component Guides/Resizable"}),`
`,e.jsx(o,{children:r})]})}function c(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a()}export{c as default};
