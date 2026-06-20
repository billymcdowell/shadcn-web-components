# API Discovery

Resolve the public contract before implementation. Prefer sources in this order:

1. Consumer's installed `node_modules/@billy_mcdowell/shadcn-web-components/custom-elements.json` and matching package version.
2. Installed per-component `src/components/<family>/llms.md` and package `llms.txt`.
3. In this repository, `custom-elements.json`, `src/components/<family>/llms.md`, and `llms.txt`.
4. For CDN-only work, the version-pinned published artifacts:
   - `https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@<version>/custom-elements.json`
   - `https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@<version>/llms.txt`

Use `package.json#exports` to confirm valid npm subpaths. Use `dist/components/<family>/<family>.js` for a direct CDN family module; use `dist/index.js` to register all families.

For every requested component, record:

- family package subpath and all custom-element tags;
- required parent-child structure and slots;
- attributes, their types, defaults, and boolean semantics;
- DOM properties needed for live or non-string values;
- exact event names, target element, timing, and `detail` shape;
- methods, CSS parts, and CSS custom properties;
- form association, naming, validation, and accessibility requirements.

Prefer a component's `llms.md` for choice guidance and examples, and the Custom Elements Manifest for the machine-readable contract. Inspect source only to resolve a genuine documentation gap, then avoid exposing private implementation details to consumers.

Do not translate examples from `ui.shadcn.com` literally. This package follows shadcn design principles but exposes custom elements, DOM events, and slots rather than React component props.
