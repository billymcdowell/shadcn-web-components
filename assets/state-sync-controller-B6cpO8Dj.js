/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let u=class extends Event{constructor(t,s,e,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=s,this.callback=e,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let l=class{constructor(t,s,e,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(h,i)=>{this.unsubscribe&&(this.unsubscribe!==i&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=h,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(h,i)),this.unsubscribe=i},this.host=t,s.context!==void 0){const h=s;this.context=h.context,this.callback=h.callback,this.subscribe=h.subscribe??!1}else this.context=s,this.callback=e,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new u(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,s=!1){const e=s||!Object.is(t,this.o);this.o=t,e&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:e}]of this.subscriptions)s(this.o,e)},t!==void 0&&(this.value=t)}addCallback(t,s,e){if(!e)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:s});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class b extends Event{constructor(t,s){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=s}}class p extends d{constructor(t,s,e){var r,h;super(s.context!==void 0?s.initialValue:e),this.onContextRequest=i=>{if(i.context!==this.context)return;const n=i.contextTarget??i.composedPath()[0];n!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,n,i.subscribe))},this.onProviderRequest=i=>{if(i.context!==this.context||(i.contextTarget??i.composedPath()[0])===this.host)return;const n=new Set;for(const[c,{consumerHost:a}]of this.subscriptions)n.has(c)||(n.add(c),a.dispatchEvent(new u(this.context,a,c,!0)));i.stopPropagation()},this.host=t,s.context!==void 0?this.context=s.context:this.context=s,this.attachListeners(),(h=(r=this.host).addController)==null||h.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new b(this.context,this.host))}}function C(o){return o}class f{constructor(t,s,e){this.host=t,this._value=e,this.provider=new p(t,{context:s,initialValue:e}),t.addController(this)}hostConnected(){}hostDisconnected(){}getValue(){return this._value}setValue(t){this._value=t,this.provider.setValue(t),this.host.requestUpdate()}updateValue(t){this.setValue(t(this._value))}}class g{constructor(t,s){this._value=void 0,this.host=t,this.context=s,this.consumer=new l(t,{context:s,callback:e=>{this._value=e,this.host.requestUpdate()},subscribe:!0}),t.addController(this),this.context,this.consumer}hostConnected(){}hostDisconnected(){}get value(){return this._value}get hasValue(){return this._value!==void 0}}class k{constructor(t,s){this.previousOpen=void 0,this.host=t,this.getState=s,t.addController(this)}hostConnected(){this.updateState()}hostUpdate(){this.updateState()}updateState(){const t=this.getState();if(t===void 0)return;const s=t.open;this.previousOpen!==s&&(this.host.dataset.state=s?"open":"closed",this.previousOpen=s)}}export{f as C,k as S,g as a,C as c};
