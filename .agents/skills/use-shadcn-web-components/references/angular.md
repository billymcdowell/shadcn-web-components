# Angular

Import package registration once, normally from `src/main.ts`, or load CDN scripts from `src/index.html`. Do not combine both for the same family. For CDN import maps and runtime dependencies, see [HTML and CDN](html-cdn.md).

Add `CUSTOM_ELEMENTS_SCHEMA` to every standalone component using the elements:

```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <shadcn-button
      variant="default"
      [disabled]="isSaving"
      (button-click)="save($event)"
    >
      Save
    </shadcn-button>
  `,
})
export class AppComponent {
  isSaving = false;
  save(event: Event): void {}
}
```

For NgModule applications, add `CUSTOM_ELEMENTS_SCHEMA` to the declaring module's `schemas` array. Do not use `NO_ERRORS_SCHEMA` merely to silence custom-element errors.

Use literal attributes for static strings, `[property]` for dynamic properties and booleans, `[attr.name]` only when an attribute specifically is required, and `(documented-event)` for custom DOM events. Cast a custom event in TypeScript code when reading a typed `detail` payload.

Add the token stylesheet through `index.html`, the workspace `styles` configuration, or the application's global CSS pipeline. For SSR, load registration only where browser globals are available if the package version cannot be evaluated server-side.
