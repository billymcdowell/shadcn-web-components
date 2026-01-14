import{i as f,a as p,x as b}from"./lit-element-B21iCxvW.js";import{t as c}from"./custom-element-C028faeO.js";import{n as m}from"./property-CJLssJ-s.js";import{t as v}from"./index-BVWPfyNL.js";var d=Object.defineProperty,u=Object.getOwnPropertyDescriptor,i=(n,r,t,l)=>{for(var e=l>1?void 0:l?u(r,t):r,a=n.length-1,s;a>=0;a--)(s=n[a])&&(e=(l?s(r,t,e):s(e))||e);return l&&e&&d(r,t,e),e};let o=class extends p{render(){return b`
      <label
        part="label"
        class="label"
        for=${this.for||""}
      >
        <slot></slot>
      </label>
    `}};o.styles=[v,f`
      :host {
        display: inline-block;
      }

      .label {
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        line-height: var(--leading-none);
        color: var(--label-color, var(--foreground));
        cursor: default;
        user-select: none;
      }

      .label:has(+ :disabled) {
        cursor: not-allowed;
        opacity: 0.7;
      }
    `];i([m({type:String})],o.prototype,"for",2);o=i([c("shadcn-label")],o);
