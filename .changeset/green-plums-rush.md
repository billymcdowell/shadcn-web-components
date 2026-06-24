"@billy_mcdowell/shadcn-web-components": patch
---

Ensure `dist/styles/tokens.css` and `dist/styles/reset.css` are always present in published packages by adding an explicit style asset verification step and wiring style-related changes into release workflow triggers.
