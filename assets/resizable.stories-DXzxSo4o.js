import{i as P,a as E,x as b}from"./iframe-Baten_M5.js";import{t as $}from"./custom-element-C028faeO.js";import{n as h}from"./property-Cny5Lx-H.js";import{e as U}from"./base-CShCMygk.js";import{t as K}from"./index-Bkm5wONK.js";import"./preload-helper-BBXEHTOU.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e){return(t,a)=>{const{slot:i,selector:s}=e??{},n="slot"+(i?`[name=${i}]`:":not([name])");return U(t,a,{get(){var z;const r=(z=this.renderRoot)==null?void 0:z.querySelector(n),o=(r==null?void 0:r.assignedElements(e))??[];return s===void 0?o:o.filter((v=>v.matches(s)))}})}}var W=Object.defineProperty,V=Object.getOwnPropertyDescriptor,l=(e,t,a,i)=>{for(var s=i>1?void 0:i?V(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&W(t,a,s),s};let m=class extends E{constructor(){super(...arguments),this.orientation="horizontal",this.startPosition=0,this.startSizes=[0,0],this.handlePointerMove=e=>{if(!this.activeHandle)return;const t=this.getAdjacentPanels(this.activeHandle);if(!t)return;const[a,i]=t,s=this.getBoundingClientRect(),n=this.orientation==="horizontal"?s.width:s.height;if(n<=0)return;const r=this.orientation==="horizontal"?e.clientX:e.clientY,o=this.orientation==="horizontal"&&getComputedStyle(this).direction==="rtl"?-1:1,z=(r-this.startPosition)/n*100*o,v=this.startSizes[0]+this.startSizes[1],[f,p]=this.getBounds(a,i,v);this.applyPairSizes(a,i,this.clamp(this.startSizes[0]+z,f,p),v),this.dispatchLayoutEvent("resizable-change")},this.handlePointerUp=()=>this.stopPointerResize(!0)}render(){return b`<slot @slotchange=${this.initializeLayout}></slot>`}updated(e){e.has("orientation")&&this.updateHandles()}disconnectedCallback(){this.stopPointerResize(!1),super.disconnectedCallback()}getLayout(){return this.panelElements.map(e=>e.size)}setLayout(e){const t=this.panelElements;if(e.length!==t.length||e.some(i=>!Number.isFinite(i)||i<0))throw new TypeError(`Expected ${t.length} finite, non-negative panel sizes.`);const a=e.reduce((i,s)=>i+s,0);if(a<=0)throw new TypeError("Panel sizes must have a positive total.");t.forEach((i,s)=>{i.size=e[s]/a*100}),this.updateHandles(),this.dispatchLayoutEvent("resizable-change")}beginPointerResize(e,t){var s;if(e.disabled||t.button!==0)return;const a=this.getAdjacentPanels(e);if(!a)return;t.preventDefault(),e.focus(),e.setPointerCapture(t.pointerId),this.activeHandle=e,this.startPosition=this.orientation==="horizontal"?t.clientX:t.clientY,this.startSizes=[a[0].size,a[1].size],e.active=!0,(s=this.abortController)==null||s.abort(),this.abortController=new AbortController;const i={signal:this.abortController.signal};window.addEventListener("pointermove",this.handlePointerMove,i),window.addEventListener("pointerup",this.handlePointerUp,i),window.addEventListener("pointercancel",this.handlePointerUp,i)}resizeWithKeyboard(e,t,a){const i=this.getAdjacentPanels(e);if(!i||e.disabled)return!1;const[s,n]=i,r=s.size+n.size,[o,z]=this.getBounds(s,n,r),v=this.orientation==="horizontal"&&getComputedStyle(this).direction==="rtl"?-1:1,f=(a?10:1)*v;let p=s.size;if(t==="Home")p=o;else if(t==="End")p=z;else if(t==="ArrowLeft"&&this.orientation==="horizontal")p-=f;else if(t==="ArrowRight"&&this.orientation==="horizontal")p+=f;else if(t==="ArrowUp"&&this.orientation==="vertical")p-=1*(a?10:1);else if(t==="ArrowDown"&&this.orientation==="vertical")p+=1*(a?10:1);else return!1;return this.applyPairSizes(s,n,this.clamp(p,o,z),r),this.dispatchLayoutEvent("resizable-change"),this.dispatchLayoutEvent("resizable-commit"),!0}initializeLayout(){const e=this.panelElements;if(e.length===0)return;const t=e.reduce((r,o)=>r+Math.max(0,o.defaultSize),0),a=e.filter(r=>r.defaultSize<=0).length,i=a>0?Math.max(0,100-t)/a:0,s=e.map(r=>r.defaultSize>0?r.defaultSize:i),n=s.reduce((r,o)=>r+o,0)||e.length;e.forEach((r,o)=>{r.size=(s[o]||1)/n*100}),this.updateHandles()}stopPointerResize(e){var t;this.activeHandle&&(this.activeHandle.active=!1,this.activeHandle=void 0,(t=this.abortController)==null||t.abort(),this.abortController=void 0,e&&this.dispatchLayoutEvent("resizable-commit"))}getAdjacentPanels(e){const t=Array.from(this.children),a=t.indexOf(e),i=t.slice(0,a).reverse().find(n=>n instanceof u),s=t.slice(a+1).find(n=>n instanceof u);return i&&s?[i,s]:void 0}getBounds(e,t,a){return[Math.max(e.minSize,a-t.maxSize),Math.min(e.maxSize,a-t.minSize)]}applyPairSizes(e,t,a,i){e.size=a,t.size=i-a,this.updateHandles()}updateHandles(){this.handleElements.forEach(e=>{e.orientation=this.orientation==="horizontal"?"vertical":"horizontal";const t=this.getAdjacentPanels(e);if(!t)return;const[a,i]=t,s=a.size+i.size,[n,r]=this.getBounds(a,i,s);e.valueMin=n,e.valueMax=r,e.valueNow=a.size})}dispatchLayoutEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:{sizes:this.getLayout()}}))}clamp(e,t,a){return Math.min(a,Math.max(t,e))}};m.styles=[K,P`
            :host {
                display: flex;
                width: 100%;
                height: 100%;
                min-width: 0;
                min-height: 0;
                overflow: hidden;
            }

            :host([orientation='vertical']) {
                flex-direction: column;
            }

            :host(:not([orientation='vertical'])) {
                flex-direction: row;
            }

            slot {
                display: contents;
            }
        `];l([F({selector:"shadcn-resizable-panel"})],m.prototype,"panelElements",2);l([F({selector:"shadcn-resizable-handle"})],m.prototype,"handleElements",2);l([h({reflect:!0})],m.prototype,"orientation",2);m=l([$("shadcn-resizable-panel-group")],m);let u=class extends E{constructor(){super(...arguments),this.defaultSize=0,this.minSize=10,this.maxSize=100,this._size=0}get size(){return this._size}set size(e){const t=Number.isFinite(e)?Math.max(0,e):0;t!==this._size&&(this._size=t,this.style.setProperty("--resizable-panel-size",String(t)))}render(){return b`<div part="panel" class="panel"><slot></slot></div>`}};u.styles=P`
        :host {
            display: block;
            flex: var(--resizable-panel-size, 1) 1 0;
            min-width: 0;
            min-height: 0;
            overflow: hidden;
        }

        .panel {
            width: 100%;
            height: 100%;
        }
    `;l([h({type:Number,attribute:"default-size"})],u.prototype,"defaultSize",2);l([h({type:Number,attribute:"min-size"})],u.prototype,"minSize",2);l([h({type:Number,attribute:"max-size"})],u.prototype,"maxSize",2);u=l([$("shadcn-resizable-panel")],u);let c=class extends E{constructor(){super(...arguments),this.withHandle=!1,this.disabled=!1,this.orientation="vertical",this.active=!1,this.valueMin=0,this.valueMax=100,this.valueNow=50,this.handlePointerDown=e=>{var t;(t=this.group)==null||t.beginPointerResize(this,e)},this.handleKeyDown=e=>{var t;(t=this.group)!=null&&t.resizeWithKeyboard(this,e.key,e.shiftKey)&&e.preventDefault()}}render(){return b`
            <div part="handle">
                <div part="grip" class="grip" aria-hidden="true"><span class="dots"></span></div>
            </div>
        `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator"),this.tabIndex=this.disabled?-1:0,this.addEventListener("pointerdown",this.handlePointerDown),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){this.removeEventListener("pointerdown",this.handlePointerDown),this.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}updated(e){e.has("disabled")&&(this.tabIndex=this.disabled?-1:0),e.has("disabled")&&this.setAttribute("aria-disabled",String(this.disabled)),e.has("orientation")&&this.setAttribute("aria-orientation",this.orientation),e.has("valueMin")&&this.setAttribute("aria-valuemin",String(Math.round(this.valueMin))),e.has("valueMax")&&this.setAttribute("aria-valuemax",String(Math.round(this.valueMax))),e.has("valueNow")&&this.setAttribute("aria-valuenow",String(Math.round(this.valueNow)))}get group(){return this.closest("shadcn-resizable-panel-group")}};c.styles=[K,P`
            :host {
                position: relative;
                display: flex;
                flex: 0 0 var(--resizable-handle-size, 1px);
                align-items: center;
                justify-content: center;
                background: var(--resizable-handle-color, var(--border));
                outline: none;
                touch-action: none;
                user-select: none;
                z-index: 1;
            }

            :host([orientation='vertical']) {
                width: var(--resizable-handle-size, 1px);
                height: 100%;
                cursor: col-resize;
            }

            :host([orientation='horizontal']) {
                width: 100%;
                height: var(--resizable-handle-size, 1px);
                cursor: row-resize;
            }

            :host::after {
                content: '';
                position: absolute;
            }

            :host([orientation='vertical'])::after {
                inset: 0 -0.25rem;
            }

            :host([orientation='horizontal'])::after {
                inset: -0.25rem 0;
            }

            :host(:focus-visible) {
                box-shadow: 0 0 0 1px var(--ring), 0 0 0 3px var(--background);
            }

            :host([disabled]) {
                cursor: not-allowed;
                opacity: 0.5;
            }

            .grip {
                position: relative;
                z-index: 2;
                display: none;
                flex-shrink: 0;
                width: 0.75rem;
                height: 1rem;
                border: 1px solid var(--border);
                border-radius: var(--radius-sm);
                background: var(--background);
                align-items: center;
                justify-content: center;
                color: var(--muted-foreground);
            }

            :host([with-handle]) .grip {
                display: flex;
            }

            :host([orientation='horizontal']) .grip {
                transform: rotate(90deg);
            }

            .dots {
                width: 2px;
                height: 2px;
                border-radius: 9999px;
                background: currentColor;
                box-shadow: 0 -3px currentColor, 0 3px currentColor;
            }
        `];l([h({type:Boolean,reflect:!0,attribute:"with-handle"})],c.prototype,"withHandle",2);l([h({type:Boolean,reflect:!0})],c.prototype,"disabled",2);l([h({reflect:!0})],c.prototype,"orientation",2);l([h({type:Boolean,reflect:!0})],c.prototype,"active",2);l([h({type:Number,attribute:!1})],c.prototype,"valueMin",2);l([h({type:Number,attribute:!1})],c.prototype,"valueMax",2);l([h({type:Number,attribute:!1})],c.prototype,"valueNow",2);c=l([$("shadcn-resizable-handle")],c);const Z={title:"Components/Resizable",component:"shadcn-resizable-panel-group",tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"],description:"Direction in which the panels are arranged."}},parameters:{docs:{description:{component:"Accessible resizable panel layouts styled after shadcn/ui."}}}},d="display: flex; height: 100%; align-items: center; justify-content: center; padding: 1rem; box-sizing: border-box;",g={render:()=>b`
        <shadcn-resizable-panel-group style="height: 200px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="50"><div style=${d}>One</div></shadcn-resizable-panel>
            <shadcn-resizable-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="50"><div style=${d}>Two</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    `},y={render:()=>b`
        <shadcn-resizable-panel-group style="height: 200px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="30" min-size="20"><div style=${d}>Sidebar</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="70" min-size="30"><div style=${d}>Content</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    `},x={render:()=>b`
        <shadcn-resizable-panel-group orientation="vertical" style="height: 320px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="40"><div style=${d}>Header</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="60"><div style=${d}>Body</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    `},w={render:()=>b`
        <shadcn-resizable-panel-group style="height: 240px; max-width: 56rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="25" min-size="15"><div style=${d}>Navigation</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="50" min-size="20"><div style=${d}>Editor</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="25" min-size="15"><div style=${d}>Inspector</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    `},S={render:()=>b`
        <shadcn-resizable-panel-group style="height: 200px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel><div style=${d}>Fixed split</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle disabled></shadcn-resizable-handle>
            <shadcn-resizable-panel><div style=${d}>Disabled handle</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    `};var C,M,H;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
        <shadcn-resizable-panel-group style="height: 200px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="50"><div style=\${panelStyle}>One</div></shadcn-resizable-panel>
            <shadcn-resizable-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="50"><div style=\${panelStyle}>Two</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    \`
}`,...(H=(M=g.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var L,A,D;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
        <shadcn-resizable-panel-group style="height: 200px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="30" min-size="20"><div style=\${panelStyle}>Sidebar</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="70" min-size="30"><div style=\${panelStyle}>Content</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    \`
}`,...(D=(A=y.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var N,j,R;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
        <shadcn-resizable-panel-group orientation="vertical" style="height: 320px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="40"><div style=\${panelStyle}>Header</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="60"><div style=\${panelStyle}>Body</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    \`
}`,...(R=(j=x.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var _,B,T;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
        <shadcn-resizable-panel-group style="height: 240px; max-width: 56rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel default-size="25" min-size="15"><div style=\${panelStyle}>Navigation</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="50" min-size="20"><div style=\${panelStyle}>Editor</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
            <shadcn-resizable-panel default-size="25" min-size="15"><div style=\${panelStyle}>Inspector</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    \`
}`,...(T=(B=w.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var k,O,I;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
        <shadcn-resizable-panel-group style="height: 200px; max-width: 48rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
            <shadcn-resizable-panel><div style=\${panelStyle}>Fixed split</div></shadcn-resizable-panel>
            <shadcn-resizable-handle with-handle disabled></shadcn-resizable-handle>
            <shadcn-resizable-panel><div style=\${panelStyle}>Disabled handle</div></shadcn-resizable-panel>
        </shadcn-resizable-panel-group>
    \`
}`,...(I=(O=S.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const ee=["Default","WithHandle","Vertical","ThreePanels","DisabledHandle"];export{g as Default,S as DisabledHandle,w as ThreePanels,x as Vertical,y as WithHandle,ee as __namedExportsOrder,Z as default};
