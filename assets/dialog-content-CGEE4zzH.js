import{i as T,a as x,x as N,E as Fe}from"./iframe-Baten_M5.js";import{t as F}from"./custom-element-C028faeO.js";import{a as qe,c as He,C as $,S as Ae}from"./state-sync-controller-DOYT6Ds6.js";import{t as A,a as ze}from"./index-Bkm5wONK.js";import{n as $e}from"./property-Cny5Lx-H.js";var Ge=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,Oe=(t,e,a,n)=>{for(var s=n>1?void 0:n?Ue(e,a):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(s=(n?r(e,a,s):r(s))||s);return n&&s&&Ge(e,a,s),s};const _=He("shadcn-dialog");let V=class extends x{constructor(){super(),this.open=!1,this.escapeKeyHandler=null,this.previouslyFocusedElement=null,this.handleEscapeKey=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),this.setDialogOpen(!1))},this.contextProvider=new qe(this,_,{open:this.open,setOpen:t=>this.setDialogOpen(t)})}setDialogOpen(t){if(t===this.open)return;if(t){this.previouslyFocusedElement=document.activeElement instanceof HTMLElement?document.activeElement:null,this.open=!0,this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}));return}this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}));const e=this.previouslyFocusedElement;requestAnimationFrame(()=>{e==null||e.focus(),this.previouslyFocusedElement=null})}willUpdate(){this.dataset.state=this.open?"open":"closed"}updated(t){super.updated(t),t.has("open")&&(this.contextProvider.setValue({open:this.open,setOpen:e=>this.setDialogOpen(e)}),this.open?(this.escapeKeyHandler=this.handleEscapeKey,window.addEventListener("keydown",this.escapeKeyHandler)):this.escapeKeyHandler&&(window.removeEventListener("keydown",this.escapeKeyHandler),this.escapeKeyHandler=null))}disconnectedCallback(){super.disconnectedCallback(),this.escapeKeyHandler&&(window.removeEventListener("keydown",this.escapeKeyHandler),this.escapeKeyHandler=null)}render(){return N`<slot></slot>`}};V.styles=[A,T`
      :host {
        display: contents;
      }
    `];Oe([$e({type:Boolean,reflect:!0})],V.prototype,"open",2);V=Oe([F("shadcn-dialog")],V);var Ve=Object.getOwnPropertyDescriptor,M=(t,e,a,n)=>{for(var s=n>1?void 0:n?Ve(e,a):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(s=r(s)||s);return s};let re=class extends x{constructor(){super(),this.handleClick=()=>{var t;(t=this.contextConsumer.value)==null||t.setOpen(!0)},this.contextConsumer=new $(this,_)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick)}render(){return N`<slot></slot>`}};re.styles=[A,T`:host { display: inline-block; }`];re=M([F("shadcn-dialog-trigger")],re);let ne=class extends x{constructor(){super(),this.handleClick=()=>{var t;(t=this.contextConsumer.value)==null||t.setOpen(!1)},this.contextConsumer=new $(this,_)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick)}render(){return N`<slot></slot>`}};ne.styles=[A,T`:host { display: inline-block; }`];ne=M([F("shadcn-dialog-close")],ne);let ie=class extends x{render(){return N`<slot></slot>`}};ie.styles=[A,T`
      :host {
        display: block;
        margin: 0;
        font-size: var(--font-size-lg);
        font-weight: var(--font-semibold);
        line-height: 1.5;
        letter-spacing: -0.025em;
        color: var(--foreground);
      }
    `];ie=M([F("shadcn-dialog-title")],ie);let oe=class extends x{render(){return N`<slot></slot>`}};oe.styles=[A,T`
      :host {
        display: block;
        margin: 0;
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
        line-height: 1.5;
      }
    `];oe=M([F("shadcn-dialog-description")],oe);let se=class extends x{render(){return N`<slot></slot>`}};se.styles=[A,T`
      :host {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
        text-align: center;
      }

      @media (min-width: 640px) {
        :host {
          text-align: left;
        }
      }
    `];se=M([F("shadcn-dialog-header")],se);let le=class extends x{render(){return N`<slot></slot>`}};le.styles=[A,T`
      :host {
        display: flex;
        flex-direction: column-reverse;
        gap: var(--spacing-2);
      }

      @media (min-width: 640px) {
        :host {
          flex-direction: row;
          justify-content: flex-end;
        }
      }
    `];le=M([F("shadcn-dialog-footer")],le);/*!
* tabbable 6.4.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var De=["input:not([inert]):not([inert] *)","select:not([inert]):not([inert] *)","textarea:not([inert]):not([inert] *)","a[href]:not([inert]):not([inert] *)","button:not([inert]):not([inert] *)","[tabindex]:not(slot):not([inert]):not([inert] *)","audio[controls]:not([inert]):not([inert] *)","video[controls]:not([inert]):not([inert] *)",'[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',"details>summary:first-of-type:not([inert]):not([inert] *)","details:not([inert]):not([inert] *)"],W=De.join(","),Ie=typeof Element>"u",L=Ie?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Y=!Ie&&Element.prototype.getRootNode?function(t){var e;return t==null||(e=t.getRootNode)===null||e===void 0?void 0:e.call(t)}:function(t){return t==null?void 0:t.ownerDocument},Z=function(e,a){var n;a===void 0&&(a=!0);var s=e==null||(n=e.getAttribute)===null||n===void 0?void 0:n.call(e,"inert"),l=s===""||s==="true",r=l||a&&e&&(typeof e.closest=="function"?e.closest("[inert]"):Z(e.parentNode));return r},We=function(e){var a,n=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"contenteditable");return n===""||n==="true"},Re=function(e,a,n){if(Z(e))return[];var s=Array.prototype.slice.apply(e.querySelectorAll(W));return a&&L.call(e,W)&&s.unshift(e),s=s.filter(n),s},X=function(e,a,n){for(var s=[],l=Array.from(e);l.length;){var r=l.shift();if(!Z(r,!1))if(r.tagName==="SLOT"){var v=r.assignedElements(),p=v.length?v:r.children,g=X(p,!0,n);n.flatten?s.push.apply(s,g):s.push({scopeParent:r,candidates:g})}else{var w=L.call(r,W);w&&n.filter(r)&&(a||!e.includes(r))&&s.push(r);var k=r.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(r),R=!Z(k,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(r));if(k&&R){var j=X(k===!0?r.children:k.children,!0,n);n.flatten?s.push.apply(s,j):s.push({scopeParent:r,candidates:j})}else l.unshift.apply(l,r.children)}}return s},Pe=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},B=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||We(e))&&!Pe(e)?0:e.tabIndex},Ye=function(e,a){var n=B(e);return n<0&&a&&!Pe(e)?0:n},Ze=function(e,a){return e.tabIndex===a.tabIndex?e.documentOrder-a.documentOrder:e.tabIndex-a.tabIndex},Be=function(e){return e.tagName==="INPUT"},Xe=function(e){return Be(e)&&e.type==="hidden"},Je=function(e){var a=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(n){return n.tagName==="SUMMARY"});return a},Qe=function(e,a){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===a)return e[n]},et=function(e){if(!e.name)return!0;var a=e.form||Y(e),n=function(v){return a.querySelectorAll('input[type="radio"][name="'+v+'"]')},s;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")s=n(window.CSS.escape(e.name));else try{s=n(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var l=Qe(s,e.form);return!l||l===e},tt=function(e){return Be(e)&&e.type==="radio"},at=function(e){return tt(e)&&!et(e)},rt=function(e){var a,n=e&&Y(e),s=(a=n)===null||a===void 0?void 0:a.host,l=!1;if(n&&n!==e){var r,v,p;for(l=!!((r=s)!==null&&r!==void 0&&(v=r.ownerDocument)!==null&&v!==void 0&&v.contains(s)||e!=null&&(p=e.ownerDocument)!==null&&p!==void 0&&p.contains(e));!l&&s;){var g,w,k;n=Y(s),s=(g=n)===null||g===void 0?void 0:g.host,l=!!((w=s)!==null&&w!==void 0&&(k=w.ownerDocument)!==null&&k!==void 0&&k.contains(s))}}return l},Ce=function(e){var a=e.getBoundingClientRect(),n=a.width,s=a.height;return n===0&&s===0},nt=function(e,a){var n=a.displayCheck,s=a.getShadowRoot;if(n==="full-native"&&"checkVisibility"in e){var l=e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});return!l}if(getComputedStyle(e).visibility==="hidden")return!0;var r=L.call(e,"details>summary:first-of-type"),v=r?e.parentElement:e;if(L.call(v,"details:not([open]) *"))return!0;if(!n||n==="full"||n==="full-native"||n==="legacy-full"){if(typeof s=="function"){for(var p=e;e;){var g=e.parentElement,w=Y(e);if(g&&!g.shadowRoot&&s(g)===!0)return Ce(e);e.assignedSlot?e=e.assignedSlot:!g&&w!==e.ownerDocument?e=w.host:e=g}e=p}if(rt(e))return!e.getClientRects().length;if(n!=="legacy-full")return!0}else if(n==="non-zero-area")return Ce(e);return!1},it=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var a=e.parentElement;a;){if(a.tagName==="FIELDSET"&&a.disabled){for(var n=0;n<a.children.length;n++){var s=a.children.item(n);if(s.tagName==="LEGEND")return L.call(a,"fieldset[disabled] *")?!0:!s.contains(e)}return!0}a=a.parentElement}return!1},J=function(e,a){return!(a.disabled||Xe(a)||nt(a,e)||Je(a)||it(a))},ce=function(e,a){return!(at(a)||B(a)<0||!J(e,a))},ot=function(e){var a=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(a)||a>=0)},Le=function(e){var a=[],n=[];return e.forEach(function(s,l){var r=!!s.scopeParent,v=r?s.scopeParent:s,p=Ye(v,r),g=r?Le(s.candidates):v;p===0?r?a.push.apply(a,g):a.push(v):n.push({documentOrder:l,tabIndex:p,item:s,isScope:r,content:g})}),n.sort(Ze).reduce(function(s,l){return l.isScope?s.push.apply(s,l.content):s.push(l.content),s},[]).concat(a)},st=function(e,a){a=a||{};var n;return a.getShadowRoot?n=X([e],a.includeContainer,{filter:ce.bind(null,a),flatten:!1,getShadowRoot:a.getShadowRoot,shadowRootFilter:ot}):n=Re(e,a.includeContainer,ce.bind(null,a)),Le(n)},lt=function(e,a){a=a||{};var n;return a.getShadowRoot?n=X([e],a.includeContainer,{filter:J.bind(null,a),flatten:!0,getShadowRoot:a.getShadowRoot}):n=Re(e,a.includeContainer,J.bind(null,a)),n},K=function(e,a){if(a=a||{},!e)throw new Error("No node provided");return L.call(e,W)===!1?!1:ce(a,e)},ct=De.concat("iframe:not([inert]):not([inert] *)").join(","),ae=function(e,a){if(a=a||{},!e)throw new Error("No node provided");return L.call(e,ct)===!1?!1:J(a,e)};/*!
* focus-trap 7.8.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function ue(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}function ut(t){if(Array.isArray(t))return ue(t)}function Ee(t,e){var a=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=je(t))||e){a&&(t=a);var n=0,s=function(){};return{s,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(p){throw p},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,r=!0,v=!1;return{s:function(){a=a.call(t)},n:function(){var p=a.next();return r=p.done,p},e:function(p){v=!0,l=p},f:function(){try{r||a.return==null||a.return()}finally{if(v)throw l}}}}function dt(t,e,a){return(e=pt(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function ft(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,n)}return a}function xe(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Te(Object(a),!0).forEach(function(n){dt(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Te(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function bt(t){return ut(t)||ft(t)||je(t)||vt()}function ht(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pt(t){var e=ht(t,"string");return typeof e=="symbol"?e:e+""}function je(t,e){if(t){if(typeof t=="string")return ue(t,e);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ue(t,e):void 0}}var O={getActiveTrap:function(e){return(e==null?void 0:e.length)>0?e[e.length-1]:null},activateTrap:function(e,a){var n=O.getActiveTrap(e);a!==n&&O.pauseTrap(e);var s=e.indexOf(a);s===-1||e.splice(s,1),e.push(a)},deactivateTrap:function(e,a){var n=e.indexOf(a);n!==-1&&e.splice(n,1),O.unpauseTrap(e)},pauseTrap:function(e){var a=O.getActiveTrap(e);a==null||a._setPausedState(!0)},unpauseTrap:function(e){var a=O.getActiveTrap(e);a&&!a._isManuallyPaused()&&a._setPausedState(!1)}},yt=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},mt=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},z=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},gt=function(e){return z(e)&&!e.shiftKey},wt=function(e){return z(e)&&e.shiftKey},Ne=function(e){return setTimeout(e,0)},H=function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),s=1;s<a;s++)n[s-1]=arguments[s];return typeof e=="function"?e.apply(void 0,n):e},U=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},kt=[],St=function(e,a){var n=(a==null?void 0:a.document)||document,s=(a==null?void 0:a.trapStack)||kt,l=xe({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:gt,isKeyBackward:wt},a),r={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},v,p=function(i,o,c){return i&&i[o]!==void 0?i[o]:l[c||o]},g=function(i,o){var c=typeof(o==null?void 0:o.composedPath)=="function"?o.composedPath():void 0;return r.containerGroups.findIndex(function(f){var d=f.container,b=f.tabbableNodes;return d.contains(i)||(c==null?void 0:c.includes(d))||b.find(function(u){return u===i})})},w=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=o.hasFallback,f=c===void 0?!1:c,d=o.params,b=d===void 0?[]:d,u=l[i];if(typeof u=="function"&&(u=u.apply(void 0,bt(b))),u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var h=u;if(typeof u=="string"){try{h=n.querySelector(u)}catch(y){throw new Error("`".concat(i,'` appears to be an invalid selector; error="').concat(y.message,'"'))}if(!h&&!f)throw new Error("`".concat(i,"` as selector refers to no known node"))}return h},k=function(){var i=w("initialFocus",{hasFallback:!0});if(i===!1)return!1;if(i===void 0||i&&!ae(i,l.tabbableOptions))if(g(n.activeElement)>=0)i=n.activeElement;else{var o=r.tabbableGroups[0],c=o&&o.firstTabbableNode;i=c||w("fallbackFocus")}else i===null&&(i=w("fallbackFocus"));if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},R=function(){if(r.containerGroups=r.containers.map(function(i){var o=st(i,l.tabbableOptions),c=lt(i,l.tabbableOptions),f=o.length>0?o[0]:void 0,d=o.length>0?o[o.length-1]:void 0,b=c.find(function(y){return K(y)}),u=c.slice().reverse().find(function(y){return K(y)}),h=!!o.find(function(y){return B(y)>0});return{container:i,tabbableNodes:o,focusableNodes:c,posTabIndexesFound:h,firstTabbableNode:f,lastTabbableNode:d,firstDomTabbableNode:b,lastDomTabbableNode:u,nextTabbableNode:function(S){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,C=o.indexOf(S);return C<0?E?c.slice(c.indexOf(S)+1).find(function(P){return K(P)}):c.slice(0,c.indexOf(S)).reverse().find(function(P){return K(P)}):o[C+(E?1:-1)]}}}),r.tabbableGroups=r.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),r.tabbableGroups.length<=0&&!w("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(r.containerGroups.find(function(i){return i.posTabIndexesFound})&&r.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},j=function(i){var o=i.activeElement;if(o)return o.shadowRoot&&o.shadowRoot.activeElement!==null?j(o.shadowRoot):o},D=function(i){if(i!==!1&&i!==j(document)){if(!i||!i.focus){D(k());return}i.focus({preventScroll:!!l.preventScroll}),r.mostRecentlyFocusedNode=i,yt(i)&&i.select()}},he=function(i){var o=w("setReturnFocus",{params:[i]});return o||(o===!1?!1:i)},pe=function(i){var o=i.target,c=i.event,f=i.isBackward,d=f===void 0?!1:f;o=o||U(c),R();var b=null;if(r.tabbableGroups.length>0){var u=g(o,c),h=u>=0?r.containerGroups[u]:void 0;if(u<0)d?b=r.tabbableGroups[r.tabbableGroups.length-1].lastTabbableNode:b=r.tabbableGroups[0].firstTabbableNode;else if(d){var y=r.tabbableGroups.findIndex(function(ee){var te=ee.firstTabbableNode;return o===te});if(y<0&&(h.container===o||ae(o,l.tabbableOptions)&&!K(o,l.tabbableOptions)&&!h.nextTabbableNode(o,!1))&&(y=u),y>=0){var S=y===0?r.tabbableGroups.length-1:y-1,E=r.tabbableGroups[S];b=B(o)>=0?E.lastTabbableNode:E.lastDomTabbableNode}else z(c)||(b=h.nextTabbableNode(o,!1))}else{var C=r.tabbableGroups.findIndex(function(ee){var te=ee.lastTabbableNode;return o===te});if(C<0&&(h.container===o||ae(o,l.tabbableOptions)&&!K(o,l.tabbableOptions)&&!h.nextTabbableNode(o))&&(C=u),C>=0){var P=C===r.tabbableGroups.length-1?0:C+1,I=r.tabbableGroups[P];b=B(o)>=0?I.firstTabbableNode:I.firstDomTabbableNode}else z(c)||(b=h.nextTabbableNode(o))}}else b=w("fallbackFocus");return b},G=function(i){var o=U(i);if(!(g(o,i)>=0)){if(H(l.clickOutsideDeactivates,i)){v.deactivate({returnFocus:l.returnFocusOnDeactivate});return}H(l.allowOutsideClick,i)||i.preventDefault()}},ye=function(i){var o=U(i),c=g(o,i)>=0;if(c||o instanceof Document)c&&(r.mostRecentlyFocusedNode=o);else{i.stopImmediatePropagation();var f,d=!0;if(r.mostRecentlyFocusedNode)if(B(r.mostRecentlyFocusedNode)>0){var b=g(r.mostRecentlyFocusedNode),u=r.containerGroups[b].tabbableNodes;if(u.length>0){var h=u.findIndex(function(y){return y===r.mostRecentlyFocusedNode});h>=0&&(l.isKeyForward(r.recentNavEvent)?h+1<u.length&&(f=u[h+1],d=!1):h-1>=0&&(f=u[h-1],d=!1))}}else r.containerGroups.some(function(y){return y.tabbableNodes.some(function(S){return B(S)>0})})||(d=!1);else d=!1;d&&(f=pe({target:r.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(r.recentNavEvent)})),D(f||r.mostRecentlyFocusedNode||k())}r.recentNavEvent=void 0},Ke=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;r.recentNavEvent=i;var c=pe({event:i,isBackward:o});c&&(z(i)&&i.preventDefault(),D(c))},me=function(i){(l.isKeyForward(i)||l.isKeyBackward(i))&&Ke(i,l.isKeyBackward(i))},ge=function(i){mt(i)&&H(l.escapeDeactivates,i)!==!1&&(i.preventDefault(),v.deactivate())},we=function(i){var o=U(i);g(o,i)>=0||H(l.clickOutsideDeactivates,i)||H(l.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},ke=function(){if(r.active)return O.activateTrap(s,v),r.delayInitialFocusTimer=l.delayInitialFocus?Ne(function(){D(k())}):D(k()),n.addEventListener("focusin",ye,!0),n.addEventListener("mousedown",G,{capture:!0,passive:!1}),n.addEventListener("touchstart",G,{capture:!0,passive:!1}),n.addEventListener("click",we,{capture:!0,passive:!1}),n.addEventListener("keydown",me,{capture:!0,passive:!1}),n.addEventListener("keydown",ge),v},_e=function(i){r.active&&!r.paused&&v._setSubtreeIsolation(!1),r.adjacentElements.clear(),r.alreadySilent.clear();var o=new Set,c=new Set,f=Ee(i),d;try{for(f.s();!(d=f.n()).done;){var b=d.value;o.add(b);for(var u=typeof ShadowRoot<"u"&&b.getRootNode()instanceof ShadowRoot,h=b;h;){o.add(h);var y=h.parentElement,S=[];y?S=y.children:!y&&u&&(S=h.getRootNode().children,y=h.getRootNode().host,u=typeof ShadowRoot<"u"&&y.getRootNode()instanceof ShadowRoot);var E=Ee(S),C;try{for(E.s();!(C=E.n()).done;){var P=C.value;c.add(P)}}catch(I){E.e(I)}finally{E.f()}h=y}}}catch(I){f.e(I)}finally{f.f()}o.forEach(function(I){c.delete(I)}),r.adjacentElements=c},Se=function(){if(r.active)return n.removeEventListener("focusin",ye,!0),n.removeEventListener("mousedown",G,!0),n.removeEventListener("touchstart",G,!0),n.removeEventListener("click",we,!0),n.removeEventListener("keydown",me,!0),n.removeEventListener("keydown",ge),v},Me=function(i){var o=i.some(function(c){var f=Array.from(c.removedNodes);return f.some(function(d){return d===r.mostRecentlyFocusedNode})});o&&D(k())},Q=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Me):void 0,q=function(){Q&&(Q.disconnect(),r.active&&!r.paused&&r.containers.map(function(i){Q.observe(i,{subtree:!0,childList:!0})}))};return v={get active(){return r.active},get paused(){return r.paused},activate:function(i){if(r.active)return this;var o=p(i,"onActivate"),c=p(i,"onPostActivate"),f=p(i,"checkCanFocusTrap"),d=O.getActiveTrap(s),b=!1;if(d&&!d.paused){var u;(u=d._setSubtreeIsolation)===null||u===void 0||u.call(d,!1),b=!0}try{f||R(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=j(n),o==null||o();var h=function(){f&&R(),ke(),q(),l.isolateSubtrees&&v._setSubtreeIsolation(!0),c==null||c()};if(f)return f(r.containers.concat()).then(h,h),this;h()}catch(S){if(d===O.getActiveTrap(s)&&b){var y;(y=d._setSubtreeIsolation)===null||y===void 0||y.call(d,!0)}throw S}return this},deactivate:function(i){if(!r.active)return this;var o=xe({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},i);clearTimeout(r.delayInitialFocusTimer),r.delayInitialFocusTimer=void 0,r.paused||v._setSubtreeIsolation(!1),r.alreadySilent.clear(),Se(),r.active=!1,r.paused=!1,q(),O.deactivateTrap(s,v);var c=p(o,"onDeactivate"),f=p(o,"onPostDeactivate"),d=p(o,"checkCanReturnFocus"),b=p(o,"returnFocus","returnFocusOnDeactivate");c==null||c();var u=function(){Ne(function(){b&&D(he(r.nodeFocusedBeforeActivation)),f==null||f()})};return b&&d?(d(he(r.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(i){return r.active?(r.manuallyPaused=!0,this._setPausedState(!0,i)):this},unpause:function(i){return r.active?(r.manuallyPaused=!1,s[s.length-1]!==this?this:this._setPausedState(!1,i)):this},updateContainerElements:function(i){var o=[].concat(i).filter(Boolean);return r.containers=o.map(function(c){return typeof c=="string"?n.querySelector(c):c}),l.isolateSubtrees&&_e(r.containers),r.active&&(R(),l.isolateSubtrees&&!r.paused&&v._setSubtreeIsolation(!0)),q(),this}},Object.defineProperties(v,{_isManuallyPaused:{value:function(){return r.manuallyPaused}},_setPausedState:{value:function(i,o){if(r.paused===i)return this;if(r.paused=i,i){var c=p(o,"onPause"),f=p(o,"onPostPause");c==null||c(),Se(),q(),v._setSubtreeIsolation(!1),f==null||f()}else{var d=p(o,"onUnpause"),b=p(o,"onPostUnpause");d==null||d(),v._setSubtreeIsolation(!0),R(),ke(),q(),b==null||b()}return this}},_setSubtreeIsolation:{value:function(i){l.isolateSubtrees&&r.adjacentElements.forEach(function(o){var c;if(i)switch(l.isolateSubtrees){case"aria-hidden":(o.ariaHidden==="true"||((c=o.getAttribute("aria-hidden"))===null||c===void 0?void 0:c.toLowerCase())==="true")&&r.alreadySilent.add(o),o.setAttribute("aria-hidden","true");break;default:(o.inert||o.hasAttribute("inert"))&&r.alreadySilent.add(o),o.setAttribute("inert",!0);break}else if(!r.alreadySilent.has(o))switch(l.isolateSubtrees){case"aria-hidden":o.removeAttribute("aria-hidden");break;default:o.removeAttribute("inert");break}})}}}),v.updateContainerElements(e),v};class Ct{constructor(e){this.focusTrap=null,this.host=e,e.addController(this)}hostConnected(){}hostDisconnected(){this.deactivate()}activate(){this.focusTrap&&this.deactivate();const e=this.host;e.hasAttribute("tabindex")||(e.tabIndex=-1),this.focusTrap=St(e,{fallbackFocus:e,escapeDeactivates:!1,returnFocusOnDeactivate:!1,tabbableOptions:{getShadowRoot:a=>a.shadowRoot??void 0}}),this.focusTrap.activate()}deactivate(){this.focusTrap&&(this.focusTrap.deactivate(),this.focusTrap=null)}}var Et=Object.getOwnPropertyDescriptor,be=(t,e,a,n)=>{for(var s=n>1?void 0:n?Et(e,a):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(s=r(s)||s);return s};let de=class extends x{constructor(){super(),this.contextConsumer=new $(this,_)}render(){var t;return(t=this.contextConsumer.value)!=null&&t.open?N`<slot></slot>`:Fe}};de.styles=[A,T`
      :host {
        position: fixed;
        inset: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
    `];de=be([F("shadcn-dialog-portal")],de);let fe=class extends x{constructor(){super(),this.handleOverlayClick=t=>{var e;t.target===this&&((e=this.contextConsumer.value)==null||e.setOpen(!1))},this.contextConsumer=new $(this,_),this._stateSync=new Ae(this,()=>this.contextConsumer.value),this._stateSync}willUpdate(){const t=this.contextConsumer.value;t&&(this.dataset.state=t.open?"open":"closed")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleOverlayClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleOverlayClick)}render(){return N`<slot></slot>`}};fe.styles=[A,T`
      :host {
        position: fixed;
        inset: 0;
        z-index: 49;
        background-color: oklch(0 0 0 / 80%);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        transition: opacity var(--transition-base);
        pointer-events: none;
      }

      :host([data-state='open']) {
        opacity: 1;
        pointer-events: auto;
      }

      :host([data-state='closed']) {
        opacity: 0;
        pointer-events: none;
      }
    `];fe=be([F("shadcn-dialog-overlay")],fe);let ve=class extends x{constructor(){super(),this.dialogContainer=null,this.originalBodyOverflow=null,this.backdropElement=null,this.handleBackdropClick=t=>{var e;t.target===this.backdropElement&&((e=this.contextConsumer.value)==null||e.setOpen(!1))},this.contextConsumer=new $(this,_),this._stateSync=new Ae(this,()=>this.contextConsumer.value),this._stateSync,this.focusTrap=new Ct(this)}ensureElementId(t,e){return t.id||(t.id=`${e}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`),t.id}linkAriaAttributes(){if(!this.dialogContainer)return;const t=this.querySelector("shadcn-dialog-title"),e=this.querySelector("shadcn-dialog-description");t?this.dialogContainer.setAttribute("aria-labelledby",this.ensureElementId(t,"shadcn-dialog-title")):this.dialogContainer.removeAttribute("aria-labelledby"),e?this.dialogContainer.setAttribute("aria-describedby",this.ensureElementId(e,"shadcn-dialog-description")):this.dialogContainer.removeAttribute("aria-describedby")}firstUpdated(){var t,e;this.dialogContainer=(t=this.shadowRoot)==null?void 0:t.querySelector('[role="dialog"]'),this.backdropElement=(e=this.shadowRoot)==null?void 0:e.querySelector(".backdrop"),this.linkAriaAttributes()}willUpdate(){const t=this.contextConsumer.value;t&&(this.dataset.state=t.open?"open":"closed")}updated(){var e,a;const t=this.contextConsumer.value;this.dialogContainer=(e=this.shadowRoot)==null?void 0:e.querySelector('[role="dialog"]'),this.backdropElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".backdrop"),t!=null&&t.open&&this.linkAriaAttributes(),t!=null&&t.open?(this.lockBodyScroll(),requestAnimationFrame(()=>{if(this.dialogContainer&&this.isConnected)try{this.focusTrap.activate()}catch(n){console.debug("Focus trap activation deferred:",n)}})):(this.unlockBodyScroll(),this.focusTrap.deactivate())}disconnectedCallback(){super.disconnectedCallback(),this.unlockBodyScroll()}lockBodyScroll(){typeof document<"u"&&this.originalBodyOverflow===null&&(this.originalBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden")}unlockBodyScroll(){typeof document<"u"&&this.originalBodyOverflow!==null&&(document.body.style.overflow=this.originalBodyOverflow,this.originalBodyOverflow=null)}render(){const t=this.contextConsumer.value;return t!=null&&t.open?N`
      <div class="backdrop" @click=${this.handleBackdropClick}></div>
      <div class="dialog-container">
        <div role="dialog" aria-modal="true">
          <slot></slot>
        </div>
      </div>
    `:Fe}};ve.styles=[A,ze,T`
      :host {
        position: fixed;
        inset: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 49;
        background-color: oklch(0 0 0 / 80%);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        transition: opacity var(--transition-base);
        pointer-events: auto;
        animation: shadcn-fade-in var(--transition-base);
      }

      :host([data-state='open']) .backdrop { opacity: 1; }
      :host([data-state='closed']) .backdrop { opacity: 0; }

      .dialog-container {
        position: relative;
        z-index: 50;
        display: flex;
        width: 100%;
        max-width: 32rem;
        flex-direction: column;
        gap: var(--spacing-4);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background-color: var(--background);
        padding: var(--spacing-6);
        color: var(--foreground);
        box-shadow: 0 10px 15px -3px oklch(0 0 0 / 0.1), 0 4px 6px -4px oklch(0 0 0 / 0.1);
        transition: opacity var(--transition-base), transform var(--transition-base);
        transform-origin: center;
        pointer-events: auto;
        animation: shadcn-zoom-in var(--transition-base);
      }

      :host([data-state='open']) .dialog-container { opacity: 1; transform: scale(1); }
      :host([data-state='closed']) .dialog-container { opacity: 0; transform: scale(0.95); }

      @media (prefers-reduced-motion: reduce) {
        .backdrop, .dialog-container { animation: none; transition-duration: 0ms; }
      }

      @media (max-width: 640px) {
        .dialog-container {
          margin: var(--spacing-4);
          max-width: calc(100% - var(--spacing-8));
        }
      }

      [role='dialog'] {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-4);
        width: 100%;
      }
    `];ve=be([F("shadcn-dialog-content")],ve);export{V as D,Ct as F,re as a,ie as b,oe as c,_ as d,se as e,le as f,ne as g};
