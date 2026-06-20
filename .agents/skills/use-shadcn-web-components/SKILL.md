---
name: use-shadcn-web-components
description: Install, load, integrate, and correctly use the published @billy_mcdowell/shadcn-web-components package in consumer applications. Use when building UI with this library from npm or a CDN in plain HTML/JavaScript, Angular, React, Vue, Lit, Svelte, or another web framework; when choosing components; or when troubleshooting registration, styles, attributes, properties, events, slots, forms, TypeScript, SSR, or framework interoperability.
---

# Use shadcn Web Components

Integrate the published library as standards-based `shadcn-*` custom elements. Work in the consumer application unless the user explicitly asks to modify the library itself.

## Workflow

1. Inspect the consumer project's framework, version, package manager, entry point, global stylesheet or document shell, TypeScript setup, rendering mode, and existing library integration.
2. Determine whether the user wants npm or CDN delivery. Prefer npm with a bundler; use CDN for no-build pages or when explicitly requested. Never load the same element family from both sources.
3. Read [API discovery](references/api-discovery.md). Resolve exact tags, family imports, attributes, properties, events, slots, parts, CSS custom properties, and composition before writing markup. Do not infer an API from shadcn/ui's React components.
4. Read only the matching framework adapter. For CDN delivery in any framework, also read [HTML and CDN](references/html-cdn.md):
   - Plain HTML or CDN delivery: [HTML and CDN](references/html-cdn.md)
   - Angular: [Angular](references/angular.md)
   - React or JSX: [React](references/react.md)
   - Vue: [Vue](references/vue.md)
   - Lit, Svelte, or another environment: apply the platform rules below and consult that framework's current official custom-element documentation when syntax is uncertain.
5. Load the design-token stylesheet once. Add the reset only when the application's existing reset does not conflict. Register each component family once, preferably through tree-shakeable package subpaths.
6. Implement the documented element hierarchy. Use attributes for static primitive values, DOM properties for live or non-string values, exact DOM event names for changes, slots for composition, and supported CSS custom properties for theming.
7. Preserve accessibility semantics and documented keyboard behavior. Supply visible or accessible names, labels, descriptions, and meaningful focus order. Do not reach into shadow roots.
8. Verify registration, styling, interaction, keyboard use, events and `event.detail`, controlled updates, disabled/error/open states, form submission when relevant, TypeScript, and the production build.

## Installation Rules

For npm consumers:

```sh
npm install @billy_mcdowell/shadcn-web-components
```

Register only the families used:

```ts
import '@billy_mcdowell/shadcn-web-components/button';
import '@billy_mcdowell/shadcn-web-components/card';
```

Use the root import only when the application deliberately needs most or all components:

```ts
import '@billy_mcdowell/shadcn-web-components';
```

Load default tokens at application level. Pin the URL to the installed package version for production reproducibility:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@<version>/src/styles/tokens.css">
```

Treat `reset.css` as optional. The `/styles` export is JavaScript containing Lit `CSSResult` helpers; never use it as a browser stylesheet.

## Platform Rules

- Treat boolean attributes by presence: omit `disabled`, `open`, `required`, and similar attributes for false; never emit `disabled="false"`.
- Set live booleans, objects, arrays, and frequently changing values as element properties when the framework supports property binding.
- Listen to the documented kebab-case `CustomEvent` name. Read payloads from `event.detail`; do not invent `onValueChange` or another framework-native API.
- Preserve the documented parent-child hierarchy of compound families such as cards, dialogs, menus, selects, tabs, and accordions.
- Do not query, mutate, or style private shadow-root nodes. Use public properties, events, slots, parts, and CSS custom properties.
- Keep complete `oklch(...)` values when overriding color tokens. Apply `data-theme="light"` to a root or container for the bundled light palette.
- Guard browser-only registration imports in SSR environments according to the host framework. Render custom elements on the client when server evaluation of browser modules is unsupported.
- Wait for registration with `customElements.whenDefined('shadcn-...')` before imperative calls that depend on an upgraded element.

## Completion Gate

Do not call the integration complete until:

- The delivery method, version, token stylesheet, and imports agree.
- Every tag, property, event, slot, and hierarchy is supported by the manifest or component guide.
- The consumer framework recognizes custom elements and uses its correct property/event syntax.
- No duplicate registration source or React-component-only shadcn API remains.
- Type checking and the production build pass, and the changed interaction is exercised in a browser when feasible.

Report the components and import paths used, delivery method, framework-specific configuration, verification performed, and any browser or accessibility checks that remain manual.
