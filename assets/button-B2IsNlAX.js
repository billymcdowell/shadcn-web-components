import{i as b,a as c,x as l}from"./lit-element-B21iCxvW.js";import{t as v}from"./custom-element-C028faeO.js";import{n as i}from"./property-CJLssJ-s.js";import{t as p,f as g}from"./index-BVWPfyNL.js";var f=Object.defineProperty,h=Object.getOwnPropertyDescriptor,n=(t,e,s,a)=>{for(var o=a>1?void 0:a?h(e,s):e,u=t.length-1,d;u>=0;u--)(d=t[u])&&(o=(a?d(e,s,o):d(o))||o);return a&&o&&f(e,s,o),o};let r=class extends c{constructor(){super(...arguments),this.variant="default",this.size="default",this.disabled=!1,this.type="button"}render(){const t=this.size==="default"?"default-size":this.size;return l`
      <button
        part="button"
        class="button button--${this.variant} button--${t}"
        ?disabled=${this.disabled}
        type=${this.type}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `}_handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.dispatchEvent(new CustomEvent("button-click",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}};r.styles=[p,g,b`
      :host {
        display: inline-block;
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-2);
        white-space: nowrap;
        font-weight: var(--font-medium);
        font-family: var(--font-sans);
        transition-property: color, background-color, border-color, box-shadow;
        transition-duration: var(--transition-fast);
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        border: 1px solid transparent;
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      .button:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .button:disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      /* Variants */
      .button--default {
        background-color: var(--button-bg, var(--primary));
        color: var(--button-color, var(--primary-foreground));
      }

      .button--default:hover:not(:disabled) {
        background-color: var(--button-bg, var(--primary));
        opacity: 0.9;
      }

      .button--destructive {
        background-color: var(--button-bg, var(--destructive));
        color: var(--button-color, var(--destructive-foreground));
      }

      .button--destructive:hover:not(:disabled) {
        background-color: var(--button-bg, var(--destructive));
        opacity: 0.9;
      }

      .button--outline {
        border-color: var(--button-border, var(--input));
        background-color: transparent;
        color: var(--button-color, var(--foreground));
      }

      .button--outline:hover:not(:disabled) {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      .button--secondary {
        background-color: var(--button-bg, var(--secondary));
        color: var(--button-color, var(--secondary-foreground));
      }

      .button--secondary:hover:not(:disabled) {
        background-color: var(--button-bg, var(--secondary));
        opacity: 0.8;
      }

      .button--ghost {
        background-color: transparent;
        color: var(--button-color, var(--foreground));
      }

      .button--ghost:hover:not(:disabled) {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }

      .button--link {
        background-color: transparent;
        color: var(--button-color, var(--primary));
        text-decoration: underline;
        text-underline-offset: 4px;
      }

      .button--link:hover:not(:disabled) {
        text-decoration: none;
      }

      /* Sizes */
      .button--sm {
        height: 2.25rem;
        padding: 0 var(--spacing-3);
        border-radius: var(--button-border-radius, var(--radius-md));
        font-size: var(--font-size-sm);
      }

      .button--default-size {
        height: 2.5rem;
        padding: 0 var(--spacing-4);
        border-radius: var(--button-border-radius, var(--radius-md));
        font-size: var(--font-size-sm);
      }

      .button--lg {
        height: 2.75rem;
        padding: 0 var(--spacing-8);
        border-radius: var(--button-border-radius, var(--radius-md));
        font-size: var(--font-size-base);
      }

      .button--icon {
        height: 2.5rem;
        width: 2.5rem;
        padding: 0;
        border-radius: var(--button-border-radius, var(--radius-md));
      }
    `];n([i({type:String})],r.prototype,"variant",2);n([i({type:String})],r.prototype,"size",2);n([i({type:Boolean})],r.prototype,"disabled",2);n([i({type:String})],r.prototype,"type",2);r=n([v("shadcn-button")],r);
