# Plain HTML and CDN

Use npm imports in browser JavaScript only when a bundler resolves bare specifiers. For a no-build page, load version-pinned CSS, an import map for Lit, and direct package modules in that order:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@<version>/src/styles/tokens.css">

<script type="importmap">
  {
    "imports": {
      "lit": "https://esm.sh/lit@3.2.1",
      "lit/decorators.js": "https://esm.sh/lit@3.2.1/decorators.js"
    }
  }
</script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@<version>/dist/components/button/button.js"></script>
```

Use `dist/index.js` to register all families. Do not use a transformed `+esm` package endpoint; direct distributed modules preserve registration side effects. Keep the import map before module scripts.

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

Confirm the actual event payload in the component guide or manifest. Pin package and Lit versions in production. Apply CSP allowances or self-host the same published files when the application disallows external scripts or import maps.
