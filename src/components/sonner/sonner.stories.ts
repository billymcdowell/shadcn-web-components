import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { toast } from './sonner.js';
import './sonner.js';

const meta: Meta = {
  title: 'Components/Sonner',
  component: 'shadcn-sonner',
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'Viewport position for notifications.',
    },
    duration: { control: 'number', description: 'Default auto-close duration in milliseconds.' },
    visibleToasts: { control: 'number', description: 'Maximum number of visible notifications.' },
    expand: { control: 'boolean', description: 'Displays notifications with full spacing.' },
    richColors: { control: 'boolean', description: 'Applies colors based on notification type.' },
    closeButton: { control: 'boolean', description: 'Shows a dismiss button on every notification.' },
  },
  parameters: {
    docs: { description: { component: 'An accessible notification host with an imperative, framework-independent toast API.' } },
  },
};

export default meta;
type Story = StoryObj;

const triggerStyles = 'display:flex;flex-wrap:wrap;gap:.75rem;padding:2rem;min-height:12rem;background:var(--background);color:var(--foreground)';

export const Default: Story = {
  args: { position: 'bottom-right', duration: 4000, visibleToasts: 3, expand: false, richColors: false, closeButton: false },
  render: (args) => html`
    <div style=${triggerStyles}>
      <button @click=${() => toast('Event has been created', { description: 'Sunday, December 3 at 9:00 AM' })}>Show toast</button>
    </div>
    <shadcn-sonner
      position=${args.position}
      duration=${args.duration}
      visible-toasts=${args.visibleToasts}
      ?expand=${args.expand}
      ?rich-colors=${args.richColors}
      ?close-button=${args.closeButton}
    ></shadcn-sonner>
  `,
};

export const Types: Story = {
  render: () => html`
    <div style=${triggerStyles}>
      <button @click=${() => toast.success('Changes saved')}>Success</button>
      <button @click=${() => toast.info('A new version is available')}>Info</button>
      <button @click=${() => toast.warning('Your session expires soon')}>Warning</button>
      <button @click=${() => toast.error('Something went wrong')}>Error</button>
      <button @click=${() => toast.loading('Uploading files')}>Loading</button>
    </div>
    <shadcn-sonner rich-colors close-button expand></shadcn-sonner>
  `,
};

export const Action: Story = {
  render: () => html`
    <div style=${triggerStyles}>
      <button @click=${() => toast('Message archived', {
        action: { label: 'Undo', onClick: () => toast.success('Message restored') },
        cancel: { label: 'Dismiss', onClick: () => undefined },
      })}>Toast with action</button>
    </div>
    <shadcn-sonner></shadcn-sonner>
  `,
};

export const PromiseToast: Story = {
  render: () => html`
    <div style=${triggerStyles}>
      <button @click=${() => toast.promise(
        new Promise<string>((resolve) => window.setTimeout(() => resolve('Profile'), 1500)),
        { loading: 'Saving profile...', success: (name) => `${name} saved`, error: 'Could not save profile' },
      )}>Save profile</button>
    </div>
    <shadcn-sonner position="top-center" rich-colors close-button></shadcn-sonner>
  `,
};
