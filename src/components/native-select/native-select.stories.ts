import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './native-select.js';
import '../label/label.js';

const meta: Meta = {
    title: 'Components/Native Select',
    component: 'shadcn-native-select',
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Whether the select is disabled',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A styled native select element with custom dropdown icon.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-native-select>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </shadcn-native-select>
    </div>
  `,
};

export const WithLabel: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="country">Country</shadcn-label>
      <shadcn-native-select id="country">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="de">Germany</option>
      </shadcn-native-select>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Select with a label component.',
            },
        },
    },
};

export const Disabled: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-native-select disabled>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </shadcn-native-select>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Disabled select.',
            },
        },
    },
};

export const FormExample: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="language">Language</shadcn-label>
          <shadcn-native-select id="language" required>
            <option value="">Choose a language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
          </shadcn-native-select>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="timezone">Timezone</shadcn-label>
          <shadcn-native-select id="timezone" required>
            <option value="">Select timezone</option>
            <option value="utc">UTC</option>
            <option value="est">Eastern Time (ET)</option>
            <option value="cst">Central Time (CT)</option>
            <option value="mst">Mountain Time (MT)</option>
            <option value="pst">Pacific Time (PT)</option>
          </shadcn-native-select>
        </div>
      </form>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Example form with multiple select fields.',
            },
        },
    },
};

export const WithOptGroups: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="food">Choose a food</shadcn-label>
      <shadcn-native-select id="food">
        <option value="">Select a food</option>
        <optgroup label="Fruits">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </optgroup>
        <optgroup label="Vegetables">
          <option value="carrot">Carrot</option>
          <option value="broccoli">Broccoli</option>
          <option value="spinach">Spinach</option>
        </optgroup>
      </shadcn-native-select>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Select with option groups.',
            },
        },
    },
};
