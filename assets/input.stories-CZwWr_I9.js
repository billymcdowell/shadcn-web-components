import{x as e}from"./lit-element-B21iCxvW.js";import"./input-CJkEiHQR.js";import"./label-BV95ynri.js";import"./custom-element-C028faeO.js";import"./property-CJLssJ-s.js";import"./query-BApjzB0v.js";import"./index-BVWPfyNL.js";const W={title:"Components/Input",component:"shadcn-input",tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","search","tel","url","number"],description:"Input type"},value:{control:"text",description:"Input value"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"},error:{control:"boolean",description:"Whether the input has an error"}},parameters:{docs:{description:{component:"A text input component with support for various input types, validation, and error states."}}}},a={args:{type:"text",placeholder:"Enter text..."},render:n=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input
        type=${n.type}
        placeholder=${n.placeholder}
        ?disabled=${n.disabled}
        ?error=${n.error}
      ></shadcn-input>
    </div>
  `},l={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="email">Email</shadcn-label>
      <shadcn-input
        id="email"
        type="email"
        placeholder="Enter your email"
      ></shadcn-input>
    </div>
  `,parameters:{docs:{description:{story:"Input with a label component."}}}},d={render:()=>e`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Text</shadcn-label>
        <shadcn-input type="text" placeholder="Enter text"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Email</shadcn-label>
        <shadcn-input type="email" placeholder="email@example.com"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Password</shadcn-label>
        <shadcn-input type="password" placeholder="Enter password"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Number</shadcn-label>
        <shadcn-input type="number" placeholder="0"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Search</shadcn-label>
        <shadcn-input type="search" placeholder="Search..."></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>URL</shadcn-label>
        <shadcn-input type="url" placeholder="https://"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Telephone</shadcn-label>
        <shadcn-input type="tel" placeholder="+1 (555) 000-0000"></shadcn-input>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"All supported input types."}}}},r={render:()=>e`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Default</shadcn-label>
        <shadcn-input placeholder="Default input"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Disabled</shadcn-label>
        <shadcn-input placeholder="Disabled input" disabled></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Error</shadcn-label>
        <shadcn-input placeholder="Error input" error></shadcn-input>
        <span style="font-size: var(--font-size-sm); color: var(--destructive);">This field is required</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>With Value</shadcn-label>
        <shadcn-input value="example@email.com"></shadcn-input>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"Different input states including disabled and error."}}}},i={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="name">Full Name</shadcn-label>
          <shadcn-input
            id="name"
            type="text"
            placeholder="John Doe"
            required
          ></shadcn-input>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="form-email">Email</shadcn-label>
          <shadcn-input
            id="form-email"
            type="email"
            placeholder="john@example.com"
            required
          ></shadcn-input>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="form-password">Password</shadcn-label>
          <shadcn-input
            id="form-password"
            type="password"
            placeholder="••••••••"
            required
          ></shadcn-input>
        </div>
      </form>
    </div>
  `,parameters:{docs:{description:{story:"Example form with multiple inputs."}}}};var s,t,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Enter text...'
  },
  render: (args: any) => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-input
        type=\${args.type}
        placeholder=\${args.placeholder}
        ?disabled=\${args.disabled}
        ?error=\${args.error}
      ></shadcn-input>
    </div>
  \`
}`,...(p=(t=a.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var c,o,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="email">Email</shadcn-label>
      <shadcn-input
        id="email"
        type="email"
        placeholder="Enter your email"
      ></shadcn-input>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Input with a label component.'
      }
    }
  }
}`,...(m=(o=l.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var h,u,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Text</shadcn-label>
        <shadcn-input type="text" placeholder="Enter text"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Email</shadcn-label>
        <shadcn-input type="email" placeholder="email@example.com"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Password</shadcn-label>
        <shadcn-input type="password" placeholder="Enter password"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Number</shadcn-label>
        <shadcn-input type="number" placeholder="0"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Search</shadcn-label>
        <shadcn-input type="search" placeholder="Search..."></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>URL</shadcn-label>
        <shadcn-input type="url" placeholder="https://"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Telephone</shadcn-label>
        <shadcn-input type="tel" placeholder="+1 (555) 000-0000"></shadcn-input>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'All supported input types.'
      }
    }
  }
}`,...(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var x,f,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Default</shadcn-label>
        <shadcn-input placeholder="Default input"></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Disabled</shadcn-label>
        <shadcn-input placeholder="Disabled input" disabled></shadcn-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>Error</shadcn-label>
        <shadcn-input placeholder="Error input" error></shadcn-input>
        <span style="font-size: var(--font-size-sm); color: var(--destructive);">This field is required</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <shadcn-label>With Value</shadcn-label>
        <shadcn-input value="example@email.com"></shadcn-input>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Different input states including disabled and error.'
      }
    }
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,g,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="name">Full Name</shadcn-label>
          <shadcn-input
            id="name"
            type="text"
            placeholder="John Doe"
            required
          ></shadcn-input>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="form-email">Email</shadcn-label>
          <shadcn-input
            id="form-email"
            type="email"
            placeholder="john@example.com"
            required
          ></shadcn-input>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="form-password">Password</shadcn-label>
          <shadcn-input
            id="form-password"
            type="password"
            placeholder="••••••••"
            required
          ></shadcn-input>
        </div>
      </form>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Example form with multiple inputs.'
      }
    }
  }
}`,...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const I=["Default","WithLabel","DifferentTypes","States","FormExample"];export{a as Default,d as DifferentTypes,i as FormExample,r as States,l as WithLabel,I as __namedExportsOrder,W as default};
