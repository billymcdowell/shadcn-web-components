import{i as F,x as H}from"./iframe-DzFl6Ur1.js";import{t as s}from"./custom-element-C028faeO.js";import{n as $}from"./property-uAZGxRZC.js";import{D as A,a as N,g as V,b as W,c as q,e as G,f as I}from"./dialog-By9uIa0t.js";import{M as B}from"./modal-surface-CpAs3D-g.js";import{t as J}from"./index-BCFaqB6o.js";import"./button-1iZ6Rw4P.js";import"./input-Bdw-vV2X.js";import"./preload-helper-BBXEHTOU.js";import"./state-sync-controller-DOYT6Ds6.js";import"./state-BR31m5Xj.js";import"./query-BApjzB0v.js";var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,t=(e,r,l,a)=>{for(var o=a>1?void 0:a?Q(r,l):r,m=e.length-1,u;m>=0;m--)(u=e[m])&&(o=(a?u(r,l,o):u(o))||o);return a&&o&&K(r,l,o),o};let g=class extends A{updated(e){super.updated(e),e.has("open")&&e.get("open")!==void 0&&this.dispatchEvent(new CustomEvent("sheet-open-change",{bubbles:!0,composed:!0,detail:{open:this.open}}))}};g=t([s("shadcn-sheet")],g);let f=class extends N{};f=t([s("shadcn-sheet-trigger")],f);let b=class extends V{};b=t([s("shadcn-sheet-close")],b);let c=class extends B{constructor(){super(...arguments),this.side="right",this.titleSelector="shadcn-sheet-title"}};c.styles=[...B.styles,J,F`
    .surface { position: absolute; gap: var(--spacing-4); padding: var(--spacing-6); transition: transform var(--transition-base); }
    :host([side='right']) .surface { inset: 0 0 0 auto; width: min(var(--sheet-size, 24rem), 85vw); border-width: 0 0 0 1px; }
    :host([side='left']) .surface { inset: 0 auto 0 0; width: min(var(--sheet-size, 24rem), 85vw); border-width: 0 1px 0 0; }
    :host([side='top']) .surface { inset: 0 0 auto; min-height: var(--sheet-size, 16rem); border-width: 0 0 1px; }
    :host([side='bottom']) .surface { inset: auto 0 0; min-height: var(--sheet-size, 16rem); border-width: 1px 0 0; }
    :host([side='right']) .surface { animation-name: shadcn-slide-in-from-right; }
    :host([side='left']) .surface { animation-name: shadcn-slide-in-from-left; }
    :host([side='top']) .surface { animation-name: shadcn-slide-in-from-top; }
    :host([side='bottom']) .surface { animation-name: shadcn-slide-in-from-bottom; }
  `];t([$({type:String,reflect:!0})],c.prototype,"side",2);c=t([s("shadcn-sheet-content")],c);let v=class extends W{};v=t([s("shadcn-sheet-title")],v);let S=class extends q{};S=t([s("shadcn-sheet-description")],S);let x=class extends G{};x=t([s("shadcn-sheet-header")],x);let D=class extends I{};D=t([s("shadcn-sheet-footer")],D);const ne={title:"Components/Sheet",component:"shadcn-sheet",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the sheet is open."},side:{control:"select",options:["top","right","bottom","left"],description:"Viewport edge for the panel."}}},p=e=>H`
  <shadcn-sheet ?open=${e.open}>
    <shadcn-sheet-trigger><shadcn-button variant="outline">Edit profile</shadcn-button></shadcn-sheet-trigger>
    <shadcn-sheet-content side=${e.side??"right"}>
      <shadcn-sheet-header><shadcn-sheet-title>Edit profile</shadcn-sheet-title><shadcn-sheet-description>Make changes to your profile, then save.</shadcn-sheet-description></shadcn-sheet-header>
      <label style="display:grid;gap:.5rem">Name <shadcn-input value="Ada Lovelace"></shadcn-input></label>
      <shadcn-sheet-footer><shadcn-sheet-close><shadcn-button>Save changes</shadcn-button></shadcn-sheet-close></shadcn-sheet-footer>
    </shadcn-sheet-content>
  </shadcn-sheet>`,n={args:{open:!1,side:"right"},render:p},i={args:{open:!0,side:"left"},render:p},d={args:{open:!0,side:"top"},render:p},h={args:{open:!0,side:"bottom"},render:p};var w,y,_;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: false,
    side: 'right'
  },
  render
}`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var T,C,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    open: true,
    side: 'left'
  },
  render
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var O,z,P;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    open: true,
    side: 'top'
  },
  render
}`,...(P=(z=d.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var L,M,j;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    open: true,
    side: 'bottom'
  },
  render
}`,...(j=(M=h.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};const ie=["Default","Left","Top","Bottom"];export{h as Bottom,n as Default,i as Left,d as Top,ie as __namedExportsOrder,ne as default};
