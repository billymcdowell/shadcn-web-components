import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './kbd.js';

const meta: Meta = {
    title: 'Components/Kbd',
    component: 'shadcn-kbd',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Display keyboard shortcuts and key combinations with proper styling.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground);">
      <shadcn-kbd>K</shadcn-kbd>
    </div>
  `,
};

export const KeyCombinations: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground); display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <div style="display: flex; gap: 0.25rem; align-items: center;">
        <shadcn-kbd>⌘</shadcn-kbd>
        <span>+</span>
        <shadcn-kbd>K</shadcn-kbd>
      </div>
      
      <div style="display: flex; gap: 0.25rem; align-items: center;">
        <shadcn-kbd>Ctrl</shadcn-kbd>
        <span>+</span>
        <shadcn-kbd>C</shadcn-kbd>
      </div>
      
      <div style="display: flex; gap: 0.25rem; align-items: center;">
        <shadcn-kbd>Shift</shadcn-kbd>
        <span>+</span>
        <shadcn-kbd>Tab</shadcn-kbd>
      </div>
      
      <div style="display: flex; gap: 0.25rem; align-items: center;">
        <shadcn-kbd>Alt</shadcn-kbd>
        <span>+</span>
        <shadcn-kbd>F4</shadcn-kbd>
      </div>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Common keyboard shortcuts and combinations.',
            },
        },
    },
};

export const InText: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground);">
      <p>
        Press <shadcn-kbd>⌘</shadcn-kbd> + <shadcn-kbd>K</shadcn-kbd> to open the command palette.
      </p>
      <p style="margin-top: 1rem;">
        Use <shadcn-kbd>Ctrl</shadcn-kbd> + <shadcn-kbd>S</shadcn-kbd> to save your work.
      </p>
      <p style="margin-top: 1rem;">
        Navigate with <shadcn-kbd>↑</shadcn-kbd> and <shadcn-kbd>↓</shadcn-kbd> arrow keys.
      </p>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Kbd elements inline with text.',
            },
        },
    },
};

export const ModifierKeys: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground); display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <shadcn-kbd>Ctrl</shadcn-kbd>
      <shadcn-kbd>Alt</shadcn-kbd>
      <shadcn-kbd>Shift</shadcn-kbd>
      <shadcn-kbd>⌘</shadcn-kbd>
      <shadcn-kbd>⌥</shadcn-kbd>
      <shadcn-kbd>⇧</shadcn-kbd>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Common modifier keys.',
            },
        },
    },
};

export const ArrowKeys: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground); display: flex; gap: 0.5rem;">
      <shadcn-kbd>←</shadcn-kbd>
      <shadcn-kbd>↑</shadcn-kbd>
      <shadcn-kbd>→</shadcn-kbd>
      <shadcn-kbd>↓</shadcn-kbd>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Arrow keys with unicode symbols.',
            },
        },
    },
};
