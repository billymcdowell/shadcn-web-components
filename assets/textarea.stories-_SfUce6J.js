import{i as P,a as j,x as n}from"./lit-element-B21iCxvW.js";import{t as N}from"./custom-element-C028faeO.js";import{n as t}from"./property-CJLssJ-s.js";import{e as I}from"./query-BApjzB0v.js";import{t as V,f as R}from"./index-BVWPfyNL.js";import"./label-BV95ynri.js";var G=Object.defineProperty,H=Object.getOwnPropertyDescriptor,r=(a,o,x,d)=>{for(var s=d>1?void 0:d?H(o,x):o,v=a.length-1,g;v>=0;v--)(g=a[v])&&(s=(d?g(o,x,s):g(s))||s);return d&&s&&G(o,x,s),s};let e=class extends j{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.error=!1,this.name=""}render(){return n`
      <textarea
        part="textarea"
        class="textarea ${this.error?"textarea--error":""}"
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        name=${this.name}
        minlength=${this.minlength??""}
        maxlength=${this.maxlength??""}
        rows=${this.rows??""}
        cols=${this.cols??""}
        @input=${this._handleInput}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      ></textarea>
    `}_handleInput(a){const o=a.target;this.value=o.value,this.dispatchEvent(new CustomEvent("textarea-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_handleFocus(a){this.dispatchEvent(new CustomEvent("textarea-focus",{bubbles:!0,composed:!0,detail:{originalEvent:a}}))}_handleBlur(a){this.dispatchEvent(new CustomEvent("textarea-blur",{bubbles:!0,composed:!0,detail:{originalEvent:a}}))}focus(){var a;(a=this.textareaElement)==null||a.focus()}blur(){var a;(a=this.textareaElement)==null||a.blur()}};e.styles=[V,R,P`
      :host {
        display: block;
      }

      .textarea {
        display: flex;
        width: 100%;
        min-height: var(--textarea-min-height, 5rem);
        padding: var(--spacing-3);
        font-size: var(--font-size-sm);
        font-family: var(--font-sans);
        background-color: var(--textarea-bg, var(--background));
        color: var(--textarea-color, var(--foreground));
        border: 1px solid var(--textarea-border, var(--input));
        border-radius: var(--radius-md);
        outline: 2px solid transparent;
        outline-offset: 2px;
        transition: border-color var(--transition-fast), outline var(--transition-fast);
        resize: vertical;
      }

      .textarea::placeholder {
        color: var(--muted-foreground);
      }

      .textarea:focus {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .textarea:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .textarea--error {
        border-color: var(--destructive);
      }

      .textarea--error:focus {
        outline-color: var(--destructive);
      }
    `];r([I(".textarea")],e.prototype,"textareaElement",2);r([t({type:String})],e.prototype,"value",2);r([t({type:String})],e.prototype,"placeholder",2);r([t({type:Boolean})],e.prototype,"disabled",2);r([t({type:Boolean})],e.prototype,"readonly",2);r([t({type:Boolean})],e.prototype,"required",2);r([t({type:Boolean})],e.prototype,"error",2);r([t({type:String})],e.prototype,"name",2);r([t({type:Number})],e.prototype,"minlength",2);r([t({type:Number})],e.prototype,"maxlength",2);r([t({type:Number})],e.prototype,"rows",2);r([t({type:Number})],e.prototype,"cols",2);e=r([N("shadcn-textarea")],e);const Z={title:"Components/Textarea",component:"shadcn-textarea",tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the textarea is disabled"},error:{control:"boolean",description:"Whether the textarea has an error"}},parameters:{docs:{description:{component:"A multi-line text input with vertical resizing and validation support."}}}},l={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <shadcn-textarea placeholder="Type your message here..."></shadcn-textarea>
    </div>
  `},i={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 500px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label>Message</shadcn-label>
      <shadcn-textarea placeholder="Enter your message"></shadcn-textarea>
    </div>
  `},c={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <shadcn-textarea
        value="This is some pre-filled text in the textarea."
      ></shadcn-textarea>
    </div>
  `},p={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <shadcn-textarea
        disabled
        value="This textarea is disabled"
      ></shadcn-textarea>
    </div>
  `},h={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 500px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label>Bio</shadcn-label>
      <shadcn-textarea
        error
        placeholder="Tell us about yourself"
      ></shadcn-textarea>
      <span style="font-size: var(--font-size-sm); color: var(--destructive);">
        This field is required
      </span>
    </div>
  `},u={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 500px; display: flex; flex-direction: column; gap: 0.5rem;">
      <div style="display: flex; justify-content: space-between;">
        <shadcn-label>Comment</shadcn-label>
        <span style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
          Max 200 characters
        </span>
      </div>
      <shadcn-textarea
        placeholder="Leave a comment..."
        maxlength="200"
      ></shadcn-textarea>
    </div>
  `},m={render:()=>n`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label>Feedback</shadcn-label>
          <shadcn-textarea
            placeholder="Tell us what you think..."
            required
          ></shadcn-textarea>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label>Additional Comments</shadcn-label>
          <shadcn-textarea
            placeholder="Any other thoughts? (optional)"
            rows="3"
          ></shadcn-textarea>
        </div>
      </form>
    </div>
  `};var b,f,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <shadcn-textarea placeholder="Type your message here..."></shadcn-textarea>
    </div>
  \`
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var k,w,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 500px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label>Message</shadcn-label>
      <shadcn-textarea placeholder="Enter your message"></shadcn-textarea>
    </div>
  \`
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var T,$,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <shadcn-textarea
        value="This is some pre-filled text in the textarea."
      ></shadcn-textarea>
    </div>
  \`
}`,...(_=($=c.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var z,S,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <shadcn-textarea
        disabled
        value="This textarea is disabled"
      ></shadcn-textarea>
    </div>
  \`
}`,...(W=(S=p.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var C,q,B;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 500px; display: flex; flex-direction: column; gap: 0.5rem;">
      <shadcn-label>Bio</shadcn-label>
      <shadcn-textarea
        error
        placeholder="Tell us about yourself"
      ></shadcn-textarea>
      <span style="font-size: var(--font-size-sm); color: var(--destructive);">
        This field is required
      </span>
    </div>
  \`
}`,...(B=(q=h.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var D,F,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 500px; display: flex; flex-direction: column; gap: 0.5rem;">
      <div style="display: flex; justify-content: space-between;">
        <shadcn-label>Comment</shadcn-label>
        <span style="font-size: var(--font-size-xs); color: var(--muted-foreground);">
          Max 200 characters
        </span>
      </div>
      <shadcn-textarea
        placeholder="Leave a comment..."
        maxlength="200"
      ></shadcn-textarea>
    </div>
  \`
}`,...(L=(F=u.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,A,O;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 500px;">
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label>Feedback</shadcn-label>
          <shadcn-textarea
            placeholder="Tell us what you think..."
            required
          ></shadcn-textarea>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <shadcn-label>Additional Comments</shadcn-label>
          <shadcn-textarea
            placeholder="Any other thoughts? (optional)"
            rows="3"
          ></shadcn-textarea>
        </div>
      </form>
    </div>
  \`
}`,...(O=(A=m.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const ee=["Default","WithLabel","WithValue","Disabled","WithError","WithMaxLength","FormExample"];export{l as Default,p as Disabled,m as FormExample,h as WithError,i as WithLabel,u as WithMaxLength,c as WithValue,ee as __namedExportsOrder,Z as default};
