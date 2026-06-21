import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const stylesDir = join(root, 'dist', 'styles');

mkdirSync(stylesDir, { recursive: true });

for (const file of ['tokens.css', 'reset.css']) {
  copyFileSync(join(root, 'src', 'styles', file), join(stylesDir, file));
}
