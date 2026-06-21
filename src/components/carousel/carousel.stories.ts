import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './carousel.js';

const meta: Meta = {
  title: 'Components/Carousel',
  component: 'shadcn-carousel',
  tags: ['autodocs'],
  argTypes: {
    index: { control: { type: 'number', min: 0 }, description: 'Active slide index.' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'], description: 'Scrolling axis.' },
    loop: { control: 'boolean', description: 'Wrap navigation between the first and last slides.' },
    label: { control: 'text', description: 'Accessible name for the carousel region.' },
  },
};
export default meta;
type Story = StoryObj;

const cards = (count = 5) => Array.from({ length: count }, (_, index) => html`
  <shadcn-carousel-item>
    <div style="display:flex; aspect-ratio:1; align-items:center; justify-content:center; border:1px solid var(--border); border-radius:var(--radius-xl); background:var(--card); color:var(--card-foreground); font-size:var(--font-size-4xl); font-weight:var(--font-semibold);">
      ${index + 1}
    </div>
  </shadcn-carousel-item>
`);

const render = (args: { index?: number; orientation?: string; loop?: boolean; label?: string }) => html`
  <div style="width:min(80vw, 20rem); margin:4rem auto;">
    <shadcn-carousel
      .index=${args.index ?? 0}
      orientation=${args.orientation ?? 'horizontal'}
      ?loop=${args.loop}
      label=${args.label ?? 'Featured items'}
    >
      <shadcn-carousel-content>${cards()}</shadcn-carousel-content>
      <shadcn-carousel-previous></shadcn-carousel-previous>
      <shadcn-carousel-next></shadcn-carousel-next>
    </shadcn-carousel>
  </div>
`;

export const Default: Story = { args: { index: 0, orientation: 'horizontal', loop: false, label: 'Featured items' }, render };
export const Looping: Story = { args: { index: 0, orientation: 'horizontal', loop: true, label: 'Looping gallery' }, render };
export const Vertical: Story = {
  args: { index: 0, orientation: 'vertical', loop: false, label: 'Vertical gallery' },
  render: (args) => html`<div style="width:20rem; margin:5rem auto;">${render(args)}</div>`,
};
export const MultipleItems: Story = {
  render: () => html`
    <div style="width:min(80vw, 42rem); margin:4rem auto;">
      <shadcn-carousel label="Project gallery" style="--carousel-item-size:50%;">
        <shadcn-carousel-content>${cards(6)}</shadcn-carousel-content>
        <shadcn-carousel-previous></shadcn-carousel-previous>
        <shadcn-carousel-next></shadcn-carousel-next>
      </shadcn-carousel>
    </div>
  `,
};
export const Empty: Story = {
  render: () => html`
    <div style="width:20rem; margin:4rem auto;">
      <shadcn-carousel label="Empty gallery">
        <shadcn-carousel-content></shadcn-carousel-content>
        <shadcn-carousel-previous></shadcn-carousel-previous>
        <shadcn-carousel-next></shadcn-carousel-next>
      </shadcn-carousel>
    </div>
  `,
};
