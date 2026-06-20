import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './progress.js';

export default { title: 'Components/Progress', component: 'shadcn-progress', tags: ['autodocs'] } satisfies Meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<shadcn-progress value="60" aria-label="Upload progress" style="max-width:400px"></shadcn-progress>` };
