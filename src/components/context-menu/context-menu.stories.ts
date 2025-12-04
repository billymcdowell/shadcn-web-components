import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './context-menu.js';

const meta: Meta = {
    title: 'Components/Context Menu',
    component: 'shadcn-context-menu',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Displays a menu to the user — such as a set of actions or functions — triggered by a right-click.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; align-items: center; justify-content: center;">
      <shadcn-context-menu>
        <div style="border: 1px dashed var(--border); border-radius: var(--radius-md); padding: 4rem; text-align: center; color: var(--muted-foreground);">
          Right click here
        </div>
        <shadcn-context-menu-content slot="menu">
          <shadcn-context-menu-item>
            Back <span slot="shortcut">⌘[</span>
          </shadcn-context-menu-item>
          <shadcn-context-menu-item disabled>
            Forward <span slot="shortcut">⌘]</span>
          </shadcn-context-menu-item>
          <shadcn-context-menu-item>
            Reload <span slot="shortcut">⌘R</span>
          </shadcn-context-menu-item>
          <shadcn-context-menu-separator></shadcn-context-menu-separator>
          <shadcn-context-menu-checkbox-item checked>
            Show Bookmarks Bar
          </shadcn-context-menu-checkbox-item>
          <shadcn-context-menu-checkbox-item>
            Show Full URLs
          </shadcn-context-menu-checkbox-item>
          <shadcn-context-menu-separator></shadcn-context-menu-separator>
          <shadcn-context-menu-label inset>People</shadcn-context-menu-label>
          <shadcn-context-menu-separator></shadcn-context-menu-separator>
          <shadcn-context-menu-item inset>
            Pedro Duarte
          </shadcn-context-menu-item>
          <shadcn-context-menu-item inset>
            Colm Tuite
          </shadcn-context-menu-item>
        </shadcn-context-menu-content>
      </shadcn-context-menu>
    </div>
  `,
};
