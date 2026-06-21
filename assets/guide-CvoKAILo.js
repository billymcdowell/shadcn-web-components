import{u as s,j as e,M as a,h as r}from"./blocks-5Aikqafl.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B5y9qznB.js";const i=`# Checkbox

> A form control for an independent boolean choice.

- **Package:** \`@billy_mcdowell/shadcn-web-components/checkbox\`
- **Elements:** \`<shadcn-checkbox>\`
- **Source:** [checkbox.ts](./checkbox.ts)
- **Stories:** [checkbox.stories.ts](./checkbox.stories.ts)

## When to use

Use Checkbox for one or more options that may each be selected independently.

Do not use it when the choice takes effect immediately and represents on/off state; use Switch.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/checkbox';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<label><shadcn-checkbox name="updates" value="yes"></shadcn-checkbox> Email me updates</label>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing \`disabled="false"\`.

## Do

- Listen for \`checkbox-change\` or read the form value; do not attach behavior to shadow-DOM internals.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not use one checkbox to represent a mutually exclusive group.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-checkbox>\`

A checkbox input component.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`checked\` | \`boolean\` | \`false\` | Whether the checkbox is checked |
| \`disabled\` | \`boolean\` | \`false\` | Whether the checkbox is disabled |
| \`required\` | \`boolean\` | \`false\` | Whether the checkbox is required |
| \`name\` | \`string\` | \`''\` | Name attribute |
| \`value\` | \`string\` | \`''\` | Value attribute |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`checkbox-change\` | \`CustomEvent\` | Fired when the checked state changes |

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--checkbox-bg\` | Background color override |
| \`--checkbox-border\` | Border color override |

## Agent checklist

1. Import the \`/checkbox\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Component Guides/Checkbox"}),`
`,e.jsx(r,{children:i})]})}function b(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{b as default};
