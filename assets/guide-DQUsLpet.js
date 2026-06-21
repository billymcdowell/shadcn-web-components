import{u as s,j as n,M as a,h as i}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const r=`# Context Menu

> A command menu opened from a context-menu gesture.

- **Package:** \`@billy_mcdowell/shadcn-web-components/context-menu\`
- **Elements:** \`<shadcn-context-menu>\`, \`<shadcn-context-menu-content>\`, \`<shadcn-context-menu-item>\`, \`<shadcn-context-menu-separator>\`, \`<shadcn-context-menu-label>\`, \`<shadcn-context-menu-checkbox-item>\`
- **Source:** [context-menu.ts](./context-menu.ts)
- **Stories:** [context-menu.stories.ts](./context-menu.stories.ts)

## When to use

Use Context Menu for pointer or keyboard actions specific to a target item or canvas.

Do not use it when the commands must be discoverable as primary actions.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/context-menu';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-context-menu>
  <div>Right-click this file</div>
  <shadcn-context-menu-content slot="menu">
    <shadcn-context-menu-item>Rename</shadcn-context-menu-item>
    <shadcn-context-menu-separator></shadcn-context-menu-separator>
    <shadcn-context-menu-item>Delete</shadcn-context-menu-item>
  </shadcn-context-menu-content>
</shadcn-context-menu>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Provide another discoverable route to important commands. Context-menu gestures are not obvious to every user.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-context-menu>\`

Context Menu container (trigger area).

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Trigger content |
| \`menu\` | Menu content |

**CSS custom properties**

_None._

### \`<shadcn-context-menu-content>\`

Context Menu content.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |
| \`x\` | \`number\` | \`0\` | No description provided. |
| \`y\` | \`number\` | \`0\` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Menu items |

**CSS custom properties**

_None._

### \`<shadcn-context-menu-item>\`

Context Menu item.

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

### \`<shadcn-context-menu-separator>\`

Context Menu separator.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-context-menu-label>\`

Context Menu label.

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

### \`<shadcn-context-menu-checkbox-item>\`

Context Menu checkbox item.

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

1. Import the \`/context-menu\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Component Guides/Context Menu"}),`
`,n.jsx(i,{children:r})]})}function d(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{d as default};
