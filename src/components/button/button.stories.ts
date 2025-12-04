import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './button.js';

const meta: Meta = {
    title: 'Components/Button',
    component: 'shadcn-button',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
            description: 'Visual style variant of the button',
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
            description: 'Size variant of the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
            description: 'Button type attribute',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A versatile button component with multiple variants and sizes, following shadcn design principles.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'default',
        disabled: false,
    },
    render: (args) => html`
    <shadcn-button 
      variant=${args.variant} 
      size=${args.size} 
      ?disabled=${args.disabled}
    >
      Click me
    </shadcn-button>
  `,
};

export const AllVariants: Story = {
    render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 1rem; background: var(--background); color: var(--foreground);">
      <shadcn-button variant="default">Default</shadcn-button>
      <shadcn-button variant="destructive">Destructive</shadcn-button>
      <shadcn-button variant="outline">Outline</shadcn-button>
      <shadcn-button variant="secondary">Secondary</shadcn-button>
      <shadcn-button variant="ghost">Ghost</shadcn-button>
      <shadcn-button variant="link">Link</shadcn-button>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'All available button variants',
            },
        },
    },
};

export const AllSizes: Story = {
    render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; padding: 1rem; background: var(--background);">
      <shadcn-button size="sm">Small</shadcn-button>
      <shadcn-button size="default">Default</shadcn-button>
      <shadcn-button size="lg">Large</shadcn-button>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'All available button sizes',
            },
        },
    },
};

export const IconButton: Story = {
    render: () => html`
    <div style="display: flex; gap: 1rem; padding: 1rem; background: var(--background);">
      <shadcn-button size="icon" variant="default">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </shadcn-button>
      <shadcn-button size="icon" variant="outline">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      </shadcn-button>
      <shadcn-button size="icon" variant="ghost">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </shadcn-button>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Icon buttons with the icon size variant',
            },
        },
    },
};

export const Disabled: Story = {
    render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 1rem; background: var(--background);">
      <shadcn-button variant="default" disabled>Default</shadcn-button>
      <shadcn-button variant="destructive" disabled>Destructive</shadcn-button>
      <shadcn-button variant="outline" disabled>Outline</shadcn-button>
      <shadcn-button variant="secondary" disabled>Secondary</shadcn-button>
      <shadcn-button variant="ghost" disabled>Ghost</shadcn-button>
      <shadcn-button variant="link" disabled>Link</shadcn-button>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'All button variants in disabled state',
            },
        },
    },
};

export const WithIcons: Story = {
    render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 1rem; background: var(--background);">
      <shadcn-button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
        Next
      </shadcn-button>
      <shadcn-button variant="outline">
        Back
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5"/>
          <path d="m12 19-7-7 7-7"/>
        </svg>
      </shadcn-button>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Buttons with icons using the default slot',
            },
        },
    },
};
