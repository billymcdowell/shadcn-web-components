import{u as o,j as e,M as i,h as a}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const r=`# Switch

> A form control that immediately toggles a setting on or off.

- **Package:** \`@billy_mcdowell/shadcn-web-components/switch\`
- **Elements:** \`<shadcn-switch>\`
- **Source:** [switch.ts](./switch.ts)
- **Stories:** [switch.stories.ts](./switch.stories.ts)

## When to use

Use Switch for binary settings whose effects occur immediately.

Do not use it when selecting values for later form submission; use Checkbox.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/switch';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<label><shadcn-switch name="notifications" value="enabled"></shadcn-switch> Notifications</label>
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

### \`<shadcn-switch>\`

A switch toggle component.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`checked\` | \`boolean\` | \`false\` | Whether the switch is checked |
| \`disabled\` | \`boolean\` | \`false\` | Whether the switch is disabled |
| \`required\` | \`boolean\` | \`false\` | Whether the switch is required |
| \`name\` | \`string\` | \`''\` | Name attribute |
| \`value\` | \`string\` | \`''\` | Value attribute |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`switch-change\` | \`CustomEvent\` | Fired when the switch state changes |

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--switch-bg\` | Background color override |

## Agent checklist

1. Import the \`/switch\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Component Guides/Switch"}),`
`,e.jsx(a,{children:r})]})}function u(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{u as default};
