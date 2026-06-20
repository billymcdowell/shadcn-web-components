import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(fileURLToPath(import.meta.url), '../..');
const packageJsonPath = resolve(rootDir, 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
const packageName = packageJson.name;
const failures = [];

for (const [subpath, config] of Object.entries(packageJson.exports)) {
  const specifier = subpath === '.' ? packageName : `${packageName}/${subpath.slice(2)}`;
  const defaultTarget = typeof config === 'string' ? config : config.default;
  const typeTarget = typeof config === 'object' ? config.types : undefined;

  try {
    import.meta.resolve(specifier);
  } catch (error) {
    failures.push(`${specifier} does not resolve: ${error.message}`);
  }

  for (const [kind, target] of [['default', defaultTarget], ['types', typeTarget]]) {
    if (!target) {
      continue;
    }

    const targetPath = resolve(rootDir, target);
    if (!existsSync(targetPath)) {
      failures.push(`${specifier} ${kind} target is missing: ${target}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Export verification failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Verified ${Object.keys(packageJson.exports).length} package exports.`);
