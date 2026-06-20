import{i as b,a as E,x as v}from"./iframe-BV4MdNsM.js";import{t as C}from"./custom-element-C028faeO.js";import{n}from"./property-DKYLCqXO.js";import{t as q}from"./index-Fg_qAIbf.js";import"./button-Cs31NNOL.js";import"./preload-helper-BBXEHTOU.js";var R=Object.defineProperty,X=Object.getOwnPropertyDescriptor,t=(e,o,y,l)=>{for(var s=l>1?void 0:l?X(o,y):o,f=e.length-1,g;f>=0;f--)(g=e[f])&&(s=(l?g(o,y,s):g(s))||s);return l&&s&&R(o,y,s),s};let Y=0,r=class extends E{constructor(){super(...arguments),this.open=!1,this.delay=300,this.enter=()=>{clearTimeout(this.timer),this.open||(this.timer=setTimeout(()=>this.setOpen(!0),Math.max(0,this.delay)))},this.leave=()=>{clearTimeout(this.timer),this.setOpen(!1)},this.keydown=e=>{e.key==="Escape"&&this.open&&this.setOpen(!1)},this.syncChildren=()=>{const e=this.querySelector("shadcn-tooltip-content"),o=this.querySelector("shadcn-tooltip-trigger");e&&(e.open=this.open),o&&(o.open=this.open,o.describedBy=(e==null?void 0:e.contentId)??"")}}connectedCallback(){super.connectedCallback(),this.addEventListener("tooltip-enter",this.enter),this.addEventListener("tooltip-leave",this.leave),document.addEventListener("keydown",this.keydown)}disconnectedCallback(){clearTimeout(this.timer),this.removeEventListener("tooltip-enter",this.enter),this.removeEventListener("tooltip-leave",this.leave),document.removeEventListener("keydown",this.keydown),super.disconnectedCallback()}render(){return v`<slot @slotchange=${this.syncChildren}></slot>`}updated(){this.syncChildren()}setOpen(e){e!==this.open&&(this.open=e,this.dispatchEvent(new CustomEvent("tooltip-open-change",{bubbles:!0,composed:!0,detail:{open:e}})))}};r.styles=[q,b`:host { position: relative; display: inline-block; }`];t([n({type:Boolean,reflect:!0})],r.prototype,"open",2);t([n({type:Number})],r.prototype,"delay",2);r=t([C("shadcn-tooltip")],r);let i=class extends E{constructor(){super(...arguments),this.open=!1,this.describedBy="",this.enter=()=>this.dispatchEvent(new CustomEvent("tooltip-enter",{bubbles:!0,composed:!0})),this.leave=()=>this.dispatchEvent(new CustomEvent("tooltip-leave",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerenter",this.enter),this.addEventListener("pointerleave",this.leave),this.addEventListener("focusin",this.enter),this.addEventListener("focusout",this.leave)}disconnectedCallback(){this.removeEventListener("pointerenter",this.enter),this.removeEventListener("pointerleave",this.leave),this.removeEventListener("focusin",this.enter),this.removeEventListener("focusout",this.leave),super.disconnectedCallback()}render(){return v`<span part="trigger" aria-describedby=${this.open?this.describedBy:""}><slot></slot></span>`}};i.styles=b`:host { display: inline-block; }`;t([n({type:Boolean})],i.prototype,"open",2);t([n({type:String})],i.prototype,"describedBy",2);i=t([C("shadcn-tooltip-trigger")],i);let a=class extends E{constructor(){super(...arguments),this.contentId=`shadcn-tooltip-${++Y}`,this.open=!1,this.side="top"}render(){return v`<div id=${this.contentId} part="content" class="content" role="tooltip" ?hidden=${!this.open}><slot></slot></div>`}};a.styles=[q,b`
    :host { position: absolute; z-index: 50; display: block; pointer-events: none; }
    :host([side='top']) { bottom: calc(100% + .375rem); left: 50%; transform: translateX(-50%); }
    :host([side='bottom']) { top: calc(100% + .375rem); left: 50%; transform: translateX(-50%); }
    :host([side='left']) { right: calc(100% + .375rem); top: 50%; transform: translateY(-50%); }
    :host([side='right']) { left: calc(100% + .375rem); top: 50%; transform: translateY(-50%); }
    [hidden] { display: none !important; }
    .content { width: max-content; max-width: 18rem; padding: .375rem var(--spacing-2); border-radius: var(--radius-md); background: var(--primary); color: var(--primary-foreground); font-family: var(--font-sans); font-size: var(--font-size-xs); line-height: 1.25; box-shadow: 0 4px 8px oklch(0 0 0 / .15); }
  `];t([n({type:Boolean})],a.prototype,"open",2);t([n({type:String,reflect:!0})],a.prototype,"side",2);a=t([C("shadcn-tooltip-content")],a);const G={title:"Components/Tooltip",component:"shadcn-tooltip",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the tooltip is visible."},delay:{control:"number",description:"Delay before opening in milliseconds."},side:{control:"select",options:["top","right","bottom","left"],description:"Tooltip side."}}},d=e=>v`
  <div style="padding:8rem">
    <shadcn-tooltip ?open=${e.open} .delay=${e.delay??300}>
      <shadcn-tooltip-trigger><shadcn-button variant="outline">Hover or focus</shadcn-button></shadcn-tooltip-trigger>
      <shadcn-tooltip-content side=${e.side??"top"}>Add to library</shadcn-tooltip-content>
    </shadcn-tooltip>
  </div>`,p={args:{open:!1,delay:300,side:"top"},render:d},c={args:{open:!0,delay:0,side:"top"},render:d},h={args:{open:!0,delay:0,side:"right"},render:d},m={args:{open:!0,delay:0,side:"bottom"},render:d},u={args:{open:!0,delay:0,side:"left"},render:d};var L,k,x;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    open: false,
    delay: 300,
    side: 'top'
  },
  render
}`,...(x=(k=p.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var w,O,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: true,
    delay: 0,
    side: 'top'
  },
  render
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var B,S,$;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    open: true,
    delay: 0,
    side: 'right'
  },
  render
}`,...($=(S=h.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var _,D,I;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    open: true,
    delay: 0,
    side: 'bottom'
  },
  render
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var P,z,j;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    open: true,
    delay: 0,
    side: 'left'
  },
  render
}`,...(j=(z=u.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const J=["Default","Open","Right","Bottom","Left"];export{m as Bottom,p as Default,u as Left,c as Open,h as Right,J as __namedExportsOrder,G as default};
