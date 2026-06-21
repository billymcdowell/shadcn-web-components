import{i as c,a as d,x as a,E as s}from"./iframe-Baten_M5.js";import{t as r}from"./custom-element-C028faeO.js";import{n as e}from"./property-Cny5Lx-H.js";import{t as f}from"./index-Bkm5wONK.js";import"./preload-helper-BBXEHTOU.js";var N=Object.defineProperty,I=Object.getOwnPropertyDescriptor,n=(i,p,x,g)=>{for(var o=g>1?void 0:g?I(p,x):p,b=i.length-1,k;b>=0;b--)(k=i[b])&&(o=(g?k(p,x,o):k(o))||o);return g&&o&&N(p,x,o),o};const L=c`
  :host {
    display: inline-flex;
  }

  a {
    display: inline-flex;
    min-width: 2.25rem;
    height: 2.25rem;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-1);
    padding: 0 var(--spacing-3);
    border: 1px solid transparent;
    border-radius: var(--pagination-border-radius, var(--radius-md));
    background: transparent;
    color: var(--pagination-color, var(--foreground));
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-medium);
    line-height: var(--leading-none);
    text-decoration: none;
    white-space: nowrap;
    transition: color var(--transition-fast), background-color var(--transition-fast),
      border-color var(--transition-fast), box-shadow var(--transition-fast);
  }

  a:hover:not([aria-disabled='true']) {
    background: var(--pagination-hover-background, var(--accent));
    color: var(--pagination-hover-color, var(--accent-foreground));
  }

  a:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  a[aria-current='page'] {
    border-color: var(--pagination-active-border, var(--input));
    background: var(--pagination-active-background, var(--background));
    color: var(--pagination-active-color, var(--foreground));
  }

  a[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg,
  ::slotted(svg) {
    width: 1rem;
    height: 1rem;
    flex: none;
  }

  .direction {
    min-width: 0;
  }

  @media (max-width: 39.999rem) {
    .direction {
      width: 2.25rem;
      padding: 0;
    }

    .direction-text {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  }
`;let y=class extends d{render(){return a`<nav part="nav" aria-label="Pagination"><slot></slot></nav>`}};y.styles=[f,c`
      :host {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      nav {
        display: contents;
      }
    `];y=n([r("shadcn-pagination")],y);let w=class extends d{render(){return a`<ul part="list"><slot></slot></ul>`}};w.styles=[f,c`
      :host {
        display: block;
      }

      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--pagination-gap, var(--spacing-1));
        padding: 0;
        margin: 0;
        list-style: none;
      }
    `];w=n([r("shadcn-pagination-content")],w);let P=class extends d{render(){return a`<li part="item"><slot></slot></li>`}};P.styles=c`
    :host {
      display: contents;
    }
  `;P=n([r("shadcn-pagination-item")],P);let t=class extends d{constructor(){super(...arguments),this.href="#",this.target="",this.rel="",this.label="",this.current=!1,this.disabled=!1}renderAnchor(i=a`<slot></slot>`,p=""){return a`
      <a
        part="link"
        class=${p}
        href=${this.disabled?s:this.href}
        target=${this.target||s}
        rel=${this.rel||s}
        aria-label=${this.label||s}
        aria-current=${this.current?"page":s}
        aria-disabled=${this.disabled?"true":s}
        tabindex=${this.disabled?"-1":s}
        @click=${this.handleClick}
      >${i}</a>
    `}render(){return this.renderAnchor()}handleClick(i){this.disabled&&(i.preventDefault(),i.stopPropagation())}};t.styles=[f,L];n([e({type:String})],t.prototype,"href",2);n([e({type:String})],t.prototype,"target",2);n([e({type:String})],t.prototype,"rel",2);n([e({type:String})],t.prototype,"label",2);n([e({type:Boolean,reflect:!0})],t.prototype,"current",2);n([e({type:Boolean,reflect:!0})],t.prototype,"disabled",2);t=n([r("shadcn-pagination-link")],t);let $=class extends t{constructor(){super(),this.text="Previous",this.label="Go to previous page"}render(){return this.renderAnchor(a`
        <slot name="icon">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </slot>
        <span class="direction-text"><slot>${this.text}</slot></span>
      `,"direction")}};n([e({type:String})],$.prototype,"text",2);$=n([r("shadcn-pagination-previous")],$);let S=class extends t{constructor(){super(),this.text="Next",this.label="Go to next page"}render(){return this.renderAnchor(a`
        <span class="direction-text"><slot>${this.text}</slot></span>
        <slot name="icon">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </slot>
      `,"direction")}};n([e({type:String})],S.prototype,"text",2);S=n([r("shadcn-pagination-next")],S);let v=class extends d{constructor(){super(...arguments),this.label="More pages"}render(){return a`
      <span part="ellipsis" aria-hidden="true">
        <slot>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </slot>
      </span>
      <span class="sr-only">${this.label}</span>
    `}};v.styles=[f,c`
      :host {
        display: inline-flex;
      }

      span {
        display: inline-flex;
        width: 2.25rem;
        height: 2.25rem;
        align-items: center;
        justify-content: center;
      }

      svg,
      ::slotted(svg) {
        width: 1rem;
        height: 1rem;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `];n([e({type:String})],v.prototype,"label",2);v=n([r("shadcn-pagination-ellipsis")],v);const Q={title:"Components/Pagination",component:"shadcn-pagination",tags:["autodocs"],parameters:{docs:{description:{component:"Pagination with page links, previous and next navigation, active state, and omitted-page indicators."}}},argTypes:{current:{control:"boolean",description:"Marks the numbered link as the current page."},disabled:{control:"boolean",description:"Makes the previous-page link unavailable and removes it from tab order."},text:{control:"text",description:"Sets the visible previous-page label."}}},h={args:{current:!0,disabled:!1,text:"Previous"},render:i=>a`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item>
          <shadcn-pagination-previous
            href="?page=1"
            text=${i.text}
            ?disabled=${i.disabled}
          ></shadcn-pagination-previous>
        </shadcn-pagination-item>
        <shadcn-pagination-item>
          <shadcn-pagination-link href="?page=2" ?current=${i.current}>2</shadcn-pagination-link>
        </shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=3"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  `},l={render:()=>a`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item><shadcn-pagination-previous href="?page=1"></shadcn-pagination-previous></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=1">1</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=2" current>2</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=3">3</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-ellipsis></shadcn-pagination-ellipsis></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=3"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  `},m={render:()=>a`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item><shadcn-pagination-previous disabled></shadcn-pagination-previous></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=1" current>1</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=2">2</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=3">3</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=2"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  `},u={render:()=>a`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item><shadcn-pagination-previous href="?page=4" text="Prev"></shadcn-pagination-previous></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=5" current label="Page 5">5</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=6"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  `};var C,j,_;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    current: true,
    disabled: false,
    text: 'Previous'
  },
  render: args => html\`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item>
          <shadcn-pagination-previous
            href="?page=1"
            text=\${args.text}
            ?disabled=\${args.disabled}
          ></shadcn-pagination-previous>
        </shadcn-pagination-item>
        <shadcn-pagination-item>
          <shadcn-pagination-link href="?page=2" ?current=\${args.current}>2</shadcn-pagination-link>
        </shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=3"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  \`
}`,...(_=(j=h.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var B,D,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => html\`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item><shadcn-pagination-previous href="?page=1"></shadcn-pagination-previous></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=1">1</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=2" current>2</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=3">3</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-ellipsis></shadcn-pagination-ellipsis></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=3"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  \`
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var A,z,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => html\`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item><shadcn-pagination-previous disabled></shadcn-pagination-previous></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=1" current>1</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=2">2</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=3">3</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=2"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  \`
}`,...(E=(z=m.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var M,F,G;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <shadcn-pagination>
      <shadcn-pagination-content>
        <shadcn-pagination-item><shadcn-pagination-previous href="?page=4" text="Prev"></shadcn-pagination-previous></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-link href="?page=5" current label="Page 5">5</shadcn-pagination-link></shadcn-pagination-item>
        <shadcn-pagination-item><shadcn-pagination-next href="?page=6"></shadcn-pagination-next></shadcn-pagination-item>
      </shadcn-pagination-content>
    </shadcn-pagination>
  \`
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const R=["Playground","Default","FirstPage","Compact"];export{u as Compact,l as Default,m as FirstPage,h as Playground,R as __namedExportsOrder,Q as default};
