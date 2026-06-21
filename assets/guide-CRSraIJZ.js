import{u as s,j as n,M as a,h as i}from"./blocks-5Aikqafl.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B5y9qznB.js";const l=`# Dialog

> A modal window for focused content or a short task.

- **Package:** \`@billy_mcdowell/shadcn-web-components/dialog\`
- **Elements:** \`<shadcn-dialog>\`, \`<shadcn-dialog-trigger>\`, \`<shadcn-dialog-title>\`, \`<shadcn-dialog-portal>\`, \`<shadcn-dialog-overlay>\`, \`<shadcn-dialog-description>\`, \`<shadcn-dialog-content>\`, \`<shadcn-dialog-close>\`, \`<shadcn-dialog-header>\`, \`<shadcn-dialog-footer>\`
- **Source:** [dialog.ts](./dialog.ts)
- **Stories:** [dialog.stories.ts](./dialog.stories.ts)

## When to use

Use Dialog for forms, details, or workflows that temporarily interrupt the page.

Do not use it when confirming a destructive action; use Alert Dialog.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/dialog';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-dialog>
  <shadcn-dialog-trigger>Edit profile</shadcn-dialog-trigger>
  <shadcn-dialog-content>
    <shadcn-dialog-header><shadcn-dialog-title>Edit profile</shadcn-dialog-title><shadcn-dialog-description>Update your public details.</shadcn-dialog-description></shadcn-dialog-header>
    <shadcn-dialog-footer><shadcn-dialog-close>Done</shadcn-dialog-close></shadcn-dialog-footer>
  </shadcn-dialog-content>
</shadcn-dialog>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Always include \`shadcn-dialog-title\`; add a description when it improves context. Focus is trapped while open and returned to the trigger on close.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-dialog>\`

The root dialog component that manages the dialog's open state.
Acts as a context provider for child components.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`open\` | \`boolean\` | \`false\` | Whether the dialog is open. This property is reflected to the attribute. |

**Events**

| Event | Type | When |
| --- | --- | --- |
| \`open\` | \`CustomEvent\` | Emitted by this element. |
| \`close\` | \`CustomEvent\` | Emitted by this element. |

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-dialog-trigger>\`

The dialog trigger component that opens the dialog when clicked.
Wraps its slotted content and adds click handling to open the dialog.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-dialog-title>\`

The dialog title component.
A shell component that renders its slotted content.
Future implementations may handle accessibility attributes and ARIA labeling.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-dialog-portal>\`

The dialog portal component.
A shell component that renders its slotted content.
Future implementations may handle portal rendering to a different DOM location.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-dialog-overlay>\`

The dialog overlay component.
A shell component that renders its slotted content.
Future implementations may handle overlay styling and click-to-close behavior.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-dialog-description>\`

The dialog description component.
A shell component that renders its slotted content.
Used for providing additional context about the dialog's purpose.
Automatically linked to the dialog via aria-describedby.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-dialog-content>\`

The dialog content component that conditionally renders its slotted content
based on the dialog's open state.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-dialog-close>\`

The dialog close component that closes the dialog when clicked.
Wraps its slotted content and adds click handling to close the dialog.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-dialog-header>\`

The dialog header component.
Used to group the dialog title and description together.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

### \`<shadcn-dialog-footer>\`

The dialog footer component.
Used to group action buttons at the bottom of the dialog.

**Attributes**

_None._

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/dialog\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Component Guides/Dialog"}),`
`,n.jsx(i,{children:l})]})}function p(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{p as default};
