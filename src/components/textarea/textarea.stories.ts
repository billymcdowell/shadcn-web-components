import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './textarea.js';
import '../label/label.js';

const meta: Meta = {
    title: 'Components/Textarea',
    component: 'shadcn-textarea',
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the textarea is disabled',
        },
        error: {
            control: 'boolean',
            description: 'Whether the textarea has an error',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A multi-line text input with vertical resizing and validation support.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <shadcn-textarea placeholder="Type your message here..."></shadcn-textarea>
    </div>
  `,
};

export const WithLabel: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 500px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label>Message</shadcn-label>
      <shadcn-textarea placeholder="Enter your message"></shadcn-textarea>
    </div>
  `,
};

export const WithValue: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <shadcn-textarea
        value="This is some pre-filled text in the textarea."
      ></shadcn-textarea>
    </div>
  `,
};

export const Disabled: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <shadcn-textarea
        disabled
        value="This textarea is disabled"
      ></shadcn-textarea>
    </div>
  `,
};

export const WithError: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 500px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label>Bio</shadcn-label>
      <shadcn-textarea
        error
        placeholder="Tell us about yourself"
      ></shadcn-textarea>
      <span style="font-size: var(--font-size-sm); color: var(--destructive);">
        This field is required
      </span>
    </div>
  `,
};

export const WithMaxLength: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 500px; display: flex; flex-direction: column; gap: 0.5rem;">
      <div style="display: flex; justify-content: space-between;">
        <shadcn-label>Comment</shadcn-label>
        <span style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
          Max 200 characters
        </span>
      </div>
      <shadcn-textarea
        placeholder="Leave a comment..."
        maxlength="200"
      ></shadcn-textarea>
    </div>
  `,
};

export const FormExample: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label>Feedback</shadcn-label>
          <shadcn-textarea
            placeholder="Tell us what you think..."
            required
          ></shadcn-textarea>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label>Additional Comments</shadcn-label>
          <shadcn-textarea
            placeholder="Any other thoughts? (optional)"
            rows="3"
          ></shadcn-textarea>
        </div>
      </form>
    </div>
  `,
};
