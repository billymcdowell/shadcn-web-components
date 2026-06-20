#!/usr/bin/env node

import storybookPackage from 'storybook/package.json' with { type: 'json' };
import { cache } from 'storybook/internal/common';
import { buildDevStandalone } from 'storybook/internal/core-server';

const args = process.argv.slice(2);

function readOptionValue(shortName, longName, fallback) {
    let value = fallback;

    for (let index = 0; index < args.length; index += 1) {
        const arg = args[index];

        if (arg === shortName || arg === longName) {
            value = args[index + 1] ?? value;
            index += 1;
            continue;
        }

        if (arg.startsWith(`${longName}=`)) {
            value = arg.slice(longName.length + 1);
        }
    }

    return value;
}

function hasFlag(name) {
    return args.includes(name);
}

const port = Number.parseInt(readOptionValue('-p', '--port', process.env.SBCONFIG_PORT ?? '6006'), 10);
const host = readOptionValue('-h', '--host', process.env.SBCONFIG_HOSTNAME);

if (!Number.isInteger(port)) {
    console.error('Storybook port must be a number.');
    process.exit(1);
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
    await buildDevStandalone({
        cache,
        ci: hasFlag('--ci'),
        configDir: './.storybook',
        exactPort: hasFlag('--exact-port'),
        host,
        noOpen: hasFlag('--no-open'),
        open: !hasFlag('--no-open'),
        packageJson: storybookPackage,
        port,
        smokeTest: hasFlag('--smoke-test'),
        versionUpdates: false,
    });
} catch (error) {
    console.error(error);
    process.exit(1);
}
