import{i as s,a,x as e}from"./lit-element-B21iCxvW.js";import{t as c}from"./custom-element-C028faeO.js";import{n as i}from"./property-CJLssJ-s.js";import{r as z}from"./state-CSOq1DZK.js";import{t as p}from"./index-BVWPfyNL.js";import"./button-B2IsNlAX.js";var E=Object.defineProperty,P=Object.getOwnPropertyDescriptor,n=(o,d,t,m)=>{for(var r=m>1?void 0:m?P(d,t):d,k=o.length-1,y;k>=0;k--)(y=o[k])&&(r=(m?y(d,t,r):y(r))||r);return m&&r&&E(d,t,r),r};let v=class extends a{constructor(){super(...arguments),this._open=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick),this.addEventListener("focusout",this._handleFocusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick),this.removeEventListener("focusout",this._handleFocusOut)}render(){return e`<slot></slot>`}_handleClick(o){const d=o.target,t=this.querySelector("shadcn-dropdown-menu-trigger");t&&(d===t||t.contains(d))&&(this._open=!this._open,this._updateChildren())}_handleFocusOut(o){this.contains(o.relatedTarget)||(this._open=!1,this._updateChildren())}_updateChildren(){const o=this.querySelector("shadcn-dropdown-menu-content");o&&(o.open=this._open)}};v.styles=[p,s`
      :host {
        display: inline-block;
        position: relative;
      }
    `];n([z()],v.prototype,"_open",2);v=n([c("shadcn-dropdown-menu")],v);let x=class extends a{render(){return e`<slot></slot>`}};x.styles=[p,s`
      :host {
        display: inline-block;
        cursor: pointer;
      }
    `];x=n([c("shadcn-dropdown-menu-trigger")],x);let u=class extends a{constructor(){super(...arguments),this.open=!1,this.align="start"}render(){return e`
      <div class="content" role="menu">
        <slot></slot>
      </div>
    `}};u.styles=[p,s`
      :host {
        display: none;
      }

      :host([open]) {
        display: contents;
      }
      
      .content {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 50;
        min-width: 8rem;
        margin-top: var(--spacing-1);
        width: max-content;
        padding: var(--spacing-1);
        background-color: var(--popover);
        color: var(--popover-foreground);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        overflow: hidden;
      }

      :host([align="end"]) .content {
        left: auto;
        right: 0;
      }
    `];n([i({type:Boolean,reflect:!0})],u.prototype,"open",2);n([i({type:String,reflect:!0})],u.prototype,"align",2);u=n([c("shadcn-dropdown-menu-content")],u);let h=class extends a{constructor(){super(...arguments),this.disabled=!1,this.inset=!1}render(){return e`
      <div class="item" role="menuitem" ?aria-disabled=${this.disabled}>
        <slot></slot>
        <slot name="shortcut" class="shortcut"></slot>
      </div>
    `}};h.styles=[p,s`
      :host {
        display: block;
      }

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-1-5) var(--spacing-2);
        font-size: var(--font-size-sm);
        border-radius: var(--radius-sm);
        cursor: default;
        user-select: none;
        outline: none;
        color: var(--foreground);
      }

      .item:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      .shortcut {
        margin-left: auto;
        font-size: var(--font-size-xs);
        letter-spacing: var(--tracking-widest);
        color: var(--muted-foreground);
      }
      
      :host([disabled]) .item {
        opacity: 0.5;
        pointer-events: none;
      }
      
      :host([inset]) .item {
        padding-left: var(--spacing-8);
      }
    `];n([i({type:Boolean,reflect:!0})],h.prototype,"disabled",2);n([i({type:Boolean,reflect:!0})],h.prototype,"inset",2);h=n([c("shadcn-dropdown-menu-item")],h);let _=class extends a{render(){return e``}};_.styles=[p,s`
      :host {
        display: block;
        height: 1px;
        background-color: var(--muted);
        margin: var(--spacing-1) 0;
      }
    `];_=n([c("shadcn-dropdown-menu-separator")],_);let f=class extends a{constructor(){super(...arguments),this.inset=!1}render(){return e`<slot></slot>`}};f.styles=[p,s`
      :host {
        display: block;
        padding: var(--spacing-1-5) var(--spacing-2);
        font-size: var(--font-size-sm);
        font-weight: var(--font-semibold);
        color: var(--foreground);
      }
      
      :host([inset]) {
        padding-left: var(--spacing-8);
      }
    `];n([i({type:Boolean,reflect:!0})],f.prototype,"inset",2);f=n([c("shadcn-dropdown-menu-label")],f);let l=class extends a{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}render(){return e`
      <div 
        class="item" 
        role="menuitemcheckbox" 
        aria-checked=${this.checked}
        ?aria-disabled=${this.disabled}
        @click=${this._toggle}
      >
        <div class="check-wrapper">
          ${this.checked?e`
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          `:""}
        </div>
        <slot></slot>
      </div>
    `}_toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}};l.styles=[p,s`
      :host {
        display: block;
      }

      .item {
        display: flex;
        align-items: center;
        padding: var(--spacing-1-5) var(--spacing-2);
        padding-left: var(--spacing-8);
        font-size: var(--font-size-sm);
        border-radius: var(--radius-sm);
        cursor: default;
        user-select: none;
        outline: none;
        color: var(--foreground);
        position: relative;
      }

      .item:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }
      
      .check-wrapper {
        position: absolute;
        left: var(--spacing-2);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1rem;
        height: 1rem;
      }
      
      :host([disabled]) .item {
        opacity: 0.5;
        pointer-events: none;
      }
    `];n([i({type:Boolean,reflect:!0})],l.prototype,"checked",2);n([i({type:Boolean,reflect:!0})],l.prototype,"disabled",2);l=n([c("shadcn-dropdown-menu-checkbox-item")],l);const q={title:"Components/Dropdown Menu",component:"shadcn-dropdown-menu",tags:["autodocs"],parameters:{docs:{description:{component:"Displays a menu to the user — such as a set of actions or functions — triggered by a button."}}}},w={render:()=>e`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; justify-content: center;">
      <shadcn-dropdown-menu>
        <shadcn-dropdown-menu-trigger>
          <shadcn-button variant="outline">Open Menu</shadcn-button>
        </shadcn-dropdown-menu-trigger>
        <shadcn-dropdown-menu-content>
          <shadcn-dropdown-menu-label>My Account</shadcn-dropdown-menu-label>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-item>Profile</shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>Billing</shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>Team</shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>Subscription</shadcn-dropdown-menu-item>
        </shadcn-dropdown-menu-content>
      </shadcn-dropdown-menu>
    </div>
  `},g={render:()=>e`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; justify-content: center;">
      <shadcn-dropdown-menu>
        <shadcn-dropdown-menu-trigger>
          <shadcn-button variant="outline">Actions</shadcn-button>
        </shadcn-dropdown-menu-trigger>
        <shadcn-dropdown-menu-content>
          <shadcn-dropdown-menu-label>Actions</shadcn-dropdown-menu-label>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-item>
            New Tab <span slot="shortcut">⌘T</span>
          </shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>
            New Window <span slot="shortcut">⌘N</span>
          </shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item disabled>
            New Incognito Window <span slot="shortcut">⇧⌘N</span>
          </shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-item>
            Log out <span slot="shortcut">⇧⌘Q</span>
          </shadcn-dropdown-menu-item>
        </shadcn-dropdown-menu-content>
      </shadcn-dropdown-menu>
    </div>
  `},b={render:()=>e`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; justify-content: center;">
      <shadcn-dropdown-menu>
        <shadcn-dropdown-menu-trigger>
          <shadcn-button variant="outline">View Options</shadcn-button>
        </shadcn-dropdown-menu-trigger>
        <shadcn-dropdown-menu-content>
          <shadcn-dropdown-menu-label>Appearance</shadcn-dropdown-menu-label>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-checkbox-item checked>
            Status Bar
          </shadcn-dropdown-menu-checkbox-item>
          <shadcn-dropdown-menu-checkbox-item disabled checked>
            Activity Bar
          </shadcn-dropdown-menu-checkbox-item>
          <shadcn-dropdown-menu-checkbox-item>
            Panel
          </shadcn-dropdown-menu-checkbox-item>
        </shadcn-dropdown-menu-content>
      </shadcn-dropdown-menu>
    </div>
  `};var C,B,D;w.parameters={...w.parameters,docs:{...(C=w.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; justify-content: center;">
      <shadcn-dropdown-menu>
        <shadcn-dropdown-menu-trigger>
          <shadcn-button variant="outline">Open Menu</shadcn-button>
        </shadcn-dropdown-menu-trigger>
        <shadcn-dropdown-menu-content>
          <shadcn-dropdown-menu-label>My Account</shadcn-dropdown-menu-label>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-item>Profile</shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>Billing</shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>Team</shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>Subscription</shadcn-dropdown-menu-item>
        </shadcn-dropdown-menu-content>
      </shadcn-dropdown-menu>
    </div>
  \`
}`,...(D=(B=w.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var S,M,O;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; justify-content: center;">
      <shadcn-dropdown-menu>
        <shadcn-dropdown-menu-trigger>
          <shadcn-button variant="outline">Actions</shadcn-button>
        </shadcn-dropdown-menu-trigger>
        <shadcn-dropdown-menu-content>
          <shadcn-dropdown-menu-label>Actions</shadcn-dropdown-menu-label>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-item>
            New Tab <span slot="shortcut">⌘T</span>
          </shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item>
            New Window <span slot="shortcut">⌘N</span>
          </shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-item disabled>
            New Incognito Window <span slot="shortcut">⇧⌘N</span>
          </shadcn-dropdown-menu-item>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-item>
            Log out <span slot="shortcut">⇧⌘Q</span>
          </shadcn-dropdown-menu-item>
        </shadcn-dropdown-menu-content>
      </shadcn-dropdown-menu>
    </div>
  \`
}`,...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var j,A,N;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; justify-content: center;">
      <shadcn-dropdown-menu>
        <shadcn-dropdown-menu-trigger>
          <shadcn-button variant="outline">View Options</shadcn-button>
        </shadcn-dropdown-menu-trigger>
        <shadcn-dropdown-menu-content>
          <shadcn-dropdown-menu-label>Appearance</shadcn-dropdown-menu-label>
          <shadcn-dropdown-menu-separator></shadcn-dropdown-menu-separator>
          <shadcn-dropdown-menu-checkbox-item checked>
            Status Bar
          </shadcn-dropdown-menu-checkbox-item>
          <shadcn-dropdown-menu-checkbox-item disabled checked>
            Activity Bar
          </shadcn-dropdown-menu-checkbox-item>
          <shadcn-dropdown-menu-checkbox-item>
            Panel
          </shadcn-dropdown-menu-checkbox-item>
        </shadcn-dropdown-menu-content>
      </shadcn-dropdown-menu>
    </div>
  \`
}`,...(N=(A=b.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const Q=["Default","WithShortcuts","Checkboxes"];export{b as Checkboxes,w as Default,g as WithShortcuts,Q as __namedExportsOrder,q as default};
