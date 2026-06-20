import type { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    staticDirs: [{ from: '../examples', to: '/examples' }],
    addons: ['@storybook/addon-a11y', {
        name: '@storybook/addon-docs',
        options: {
            mdxPluginOptions: {
                mdxCompileOptions: {
                    remarkPlugins: [remarkGfm],
                },
            },
        },
    },],
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
