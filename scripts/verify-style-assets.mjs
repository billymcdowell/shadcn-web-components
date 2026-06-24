import { existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const requiredStyleAssets = [
  join(root, 'dist', 'styles', 'tokens.css'),
  join(root, 'dist', 'styles', 'reset.css'),
];

const missing = requiredStyleAssets.filter((filePath) => !existsSync(filePath));
const empty = requiredStyleAssets.filter((filePath) => existsSync(filePath) && statSync(filePath).size === 0);

if (missing.length > 0 || empty.length > 0) {
  const lines = [];

  if (missing.length > 0) {
    lines.push('Missing required style assets:');
    for (const filePath of missing) lines.push(`- ${filePath}`);
  }

  if (empty.length > 0) {
    lines.push('Empty required style assets:');
    for (const filePath of empty) lines.push(`- ${filePath}`);
  }

  throw new Error(`${lines.join('\n')}\nPublish aborted.`);
}

console.log('Verified required style assets in dist/styles.');
