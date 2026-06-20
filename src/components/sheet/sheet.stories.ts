import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sheet.js';
import '../button/button.js';
import '../input/input.js';

const meta: Meta = {
  title: 'Components/Sheet', component: 'shadcn-sheet', tags: ['autodocs'],
  argTypes: { open: { control: 'boolean', description: 'Whether the sheet is open.' }, side: { control: 'select', options: ['top', 'right', 'bottom', 'left'], description: 'Viewport edge for the panel.' } },
};
export default meta;
type Story = StoryObj;

const render = (args: { open?: boolean; side?: string }) => html`
  <shadcn-sheet ?open=${args.open}>
    <shadcn-sheet-trigger><shadcn-button variant="outline">Edit profile</shadcn-button></shadcn-sheet-trigger>
    <shadcn-sheet-content side=${args.side ?? 'right'}>
      <shadcn-sheet-header><shadcn-sheet-title>Edit profile</shadcn-sheet-title><shadcn-sheet-description>Make changes to your profile, then save.</shadcn-sheet-description></shadcn-sheet-header>
      <label style="display:grid;gap:.5rem">Name <shadcn-input value="Ada Lovelace"></shadcn-input></label>
      <shadcn-sheet-footer><shadcn-sheet-close><shadcn-button>Save changes</shadcn-button></shadcn-sheet-close></shadcn-sheet-footer>
    </shadcn-sheet-content>
  </shadcn-sheet>`;

export const Default: Story = { args: { open: false, side: 'right' }, render };
export const Left: Story = { args: { open: true, side: 'left' }, render };
export const Top: Story = { args: { open: true, side: 'top' }, render };
export const Bottom: Story = { args: { open: true, side: 'bottom' }, render };
