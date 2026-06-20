import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },
    docs: {},

    async viteFinal(config, { configType }) {
        config.base = configType === 'PRODUCTION' ? '/shadcn-web-components/' : '/';
        return config;
    },
};

export default config;
