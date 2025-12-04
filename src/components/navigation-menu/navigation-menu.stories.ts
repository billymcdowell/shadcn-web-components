import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './navigation-menu.js';

const meta: Meta = {
    title: 'Components/Navigation Menu',
    component: 'shadcn-navigation-menu',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A collection of links for navigating websites.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 2rem; background: var(--background); height: 300px;">
      <shadcn-navigation-menu>
        <shadcn-navigation-menu-list>
          <shadcn-navigation-menu-item>
            <shadcn-navigation-menu-trigger>Getting Started</shadcn-navigation-menu-trigger>
            <shadcn-navigation-menu-content>
              <div style="display: grid; gap: 0.5rem; width: 400px; grid-template-columns: .75fr 1fr;">
                <div style="grid-row: span 3; background: linear-gradient(to bottom right, var(--primary), var(--secondary)); border-radius: var(--radius-md); padding: 1rem; display: flex; flex-direction: column; justify-content: flex-end;">
                  <div style="font-weight: bold; color: white; margin-bottom: 0.5rem;">shadcn/ui</div>
                  <p style="font-size: var(--font-size-sm); color: rgba(255,255,255,0.9); margin: 0;">
                    Beautifully designed components built with Radix UI and Tailwind CSS.
                  </p>
                </div>
                <shadcn-navigation-menu-link href="/docs">
                  <div style="font-weight: var(--font-medium); margin-bottom: 0.25rem;">Introduction</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/installation">
                  <div style="font-weight: var(--font-medium); margin-bottom: 0.25rem;">Installation</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    How to install dependencies and structure your app.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/typography">
                  <div style="font-weight: var(--font-medium); margin-bottom: 0.25rem;">Typography</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Styles for headings, paragraphs, lists...etc
                  </p>
                </shadcn-navigation-menu-link>
              </div>
            </shadcn-navigation-menu-content>
          </shadcn-navigation-menu-item>
          
          <shadcn-navigation-menu-item>
            <shadcn-navigation-menu-trigger>Components</shadcn-navigation-menu-trigger>
            <shadcn-navigation-menu-content>
              <div style="display: grid; width: 400px; gap: 0.5rem; grid-template-columns: 1fr 1fr;">
                <shadcn-navigation-menu-link href="/docs/primitives/alert-dialog">
                  <div style="font-weight: var(--font-medium);">Alert Dialog</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    A modal dialog that interrupts the user.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/primitives/hover-card">
                  <div style="font-weight: var(--font-medium);">Hover Card</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    For sighted users to preview content.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/primitives/progress">
                  <div style="font-weight: var(--font-medium);">Progress</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Displays an indicator showing completion progress.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/primitives/scroll-area">
                  <div style="font-weight: var(--font-medium);">Scroll-area</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Visually or semantically separates content.
                  </p>
                </shadcn-navigation-menu-link>
              </div>
            </shadcn-navigation-menu-content>
          </shadcn-navigation-menu-item>

          <shadcn-navigation-menu-item>
            <shadcn-navigation-menu-link href="/docs">
              Documentation
            </shadcn-navigation-menu-link>
          </shadcn-navigation-menu-item>
        </shadcn-navigation-menu-list>
      </shadcn-navigation-menu>
    </div>
  `,
};
