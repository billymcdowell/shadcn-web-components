import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './sidebar.js';
import '../button/button.js';
import '../separator/separator.js';

const meta: Meta = {
    title: 'Components/Sidebar',
    component: 'shadcn-sidebar',
    tags: ['autodocs'],
    argTypes: {
        collapsed: {
            control: 'boolean',
            description: 'Whether the sidebar is collapsed',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A composable sidebar component.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="height: 400px; border: 1px solid var(--border); display: flex;">
      <shadcn-sidebar>
        <div style="padding: 1rem; font-weight: bold;">My App</div>
        <shadcn-separator></shadcn-separator>
        <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-button variant="ghost" style="justify-content: flex-start;">Dashboard</shadcn-button>
          <shadcn-button variant="ghost" style="justify-content: flex-start;">Settings</shadcn-button>
          <shadcn-button variant="ghost" style="justify-content: flex-start;">Profile</shadcn-button>
        </div>
      </shadcn-sidebar>
      <div style="flex: 1; padding: 1rem; background: var(--muted);">
        Main Content
      </div>
    </div>
  `,
};

export const Collapsed: Story = {
    render: () => html`
    <div style="height: 400px; border: 1px solid var(--border); display: flex;">
      <shadcn-sidebar collapsed>
        <div style="padding: 1rem; font-weight: bold; text-align: center;">MA</div>
        <shadcn-separator></shadcn-separator>
        <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
          <shadcn-button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
          </shadcn-button>
          <shadcn-button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </shadcn-button>
        </div>
      </shadcn-sidebar>
      <div style="flex: 1; padding: 1rem; background: var(--muted);">
        Main Content
      </div>
    </div>
  `,
};
