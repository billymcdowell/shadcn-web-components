import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './toggle-group.js';
import '../toggle/toggle.js';

const meta: Meta = {
    title: 'Components/Toggle Group',
    component: 'shadcn-toggle-group',
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'radio',
            options: ['single', 'multiple'],
            description: 'Selection type',
        },
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            description: 'Layout orientation',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the group is disabled',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A group of toggle buttons with single or multiple selection modes.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group>
        <shadcn-toggle value="left">Left</shadcn-toggle>
        <shadcn-toggle value="center">Center</shadcn-toggle>
        <shadcn-toggle value="right">Right</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `,
};

export const Single: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group type="single" value="center">
        <shadcn-toggle value="left">Left</shadcn-toggle>
        <shadcn-toggle value="center">Center</shadcn-toggle>
        <shadcn-toggle value="right">Right</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `,
};

export const Multiple: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group type="multiple" value="bold,italic">
        <shadcn-toggle value="bold">Bold</shadcn-toggle>
        <shadcn-toggle value="italic">Italic</shadcn-toggle>
        <shadcn-toggle value="underline">Underline</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `,
};

export const WithIcons: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group type="single">
        <shadcn-toggle value="left">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="17" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="17" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `,
};

export const Vertical: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group orientation="vertical" value="option2">
        <shadcn-toggle value="option1">Option 1</shadcn-toggle>
        <shadcn-toggle value="option2">Option 2</shadcn-toggle>
        <shadcn-toggle value="option3">Option 3</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `,
};

export const Disabled: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group disabled value="center">
        <shadcn-toggle value="left">Left</shadcn-toggle>
        <shadcn-toggle value="center">Center</shadcn-toggle>
        <shadcn-toggle value="right">Right</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `,
};

export const TextEditor: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 0.75rem;">
      <shadcn-toggle-group type="multiple">
        <shadcn-toggle value="bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="italic">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="4" x2="10" y2="4"/>
            <line x1="14" y1="20" x2="5" y2="20"/>
            <line x1="15" y1="4" x2="9" y2="20"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12"/>
            <line x1="6" y1="20" x2="18" y2="20"/>
          </svg>
        </shadcn-toggle>
      </shadcn-toggle-group>

      <shadcn-toggle-group type="single">
        <shadcn-toggle value="left">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="17" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="17" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="17" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="17" y2="18"/>
          </svg>
        </shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `,
};
