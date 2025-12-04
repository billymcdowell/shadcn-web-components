import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './spinner.js';

const meta: Meta = {
    title: 'Components/Spinner',
    component: 'shadcn-spinner',
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'default', 'lg'],
            description: 'Size of the spinner',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A loading spinner to indicate loading states. Respects prefers-reduced-motion for accessibility.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
        size: 'default',
    },
    render: (args: any) => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-spinner size=${args.size}></shadcn-spinner>
    </div>
  `,
};

export const AllSizes: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 2rem; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <shadcn-spinner size="sm"></shadcn-spinner>
        <span style="color: var(--muted-foreground); font-size: var(--font-size-xs);">Small</span>
      </div>
      
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <shadcn-spinner size="default"></shadcn-spinner>
        <span style="color: var(--muted-foreground); font-size: var(--font-size-xs);">Default</span>
      </div>
      
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <shadcn-spinner size="lg"></shadcn-spinner>
        <span style="color: var(--muted-foreground); font-size: var(--font-size-xs);">Large</span>
      </div>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'All available spinner sizes.',
            },
        },
    },
};

export const InButton: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 1rem; flex-wrap: wrap;">
      <button style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--primary); color: var(--primary-foreground); border: none; border-radius: var(--radius-md); font-weight: var(--font-medium);">
        <shadcn-spinner size="sm"></shadcn-spinner>
        Loading...
      </button>
      
      <button style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: transparent; color: var(--foreground); border: 1px solid var(--border); border-radius: var(--radius-md); font-weight: var(--font-medium);">
        <shadcn-spinner size="sm"></shadcn-spinner>
        Please wait
      </button>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Spinners used inside buttons to indicate loading states.',
            },
        },
    },
};

export const Centered: Story = {
    render: () => html`
    <div style="padding: 4rem; background: var(--background); display: flex; justify-content: center; align-items: center; min-height: 200px;">
      <shadcn-spinner size="lg"></shadcn-spinner>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Centered spinner for full-page loading states.',
            },
        },
    },
};
