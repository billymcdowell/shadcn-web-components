import{u as s,j as e,M as l,h as a}from"./blocks-BvVVn4M2.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B6ecvixb.js";const i=`# Collapsible

> A disclosure that shows or hides one content region.

- **Package:** \`@billy_mcdowell/shadcn-web-components/collapsible\`
- **Elements:** \`<shadcn-collapsible>\`, \`<shadcn-collapsible-trigger>\`, \`<shadcn-collapsible-content>\`
- **Source:** [collapsible.ts](./collapsible.ts)
- **Stories:** [collapsible.stories.ts](./collapsible.stories.ts)

## When to use

Use Collapsible for optional details controlled by one trigger.

Do not use it when managing several related disclosure sections; use Accordion.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/collapsible';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-collapsible>
  <shadcn-collapsible-trigger>Show advanced settings</shadcn-collapsible-trigger>
  <shadcn-collapsible-content>Advanced settings go here.</shadcn-collapsible-content>
</shadcn-collapsible>
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

### \`<shadcn-collapsible>\`

Coordinates a collapsible trigger and content region.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | Whether the content is visible. |
| \`disabled\` | \`boolean\` | \`false\` | Whether interaction is disabled. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`collapsible-change\` | \`CustomEvent\` | Fired when the open state changes. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Collapsible trigger and content elements. |

**CSS custom properties**

_None._

### \`<shadcn-collapsible-trigger>\`

Button that toggles its parent collapsible.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |
| \`disabled\` | \`boolean\` | \`false\` | No description provided. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`collapsible-toggle\` | \`CustomEvent\` | Requests that the parent toggle. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Trigger content. |

**CSS custom properties**

_None._

### \`<shadcn-collapsible-content>\`

Content region controlled by a collapsible trigger.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | No description provided. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Collapsible content. |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/collapsible\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Component Guides/Collapsible"}),`
`,e.jsx(a,{children:i})]})}function h(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{h as default};
