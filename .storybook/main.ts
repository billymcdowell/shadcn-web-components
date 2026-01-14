import type { StorybookConfig } from '@storybook/web-components-vite';
import type { UserConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },
    docs: {},
    async viteFinal(config: UserConfig) {
        // Set base path for GitHub Pages deployment
        config.base = '/shadcn-web-components/';
        return config;
    },
};

export default config;
