import{i as m,a as f,x as u}from"./iframe-BV4MdNsM.js";import{t as y}from"./custom-element-C028faeO.js";import{n as a}from"./property-DKYLCqXO.js";import{t as v}from"./index-Fg_qAIbf.js";import"./preload-helper-BBXEHTOU.js";var k=Object.defineProperty,B=Object.getOwnPropertyDescriptor,s=(e,t,r,i)=>{for(var o=i>1?void 0:i?B(t,r):t,h=e.length-1,g;h>=0;h--)(g=e[h])&&(o=(i?g(t,r,o):g(o))||o);return i&&o&&k(t,r,o),o};let n=class extends f{constructor(){super(...arguments),this.open=!1,this.disabled=!1,this._handleToggle=()=>{this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent("collapsible-change",{bubbles:!0,composed:!0,detail:{open:this.open}})))},this._syncChildren=()=>{this.querySelectorAll("shadcn-collapsible-trigger").forEach(e=>{e.open=this.open,e.disabled=this.disabled}),this.querySelectorAll("shadcn-collapsible-content").forEach(e=>{e.open=this.open})}}connectedCallback(){super.connectedCallback(),this.addEventListener("collapsible-toggle",this._handleToggle)}disconnectedCallback(){this.removeEventListener("collapsible-toggle",this._handleToggle),super.disconnectedCallback()}render(){return u`<slot @slotchange=${this._syncChildren}></slot>`}updated(){this._syncChildren()}};n.styles=[v,m`:host { display: block; }`];s([a({type:Boolean,reflect:!0})],n.prototype,"open",2);s([a({type:Boolean,reflect:!0})],n.prototype,"disabled",2);n=s([y("shadcn-collapsible")],n);let l=class extends f{constructor(){super(...arguments),this.open=!1,this.disabled=!1}render(){return u`<button part="trigger" type="button" aria-expanded=${this.open} ?disabled=${this.disabled} @click=${this._toggle}><slot></slot></button>`}focus(e){var t,r;(r=(t=this.shadowRoot)==null?void 0:t.querySelector("button"))==null||r.focus(e)}_toggle(){this.dispatchEvent(new CustomEvent("collapsible-toggle",{bubbles:!0,composed:!0}))}};l.styles=[v,m`
    :host { display: inline-block; }
    button { appearance: none; border: 0; background: transparent; color: inherit; font: inherit; padding: 0; cursor: pointer; }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; border-radius: var(--radius-sm); }
    button:disabled { cursor: not-allowed; opacity: .5; }
  `];s([a({type:Boolean})],l.prototype,"open",2);s([a({type:Boolean})],l.prototype,"disabled",2);l=s([y("shadcn-collapsible-trigger")],l);let b=class extends f{constructor(){super(...arguments),this.open=!1}render(){return u`<div part="content" class="content" ?hidden=${!this.open}><slot></slot></div>`}};b.styles=[v,m`
    :host { display: block; }
    [hidden] { display: none !important; }
    .content { overflow: hidden; }
  `];s([a({type:Boolean,reflect:!0})],b.prototype,"open",2);b=s([y("shadcn-collapsible-content")],b);const W={title:"Components/Collapsible",component:"shadcn-collapsible",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the content is visible."},disabled:{control:"boolean",description:"Whether interaction is disabled."}}},C=e=>u`
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
}`,...(O=($=p.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var T,D,S;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const R=["Default","Open","Disabled"];export{d as Default,c as Disabled,p as Open,R as __namedExportsOrder,W as default};
