import{i as t,a as s,x as n}from"./lit-element-B21iCxvW.js";import{t as o}from"./custom-element-C028faeO.js";import{n as i}from"./property-CJLssJ-s.js";import{r as S}from"./state-CSOq1DZK.js";import{t as c}from"./index-BVWPfyNL.js";var B=Object.defineProperty,R=Object.getOwnPropertyDescriptor,e=(a,r,v,h)=>{for(var d=h>1?void 0:h?R(r,v):r,f=a.length-1,k;f>=0;f--)(k=a[f])&&(d=(h?k(r,v,d):k(d))||d);return h&&d&&B(r,v,d),d};let y=class extends s{render(){return n`
      <div class="menubar" role="menubar">
        <slot></slot>
      </div>
    `}};y.styles=[c,t`
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
    `];y=e([o("shadcn-menubar")],y);let l=class extends s{constructor(){super(...arguments),this._open=!1}render(){return n`
      <div 
        @click=${this._handleClick}
        @focusout=${this._handleFocusOut}
      >
        <slot></slot>
      </div>
    `}_handleClick(a){a.target.tagName.toLowerCase()==="shadcn-menubar-trigger"&&(this._open=!this._open,this._updateChildren())}_handleFocusOut(a){this.contains(a.relatedTarget)||(this._open=!1,this._updateChildren())}_updateChildren(){const a=this.querySelector("shadcn-menubar-content");a&&(a.open=this._open);const r=this.querySelector("shadcn-menubar-trigger");r&&(this._open?r.setAttribute("data-state","open"):r.removeAttribute("data-state"))}};l.styles=[c,t`
      :host {
        display: block;
        position: relative;
      }
    `];e([S()],l.prototype,"_open",2);l=e([o("shadcn-menubar-menu")],l);let w=class extends s{render(){return n`
      <button type="button" role="menuitem" aria-haspopup="true">
        <slot></slot>
      </button>
    `}};w.styles=[c,t`
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
    `];w=e([o("shadcn-menubar-trigger")],w);let p=class extends s{constructor(){super(...arguments),this.open=!1}render(){return n`
      <div class="content" role="menu">
        <slot></slot>
      </div>
    `}};p.styles=[c,t`
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
      }
    `];e([i({type:Boolean,reflect:!0})],p.prototype,"open",2);p=e([o("shadcn-menubar-content")],p);let m=class extends s{constructor(){super(...arguments),this.disabled=!1,this.inset=!1}render(){return n`
      <div class="item" role="menuitem" ?aria-disabled=${this.disabled}>
        <slot></slot>
        <slot name="shortcut" class="shortcut"></slot>
      </div>
    `}};m.styles=[c,t`
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
    `];e([i({type:Boolean,reflect:!0})],m.prototype,"disabled",2);e([i({type:Boolean,reflect:!0})],m.prototype,"inset",2);m=e([o("shadcn-menubar-item")],m);let x=class extends s{render(){return n``}};x.styles=[c,t`
      :host {
        display: block;
        height: 1px;
        background-color: var(--muted);
        margin: var(--spacing-1) 0;
      }
    `];x=e([o("shadcn-menubar-separator")],x);let g=class extends s{constructor(){super(...arguments),this.inset=!1}render(){return n`<slot></slot>`}};g.styles=[c,t`
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
    `];e([i({type:Boolean,reflect:!0})],g.prototype,"inset",2);g=e([o("shadcn-menubar-label")],g);let u=class extends s{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}render(){return n`
      <div 
        class="item" 
        role="menuitemcheckbox" 
        aria-checked=${this.checked}
        ?aria-disabled=${this.disabled}
        @click=${this._toggle}
      >
        <div class="check-wrapper">
          ${this.checked?n`
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          `:""}
        </div>
        <slot></slot>
      </div>
    `}_toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}};u.styles=[c,t`
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
    `];e([i({type:Boolean,reflect:!0})],u.prototype,"checked",2);e([i({type:Boolean,reflect:!0})],u.prototype,"disabled",2);u=e([o("shadcn-menubar-checkbox-item")],u);const T={title:"Components/Menubar",component:"shadcn-menubar",tags:["autodocs"],parameters:{docs:{description:{component:"A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."}}}},b={render:()=>n`
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
  `};var _,C,P;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(C=b.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const $=["Default"];export{b as Default,$ as __namedExportsOrder,T as default};
