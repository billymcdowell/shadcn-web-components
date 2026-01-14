import{i,a as l,x as b}from"./lit-element-B21iCxvW.js";import{t as m}from"./custom-element-C028faeO.js";import{t as v}from"./index-BVWPfyNL.js";var f=Object.getOwnPropertyDescriptor,c=(t,n,s,a)=>{for(var r=a>1?void 0:a?f(n,s):n,e=t.length-1,d;e>=0;e--)(d=t[e])&&(r=d(r)||r);return r};let o=class extends l{render(){return b`
      <kbd part="kbd" class="kbd">
        <slot></slot>
      </kbd>
    `}};o.styles=[v,i`
      :host {
        display: inline-block;
      }

      .kbd {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.125rem 0.375rem;
        font-size: var(--font-size-xs);
        font-family: var(--font-mono);
        font-weight: var(--font-semibold);
        line-height: var(--leading-none);
        background-color: var(--kbd-bg, var(--muted));
        color: var(--kbd-color, var(--muted-foreground));
        border: 1px solid var(--kbd-border, var(--border));
        border-radius: var(--radius-sm);
        box-shadow: 0 1px 0 0 var(--border);
        min-width: 1.5rem;
        text-align: center;
      }
    `];o=c([m("shadcn-kbd")],o);
