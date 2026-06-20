import{u as o,j as n,M as a}from"./blocks-BJ_MaGaO.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BV4MdNsM.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Guides/Getting Started"}),`
`,n.jsx(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsxs(e.p,{children:[`shadcn Web Components are standards-based custom elements built with Lit. Once a
component module has been imported, its `,n.jsx(e.code,{children:"shadcn-*"}),` element can be used in HTML,
Angular templates, or any other framework that supports custom elements.`]}),`
`,n.jsxs(e.p,{children:["The examples below use ",n.jsx(e.code,{children:"shadcn-button"}),`. You can import the package root to register
every component, or use a component subpath to register only what you need.`]}),`
`,n.jsx(e.h2,{id:"package-imports",children:"Package imports"}),`
`,n.jsx(e.p,{children:"Install the package:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @billy_mcdowell/shadcn-web-components
`})}),`
`,n.jsx(e.p,{children:`Register every component from your application's JavaScript or TypeScript entry
point:`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import '@billy_mcdowell/shadcn-web-components';
`})}),`
`,n.jsx(e.p,{children:"For a smaller application bundle, import individual components instead:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import '@billy_mcdowell/shadcn-web-components/button';
import '@billy_mcdowell/shadcn-web-components/card';
`})}),`
`,n.jsx(e.p,{children:"After the import runs, use the registered elements in your HTML:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<shadcn-button variant="default">Save changes</shadcn-button>
<shadcn-button variant="outline">Cancel</shadcn-button>
`})}),`
`,n.jsx(e.p,{children:`This npm approach expects a build tool, such as Vite, Angular CLI, or another
bundler, to process the package imports.`}),`
`,n.jsx(e.h2,{id:"cdn-and-plain-html",children:"CDN and plain HTML"}),`
`,n.jsx(e.p,{children:`For a page without an npm build step, load the package from an ESM CDN. The root
URL registers every component:`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>shadcn Web Components</title>
    <script
      type="module"
      src="https://esm.sh/@billy_mcdowell/shadcn-web-components@0.0.3"
    ><\/script>
  </head>
  <body>
    <shadcn-button variant="default">Save changes</shadcn-button>

    <script>
      document.querySelector('shadcn-button').addEventListener('button-click', (event) => {
        console.log('Button clicked', event.detail);
      });
    <\/script>
  </body>
</html>
`})}),`
`,n.jsx(e.p,{children:"Load a single component when you do not need the full library:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<script
  type="module"
  src="https://esm.sh/@billy_mcdowell/shadcn-web-components@0.0.3/button"
><\/script>
`})}),`
`,n.jsxs(e.p,{children:["The examples pin ",n.jsx(e.code,{children:"0.0.3"}),` so deployments do not change unexpectedly. Update that
version deliberately when you upgrade the library.`]}),`
`,n.jsx(e.h2,{id:"angular-with-npm",children:"Angular with npm"}),`
`,n.jsx(e.p,{children:"Install the package in the Angular workspace:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @billy_mcdowell/shadcn-web-components
`})}),`
`,n.jsxs(e.p,{children:["Import all components, or selected component subpaths, once from ",n.jsx(e.code,{children:"src/main.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import '@billy_mcdowell/shadcn-web-components/button';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((error) => console.error(error));
`})}),`
`,n.jsxs(e.p,{children:[`Angular validates the elements used in its templates. Add
`,n.jsx(e.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," to each standalone component that uses custom elements:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <shadcn-button
      variant="default"
      [disabled]="isSaving"
      (button-click)="save()"
    >
      {{ isSaving ? 'Saving...' : 'Save changes' }}
    </shadcn-button>
  \`,
})
export class AppComponent {
  isSaving = false;

  save(): void {
    this.isSaving = true;
  }
}
`})}),`
`,n.jsxs(e.p,{children:["Use normal HTML attributes for static string values, property binding (",n.jsx(e.code,{children:"[value]"}),`)
for dynamic values, and event binding (`,n.jsx(e.code,{children:"(event-name)"}),") for custom events."]}),`
`,n.jsx(e.p,{children:"For an NgModule-based application, add the schema to the module instead:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
`})}),`
`,n.jsx(e.h2,{id:"angular-with-a-cdn",children:"Angular with a CDN"}),`
`,n.jsxs(e.p,{children:[`To keep the component package out of the Angular npm bundle, load it as a module
from `,n.jsx(e.code,{children:"src/index.html"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My Angular App</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script
      type="module"
      src="https://esm.sh/@billy_mcdowell/shadcn-web-components@0.0.3/button"
    ><\/script>
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
`})}),`
`,n.jsxs(e.p,{children:[`The Angular component template is the same as in the npm example, and it still
needs `,n.jsx(e.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),`. Do not also import the same component from npm;
loading both sources can attempt to register the same custom element twice.`]}),`
`,n.jsx(e.h2,{id:"next-steps",children:"Next steps"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Browse ",n.jsx(e.strong,{children:"Components"}),` in the sidebar for each element's attributes, properties,
events, slots, and examples.`]}),`
`,n.jsxs(e.li,{children:["See ",n.jsx(e.strong,{children:"Guides/Theming"})," to customize the design tokens with CSS custom properties."]}),`
`]})]})}function d(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{d as default};
