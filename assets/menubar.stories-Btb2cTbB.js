import{i,a as d,x as o}from"./iframe-B6ecvixb.js";import{t as u}from"./custom-element-C028faeO.js";import{n as b}from"./property-BCNZ7cbM.js";import{r as A}from"./state-DUyYIdlX.js";import{t as m}from"./index-DEzpxp9E.js";import"./preload-helper-BBXEHTOU.js";var E=Object.defineProperty,D=Object.getOwnPropertyDescriptor,s=(e,n,t,a)=>{for(var r=a>1?void 0:a?D(n,t):n,c=e.length-1,p;c>=0;c--)(p=e[c])&&(r=(a?p(n,t,r):p(r))||r);return a&&r&&E(n,t,r),r};let w=class extends d{constructor(){super(...arguments),this._handleMenuOpen=e=>{const n=e.target,t=Array.from(this.querySelectorAll("shadcn-menubar-menu")).filter(a=>a instanceof g);for(const a of t)a!==n&&a.closeMenu(!1)},this._handleKeyDown=e=>{var a,r;const n=this._triggers();if(n.length===0)return;const t=this._focusedTriggerIndex();if(t!==-1){if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();const c=e.key==="ArrowRight"?1:-1,p=(t+c+n.length)%n.length;(a=n[p])==null||a.focusTrigger();return}if(e.key==="ArrowDown"){e.preventDefault();const c=(r=n[t])==null?void 0:r.closest("shadcn-menubar-menu");c==null||c.openMenu()}}}}connectedCallback(){super.connectedCallback(),this.addEventListener("menubar-menu-open",this._handleMenuOpen),this.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("menubar-menu-open",this._handleMenuOpen),this.removeEventListener("keydown",this._handleKeyDown)}render(){return o`
      <div class="menubar" role="menubar">
        <slot></slot>
      </div>
    `}_triggers(){return Array.from(this.querySelectorAll("shadcn-menubar-trigger")).filter(e=>e instanceof v)}_focusedTriggerIndex(){const e=this._triggers(),n=document.activeElement;return e.findIndex(t=>{var a;return t.contains(n)||((a=t.shadowRoot)==null?void 0:a.contains(n))})}};w.styles=[m,i`
      :host {
        display: inline-block;
      }

      .menubar {
        display: flex;
        height: 2.5rem;
        align-items: center;
        gap: var(--spacing-1);
        padding: var(--spacing-1);
        background-color: var(--background);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
      }
    `];w=s([u("shadcn-menubar")],w);let g=class extends d{constructor(){super(...arguments),this._open=!1,this._handleItemSelect=()=>{this.closeMenu()},this._handleDocumentKeyDown=e=>{if(!this._open)return;const n=this.querySelector("shadcn-menubar-content");switch(e.key){case"Escape":e.preventDefault(),this.closeMenu();break;case"ArrowDown":e.preventDefault(),n==null||n.focusNext();break;case"ArrowUp":e.preventDefault(),n==null||n.focusPrevious();break;case"Home":e.preventDefault(),n==null||n.focusFirst();break;case"End":e.preventDefault(),n==null||n.focusLast();break;case"Enter":case" ":e.preventDefault(),n==null||n.activateFocused();break}}}connectedCallback(){super.connectedCallback(),this.addEventListener("select",this._handleItemSelect)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("select",this._handleItemSelect),document.removeEventListener("keydown",this._handleDocumentKeyDown)}render(){return o`
      <div 
        @click=${this._handleClick}
        @focusout=${this._handleFocusOut}
      >
        <slot></slot>
      </div>
    `}_handleClick(e){e.target.tagName.toLowerCase()==="shadcn-menubar-trigger"&&(this._open?this.closeMenu():this.openMenu())}_handleFocusOut(e){this.contains(e.relatedTarget)||(this._open=!1,this._updateChildren(),document.removeEventListener("keydown",this._handleDocumentKeyDown))}openMenu(){this._open=!0,this._updateChildren(),this.dispatchEvent(new CustomEvent("menubar-menu-open",{bubbles:!0,composed:!0})),document.addEventListener("keydown",this._handleDocumentKeyDown),requestAnimationFrame(()=>{const e=this.querySelector("shadcn-menubar-content");e==null||e.focusFirst()})}closeMenu(e=!0){if(this._open&&(this._open=!1,this._updateChildren(),document.removeEventListener("keydown",this._handleDocumentKeyDown),e)){const n=this.querySelector("shadcn-menubar-trigger");n==null||n.focusTrigger()}}_updateChildren(){var t;const e=this.querySelector("shadcn-menubar-content");e&&(e.open=this._open);const n=this.querySelector("shadcn-menubar-trigger");if(n){n.setAttribute("data-state",this._open?"open":"closed"),n.setAttribute("aria-expanded",String(this._open)),n.setAttribute("aria-haspopup","menu");const a=(t=n.shadowRoot)==null?void 0:t.querySelector("button");a==null||a.setAttribute("aria-expanded",String(this._open)),a==null||a.setAttribute("aria-haspopup","menu")}}};g.styles=[m,i`
      :host {
        display: block;
        position: relative;
      }
    `];s([A()],g.prototype,"_open",2);g=s([u("shadcn-menubar-menu")],g);let v=class extends d{render(){return o`
      <button type="button" role="menuitem" aria-haspopup="true" aria-expanded=${this.getAttribute("aria-expanded")??"false"}>
        <slot></slot>
      </button>
    `}focusTrigger(){var e,n;(n=(e=this.shadowRoot)==null?void 0:e.querySelector("button"))==null||n.focus()}};v.styles=[m,i`
      :host {
        display: inline-block;
      }

      button {
        display: flex;
        align-items: center;
        padding: var(--spacing-1-5) var(--spacing-3);
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        background: transparent;
        border: none;
        border-radius: var(--radius-sm);
        color: var(--foreground);
        cursor: default;
        outline: none;
      }

      button:hover,
      :host([data-state="open"]) button {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }
      
      :host([data-state="open"]) button {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }
    `];v=s([u("shadcn-menubar-trigger")],v);let y=class extends d{constructor(){super(...arguments),this.open=!1}render(){return o`
      <div class="content" role="menu">
        <slot></slot>
      </div>
    `}_items(){return Array.from(this.querySelectorAll("shadcn-menubar-item, shadcn-menubar-checkbox-item")).filter(e=>e instanceof h||e instanceof l).filter(e=>!e.disabled)}_focusedIndex(){const e=this._items(),n=document.activeElement;return e.findIndex(t=>{var a;return t.contains(n)||((a=t.shadowRoot)==null?void 0:a.contains(n))})}focusFirst(){var e;(e=this._items()[0])==null||e.focusItem()}focusLast(){var n;const e=this._items();(n=e[e.length-1])==null||n.focusItem()}focusNext(){var t;const e=this._items();if(e.length===0)return;const n=(this._focusedIndex()+1)%e.length;(t=e[n])==null||t.focusItem()}focusPrevious(){var a;const e=this._items();if(e.length===0)return;const n=this._focusedIndex(),t=n<=0?e.length-1:n-1;(a=e[t])==null||a.focusItem()}activateFocused(){const n=this._items()[this._focusedIndex()];n==null||n.activate()}};y.styles=[m,i`
      :host {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 50;
        min-width: 12rem;
        margin-top: var(--spacing-1);
      }

      :host([open]) {
        display: block;
      }

      .content {
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
    `];s([b({type:Boolean,reflect:!0})],y.prototype,"open",2);y=s([u("shadcn-menubar-content")],y);let h=class extends d{constructor(){super(...arguments),this.disabled=!1,this.inset=!1}render(){return o`
      <div class="item" role="menuitem" tabindex="-1" ?aria-disabled=${this.disabled} @click=${this.activate}>
        <slot></slot>
        <slot name="shortcut" class="shortcut"></slot>
      </div>
    `}focusItem(){var e,n;(n=(e=this.shadowRoot)==null?void 0:e.querySelector(".item"))==null||n.focus()}activate(){this.disabled||this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0}))}};h.styles=[m,i`
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
    `];s([b({type:Boolean,reflect:!0})],h.prototype,"disabled",2);s([b({type:Boolean,reflect:!0})],h.prototype,"inset",2);h=s([u("shadcn-menubar-item")],h);let x=class extends d{render(){return o``}};x.styles=[m,i`
      :host {
        display: block;
        height: 1px;
        background-color: var(--muted);
        margin: var(--spacing-1) 0;
      }
    `];x=s([u("shadcn-menubar-separator")],x);let k=class extends d{constructor(){super(...arguments),this.inset=!1}render(){return o`<slot></slot>`}};k.styles=[m,i`
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
    `];s([b({type:Boolean,reflect:!0})],k.prototype,"inset",2);k=s([u("shadcn-menubar-label")],k);let l=class extends d{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}render(){return o`
      <div 
        class="item" 
        role="menuitemcheckbox" 
        tabindex="-1"
        aria-checked=${this.checked}
        ?aria-disabled=${this.disabled}
        @click=${this._toggle}
      >
        <div class="check-wrapper">
          ${this.checked?o`
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          `:""}
        </div>
        <slot></slot>
      </div>
    `}_toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}focusItem(){var e,n;(n=(e=this.shadowRoot)==null?void 0:e.querySelector(".item"))==null||n.focus()}activate(){this._toggle()}};l.styles=[m,i`
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
    `];s([b({type:Boolean,reflect:!0})],l.prototype,"checked",2);s([b({type:Boolean,reflect:!0})],l.prototype,"disabled",2);l=s([u("shadcn-menubar-checkbox-item")],l);const q={title:"Components/Menubar",component:"shadcn-menubar",tags:["autodocs"],parameters:{docs:{description:{component:"A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."}}}},f={render:()=>o`
    <div style="padding: 2rem; background: var(--background); height: 300px;">
      <shadcn-menubar>
        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>File</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-item>
              New Tab <span slot="shortcut">⌘T</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              New Window <span slot="shortcut">⌘N</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item disabled>
              New Incognito Window
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Share <span slot="shortcut">⌘S</span>
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Print... <span slot="shortcut">⌘P</span>
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>
        
        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>Edit</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-item>
              Undo <span slot="shortcut">⌘Z</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Redo <span slot="shortcut">⇧⌘Z</span>
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Cut <span slot="shortcut">⌘X</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Copy <span slot="shortcut">⌘C</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Paste <span slot="shortcut">⌘V</span>
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>

        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>View</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-checkbox-item checked>
              Always Show Bookmarks Bar
            </shadcn-menubar-checkbox-item>
            <shadcn-menubar-checkbox-item checked>
              Always Show Full URLs
            </shadcn-menubar-checkbox-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item inset>
              Reload <span slot="shortcut">⌘R</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item disabled inset>
              Force Reload <span slot="shortcut">⇧⌘R</span>
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item inset>
              Toggle Fullscreen
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item inset>
              Hide Sidebar
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>

        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>Profiles</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-label>Switch Profile</shadcn-menubar-label>
            <shadcn-menubar-item>
              Andy
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Benoit
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Luis
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Edit...
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Add Profile...
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>
      </shadcn-menubar>
    </div>
  `};var _,S,C;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem; background: var(--background); height: 300px;">
      <shadcn-menubar>
        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>File</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-item>
              New Tab <span slot="shortcut">⌘T</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              New Window <span slot="shortcut">⌘N</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item disabled>
              New Incognito Window
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Share <span slot="shortcut">⌘S</span>
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Print... <span slot="shortcut">⌘P</span>
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>
        
        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>Edit</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-item>
              Undo <span slot="shortcut">⌘Z</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Redo <span slot="shortcut">⇧⌘Z</span>
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Cut <span slot="shortcut">⌘X</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Copy <span slot="shortcut">⌘C</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Paste <span slot="shortcut">⌘V</span>
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>

        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>View</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-checkbox-item checked>
              Always Show Bookmarks Bar
            </shadcn-menubar-checkbox-item>
            <shadcn-menubar-checkbox-item checked>
              Always Show Full URLs
            </shadcn-menubar-checkbox-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item inset>
              Reload <span slot="shortcut">⌘R</span>
            </shadcn-menubar-item>
            <shadcn-menubar-item disabled inset>
              Force Reload <span slot="shortcut">⇧⌘R</span>
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item inset>
              Toggle Fullscreen
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item inset>
              Hide Sidebar
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>

        <shadcn-menubar-menu>
          <shadcn-menubar-trigger>Profiles</shadcn-menubar-trigger>
          <shadcn-menubar-content>
            <shadcn-menubar-label>Switch Profile</shadcn-menubar-label>
            <shadcn-menubar-item>
              Andy
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Benoit
            </shadcn-menubar-item>
            <shadcn-menubar-item>
              Luis
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Edit...
            </shadcn-menubar-item>
            <shadcn-menubar-separator></shadcn-menubar-separator>
            <shadcn-menubar-item>
              Add Profile...
            </shadcn-menubar-item>
          </shadcn-menubar-content>
        </shadcn-menubar-menu>
      </shadcn-menubar>
    </div>
  \`
}`,...(C=(S=f.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const B=["Default"];export{f as Default,B as __namedExportsOrder,q as default};
