import{i as m,a as f,x as h}from"./iframe-CBkYFfHe.js";import{t as v}from"./custom-element-C028faeO.js";import{n as a}from"./property-DkYxKTO5.js";import{t as y}from"./index-DHlp-d2y.js";import"./preload-helper-BBXEHTOU.js";var k=Object.defineProperty,B=Object.getOwnPropertyDescriptor,t=(e,s,o,i)=>{for(var r=i>1?void 0:i?B(s,o):s,u=e.length-1,g;u>=0;u--)(g=e[u])&&(r=(i?g(s,o,r):g(r))||r);return i&&r&&k(s,o,r),r};let n=class extends f{constructor(){super(...arguments),this.open=!1,this.disabled=!1,this._handleToggle=()=>{this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent("collapsible-change",{bubbles:!0,composed:!0,detail:{open:this.open}})))},this._syncChildren=()=>{this.querySelectorAll("shadcn-collapsible-trigger").forEach(e=>{e.open=this.open,e.disabled=this.disabled}),this.querySelectorAll("shadcn-collapsible-content").forEach(e=>{e.open=this.open})}}connectedCallback(){super.connectedCallback(),this.addEventListener("collapsible-toggle",this._handleToggle)}disconnectedCallback(){this.removeEventListener("collapsible-toggle",this._handleToggle),super.disconnectedCallback()}render(){return h`<slot @slotchange=${this._syncChildren}></slot>`}updated(){this._syncChildren()}};n.styles=[y,m`:host { display: block; }`];t([a({type:Boolean,reflect:!0})],n.prototype,"open",2);t([a({type:Boolean,reflect:!0})],n.prototype,"disabled",2);n=t([v("shadcn-collapsible")],n);let l=class extends f{constructor(){super(...arguments),this.open=!1,this.disabled=!1}render(){return h`<button part="trigger" type="button" aria-expanded=${this.open} ?disabled=${this.disabled} @click=${this._toggle}><slot></slot></button>`}focus(e){var s,o;(o=(s=this.shadowRoot)==null?void 0:s.querySelector("button"))==null||o.focus(e)}_toggle(){this.dispatchEvent(new CustomEvent("collapsible-toggle",{bubbles:!0,composed:!0}))}};l.styles=[y,m`
    :host { display: inline-block; }
    button { appearance: none; border: 0; background: transparent; color: inherit; font: inherit; padding: 0; cursor: pointer; }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; border-radius: var(--radius-sm); }
    button:disabled { cursor: not-allowed; opacity: .5; }
  `];t([a({type:Boolean})],l.prototype,"open",2);t([a({type:Boolean})],l.prototype,"disabled",2);l=t([v("shadcn-collapsible-trigger")],l);let b=class extends f{constructor(){super(...arguments),this.open=!1}render(){return h`<div part="content" class="content" ?inert=${!this.open} aria-hidden=${String(!this.open)}><slot></slot></div>`}};b.styles=[y,m`
    :host { display: block; }
    :host { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--transition-normal); }
    :host([open]) { grid-template-rows: 1fr; }
    .content { min-height: 0; overflow: hidden; }
    @media (prefers-reduced-motion: reduce) { :host { transition-duration: 0ms; } }
  `];t([a({type:Boolean,reflect:!0})],b.prototype,"open",2);b=t([v("shadcn-collapsible-content")],b);const W={title:"Components/Collapsible",component:"shadcn-collapsible",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the content is visible."},disabled:{control:"boolean",description:"Whether interaction is disabled."}}},C=e=>h`
  <shadcn-collapsible ?open=${e.open} ?disabled=${e.disabled} style="width: 22rem">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <strong>3 repositories</strong>
      <shadcn-collapsible-trigger aria-label="Toggle repositories">Toggle</shadcn-collapsible-trigger>
    </div>
    <div style="margin-top:.5rem;border:1px solid var(--border);padding:.75rem;border-radius:.5rem">@radix-ui/primitives</div>
    <shadcn-collapsible-content>
      <div style="margin-top:.5rem;border:1px solid var(--border);padding:.75rem;border-radius:.5rem">@radix-ui/colors</div>
      <div style="margin-top:.5rem;border:1px solid var(--border);padding:.75rem;border-radius:.5rem">@stitches/react</div>
    </shadcn-collapsible-content>
  </shadcn-collapsible>`,d={args:{open:!1,disabled:!1},render:C},p={args:{open:!0},render:C},c={args:{disabled:!0},render:C};var _,x,w;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    open: false,
    disabled: false
  },
  render
}`,...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var E,$,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render
}`,...(O=($=p.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var S,T,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render
}`,...(D=(T=c.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const R=["Default","Open","Disabled"];export{d as Default,c as Disabled,p as Open,R as __namedExportsOrder,W as default};
