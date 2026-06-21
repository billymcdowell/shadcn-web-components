import{u as s,j as t,M as r,h as o}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const i=`# Chart

> A responsive Chart.js visualization using the shadcn chart palette.

- **Package:** \`@billy_mcdowell/shadcn-web-components/chart\`
- **Elements:** \`<shadcn-chart>\`
- **Source:** [chart.ts](./chart.ts)
- **Stories:** [chart.stories.ts](./chart.stories.ts)

## When to use

Use Chart for quantitative trends, comparisons, or distributions that benefit from a canvas chart.

Do not use it when a single scalar value or known completion percentage; use Progress or typography.

## Import

Importing the component subpath registers every custom element in this component family:

\`\`\`js
import '@billy_mcdowell/shadcn-web-components/chart';
\`\`\`

**Dependencies:** Chart requires \`chart.js\`. With npm, run \`npm install chart.js\` in
addition to the main package. On CDN, add \`chart.js\` and \`chart.js/\` to your import
map (see [Getting Started — Dependencies](../getting-started.mdx#dependencies)).

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

\`\`\`html
<shadcn-chart type="bar" aria-label="Monthly visitors"></shadcn-chart>
\`\`\`

For Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.

## Configure Chart.js data and options

\`data\` and \`options\` are JavaScript objects and must be assigned as element properties. The \`type\` attribute selects the Chart.js chart type.

### Plain HTML or JavaScript

\`\`\`html
<shadcn-chart type="bar" aria-label="Monthly visitors by device"></shadcn-chart>

<script type="module">
  import '@billy_mcdowell/shadcn-web-components/chart';

  const chart = document.querySelector('shadcn-chart');
  chart.data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      { label: 'Desktop', data: [186, 305, 237] },
      { label: 'Mobile', data: [80, 200, 120] },
    ],
  };
  chart.options = {
    plugins: { legend: { position: 'bottom' } },
    scales: { y: { beginAtZero: true } },
  };
<\/script>
\`\`\`

### Lit

\`\`\`ts
import { html } from 'lit';
import '@billy_mcdowell/shadcn-web-components/chart';

const view = (data, options) => html\`
  <shadcn-chart
    type="bar"
    aria-label="Monthly visitors by device"
    .data=\${data}
    .options=\${options}
  ></shadcn-chart>
\`;
\`\`\`

## Accessibility

Set \`aria-label\` (the \`label\` property) to describe the visualization. Do not rely on color alone to distinguish series.

## Do

- Assign Chart.js \`data\` and \`options\` through JavaScript properties, not HTML attributes.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not mutate chart configuration by reaching into the canvas shadow root.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.

## Public API

### \`<shadcn-chart>\`

A responsive Chart.js visualization styled with the shadcn chart palette.

Set \`data\` and \`options\` as JavaScript properties because they contain
structured Chart.js configuration objects.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| \`type\` | \`ChartType\` | \`'bar'\` | Chart.js chart type. Changing the type recreates the chart instance. |
| \`aria-label\` | \`string\` | \`'Chart'\` | Accessible name for the canvas visualization. |
| \`empty-message\` | \`string\` | \`'No chart data available'\` | Message displayed when no datasets have been supplied. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| \`--chart-height\` | Height of the chart container. |
| \`--chart-1\` | First fallback dataset color. |
| \`--chart-2\` | Second fallback dataset color. |
| \`--chart-3\` | Third fallback dataset color. |
| \`--chart-4\` | Fourth fallback dataset color. |
| \`--chart-5\` | Fifth fallback dataset color. |

## Agent checklist

1. Import the \`/chart\` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Component Guides/Chart"}),`
`,t.jsx(o,{children:i})]})}function d(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{d as default};
