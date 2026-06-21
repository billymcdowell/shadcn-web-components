import{u as o,j as e,M as i,h as a}from"./blocks-5Aikqafl.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B5y9qznB.js";const r=`# Select

> A form-associated custom popup for choosing one option.

- **Package:** \`@billy_mcdowell/shadcn-web-components/select\`
- **Elements:** \`<shadcn-select>\`, \`<shadcn-select-trigger>\`, \`<shadcn-select-value>\`, \`<shadcn-select-content>\`, \`<shadcn-select-item>\`
- **Source:** [select.ts](./select.ts)
- **Stories:** [select.stories.ts](./select.stories.ts)

## When to use

Use Select for single selection that needs styled options and keyboard navigation.

Do not use it when native mobile behavior is preferable; use Native Select.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/select';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-select name="role" placeholder="Choose a role" required>
  <shadcn-select-trigger><shadcn-select-value></shadcn-select-value></shadcn-select-trigger>
  <shadcn-select-content>
    <shadcn-select-item value="admin">Administrator</shadcn-select-item>
    <shadcn-select-item value="member">Member</shadcn-select-item>
  </shadcn-select-content>
</shadcn-select>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing \`disabled="false"\`.

## Do

- Keep every item \`value\` unique and include the trigger, value, content, and items in the documented hierarchy.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not put arbitrary interactive controls inside an option.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-select>\`

Form-associated custom select coordinating its compound children.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`''\` | Selected item value. |
| \`name\` | \`string\` | \`''\` | Form field name. |
| \`open\` | \`boolean\` | \`false\` | Whether the popup is open. |
| \`disabled\` | \`boolean\` | \`false\` | Whether selection is disabled. |
| \`required\` | \`boolean\` | \`false\` | Whether a non-empty selection is required. |
| \`placeholder\` | \`string\` | \`'Select an option'\` | Placeholder shown when no item is selected. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`select-open-change\` | \`CustomEvent\` | Fired when the popup opens or closes. |
| \`select-change\` | \`CustomEvent\` | Fired when selection changes. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Select trigger and content. |

**CSS custom properties**

_None._

### \`<shadcn-select-trigger>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |
| \`disabled\` | \`boolean\` | \`false\` | No description provided. |
| \`label\` | \`string\` | \`''\` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`select-toggle\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-select-value>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`label\` | \`string\` | \`''\` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-select-content>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-select-item>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`''\` | No description provided. |
| \`disabled\` | \`boolean\` | \`false\` | No description provided. |
| \`selected\` | \`boolean\` | \`false\` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`select-navigate\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/select\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Component Guides/Select"}),`
`,e.jsx(a,{children:r})]})}function h(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{h as default};
