import{i as R,a as E,x as n}from"./lit-element-B21iCxvW.js";import{t as P}from"./custom-element-C028faeO.js";import{n as r}from"./property-CJLssJ-s.js";import{t as W}from"./index-BVWPfyNL.js";var q=Object.defineProperty,B=Object.getOwnPropertyDescriptor,a=(e,t,p,d)=>{for(var s=d>1?void 0:d?B(t,p):t,u=e.length-1,f;u>=0;u--)(f=e[u])&&(s=(d?f(t,p,s):f(s))||s);return d&&s&&q(t,p,s),s};let i=class extends E{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.required=!1,this.name="",this.value=""}render(){return n`
      <div
        part="switch"
        class="switch ${this.checked?"switch--checked":""} ${this.disabled?"switch--disabled":""}"
        role="switch"
        aria-checked=${this.checked}
        aria-disabled=${this.disabled}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        <div class="switch__thumb"></div>
        <input
          class="switch__input"
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
    `}_handleClick(e){if(this.disabled){e.preventDefault();return}this._toggle()}_handleKeyDown(e){this.disabled||(e.key===" "||e.key==="Enter")&&(e.preventDefault(),this._toggle())}_toggle(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("switch-change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.value}}))}focus(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".switch"))==null||t.focus()}};i.styles=[W,R`
      :host {
        display: inline-block;
      }

      .switch {
        position: relative;
        width: 2.75rem;
        height: 1.5rem;
        background-color: var(--switch-bg, var(--input));
        border-radius: var(--radius-full);
        cursor: pointer;
        transition: background-color var(--transition-fast);
        border: 2px solid transparent;
      }

      .switch:hover:not(.switch--disabled) {
        opacity: 0.9;
      }

      .switch:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .switch--checked {
        background-color: var(--primary);
      }

      .switch--disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .switch__thumb {
        position: absolute;
        top: 0.125rem;
        left: 0.125rem;
        width: 1.25rem;
        height: 1.25rem;
        background-color: var(--background);
        border-radius: var(--radius-full);
        transition: transform var(--transition-fast);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .switch--checked .switch__thumb {
        transform: translateX(1.25rem);
      }

      .switch__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
    `];a([r({type:Boolean})],i.prototype,"checked",2);a([r({type:Boolean})],i.prototype,"disabled",2);a([r({type:Boolean})],i.prototype,"required",2);a([r({type:String})],i.prototype,"name",2);a([r({type:String})],i.prototype,"value",2);i=a([P("shadcn-switch")],i);const K={title:"Components/Switch",component:"shadcn-switch",tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Whether the switch is checked"},disabled:{control:"boolean",description:"Whether the switch is disabled"}},parameters:{docs:{description:{component:"A toggle switch component with smooth animations and full accessibility."}}}},o={render:()=>n`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-switch></shadcn-switch>
    </div>
  `},c={render:()=>n`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-switch checked></shadcn-switch>
    </div>
  `},l={render:()=>n`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 1rem;">
      <shadcn-switch disabled></shadcn-switch>
      <shadcn-switch disabled checked></shadcn-switch>
    </div>
  `},h={render:()=>n`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 300px;">
        <span style="color: var(--foreground); font-size: var(--font-size-sm);">Airplane Mode</span>
        <shadcn-switch></shadcn-switch>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 300px;">
        <span style="color: var(--foreground); font-size: var(--font-size-sm);">WiFi</span>
        <shadcn-switch checked></shadcn-switch>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 300px;">
        <span style="color: var(--foreground); font-size: var(--font-size-sm);">Bluetooth</span>
        <shadcn-switch></shadcn-switch>
      </div>
    </div>
  `},v={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1rem;">
        <h3 style="margin: 0 0 1rem 0; font-size: var(--font-size-base); font-weight: var(--font-semibold); color: var(--foreground);">
          Notifications
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: start; justify-content: space-between;">
            <div>
              <div style="font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
                Email Notifications
              </div>
              <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                Receive emails about your activity
              </div>
            </div>
            <shadcn-switch checked></shadcn-switch>
          </div>

          <div style="display: flex; align-items: start; justify-content: space-between;">
            <div>
              <div style="font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
                Push Notifications
              </div>
              <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                Receive push notifications on your devices
              </div>
            </div>
            <shadcn-switch></shadcn-switch>
          </div>

          <div style="display: flex; align-items: start; justify-content: space-between;">
            <div>
              <div style="font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
                SMS Notifications
              </div>
              <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                Receive text messages
              </div>
            </div>
            <shadcn-switch disabled></shadcn-switch>
          </div>
        </div>
      </div>
    </div>
  `};var m,g,w;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-switch></shadcn-switch>
    </div>
  \`
}`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var y,b,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background);">
      <shadcn-switch checked></shadcn-switch>
    </div>
  \`
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,z,_;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; gap: 1rem;">
      <shadcn-switch disabled></shadcn-switch>
      <shadcn-switch disabled checked></shadcn-switch>
    </div>
  \`
}`,...(_=(z=l.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var S,j,$;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 300px;">
        <span style="color: var(--foreground); font-size: var(--font-size-sm);">Airplane Mode</span>
        <shadcn-switch></shadcn-switch>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 300px;">
        <span style="color: var(--foreground); font-size: var(--font-size-sm);">WiFi</span>
        <shadcn-switch checked></shadcn-switch>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 300px;">
        <span style="color: var(--foreground); font-size: var(--font-size-sm);">Bluetooth</span>
        <shadcn-switch></shadcn-switch>
      </div>
    </div>
  \`
}`,...($=(j=h.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var D,N,C;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 400px;">
      <div style="border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1rem;">
        <h3 style="margin: 0 0 1rem 0; font-size: var(--font-size-base); font-weight: var(--font-semibold); color: var(--foreground);">
          Notifications
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: start; justify-content: space-between;">
            <div>
              <div style="font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
                Email Notifications
              </div>
              <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                Receive emails about your activity
              </div>
            </div>
            <shadcn-switch checked></shadcn-switch>
          </div>

          <div style="display: flex; align-items: start; justify-content: space-between;">
            <div>
              <div style="font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
                Push Notifications
              </div>
              <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                Receive push notifications on your devices
              </div>
            </div>
            <shadcn-switch></shadcn-switch>
          </div>

          <div style="display: flex; align-items: start; justify-content: space-between;">
            <div>
              <div style="font-size: var(--font-size-sm); font-weight: var(--font-medium); color: var(--foreground);">
                SMS Notifications
              </div>
              <div style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
                Receive text messages
              </div>
            </div>
            <shadcn-switch disabled></shadcn-switch>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(C=(N=v.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const L=["Default","Checked","Disabled","WithLabels","Settings"];export{c as Checked,o as Default,l as Disabled,v as Settings,h as WithLabels,L as __namedExportsOrder,K as default};
