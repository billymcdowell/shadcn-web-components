import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './aspect-ratio.js';

export default { title: 'Components/Aspect Ratio', component: 'shadcn-aspect-ratio', tags: ['autodocs'] } satisfies Meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<shadcn-aspect-ratio ratio=${16 / 9} style="max-width: 600px"><div style="display:grid;place-items:center;background:var(--muted);border-radius:var(--radius-lg)">16:9</div></shadcn-aspect-ratio>` };
