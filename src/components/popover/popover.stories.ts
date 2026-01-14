import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './popover.js';

const meta: Meta = {
  title: 'Components/Popover',
  component: 'shadcn-popover',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/**
 * Headless popover example showing the unstyled primitive.
 * This demonstrates the raw functionality without any CSS applied.
 */
export const Headless: Story = {
  args: {
    open: false,
  },
  render: (args) => html`
    <shadcn-popover .open=${args.open}>
      <shadcn-popover-trigger>
        <button>Open Popover</button>
      </shadcn-popover-trigger>
      <shadcn-popover-content>
        <p>This is a headless popover. It has no default styling - you can style it however you want using CSS.</p>
        <p>The popover is positioned relative to its trigger using Floating UI.</p>
      </shadcn-popover-content>
    </shadcn-popover>
  `,
};

/**
 * Styled popover example showing a complete usage with CSS.
 * The styles are applied via the data-state attribute.
 */
export const Styled: Story = {
  args: {
    open: false,
  },
  render: (args) => html`
    <div style="padding: 4rem; display: flex; justify-content: center;">
      <shadcn-popover .open=${args.open} class="styled-popover">
        <shadcn-popover-trigger>
          <button class="popover-trigger-button">Open Menu</button>
        </shadcn-popover-trigger>
        <shadcn-popover-content class="popover-content">
          <div class="popover-header">
            <h3 class="popover-title">Menu Options</h3>
          </div>
          <div class="popover-body">
            <button class="menu-item">Profile</button>
            <button class="menu-item">Settings</button>
            <button class="menu-item">Help</button>
            <hr class="menu-divider" />
            <button class="menu-item menu-item-danger">Sign Out</button>
          </div>
        </shadcn-popover-content>
      </shadcn-popover>
    </div>
  `,
};
