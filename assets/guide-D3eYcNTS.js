import{u as a,j as n,M as o,h as i}from"./blocks-5Aikqafl.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B5y9qznB.js";const r=`# Tabs

> A set of layered panels where one panel is visible at a time.

- **Package:** \`@billy_mcdowell/shadcn-web-components/tabs\`
- **Elements:** \`<shadcn-tabs>\`, \`<shadcn-tabs-list>\`, \`<shadcn-tabs-trigger>\`, \`<shadcn-tabs-content>\`
- **Source:** [tabs.ts](./tabs.ts)
- **Stories:** [tabs.stories.ts](./tabs.stories.ts)

## When to use

Use Tabs for switching between peer views within the same context.

Do not use it when content should be scanned or compared simultaneously.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/tabs';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-tabs value="account">
  <shadcn-tabs-list><shadcn-tabs-trigger value="account">Account</shadcn-tabs-trigger><shadcn-tabs-trigger value="security">Security</shadcn-tabs-trigger></shadcn-tabs-list>
  <shadcn-tabs-content value="account">Account settings</shadcn-tabs-content>
  <shadcn-tabs-content value="security">Security settings</shadcn-tabs-content>
</shadcn-tabs>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing \`disabled="false"\`.

## Do

- Give every trigger and its content the same unique \`value\`.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not nest unrelated controls inside the tab list.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-tabs>\`

Coordinates an accessible tablist and its tab panels.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`''\` | Selected tab value. |
| \`orientation\` | \`TabsOrientation\` | \`'horizontal'\` | Tablist orientation. |
| \`activation-mode\` | \`TabsActivationMode\` | \`'automatic'\` | Whether focus automatically activates a tab. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`tabs-change\` | \`CustomEvent\` | Fired when the selected tab changes. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Tab list and content elements. |

**CSS custom properties**

_None._

### \`<shadcn-tabs-list>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`orientation\` | \`TabsOrientation\` | \`'horizontal'\` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-tabs-trigger>\`

Selects a tab panel.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`''\` | No description provided. |
| \`disabled\` | \`boolean\` | \`false\` | No description provided. |
| \`active\` | \`boolean\` | \`false\` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`tab-navigate\` | \`CustomEvent\` | Requests keyboard focus navigation. |
| \`tab-select\` | \`CustomEvent\` | Requests tab selection. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Trigger label. |

**CSS custom properties**

_None._

### \`<shadcn-tabs-content>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`''\` | No description provided. |
| \`active\` | \`boolean\` | \`false\` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/tabs\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function s(e){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Component Guides/Tabs"}),`
`,n.jsx(i,{children:r})]})}function b(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s()}export{b as default};
