# React and JSX

For npm delivery, import each registration subpath once in a client entry or client component. For CDN delivery, load the import map and direct module from the application document shell and omit the npm registration import. Never combine both. See [HTML and CDN](html-cdn.md) for the full import map and dependency matrix. Use lowercase custom-element tags in JSX.

React 19 supports custom-element properties and `CustomEvent` listeners. Spell custom event props as lowercase `on` plus the exact event name:

```tsx
import '@billy_mcdowell/shadcn-web-components/checkbox';

export function Preferences() {
  return (
    <shadcn-checkbox
      checked={true}
      oncheckbox-change={(event) => console.log(event.detail.checked)}
    />
  );
}
```

Use the exact event from each component guide. Verify behavior against the consumer's React version. For React 18 or tooling that rejects kebab-case custom-event props, use a ref and effect with `addEventListener`, and remove the listener during cleanup:

```tsx
const ref = useRef<HTMLElement | null>(null);

useEffect(() => {
  const element = ref.current;
  if (!element) return;
  const handleChange = (event: Event) => {
    const detail = (event as CustomEvent<{ checked: boolean }>).detail;
    setChecked(detail.checked);
  };
  element.addEventListener('checkbox-change', handleChange);
  return () => element.removeEventListener('checkbox-change', handleChange);
}, []);
```

Add project-local JSX intrinsic-element declarations when TypeScript does not know the tags. Derive element and event types from the package declarations or `custom-elements.json`; do not use an unbounded `[tag: string]: any` index signature.

For Next.js or another SSR framework, put side-effect registration in a client boundary or browser-only entry. Avoid defining the same custom element in multiple independently evaluated bundles. Hydration output should use stable primitive attributes; set complex live properties after the element is available when necessary.
