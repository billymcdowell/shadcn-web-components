import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './label.js';

const meta: Meta = {
    title: 'Components/Label',
    component: 'shadcn-label',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'An accessible form label component for labeling form controls.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground);">
      <shadcn-label for="email">Email Address</shadcn-label>
    </div>
  `,
};

export const WithInput: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground); display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="username">Username</shadcn-label>
      <input 
        id="username" 
        type="text" 
        placeholder="Enter username"
        style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
      />
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Label paired with an input field using the `for` attribute.',
            },
        },
    },
};

export const MultipleLabels: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground); display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label for="name">Full Name</shadcn-label>
        <input 
          id="name" 
          type="text"
          style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
        />
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label for="email">Email</shadcn-label>
        <input 
          id="email" 
          type="email"
          style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
        />
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label for="password">Password</shadcn-label>
        <input 
          id="password" 
          type="password"
          style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
        />
      </div>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Multiple form fields with labels.',
            },
        },
    },
};
