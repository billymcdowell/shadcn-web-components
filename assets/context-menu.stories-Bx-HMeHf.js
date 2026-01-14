import{i as c,a as i,x as n}from"./lit-element-B21iCxvW.js";import{t as d}from"./custom-element-C028faeO.js";import{n as o}from"./property-CJLssJ-s.js";import{r as k}from"./state-CSOq1DZK.js";import{t as l}from"./index-BVWPfyNL.js";var B=Object.defineProperty,M=Object.getOwnPropertyDescriptor,e=(t,m,g,p)=>{for(var s=p>1?void 0:p?M(m,g):m,f=t.length-1,b;f>=0;f--)(b=t[f])&&(s=(p?b(m,g,s):b(s))||s);return p&&s&&B(m,g,s),s};let r=class extends i{constructor(){super(...arguments),this._open=!1,this._x=0,this._y=0,this._handleDocumentClick=()=>{this._open=!1,this._updateMenu(),document.removeEventListener("click",this._handleDocumentClick)}}render(){return n`
      <div @contextmenu=${this._handleContextMenu}>
        <slot></slot>
        <slot name="menu"></slot>
      </div>
    `}_handleContextMenu(t){t.preventDefault(),this._open=!0,this._x=t.clientX,this._y=t.clientY,this._updateMenu(),document.addEventListener("click",this._handleDocumentClick)}_updateMenu(){const t=this.querySelector("shadcn-context-menu-content");t&&(t.open=this._open,t.x=this._x,t.y=this._y)}};r.styles=[l,c`
      :host {
        display: block;
      }
    `];e([k()],r.prototype,"_open",2);e([k()],r.prototype,"_x",2);e([k()],r.prototype,"_y",2);r=e([d("shadcn-context-menu")],r);let a=class extends i{constructor(){super(...arguments),this.open=!1,this.x=0,this.y=0}render(){const t=`top: ${this.y}px; left: ${this.x}px;`;return n`
      <div class="content" role="menu" style=${t}>
        <slot></slot>
      </div>
    `}};a.styles=[l,c`
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
      }
    `];e([o({type:Boolean,reflect:!0})],a.prototype,"open",2);e([o({type:Number})],a.prototype,"x",2);e([o({type:Number})],a.prototype,"y",2);a=e([d("shadcn-context-menu-content")],a);let u=class extends i{constructor(){super(...arguments),this.disabled=!1,this.inset=!1}render(){return n`
      <div class="item" role="menuitem" ?aria-disabled=${this.disabled}>
        <slot></slot>
        <slot name="shortcut" class="shortcut"></slot>
      </div>
    `}};u.styles=[l,c`
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
    `];e([o({type:Boolean,reflect:!0})],u.prototype,"disabled",2);e([o({type:Boolean,reflect:!0})],u.prototype,"inset",2);u=e([d("shadcn-context-menu-item")],u);let y=class extends i{render(){return n``}};y.styles=[l,c`
      :host {
        display: block;
        height: 1px;
        background-color: var(--muted);
        margin: var(--spacing-1) 0;
      }
    `];y=e([d("shadcn-context-menu-separator")],y);let v=class extends i{constructor(){super(...arguments),this.inset=!1}render(){return n`<slot></slot>`}};v.styles=[l,c`
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
    `];e([o({type:Boolean,reflect:!0})],v.prototype,"inset",2);v=e([d("shadcn-context-menu-label")],v);let h=class extends i{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}render(){return n`
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
    `}_toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}};h.styles=[l,c`
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
    `];e([o({type:Boolean,reflect:!0})],h.prototype,"checked",2);e([o({type:Boolean,reflect:!0})],h.prototype,"disabled",2);h=e([d("shadcn-context-menu-checkbox-item")],h);const j={title:"Components/Context Menu",component:"shadcn-context-menu",tags:["autodocs"],parameters:{docs:{description:{component:"Displays a menu to the user — such as a set of actions or functions — triggered by a right-click."}}}},x={render:()=>n`
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
  `};var _,w,C;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(w=x.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const S=["Default"];export{x as Default,S as __namedExportsOrder,j as default};
