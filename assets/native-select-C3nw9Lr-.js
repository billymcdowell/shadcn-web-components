import{i as d,a as u,x as h}from"./lit-element-B21iCxvW.js";import{t as v}from"./custom-element-C028faeO.js";import{n as l}from"./property-CJLssJ-s.js";import{e as c}from"./query-BApjzB0v.js";import{t as f,f as m}from"./index-BVWPfyNL.js";var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(s,e,a,i)=>{for(var o=i>1?void 0:i?b(e,a):e,n=s.length-1,p;n>=0;n--)(p=s[n])&&(o=(i?p(e,a,o):p(o))||o);return i&&o&&g(e,a,o),o};let t=class extends u{constructor(){super(...arguments),this.value="",this.disabled=!1,this.required=!1,this.name=""}firstUpdated(){this._updateOptions(),this._slot.addEventListener("slotchange",()=>this._updateOptions())}_updateOptions(){for(;this.selectElement.firstChild;)this.selectElement.removeChild(this.selectElement.firstChild);this._slot.assignedNodes({flatten:!0}).forEach(e=>{(e instanceof HTMLOptionElement||e instanceof HTMLOptGroupElement)&&this.selectElement.appendChild(e.cloneNode(!0))}),this.value&&(this.selectElement.value=this.value)}render(){return h`
      <div class="select-wrapper">
        <select
          part="select"
          class="select"
          .value=${this.value}
          ?disabled=${this.disabled}
          ?required=${this.required}
          name=${this.name}
          @change=${this._handleChange}
        >
        </select>
        <slot style="display: none;"></slot>
        <svg class="select-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    `}_handleChange(s){const e=s.target;this.value=e.value,this.dispatchEvent(new CustomEvent("select-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}focus(){var s;(s=this.selectElement)==null||s.focus()}};t.styles=[f,m,d`
      :host {
        display: block;
      }

      .select-wrapper {
        position: relative;
        display: inline-block;
        width: 100%;
      }

      .select {
        appearance: none;
        display: flex;
        width: 100%;
        height: 2.5rem;
        padding: 0 var(--spacing-8) 0 var(--spacing-3);
        font-size: var(--font-size-sm);
        font-family: var(--font-sans);
        background-color: var(--select-bg, var(--background));
        color: var(--select-color, var(--foreground));
        border: 1px solid var(--select-border, var(--input));
        border-radius: var(--radius-md);
        outline: 2px solid transparent;
        outline-offset: 2px;
        transition: border-color var(--transition-fast), outline var(--transition-fast);
        cursor: pointer;
      }

      .select:focus {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .select:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .select-icon {
        position: absolute;
        right: var(--spacing-3);
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        color: var(--muted-foreground);
      }
    `];r([c(".select")],t.prototype,"selectElement",2);r([l({type:String})],t.prototype,"value",2);r([l({type:Boolean})],t.prototype,"disabled",2);r([l({type:Boolean})],t.prototype,"required",2);r([l({type:String})],t.prototype,"name",2);r([c("slot")],t.prototype,"_slot",2);t=r([v("shadcn-native-select")],t);
