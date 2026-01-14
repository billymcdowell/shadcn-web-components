import{i as U,a as W,x as r}from"./lit-element-B21iCxvW.js";import{t as $}from"./custom-element-C028faeO.js";import{n as v}from"./property-CJLssJ-s.js";import{t as G}from"./index-BVWPfyNL.js";import"./toggle-B-p1JS7r.js";var P=Object.defineProperty,q=Object.getOwnPropertyDescriptor,s=(t,o,e,n)=>{for(var l=n>1?void 0:n?q(o,e):o,x=t.length-1,y;x>=0;x--)(y=t[x])&&(l=(n?y(o,e,l):y(l))||l);return n&&l&&P(o,e,l),l};let g=class extends W{constructor(){super(...arguments),this.type="single",this.value="",this.orientation="horizontal",this.disabled=!1}render(){return r`
      <div
        part="toggle-group"
        class="toggle-group toggle-group--${this.orientation}"
        role="group"
        @toggle-change=${this._handleToggleChange}
      >
        <slot></slot>
      </div>
    `}_handleToggleChange(t){const o=t.target,e=o.value;if(this.type==="single")this.value=o.pressed?e:"";else{const n=this.value?this.value.split(","):[],l=n.indexOf(e);o.pressed&&l===-1?n.push(e):!o.pressed&&l!==-1&&n.splice(l,1),this.value=n.join(",")}this._updateToggles(),this.dispatchEvent(new CustomEvent("toggle-group-change",{bubbles:!0,composed:!0,detail:{value:this.value,values:this.value?this.value.split(","):[]}}))}_updateToggles(){const t=this._getToggles(),o=this.value?this.value.split(","):[];t.forEach(e=>{this.type==="single"?e.pressed=e.value===this.value:e.pressed=o.includes(e.value),e.disabled=this.disabled||e.disabled})}_getToggles(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");return t?t.assignedElements({flatten:!0}).filter(n=>n.tagName.toLowerCase()==="shadcn-toggle"):[]}updated(t){(t.has("value")||t.has("disabled")||t.has("type"))&&this._updateToggles()}firstUpdated(){this._updateToggles()}};g.styles=[G,U`
      :host {
        display: inline-flex;
      }

      .toggle-group {
        display: inline-flex;
        gap: 0;
        position: relative;
      }

      .toggle-group--vertical {
        flex-direction: column;
      }

      /* Merge adjacent borders */
      .toggle-group--horizontal ::slotted(:not(:first-child)) {
        margin-left: -1px;
      }

      .toggle-group--vertical ::slotted(:not(:first-child)) {
        margin-top: -1px;
      }

      /* Set border radius via CSS custom properties for horizontal groups */
      .toggle-group--horizontal ::slotted(*:first-child) {
        --toggle-border-radius: var(--radius-md) 0 0 var(--radius-md);
      }

      .toggle-group--horizontal ::slotted(*:last-child) {
        --toggle-border-radius: 0 var(--radius-md) var(--radius-md) 0;
      }

      .toggle-group--horizontal ::slotted(*:only-child) {
        --toggle-border-radius: var(--radius-md);
      }

      .toggle-group--horizontal ::slotted(*:not(:first-child):not(:last-child)) {
        --toggle-border-radius: 0;
      }

      /* Set border radius via CSS custom properties for vertical groups */
      .toggle-group--vertical ::slotted(*:first-child) {
        --toggle-border-radius: var(--radius-md) var(--radius-md) 0 0;
      }

      .toggle-group--vertical ::slotted(*:last-child) {
        --toggle-border-radius: 0 0 var(--radius-md) var(--radius-md);
      }

      .toggle-group--vertical ::slotted(*:only-child) {
        --toggle-border-radius: var(--radius-md);
      }

      .toggle-group--vertical ::slotted(*:not(:first-child):not(:last-child)) {
        --toggle-border-radius: 0;
      }

      /* Ensure pressed/focused toggles appear on top */
      ::slotted(*:hover),
      ::slotted(*:focus-within) {
        position: relative;
        z-index: 1;
      }
    `];s([v({type:String})],g.prototype,"type",2);s([v({type:String})],g.prototype,"value",2);s([v({type:String})],g.prototype,"orientation",2);s([v({type:Boolean})],g.prototype,"disabled",2);g=s([$("shadcn-toggle-group")],g);const Q={title:"Components/Toggle Group",component:"shadcn-toggle-group",tags:["autodocs"],argTypes:{type:{control:"radio",options:["single","multiple"],description:"Selection type"},orientation:{control:"radio",options:["horizontal","vertical"],description:"Layout orientation"},disabled:{control:"boolean",description:"Whether the group is disabled"}},parameters:{docs:{description:{component:"A group of toggle buttons with single or multiple selection modes."}}}},i={render:()=>r`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group>
        <shadcn-toggle value="left">Left</shadcn-toggle>
        <shadcn-toggle value="center">Center</shadcn-toggle>
        <shadcn-toggle value="right">Right</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `},a={render:()=>r`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group type="single" value="center">
        <shadcn-toggle value="left">Left</shadcn-toggle>
        <shadcn-toggle value="center">Center</shadcn-toggle>
        <shadcn-toggle value="right">Right</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `},d={render:()=>r`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group type="multiple" value="bold,italic">
        <shadcn-toggle value="bold">Bold</shadcn-toggle>
        <shadcn-toggle value="italic">Italic</shadcn-toggle>
        <shadcn-toggle value="underline">Underline</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `},c={render:()=>r`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group type="single">
        <shadcn-toggle value="left">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="17" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="17" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `},h={render:()=>r`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group orientation="vertical" value="option2">
        <shadcn-toggle value="option1">Option 1</shadcn-toggle>
        <shadcn-toggle value="option2">Option 2</shadcn-toggle>
        <shadcn-toggle value="option3">Option 3</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `},u={render:()=>r`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group disabled value="center">
        <shadcn-toggle value="left">Left</shadcn-toggle>
        <shadcn-toggle value="center">Center</shadcn-toggle>
        <shadcn-toggle value="right">Right</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `},p={render:()=>r`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 0.75rem;">
      <shadcn-toggle-group type="multiple">
        <shadcn-toggle value="bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="italic">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="4" x2="10" y2="4"/>
            <line x1="14" y1="20" x2="5" y2="20"/>
            <line x1="15" y1="4" x2="9" y2="20"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12"/>
            <line x1="6" y1="20" x2="18" y2="20"/>
          </svg>
        </shadcn-toggle>
      </shadcn-toggle-group>

      <shadcn-toggle-group type="single">
        <shadcn-toggle value="left">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="17" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="17" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="17" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="17" y2="18"/>
          </svg>
        </shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  `};var w,m,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group>
        <shadcn-toggle value="left">Left</shadcn-toggle>
        <shadcn-toggle value="center">Center</shadcn-toggle>
        <shadcn-toggle value="right">Right</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  \`
}`,...(k=(m=i.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var f,b,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group type="single" value="center">
        <shadcn-toggle value="left">Left</shadcn-toggle>
        <shadcn-toggle value="center">Center</shadcn-toggle>
        <shadcn-toggle value="right">Right</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  \`
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var j,B,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group type="multiple" value="bold,italic">
        <shadcn-toggle value="bold">Bold</shadcn-toggle>
        <shadcn-toggle value="italic">Italic</shadcn-toggle>
        <shadcn-toggle value="underline">Underline</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  \`
}`,...(S=(B=d.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var _,z,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group type="single">
        <shadcn-toggle value="left">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="17" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="17" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  \`
}`,...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var O,M,E;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group orientation="vertical" value="option2">
        <shadcn-toggle value="option1">Option 1</shadcn-toggle>
        <shadcn-toggle value="option2">Option 2</shadcn-toggle>
        <shadcn-toggle value="option3">Option 3</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  \`
}`,...(E=(M=h.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var L,R,D;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-toggle-group disabled value="center">
        <shadcn-toggle value="left">Left</shadcn-toggle>
        <shadcn-toggle value="center">Center</shadcn-toggle>
        <shadcn-toggle value="right">Right</shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  \`
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var V,H,I;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 0.75rem;">
      <shadcn-toggle-group type="multiple">
        <shadcn-toggle value="bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="italic">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="4" x2="10" y2="4"/>
            <line x1="14" y1="20" x2="5" y2="20"/>
            <line x1="15" y1="4" x2="9" y2="20"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12"/>
            <line x1="6" y1="20" x2="18" y2="20"/>
          </svg>
        </shadcn-toggle>
      </shadcn-toggle-group>

      <shadcn-toggle-group type="single">
        <shadcn-toggle value="left">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="17" y1="10" x2="7" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="17" y1="18" x2="7" y2="18"/>
          </svg>
        </shadcn-toggle>
        <shadcn-toggle value="right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="21" y1="10" x2="17" y2="10"/>
            <line x1="21" y1="6" x2="3" y2="6"/>
            <line x1="21" y1="14" x2="3" y2="14"/>
            <line x1="21" y1="18" x2="17" y2="18"/>
          </svg>
        </shadcn-toggle>
      </shadcn-toggle-group>
    </div>
  \`
}`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const X=["Default","Single","Multiple","WithIcons","Vertical","Disabled","TextEditor"];export{i as Default,u as Disabled,d as Multiple,a as Single,p as TextEditor,h as Vertical,c as WithIcons,X as __namedExportsOrder,Q as default};
