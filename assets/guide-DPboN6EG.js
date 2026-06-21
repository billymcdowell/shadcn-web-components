import{u as s,j as n,M as i,h as a}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const r=`# Combobox

> A filterable, form-associated single-select with typeahead.

- **Package:** \`@billy_mcdowell/shadcn-web-components/combobox\`
- **Elements:** \`<shadcn-combobox>\`, \`<shadcn-combobox-input>\`, \`<shadcn-combobox-content>\`, \`<shadcn-combobox-empty>\`, \`<shadcn-combobox-group>\`, \`<shadcn-combobox-label>\`, \`<shadcn-combobox-item>\`, \`<shadcn-combobox-separator>\`
- **Source:** [combobox.ts](./combobox.ts)
- **Stories:** [combobox.stories.ts](./combobox.stories.ts)

## When to use

Use Combobox for choosing one option from a longer list where typing to filter helps discovery.

Do not use it when a short fixed set of mutually exclusive options; use Select or Radio Group.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/combobox';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-combobox name="framework" placeholder="Select a framework">
  <shadcn-combobox-input></shadcn-combobox-input>
  <shadcn-combobox-content>
    <shadcn-combobox-empty>No framework found.</shadcn-combobox-empty>
    <shadcn-combobox-item value="next.js" keywords="react">Next.js</shadcn-combobox-item>
    <shadcn-combobox-item value="sveltekit">SvelteKit</shadcn-combobox-item>
    <shadcn-combobox-item value="nuxt.js" keywords="vue">Nuxt.js</shadcn-combobox-item>
  </shadcn-combobox-content>
</shadcn-combobox>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Compound structure and filtering

The root coordinates keyboard navigation, filtering, and form submission. Required slotted children:

1. \`shadcn-combobox-input\` — editable trigger and filter field
2. \`shadcn-combobox-content\` — popup container for items
3. \`shadcn-combobox-empty\` — shown when filtering yields no matches
4. One or more \`shadcn-combobox-item\` elements with unique \`value\` attributes

Optional helpers: \`shadcn-combobox-group\`, \`shadcn-combobox-label\`, and \`shadcn-combobox-separator\`.

Listen for \`combobox-change\` when the selected item changes and \`combobox-open-change\` when the popup opens or closes.

## Accessibility

Include \`shadcn-combobox-input\` and \`shadcn-combobox-content\` in the documented hierarchy. Provide \`shadcn-combobox-empty\` when filtering can return no matches.

## Do

- Keep every \`shadcn-combobox-item\` \`value\` unique and include input, content, empty state, and items in the documented hierarchy.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not omit \`shadcn-combobox-input\`; the root element coordinates filtering and selection through its slotted children.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-combobox>\`

Filterable, form-associated single-select combobox.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`''\` | Selected item value. |
| \`name\` | \`string\` | \`''\` | Form field name. |
| \`open\` | \`boolean\` | \`false\` | Whether the popup is open. |
| \`disabled\` | \`boolean\` | \`false\` | Whether the combobox is disabled. |
| \`readonly\` | \`boolean\` | \`false\` | Whether the combobox is read-only. |
| \`required\` | \`boolean\` | \`false\` | Whether a non-empty selection is required. |
| \`placeholder\` | \`string\` | \`'Select an option'\` | Placeholder shown when no item is selected. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`combobox-open-change\` | \`CustomEvent\` | Fired when the popup opens or closes. |
| \`combobox-change\` | \`CustomEvent\` | Fired after an item is selected. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Combobox input and popup content. |

**CSS custom properties**

_None._

### \`<shadcn-combobox-input>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`placeholder\` | \`string\` | \`''\` | No description provided. |
| \`disabled\` | \`boolean\` | \`false\` | No description provided. |
| \`readonly\` | \`boolean\` | \`false\` | No description provided. |
| \`required\` | \`boolean\` | \`false\` | No description provided. |
| \`open\` | \`boolean\` | \`false\` | No description provided. |
| \`displayValue\` | \`string\` | \`''\` | No description provided. |
| \`activeDescendant\` | \`string\` | \`''\` | No description provided. |
| \`controls\` | \`string\` | \`''\` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`combobox-input\` | \`CustomEvent\` | Emitted by this element. |
| \`combobox-input-keydown\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-combobox-content>\`

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

### \`<shadcn-combobox-empty>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`visible\` | \`boolean\` | \`false\` | No description provided. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-combobox-group>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-combobox-label>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-combobox-item>\`

Part of this component family.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`''\` | Submitted item value. |
| \`keywords\` | \`string\` | \`''\` | Optional search keywords in addition to the label. |
| \`disabled\` | \`boolean\` | \`false\` | Whether the item cannot be selected. |
| \`selected\` | \`boolean\` | \`false\` | No description provided. |
| \`active\` | \`boolean\` | \`false\` | No description provided. |
| \`filtered\` | \`boolean\` | \`false\` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`combobox-item-pointermove\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-combobox-separator>\`

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

1. Import the \`/combobox\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Component Guides/Combobox"}),`
`,n.jsx(a,{children:r})]})}function m(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t()}export{m as default};
