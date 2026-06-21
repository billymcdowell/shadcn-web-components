import{u as a,j as e,M as r,h as s}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const i=`# Radio Group

> A form control for choosing exactly one option from a visible set.

- **Package:** \`@billy_mcdowell/shadcn-web-components/radio-group\`
- **Elements:** \`<shadcn-radio>\`, \`<shadcn-radio-group>\`
- **Source:** [radio-group.ts](./radio-group.ts)
- **Stories:** [radio-group.stories.ts](./radio-group.stories.ts)

## When to use

Use Radio Group for a small set of mutually exclusive options that benefit from comparison.

Do not use it when zero or multiple options may be selected; use Checkbox.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/radio-group';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-radio-group name="plan" value="pro" aria-label="Plan">
  <shadcn-radio value="free">Free</shadcn-radio>
  <shadcn-radio value="pro">Pro</shadcn-radio>
</shadcn-radio-group>
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

### \`<shadcn-radio>\`

A radio button component for use within a radio group.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`checked\` | \`boolean\` | \`false\` | Whether the radio is checked |
| \`disabled\` | \`boolean\` | \`false\` | Whether the radio is disabled |
| \`required\` | \`boolean\` | \`false\` | Whether the radio is required |
| \`name\` | \`string\` | \`''\` | Name attribute (should match other radios in group) |
| \`value\` | \`string\` | \`''\` | Value attribute |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`radio-change\` | \`CustomEvent\` | Fired when this radio is selected |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Radio label content |

**CSS custom properties**

_None._

### \`<shadcn-radio-group>\`

A radio group component for managing a set of radio buttons.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`value\` | \`string\` | \`''\` | Current selected value |
| \`name\` | \`string\` | \`''\` | Name for all radios in this group |
| \`orientation\` | \`'vertical' \\| 'horizontal'\` | \`'vertical'\` | Orientation of the radio group |
| \`disabled\` | \`boolean\` | \`false\` | Whether the radio group is disabled |
| \`required\` | \`boolean\` | \`false\` | Whether selection is required |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`radio-group-change\` | \`CustomEvent\` | Fired when the selected radio changes |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Radio buttons |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/radio-group\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Component Guides/Radio Group"}),`
`,e.jsx(s,{children:i})]})}function p(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{p as default};
