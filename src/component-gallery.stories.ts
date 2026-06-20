import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const galleryUrl = './examples/example.html';

const meta = {
    title: 'Examples/Production Gallery',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'The complete component gallery, loaded from the published npm package.',
            },
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {
    render: (_args, { globals }) => {
        const theme = globals.backgrounds?.value === 'light' ? 'light' : 'dark';
        const themedGalleryUrl = `${galleryUrl}?theme=${theme}`;

        return html`
            <div style="min-height: 100vh; background: var(--background); color: var(--foreground);">
                <div style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border);">
                    <a
                        href=${themedGalleryUrl}
                        target="_blank"
                        rel="noreferrer"
                        style="color: var(--foreground); font: 500 0.875rem/1.5 system-ui, sans-serif;"
                    >
                        Open the standalone production gallery
                    </a>
                </div>
                <iframe
                    src=${themedGalleryUrl}
                    title="shadcn Web Components production gallery"
                    style="display: block; width: 100%; height: calc(100vh - 3.25rem); border: 0;"
                ></iframe>
            </div>
        `;
    },
};
