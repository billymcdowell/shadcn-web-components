import{i as j,x as F}from"./iframe-B6ecvixb.js";import{t}from"./custom-element-C028faeO.js";import{n as w}from"./property-BCNZ7cbM.js";import{D as H,a as N,g as W,b as q,c as A,e as I,f as V}from"./dialog-CmMgvkks.js";import{M as $}from"./modal-surface-7G1V-nxa.js";import{t as G}from"./index-DEzpxp9E.js";import"./button-DkVG_yjt.js";import"./preload-helper-BBXEHTOU.js";import"./state-sync-controller-DOYT6Ds6.js";import"./state-DUyYIdlX.js";var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,r=(e,a,m,o)=>{for(var s=o>1?void 0:o?K(a,m):a,u=e.length-1,h;u>=0;u--)(h=e[u])&&(s=(o?h(a,m,s):h(s))||s);return o&&s&&J(a,m,s),s};let b=class extends H{constructor(){super(...arguments),this.dismissible=!0,this.guardEscape=e=>{e.key==="Escape"&&this.open&&!this.dismissible&&(e.preventDefault(),e.stopImmediatePropagation())}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.guardEscape,!0)}disconnectedCallback(){window.removeEventListener("keydown",this.guardEscape,!0),super.disconnectedCallback()}updated(e){super.updated(e),this.querySelectorAll("shadcn-drawer-content").forEach(a=>{a.dismissible=this.dismissible}),e.has("open")&&e.get("open")!==void 0&&this.dispatchEvent(new CustomEvent("drawer-open-change",{bubbles:!0,composed:!0,detail:{open:this.open}}))}};r([w({type:Boolean,reflect:!0})],b.prototype,"dismissible",2);b=r([t("shadcn-drawer")],b);let f=class extends N{};f=r([t("shadcn-drawer-trigger")],f);let g=class extends W{};g=r([t("shadcn-drawer-close")],g);let i=class extends ${constructor(){super(...arguments),this.direction="bottom",this.dismissible=!0,this.titleSelector="shadcn-drawer-title"}get dismissOnBackdrop(){return this.dismissible}};i.styles=[...$.styles,G,j`
    .surface { position: absolute; gap: var(--spacing-4); padding: var(--spacing-4); transition: transform var(--transition-base); }
    :host([direction='bottom']) .surface { inset: auto 0 0; max-height: var(--drawer-size, 85vh); border-radius: var(--radius-xl) var(--radius-xl) 0 0; border-width: 1px 0 0; }
    :host([direction='top']) .surface { inset: 0 0 auto; max-height: var(--drawer-size, 85vh); border-radius: 0 0 var(--radius-xl) var(--radius-xl); border-width: 0 0 1px; }
    :host([direction='left']) .surface { inset: 0 auto 0 0; width: min(var(--drawer-size, 24rem), 85vw); border-radius: 0 var(--radius-xl) var(--radius-xl) 0; border-width: 0 1px 0 0; }
    :host([direction='right']) .surface { inset: 0 0 0 auto; width: min(var(--drawer-size, 24rem), 85vw); border-radius: var(--radius-xl) 0 0 var(--radius-xl); border-width: 0 0 0 1px; }
    :host([direction='bottom']) .surface { animation-name: shadcn-slide-in-from-bottom; }
    :host([direction='top']) .surface { animation-name: shadcn-slide-in-from-top; }
    :host([direction='left']) .surface { animation-name: shadcn-slide-in-from-left; }
    :host([direction='right']) .surface { animation-name: shadcn-slide-in-from-right; }
    :host([direction='bottom']) .surface::before, :host([direction='top']) .surface::before { content: ''; align-self: center; width: 3rem; height: .25rem; border-radius: var(--radius-full); background: var(--muted); }
  `];r([w({type:String,reflect:!0})],i.prototype,"direction",2);r([w({type:Boolean})],i.prototype,"dismissible",2);i=r([t("shadcn-drawer-content")],i);let v=class extends q{};v=r([t("shadcn-drawer-title")],v);let x=class extends A{};x=r([t("shadcn-drawer-description")],x);let D=class extends I{};D=r([t("shadcn-drawer-header")],D);let y=class extends V{};y=r([t("shadcn-drawer-footer")],y);const ae={title:"Components/Drawer",component:"shadcn-drawer",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the drawer is open."},dismissible:{control:"boolean",description:"Whether outside interaction may dismiss the drawer."},direction:{control:"select",options:["top","right","bottom","left"],description:"Viewport edge for the drawer."}}},p=e=>F`
  <shadcn-drawer ?open=${e.open} .dismissible=${e.dismissible!==!1}>
    <shadcn-drawer-trigger><shadcn-button variant="outline">Open drawer</shadcn-button></shadcn-drawer-trigger>
    <shadcn-drawer-content direction=${e.direction??"bottom"}>
      <shadcn-drawer-header><shadcn-drawer-title>Move goal</shadcn-drawer-title><shadcn-drawer-description>Set your daily activity goal.</shadcn-drawer-description></shadcn-drawer-header>
      <div style="padding:1rem;text-align:center;font-size:2rem;font-weight:600">350 kcal</div>
      <shadcn-drawer-footer><shadcn-drawer-close><shadcn-button>Submit</shadcn-button></shadcn-drawer-close></shadcn-drawer-footer>
    </shadcn-drawer-content>
  </shadcn-drawer>`,n={args:{open:!1,dismissible:!0,direction:"bottom"},render:p},d={args:{open:!0,dismissible:!0,direction:"bottom"},render:p},c={args:{open:!0,dismissible:!0,direction:"left"},render:p},l={args:{open:!0,dismissible:!1,direction:"bottom"},render:p};var C,E,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: false,
    dismissible: true,
    direction: 'bottom'
  },
  render
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var O,_,k;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    open: true,
    dismissible: true,
    direction: 'bottom'
  },
  render
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var z,P,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    open: true,
    dismissible: true,
    direction: 'left'
  },
  render
}`,...(T=(P=c.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var L,B,M;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    open: true,
    dismissible: false,
    direction: 'bottom'
  },
  render
}`,...(M=(B=l.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const ie=["Default","Open","Left","NonDismissible"];export{n as Default,c as Left,l as NonDismissible,d as Open,ie as __namedExportsOrder,ae as default};
