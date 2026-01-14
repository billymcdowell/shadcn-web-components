import{i as o,a as r,x as a}from"./lit-element-B21iCxvW.js";import{t as s}from"./custom-element-C028faeO.js";import{n as x}from"./property-CJLssJ-s.js";import{r as _}from"./state-CSOq1DZK.js";import{t as d}from"./index-BVWPfyNL.js";var S=Object.defineProperty,C=Object.getOwnPropertyDescriptor,n=(i,t,p,l)=>{for(var e=l>1?void 0:l?C(t,p):t,h=i.length-1,f;h>=0;h--)(f=i[h])&&(e=(l?f(t,p,e):f(e))||e);return l&&e&&S(t,p,e),e};let y=class extends r{render(){return a`
      <nav class="navigation-menu" aria-label="Main">
        <slot></slot>
      </nav>
    `}};y.styles=[d,o`
      :host {
        display: block;
        position: relative;
        z-index: 10;
        max-width: max-content;
      }

      .navigation-menu {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
      }
    `];y=n([s("shadcn-navigation-menu")],y);let b=class extends r{render(){return a`
      <ul>
        <slot></slot>
      </ul>
    `}};b.styles=[d,o`
      :host {
        display: block;
      }

      ul {
        display: flex;
        flex-direction: row;
        gap: var(--spacing-1);
        padding: 0;
        margin: 0;
        list-style: none;
        align-items: center;
      }
    `];b=n([s("shadcn-navigation-menu-list")],b);let m=class extends r{constructor(){super(...arguments),this._open=!1,this._closeTimer=null}render(){return a`
      <li 
        @mouseenter=${this._handleMouseEnter} 
        @mouseleave=${this._handleMouseLeave}
        @focusout=${this._handleFocusOut}
      >
        <slot></slot>
      </li>
    `}_handleMouseEnter(){this._closeTimer&&(window.clearTimeout(this._closeTimer),this._closeTimer=null),this._open=!0,this._updateChildren()}_handleMouseLeave(){this._closeTimer=window.setTimeout(()=>{this._open=!1,this._updateChildren()},150)}_handleFocusOut(i){this.contains(i.relatedTarget)||(this._open=!1,this._updateChildren())}_updateChildren(){const i=this.querySelector("shadcn-navigation-menu-trigger"),t=this.querySelector("shadcn-navigation-menu-content");i&&(i.open=this._open),t&&(t.open=this._open)}};m.styles=[d,o`
      :host {
        display: block;
        position: relative;
      }
    `];n([_()],m.prototype,"_open",2);m=n([s("shadcn-navigation-menu-item")],m);let g=class extends r{constructor(){super(...arguments),this.open=!1}render(){return a`
      <button 
        aria-expanded=${this.open}
        aria-haspopup="true"
      >
        <slot></slot>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
    `}};g.styles=[d,o`
      :host {
        display: inline-block;
      }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-1);
        border-radius: var(--radius-md);
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        line-height: var(--leading-none);
        padding: var(--spacing-2) var(--spacing-4);
        background-color: transparent;
        color: var(--foreground);
        border: none;
        cursor: pointer;
        transition: background-color var(--transition-fast), color var(--transition-fast);
        height: 2.5rem;
      }

      button:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      button:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .icon {
        transition: transform var(--transition-normal);
        width: 0.75rem;
        height: 0.75rem;
      }

      button[aria-expanded="true"] .icon {
        transform: rotate(180deg);
      }
    `];n([x({type:Boolean})],g.prototype,"open",2);g=n([s("shadcn-navigation-menu-trigger")],g);let u=class extends r{constructor(){super(...arguments),this.open=!1}render(){return a`
      <div class="content">
        <slot></slot>
      </div>
    `}};u.styles=[d,o`
      :host {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        width: max-content;
        opacity: 0;
        pointer-events: none;
        transform-origin: top center;
        transform: translateY(-10px) scale(0.95);
        transition: opacity var(--transition-normal), transform var(--transition-normal);
        z-index: 50;
      }

      :host([open]) {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0) scale(1);
      }

      .content {
        margin-top: var(--spacing-1-5);
        background-color: var(--popover);
        color: var(--popover-foreground);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        padding: var(--spacing-4);
        min-width: 200px;
      }
    `];n([x({type:Boolean,reflect:!0})],u.prototype,"open",2);u=n([s("shadcn-navigation-menu-content")],u);let v=class extends r{constructor(){super(...arguments),this.href="#"}render(){return a`
      <a href=${this.href}>
        <slot></slot>
      </a>
    `}};v.styles=[d,o`
      :host {
        display: block;
      }

      a {
        display: block;
        padding: var(--spacing-2) var(--spacing-3);
        font-size: var(--font-size-sm);
        line-height: var(--leading-none);
        color: var(--foreground);
        text-decoration: none;
        border-radius: var(--radius-md);
        transition: background-color var(--transition-fast), color var(--transition-fast);
      }

      a:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      a:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }
    `];n([x({type:String})],v.prototype,"href",2);v=n([s("shadcn-navigation-menu-link")],v);const N={title:"Components/Navigation Menu",component:"shadcn-navigation-menu",tags:["autodocs"],parameters:{docs:{description:{component:"A collection of links for navigating websites."}}}},c={render:()=>a`
    <div style="padding: 2rem; background: var(--background); height: 300px;">
      <shadcn-navigation-menu>
        <shadcn-navigation-menu-list>
          <shadcn-navigation-menu-item>
            <shadcn-navigation-menu-trigger>Getting Started</shadcn-navigation-menu-trigger>
            <shadcn-navigation-menu-content>
              <div style="display: grid; gap: 0.5rem; width: 400px; grid-template-columns: .75fr 1fr;">
                <div style="grid-row: span 3; background: linear-gradient(to bottom right, var(--primary), var(--secondary)); border-radius: var(--radius-md); padding: 1rem; display: flex; flex-direction: column; justify-content: flex-end;">
                  <div style="font-weight: bold; color: white; margin-bottom: 0.5rem;">shadcn/ui</div>
                  <p style="font-size: var(--font-size-sm); color: rgba(255,255,255,0.9); margin: 0;">
                    Beautifully designed components built with Radix UI and Tailwind CSS.
                  </p>
                </div>
                <shadcn-navigation-menu-link href="/docs">
                  <div style="font-weight: var(--font-medium); margin-bottom: 0.25rem;">Introduction</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/installation">
                  <div style="font-weight: var(--font-medium); margin-bottom: 0.25rem;">Installation</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    How to install dependencies and structure your app.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/typography">
                  <div style="font-weight: var(--font-medium); margin-bottom: 0.25rem;">Typography</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Styles for headings, paragraphs, lists...etc
                  </p>
                </shadcn-navigation-menu-link>
              </div>
            </shadcn-navigation-menu-content>
          </shadcn-navigation-menu-item>
          
          <shadcn-navigation-menu-item>
            <shadcn-navigation-menu-trigger>Components</shadcn-navigation-menu-trigger>
            <shadcn-navigation-menu-content>
              <div style="display: grid; width: 400px; gap: 0.5rem; grid-template-columns: 1fr 1fr;">
                <shadcn-navigation-menu-link href="/docs/primitives/alert-dialog">
                  <div style="font-weight: var(--font-medium);">Alert Dialog</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    A modal dialog that interrupts the user.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/primitives/hover-card">
                  <div style="font-weight: var(--font-medium);">Hover Card</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    For sighted users to preview content.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/primitives/progress">
                  <div style="font-weight: var(--font-medium);">Progress</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Displays an indicator showing completion progress.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/primitives/scroll-area">
                  <div style="font-weight: var(--font-medium);">Scroll-area</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Visually or semantically separates content.
                  </p>
                </shadcn-navigation-menu-link>
              </div>
            </shadcn-navigation-menu-content>
          </shadcn-navigation-menu-item>

          <shadcn-navigation-menu-item>
            <shadcn-navigation-menu-link href="/docs">
              Documentation
            </shadcn-navigation-menu-link>
          </shadcn-navigation-menu-item>
        </shadcn-navigation-menu-list>
      </shadcn-navigation-menu>
    </div>
  `};var w,k,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem; background: var(--background); height: 300px;">
      <shadcn-navigation-menu>
        <shadcn-navigation-menu-list>
          <shadcn-navigation-menu-item>
            <shadcn-navigation-menu-trigger>Getting Started</shadcn-navigation-menu-trigger>
            <shadcn-navigation-menu-content>
              <div style="display: grid; gap: 0.5rem; width: 400px; grid-template-columns: .75fr 1fr;">
                <div style="grid-row: span 3; background: linear-gradient(to bottom right, var(--primary), var(--secondary)); border-radius: var(--radius-md); padding: 1rem; display: flex; flex-direction: column; justify-content: flex-end;">
                  <div style="font-weight: bold; color: white; margin-bottom: 0.5rem;">shadcn/ui</div>
                  <p style="font-size: var(--font-size-sm); color: rgba(255,255,255,0.9); margin: 0;">
                    Beautifully designed components built with Radix UI and Tailwind CSS.
                  </p>
                </div>
                <shadcn-navigation-menu-link href="/docs">
                  <div style="font-weight: var(--font-medium); margin-bottom: 0.25rem;">Introduction</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/installation">
                  <div style="font-weight: var(--font-medium); margin-bottom: 0.25rem;">Installation</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    How to install dependencies and structure your app.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/typography">
                  <div style="font-weight: var(--font-medium); margin-bottom: 0.25rem;">Typography</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Styles for headings, paragraphs, lists...etc
                  </p>
                </shadcn-navigation-menu-link>
              </div>
            </shadcn-navigation-menu-content>
          </shadcn-navigation-menu-item>
          
          <shadcn-navigation-menu-item>
            <shadcn-navigation-menu-trigger>Components</shadcn-navigation-menu-trigger>
            <shadcn-navigation-menu-content>
              <div style="display: grid; width: 400px; gap: 0.5rem; grid-template-columns: 1fr 1fr;">
                <shadcn-navigation-menu-link href="/docs/primitives/alert-dialog">
                  <div style="font-weight: var(--font-medium);">Alert Dialog</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    A modal dialog that interrupts the user.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/primitives/hover-card">
                  <div style="font-weight: var(--font-medium);">Hover Card</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    For sighted users to preview content.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/primitives/progress">
                  <div style="font-weight: var(--font-medium);">Progress</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Displays an indicator showing completion progress.
                  </p>
                </shadcn-navigation-menu-link>
                <shadcn-navigation-menu-link href="/docs/primitives/scroll-area">
                  <div style="font-weight: var(--font-medium);">Scroll-area</div>
                  <p style="font-size: var(--font-size-xs); color: var(--muted-foreground); margin: 0;">
                    Visually or semantically separates content.
                  </p>
                </shadcn-navigation-menu-link>
              </div>
            </shadcn-navigation-menu-content>
          </shadcn-navigation-menu-item>

          <shadcn-navigation-menu-item>
            <shadcn-navigation-menu-link href="/docs">
              Documentation
            </shadcn-navigation-menu-link>
          </shadcn-navigation-menu-item>
        </shadcn-navigation-menu-list>
      </shadcn-navigation-menu>
    </div>
  \`
}`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const O=["Default"];export{c as Default,O as __namedExportsOrder,N as default};
