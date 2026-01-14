import{x as d}from"./lit-element-B21iCxvW.js";import"./label-BV95ynri.js";import"./custom-element-C028faeO.js";import"./property-CJLssJ-s.js";import"./index-BVWPfyNL.js";const y={title:"Components/Label",component:"shadcn-label",tags:["autodocs"],parameters:{docs:{description:{component:"An accessible form label component for labeling form controls."}}}},r={render:()=>d`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground);">
      <shadcn-label for="email">Email Address</shadcn-label>
    </div>
  `},e={render:()=>d`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground); display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="username">Username</shadcn-label>
      <input 
        id="username" 
        type="text" 
        placeholder="Enter username"
        style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
      />
    </div>
  `,parameters:{docs:{description:{story:"Label paired with an input field using the `for` attribute."}}}},a={render:()=>d`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground); display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label for="name">Full Name</shadcn-label>
        <input 
          id="name" 
          type="text"
          style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
        />
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label for="email">Email</shadcn-label>
        <input 
          id="email" 
          type="email"
          style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
        />
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label for="password">Password</shadcn-label>
        <input 
          id="password" 
          type="password"
          style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
        />
      </div>
    </div>
  `,parameters:{docs:{description:{story:"Multiple form fields with labels."}}}};var o,n,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground);">
      <shadcn-label for="email">Email Address</shadcn-label>
    </div>
  \`
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var s,i,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground); display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="username">Username</shadcn-label>
      <input 
        id="username" 
        type="text" 
        placeholder="Enter username"
        style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
      />
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Label paired with an input field using the \`for\` attribute.'
      }
    }
  }
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); color: var(--foreground); display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label for="name">Full Name</shadcn-label>
        <input 
          id="name" 
          type="text"
          style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
        />
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label for="email">Email</shadcn-label>
        <input 
          id="email" 
          type="email"
          style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
        />
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label for="password">Password</shadcn-label>
        <input 
          id="password" 
          type="password"
          style="padding: 0.5rem; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--foreground);"
        />
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Multiple form fields with labels.'
      }
    }
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const x=["Default","WithInput","MultipleLabels"];export{r as Default,a as MultipleLabels,e as WithInput,x as __namedExportsOrder,y as default};
