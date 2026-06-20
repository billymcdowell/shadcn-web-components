import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './drawer.js';
import '../button/button.js';

const meta: Meta = {
  title: 'Components/Drawer', component: 'shadcn-drawer', tags: ['autodocs'],
  argTypes: { open: { control: 'boolean', description: 'Whether the drawer is open.' }, dismissible: { control: 'boolean', description: 'Whether outside interaction may dismiss the drawer.' }, direction: { control: 'select', options: ['top', 'right', 'bottom', 'left'], description: 'Viewport edge for the drawer.' } },
};
export default meta;
type Story = StoryObj;

const render = (args: { open?: boolean; dismissible?: boolean; direction?: string }) => html`
  <shadcn-drawer ?open=${args.open} .dismissible=${args.dismissible !== false}>
    <shadcn-drawer-trigger><shadcn-button variant="outline">Open drawer</shadcn-button></shadcn-drawer-trigger>
    <shadcn-drawer-content direction=${args.direction ?? 'bottom'}>
      <shadcn-drawer-header><shadcn-drawer-title>Move goal</shadcn-drawer-title><shadcn-drawer-description>Set your daily activity goal.</shadcn-drawer-description></shadcn-drawer-header>
      <div style="padding:1rem;text-align:center;font-size:2rem;font-weight:600">350 kcal</div>
      <shadcn-drawer-footer><shadcn-drawer-close><shadcn-button>Submit</shadcn-button></shadcn-drawer-close></shadcn-drawer-footer>
    </shadcn-drawer-content>
  </shadcn-drawer>`;

export const Default: Story = { args: { open: false, dismissible: true, direction: 'bottom' }, render };
export const Open: Story = { args: { open: true, dismissible: true, direction: 'bottom' }, render };
export const Left: Story = { args: { open: true, dismissible: true, direction: 'left' }, render };
export const NonDismissible: Story = { args: { open: true, dismissible: false, direction: 'bottom' }, render };
