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

    // Set base for the manager (the Storybook UI)
    managerHead: (head) => `
        ${head}
        <base href="/shadcn-web-components/" />
    `,

    // Set base for the preview iframe (where stories render)
    async viteFinal(config: UserConfig) {
        config.base = '/shadcn-web-components/';
        return config;
    },
};

export default config;
