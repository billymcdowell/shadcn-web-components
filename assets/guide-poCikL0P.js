import{u as s,j as e,M as r,h as a}from"./blocks-xLiptKi5.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DzFl6Ur1.js";const i=`# Kbd

> A visual representation of keyboard input.

- **Package:** \`@billy_mcdowell/shadcn-web-components/kbd\`
- **Elements:** \`<shadcn-kbd>\`
- **Source:** [kbd.ts](./kbd.ts)
- **Stories:** [kbd.stories.ts](./kbd.stories.ts)

## When to use

Use Kbd for documenting shortcuts, keys, or command hints.

Do not use it when creating an interactive keyboard-like button.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/kbd';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<span>Save with <shadcn-kbd>Ctrl</shadcn-kbd> + <shadcn-kbd>S</shadcn-kbd></span>
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

### \`<shadcn-kbd>\`

A component for displaying keyboard shortcuts and key combinations.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Key text (e.g., "Ctrl", "K", "⌘") |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--kbd-bg\` | Background color override |
| \`--kbd-color\` | Text color override |
| \`--kbd-border\` | Border color override |

## Agent checklist

1. Import the \`/kbd\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Component Guides/Kbd"}),`
`,e.jsx(a,{children:i})]})}function b(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{b as default};
