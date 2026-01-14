import{i as m,a as f,x as l}from"./lit-element-B21iCxvW.js";import{t as y}from"./custom-element-C028faeO.js";import{n as w}from"./property-CJLssJ-s.js";import{t as k}from"./index-BVWPfyNL.js";import"./button-B2IsNlAX.js";import"./separator-Cd0Wlmr3.js";var j=Object.defineProperty,C=Object.getOwnPropertyDescriptor,b=(c,e,o,a)=>{for(var t=a>1?void 0:a?C(e,o):e,d=c.length-1,i;d>=0;d--)(i=c[d])&&(t=(a?i(e,o,t):i(t))||t);return a&&t&&j(e,o,t),t};let s=class extends f{constructor(){super(...arguments),this.collapsed=!1}render(){return l`
      <aside class="sidebar">
        <slot></slot>
      </aside>
    `}};s.styles=[k,m`
      :host {
        display: block;
        height: 100%;
      }

      .sidebar {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: var(--background);
        border-right: 1px solid var(--border);
        width: var(--sidebar-width, 250px);
        transition: width var(--transition-normal);
      }
      
      :host([collapsed]) .sidebar {
        width: var(--sidebar-collapsed-width, 64px);
      }
    `];b([w({type:Boolean,reflect:!0})],s.prototype,"collapsed",2);s=b([y("shadcn-sidebar")],s);const A={title:"Components/Sidebar",component:"shadcn-sidebar",tags:["autodocs"],argTypes:{collapsed:{control:"boolean",description:"Whether the sidebar is collapsed"}},parameters:{docs:{description:{component:"A composable sidebar component."}}}},r={render:()=>l`
    <div style="height: 400px; border: 1px solid var(--border); display: flex;">
      <shadcn-sidebar>
        <div style="padding: 1rem; font-weight: bold;">My App</div>
        <shadcn-separator></shadcn-separator>
        <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-button variant="ghost" style="justify-content: flex-start;">Dashboard</shadcn-button>
          <shadcn-button variant="ghost" style="justify-content: flex-start;">Settings</shadcn-button>
          <shadcn-button variant="ghost" style="justify-content: flex-start;">Profile</shadcn-button>
        </div>
      </shadcn-sidebar>
      <div style="flex: 1; padding: 1rem; background: var(--muted);">
        Main Content
      </div>
    </div>
  `},n={render:()=>l`
    <div style="height: 400px; border: 1px solid var(--border); display: flex;">
      <shadcn-sidebar collapsed>
        <div style="padding: 1rem; font-weight: bold; text-align: center;">MA</div>
        <shadcn-separator></shadcn-separator>
        <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
          <shadcn-button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
          </shadcn-button>
          <shadcn-button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </shadcn-button>
        </div>
      </shadcn-sidebar>
      <div style="flex: 1; padding: 1rem; background: var(--muted);">
        Main Content
      </div>
    </div>
  `};var h,p,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 400px; border: 1px solid var(--border); display: flex;">
      <shadcn-sidebar>
        <div style="padding: 1rem; font-weight: bold;">My App</div>
        <shadcn-separator></shadcn-separator>
        <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-button variant="ghost" style="justify-content: flex-start;">Dashboard</shadcn-button>
          <shadcn-button variant="ghost" style="justify-content: flex-start;">Settings</shadcn-button>
          <shadcn-button variant="ghost" style="justify-content: flex-start;">Profile</shadcn-button>
        </div>
      </shadcn-sidebar>
      <div style="flex: 1; padding: 1rem; background: var(--muted);">
        Main Content
      </div>
    </div>
  \`
}`,...(v=(p=r.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,u,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 400px; border: 1px solid var(--border); display: flex;">
      <shadcn-sidebar collapsed>
        <div style="padding: 1rem; font-weight: bold; text-align: center;">MA</div>
        <shadcn-separator></shadcn-separator>
        <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
          <shadcn-button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
          </shadcn-button>
          <shadcn-button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </shadcn-button>
        </div>
      </shadcn-sidebar>
      <div style="flex: 1; padding: 1rem; background: var(--muted);">
        Main Content
      </div>
    </div>
  \`
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const B=["Default","Collapsed"];export{n as Collapsed,r as Default,B as __namedExportsOrder,A as default};
