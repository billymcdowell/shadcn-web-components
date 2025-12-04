import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './input.js';
import '../label/label.js';

const meta: Meta = {
    title: 'Components/Input',
    component: 'shadcn-input',
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'],
            description: 'Input type',
        },
        value: {
            control: 'text',
            description: 'Input value',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the input is disabled',
        },
        error: {
            control: 'boolean',
            description: 'Whether the input has an error',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A text input component with support for various input types, validation, and error states.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
        type: 'text',
        placeholder: 'Enter text...',
    },
    render: (args: any) => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input
        type=${args.type}
        placeholder=${args.placeholder}
        ?disabled=${args.disabled}
        ?error=${args.error}
      ></shadcn-input>
    </div>
  `,
};

export const WithLabel: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="email">Email</shadcn-label>
      <shadcn-input
        id="email"
        type="email"
        placeholder="Enter your email"
      ></shadcn-input>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Input with a label component.',
            },
        },
    },
};

export const DifferentTypes: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Text</shadcn-label>
        <shadcn-input type="text" placeholder="Enter text"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Email</shadcn-label>
        <shadcn-input type="email" placeholder="email@example.com"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Password</shadcn-label>
        <shadcn-input type="password" placeholder="Enter password"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Number</shadcn-label>
        <shadcn-input type="number" placeholder="0"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Search</shadcn-label>
        <shadcn-input type="search" placeholder="Search..."></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>URL</shadcn-label>
        <shadcn-input type="url" placeholder="https://"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Telephone</shadcn-label>
        <shadcn-input type="tel" placeholder="+1 (555) 000-0000"></shadcn-input>
      </div>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'All supported input types.',
            },
        },
    },
};

export const States: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Default</shadcn-label>
        <shadcn-input placeholder="Default input"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Disabled</shadcn-label>
        <shadcn-input placeholder="Disabled input" disabled></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Error</shadcn-label>
        <shadcn-input placeholder="Error input" error></shadcn-input>
        <span style="font-size: var(--font-size-sm); color: var(--destructive);">This field is required</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>With Value</shadcn-label>
        <shadcn-input value="example@email.com"></shadcn-input>
      </div>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Different input states including disabled and error.',
            },
        },
    },
};

export const FormExample: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="name">Full Name</shadcn-label>
          <shadcn-input
            id="name"
            type="text"
            placeholder="John Doe"
            required
          ></shadcn-input>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="form-email">Email</shadcn-label>
          <shadcn-input
            id="form-email"
            type="email"
            placeholder="john@example.com"
            required
          ></shadcn-input>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="form-password">Password</shadcn-label>
          <shadcn-input
            id="form-password"
            type="password"
            placeholder="••••••••"
            required
          ></shadcn-input>
        </div>
      </form>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Example form with multiple inputs.',
            },
        },
    },
};
