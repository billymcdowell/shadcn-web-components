import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const motionFiles = new Set([
  'src/components/combobox/combobox.ts',
  'src/components/tooltip/tooltip.ts',
  'src/components/menubar/menubar.ts',
  'src/components/select/select.ts',
  'src/components/navigation-menu/navigation-menu.ts',
  'src/components/drawer/drawer.ts',
  'src/components/_internal/modal-surface.ts',
  'src/components/date-picker/date-picker.ts',
  'src/components/sheet/sheet.ts',
  'src/components/command/command.ts',
  'src/components/context-menu/context-menu.ts',
  'src/components/hover-card/hover-card.ts',
  'src/components/dialog/dialog.ts',
  'src/components/slider/slider.ts',
  'src/components/popover/popover.ts',
  'src/components/dropdown-menu/dropdown-menu.ts',
]);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path, files);
    else if (path.endsWith('.ts') && !path.endsWith('.stories.ts')) files.push(path);
  }
  return files;
}

for (const file of walk('src/components')) {
  let content = readFileSync(file, 'utf8');
  if (!content.includes("from '../../styles/index.js'")) continue;

  const isMotion = motionFiles.has(file);
  const hasFocusRing = content.includes('focusRing');

  if (isMotion) {
    content = content.replace(
      /import \{[^}]+\} from '\.\.\/\.\.\/styles\/index\.js';/,
      "import { tokensBase, tokensMotion } from '../../styles/index.js';",
    );
  } else if (hasFocusRing) {
    content = content.replace(
      /import \{[^}]+\} from '\.\.\/\.\.\/styles\/index\.js';/,
      "import { tokensBase, focusRing } from '../../styles/index.js';",
    );
  } else {
    content = content.replace(
      /import \{[^}]+\} from '\.\.\/\.\.\/styles\/index\.js';/,
      "import { tokensBase } from '../../styles/index.js';",
    );
  }

  content = content.replace(/\btokens,/g, isMotion ? 'tokensBase,\n    tokensMotion,' : 'tokensBase,');
  writeFileSync(file, content);
}

console.log('Updated token imports');
