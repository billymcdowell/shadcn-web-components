import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './input-otp.js';

const meta: Meta = {
  title: 'Components/Input OTP', component: 'shadcn-input-otp', tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Current OTP value.' },
    length: { control: { type: 'number', min: 1, max: 10 }, description: 'Number of accepted characters.' },
    mode: { control: 'select', options: ['numeric', 'text'], description: 'Input filtering and virtual keyboard mode.' },
    disabled: { control: 'boolean', description: 'Whether input is disabled.' },
    readonly: { control: 'boolean', description: 'Whether input is read-only.' },
    required: { control: 'boolean', description: 'Whether a complete value is required.' },
    invalid: { control: 'boolean', description: 'Whether the value is invalid.' },
  },
};
export default meta;
type Story = StoryObj;
const render = (args: Record<string, unknown>) => html`<shadcn-input-otp .value=${String(args.value ?? '')} .length=${Number(args.length ?? 6)} mode=${String(args.mode ?? 'numeric')} ?disabled=${args.disabled} ?readonly=${args.readonly} ?required=${args.required} ?invalid=${args.invalid}></shadcn-input-otp>`;

export const Default: Story = { args: { value: '', length: 6, mode: 'numeric' }, render };
export const WithValue: Story = { args: { value: '123', length: 6, mode: 'numeric' }, render };
export const TextCode: Story = { args: { value: 'A9B', length: 6, mode: 'text' }, render };
export const Invalid: Story = { args: { value: '123456', length: 6, invalid: true }, render };
export const Disabled: Story = { args: { value: '123', length: 6, disabled: true }, render };
