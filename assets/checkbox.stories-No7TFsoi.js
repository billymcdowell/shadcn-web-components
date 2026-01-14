import{i as j,a as z,x as o}from"./lit-element-B21iCxvW.js";import{t as B}from"./custom-element-C028faeO.js";import{n as d}from"./property-CJLssJ-s.js";import{e as I}from"./query-BApjzB0v.js";import{t as F}from"./index-BVWPfyNL.js";import"./label-BV95ynri.js";var K=Object.defineProperty,L=Object.getOwnPropertyDescriptor,a=(e,c,s,t)=>{for(var r=t>1?void 0:t?L(c,s):c,m=e.length-1,x;m>=0;m--)(x=e[m])&&(r=(t?x(c,s,r):x(r))||r);return t&&r&&K(c,s,r),r};let n=class extends z{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.required=!1,this.name="",this.value=""}render(){return o`
      <div class="checkbox-wrapper">
        <div
          part="checkbox"
          class="checkbox ${this.checked?"checkbox--checked":""} ${this.disabled?"checkbox--disabled":""}"
          role="checkbox"
          aria-checked=${this.checked}
          aria-disabled=${this.disabled}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
        >
          <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <input
            class="checkbox__input"
            type="checkbox"
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
    `}_handleClick(e){if(this.disabled){e.preventDefault();return}this._toggle()}_handleKeyDown(e){this.disabled||(e.key===" "||e.key==="Enter")&&(e.preventDefault(),this._toggle())}_toggle(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("checkbox-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.value}}))}focus(){var e,c;(c=(e=this.shadowRoot)==null?void 0:e.querySelector(".checkbox"))==null||c.focus()}};n.styles=[F,j`
      :host {
        display: inline-block;
      }

      .checkbox-wrapper {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-2);
      }

      .checkbox {
        flex-shrink: 0;
        width: 1rem;
        height: 1rem;
        border: 1px solid var(--checkbox-border, var(--primary));
        border-radius: var(--radius-sm);
        background-color: var(--checkbox-bg, transparent);
        cursor: pointer;
        transition: background-color var(--transition-fast), border-color var(--transition-fast);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .checkbox:hover:not(.checkbox--disabled) {
        background-color: var(--accent);
      }

      .checkbox:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .checkbox--checked {
        background-color: var(--primary);
        border-color: var(--primary);
      }

      .checkbox--disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .checkbox__icon {
        color: var(--primary-foreground);
        width: 0.75rem;
        height: 0.75rem;
        opacity: 0;
        transform: scale(0);
        transition: opacity var(--transition-fast), transform var(--transition-fast);
      }

      .checkbox--checked .checkbox__icon {
        opacity: 1;
        transform: scale(1);
      }

      .checkbox__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
    `];a([I(".checkbox__input")],n.prototype,"inputElement",2);a([d({type:Boolean})],n.prototype,"checked",2);a([d({type:Boolean})],n.prototype,"disabled",2);a([d({type:Boolean})],n.prototype,"required",2);a([d({type:String})],n.prototype,"name",2);a([d({type:String})],n.prototype,"value",2);n=a([B("shadcn-checkbox")],n);const Q={title:"Components/Checkbox",component:"shadcn-checkbox",tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Whether the checkbox is checked"},disabled:{control:"boolean",description:"Whether the checkbox is disabled"}},parameters:{docs:{description:{component:"A checkbox input with WCAG 2.1 AA compliant accessibility and keyboard support."}}}},i={render:()=>o`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-checkbox>Accept terms and conditions</shadcn-checkbox>
    </div>
  `},h={render:()=>o`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-checkbox checked>Already accepted</shadcn-checkbox>
    </div>
  `},l={render:()=>o`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-checkbox disabled>Disabled unchecked</shadcn-checkbox>
      <shadcn-checkbox disabled checked>Disabled checked</shadcn-checkbox>
    </div>
  `},p={render:()=>o`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <shadcn-checkbox id="terms">
          Accept terms and conditions
        </shadcn-checkbox>
      </div>
      
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <shadcn-checkbox id="marketing">
          Receive marketing emails
        </shadcn-checkbox>
      </div>

      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <shadcn-checkbox id="newsletter">
          Subscribe to newsletter
        </shadcn-checkbox>
      </div>
    </div>
  `},b={render:()=>o`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0; font-size: var(--font-size-base); font-weight: var(--font-semibold); color: var(--foreground);">
            Preferences
          </h3>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <shadcn-checkbox name="notifications">
              Enable notifications
            </shadcn-checkbox>
            <shadcn-checkbox name="updates" checked>
              Receive updates
            </shadcn-checkbox>
            <shadcn-checkbox name="tips">
              Show tips on startup
            </shadcn-checkbox>
          </div>
        </div>

        <div style="border-top: 1px solid var(--border); padding-top: 1rem;">
          <shadcn-checkbox name="terms" required>
            I agree to the terms and conditions *
          </shadcn-checkbox>
        </div>
      </form>
    </div>
  `},k={render:()=>o`
      <div style="padding: 1rem; background: var(--background);">
        <shadcn-checkbox @checkbox-change=${c=>{const s=c.detail;console.log("Checkbox changed:",s)}}>
          Click me (check console)
        </shadcn-checkbox>
      </div>
    `,parameters:{docs:{description:{story:"Checkbox with event listener. Open the console to see events."}}}};var u,v,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-checkbox>Accept terms and conditions</shadcn-checkbox>
    </div>
  \`
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,y,w;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-checkbox checked>Already accepted</shadcn-checkbox>
    </div>
  \`
}`,...(w=(y=h.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var _,C,$;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <shadcn-checkbox disabled>Disabled unchecked</shadcn-checkbox>
      <shadcn-checkbox disabled checked>Disabled checked</shadcn-checkbox>
    </div>
  \`
}`,...($=(C=l.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var D,S,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <shadcn-checkbox id="terms">
          Accept terms and conditions
        </shadcn-checkbox>
      </div>
      
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <shadcn-checkbox id="marketing">
          Receive marketing emails
        </shadcn-checkbox>
      </div>

      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <shadcn-checkbox id="newsletter">
          Subscribe to newsletter
        </shadcn-checkbox>
      </div>
    </div>
  \`
}`,...(E=(S=p.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var A,q,O;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0; font-size: var(--font-size-base); font-weight: var(--font-semibold); color: var(--foreground);">
            Preferences
          </h3>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <shadcn-checkbox name="notifications">
              Enable notifications
            </shadcn-checkbox>
            <shadcn-checkbox name="updates" checked>
              Receive updates
            </shadcn-checkbox>
            <shadcn-checkbox name="tips">
              Show tips on startup
            </shadcn-checkbox>
          </div>
        </div>

        <div style="border-top: 1px solid var(--border); padding-top: 1rem;">
          <shadcn-checkbox name="terms" required>
            I agree to the terms and conditions *
          </shadcn-checkbox>
        </div>
      </form>
    </div>
  \`
}`,...(O=(q=b.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var P,R,W;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      console.log('Checkbox changed:', detail);
    };
    return html\`
      <div style="padding: 1rem; background: var(--background);">
        <shadcn-checkbox @checkbox-change=\${handler}>
          Click me (check console)
        </shadcn-checkbox>
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox with event listener. Open the console to see events.'
      }
    }
  }
}`,...(W=(R=k.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const U=["Default","Checked","Disabled","WithLabel","FormExample","Interactive"];export{h as Checked,i as Default,l as Disabled,b as FormExample,k as Interactive,p as WithLabel,U as __namedExportsOrder,Q as default};
