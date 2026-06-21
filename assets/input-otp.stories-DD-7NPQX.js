import{i as E,a as P,x as m}from"./iframe-Baten_M5.js";import{t as T}from"./custom-element-C028faeO.js";import{n as s}from"./property-Cny5Lx-H.js";import{e as W}from"./query-TLA3Feqw.js";import{t as A}from"./index-Bkm5wONK.js";import"./preload-helper-BBXEHTOU.js";import"./base-CShCMygk.js";var V=Object.defineProperty,j=Object.getOwnPropertyDescriptor,i=(e,t,a,n)=>{for(var o=n>1?void 0:n?j(t,a):t,v=e.length-1,g;v>=0;v--)(g=e[v])&&(o=(n?g(t,a,o):g(o))||o);return n&&o&&V(t,a,o),o};let r=class extends P{constructor(){super(),this.value="",this.length=6,this.mode="numeric",this.name="",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.ariaLabel="One-time password",this._internals=this.attachInternals()}render(){const e=Array.from({length:Math.max(1,this.length)},(a,n)=>this.value[n]??""),t=Math.min(this.value.length,e.length-1);return m`
      <div class="root">
        <div part="group" class="group" aria-hidden="true">
          ${e.map((a,n)=>m`<span part="slot" class="slot ${n===t&&!this.disabled&&!this.readonly?"active":""}">${a||(n===t&&!this.disabled&&!this.readonly?m`<span class="caret"></span>`:"")}</span>`)}
        </div>
        <input part="input" .value=${this.value} maxlength=${this.length} inputmode=${this.mode==="numeric"?"numeric":"text"} autocomplete="one-time-code" aria-label=${this.ariaLabel} aria-invalid=${this.invalid} ?disabled=${this.disabled} ?readonly=${this.readonly} ?required=${this.required} @input=${this._handleInput} />
      </div>
    `}updated(e){if(e.has("value")||e.has("required")||e.has("length")||e.has("disabled")||e.has("invalid")){const t=this._sanitize(this.value);if(t!==this.value){this.value=t;return}this._internals.setFormValue(this.disabled?null:this.value);const a=this.required&&this.value.length!==this.length;this._internals.setValidity(a||this.invalid?{customError:!0}:{},a?`Enter all ${this.length} characters.`:this.invalid?"The code is invalid.":"",this._input)}}focus(e){var t;(t=this._input)==null||t.focus(e)}select(){var e;(e=this._input)==null||e.select()}formResetCallback(){this.value=""}_sanitize(e){return(this.mode==="numeric"?e.replace(/\D/g,""):e).slice(0,Math.max(1,this.length))}_handleInput(e){this.value=this._sanitize(e.target.value),this.dispatchEvent(new CustomEvent("input-otp-change",{bubbles:!0,composed:!0,detail:{value:this.value}})),this.value.length===this.length&&this.dispatchEvent(new CustomEvent("input-otp-complete",{bubbles:!0,composed:!0,detail:{value:this.value}}))}};r.formAssociated=!0;r.styles=[A,E`
    :host { display: inline-block; }
    .root { position: relative; display: inline-flex; }
    .group { display: flex; align-items: center; }
    .slot { width: var(--input-otp-slot-size, 2.5rem); height: var(--input-otp-slot-size, 2.5rem); display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--input); border-right-width: 0; color: var(--foreground); font-family: var(--font-sans); font-size: var(--font-size-sm); transition: border-color var(--transition-fast), box-shadow var(--transition-fast); }
    .slot:first-child { border-radius: var(--radius-md) 0 0 var(--radius-md); }
    .slot:last-child { border-right-width: 1px; border-radius: 0 var(--radius-md) var(--radius-md) 0; }
    .slot.active { border-right-width: 1px; border-color: var(--ring); box-shadow: 0 0 0 2px var(--ring); z-index: 1; }
    .caret { width: 1px; height: 1rem; background: currentColor; animation: blink var(--animation-caret-duration, 1s) var(--animation-caret-easing, steps(1)) infinite; }
    input { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; border: 0; margin: 0; cursor: text; }
    input:disabled { cursor: not-allowed; }
    :host([disabled]) { opacity: .5; }
    :host([invalid]) .slot { border-color: var(--destructive); }
    @keyframes blink { 50% { opacity: 0; } }
    @media (prefers-reduced-motion: reduce) { .caret { animation: none; } }
  `];i([W("input")],r.prototype,"_input",2);i([s({type:String})],r.prototype,"value",2);i([s({type:Number,reflect:!0})],r.prototype,"length",2);i([s({type:String,reflect:!0})],r.prototype,"mode",2);i([s({type:String,reflect:!0})],r.prototype,"name",2);i([s({type:Boolean,reflect:!0})],r.prototype,"disabled",2);i([s({type:Boolean,reflect:!0})],r.prototype,"readonly",2);i([s({type:Boolean,reflect:!0})],r.prototype,"required",2);i([s({type:Boolean,reflect:!0})],r.prototype,"invalid",2);i([s({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel",2);r=i([T("shadcn-input-otp")],r);const H={title:"Components/Input OTP",component:"shadcn-input-otp",tags:["autodocs"],argTypes:{value:{control:"text",description:"Current OTP value."},length:{control:{type:"number",min:1,max:10},description:"Number of accepted characters."},mode:{control:"select",options:["numeric","text"],description:"Input filtering and virtual keyboard mode."},disabled:{control:"boolean",description:"Whether input is disabled."},readonly:{control:"boolean",description:"Whether input is read-only."},required:{control:"boolean",description:"Whether a complete value is required."},invalid:{control:"boolean",description:"Whether the value is invalid."}}},l=e=>m`<shadcn-input-otp .value=${String(e.value??"")} .length=${Number(e.length??6)} mode=${String(e.mode??"numeric")} ?disabled=${e.disabled} ?readonly=${e.readonly} ?required=${e.required} ?invalid=${e.invalid}></shadcn-input-otp>`,d={args:{value:"",length:6,mode:"numeric"},render:l},u={args:{value:"123",length:6,mode:"numeric"},render:l},p={args:{value:"A9B",length:6,mode:"text"},render:l},c={args:{value:"123456",length:6,invalid:!0},render:l},h={args:{value:"123",length:6,disabled:!0},render:l};var b,f,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: '',
    length: 6,
    mode: 'numeric'
  },
  render
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,_,$;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: '123',
    length: 6,
    mode: 'numeric'
  },
  render
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var w,S,q;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 'A9B',
    length: 6,
    mode: 'text'
  },
  render
}`,...(q=(S=p.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var C,O,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: '123456',
    length: 6,
    invalid: true
  },
  render
}`,...(z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var I,B,D;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: '123',
    length: 6,
    disabled: true
  },
  render
}`,...(D=(B=h.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const J=["Default","WithValue","TextCode","Invalid","Disabled"];export{d as Default,h as Disabled,c as Invalid,p as TextCode,u as WithValue,J as __namedExportsOrder,H as default};
