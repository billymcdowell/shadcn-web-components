import{i as u,a as d,x as h}from"./lit-element-B21iCxvW.js";import{t as c}from"./custom-element-C028faeO.js";import{n as o}from"./property-CJLssJ-s.js";import{e as m}from"./query-BApjzB0v.js";import{t as v,f as y}from"./index-BVWPfyNL.js";var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(e,n,a,p)=>{for(var i=p>1?void 0:p?b(n,a):n,s=e.length-1,l;s>=0;s--)(l=e[s])&&(i=(p?l(n,a,i):l(i))||i);return p&&i&&f(n,a,i),i};let t=class extends d{constructor(){super(...arguments),this.type="text",this.value="",this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.error=!1,this.name="",this.autocomplete=""}render(){return h`
      <input
        part="input"
        class="input ${this.error?"input--error":""}"
        type=${this.type}
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        name=${this.name}
        autocomplete=${this.autocomplete}
        minlength=${this.minlength??""}
        maxlength=${this.maxlength??""}
        pattern=${this.pattern??""}
        @input=${this._handleInput}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      />
    `}_handleInput(e){const n=e.target;this.value=n.value,this.dispatchEvent(new CustomEvent("input-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleFocus(e){this.dispatchEvent(new CustomEvent("input-focus",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}_handleBlur(e){this.dispatchEvent(new CustomEvent("input-blur",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}focus(){var e;(e=this.inputElement)==null||e.focus()}blur(){var e;(e=this.inputElement)==null||e.blur()}};t.styles=[v,y,u`
      :host {
        display: block;
      }

      .input {
        display: flex;
        width: 100%;
        height: 2.5rem;
        padding: 0 var(--spacing-3);
        font-size: var(--font-size-sm);
        font-family: var(--font-sans);
        background-color: var(--input-bg, var(--background));
        color: var(--input-color, var(--foreground));
        border: 1px solid var(--input-border, var(--input));
        border-radius: var(--input-border-radius, var(--radius-md));
        outline: 2px solid transparent;
        outline-offset: 2px;
        transition: border-color var(--transition-fast), outline var(--transition-fast);
      }

      .input::placeholder {
        color: var(--muted-foreground);
      }

      .input:focus {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .input:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .input--error {
        border-color: var(--destructive);
      }

      .input--error:focus {
        outline-color: var(--destructive);
      }
    `];r([m(".input")],t.prototype,"inputElement",2);r([o({type:String})],t.prototype,"type",2);r([o({type:String})],t.prototype,"value",2);r([o({type:String})],t.prototype,"placeholder",2);r([o({type:Boolean})],t.prototype,"disabled",2);r([o({type:Boolean})],t.prototype,"readonly",2);r([o({type:Boolean})],t.prototype,"required",2);r([o({type:Boolean})],t.prototype,"error",2);r([o({type:String})],t.prototype,"name",2);r([o({type:String})],t.prototype,"autocomplete",2);r([o({type:Number})],t.prototype,"minlength",2);r([o({type:Number})],t.prototype,"maxlength",2);r([o({type:String})],t.prototype,"pattern",2);t=r([c("shadcn-input")],t);
