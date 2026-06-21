import{u as a,j as n,M as s,h as m}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const i=`# Command

> A searchable, keyboard-navigable command menu.

- **Package:** \`@billy_mcdowell/shadcn-web-components/command\`
- **Elements:** \`<shadcn-command>\`, \`<shadcn-command-input>\`, \`<shadcn-command-list>\`, \`<shadcn-command-empty>\`, \`<shadcn-command-group>\`, \`<shadcn-command-item>\`, \`<shadcn-command-separator>\`, \`<shadcn-command-shortcut>\`, \`<shadcn-command-dialog>\`
- **Source:** [command.ts](./command.ts)
- **Stories:** [command.stories.ts](./command.stories.ts)

## When to use

Use Command for power-user workflows, application search, or action pickers filtered by typing.

Do not use it when a small static choice set without search; use Select, Combobox, or Dropdown Menu.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/command';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-command>
  <shadcn-command-input placeholder="Type a command or search..."></shadcn-command-input>
  <shadcn-command-list>
    <shadcn-command-empty>No results found.</shadcn-command-empty>
    <shadcn-command-group heading="Suggestions">
      <shadcn-command-item value="calendar">Calendar</shadcn-command-item>
      <shadcn-command-item value="settings">Settings <shadcn-command-shortcut>⌘S</shadcn-command-shortcut></shadcn-command-item>
    </shadcn-command-group>
  </shadcn-command-list>
</shadcn-command>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Keep the input, list, empty state, groups, and items in the documented hierarchy. Arrow keys, Home, End, and Enter navigate enabled visible items.

## Do

- Listen for \`command-select\` and read \`event.detail.value\`. Use \`shadcn-command-dialog\` when the palette should open modally.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not omit \`shadcn-command-empty\`; filtering can legitimately return no matches.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-command>\`

A searchable command menu styled after shadcn/ui.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`''\` | Current search query. |
| \`disable-filter\` | \`boolean\` | \`false\` | Disables built-in text filtering when true. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`command-select\` | \`CustomEvent\` | Fired when an enabled command item is selected. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Command input, list, groups, and items. |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--command-list-max-height\` | Maximum height of the command list. |

### \`<shadcn-command-input>\`

Search field for a command menu.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`placeholder\` | \`string\` | \`'Type a command or search...'\` | Input placeholder. |
| \`value\` | \`string\` | \`''\` | Current query. |
| \`disabled\` | \`boolean\` | \`false\` | Whether the input is disabled. |
| \`aria-label\` | \`string\` | \`'Search commands'\` | Accessible label. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`command-input\` | \`CustomEvent\` | Fired as the search query changes. |
| \`command-keydown\` | \`CustomEvent\` | Fired for command-navigation keys. |

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-command-list>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-command-empty>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-command-group>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`heading\` | \`string\` | \`''\` | Optional group heading. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-command-item>\`

A selectable command menu item.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`''\` | Stable value emitted on selection and used for filtering. |
| \`keywords\` | \`string\` | \`''\` | Space-separated extra search terms. |
| \`disabled\` | \`boolean\` | \`false\` | Whether the item is unavailable. |
| \`active\` | \`boolean\` | \`false\` | Whether the item is the active keyboard option. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`command-item-select\` | \`CustomEvent\` | Requests selection of this item. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Item label and optional leading content. |

**CSS custom properties**

_None._

### \`<shadcn-command-separator>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-command-shortcut>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-command-dialog>\`

Presents a command menu in a modal dialog.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | Whether the modal is open. |
| \`aria-label\` | \`string\` | \`'Command menu'\` | Accessible dialog label. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`command-dialog-open-change\` | \`CustomEvent\` | Fired when the dialog opens or closes. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | A shadcn-command composition. |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/command\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Component Guides/Command"}),`
`,n.jsx(m,{children:i})]})}function h(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{h as default};
