import{i as g,a as y,x as p}from"./iframe-CBkYFfHe.js";import{t as b}from"./custom-element-C028faeO.js";import{n as r}from"./property-DkYxKTO5.js";import{t as S}from"./index-DHlp-d2y.js";import"./preload-helper-BBXEHTOU.js";var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,t=(e,a,m,i)=>{for(var n=i>1?void 0:i?$(a,m):a,v=e.length-1,u;v>=0;v--)(u=e[v])&&(n=(i?u(a,m,n):u(n))||n);return i&&n&&_(a,m,n),n};let o=class extends y{constructor(){super(...arguments),this.open=!1,this.openDelay=300,this.closeDelay=200,this.handleEnter=()=>{clearTimeout(this.closeTimer),!this.open&&(this.openTimer=setTimeout(()=>this.setOpen(!0),Math.max(0,this.openDelay)))},this.handleLeave=()=>{clearTimeout(this.openTimer),this.closeTimer=setTimeout(()=>this.setOpen(!1),Math.max(0,this.closeDelay))},this.handleKeyDown=e=>{e.key==="Escape"&&this.open&&this.setOpen(!1)},this.syncChildren=()=>{this.querySelectorAll("shadcn-hover-card-trigger").forEach(e=>{e.open=this.open}),this.querySelectorAll("shadcn-hover-card-content").forEach(e=>{e.open=this.open})}}connectedCallback(){super.connectedCallback(),this.addEventListener("hover-card-enter",this.handleEnter),this.addEventListener("hover-card-leave",this.handleLeave),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){this.clearTimers(),this.removeEventListener("hover-card-enter",this.handleEnter),this.removeEventListener("hover-card-leave",this.handleLeave),document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}render(){return p`<slot @slotchange=${this.syncChildren}></slot>`}updated(){this.syncChildren()}setOpen(e){e!==this.open&&(this.open=e,this.dispatchEvent(new CustomEvent("hover-card-open-change",{bubbles:!0,composed:!0,detail:{open:e}})))}clearTimers(){clearTimeout(this.openTimer),clearTimeout(this.closeTimer)}};o.styles=[S,g`:host { position: relative; display: inline-block; }`];t([r({type:Boolean,reflect:!0})],o.prototype,"open",2);t([r({type:Number,attribute:"open-delay"})],o.prototype,"openDelay",2);t([r({type:Number,attribute:"close-delay"})],o.prototype,"closeDelay",2);o=t([b("shadcn-hover-card")],o);let h=class extends y{constructor(){super(...arguments),this.open=!1,this.enter=()=>this.dispatchEvent(new CustomEvent("hover-card-enter",{bubbles:!0,composed:!0})),this.leave=()=>this.dispatchEvent(new CustomEvent("hover-card-leave",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerenter",this.enter),this.addEventListener("pointerleave",this.leave),this.addEventListener("focusin",this.enter),this.addEventListener("focusout",this.leave)}disconnectedCallback(){this.removeEventListener("pointerenter",this.enter),this.removeEventListener("pointerleave",this.leave),this.removeEventListener("focusin",this.enter),this.removeEventListener("focusout",this.leave),super.disconnectedCallback()}render(){return p`<span part="trigger"><slot></slot></span>`}};h.styles=g`:host { display: inline-block; }`;t([r({type:Boolean})],h.prototype,"open",2);h=t([b("shadcn-hover-card-trigger")],h);let s=class extends y{constructor(){super(...arguments),this.open=!1,this.side="bottom",this.align="center",this.enter=()=>this.dispatchEvent(new CustomEvent("hover-card-enter",{bubbles:!0,composed:!0})),this.leave=()=>this.dispatchEvent(new CustomEvent("hover-card-leave",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerenter",this.enter),this.addEventListener("pointerleave",this.leave)}disconnectedCallback(){this.removeEventListener("pointerenter",this.enter),this.removeEventListener("pointerleave",this.leave),super.disconnectedCallback()}render(){return p`<div part="content" class="content" ?hidden=${!this.open}><slot></slot></div>`}};s.styles=[S,g`
    :host { position: absolute; z-index: 50; display: block; }
    :host([side='top']) { bottom: calc(100% + .5rem); }
    :host([side='bottom']) { top: calc(100% + .5rem); }
    :host([side='left']) { right: calc(100% + .5rem); top: 50%; transform: translateY(-50%); }
    :host([side='right']) { left: calc(100% + .5rem); top: 50%; transform: translateY(-50%); }
    :host([align='start']) { left: 0; }
    :host([align='center']):not([side='left']):not([side='right']) { left: 50%; transform: translateX(-50%); }
    :host([align='end']) { right: 0; }
    [hidden] { display: none !important; }
    .content { box-sizing: border-box; width: var(--hover-card-width, 20rem); padding: var(--spacing-4); border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--popover); color: var(--popover-foreground); box-shadow: 0 10px 15px -3px oklch(0 0 0 / .15); transform-origin: top; }
    :host([open]) .content { animation: shadcn-zoom-in var(--transition-fast); }
    @media (prefers-reduced-motion: reduce) { .content { animation: none; } }
  `];t([r({type:Boolean,reflect:!0})],s.prototype,"open",2);t([r({type:String,reflect:!0})],s.prototype,"side",2);t([r({type:String,reflect:!0})],s.prototype,"align",2);s=t([b("shadcn-hover-card-content")],s);const K={title:"Components/Hover Card",component:"shadcn-hover-card",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the preview is open."},openDelay:{control:"number",description:"Delay before opening in milliseconds."},closeDelay:{control:"number",description:"Delay before closing in milliseconds."},side:{control:"select",options:["top","right","bottom","left"],description:"Preferred content side."},align:{control:"select",options:["start","center","end"],description:"Content alignment."}}},f=e=>p`
  <div style="padding:8rem">
    <shadcn-hover-card ?open=${e.open} .openDelay=${Number(e.openDelay??300)} .closeDelay=${Number(e.closeDelay??200)}>
      <shadcn-hover-card-trigger><a href="https://github.com/shadcn" style="color:var(--foreground)">@shadcn</a></shadcn-hover-card-trigger>
      <shadcn-hover-card-content side=${String(e.side??"bottom")} align=${String(e.align??"center")}>
        <strong>@shadcn</strong><p style="margin:.5rem 0">Beautifully designed components that you can copy and paste into your apps.</p><small>Joined December 2021</small>
      </shadcn-hover-card-content>
    </shadcn-hover-card>
  </div>`,c={args:{open:!1,openDelay:300,closeDelay:200,side:"bottom",align:"center"},render:f},l={args:{open:!0,openDelay:0,closeDelay:200,side:"top",align:"start"},render:f},d={args:{open:!0,side:"right",align:"center"},render:f};var E,D,C;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    open: false,
    openDelay: 300,
    closeDelay: 200,
    side: 'bottom',
    align: 'center'
  },
  render
}`,...(C=(D=c.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var L,k,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    open: true,
    openDelay: 0,
    closeDelay: 200,
    side: 'top',
    align: 'start'
  },
  render
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var x,T,O;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: true,
    side: 'right',
    align: 'center'
  },
  render
}`,...(O=(T=d.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const j=["Default","Open","Right"];export{c as Default,l as Open,d as Right,j as __namedExportsOrder,K as default};
