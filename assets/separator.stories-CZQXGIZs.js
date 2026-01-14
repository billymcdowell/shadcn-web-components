import{x as s}from"./lit-element-B21iCxvW.js";import"./separator-Cd0Wlmr3.js";import"./custom-element-C028faeO.js";import"./property-CJLssJ-s.js";import"./index-BVWPfyNL.js";const k={title:"Components/Separator",component:"shadcn-separator",tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"],description:"Separator orientation"},decorative:{control:"boolean",description:"Whether purely decorative (no semantic role)"}},parameters:{docs:{description:{component:"A visual divider for separating content."}}}},e={render:()=>s`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="margin-bottom: 1rem;">
        <h4 style="margin: 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold);">Section 1</h4>
        <p style="margin: 0.5rem 0 0 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">Content for the first section.</p>
      </div>
      
      <shadcn-separator></shadcn-separator>
      
      <div style="margin-top: 1rem;">
        <h4 style="margin: 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold);">Section 2</h4>
        <p style="margin: 0.5rem 0 0 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">Content for the second section.</p>
      </div>
    </div>
  `},r={render:()=>s`
    <div style="padding: 1rem; background: var(--background);">
      <div style="display: flex; height: 100px; gap: 1rem;">
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; font-size: var(--font-size-sm);">
          Left
        </div>
        
        <shadcn-separator orientation="vertical"></shadcn-separator>
        
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; font-size: var(--font-size-sm);">
          Center
        </div>
        
        <shadcn-separator orientation="vertical"></shadcn-separator>
        
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; font-size: var(--font-size-sm);">
          Right
        </div>
      </div>
    </div>
  `},n={render:()=>s`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem;">
        <h3 style="margin: 0 0 0.5rem 0; font-size: var(--font-size-lg); font-weight: var(--font-semibold);">Profile Settings</h3>
        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">Manage your account preferences</p>
        
        <shadcn-separator style="margin: 1.5rem 0;"></shadcn-separator>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: var(--font-size-sm);">Email Notifications</span>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">Enabled</span>
          </div>
          
          <shadcn-separator decorative></shadcn-separator>
          
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: var(--font-size-sm);">Two-Factor Auth</span>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">Disabled</span>
          </div>
          
          <shadcn-separator decorative></shadcn-separator>
          
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: var(--font-size-sm);">Privacy Mode</span>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">Enabled</span>
          </div>
        </div>
      </div>
    </div>
  `},t={render:()=>s`
    <div style="padding: 1rem; background: var(--background); max-width: 250px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0.5rem;">
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); border-radius: var(--radius-sm); cursor: pointer;" 
             onmouseover="this.style.background='var(--accent)'" 
             onmouseout="this.style.background='transparent'">
          Profile
        </div>
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); border-radius: var(--radius-sm); cursor: pointer;"
             onmouseover="this.style.background='var(--accent)'" 
             onmouseout="this.style.background='transparent'">
          Settings
        </div>
        
        <shadcn-separator decorative style="margin: 0.5rem 0;"></shadcn-separator>
        
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); border-radius: var(--radius-sm); cursor: pointer;"
             onmouseover="this.style.background='var(--accent)'" 
             onmouseout="this.style.background='transparent'">
          Logout
        </div>
      </div>
    </div>
  `};var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="margin-bottom: 1rem;">
        <h4 style="margin: 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold);">Section 1</h4>
        <p style="margin: 0.5rem 0 0 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">Content for the first section.</p>
      </div>
      
      <shadcn-separator></shadcn-separator>
      
      <div style="margin-top: 1rem;">
        <h4 style="margin: 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold);">Section 2</h4>
        <p style="margin: 0.5rem 0 0 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">Content for the second section.</p>
      </div>
    </div>
  \`
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <div style="display: flex; height: 100px; gap: 1rem;">
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; font-size: var(--font-size-sm);">
          Left
        </div>
        
        <shadcn-separator orientation="vertical"></shadcn-separator>
        
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; font-size: var(--font-size-sm);">
          Center
        </div>
        
        <shadcn-separator orientation="vertical"></shadcn-separator>
        
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; font-size: var(--font-size-sm);">
          Right
        </div>
      </div>
    </div>
  \`
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,v,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem;">
        <h3 style="margin: 0 0 0.5rem 0; font-size: var(--font-size-lg); font-weight: var(--font-semibold);">Profile Settings</h3>
        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">Manage your account preferences</p>
        
        <shadcn-separator style="margin: 1.5rem 0;"></shadcn-separator>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: var(--font-size-sm);">Email Notifications</span>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">Enabled</span>
          </div>
          
          <shadcn-separator decorative></shadcn-separator>
          
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: var(--font-size-sm);">Two-Factor Auth</span>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">Disabled</span>
          </div>
          
          <shadcn-separator decorative></shadcn-separator>
          
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: var(--font-size-sm);">Privacy Mode</span>
            <span style="font-size: var(--font-size-sm); color: var(--muted-foreground);">Enabled</span>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(p=(v=n.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var f,u,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 250px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0.5rem;">
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); border-radius: var(--radius-sm); cursor: pointer;" 
             onmouseover="this.style.background='var(--accent)'" 
             onmouseout="this.style.background='transparent'">
          Profile
        </div>
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); border-radius: var(--radius-sm); cursor: pointer;"
             onmouseover="this.style.background='var(--accent)'" 
             onmouseout="this.style.background='transparent'">
          Settings
        </div>
        
        <shadcn-separator decorative style="margin: 0.5rem 0;"></shadcn-separator>
        
        <div style="padding: 0.5rem 0.75rem; font-size: var(--font-size-sm); border-radius: var(--radius-sm); cursor: pointer;"
             onmouseover="this.style.background='var(--accent)'" 
             onmouseout="this.style.background='transparent'">
          Logout
        </div>
      </div>
    </div>
  \`
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const w=["Horizontal","Vertical","InCard","MenuDivider"];export{e as Horizontal,n as InCard,t as MenuDivider,r as Vertical,w as __namedExportsOrder,k as default};
