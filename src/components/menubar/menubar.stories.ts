import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './menubar.js';

const meta: Meta = {
    title: 'Components/Menubar',
    component: 'shadcn-menubar',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 2rem; background: var(--background); height: 300px;">
      <shadcn-menubar>
        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>File</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-item>
              New Tab <span slot="shortcut">⌘T</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              New Window <span slot="shortcut">⌘N</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item disabled>
              New Incognito Window
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Share <span slot="shortcut">⌘S</span>
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Print... <span slot="shortcut">⌘P</span>
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>
        
        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>Edit</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-item>
              Undo <span slot="shortcut">⌘Z</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Redo <span slot="shortcut">⇧⌘Z</span>
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Cut <span slot="shortcut">⌘X</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Copy <span slot="shortcut">⌘C</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Paste <span slot="shortcut">⌘V</span>
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>

        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>View</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-checkbox-item checked>
              Always Show Bookmarks Bar
            </shadcn-menubar-checkbox-item>
            <shadcn-menubar-checkbox-item checked>
              Always Show Full URLs
            </shadcn-menubar-checkbox-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item inset>
              Reload <span slot="shortcut">⌘R</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item disabled inset>
              Force Reload <span slot="shortcut">⇧⌘R</span>
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item inset>
              Toggle Fullscreen
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item inset>
              Hide Sidebar
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>

        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>Profiles</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-label>Switch Profile</shadcn-menubar-label>
            <shadcn-menubar-item>
              Andy
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Benoit
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Luis
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Edit...
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Add Profile...
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>
      </shadcn-menubar>
    </div>
  `,
};
