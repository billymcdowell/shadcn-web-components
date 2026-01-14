import{i as P,a as $,x as n}from"./lit-element-B21iCxvW.js";import{t as D}from"./custom-element-C028faeO.js";import{t as U}from"./index-BVWPfyNL.js";import"./input-CJkEiHQR.js";import"./button-B2IsNlAX.js";import"./property-CJLssJ-s.js";import"./query-BApjzB0v.js";var A=Object.getOwnPropertyDescriptor,H=(u,c,O,l)=>{for(var r=l>1?void 0:l?A(c,O):c,a=u.length-1,h;a>=0;a--)(h=u[a])&&(r=h(r)||r);return r};let d=class extends ${render(){return n`
      <div part="input-group" class="input-group">
        <div class="input-group__prefix">
          <slot name="prefix"></slot>
        </div>
        <div class="input-group__control">
          <slot></slot>
        </div>
        <div class="input-group__suffix">
          <slot name="suffix"></slot>
        </div>
      </div>
    `}};d.styles=[U,P`
      :host {
        display: block;
      }

      .input-group {
        display: flex;
        width: 100%;
        align-items: stretch;
      }

      .input-group__prefix,
      .input-group__suffix {
        display: flex;
        align-items: center;
        padding: 0 var(--spacing-3);
        font-size: var(--font-size-sm);
        background-color: var(--muted);
        color: var(--muted-foreground);
        border: 1px solid var(--input);
        white-space: nowrap;
        flex-shrink: 0;
      }

      .input-group__prefix {
        border-right: none;
        border-top-left-radius: var(--radius-md);
        border-bottom-left-radius: var(--radius-md);
      }

      .input-group__suffix {
        border-left: none;
        border-top-right-radius: var(--radius-md);
        border-bottom-right-radius: var(--radius-md);
      }

      .input-group__control {
        flex: 1;
        display: flex;
      }

      /* Hide empty prefix/suffix */
      .input-group__prefix:empty,
      .input-group__suffix:empty {
        display: none;
      }

      /* Set border radius via CSS custom properties */
      ::slotted(*) {
        flex: 1;
        --input-border-radius: 0;
      }

      /* Only prefix - remove left radius */
      .input-group:has(.input-group__prefix:not(:empty)):has(.input-group__suffix:empty) ::slotted(*) {
        --input-border-radius: 0 var(--radius-md) var(--radius-md) 0;
      }

      /* Only suffix - remove right radius */
      .input-group:has(.input-group__prefix:empty):has(.input-group__suffix:not(:empty)) ::slotted(*) {
        --input-border-radius: var(--radius-md) 0 0 var(--radius-md);
      }

      /* Both prefix and suffix - no radius */
      .input-group:has(.input-group__prefix:not(:empty)):has(.input-group__suffix:not(:empty)) ::slotted(*) {
        --input-border-radius: 0;
      }

      /* Neither prefix nor suffix - full radius */
      .input-group:has(.input-group__prefix:empty):has(.input-group__suffix:empty) ::slotted(*) {
        --input-border-radius: var(--radius-md);
      }
    `];d=H([D("shadcn-input-group")],d);const K={title:"Components/Input Group",component:"shadcn-input-group",tags:["autodocs"],parameters:{docs:{description:{component:"A container for grouping inputs with prefix and/or suffix addons."}}}},t={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input-group>
        <span slot="prefix">https://</span>
        <shadcn-input placeholder="example.com"></shadcn-input>
      </shadcn-input-group>
    </div>
  `,parameters:{docs:{description:{story:"Input with a text prefix."}}}},e={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input-group>
        <shadcn-input placeholder="Amount"></shadcn-input>
        <span slot="suffix">USD</span>
      </shadcn-input-group>
    </div>
  `,parameters:{docs:{description:{story:"Input with a text suffix."}}}},i={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input-group>
        <span slot="prefix">$</span>
        <shadcn-input placeholder="0.00" type="number"></shadcn-input>
        <span slot="suffix">.00</span>
      </shadcn-input-group>
    </div>
  `,parameters:{docs:{description:{story:"Input with both prefix and suffix."}}}},o={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-input-group>
        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <shadcn-input placeholder="Search..."></shadcn-input>
      </shadcn-input-group>

      <shadcn-input-group>
        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        <shadcn-input type="email" placeholder="Email"></shadcn-input>
      </shadcn-input-group>

      <shadcn-input-group>
        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <shadcn-input placeholder="Username"></shadcn-input>
      </shadcn-input-group>
    </div>
  `,parameters:{docs:{description:{story:"Input groups with icons in the prefix slot."}}}},s={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-input-group>
        <shadcn-input placeholder="Enter your email"></shadcn-input>
        <div slot="suffix">
          <shadcn-button size="sm">Subscribe</shadcn-button>
        </div>
      </shadcn-input-group>
    </div>
  `,parameters:{docs:{description:{story:"Input group with a button in the suffix."}}}},p={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
          Website
        </label>
        <shadcn-input-group>
          <span slot="prefix">https://</span>
          <shadcn-input placeholder="example.com"></shadcn-input>
          <span slot="suffix">.com</span>
        </shadcn-input-group>
      </div>

      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
          Price
        </label>
        <shadcn-input-group>
          <span slot="prefix">$</span>
          <shadcn-input type="number" placeholder="0.00"></shadcn-input>
        </shadcn-input-group>
      </div>

      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
          Weight
        </label>
        <shadcn-input-group>
          <shadcn-input type="number" placeholder="0"></shadcn-input>
          <span slot="suffix">kg</span>
        </shadcn-input-group>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"Common use cases for input groups."}}}};var m,g,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input-group>
        <span slot="prefix">https://</span>
        <shadcn-input placeholder="example.com"></shadcn-input>
      </shadcn-input-group>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Input with a text prefix.'
      }
    }
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,v,b;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input-group>
        <shadcn-input placeholder="Amount"></shadcn-input>
        <span slot="suffix">USD</span>
      </shadcn-input-group>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Input with a text suffix.'
      }
    }
  }
}`,...(b=(v=e.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,y,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input-group>
        <span slot="prefix">$</span>
        <shadcn-input placeholder="0.00" type="number"></shadcn-input>
        <span slot="suffix">.00</span>
      </shadcn-input-group>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Input with both prefix and suffix.'
      }
    }
  }
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var _,S,z;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-input-group>
        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <shadcn-input placeholder="Search..."></shadcn-input>
      </shadcn-input-group>

      <shadcn-input-group>
        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        <shadcn-input type="email" placeholder="Email"></shadcn-input>
      </shadcn-input-group>

      <shadcn-input-group>
        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <shadcn-input placeholder="Username"></shadcn-input>
      </shadcn-input-group>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Input groups with icons in the prefix slot.'
      }
    }
  }
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var I,W,B;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-input-group>
        <shadcn-input placeholder="Enter your email"></shadcn-input>
        <div slot="suffix">
          <shadcn-button size="sm">Subscribe</shadcn-button>
        </div>
      </shadcn-input-group>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Input group with a button in the suffix.'
      }
    }
  }
}`,...(B=(W=s.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var C,j,E;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
          Website
        </label>
        <shadcn-input-group>
          <span slot="prefix">https://</span>
          <shadcn-input placeholder="example.com"></shadcn-input>
          <span slot="suffix">.com</span>
        </shadcn-input-group>
      </div>

      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
          Price
        </label>
        <shadcn-input-group>
          <span slot="prefix">$</span>
          <shadcn-input type="number" placeholder="0.00"></shadcn-input>
        </shadcn-input-group>
      </div>

      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
          Weight
        </label>
        <shadcn-input-group>
          <shadcn-input type="number" placeholder="0"></shadcn-input>
          <span slot="suffix">kg</span>
        </shadcn-input-group>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Common use cases for input groups.'
      }
    }
  }
}`,...(E=(j=p.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const Q=["WithPrefix","WithSuffix","WithBoth","WithIcon","WithButton","Examples"];export{p as Examples,i as WithBoth,s as WithButton,o as WithIcon,t as WithPrefix,e as WithSuffix,Q as __namedExportsOrder,K as default};
