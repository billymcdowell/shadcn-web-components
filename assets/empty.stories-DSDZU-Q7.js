import{i as O,a as A,x as t}from"./lit-element-B21iCxvW.js";import{t as I}from"./custom-element-C028faeO.js";import{n as M}from"./property-CJLssJ-s.js";import{t as T}from"./index-BVWPfyNL.js";import"./button-B2IsNlAX.js";var U=Object.defineProperty,$=Object.getOwnPropertyDescriptor,u=(y,s,l,o)=>{for(var n=o>1?void 0:o?$(s,l):s,m=y.length-1,h;m>=0;m--)(h=y[m])&&(n=(o?h(s,l,n):h(n))||n);return o&&n&&U(s,l,n),n};let e=class extends A{render(){return t`
      <div part="empty" class="empty">
        <div class="empty__icon">
          <slot name="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          </slot>
        </div>
        
        <div class="empty__content">
          <h3 class="empty__title">
            <slot name="title">${this.heading||"No results found"}</slot>
          </h3>
          
          ${this.description||t`<slot name="description"></slot>`?t`
              <p class="empty__description">
                <slot name="description">${this.description}</slot>
              </p>
            `:""}
        </div>
        
        <div class="empty__action">
          <slot name="action"></slot>
        </div>
      </div>
    `}};e.styles=[T,O`
      :host {
        display: block;
      }

      .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--spacing-12) var(--spacing-6);
        gap: var(--spacing-4);
      }

      .empty__icon {
        color: var(--muted-foreground);
        opacity: 0.5;
      }

      .empty__title {
        font-size: var(--font-size-lg);
        font-weight: var(--font-semibold);
        color: var(--foreground);
        margin: 0;
      }

      .empty__description {
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
        max-width: 28rem;
        margin: 0;
      }

      .empty__action {
        margin-top: var(--spacing-2);
      }
    `];u([M({type:String})],e.prototype,"heading",2);u([M({type:String})],e.prototype,"description",2);e=u([I("shadcn-empty")],e);const J={title:"Components/Empty",component:"shadcn-empty",tags:["autodocs"],parameters:{docs:{description:{component:"Display empty states when there is no content to show. Highly customizable with slots for icon, title, description, and actions."}}}},r={render:()=>t`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty></shadcn-empty>
    </div>
  `},a={render:()=>t`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty
        heading="No messages yet"
        description="Start a conversation by sending your first message."
      ></shadcn-empty>
    </div>
  `,parameters:{docs:{description:{story:"Empty state with custom heading and description using properties."}}}},i={render:()=>t`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty
        heading="No projects found"
        description="Get started by creating your first project."
      >
        <shadcn-button slot="action" variant="default">
          Create Project
        </shadcn-button>
      </shadcn-empty>
    </div>
  `,parameters:{docs:{description:{story:"Empty state with an action button."}}}},d={render:()=>t`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <span slot="title">No files uploaded</span>
        <span slot="description">Upload your first file to get started.</span>
        <shadcn-button slot="action" variant="default">
          Upload File
        </shadcn-button>
      </shadcn-empty>
    </div>
  `,parameters:{docs:{description:{story:"Empty state with custom icon using slots."}}}},c={render:()=>t`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <span slot="title">No results found</span>
        <span slot="description">Try adjusting your search terms or filters.</span>
      </shadcn-empty>
    </div>
  `,parameters:{docs:{description:{story:"Empty state for search results."}}}},p={render:()=>t`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty
        title="No data available"
        description="Choose an option to get started."
      >
        <div slot="action" style="display: flex; gap: 0.5rem;">
          <shadcn-button variant="default">Import Data</shadcn-button>
          <shadcn-button variant="outline">Create New</shadcn-button>
        </div>
      </shadcn-empty>
    </div>
  `,parameters:{docs:{description:{story:"Empty state with multiple action buttons."}}}};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty></shadcn-empty>
    </div>
  \`
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,w,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty
        heading="No messages yet"
        description="Start a conversation by sending your first message."
      ></shadcn-empty>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Empty state with custom heading and description using properties.'
      }
    }
  }
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var k,_,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty
        heading="No projects found"
        description="Get started by creating your first project."
      >
        <shadcn-button slot="action" variant="default">
          Create Project
        </shadcn-button>
      </shadcn-empty>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Empty state with an action button.'
      }
    }
  }
}`,...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var j,E,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <span slot="title">No files uploaded</span>
        <span slot="description">Upload your first file to get started.</span>
        <shadcn-button slot="action" variant="default">
          Upload File
        </shadcn-button>
      </shadcn-empty>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Empty state with custom icon using slots.'
      }
    }
  }
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var S,D,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <span slot="title">No results found</span>
        <span slot="description">Try adjusting your search terms or filters.</span>
      </shadcn-empty>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Empty state for search results.'
      }
    }
  }
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var W,z,B;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <div style="background: var(--background); min-height: 400px;">
      <shadcn-empty
        title="No data available"
        description="Choose an option to get started."
      >
        <div slot="action" style="display: flex; gap: 0.5rem;">
          <shadcn-button variant="default">Import Data</shadcn-button>
          <shadcn-button variant="outline">Create New</shadcn-button>
        </div>
      </shadcn-empty>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Empty state with multiple action buttons.'
      }
    }
  }
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const K=["Default","WithCustomText","WithAction","WithCustomIcon","SearchResults","MultipleActions"];export{r as Default,p as MultipleActions,c as SearchResults,i as WithAction,d as WithCustomIcon,a as WithCustomText,K as __namedExportsOrder,J as default};
