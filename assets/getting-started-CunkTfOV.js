import{u as o,j as e,M as l}from"./blocks-Bm4vz6IN.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CBkYFfHe.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Guides/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:`shadcn Web Components are standards-based custom elements built with Lit. Setup
has two parts:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Load the global design tokens so component colors inherit valid CSS values."}),`
`,e.jsxs(n.li,{children:["Import component modules so their ",e.jsx(n.code,{children:"shadcn-*"})," elements are registered."]}),`
`]}),`
`,e.jsx(n.p,{children:`Component layout and interaction styles live inside each element's shadow root.
The global token stylesheet supplies colors, typography, radii, shadows, and
other values shared across those shadow roots. The reset is recommended for a
consistent page baseline, but it is optional.`}),`
`,e.jsx(n.h2,{id:"npm-and-a-bundler",children:"npm and a bundler"}),`
`,e.jsx(n.p,{children:`Use this path with Vite, Angular CLI, or another tool that resolves npm package
imports.`}),`
`,e.jsx(n.p,{children:"Install the package:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @billy_mcdowell/shadcn-web-components
`})}),`
`,e.jsx(n.p,{children:`Load the default global styles in your document head. Version the URLs alongside
the installed package version, or host copies of these files with your app:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/src/styles/tokens.css"
>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/src/styles/reset.css"
>
`})}),`
`,e.jsx(n.p,{children:"Register every component from your JavaScript or TypeScript entry point:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@billy_mcdowell/shadcn-web-components';
`})}),`
`,e.jsx(n.p,{children:"For a smaller application bundle, import only the component modules you use:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@billy_mcdowell/shadcn-web-components/button';
import '@billy_mcdowell/shadcn-web-components/card';
`})}),`
`,e.jsx(n.p,{children:"Then use the registered elements in your templates:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<shadcn-button variant="default">Save changes</shadcn-button>
<shadcn-button variant="outline">Cancel</shadcn-button>
`})}),`
`,e.jsxs(n.p,{children:["You do not need an import map in this setup. The bundler resolves ",e.jsx(n.code,{children:"lit"}),` and the
package's other JavaScript dependencies.`]}),`
`,e.jsx(n.h2,{id:"cdn-and-plain-html",children:"CDN and plain HTML"}),`
`,e.jsxs(n.p,{children:[`For a page without a build step, use the exact published files shown below. The
import map is required because the distributed modules intentionally retain bare
imports for `,e.jsx(n.code,{children:"lit"})," and ",e.jsx(n.code,{children:"lit/decorators.js"}),". It must appear before the module script."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shadcn Web Components</title>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/src/styles/tokens.css"
    >
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/src/styles/reset.css"
    >

    <script type="importmap">
      {
        "imports": {
          "lit": "https://esm.sh/lit@3.2.1",
          "lit/decorators.js": "https://esm.sh/lit@3.2.1/decorators.js"
        }
      }
    <\/script>
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/dist/index.js"
    ><\/script>
  </head>
  <body>
    <shadcn-button variant="default">Save changes</shadcn-button>
  </body>
</html>
`})}),`
`,e.jsxs(n.p,{children:["The root ",e.jsx(n.code,{children:"dist/index.js"}),` registers every component. To register only a button,
keep the same styles and import map but replace the module script with:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/dist/components/button/button.js"
><\/script>
`})}),`
`,e.jsxs(n.p,{children:["Use the direct ",e.jsx(n.code,{children:"dist"})," files rather than a transformed ",e.jsx(n.code,{children:"+esm"}),` package endpoint.
The direct root module preserves the registration side effects for every custom
element. Pin the package and Lit versions so production deployments only change
when you deliberately upgrade them.`]}),`
`,e.jsxs(n.p,{children:["See the complete working setup in the ",e.jsx(n.a,{href:"./examples/example.html",children:"production component gallery"}),"."]}),`
`,e.jsx(n.h2,{id:"global-styles-and-themes",children:"Global styles and themes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"tokens.css"}),` defines complete CSS color values such as
`,e.jsx(n.code,{children:"--background: oklch(0.145 0 0)"}),". Keep the ",e.jsx(n.code,{children:"oklch(...)"}),` wrapper when overriding a
color; a channel-only value such as `,e.jsx(n.code,{children:"0.145 0 0"}),` is not valid when a component uses
`,e.jsx(n.code,{children:"background: var(--background)"}),"."]}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:'data-theme="light"'})," on the root element to use the bundled light palette:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html lang="en" data-theme="light">
`})}),`
`,e.jsx(n.p,{children:"Override tokens after the default stylesheet to create your own theme:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --primary: oklch(0.62 0.19 255);
  --primary-foreground: oklch(0.985 0 0);
  --radius: 0.75rem;
}
`})}),`
`,e.jsxs(n.p,{children:["The JavaScript subpath ",e.jsx(n.code,{children:"@billy_mcdowell/shadcn-web-components/styles"}),` exports Lit
`,e.jsx(n.code,{children:"CSSResult"}),` helpers for component authors. It is not a browser stylesheet and
should not be used in a CSS `,e.jsx(n.code,{children:"@import"})," or ",e.jsx(n.code,{children:"<link>"}),"."]}),`
`,e.jsx(n.h2,{id:"events-and-properties",children:"Events and properties"}),`
`,e.jsx(n.p,{children:"Listen for component events with normal DOM APIs:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<shadcn-button id="save">Save changes</shadcn-button>
<script>
  document.querySelector('#save').addEventListener('button-click', (event) => {
    console.log('Button clicked', event.detail);
  });
<\/script>
`})}),`
`,e.jsx(n.p,{children:`Use HTML attributes for static string and boolean values. Set JavaScript
properties when passing non-string values or controlling a component directly.`}),`
`,e.jsx(n.h2,{id:"angular-with-npm",children:"Angular with npm"}),`
`,e.jsxs(n.p,{children:[`Install the package, load the global styles from your app shell, and import all
components or selected subpaths once from `,e.jsx(n.code,{children:"src/main.ts"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@billy_mcdowell/shadcn-web-components/button';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((error) => console.error(error));
`})}),`
`,e.jsxs(n.p,{children:["Add ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),` to each standalone component that uses custom
elements:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
`,e.jsxs(n.p,{children:["For an NgModule application, add ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),` to the module's
`,e.jsx(n.code,{children:"schemas"}),` array instead. Use attributes for static strings, property binding for
dynamic values, and event binding for custom events.`]}),`
`,e.jsx(n.h2,{id:"angular-with-a-cdn",children:"Angular with a CDN"}),`
`,e.jsxs(n.p,{children:[`To keep the component library out of the Angular bundle, put the same stylesheet
links and import map from the plain HTML example in `,e.jsx(n.code,{children:"src/index.html"}),`, followed by
the direct component module:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/dist/components/button/button.js"
><\/script>
`})}),`
`,e.jsxs(n.p,{children:["The Angular template still needs ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),`. Do not also import the
same component from npm, because loading both sources can register the same custom
element twice.`]}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next steps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Open ",e.jsx(n.strong,{children:"Examples / Production Gallery"}),` in Storybook to see every component
loaded from the published npm release.`]}),`
`,e.jsxs(n.li,{children:["Browse ",e.jsx(n.strong,{children:"Components"})," for attributes, properties, events, slots, and examples."]}),`
`,e.jsxs(n.li,{children:["See ",e.jsx(n.strong,{children:"Guides / Theming"})," before overriding the default design tokens."]}),`
`]})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default};
