import{i as p,a as g,x as c}from"./iframe-Baten_M5.js";import{t as u}from"./custom-element-C028faeO.js";import{n as d}from"./property-Cny5Lx-H.js";import{t as f}from"./index-Bkm5wONK.js";var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,a=(e,t,i,r)=>{for(var s=r>1?void 0:r?b(t,i):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(s=(r?n(t,i,s):n(s))||s);return r&&s&&v(t,i,s),s};let o=class extends g{constructor(){super(...arguments),this.pressed=!1,this.disabled=!1,this.value=""}render(){return c`
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
    `}_handleClick(e){if(this.disabled){e.preventDefault();return}this.pressed=!this.pressed,this.dispatchEvent(new CustomEvent("toggle-change",{bubbles:!0,composed:!0,detail:{pressed:this.pressed,value:this.value}}))}focus(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".toggle"))==null||t.focus()}};o.styles=[f,p`
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
    `];a([d({type:Boolean})],o.prototype,"pressed",2);a([d({type:Boolean})],o.prototype,"disabled",2);a([d({type:String})],o.prototype,"value",2);o=a([u("shadcn-toggle")],o);
