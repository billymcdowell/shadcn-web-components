import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tabs.js';

const meta: Meta = {
  title: 'Components/Tabs', component: 'shadcn-tabs', tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Selected tab value.' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'], description: 'Tablist orientation.' },
    activationMode: { control: 'select', options: ['automatic', 'manual'], description: 'Whether focus activates a tab.' },
  },
};
export default meta;
type Story = StoryObj;

const render = (args: { value?: string; orientation?: string; activationMode?: string }) => html`
  <shadcn-tabs value=${args.value ?? 'account'} orientation=${args.orientation ?? 'horizontal'} activation-mode=${args.activationMode ?? 'automatic'}>
    <shadcn-tabs-list>
      <shadcn-tabs-trigger value="account">Account</shadcn-tabs-trigger>
      <shadcn-tabs-trigger value="password">Password</shadcn-tabs-trigger>
      <shadcn-tabs-trigger value="disabled" disabled>Disabled</shadcn-tabs-trigger>
    </shadcn-tabs-list>
    <shadcn-tabs-content value="account"><p>Update your account details here.</p></shadcn-tabs-content>
    <shadcn-tabs-content value="password"><p>Change your password here.</p></shadcn-tabs-content>
  </shadcn-tabs>`;

export const Default: Story = { args: { value: 'account', orientation: 'horizontal', activationMode: 'automatic' }, render };
export const Vertical: Story = { args: { value: 'account', orientation: 'vertical' }, render };
export const ManualActivation: Story = { args: { value: 'account', activationMode: 'manual' }, render };
