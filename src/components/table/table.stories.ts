import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './table.js';

export default { title: 'Components/Table', component: 'shadcn-table', tags: ['autodocs'] } satisfies Meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`
  <shadcn-table>
    <shadcn-table-caption>A list of recent invoices.</shadcn-table-caption>
    <shadcn-table-header><shadcn-table-row><shadcn-table-head>Invoice</shadcn-table-head><shadcn-table-head>Status</shadcn-table-head><shadcn-table-head>Amount</shadcn-table-head></shadcn-table-row></shadcn-table-header>
    <shadcn-table-body><shadcn-table-row><shadcn-table-cell>INV001</shadcn-table-cell><shadcn-table-cell>Paid</shadcn-table-cell><shadcn-table-cell>$250.00</shadcn-table-cell></shadcn-table-row><shadcn-table-row><shadcn-table-cell>INV002</shadcn-table-cell><shadcn-table-cell>Pending</shadcn-table-cell><shadcn-table-cell>$150.00</shadcn-table-cell></shadcn-table-row></shadcn-table-body>
  </shadcn-table>` };
