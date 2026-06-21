import{i as u,a as _,x as l}from"./iframe-B5y9qznB.js";import{t as v}from"./custom-element-C028faeO.js";import{n as a}from"./property-DwCo9F1Y.js";import{r as R}from"./state-dZZicvxP.js";import{e as U}from"./query-TLA3Feqw.js";import{t as w}from"./index-BBGFRwet.js";import"./preload-helper-BBXEHTOU.js";import"./base-CShCMygk.js";var X=Object.defineProperty,W=Object.getOwnPropertyDescriptor,r=(e,t,o,s)=>{for(var n=s>1?void 0:s?W(t,o):t,i=e.length-1,p;i>=0;i--)(p=e[i])&&(n=(s?p(t,o,n):p(n))||n);return s&&n&&X(t,o,n),n};let c=class extends _{constructor(){super(...arguments),this.index=0,this.orientation="horizontal",this.loop=!1,this.label="Carousel",this._count=0,this._handleSelect=e=>{if(e.target!==this._content())return;const t=this.index;this._count=e.detail.count,this.index=this._clampIndex(e.detail.index),this._syncControls(),this.index!==t&&this.dispatchEvent(new CustomEvent("carousel-change",{bubbles:!0,composed:!0,detail:{index:this.index,count:this._count}}))},this._handleKeyDown=e=>{const t=this.orientation==="horizontal"?"ArrowLeft":"ArrowUp",o=this.orientation==="horizontal"?"ArrowRight":"ArrowDown";e.key===t?(e.preventDefault(),this.scrollPrevious()):e.key===o&&(e.preventDefault(),this.scrollNext())},this._sync=()=>{const e=this._content();e?(e.orientation=this.orientation,e.loop=this.loop,this._count=e.itemCount):this._count=0,this.index=this._clampIndex(this.index),this._syncControls()}}connectedCallback(){super.connectedCallback(),this.addEventListener("carousel-select",this._handleSelect),this.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){this.removeEventListener("carousel-select",this._handleSelect),this.removeEventListener("keydown",this._handleKeyDown),super.disconnectedCallback()}render(){return l`
      <div
        part="carousel"
        class="carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label=${this.label}
      >
        <slot @slotchange=${this._sync}></slot>
      </div>
    `}firstUpdated(){this._sync()}updated(e){var t;if((e.has("orientation")||e.has("loop"))&&this._sync(),e.has("index")){const o=this._clampIndex(this.index);if(o!==this.index){this.index=o;return}(t=this._content())==null||t.scrollToSlide(this.index,"auto"),this._syncControls()}}scrollPrevious(){if(this._count<2)return;const e=this.index-1;e>=0?this.scrollToSlide(e):this.loop&&this.scrollToSlide(this._count-1)}scrollNext(){if(this._count<2)return;const e=this.index+1;e<this._count?this.scrollToSlide(e):this.loop&&this.scrollToSlide(0)}scrollToSlide(e){var o;const t=this._clampIndex(e);(o=this._content())==null||o.scrollToSlide(t,"smooth")}_content(){return this.querySelector("shadcn-carousel-content")}_clampIndex(e){return this._count===0?0:Math.max(0,Math.min(this._count-1,Math.trunc(Number.isFinite(e)?e:0)))}_syncControls(){const e=this._count>1,t=!e||!this.loop&&this.index===0,o=!e||!this.loop&&this.index===this._count-1;this.querySelectorAll("shadcn-carousel-previous").forEach(s=>{s.orientation=this.orientation,s.disabled=t}),this.querySelectorAll("shadcn-carousel-next").forEach(s=>{s.orientation=this.orientation,s.disabled=o})}};c.styles=[w,u`
    :host { display: block; position: relative; }
    .carousel { position: relative; }
  `];r([a({type:Number,reflect:!0})],c.prototype,"index",2);r([a({type:String,reflect:!0})],c.prototype,"orientation",2);r([a({type:Boolean,reflect:!0})],c.prototype,"loop",2);r([a({type:String})],c.prototype,"label",2);r([R()],c.prototype,"_count",2);c=r([v("shadcn-carousel")],c);let h=class extends _{constructor(){super(...arguments),this.orientation="horizontal",this.loop=!1,this._index=0,this._scrollFrame=0,this._handleSlotChange=()=>{this._syncItems(),this.scrollToSlide(this._index,"auto")},this._handleScroll=()=>{this._scrollFrame&&cancelAnimationFrame(this._scrollFrame),this._scrollFrame=requestAnimationFrame(()=>{this._scrollFrame=0;const e=this._items();if(e.length===0)return;const t=e[0],o=this.orientation==="horizontal"?this._viewport.scrollLeft:this._viewport.scrollTop,s=e.map(i=>this.orientation==="horizontal"?i.offsetLeft-t.offsetLeft:i.offsetTop-t.offsetTop),n=s.reduce((i,p,V)=>Math.abs(p-o)<Math.abs(s[i]-o)?V:i,0);n!==this._index&&(this._index=n,this._syncItems())})}}get itemCount(){return this._items().length}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this.scrollToSlide(this._index,"auto")))}disconnectedCallback(){var e;this._scrollFrame&&cancelAnimationFrame(this._scrollFrame),(e=this._resizeObserver)==null||e.disconnect(),super.disconnectedCallback()}render(){const e=this.orientation==="vertical";return l`
      <div
        part="viewport"
        class="viewport ${e?"vertical":""}"
        @scroll=${this._handleScroll}
      >
        <slot
          part="content"
          class="content ${e?"vertical":""}"
          @slotchange=${this._handleSlotChange}
        ></slot>
      </div>
    `}firstUpdated(){var e;(e=this._resizeObserver)==null||e.observe(this._viewport),this._syncItems()}updated(e){e.has("orientation")&&this.updateComplete.then(()=>this.scrollToSlide(this._index,"auto"))}scrollToSlide(e,t="smooth"){const o=this._items();if(!this._viewport||o.length===0)return;const s=Math.max(0,Math.min(o.length-1,Math.trunc(e))),n=o[0],i=o[s];this._viewport.scrollTo({left:this.orientation==="horizontal"?i.offsetLeft-n.offsetLeft:0,top:this.orientation==="vertical"?i.offsetTop-n.offsetTop:0,behavior:t})}_items(){return Array.from(this.querySelectorAll("shadcn-carousel-item"))}_syncItems(){const e=this._items();this._index=Math.max(0,Math.min(e.length-1,this._index)),e.forEach((t,o)=>{t.position=o+1,t.count=e.length}),this.dispatchEvent(new CustomEvent("carousel-select",{bubbles:!0,composed:!0,detail:{index:this._index,count:e.length}}))}};h.styles=[w,u`
    :host { display: block; overflow: hidden; }
    .viewport {
      overflow: auto;
      overscroll-behavior: contain;
      scrollbar-width: none;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      touch-action: pan-y pinch-zoom;
    }
    .viewport::-webkit-scrollbar { display: none; }
    .content {
      display: flex;
      margin-inline-start: calc(var(--carousel-gap, var(--spacing-4)) * -1);
    }
    ::slotted(shadcn-carousel-item) {
      box-sizing: border-box;
      flex: 0 0 var(--carousel-item-size, 100%);
      min-width: 0;
      padding-inline-start: var(--carousel-gap, var(--spacing-4));
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
    .viewport.vertical {
      height: var(--carousel-height, 24rem);
      scroll-snap-type: y mandatory;
      touch-action: pan-x pinch-zoom;
    }
    .content.vertical {
      flex-direction: column;
      height: 100%;
      margin-block-start: calc(var(--carousel-gap, var(--spacing-4)) * -1);
      margin-inline-start: 0;
    }
    slot.content.vertical::slotted(shadcn-carousel-item) {
      min-height: 0;
      padding-block-start: var(--carousel-gap, var(--spacing-4));
      padding-inline-start: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      .viewport { scroll-behavior: auto; }
    }
  `];r([a({type:String,reflect:!0})],h.prototype,"orientation",2);r([a({type:Boolean})],h.prototype,"loop",2);r([U(".viewport")],h.prototype,"_viewport",2);h=r([v("shadcn-carousel-content")],h);let m=class extends _{constructor(){super(...arguments),this.position=1,this.count=1}render(){return l`
      <div
        part="item"
        class="item"
        role="group"
        aria-roledescription="slide"
        aria-label="${this.position} of ${this.count}"
      >
        <slot></slot>
      </div>
    `}};m.styles=[w,u`
    :host { display: block; }
    .item { box-sizing: border-box; height: 100%; }
  `];r([a({type:Number})],m.prototype,"position",2);r([a({type:Number})],m.prototype,"count",2);m=r([v("shadcn-carousel-item")],m);const k=class k extends _{constructor(){super(...arguments),this.disabled=!1,this.orientation="horizontal",this._activate=()=>{const t=this.closest("shadcn-carousel");!t||this.disabled||(this.direction==="previous"?t.scrollPrevious():t.scrollNext())}}render(){const t=this.direction==="previous",o=this.orientation==="vertical",s=t?"Previous slide":"Next slide",n=o?t?"m18 15-6-6-6 6":"m6 9 6 6 6-6":t?"m15 18-6-6 6-6":"m9 18 6-6-6-6";return l`
      <button part="button" type="button" ?disabled=${this.disabled} @click=${this._activate}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n}></path>
        </svg>
        <span class="sr-only">${s}</span>
      </button>
    `}};k.styles=[w,u`
    :host {
      display: inline-flex;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }
    button {
      display: inline-flex;
      width: 2rem;
      height: 2rem;
      align-items: center;
      justify-content: center;
      padding: 0;
      border: 1px solid var(--border);
      border-radius: var(--radius-full);
      background: var(--background);
      color: var(--foreground);
      box-shadow: var(--shadow-sm);
      cursor: pointer;
      transition: color var(--transition-fast), background-color var(--transition-fast), opacity var(--transition-fast);
    }
    button:hover:not(:disabled) { background: var(--accent); color: var(--accent-foreground); }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
    button:disabled { opacity: .5; cursor: not-allowed; }
    svg { width: 1rem; height: 1rem; }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `];let d=k;r([a({type:Boolean,reflect:!0})],d.prototype,"disabled",2);r([a({type:String,reflect:!0})],d.prototype,"orientation",2);let S=class extends d{get direction(){return"previous"}};S.styles=[...d.styles,u`
    :host { left: calc(var(--carousel-control-offset, 3rem) * -1); }
    :host([orientation='vertical']) {
      top: calc(var(--carousel-control-offset, 3rem) * -1);
      left: 50%;
      transform: translateX(-50%);
    }
  `];S=r([v("shadcn-carousel-previous")],S);let z=class extends d{get direction(){return"next"}};z.styles=[...d.styles,u`
    :host { right: calc(var(--carousel-control-offset, 3rem) * -1); }
    :host([orientation='vertical']) {
      top: auto;
      right: auto;
      bottom: calc(var(--carousel-control-offset, 3rem) * -1);
      left: 50%;
      transform: translateX(-50%);
    }
  `];z=r([v("shadcn-carousel-next")],z);const oe={title:"Components/Carousel",component:"shadcn-carousel",tags:["autodocs"],argTypes:{index:{control:{type:"number",min:0},description:"Active slide index."},orientation:{control:"select",options:["horizontal","vertical"],description:"Scrolling axis."},loop:{control:"boolean",description:"Wrap navigation between the first and last slides."},label:{control:"text",description:"Accessible name for the carousel region."}}},B=(e=5)=>Array.from({length:e},(t,o)=>l`
  <shadcn-carousel-item>
    <div style="display:flex; aspect-ratio:1; align-items:center; justify-content:center; border:1px solid var(--border); border-radius:var(--radius-xl); background:var(--card); color:var(--card-foreground); font-size:var(--font-size-4xl); font-weight:var(--font-semibold);">
      ${o+1}
    </div>
  </shadcn-carousel-item>
`),C=e=>l`
  <div style="width:min(80vw, 20rem); margin:4rem auto;">
    <shadcn-carousel
      .index=${e.index??0}
      orientation=${e.orientation??"horizontal"}
      ?loop=${e.loop}
      label=${e.label??"Featured items"}
    >
      <shadcn-carousel-content>${B()}</shadcn-carousel-content>
      <shadcn-carousel-previous></shadcn-carousel-previous>
      <shadcn-carousel-next></shadcn-carousel-next>
    </shadcn-carousel>
  </div>
`,f={args:{index:0,orientation:"horizontal",loop:!1,label:"Featured items"},render:C},g={args:{index:0,orientation:"horizontal",loop:!0,label:"Looping gallery"},render:C},x={args:{index:0,orientation:"vertical",loop:!1,label:"Vertical gallery"},render:e=>l`<div style="width:20rem; margin:5rem auto;">${C(e)}</div>`},b={render:()=>l`
    <div style="width:min(80vw, 42rem); margin:4rem auto;">
      <shadcn-carousel label="Project gallery" style="--carousel-item-size:50%;">
        <shadcn-carousel-content>${B(6)}</shadcn-carousel-content>
        <shadcn-carousel-previous></shadcn-carousel-previous>
        <shadcn-carousel-next></shadcn-carousel-next>
      </shadcn-carousel>
    </div>
  `},y={render:()=>l`
    <div style="width:20rem; margin:4rem auto;">
      <shadcn-carousel label="Empty gallery">
        <shadcn-carousel-content></shadcn-carousel-content>
        <shadcn-carousel-previous></shadcn-carousel-previous>
        <shadcn-carousel-next></shadcn-carousel-next>
      </shadcn-carousel>
    </div>
  `};var $,T,E;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    index: 0,
    orientation: 'horizontal',
    loop: false,
    label: 'Featured items'
  },
  render
}`,...(E=(T=f.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var A,F,L;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    index: 0,
    orientation: 'horizontal',
    loop: true,
    label: 'Looping gallery'
  },
  render
}`,...(L=(F=g.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,D,I;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    index: 0,
    orientation: 'vertical',
    loop: false,
    label: 'Vertical gallery'
  },
  render: args => html\`<div style="width:20rem; margin:5rem auto;">\${render(args)}</div>\`
}`,...(I=(D=x.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var P,O,N;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width:min(80vw, 42rem); margin:4rem auto;">
      <shadcn-carousel label="Project gallery" style="--carousel-item-size:50%;">
        <shadcn-carousel-content>\${cards(6)}</shadcn-carousel-content>
        <shadcn-carousel-previous></shadcn-carousel-previous>
        <shadcn-carousel-next></shadcn-carousel-next>
      </shadcn-carousel>
    </div>
  \`
}`,...(N=(O=b.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var j,q,K;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width:20rem; margin:4rem auto;">
      <shadcn-carousel label="Empty gallery">
        <shadcn-carousel-content></shadcn-carousel-content>
        <shadcn-carousel-previous></shadcn-carousel-previous>
        <shadcn-carousel-next></shadcn-carousel-next>
      </shadcn-carousel>
    </div>
  \`
}`,...(K=(q=y.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const se=["Default","Looping","Vertical","MultipleItems","Empty"];export{f as Default,y as Empty,g as Looping,b as MultipleItems,x as Vertical,se as __namedExportsOrder,oe as default};
