import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './alert-dialog.js';
import '../button/button.js';

const meta: Meta = {
  title: 'Components/Alert Dialog', component: 'shadcn-alert-dialog', tags: ['autodocs'],
  argTypes: { open: { control: 'boolean', description: 'Whether the alert dialog is open.' } },
};
export default meta;
type Story = StoryObj;

const render = (args: { open?: boolean }) => html`
  <shadcn-alert-dialog ?open=${args.open}>
    <shadcn-alert-dialog-trigger><shadcn-button variant="outline">Delete account</shadcn-button></shadcn-alert-dialog-trigger>
    <shadcn-alert-dialog-content>
      <shadcn-alert-dialog-header>
        <shadcn-alert-dialog-title>Are you absolutely sure?</shadcn-alert-dialog-title>
        <shadcn-alert-dialog-description>This action cannot be undone. Your account and data will be permanently removed.</shadcn-alert-dialog-description>
      </shadcn-alert-dialog-header>
      <shadcn-alert-dialog-footer>
        <shadcn-alert-dialog-cancel><shadcn-button variant="outline">Cancel</shadcn-button></shadcn-alert-dialog-cancel>
        <shadcn-alert-dialog-action><shadcn-button variant="destructive">Continue</shadcn-button></shadcn-alert-dialog-action>
      </shadcn-alert-dialog-footer>
    </shadcn-alert-dialog-content>
  </shadcn-alert-dialog>`;

export const Default: Story = { args: { open: false }, render };
export const Open: Story = { args: { open: true }, render };
