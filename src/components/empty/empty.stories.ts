import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './empty.js';
import '../button/button.js';

const meta: Meta = {
  title: 'Components/Empty',
  component: 'shadcn-empty',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display empty states when there is no content to show. Highly customizable with slots for icon, title, description, and actions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty></shadcn-empty>
    </div>
  `,
};

export const WithCustomText: Story = {
  render: () => html`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty
        heading="No messages yet"
        description="Start a conversation by sending your first message."
      ></shadcn-empty>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Empty state with custom heading and description using properties.',
      },
    },
  },
};

export const WithAction: Story = {
  render: () => html`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty
        heading="No projects found"
        description="Get started by creating your first project."
      >
        <shadcn-button slot="action" variant="default">
          Create Project
        </shadcn-button>
      </shadcn-empty>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Empty state with an action button.',
      },
    },
  },
};

export const WithCustomIcon: Story = {
  render: () => html`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <span slot="title">No files uploaded</span>
        <span slot="description">Upload your first file to get started.</span>
        <shadcn-button slot="action" variant="default">
          Upload File
        </shadcn-button>
      </shadcn-empty>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Empty state with custom icon using slots.',
      },
    },
  },
};

export const SearchResults: Story = {
  render: () => html`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <span slot="title">No results found</span>
        <span slot="description">Try adjusting your search terms or filters.</span>
      </shadcn-empty>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Empty state for search results.',
      },
    },
  },
};

export const MultipleActions: Story = {
  render: () => html`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty
        title="No data available"
        description="Choose an option to get started."
      >
        <div slot="action" style="display: flex; gap: 0.5rem;">
          <shadcn-button variant="default">Import Data</shadcn-button>
          <shadcn-button variant="outline">Create New</shadcn-button>
        </div>
      </shadcn-empty>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Empty state with multiple action buttons.',
      },
    },
  },
};
