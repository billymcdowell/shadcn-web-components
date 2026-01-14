import{i as C,a as D,x as n}from"./lit-element-B21iCxvW.js";import{t as L}from"./custom-element-C028faeO.js";import{n as P}from"./property-CJLssJ-s.js";import{t as A}from"./index-BVWPfyNL.js";var O=Object.defineProperty,j=Object.getOwnPropertyDescriptor,_=(r,s,l,i)=>{for(var e=i>1?void 0:i?j(s,l):s,c=r.length-1,m;c>=0;c--)(m=r[c])&&(e=(i?m(s,l,e):m(e))||e);return i&&e&&O(s,l,e),e};let p=class extends D{constructor(){super(...arguments),this.size="default"}render(){return n`
      <div
        part="spinner"
        class="spinner spinner--${this.size}"
        role="status"
        aria-label="Loading"
      >
        <span class="sr-only">Loading...</span>
      </div>
    `}};p.styles=[A,C`
      :host {
        display: inline-block;
      }

      .spinner {
        display: inline-block;
        border-radius: 50%;
        border: 2px solid var(--border);
        border-top-color: var(--spinner-color, var(--foreground));
        animation: spin 0.6s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .spinner {
          animation: none;
          border-top-color: var(--spinner-color, var(--foreground));
          border-right-color: var(--spinner-color, var(--foreground));
        }
      }

      .spinner--sm {
        width: 1rem;
        height: 1rem;
      }

      .spinner--default {
        width: 1.5rem;
        height: 1.5rem;
      }

      .spinner--lg {
        width: 2rem;
        height: 2rem;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
    `];_([P({type:String})],p.prototype,"size",2);p=_([L("shadcn-spinner")],p);const R={title:"Components/Spinner",component:"shadcn-spinner",tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"],description:"Size of the spinner"}},parameters:{docs:{description:{component:"A loading spinner to indicate loading states. Respects prefers-reduced-motion for accessibility."}}}},a={args:{size:"default"},render:r=>n`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-spinner size=${r.size}></shadcn-spinner>
    </div>
  `},t={render:()=>n`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 2rem; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <shadcn-spinner size="sm"></shadcn-spinner>
        <span style="color: var(--muted-foreground); font-size: var(--font-size-xs);">Small</span>
      </div>
      
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <shadcn-spinner size="default"></shadcn-spinner>
        <span style="color: var(--muted-foreground); font-size: var(--font-size-xs);">Default</span>
      </div>
      
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <shadcn-spinner size="lg"></shadcn-spinner>
        <span style="color: var(--muted-foreground); font-size: var(--font-size-xs);">Large</span>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"All available spinner sizes."}}}},o={render:()=>n`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 1rem; flex-wrap: wrap;">
      <button style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--primary); color: var(--primary-foreground); border: none; border-radius: var(--radius-md); font-weight: var(--font-medium);">
        <shadcn-spinner size="sm"></shadcn-spinner>
        Loading...
      </button>
      
      <button style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: transparent; color: var(--foreground); border: 1px solid var(--border); border-radius: var(--radius-md); font-weight: var(--font-medium);">
        <shadcn-spinner size="sm"></shadcn-spinner>
        Please wait
      </button>
    </div>
  `,parameters:{docs:{description:{story:"Spinners used inside buttons to indicate loading states."}}}},d={render:()=>n`
    <div style="padding: 4rem; background: var(--background); display: flex; justify-content: center; align-items: center; min-height: 200px;">
      <shadcn-spinner size="lg"></shadcn-spinner>
    </div>
  `,parameters:{docs:{description:{story:"Centered spinner for full-page loading states."}}}};var g,u,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'default'
  },
  render: (args: any) => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-spinner size=\${args.size}></shadcn-spinner>
    </div>
  \`
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,h,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 2rem; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <shadcn-spinner size="sm"></shadcn-spinner>
        <span style="color: var(--muted-foreground); font-size: var(--font-size-xs);">Small</span>
      </div>
      
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <shadcn-spinner size="default"></shadcn-spinner>
        <span style="color: var(--muted-foreground); font-size: var(--font-size-xs);">Default</span>
      </div>
      
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <shadcn-spinner size="lg"></shadcn-spinner>
        <span style="color: var(--muted-foreground); font-size: var(--font-size-xs);">Large</span>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'All available spinner sizes.'
      }
    }
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,x,z;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 1rem; flex-wrap: wrap;">
      <button style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--primary); color: var(--primary-foreground); border: none; border-radius: var(--radius-md); font-weight: var(--font-medium);">
        <shadcn-spinner size="sm"></shadcn-spinner>
        Loading...
      </button>
      
      <button style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: transparent; color: var(--foreground); border: 1px solid var(--border); border-radius: var(--radius-md); font-weight: var(--font-medium);">
        <shadcn-spinner size="sm"></shadcn-spinner>
        Please wait
      </button>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Spinners used inside buttons to indicate loading states.'
      }
    }
  }
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var w,k,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 4rem; background: var(--background); display: flex; justify-content: center; align-items: center; min-height: 200px;">
      <shadcn-spinner size="lg"></shadcn-spinner>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Centered spinner for full-page loading states.'
      }
    }
  }
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const T=["Default","AllSizes","InButton","Centered"];export{t as AllSizes,d as Centered,a as Default,o as InButton,T as __namedExportsOrder,R as default};
