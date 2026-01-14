import{i as n,a as d,x as r}from"./lit-element-B21iCxvW.js";import{t as c}from"./custom-element-C028faeO.js";import{n as z}from"./property-CJLssJ-s.js";import{t as s}from"./index-BVWPfyNL.js";var E=Object.defineProperty,I=Object.getOwnPropertyDescriptor,e=(x,b,l,m)=>{for(var a=m>1?void 0:m?I(b,l):b,p=x.length-1,g;p>=0;p--)(g=x[p])&&(a=(m?g(b,l,a):g(a))||a);return m&&a&&E(b,l,a),a};let v=class extends d{render(){return r`
      <nav aria-label="breadcrumb">
        <ol>
          <slot></slot>
        </ol>
      </nav>
    `}};v.styles=[s,n`
      :host {
        display: block;
      }

      nav {
        display: block;
      }

      ol {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-1-5);
        padding: 0;
        margin: 0;
        list-style: none;
        font-family: var(--font-sans);
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
      }

      ::slotted(shadcn-breadcrumb-separator:last-child) {
        display: none;
      }
    `];v=e([c("shadcn-breadcrumb")],v);let k=class extends d{render(){return r`
      <li style="display: contents;">
        <slot></slot>
      </li>
    `}};k.styles=[s,n`
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-1-5);
      }
    `];k=e([c("shadcn-breadcrumb-item")],k);let t=class extends d{constructor(){super(...arguments),this.href="#",this.target=""}render(){return r`
      <a href=${this.href} target=${this.target||void 0}>
        <slot></slot>
      </a>
    `}};t.styles=[s,n`
      :host {
        display: inline-block;
      }

      a {
        color: inherit;
        text-decoration: none;
        transition: color var(--transition-fast);
      }

      a:hover {
        color: var(--foreground);
      }
    `];e([z({type:String})],t.prototype,"href",2);e([z({type:String})],t.prototype,"target",2);t=e([c("shadcn-breadcrumb-link")],t);let f=class extends d{render(){return r`
      <span aria-current="page">
        <slot></slot>
      </span>
    `}};f.styles=[s,n`
      :host {
        display: inline-block;
        color: var(--foreground);
        font-weight: var(--font-normal);
      }
    `];f=e([c("shadcn-breadcrumb-page")],f);let w=class extends d{render(){return r`
      <li role="presentation" aria-hidden="true" style="display: contents;">
        <slot>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </slot>
      </li>
    `}};w.styles=[s,n`
      :host {
        display: inline-flex;
        align-items: center;
        color: var(--muted-foreground);
        opacity: 0.5;
      }

      svg {
        width: 1rem;
        height: 1rem;
      }
    `];w=e([c("shadcn-breadcrumb-separator")],w);let y=class extends d{render(){return r`
      <span role="presentation" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `}};y.styles=[s,n`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        height: 1.5rem;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `];y=e([c("shadcn-breadcrumb-ellipsis")],y);const G={title:"Components/Breadcrumb",component:"shadcn-breadcrumb",tags:["autodocs"],parameters:{docs:{description:{component:"Displays the path to the current resource using a hierarchy of links."}}}},o={render:()=>r`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/components">Components</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Breadcrumb</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  `},i={render:()=>r`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m13 17 5-5-5-5M6 17l5-5-5-5"/>
          </svg>
        </shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/components">Components</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m13 17 5-5-5-5M6 17l5-5-5-5"/>
          </svg>
        </shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Breadcrumb</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  `},u={render:()=>r`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-ellipsis></shadcn-breadcrumb-ellipsis>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/components">Components</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Breadcrumb</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  `},h={render:()=>r`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <div style="position: relative; display: inline-flex; align-items: center;">
            <shadcn-breadcrumb-ellipsis style="cursor: pointer;"></shadcn-breadcrumb-ellipsis>
            <!-- Dropdown would go here in a real app -->
          </div>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/docs">Documentation</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Components</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  `};var C,B,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/components">Components</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Breadcrumb</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  \`
}`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var j,S,H;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m13 17 5-5-5-5M6 17l5-5-5-5"/>
          </svg>
        </shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/components">Components</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m13 17 5-5-5-5M6 17l5-5-5-5"/>
          </svg>
        </shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Breadcrumb</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  \`
}`,...(H=(S=i.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var _,M,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-ellipsis></shadcn-breadcrumb-ellipsis>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/components">Components</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Breadcrumb</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  \`
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var P,W,$;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-breadcrumb>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <div style="position: relative; display: inline-flex; align-items: center;">
            <shadcn-breadcrumb-ellipsis style="cursor: pointer;"></shadcn-breadcrumb-ellipsis>
            <!-- Dropdown would go here in a real app -->
          </div>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-link href="/docs">Documentation</shadcn-breadcrumb-link>
        </shadcn-breadcrumb-item>
        <shadcn-breadcrumb-separator></shadcn-breadcrumb-separator>
        <shadcn-breadcrumb-item>
          <shadcn-breadcrumb-page>Components</shadcn-breadcrumb-page>
        </shadcn-breadcrumb-item>
      </shadcn-breadcrumb>
    </div>
  \`
}`,...($=(W=h.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const J=["Default","WithCustomSeparator","Collapsed","WithDropdown"];export{u as Collapsed,o as Default,i as WithCustomSeparator,h as WithDropdown,J as __namedExportsOrder,G as default};
