import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './toggle.js';

const meta: Meta = {
    title: 'Components/Toggle',
    component: 'shadcn-toggle',
    tags: ['autodocs'],
    argTypes: {
        pressed: {
            control: 'boolean',
            description: 'Whether the toggle is pressed',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the toggle is disabled',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A two-state button that can be toggled on or off.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle>Toggle</shadcn-toggle>
    </div>
  `,
};

export const Pressed: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle pressed>Pressed</shadcn-toggle>
    </div>
  `,
};

export const Disabled: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 1rem;">
      <shadcn-toggle disabled>Disabled</shadcn-toggle>
      <shadcn-toggle disabled pressed>Disabled Pressed</shadcn-toggle>
    </div>
  `,
};

export const WithIcons: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 0.5rem;">
      <shadcn-toggle>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
        </svg>
        Bold
      </shadcn-toggle>

      <shadcn-toggle>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="4" x2="10" y2="4"/>
          <line x1="14" y1="20" x2="5" y2="20"/>
          <line x1="15" y1="4" x2="9" y2="20"/>
        </svg>
        Italic
      </shadcn-toggle>

      <shadcn-toggle>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12"/>
          <line x1="6" y1="20" x2="18" y2="20"/>
        </svg>
        Underline
      </shadcn-toggle>
    </div>
  `,
};

export const TextFormatting: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 0.25rem;">
      <shadcn-toggle pressed>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
        </svg>
      </shadcn-toggle>

      <shadcn-toggle>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="4" x2="10" y2="4"/>
          <line x1="14" y1="20" x2="5" y2="20"/>
          <line x1="15" y1="4" x2="9" y2="20"/>
        </svg>
      </shadcn-toggle>

      <shadcn-toggle>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12"/>
          <line x1="6" y1="20" x2="18" y2="20"/>
        </svg>
      </shadcn-toggle>

      <div style="width: 1px; background: var(--border); margin: 0 0.25rem;"></div>

      <shadcn-toggle>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="21" y1="10" x2="7" y2="10"/>
          <line x1="21" y1="6" x2="3" y2="6"/>
          <line x1="21" y1="14" x2="3" y2="14"/>
          <line x1="21" y1="18" x2="7" y2="18"/>
        </svg>
      </shadcn-toggle>

      <shadcn-toggle>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="17" y1="10" x2="3" y2="10"/>
          <line x1="21" y1="6" x2="3" y2="6"/>
          <line x1="21" y1="14" x2="3" y2="14"/>
          <line x1="17" y1="18" x2="3" y2="18"/>
        </svg>
      </shadcn-toggle>

      <shadcn-toggle>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="21" y1="10" x2="3" y2="10"/>
          <line x1="21" y1="6" x2="3" y2="6"/>
          <line x1="21" y1="14" x2="3" y2="14"/>
          <line x1="21" y1="18" x2="3" y2="18"/>
        </svg>
      </shadcn-toggle>
    </div>
  `,
};

export const IconOnly: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 0.5rem;">
      <shadcn-toggle style="width: 2.5rem; padding: 0;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
        </svg>
      </shadcn-toggle>

      <shadcn-toggle style="width: 2.5rem; padding: 0;" pressed>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="4" x2="10" y2="4"/>
          <line x1="14" y1="20" x2="5" y2="20"/>
          <line x1="15" y1="4" x2="9" y2="20"/>
        </svg>
      </shadcn-toggle>
    </div>
  `,
};
