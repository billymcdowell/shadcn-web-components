import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './breadcrumb.js';

const meta: Meta = {
    title: 'Components/Breadcrumb',
    component: 'shadcn-breadcrumb',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Displays the path to the current resource using a hierarchy of links.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/components">Components</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Breadcrumb</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  `,
};

export const WithCustomSeparator: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m13 17 5-5-5-5M6 17l5-5-5-5"/>
          </svg>
        </shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/components">Components</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m13 17 5-5-5-5M6 17l5-5-5-5"/>
          </svg>
        </shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Breadcrumb</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  `,
};

export const Collapsed: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-ellipsis></shadcn-breadcrumb-ellipsis>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/components">Components</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Breadcrumb</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  `,
};

export const WithDropdown: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <div style="position: relative; display: inline-flex; align-items: center;">
            <shadcn-breadcrumb-ellipsis style="cursor: pointer;"></shadcn-breadcrumb-ellipsis>
            <!-- Dropdown would go here in a real app -->
          </div>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/docs">Documentation</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Components</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  `,
};
