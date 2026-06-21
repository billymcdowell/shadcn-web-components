import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './combobox.js';

const meta: Meta = {
  title: 'Components/Combobox',
  component: 'shadcn-combobox',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Selected item value.' },
    placeholder: { control: 'text', description: 'Text shown without a selection.' },
    open: { control: 'boolean', description: 'Whether the popup is open.' },
    disabled: { control: 'boolean', description: 'Whether interaction is disabled.' },
    readonly: { control: 'boolean', description: 'Whether the value is read-only.' },
    required: { control: 'boolean', description: 'Whether a selection is required.' },
  },
};
export default meta;
type Story = StoryObj;

const render = (args: Record<string, unknown>) => html`
  <shadcn-combobox
    .value=${String(args.value ?? '')}
    placeholder=${String(args.placeholder ?? 'Select a framework')}
    ?open=${args.open}
    ?disabled=${args.disabled}
    ?readonly=${args.readonly}
    ?required=${args.required}
  >
    <shadcn-combobox-input></shadcn-combobox-input>
    <shadcn-combobox-content>
      <shadcn-combobox-empty>No framework found.</shadcn-combobox-empty>
      <shadcn-combobox-item value="next.js" keywords="react">Next.js</shadcn-combobox-item>
      <shadcn-combobox-item value="sveltekit">SvelteKit</shadcn-combobox-item>
      <shadcn-combobox-item value="nuxt.js" keywords="vue">Nuxt.js</shadcn-combobox-item>
      <shadcn-combobox-item value="remix" disabled>Remix (unavailable)</shadcn-combobox-item>
      <shadcn-combobox-item value="astro">Astro</shadcn-combobox-item>
    </shadcn-combobox-content>
  </shadcn-combobox>
`;

export const Default: Story = { args: { value: '', placeholder: 'Select a framework', open: false }, render };
export const WithValue: Story = { args: { value: 'sveltekit' }, render };
export const Open: Story = { args: { value: 'next.js', open: true }, render };
export const Disabled: Story = { args: { disabled: true }, render };
export const ReadOnly: Story = { args: { value: 'astro', readonly: true }, render };

export const Groups: Story = {
  render: () => html`
    <shadcn-combobox placeholder="Select a food">
      <shadcn-combobox-input></shadcn-combobox-input>
      <shadcn-combobox-content>
        <shadcn-combobox-empty>No food found.</shadcn-combobox-empty>
        <shadcn-combobox-group>
          <shadcn-combobox-label>Fruit</shadcn-combobox-label>
          <shadcn-combobox-item value="apple">Apple</shadcn-combobox-item>
          <shadcn-combobox-item value="banana">Banana</shadcn-combobox-item>
        </shadcn-combobox-group>
        <shadcn-combobox-separator></shadcn-combobox-separator>
        <shadcn-combobox-group>
          <shadcn-combobox-label>Vegetables</shadcn-combobox-label>
          <shadcn-combobox-item value="carrot">Carrot</shadcn-combobox-item>
          <shadcn-combobox-item value="broccoli">Broccoli</shadcn-combobox-item>
        </shadcn-combobox-group>
      </shadcn-combobox-content>
    </shadcn-combobox>
  `,
};

export const Empty: Story = {
  render: () => html`
    <shadcn-combobox open placeholder="No options available">
      <shadcn-combobox-input></shadcn-combobox-input>
      <shadcn-combobox-content><shadcn-combobox-empty visible>No items found.</shadcn-combobox-empty></shadcn-combobox-content>
    </shadcn-combobox>
  `,
};
