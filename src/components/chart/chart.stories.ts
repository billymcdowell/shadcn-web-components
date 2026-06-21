import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import type { ChartData, ChartOptions } from './chart.js';
import './chart.js';

const monthlyData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        { label: 'Desktop', data: [186, 305, 237, 73, 209, 214], borderRadius: 6 },
        { label: 'Mobile', data: [80, 200, 120, 190, 130, 140], borderRadius: 6 },
    ],
};

const commonOptions: ChartOptions = {
    plugins: {
        legend: { position: 'bottom' },
    },
    scales: {
        y: { beginAtZero: true },
    },
};

const meta: Meta = {
    title: 'Components/Chart',
    component: 'shadcn-chart',
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['bar', 'line', 'pie', 'doughnut', 'radar', 'polarArea', 'bubble', 'scatter'],
            description: 'Chart.js chart type.',
        },
        data: {
            control: 'object',
            description: 'Chart.js data configuration, set as a JavaScript property.',
        },
        options: {
            control: 'object',
            description: 'Chart.js options. Responsive sizing is enabled by default.',
        },
        label: {
            control: 'text',
            description: 'Accessible name for the canvas visualization.',
        },
        emptyMessage: {
            control: 'text',
            description: 'Message displayed when no datasets are supplied.',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A responsive Chart.js canvas that uses the shadcn chart palette by default.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
        <shadcn-chart
            aria-label="Monthly visitors by device"
            .data=${monthlyData}
            .options=${commonOptions}
        ></shadcn-chart>
    `,
};

export const Line: Story = {
    render: () => html`
        <shadcn-chart
            type="line"
            aria-label="Revenue over six months"
            .data=${{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{ label: 'Revenue', data: [1200, 1900, 1500, 2500, 2200, 3100], tension: 0.35 }],
            }}
            .options=${commonOptions}
        ></shadcn-chart>
    `,
};

export const Doughnut: Story = {
    render: () => html`
        <shadcn-chart
            type="doughnut"
            aria-label="Traffic sources"
            style="--chart-height: 24rem"
            .data=${{
                labels: ['Direct', 'Search', 'Social', 'Referral'],
                datasets: [{ label: 'Visitors', data: [42, 31, 18, 9] }],
            }}
            .options=${{ plugins: { legend: { position: 'bottom' } } }}
        ></shadcn-chart>
    `,
};

export const Empty: Story = {
    render: () => html`
        <shadcn-chart
            aria-label="Visitors"
            empty-message="Visitor data has not loaded yet"
            .data=${{ datasets: [] }}
        ></shadcn-chart>
    `,
};
