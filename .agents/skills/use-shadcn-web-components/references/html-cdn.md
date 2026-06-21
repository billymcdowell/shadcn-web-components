# Plain HTML and CDN

Use npm imports in browser JavaScript only when a bundler resolves bare specifiers. For a no-build page, load version-pinned CSS, an import map for runtime dependencies, and direct package modules in that order:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@<version>/dist/styles/tokens.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@<version>/dist/styles/reset.css">

<script type="importmap">
  {
    "imports": {
      "lit": "https://esm.sh/lit@3.2.1",
      "lit/decorators.js": "https://esm.sh/lit@3.2.1/decorators.js",
      "@floating-ui/dom": "https://esm.sh/@floating-ui/dom@1.7.4",
      "focus-trap": "https://esm.sh/focus-trap@7.8.0",
      "@lit/context": "https://esm.sh/@lit/context@1.1.6",
      "chart.js": "https://esm.sh/chart.js@4.5.1",
      "chart.js/": "https://esm.sh/chart.js@4.5.1/"
    }
  }
</script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@<version>/dist/components/button/button.js"></script>
```

## Dependency matrix

Include only the import map entries required by the components you load:

| Components / subpaths | Required bare imports |
|-----------------------|----------------------|
| Most primitives (`button`, `input`, `badge`, etc.) | `lit` |
| `dialog`, `sheet`, `drawer`, `alert-dialog` | `lit`, `focus-trap`, `@lit/context` |
| `popover` | `lit`, `@floating-ui/dom`, `@lit/context` |
| `chart` | `lit`, `chart.js` |
| Root `dist/index.js` (all components) | all of the above |

Use `dist/index.js` to register all families. Do not use a transformed `+esm` package endpoint; direct distributed modules preserve registration side effects. Keep the import map before module scripts.

If the browser reports `Failed to resolve module specifier "@floating-ui/dom"`, add the missing import map entry or install the package with npm.

Use attributes for initial primitives and DOM properties for programmatic state:

```html
<shadcn-checkbox id="updates" name="updates" value="yes"></shadcn-checkbox>
<script>
  const checkbox = document.querySelector('#updates');
  checkbox.checked = currentValue;
  checkbox.addEventListener('checkbox-change', (event) => {
    currentValue = event.detail.checked;
  });
</script>
```

Confirm the actual event payload in the component guide or manifest. Pin package and dependency versions in production. Apply CSP allowances or self-host the same published files when the application disallows external scripts or import maps.
