import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import type { DataTableColumn } from './data-table.js';
import './data-table.js';

interface Payment {
  id: string;
  status: string;
  email: string;
  amount: number;
}

const columns: DataTableColumn<Payment>[] = [
  { accessorKey: 'status', header: 'Status', sortable: true, hideable: true },
  { accessorKey: 'email', header: 'Email', sortable: true, filterable: true, hideable: false },
  { accessorKey: 'amount', header: 'Amount', sortable: true, hideable: true, align: 'right', cell: (value) => `$${Number(value).toFixed(2)}` },
];

const data: Payment[] = [
  { id: 'm5gr84i9', status: 'success', email: 'ken99@example.com', amount: 316 },
  { id: '3u1reuv4', status: 'success', email: 'abe45@example.com', amount: 242 },
  { id: 'derv1ws0', status: 'processing', email: 'monserrat44@example.com', amount: 837 },
  { id: '5kma53ae', status: 'success', email: 'silas22@example.com', amount: 874 },
  { id: 'bhqecj4p', status: 'failed', email: 'carmella@example.com', amount: 721 },
  { id: '2h13fe8r', status: 'processing', email: 'marc@example.com', amount: 428 },
];

const meta = {
  title: 'Components/Data Table',
  component: 'shadcn-data-table',
  tags: ['autodocs'],
  argTypes: {
    pageSize: { control: { type: 'number', min: 1 }, description: 'Rows displayed per page.' },
    selectable: { control: 'boolean', description: 'Shows row selection controls.' },
    loading: { control: 'boolean', description: 'Shows the loading state.' },
    filterPlaceholder: { control: 'text', description: 'Filter input placeholder.' },
    emptyMessage: { control: 'text', description: 'Message displayed when no rows match.' },
  },
  args: { pageSize: 5, selectable: true, loading: false, filterPlaceholder: 'Filter emails...', emptyMessage: 'No results.' },
  render: (args) => html`<shadcn-data-table
    .columns=${columns}
    .data=${data}
    .pageSize=${args.pageSize}
    .selectable=${args.selectable}
    .loading=${args.loading}
    .filterPlaceholder=${args.filterPlaceholder}
    .emptyMessage=${args.emptyMessage}
  ></shadcn-data-table>`,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { loading: true } };
export const Empty: Story = { render: () => html`<shadcn-data-table .columns=${columns} .data=${[]} empty-message="No payments found."></shadcn-data-table>` };
export const WithoutSelection: Story = { args: { selectable: false } };
