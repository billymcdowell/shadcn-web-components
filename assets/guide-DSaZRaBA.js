import{u as a,j as n,M as o,h as s}from"./blocks-5Aikqafl.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B5y9qznB.js";const r=`# Pagination

> Navigation links for moving between paged result sets.

- **Package:** \`@billy_mcdowell/shadcn-web-components/pagination\`
- **Elements:** \`<shadcn-pagination>\`, \`<shadcn-pagination-content>\`, \`<shadcn-pagination-item>\`, \`<shadcn-pagination-link>\`, \`<shadcn-pagination-previous>\`, \`<shadcn-pagination-next>\`, \`<shadcn-pagination-ellipsis>\`
- **Source:** [pagination.ts](./pagination.ts)
- **Stories:** [pagination.stories.ts](./pagination.stories.ts)

## When to use

Use Pagination for splitting long lists or tables across numbered pages with previous and next controls.

Do not use it when in-table paging with built-in controls; use Data Table.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/pagination';
\`\`\`

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-pagination>
  <shadcn-pagination-content>
    <shadcn-pagination-item><shadcn-pagination-previous href="?page=1"></shadcn-pagination-previous></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-link href="?page=1">1</shadcn-pagination-link></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-link href="?page=2" current>2</shadcn-pagination-link></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-ellipsis></shadcn-pagination-ellipsis></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-next href="?page=3"></shadcn-pagination-next></shadcn-pagination-item>
  </shadcn-pagination-content>
</shadcn-pagination>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Accessibility

Mark the current page with the \`current\` attribute on \`shadcn-pagination-link\`. Disable \`shadcn-pagination-previous\` on the first page.

## Do

- Use real \`href\` values or application routing for page links; mark the active page with \`current\`.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not disable every control when only the previous link should be unavailable on page one.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-pagination>\`

Centers page navigation within its available width.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | A \`shadcn-pagination-content\` element. |

**CSS custom properties**

_None._

### \`<shadcn-pagination-content>\`

List containing pagination items.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | \`shadcn-pagination-item\` elements. |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--pagination-gap\` | Space between pagination items. |

### \`<shadcn-pagination-item>\`

A single item in a pagination list.

**Attributes**

_None._

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | A pagination link, direction link, or ellipsis. |

**CSS custom properties**

_None._

### \`<shadcn-pagination-link>\`

A page link with active and disabled states.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`href\` | \`string\` | \`'#'\` | Destination URL. Omitted from the anchor when disabled. |
| \`target\` | \`string\` | \`''\` | Browsing context in which to open the link. |
| \`rel\` | \`string\` | \`''\` | Relationship between the current document and the destination. |
| \`label\` | \`string\` | \`''\` | Accessible label when the visible page label is insufficient. |
| \`current\` | \`boolean\` | \`false\` | Whether this link represents the current page. |
| \`disabled\` | \`boolean\` | \`false\` | Whether navigation is unavailable. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | The page label. |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--pagination-border-radius\` | Link corner radius. |
| \`--pagination-color\` | Link text color. |
| \`--pagination-hover-background\` | Link hover background. |
| \`--pagination-hover-color\` | Link hover text color. |
| \`--pagination-active-background\` | Current-page background. |
| \`--pagination-active-border\` | Current-page border color. |
| \`--pagination-active-color\` | Current-page text color. |

### \`<shadcn-pagination-previous>\`

Link to the previous page.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`text\` | \`string\` | \`'Previous'\` | Visible direction text. |
| \`href\` | \`string\` | \`'#'\` | Destination URL. Omitted from the anchor when disabled. |
| \`target\` | \`string\` | \`''\` | Browsing context in which to open the link. |
| \`rel\` | \`string\` | \`''\` | Relationship between the current document and the destination. |
| \`label\` | \`string\` | \`''\` | Accessible label when the visible page label is insufficient. |
| \`current\` | \`boolean\` | \`false\` | Whether this link represents the current page. |
| \`disabled\` | \`boolean\` | \`false\` | Whether navigation is unavailable. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Custom visible text. |
| \`icon\` | Custom previous-page icon. |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--pagination-border-radius\` | Link corner radius. |
| \`--pagination-color\` | Link text color. |
| \`--pagination-hover-background\` | Link hover background. |
| \`--pagination-hover-color\` | Link hover text color. |
| \`--pagination-active-background\` | Current-page background. |
| \`--pagination-active-border\` | Current-page border color. |
| \`--pagination-active-color\` | Current-page text color. |

### \`<shadcn-pagination-next>\`

Link to the next page.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`text\` | \`string\` | \`'Next'\` | Visible direction text. |
| \`href\` | \`string\` | \`'#'\` | Destination URL. Omitted from the anchor when disabled. |
| \`target\` | \`string\` | \`''\` | Browsing context in which to open the link. |
| \`rel\` | \`string\` | \`''\` | Relationship between the current document and the destination. |
| \`label\` | \`string\` | \`''\` | Accessible label when the visible page label is insufficient. |
| \`current\` | \`boolean\` | \`false\` | Whether this link represents the current page. |
| \`disabled\` | \`boolean\` | \`false\` | Whether navigation is unavailable. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | Custom visible text. |
| \`icon\` | Custom next-page icon. |

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--pagination-border-radius\` | Link corner radius. |
| \`--pagination-color\` | Link text color. |
| \`--pagination-hover-background\` | Link hover background. |
| \`--pagination-hover-color\` | Link hover text color. |
| \`--pagination-active-background\` | Current-page background. |
| \`--pagination-active-border\` | Current-page border color. |
| \`--pagination-active-color\` | Current-page text color. |

### \`<shadcn-pagination-ellipsis>\`

Indicates omitted pages in a pagination list.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`label\` | \`string\` | \`'More pages'\` | Accessible text describing the omitted pages. |

**Events**

_None._

**Slots**

| Slot | Purpose |
| --- | --- |
| \`default\` | A custom ellipsis icon. |

**CSS custom properties**

_None._

## Agent checklist

1. Import the \`/pagination\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function i(e){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Component Guides/Pagination"}),`
`,n.jsx(s,{children:r})]})}function h(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i()}export{h as default};
