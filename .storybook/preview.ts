import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';

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
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: 'oklch(0.145 0 0)',
                },
                {
                    name: 'light',
                    value: '#ffffff',
                },
            ],
        },
        docs: {
            toc: true,
        },
    },
    tags: ['autodocs'],
};

export default preview;
