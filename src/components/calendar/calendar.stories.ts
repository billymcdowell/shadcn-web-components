import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './calendar.js';
const meta: Meta = { title: 'Components/Calendar', component: 'shadcn-calendar', tags: ['autodocs'], argTypes: {
  value: { control: 'text', description: 'Selected ISO date.' }, month: { control: 'text', description: 'Displayed YYYY-MM month.' }, min: { control: 'text' }, max: { control: 'text' }, locale: { control: 'text' }, weekStartsOn: { control: { type: 'number', min: 0, max: 6 } }, showOutsideDays: { control: 'boolean' }, disabled: { control: 'boolean' },
} };
export default meta; type Story = StoryObj;
const render = (args: Record<string, unknown>) => html`<shadcn-calendar value=${args.value ?? ''} month=${args.month ?? ''} min=${args.min ?? ''} max=${args.max ?? ''} locale=${args.locale ?? ''} .weekStartsOn=${args.weekStartsOn ?? 0} ?showOutsideDays=${args.showOutsideDays !== false} ?disabled=${args.disabled}></shadcn-calendar>`;
export const Default: Story = { args: { value: '', showOutsideDays: true, weekStartsOn: 0 }, render };
export const Selected: Story = { args: { value: '2026-06-21', month: '2026-06', showOutsideDays: true }, render };
export const Constrained: Story = { args: { value: '2026-06-21', month: '2026-06', min: '2026-06-10', max: '2026-06-25' }, render };
export const MondayFirst: Story = { args: { month: '2026-06', weekStartsOn: 1, locale: 'en-GB' }, render };
export const Disabled: Story = { args: { value: '2026-06-21', month: '2026-06', disabled: true }, render };
