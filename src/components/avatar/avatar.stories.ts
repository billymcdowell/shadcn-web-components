import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './avatar.js';

export default { title: 'Components/Avatar', component: 'shadcn-avatar', tags: ['autodocs'] } satisfies Meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<shadcn-avatar><shadcn-avatar-image src="https://github.com/shadcn.png" alt="shadcn"></shadcn-avatar-image><shadcn-avatar-fallback>CN</shadcn-avatar-fallback></shadcn-avatar>` };
export const Fallback: Story = { render: () => html`<shadcn-avatar style="--avatar-size:3rem"><shadcn-avatar-image src="/missing-avatar.png" alt="User"></shadcn-avatar-image><shadcn-avatar-fallback>WM</shadcn-avatar-fallback></shadcn-avatar>` };
