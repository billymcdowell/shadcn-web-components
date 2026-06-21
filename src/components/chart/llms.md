# Chart

Use `<shadcn-chart>` for responsive Chart.js visualizations. Assign Chart.js
`data` and `options` objects as JavaScript properties and always provide an
`aria-label`. The component applies `--chart-1` through `--chart-5` when dataset
colors are omitted and exposes the Chart.js instance through its `chart` getter.

```ts
import '@billy_mcdowell/shadcn-web-components/chart';

const chart = document.querySelector('shadcn-chart');
chart.type = 'line';
chart.data = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [{ label: 'Visitors', data: [120, 190, 150] }],
};
```
