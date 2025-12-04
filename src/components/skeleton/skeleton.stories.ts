import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './skeleton.js';

const meta: Meta = {
    title: 'Components/Skeleton',
    component: 'shadcn-skeleton',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'circle', 'text', 'heading', 'avatar', 'button', 'card'],
            description: 'Skeleton variant',
        },
        width: {
            control: 'text',
            description: 'Width override',
        },
        height: {
            control: 'text',
            description: 'Height override',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A placeholder component for loading states with pulse animation.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-skeleton width="100%" height="40px"></shadcn-skeleton>
    </div>
  `,
};

export const Variants: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Text</p>
        <shadcn-skeleton variant="text"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Heading</p>
        <shadcn-skeleton variant="heading"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Avatar</p>
        <shadcn-skeleton variant="avatar"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Button</p>
        <shadcn-skeleton variant="button"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Circle</p>
        <shadcn-skeleton variant="circle" width="60px" height="60px"></shadcn-skeleton>
      </div>
    </div>
  `,
};

export const CardSkeleton: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 350px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <shadcn-skeleton variant="avatar"></shadcn-skeleton>
          <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem;">
            <shadcn-skeleton variant="heading" width="60%"></shadcn-skeleton>
            <shadcn-skeleton variant="text" width="80%"></shadcn-skeleton>
          </div>
        </div>
        
        <shadcn-skeleton width="100%" height="200px"></shadcn-skeleton>
        
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text" width="90%"></shadcn-skeleton>
          <shadcn-skeleton variant="text" width="75%"></shadcn-skeleton>
        </div>
        
        <div style="display: flex; gap: 0.5rem;">
          <shadcn-skeleton variant="button"></shadcn-skeleton>
          <shadcn-skeleton variant="button"></shadcn-skeleton>
        </div>
      </div>
    </div>
  `,
};

export const ListSkeleton: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${Array(5).fill(0).map(() => html`
          <div style="display: flex; gap: 1rem; align-items: center;">
            <shadcn-skeleton variant="avatar"></shadcn-skeleton>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem;">
              <shadcn-skeleton variant="heading" width="40%"></shadcn-skeleton>
              <shadcn-skeleton variant="text" width="70%"></shadcn-skeleton>
            </div>
          </div>
        `)}
      </div>
    </div>
  `,
};

export const TableSkeleton: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 600px;">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 100px; gap: 1rem;">
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text"></shadcn-skeleton>
        </div>
        
        ${Array(4).fill(0).map(() => html`
          <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 100px; gap: 1rem; align-items: center;">
            <shadcn-skeleton variant="text"></shadcn-skeleton>
            <shadcn-skeleton variant="text"></shadcn-skeleton>
            <shadcn-skeleton variant="text"></shadcn-skeleton>
            <shadcn-skeleton variant="button" width="80px"></shadcn-skeleton>
          </div>
        `)}
      </div>
    </div>
  `,
};
