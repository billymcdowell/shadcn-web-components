import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './alert.js';

export default { title: 'Components/Alert', component: 'shadcn-alert', tags: ['autodocs'] } satisfies Meta;
type Story = StoryObj;

export const Default: Story = { render: () => html`<shadcn-alert><shadcn-alert-title>Heads up!</shadcn-alert-title><shadcn-alert-description>You can add components to your app using the CLI.</shadcn-alert-description></shadcn-alert>` };
export const Destructive: Story = { render: () => html`<shadcn-alert variant="destructive"><span slot="icon">!</span><shadcn-alert-title>Error</shadcn-alert-title><shadcn-alert-description>Your session has expired. Please sign in again.</shadcn-alert-description></shadcn-alert>` };
