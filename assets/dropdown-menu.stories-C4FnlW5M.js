import{i as a,a as c,x as s}from"./iframe-DzFl6Ur1.js";import{t as i}from"./custom-element-C028faeO.js";import{n as u}from"./property-uAZGxRZC.js";import{r as P}from"./state-BR31m5Xj.js";import{t as p}from"./index-BCFaqB6o.js";import"./button-1iZ6Rw4P.js";import"./preload-helper-BBXEHTOU.js";var N=Object.defineProperty,O=Object.getOwnPropertyDescriptor,o=(e,n,t,d)=>{for(var r=d>1?void 0:d?O(n,t):n,k=e.length-1,y;k>=0;k--)(y=e[k])&&(r=(d?y(n,t,r):y(r))||r);return d&&r&&N(n,t,r),r};let b=class extends c{constructor(){super(...arguments),this._open=!1,this._handleItemSelect=()=>{this._close()},this._handleDocumentPointerDown=e=>{this.contains(e.target)||this._close()},this._handleDocumentKeyDown=e=>{if(!this._open)return;const n=this.querySelector("shadcn-dropdown-menu-content");switch(e.key){case"Escape":e.preventDefault(),this._close();break;case"ArrowDown":e.preventDefault(),n==null||n.focusNext();break;case"ArrowUp":e.preventDefault(),n==null||n.focusPrevious();break;case"Home":e.preventDefault(),n==null||n.focusFirst();break;case"End":e.preventDefault(),n==null||n.focusLast();break;case"Enter":case" ":e.preventDefault(),n==null||n.activateFocused();break}}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick),this.addEventListener("focusout",this._handleFocusOut),this.addEventListener("select",this._handleItemSelect)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick),this.removeEventListener("focusout",this._handleFocusOut),this.removeEventListener("select",this._handleItemSelect),this._removeDocumentListeners()}render(){return s`<slot></slot>`}_handleClick(e){const n=e.target,t=this.querySelector("shadcn-dropdown-menu-trigger");t&&(n===t||t.contains(n))&&this._toggle()}_handleFocusOut(e){this.contains(e.relatedTarget)||(this._open=!1,this._updateChildren(),this._removeDocumentListeners())}_toggle(){this._open?this._close():this._openMenu()}_openMenu(){this._open=!0,this._updateChildren(),document.addEventListener("mousedown",this._handleDocumentPointerDown),document.addEventListener("keydown",this._handleDocumentKeyDown),requestAnimationFrame(()=>{const e=this.querySelector("shadcn-dropdown-menu-content");e==null||e.focusFirst()})}_close(){if(!this._open)return;this._open=!1,this._updateChildren(),this._removeDocumentListeners();const e=this.querySelector("shadcn-dropdown-menu-trigger");e==null||e.focus()}_removeDocumentListeners(){document.removeEventListener("mousedown",this._handleDocumentPointerDown),document.removeEventListener("keydown",this._handleDocumentKeyDown)}_updateChildren(){const e=this.querySelector("shadcn-dropdown-menu-content");e&&(e.open=this._open);const n=this.querySelector("shadcn-dropdown-menu-trigger");n&&(n.setAttribute("data-state",this._open?"open":"closed"),n.setAttribute("aria-haspopup","menu"),n.setAttribute("aria-expanded",String(this._open)))}};b.styles=[p,a`
      :host {
        display: inline-block;
        position: relative;
      }
    `];o([P()],b.prototype,"_open",2);b=o([i("shadcn-dropdown-menu")],b);let x=class extends c{render(){return s`<slot></slot>`}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded","false")}};x.styles=[p,a`
      :host {
        display: inline-block;
        cursor: pointer;
      }
    `];x=o([i("shadcn-dropdown-menu-trigger")],x);let l=class extends c{constructor(){super(...arguments),this.open=!1,this.align="start"}render(){return s`
      <div class="content" role="menu">
        <slot></slot>
      </div>
    `}_items(){return Array.from(this.querySelectorAll("shadcn-dropdown-menu-item, shadcn-dropdown-menu-checkbox-item")).filter(e=>e instanceof h||e instanceof m).filter(e=>!e.disabled)}_focusedIndex(){const e=this._items(),n=document.activeElement;return e.findIndex(t=>{var d;return t.contains(n)||((d=t.shadowRoot)==null?void 0:d.contains(n))})}focusFirst(){var e;(e=this._items()[0])==null||e.focusItem()}focusLast(){var n;const e=this._items();(n=e[e.length-1])==null||n.focusItem()}focusNext(){var t;const e=this._items();if(e.length===0)return;const n=(this._focusedIndex()+1)%e.length;(t=e[n])==null||t.focusItem()}focusPrevious(){var d;const e=this._items();if(e.length===0)return;const n=this._focusedIndex(),t=n<=0?e.length-1:n-1;(d=e[t])==null||d.focusItem()}activateFocused(){const n=this._items()[this._focusedIndex()];n==null||n.activate()}};l.styles=[p,a`
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
        transform-origin: top;
      }

      :host([open]) .content { animation: shadcn-zoom-in var(--transition-fast); }
      @media (prefers-reduced-motion: reduce) { .content { animation: none; } }

      :host([align="end"]) .content {
        left: auto;
        right: 0;
      }
    `];o([u({type:Boolean,reflect:!0})],l.prototype,"open",2);o([u({type:String,reflect:!0})],l.prototype,"align",2);l=o([i("shadcn-dropdown-menu-content")],l);let h=class extends c{constructor(){super(...arguments),this.disabled=!1,this.inset=!1}render(){return s`
      <div class="item" role="menuitem" tabindex="-1" ?aria-disabled=${this.disabled} @click=${this.activate}>
        <slot></slot>
        <slot name="shortcut" class="shortcut"></slot>
      </div>
    `}focusItem(){var e,n;(n=(e=this.shadowRoot)==null?void 0:e.querySelector(".item"))==null||n.focus()}activate(){this.disabled||this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0}))}};h.styles=[p,a`
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
    `];o([u({type:Boolean,reflect:!0})],h.prototype,"disabled",2);o([u({type:Boolean,reflect:!0})],h.prototype,"inset",2);h=o([i("shadcn-dropdown-menu-item")],h);let _=class extends c{render(){return s``}};_.styles=[p,a`
      :host {
        display: block;
        height: 1px;
        background-color: var(--muted);
        margin: var(--spacing-1) 0;
      }
    `];_=o([i("shadcn-dropdown-menu-separator")],_);let v=class extends c{constructor(){super(...arguments),this.inset=!1}render(){return s`<slot></slot>`}};v.styles=[p,a`
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
    `];o([u({type:Boolean,reflect:!0})],v.prototype,"inset",2);v=o([i("shadcn-dropdown-menu-label")],v);let m=class extends c{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}render(){return s`
      <div 
        class="item" 
        role="menuitemcheckbox" 
        tabindex="-1"
        aria-checked=${this.checked}
        ?aria-disabled=${this.disabled}
        @click=${this._toggle}
      >
        <div class="check-wrapper">
          ${this.checked?s`
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          `:""}
        </div>
        <slot></slot>
      </div>
    `}_toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}focusItem(){var e,n;(n=(e=this.shadowRoot)==null?void 0:e.querySelector(".item"))==null||n.focus()}activate(){this._toggle()}};m.styles=[p,a`
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
    `];o([u({type:Boolean,reflect:!0})],m.prototype,"checked",2);o([u({type:Boolean,reflect:!0})],m.prototype,"disabled",2);m=o([i("shadcn-dropdown-menu-checkbox-item")],m);const K={title:"Components/Dropdown Menu",component:"shadcn-dropdown-menu",tags:["autodocs"],parameters:{docs:{description:{component:"Displays a menu to the user — such as a set of actions or functions — triggered by a button."}}}},w={render:()=>s`
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
  `},g={render:()=>s`
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
  `},f={render:()=>s`
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
  `};var D,S,C;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(S=w.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var A,E,I;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,M,B;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(M=f.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const R=["Default","WithShortcuts","Checkboxes"];export{f as Checkboxes,w as Default,g as WithShortcuts,R as __namedExportsOrder,K as default};
