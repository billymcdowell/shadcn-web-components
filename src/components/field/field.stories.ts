import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './field.js';
import '../input/input.js';
import '../native-select/native-select.js';

const meta: Meta = {
    title: 'Components/Field',
    component: 'shadcn-field',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A form field wrapper that combines label, input, helper text, and error message into a unified component.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field label="Email">
        <shadcn-input type="email" placeholder="email@example.com"></shadcn-input>
      </shadcn-field>
    </div>
  `,
};

export const WithHelper: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Password"
        helper="Must be at least 8 characters long"
      >
        <shadcn-input type="password" placeholder="Enter password"></shadcn-input>
      </shadcn-field>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Field with helper text below the input.',
            },
        },
    },
};

export const WithError: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Username"
        error="This username is already taken"
      >
        <shadcn-input placeholder="Choose a username" error></shadcn-input>
      </shadcn-field>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Field with an error message.',
            },
        },
    },
};

export const Required: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Full Name"
        required
      >
        <shadcn-input placeholder="John Doe"></shadcn-input>
      </shadcn-field>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Required field with an asterisk indicator.',
            },
        },
    },
};

export const WithSelect: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Country"
        helper="Select your country of residence"
      >
        <shadcn-native-select>
          <option value="">Choose a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </shadcn-native-select>
      </shadcn-field>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Field with a select element.',
            },
        },
    },
};

export const FormExample: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <shadcn-field
          label="Full Name"
          required
        >
          <shadcn-input placeholder="John Doe"></shadcn-input>
        </shadcn-field>

        <shadcn-field
          label="Email"
          helper="We'll never share your email"
          required
        >
          <shadcn-input type="email" placeholder="john@example.com"></shadcn-input>
        </shadcn-field>

        <shadcn-field
          label="Password"
          helper="Must be at least 8 characters"
          required
        >
          <shadcn-input type="password" placeholder="••••••••"></shadcn-input>
        </shadcn-field>

        <shadcn-field
          label="Country"
        >
          <shadcn-native-select>
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
          </shadcn-native-select>
        </shadcn-field>

        <button type="submit" style="padding: 0.5rem 1rem; background: var(--primary); color: var(--primary-foreground); border: none; border-radius: var(--radius-md); font-weight: var(--font-medium); cursor: pointer;">
          Submit
        </button>
      </form>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Complete form using field components.',
            },
        },
    },
};

export const DifferentStates: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-field label="Default">
        <shadcn-input placeholder="Default state"></shadcn-input>
      </shadcn-field>

      <shadcn-field label="With Helper" helper="This is helper text">
        <shadcn-input placeholder="With helper text"></shadcn-input>
      </shadcn-field>

      <shadcn-field label="With Error" error="This field is required">
        <shadcn-input placeholder="Error state" error></shadcn-input>
      </shadcn-field>

      <shadcn-field label="Required" required>
        <shadcn-input placeholder="Required field"></shadcn-input>
      </shadcn-field>

      <shadcn-field label="Disabled">
        <shadcn-input placeholder="Disabled field" disabled></shadcn-input>
      </shadcn-field>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'All possible field states.',
            },
        },
    },
};
