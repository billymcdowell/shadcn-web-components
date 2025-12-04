import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './card.js';
import '../button/button.js';

const meta: Meta = {
    title: 'Components/Card',
    component: 'shadcn-card',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A versatile card container for grouping related content with header, content, and footer sections.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Card Title</shadcn-card-title>
          <shadcn-card-description>Card description goes here</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          This is the main content of the card. You can put any content here.
        </shadcn-card-content>
      </shadcn-card>
    </div>
  `,
};

export const WithFooter: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Notifications</shadcn-card-title>
          <shadcn-card-description>You have 3 unread messages</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="padding: 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="font-weight: var(--font-medium);">New message from Sarah</div>
              <div style="font-size: var(--font-size-sm); color: var(--muted-foreground);">2 minutes ago</div>
            </div>
            <div style="padding: 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="font-weight: var(--font-medium);">Meeting reminder</div>
              <div style="font-size: var(--font-size-sm); color: var(--muted-foreground);">10 minutes ago</div>
            </div>
          </div>
        </shadcn-card-content>
        <shadcn-card-footer slot="footer">
          <shadcn-button variant="outline" style="flex: 1;">Mark as read</shadcn-button>
        </shadcn-card-footer>
      </shadcn-card>
    </div>
  `,
};

export const LoginForm: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Login</shadcn-card-title>
          <shadcn-card-description>Enter your credentials to access your account</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <form style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <label style="font-size: var(--font-size-sm); font-weight: var(--font-medium);">Email</label>
              <input type="email" placeholder="email@example.com" style="height: 2.5rem; padding: 0 var(--spacing-3); font-size: var(--font-size-sm); background: var(--background); color: var(--foreground); border: 1px solid var(--input); border-radius: var(--radius-md);" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <label style="font-size: var(--font-size-sm); font-weight: var(--font-medium);">Password</label>
              <input type="password" placeholder="••••••••" style="height: 2.5rem; padding: 0 var(--spacing-3); font-size: var(--font-size-sm); background: var(--background); color: var(--foreground); border: 1px solid var(--input); border-radius: var(--radius-md);" />
            </div>
          </form>
        </shadcn-card-content>
        <shadcn-card-footer slot="footer">
          <shadcn-button variant="default" style="flex: 1;">Sign in</shadcn-button>
        </shadcn-card-footer>
      </shadcn-card>
    </div>
  `,
};

export const ProductCard: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 350px;">
      <shadcn-card>
        <div style="aspect-ratio: 16/9; background: var(--muted); border-radius: var(--radius-md); margin: var(--spacing-6); margin-bottom: 0;"></div>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Product Name</shadcn-card-title>
          <shadcn-card-description>$99.99</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <p style="margin: 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">
            A brief description of the product and its key features.
          </p>
        </shadcn-card-content>
        <shadcn-card-footer slot="footer">
          <shadcn-button variant="default" style="flex: 1;">Add to Cart</shadcn-button>
        </shadcn-card-footer>
      </shadcn-card>
    </div>
  `,
};

export const MultipleCards: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; max-width: 1000px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Total Revenue</shadcn-card-title>
          <shadcn-card-description>+20.1% from last month</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="font-size: var(--font-size-3xl); font-weight: var(--font-bold);">$45,231.89</div>
        </shadcn-card-content>
      </shadcn-card>

      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Subscriptions</shadcn-card-title>
          <shadcn-card-description>+180.1% from last month</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="font-size: var(--font-size-3xl); font-weight: var(--font-bold);">+2,350</div>
        </shadcn-card-content>
      </shadcn-card>

      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Sales</shadcn-card-title>
          <shadcn-card-description>+19% from last month</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="font-size: var(--font-size-3xl); font-weight: var(--font-bold);">+12,234</div>
        </shadcn-card-content>
      </shadcn-card>
    </div>
  `,
};
