import{u as s,j as e,M as a,h as i}from"./blocks-BvVVn4M2.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B6ecvixb.js";const r=`# Toggle

> A pressable control with an on/off pressed state.

- **Package:** \`@billy_mcdowell/shadcn-web-components/toggle\`
- **Elements:** \`<shadcn-toggle>\`
- **Source:** [toggle.ts](./toggle.ts)
- **Stories:** [toggle.stories.ts](./toggle.stories.ts)

## When to use

Use Toggle for toolbar actions such as bold, mute, pin, or favorite.

Do not use it when changing a persistent setting; use Switch.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/toggle';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-toggle value="bold" aria-label="Bold">B</shadcn-toggle>
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

### \`<shadcn-toggle>\`

A two-state toggle button component.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`pressed\` | \`boolean\` | \`false\` | Whether the toggle is pressed |
| \`disabled\` | \`boolean\` | \`false\` | Whether the toggle is disabled |
| \`value\` | \`string\` | \`''\` | Value attribute |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`toggle-change\` | \`CustomEvent\` | Fired when the toggle state changes |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Toggle content |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/toggle\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Component Guides/Toggle"}),`
`,e.jsx(i,{children:r})]})}function p(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{p as default};
