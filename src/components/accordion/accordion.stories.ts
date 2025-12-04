import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './accordion.js';

const meta: Meta = {
    title: 'Components/Accordion',
    component: 'shadcn-accordion',
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'radio',
            options: ['single', 'multiple'],
            description: 'Selection mode',
        },
        collapsible: {
            control: 'boolean',
            description: 'Allow collapsing all items (single mode only)',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A vertical stack of collapsible sections with support for single or multiple expansion.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 600px;">
      <shadcn-accordion type="single" collapsible>
        <shadcn-accordion-item value="item-1">
          <span slot="trigger">Is it accessible?</span>
          Yes. It adheres to the WAI-ARIA design pattern and provides full keyboard navigation.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-2">
          <span slot="trigger">Is it styled?</span>
          Yes. It comes with default styles that match the shadcn design system.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-3">
          <span slot="trigger">Is it animated?</span>
          Yes. It uses smooth transitions for expanding and collapsing content.
        </shadcn-accordion-item>
      </shadcn-accordion>
    </div>
  `,
};

export const Multiple: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 600px;">
      <shadcn-accordion type="multiple" value="item-1,item-2">
        <shadcn-accordion-item value="item-1">
          <span slot="trigger">First Item</span>
          Content for the first accordion item.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-2">
          <span slot="trigger">Second Item</span>
          Content for the second accordion item.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-3">
          <span slot="trigger">Third Item</span>
          Content for the third accordion item.
        </shadcn-accordion-item>
      </shadcn-accordion>
    </div>
  `,
};

export const FAQ: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 700px;">
      <h2 style="margin: 0 0 1.5rem 0; font-size: var(--font-size-2xl); font-weight: var(--font-bold);">
        Frequently Asked Questions
      </h2>
      <shadcn-accordion type="single" collapsible>
        <shadcn-accordion-item value="shipping">
          <span slot="trigger">What are your shipping options?</span>
          We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Free shipping is available on orders over $50.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="returns">
          <span slot="trigger">What is your return policy?</span>
          We accept returns within 30 days of purchase. Items must be unused and in original packaging. Refunds are processed within 5-7 business days.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="warranty">
          <span slot="trigger">Do you offer a warranty?</span>
          All products come with a 1-year manufacturer warranty covering defects and malfunctions. Extended warranties are available for purchase.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="payment">
          <span slot="trigger">What payment methods do you accept?</span>
          We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.
        </shadcn-accordion-item>
      </shadcn-accordion>
    </div>
  `,
};
