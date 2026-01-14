import{i as H,a as J,x as e}from"./lit-element-B21iCxvW.js";import{t as K}from"./custom-element-C028faeO.js";import{n as m}from"./property-CJLssJ-s.js";import{t as M}from"./index-BVWPfyNL.js";import"./input-CJkEiHQR.js";import"./native-select-C3nw9Lr-.js";import"./query-BApjzB0v.js";var N=Object.defineProperty,A=Object.getOwnPropertyDescriptor,d=(n,t,f,i)=>{for(var r=i>1?void 0:i?A(t,f):t,v=n.length-1,b;v>=0;v--)(b=n[v])&&(r=(i?b(t,f,r):b(r))||r);return i&&r&&N(t,f,r),r};let a=class extends J{constructor(){super(...arguments),this.required=!1}render(){const n=!!this.error||this.querySelector('[slot="error"]');return e`
      <div part="field" class="field ${n?"field--error":""}">
        ${this.label||this.querySelector('[slot="label"]')?e`
            <div class="field__label">
              <slot name="label">${this.label}${this.required?e`<span style="color: var(--destructive);"> *</span>`:""}</slot>
            </div>
          `:""}
        
        <div class="field__control">
          <slot></slot>
        </div>
        
        ${this.helper&&!n?e`
            <div class="field__helper">
              <slot name="helper">${this.helper}</slot>
            </div>
          `:""}
        
        ${n?e`
            <div class="field__error">
              <slot name="error">${this.error}</slot>
            </div>
          `:""}
      </div>
    `}};a.styles=[M,H`
      :host {
        display: block;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2);
      }

      .field__label {
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        color: var(--foreground);
      }

      .field__helper {
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
      }

      .field__error {
        font-size: var(--font-size-sm);
        color: var(--destructive);
      }

      .field--error .field__label {
        color: var(--destructive);
      }
    `];d([m({type:String})],a.prototype,"label",2);d([m({type:String})],a.prototype,"helper",2);d([m({type:String})],a.prototype,"error",2);d([m({type:Boolean})],a.prototype,"required",2);a=d([K("shadcn-field")],a);const Y={title:"Components/Field",component:"shadcn-field",tags:["autodocs"],parameters:{docs:{description:{component:"A form field wrapper that combines label, input, helper text, and error message into a unified component."}}}},s={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field label="Email">
        <shadcn-input type="email" placeholder="email@example.com"></shadcn-input>
      </shadcn-field>
    </div>
  `},o={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Password"
        helper="Must be at least 8 characters long"
      >
        <shadcn-input type="password" placeholder="Enter password"></shadcn-input>
      </shadcn-field>
    </div>
  `,parameters:{docs:{description:{story:"Field with helper text below the input."}}}},l={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Username"
        error="This username is already taken"
      >
        <shadcn-input placeholder="Choose a username" error></shadcn-input>
      </shadcn-field>
    </div>
  `,parameters:{docs:{description:{story:"Field with an error message."}}}},c={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Full Name"
        required
      >
        <shadcn-input placeholder="John Doe"></shadcn-input>
      </shadcn-field>
    </div>
  `,parameters:{docs:{description:{story:"Required field with an asterisk indicator."}}}},p={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Country"
        helper="Select your country of residence"
      >
        <shadcn-native-select>
          <option value="">Choose a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </shadcn-native-select>
      </shadcn-field>
    </div>
  `,parameters:{docs:{description:{story:"Field with a select element."}}}},h={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <shadcn-field
          label="Full Name"
          required
        >
          <shadcn-input placeholder="John Doe"></shadcn-input>
        </shadcn-field>

        <shadcn-field
          label="Email"
          helper="We'll never share your email"
          required
        >
          <shadcn-input type="email" placeholder="john@example.com"></shadcn-input>
        </shadcn-field>

        <shadcn-field
          label="Password"
          helper="Must be at least 8 characters"
          required
        >
          <shadcn-input type="password" placeholder="••••••••"></shadcn-input>
        </shadcn-field>

        <shadcn-field
          label="Country"
        >
          <shadcn-native-select>
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
          </shadcn-native-select>
        </shadcn-field>

        <button type="submit" style="padding: 0.5rem 1rem; background: var(--primary); color: var(--primary-foreground); border: none; border-radius: var(--radius-md); font-weight: var(--font-medium); cursor: pointer;">
          Submit
        </button>
      </form>
    </div>
  `,parameters:{docs:{description:{story:"Complete form using field components."}}}},u={render:()=>e`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-field label="Default">
        <shadcn-input placeholder="Default state"></shadcn-input>
      </shadcn-field>

      <shadcn-field label="With Helper" helper="This is helper text">
        <shadcn-input placeholder="With helper text"></shadcn-input>
      </shadcn-field>

      <shadcn-field label="With Error" error="This field is required">
        <shadcn-input placeholder="Error state" error></shadcn-input>
      </shadcn-field>

      <shadcn-field label="Required" required>
        <shadcn-input placeholder="Required field"></shadcn-input>
      </shadcn-field>

      <shadcn-field label="Disabled">
        <shadcn-input placeholder="Disabled field" disabled></shadcn-input>
      </shadcn-field>
    </div>
  `,parameters:{docs:{description:{story:"All possible field states."}}}};var g,y,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field label="Email">
        <shadcn-input type="email" placeholder="email@example.com"></shadcn-input>
      </shadcn-field>
    </div>
  \`
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,k,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Password"
        helper="Must be at least 8 characters long"
      >
        <shadcn-input type="password" placeholder="Enter password"></shadcn-input>
      </shadcn-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Field with helper text below the input.'
      }
    }
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var q,_,D;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Username"
        error="This username is already taken"
      >
        <shadcn-input placeholder="Choose a username" error></shadcn-input>
      </shadcn-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Field with an error message.'
      }
    }
  }
}`,...(D=(_=l.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var C,E,F;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Full Name"
        required
      >
        <shadcn-input placeholder="John Doe"></shadcn-input>
      </shadcn-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Required field with an asterisk indicator.'
      }
    }
  }
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var W,U,$;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-field
        label="Country"
        helper="Select your country of residence"
      >
        <shadcn-native-select>
          <option value="">Choose a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </shadcn-native-select>
      </shadcn-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Field with a select element.'
      }
    }
  }
}`,...($=(U=p.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var P,R,z;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <shadcn-field
          label="Full Name"
          required
        >
          <shadcn-input placeholder="John Doe"></shadcn-input>
        </shadcn-field>

        <shadcn-field
          label="Email"
          helper="We'll never share your email"
          required
        >
          <shadcn-input type="email" placeholder="john@example.com"></shadcn-input>
        </shadcn-field>

        <shadcn-field
          label="Password"
          helper="Must be at least 8 characters"
          required
        >
          <shadcn-input type="password" placeholder="••••••••"></shadcn-input>
        </shadcn-field>

        <shadcn-field
          label="Country"
        >
          <shadcn-native-select>
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
          </shadcn-native-select>
        </shadcn-field>

        <button type="submit" style="padding: 0.5rem 1rem; background: var(--primary); color: var(--primary-foreground); border: none; border-radius: var(--radius-md); font-weight: var(--font-medium); cursor: pointer;">
          Submit
        </button>
      </form>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Complete form using field components.'
      }
    }
  }
}`,...(z=(R=h.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var T,O,j;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-field label="Default">
        <shadcn-input placeholder="Default state"></shadcn-input>
      </shadcn-field>

      <shadcn-field label="With Helper" helper="This is helper text">
        <shadcn-input placeholder="With helper text"></shadcn-input>
      </shadcn-field>

      <shadcn-field label="With Error" error="This field is required">
        <shadcn-input placeholder="Error state" error></shadcn-input>
      </shadcn-field>

      <shadcn-field label="Required" required>
        <shadcn-input placeholder="Required field"></shadcn-input>
      </shadcn-field>

      <shadcn-field label="Disabled">
        <shadcn-input placeholder="Disabled field" disabled></shadcn-input>
      </shadcn-field>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'All possible field states.'
      }
    }
  }
}`,...(j=(O=u.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const Z=["Default","WithHelper","WithError","Required","WithSelect","FormExample","DifferentStates"];export{s as Default,u as DifferentStates,h as FormExample,c as Required,l as WithError,o as WithHelper,p as WithSelect,Z as __namedExportsOrder,Y as default};
