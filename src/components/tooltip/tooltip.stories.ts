import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tooltip.js';
import '../button/button.js';

const meta: Meta = {
  title: 'Components/Tooltip', component: 'shadcn-tooltip', tags: ['autodocs'],
  argTypes: { open: { control: 'boolean', description: 'Whether the tooltip is visible.' }, delay: { control: 'number', description: 'Delay before opening in milliseconds.' }, side: { control: 'select', options: ['top', 'right', 'bottom', 'left'], description: 'Tooltip side.' } },
};
export default meta;
type Story = StoryObj;

const render = (args: { open?: boolean; delay?: number; side?: string }) => html`
  <div style="padding:8rem">
    <shadcn-tooltip ?open=${args.open} .delay=${args.delay ?? 300}>
      <shadcn-tooltip-trigger><shadcn-button variant="outline">Hover or focus</shadcn-button></shadcn-tooltip-trigger>
      <shadcn-tooltip-content side=${args.side ?? 'top'}>Add to library</shadcn-tooltip-content>
    </shadcn-tooltip>
  </div>`;

export const Default: Story = { args: { open: false, delay: 300, side: 'top' }, render };
export const Open: Story = { args: { open: true, delay: 0, side: 'top' }, render };
export const Right: Story = { args: { open: true, delay: 0, side: 'right' }, render };
export const Bottom: Story = { args: { open: true, delay: 0, side: 'bottom' }, render };
export const Left: Story = { args: { open: true, delay: 0, side: 'left' }, render };
