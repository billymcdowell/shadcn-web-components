import{u as o,j as n,M as s,h as a}from"./blocks-xLiptKi5.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DzFl6Ur1.js";const i=`# Drawer

> A modal panel that enters from an edge, optimized for compact screens.

- **Package:** \`@billy_mcdowell/shadcn-web-components/drawer\`
- **Elements:** \`<shadcn-drawer>\`, \`<shadcn-drawer-trigger>\`, \`<shadcn-drawer-close>\`, \`<shadcn-drawer-content>\`, \`<shadcn-drawer-title>\`, \`<shadcn-drawer-description>\`, \`<shadcn-drawer-header>\`, \`<shadcn-drawer-footer>\`
- **Source:** [drawer.ts](./drawer.ts)
- **Stories:** [drawer.stories.ts](./drawer.stories.ts)

## When to use

Use Drawer for mobile-first supporting tasks, filters, or details.

Do not use it when persistent navigation or desktop utility panels; use Sidebar or Sheet.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/drawer';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-drawer>
  <shadcn-drawer-trigger>Open filters</shadcn-drawer-trigger>
  <shadcn-drawer-content direction="bottom">
    <shadcn-drawer-header><shadcn-drawer-title>Filters</shadcn-drawer-title><shadcn-drawer-description>Narrow the results.</shadcn-drawer-description></shadcn-drawer-header>
    <shadcn-drawer-footer><shadcn-drawer-close>Apply</shadcn-drawer-close></shadcn-drawer-footer>
  </shadcn-drawer-content>
</shadcn-drawer>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Give every drawer a title, and normally a description. Focus is trapped while open and restored on close.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-drawer>\`

Modal drawer rooted at a viewport edge.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`dismissible\` | \`boolean\` | \`true\` | Whether Escape and backdrop interaction may dismiss the drawer. |
| \`open\` | \`boolean\` | \`false\` | Whether the dialog is open. This property is reflected to the attribute. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`drawer-open-change\` | \`CustomEvent\` | Fired when the open state changes. |
| \`open\` | \`CustomEvent\` | Emitted by this element. |
| \`close\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Drawer trigger and content. |

**CSS custom properties**

_None._

### \`<shadcn-drawer-trigger>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-drawer-close>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-drawer-content>\`

Modal drawer surface.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`direction\` | \`DrawerDirection\` | \`'bottom'\` | Viewport edge from which the drawer appears. |
| \`dismissible\` | \`boolean\` | \`true\` | Whether backdrop interaction may dismiss the drawer. |
| \`aria-label\` | \`string\` | \`''\` | Accessible name used when no title element is present. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Drawer content. |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--drawer-size\` | Drawer width or maximum height. |

### \`<shadcn-drawer-title>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-drawer-description>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-drawer-header>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-drawer-footer>\`

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

1. Import the \`/drawer\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function r(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Component Guides/Drawer"}),`
`,n.jsx(a,{children:i})]})}function p(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r()}export{p as default};
