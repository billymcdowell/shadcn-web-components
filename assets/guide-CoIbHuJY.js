import{u as o,j as e,M as i,h as r}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const a=`# Field

> A form-field wrapper for labels, help text, and validation errors.

- **Package:** \`@billy_mcdowell/shadcn-web-components/field\`
- **Elements:** \`<shadcn-field>\`
- **Source:** [field.ts](./field.ts)
- **Stories:** [field.stories.ts](./field.stories.ts)

## When to use

Use Field for giving a control a consistent accessible presentation and validation context.

Do not use it when laying out unrelated prose or controls.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/field';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-field label="Email" helper="We will never share it." required>
  <shadcn-input type="email" name="email" required></shadcn-input>
</shadcn-field>
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

### \`<shadcn-field>\`

A form field wrapper that combines label, input, helper text, and error message.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`label\` | \`string \\| undefined\` | — | Label text (alternative to using label slot) |
| \`helper\` | \`string \\| undefined\` | — | Helper text (alternative to using helper slot) |
| \`error\` | \`string \\| undefined\` | — | Error message (alternative to using error slot) |
| \`required\` | \`boolean\` | \`false\` | Whether the field is required |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`label\` | Label content |
| \`default\` | Main form control (input, select, etc.) |
| \`helper\` | Helper text slot |
| \`error\` | Error message slot |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/field\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Component Guides/Field"}),`
`,e.jsx(r,{children:a})]})}function u(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{u as default};
