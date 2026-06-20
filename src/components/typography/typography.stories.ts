import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './typography.js';

export default { title: 'Components/Typography', component: 'shadcn-typography', tags: ['autodocs'] } satisfies Meta;
type Story = StoryObj;
export const Scale: Story = { render: () => html`<div style="display:grid;gap:1.5rem;max-width:700px"><shadcn-typography variant="h1">Taxing Laughter</shadcn-typography><shadcn-typography variant="lead">A king decided to tax jokes in his kingdom.</shadcn-typography><shadcn-typography>The people stopped telling jokes, and the kingdom fell into gloom.</shadcn-typography><shadcn-typography variant="blockquote">After all, he said, everyone enjoys a good joke.</shadcn-typography><shadcn-typography variant="muted">Updated June 2026</shadcn-typography></div>` };
