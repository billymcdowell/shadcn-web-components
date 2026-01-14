import{i as h,a as c,x as v}from"./lit-element-B21iCxvW.js";import{t as f}from"./custom-element-C028faeO.js";import{n as l}from"./property-CJLssJ-s.js";import{t as d}from"./index-BVWPfyNL.js";var m=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p=(n,o,a,e)=>{for(var r=e>1?void 0:e?u(o,a):o,i=n.length-1,s;i>=0;i--)(s=n[i])&&(r=(e?s(o,a,r):s(r))||r);return e&&r&&m(o,a,r),r};let t=class extends c{constructor(){super(...arguments),this.orientation="horizontal",this.decorative=!1}render(){return v`
      <div
        part="separator"
        class="separator separator--${this.orientation}"
        role=${this.decorative?"none":"separator"}
        aria-orientation=${this.orientation}
      ></div>
    `}};t.styles=[d,h`
      :host {
        display: block;
      }

      .separator {
        background-color: var(--separator-color, var(--border));
        flex-shrink: 0;
      }

      .separator--horizontal {
        height: 1px;
        width: 100%;
      }

      .separator--vertical {
        width: 1px;
        height: 100%;
        align-self: stretch;
      }
    `];p([l({type:String})],t.prototype,"orientation",2);p([l({type:Boolean})],t.prototype,"decorative",2);t=p([f("shadcn-separator")],t);
