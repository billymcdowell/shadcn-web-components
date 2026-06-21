import{u as a,j as n,M as i,h as s}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const r=`# Alert Dialog

> A modal confirmation surface for consequential actions.

- **Package:** \`@billy_mcdowell/shadcn-web-components/alert-dialog\`
- **Elements:** \`<shadcn-alert-dialog>\`, \`<shadcn-alert-dialog-trigger>\`, \`<shadcn-alert-dialog-content>\`, \`<shadcn-alert-dialog-title>\`, \`<shadcn-alert-dialog-description>\`, \`<shadcn-alert-dialog-header>\`, \`<shadcn-alert-dialog-footer>\`, \`<shadcn-alert-dialog-cancel>\`, \`<shadcn-alert-dialog-action>\`
- **Source:** [alert-dialog.ts](./alert-dialog.ts)
- **Stories:** [alert-dialog.stories.ts](./alert-dialog.stories.ts)

## When to use

Use Alert Dialog for asking the user to confirm or cancel an irreversible or high-impact action.

Do not use it when showing ordinary content or a low-risk form; use Dialog instead.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/alert-dialog';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-alert-dialog>
  <shadcn-alert-dialog-trigger>Delete project</shadcn-alert-dialog-trigger>
  <shadcn-alert-dialog-content>
    <shadcn-alert-dialog-header>
      <shadcn-alert-dialog-title>Delete project?</shadcn-alert-dialog-title>
      <shadcn-alert-dialog-description>This cannot be undone.</shadcn-alert-dialog-description>
    </shadcn-alert-dialog-header>
    <shadcn-alert-dialog-footer>
      <shadcn-alert-dialog-cancel>Cancel</shadcn-alert-dialog-cancel>
      <shadcn-alert-dialog-action>Delete</shadcn-alert-dialog-action>
    </shadcn-alert-dialog-footer>
  </shadcn-alert-dialog-content>
</shadcn-alert-dialog>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Always include a title and description. Initial focus is trapped in the modal; Escape is intentionally not the primary dismissal path for consequential decisions.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-alert-dialog>\`

Modal confirmation dialog requiring an explicit action or cancellation.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | Whether the dialog is open. This property is reflected to the attribute. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`alert-dialog-open-change\` | \`CustomEvent\` | Fired when the open state changes. |
| \`open\` | \`CustomEvent\` | Emitted by this element. |
| \`close\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Alert dialog trigger and content. |

**CSS custom properties**

_None._

### \`<shadcn-alert-dialog-trigger>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-alert-dialog-content>\`

Modal alert dialog surface. Backdrop interaction intentionally does not dismiss it.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`aria-label\` | \`string\` | \`''\` | Accessible name used when no title element is present. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Alert dialog content. |

**CSS custom properties**

_None._

### \`<shadcn-alert-dialog-title>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-alert-dialog-description>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-alert-dialog-header>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-alert-dialog-footer>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-alert-dialog-cancel>\`

Part of this component family.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-alert-dialog-action>\`

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

1. Import the \`/alert-dialog\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Component Guides/Alert Dialog"}),`
`,n.jsx(s,{children:r})]})}function p(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{p as default};
