import{i as H,a as L,x as t}from"./lit-element-B21iCxvW.js";import{t as V}from"./custom-element-C028faeO.js";import{n as _}from"./property-CJLssJ-s.js";import{t as T}from"./index-BVWPfyNL.js";import"./button-B2IsNlAX.js";var D=Object.defineProperty,E=Object.getOwnPropertyDescriptor,O=(p,o,l,r)=>{for(var n=r>1?void 0:r?E(o,l):o,c=p.length-1,h;c>=0;c--)(h=p[c])&&(n=(r?h(o,l,n):h(n))||n);return r&&n&&D(o,l,n),n};let u=class extends L{constructor(){super(...arguments),this.orientation="horizontal"}render(){return t`
      <div
        part="button-group"
        class="button-group button-group--${this.orientation}"
        role="group"
      >
        <slot></slot>
      </div>
    `}};u.styles=[T,H`
      :host {
        display: inline-flex;
      }

      .button-group {
        display: inline-flex;
        gap: 0;
        position: relative;
      }

      .button-group--horizontal {
        flex-direction: row;
      }

      .button-group--vertical {
        flex-direction: column;
      }

      /* Merge borders by overlapping */
      .button-group--horizontal ::slotted(:not(:first-child)) {
        margin-left: -1px;
      }

      .button-group--vertical ::slotted(:not(:first-child)) {
        margin-top: -1px;
      }

      /* Set border radius via CSS custom properties for horizontal groups */
      .button-group--horizontal ::slotted(*:first-child) {
        --button-border-radius: var(--radius-md) 0 0 var(--radius-md);
      }

      .button-group--horizontal ::slotted(*:last-child) {
        --button-border-radius: 0 var(--radius-md) var(--radius-md) 0;
      }

      .button-group--horizontal ::slotted(*:only-child) {
        --button-border-radius: var(--radius-md);
      }

      .button-group--horizontal ::slotted(*:not(:first-child):not(:last-child)) {
        --button-border-radius: 0;
      }

      /* Set border radius via CSS custom properties for vertical groups */
      .button-group--vertical ::slotted(*:first-child) {
        --button-border-radius: var(--radius-md) var(--radius-md) 0 0;
      }

      .button-group--vertical ::slotted(*:last-child) {
        --button-border-radius: 0 0 var(--radius-md) var(--radius-md);
      }

      .button-group--vertical ::slotted(*:only-child) {
        --button-border-radius: var(--radius-md);
      }

      .button-group--vertical ::slotted(*:not(:first-child):not(:last-child)) {
        --button-border-radius: 0;
      }

      /* Ensure hovered/focused buttons appear on top */
      ::slotted(*:hover),
      ::slotted(*:focus-within) {
        position: relative;
        z-index: 1;
      }
    `];O([_({type:String})],u.prototype,"orientation",2);u=O([V("shadcn-button-group")],u);const $={title:"Components/Button Group",component:"shadcn-button-group",tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the button group"}},parameters:{docs:{description:{component:"A container for grouping related buttons together with merged borders."}}}},e={render:()=>t`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-button-group>
        <shadcn-button variant="outline">Left</shadcn-button>
        <shadcn-button variant="outline">Middle</shadcn-button>
        <shadcn-button variant="outline">Right</shadcn-button>
      </shadcn-button-group>
    </div>
  `},s={render:()=>t`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-button-group orientation="vertical">
        <shadcn-button variant="outline">Top</shadcn-button>
        <shadcn-button variant="outline">Middle</shadcn-button>
        <shadcn-button variant="outline">Bottom</shadcn-button>
      </shadcn-button-group>
    </div>
  `,parameters:{docs:{description:{story:"Vertically oriented button group."}}}},a={render:()=>t`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-button-group>
        <shadcn-button variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Edit
        </shadcn-button>
        <shadcn-button variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Delete
        </shadcn-button>
      </shadcn-button-group>
    </div>
  `,parameters:{docs:{description:{story:"Button group with icons."}}}},i={render:()=>t`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-button-group>
        <shadcn-button variant="default">Save</shadcn-button>
        <shadcn-button variant="default">Cancel</shadcn-button>
      </shadcn-button-group>

      <shadcn-button-group>
        <shadcn-button variant="secondary">Option 1</shadcn-button>
        <shadcn-button variant="secondary">Option 2</shadcn-button>
        <shadcn-button variant="secondary">Option 3</shadcn-button>
      </shadcn-button-group>

      <shadcn-button-group>
        <shadcn-button variant="ghost">View</shadcn-button>
        <shadcn-button variant="ghost">Edit</shadcn-button>
        <shadcn-button variant="ghost">Share</shadcn-button>
      </shadcn-button-group>
    </div>
  `,parameters:{docs:{description:{story:"Button groups with different variants."}}}},d={render:()=>t`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 1rem;">
      <shadcn-button-group>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="17" y1="10" x2="3" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="17" y1="18" x2="3" y2="18"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="3" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="3" y2="18"/>
          </svg>
        </shadcn-button>
      </shadcn-button-group>
      
      <shadcn-button-group>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="4" x2="10" y2="4"/>
            <line x1="14" y1="20" x2="5" y2="20"/>
            <line x1="15" y1="4" x2="9" y2="20"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="9" x2="20" y2="9"/>
            <line x1="4" y1="15" x2="20" y2="15"/>
            <line x1="10" y1="3" x2="8" y2="21"/>
            <line x1="16" y1="3" x2="14" y2="21"/>
          </svg>
        </shadcn-button>
      </shadcn-button-group>
    </div>
  `,parameters:{docs:{description:{story:"Toolbar-style button groups for text formatting."}}}};var g,b,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-button-group>
        <shadcn-button variant="outline">Left</shadcn-button>
        <shadcn-button variant="outline">Middle</shadcn-button>
        <shadcn-button variant="outline">Right</shadcn-button>
      </shadcn-button-group>
    </div>
  \`
}`,...(v=(b=e.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,y,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-button-group orientation="vertical">
        <shadcn-button variant="outline">Top</shadcn-button>
        <shadcn-button variant="outline">Middle</shadcn-button>
        <shadcn-button variant="outline">Bottom</shadcn-button>
      </shadcn-button-group>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Vertically oriented button group.'
      }
    }
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var m,k,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-button-group>
        <shadcn-button variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Edit
        </shadcn-button>
        <shadcn-button variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Delete
        </shadcn-button>
      </shadcn-button-group>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Button group with icons.'
      }
    }
  }
}`,...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var z,B,C;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-button-group>
        <shadcn-button variant="default">Save</shadcn-button>
        <shadcn-button variant="default">Cancel</shadcn-button>
      </shadcn-button-group>

      <shadcn-button-group>
        <shadcn-button variant="secondary">Option 1</shadcn-button>
        <shadcn-button variant="secondary">Option 2</shadcn-button>
        <shadcn-button variant="secondary">Option 3</shadcn-button>
      </shadcn-button-group>

      <shadcn-button-group>
        <shadcn-button variant="ghost">View</shadcn-button>
        <shadcn-button variant="ghost">Edit</shadcn-button>
        <shadcn-button variant="ghost">Share</shadcn-button>
      </shadcn-button-group>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Button groups with different variants.'
      }
    }
  }
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var j,S,M;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 1rem;">
      <shadcn-button-group>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="17" y1="10" x2="3" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="17" y1="18" x2="3" y2="18"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="3" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="3" y2="18"/>
          </svg>
        </shadcn-button>
      </shadcn-button-group>
      
      <shadcn-button-group>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="4" x2="10" y2="4"/>
            <line x1="14" y1="20" x2="5" y2="20"/>
            <line x1="15" y1="4" x2="9" y2="20"/>
          </svg>
        </shadcn-button>
        <shadcn-button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="9" x2="20" y2="9"/>
            <line x1="4" y1="15" x2="20" y2="15"/>
            <line x1="10" y1="3" x2="8" y2="21"/>
            <line x1="16" y1="3" x2="14" y2="21"/>
          </svg>
        </shadcn-button>
      </shadcn-button-group>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Toolbar-style button groups for text formatting.'
      }
    }
  }
}`,...(M=(S=d.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const A=["Horizontal","Vertical","WithIcons","DifferentVariants","ToolBar"];export{i as DifferentVariants,e as Horizontal,d as ToolBar,s as Vertical,a as WithIcons,A as __namedExportsOrder,$ as default};
