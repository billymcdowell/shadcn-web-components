import{x as s,i as O,a as I,E as v}from"./iframe-Baten_M5.js";import{t as K}from"./custom-element-C028faeO.js";import{n as h}from"./property-Cny5Lx-H.js";import{r as _}from"./state-CcYsaF-H.js";import{t as j}from"./index-Bkm5wONK.js";import"./preload-helper-BBXEHTOU.js";var N=Object.defineProperty,U=Object.getOwnPropertyDescriptor,u=(o,t,r,e)=>{for(var n=e>1?void 0:e?U(t,r):t,c=o.length-1,p;c>=0;c--)(p=o[c])&&(n=(e?p(t,r,n):p(n))||n);return e&&n&&N(t,r,n),n};let Y=0,a=[];const $=new Set;function L(){const o=[...a];$.forEach(t=>t(o))}function l(o,t,r={}){const e=r.id??++Y,n=a.find(p=>p.id===e),c={...n,...r,id:e,title:t,type:o,duration:r.duration??((n==null?void 0:n.type)===o?n.duration:void 0),revision:((n==null?void 0:n.revision)??0)+1};return a=n?a.map(p=>p.id===e?c:p):[...a,c],L(),e}function f(o,t=!1){const r=o===void 0?a:a.filter(e=>e.id===o);r.length!==0&&(a=o===void 0?[]:a.filter(e=>e.id!==o),r.forEach(e=>{var n,c;return t?(n=e.onAutoClose)==null?void 0:n.call(e,e):(c=e.onDismiss)==null?void 0:c.call(e,e)}),L())}const R=(o,t)=>l("default",o,t),d=Object.assign(R,{success:(o,t)=>l("success",o,t),info:(o,t)=>l("info",o,t),warning:(o,t)=>l("warning",o,t),error:(o,t)=>l("error",o,t),loading:(o,t)=>l("loading",o,{duration:1/0,...t}),promise:(o,t)=>{const r=l("loading",t.loading,{description:t.description,duration:1/0});return o.then(e=>l("success",typeof t.success=="function"?t.success(e):t.success,{id:r,description:t.description}),e=>l("error",typeof t.error=="function"?t.error(e):t.error,{id:r,description:t.description})).finally(t.finally),r},dismiss:o=>f(o)}),W={success:s`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>`,info:s`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg>`,warning:s`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v4M12 17h.01"/></svg>`,error:s`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6m0-6-6 6"/></svg>`,loading:s`<svg class="spinner" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/></svg>`};let i=class extends I{constructor(){super(...arguments),this.position="bottom-right",this.duration=4e3,this.visibleToasts=3,this.expand=!1,this.richColors=!1,this.closeButton=!1,this.toasts=[],this.paused=!1,this.timers=new Map,this.handleKeydown=o=>{var t,r;o.altKey&&o.code==="KeyT"?(o.preventDefault(),(t=this.renderRoot.querySelector(".viewport"))==null||t.focus()):o.key==="Escape"&&this.toasts.length>0&&f((r=this.toasts[this.toasts.length-1])==null?void 0:r.id)}}connectedCallback(){super.connectedCallback();const o=t=>{this.toasts=t,this.syncTimers()};$.add(o),o([...a]),this.unsubscribe=()=>$.delete(o),window.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.unsubscribe)==null||o.call(this),window.removeEventListener("keydown",this.handleKeydown),this.clearTimers()}updated(o){o.has("duration")&&this.syncTimers()}clearTimers(){this.timers.forEach(o=>window.clearTimeout(o)),this.timers.clear()}syncTimers(){this.clearTimers(),!this.paused&&this.toasts.forEach(o=>{const t=o.duration??this.duration;o.type!=="loading"&&Number.isFinite(t)&&t>0&&this.timers.set(o.id,window.setTimeout(()=>f(o.id,!0),t))})}setPaused(o){this.paused=o,this.syncTimers()}runAction(o,t,r){t.onClick(r),f(o.id)}renderToast(o){const t=o.type==="default"?v:W[o.type],r=o.type==="error"?"alert":"status";return s`
      <li class="toast toast--${o.type}" part="toast" role=${r} aria-atomic="true">
        <span class="icon">${t}</span>
        <div class="content">
          <div class="title" part="title">${o.title}</div>
          ${o.description?s`<div class="description" part="description">${o.description}</div>`:v}
        </div>
        <div class="controls">
          ${o.action?s`<button part="action" @click=${e=>this.runAction(o,o.action,e)}>${o.action.label}</button>`:v}
          ${o.cancel?s`<button class="cancel" part="cancel" @click=${e=>this.runAction(o,o.cancel,e)}>${o.cancel.label}</button>`:v}
          ${this.closeButton||o.closeButton?s`<button class="close" part="close-button" aria-label="Dismiss notification" @click=${()=>f(o.id)}>&times;</button>`:v}
        </div>
      </li>
    `}render(){const o=this.toasts.slice(-Math.max(1,this.visibleToasts));return s`
      <ol
        class="viewport"
        part="viewport"
        data-position=${this.position}
        ?data-expanded=${this.expand||this.paused}
        aria-label="Notifications (Alt+T)"
        tabindex="-1"
        @pointerenter=${()=>this.setPaused(!0)}
        @pointerleave=${()=>this.setPaused(!1)}
        @focusin=${()=>this.setPaused(!0)}
        @focusout=${t=>{!this.contains(t.relatedTarget)&&!this.renderRoot.contains(t.relatedTarget)&&this.setPaused(!1)}}
      >${o.map(t=>this.renderToast(t))}</ol>
    `}};i.styles=[j,O`
    :host { display: contents; font-family: var(--font-sans); }
    .viewport { position: fixed; z-index: 100; display: flex; width: min(var(--sonner-width, 22rem), calc(100vw - 2rem)); margin: 0; padding: 0; list-style: none; pointer-events: none; }
    .viewport[data-position^='top'] { top: var(--sonner-offset, 1rem); flex-direction: column; }
    .viewport[data-position^='bottom'] { bottom: var(--sonner-offset, 1rem); flex-direction: column-reverse; }
    .viewport[data-position$='left'] { left: var(--sonner-offset, 1rem); }
    .viewport[data-position$='right'] { right: var(--sonner-offset, 1rem); }
    .viewport[data-position$='center'] { left: 50%; transform: translateX(-50%); }
    .viewport[data-expanded] { gap: var(--sonner-gap, 0.75rem); }
    .toast { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: var(--spacing-3); box-sizing: border-box; width: 100%; min-height: 3.5rem; margin-top: var(--sonner-gap, 0.75rem); padding: var(--spacing-3) var(--spacing-4); color: var(--popover-foreground); background: var(--popover); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); pointer-events: auto; animation: toast-in var(--transition-normal); }
    .viewport[data-position^='bottom'] .toast { margin-top: 0; margin-bottom: var(--sonner-gap, 0.75rem); }
    .viewport[data-expanded] .toast { margin: 0; }
    .icon { display: grid; place-items: center; width: 1rem; height: 1rem; color: var(--muted-foreground); }
    .icon:empty { display: none; }
    svg { width: 1rem; height: 1rem; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2; }
    .spinner { animation: spin var(--animation-spin-duration) linear infinite; stroke-dasharray: 42; stroke-dashoffset: 12; }
    .content { min-width: 0; }
    .title { color: inherit; font-size: var(--font-size-sm); font-weight: var(--font-medium); line-height: var(--leading-snug); }
    .description { margin-top: 0.125rem; color: var(--muted-foreground); font-size: var(--font-size-xs); line-height: var(--leading-normal); }
    .controls { display: flex; align-items: center; gap: var(--spacing-2); }
    button { min-height: 1.75rem; padding: 0 var(--spacing-2); color: var(--primary-foreground); background: var(--primary); border: 0; border-radius: var(--radius-md); font: 500 var(--font-size-xs)/1 var(--font-sans); cursor: pointer; }
    button:hover { opacity: 0.9; }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
    .cancel { color: var(--secondary-foreground); background: var(--secondary); }
    .close { width: 1.75rem; padding: 0; color: var(--muted-foreground); background: transparent; font-size: var(--font-size-lg); }
    :host([rich-colors]) .toast--success { color: oklch(0.72 0.19 145); border-color: color-mix(in oklch, currentColor 35%, var(--border)); }
    :host([rich-colors]) .toast--info { color: oklch(0.72 0.15 245); border-color: color-mix(in oklch, currentColor 35%, var(--border)); }
    :host([rich-colors]) .toast--warning { color: oklch(0.8 0.16 85); border-color: color-mix(in oklch, currentColor 35%, var(--border)); }
    :host([rich-colors]) .toast--error { color: var(--destructive); border-color: color-mix(in oklch, currentColor 45%, var(--border)); }
    @keyframes toast-in { from { opacity: 0; transform: translateY(0.75rem) scale(0.98); } }
    @keyframes spin { to { transform: rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) { .toast, .spinner { animation-duration: 0ms; } }
  `];u([h({reflect:!0})],i.prototype,"position",2);u([h({type:Number})],i.prototype,"duration",2);u([h({type:Number,attribute:"visible-toasts"})],i.prototype,"visibleToasts",2);u([h({type:Boolean,reflect:!0})],i.prototype,"expand",2);u([h({type:Boolean,reflect:!0,attribute:"rich-colors"})],i.prototype,"richColors",2);u([h({type:Boolean,reflect:!0,attribute:"close-button"})],i.prototype,"closeButton",2);u([_()],i.prototype,"toasts",2);u([_()],i.prototype,"paused",2);i=u([K("shadcn-sonner")],i);const H={title:"Components/Sonner",component:"shadcn-sonner",tags:["autodocs"],argTypes:{position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],description:"Viewport position for notifications."},duration:{control:"number",description:"Default auto-close duration in milliseconds."},visibleToasts:{control:"number",description:"Maximum number of visible notifications."},expand:{control:"boolean",description:"Displays notifications with full spacing."},richColors:{control:"boolean",description:"Applies colors based on notification type."},closeButton:{control:"boolean",description:"Shows a dismiss button on every notification."}},parameters:{docs:{description:{component:"An accessible notification host with an imperative, framework-independent toast API."}}}},w="display:flex;flex-wrap:wrap;gap:.75rem;padding:2rem;min-height:12rem;background:var(--background);color:var(--foreground)",m={args:{position:"bottom-right",duration:4e3,visibleToasts:3,expand:!1,richColors:!1,closeButton:!1},render:o=>s`
    <div style=${w}>
      <button @click=${()=>d("Event has been created",{description:"Sunday, December 3 at 9:00 AM"})}>Show toast</button>
    </div>
    <shadcn-sonner
      position=${o.position}
      duration=${o.duration}
      visible-toasts=${o.visibleToasts}
      ?expand=${o.expand}
      ?rich-colors=${o.richColors}
      ?close-button=${o.closeButton}
    ></shadcn-sonner>
  `},b={render:()=>s`
    <div style=${w}>
      <button @click=${()=>d.success("Changes saved")}>Success</button>
      <button @click=${()=>d.info("A new version is available")}>Info</button>
      <button @click=${()=>d.warning("Your session expires soon")}>Warning</button>
      <button @click=${()=>d.error("Something went wrong")}>Error</button>
      <button @click=${()=>d.loading("Uploading files")}>Loading</button>
    </div>
    <shadcn-sonner rich-colors close-button expand></shadcn-sonner>
  `},g={render:()=>s`
    <div style=${w}>
      <button @click=${()=>d("Message archived",{action:{label:"Undo",onClick:()=>d.success("Message restored")},cancel:{label:"Dismiss",onClick:()=>{}}})}>Toast with action</button>
    </div>
    <shadcn-sonner></shadcn-sonner>
  `},y={render:()=>s`
    <div style=${w}>
      <button @click=${()=>d.promise(new Promise(o=>window.setTimeout(()=>o("Profile"),1500)),{loading:"Saving profile...",success:o=>`${o} saved`,error:"Could not save profile"})}>Save profile</button>
    </div>
    <shadcn-sonner position="top-center" rich-colors close-button></shadcn-sonner>
  `};var x,k,T;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    position: 'bottom-right',
    duration: 4000,
    visibleToasts: 3,
    expand: false,
    richColors: false,
    closeButton: false
  },
  render: args => html\`
    <div style=\${triggerStyles}>
      <button @click=\${() => toast('Event has been created', {
    description: 'Sunday, December 3 at 9:00 AM'
  })}>Show toast</button>
    </div>
    <shadcn-sonner
      position=\${args.position}
      duration=\${args.duration}
      visible-toasts=\${args.visibleToasts}
      ?expand=\${args.expand}
      ?rich-colors=\${args.richColors}
      ?close-button=\${args.closeButton}
    ></shadcn-sonner>
  \`
}`,...(T=(k=m.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var C,S,B;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div style=\${triggerStyles}>
      <button @click=\${() => toast.success('Changes saved')}>Success</button>
      <button @click=\${() => toast.info('A new version is available')}>Info</button>
      <button @click=\${() => toast.warning('Your session expires soon')}>Warning</button>
      <button @click=\${() => toast.error('Something went wrong')}>Error</button>
      <button @click=\${() => toast.loading('Uploading files')}>Loading</button>
    </div>
    <shadcn-sonner rich-colors close-button expand></shadcn-sonner>
  \`
}`,...(B=(S=b.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var P,A,M;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <div style=\${triggerStyles}>
      <button @click=\${() => toast('Message archived', {
    action: {
      label: 'Undo',
      onClick: () => toast.success('Message restored')
    },
    cancel: {
      label: 'Dismiss',
      onClick: () => undefined
    }
  })}>Toast with action</button>
    </div>
    <shadcn-sonner></shadcn-sonner>
  \`
}`,...(M=(A=g.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var D,E,z;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div style=\${triggerStyles}>
      <button @click=\${() => toast.promise(new Promise<string>(resolve => window.setTimeout(() => resolve('Profile'), 1500)), {
    loading: 'Saving profile...',
    success: name => \`\${name} saved\`,
    error: 'Could not save profile'
  })}>Save profile</button>
    </div>
    <shadcn-sonner position="top-center" rich-colors close-button></shadcn-sonner>
  \`
}`,...(z=(E=y.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const J=["Default","Types","Action","PromiseToast"];export{g as Action,m as Default,y as PromiseToast,b as Types,J as __namedExportsOrder,H as default};
