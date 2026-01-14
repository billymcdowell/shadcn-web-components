import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './dialog.js';
import '../button/button.js';
import '../input/input.js';

const meta: Meta = {
  title: 'Components/Dialog',
  component: 'shadcn-dialog',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A dialog component that displays content in a modal overlay. The dialog can be opened and closed via triggers, and includes proper accessibility features like focus trapping and ARIA attributes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: false,
  },
  render: (args) => html`
    <shadcn-dialog .open=${args.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content>
        <shadcn-dialog-title>Dialog Title</shadcn-dialog-title>
        <shadcn-dialog-description>
          This is a dialog description. It provides additional context about the dialog's purpose.
        </shadcn-dialog-description>
        <div style="margin-top: var(--spacing-4);">
          <p>Dialog content goes here. You can put any content inside the dialog.</p>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Cancel</shadcn-button>
          </shadcn-dialog-close>
          <shadcn-button>Confirm</shadcn-button>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  `,
};

export const WithOverlay: Story = {
  args: {
    open: false,
  },
  render: (args) => html`
    <shadcn-dialog .open=${args.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog with Overlay</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-portal>
        <shadcn-dialog-overlay></shadcn-dialog-overlay>
        <shadcn-dialog-content>
          <shadcn-dialog-title>Edit Profile</shadcn-dialog-title>
          <shadcn-dialog-description>
            Make changes to your profile here. Click save when you're done.
          </shadcn-dialog-description>
          <div style="margin-top: var(--spacing-4);">
            <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
              <div>
                <label style="display: block; margin-bottom: var(--spacing-2); font-weight: var(--font-medium);">
                  Name
                </label>
                <shadcn-input type="text" placeholder="Enter your name" style="width: 100%;"></shadcn-input>
              </div>
              <div>
                <label style="display: block; margin-bottom: var(--spacing-2); font-weight: var(--font-medium);">
                  Email
                </label>
                <shadcn-input type="email" placeholder="Enter your email" style="width: 100%;"></shadcn-input>
              </div>
            </div>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
            <shadcn-dialog-close>
              <shadcn-button variant="outline">Cancel</shadcn-button>
            </shadcn-dialog-close>
            <shadcn-button>Save Changes</shadcn-button>
          </div>
        </shadcn-dialog-content>
      </shadcn-dialog-portal>
    </shadcn-dialog>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Dialog with an overlay backdrop that dims the background content.',
      },
    },
  },
};

export const WithCloseButton: Story = {
  args: {
    open: false,
  },
  render: (args) => html`
    <shadcn-dialog .open=${args.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4);">
          <shadcn-dialog-title>Confirm Action</shadcn-dialog-title>
          <shadcn-dialog-close>
            <shadcn-button variant="ghost" size="icon" style="margin-left: auto;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </shadcn-button>
          </shadcn-dialog-close>
        </div>
        <shadcn-dialog-description>
          Are you sure you want to perform this action? This cannot be undone.
        </shadcn-dialog-description>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Cancel</shadcn-button>
          </shadcn-dialog-close>
          <shadcn-button variant="destructive">Delete</shadcn-button>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Dialog with a close button in the header.',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    open: false,
  },
  render: (args) => html`
    <shadcn-dialog .open=${args.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Long Content Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content style="max-height: 80vh; overflow-y: auto;">
        <shadcn-dialog-title>Terms and Conditions</shadcn-dialog-title>
        <shadcn-dialog-description>
          Please read the following terms and conditions carefully.
        </shadcn-dialog-description>
        <div style="margin-top: var(--spacing-4); max-height: 60vh; overflow-y: auto;">
          <p style="margin-bottom: var(--spacing-4);">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Decline</shadcn-button>
          </shadcn-dialog-close>
          <shadcn-button>Accept</shadcn-button>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Dialog with scrollable long content.',
      },
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    open: false,
  },
  render: (args) => html`
    <shadcn-dialog .open=${args.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content>
        <shadcn-dialog-title>Simple Dialog</shadcn-dialog-title>
        <div style="margin-top: var(--spacing-4);">
          <p>This dialog doesn't have a description, just a title and content.</p>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Close</shadcn-button>
          </shadcn-dialog-close>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Dialog without a description element.',
      },
    },
  },
};
