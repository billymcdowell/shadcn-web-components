# Sonner

> A notification host for brief, non-blocking feedback.

- **Package:** `@billy_mcdowell/shadcn-web-components/sonner`
- **Elements:** `<shadcn-sonner>`
- **Source:** [sonner.ts](./sonner.ts)
- **Stories:** [sonner.stories.ts](./sonner.stories.ts)

## When to use

Use Sonner for confirming completed actions or reporting transient application status.

Do not use it when the message must remain available or requires a blocking decision; use visible content or Alert Dialog.

## Import

Importing the component subpath registers every custom element in this component family:

```js
import '@billy_mcdowell/shadcn-web-components/sonner';
```

The package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).

## Example

```html
<shadcn-sonner position="bottom-right" rich-colors close-button></shadcn-sonner>
```

For Lit templates, use the same markup inside a Lit `html` tagged template. Set non-string or frequently changing values with property bindings such as `.value=${value}`; use `?disabled=${disabled}` for boolean attributes and `@event-name=${handler}` for events.

## Show notifications programmatically

Mount one `<shadcn-sonner>` host in the application, then import and call the `toast` API from any module. Keep the host mounted for as long as notifications should be available.

### Vanilla JavaScript with npm or a bundler

```html
<button id="save" type="button">Save changes</button>
<shadcn-sonner position="bottom-right" rich-colors close-button></shadcn-sonner>

<script type="module">
  import { toast } from '@billy_mcdowell/shadcn-web-components/sonner';

  document.querySelector('#save').addEventListener('click', () => {
    toast.success('Changes saved', {
      description: 'Your settings are now up to date.',
    });
  });
</script>
```

### Plain HTML from a CDN

When there is no build step, provide an import map for Lit before importing the published Sonner module:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/src/styles/tokens.css"
>

<script type="importmap">
{
  "imports": {
    "lit": "https://esm.sh/lit@3.2.1",
    "lit/decorators.js": "https://esm.sh/lit@3.2.1/decorators.js"
  }
}
</script>

<button id="notify" type="button">Show notification</button>
<shadcn-sonner position="top-center" close-button></shadcn-sonner>

<script type="module">
  import { toast } from 'https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/dist/components/sonner/sonner.js';

  document.querySelector('#notify').addEventListener('click', () => {
    toast('Hello from vanilla JavaScript');
  });
</script>
```

### Angular

Importing the package registers the custom element. Add `CUSTOM_ELEMENTS_SCHEMA` to the standalone component that owns the template, mount one host, and call `toast` from a normal Angular event handler:

```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { toast } from '@billy_mcdowell/shadcn-web-components/sonner';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <button type="button" (click)="showToast()">Save changes</button>
    <shadcn-sonner position="bottom-right" rich-colors close-button></shadcn-sonner>
  `,
})
export class AppComponent {
  showToast(): void {
    toast.success('Changes saved', {
      description: 'Your Angular settings are now up to date.',
    });
  }
}
```

For an NgModule-based application, add `CUSTOM_ELEMENTS_SCHEMA` to the NgModule `schemas` array instead.

### Update, await, and dismiss

```js
const id = toast.loading('Uploading file...');
toast.success('Upload complete', { id }); // Reuses and updates that toast.

toast.promise(saveProfile(), {
  loading: 'Saving profile...',
  success: 'Profile saved',
  error: (error) => `Could not save: ${error.message}`,
});

toast.dismiss(id); // Dismiss one toast.
toast.dismiss();   // Dismiss all toasts.
```

## Accessibility

Mount one host. Notifications use live-region semantics; do not wrap the host in another live region. Alt+T focuses notifications and Escape dismisses the newest.

## Do

- Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.
- Keep the element hierarchy shown in the example when this is a compound component.
- Listen to the documented public custom events at the component boundary.

## Don't

- Do not recreate built-in component state with parallel classes or hidden DOM.
- Do not query or style private nodes inside the shadow root.
- Do not invent React-style props such as `onValueChange`; web components use attributes/properties and DOM events.

## Public API

### `<shadcn-sonner>`

Hosts notifications created with the exported `toast` API.

**Attributes**

| Attribute | Type | Default | Purpose |
| --- | --- | --- | --- |
| `position` | `ToastPosition` | `'bottom-right'` | Placement of the notification viewport. |
| `duration` | `number` | `4000` | Default time in milliseconds before a notification closes. |
| `visible-toasts` | `number` | `3` | Maximum number of notifications displayed at once. |
| `expand` | `boolean` | `false` | Shows every notification with full spacing instead of a compact stack. |
| `rich-colors` | `boolean` | `false` | Applies status colors to success, info, warning, and error notifications. |
| `close-button` | `boolean` | `false` | Shows a dismiss button on every notification. |

**Events**

_None._

**Slots**

_None._

**CSS custom properties**

| Property | Purpose |
| --- | --- |
| `--sonner-offset` | Distance from the viewport edge. |
| `--sonner-width` | Maximum notification width. |
| `--sonner-gap` | Space between notifications. |

## Agent checklist

1. Import the `/sonner` subpath exactly once in the application bundle.
2. Use the documented element hierarchy and give interactive controls visible or accessible names.
3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.
4. Subscribe with `addEventListener` or Lit's `@event` syntax using the exact event names above.
5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.
