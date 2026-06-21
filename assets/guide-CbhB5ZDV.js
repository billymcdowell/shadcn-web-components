import{u as s,j as t,M as i,h as a}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const r=`# Button

> A control that triggers an immediate action.

- **Package:** \`@billy_mcdowell/shadcn-web-components/button\`
- **Elements:** \`<shadcn-button>\`
- **Source:** [button.ts](./button.ts)
- **Stories:** [button.stories.ts](./button.stories.ts)

## When to use

Use Button for submitting, confirming, creating, deleting, or invoking application behavior.

Do not use it when navigating to a URL; use a real anchor.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/button';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-button variant="default" type="button">Save changes</shadcn-button>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing \`disabled="false"\`.

## Do

- Set \`type="button"\` unless the button should submit or reset a form.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not rely on color alone to distinguish destructive actions.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-button>\`

A versatile button component with multiple variants and sizes.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`variant\` | \`ButtonVariant\` | \`'default'\` | Visual style variant of the button |
| \`size\` | \`ButtonSize\` | \`'default'\` | Size variant of the button |
| \`disabled\` | \`boolean\` | \`false\` | Whether the button is disabled |
| \`type\` | \`'button' \\| 'submit' \\| 'reset'\` | \`'button'\` | Button type attribute |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`button-click\` | \`CustomEvent\` | Fired when the button is clicked |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Button content |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--button-bg\` | Background color override |
| \`--button-color\` | Text color override |
| \`--button-border\` | Border color override |

## Agent checklist

1. Import the \`/button\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Component Guides/Button"}),`
`,t.jsx(a,{children:r})]})}function b(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{b as default};
