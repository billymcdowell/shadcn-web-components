import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './command.js';

const meta: Meta = {
  title: 'Components/Command',
  component: 'shadcn-command',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Current search query.' },
    disableFilter: { control: 'boolean', description: 'Disables built-in text filtering.' },
  },
};
export default meta;
type Story = StoryObj;

const commandMenu = (args: { value?: string; disableFilter?: boolean } = {}) => html`
  <shadcn-command .value=${args.value ?? ''} ?disable-filter=${args.disableFilter ?? false} style="max-width: 28rem; border: 1px solid var(--border); box-shadow: var(--shadow-md);">
    <shadcn-command-input></shadcn-command-input>
    <shadcn-command-list>
      <shadcn-command-empty>No results found.</shadcn-command-empty>
      <shadcn-command-group heading="Suggestions">
        <shadcn-command-item value="calendar">Calendar</shadcn-command-item>
        <shadcn-command-item value="search emoji" keywords="smile face">Search Emoji</shadcn-command-item>
        <shadcn-command-item value="calculator">Calculator</shadcn-command-item>
      </shadcn-command-group>
      <shadcn-command-separator></shadcn-command-separator>
      <shadcn-command-group heading="Settings">
        <shadcn-command-item value="profile">Profile <shadcn-command-shortcut>⌘P</shadcn-command-shortcut></shadcn-command-item>
        <shadcn-command-item value="billing">Billing <shadcn-command-shortcut>⌘B</shadcn-command-shortcut></shadcn-command-item>
        <shadcn-command-item value="settings">Settings <shadcn-command-shortcut>⌘S</shadcn-command-shortcut></shadcn-command-item>
      </shadcn-command-group>
    </shadcn-command-list>
  </shadcn-command>`;

export const Default: Story = { args: { value: '', disableFilter: false }, render: commandMenu };
export const Empty: Story = { args: { value: 'No matching command' }, render: commandMenu };
export const DisabledItem: Story = {
  render: () => html`<shadcn-command style="max-width: 28rem; border: 1px solid var(--border);"><shadcn-command-input></shadcn-command-input><shadcn-command-list><shadcn-command-group heading="Actions"><shadcn-command-item value="new">New file</shadcn-command-item><shadcn-command-item value="delete" disabled>Delete file</shadcn-command-item></shadcn-command-group></shadcn-command-list></shadcn-command>`,
};
export const Dialog: Story = {
  render: () => html`<button type="button" @click=${(event: Event) => ((event.currentTarget as HTMLElement).nextElementSibling as HTMLElement & { show(): void })?.show()}>Open command menu</button><shadcn-command-dialog>${commandMenu()}</shadcn-command-dialog>`,
};
