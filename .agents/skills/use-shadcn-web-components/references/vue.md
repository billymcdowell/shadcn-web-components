# Vue

For npm delivery, import registration once from the application entry or the consuming SFC. For CDN delivery, load the import map and direct module from the application HTML shell and omit the npm registration import. Never combine both. See [HTML and CDN](html-cdn.md) for the full import map and dependency matrix. Configure Vue's template compiler to treat `shadcn-*` tags as custom elements. With Vite:

```ts
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('shadcn-'),
        },
      },
    }),
  ],
});
```

For in-browser template compilation, set `app.config.compilerOptions.isCustomElement`. Prefer the narrow `shadcn-` predicate over treating every hyphenated tag as external.

Use literal attributes for static values, `:` bindings for dynamic primitives, `.prop` when a value must be assigned as a DOM property, and `@exact-event-name` for documented custom events:

```vue
<script setup lang="ts">
import '@billy_mcdowell/shadcn-web-components/checkbox';

const checked = defineModel<boolean>({ default: false });
const onChange = (event: CustomEvent<{ checked: boolean }>) => {
  checked.value = event.detail.checked;
};
</script>

<template>
  <shadcn-checkbox
    :checked.prop="checked"
    @checkbox-change="onChange"
  />
</template>
```

Confirm `detail` from the component guide. If Vue/TypeScript lacks template types for a tag, add narrow declarations derived from package types or `custom-elements.json`. For Nuxt or SSR, import registration in a client-only plugin or client boundary when server evaluation is not browser-safe.

For Lit, use `.property=${value}`, `?boolean=${value}`, and `@event=${handler}`. For Svelte and other frameworks, consult current official custom-element interop syntax, then apply the same public contract and platform rules.
