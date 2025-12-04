import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './switch.js';

const meta: Meta = {
    title: 'Components/Switch',
    component: 'shadcn-switch',
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Whether the switch is checked',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the switch is disabled',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A toggle switch component with smooth animations and full accessibility.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-switch></shadcn-switch>
    </div>
  `,
};

export const Checked: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-switch checked></shadcn-switch>
    </div>
  `,
};

export const Disabled: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 1rem;">
      <shadcn-switch disabled></shadcn-switch>
      <shadcn-switch disabled checked></shadcn-switch>
    </div>
  `,
};

export const WithLabels: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 300px;">
        <span style="color: var(--foreground); font-size: var(--font-size-sm);">Airplane Mode</span>
        <shadcn-switch></shadcn-switch>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 300px;">
        <span style="color: var(--foreground); font-size: var(--font-size-sm);">WiFi</span>
        <shadcn-switch checked></shadcn-switch>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 300px;">
        <span style="color: var(--foreground); font-size: var(--font-size-sm);">Bluetooth</span>
        <shadcn-switch></shadcn-switch>
      </div>
    </div>
  `,
};

export const Settings: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1rem;">
        <h3 style="margin: 0 0 1rem 0; font-size: var(--font-size-base); font-weight: var(--font-semibold); color: var(--foreground);">
          Notifications
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: start; justify-content: space-between;">
            <div>
              <div style="font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
                Email Notifications
              </div>
              <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                Receive emails about your activity
              </div>
            </div>
            <shadcn-switch checked></shadcn-switch>
          </div>

          <div style="display: flex; align-items: start; justify-content: space-between;">
            <div>
              <div style="font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
                Push Notifications
              </div>
              <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                Receive push notifications on your devices
              </div>
            </div>
            <shadcn-switch></shadcn-switch>
          </div>

          <div style="display: flex; align-items: start; justify-content: space-between;">
            <div>
              <div style="font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
                SMS Notifications
              </div>
              <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                Receive text messages
              </div>
            </div>
            <shadcn-switch disabled></shadcn-switch>
          </div>
        </div>
      </div>
    </div>
  `,
};
