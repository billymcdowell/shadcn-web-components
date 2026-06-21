import{u as l,j as e,M as o}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Getting Started"}),`
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
`,e.jsx(n.p,{children:"If you use Chart, also install its peer dependency:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install chart.js
`})}),`
`,e.jsx(n.p,{children:`Load the default global styles in your document head. Version the URLs alongside
the installed package version, or host copies of these files with your app:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/dist/styles/tokens.css"
>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/dist/styles/reset.css"
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
`,e.jsxs(n.p,{children:["You do not need an import map in this setup. The bundler resolves ",e.jsx(n.code,{children:"lit"}),`,
`,e.jsx(n.code,{children:"@floating-ui/dom"}),", ",e.jsx(n.code,{children:"focus-trap"}),", and ",e.jsx(n.code,{children:"@lit/context"}),` from the package
dependencies automatically.`]}),`
`,e.jsx(n.h2,{id:"dependencies",children:"Dependencies"}),`
`,e.jsx(n.p,{children:`Runtime JavaScript dependencies are resolved differently depending on how you
deliver the library.`}),`
`,e.jsx(n.h3,{id:"npm-and-a-bundler-1",children:"npm and a bundler"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"npm install @billy_mcdowell/shadcn-web-components"})," installs ",e.jsx(n.code,{children:"lit"}),`,
`,e.jsx(n.code,{children:"@floating-ui/dom"}),", ",e.jsx(n.code,{children:"focus-trap"}),", and ",e.jsx(n.code,{children:"@lit/context"}),`. Your bundler resolves them
alongside component modules — no import map or extra install step is required for
typical apps.`]}),`
`,e.jsxs(n.p,{children:["Chart is optional: install ",e.jsx(n.code,{children:"chart.js"}),` when importing
`,e.jsx(n.code,{children:"@billy_mcdowell/shadcn-web-components/chart"}),"."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Components / subpaths"}),e.jsx(n.th,{children:"Required bare imports"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Most primitives (",e.jsx(n.code,{children:"button"}),", ",e.jsx(n.code,{children:"input"}),", ",e.jsx(n.code,{children:"badge"}),", etc.)"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"lit"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"dialog"}),", ",e.jsx(n.code,{children:"sheet"}),", ",e.jsx(n.code,{children:"drawer"}),", ",e.jsx(n.code,{children:"alert-dialog"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"lit"}),", ",e.jsx(n.code,{children:"focus-trap"}),", ",e.jsx(n.code,{children:"@lit/context"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"popover"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"lit"}),", ",e.jsx(n.code,{children:"@floating-ui/dom"}),", ",e.jsx(n.code,{children:"@lit/context"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"chart"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"lit"}),", ",e.jsx(n.code,{children:"chart.js"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Root ",e.jsx(n.code,{children:"dist/index.js"})," (all components)"]}),e.jsx(n.td,{children:"all of the above"})]})]})]}),`
`,e.jsx(n.h3,{id:"cdn-and-plain-html",children:"CDN and plain HTML"}),`
`,e.jsxs(n.p,{children:[`Distributed modules keep bare imports for the dependencies above. Add matching
entries to an import map before any module scripts. See `,e.jsx(n.a,{href:"./?path=/docs/getting-started--docs#cdn-and-plain-html",children:"HTML and CDN"}),`
for the full map used by the production gallery.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Troubleshooting:"}),` if the browser console shows
`,e.jsx(n.code,{children:'Failed to resolve module specifier "@floating-ui/dom"'}),`, you are missing an import
map entry (CDN) or have not installed the package with npm (bundler apps).`]}),`
`,e.jsx(n.h2,{id:"cdn-and-plain-html-1",children:"CDN and plain HTML"}),`
`,e.jsxs(n.p,{children:[`For a page without a build step, use the exact published files shown below. The
import map is required because the distributed modules intentionally retain bare
imports for `,e.jsx(n.code,{children:"lit"}),", ",e.jsx(n.code,{children:"@floating-ui/dom"}),", ",e.jsx(n.code,{children:"focus-trap"}),", ",e.jsx(n.code,{children:"@lit/context"}),`, and
optionally `,e.jsx(n.code,{children:"chart.js"}),". It must appear before the module script."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shadcn Web Components</title>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/dist/styles/tokens.css"
    >
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/dist/styles/reset.css"
    >

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
`,e.jsxs(n.p,{children:["The root ",e.jsx(n.code,{children:"dist/index.js"}),` registers every component and needs every import map
entry above. To register only a button, keep the `,e.jsx(n.code,{children:"lit"}),` entries and replace the
module script with:`]}),`
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
`,e.jsx(n.h2,{id:"agent-skill-for-consumer-applications",children:"Agent skill for consumer applications"}),`
`,e.jsxs(n.p,{children:[`The repository includes a reusable
`,e.jsxs(n.a,{href:"https://github.com/billymcdowell/shadcn-web-components/tree/main/.agents/skills/use-shadcn-web-components",rel:"nofollow",children:[e.jsx(n.code,{children:"use-shadcn-web-components"})," Agent Skill"]}),`
for building with the published npm package or CDN files. It helps an agent choose
components, inspect the published Custom Elements Manifest, use the correct
attributes, properties, events, slots, and compound markup, and configure plain
HTML, Angular, React, Vue, Lit, Svelte, and other frameworks.`]}),`
`,e.jsxs(n.p,{children:["Run the ",e.jsxs(n.a,{href:"https://skills.sh/docs/cli",rel:"nofollow",children:[e.jsx(n.code,{children:"skills.sh"})," CLI"]}),` from the root of the
application where you want to use the component library:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx skills add https://github.com/billymcdowell/shadcn-web-components --skill use-shadcn-web-components
`})}),`
`,e.jsxs(n.p,{children:["The installer discovers the skill in ",e.jsx(n.code,{children:".agents/skills"}),`, asks which detected
agents should receive it, and installs it for the current project by default.
Select Cursor, Claude Code, Codex, or any combination of them.`]}),`
`,e.jsx(n.p,{children:"To install non-interactively for all three agents:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx skills add https://github.com/billymcdowell/shadcn-web-components \\
  --skill use-shadcn-web-components \\
  --agent cursor \\
  --agent claude-code \\
  --agent codex \\
  --yes
`})}),`
`,e.jsxs(n.p,{children:["Add ",e.jsx(n.code,{children:"--global"}),` to either command to make the skill available across all of your
projects. Run `,e.jsx(n.code,{children:"npx skills update use-shadcn-web-components"}),` later to update an
installed copy.`]}),`
`,e.jsx(n.h3,{id:"cursor",children:"Cursor"}),`
`,e.jsxs(n.p,{children:["Choose ",e.jsx(n.code,{children:"cursor"}),` in the installer. Let Cursor select the skill from the request,
or type `,e.jsx(n.code,{children:"/"})," in Agent chat and choose ",e.jsx(n.code,{children:"use-shadcn-web-components"}),"."]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"https://cursor.com/docs/skills",rel:"nofollow",children:"Cursor Agent Skills documentation"}),"."]}),`
`,e.jsx(n.h3,{id:"claude-code",children:"Claude Code"}),`
`,e.jsxs(n.p,{children:["Choose ",e.jsx(n.code,{children:"claude-code"}),` in the installer. Claude can select the skill automatically
from its description, or you can invoke it explicitly with:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`/use-shadcn-web-components
`})}),`
`,e.jsx(n.p,{children:`Restart Claude Code if a newly installed skill does not appear in the current
session.`}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"https://code.claude.com/docs/en/skills",rel:"nofollow",children:"Claude Code Skills documentation"}),"."]}),`
`,e.jsx(n.h3,{id:"codex",children:"Codex"}),`
`,e.jsxs(n.p,{children:["Choose ",e.jsx(n.code,{children:"codex"}),` in the installer. Codex can select the skill automatically, or
you can invoke it explicitly in the CLI, IDE extension, or app:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`Use $use-shadcn-web-components to add a settings form with the published package.
`})}),`
`,e.jsxs(n.p,{children:["Run ",e.jsx(n.code,{children:"/skills"})," or type ",e.jsx(n.code,{children:"$"}),` in the CLI or IDE to confirm that Codex discovered it.
Codex normally detects skill changes automatically; restart it if the skill does
not appear.`]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"https://developers.openai.com/codex/skills",rel:"nofollow",children:"Codex Agent Skills documentation"}),"."]}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next steps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Open ",e.jsx(n.strong,{children:"Examples / Production Gallery"}),` in Storybook to see every component
loaded from the published npm release.`]}),`
`,e.jsxs(n.li,{children:["Install the ",e.jsx(n.strong,{children:"use-shadcn-web-components"}),` Agent Skill when an agent will build
the consumer integration.`]}),`
`,e.jsxs(n.li,{children:["Browse ",e.jsx(n.strong,{children:"Components"})," for attributes, properties, events, slots, and examples."]}),`
`,e.jsxs(n.li,{children:["See ",e.jsx(n.strong,{children:"Guides / Theming"})," before overriding the default design tokens."]}),`
`]})]})}function a(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default};
