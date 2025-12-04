import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './button-group.js';
import '../button/button.js';

const meta: Meta = {
    title: 'Components/Button Group',
    component: 'shadcn-button-group',
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical'],
            description: 'Orientation of the button group',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A container for grouping related buttons together with merged borders.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-button-group>
        <shadcn-button variant="outline">Left</shadcn-button>
        <shadcn-button variant="outline">Middle</shadcn-button>
        <shadcn-button variant="outline">Right</shadcn-button>
      </shadcn-button-group>
    </div>
  `,
};

export const Vertical: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-button-group orientation="vertical">
        <shadcn-button variant="outline">Top</shadcn-button>
        <shadcn-button variant="outline">Middle</shadcn-button>
        <shadcn-button variant="outline">Bottom</shadcn-button>
      </shadcn-button-group>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Vertically oriented button group.',
            },
        },
    },
};

export const WithIcons: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-button-group>
        <shadcn-button variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Edit
        </shadcn-button>
        <shadcn-button variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Delete
        </shadcn-button>
      </shadcn-button-group>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Button group with icons.',
            },
        },
    },
};

export const DifferentVariants: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-button-group>
        <shadcn-button variant="default">Save</shadcn-button>
        <shadcn-button variant="default">Cancel</shadcn-button>
      </shadcn-button-group>

      <shadcn-button-group>
        <shadcn-button variant="secondary">Option 1</shadcn-button>
        <shadcn-button variant="secondary">Option 2</shadcn-button>
        <shadcn-button variant="secondary">Option 3</shadcn-button>
      </shadcn-button-group>

      <shadcn-button-group>
        <shadcn-button variant="ghost">View</shadcn-button>
        <shadcn-button variant="ghost">Edit</shadcn-button>
        <shadcn-button variant="ghost">Share</shadcn-button>
      </shadcn-button-group>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Button groups with different variants.',
            },
        },
    },
};

export const ToolBar: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 1rem;">
      <shadcn-button-group>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="17" y1="10" x2="3" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="17" y1="18" x2="3" y2="18"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="3" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="3" y2="18"/>
          </svg>
        </shadcn-button>
      </shadcn-button-group>
      
      <shadcn-button-group>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="4" x2="10" y2="4"/>
            <line x1="14" y1="20" x2="5" y2="20"/>
            <line x1="15" y1="4" x2="9" y2="20"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="9" x2="20" y2="9"/>
            <line x1="4" y1="15" x2="20" y2="15"/>
            <line x1="10" y1="3" x2="8" y2="21"/>
            <line x1="16" y1="3" x2="14" y2="21"/>
          </svg>
        </shadcn-button>
      </shadcn-button-group>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Toolbar-style button groups for text formatting.',
            },
        },
    },
};
