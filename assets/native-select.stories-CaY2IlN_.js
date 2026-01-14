import{x as o}from"./lit-element-B21iCxvW.js";import"./native-select-C3nw9Lr-.js";import"./label-BV95ynri.js";import"./custom-element-C028faeO.js";import"./property-CJLssJ-s.js";import"./query-BApjzB0v.js";import"./index-BVWPfyNL.js";const z={title:"Components/Native Select",component:"shadcn-native-select",tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Whether the select is disabled"}},parameters:{docs:{description:{component:"A styled native select element with custom dropdown icon."}}}},e={render:()=>o`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-native-select>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </shadcn-native-select>
    </div>
  `},n={render:()=>o`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="country">Country</shadcn-label>
      <shadcn-native-select id="country">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="de">Germany</option>
      </shadcn-native-select>
    </div>
  `,parameters:{docs:{description:{story:"Select with a label component."}}}},t={render:()=>o`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-native-select disabled>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </shadcn-native-select>
    </div>
  `,parameters:{docs:{description:{story:"Disabled select."}}}},a={render:()=>o`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="language">Language</shadcn-label>
          <shadcn-native-select id="language" required>
            <option value="">Choose a language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
          </shadcn-native-select>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="timezone">Timezone</shadcn-label>
          <shadcn-native-select id="timezone" required>
            <option value="">Select timezone</option>
            <option value="utc">UTC</option>
            <option value="est">Eastern Time (ET)</option>
            <option value="cst">Central Time (CT)</option>
            <option value="mst">Mountain Time (MT)</option>
            <option value="pst">Pacific Time (PT)</option>
          </shadcn-native-select>
        </div>
      </form>
    </div>
  `,parameters:{docs:{description:{story:"Example form with multiple select fields."}}}},i={render:()=>o`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="food">Choose a food</shadcn-label>
      <shadcn-native-select id="food">
        <option value="">Select a food</option>
        <optgroup label="Fruits">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </optgroup>
        <optgroup label="Vegetables">
          <option value="carrot">Carrot</option>
          <option value="broccoli">Broccoli</option>
          <option value="spinach">Spinach</option>
        </optgroup>
      </shadcn-native-select>
    </div>
  `,parameters:{docs:{description:{story:"Select with option groups."}}}};var p,l,r;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-native-select>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </shadcn-native-select>
    </div>
  \`
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var s,d,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="country">Country</shadcn-label>
      <shadcn-native-select id="country">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="de">Germany</option>
      </shadcn-native-select>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Select with a label component.'
      }
    }
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <shadcn-native-select disabled>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </shadcn-native-select>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Disabled select.'
      }
    }
  }
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var h,g,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="language">Language</shadcn-label>
          <shadcn-native-select id="language" required>
            <option value="">Choose a language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
          </shadcn-native-select>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label for="timezone">Timezone</shadcn-label>
          <shadcn-native-select id="timezone" required>
            <option value="">Select timezone</option>
            <option value="utc">UTC</option>
            <option value="est">Eastern Time (ET)</option>
            <option value="cst">Central Time (CT)</option>
            <option value="mst">Mountain Time (MT)</option>
            <option value="pst">Pacific Time (PT)</option>
          </shadcn-native-select>
        </div>
      </form>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Example form with multiple select fields.'
      }
    }
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,x,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label for="food">Choose a food</shadcn-label>
      <shadcn-native-select id="food">
        <option value="">Select a food</option>
        <optgroup label="Fruits">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </optgroup>
        <optgroup label="Vegetables">
          <option value="carrot">Carrot</option>
          <option value="broccoli">Broccoli</option>
          <option value="spinach">Spinach</option>
        </optgroup>
      </shadcn-native-select>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Select with option groups.'
      }
    }
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const D=["Default","WithLabel","Disabled","FormExample","WithOptGroups"];export{e as Default,t as Disabled,a as FormExample,n as WithLabel,i as WithOptGroups,D as __namedExportsOrder,z as default};
