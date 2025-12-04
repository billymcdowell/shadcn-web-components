import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './separator.js';

const meta: Meta = {
    title: 'Components/Separator',
    component: 'shadcn-separator',
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            description: 'Separator orientation',
        },
        decorative: {
            control: 'boolean',
            description: 'Whether purely decorative (no semantic role)',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A visual divider for separating content.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="margin-bottom: 1rem;">
        <h4 style="margin: 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold);">Section 1</h4>
        <p style="margin: 0.5rem 0 0 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">Content for the first section.</p>
      </div>
      
      <shadcn-separator></shadcn-separator>
      
      <div style="margin-top: 1rem;">
        <h4 style="margin: 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold);">Section 2</h4>
        <p style="margin: 0.5rem 0 0 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">Content for the second section.</p>
      </div>
    </div>
  `,
};

export const Vertical: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background);">
      <div style="display: flex; height: 100px; gap: 1rem;">
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; font-size: var(--font-size-sm);">
          Left
        </div>
        
        <shadcn-separator orientation="vertical"></shadcn-separator>
        
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; font-size: var(--font-size-sm);">
          Center
        </div>
        
        <shadcn-separator orientation="vertical"></shadcn-separator>
        
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; font-size: var(--font-size-sm);">
          Right
        </div>
      </div>
    </div>
  `,
};

export const InCard: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem;">
        <h3 style="margin: 0 0 0.5rem 0; font-size: var(--font-size-lg); font-weight: var(--font-semibold);">Profile Settings</h3>
        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">Manage your account preferences</p>
        
        <shadcn-separator style="margin: 1.5rem 0;"></shadcn-separator>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: var(--font-size-sm);">Email Notifications</span>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">Enabled</span>
          </div>
          
          <shadcn-separator decorative></shadcn-separator>
          
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: var(--font-size-sm);">Two-Factor Auth</span>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">Disabled</span>
          </div>
          
          <shadcn-separator decorative></shadcn-separator>
          
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: var(--font-size-sm);">Privacy Mode</span>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">Enabled</span>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const MenuDivider: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 250px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0.5rem;">
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); border-radius: var(--radius-sm); cursor: pointer;" 
             onmouseover="this.style.background='var(--accent)'" 
             onmouseout="this.style.background='transparent'">
          Profile
        </div>
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); border-radius: var(--radius-sm); cursor: pointer;"
             onmouseover="this.style.background='var(--accent)'" 
             onmouseout="this.style.background='transparent'">
          Settings
        </div>
        
        <shadcn-separator decorative style="margin: 0.5rem 0;"></shadcn-separator>
        
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); border-radius: var(--radius-sm); cursor: pointer;"
             onmouseover="this.style.background='var(--accent)'" 
             onmouseout="this.style.background='transparent'">
          Logout
        </div>
      </div>
    </div>
  `,
};
