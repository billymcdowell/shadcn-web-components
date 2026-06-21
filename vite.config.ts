import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { visualizer } from 'rollup-plugin-visualizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    base: '/shadcn-web-components/',
    plugins: process.env.ANALYZE
        ? [
              visualizer({
                  filename: 'stats.html',
                  gzipSize: true,
                  brotliSize: true,
                  open: false,
              }),
          ]
        : [],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: 'index',
        },
        rollupOptions: {
            external: [
                'lit',
                /^lit\//,
                'chart.js',
                /^chart\.js\//,
                '@floating-ui/dom',
                'focus-trap',
                '@lit/context',
            ],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].js',
            },
        },
        sourcemap: true,
        outDir: 'dist',
        emptyOutDir: false,
    },
});
