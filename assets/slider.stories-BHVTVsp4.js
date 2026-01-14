import{i as W,a as K,x as d}from"./lit-element-B21iCxvW.js";import{t as H}from"./custom-element-C028faeO.js";import{n as o}from"./property-CJLssJ-s.js";import{r as X}from"./state-CSOq1DZK.js";import{e as T}from"./query-BApjzB0v.js";import{t as q}from"./index-BVWPfyNL.js";import"./label-BV95ynri.js";var G=Object.defineProperty,J=Object.getOwnPropertyDescriptor,t=(e,a,n,i)=>{for(var r=i>1?void 0:i?J(a,n):a,l=e.length-1,f;l>=0;l--)(f=e[l])&&(r=(i?f(a,n,r):f(r))||r);return i&&r&&G(a,n,r),r};let s=class extends K{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1,this.disabled=!1,this.name="",this._isDragging=!1}render(){const e=(this.value-this.min)/(this.max-this.min)*100;return d`
      <div
        part="slider"
        class="slider ${this.disabled?"slider--disabled":""}"
        @pointerdown=${this._handlePointerDown}
      >
        <div class="slider__track">
          <div class="slider__range" style="width: ${e}%"></div>
          <div
            class="slider__thumb"
            style="left: ${e}%"
            tabindex=${this.disabled?"-1":"0"}
            role="slider"
            aria-valuemin=${this.min}
            aria-valuemax=${this.max}
            aria-valuenow=${this.value}
            aria-disabled=${this.disabled}
            @keydown=${this._handleKeyDown}
          ></div>
        </div>
        <input
          class="slider__input"
          type="range"
          .value=${String(this.value)}
          min=${this.min}
          max=${this.max}
          step=${this.step}
          ?disabled=${this.disabled}
          name=${this.name}
          aria-hidden="true"
          tabindex="-1"
        />
      </div>
    `}_handlePointerDown(e){if(this.disabled)return;this._isDragging=!0,this.thumbElement.setPointerCapture(e.pointerId),this._updateValueFromPointer(e);const a=i=>{this._isDragging&&this._updateValueFromPointer(i)},n=()=>{this._isDragging=!1,document.removeEventListener("pointermove",a),document.removeEventListener("pointerup",n)};document.addEventListener("pointermove",a),document.addEventListener("pointerup",n)}_updateValueFromPointer(e){const a=this.trackElement.getBoundingClientRect(),n=Math.max(0,Math.min(1,(e.clientX-a.left)/a.width)),i=this.min+n*(this.max-this.min),r=Math.round(i/this.step)*this.step,l=Math.max(this.min,Math.min(this.max,r));l!==this.value&&(this.value=l,this._dispatchChange())}_handleKeyDown(e){if(this.disabled)return;let a=this.value;const n=this.step*10;switch(e.key){case"ArrowRight":case"ArrowUp":e.preventDefault(),a=Math.min(this.max,this.value+this.step);break;case"ArrowLeft":case"ArrowDown":e.preventDefault(),a=Math.max(this.min,this.value-this.step);break;case"PageUp":e.preventDefault(),a=Math.min(this.max,this.value+n);break;case"PageDown":e.preventDefault(),a=Math.max(this.min,this.value-n);break;case"Home":e.preventDefault(),a=this.min;break;case"End":e.preventDefault(),a=this.max;break}a!==this.value&&(this.value=a,this._dispatchChange())}_dispatchChange(){this.dispatchEvent(new CustomEvent("slider-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}focus(){var e;(e=this.thumbElement)==null||e.focus()}};s.styles=[q,W`
      :host {
        display: block;
      }

      .slider {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        user-select: none;
        touch-action: none;
      }

      .slider__track {
        position: relative;
        height: 0.375rem;
        width: 100%;
        background-color: var(--slider-track-bg, var(--secondary));
        border-radius: var(--radius-full);
        cursor: pointer;
      }

      .slider__range {
        position: absolute;
        height: 100%;
        background-color: var(--slider-range-bg, var(--primary));
        border-radius: var(--radius-full);
      }

      .slider__thumb {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        background-color: var(--slider-thumb-bg, var(--background));
        border: 2px solid var(--primary);
        border-radius: var(--radius-full);
        cursor: grab;
        transition: box-shadow var(--transition-fast);
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .slider__thumb:hover {
        box-shadow: 0 0 0 4px rgba(var(--primary-rgb, 255 255 255) / 0.1);
      }

      .slider__thumb:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .slider__thumb:active {
        cursor: grabbing;
        box-shadow: 0 0 0 6px rgba(var(--primary-rgb, 255 255 255) / 0.15);
      }

      .slider--disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .slider--disabled .slider__track,
      .slider--disabled .slider__thumb {
        cursor: not-allowed;
      }

      .slider__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
    `];t([T(".slider__track")],s.prototype,"trackElement",2);t([T(".slider__thumb")],s.prototype,"thumbElement",2);t([o({type:Number})],s.prototype,"value",2);t([o({type:Number})],s.prototype,"min",2);t([o({type:Number})],s.prototype,"max",2);t([o({type:Number})],s.prototype,"step",2);t([o({type:Boolean})],s.prototype,"disabled",2);t([o({type:String})],s.prototype,"name",2);t([X()],s.prototype,"_isDragging",2);s=t([H("shadcn-slider")],s);const se={title:"Components/Slider",component:"shadcn-slider",tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:100},description:"Current value"},min:{control:"number",description:"Minimum value"},max:{control:"number",description:"Maximum value"},step:{control:"number",description:"Step increment"},disabled:{control:"boolean",description:"Whether the slider is disabled"}},parameters:{docs:{description:{component:"A slider input for selecting a value from a range with mouse/touch drag and keyboard support."}}}},c={render:()=>d`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-slider></shadcn-slider>
    </div>
  `},m={render:()=>d`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label>Volume</shadcn-label>
      <shadcn-slider value="75"></shadcn-slider>
    </div>
  `},u={render:()=>d`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <shadcn-label>Price Range</shadcn-label>
          <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">$0 - $1000</span>
        </div>
        <shadcn-slider min="0" max="1000" step="10" value="500"></shadcn-slider>
      </div>
    </div>
  `},p={render:()=>d`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
        <shadcn-label>Precision</shadcn-label>
        <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">0.50</span>
      </div>
      <shadcn-slider min="0" max="1" step="0.01" value="0.5"></shadcn-slider>
    </div>
  `},h={render:()=>d`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-label>Disabled Slider</shadcn-label>
      <shadcn-slider value="60" disabled></shadcn-slider>
    </div>
  `},v={render:()=>d`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <shadcn-label>Bass</shadcn-label>
        <shadcn-slider value="40"></shadcn-slider>
      </div>

      <div>
        <shadcn-label>Mid</shadcn-label>
        <shadcn-slider value="50"></shadcn-slider>
      </div>

      <div>
        <shadcn-label>Treble</shadcn-label>
        <shadcn-slider value="60"></shadcn-slider>
      </div>

      <div>
        <shadcn-label>Volume</shadcn-label>
        <shadcn-slider value="75"></shadcn-slider>
      </div>
    </div>
  `},b={render:()=>{let e=50;return d`
      <div style="padding: 1rem; background: var(--background); max-width: 400px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <shadcn-label>Interactive Slider</shadcn-label>
          <span id="slider-value" style="font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
            ${e}
          </span>
        </div>
        <shadcn-slider value=${e} @slider-change=${n=>{const i=n.detail;e=i.value;const r=document.getElementById("slider-value");r&&(r.textContent=String(e)),console.log("Slider value:",i.value)}}></shadcn-slider>
        <p style="margin-top: 1rem; font-size: var(--font-size-sm); color: var(--muted-foreground);">
          Drag the slider or use arrow keys. Check console for events.
        </p>
      </div>
    `}},g={render:()=>d`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <form style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1.5rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
        <h3 style="margin: 0; font-size: var(--font-size-lg); font-weight: var(--font-semibold);">
          Filter Settings
        </h3>

        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <shadcn-label>Price Range</shadcn-label>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">
              Up to $500
            </span>
          </div>
          <shadcn-slider name="price" min="0" max="1000" step="50" value="500"></shadcn-slider>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <shadcn-label>Distance (miles)</shadcn-label>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">
              25 mi
            </span>
          </div>
          <shadcn-slider name="distance" min="0" max="100" step="5" value="25"></shadcn-slider>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <shadcn-label>Rating</shadcn-label>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">
              3+ stars
            </span>
          </div>
          <shadcn-slider name="rating" min="0" max="5" step="0.5" value="3"></shadcn-slider>
        </div>
      </form>
    </div>
  `};var y,x,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-slider></shadcn-slider>
    </div>
  \`
}`,...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var k,_,z;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label>Volume</shadcn-label>
      <shadcn-slider value="75"></shadcn-slider>
    </div>
  \`
}`,...(z=(_=m.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var D,$,S;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <shadcn-label>Price Range</shadcn-label>
          <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">$0 - $1000</span>
        </div>
        <shadcn-slider min="0" max="1000" step="10" value="500"></shadcn-slider>
      </div>
    </div>
  \`
}`,...(S=($=u.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var P,E,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
        <shadcn-label>Precision</shadcn-label>
        <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">0.50</span>
      </div>
      <shadcn-slider min="0" max="1" step="0.01" value="0.5"></shadcn-slider>
    </div>
  \`
}`,...(C=(E=p.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var V,M,j;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-label>Disabled Slider</shadcn-label>
      <shadcn-slider value="60" disabled></shadcn-slider>
    </div>
  \`
}`,...(j=(M=h.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var R,F,I;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <shadcn-label>Bass</shadcn-label>
        <shadcn-slider value="40"></shadcn-slider>
      </div>

      <div>
        <shadcn-label>Mid</shadcn-label>
        <shadcn-slider value="50"></shadcn-slider>
      </div>

      <div>
        <shadcn-label>Treble</shadcn-label>
        <shadcn-slider value="60"></shadcn-slider>
      </div>

      <div>
        <shadcn-label>Volume</shadcn-label>
        <shadcn-slider value="75"></shadcn-slider>
      </div>
    </div>
  \`
}`,...(I=(F=v.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var L,B,A;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    let currentValue = 50;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      currentValue = detail.value;
      const display = document.getElementById('slider-value');
      if (display) {
        display.textContent = String(currentValue);
      }
      console.log('Slider value:', detail.value);
    };
    return html\`
      <div style="padding: 1rem; background: var(--background); max-width: 400px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <shadcn-label>Interactive Slider</shadcn-label>
          <span id="slider-value" style="font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
            \${currentValue}
          </span>
        </div>
        <shadcn-slider value=\${currentValue} @slider-change=\${handler}></shadcn-slider>
        <p style="margin-top: 1rem; font-size: var(--font-size-sm); color: var(--muted-foreground);">
          Drag the slider or use arrow keys. Check console for events.
        </p>
      </div>
    \`;
  }
}`,...(A=(B=b.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var O,U,N;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <form style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1.5rem; border: 1px solid var(--border); border-radius: var(--radius-lg);">
        <h3 style="margin: 0; font-size: var(--font-size-lg); font-weight: var(--font-semibold);">
          Filter Settings
        </h3>

        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <shadcn-label>Price Range</shadcn-label>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">
              Up to $500
            </span>
          </div>
          <shadcn-slider name="price" min="0" max="1000" step="50" value="500"></shadcn-slider>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <shadcn-label>Distance (miles)</shadcn-label>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">
              25 mi
            </span>
          </div>
          <shadcn-slider name="distance" min="0" max="100" step="5" value="25"></shadcn-slider>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <shadcn-label>Rating</shadcn-label>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">
              3+ stars
            </span>
          </div>
          <shadcn-slider name="rating" min="0" max="5" step="0.5" value="3"></shadcn-slider>
        </div>
      </form>
    </div>
  \`
}`,...(N=(U=g.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};const ie=["Default","WithLabel","CustomRange","FineControl","Disabled","MultipleSliders","Interactive","FormExample"];export{u as CustomRange,c as Default,h as Disabled,p as FineControl,g as FormExample,b as Interactive,v as MultipleSliders,m as WithLabel,ie as __namedExportsOrder,se as default};
