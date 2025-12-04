import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './input-group.js';
import '../input/input.js';
import '../button/button.js';

const meta: Meta = {
    title: 'Components/Input Group',
    component: 'shadcn-input-group',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A container for grouping inputs with prefix and/or suffix addons.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const WithPrefix: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input-group>
        <span slot="prefix">https://</span>
        <shadcn-input placeholder="example.com"></shadcn-input>
      </shadcn-input-group>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Input with a text prefix.',
            },
        },
    },
};

export const WithSuffix: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input-group>
        <shadcn-input placeholder="Amount"></shadcn-input>
        <span slot="suffix">USD</span>
      </shadcn-input-group>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Input with a text suffix.',
            },
        },
    },
};

export const WithBoth: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input-group>
        <span slot="prefix">$</span>
        <shadcn-input placeholder="0.00" type="number"></shadcn-input>
        <span slot="suffix">.00</span>
      </shadcn-input-group>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Input with both prefix and suffix.',
            },
        },
    },
};

export const WithIcon: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-input-group>
        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <shadcn-input placeholder="Search..."></shadcn-input>
      </shadcn-input-group>

      <shadcn-input-group>
        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        <shadcn-input type="email" placeholder="Email"></shadcn-input>
      </shadcn-input-group>

      <shadcn-input-group>
        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <shadcn-input placeholder="Username"></shadcn-input>
      </shadcn-input-group>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Input groups with icons in the prefix slot.',
            },
        },
    },
};

export const WithButton: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-input-group>
        <shadcn-input placeholder="Enter your email"></shadcn-input>
        <div slot="suffix">
          <shadcn-button size="sm">Subscribe</shadcn-button>
        </div>
      </shadcn-input-group>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Input group with a button in the suffix.',
            },
        },
    },
};

export const Examples: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
          Website
        </label>
        <shadcn-input-group>
          <span slot="prefix">https://</span>
          <shadcn-input placeholder="example.com"></shadcn-input>
          <span slot="suffix">.com</span>
        </shadcn-input-group>
      </div>

      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
          Price
        </label>
        <shadcn-input-group>
          <span slot="prefix">$</span>
          <shadcn-input type="number" placeholder="0.00"></shadcn-input>
        </shadcn-input-group>
      </div>

      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
          Weight
        </label>
        <shadcn-input-group>
          <shadcn-input type="number" placeholder="0"></shadcn-input>
          <span slot="suffix">kg</span>
        </shadcn-input-group>
      </div>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Common use cases for input groups.',
            },
        },
    },
};
