import{i as D,a as P,x as e}from"./lit-element-B21iCxvW.js";import{t as j}from"./custom-element-C028faeO.js";import{n as k}from"./property-CJLssJ-s.js";import{t as H}from"./index-BVWPfyNL.js";var B=Object.defineProperty,L=Object.getOwnPropertyDescriptor,h=(t,s,v,i)=>{for(var n=i>1?void 0:i?L(s,v):s,m=t.length-1,p;m>=0;m--)(p=t[m])&&(n=(i?p(s,v,n):p(n))||n);return i&&n&&B(s,v,n),n};let a=class extends P{constructor(){super(...arguments),this.variant="default",this.width="",this.height=""}render(){const t=[];return this.width&&t.push(`width: ${this.width}`),this.height&&t.push(`height: ${this.height}`),e`
      <div
        part="skeleton"
        class="skeleton ${this.variant!=="default"?`skeleton--${this.variant}`:""}"
        style=${t.join("; ")}
        aria-busy="true"
        aria-live="polite"
      ></div>
    `}};a.styles=[H,D`
      :host {
        display: block;
      }

      .skeleton {
        background-color: var(--skeleton-bg, var(--muted));
        border-radius: var(--skeleton-radius, var(--radius-md));
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .skeleton {
          animation: none;
        }
      }

      .skeleton--circle {
        border-radius: var(--radius-full);
      }

      .skeleton--text {
        height: 1rem;
      }

      .skeleton--heading {
        height: 2rem;
      }

      .skeleton--avatar {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: var(--radius-full);
      }

      .skeleton--button {
        height: 2.5rem;
        width: 6rem;
      }

      .skeleton--card {
        min-height: 200px;
      }
    `];h([k({type:String})],a.prototype,"variant",2);h([k({type:String})],a.prototype,"width",2);h([k({type:String})],a.prototype,"height",2);a=h([j("shadcn-skeleton")],a);const F={title:"Components/Skeleton",component:"shadcn-skeleton",tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","circle","text","heading","avatar","button","card"],description:"Skeleton variant"},width:{control:"text",description:"Width override"},height:{control:"text",description:"Height override"}},parameters:{docs:{description:{component:"A placeholder component for loading states with pulse animation."}}}},r={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-skeleton width="100%" height="40px"></shadcn-skeleton>
    </div>
  `},d={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Text</p>
        <shadcn-skeleton variant="text"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Heading</p>
        <shadcn-skeleton variant="heading"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Avatar</p>
        <shadcn-skeleton variant="avatar"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Button</p>
        <shadcn-skeleton variant="button"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Circle</p>
        <shadcn-skeleton variant="circle" width="60px" height="60px"></shadcn-skeleton>
      </div>
    </div>
  `},o={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 350px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <shadcn-skeleton variant="avatar"></shadcn-skeleton>
          <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem;">
            <shadcn-skeleton variant="heading" width="60%"></shadcn-skeleton>
            <shadcn-skeleton variant="text" width="80%"></shadcn-skeleton>
          </div>
        </div>
        
        <shadcn-skeleton width="100%" height="200px"></shadcn-skeleton>
        
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text" width="90%"></shadcn-skeleton>
          <shadcn-skeleton variant="text" width="75%"></shadcn-skeleton>
        </div>
        
        <div style="display: flex; gap: 0.5rem;">
          <shadcn-skeleton variant="button"></shadcn-skeleton>
          <shadcn-skeleton variant="button"></shadcn-skeleton>
        </div>
      </div>
    </div>
  `},l={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${Array(5).fill(0).map(()=>e`
          <div style="display: flex; gap: 1rem; align-items: center;">
            <shadcn-skeleton variant="avatar"></shadcn-skeleton>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem;">
              <shadcn-skeleton variant="heading" width="40%"></shadcn-skeleton>
              <shadcn-skeleton variant="text" width="70%"></shadcn-skeleton>
            </div>
          </div>
        `)}
      </div>
    </div>
  `},c={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 600px;">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 100px; gap: 1rem;">
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text"></shadcn-skeleton>
        </div>
        
        ${Array(4).fill(0).map(()=>e`
          <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 100px; gap: 1rem; align-items: center;">
            <shadcn-skeleton variant="text"></shadcn-skeleton>
            <shadcn-skeleton variant="text"></shadcn-skeleton>
            <shadcn-skeleton variant="text"></shadcn-skeleton>
            <shadcn-skeleton variant="button" width="80px"></shadcn-skeleton>
          </div>
        `)}
      </div>
    </div>
  `};var g,f,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-skeleton width="100%" height="40px"></shadcn-skeleton>
    </div>
  \`
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var x,y,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Text</p>
        <shadcn-skeleton variant="text"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Heading</p>
        <shadcn-skeleton variant="heading"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Avatar</p>
        <shadcn-skeleton variant="avatar"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Button</p>
        <shadcn-skeleton variant="button"></shadcn-skeleton>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: var(--font-size-sm); font-weight: var(--font-medium);">Circle</p>
        <shadcn-skeleton variant="circle" width="60px" height="60px"></shadcn-skeleton>
      </div>
    </div>
  \`
}`,...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,z,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 350px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <shadcn-skeleton variant="avatar"></shadcn-skeleton>
          <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem;">
            <shadcn-skeleton variant="heading" width="60%"></shadcn-skeleton>
            <shadcn-skeleton variant="text" width="80%"></shadcn-skeleton>
          </div>
        </div>
        
        <shadcn-skeleton width="100%" height="200px"></shadcn-skeleton>
        
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text" width="90%"></shadcn-skeleton>
          <shadcn-skeleton variant="text" width="75%"></shadcn-skeleton>
        </div>
        
        <div style="display: flex; gap: 0.5rem;">
          <shadcn-skeleton variant="button"></shadcn-skeleton>
          <shadcn-skeleton variant="button"></shadcn-skeleton>
        </div>
      </div>
    </div>
  \`
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var $,_,A;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        \${Array(5).fill(0).map(() => html\`
          <div style="display: flex; gap: 1rem; align-items: center;">
            <shadcn-skeleton variant="avatar"></shadcn-skeleton>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem;">
              <shadcn-skeleton variant="heading" width="40%"></shadcn-skeleton>
              <shadcn-skeleton variant="text" width="70%"></shadcn-skeleton>
            </div>
          </div>
        \`)}
      </div>
    </div>
  \`
}`,...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var C,O,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 600px;">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 100px; gap: 1rem;">
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text"></shadcn-skeleton>
          <shadcn-skeleton variant="text"></shadcn-skeleton>
        </div>
        
        \${Array(4).fill(0).map(() => html\`
          <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 100px; gap: 1rem; align-items: center;">
            <shadcn-skeleton variant="text"></shadcn-skeleton>
            <shadcn-skeleton variant="text"></shadcn-skeleton>
            <shadcn-skeleton variant="text"></shadcn-skeleton>
            <shadcn-skeleton variant="button" width="80px"></shadcn-skeleton>
          </div>
        \`)}
      </div>
    </div>
  \`
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const G=["Default","Variants","CardSkeleton","ListSkeleton","TableSkeleton"];export{o as CardSkeleton,r as Default,l as ListSkeleton,c as TableSkeleton,d as Variants,G as __namedExportsOrder,F as default};
