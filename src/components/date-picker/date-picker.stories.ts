import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './date-picker.js';
const meta: Meta = { title: 'Components/Date Picker', component: 'shadcn-date-picker', tags: ['autodocs'], argTypes: {
  value: { control: 'text', description: 'Selected ISO date.' }, placeholder: { control: 'text' }, locale: { control: 'text' }, min: { control: 'text' }, max: { control: 'text' }, required: { control: 'boolean' }, disabled: { control: 'boolean' }, readOnly: { control: 'boolean' }, open: { control: 'boolean' },
} };
export default meta; type Story = StoryObj;
const render = (args: Record<string, unknown>) => html`<shadcn-date-picker .value=${String(args.value ?? '')} placeholder=${args.placeholder ?? 'Pick a date'} locale=${args.locale ?? ''} min=${args.min ?? ''} max=${args.max ?? ''} ?required=${args.required} ?disabled=${args.disabled} ?readonly=${args.readOnly} ?open=${args.open}></shadcn-date-picker>`;
export const Default: Story = { args: { value: '', placeholder: 'Pick a date' }, render };
export const WithValue: Story = { args: { value: '2026-06-21' }, render };
export const Open: Story = { args: { value: '2026-06-21', open: true }, render };
export const Constrained: Story = { args: { min: '2026-06-10', max: '2026-06-25', value: '2026-06-21' }, render };
export const Required: Story = { args: { required: true }, render };
export const ReadOnly: Story = { args: { value: '2026-06-21', readOnly: true }, render };
export const Disabled: Story = { args: { value: '2026-06-21', disabled: true }, render };
