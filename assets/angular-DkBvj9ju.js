import{u as a,j as e,M as o}from"./blocks-BvVVn4M2.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B6ecvixb.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Guides/Angular"}),`
`,e.jsx(n.h1,{id:"angular-guide",children:"Angular Guide"}),`
`,e.jsx(n.p,{children:`shadcn Web Components are standards-based custom elements, so Angular uses them
through normal property bindings and DOM events. No Angular wrapper package is
required.`}),`
`,e.jsx(n.h2,{id:"install-and-register-components",children:"Install and register components"}),`
`,e.jsx(n.p,{children:"Install the package:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @billy_mcdowell/shadcn-web-components
`})}),`
`,e.jsx(n.p,{children:`Register each component family once in the browser entry point. Subpath imports
keep the application bundle focused on the components it uses:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// src/main.ts
import '@billy_mcdowell/shadcn-web-components/button';
import '@billy_mcdowell/shadcn-web-components/card';
import '@billy_mcdowell/shadcn-web-components/field';
import '@billy_mcdowell/shadcn-web-components/input';
import '@billy_mcdowell/shadcn-web-components/switch';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch(console.error);
`})}),`
`,e.jsx(n.p,{children:`Import the package root only when the application deliberately uses most of the
library:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@billy_mcdowell/shadcn-web-components';
`})}),`
`,e.jsxs(n.p,{children:[`Load the design tokens globally. For an Angular CLI application, add the token
file before the application's stylesheet in `,e.jsx(n.code,{children:"angular.json"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@billy_mcdowell/shadcn-web-components/src/styles/tokens.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
`})}),`
`,e.jsxs(n.p,{children:["The package reset is optional. Add ",e.jsx(n.code,{children:"src/styles/reset.css"})," before ",e.jsx(n.code,{children:"src/styles.css"}),`
only when it does not conflict with the application's existing reset. The
`,e.jsx(n.code,{children:"/styles"})," package export contains Lit helpers and is not a global stylesheet."]}),`
`,e.jsx(n.h2,{id:"standalone-components",children:"Standalone components"}),`
`,e.jsxs(n.p,{children:["Add ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),` to every standalone component whose template uses
the library. Keep the schema local instead of using `,e.jsx(n.code,{children:"NO_ERRORS_SCHEMA"}),`, which
would also hide unrelated template mistakes.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

type SwitchChange = CustomEvent<{ checked: boolean; value: string }>;

@Component({
  selector: 'app-notifications',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <shadcn-card>
      <shadcn-card-header>
        <shadcn-card-title>Notifications</shadcn-card-title>
        <shadcn-card-description>
          Choose whether to receive product updates.
        </shadcn-card-description>
      </shadcn-card-header>
      <shadcn-card-content>
        <label>
          <shadcn-switch
            value="enabled"
            [checked]="notificationsEnabled()"
            (switch-change)="onNotificationsChange($event)"
          ></shadcn-switch>
          Product updates
        </label>
      </shadcn-card-content>
    </shadcn-card>
  \`,
})
export class NotificationsComponent {
  readonly notificationsEnabled = signal(false);

  onNotificationsChange(event: Event): void {
    this.notificationsEnabled.set((event as SwitchChange).detail.checked);
  }
}
`})}),`
`,e.jsx(n.h2,{id:"ngmodule-applications",children:"NgModule applications"}),`
`,e.jsxs(n.p,{children:["For an NgModule application, put ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),` on each module that
declares a component using the custom elements:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [BrowserModule],
  bootstrap: [SettingsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
`})}),`
`,e.jsxs(n.p,{children:[`The component registration imports still belong in the application entry point;
the schema only teaches Angular that `,e.jsx(n.code,{children:"shadcn-*"})," tags are valid."]}),`
`,e.jsx(n.h2,{id:"angular-template-bindings",children:"Angular template bindings"}),`
`,e.jsx(n.p,{children:`Use literal attributes for static strings, property bindings for live values,
and the documented kebab-case event names for output:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<shadcn-button
  variant="outline"
  type="button"
  [disabled]="isSaving()"
  (button-click)="save()"
>
  {{ isSaving() ? 'Saving...' : 'Save changes' }}
</shadcn-button>
`})}),`
`,e.jsxs(n.p,{children:["Prefer ",e.jsx(n.code,{children:'[disabled]="condition"'}),` for booleans. A boolean HTML attribute is true
whenever it is present, so `,e.jsx(n.code,{children:'disabled="false"'}),` still disables the component. Use
`,e.jsx(n.code,{children:"[attr.aria-label]"})," or another ",e.jsx(n.code,{children:"attr."}),` binding only when an attribute, rather
than a component property, is required.`]}),`
`,e.jsxs(n.p,{children:["Custom events arrive as ",e.jsx(n.code,{children:"Event"}),` in a template handler. Narrow them before reading
`,e.jsx(n.code,{children:"detail"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type InputChange = CustomEvent<{ value: string }>;

onEmailChange(event: Event): void {
  const { value } = (event as InputChange).detail;
  this.email.set(value);
}
`})}),`
`,e.jsxs(n.p,{children:["Do not invent Angular-style outputs such as ",e.jsx(n.code,{children:"(valueChange)"}),`. Use the exact public
events listed in each component guide, such as `,e.jsx(n.code,{children:"(input-change)"}),`,
`,e.jsx(n.code,{children:"(switch-change)"}),", and ",e.jsx(n.code,{children:"(select-change)"}),"."]}),`
`,e.jsx(n.h2,{id:"signals",children:"Signals"}),`
`,e.jsx(n.p,{children:`Signals work well as the source of truth for live component properties. Read the
signal in the template and update it from the component event:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Component, CUSTOM_ELEMENTS_SCHEMA, computed, signal } from '@angular/core';

type InputChange = CustomEvent<{ value: string }>;

@Component({
  selector: 'app-profile-name',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <shadcn-field label="Display name">
      <shadcn-input
        [value]="name()"
        [error]="nameTooShort()"
        (input-change)="setName($event)"
      ></shadcn-input>
    </shadcn-field>
    <shadcn-badge variant="secondary">{{ nameLength() }} characters</shadcn-badge>
  \`,
})
export class ProfileNameComponent {
  readonly name = signal('Ada');
  readonly nameLength = computed(() => this.name().length);
  readonly nameTooShort = computed(() => this.nameLength() < 2);

  setName(event: Event): void {
    this.name.set((event as InputChange).detail.value);
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Import the ",e.jsx(n.code,{children:"/badge"}),", ",e.jsx(n.code,{children:"/field"}),", and ",e.jsx(n.code,{children:"/input"}),` component families for this example.
Use an `,e.jsx(n.code,{children:"effect"}),` only for genuine side effects; ordinary component state should
usually be expressed with `,e.jsx(n.code,{children:"signal"})," and ",e.jsx(n.code,{children:"computed"}),"."]}),`
`,e.jsx(n.h2,{id:"rxjs-events",children:"RxJS events"}),`
`,e.jsxs(n.p,{children:[`Angular event binding is simplest for one event. Use RxJS when the event needs an
observable pipeline such as debouncing, filtering, or composition. The package's
exports also provide the element class for a typed `,e.jsx(n.code,{children:"ElementRef"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  DestroyRef,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Input } from '@billy_mcdowell/shadcn-web-components/input';
import { debounceTime, fromEvent, map } from 'rxjs';

type InputChange = CustomEvent<{ value: string }>;

@Component({
  selector: 'app-search',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <shadcn-field label="Search components">
      <shadcn-input #search type="search"></shadcn-input>
    </shadcn-field>
  \`,
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('search', { static: true })
  private search!: ElementRef<Input>;

  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    fromEvent<InputChange>(this.search.nativeElement, 'input-change')
      .pipe(
        map((event) => event.detail.value),
        debounceTime(250),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((query) => this.runSearch(query));
  }

  private runSearch(query: string): void {
    // Send the debounced query to the application's search service.
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Passing the injected ",e.jsx(n.code,{children:"DestroyRef"}),` is important outside an injection context such
as `,e.jsx(n.code,{children:"ngAfterViewInit"}),`; it guarantees that the subscription is removed with the
component.`]}),`
`,e.jsx(n.h2,{id:"angular-forms",children:"Angular forms"}),`
`,e.jsxs(n.p,{children:[`The components expose DOM properties and custom events, not Angular
`,e.jsx(n.code,{children:"ControlValueAccessor"})," providers. Bind a reactive ",e.jsx(n.code,{children:"FormControl"}),` explicitly and
mark it touched on the component's blur event:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

type InputChange = CustomEvent<{ value: string }>;

@Component({
  selector: 'app-email-field',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <shadcn-field
      label="Email"
      helper="We will only use this for account notifications."
      [error]="email.invalid && email.touched ? 'Enter a valid email address.' : undefined"
    >
      <shadcn-input
        type="email"
        name="email"
        autocomplete="email"
        required
        [value]="email.value ?? ''"
        [error]="email.invalid && email.touched"
        (input-change)="updateEmail($event)"
        (input-blur)="email.markAsTouched()"
      ></shadcn-input>
    </shadcn-field>
  \`,
})
export class EmailFieldComponent {
  readonly email = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email],
  });

  updateEmail(event: Event): void {
    this.email.setValue((event as InputChange).detail.value);
  }
}
`})}),`
`,e.jsxs(n.p,{children:["For repeated use with ",e.jsx(n.code,{children:"formControlName"}),`, create an application-owned Angular
directive or wrapper that implements `,e.jsx(n.code,{children:"ControlValueAccessor"}),` for the relevant
public event and property. Do not reach into a component's shadow root.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"shadcn-select"})," is form-associated and participates in native ",e.jsx(n.code,{children:"FormData"}),` when it
has a `,e.jsx(n.code,{children:"name"}),`, but Angular reactive forms still require the explicit binding above
or a `,e.jsx(n.code,{children:"ControlValueAccessor"})," adapter."]}),`
`,e.jsx(n.h2,{id:"ssr-and-hydration",children:"SSR and hydration"}),`
`,e.jsxs(n.p,{children:["Keep registration imports in the browser entry point (",e.jsx(n.code,{children:"src/main.ts"}),`) when the
application has separate browser and server entries. If shared bootstrap code
must load the library, defer registration until browser rendering:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { afterNextRender, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`<shadcn-button type="button">Continue</shadcn-button>\`,
})
export class AppComponent {
  constructor() {
    afterNextRender(() => {
      void import('@billy_mcdowell/shadcn-web-components/button');
    });
  }
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"afterNextRender"}),` does not run during server rendering. Expect the element to
upgrade after the browser import completes; wait for
`,e.jsx(n.code,{children:"customElements.whenDefined('shadcn-button')"}),` before calling an imperative
component method. Keep initial server and client markup stable to avoid hydration
mismatches.`]}),`
`,e.jsx(n.h2,{id:"typescript-and-imperative-access",children:"TypeScript and imperative access"}),`
`,e.jsxs(n.p,{children:[`Importing a family registers its tags and supplies its element class. Use that
class with `,e.jsx(n.code,{children:"ElementRef"}),", ",e.jsx(n.code,{children:"viewChild"}),", ",e.jsx(n.code,{children:"querySelector"}),", or ",e.jsx(n.code,{children:"createElement"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { ElementRef, viewChild } from '@angular/core';
import { Input } from '@billy_mcdowell/shadcn-web-components/input';

readonly emailInput = viewChild.required<ElementRef<Input>>('emailInput');

focusEmail(): void {
  this.emailInput().nativeElement.focus();
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<shadcn-input #emailInput type="email"></shadcn-input>
`})}),`
`,e.jsxs(n.p,{children:[`Prefer template property and event bindings for normal state flow. Reserve
imperative access for public methods such as `,e.jsx(n.code,{children:"focus()"}),` and for observable event
pipelines.`]}),`
`,e.jsx(n.h2,{id:"angular-specific-checklist",children:"Angular-specific checklist"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Register each imported component family once and load ",e.jsx(n.code,{children:"tokens.css"})," globally."]}),`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," to each standalone component or declaring module."]}),`
`,e.jsxs(n.li,{children:[`Use property binding for live values and booleans; never write
`,e.jsx(n.code,{children:'disabled="false"'}),"."]}),`
`,e.jsxs(n.li,{children:["Handle the documented DOM event and read its typed ",e.jsx(n.code,{children:"event.detail"})," payload."]}),`
`,e.jsx(n.li,{children:`Keep compound markup intact, including every select trigger, value, content,
and item element.`}),`
`,e.jsxs(n.li,{children:["Bridge Angular forms explicitly; do not assume ",e.jsx(n.code,{children:"formControlName"})," is supported."]}),`
`,e.jsx(n.li,{children:"Keep registration browser-only in SSR applications and preserve stable markup."}),`
`,e.jsx(n.li,{children:`Test keyboard use, focus visibility, disabled and error states, event handling,
and the production Angular build.`}),`
`]})]})}function d(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default};
