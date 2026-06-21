import{u as s,j as n,M as a,h as r}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const i=`# Menubar

> A desktop-style horizontal set of command menus.

- **Package:** \`@billy_mcdowell/shadcn-web-components/menubar\`
- **Elements:** \`<shadcn-menubar>\`, \`<shadcn-menubar-menu>\`, \`<shadcn-menubar-trigger>\`, \`<shadcn-menubar-content>\`, \`<shadcn-menubar-item>\`, \`<shadcn-menubar-separator>\`, \`<shadcn-menubar-label>\`, \`<shadcn-menubar-checkbox-item>\`
- **Source:** [menubar.ts](./menubar.ts)
- **Stories:** [menubar.stories.ts](./menubar.stories.ts)

## When to use

Use Menubar for dense application commands organized under persistent top-level categories.

Do not use it when ordinary site navigation; use Navigation Menu.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/menubar';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-menubar>
  <shadcn-menubar-menu>
    <shadcn-menubar-trigger>File</shadcn-menubar-trigger>
    <shadcn-menubar-content>
      <shadcn-menubar-item>New <span slot="shortcut">⌘N</span></shadcn-menubar-item>
      <shadcn-menubar-item>Open</shadcn-menubar-item>
    </shadcn-menubar-content>
  </shadcn-menubar-menu>
</shadcn-menubar>
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

### \`<shadcn-menubar>\`

Menubar container.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Menubar menus |

**CSS custom properties**

_None._

### \`<shadcn-menubar-menu>\`

Menubar menu (wrapper for trigger and content).

**Attributes**

_None._

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`menubar-menu-open\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Trigger and Content |

**CSS custom properties**

_None._

### \`<shadcn-menubar-trigger>\`

Menubar trigger.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Trigger text |

**CSS custom properties**

_None._

### \`<shadcn-menubar-content>\`

Menubar content.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Menu items |

**CSS custom properties**

_None._

### \`<shadcn-menubar-item>\`

Menubar item.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`disabled\` | \`boolean\` | \`false\` | No description provided. |
| \`inset\` | \`boolean\` | \`false\` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`select\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Item content |
| \`shortcut\` | Keyboard shortcut |

**CSS custom properties**

_None._

### \`<shadcn-menubar-separator>\`

Menubar separator.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-menubar-label>\`

Menubar label.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`inset\` | \`boolean\` | \`false\` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Label text |

**CSS custom properties**

_None._

### \`<shadcn-menubar-checkbox-item>\`

Menubar checkbox item.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`checked\` | \`boolean\` | \`false\` | No description provided. |
| \`disabled\` | \`boolean\` | \`false\` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`change\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Item content |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/menubar\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Component Guides/Menubar"}),`
`,n.jsx(r,{children:i})]})}function d(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{d as default};
