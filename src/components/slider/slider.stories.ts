import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './slider.js';
import '../label/label.js';

const meta: Meta = {
    title: 'Components/Slider',
    component: 'shadcn-slider',
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: { type: 'number', min: 0, max: 100 },
            description: 'Current value',
        },
        min: {
            control: 'number',
            description: 'Minimum value',
        },
        max: {
            control: 'number',
            description: 'Maximum value',
        },
        step: {
            control: 'number',
            description: 'Step increment',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the slider is disabled',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A slider input for selecting a value from a range with mouse/touch drag and keyboard support.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-slider></shadcn-slider>
    </div>
  `,
};

export const WithLabel: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label>Volume</shadcn-label>
      <shadcn-slider value="75"></shadcn-slider>
    </div>
  `,
};

export const CustomRange: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <shadcn-label>Price Range</shadcn-label>
          <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">$0 - $1000</span>
        </div>
        <shadcn-slider min="0" max="1000" step="10" value="500"></shadcn-slider>
      </div>
    </div>
  `,
};

export const FineControl: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
        <shadcn-label>Precision</shadcn-label>
        <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">0.50</span>
      </div>
      <shadcn-slider min="0" max="1" step="0.01" value="0.5"></shadcn-slider>
    </div>
  `,
};

export const Disabled: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-label>Disabled Slider</shadcn-label>
      <shadcn-slider value="60" disabled></shadcn-slider>
    </div>
  `,
};

export const MultipleSliders: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <shadcn-label>Bass</shadcn-label>
        <shadcn-slider value="40"></shadcn-slider>
      </div>

      <div>
        <shadcn-label>Mid</shadcn-label>
        <shadcn-slider value="50"></shadcn-slider>
      </div>

      <div>
        <shadcn-label>Treble</shadcn-label>
        <shadcn-slider value="60"></shadcn-slider>
      </div>

      <div>
        <shadcn-label>Volume</shadcn-label>
        <shadcn-slider value="75"></shadcn-slider>
      </div>
    </div>
  `,
};

export const Interactive: Story = {
    render: () => {
        let currentValue = 50;

        const handler = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            currentValue = detail.value;
            const display = document.getElementById('slider-value');
            if (display) {
                display.textContent = String(currentValue);
            }
            console.log('Slider value:', detail.value);
        };

        return html`
      <div style="padding: 1rem; background: var(--background); max-width: 400px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <shadcn-label>Interactive Slider</shadcn-label>
          <span id="slider-value" style="font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
            ${currentValue}
          </span>
        </div>
        <shadcn-slider value=${currentValue} @slider-change=${handler}></shadcn-slider>
        <p style="margin-top: 1rem; font-size: var(--font-size-sm); color: var(--muted-foreground);">
          Drag the slider or use arrow keys. Check console for events.
        </p>
      </div>
    `;
    },
};

export const FormExample: Story = {
    render: () => html`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <form style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1.5rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
        <h3 style="margin: 0; font-size: var(--font-size-lg); font-weight: var(--font-semibold);">
          Filter Settings
        </h3>

        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <shadcn-label>Price Range</shadcn-label>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">
              Up to $500
            </span>
          </div>
          <shadcn-slider name="price" min="0" max="1000" step="50" value="500"></shadcn-slider>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <shadcn-label>Distance (miles)</shadcn-label>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">
              25 mi
            </span>
          </div>
          <shadcn-slider name="distance" min="0" max="100" step="5" value="25"></shadcn-slider>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <shadcn-label>Rating</shadcn-label>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">
              3+ stars
            </span>
          </div>
          <shadcn-slider name="rating" min="0" max="5" step="0.5" value="3"></shadcn-slider>
        </div>
      </form>
    </div>
  `,
};
