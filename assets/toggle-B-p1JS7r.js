import{i as p,a as g,x as c}from"./lit-element-B21iCxvW.js";import{t as u}from"./custom-element-C028faeO.js";import{n as d}from"./property-CJLssJ-s.js";import{t as f}from"./index-BVWPfyNL.js";var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,a=(e,t,i,s)=>{for(var o=s>1?void 0:s?b(t,i):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(o=(s?n(t,i,o):n(o))||o);return s&&o&&v(t,i,o),o};let r=class extends g{constructor(){super(...arguments),this.pressed=!1,this.disabled=!1,this.value=""}render(){return c`
      <button
        part="toggle"
        class="toggle ${this.pressed?"toggle--pressed":""} ${this.disabled?"toggle--disabled":""}"
        role="button"
        aria-pressed=${this.pressed}
        aria-disabled=${this.disabled}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `}_handleClick(e){if(this.disabled){e.preventDefault();return}this.pressed=!this.pressed,this.dispatchEvent(new CustomEvent("toggle-change",{bubbles:!0,composed:!0,detail:{pressed:this.pressed,value:this.value}}))}focus(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".toggle"))==null||t.focus()}};r.styles=[f,p`
      :host {
        display: inline-block;
      }

      .toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-2);
        height: 2.5rem;
        padding: 0 var(--spacing-3);
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        font-family: var(--font-sans);
        background-color: transparent;
        color: var(--foreground);
        border: 1px solid var(--input);
        border-radius: var(--toggle-border-radius, var(--radius-md));
        cursor: pointer;
        transition: background-color var(--transition-fast), border-color var(--transition-fast);
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      .toggle:hover:not(.toggle--disabled) {
        background-color: var(--muted);
      }

      .toggle:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .toggle--pressed {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      .toggle--disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `];a([d({type:Boolean})],r.prototype,"pressed",2);a([d({type:Boolean})],r.prototype,"disabled",2);a([d({type:String})],r.prototype,"value",2);r=a([u("shadcn-toggle")],r);
