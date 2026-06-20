import type { Preview } from '@storybook/web-components-vite';
import { setCustomElementsManifest } from '@storybook/web-components-vite';

// Import design tokens
import '../src/styles/tokens.css';
import '../src/styles/reset.css';
import '../src/styles/utilities.css';

const preview: Preview = {
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
                    value: '#ffffff',
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
