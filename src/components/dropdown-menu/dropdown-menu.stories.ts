import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './dropdown-menu.js';
import '../button/button.js';

const meta: Meta = {
    title: 'Components/Dropdown Menu',
    component: 'shadcn-dropdown-menu',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; justify-content: center;">
      <shadcn-dropdown-menu>
        <shadcn-dropdown-menu-trigger>
          <shadcn-button variant="outline">Open Menu</shadcn-button>
        </shadcn-dropdown-menu-trigger>
        <shadcn-dropdown-menu-content>
          <shadcn-dropdown-menu-label>My Account</shadcn-dropdown-menu-label>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-item>Profile</shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>Billing</shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>Team</shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>Subscription</shadcn-dropdown-menu-item>
        </shadcn-dropdown-menu-content>
      </shadcn-dropdown-menu>
    </div>
  `,
};

export const WithShortcuts: Story = {
    render: () => html`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; justify-content: center;">
      <shadcn-dropdown-menu>
        <shadcn-dropdown-menu-trigger>
          <shadcn-button variant="outline">Actions</shadcn-button>
        </shadcn-dropdown-menu-trigger>
        <shadcn-dropdown-menu-content>
          <shadcn-dropdown-menu-label>Actions</shadcn-dropdown-menu-label>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-item>
            New Tab <span slot="shortcut">⌘T</span>
          </shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>
            New Window <span slot="shortcut">⌘N</span>
          </shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item disabled>
            New Incognito Window <span slot="shortcut">⇧⌘N</span>
          </shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-item>
            Log out <span slot="shortcut">⇧⌘Q</span>
          </shadcn-dropdown-menu-item>
        </shadcn-dropdown-menu-content>
      </shadcn-dropdown-menu>
    </div>
  `,
};

export const Checkboxes: Story = {
    render: () => html`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; justify-content: center;">
      <shadcn-dropdown-menu>
        <shadcn-dropdown-menu-trigger>
          <shadcn-button variant="outline">View Options</shadcn-button>
        </shadcn-dropdown-menu-trigger>
        <shadcn-dropdown-menu-content>
          <shadcn-dropdown-menu-label>Appearance</shadcn-dropdown-menu-label>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-checkbox-item checked>
            Status Bar
          </shadcn-dropdown-menu-checkbox-item>
          <shadcn-dropdown-menu-checkbox-item disabled checked>
            Activity Bar
          </shadcn-dropdown-menu-checkbox-item>
          <shadcn-dropdown-menu-checkbox-item>
            Panel
          </shadcn-dropdown-menu-checkbox-item>
        </shadcn-dropdown-menu-content>
      </shadcn-dropdown-menu>
    </div>
  `,
};
