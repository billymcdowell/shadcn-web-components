import{i as _,a as A,x as c}from"./lit-element-B21iCxvW.js";import{t as C}from"./custom-element-C028faeO.js";import{n as d}from"./property-CJLssJ-s.js";import{t as W}from"./index-BVWPfyNL.js";var E=Object.defineProperty,P=Object.getOwnPropertyDescriptor,s=(n,o,e,t)=>{for(var a=t>1?void 0:t?P(o,e):o,h=n.length-1,u;h>=0;h--)(u=n[h])&&(a=(t?u(o,e,a):u(a))||a);return t&&a&&E(o,e,a),a};let r=class extends A{constructor(){super(...arguments),this.open=!1,this.value=""}render(){return c`
      <div part="accordion-item" class="accordion-item">
        <button
          part="accordion-trigger"
          class="accordion-trigger"
          aria-expanded=${this.open}
          @click=${this._handleClick}
        >
          <slot name="trigger"></slot>
          <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div part="accordion-content" class="accordion-content ${this.open?"accordion-content--open":""}">
          <div class="accordion-content__inner">
            <slot></slot>
          </div>
        </div>
      </div>
    `}_handleClick(){this.dispatchEvent(new CustomEvent("accordion-item-toggle",{bubbles:!0,composed:!0,detail:{value:this.value,open:!this.open}}))}};r.styles=[W,_`
      :host {
        display: block;
      }

      .accordion-item {
        border-bottom: 1px solid var(--border);
      }

      .accordion-trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-4) 0;
        font-size: var(--font-size-sm);
        font-weight: var(--font-medium);
        background: none;
        border: none;
        width: 100%;
        text-align: left;
        cursor: pointer;
        color: var(--foreground);
        transition: all var(--transition-fast);
        font-family: var(--font-sans);
      }

      .accordion-trigger:hover {
        text-decoration: underline;
      }

      .accordion-trigger:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
        border-radius: var(--radius-sm);
      }

      .accordion-icon {
        transition: transform var(--transition-normal);
        flex-shrink: 0;
      }

      .accordion-trigger[aria-expanded="true"] .accordion-icon {
        transform: rotate(180deg);
      }

      .accordion-content {
        overflow: hidden;
        max-height: 0;
        transition: max-height var(--transition-normal);
      }

      .accordion-content--open {
        max-height: 1000px;
      }

      .accordion-content__inner {
        padding-bottom: var(--spacing-4);
        font-size: var(--font-size-sm);
        color: var(--foreground);
      }
    `];s([d({type:Boolean})],r.prototype,"open",2);s([d({type:String})],r.prototype,"value",2);r=s([C("shadcn-accordion-item")],r);let i=class extends A{constructor(){super(...arguments),this.type="single",this.value="",this.collapsible=!1}render(){return c`
      <div part="accordion" class="accordion" @accordion-item-toggle=${this._handleItemToggle}>
        <slot></slot>
      </div>
    `}_handleItemToggle(n){const e=n.target.value;if(this.type==="single")this.value===e?this.value=this.collapsible?"":e:this.value=e;else{const t=this.value?this.value.split(","):[],a=t.indexOf(e);a===-1?t.push(e):t.splice(a,1),this.value=t.join(",")}this._updateItems(),this.dispatchEvent(new CustomEvent("accordion-change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_updateItems(){const n=this._getItems(),o=this.value?this.value.split(","):[];n.forEach(e=>{this.type==="single"?e.open=e.value===this.value:e.open=o.includes(e.value)})}_getItems(){var e;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");return n?n.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="shadcn-accordion-item"):[]}updated(n){n.has("value")&&this._updateItems()}firstUpdated(){this._updateItems()}};i.styles=[W,_`
      :host {
        display: block;
      }

      .accordion {
        border-top: 1px solid var(--border);
      }
    `];s([d({type:String})],i.prototype,"type",2);s([d({type:String})],i.prototype,"value",2);s([d({type:Boolean})],i.prototype,"collapsible",2);i=s([C("shadcn-accordion")],i);const $={title:"Components/Accordion",component:"shadcn-accordion",tags:["autodocs"],argTypes:{type:{control:"radio",options:["single","multiple"],description:"Selection mode"},collapsible:{control:"boolean",description:"Allow collapsing all items (single mode only)"}},parameters:{docs:{description:{component:"A vertical stack of collapsible sections with support for single or multiple expansion."}}}},l={render:()=>c`
    <div style="padding: 1rem; background: var(--background); max-width: 600px;">
      <shadcn-accordion type="single" collapsible>
        <shadcn-accordion-item value="item-1">
          <span slot="trigger">Is it accessible?</span>
          Yes. It adheres to the WAI-ARIA design pattern and provides full keyboard navigation.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-2">
          <span slot="trigger">Is it styled?</span>
          Yes. It comes with default styles that match the shadcn design system.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-3">
          <span slot="trigger">Is it animated?</span>
          Yes. It uses smooth transitions for expanding and collapsing content.
        </shadcn-accordion-item>
      </shadcn-accordion>
    </div>
  `},p={render:()=>c`
    <div style="padding: 1rem; background: var(--background); max-width: 600px;">
      <shadcn-accordion type="multiple" value="item-1,item-2">
        <shadcn-accordion-item value="item-1">
          <span slot="trigger">First Item</span>
          Content for the first accordion item.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-2">
          <span slot="trigger">Second Item</span>
          Content for the second accordion item.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-3">
          <span slot="trigger">Third Item</span>
          Content for the third accordion item.
        </shadcn-accordion-item>
      </shadcn-accordion>
    </div>
  `},m={render:()=>c`
    <div style="padding: 1rem; background: var(--background); max-width: 700px;">
      <h2 style="margin: 0 0 1.5rem 0; font-size: var(--font-size-2xl); font-weight: var(--font-bold);">
        Frequently Asked Questions
      </h2>
      <shadcn-accordion type="single" collapsible>
        <shadcn-accordion-item value="shipping">
          <span slot="trigger">What are your shipping options?</span>
          We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Free shipping is available on orders over $50.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="returns">
          <span slot="trigger">What is your return policy?</span>
          We accept returns within 30 days of purchase. Items must be unused and in original packaging. Refunds are processed within 5-7 business days.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="warranty">
          <span slot="trigger">Do you offer a warranty?</span>
          All products come with a 1-year manufacturer warranty covering defects and malfunctions. Extended warranties are available for purchase.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="payment">
          <span slot="trigger">What payment methods do you accept?</span>
          We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.
        </shadcn-accordion-item>
      </shadcn-accordion>
    </div>
  `};var g,v,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 600px;">
      <shadcn-accordion type="single" collapsible>
        <shadcn-accordion-item value="item-1">
          <span slot="trigger">Is it accessible?</span>
          Yes. It adheres to the WAI-ARIA design pattern and provides full keyboard navigation.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-2">
          <span slot="trigger">Is it styled?</span>
          Yes. It comes with default styles that match the shadcn design system.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-3">
          <span slot="trigger">Is it animated?</span>
          Yes. It uses smooth transitions for expanding and collapsing content.
        </shadcn-accordion-item>
      </shadcn-accordion>
    </div>
  \`
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,b,x;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 600px;">
      <shadcn-accordion type="multiple" value="item-1,item-2">
        <shadcn-accordion-item value="item-1">
          <span slot="trigger">First Item</span>
          Content for the first accordion item.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-2">
          <span slot="trigger">Second Item</span>
          Content for the second accordion item.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="item-3">
          <span slot="trigger">Third Item</span>
          Content for the third accordion item.
        </shadcn-accordion-item>
      </shadcn-accordion>
    </div>
  \`
}`,...(x=(b=p.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,I,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 1rem; background: var(--background); max-width: 700px;">
      <h2 style="margin: 0 0 1.5rem 0; font-size: var(--font-size-2xl); font-weight: var(--font-bold);">
        Frequently Asked Questions
      </h2>
      <shadcn-accordion type="single" collapsible>
        <shadcn-accordion-item value="shipping">
          <span slot="trigger">What are your shipping options?</span>
          We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Free shipping is available on orders over $50.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="returns">
          <span slot="trigger">What is your return policy?</span>
          We accept returns within 30 days of purchase. Items must be unused and in original packaging. Refunds are processed within 5-7 business days.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="warranty">
          <span slot="trigger">Do you offer a warranty?</span>
          All products come with a 1-year manufacturer warranty covering defects and malfunctions. Extended warranties are available for purchase.
        </shadcn-accordion-item>
        <shadcn-accordion-item value="payment">
          <span slot="trigger">What payment methods do you accept?</span>
          We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.
        </shadcn-accordion-item>
      </shadcn-accordion>
    </div>
  \`
}`,...(k=(I=m.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const D=["Default","Multiple","FAQ"];export{l as Default,m as FAQ,p as Multiple,D as __namedExportsOrder,$ as default};
