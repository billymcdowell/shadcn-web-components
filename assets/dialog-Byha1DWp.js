import{i as x,a as N,x as F,E as Ne}from"./iframe-B5y9qznB.js";import{t as A}from"./custom-element-C028faeO.js";import{n as _e}from"./property-DwCo9F1Y.js";import{a as Me,c as qe,C as z,S as Fe}from"./state-sync-controller-DOYT6Ds6.js";import{t as O}from"./index-BBGFRwet.js";/*!
* tabbable 6.4.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Ae=["input:not([inert]):not([inert] *)","select:not([inert]):not([inert] *)","textarea:not([inert]):not([inert] *)","a[href]:not([inert]):not([inert] *)","button:not([inert]):not([inert] *)","[tabindex]:not(slot):not([inert]):not([inert] *)","audio[controls]:not([inert]):not([inert] *)","video[controls]:not([inert]):not([inert] *)",'[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',"details>summary:first-of-type:not([inert]):not([inert] *)","details:not([inert]):not([inert] *)"],$=Ae.join(","),Oe=typeof Element>"u",j=Oe?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,W=!Oe&&Element.prototype.getRootNode?function(a){var e;return a==null||(e=a.getRootNode)===null||e===void 0?void 0:e.call(a)}:function(a){return a==null?void 0:a.ownerDocument},Y=function(e,t){var n;t===void 0&&(t=!0);var s=e==null||(n=e.getAttribute)===null||n===void 0?void 0:n.call(e,"inert"),l=s===""||s==="true",r=l||t&&e&&(typeof e.closest=="function"?e.closest("[inert]"):Y(e.parentNode));return r},He=function(e){var t,n=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return n===""||n==="true"},De=function(e,t,n){if(Y(e))return[];var s=Array.prototype.slice.apply(e.querySelectorAll($));return t&&j.call(e,$)&&s.unshift(e),s=s.filter(n),s},Z=function(e,t,n){for(var s=[],l=Array.from(e);l.length;){var r=l.shift();if(!Y(r,!1))if(r.tagName==="SLOT"){var v=r.assignedElements(),p=v.length?v:r.children,g=Z(p,!0,n);n.flatten?s.push.apply(s,g):s.push({scopeParent:r,candidates:g})}else{var w=j.call(r,$);w&&n.filter(r)&&(t||!e.includes(r))&&s.push(r);var k=r.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(r),P=!Y(k,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(r));if(k&&P){var K=Z(k===!0?r.children:k.children,!0,n);n.flatten?s.push.apply(s,K):s.push({scopeParent:r,candidates:K})}else l.unshift.apply(l,r.children)}}return s},Ie=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},B=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||He(e))&&!Ie(e)?0:e.tabIndex},Ve=function(e,t){var n=B(e);return n<0&&t&&!Ie(e)?0:n},ze=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Re=function(e){return e.tagName==="INPUT"},Ge=function(e){return Re(e)&&e.type==="hidden"},Ue=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(n){return n.tagName==="SUMMARY"});return t},$e=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},We=function(e){if(!e.name)return!0;var t=e.form||W(e),n=function(v){return t.querySelectorAll('input[type="radio"][name="'+v+'"]')},s;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")s=n(window.CSS.escape(e.name));else try{s=n(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var l=$e(s,e.form);return!l||l===e},Ye=function(e){return Re(e)&&e.type==="radio"},Ze=function(e){return Ye(e)&&!We(e)},Xe=function(e){var t,n=e&&W(e),s=(t=n)===null||t===void 0?void 0:t.host,l=!1;if(n&&n!==e){var r,v,p;for(l=!!((r=s)!==null&&r!==void 0&&(v=r.ownerDocument)!==null&&v!==void 0&&v.contains(s)||e!=null&&(p=e.ownerDocument)!==null&&p!==void 0&&p.contains(e));!l&&s;){var g,w,k;n=W(s),s=(g=n)===null||g===void 0?void 0:g.host,l=!!((w=s)!==null&&w!==void 0&&(k=w.ownerDocument)!==null&&k!==void 0&&k.contains(s))}}return l},Se=function(e){var t=e.getBoundingClientRect(),n=t.width,s=t.height;return n===0&&s===0},Je=function(e,t){var n=t.displayCheck,s=t.getShadowRoot;if(n==="full-native"&&"checkVisibility"in e){var l=e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});return!l}if(getComputedStyle(e).visibility==="hidden")return!0;var r=j.call(e,"details>summary:first-of-type"),v=r?e.parentElement:e;if(j.call(v,"details:not([open]) *"))return!0;if(!n||n==="full"||n==="full-native"||n==="legacy-full"){if(typeof s=="function"){for(var p=e;e;){var g=e.parentElement,w=W(e);if(g&&!g.shadowRoot&&s(g)===!0)return Se(e);e.assignedSlot?e=e.assignedSlot:!g&&w!==e.ownerDocument?e=w.host:e=g}e=p}if(Xe(e))return!e.getClientRects().length;if(n!=="legacy-full")return!0}else if(n==="non-zero-area")return Se(e);return!1},Qe=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var n=0;n<t.children.length;n++){var s=t.children.item(n);if(s.tagName==="LEGEND")return j.call(t,"fieldset[disabled] *")?!0:!s.contains(e)}return!0}t=t.parentElement}return!1},X=function(e,t){return!(t.disabled||Ge(t)||Je(t,e)||Ue(t)||Qe(t))},re=function(e,t){return!(Ze(t)||B(t)<0||!X(e,t))},et=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Pe=function(e){var t=[],n=[];return e.forEach(function(s,l){var r=!!s.scopeParent,v=r?s.scopeParent:s,p=Ve(v,r),g=r?Pe(s.candidates):v;p===0?r?t.push.apply(t,g):t.push(v):n.push({documentOrder:l,tabIndex:p,item:s,isScope:r,content:g})}),n.sort(ze).reduce(function(s,l){return l.isScope?s.push.apply(s,l.content):s.push(l.content),s},[]).concat(t)},tt=function(e,t){t=t||{};var n;return t.getShadowRoot?n=Z([e],t.includeContainer,{filter:re.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:et}):n=De(e,t.includeContainer,re.bind(null,t)),Pe(n)},at=function(e,t){t=t||{};var n;return t.getShadowRoot?n=Z([e],t.includeContainer,{filter:X.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):n=De(e,t.includeContainer,X.bind(null,t)),n},_=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return j.call(e,$)===!1?!1:re(t,e)},rt=Ae.concat("iframe:not([inert]):not([inert] *)").join(","),ae=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return j.call(e,rt)===!1?!1:X(t,e)};/*!
* focus-trap 7.8.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function ne(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,n=Array(e);t<e;t++)n[t]=a[t];return n}function nt(a){if(Array.isArray(a))return ne(a)}function Ee(a,e){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=Le(a))||e){t&&(a=t);var n=0,s=function(){};return{s,n:function(){return n>=a.length?{done:!0}:{done:!1,value:a[n++]}},e:function(p){throw p},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,r=!0,v=!1;return{s:function(){t=t.call(a)},n:function(){var p=t.next();return r=p.done,p},e:function(p){v=!0,l=p},f:function(){try{r||t.return==null||t.return()}finally{if(v)throw l}}}}function it(a,e,t){return(e=ut(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function ot(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function st(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable})),t.push.apply(t,n)}return t}function Ce(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Te(Object(t),!0).forEach(function(n){it(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Te(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function lt(a){return nt(a)||ot(a)||Le(a)||st()}function ct(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var n=t.call(a,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function ut(a){var e=ct(a,"string");return typeof e=="symbol"?e:e+""}function Le(a,e){if(a){if(typeof a=="string")return ne(a,e);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ne(a,e):void 0}}var D={getActiveTrap:function(e){return(e==null?void 0:e.length)>0?e[e.length-1]:null},activateTrap:function(e,t){var n=D.getActiveTrap(e);t!==n&&D.pauseTrap(e);var s=e.indexOf(t);s===-1||e.splice(s,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),D.unpauseTrap(e)},pauseTrap:function(e){var t=D.getActiveTrap(e);t==null||t._setPausedState(!0)},unpauseTrap:function(e){var t=D.getActiveTrap(e);t&&!t._isManuallyPaused()&&t._setPausedState(!1)}},dt=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},ft=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},V=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},vt=function(e){return V(e)&&!e.shiftKey},bt=function(e){return V(e)&&e.shiftKey},xe=function(e){return setTimeout(e,0)},H=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return typeof e=="function"?e.apply(void 0,n):e},U=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},ht=[],pt=function(e,t){var n=(t==null?void 0:t.document)||document,s=(t==null?void 0:t.trapStack)||ht,l=Ce({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:vt,isKeyBackward:bt},t),r={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},v,p=function(i,o,c){return i&&i[o]!==void 0?i[o]:l[c||o]},g=function(i,o){var c=typeof(o==null?void 0:o.composedPath)=="function"?o.composedPath():void 0;return r.containerGroups.findIndex(function(f){var d=f.container,b=f.tabbableNodes;return d.contains(i)||(c==null?void 0:c.includes(d))||b.find(function(u){return u===i})})},w=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=o.hasFallback,f=c===void 0?!1:c,d=o.params,b=d===void 0?[]:d,u=l[i];if(typeof u=="function"&&(u=u.apply(void 0,lt(b))),u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var h=u;if(typeof u=="string"){try{h=n.querySelector(u)}catch(y){throw new Error("`".concat(i,'` appears to be an invalid selector; error="').concat(y.message,'"'))}if(!h&&!f)throw new Error("`".concat(i,"` as selector refers to no known node"))}return h},k=function(){var i=w("initialFocus",{hasFallback:!0});if(i===!1)return!1;if(i===void 0||i&&!ae(i,l.tabbableOptions))if(g(n.activeElement)>=0)i=n.activeElement;else{var o=r.tabbableGroups[0],c=o&&o.firstTabbableNode;i=c||w("fallbackFocus")}else i===null&&(i=w("fallbackFocus"));if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},P=function(){if(r.containerGroups=r.containers.map(function(i){var o=tt(i,l.tabbableOptions),c=at(i,l.tabbableOptions),f=o.length>0?o[0]:void 0,d=o.length>0?o[o.length-1]:void 0,b=c.find(function(y){return _(y)}),u=c.slice().reverse().find(function(y){return _(y)}),h=!!o.find(function(y){return B(y)>0});return{container:i,tabbableNodes:o,focusableNodes:c,posTabIndexesFound:h,firstTabbableNode:f,lastTabbableNode:d,firstDomTabbableNode:b,lastDomTabbableNode:u,nextTabbableNode:function(S){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,E=o.indexOf(S);return E<0?C?c.slice(c.indexOf(S)+1).find(function(L){return _(L)}):c.slice(0,c.indexOf(S)).reverse().find(function(L){return _(L)}):o[E+(C?1:-1)]}}}),r.tabbableGroups=r.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),r.tabbableGroups.length<=0&&!w("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(r.containerGroups.find(function(i){return i.posTabIndexesFound})&&r.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},K=function(i){var o=i.activeElement;if(o)return o.shadowRoot&&o.shadowRoot.activeElement!==null?K(o.shadowRoot):o},I=function(i){if(i!==!1&&i!==K(document)){if(!i||!i.focus){I(k());return}i.focus({preventScroll:!!l.preventScroll}),r.mostRecentlyFocusedNode=i,dt(i)&&i.select()}},be=function(i){var o=w("setReturnFocus",{params:[i]});return o||(o===!1?!1:i)},he=function(i){var o=i.target,c=i.event,f=i.isBackward,d=f===void 0?!1:f;o=o||U(c),P();var b=null;if(r.tabbableGroups.length>0){var u=g(o,c),h=u>=0?r.containerGroups[u]:void 0;if(u<0)d?b=r.tabbableGroups[r.tabbableGroups.length-1].lastTabbableNode:b=r.tabbableGroups[0].firstTabbableNode;else if(d){var y=r.tabbableGroups.findIndex(function(ee){var te=ee.firstTabbableNode;return o===te});if(y<0&&(h.container===o||ae(o,l.tabbableOptions)&&!_(o,l.tabbableOptions)&&!h.nextTabbableNode(o,!1))&&(y=u),y>=0){var S=y===0?r.tabbableGroups.length-1:y-1,C=r.tabbableGroups[S];b=B(o)>=0?C.lastTabbableNode:C.lastDomTabbableNode}else V(c)||(b=h.nextTabbableNode(o,!1))}else{var E=r.tabbableGroups.findIndex(function(ee){var te=ee.lastTabbableNode;return o===te});if(E<0&&(h.container===o||ae(o,l.tabbableOptions)&&!_(o,l.tabbableOptions)&&!h.nextTabbableNode(o))&&(E=u),E>=0){var L=E===r.tabbableGroups.length-1?0:E+1,R=r.tabbableGroups[L];b=B(o)>=0?R.firstTabbableNode:R.firstDomTabbableNode}else V(c)||(b=h.nextTabbableNode(o))}}else b=w("fallbackFocus");return b},G=function(i){var o=U(i);if(!(g(o,i)>=0)){if(H(l.clickOutsideDeactivates,i)){v.deactivate({returnFocus:l.returnFocusOnDeactivate});return}H(l.allowOutsideClick,i)||i.preventDefault()}},pe=function(i){var o=U(i),c=g(o,i)>=0;if(c||o instanceof Document)c&&(r.mostRecentlyFocusedNode=o);else{i.stopImmediatePropagation();var f,d=!0;if(r.mostRecentlyFocusedNode)if(B(r.mostRecentlyFocusedNode)>0){var b=g(r.mostRecentlyFocusedNode),u=r.containerGroups[b].tabbableNodes;if(u.length>0){var h=u.findIndex(function(y){return y===r.mostRecentlyFocusedNode});h>=0&&(l.isKeyForward(r.recentNavEvent)?h+1<u.length&&(f=u[h+1],d=!1):h-1>=0&&(f=u[h-1],d=!1))}}else r.containerGroups.some(function(y){return y.tabbableNodes.some(function(S){return B(S)>0})})||(d=!1);else d=!1;d&&(f=he({target:r.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(r.recentNavEvent)})),I(f||r.mostRecentlyFocusedNode||k())}r.recentNavEvent=void 0},Be=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;r.recentNavEvent=i;var c=he({event:i,isBackward:o});c&&(V(i)&&i.preventDefault(),I(c))},ye=function(i){(l.isKeyForward(i)||l.isKeyBackward(i))&&Be(i,l.isKeyBackward(i))},me=function(i){ft(i)&&H(l.escapeDeactivates,i)!==!1&&(i.preventDefault(),v.deactivate())},ge=function(i){var o=U(i);g(o,i)>=0||H(l.clickOutsideDeactivates,i)||H(l.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},we=function(){if(r.active)return D.activateTrap(s,v),r.delayInitialFocusTimer=l.delayInitialFocus?xe(function(){I(k())}):I(k()),n.addEventListener("focusin",pe,!0),n.addEventListener("mousedown",G,{capture:!0,passive:!1}),n.addEventListener("touchstart",G,{capture:!0,passive:!1}),n.addEventListener("click",ge,{capture:!0,passive:!1}),n.addEventListener("keydown",ye,{capture:!0,passive:!1}),n.addEventListener("keydown",me),v},je=function(i){r.active&&!r.paused&&v._setSubtreeIsolation(!1),r.adjacentElements.clear(),r.alreadySilent.clear();var o=new Set,c=new Set,f=Ee(i),d;try{for(f.s();!(d=f.n()).done;){var b=d.value;o.add(b);for(var u=typeof ShadowRoot<"u"&&b.getRootNode()instanceof ShadowRoot,h=b;h;){o.add(h);var y=h.parentElement,S=[];y?S=y.children:!y&&u&&(S=h.getRootNode().children,y=h.getRootNode().host,u=typeof ShadowRoot<"u"&&y.getRootNode()instanceof ShadowRoot);var C=Ee(S),E;try{for(C.s();!(E=C.n()).done;){var L=E.value;c.add(L)}}catch(R){C.e(R)}finally{C.f()}h=y}}}catch(R){f.e(R)}finally{f.f()}o.forEach(function(R){c.delete(R)}),r.adjacentElements=c},ke=function(){if(r.active)return n.removeEventListener("focusin",pe,!0),n.removeEventListener("mousedown",G,!0),n.removeEventListener("touchstart",G,!0),n.removeEventListener("click",ge,!0),n.removeEventListener("keydown",ye,!0),n.removeEventListener("keydown",me),v},Ke=function(i){var o=i.some(function(c){var f=Array.from(c.removedNodes);return f.some(function(d){return d===r.mostRecentlyFocusedNode})});o&&I(k())},Q=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Ke):void 0,q=function(){Q&&(Q.disconnect(),r.active&&!r.paused&&r.containers.map(function(i){Q.observe(i,{subtree:!0,childList:!0})}))};return v={get active(){return r.active},get paused(){return r.paused},activate:function(i){if(r.active)return this;var o=p(i,"onActivate"),c=p(i,"onPostActivate"),f=p(i,"checkCanFocusTrap"),d=D.getActiveTrap(s),b=!1;if(d&&!d.paused){var u;(u=d._setSubtreeIsolation)===null||u===void 0||u.call(d,!1),b=!0}try{f||P(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=K(n),o==null||o();var h=function(){f&&P(),we(),q(),l.isolateSubtrees&&v._setSubtreeIsolation(!0),c==null||c()};if(f)return f(r.containers.concat()).then(h,h),this;h()}catch(S){if(d===D.getActiveTrap(s)&&b){var y;(y=d._setSubtreeIsolation)===null||y===void 0||y.call(d,!0)}throw S}return this},deactivate:function(i){if(!r.active)return this;var o=Ce({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},i);clearTimeout(r.delayInitialFocusTimer),r.delayInitialFocusTimer=void 0,r.paused||v._setSubtreeIsolation(!1),r.alreadySilent.clear(),ke(),r.active=!1,r.paused=!1,q(),D.deactivateTrap(s,v);var c=p(o,"onDeactivate"),f=p(o,"onPostDeactivate"),d=p(o,"checkCanReturnFocus"),b=p(o,"returnFocus","returnFocusOnDeactivate");c==null||c();var u=function(){xe(function(){b&&I(be(r.nodeFocusedBeforeActivation)),f==null||f()})};return b&&d?(d(be(r.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(i){return r.active?(r.manuallyPaused=!0,this._setPausedState(!0,i)):this},unpause:function(i){return r.active?(r.manuallyPaused=!1,s[s.length-1]!==this?this:this._setPausedState(!1,i)):this},updateContainerElements:function(i){var o=[].concat(i).filter(Boolean);return r.containers=o.map(function(c){return typeof c=="string"?n.querySelector(c):c}),l.isolateSubtrees&&je(r.containers),r.active&&(P(),l.isolateSubtrees&&!r.paused&&v._setSubtreeIsolation(!0)),q(),this}},Object.defineProperties(v,{_isManuallyPaused:{value:function(){return r.manuallyPaused}},_setPausedState:{value:function(i,o){if(r.paused===i)return this;if(r.paused=i,i){var c=p(o,"onPause"),f=p(o,"onPostPause");c==null||c(),ke(),q(),v._setSubtreeIsolation(!1),f==null||f()}else{var d=p(o,"onUnpause"),b=p(o,"onPostUnpause");d==null||d(),v._setSubtreeIsolation(!0),P(),we(),q(),b==null||b()}return this}},_setSubtreeIsolation:{value:function(i){l.isolateSubtrees&&r.adjacentElements.forEach(function(o){var c;if(i)switch(l.isolateSubtrees){case"aria-hidden":(o.ariaHidden==="true"||((c=o.getAttribute("aria-hidden"))===null||c===void 0?void 0:c.toLowerCase())==="true")&&r.alreadySilent.add(o),o.setAttribute("aria-hidden","true");break;default:(o.inert||o.hasAttribute("inert"))&&r.alreadySilent.add(o),o.setAttribute("inert",!0);break}else if(!r.alreadySilent.has(o))switch(l.isolateSubtrees){case"aria-hidden":o.removeAttribute("aria-hidden");break;default:o.removeAttribute("inert");break}})}}}),v.updateContainerElements(e),v};class yt{constructor(e){this.focusTrap=null,this.host=e,e.addController(this)}hostConnected(){}hostDisconnected(){this.deactivate()}activate(){this.focusTrap&&this.deactivate();const e=this.host;e.hasAttribute("tabindex")||(e.tabIndex=-1),this.focusTrap=pt(e,{fallbackFocus:e,escapeDeactivates:!1,returnFocusOnDeactivate:!1,tabbableOptions:{getShadowRoot:t=>t.shadowRoot??void 0}}),this.focusTrap.activate()}deactivate(){this.focusTrap&&(this.focusTrap.deactivate(),this.focusTrap=null)}}var mt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,T=(a,e,t,n)=>{for(var s=n>1?void 0:n?gt(e,t):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(s=(n?r(e,t,s):r(s))||s);return n&&s&&mt(e,t,s),s};const M=qe("shadcn-dialog");let J=class extends N{constructor(){super(),this.open=!1,this.escapeKeyHandler=null,this.previouslyFocusedElement=null,this.handleEscapeKey=a=>{a.key==="Escape"&&this.open&&(a.preventDefault(),this.setDialogOpen(!1))},this.contextProvider=new Me(this,M,{open:this.open,setOpen:a=>this.setDialogOpen(a)})}setDialogOpen(a){if(a===this.open)return;if(a){this.previouslyFocusedElement=document.activeElement instanceof HTMLElement?document.activeElement:null,this.open=!0,this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}));return}this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}));const e=this.previouslyFocusedElement;requestAnimationFrame(()=>{e==null||e.focus(),this.previouslyFocusedElement=null})}willUpdate(){this.dataset.state=this.open?"open":"closed"}updated(a){super.updated(a),a.has("open")&&(this.contextProvider.setValue({open:this.open,setOpen:e=>this.setDialogOpen(e)}),this.open?(this.escapeKeyHandler=this.handleEscapeKey,window.addEventListener("keydown",this.escapeKeyHandler)):this.escapeKeyHandler&&(window.removeEventListener("keydown",this.escapeKeyHandler),this.escapeKeyHandler=null))}disconnectedCallback(){super.disconnectedCallback(),this.escapeKeyHandler&&(window.removeEventListener("keydown",this.escapeKeyHandler),this.escapeKeyHandler=null)}render(){return F`<slot></slot>`}};J.styles=[O,x`
      :host {
        display: contents;
      }
    `];T([_e({type:Boolean,reflect:!0})],J.prototype,"open",2);J=T([A("shadcn-dialog")],J);let ie=class extends N{constructor(){super(),this.handleClick=()=>{const a=this.contextConsumer.value;a&&a.setOpen(!0)},this.contextConsumer=new z(this,M)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick)}render(){return F`<slot></slot>`}};ie.styles=[O,x`
      :host {
        display: inline-block;
      }
    `];ie=T([A("shadcn-dialog-trigger")],ie);let oe=class extends N{render(){return F`<slot></slot>`}};oe.styles=[O,x`
      :host {
        display: block;
        margin: 0;
        font-size: var(--font-size-lg);
        font-weight: var(--font-semibold);
        line-height: 1.5;
        letter-spacing: -0.025em;
        color: var(--foreground);
      }
    `];oe=T([A("shadcn-dialog-title")],oe);let se=class extends N{constructor(){super(),this.contextConsumer=new z(this,M)}render(){const a=this.contextConsumer.value;return!a||!a.open?Ne:F`<slot></slot>`}};se.styles=[O,x`
      :host {
        position: fixed;
        inset: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
    `];se=T([A("shadcn-dialog-portal")],se);let le=class extends N{constructor(){super(),this.handleOverlayClick=a=>{if(a.target===this){const e=this.contextConsumer.value;e&&e.setOpen(!1)}},this.contextConsumer=new z(this,M),this._stateSync=new Fe(this,()=>this.contextConsumer.value),this._stateSync}willUpdate(){const a=this.contextConsumer.value;a&&(this.dataset.state=a.open?"open":"closed")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleOverlayClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleOverlayClick)}render(){return F`<slot></slot>`}};le.styles=[O,x`
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
    `];le=T([A("shadcn-dialog-overlay")],le);let ce=class extends N{render(){return F`<slot></slot>`}};ce.styles=[O,x`
      :host {
        display: block;
        margin: 0;
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
        line-height: 1.5;
      }
    `];ce=T([A("shadcn-dialog-description")],ce);let ue=class extends N{constructor(){super(),this.dialogContainer=null,this.originalBodyOverflow=null,this.backdropElement=null,this.handleBackdropClick=a=>{if(a.target===this.backdropElement){const e=this.contextConsumer.value;e&&e.setOpen(!1)}},this.contextConsumer=new z(this,M),this._stateSync=new Fe(this,()=>this.contextConsumer.value),this._stateSync,this.focusTrap=new yt(this)}ensureElementId(a,e){return a.id||(a.id=`${e}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`),a.id}linkAriaAttributes(){if(!this.dialogContainer)return;const a=this.querySelector("shadcn-dialog-title"),e=this.querySelector("shadcn-dialog-description");if(a){const t=this.ensureElementId(a,"shadcn-dialog-title");this.dialogContainer.setAttribute("aria-labelledby",t)}else this.dialogContainer.removeAttribute("aria-labelledby");if(e){const t=this.ensureElementId(e,"shadcn-dialog-description");this.dialogContainer.setAttribute("aria-describedby",t)}else this.dialogContainer.removeAttribute("aria-describedby")}firstUpdated(){var a,e;this.dialogContainer=(a=this.shadowRoot)==null?void 0:a.querySelector('[role="dialog"]'),this.backdropElement=(e=this.shadowRoot)==null?void 0:e.querySelector(".backdrop"),this.linkAriaAttributes()}willUpdate(){const a=this.contextConsumer.value;a&&(this.dataset.state=a.open?"open":"closed")}updated(){var e,t;const a=this.contextConsumer.value;this.dialogContainer=(e=this.shadowRoot)==null?void 0:e.querySelector('[role="dialog"]'),this.backdropElement=(t=this.shadowRoot)==null?void 0:t.querySelector(".backdrop"),a!=null&&a.open&&this.linkAriaAttributes(),a!=null&&a.open?(this.lockBodyScroll(),requestAnimationFrame(()=>{if(this.dialogContainer&&this.isConnected)try{this.focusTrap.activate()}catch(n){console.debug("Focus trap activation deferred:",n)}})):(this.unlockBodyScroll(),this.focusTrap.deactivate())}disconnectedCallback(){super.disconnectedCallback(),this.unlockBodyScroll()}lockBodyScroll(){typeof document<"u"&&this.originalBodyOverflow===null&&(this.originalBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden")}unlockBodyScroll(){typeof document<"u"&&this.originalBodyOverflow!==null&&(document.body.style.overflow=this.originalBodyOverflow,this.originalBodyOverflow=null)}render(){const a=this.contextConsumer.value;return!a||!a.open?Ne:F`
      <div class="backdrop" @click=${this.handleBackdropClick}></div>
      <div class="dialog-container">
        <div role="dialog" aria-modal="true">
          <slot></slot>
        </div>
      </div>
    `}};ue.styles=[O,x`
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

      :host([data-state='open']) .backdrop {
        opacity: 1;
      }

      :host([data-state='closed']) .backdrop {
        opacity: 0;
      }

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

      :host([data-state='open']) .dialog-container {
        opacity: 1;
        transform: scale(1);
      }

      :host([data-state='closed']) .dialog-container {
        opacity: 0;
        transform: scale(0.95);
      }

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
    `];ue=T([A("shadcn-dialog-content")],ue);let de=class extends N{constructor(){super(),this.handleClick=()=>{const a=this.contextConsumer.value;a&&a.setOpen(!1)},this.contextConsumer=new z(this,M)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick)}render(){return F`<slot></slot>`}};de.styles=[O,x`
      :host {
        display: inline-block;
      }
    `];de=T([A("shadcn-dialog-close")],de);let fe=class extends N{render(){return F`<slot></slot>`}};fe.styles=[O,x`
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
    `];fe=T([A("shadcn-dialog-header")],fe);let ve=class extends N{render(){return F`<slot></slot>`}};ve.styles=[O,x`
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
    `];ve=T([A("shadcn-dialog-footer")],ve);export{J as D,yt as F,ie as a,oe as b,ce as c,M as d,fe as e,ve as f,de as g};
