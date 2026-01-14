import{i as d,a as r,x as a}from"./lit-element-B21iCxvW.js";import{t as e}from"./custom-element-C028faeO.js";import{t as n}from"./index-BVWPfyNL.js";import"./button-B2IsNlAX.js";import"./property-CJLssJ-s.js";var R=Object.getOwnPropertyDescriptor,t=(y,x,Y,z)=>{for(var s=z>1?void 0:z?R(x,Y):x,m=y.length-1,k;m>=0;m--)(k=y[m])&&(s=k(s)||s);return s};let p=class extends r{render(){return a`
      <div part="card" class="card">
        <div class="card__header">
          <slot name="header"></slot>
        </div>
        <div class="card__content">
          <slot></slot>
        </div>
        <div class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};p.styles=[n,d`
      :host {
        display: block;
      }

      .card {
        background-color: var(--card-bg, var(--card));
        border: 1px solid var(--card-border, var(--border));
        border-radius: var(--radius-lg);
        color: var(--card-foreground);
      }

      .card__header {
        padding: var(--spacing-6);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1-5);
      }

      .card__header:empty {
        display: none;
      }

      .card__content {
        padding: var(--spacing-6);
        padding-top: 0;
      }

      .card__footer {
        padding: var(--spacing-6);
        padding-top: 0;
        display: flex;
        align-items: center;
      }

      .card__footer:empty {
        display: none;
      }
    `];p=t([e("shadcn-card")],p);let v=class extends r{render(){return a`<slot></slot>`}};v.styles=[n,d`
      :host {
        display: block;
      }
    `];v=t([e("shadcn-card-header")],v);let u=class extends r{render(){return a`<slot></slot>`}};u.styles=[n,d`
      :host {
        display: block;
        font-size: var(--font-size-2xl);
        font-weight: var(--font-semibold);
        line-height: var(--leading-none);
        letter-spacing: var(--tracking-tight);
      }
    `];u=t([e("shadcn-card-title")],u);let f=class extends r{render(){return a`<slot></slot>`}};f.styles=[n,d`
      :host {
        display: block;
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
      }
    `];f=t([e("shadcn-card-description")],f);let g=class extends r{render(){return a`<slot></slot>`}};g.styles=[n,d`
      :host {
        display: block;
      }
    `];g=t([e("shadcn-card-content")],g);let b=class extends r{render(){return a`<slot></slot>`}};b.styles=[n,d`
      :host {
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
      }
    `];b=t([e("shadcn-card-footer")],b);const G={title:"Components/Card",component:"shadcn-card",tags:["autodocs"],parameters:{docs:{description:{component:"A versatile card container for grouping related content with header, content, and footer sections."}}}},c={render:()=>a`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Card Title</shadcn-card-title>
          <shadcn-card-description>Card description goes here</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          This is the main content of the card. You can put any content here.
        </shadcn-card-content>
      </shadcn-card>
    </div>
  `},o={render:()=>a`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Notifications</shadcn-card-title>
          <shadcn-card-description>You have 3 unread messages</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="padding: 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="font-weight: var(--font-medium);">New message from Sarah</div>
              <div style="font-size: var(--font-size-sm); color: var(--muted-foreground);">2 minutes ago</div>
            </div>
            <div style="padding: 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="font-weight: var(--font-medium);">Meeting reminder</div>
              <div style="font-size: var(--font-size-sm); color: var(--muted-foreground);">10 minutes ago</div>
            </div>
          </div>
        </shadcn-card-content>
        <shadcn-card-footer slot="footer">
          <shadcn-button variant="outline" style="flex: 1;">Mark as read</shadcn-button>
        </shadcn-card-footer>
      </shadcn-card>
    </div>
  `},i={render:()=>a`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Login</shadcn-card-title>
          <shadcn-card-description>Enter your credentials to access your account</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <form style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <label style="font-size: var(--font-size-sm); font-weight: var(--font-medium);">Email</label>
              <input type="email" placeholder="email@example.com" style="height: 2.5rem; padding: 0 var(--spacing-3); font-size: var(--font-size-sm); background: var(--background); color: var(--foreground); border: 1px solid var(--input); border-radius: var(--radius-md);" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <label style="font-size: var(--font-size-sm); font-weight: var(--font-medium);">Password</label>
              <input type="password" placeholder="••••••••" style="height: 2.5rem; padding: 0 var(--spacing-3); font-size: var(--font-size-sm); background: var(--background); color: var(--foreground); border: 1px solid var(--input); border-radius: var(--radius-md);" />
            </div>
          </form>
        </shadcn-card-content>
        <shadcn-card-footer slot="footer">
          <shadcn-button variant="default" style="flex: 1;">Sign in</shadcn-button>
        </shadcn-card-footer>
      </shadcn-card>
    </div>
  `},l={render:()=>a`
    <div style="padding: 1rem; background: var(--background); max-width: 350px;">
      <shadcn-card>
        <div style="aspect-ratio: 16/9; background: var(--muted); border-radius: var(--radius-md); margin: var(--spacing-6); margin-bottom: 0;"></div>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Product Name</shadcn-card-title>
          <shadcn-card-description>$99.99</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <p style="margin: 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">
            A brief description of the product and its key features.
          </p>
        </shadcn-card-content>
        <shadcn-card-footer slot="footer">
          <shadcn-button variant="default" style="flex: 1;">Add to Cart</shadcn-button>
        </shadcn-card-footer>
      </shadcn-card>
    </div>
  `},h={render:()=>a`
    <div style="padding: 1rem; background: var(--background); display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; max-width: 1000px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Total Revenue</shadcn-card-title>
          <shadcn-card-description>+20.1% from last month</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="font-size: var(--font-size-3xl); font-weight: var(--font-bold);">$45,231.89</div>
        </shadcn-card-content>
      </shadcn-card>

      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Subscriptions</shadcn-card-title>
          <shadcn-card-description>+180.1% from last month</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="font-size: var(--font-size-3xl); font-weight: var(--font-bold);">+2,350</div>
        </shadcn-card-content>
      </shadcn-card>

      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Sales</shadcn-card-title>
          <shadcn-card-description>+19% from last month</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="font-size: var(--font-size-3xl); font-weight: var(--font-bold);">+12,234</div>
        </shadcn-card-content>
      </shadcn-card>
    </div>
  `};var w,_,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Card Title</shadcn-card-title>
          <shadcn-card-description>Card description goes here</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          This is the main content of the card. You can put any content here.
        </shadcn-card-content>
      </shadcn-card>
    </div>
  \`
}`,...(C=(_=c.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var S,P,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Notifications</shadcn-card-title>
          <shadcn-card-description>You have 3 unread messages</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="padding: 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="font-weight: var(--font-medium);">New message from Sarah</div>
              <div style="font-size: var(--font-size-sm); color: var(--muted-foreground);">2 minutes ago</div>
            </div>
            <div style="padding: 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="font-weight: var(--font-medium);">Meeting reminder</div>
              <div style="font-size: var(--font-size-sm); color: var(--muted-foreground);">10 minutes ago</div>
            </div>
          </div>
        </shadcn-card-content>
        <shadcn-card-footer slot="footer">
          <shadcn-button variant="outline" style="flex: 1;">Mark as read</shadcn-button>
        </shadcn-card-footer>
      </shadcn-card>
    </div>
  \`
}`,...(T=(P=o.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var M,N,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Login</shadcn-card-title>
          <shadcn-card-description>Enter your credentials to access your account</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <form style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <label style="font-size: var(--font-size-sm); font-weight: var(--font-medium);">Email</label>
              <input type="email" placeholder="email@example.com" style="height: 2.5rem; padding: 0 var(--spacing-3); font-size: var(--font-size-sm); background: var(--background); color: var(--foreground); border: 1px solid var(--input); border-radius: var(--radius-md);" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <label style="font-size: var(--font-size-sm); font-weight: var(--font-medium);">Password</label>
              <input type="password" placeholder="••••••••" style="height: 2.5rem; padding: 0 var(--spacing-3); font-size: var(--font-size-sm); background: var(--background); color: var(--foreground); border: 1px solid var(--input); border-radius: var(--radius-md);" />
            </div>
          </form>
        </shadcn-card-content>
        <shadcn-card-footer slot="footer">
          <shadcn-button variant="default" style="flex: 1;">Sign in</shadcn-button>
        </shadcn-card-footer>
      </shadcn-card>
    </div>
  \`
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var D,E,F;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 350px;">
      <shadcn-card>
        <div style="aspect-ratio: 16/9; background: var(--muted); border-radius: var(--radius-md); margin: var(--spacing-6); margin-bottom: 0;"></div>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Product Name</shadcn-card-title>
          <shadcn-card-description>$99.99</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <p style="margin: 0; font-size: var(--font-size-sm); color: var(--muted-foreground);">
            A brief description of the product and its key features.
          </p>
        </shadcn-card-content>
        <shadcn-card-footer slot="footer">
          <shadcn-button variant="default" style="flex: 1;">Add to Cart</shadcn-button>
        </shadcn-card-footer>
      </shadcn-card>
    </div>
  \`
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var $,L,O;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; max-width: 1000px;">
      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Total Revenue</shadcn-card-title>
          <shadcn-card-description>+20.1% from last month</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="font-size: var(--font-size-3xl); font-weight: var(--font-bold);">$45,231.89</div>
        </shadcn-card-content>
      </shadcn-card>

      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Subscriptions</shadcn-card-title>
          <shadcn-card-description>+180.1% from last month</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="font-size: var(--font-size-3xl); font-weight: var(--font-bold);">+2,350</div>
        </shadcn-card-content>
      </shadcn-card>

      <shadcn-card>
        <shadcn-card-header slot="header">
          <shadcn-card-title>Sales</shadcn-card-title>
          <shadcn-card-description>+19% from last month</shadcn-card-description>
        </shadcn-card-header>
        <shadcn-card-content>
          <div style="font-size: var(--font-size-3xl); font-weight: var(--font-bold);">+12,234</div>
        </shadcn-card-content>
      </shadcn-card>
    </div>
  \`
}`,...(O=(L=h.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const I=["Default","WithFooter","LoginForm","ProductCard","MultipleCards"];export{c as Default,i as LoginForm,h as MultipleCards,l as ProductCard,o as WithFooter,I as __namedExportsOrder,G as default};
