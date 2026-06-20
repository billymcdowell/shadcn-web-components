import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './hover-card.js';

const meta: Meta = {
  title: 'Components/Hover Card', component: 'shadcn-hover-card', tags: ['autodocs'],
  argTypes: { open: { control: 'boolean', description: 'Whether the preview is open.' }, openDelay: { control: 'number', description: 'Delay before opening in milliseconds.' }, closeDelay: { control: 'number', description: 'Delay before closing in milliseconds.' }, side: { control: 'select', options: ['top', 'right', 'bottom', 'left'], description: 'Preferred content side.' }, align: { control: 'select', options: ['start', 'center', 'end'], description: 'Content alignment.' } },
};
export default meta;
type Story = StoryObj;

const render = (args: Record<string, unknown>) => html`
  <div style="padding:8rem">
    <shadcn-hover-card ?open=${args.open} .openDelay=${Number(args.openDelay ?? 300)} .closeDelay=${Number(args.closeDelay ?? 200)}>
      <shadcn-hover-card-trigger><a href="https://github.com/shadcn" style="color:var(--foreground)">@shadcn</a></shadcn-hover-card-trigger>
      <shadcn-hover-card-content side=${String(args.side ?? 'bottom')} align=${String(args.align ?? 'center')}>
        <strong>@shadcn</strong><p style="margin:.5rem 0">Beautifully designed components that you can copy and paste into your apps.</p><small>Joined December 2021</small>
      </shadcn-hover-card-content>
    </shadcn-hover-card>
  </div>`;

export const Default: Story = { args: { open: false, openDelay: 300, closeDelay: 200, side: 'bottom', align: 'center' }, render };
export const Open: Story = { args: { open: true, openDelay: 0, closeDelay: 200, side: 'top', align: 'start' }, render };
export const Right: Story = { args: { open: true, side: 'right', align: 'center' }, render };
