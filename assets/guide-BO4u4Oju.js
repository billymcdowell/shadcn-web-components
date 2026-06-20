import{u as o,j as n,M as a,h as s}from"./blocks-xLiptKi5.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DzFl6Ur1.js";const r=`# Navigation Menu

> A structured site-navigation menu with expandable panels.

- **Package:** \`@billy_mcdowell/shadcn-web-components/navigation-menu\`
- **Elements:** \`<shadcn-navigation-menu>\`, \`<shadcn-navigation-menu-list>\`, \`<shadcn-navigation-menu-item>\`, \`<shadcn-navigation-menu-trigger>\`, \`<shadcn-navigation-menu-content>\`, \`<shadcn-navigation-menu-link>\`
- **Source:** [navigation-menu.ts](./navigation-menu.ts)
- **Stories:** [navigation-menu.stories.ts](./navigation-menu.stories.ts)

## When to use

Use Navigation Menu for top-level product or marketing navigation with grouped destinations.

Do not use it when application commands; use Menubar or Dropdown Menu.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/navigation-menu';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-navigation-menu>
  <shadcn-navigation-menu-list>
    <shadcn-navigation-menu-item>
      <shadcn-navigation-menu-trigger>Products</shadcn-navigation-menu-trigger>
      <shadcn-navigation-menu-content><shadcn-navigation-menu-link href="/analytics">Analytics</shadcn-navigation-menu-link></shadcn-navigation-menu-content>
    </shadcn-navigation-menu-item>
  </shadcn-navigation-menu-list>
</shadcn-navigation-menu>
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

### \`<shadcn-navigation-menu>\`

Navigation menu container.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Navigation menu list |

**CSS custom properties**

_None._

### \`<shadcn-navigation-menu-list>\`

Navigation menu list.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | List items |

**CSS custom properties**

_None._

### \`<shadcn-navigation-menu-item>\`

Navigation menu item.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Trigger and Content |

**CSS custom properties**

_None._

### \`<shadcn-navigation-menu-trigger>\`

Navigation menu trigger.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Trigger text |

**CSS custom properties**

_None._

### \`<shadcn-navigation-menu-content>\`

Navigation menu content.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Content |

**CSS custom properties**

_None._

### \`<shadcn-navigation-menu-link>\`

Navigation menu link.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`href\` | \`string\` | \`'#'\` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Link text |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/navigation-menu\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function i(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Component Guides/Navigation Menu"}),`
`,n.jsx(s,{children:r})]})}function d(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i()}export{d as default};
