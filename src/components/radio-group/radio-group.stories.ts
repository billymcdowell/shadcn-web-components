import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './radio-group.js';

const meta: Meta = {
    title: 'Components/Radio Group',
    component: 'shadcn-radio-group',
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'text',
            description: 'Selected value',
        },
        orientation: {
            control: 'radio',
            options: ['vertical', 'horizontal'],
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
                component: 'A set of radio buttons that allows single selection from multiple options.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="default">
        <shadcn-radio value="option1">Option 1</shadcn-radio>
        <shadcn-radio value="option2">Option 2</shadcn-radio>
        <shadcn-radio value="option3">Option 3</shadcn-radio>
      </shadcn-radio-group>
    </div>
  `,
};

export const WithDefault: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="withDefault" value="option2">
        <shadcn-radio value="option1">Option 1</shadcn-radio>
        <shadcn-radio value="option2">Option 2 (Selected)</shadcn-radio>
        <shadcn-radio value="option3">Option 3</shadcn-radio>
      </shadcn-radio-group>
    </div>
  `,
};

export const Horizontal: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="horizontal" orientation="horizontal">
        <shadcn-radio value="sm">Small</shadcn-radio>
        <shadcn-radio value="md">Medium</shadcn-radio>
        <shadcn-radio value="lg">Large</shadcn-radio>
      </shadcn-radio-group>
    </div>
  `,
};

export const Disabled: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="disabled" disabled value="option1">
        <shadcn-radio value="option1">Option 1</shadcn-radio>
        <shadcn-radio value="option2">Option 2</shadcn-radio>
        <shadcn-radio value="option3">Option 3</shadcn-radio>
      </shadcn-radio-group>
    </div>
  `,
};

export const FormExample: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h4 style="margin: 0 0 0.75rem 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
            Choose your plan
          </h4>
          <shadcn-radio-group name="plan" value="pro">
            <shadcn-radio value="free">
              <div>
                <div style="font-weight: var(--font-medium);">Free</div>
                <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                  Perfect for trying out our service
                </div>
              </div>
            </shadcn-radio>
            <shadcn-radio value="pro">
              <div>
                <div style="font-weight: var(--font-medium);">Pro</div>
                <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                  Best for professionals
                </div>
              </div>
            </shadcn-radio>
            <shadcn-radio value="enterprise">
              <div>
                <div style="font-weight: var(--font-medium);">Enterprise</div>
                <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                  Advanced features for teams
                </div>
              </div>
            </shadcn-radio>
          </shadcn-radio-group>
        </div>

        <div>
          <h4 style="margin: 0 0 0.75rem 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
            Notification method
          </h4>
          <shadcn-radio-group name="notify" orientation="horizontal">
            <shadcn-radio value="email">Email</shadcn-radio>
            <shadcn-radio value="sms">SMS</shadcn-radio>
            <shadcn-radio value="push">Push</shadcn-radio>
          </shadcn-radio-group>
        </div>
      </form>
    </div>
  `,
};

export const Interactive: Story = {
    render: () => {
        const handler = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            console.log('Radio group changed:', detail);
        };

        return html`
      <div style="padding: 1rem; background: var(--background);">
        <shadcn-radio-group name="interactive" @radio-group-change=${handler}>
          <shadcn-radio value="a">Option A</shadcn-radio>
          <shadcn-radio value="b">Option B</shadcn-radio>
          <shadcn-radio value="c">Option C</shadcn-radio>
        </shadcn-radio-group>
        <p style="margin-top: 1rem; font-size: var(--font-size-sm); color: var(--muted-foreground);">
          Check the console to see events
        </p>
      </div>
    `;
    },
};
