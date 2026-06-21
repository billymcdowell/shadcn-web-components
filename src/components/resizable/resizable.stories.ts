import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './resizable.js';

const meta: Meta = {
    title: 'Components/Resizable',
    component: 'shadcn-resizable-panel-group',
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            description: 'Direction in which the panels are arranged.',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Accessible resizable panel layouts styled after shadcn/ui.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

const panelStyle = 'display: flex; height: 100%; align-items: center; justify-content: center; padding: 1rem; box-sizing: border-box;';

export const Default: Story = {
    render: () => html`
        <shadcn-resizable-panel-group style="height: 200px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="50"><div style=${panelStyle}>One</div></shadcn-resizable-panel>
            <shadcn-resizable-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="50"><div style=${panelStyle}>Two</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    `,
};

export const WithHandle: Story = {
    render: () => html`
        <shadcn-resizable-panel-group style="height: 200px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="30" min-size="20"><div style=${panelStyle}>Sidebar</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="70" min-size="30"><div style=${panelStyle}>Content</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    `,
};

export const Vertical: Story = {
    render: () => html`
        <shadcn-resizable-panel-group orientation="vertical" style="height: 320px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="40"><div style=${panelStyle}>Header</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="60"><div style=${panelStyle}>Body</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    `,
};

export const ThreePanels: Story = {
    render: () => html`
        <shadcn-resizable-panel-group style="height: 240px; max-width: 56rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="25" min-size="15"><div style=${panelStyle}>Navigation</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="50" min-size="20"><div style=${panelStyle}>Editor</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="25" min-size="15"><div style=${panelStyle}>Inspector</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    `,
};

export const DisabledHandle: Story = {
    render: () => html`
        <shadcn-resizable-panel-group style="height: 200px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel><div style=${panelStyle}>Fixed split</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle disabled></shadcn-resizable-handle>
            <shadcn-resizable-panel><div style=${panelStyle}>Disabled handle</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    `,
};
