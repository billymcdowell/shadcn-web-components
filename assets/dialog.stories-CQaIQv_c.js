import{i as N,a as D,x as k,E as Ue}from"./lit-element-B21iCxvW.js";import{t as A}from"./custom-element-C028faeO.js";import{n as ot}from"./property-CJLssJ-s.js";import{C as rt,c as st,a as z,S as Ge}from"./state-sync-controller-B6cpO8Dj.js";import{t as F}from"./index-BVWPfyNL.js";import"./button-B2IsNlAX.js";import"./input-CJkEiHQR.js";import"./query-BApjzB0v.js";/*!
* tabbable 6.4.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Ye=["input:not([inert]):not([inert] *)","select:not([inert]):not([inert] *)","textarea:not([inert]):not([inert] *)","a[href]:not([inert]):not([inert] *)","button:not([inert]):not([inert] *)","[tabindex]:not(slot):not([inert]):not([inert] *)","audio[controls]:not([inert]):not([inert] *)","video[controls]:not([inert]):not([inert] *)",'[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',"details>summary:first-of-type:not([inert]):not([inert] *)","details:not([inert]):not([inert] *)"],J=Ye.join(","),Ze=typeof Element>"u",L=Ze?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Q=!Ze&&Element.prototype.getRootNode?function(t){var e;return t==null||(e=t.getRootNode)===null||e===void 0?void 0:e.call(t)}:function(t){return t==null?void 0:t.ownerDocument},ee=function(e,a){var i;a===void 0&&(a=!0);var s=e==null||(i=e.getAttribute)===null||i===void 0?void 0:i.call(e,"inert"),l=s===""||s==="true",n=l||a&&e&&(typeof e.closest=="function"?e.closest("[inert]"):ee(e.parentNode));return n},lt=function(e){var a,i=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"contenteditable");return i===""||i==="true"},Xe=function(e,a,i){if(ee(e))return[];var s=Array.prototype.slice.apply(e.querySelectorAll(J));return a&&L.call(e,J)&&s.unshift(e),s=s.filter(i),s},te=function(e,a,i){for(var s=[],l=Array.from(e);l.length;){var n=l.shift();if(!ee(n,!1))if(n.tagName==="SLOT"){var p=n.assignedElements(),g=p.length?p:n.children,y=te(g,!0,i);i.flatten?s.push.apply(s,y):s.push({scopeParent:n,candidates:y})}else{var w=L.call(n,J);w&&i.filter(n)&&(a||!e.includes(n))&&s.push(n);var x=n.shadowRoot||typeof i.getShadowRoot=="function"&&i.getShadowRoot(n),q=!ee(x,!1)&&(!i.shadowRootFilter||i.shadowRootFilter(n));if(x&&q){var B=te(x===!0?n.children:x.children,!0,i);i.flatten?s.push.apply(s,B):s.push({scopeParent:n,candidates:B})}else l.unshift.apply(l,n.children)}}return s},Je=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},j=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||lt(e))&&!Je(e)?0:e.tabIndex},ct=function(e,a){var i=j(e);return i<0&&a&&!Je(e)?0:i},dt=function(e,a){return e.tabIndex===a.tabIndex?e.documentOrder-a.documentOrder:e.tabIndex-a.tabIndex},Qe=function(e){return e.tagName==="INPUT"},ut=function(e){return Qe(e)&&e.type==="hidden"},ht=function(e){var a=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(i){return i.tagName==="SUMMARY"});return a},pt=function(e,a){for(var i=0;i<e.length;i++)if(e[i].checked&&e[i].form===a)return e[i]},vt=function(e){if(!e.name)return!0;var a=e.form||Q(e),i=function(p){return a.querySelectorAll('input[type="radio"][name="'+p+'"]')},s;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")s=i(window.CSS.escape(e.name));else try{s=i(e.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var l=pt(s,e.form);return!l||l===e},ft=function(e){return Qe(e)&&e.type==="radio"},gt=function(e){return ft(e)&&!vt(e)},bt=function(e){var a,i=e&&Q(e),s=(a=i)===null||a===void 0?void 0:a.host,l=!1;if(i&&i!==e){var n,p,g;for(l=!!((n=s)!==null&&n!==void 0&&(p=n.ownerDocument)!==null&&p!==void 0&&p.contains(s)||e!=null&&(g=e.ownerDocument)!==null&&g!==void 0&&g.contains(e));!l&&s;){var y,w,x;i=Q(s),s=(y=i)===null||y===void 0?void 0:y.host,l=!!((w=s)!==null&&w!==void 0&&(x=w.ownerDocument)!==null&&x!==void 0&&x.contains(s))}}return l},Ne=function(e){var a=e.getBoundingClientRect(),i=a.width,s=a.height;return i===0&&s===0},mt=function(e,a){var i=a.displayCheck,s=a.getShadowRoot;if(i==="full-native"&&"checkVisibility"in e){var l=e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});return!l}if(getComputedStyle(e).visibility==="hidden")return!0;var n=L.call(e,"details>summary:first-of-type"),p=n?e.parentElement:e;if(L.call(p,"details:not([open]) *"))return!0;if(!i||i==="full"||i==="full-native"||i==="legacy-full"){if(typeof s=="function"){for(var g=e;e;){var y=e.parentElement,w=Q(e);if(y&&!y.shadowRoot&&s(y)===!0)return Ne(e);e.assignedSlot?e=e.assignedSlot:!y&&w!==e.ownerDocument?e=w.host:e=y}e=g}if(bt(e))return!e.getClientRects().length;if(i!=="legacy-full")return!0}else if(i==="non-zero-area")return Ne(e);return!1},yt=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var a=e.parentElement;a;){if(a.tagName==="FIELDSET"&&a.disabled){for(var i=0;i<a.children.length;i++){var s=a.children.item(i);if(s.tagName==="LEGEND")return L.call(a,"fieldset[disabled] *")?!0:!s.contains(e)}return!0}a=a.parentElement}return!1},ae=function(e,a){return!(a.disabled||ut(a)||mt(a,e)||ht(a)||yt(a))},le=function(e,a){return!(gt(a)||j(a)<0||!ae(e,a))},wt=function(e){var a=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(a)||a>=0)},et=function(e){var a=[],i=[];return e.forEach(function(s,l){var n=!!s.scopeParent,p=n?s.scopeParent:s,g=ct(p,n),y=n?et(s.candidates):p;g===0?n?a.push.apply(a,y):a.push(p):i.push({documentOrder:l,tabIndex:g,item:s,isScope:n,content:y})}),i.sort(dt).reduce(function(s,l){return l.isScope?s.push.apply(s,l.content):s.push(l.content),s},[]).concat(a)},kt=function(e,a){a=a||{};var i;return a.getShadowRoot?i=te([e],a.includeContainer,{filter:le.bind(null,a),flatten:!1,getShadowRoot:a.getShadowRoot,shadowRootFilter:wt}):i=Xe(e,a.includeContainer,le.bind(null,a)),et(i)},xt=function(e,a){a=a||{};var i;return a.getShadowRoot?i=te([e],a.includeContainer,{filter:ae.bind(null,a),flatten:!0,getShadowRoot:a.getShadowRoot}):i=Xe(e,a.includeContainer,ae.bind(null,a)),i},K=function(e,a){if(a=a||{},!e)throw new Error("No node provided");return L.call(e,J)===!1?!1:le(a,e)},Ct=Ye.concat("iframe:not([inert]):not([inert] *)").join(","),se=function(e,a){if(a=a||{},!e)throw new Error("No node provided");return L.call(e,Ct)===!1?!1:ae(a,e)};/*!
* focus-trap 7.8.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function ce(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,i=Array(e);a<e;a++)i[a]=t[a];return i}function St(t){if(Array.isArray(t))return ce(t)}function De(t,e){var a=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=tt(t))||e){a&&(t=a);var i=0,s=function(){};return{s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(g){throw g},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,n=!0,p=!1;return{s:function(){a=a.call(t)},n:function(){var g=a.next();return n=g.done,g},e:function(g){p=!0,l=g},f:function(){try{n||a.return==null||a.return()}finally{if(p)throw l}}}}function Tt(t,e,a){return(e=Ft(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Et(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Nt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,i)}return a}function Fe(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Ae(Object(a),!0).forEach(function(i){Tt(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ae(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function Dt(t){return St(t)||Et(t)||tt(t)||Nt()}function At(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var i=a.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ft(t){var e=At(t,"string");return typeof e=="symbol"?e:e+""}function tt(t,e){if(t){if(typeof t=="string")return ce(t,e);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ce(t,e):void 0}}var O={getActiveTrap:function(e){return(e==null?void 0:e.length)>0?e[e.length-1]:null},activateTrap:function(e,a){var i=O.getActiveTrap(e);a!==i&&O.pauseTrap(e);var s=e.indexOf(a);s===-1||e.splice(s,1),e.push(a)},deactivateTrap:function(e,a){var i=e.indexOf(a);i!==-1&&e.splice(i,1),O.unpauseTrap(e)},pauseTrap:function(e){var a=O.getActiveTrap(e);a==null||a._setPausedState(!0)},unpauseTrap:function(e){var a=O.getActiveTrap(e);a&&!a._isManuallyPaused()&&a._setPausedState(!1)}},Ot=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},It=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},V=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},Rt=function(e){return V(e)&&!e.shiftKey},qt=function(e){return V(e)&&e.shiftKey},Oe=function(e){return setTimeout(e,0)},$=function(e){for(var a=arguments.length,i=new Array(a>1?a-1:0),s=1;s<a;s++)i[s-1]=arguments[s];return typeof e=="function"?e.apply(void 0,i):e},W=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Pt=[],jt=function(e,a){var i=(a==null?void 0:a.document)||document,s=(a==null?void 0:a.trapStack)||Pt,l=Fe({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:Rt,isKeyBackward:qt},a),n={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},p,g=function(o,r,c){return o&&o[r]!==void 0?o[r]:l[c||r]},y=function(o,r){var c=typeof(r==null?void 0:r.composedPath)=="function"?r.composedPath():void 0;return n.containerGroups.findIndex(function(h){var u=h.container,v=h.tabbableNodes;return u.contains(o)||(c==null?void 0:c.includes(u))||v.find(function(d){return d===o})})},w=function(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=r.hasFallback,h=c===void 0?!1:c,u=r.params,v=u===void 0?[]:u,d=l[o];if(typeof d=="function"&&(d=d.apply(void 0,Dt(v))),d===!0&&(d=void 0),!d){if(d===void 0||d===!1)return d;throw new Error("`".concat(o,"` was specified but was not a node, or did not return a node"))}var f=d;if(typeof d=="string"){try{f=i.querySelector(d)}catch(b){throw new Error("`".concat(o,'` appears to be an invalid selector; error="').concat(b.message,'"'))}if(!f&&!h)throw new Error("`".concat(o,"` as selector refers to no known node"))}return f},x=function(){var o=w("initialFocus",{hasFallback:!0});if(o===!1)return!1;if(o===void 0||o&&!se(o,l.tabbableOptions))if(y(i.activeElement)>=0)o=i.activeElement;else{var r=n.tabbableGroups[0],c=r&&r.firstTabbableNode;o=c||w("fallbackFocus")}else o===null&&(o=w("fallbackFocus"));if(!o)throw new Error("Your focus-trap needs to have at least one focusable element");return o},q=function(){if(n.containerGroups=n.containers.map(function(o){var r=kt(o,l.tabbableOptions),c=xt(o,l.tabbableOptions),h=r.length>0?r[0]:void 0,u=r.length>0?r[r.length-1]:void 0,v=c.find(function(b){return K(b)}),d=c.slice().reverse().find(function(b){return K(b)}),f=!!r.find(function(b){return j(b)>0});return{container:o,tabbableNodes:r,focusableNodes:c,posTabIndexesFound:f,firstTabbableNode:h,lastTabbableNode:u,firstDomTabbableNode:v,lastDomTabbableNode:d,nextTabbableNode:function(C){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,S=r.indexOf(C);return S<0?E?c.slice(c.indexOf(C)+1).find(function(P){return K(P)}):c.slice(0,c.indexOf(C)).reverse().find(function(P){return K(P)}):r[S+(E?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(o){return o.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!w("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(o){return o.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},B=function(o){var r=o.activeElement;if(r)return r.shadowRoot&&r.shadowRoot.activeElement!==null?B(r.shadowRoot):r},I=function(o){if(o!==!1&&o!==B(document)){if(!o||!o.focus){I(x());return}o.focus({preventScroll:!!l.preventScroll}),n.mostRecentlyFocusedNode=o,Ot(o)&&o.select()}},ye=function(o){var r=w("setReturnFocus",{params:[o]});return r||(r===!1?!1:o)},we=function(o){var r=o.target,c=o.event,h=o.isBackward,u=h===void 0?!1:h;r=r||W(c),q();var v=null;if(n.tabbableGroups.length>0){var d=y(r,c),f=d>=0?n.containerGroups[d]:void 0;if(d<0)u?v=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:v=n.tabbableGroups[0].firstTabbableNode;else if(u){var b=n.tabbableGroups.findIndex(function(oe){var re=oe.firstTabbableNode;return r===re});if(b<0&&(f.container===r||se(r,l.tabbableOptions)&&!K(r,l.tabbableOptions)&&!f.nextTabbableNode(r,!1))&&(b=d),b>=0){var C=b===0?n.tabbableGroups.length-1:b-1,E=n.tabbableGroups[C];v=j(r)>=0?E.lastTabbableNode:E.lastDomTabbableNode}else V(c)||(v=f.nextTabbableNode(r,!1))}else{var S=n.tabbableGroups.findIndex(function(oe){var re=oe.lastTabbableNode;return r===re});if(S<0&&(f.container===r||se(r,l.tabbableOptions)&&!K(r,l.tabbableOptions)&&!f.nextTabbableNode(r))&&(S=d),S>=0){var P=S===n.tabbableGroups.length-1?0:S+1,R=n.tabbableGroups[P];v=j(r)>=0?R.firstTabbableNode:R.firstDomTabbableNode}else V(c)||(v=f.nextTabbableNode(r))}}else v=w("fallbackFocus");return v},H=function(o){var r=W(o);if(!(y(r,o)>=0)){if($(l.clickOutsideDeactivates,o)){p.deactivate({returnFocus:l.returnFocusOnDeactivate});return}$(l.allowOutsideClick,o)||o.preventDefault()}},ke=function(o){var r=W(o),c=y(r,o)>=0;if(c||r instanceof Document)c&&(n.mostRecentlyFocusedNode=r);else{o.stopImmediatePropagation();var h,u=!0;if(n.mostRecentlyFocusedNode)if(j(n.mostRecentlyFocusedNode)>0){var v=y(n.mostRecentlyFocusedNode),d=n.containerGroups[v].tabbableNodes;if(d.length>0){var f=d.findIndex(function(b){return b===n.mostRecentlyFocusedNode});f>=0&&(l.isKeyForward(n.recentNavEvent)?f+1<d.length&&(h=d[f+1],u=!1):f-1>=0&&(h=d[f-1],u=!1))}}else n.containerGroups.some(function(b){return b.tabbableNodes.some(function(C){return j(C)>0})})||(u=!1);else u=!1;u&&(h=we({target:n.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(n.recentNavEvent)})),I(h||n.mostRecentlyFocusedNode||x())}n.recentNavEvent=void 0},at=function(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=o;var c=we({event:o,isBackward:r});c&&(V(o)&&o.preventDefault(),I(c))},xe=function(o){(l.isKeyForward(o)||l.isKeyBackward(o))&&at(o,l.isKeyBackward(o))},Ce=function(o){It(o)&&$(l.escapeDeactivates,o)!==!1&&(o.preventDefault(),p.deactivate())},Se=function(o){var r=W(o);y(r,o)>=0||$(l.clickOutsideDeactivates,o)||$(l.allowOutsideClick,o)||(o.preventDefault(),o.stopImmediatePropagation())},Te=function(){if(n.active)return O.activateTrap(s,p),n.delayInitialFocusTimer=l.delayInitialFocus?Oe(function(){I(x())}):I(x()),i.addEventListener("focusin",ke,!0),i.addEventListener("mousedown",H,{capture:!0,passive:!1}),i.addEventListener("touchstart",H,{capture:!0,passive:!1}),i.addEventListener("click",Se,{capture:!0,passive:!1}),i.addEventListener("keydown",xe,{capture:!0,passive:!1}),i.addEventListener("keydown",Ce),p},nt=function(o){n.active&&!n.paused&&p._setSubtreeIsolation(!1),n.adjacentElements.clear(),n.alreadySilent.clear();var r=new Set,c=new Set,h=De(o),u;try{for(h.s();!(u=h.n()).done;){var v=u.value;r.add(v);for(var d=typeof ShadowRoot<"u"&&v.getRootNode()instanceof ShadowRoot,f=v;f;){r.add(f);var b=f.parentElement,C=[];b?C=b.children:!b&&d&&(C=f.getRootNode().children,b=f.getRootNode().host,d=typeof ShadowRoot<"u"&&b.getRootNode()instanceof ShadowRoot);var E=De(C),S;try{for(E.s();!(S=E.n()).done;){var P=S.value;c.add(P)}}catch(R){E.e(R)}finally{E.f()}f=b}}}catch(R){h.e(R)}finally{h.f()}r.forEach(function(R){c.delete(R)}),n.adjacentElements=c},Ee=function(){if(n.active)return i.removeEventListener("focusin",ke,!0),i.removeEventListener("mousedown",H,!0),i.removeEventListener("touchstart",H,!0),i.removeEventListener("click",Se,!0),i.removeEventListener("keydown",xe,!0),i.removeEventListener("keydown",Ce),p},it=function(o){var r=o.some(function(c){var h=Array.from(c.removedNodes);return h.some(function(u){return u===n.mostRecentlyFocusedNode})});r&&I(x())},ie=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(it):void 0,M=function(){ie&&(ie.disconnect(),n.active&&!n.paused&&n.containers.map(function(o){ie.observe(o,{subtree:!0,childList:!0})}))};return p={get active(){return n.active},get paused(){return n.paused},activate:function(o){if(n.active)return this;var r=g(o,"onActivate"),c=g(o,"onPostActivate"),h=g(o,"checkCanFocusTrap"),u=O.getActiveTrap(s),v=!1;if(u&&!u.paused){var d;(d=u._setSubtreeIsolation)===null||d===void 0||d.call(u,!1),v=!0}try{h||q(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=B(i),r==null||r();var f=function(){h&&q(),Te(),M(),l.isolateSubtrees&&p._setSubtreeIsolation(!0),c==null||c()};if(h)return h(n.containers.concat()).then(f,f),this;f()}catch(C){if(u===O.getActiveTrap(s)&&v){var b;(b=u._setSubtreeIsolation)===null||b===void 0||b.call(u,!0)}throw C}return this},deactivate:function(o){if(!n.active)return this;var r=Fe({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},o);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,n.paused||p._setSubtreeIsolation(!1),n.alreadySilent.clear(),Ee(),n.active=!1,n.paused=!1,M(),O.deactivateTrap(s,p);var c=g(r,"onDeactivate"),h=g(r,"onPostDeactivate"),u=g(r,"checkCanReturnFocus"),v=g(r,"returnFocus","returnFocusOnDeactivate");c==null||c();var d=function(){Oe(function(){v&&I(ye(n.nodeFocusedBeforeActivation)),h==null||h()})};return v&&u?(u(ye(n.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(o){return n.active?(n.manuallyPaused=!0,this._setPausedState(!0,o)):this},unpause:function(o){return n.active?(n.manuallyPaused=!1,s[s.length-1]!==this?this:this._setPausedState(!1,o)):this},updateContainerElements:function(o){var r=[].concat(o).filter(Boolean);return n.containers=r.map(function(c){return typeof c=="string"?i.querySelector(c):c}),l.isolateSubtrees&&nt(n.containers),n.active&&(q(),l.isolateSubtrees&&!n.paused&&p._setSubtreeIsolation(!0)),M(),this}},Object.defineProperties(p,{_isManuallyPaused:{value:function(){return n.manuallyPaused}},_setPausedState:{value:function(o,r){if(n.paused===o)return this;if(n.paused=o,o){var c=g(r,"onPause"),h=g(r,"onPostPause");c==null||c(),Ee(),M(),p._setSubtreeIsolation(!1),h==null||h()}else{var u=g(r,"onUnpause"),v=g(r,"onPostUnpause");u==null||u(),p._setSubtreeIsolation(!0),q(),Te(),M(),v==null||v()}return this}},_setSubtreeIsolation:{value:function(o){l.isolateSubtrees&&n.adjacentElements.forEach(function(r){var c;if(o)switch(l.isolateSubtrees){case"aria-hidden":(r.ariaHidden==="true"||((c=r.getAttribute("aria-hidden"))===null||c===void 0?void 0:c.toLowerCase())==="true")&&n.alreadySilent.add(r),r.setAttribute("aria-hidden","true");break;default:(r.inert||r.hasAttribute("inert"))&&n.alreadySilent.add(r),r.setAttribute("inert",!0);break}else if(!n.alreadySilent.has(r))switch(l.isolateSubtrees){case"aria-hidden":r.removeAttribute("aria-hidden");break;default:r.removeAttribute("inert");break}})}}}),p.updateContainerElements(e),p};class Lt{constructor(e){this.focusTrap=null,this.host=e,e.addController(this)}hostConnected(){}hostDisconnected(){this.deactivate()}activate(){this.focusTrap&&this.deactivate(),this.focusTrap=jt(this.host,{returnFocusOnDeactivate:!0}),this.focusTrap.activate()}deactivate(){this.focusTrap&&(this.focusTrap.deactivate(),this.focusTrap=null)}}var Bt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,T=(t,e,a,i)=>{for(var s=i>1?void 0:i?Kt(e,a):e,l=t.length-1,n;l>=0;l--)(n=t[l])&&(s=(i?n(e,a,s):n(s))||s);return i&&s&&Bt(e,a,s),s};const _=st("shadcn-dialog");let ne=class extends D{constructor(){super(),this.open=!1,this.escapeKeyHandler=null,this.handleEscapeKey=t=>{t.key==="Escape"&&this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))},this.contextProvider=new rt(this,_,{open:this.open,setOpen:t=>{this.open=t}})}willUpdate(){this.dataset.state=this.open?"open":"closed"}updated(t){super.updated(t),t.has("open")&&(this.contextProvider.setValue({open:this.open,setOpen:e=>{this.open=e}}),this.open?(this.escapeKeyHandler=this.handleEscapeKey,window.addEventListener("keydown",this.escapeKeyHandler)):this.escapeKeyHandler&&(window.removeEventListener("keydown",this.escapeKeyHandler),this.escapeKeyHandler=null))}disconnectedCallback(){super.disconnectedCallback(),this.escapeKeyHandler&&(window.removeEventListener("keydown",this.escapeKeyHandler),this.escapeKeyHandler=null)}render(){return k`<slot></slot>`}};ne.styles=[F,N`
      :host {
        display: contents;
      }
    `];T([ot({type:Boolean,reflect:!0})],ne.prototype,"open",2);ne=T([A("shadcn-dialog")],ne);let de=class extends D{constructor(){super(),this.handleClick=()=>{const t=this.contextConsumer.value;t&&t.setOpen(!0)},this.contextConsumer=new z(this,_)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick)}render(){return k`<slot></slot>`}};de.styles=[F,N`
      :host {
        display: inline-block;
      }
    `];de=T([A("shadcn-dialog-trigger")],de);let ue=class extends D{render(){return k`<slot></slot>`}};ue.styles=[F,N`
      :host {
        display: block;
        margin: 0;
        font-size: var(--font-size-lg);
        font-weight: var(--font-semibold);
        line-height: 1.5;
        letter-spacing: -0.025em;
        color: var(--foreground);
      }
    `];ue=T([A("shadcn-dialog-title")],ue);let he=class extends D{constructor(){super(),this.contextConsumer=new z(this,_)}render(){const t=this.contextConsumer.value;return!t||!t.open?Ue:k`<slot></slot>`}};he.styles=[F,N`
      :host {
        position: fixed;
        inset: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
    `];he=T([A("shadcn-dialog-portal")],he);let pe=class extends D{constructor(){super(),this.handleOverlayClick=t=>{if(t.target===this){const e=this.contextConsumer.value;e&&e.setOpen(!1)}},this.contextConsumer=new z(this,_),this._stateSync=new Ge(this,()=>this.contextConsumer.value),this._stateSync}willUpdate(){const t=this.contextConsumer.value;t&&(this.dataset.state=t.open?"open":"closed")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleOverlayClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleOverlayClick)}render(){return k`<slot></slot>`}};pe.styles=[F,N`
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
    `];pe=T([A("shadcn-dialog-overlay")],pe);let ve=class extends D{render(){return k`<slot></slot>`}};ve.styles=[F,N`
      :host {
        display: block;
        margin: 0;
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
        line-height: 1.5;
      }
    `];ve=T([A("shadcn-dialog-description")],ve);let fe=class extends D{constructor(){super(),this.dialogContainer=null,this.originalBodyOverflow="",this.backdropElement=null,this.handleBackdropClick=t=>{if(t.target===this.backdropElement){const e=this.contextConsumer.value;e&&e.setOpen(!1)}},this.contextConsumer=new z(this,_),this._stateSync=new Ge(this,()=>this.contextConsumer.value),this._stateSync,this.focusTrap=new Lt(this)}ensureElementId(t,e){return t.id||(t.id=`${e}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`),t.id}linkAriaAttributes(){var s;if(!this.dialogContainer)return;const t=(s=this.shadowRoot)==null?void 0:s.querySelector("slot");if(!t)return;const e=t.assignedElements({flatten:!0}),a=e.find(l=>{var n;return((n=l.tagName)==null?void 0:n.toLowerCase())==="shadcn-dialog-title"}),i=e.find(l=>{var n;return((n=l.tagName)==null?void 0:n.toLowerCase())==="shadcn-dialog-description"});if(a){const l=this.ensureElementId(a,"shadcn-dialog-title");this.dialogContainer.setAttribute("aria-labelledby",l)}else this.dialogContainer.removeAttribute("aria-labelledby");if(i){const l=this.ensureElementId(i,"shadcn-dialog-description");this.dialogContainer.setAttribute("aria-describedby",l)}else this.dialogContainer.removeAttribute("aria-describedby")}firstUpdated(){var t,e;this.dialogContainer=(t=this.shadowRoot)==null?void 0:t.querySelector('[role="dialog"]'),this.backdropElement=(e=this.shadowRoot)==null?void 0:e.querySelector(".backdrop"),this.linkAriaAttributes()}willUpdate(){const t=this.contextConsumer.value;t&&(this.dataset.state=t.open?"open":"closed")}updated(){var e,a;const t=this.contextConsumer.value;this.dialogContainer=(e=this.shadowRoot)==null?void 0:e.querySelector('[role="dialog"]'),this.backdropElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".backdrop"),t!=null&&t.open&&this.linkAriaAttributes(),t!=null&&t.open?(this.lockBodyScroll(),requestAnimationFrame(()=>{if(this.dialogContainer&&this.isConnected)try{this.focusTrap.activate()}catch(i){console.debug("Focus trap activation deferred:",i)}})):(this.unlockBodyScroll(),this.focusTrap.deactivate())}disconnectedCallback(){super.disconnectedCallback(),this.unlockBodyScroll()}lockBodyScroll(){typeof document<"u"&&!this.originalBodyOverflow&&(this.originalBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden")}unlockBodyScroll(){typeof document<"u"&&this.originalBodyOverflow!==void 0&&(document.body.style.overflow=this.originalBodyOverflow,this.originalBodyOverflow="")}render(){const t=this.contextConsumer.value;return!t||!t.open?Ue:k`
      <div class="backdrop" @click=${this.handleBackdropClick}></div>
      <div class="dialog-container">
        <div role="dialog" aria-modal="true">
          <slot></slot>
        </div>
      </div>
    `}};fe.styles=[F,N`
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
      }

      :host([data-state='open']) .dialog-container {
        opacity: 1;
        transform: scale(1);
      }

      :host([data-state='closed']) .dialog-container {
        opacity: 0;
        transform: scale(0.95);
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
    `];fe=T([A("shadcn-dialog-content")],fe);let ge=class extends D{constructor(){super(),this.handleClick=()=>{const t=this.contextConsumer.value;t&&t.setOpen(!1)},this.contextConsumer=new z(this,_)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick)}render(){return k`<slot></slot>`}};ge.styles=[F,N`
      :host {
        display: inline-block;
      }
    `];ge=T([A("shadcn-dialog-close")],ge);let be=class extends D{render(){return k`<slot></slot>`}};be.styles=[F,N`
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
    `];be=T([A("shadcn-dialog-header")],be);let me=class extends D{render(){return k`<slot></slot>`}};me.styles=[F,N`
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
    `];me=T([A("shadcn-dialog-footer")],me);const Gt={title:"Components/Dialog",component:"shadcn-dialog",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the dialog is open"}},parameters:{docs:{description:{component:"A dialog component that displays content in a modal overlay. The dialog can be opened and closed via triggers, and includes proper accessibility features like focus trapping and ARIA attributes."}}}},U={args:{open:!1},render:t=>k`
    <shadcn-dialog .open=${t.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content>
        <shadcn-dialog-title>Dialog Title</shadcn-dialog-title>
        <shadcn-dialog-description>
          This is a dialog description. It provides additional context about the dialog's purpose.
        </shadcn-dialog-description>
        <div style="margin-top: var(--spacing-4);">
          <p>Dialog content goes here. You can put any content inside the dialog.</p>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Cancel</shadcn-button>
          </shadcn-dialog-close>
          <shadcn-button>Confirm</shadcn-button>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  `},G={args:{open:!1},render:t=>k`
    <shadcn-dialog .open=${t.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog with Overlay</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-portal>
        <shadcn-dialog-overlay></shadcn-dialog-overlay>
        <shadcn-dialog-content>
          <shadcn-dialog-title>Edit Profile</shadcn-dialog-title>
          <shadcn-dialog-description>
            Make changes to your profile here. Click save when you're done.
          </shadcn-dialog-description>
          <div style="margin-top: var(--spacing-4);">
            <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
              <div>
                <label style="display: block; margin-bottom: var(--spacing-2); font-weight: var(--font-medium);">
                  Name
                </label>
                <shadcn-input type="text" placeholder="Enter your name" style="width: 100%;"></shadcn-input>
              </div>
              <div>
                <label style="display: block; margin-bottom: var(--spacing-2); font-weight: var(--font-medium);">
                  Email
                </label>
                <shadcn-input type="email" placeholder="Enter your email" style="width: 100%;"></shadcn-input>
              </div>
            </div>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
            <shadcn-dialog-close>
              <shadcn-button variant="outline">Cancel</shadcn-button>
            </shadcn-dialog-close>
            <shadcn-button>Save Changes</shadcn-button>
          </div>
        </shadcn-dialog-content>
      </shadcn-dialog-portal>
    </shadcn-dialog>
  `,parameters:{docs:{description:{story:"Dialog with an overlay backdrop that dims the background content."}}}},Y={args:{open:!1},render:t=>k`
    <shadcn-dialog .open=${t.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4);">
          <shadcn-dialog-title>Confirm Action</shadcn-dialog-title>
          <shadcn-dialog-close>
            <shadcn-button variant="ghost" size="icon" style="margin-left: auto;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </shadcn-button>
          </shadcn-dialog-close>
        </div>
        <shadcn-dialog-description>
          Are you sure you want to perform this action? This cannot be undone.
        </shadcn-dialog-description>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Cancel</shadcn-button>
          </shadcn-dialog-close>
          <shadcn-button variant="destructive">Delete</shadcn-button>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  `,parameters:{docs:{description:{story:"Dialog with a close button in the header."}}}},Z={args:{open:!1},render:t=>k`
    <shadcn-dialog .open=${t.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Long Content Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content style="max-height: 80vh; overflow-y: auto;">
        <shadcn-dialog-title>Terms and Conditions</shadcn-dialog-title>
        <shadcn-dialog-description>
          Please read the following terms and conditions carefully.
        </shadcn-dialog-description>
        <div style="margin-top: var(--spacing-4); max-height: 60vh; overflow-y: auto;">
          <p style="margin-bottom: var(--spacing-4);">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Decline</shadcn-button>
          </shadcn-dialog-close>
          <shadcn-button>Accept</shadcn-button>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  `,parameters:{docs:{description:{story:"Dialog with scrollable long content."}}}},X={args:{open:!1},render:t=>k`
    <shadcn-dialog .open=${t.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content>
        <shadcn-dialog-title>Simple Dialog</shadcn-dialog-title>
        <div style="margin-top: var(--spacing-4);">
          <p>This dialog doesn't have a description, just a title and content.</p>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Close</shadcn-button>
          </shadcn-dialog-close>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  `,parameters:{docs:{description:{story:"Dialog without a description element."}}}};var Ie,Re,qe;U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => html\`
    <shadcn-dialog .open=\${args.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content>
        <shadcn-dialog-title>Dialog Title</shadcn-dialog-title>
        <shadcn-dialog-description>
          This is a dialog description. It provides additional context about the dialog's purpose.
        </shadcn-dialog-description>
        <div style="margin-top: var(--spacing-4);">
          <p>Dialog content goes here. You can put any content inside the dialog.</p>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Cancel</shadcn-button>
          </shadcn-dialog-close>
          <shadcn-button>Confirm</shadcn-button>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  \`
}`,...(qe=(Re=U.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};var Pe,je,Le;G.parameters={...G.parameters,docs:{...(Pe=G.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => html\`
    <shadcn-dialog .open=\${args.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog with Overlay</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-portal>
        <shadcn-dialog-overlay></shadcn-dialog-overlay>
        <shadcn-dialog-content>
          <shadcn-dialog-title>Edit Profile</shadcn-dialog-title>
          <shadcn-dialog-description>
            Make changes to your profile here. Click save when you're done.
          </shadcn-dialog-description>
          <div style="margin-top: var(--spacing-4);">
            <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
              <div>
                <label style="display: block; margin-bottom: var(--spacing-2); font-weight: var(--font-medium);">
                  Name
                </label>
                <shadcn-input type="text" placeholder="Enter your name" style="width: 100%;"></shadcn-input>
              </div>
              <div>
                <label style="display: block; margin-bottom: var(--spacing-2); font-weight: var(--font-medium);">
                  Email
                </label>
                <shadcn-input type="email" placeholder="Enter your email" style="width: 100%;"></shadcn-input>
              </div>
            </div>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
            <shadcn-dialog-close>
              <shadcn-button variant="outline">Cancel</shadcn-button>
            </shadcn-dialog-close>
            <shadcn-button>Save Changes</shadcn-button>
          </div>
        </shadcn-dialog-content>
      </shadcn-dialog-portal>
    </shadcn-dialog>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Dialog with an overlay backdrop that dims the background content.'
      }
    }
  }
}`,...(Le=(je=G.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var Be,Ke,_e;Y.parameters={...Y.parameters,docs:{...(Be=Y.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => html\`
    <shadcn-dialog .open=\${args.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4);">
          <shadcn-dialog-title>Confirm Action</shadcn-dialog-title>
          <shadcn-dialog-close>
            <shadcn-button variant="ghost" size="icon" style="margin-left: auto;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </shadcn-button>
          </shadcn-dialog-close>
        </div>
        <shadcn-dialog-description>
          Are you sure you want to perform this action? This cannot be undone.
        </shadcn-dialog-description>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Cancel</shadcn-button>
          </shadcn-dialog-close>
          <shadcn-button variant="destructive">Delete</shadcn-button>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Dialog with a close button in the header.'
      }
    }
  }
}`,...(_e=(Ke=Y.parameters)==null?void 0:Ke.docs)==null?void 0:_e.source}}};var Me,$e,Ve;Z.parameters={...Z.parameters,docs:{...(Me=Z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => html\`
    <shadcn-dialog .open=\${args.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Long Content Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content style="max-height: 80vh; overflow-y: auto;">
        <shadcn-dialog-title>Terms and Conditions</shadcn-dialog-title>
        <shadcn-dialog-description>
          Please read the following terms and conditions carefully.
        </shadcn-dialog-description>
        <div style="margin-top: var(--spacing-4); max-height: 60vh; overflow-y: auto;">
          <p style="margin-bottom: var(--spacing-4);">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p style="margin-bottom: var(--spacing-4);">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Decline</shadcn-button>
          </shadcn-dialog-close>
          <shadcn-button>Accept</shadcn-button>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Dialog with scrollable long content.'
      }
    }
  }
}`,...(Ve=($e=Z.parameters)==null?void 0:$e.docs)==null?void 0:Ve.source}}};var ze,He,We;X.parameters={...X.parameters,docs:{...(ze=X.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => html\`
    <shadcn-dialog .open=\${args.open}>
      <shadcn-dialog-trigger>
        <shadcn-button>Open Dialog</shadcn-button>
      </shadcn-dialog-trigger>
      <shadcn-dialog-content>
        <shadcn-dialog-title>Simple Dialog</shadcn-dialog-title>
        <div style="margin-top: var(--spacing-4);">
          <p>This dialog doesn't have a description, just a title and content.</p>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--spacing-2); margin-top: var(--spacing-6);">
          <shadcn-dialog-close>
            <shadcn-button variant="outline">Close</shadcn-button>
          </shadcn-dialog-close>
        </div>
      </shadcn-dialog-content>
    </shadcn-dialog>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Dialog without a description element.'
      }
    }
  }
}`,...(We=(He=X.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};const Yt=["Default","WithOverlay","WithCloseButton","LongContent","WithoutDescription"];export{U as Default,Z as LongContent,Y as WithCloseButton,G as WithOverlay,X as WithoutDescription,Yt as __namedExportsOrder,Gt as default};
