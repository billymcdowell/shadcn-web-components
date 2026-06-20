import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './collapsible.js';

const meta: Meta = {
  title: 'Components/Collapsible', component: 'shadcn-collapsible', tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Whether the content is visible.' },
    disabled: { control: 'boolean', description: 'Whether interaction is disabled.' },
  },
};
export default meta;
type Story = StoryObj;

const render = (args: { open?: boolean; disabled?: boolean }) => html`
  <shadcn-collapsible ?open=${args.open} ?disabled=${args.disabled} style="width: 22rem">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <strong>3 repositories</strong>
      <shadcn-collapsible-trigger aria-label="Toggle repositories">Toggle</shadcn-collapsible-trigger>
    </div>
    <div style="margin-top:.5rem;border:1px solid var(--border);padding:.75rem;border-radius:.5rem">@radix-ui/primitives</div>
    <shadcn-collapsible-content>
      <div style="margin-top:.5rem;border:1px solid var(--border);padding:.75rem;border-radius:.5rem">@radix-ui/colors</div>
      <div style="margin-top:.5rem;border:1px solid var(--border);padding:.75rem;border-radius:.5rem">@stitches/react</div>
    </shadcn-collapsible-content>
  </shadcn-collapsible>`;

export const Default: Story = { args: { open: false, disabled: false }, render };
export const Open: Story = { args: { open: true }, render };
export const Disabled: Story = { args: { disabled: true }, render };
