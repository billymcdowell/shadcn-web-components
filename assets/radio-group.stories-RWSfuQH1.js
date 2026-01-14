import{i as F,a as L,x as t}from"./lit-element-B21iCxvW.js";import{t as M}from"./custom-element-C028faeO.js";import{n as r}from"./property-CJLssJ-s.js";import{t as j}from"./index-BVWPfyNL.js";var N=Object.defineProperty,W=Object.getOwnPropertyDescriptor,e=(a,o,i,c)=>{for(var s=c>1?void 0:c?W(o,i):o,g=a.length-1,f;g>=0;g--)(f=a[g])&&(s=(c?f(o,i,s):f(s))||s);return c&&s&&N(o,i,s),s};let d=class extends L{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.required=!1,this.name="",this.value=""}render(){return t`
      <div class="radio-wrapper">
        <div
          part="radio"
          class="radio ${this.checked?"radio--checked":""} ${this.disabled?"radio--disabled":""}"
          role="radio"
          aria-checked=${this.checked}
          aria-disabled=${this.disabled}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
        >
          <div class="radio__indicator"></div>
          <input
            class="radio__input"
            type="radio"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            name=${this.name}
            value=${this.value}
            aria-hidden="true"
            tabindex="-1"
          />
        </div>
        <slot></slot>
      </div>
    `}_handleClick(a){if(this.disabled||this.checked){a.preventDefault();return}this._select()}_handleKeyDown(a){this.disabled||(a.key===" "||a.key==="Enter")&&(a.preventDefault(),this.checked||this._select())}_select(){this.checked=!0,this.dispatchEvent(new CustomEvent("radio-change",{bubbles:!0,composed:!0,detail:{value:this.value,checked:!0}}))}focus(){var a,o;(o=(a=this.shadowRoot)==null?void 0:a.querySelector(".radio"))==null||o.focus()}};d.styles=[j,F`
      :host {
        display: inline-block;
      }

      .radio-wrapper {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-2);
      }

      .radio {
        flex-shrink: 0;
        width: 1rem;
        height: 1rem;
        border: 1px solid var(--primary);
        border-radius: var(--radius-full);
        background-color: transparent;
        cursor: pointer;
        transition: background-color var(--transition-fast), border-color var(--transition-fast);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .radio:hover:not(.radio--disabled) {
        background-color: var(--accent);
      }

      .radio:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .radio--checked {
        border-color: var(--primary);
      }

      .radio--disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .radio__indicator {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: var(--radius-full);
        background-color: var(--primary);
        opacity: 0;
        transform: scale(0);
        transition: opacity var(--transition-fast), transform var(--transition-fast);
      }

      .radio--checked .radio__indicator {
        opacity: 1;
        transform: scale(1);
      }

      .radio__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
    `];e([r({type:Boolean})],d.prototype,"checked",2);e([r({type:Boolean})],d.prototype,"disabled",2);e([r({type:Boolean})],d.prototype,"required",2);e([r({type:String})],d.prototype,"name",2);e([r({type:String})],d.prototype,"value",2);d=e([M("shadcn-radio")],d);let n=class extends L{constructor(){super(...arguments),this.value="",this.name="",this.orientation="vertical",this.disabled=!1,this.required=!1}render(){return t`
      <div
        part="radio-group"
        class="radio-group ${this.orientation==="horizontal"?"radio-group--horizontal":""}"
        role="radiogroup"
        aria-required=${this.required}
        @radio-change=${this._handleRadioChange}
      >
        <slot></slot>
      </div>
    `}_handleRadioChange(a){const o=a.target;this.value=o.value,this._updateRadios(),this.dispatchEvent(new CustomEvent("radio-group-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_updateRadios(){this._getRadios().forEach(o=>{o.checked=o.value===this.value,o.name=this.name,o.disabled=this.disabled||o.disabled,o.required=this.required})}_getRadios(){var i;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");return a?a.assignedElements({flatten:!0}).filter(c=>c.tagName.toLowerCase()==="shadcn-radio"):[]}updated(a){(a.has("value")||a.has("name")||a.has("disabled"))&&this._updateRadios()}firstUpdated(){this._updateRadios()}};n.styles=[j,F`
      :host {
        display: block;
      }

      .radio-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-3);
      }

      .radio-group--horizontal {
        flex-direction: row;
      }
    `];e([r({type:String})],n.prototype,"value",2);e([r({type:String})],n.prototype,"name",2);e([r({type:String})],n.prototype,"orientation",2);e([r({type:Boolean})],n.prototype,"disabled",2);e([r({type:Boolean})],n.prototype,"required",2);n=e([M("shadcn-radio-group")],n);const T={title:"Components/Radio Group",component:"shadcn-radio-group",tags:["autodocs"],argTypes:{value:{control:"text",description:"Selected value"},orientation:{control:"radio",options:["vertical","horizontal"],description:"Layout orientation"},disabled:{control:"boolean",description:"Whether the group is disabled"}},parameters:{docs:{description:{component:"A set of radio buttons that allows single selection from multiple options."}}}},l={render:()=>t`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="default">
        <shadcn-radio value="option1">Option 1</shadcn-radio>
        <shadcn-radio value="option2">Option 2</shadcn-radio>
        <shadcn-radio value="option3">Option 3</shadcn-radio>
      </shadcn-radio-group>
    </div>
  `},u={render:()=>t`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="withDefault" value="option2">
        <shadcn-radio value="option1">Option 1</shadcn-radio>
        <shadcn-radio value="option2">Option 2 (Selected)</shadcn-radio>
        <shadcn-radio value="option3">Option 3</shadcn-radio>
      </shadcn-radio-group>
    </div>
  `},h={render:()=>t`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="horizontal" orientation="horizontal">
        <shadcn-radio value="sm">Small</shadcn-radio>
        <shadcn-radio value="md">Medium</shadcn-radio>
        <shadcn-radio value="lg">Large</shadcn-radio>
      </shadcn-radio-group>
    </div>
  `},p={render:()=>t`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="disabled" disabled value="option1">
        <shadcn-radio value="option1">Option 1</shadcn-radio>
        <shadcn-radio value="option2">Option 2</shadcn-radio>
        <shadcn-radio value="option3">Option 3</shadcn-radio>
      </shadcn-radio-group>
    </div>
  `},v={render:()=>t`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h4 style="margin: 0 0 0.75rem 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
            Choose your plan
          </h4>
          <shadcn-radio-group name="plan" value="pro">
            <shadcn-radio value="free">
              <div>
                <div style="font-weight: var(--font-medium);">Free</div>
                <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                  Perfect for trying out our service
                </div>
              </div>
            </shadcn-radio>
            <shadcn-radio value="pro">
              <div>
                <div style="font-weight: var(--font-medium);">Pro</div>
                <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                  Best for professionals
                </div>
              </div>
            </shadcn-radio>
            <shadcn-radio value="enterprise">
              <div>
                <div style="font-weight: var(--font-medium);">Enterprise</div>
                <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                  Advanced features for teams
                </div>
              </div>
            </shadcn-radio>
          </shadcn-radio-group>
        </div>

        <div>
          <h4 style="margin: 0 0 0.75rem 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
            Notification method
          </h4>
          <shadcn-radio-group name="notify" orientation="horizontal">
            <shadcn-radio value="email">Email</shadcn-radio>
            <shadcn-radio value="sms">SMS</shadcn-radio>
            <shadcn-radio value="push">Push</shadcn-radio>
          </shadcn-radio-group>
        </div>
      </form>
    </div>
  `},m={render:()=>t`
      <div style="padding: 1rem; background: var(--background);">
        <shadcn-radio-group name="interactive" @radio-group-change=${o=>{const i=o.detail;console.log("Radio group changed:",i)}}>
          <shadcn-radio value="a">Option A</shadcn-radio>
          <shadcn-radio value="b">Option B</shadcn-radio>
          <shadcn-radio value="c">Option C</shadcn-radio>
        </shadcn-radio-group>
        <p style="margin-top: 1rem; font-size: var(--font-size-sm); color: var(--muted-foreground);">
          Check the console to see events
        </p>
      </div>
    `};var y,b,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="default">
        <shadcn-radio value="option1">Option 1</shadcn-radio>
        <shadcn-radio value="option2">Option 2</shadcn-radio>
        <shadcn-radio value="option3">Option 3</shadcn-radio>
      </shadcn-radio-group>
    </div>
  \`
}`,...(k=(b=l.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var z,x,_;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="withDefault" value="option2">
        <shadcn-radio value="option1">Option 1</shadcn-radio>
        <shadcn-radio value="option2">Option 2 (Selected)</shadcn-radio>
        <shadcn-radio value="option3">Option 3</shadcn-radio>
      </shadcn-radio-group>
    </div>
  \`
}`,...(_=(x=u.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var w,O,S;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="horizontal" orientation="horizontal">
        <shadcn-radio value="sm">Small</shadcn-radio>
        <shadcn-radio value="md">Medium</shadcn-radio>
        <shadcn-radio value="lg">Large</shadcn-radio>
      </shadcn-radio-group>
    </div>
  \`
}`,...(S=(O=h.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var $,C,E;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-radio-group name="disabled" disabled value="option1">
        <shadcn-radio value="option1">Option 1</shadcn-radio>
        <shadcn-radio value="option2">Option 2</shadcn-radio>
        <shadcn-radio value="option3">Option 3</shadcn-radio>
      </shadcn-radio-group>
    </div>
  \`
}`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,D,q;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h4 style="margin: 0 0 0.75rem 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
            Choose your plan
          </h4>
          <shadcn-radio-group name="plan" value="pro">
            <shadcn-radio value="free">
              <div>
                <div style="font-weight: var(--font-medium);">Free</div>
                <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                  Perfect for trying out our service
                </div>
              </div>
            </shadcn-radio>
            <shadcn-radio value="pro">
              <div>
                <div style="font-weight: var(--font-medium);">Pro</div>
                <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                  Best for professionals
                </div>
              </div>
            </shadcn-radio>
            <shadcn-radio value="enterprise">
              <div>
                <div style="font-weight: var(--font-medium);">Enterprise</div>
                <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                  Advanced features for teams
                </div>
              </div>
            </shadcn-radio>
          </shadcn-radio-group>
        </div>

        <div>
          <h4 style="margin: 0 0 0.75rem 0; font-size: var(--font-size-sm); font-weight: var(--font-semibold); color: var(--foreground);">
            Notification method
          </h4>
          <shadcn-radio-group name="notify" orientation="horizontal">
            <shadcn-radio value="email">Email</shadcn-radio>
            <shadcn-radio value="sms">SMS</shadcn-radio>
            <shadcn-radio value="push">Push</shadcn-radio>
          </shadcn-radio-group>
        </div>
      </form>
    </div>
  \`
}`,...(q=(D=v.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var B,P,A;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      console.log('Radio group changed:', detail);
    };
    return html\`
      <div style="padding: 1rem; background: var(--background);">
        <shadcn-radio-group name="interactive" @radio-group-change=\${handler}>
          <shadcn-radio value="a">Option A</shadcn-radio>
          <shadcn-radio value="b">Option B</shadcn-radio>
          <shadcn-radio value="c">Option C</shadcn-radio>
        </shadcn-radio-group>
        <p style="margin-top: 1rem; font-size: var(--font-size-sm); color: var(--muted-foreground);">
          Check the console to see events
        </p>
      </div>
    \`;
  }
}`,...(A=(P=m.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const U=["Default","WithDefault","Horizontal","Disabled","FormExample","Interactive"];export{l as Default,p as Disabled,v as FormExample,h as Horizontal,m as Interactive,u as WithDefault,U as __namedExportsOrder,T as default};
