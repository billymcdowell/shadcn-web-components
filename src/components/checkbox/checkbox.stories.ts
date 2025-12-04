import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './checkbox.js';
import '../label/label.js';

const meta: Meta = {
    title: 'Components/Checkbox',
    component: 'shadcn-checkbox',
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Whether the checkbox is checked',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the checkbox is disabled',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A checkbox input with WCAG 2.1 AA compliant accessibility and keyboard support.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-checkbox>Accept terms and conditions</shadcn-checkbox>
    </div>
  `,
};

export const Checked: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-checkbox checked>Already accepted</shadcn-checkbox>
    </div>
  `,
};

export const Disabled: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-checkbox disabled>Disabled unchecked</shadcn-checkbox>
      <shadcn-checkbox disabled checked>Disabled checked</shadcn-checkbox>
    </div>
  `,
};

export const WithLabel: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <shadcn-checkbox id="terms">
          Accept terms and conditions
        </shadcn-checkbox>
      </div>
      
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <shadcn-checkbox id="marketing">
          Receive marketing emails
        </shadcn-checkbox>
      </div>

      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <shadcn-checkbox id="newsletter">
          Subscribe to newsletter
        </shadcn-checkbox>
      </div>
    </div>
  `,
};

export const FormExample: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0; font-size: var(--font-size-base); font-weight: var(--font-semibold); color: var(--foreground);">
            Preferences
          </h3>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <shadcn-checkbox name="notifications">
              Enable notifications
            </shadcn-checkbox>
            <shadcn-checkbox name="updates" checked>
              Receive updates
            </shadcn-checkbox>
            <shadcn-checkbox name="tips">
              Show tips on startup
            </shadcn-checkbox>
          </div>
        </div>

        <div style="border-top: 1px solid var(--border); padding-top: 1rem;">
          <shadcn-checkbox name="terms" required>
            I agree to the terms and conditions *
          </shadcn-checkbox>
        </div>
      </form>
    </div>
  `,
};

export const Interactive: Story = {
    render: () => {
        const handler = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            console.log('Checkbox changed:', detail);
        };

        return html`
      <div style="padding: 1rem; background: var(--background);">
        <shadcn-checkbox @checkbox-change=${handler}>
          Click me (check console)
        </shadcn-checkbox>
      </div>
    `;
    },
    parameters: {
        docs: {
            description: {
                story: 'Checkbox with event listener. Open the console to see events.',
            },
        },
    },
};
