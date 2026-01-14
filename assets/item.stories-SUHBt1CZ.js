import{i as D,a as P,x as s}from"./lit-element-B21iCxvW.js";import{t as z}from"./custom-element-C028faeO.js";import{n as V}from"./property-CJLssJ-s.js";import{t as O}from"./index-BVWPfyNL.js";import"./kbd-DFKpfHm0.js";var H=Object.defineProperty,W=Object.getOwnPropertyDescriptor,p=(n,i,h,d)=>{for(var e=d>1?void 0:d?W(i,h):i,m=n.length-1,u;m>=0;m--)(u=n[m])&&(e=(d?u(i,h,e):u(e))||e);return d&&e&&H(i,h,e),e};let t=class extends P{constructor(){super(...arguments),this.disabled=!1,this.selected=!1}render(){return s`
      <div
        part="item"
        class="item ${this.disabled?"item--disabled":""} ${this.selected?"item--selected":""}"
        role="option"
        aria-disabled=${this.disabled}
        aria-selected=${this.selected}
        @click=${this._handleClick}
      >
        <div class="item__icon">
          <slot name="icon"></slot>
        </div>
        <div class="item__content">
          <slot></slot>
        </div>
        <div class="item__suffix">
          <slot name="suffix"></slot>
        </div>
      </div>
    `}_handleClick(n){if(this.disabled){n.preventDefault(),n.stopPropagation();return}this.dispatchEvent(new CustomEvent("item-click",{bubbles:!0,composed:!0,detail:{originalEvent:n}}))}};t.styles=[O,D`
      :host {
        display: block;
      }

      .item {
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
        padding: var(--spacing-2) var(--spacing-3);
        font-size: var(--font-size-sm);
        color: var(--item-color, var(--foreground));
        cursor: pointer;
        user-select: none;
        border-radius: var(--radius-sm);
        transition: background-color var(--transition-fast);
      }

      .item:hover:not(.item--disabled) {
        background-color: var(--item-bg, var(--accent));
        color: var(--accent-foreground);
      }

      .item--disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .item--selected {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      .item__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .item__content {
        flex: 1;
        min-width: 0;
      }

      .item__suffix {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        color: var(--muted-foreground);
      }
    `];p([V({type:Boolean})],t.prototype,"disabled",2);p([V({type:Boolean})],t.prototype,"selected",2);t=p([z("shadcn-item")],t);const F={title:"Components/Item",component:"shadcn-item",tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Whether the item is disabled"},selected:{control:"boolean",description:"Whether the item is selected"}},parameters:{docs:{description:{component:"A generic list item component for use in menus, selects, and command palettes."}}}},a={render:()=>s`
    <div style="padding: 1rem; background: var(--background); max-width: 300px;">
      <shadcn-item>Item text</shadcn-item>
    </div>
  `},o={render:()=>s`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; display: flex; flex-direction: column;">
      <shadcn-item>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        Profile
      </shadcn-item>
      <shadcn-item>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        Settings
      </shadcn-item>
      <shadcn-item>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        Logout
      </shadcn-item>
    </div>
  `,parameters:{docs:{description:{story:"Items with icons in the icon slot."}}}},r={render:()=>s`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; display: flex; flex-direction: column;">
      <shadcn-item>
        New File
        <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
        <shadcn-kbd slot="suffix">N</shadcn-kbd>
      </shadcn-item>
      <shadcn-item>
        Open
        <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
        <shadcn-kbd slot="suffix">O</shadcn-kbd>
      </shadcn-item>
      <shadcn-item>
        Save
        <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
        <shadcn-kbd slot="suffix">S</shadcn-kbd>
      </shadcn-item>
    </div>
  `,parameters:{docs:{description:{story:"Items with keyboard shortcuts in the suffix slot."}}}},l={render:()=>s`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; display: flex; flex-direction: column;">
      <shadcn-item>Default Item</shadcn-item>
      <shadcn-item selected>Selected Item</shadcn-item>
      <shadcn-item disabled>Disabled Item</shadcn-item>
    </div>
  `,parameters:{docs:{description:{story:"Different item states."}}}},c={render:()=>s`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; border: 1px solid var(--border); border-radius: var(--radius-md);">
      <div style="padding: 0.5rem;">
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
          My Account
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.125rem;">
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Profile
            <shadcn-kbd slot="suffix">⇧</shadcn-kbd>
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">P</shadcn-kbd>
          </shadcn-item>
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2"/>
              <line x1="2" y1="10" x2="22" y2="10"/>
            </svg>
            Billing
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">B</shadcn-kbd>
          </shadcn-item>
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Settings
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">S</shadcn-kbd>
          </shadcn-item>
        </div>
        <div style="height: 1px; background: var(--border); margin: 0.5rem 0;"></div>
        <div style="display: flex; flex-direction: column; gap: 0.125rem;">
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Log out
            <shadcn-kbd slot="suffix">⇧</shadcn-kbd>
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">Q</shadcn-kbd>
          </shadcn-item>
        </div>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"Complete menu example using items."}}}};var v,f,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 300px;">
      <shadcn-item>Item text</shadcn-item>
    </div>
  \`
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var k,x,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; display: flex; flex-direction: column;">
      <shadcn-item>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        Profile
      </shadcn-item>
      <shadcn-item>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        Settings
      </shadcn-item>
      <shadcn-item>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        Logout
      </shadcn-item>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Items with icons in the icon slot.'
      }
    }
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,y,_;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; display: flex; flex-direction: column;">
      <shadcn-item>
        New File
        <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
        <shadcn-kbd slot="suffix">N</shadcn-kbd>
      </shadcn-item>
      <shadcn-item>
        Open
        <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
        <shadcn-kbd slot="suffix">O</shadcn-kbd>
      </shadcn-item>
      <shadcn-item>
        Save
        <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
        <shadcn-kbd slot="suffix">S</shadcn-kbd>
      </shadcn-item>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Items with keyboard shortcuts in the suffix slot.'
      }
    }
  }
}`,...(_=(y=r.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var C,S,B;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; display: flex; flex-direction: column;">
      <shadcn-item>Default Item</shadcn-item>
      <shadcn-item selected>Selected Item</shadcn-item>
      <shadcn-item disabled>Disabled Item</shadcn-item>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Different item states.'
      }
    }
  }
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var j,I,M;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 300px; border: 1px solid var(--border); border-radius: var(--radius-md);">
      <div style="padding: 0.5rem;">
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
          My Account
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.125rem;">
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Profile
            <shadcn-kbd slot="suffix">⇧</shadcn-kbd>
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">P</shadcn-kbd>
          </shadcn-item>
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2"/>
              <line x1="2" y1="10" x2="22" y2="10"/>
            </svg>
            Billing
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">B</shadcn-kbd>
          </shadcn-item>
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Settings
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">S</shadcn-kbd>
          </shadcn-item>
        </div>
        <div style="height: 1px; background: var(--border); margin: 0.5rem 0;"></div>
        <div style="display: flex; flex-direction: column; gap: 0.125rem;">
          <shadcn-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Log out
            <shadcn-kbd slot="suffix">⇧</shadcn-kbd>
            <shadcn-kbd slot="suffix">⌘</shadcn-kbd>
            <shadcn-kbd slot="suffix">Q</shadcn-kbd>
          </shadcn-item>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Complete menu example using items.'
      }
    }
  }
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const Q=["Default","WithIcon","WithSuffix","States","Menu"];export{a as Default,c as Menu,l as States,o as WithIcon,r as WithSuffix,Q as __namedExportsOrder,F as default};
