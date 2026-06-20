import{i as E,x as j}from"./iframe-CBkYFfHe.js";import{t as e}from"./custom-element-C028faeO.js";import{D as F,a as H,b as M,c as P,e as k,f as B,g as T}from"./dialog-C-UyoFqC.js";import{M as _}from"./modal-surface-BBrXevsz.js";import{t as R}from"./index-DHlp-d2y.js";import"./button-BilKkZtN.js";import"./preload-helper-BBXEHTOU.js";import"./property-DkYxKTO5.js";import"./state-sync-controller-DOYT6Ds6.js";import"./state-DGtTZvNX.js";var W=Object.getOwnPropertyDescriptor,a=(t,i,S,d)=>{for(var o=d>1?void 0:d?W(i,S):i,s=t.length-1,c;s>=0;s--)(c=t[s])&&(o=c(o)||o);return o};let g=class extends F{updated(t){super.updated(t),t.has("open")&&t.get("open")!==void 0&&this.dispatchEvent(new CustomEvent("alert-dialog-open-change",{bubbles:!0,composed:!0,detail:{open:this.open}}))}};g=a([e("shadcn-alert-dialog")],g);let p=class extends H{};p=a([e("shadcn-alert-dialog-trigger")],p);let n=class extends _{constructor(){super(...arguments),this.titleSelector="shadcn-alert-dialog-title",this.dialogRole="alertdialog"}get dismissOnBackdrop(){return!1}};n.styles=[..._.styles,R,E`
    :host { align-items: center; justify-content: center; }
    .surface { width: min(32rem, calc(100% - 2rem)); gap: var(--spacing-4); padding: var(--spacing-6); border-radius: var(--radius-lg); }
  `];n=a([e("shadcn-alert-dialog-content")],n);let h=class extends M{};h=a([e("shadcn-alert-dialog-title")],h);let u=class extends P{};u=a([e("shadcn-alert-dialog-description")],u);let m=class extends k{};m=a([e("shadcn-alert-dialog-header")],m);let D=class extends B{};D=a([e("shadcn-alert-dialog-footer")],D);let f=class extends T{};f=a([e("shadcn-alert-dialog-cancel")],f);let b=class extends T{};b=a([e("shadcn-alert-dialog-action")],b);const Q={title:"Components/Alert Dialog",component:"shadcn-alert-dialog",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the alert dialog is open."}}},w=t=>j`
  <shadcn-alert-dialog ?open=${t.open}>
    <shadcn-alert-dialog-trigger><shadcn-button variant="outline">Delete account</shadcn-button></shadcn-alert-dialog-trigger>
    <shadcn-alert-dialog-content>
      <shadcn-alert-dialog-header>
        <shadcn-alert-dialog-title>Are you absolutely sure?</shadcn-alert-dialog-title>
        <shadcn-alert-dialog-description>This action cannot be undone. Your account and data will be permanently removed.</shadcn-alert-dialog-description>
      </shadcn-alert-dialog-header>
      <shadcn-alert-dialog-footer>
        <shadcn-alert-dialog-cancel><shadcn-button variant="outline">Cancel</shadcn-button></shadcn-alert-dialog-cancel>
        <shadcn-alert-dialog-action><shadcn-button variant="destructive">Continue</shadcn-button></shadcn-alert-dialog-action>
      </shadcn-alert-dialog-footer>
    </shadcn-alert-dialog-content>
  </shadcn-alert-dialog>`,r={args:{open:!1},render:w},l={args:{open:!0},render:w};var v,x,A;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render
}`,...(A=(x=r.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var y,C,O;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render
}`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const U=["Default","Open"];export{r as Default,l as Open,U as __namedExportsOrder,Q as default};
