import type { Preview } from '@storybook/web-components-vite';
import { setCustomElementsManifest } from '@storybook/web-components-vite';

// Import design tokens
import '../src/styles/tokens.css';
import '../src/styles/reset.css';
import '../src/styles/utilities.css';

const preview: Preview = {
    decorators: [
        (story, { globals }) => {
            const theme = globals.backgrounds?.value === 'light' ? 'light' : 'dark';

            document.documentElement.dataset.theme = theme;

            return story();
        },
    ],

    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            options: {
                dark: {
                    name: 'dark',
                    value: 'oklch(0.145 0 0)',
                },

                light: {
                    name: 'light',
                    value: 'oklch(1 0 0)',
                }
            }
        },
        docs: {
            toc: true,
        },
    },

    tags: ['autodocs'],

    initialGlobals: {
        backgrounds: {
            value: 'dark'
        }
    }
};

export default preview;
