import{i as o,a as r,x as a}from"./iframe-Baten_M5.js";import{t as s}from"./custom-element-C028faeO.js";import{n as w}from"./property-Cny5Lx-H.js";import{r as S}from"./state-CcYsaF-H.js";import{t as d,a as l}from"./index-Bkm5wONK.js";import"./preload-helper-BBXEHTOU.js";var C=Object.defineProperty,T=Object.getOwnPropertyDescriptor,n=(i,e,h,c)=>{for(var t=c>1?void 0:c?T(e,h):e,f=i.length-1,y;f>=0;f--)(y=i[f])&&(t=(c?y(e,h,t):y(t))||t);return c&&t&&C(e,h,t),t};let b=class extends r{render(){return a`
      <nav class="navigation-menu" aria-label="Main">
        <slot></slot>
      </nav>
    `}};b.styles=[d,l,o`
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
    `];b=n([s("shadcn-navigation-menu")],b);let x=class extends r{render(){return a`
      <ul>
        <slot></slot>
      </ul>
    `}};x.styles=[d,l,o`
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
    `];x=n([s("shadcn-navigation-menu-list")],x);let g=class extends r{constructor(){super(...arguments),this._open=!1,this._closeTimer=null}render(){return a`
      <li 
        @mouseenter=${this._handleMouseEnter} 
        @mouseleave=${this._handleMouseLeave}
        @focusout=${this._handleFocusOut}
      >
        <slot></slot>
      </li>
    `}_handleMouseEnter(){this._closeTimer&&(window.clearTimeout(this._closeTimer),this._closeTimer=null),this._open=!0,this._updateChildren()}_handleMouseLeave(){this._closeTimer=window.setTimeout(()=>{this._open=!1,this._updateChildren()},150)}_handleFocusOut(i){this.contains(i.relatedTarget)||(this._open=!1,this._updateChildren())}_updateChildren(){const i=this.querySelector("shadcn-navigation-menu-trigger"),e=this.querySelector("shadcn-navigation-menu-content");i&&(i.open=this._open),e&&(e.open=this._open)}};g.styles=[d,l,o`
      :host {
        display: block;
        position: relative;
      }
    `];n([S()],g.prototype,"_open",2);g=n([s("shadcn-navigation-menu-item")],g);let u=class extends r{constructor(){super(...arguments),this.open=!1}render(){return a`
      <button 
        aria-expanded=${this.open}
        aria-haspopup="true"
      >
        <slot></slot>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
    `}};u.styles=[d,l,o`
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
    `];n([w({type:Boolean})],u.prototype,"open",2);u=n([s("shadcn-navigation-menu-trigger")],u);let v=class extends r{constructor(){super(...arguments),this.open=!1}render(){return a`
      <div class="content">
        <slot></slot>
      </div>
    `}};v.styles=[d,l,o`
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
        animation: shadcn-fade-in var(--transition-normal);
      }

      @media (prefers-reduced-motion: reduce) { :host([open]) { animation: none; } }

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
    `];n([w({type:Boolean,reflect:!0})],v.prototype,"open",2);v=n([s("shadcn-navigation-menu-content")],v);let p=class extends r{constructor(){super(...arguments),this.href="#"}render(){return a`
      <a href=${this.href}>
        <slot></slot>
      </a>
    `}};p.styles=[d,l,o`
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
    `];n([w({type:String})],p.prototype,"href",2);p=n([s("shadcn-navigation-menu-link")],p);const B={title:"Components/Navigation Menu",component:"shadcn-navigation-menu",tags:["autodocs"],parameters:{docs:{description:{component:"A collection of links for navigating websites."}}}},m={render:()=>a`
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
  `};var k,z,_;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(z=m.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const P=["Default"];export{m as Default,P as __namedExportsOrder,B as default};
