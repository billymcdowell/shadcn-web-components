import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './pagination.js';

const meta: Meta = {
  title: 'Components/Pagination',
  component: 'shadcn-pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Pagination with page links, previous and next navigation, active state, and omitted-page indicators.',
      },
    },
  },
  argTypes: {
    current: {
      control: 'boolean',
      description: 'Marks the numbered link as the current page.',
    },
    disabled: {
      control: 'boolean',
      description: 'Makes the previous-page link unavailable and removes it from tab order.',
    },
    text: {
      control: 'text',
      description: 'Sets the visible previous-page label.',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  args: {
    current: true,
    disabled: false,
    text: 'Previous',
  },
  render: (args) => html`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item>
          <shadcn-pagination-previous
            href="?page=1"
            text=${args.text}
            ?disabled=${args.disabled}
          ></shadcn-pagination-previous>
        </shadcn-pagination-item>
        <shadcn-pagination-item>
          <shadcn-pagination-link href="?page=2" ?current=${args.current}>2</shadcn-pagination-link>
        </shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=3"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  `,
};

export const Default: Story = {
  render: () => html`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item><shadcn-pagination-previous href="?page=1"></shadcn-pagination-previous></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=1">1</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=2" current>2</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=3">3</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-ellipsis></shadcn-pagination-ellipsis></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=3"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  `,
};

export const FirstPage: Story = {
  render: () => html`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item><shadcn-pagination-previous disabled></shadcn-pagination-previous></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=1" current>1</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=2">2</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=3">3</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=2"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  `,
};

export const Compact: Story = {
  render: () => html`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item><shadcn-pagination-previous href="?page=4" text="Prev"></shadcn-pagination-previous></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=5" current label="Page 5">5</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=6"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  `,
};
