import{i as j,a as A,x as z}from"./iframe-B6ecvixb.js";import{t as T}from"./custom-element-C028faeO.js";import{n as o}from"./property-BCNZ7cbM.js";import{e as L}from"./query-TLA3Feqw.js";import{t as W}from"./index-DEzpxp9E.js";import"./calendar-DpXsRelV.js";import"./preload-helper-BBXEHTOU.js";import"./base-CShCMygk.js";var H=Object.defineProperty,U=Object.getOwnPropertyDescriptor,s=(e,t,r,l)=>{for(var n=l>1?void 0:l?U(t,r):t,g=e.length-1,v;g>=0;g--)(v=e[g])&&(n=(l?v(t,r,n):v(n))||n);return l&&n&&H(t,r,n),n};const b=e=>{const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const r=new Date(Number(t[1]),Number(t[2])-1,Number(t[3]));return r.getFullYear()===Number(t[1])&&r.getMonth()===Number(t[2])-1&&r.getDate()===Number(t[3])?r:null};let a=class extends A{constructor(){super(),this.value="",this.name="",this.placeholder="Pick a date",this.locale="",this.min="",this.max="",this.required=!1,this.disabled=!1,this.readOnly=!1,this.open=!1,this._defaultValue="",this._outsidePointerDown=e=>{this.open&&!e.composedPath().includes(this)&&this._setOpen(!1)},this._documentKeyDown=e=>{this.open&&e.key==="Escape"&&(e.preventDefault(),this._setOpen(!1,!0))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this._defaultValue=this.getAttribute("value")??this.value,document.addEventListener("pointerdown",this._outsidePointerDown),document.addEventListener("keydown",this._documentKeyDown)}disconnectedCallback(){document.removeEventListener("pointerdown",this._outsidePointerDown),document.removeEventListener("keydown",this._documentKeyDown),super.disconnectedCallback()}updated(e){(e.has("value")||e.has("required")||e.has("disabled")||e.has("min")||e.has("max"))&&this._syncForm(),(this.disabled||this.readOnly)&&this.open&&this._setOpen(!1),e.has("open")&&this.open&&this.updateComplete.then(()=>{var t;return(t=this._calendar)==null?void 0:t.focus()})}_syncForm(){this._internals.setFormValue(this.disabled?null:this.value);const e=b(this.value);let t={},r="";this.required&&!this.value?(t={valueMissing:!0},r="Please select a date."):this.value&&!e?(t={badInput:!0},r="Please select a valid date."):this.min&&this.value<this.min?(t={rangeUnderflow:!0},r=`Date must be on or after ${this.min}.`):this.max&&this.value>this.max&&(t={rangeOverflow:!0},r=`Date must be on or before ${this.max}.`),this._internals.setValidity(t,r,this._trigger)}_setOpen(e,t=!1){this.open!==e&&(this.open=e,this.dispatchEvent(new CustomEvent("date-picker-open-change",{bubbles:!0,composed:!0,detail:{open:e}})),!e&&t&&this.updateComplete.then(()=>{var r;return(r=this._trigger)==null?void 0:r.focus()}))}_toggle(){!this.disabled&&!this.readOnly&&this._setOpen(!this.open)}_select(e){this.disabled||this.readOnly||(this.value=e.detail.value,this.dispatchEvent(new CustomEvent("date-picker-change",{bubbles:!0,composed:!0,detail:e.detail})),this._setOpen(!1,!0))}_triggerKeyDown(e){["ArrowDown","Enter"," "].includes(e.key)&&!this.open&&(e.preventDefault(),this._toggle())}formResetCallback(){this.value=this._defaultValue,this._setOpen(!1)}formDisabledCallback(e){this.disabled=e}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}focus(e){var t;(t=this._trigger)==null||t.focus(e)}render(){const e=b(this.value),t=e?new Intl.DateTimeFormat(this.locale||void 0,{dateStyle:"long"}).format(e):this.placeholder;return z`
      <button part="trigger" class="trigger ${e?"":"empty"}" type="button" aria-haspopup="dialog" aria-expanded=${this.open}
        ?disabled=${this.disabled} aria-readonly=${this.readOnly} @click=${this._toggle} @keydown=${this._triggerKeyDown}>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"/></svg>
        <span>${t}</span>
      </button>
      <div part="content" class="content" role="dialog" aria-label="Choose date" ?hidden=${!this.open}>
        <shadcn-calendar .value=${this.value} .month=${e?this.value.slice(0,7):""} .min=${this.min} .max=${this.max} .locale=${this.locale}
          ?disabled=${this.disabled||this.readOnly} @calendar-change=${this._select}></shadcn-calendar>
      </div>`}};a.formAssociated=!0;a.styles=[W,j`
    :host { position: relative; display: inline-block; width: 17.5rem; font-family: var(--font-sans); }
    .trigger { display: flex; width: 100%; height: 2.5rem; align-items: center; justify-content: flex-start; gap: var(--spacing-2); padding: 0 var(--spacing-3); border: 1px solid var(--input); border-radius: var(--radius-md); background: var(--background); color: var(--foreground); font: inherit; font-size: var(--font-size-sm); font-weight: var(--font-normal); text-align: left; cursor: pointer; }
    .trigger.empty { color: var(--muted-foreground); }
    .trigger:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
    .trigger:disabled { opacity: .5; cursor: not-allowed; }
    svg { width: 1rem; height: 1rem; flex: none; opacity: .7; }
    .content { position: absolute; z-index: 50; top: calc(100% + var(--spacing-2)); left: 0; width: max-content; overflow: hidden; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--popover); color: var(--popover-foreground); box-shadow: var(--shadow-md); transform-origin: top left; animation: shadcn-zoom-in var(--transition-fast); }
    [hidden] { display: none !important; }
    @media (prefers-reduced-motion: reduce) { .content { animation: none; } }
  `];s([o({type:String,reflect:!0})],a.prototype,"value",2);s([o({type:String,reflect:!0})],a.prototype,"name",2);s([o({type:String})],a.prototype,"placeholder",2);s([o({type:String})],a.prototype,"locale",2);s([o({type:String})],a.prototype,"min",2);s([o({type:String})],a.prototype,"max",2);s([o({type:Boolean,reflect:!0})],a.prototype,"required",2);s([o({type:Boolean,reflect:!0})],a.prototype,"disabled",2);s([o({type:Boolean,attribute:"readonly",reflect:!0})],a.prototype,"readOnly",2);s([o({type:Boolean,reflect:!0})],a.prototype,"open",2);s([L(".trigger")],a.prototype,"_trigger",2);s([L("shadcn-calendar")],a.prototype,"_calendar",2);a=s([T("shadcn-date-picker")],a);const re={title:"Components/Date Picker",component:"shadcn-date-picker",tags:["autodocs"],argTypes:{value:{control:"text",description:"Selected ISO date."},placeholder:{control:"text"},locale:{control:"text"},min:{control:"text"},max:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},open:{control:"boolean"}}},i=e=>z`<shadcn-date-picker .value=${String(e.value??"")} placeholder=${e.placeholder??"Pick a date"} locale=${e.locale??""} min=${e.min??""} max=${e.max??""} ?required=${e.required} ?disabled=${e.disabled} ?readonly=${e.readOnly} ?open=${e.open}></shadcn-date-picker>`,d={args:{value:"",placeholder:"Pick a date"},render:i},c={args:{value:"2026-06-21"},render:i},u={args:{value:"2026-06-21",open:!0},render:i},p={args:{min:"2026-06-10",max:"2026-06-25",value:"2026-06-21"},render:i},h={args:{required:!0},render:i},m={args:{value:"2026-06-21",readOnly:!0},render:i},f={args:{value:"2026-06-21",disabled:!0},render:i};var y,_,x;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Pick a date'
  },
  render
}`,...(x=(_=d.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var w,O,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: '2026-06-21'
  },
  render
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var $,D,S;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: '2026-06-21',
    open: true
  },
  render
}`,...(S=(D=u.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var C,P,V;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    min: '2026-06-10',
    max: '2026-06-25',
    value: '2026-06-21'
  },
  render
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var q,E,N;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render
}`,...(N=(E=h.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var B,F,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: '2026-06-21',
    readOnly: true
  },
  render
}`,...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var K,M,R;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: '2026-06-21',
    disabled: true
  },
  render
}`,...(R=(M=f.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const ae=["Default","WithValue","Open","Constrained","Required","ReadOnly","Disabled"];export{p as Constrained,d as Default,f as Disabled,u as Open,m as ReadOnly,h as Required,c as WithValue,ae as __namedExportsOrder,re as default};
