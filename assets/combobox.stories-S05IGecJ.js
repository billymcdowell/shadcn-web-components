import{i as b,a as h,x as i}from"./iframe-Baten_M5.js";import{t as p}from"./custom-element-C028faeO.js";import{n as a}from"./property-Cny5Lx-H.js";import{t as u,a as m}from"./index-Bkm5wONK.js";import"./preload-helper-BBXEHTOU.js";var X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,t=(e,o,n,s)=>{for(var r=s>1?void 0:s?Z(o,n):o,x=e.length-1,y;x>=0;x--)(y=e[x])&&(r=(s?y(o,n,r):y(r))||r);return s&&r&&X(o,n,r),r};let c=class extends h{constructor(){super(),this._defaultValue="",this.value="",this.name="",this.open=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.placeholder="Select an option",this._handleInput=e=>{this.disabled||this.readonly||(this._filter(e.detail.value),this._setOpen(!0),this._setActive(this._visibleItems()[0]??null))},this._handleKeydown=e=>{var x;const o=e.detail.key;if(this.disabled||this.readonly)return;if(o==="Escape"){this._setOpen(!1),this._restoreInputLabel();return}if(o==="Tab"){this._setOpen(!1);return}!this.open&&["ArrowDown","ArrowUp","Enter"].includes(o)&&this._setOpen(!0);const n=this._visibleItems();if(!n.length)return;const s=n.findIndex(y=>y.active);if(o==="Enter"&&s>=0){(x=n[s])==null||x.select();return}let r=s;if(o==="ArrowDown")r=s<n.length-1?s+1:0;else if(o==="ArrowUp")r=s>0?s-1:n.length-1;else if(o==="Home")r=0;else if(o==="End")r=n.length-1;else return;this._setActive(n[r]??null)},this._handleSelect=e=>{const o=e.target;this.disabled||this.readonly||o.disabled||(this.value=e.detail.value,this._filter(""),this._setOpen(!1),this.dispatchEvent(new CustomEvent("combobox-change",{bubbles:!0,composed:!0,detail:e.detail})),queueMicrotask(()=>{this._restoreInputLabel(),this.focus()}))},this._handlePointerMove=e=>{const o=e.target;!o.disabled&&!o.filtered&&this._setActive(o)},this._handleOutsidePointerDown=e=>{this.open&&!e.composedPath().includes(this)&&(this._setOpen(!1),this._restoreInputLabel())},this._sync=()=>{const e=this._items(),o=e.find(r=>r.value===this.value);e.forEach(r=>{r.selected=r===o});const n=this._content();n&&(n.open=this.open);const s=this._input();s&&(s.open=this.open,s.disabled=this.disabled,s.readonly=this.readonly,s.required=this.required,s.placeholder=this.placeholder,s.controls=(n==null?void 0:n.listboxId)??"",this.open||(s.displayValue=(o==null?void 0:o.displayLabel)??""))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this._defaultValue=this.getAttribute("value")??this.value,this.addEventListener("combobox-input",this._handleInput),this.addEventListener("combobox-input-keydown",this._handleKeydown),this.addEventListener("combobox-item-select",this._handleSelect),this.addEventListener("combobox-item-pointermove",this._handlePointerMove),document.addEventListener("pointerdown",this._handleOutsidePointerDown)}disconnectedCallback(){this.removeEventListener("combobox-input",this._handleInput),this.removeEventListener("combobox-input-keydown",this._handleKeydown),this.removeEventListener("combobox-item-select",this._handleSelect),this.removeEventListener("combobox-item-pointermove",this._handlePointerMove),document.removeEventListener("pointerdown",this._handleOutsidePointerDown),super.disconnectedCallback()}render(){return i`<slot @slotchange=${this._sync}></slot>`}firstUpdated(){this._sync()}updated(){this._internals.setFormValue(this.disabled?null:this.value);const e=this.required&&!this.value;this._internals.setValidity(e?{valueMissing:!0}:{},e?"Select an option.":""),this._sync()}formResetCallback(){this.value=this._defaultValue,this.open=!1,this._filter("")}formDisabledCallback(e){this.disabled=e}show(){!this.disabled&&!this.readonly&&this._setOpen(!0)}hide(){this._setOpen(!1)}focus(e){var o;(o=this._input())==null||o.focus(e)}_items(){return Array.from(this.querySelectorAll("shadcn-combobox-item"))}_visibleItems(){return this._items().filter(e=>!e.disabled&&!e.filtered)}_input(){return this.querySelector("shadcn-combobox-input")}_content(){return this.querySelector("shadcn-combobox-content")}_filter(e){const o=e.trim().toLocaleLowerCase();this._items().forEach(s=>{s.filtered=o.length>0&&!s.searchText.toLocaleLowerCase().includes(o)}),this.querySelectorAll("shadcn-combobox-group").forEach(s=>s.syncVisibility());const n=this._items().some(s=>!s.filtered);this.querySelectorAll("shadcn-combobox-empty").forEach(s=>{s.visible=!n})}_setActive(e){this._items().forEach(n=>{n.active=n===e});const o=this._input();o&&(o.activeDescendant=(e==null?void 0:e.optionId)??""),e==null||e.scrollIntoView({block:"nearest"})}_setOpen(e){this.open!==e&&(this.open=e,this.dispatchEvent(new CustomEvent("combobox-open-change",{bubbles:!0,composed:!0,detail:{open:e}})))}_restoreInputLabel(){const e=this._items().find(n=>n.value===this.value),o=this._input();o&&(o.displayValue=(e==null?void 0:e.displayLabel)??"")}};c.formAssociated=!0;c.styles=[u,m,b`
    :host { display: inline-block; position: relative; min-width: 12rem; }
  `];t([a({type:String})],c.prototype,"value",2);t([a({type:String,reflect:!0})],c.prototype,"name",2);t([a({type:Boolean,reflect:!0})],c.prototype,"open",2);t([a({type:Boolean,reflect:!0})],c.prototype,"disabled",2);t([a({type:Boolean,reflect:!0})],c.prototype,"readonly",2);t([a({type:Boolean,reflect:!0})],c.prototype,"required",2);t([a({type:String})],c.prototype,"placeholder",2);c=t([p("shadcn-combobox")],c);let l=class extends h{constructor(){super(...arguments),this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.open=!1,this.displayValue="",this.activeDescendant="",this.controls=""}render(){return i`<div class="wrap"><input part="input" type="text" role="combobox" autocomplete="off" aria-autocomplete="list" aria-haspopup="listbox" aria-expanded=${this.open} aria-controls=${this.controls||""} aria-activedescendant=${this.activeDescendant||""} aria-required=${this.required} aria-readonly=${this.readonly} .value=${this.displayValue} placeholder=${this.placeholder} ?disabled=${this.disabled} ?readonly=${this.readonly} @focus=${this._focus} @input=${this._input} @keydown=${this._keydown}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7 10 5 5 5-5"/></svg></div>`}focus(e){var o,n;(n=(o=this.shadowRoot)==null?void 0:o.querySelector("input"))==null||n.focus(e)}_focus(){!this.disabled&&!this.readonly&&this.dispatchEvent(new CustomEvent("combobox-input",{bubbles:!0,composed:!0,detail:{value:""}}))}_input(e){this.displayValue=e.target.value,this.dispatchEvent(new CustomEvent("combobox-input",{bubbles:!0,composed:!0,detail:{value:this.displayValue}}))}_keydown(e){["ArrowDown","ArrowUp","Home","End","Enter","Escape"].includes(e.key)&&e.preventDefault(),this.dispatchEvent(new CustomEvent("combobox-input-keydown",{bubbles:!0,composed:!0,detail:{key:e.key}}))}};l.styles=[u,m,b`
    :host { display: block; }
    .wrap { position: relative; }
    input { box-sizing: border-box; width: 100%; height: 2.5rem; padding: 0 var(--spacing-9) 0 var(--spacing-3); border: 1px solid var(--input); border-radius: var(--radius-md); background: var(--background); color: var(--foreground); font: inherit; font-size: var(--font-size-sm); outline: none; }
    input::placeholder { color: var(--muted-foreground); }
    input:focus-visible { border-color: var(--ring); box-shadow: 0 0 0 2px color-mix(in srgb, var(--ring) 30%, transparent); }
    input:disabled { cursor: not-allowed; opacity: .5; }
    svg { position: absolute; top: 50%; right: var(--spacing-3); width: 1rem; height: 1rem; transform: translateY(-50%); opacity: .5; pointer-events: none; }
  `];t([a({type:String})],l.prototype,"placeholder",2);t([a({type:Boolean})],l.prototype,"disabled",2);t([a({type:Boolean})],l.prototype,"readonly",2);t([a({type:Boolean})],l.prototype,"required",2);t([a({type:Boolean})],l.prototype,"open",2);t([a({type:String})],l.prototype,"displayValue",2);t([a({type:String})],l.prototype,"activeDescendant",2);t([a({type:String})],l.prototype,"controls",2);l=t([p("shadcn-combobox-input")],l);let v=class extends h{constructor(){super(...arguments),this.open=!1,this.listboxId=`shadcn-combobox-listbox-${v._nextId++}`}render(){return i`<div id=${this.listboxId} part="content" class="content" role="listbox"><slot></slot></div>`}};v._nextId=0;v.styles=[u,m,b`
    :host { display: block; position: absolute; z-index: 50; top: calc(100% + var(--spacing-1)); left: 0; width: 100%; }
    :host(:not([open])) { display: none; }
    .content { max-height: 15rem; overflow: auto; padding: var(--spacing-1); border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--popover); color: var(--popover-foreground); box-shadow: var(--shadow-md); animation: shadcn-zoom-in var(--transition-fast); }
    @media (prefers-reduced-motion: reduce) { .content { animation: none; } }
  `];t([a({type:Boolean,reflect:!0})],v.prototype,"open",2);v=t([p("shadcn-combobox-content")],v);let C=class extends h{constructor(){super(...arguments),this.visible=!1}render(){return i`<slot>No items found.</slot>`}};C.styles=[u,m,b`:host { display: none; padding: var(--spacing-6) var(--spacing-2); text-align: center; font-size: var(--font-size-sm); } :host([visible]) { display: block; }`];t([a({type:Boolean,reflect:!0})],C.prototype,"visible",2);C=t([p("shadcn-combobox-empty")],C);let I=class extends h{constructor(){super(...arguments),this.syncVisibility=()=>{this.hidden=!Array.from(this.querySelectorAll("shadcn-combobox-item")).some(e=>!e.filtered)}}render(){return i`<slot @slotchange=${this.syncVisibility}></slot>`}};I.styles=b`:host { display: block; } :host([hidden]) { display: none; }`;I=t([p("shadcn-combobox-group")],I);let L=class extends h{render(){return i`<slot></slot>`}};L.styles=[u,m,b`:host { display: block; padding: var(--spacing-2); color: var(--muted-foreground); font-size: var(--font-size-xs); font-weight: 500; }`];L=t([p("shadcn-combobox-label")],L);let d=class extends h{constructor(){super(...arguments),this.value="",this.keywords="",this.disabled=!1,this.selected=!1,this.active=!1,this.filtered=!1,this.optionId=`shadcn-combobox-option-${d._nextId++}`,this.select=()=>{this.disabled||this.dispatchEvent(new CustomEvent("combobox-item-select",{bubbles:!0,composed:!0,detail:{value:this.value,label:this.displayLabel}}))}}get displayLabel(){return(this.textContent??"").trim()}get searchText(){return`${this.displayLabel} ${this.keywords}`.trim()}render(){return i`<div id=${this.optionId} part="item" class="item ${this.active?"active":""} ${this.disabled?"disabled":""}" role="option" aria-selected=${this.selected} aria-disabled=${this.disabled} @click=${this.select} @pointermove=${this._pointerMove}><slot></slot>${this.selected?i`<span class="check" aria-hidden="true">&#10003;</span>`:""}</div>`}_pointerMove(){this.dispatchEvent(new CustomEvent("combobox-item-pointermove",{bubbles:!0,composed:!0}))}};d._nextId=0;d.styles=[u,m,b`
    :host { display: block; }
    :host([filtered]) { display: none; }
    .item { position: relative; display: flex; min-height: 2rem; align-items: center; padding: var(--spacing-1) var(--spacing-8) var(--spacing-1) var(--spacing-2); border-radius: var(--radius-sm); font-size: var(--font-size-sm); cursor: default; outline: none; }
    .item.active { background: var(--accent); color: var(--accent-foreground); }
    .item.disabled { opacity: .5; pointer-events: none; }
    .check { position: absolute; right: var(--spacing-2); }
  `];t([a({type:String,reflect:!0})],d.prototype,"value",2);t([a({type:String})],d.prototype,"keywords",2);t([a({type:Boolean,reflect:!0})],d.prototype,"disabled",2);t([a({type:Boolean})],d.prototype,"selected",2);t([a({type:Boolean})],d.prototype,"active",2);t([a({type:Boolean,reflect:!0})],d.prototype,"filtered",2);d=t([p("shadcn-combobox-item")],d);let q=class extends h{};q.styles=[u,m,b`:host { display: block; height: 1px; margin: var(--spacing-1) calc(var(--spacing-1) * -1); background: var(--border); }`];q=t([p("shadcn-combobox-separator")],q);const ae={title:"Components/Combobox",component:"shadcn-combobox",tags:["autodocs"],argTypes:{value:{control:"text",description:"Selected item value."},placeholder:{control:"text",description:"Text shown without a selection."},open:{control:"boolean",description:"Whether the popup is open."},disabled:{control:"boolean",description:"Whether interaction is disabled."},readonly:{control:"boolean",description:"Whether the value is read-only."},required:{control:"boolean",description:"Whether a selection is required."}}},f=e=>i`
  <shadcn-combobox
    .value=${String(e.value??"")}
    placeholder=${String(e.placeholder??"Select a framework")}
    ?open=${e.open}
    ?disabled=${e.disabled}
    ?readonly=${e.readonly}
    ?required=${e.required}
  >
    <shadcn-combobox-input></shadcn-combobox-input>
    <shadcn-combobox-content>
      <shadcn-combobox-empty>No framework found.</shadcn-combobox-empty>
      <shadcn-combobox-item value="next.js" keywords="react">Next.js</shadcn-combobox-item>
      <shadcn-combobox-item value="sveltekit">SvelteKit</shadcn-combobox-item>
      <shadcn-combobox-item value="nuxt.js" keywords="vue">Nuxt.js</shadcn-combobox-item>
      <shadcn-combobox-item value="remix" disabled>Remix (unavailable)</shadcn-combobox-item>
      <shadcn-combobox-item value="astro">Astro</shadcn-combobox-item>
    </shadcn-combobox-content>
  </shadcn-combobox>
`,g={args:{value:"",placeholder:"Select a framework",open:!1},render:f},_={args:{value:"sveltekit"},render:f},w={args:{value:"next.js",open:!0},render:f},k={args:{disabled:!0},render:f},E={args:{value:"astro",readonly:!0},render:f},S={render:()=>i`
    <shadcn-combobox placeholder="Select a food">
      <shadcn-combobox-input></shadcn-combobox-input>
      <shadcn-combobox-content>
        <shadcn-combobox-empty>No food found.</shadcn-combobox-empty>
        <shadcn-combobox-group>
          <shadcn-combobox-label>Fruit</shadcn-combobox-label>
          <shadcn-combobox-item value="apple">Apple</shadcn-combobox-item>
          <shadcn-combobox-item value="banana">Banana</shadcn-combobox-item>
        </shadcn-combobox-group>
        <shadcn-combobox-separator></shadcn-combobox-separator>
        <shadcn-combobox-group>
          <shadcn-combobox-label>Vegetables</shadcn-combobox-label>
          <shadcn-combobox-item value="carrot">Carrot</shadcn-combobox-item>
          <shadcn-combobox-item value="broccoli">Broccoli</shadcn-combobox-item>
        </shadcn-combobox-group>
      </shadcn-combobox-content>
    </shadcn-combobox>
  `},$={render:()=>i`
    <shadcn-combobox open placeholder="No options available">
      <shadcn-combobox-input></shadcn-combobox-input>
      <shadcn-combobox-content><shadcn-combobox-empty visible>No items found.</shadcn-combobox-empty></shadcn-combobox-content>
    </shadcn-combobox>
  `};var A,O,B;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Select a framework',
    open: false
  },
  render
}`,...(B=(O=g.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var V,D,z;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 'sveltekit'
  },
  render
}`,...(z=(D=_.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var P,N,j;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 'next.js',
    open: true
  },
  render
}`,...(j=(N=w.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var M,R,W;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render
}`,...(W=(R=k.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var T,K,U;E.parameters={...E.parameters,docs:{...(T=E.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 'astro',
    readonly: true
  },
  render
}`,...(U=(K=E.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var F,G,H;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => html\`
    <shadcn-combobox placeholder="Select a food">
      <shadcn-combobox-input></shadcn-combobox-input>
      <shadcn-combobox-content>
        <shadcn-combobox-empty>No food found.</shadcn-combobox-empty>
        <shadcn-combobox-group>
          <shadcn-combobox-label>Fruit</shadcn-combobox-label>
          <shadcn-combobox-item value="apple">Apple</shadcn-combobox-item>
          <shadcn-combobox-item value="banana">Banana</shadcn-combobox-item>
        </shadcn-combobox-group>
        <shadcn-combobox-separator></shadcn-combobox-separator>
        <shadcn-combobox-group>
          <shadcn-combobox-label>Vegetables</shadcn-combobox-label>
          <shadcn-combobox-item value="carrot">Carrot</shadcn-combobox-item>
          <shadcn-combobox-item value="broccoli">Broccoli</shadcn-combobox-item>
        </shadcn-combobox-group>
      </shadcn-combobox-content>
    </shadcn-combobox>
  \`
}`,...(H=(G=S.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Y,J,Q;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => html\`
    <shadcn-combobox open placeholder="No options available">
      <shadcn-combobox-input></shadcn-combobox-input>
      <shadcn-combobox-content><shadcn-combobox-empty visible>No items found.</shadcn-combobox-empty></shadcn-combobox-content>
    </shadcn-combobox>
  \`
}`,...(Q=(J=$.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const re=["Default","WithValue","Open","Disabled","ReadOnly","Groups","Empty"];export{g as Default,k as Disabled,$ as Empty,S as Groups,w as Open,E as ReadOnly,_ as WithValue,re as __namedExportsOrder,ae as default};
