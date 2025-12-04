import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './item.js';
import '../kbd/kbd.js';

const meta: Meta = {
    title: 'Components/Item',
    component: 'shadcn-item',
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Whether the item is disabled',
        },
        selected: {
            control: 'boolean',
            description: 'Whether the item is selected',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A generic list item component for use in menus, selects, and command palettes.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 300px;">
      <shadcn-item>Item text</shadcn-item>
    </div>
  `,
};

export const WithIcon: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; display: flex; flex-direction: column;">
      <shadcn-item>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        Profile
      </shadcn-item>
      <shadcn-item>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        Settings
      </shadcn-item>
      <shadcn-item>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        Logout
      </shadcn-item>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Items with icons in the icon slot.',
            },
        },
    },
};

export const WithSuffix: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; display: flex; flex-direction: column;">
      <shadcn-item>
        New File
        <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
        <shadcn-kbd slot="suffix">N</shadcn-kbd>
      </shadcn-item>
      <shadcn-item>
        Open
        <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
        <shadcn-kbd slot="suffix">O</shadcn-kbd>
      </shadcn-item>
      <shadcn-item>
        Save
        <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
        <shadcn-kbd slot="suffix">S</shadcn-kbd>
      </shadcn-item>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Items with keyboard shortcuts in the suffix slot.',
            },
        },
    },
};

export const States: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; display: flex; flex-direction: column;">
      <shadcn-item>Default Item</shadcn-item>
      <shadcn-item selected>Selected Item</shadcn-item>
      <shadcn-item disabled>Disabled Item</shadcn-item>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Different item states.',
            },
        },
    },
};

export const Menu: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; border: 1px solid var(--border); border-radius: var(--radius-md);">
      <div style="padding: 0.5rem;">
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
          My Account
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.125rem;">
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Profile
            <shadcn-kbd slot="suffix">⇧</shadcn-kbd>
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">P</shadcn-kbd>
          </shadcn-item>
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2"/>
              <line x1="2" y1="10" x2="22" y2="10"/>
            </svg>
            Billing
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">B</shadcn-kbd>
          </shadcn-item>
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Settings
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">S</shadcn-kbd>
          </shadcn-item>
        </div>
        <div style="height: 1px; background: var(--border); margin: 0.5rem 0;"></div>
        <div style="display: flex; flex-direction: column; gap: 0.125rem;">
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Log out
            <shadcn-kbd slot="suffix">⇧</shadcn-kbd>
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">Q</shadcn-kbd>
          </shadcn-item>
        </div>
      </div>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Complete menu example using items.',
            },
        },
    },
};
