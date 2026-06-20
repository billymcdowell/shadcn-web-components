import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './badge.js';

export default { title: 'Components/Badge', component: 'shadcn-badge', tags: ['autodocs'] } satisfies Meta;
type Story = StoryObj;
export const Variants: Story = { render: () => html`<div style="display:flex;gap:.5rem"><shadcn-badge>Default</shadcn-badge><shadcn-badge variant="secondary">Secondary</shadcn-badge><shadcn-badge variant="destructive">Destructive</shadcn-badge><shadcn-badge variant="outline">Outline</shadcn-badge></div>` };
