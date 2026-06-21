import{i as h,a as m,x as c}from"./iframe-Baten_M5.js";import{t as p}from"./custom-element-C028faeO.js";import{n as a}from"./property-Cny5Lx-H.js";import{r as _}from"./state-CcYsaF-H.js";import{h as M}from"./menu-keyboard-DlrKeWZb.js";import{t as x,a as f}from"./index-Bkm5wONK.js";import"./preload-helper-BBXEHTOU.js";var I=Object.defineProperty,S=Object.getOwnPropertyDescriptor,n=(e,t,o,s)=>{for(var r=s>1?void 0:s?S(t,o):t,b=e.length-1,y;b>=0;b--)(y=e[b])&&(r=(s?y(t,o,r):y(r))||r);return s&&r&&I(t,o,r),r};let i=class extends m{constructor(){super(...arguments),this._open=!1,this._x=0,this._y=0,this._handleDocumentClick=()=>{this._close()},this._handleItemSelect=()=>{this._close()},this._handleDocumentKeyDown=e=>{if(!this._open)return;const t=this.querySelector("shadcn-context-menu-content");M(e,t,()=>this._close())}}connectedCallback(){super.connectedCallback(),this.addEventListener("select",this._handleItemSelect)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("select",this._handleItemSelect),this._removeDocumentListeners()}render(){return c`
      <div @contextmenu=${this._handleContextMenu}>
        <slot></slot>
        <slot name="menu"></slot>
      </div>
    `}_handleContextMenu(e){e.preventDefault(),this._open=!0,this._x=e.clientX,this._y=e.clientY,this._updateMenu(),document.addEventListener("click",this._handleDocumentClick),document.addEventListener("keydown",this._handleDocumentKeyDown),requestAnimationFrame(()=>{const t=this.querySelector("shadcn-context-menu-content");t==null||t.focusFirst()})}_close(){this._open&&(this._open=!1,this._updateMenu(),this._removeDocumentListeners())}_removeDocumentListeners(){document.removeEventListener("click",this._handleDocumentClick),document.removeEventListener("keydown",this._handleDocumentKeyDown)}_updateMenu(){const e=this.querySelector("shadcn-context-menu-content");e&&(e.open=this._open,e.x=this._x,e.y=this._y)}};i.styles=[x,f,h`
      :host {
        display: block;
      }
    `];n([_()],i.prototype,"_open",2);n([_()],i.prototype,"_x",2);n([_()],i.prototype,"_y",2);i=n([p("shadcn-context-menu")],i);let d=class extends m{constructor(){super(...arguments),this.open=!1,this.x=0,this.y=0}render(){const e=Math.max(8,Math.min(this.x,window.innerWidth-8)),o=`top: ${Math.max(8,Math.min(this.y,window.innerHeight-8))}px; left: ${e}px; max-width: calc(100vw - 16px); max-height: calc(100vh - 16px); overflow: auto;`;return c`
      <div class="content" role="menu" style=${o}>
        <slot></slot>
      </div>
    `}_items(){return Array.from(this.querySelectorAll("shadcn-context-menu-item, shadcn-context-menu-checkbox-item")).filter(e=>e instanceof l||e instanceof u).filter(e=>!e.disabled)}_focusedIndex(){const e=this._items(),t=document.activeElement;return e.findIndex(o=>{var s;return o.contains(t)||((s=o.shadowRoot)==null?void 0:s.contains(t))})}focusFirst(){var e;(e=this._items()[0])==null||e.focusItem()}focusLast(){var t;const e=this._items();(t=e[e.length-1])==null||t.focusItem()}focusNext(){var o;const e=this._items();if(e.length===0)return;const t=(this._focusedIndex()+1)%e.length;(o=e[t])==null||o.focusItem()}focusPrevious(){var s;const e=this._items();if(e.length===0)return;const t=this._focusedIndex(),o=t<=0?e.length-1:t-1;(s=e[o])==null||s.focusItem()}activateFocused(){const t=this._items()[this._focusedIndex()];t==null||t.activate()}};d.styles=[x,f,h`
      :host {
        display: none;
      }

      :host([open]) {
        display: contents;
      }

      .content {
        position: fixed;
        z-index: 50;
        min-width: 8rem;
        padding: var(--spacing-1);
        background-color: var(--popover);
        color: var(--popover-foreground);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        overflow: hidden;
        transform-origin: top left;
      }

      :host([open]) .content { animation: shadcn-zoom-in var(--transition-fast); }
      @media (prefers-reduced-motion: reduce) { .content { animation: none; } }
    `];n([a({type:Boolean,reflect:!0})],d.prototype,"open",2);n([a({type:Number})],d.prototype,"x",2);n([a({type:Number})],d.prototype,"y",2);d=n([p("shadcn-context-menu-content")],d);let l=class extends m{constructor(){super(...arguments),this.disabled=!1,this.inset=!1}render(){return c`
      <div class="item" role="menuitem" tabindex="-1" ?aria-disabled=${this.disabled} @click=${this.activate}>
        <slot></slot>
        <slot name="shortcut" class="shortcut"></slot>
      </div>
    `}focusItem(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".item"))==null||t.focus()}activate(){this.disabled||this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0}))}};l.styles=[x,f,h`
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
    `];n([a({type:Boolean,reflect:!0})],l.prototype,"disabled",2);n([a({type:Boolean,reflect:!0})],l.prototype,"inset",2);l=n([p("shadcn-context-menu-item")],l);let k=class extends m{render(){return c``}};k.styles=[x,f,h`
      :host {
        display: block;
        height: 1px;
        background-color: var(--muted);
        margin: var(--spacing-1) 0;
      }
    `];k=n([p("shadcn-context-menu-separator")],k);let g=class extends m{constructor(){super(...arguments),this.inset=!1}render(){return c`<slot></slot>`}};g.styles=[x,f,h`
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
    `];n([a({type:Boolean,reflect:!0})],g.prototype,"inset",2);g=n([p("shadcn-context-menu-label")],g);let u=class extends m{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}render(){return c`
      <div 
        class="item" 
        role="menuitemcheckbox" 
        tabindex="-1"
        aria-checked=${this.checked}
        ?aria-disabled=${this.disabled}
        @click=${this._toggle}
      >
        <div class="check-wrapper">
          ${this.checked?c`
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          `:""}
        </div>
        <slot></slot>
      </div>
    `}_toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}focusItem(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".item"))==null||t.focus()}activate(){this._toggle()}};u.styles=[x,f,h`
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
    `];n([a({type:Boolean,reflect:!0})],u.prototype,"checked",2);n([a({type:Boolean,reflect:!0})],u.prototype,"disabled",2);u=n([p("shadcn-context-menu-checkbox-item")],u);const F={title:"Components/Context Menu",component:"shadcn-context-menu",tags:["autodocs"],parameters:{docs:{description:{component:"Displays a menu to the user — such as a set of actions or functions — triggered by a right-click."}}}},v={render:()=>c`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; align-items: center; justify-content: center;">
      <shadcn-context-menu>
        <div style="border: 1px dashed var(--border); border-radius: var(--radius-md); padding: 4rem; text-align: center; color: var(--muted-foreground);">
          Right click here
        </div>
        <shadcn-context-menu-content slot="menu">
          <shadcn-context-menu-item>
            Back <span slot="shortcut">⌘[</span>
          </shadcn-context-menu-item>
          <shadcn-context-menu-item disabled>
            Forward <span slot="shortcut">⌘]</span>
          </shadcn-context-menu-item>
          <shadcn-context-menu-item>
            Reload <span slot="shortcut">⌘R</span>
          </shadcn-context-menu-item>
          <shadcn-context-menu-separator></shadcn-context-menu-separator>
          <shadcn-context-menu-checkbox-item checked>
            Show Bookmarks Bar
          </shadcn-context-menu-checkbox-item>
          <shadcn-context-menu-checkbox-item>
            Show Full URLs
          </shadcn-context-menu-checkbox-item>
          <shadcn-context-menu-separator></shadcn-context-menu-separator>
          <shadcn-context-menu-label inset>People</shadcn-context-menu-label>
          <shadcn-context-menu-separator></shadcn-context-menu-separator>
          <shadcn-context-menu-item inset>
            Pedro Duarte
          </shadcn-context-menu-item>
          <shadcn-context-menu-item inset>
            Colm Tuite
          </shadcn-context-menu-item>
        </shadcn-context-menu-content>
      </shadcn-context-menu>
    </div>
  `};var w,C,D;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem; background: var(--background); height: 300px; display: flex; align-items: center; justify-content: center;">
      <shadcn-context-menu>
        <div style="border: 1px dashed var(--border); border-radius: var(--radius-md); padding: 4rem; text-align: center; color: var(--muted-foreground);">
          Right click here
        </div>
        <shadcn-context-menu-content slot="menu">
          <shadcn-context-menu-item>
            Back <span slot="shortcut">⌘[</span>
          </shadcn-context-menu-item>
          <shadcn-context-menu-item disabled>
            Forward <span slot="shortcut">⌘]</span>
          </shadcn-context-menu-item>
          <shadcn-context-menu-item>
            Reload <span slot="shortcut">⌘R</span>
          </shadcn-context-menu-item>
          <shadcn-context-menu-separator></shadcn-context-menu-separator>
          <shadcn-context-menu-checkbox-item checked>
            Show Bookmarks Bar
          </shadcn-context-menu-checkbox-item>
          <shadcn-context-menu-checkbox-item>
            Show Full URLs
          </shadcn-context-menu-checkbox-item>
          <shadcn-context-menu-separator></shadcn-context-menu-separator>
          <shadcn-context-menu-label inset>People</shadcn-context-menu-label>
          <shadcn-context-menu-separator></shadcn-context-menu-separator>
          <shadcn-context-menu-item inset>
            Pedro Duarte
          </shadcn-context-menu-item>
          <shadcn-context-menu-item inset>
            Colm Tuite
          </shadcn-context-menu-item>
        </shadcn-context-menu-content>
      </shadcn-context-menu>
    </div>
  \`
}`,...(D=(C=v.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const j=["Default"];export{v as Default,j as __namedExportsOrder,F as default};
