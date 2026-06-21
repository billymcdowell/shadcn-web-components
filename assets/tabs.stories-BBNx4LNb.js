import{i as m,a as f,x as h}from"./iframe-B6ecvixb.js";import{t as y}from"./custom-element-C028faeO.js";import{n as o}from"./property-BCNZ7cbM.js";import{t as w}from"./index-DEzpxp9E.js";import"./preload-helper-BBXEHTOU.js";var T=Object.defineProperty,L=Object.getOwnPropertyDescriptor,a=(t,e,s,i)=>{for(var n=i>1?void 0:i?L(e,s):e,d=t.length-1,r;d>=0;d--)(r=t[d])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&T(e,s,n),n};let c=class extends f{constructor(){super(...arguments),this.value="",this.orientation="horizontal",this.activationMode="automatic",this._handleSelect=t=>{const e=t.target;e.disabled||e.value===this.value||(this.value=e.value,this.dispatchEvent(new CustomEvent("tabs-change",{bubbles:!0,composed:!0,detail:{value:this.value}})))},this._handleNavigate=t=>{const e=this._triggers().filter(z=>!z.disabled),s=e.indexOf(t.target);if(s<0||e.length===0)return;const{key:i}=t.detail,n=this.orientation==="vertical"?i==="ArrowDown":i==="ArrowRight",d=this.orientation==="vertical"?i==="ArrowUp":i==="ArrowLeft";let r=s;if(n)r=(s+1)%e.length;else if(d)r=(s-1+e.length)%e.length;else if(i==="Home")r=0;else if(i==="End")r=e.length-1;else return;e[r].focus(),this.activationMode==="automatic"&&e[r].select()},this._sync=()=>{this.querySelectorAll("shadcn-tabs-list").forEach(t=>{t.orientation=this.orientation}),this._triggers().forEach(t=>{t.active=t.value===this.value}),this.querySelectorAll("shadcn-tabs-content").forEach(t=>{t.active=t.value===this.value})}}connectedCallback(){super.connectedCallback(),this.addEventListener("tab-select",this._handleSelect),this.addEventListener("tab-navigate",this._handleNavigate)}disconnectedCallback(){this.removeEventListener("tab-select",this._handleSelect),this.removeEventListener("tab-navigate",this._handleNavigate),super.disconnectedCallback()}render(){return h`<slot @slotchange=${this._sync}></slot>`}firstUpdated(){this._ensureValue()}updated(){this._sync()}_triggers(){return Array.from(this.querySelectorAll("shadcn-tabs-trigger"))}_ensureValue(){var t;this.value||(this.value=((t=this._triggers().find(e=>!e.disabled))==null?void 0:t.value)??""),this._sync()}};c.styles=[w,m`:host { display: block; }`];a([o({type:String,reflect:!0})],c.prototype,"value",2);a([o({type:String,reflect:!0})],c.prototype,"orientation",2);a([o({type:String,attribute:"activation-mode"})],c.prototype,"activationMode",2);c=a([y("shadcn-tabs")],c);let g=class extends f{constructor(){super(...arguments),this.orientation="horizontal"}render(){return h`<div part="list" class="list ${this.orientation==="vertical"?"vertical":""}" role="tablist" aria-orientation=${this.orientation}><slot></slot></div>`}};g.styles=[w,m`
    :host { display: inline-flex; }
    .list { display: inline-flex; align-items: center; min-height: 2.25rem; padding: var(--spacing-1); border-radius: var(--radius-lg); background: var(--muted); color: var(--muted-foreground); }
    .vertical { flex-direction: column; align-items: stretch; }
  `];a([o({type:String})],g.prototype,"orientation",2);g=a([y("shadcn-tabs-list")],g);let l=class extends f{constructor(){super(...arguments),this.value="",this.disabled=!1,this.active=!1,this.select=()=>{this.disabled||this.dispatchEvent(new CustomEvent("tab-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))}}render(){return h`<button part="trigger" type="button" role="tab" aria-selected=${this.active} tabindex=${this.active?0:-1} ?disabled=${this.disabled} ?data-active=${this.active} @click=${this.select} @keydown=${this._keydown}><slot></slot></button>`}focus(t){var e,s;(s=(e=this.shadowRoot)==null?void 0:e.querySelector("button"))==null||s.focus(t)}_keydown(t){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)?(t.preventDefault(),this.dispatchEvent(new CustomEvent("tab-navigate",{bubbles:!0,composed:!0,detail:{key:t.key}}))):(t.key==="Enter"||t.key===" ")&&!this.active&&(t.preventDefault(),this.select())}};l.styles=[w,m`
    :host { display: inline-flex; }
    button { display: inline-flex; align-items: center; justify-content: center; white-space: nowrap; border: 0; border-radius: var(--radius-md); padding: var(--spacing-1) var(--spacing-3); min-height: 1.75rem; background: transparent; color: inherit; font: inherit; font-size: var(--font-size-sm); font-weight: var(--font-medium); cursor: pointer; }
    button[data-active] { background: var(--background); color: var(--foreground); box-shadow: 0 1px 2px rgb(0 0 0 / .08); }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
    button:disabled { opacity: .5; cursor: not-allowed; }
  `];a([o({type:String})],l.prototype,"value",2);a([o({type:Boolean})],l.prototype,"disabled",2);a([o({type:Boolean})],l.prototype,"active",2);l=a([y("shadcn-tabs-trigger")],l);let u=class extends f{constructor(){super(...arguments),this.value="",this.active=!1}render(){return h`<div part="content" class="content" role="tabpanel" tabindex="0" ?hidden=${!this.active}><slot></slot></div>`}};u.styles=[w,m`:host { display: block; } [hidden] { display: none !important; } .content { margin-top: var(--spacing-2); } .content:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }`];a([o({type:String})],u.prototype,"value",2);a([o({type:Boolean})],u.prototype,"active",2);u=a([y("shadcn-tabs-content")],u);const j={title:"Components/Tabs",component:"shadcn-tabs",tags:["autodocs"],argTypes:{value:{control:"text",description:"Selected tab value."},orientation:{control:"select",options:["horizontal","vertical"],description:"Tablist orientation."},activationMode:{control:"select",options:["automatic","manual"],description:"Whether focus activates a tab."}}},_=t=>h`
  <shadcn-tabs value=${t.value??"account"} orientation=${t.orientation??"horizontal"} activation-mode=${t.activationMode??"automatic"}>
    <shadcn-tabs-list>
      <shadcn-tabs-trigger value="account">Account</shadcn-tabs-trigger>
      <shadcn-tabs-trigger value="password">Password</shadcn-tabs-trigger>
      <shadcn-tabs-trigger value="disabled" disabled>Disabled</shadcn-tabs-trigger>
    </shadcn-tabs-list>
    <shadcn-tabs-content value="account"><p>Update your account details here.</p></shadcn-tabs-content>
    <shadcn-tabs-content value="password"><p>Change your password here.</p></shadcn-tabs-content>
  </shadcn-tabs>`,p={args:{value:"account",orientation:"horizontal",activationMode:"automatic"},render:_},v={args:{value:"account",orientation:"vertical"},render:_},b={args:{value:"account",activationMode:"manual"},render:_};var x,k,E;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 'account',
    orientation: 'horizontal',
    activationMode: 'automatic'
  },
  render
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var S,A,$;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 'account',
    orientation: 'vertical'
  },
  render
}`,...($=(A=v.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var C,M,D;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 'account',
    activationMode: 'manual'
  },
  render
}`,...(D=(M=b.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const B=["Default","Vertical","ManualActivation"];export{p as Default,b as ManualActivation,v as Vertical,B as __namedExportsOrder,j as default};
