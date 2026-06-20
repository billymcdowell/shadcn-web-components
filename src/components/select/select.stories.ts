import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './select.js';

const meta: Meta = {
  title: 'Components/Select', component: 'shadcn-select', tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Selected item value.' },
    placeholder: { control: 'text', description: 'Text shown without a selection.' },
    open: { control: 'boolean', description: 'Whether the popup is open.' },
    disabled: { control: 'boolean', description: 'Whether selection is disabled.' },
    required: { control: 'boolean', description: 'Whether a selection is required.' },
  },
};
export default meta;
type Story = StoryObj;

const render = (args: Record<string, unknown>) => html`
  <shadcn-select .value=${String(args.value ?? '')} placeholder=${String(args.placeholder ?? 'Select a fruit')} ?open=${args.open} ?disabled=${args.disabled} ?required=${args.required}>
    <shadcn-select-trigger></shadcn-select-trigger>
    <shadcn-select-content>
      <shadcn-select-item value="apple">Apple</shadcn-select-item>
      <shadcn-select-item value="banana">Banana</shadcn-select-item>
      <shadcn-select-item value="blueberry">Blueberry</shadcn-select-item>
      <shadcn-select-item value="grapes" disabled>Grapes (unavailable)</shadcn-select-item>
    </shadcn-select-content>
  </shadcn-select>`;

export const Default: Story = { args: { value: '', placeholder: 'Select a fruit', open: false }, render };
export const WithValue: Story = { args: { value: 'banana', placeholder: 'Select a fruit' }, render };
export const Open: Story = { args: { value: 'apple', open: true }, render };
export const Disabled: Story = { args: { disabled: true }, render };
export const Empty: Story = { render: () => html`<shadcn-select placeholder="No options available"><shadcn-select-trigger></shadcn-select-trigger><shadcn-select-content></shadcn-select-content></shadcn-select>` };
