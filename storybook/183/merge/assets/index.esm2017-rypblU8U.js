/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=()=>{};var Co={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},dl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ua={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,y=(o&3)<<4|l>>4;let v=(l&15)<<2|f>>6,S=f&63;h||(S=64,a||(v=64)),r.push(e[m],e[y],e[v],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Fa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):dl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||y==null)throw new fl;const v=o<<2|l>>4;if(r.push(v),f!==64){const S=l<<4&240|f>>2;if(r.push(S),y!==64){const V=f<<6&192|y;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ml=function(n){const t=Fa(n);return Ua.encodeByteArray(t,!0)},sr=function(n){return ml(n).replace(/\./g,"")},pl=function(n){try{return Ua.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=()=>gl().__FIREBASE_DEFAULTS__,yl=()=>{if(typeof process>"u"||typeof Co>"u")return;const n=Co.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},El=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&pl(n[1]);return t&&JSON.parse(t)},yr=()=>{try{return hl()||_l()||yl()||El()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vl=n=>{var t,e;return(e=(t=yr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Tl=n=>{const t=vl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ba=()=>{var n;return(n=yr())===null||n===void 0?void 0:n.config},ip=n=>{var t;return(t=yr())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n){return n.endsWith(".cloudworkstations.dev")}async function Al(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[sr(JSON.stringify(e)),sr(JSON.stringify(a)),""].join(".")}const an={};function Rl(){const n={prod:[],emulator:[]};for(const t of Object.keys(an))an[t]?n.emulator.push(t):n.prod.push(t);return n}function Cl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Po=!1;function Pl(n,t){if(typeof window>"u"||typeof document>"u"||!js(window.location.host)||an[n]===t||an[n]||Po)return;an[n]=t;function e(v){return`__firebase__banner__${v}`}const r="__firebase__banner",o=Rl().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function f(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Po=!0,a()},v}function m(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function y(){const v=Cl(r),S=e("text"),V=document.getElementById(S)||document.createElement("span"),x=e("learnmore"),D=document.getElementById(x)||document.createElement("a"),z=e("preprendIcon"),B=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const H=v.element;l(H),m(D,x);const tt=f();h(B,z),H.append(B,V,D,tt),document.body.appendChild(H)}o?(V.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function op(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($s())}function Sl(){var n;const t=(n=yr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ap(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function up(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lp(){const n=$s();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Vl(){return!Sl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bl(){try{return typeof indexedDB=="object"}catch{return!1}}function Dl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="FirebaseError";class ke extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Nl,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?kl(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ke(s,l,r)}}function kl(n,t){return n.replace(xl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const xl=/\{\$([^}]+)}/g;function hp(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function ir(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(So(o)&&So(a)){if(!ir(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function So(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function fp(n,t){const e=new Ol(n,t);return e.subscribe.bind(e)}class Ol{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Ml(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=cs),s.error===void 0&&(s.error=cs),s.complete===void 0&&(s.complete=cs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ml(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function cs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n){return n&&n._delegate?n._delegate:n}class fn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Il;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ul(t))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ce){return this.instances.has(t)}getOptions(t=ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ce){return this.component?this.component.multipleInstances?t:ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fl(n){return n===ce?void 0:n}function Ul(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ll(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const ql={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},jl=$.INFO,$l={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},zl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=$l[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ja{constructor(t){this.name=t,this._logLevel=jl,this._logHandler=zl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ql[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Hl=(n,t)=>t.some(e=>n instanceof e);let Vo,bo;function Gl(){return Vo||(Vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kl(){return bo||(bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $a=new WeakMap,ys=new WeakMap,za=new WeakMap,ls=new WeakMap,zs=new WeakMap;function Ql(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Gt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&$a.set(e,n)}).catch(()=>{}),zs.set(t,n),t}function Wl(n){if(ys.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ys.set(n,t)}let Es={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ys.get(n);if(t==="objectStoreNames")return n.objectStoreNames||za.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Gt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Xl(n){Es=n(Es)}function Yl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(hs(this),t,...e);return za.set(r,t.sort?t.sort():[t]),Gt(r)}:Kl().includes(n)?function(...t){return n.apply(hs(this),t),Gt($a.get(this))}:function(...t){return Gt(n.apply(hs(this),t))}}function Jl(n){return typeof n=="function"?Yl(n):(n instanceof IDBTransaction&&Wl(n),Hl(n,Gl())?new Proxy(n,Es):n)}function Gt(n){if(n instanceof IDBRequest)return Ql(n);if(ls.has(n))return ls.get(n);const t=Jl(n);return t!==n&&(ls.set(n,t),zs.set(t,n)),t}const hs=n=>zs.get(n);function Zl(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Gt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Gt(a.result),h.oldVersion,h.newVersion,Gt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const th=["get","getKey","getAll","getAllKeys","count"],eh=["put","add","delete","clear"],ds=new Map;function Do(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ds.get(t))return ds.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=eh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||th.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return ds.set(t,o),o}Xl(n=>({...n,get:(t,e,r)=>Do(t,e)||n.get(t,e,r),has:(t,e)=>!!Do(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(rh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function rh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vs="@firebase/app",No="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new ja("@firebase/app"),sh="@firebase/app-compat",ih="@firebase/analytics-compat",oh="@firebase/analytics",ah="@firebase/app-check-compat",uh="@firebase/app-check",ch="@firebase/auth",lh="@firebase/auth-compat",hh="@firebase/database",dh="@firebase/data-connect",fh="@firebase/database-compat",mh="@firebase/functions",ph="@firebase/functions-compat",gh="@firebase/installations",_h="@firebase/installations-compat",yh="@firebase/messaging",Eh="@firebase/messaging-compat",vh="@firebase/performance",Th="@firebase/performance-compat",Ih="@firebase/remote-config",Ah="@firebase/remote-config-compat",wh="@firebase/storage",Rh="@firebase/storage-compat",Ch="@firebase/firestore",Ph="@firebase/ai",Sh="@firebase/firestore-compat",Vh="firebase",bh="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="[DEFAULT]",Dh={[vs]:"fire-core",[sh]:"fire-core-compat",[oh]:"fire-analytics",[ih]:"fire-analytics-compat",[uh]:"fire-app-check",[ah]:"fire-app-check-compat",[ch]:"fire-auth",[lh]:"fire-auth-compat",[hh]:"fire-rtdb",[dh]:"fire-data-connect",[fh]:"fire-rtdb-compat",[mh]:"fire-fn",[ph]:"fire-fn-compat",[gh]:"fire-iid",[_h]:"fire-iid-compat",[yh]:"fire-fcm",[Eh]:"fire-fcm-compat",[vh]:"fire-perf",[Th]:"fire-perf-compat",[Ih]:"fire-rc",[Ah]:"fire-rc-compat",[wh]:"fire-gcs",[Rh]:"fire-gcs-compat",[Ch]:"fire-fst",[Sh]:"fire-fst-compat",[Ph]:"fire-vertex","fire-js":"fire-js",[Vh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Map,Nh=new Map,Is=new Map;function ko(n,t){try{n.container.addComponent(t)}catch(e){Ft.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ar(n){const t=n.name;if(Is.has(t))return Ft.debug(`There were multiple attempts to register component ${t}.`),!1;Is.set(t,n);for(const e of or.values())ko(e,n);for(const e of Nh.values())ko(e,n);return!0}function kh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function xh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new qa("app","Firebase",Oh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=bh;function Fh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ts,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(e||(e=Ba()),!e)throw Kt.create("no-options");const o=or.get(s);if(o){if(ir(e,o.options)&&ir(r,o.config))return o;throw Kt.create("duplicate-app",{appName:s})}const a=new Bl(s);for(const h of Is.values())a.addComponent(h);const l=new Mh(e,r,a);return or.set(s,l),l}function Uh(n=Ts){const t=or.get(n);if(!t&&n===Ts&&Ba())return Fh();if(!t)throw Kt.create("no-app",{appName:n});return t}function un(n,t,e){var r;let s=(r=Dh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ft.warn(l.join(" "));return}ar(new fn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="firebase-heartbeat-database",qh=1,mn="firebase-heartbeat-store";let fs=null;function Ha(){return fs||(fs=Zl(Bh,qh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(mn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),fs}async function jh(n){try{const e=(await Ha()).transaction(mn),r=await e.objectStore(mn).get(Ga(n));return await e.done,r}catch(t){if(t instanceof ke)Ft.warn(t.message);else{const e=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ft.warn(e.message)}}}async function xo(n,t){try{const r=(await Ha()).transaction(mn,"readwrite");await r.objectStore(mn).put(t,Ga(n)),await r.done}catch(e){if(e instanceof ke)Ft.warn(e.message);else{const r=Kt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(r.message)}}}function Ga(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=1024,zh=30;class Hh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Kh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Oo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>zh){const a=Qh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ft.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Oo(),{heartbeatsToSend:r,unsentEntries:s}=Gh(this._heartbeatsCache.heartbeats),o=sr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ft.warn(e),""}}}function Oo(){return new Date().toISOString().substring(0,10)}function Gh(n,t=$h){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Mo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Mo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Kh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bl()?Dl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await jh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return xo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return xo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Mo(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}function Qh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(n){ar(new fn("platform-logger",t=>new nh(t),"PRIVATE")),ar(new fn("heartbeat",t=>new Hh(t),"PRIVATE")),un(vs,No,n),un(vs,No,"esm2017"),un("fire-js","")}Wh("");var Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,Ka;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,p){function _(){}_.prototype=p.prototype,I.D=p.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(E,T,w){for(var g=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)g[Ot-2]=arguments[Ot];return p.prototype[T].apply(E,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,_){_||(_=0);var E=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)E[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)E[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=I.g[0],_=I.g[1],T=I.g[2];var w=I.g[3],g=p+(w^_&(T^w))+E[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=w+(T^p&(_^T))+E[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=T+(_^w&(p^_))+E[2]+606105819&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(p^T&(w^p))+E[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(w^_&(T^w))+E[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(T^p&(_^T))+E[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=T+(_^w&(p^_))+E[6]+2821735955&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(p^T&(w^p))+E[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(w^_&(T^w))+E[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(T^p&(_^T))+E[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=T+(_^w&(p^_))+E[10]+4294925233&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(p^T&(w^p))+E[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(w^_&(T^w))+E[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(T^p&(_^T))+E[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=T+(_^w&(p^_))+E[14]+2792965006&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(p^T&(w^p))+E[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^w&(_^T))+E[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(p^_))+E[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(w^p))+E[11]+643717713&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(T^w))+E[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^w&(_^T))+E[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(p^_))+E[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(w^p))+E[15]+3634488961&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(T^w))+E[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^w&(_^T))+E[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(p^_))+E[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(w^p))+E[3]+4107603335&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(T^w))+E[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^w&(_^T))+E[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(p^_))+E[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(w^p))+E[7]+1735328473&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(T^w))+E[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^w)+E[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^T)+E[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=T+(w^p^_)+E[11]+1839030562&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^p)+E[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^w)+E[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^T)+E[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=T+(w^p^_)+E[7]+4139469664&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^p)+E[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^w)+E[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^T)+E[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=T+(w^p^_)+E[3]+3572445317&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^p)+E[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^w)+E[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^T)+E[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=T+(w^p^_)+E[15]+530742520&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^p)+E[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~w))+E[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~T))+E[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=T+(p^(w|~_))+E[14]+2878612391&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~p))+E[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~w))+E[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~T))+E[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=T+(p^(w|~_))+E[10]+4293915773&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~p))+E[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~w))+E[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~T))+E[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=T+(p^(w|~_))+E[6]+2734768916&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~p))+E[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~w))+E[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~T))+E[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=T+(p^(w|~_))+E[2]+718787259&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~p))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+w&4294967295}r.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var _=p-this.blockSize,E=this.B,T=this.h,w=0;w<p;){if(T==0)for(;w<=_;)s(this,I,w),w+=this.blockSize;if(typeof I=="string"){for(;w<p;)if(E[T++]=I.charCodeAt(w++),T==this.blockSize){s(this,E),T=0;break}}else for(;w<p;)if(E[T++]=I[w++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var _=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=_&255,_/=256;for(this.u(I),I=Array(16),p=_=0;4>p;++p)for(var E=0;32>E;E+=8)I[_++]=this.g[p]>>>E&255;return I};function o(I,p){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=p(I)}function a(I,p){this.h=p;for(var _=[],E=!0,T=I.length-1;0<=T;T--){var w=I[T]|0;E&&w==p||(_[T]=w,E=!1)}this.g=_}var l={};function h(I){return-128<=I&&128>I?o(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return y;if(0>I)return D(f(-I));for(var p=[],_=1,E=0;I>=_;E++)p[E]=I/_|0,_*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return D(m(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),E=y,T=0;T<I.length;T+=8){var w=Math.min(8,I.length-T),g=parseInt(I.substring(T,T+w),p);8>w?(w=f(Math.pow(p,w)),E=E.j(w).add(f(g))):(E=E.j(_),E=E.add(f(g)))}return E}var y=h(0),v=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-D(this).m();for(var I=0,p=1,_=0;_<this.g.length;_++){var E=this.i(_);I+=(0<=E?E:4294967296+E)*p,p*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(x(this))return"-"+D(this).toString(I);for(var p=f(Math.pow(I,6)),_=this,E="";;){var T=tt(_,p).g;_=z(_,T.j(p));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=T,V(_))return w+E;for(;6>w.length;)w="0"+w;E=w+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function x(I){return I.h==-1}n.l=function(I){return I=z(this,I),x(I)?-1:V(I)?0:1};function D(I){for(var p=I.g.length,_=[],E=0;E<p;E++)_[E]=~I.g[E];return new a(_,~I.h).add(v)}n.abs=function(){return x(this)?D(this):this},n.add=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],E=0,T=0;T<=p;T++){var w=E+(this.i(T)&65535)+(I.i(T)&65535),g=(w>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=g>>>16,w&=65535,g&=65535,_[T]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(I,p){return I.add(D(p))}n.j=function(I){if(V(this)||V(I))return y;if(x(this))return x(I)?D(this).j(D(I)):D(D(this).j(I));if(x(I))return D(this.j(D(I)));if(0>this.l(S)&&0>I.l(S))return f(this.m()*I.m());for(var p=this.g.length+I.g.length,_=[],E=0;E<2*p;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var w=this.i(E)>>>16,g=this.i(E)&65535,Ot=I.i(T)>>>16,Ue=I.i(T)&65535;_[2*E+2*T]+=g*Ue,B(_,2*E+2*T),_[2*E+2*T+1]+=w*Ue,B(_,2*E+2*T+1),_[2*E+2*T+1]+=g*Ot,B(_,2*E+2*T+1),_[2*E+2*T+2]+=w*Ot,B(_,2*E+2*T+2)}for(E=0;E<p;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=p;E<2*p;E++)_[E]=0;return new a(_,0)};function B(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function H(I,p){this.g=I,this.h=p}function tt(I,p){if(V(p))throw Error("division by zero");if(V(I))return new H(y,y);if(x(I))return p=tt(D(I),p),new H(D(p.g),D(p.h));if(x(p))return p=tt(I,D(p)),new H(D(p.g),p.h);if(30<I.g.length){if(x(I)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=v,E=p;0>=E.l(I);)_=xt(_),E=xt(E);var T=ot(_,1),w=ot(E,1);for(E=ot(E,2),_=ot(_,2);!V(E);){var g=w.add(E);0>=g.l(I)&&(T=T.add(_),w=g),E=ot(E,1),_=ot(_,1)}return p=z(I,T.j(p)),new H(T,p)}for(T=y;0<=I.l(p);){for(_=Math.max(1,Math.floor(I.m()/p.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),w=f(_),g=w.j(p);x(g)||0<g.l(I);)_-=E,w=f(_),g=w.j(p);V(w)&&(w=v),T=T.add(w),I=z(I,g)}return new H(T,I)}n.A=function(I){return tt(this,I).h},n.and=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)&I.i(E);return new a(_,this.h&I.h)},n.or=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)|I.i(E);return new a(_,this.h|I.h)},n.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)^I.i(E);return new a(_,this.h^I.h)};function xt(I){for(var p=I.g.length+1,_=[],E=0;E<p;E++)_[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(_,I.h)}function ot(I,p){var _=p>>5;p%=32;for(var E=I.g.length-_,T=[],w=0;w<E;w++)T[w]=0<p?I.i(w+_)>>>p|I.i(w+_+1)<<32-p:I.i(w+_);return new a(T,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ka=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Qt=a}).apply(typeof Lo<"u"?Lo:typeof self<"u"?self:typeof window<"u"?window:{});var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qa,nn,Wa,Jn,As,Xa,Ya,Ja;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,c){return i==Array.prototype||i==Object.prototype||(i[u]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kn=="object"&&Kn];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var A=i[d];if(!(A in c))break t;c=c[A]}i=i[i.length-1],d=c[i],u=u(d),u!=d&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var c=0,d=!1,A={next:function(){if(!d&&c<i.length){var R=c++;return{value:u(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,c){return i.call.apply(i.bind,arguments)}function y(i,u,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,d),i.apply(u,A)}}return function(){return i.apply(u,arguments)}}function v(i,u,c){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,v.apply(null,arguments)}function S(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function V(i,u){function c(){}c.prototype=u.prototype,i.aa=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,A,R){for(var b=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)b[Q-2]=arguments[Q];return u.prototype[A].apply(d,b)}}function x(i){const u=i.length;if(0<u){const c=Array(u);for(let d=0;d<u;d++)c[d]=i[d];return c}return[]}function D(i,u){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const A=i.length||0,R=d.length||0;i.length=A+R;for(let b=0;b<R;b++)i[A+b]=d[b]}else i.push(d)}}class z{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function tt(i){return tt[" "](i),i}tt[" "]=function(){};var xt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ot(i,u,c){for(const d in i)u.call(c,i[d],d,i)}function I(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function p(i){const u={};for(const c in i)u[c]=i[c];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,u){let c,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(c in d)i[c]=d[c];for(let R=0;R<_.length;R++)c=_[R],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function T(i){var u=1;i=i.split(":");const c=[];for(;0<u&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function w(i){l.setTimeout(()=>{throw i},0)}function g(){var i=Ur;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Ot{constructor(){this.h=this.g=null}add(u,c){const d=Ue.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Ue=new z(()=>new bc,i=>i.reset());class bc{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,qe=!1,Ur=new Ot,Ri=()=>{const i=l.Promise.resolve(void 0);Be=()=>{i.then(Dc)}};var Dc=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){w(c)}var u=Ue;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}qe=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Nc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return i}();function je(i,u){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(xt){t:{try{tt(u.nodeName);var A=!0;break t}catch{}A=!1}A||(u=null)}}else c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:kc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&je.aa.h.call(this)}}V(je,ht);var kc={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Sn="closure_listenable_"+(1e6*Math.random()|0),xc=0;function Oc(i,u,c,d,A){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=A,this.key=++xc,this.da=this.fa=!1}function Vn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function bn(i){this.src=i,this.g={},this.h=0}bn.prototype.add=function(i,u,c,d,A){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var b=qr(i,u,d,A);return-1<b?(u=i[b],c||(u.fa=!1)):(u=new Oc(u,this.src,R,!!d,A),u.fa=c,i.push(u)),u};function Br(i,u){var c=u.type;if(c in i.g){var d=i.g[c],A=Array.prototype.indexOf.call(d,u,void 0),R;(R=0<=A)&&Array.prototype.splice.call(d,A,1),R&&(Vn(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function qr(i,u,c,d){for(var A=0;A<i.length;++A){var R=i[A];if(!R.da&&R.listener==u&&R.capture==!!c&&R.ha==d)return A}return-1}var jr="closure_lm_"+(1e6*Math.random()|0),$r={};function Ci(i,u,c,d,A){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Ci(i,u[R],c,d,A);return null}return c=Vi(c),i&&i[Sn]?i.K(u,c,f(d)?!!d.capture:!1,A):Mc(i,u,c,!1,d,A)}function Mc(i,u,c,d,A,R){if(!u)throw Error("Invalid event type");var b=f(A)?!!A.capture:!!A,Q=Hr(i);if(Q||(i[jr]=Q=new bn(i)),c=Q.add(u,c,d,b,R),c.proxy)return c;if(d=Lc(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)Nc||(A=b),A===void 0&&(A=!1),i.addEventListener(u.toString(),d,A);else if(i.attachEvent)i.attachEvent(Si(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Lc(){function i(c){return u.call(i.src,i.listener,c)}const u=Fc;return i}function Pi(i,u,c,d,A){if(Array.isArray(u))for(var R=0;R<u.length;R++)Pi(i,u[R],c,d,A);else d=f(d)?!!d.capture:!!d,c=Vi(c),i&&i[Sn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],c=qr(R,c,d,A),-1<c&&(Vn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=Hr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=qr(u,c,d,A)),(c=-1<i?u[i]:null)&&zr(c))}function zr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Sn])Br(u.i,i);else{var c=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(c,d,i.capture):u.detachEvent?u.detachEvent(Si(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=Hr(u))?(Br(c,i),c.h==0&&(c.src=null,u[jr]=null)):Vn(i)}}}function Si(i){return i in $r?$r[i]:$r[i]="on"+i}function Fc(i,u){if(i.da)i=!0;else{u=new je(u,this);var c=i.listener,d=i.ha||i.src;i.fa&&zr(i),i=c.call(d,u)}return i}function Hr(i){return i=i[jr],i instanceof bn?i:null}var Gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vi(i){return typeof i=="function"?i:(i[Gr]||(i[Gr]=function(u){return i.handleEvent(u)}),i[Gr])}function dt(){qt.call(this),this.i=new bn(this),this.M=this,this.F=null}V(dt,qt),dt.prototype[Sn]=!0,dt.prototype.removeEventListener=function(i,u,c,d){Pi(this,i,u,c,d)};function Et(i,u){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new ht(u,i);else if(u instanceof ht)u.target=u.target||i;else{var A=u;u=new ht(d,i),E(u,A)}if(A=!0,c)for(var R=c.length-1;0<=R;R--){var b=u.g=c[R];A=Dn(b,d,!0,u)&&A}if(b=u.g=i,A=Dn(b,d,!0,u)&&A,A=Dn(b,d,!1,u)&&A,c)for(R=0;R<c.length;R++)b=u.g=c[R],A=Dn(b,d,!1,u)&&A}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var c=i.g[u],d=0;d<c.length;d++)Vn(c[d]);delete i.g[u],i.h--}}this.F=null},dt.prototype.K=function(i,u,c,d){return this.i.add(String(i),u,!1,c,d)},dt.prototype.L=function(i,u,c,d){return this.i.add(String(i),u,!0,c,d)};function Dn(i,u,c,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,R=0;R<u.length;++R){var b=u[R];if(b&&!b.da&&b.capture==c){var Q=b.listener,at=b.ha||b.src;b.fa&&Br(i.i,b),A=Q.call(at,d)!==!1&&A}}return A&&!d.defaultPrevented}function bi(i,u,c){if(typeof i=="function")c&&(i=v(i,c));else if(i&&typeof i.handleEvent=="function")i=v(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function Di(i){i.g=bi(()=>{i.g=null,i.i&&(i.i=!1,Di(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Uc extends qt{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Di(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(i){qt.call(this),this.h=i,this.g={}}V($e,qt);var Ni=[];function ki(i){ot(i.g,function(u,c){this.g.hasOwnProperty(c)&&zr(u)},i),i.g={}}$e.prototype.N=function(){$e.aa.N.call(this),ki(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kr=l.JSON.stringify,Bc=l.JSON.parse,qc=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Qr(){}Qr.prototype.h=null;function xi(i){return i.h||(i.h=i.i())}function Oi(){}var ze={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wr(){ht.call(this,"d")}V(Wr,ht);function Xr(){ht.call(this,"c")}V(Xr,ht);var ie={},Mi=null;function Nn(){return Mi=Mi||new dt}ie.La="serverreachability";function Li(i){ht.call(this,ie.La,i)}V(Li,ht);function He(i){const u=Nn();Et(u,new Li(u))}ie.STAT_EVENT="statevent";function Fi(i,u){ht.call(this,ie.STAT_EVENT,i),this.stat=u}V(Fi,ht);function vt(i){const u=Nn();Et(u,new Fi(u,i))}ie.Ma="timingevent";function Ui(i,u){ht.call(this,ie.Ma,i),this.size=u}V(Ui,ht);function Ge(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function Ke(){this.g=!0}Ke.prototype.xa=function(){this.g=!1};function jc(i,u,c,d,A,R){i.info(function(){if(i.g)if(R)for(var b="",Q=R.split("&"),at=0;at<Q.length;at++){var G=Q[at].split("=");if(1<G.length){var ft=G[0];G=G[1];var mt=ft.split("_");b=2<=mt.length&&mt[1]=="type"?b+(ft+"="+G+"&"):b+(ft+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+u+`
`+c+`
`+b})}function $c(i,u,c,d,A,R,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+u+`
`+c+`
`+R+" "+b})}function _e(i,u,c,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Hc(i,c)+(d?" "+d:"")})}function zc(i,u){i.info(function(){return"TIMEOUT: "+u})}Ke.prototype.info=function(){};function Hc(i,u){if(!i.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var A=d[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<A.length;b++)A[b]=""}}}}return Kr(c)}catch{return u}}var kn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yr;function xn(){}V(xn,Qr),xn.prototype.g=function(){return new XMLHttpRequest},xn.prototype.i=function(){return{}},Yr=new xn;function jt(i,u,c,d){this.j=i,this.i=u,this.l=c,this.R=d||1,this.U=new $e(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qi}function qi(){this.i=null,this.g="",this.h=!1}var ji={},Jr={};function Zr(i,u,c){i.L=1,i.v=Fn(Mt(u)),i.m=c,i.P=!0,$i(i,null)}function $i(i,u){i.F=Date.now(),On(i),i.A=Mt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),ro(c.i,"t",d),i.C=0,c=i.j.J,i.h=new qi,i.g=Io(i.j,c?u:null,!i.m),0<i.O&&(i.M=new Uc(v(i.Y,i,i.g),i.O)),u=i.U,c=i.g,d=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ni[0]=A.toString()),A=Ni);for(var R=0;R<A.length;R++){var b=Ci(c,A[R],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),He(),jc(i.i,i.u,i.A,i.l,i.R,i.m)}jt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Lt(i)==3?u.j():this.Y(i)},jt.prototype.Y=function(i){try{if(i==this.g)t:{const mt=Lt(this.g);var u=this.g.Ba();const ve=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||lo(this.g)))){this.J||mt!=4||u==7||(u==8||0>=ve?He(3):He(2)),ts(this);var c=this.g.Z();this.X=c;e:if(zi(this)){var d=lo(this.g);i="";var A=d.length,R=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oe(this),Qe(this);var b="";break e}this.h.i=new l.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(R&&u==A-1)});d.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=c==200,$c(this.i,this.u,this.A,this.l,this.R,mt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,at=this.g;if((Q=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Q)){var G=Q;break e}}G=null}if(c=G)_e(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,es(this,c);else{this.o=!1,this.s=3,vt(12),oe(this),Qe(this);break t}}if(this.P){c=!0;let Rt;for(;!this.J&&this.C<b.length;)if(Rt=Gc(this,b),Rt==Jr){mt==4&&(this.s=4,vt(14),c=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==ji){this.s=4,vt(15),_e(this.i,this.l,b,"[Invalid Chunk]"),c=!1;break}else _e(this.i,this.l,Rt,null),es(this,Rt);if(zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||b.length!=0||this.h.h||(this.s=1,vt(16),c=!1),this.o=this.o&&c,!c)_e(this.i,this.l,b,"[Invalid Chunked Response]"),oe(this),Qe(this);else if(0<b.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),as(ft),ft.M=!0,vt(11))}}else _e(this.i,this.l,b,null),es(this,b);mt==4&&oe(this),this.o&&!this.J&&(mt==4?yo(this.j,this):(this.o=!1,On(this)))}else cl(this.g),c==400&&0<b.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),oe(this),Qe(this)}}}catch{}finally{}};function zi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Gc(i,u){var c=i.C,d=u.indexOf(`
`,c);return d==-1?Jr:(c=Number(u.substring(c,d)),isNaN(c)?ji:(d+=1,d+c>u.length?Jr:(u=u.slice(d,d+c),i.C=d+c,u)))}jt.prototype.cancel=function(){this.J=!0,oe(this)};function On(i){i.S=Date.now()+i.I,Hi(i,i.I)}function Hi(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ge(v(i.ba,i),u)}function ts(i){i.B&&(l.clearTimeout(i.B),i.B=null)}jt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(zc(this.i,this.A),this.L!=2&&(He(),vt(17)),oe(this),this.s=2,Qe(this)):Hi(this,this.S-i)};function Qe(i){i.j.G==0||i.J||yo(i.j,i)}function oe(i){ts(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,ki(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function es(i,u){try{var c=i.j;if(c.G!=0&&(c.g==i||ns(c.h,i))){if(!i.K&&ns(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)zn(c),jn(c);else break t;os(c),vt(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=Ge(v(c.Za,c),6e3));if(1>=Qi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ue(c,11)}else if((i.K||c.g==i)&&zn(c),!B(u))for(A=c.Da.g.parse(u),u=0;u<A.length;u++){let G=A[u];if(c.T=G[0],G=G[1],c.G==2)if(G[0]=="c"){c.K=G[1],c.ia=G[2];const ft=G[3];ft!=null&&(c.la=ft,c.j.info("VER="+c.la));const mt=G[4];mt!=null&&(c.Aa=mt,c.j.info("SVER="+c.Aa));const ve=G[5];ve!=null&&typeof ve=="number"&&0<ve&&(d=1.5*ve,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Rt=i.g;if(Rt){const Gn=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gn){var R=d.h;R.g||Gn.indexOf("spdy")==-1&&Gn.indexOf("quic")==-1&&Gn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(rs(R,R.h),R.h=null))}if(d.D){const us=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;us&&(d.ya=us,W(d.I,d.D,us))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var b=i;if(d.qa=To(d,d.J?d.ia:null,d.W),b.K){Wi(d.h,b);var Q=b,at=d.L;at&&(Q.I=at),Q.B&&(ts(Q),On(Q)),d.g=b}else go(d);0<c.i.length&&$n(c)}else G[0]!="stop"&&G[0]!="close"||ue(c,7);else c.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?ue(c,7):is(c):G[0]!="noop"&&c.l&&c.l.ta(G),c.v=0)}}He(4)}catch{}}var Kc=class{constructor(i,u){this.g=i,this.map=u}};function Gi(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ki(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Qi(i){return i.h?1:i.g?i.g.size:0}function ns(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function rs(i,u){i.g?i.g.add(u):i.h=u}function Wi(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Gi.prototype.cancel=function(){if(this.i=Xi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Xi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.D);return u}return x(i.i)}function Qc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],c=i.length,d=0;d<c;d++)u.push(i[d]);return u}u=[],c=0;for(d in i)u[c++]=i[d];return u}function Wc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var c=0;c<i;c++)u.push(c);return u}u=[],c=0;for(const d in i)u[c++]=d;return u}}}function Yi(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var c=Wc(i),d=Qc(i),A=d.length,R=0;R<A;R++)u.call(void 0,d[R],c&&c[R],i)}var Ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xc(i,u){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),A=null;if(0<=d){var R=i[c].substring(0,d);A=i[c].substring(d+1)}else R=i[c];u(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function ae(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ae){this.h=i.h,Mn(this,i.j),this.o=i.o,this.g=i.g,Ln(this,i.s),this.l=i.l;var u=i.i,c=new Ye;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),Zi(this,c),this.m=i.m}else i&&(u=String(i).match(Ji))?(this.h=!1,Mn(this,u[1]||"",!0),this.o=We(u[2]||""),this.g=We(u[3]||"",!0),Ln(this,u[4]),this.l=We(u[5]||"",!0),Zi(this,u[6]||"",!0),this.m=We(u[7]||"")):(this.h=!1,this.i=new Ye(null,this.h))}ae.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Xe(u,to,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Xe(u,to,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Xe(c,c.charAt(0)=="/"?Zc:Jc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Xe(c,el)),i.join("")};function Mt(i){return new ae(i)}function Mn(i,u,c){i.j=c?We(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Ln(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function Zi(i,u,c){u instanceof Ye?(i.i=u,nl(i.i,i.h)):(c||(u=Xe(u,tl)),i.i=new Ye(u,i.h))}function W(i,u,c){i.i.set(u,c)}function Fn(i){return W(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function We(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Xe(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,Yc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Yc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var to=/[#\/\?@]/g,Jc=/[#\?:]/g,Zc=/[#\?]/g,tl=/[#\?@]/g,el=/#/g;function Ye(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function $t(i){i.g||(i.g=new Map,i.h=0,i.i&&Xc(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=Ye.prototype,n.add=function(i,u){$t(this),this.i=null,i=ye(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function eo(i,u){$t(i),u=ye(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function no(i,u){return $t(i),u=ye(i,u),i.g.has(u)}n.forEach=function(i,u){$t(this),this.g.forEach(function(c,d){c.forEach(function(A){i.call(u,A,d,this)},this)},this)},n.na=function(){$t(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let d=0;d<u.length;d++){const A=i[d];for(let R=0;R<A.length;R++)c.push(u[d])}return c},n.V=function(i){$t(this);let u=[];if(typeof i=="string")no(this,i)&&(u=u.concat(this.g.get(ye(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)u=u.concat(i[c])}return u},n.set=function(i,u){return $t(this),this.i=null,i=ye(this,i),no(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function ro(i,u,c){eo(i,u),0<c.length&&(i.i=null,i.g.set(ye(i,u),x(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var d=u[c];const R=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var A=R;b[d]!==""&&(A+="="+encodeURIComponent(String(b[d]))),i.push(A)}}return this.i=i.join("&")};function ye(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function nl(i,u){u&&!i.j&&($t(i),i.i=null,i.g.forEach(function(c,d){var A=d.toLowerCase();d!=A&&(eo(this,d),ro(this,A,c))},i)),i.j=u}function rl(i,u){const c=new Ke;if(l.Image){const d=new Image;d.onload=S(zt,c,"TestLoadImage: loaded",!0,u,d),d.onerror=S(zt,c,"TestLoadImage: error",!1,u,d),d.onabort=S(zt,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=S(zt,c,"TestLoadImage: timeout",!1,u,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function sl(i,u){const c=new Ke,d=new AbortController,A=setTimeout(()=>{d.abort(),zt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(A),R.ok?zt(c,"TestPingServer: ok",!0,u):zt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),zt(c,"TestPingServer: error",!1,u)})}function zt(i,u,c,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(c)}catch{}}function il(){this.g=new qc}function ol(i,u,c){const d=c||"";try{Yi(i,function(A,R){let b=A;f(A)&&(b=Kr(A)),u.push(d+R+"="+encodeURIComponent(b))})}catch(A){throw u.push(d+"type="+encodeURIComponent("_badmap")),A}}function Un(i){this.l=i.Ub||null,this.j=i.eb||!1}V(Un,Qr),Un.prototype.g=function(){return new Bn(this.l,this.j)},Un.prototype.i=function(i){return function(){return i}}({});function Bn(i,u){dt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Bn,dt),n=Bn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Ze(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Je(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ze(this)),this.g&&(this.readyState=3,Ze(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;so(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function so(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Je(this):Ze(this),this.readyState==3&&so(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Je(this))},n.Qa=function(i){this.g&&(this.response=i,Je(this))},n.ga=function(){this.g&&Je(this)};function Je(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Ze(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function Ze(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function io(i){let u="";return ot(i,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function ss(i,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=io(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):W(i,u,c))}function J(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(J,dt);var al=/^https?$/i,ul=["POST","PUT"];n=J.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yr.g(),this.v=this.o?xi(this.o):xi(Yr),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){oo(this,R);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)c.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),A=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ul,u,void 0))||d||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of c)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{co(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){oo(this,R)}};function oo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,ao(i),qn(i)}function ao(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Et(this,"complete"),Et(this,"abort"),qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?uo(this):this.bb())},n.bb=function(){uo(this)};function uo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Lt(i)!=4||i.Z()!=2)){if(i.u&&Lt(i)==4)bi(i.Ea,0,i);else if(Et(i,"readystatechange"),Lt(i)==4){i.h=!1;try{const b=i.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=b===0){var A=String(i.D).match(Ji)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),d=!al.test(A?A.toLowerCase():"")}c=d}if(c)Et(i,"complete"),Et(i,"success");else{i.m=6;try{var R=2<Lt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",ao(i)}}finally{qn(i)}}}}function qn(i,u){if(i.g){co(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||Et(i,"ready");try{c.onreadystatechange=d}catch{}}}function co(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Lt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Bc(u)}};function lo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function cl(i){const u={};i=(i.g&&2<=Lt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(B(i[d]))continue;var c=T(i[d]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=u[A]||[];u[A]=R,R.push(c)}I(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function tn(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function ho(i){this.Aa=0,this.i=[],this.j=new Ke,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tn("baseRetryDelayMs",5e3,i),this.cb=tn("retryDelaySeedMs",1e4,i),this.Wa=tn("forwardChannelMaxRetries",2,i),this.wa=tn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Gi(i&&i.concurrentRequestLimit),this.Da=new il,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ho.prototype,n.la=8,n.G=1,n.connect=function(i,u,c,d){vt(0),this.W=i,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=To(this,null,this.W),$n(this)};function is(i){if(fo(i),i.G==3){var u=i.U++,c=Mt(i.I);if(W(c,"SID",i.K),W(c,"RID",u),W(c,"TYPE","terminate"),en(i,c),u=new jt(i,i.j,u),u.L=2,u.v=Fn(Mt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=Io(u.j,null),u.g.ea(u.v)),u.F=Date.now(),On(u)}vo(i)}function jn(i){i.g&&(as(i),i.g.cancel(),i.g=null)}function fo(i){jn(i),i.u&&(l.clearTimeout(i.u),i.u=null),zn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function $n(i){if(!Ki(i.h)&&!i.s){i.s=!0;var u=i.Ga;Be||Ri(),qe||(Be(),qe=!0),Ur.add(u,i),i.B=0}}function ll(i,u){return Qi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Ge(v(i.Ga,i,u),Eo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new jt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=po(this,A,u),c=Mt(this.I),W(c,"RID",i),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),en(this,c),R&&(this.O?u="headers="+encodeURIComponent(String(io(R)))+"&"+u:this.m&&ss(c,this.m,R)),rs(this.h,A),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",u),W(c,"SID","null"),A.T=!0,Zr(A,c,null)):Zr(A,c,u),this.G=2}}else this.G==3&&(i?mo(this,i):this.i.length==0||Ki(this.h)||mo(this))};function mo(i,u){var c;u?c=u.l:c=i.U++;const d=Mt(i.I);W(d,"SID",i.K),W(d,"RID",c),W(d,"AID",i.T),en(i,d),i.m&&i.o&&ss(d,i.m,i.o),c=new jt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),u&&(i.i=u.D.concat(i.i)),u=po(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),rs(i.h,c),Zr(c,d,u)}function en(i,u){i.H&&ot(i.H,function(c,d){W(u,d,c)}),i.l&&Yi({},function(c,d){W(u,d,c)})}function po(i,u,c){c=Math.min(i.i.length,c);var d=i.l?v(i.l.Na,i.l,i):null;t:{var A=i.i;let R=-1;for(;;){const b=["count="+c];R==-1?0<c?(R=A[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let Q=!0;for(let at=0;at<c;at++){let G=A[at].g;const ft=A[at].map;if(G-=R,0>G)R=Math.max(0,A[at].g-100),Q=!1;else try{ol(ft,b,"req"+G+"_")}catch{d&&d(ft)}}if(Q){d=b.join("&");break t}}}return i=i.i.splice(0,c),u.D=i,d}function go(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Be||Ri(),qe||(Be(),qe=!0),Ur.add(u,i),i.v=0}}function os(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Ge(v(i.Fa,i),Eo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,_o(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Ge(v(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),jn(this),_o(this))};function as(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function _o(i){i.g=new jt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Mt(i.qa);W(u,"RID","rpc"),W(u,"SID",i.K),W(u,"AID",i.T),W(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&W(u,"TO",i.ja),W(u,"TYPE","xmlhttp"),en(i,u),i.m&&i.o&&ss(u,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Fn(Mt(u)),c.m=null,c.P=!0,$i(c,i)}n.Za=function(){this.C!=null&&(this.C=null,jn(this),os(this),vt(19))};function zn(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function yo(i,u){var c=null;if(i.g==u){zn(i),as(i),i.g=null;var d=2}else if(ns(i.h,u))c=u.D,Wi(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var A=i.B;d=Nn(),Et(d,new Ui(d,c)),$n(i)}else go(i);else if(A=u.s,A==3||A==0&&0<u.X||!(d==1&&ll(i,u)||d==2&&os(i)))switch(c&&0<c.length&&(u=i.h,u.i=u.i.concat(c)),A){case 1:ue(i,5);break;case 4:ue(i,10);break;case 3:ue(i,6);break;default:ue(i,2)}}}function Eo(i,u){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*u}function ue(i,u){if(i.j.info("Error code "+u),u==2){var c=v(i.fb,i),d=i.Xa;const A=!d;d=new ae(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mn(d,"https"),Fn(d),A?rl(d.toString(),c):sl(d.toString(),c)}else vt(2);i.G=0,i.l&&i.l.sa(u),vo(i),fo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function vo(i){if(i.G=0,i.ka=[],i.l){const u=Xi(i.h);(u.length!=0||i.i.length!=0)&&(D(i.ka,u),D(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function To(i,u,c){var d=c instanceof ae?Mt(c):new ae(c);if(d.g!="")u&&(d.g=u+"."+d.g),Ln(d,d.s);else{var A=l.location;d=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var R=new ae(null);d&&Mn(R,d),u&&(R.g=u),A&&Ln(R,A),c&&(R.l=c),d=R}return c=i.D,u=i.ya,c&&u&&W(d,c,u),W(d,"VER",i.la),en(i,d),d}function Io(i,u,c){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new J(new Un({eb:c})):new J(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ao(){}n=Ao.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hn(){}Hn.prototype.g=function(i,u){return new At(i,u)};function At(i,u){dt.call(this),this.g=new ho(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!B(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ee(this)}V(At,dt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){is(this.g)},At.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Kr(i),i=c);u.i.push(new Kc(u.Ya++,i)),u.G==3&&$n(u)},At.prototype.N=function(){this.g.l=null,delete this.j,is(this.g),delete this.g,At.aa.N.call(this)};function wo(i){Wr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}V(wo,Wr);function Ro(){Xr.call(this),this.status=1}V(Ro,Xr);function Ee(i){this.g=i}V(Ee,Ao),Ee.prototype.ua=function(){Et(this.g,"a")},Ee.prototype.ta=function(i){Et(this.g,new wo(i))},Ee.prototype.sa=function(i){Et(this.g,new Ro)},Ee.prototype.ra=function(){Et(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Ja=function(){return new Hn},Ya=function(){return Nn()},Xa=ie,As={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kn.NO_ERROR=0,kn.TIMEOUT=8,kn.HTTP_ERROR=6,Jn=kn,Bi.COMPLETE="complete",Wa=Bi,Oi.EventType=ze,ze.OPEN="a",ze.CLOSE="b",ze.ERROR="c",ze.MESSAGE="d",dt.prototype.listen=dt.prototype.K,nn=Oi,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Qa=J}).apply(typeof Kn<"u"?Kn:typeof self<"u"?self:typeof window<"u"?window:{});const Fo="@firebase/firestore",Uo="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xe="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new ja("@firebase/firestore");function Te(){return he.logLevel}function N(n,...t){if(he.logLevel<=$.DEBUG){const e=t.map(Hs);he.debug(`Firestore (${xe}): ${n}`,...e)}}function Ut(n,...t){if(he.logLevel<=$.ERROR){const e=t.map(Hs);he.error(`Firestore (${xe}): ${n}`,...e)}}function Ce(n,...t){if(he.logLevel<=$.WARN){const e=t.map(Hs);he.warn(`Firestore (${xe}): ${n}`,...e)}}function Hs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Za(n,r,e)}function Za(n,t,e){let r=`FIRESTORE (${xe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ut(r),new Error(r)}function K(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Za(t,s,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ke{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Yh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Jh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new tu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class Zh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class td{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Zh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ed{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Bo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function ws(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return U(r,s);{const o=eu(),a=rd(o.encode(qo(n,e)),o.encode(qo(t,e)));return a!==0?a:U(r,s)}}e+=r>65535?2:1}return U(n.length,t.length)}function qo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function rd(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function Pe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=-62135596800,$o=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*$o);return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<jo)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$o}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-jo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new rt(0,0))}static max(){return new L(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="__name__";class Vt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Vt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Vt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=Vt.isNumericId(t),s=Vt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Vt.extractNumericId(t).compare(Vt.extractNumericId(e)):ws(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Qt.fromString(t.substring(4,t.length-2))}}class X extends Vt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const sd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Vt{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return sd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zo}static keyField(){return new ct([zo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new k(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new k(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=-1;function id(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new Yt(s,O.empty(),t)}function od(n){return new Yt(n.readTime,n.key,pn)}class Yt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Yt(L.min(),O.empty(),pn)}static max(){return new Yt(L.max(),O.empty(),pn)}}function ad(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==ud)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++l,l===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function ld(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Me(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Er.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=-1;function vr(n){return n==null}function ur(n){return n===0&&1/n==-1/0}function hd(n){return typeof n=="number"&&Number.isInteger(n)&&!ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="";function dd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ho(t)),t=fd(n.get(e),t);return Ho(t)}function fd(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case ru:e+="";break;default:e+=o}}return e}function Ho(n){return n+ru+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function re(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function su(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qn(this.root,t,this.comparator,!0)}}class Qn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ut(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ko(this.data.getIterator())}getIteratorFrom(t){return new Ko(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Ko{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new wt([])}unionWith(t){let e=new st(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new iu("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const md=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=md.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="server_timestamp",au="__type__",uu="__previous_value__",cu="__local_write_time__";function Ks(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[au])===null||e===void 0?void 0:e.stringValue)===ou}function Tr(n){const t=n.mapValue.fields[uu];return Ks(t)?Tr(t):t}function gn(n){const t=Jt(n.mapValue.fields[cu].timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t,e,r,s,o,a,l,h,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const cr="(default)";class _n{constructor(t,e){this.projectId=t,this.database=e||cr}static empty(){return new _n("","")}get isDefaultDatabase(){return this.database===cr}isEqual(t){return t instanceof _n&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="__type__",gd="__max__",Wn={mapValue:{}},hu="__vector__",lr="value";function te(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ks(n)?4:yd(n)?9007199254740991:_d(n)?10:11:M(28295,{value:n})}function kt(n,t){if(n===t)return!0;const e=te(n);if(e!==te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return gn(n).isEqual(gn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Jt(s.timestampValue),l=Jt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Zt(s.bytesValue).isEqual(Zt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Z(s.doubleValue),l=Z(o.doubleValue);return a===l?ur(a)===ur(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Pe(n.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Go(a)!==Go(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!kt(a[h],l[h])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function yn(n,t){return(n.values||[]).find(e=>kt(e,t))!==void 0}function Se(n,t){if(n===t)return 0;const e=te(n),r=te(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return Qo(n.timestampValue,t.timestampValue);case 4:return Qo(gn(n),gn(t));case 5:return ws(n.stringValue,t.stringValue);case 6:return function(o,a){const l=Zt(o),h=Zt(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=U(l[f],h[f]);if(m!==0)return m}return U(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=U(Z(o.latitude),Z(a.latitude));return l!==0?l:U(Z(o.longitude),Z(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Wo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,h,f,m;const y=o.fields||{},v=a.fields||{},S=(l=y[lr])===null||l===void 0?void 0:l.arrayValue,V=(h=v[lr])===null||h===void 0?void 0:h.arrayValue,x=U(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:Wo(S,V)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Wn.mapValue&&a===Wn.mapValue)return 0;if(o===Wn.mapValue)return 1;if(a===Wn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const v=ws(h[y],m[y]);if(v!==0)return v;const S=Se(l[h[y]],f[m[y]]);if(S!==0)return S}return U(h.length,m.length)}(n.mapValue,t.mapValue);default:throw M(23264,{Pe:e})}}function Qo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=Jt(n),r=Jt(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function Wo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Se(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function Ve(n){return Rs(n)}function Rs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Jt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Zt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Rs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Rs(e.fields[a])}`;return s+"}"}(n.mapValue):M(61005,{value:n})}function Zn(n){switch(te(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Tr(n);return t?16+Zn(t):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Zn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return re(r.fields,(o,a)=>{s+=o.length+Zn(a)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function Xo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Cs(n){return!!n&&"integerValue"in n}function Qs(n){return!!n&&"arrayValue"in n}function Yo(n){return!!n&&"nullValue"in n}function Jo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tr(n){return!!n&&"mapValue"in n}function _d(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[lu])===null||e===void 0?void 0:e.stringValue)===hu}function cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return re(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=cn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function yd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===gd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cn(e)}setAll(t){let e=ct.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=cn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];tr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){re(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new It(cn(this.value))}}function du(n){const t=[];return re(n.fields,(e,r)=>{const s=new ct([e]);if(tr(r)){const o=du(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),It.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),It.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function Zo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Se(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ta(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!kt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ed(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{}class nt extends fu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Td(t,e,r):e==="array-contains"?new wd(t,r):e==="in"?new Rd(t,r):e==="not-in"?new Cd(t,r):e==="array-contains-any"?new Pd(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Id(t,r):new Ad(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Se(e,this.value)):e!==null&&te(this.value)===te(e)&&this.matchesComparison(Se(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends fu{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new St(t,e)}matches(t){return mu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function mu(n){return n.op==="and"}function pu(n){return vd(n)&&mu(n)}function vd(n){for(const t of n.filters)if(t instanceof St)return!1;return!0}function Ps(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+Ve(n.value);if(pu(n))return n.filters.map(t=>Ps(t)).join(",");{const t=n.filters.map(e=>Ps(e)).join(",");return`${n.op}(${t})`}}function gu(n,t){return n instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&kt(r.value,s.value)}(n,t):n instanceof St?function(r,s){return s instanceof St&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&gu(a,s.filters[l]),!0):!1}(n,t):void M(19439)}function _u(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ve(e.value)}`}(n):n instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(_u).join(" ,")+"}"}(n):"Filter"}class Td extends nt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Id extends nt{constructor(t,e){super(t,"in",e),this.keys=yu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ad extends nt{constructor(t,e){super(t,"not-in",e),this.keys=yu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function yu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class wd extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qs(e)&&yn(e.arrayValue,this.value)}}class Rd extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&yn(this.value.arrayValue,e)}}class Cd extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(yn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!yn(this.value.arrayValue,e)}}class Pd extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>yn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Ie=null}}function ea(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Sd(n,t,e,r,s,o,a)}function Ws(n){const t=F(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ps(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),vr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ve(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ve(r)).join(",")),t.Ie=e}return t.Ie}function Xs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ed(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!gu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ta(n.startAt,t.startAt)&&ta(n.endAt,t.endAt)}function Ss(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Vd(n,t,e,r,s,o,a,l){return new Le(n,t,e,r,s,o,a,l)}function Ir(n){return new Le(n)}function na(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Eu(n){return n.collectionGroup!==null}function ln(n){const t=F(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new st(ct.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new En(o,r))}),e.has(ct.keyField().canonicalString())||t.Ee.push(new En(ct.keyField(),r))}return t.Ee}function bt(n){const t=F(n);return t.de||(t.de=bd(t,ln(n))),t.de}function bd(n,t){if(n.limitType==="F")return ea(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new En(s.field,o)});const e=n.endAt?new hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hr(n.startAt.position,n.startAt.inclusive):null;return ea(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Vs(n,t){const e=n.filters.concat([t]);return new Le(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function bs(n,t,e){return new Le(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ar(n,t){return Xs(bt(n),bt(t))&&n.limitType===t.limitType}function vu(n){return`${Ws(bt(n))}|lt:${n.limitType}`}function Ie(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>_u(s)).join(", ")}]`),vr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ve(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ve(s)).join(",")),`Target(${r})`}(bt(n))}; limitType=${n.limitType})`}function wr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of ln(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,h){const f=Zo(a,l,h);return a.inclusive?f<=0:f<0}(r.startAt,ln(r),s)||r.endAt&&!function(a,l,h){const f=Zo(a,l,h);return a.inclusive?f>=0:f>0}(r.endAt,ln(r),s))}(n,t)}function Dd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Tu(n){return(t,e)=>{let r=!1;for(const s of ln(n)){const o=Nd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Nd(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Se(h,f):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){re(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return su(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new Y(O.comparator);function Bt(){return kd}const Iu=new Y(O.comparator);function rn(...n){let t=Iu;for(const e of n)t=t.insert(e.key,e);return t}function Au(n){let t=Iu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function le(){return hn()}function wu(){return hn()}function hn(){return new me(n=>n.toString(),(n,t)=>n.isEqual(t))}const xd=new Y(O.comparator),Od=new st(O.comparator);function q(...n){let t=Od;for(const e of n)t=t.add(e);return t}const Md=new st(U);function Ld(){return Md}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ur(t)?"-0":t}}function Ru(n){return{integerValue:""+n}}function Fd(n,t){return hd(t)?Ru(t):Ys(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this._=void 0}}function Ud(n,t,e){return n instanceof vn?function(s,o){const a={fields:{[au]:{stringValue:ou},[cu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ks(o)&&(o=Tr(o)),o&&(a.fields[uu]=o),{mapValue:a}}(e,t):n instanceof Tn?Pu(n,t):n instanceof In?Su(n,t):function(s,o){const a=Cu(s,o),l=ra(a)+ra(s.Re);return Cs(a)&&Cs(s.Re)?Ru(l):Ys(s.serializer,l)}(n,t)}function Bd(n,t,e){return n instanceof Tn?Pu(n,t):n instanceof In?Su(n,t):e}function Cu(n,t){return n instanceof dr?function(r){return Cs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class vn extends Rr{}class Tn extends Rr{constructor(t){super(),this.elements=t}}function Pu(n,t){const e=Vu(t);for(const r of n.elements)e.some(s=>kt(s,r))||e.push(r);return{arrayValue:{values:e}}}class In extends Rr{constructor(t){super(),this.elements=t}}function Su(n,t){let e=Vu(t);for(const r of n.elements)e=e.filter(s=>!kt(s,r));return{arrayValue:{values:e}}}class dr extends Rr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function ra(n){return Z(n.integerValue||n.doubleValue)}function Vu(n){return Qs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e){this.field=t,this.transform=e}}function jd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Tn&&s instanceof Tn||r instanceof In&&s instanceof In?Pe(r.elements,s.elements,kt):r instanceof dr&&s instanceof dr?kt(r.Re,s.Re):r instanceof vn&&s instanceof vn}(n.transform,t.transform)}class $d{constructor(t,e){this.version=t,this.transformResults=e}}class Ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Cr{}function bu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Nu(n.key,Ct.none()):new An(n.key,n.data,Ct.none());{const e=n.data,r=It.empty();let s=new st(ct.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new se(n.key,r,new wt(s.toArray()),Ct.none())}}function zd(n,t,e){n instanceof An?function(s,o,a){const l=s.value.clone(),h=ia(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof se?function(s,o,a){if(!er(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ia(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Du(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function dn(n,t,e,r){return n instanceof An?function(o,a,l,h){if(!er(o.precondition,a))return l;const f=o.value.clone(),m=oa(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof se?function(o,a,l,h){if(!er(o.precondition,a))return l;const f=oa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Du(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(o,a,l){return er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Hd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Cu(r.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(r.field,o))}return e||null}function sa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Pe(r,s,(o,a)=>jd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class An extends Cr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends Cr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Du(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ia(n,t,e){const r=new Map;K(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Bd(a,l,e[s]))}return r}function oa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Ud(o,a,t))}return r}class Nu extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gd extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&zd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=dn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=dn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=wu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=bu(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Pe(this.mutations,t.mutations,(e,r)=>sa(e,r))&&Pe(this.baseMutations,t.baseMutations,(e,r)=>sa(e,r))}}class Js{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){K(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let s=function(){return xd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Js(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,j;function Xd(n){switch(n){case C.OK:return M(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function ku(n){if(n===void 0)return Ut("GRPC error has no .code"),C.UNKNOWN;switch(n){case et.OK:return C.OK;case et.CANCELLED:return C.CANCELLED;case et.UNKNOWN:return C.UNKNOWN;case et.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case et.INTERNAL:return C.INTERNAL;case et.UNAVAILABLE:return C.UNAVAILABLE;case et.UNAUTHENTICATED:return C.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case et.NOT_FOUND:return C.NOT_FOUND;case et.ALREADY_EXISTS:return C.ALREADY_EXISTS;case et.PERMISSION_DENIED:return C.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case et.ABORTED:return C.ABORTED;case et.OUT_OF_RANGE:return C.OUT_OF_RANGE;case et.UNIMPLEMENTED:return C.UNIMPLEMENTED;case et.DATA_LOSS:return C.DATA_LOSS;default:return M(39323,{code:n})}}(j=et||(et={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=new Qt([4294967295,4294967295],0);function aa(n){const t=eu().encode(n),e=new Ka;return e.update(t),new Uint8Array(e.digest())}function ua(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Qt([e,r],0),new Qt([s,o],0)]}class Zs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new sn(`Invalid padding: ${e}`);if(r<0)throw new sn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new sn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new sn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Qt.fromNumber(this.pe)}we(t,e,r){let s=t.add(e.multiply(Qt.fromNumber(r)));return s.compare(Yd)===1&&(s=new Qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=aa(t),[r,s]=ua(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Zs(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.pe===0)return;const e=aa(t),[r,s]=ua(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class sn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,wn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Pr(L.min(),s,new Y(U),Bt(),q())}}class wn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new wn(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,r,s){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=s}}class xu{constructor(t,e){this.targetId=t,this.Ce=e}}class Ou{constructor(t,e,r=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ca{constructor(){this.Fe=0,this.Me=la(),this.xe=lt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=q(),e=q(),r=q();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}}),new wn(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=la()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,K(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Jd{constructor(t){this.ze=t,this.je=new Map,this.He=Bt(),this.Je=Xn(),this.Ye=Xn(),this.Ze=new Y(U)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,r=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(Ss(o))if(r===0){const a=new O(o.path);this.tt(e,a,_t.newNoDocument(a,L.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const l=this.ct(t),h=l?this.lt(l,t,a):1;if(h!==0){this.st(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=Zt(r).toUint8Array()}catch(h){if(h instanceof iu)return Ce("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Zs(a,s,o)}catch(h){return Ce(h instanceof sn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.pe===0?null:l}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,a)=>{const l=this._t(a);if(l){if(o.current&&Ss(l.target)){const h=new O(l.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,_t.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=q();this.Ye.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this._t(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const s=new Pr(t,e,this.Ze,this.He,r);return this.He=Bt(),this.Je=Xn(),this.Ye=Xn(),this.Ze=new Y(U),s}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new ca,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new st(U),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new st(U),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new ca),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Xn(){return new Y(O.comparator)}function la(){return new Y(O.comparator)}const Zd={asc:"ASCENDING",desc:"DESCENDING"},tf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ef={and:"AND",or:"OR"};class nf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ds(n,t){return n.useProto3Json||vr(t)?t:{value:t}}function fr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Mu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function rf(n,t){return fr(n,t.toTimestamp())}function Dt(n){return K(!!n,49232),L.fromTimestamp(function(e){const r=Jt(e);return new rt(r.seconds,r.nanos)}(n))}function ti(n,t){return Ns(n,t).canonicalString()}function Ns(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Lu(n){const t=X.fromString(n);return K(ju(t),10190,{key:t.toString()}),t}function ks(n,t){return ti(n.databaseId,t.path)}function ms(n,t){const e=Lu(t);if(e.get(1)!==n.databaseId.projectId)throw new k(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Uu(e))}function Fu(n,t){return ti(n.databaseId,t)}function sf(n){const t=Lu(n);return t.length===4?X.emptyPath():Uu(t)}function xs(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Uu(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ha(n,t,e){return{name:ks(n,t),fields:e.value.mapValue.fields}}function of(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(K(m===void 0||typeof m=="string",58123),lt.fromBase64String(m||"")):(K(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),lt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const m=f.code===void 0?C.UNKNOWN:ku(f.code);return new k(m,f.message||"")}(a);e=new Ou(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ms(n,r.document.name),o=Dt(r.document.updateTime),a=r.document.createTime?Dt(r.document.createTime):L.min(),l=new It({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,l),f=r.targetIds||[],m=r.removedTargetIds||[];e=new nr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ms(n,r.document),o=r.readTime?Dt(r.readTime):L.min(),a=_t.newNoDocument(s,o),l=r.removedTargetIds||[];e=new nr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ms(n,r.document),o=r.removedTargetIds||[];e=new nr([],o,s,null)}else{if(!("filter"in t))return M(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Wd(s,o),l=r.targetId;e=new xu(l,a)}}return e}function af(n,t){let e;if(t instanceof An)e={update:ha(n,t.key,t.value)};else if(t instanceof Nu)e={delete:ks(n,t.key)};else if(t instanceof se)e={update:ha(n,t.key,t.data),updateMask:gf(t.fieldMask)};else{if(!(t instanceof Gd))return M(16599,{ft:t.type});e={verify:ks(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof vn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Tn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof In)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof dr)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw M(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:rf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function uf(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Dt(s.updateTime):Dt(o);return a.isEqual(L.min())&&(a=Dt(o)),new $d(a,s.transformResults||[])}(e,t))):[]}function cf(n,t){return{documents:[Fu(n,t.path)]}}function lf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Fu(n,s);const o=function(f){if(f.length!==0)return qu(St.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(v){return{field:Ae(v.field),direction:ff(v.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ds(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:s}}function hf(n){let t=sf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){K(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(y){const v=Bu(y);return v instanceof St&&pu(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(v=>function(V){return new En(we(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(v))}(e.orderBy));let l=null;e.limit&&(l=function(y){let v;return v=typeof y=="object"?y.value:y,vr(v)?null:v}(e.limit));let h=null;e.startAt&&(h=function(y){const v=!!y.before,S=y.values||[];return new hr(S,v)}(e.startAt));let f=null;return e.endAt&&(f=function(y){const v=!y.before,S=y.values||[];return new hr(S,v)}(e.endAt)),Vd(t,s,a,o,l,"F",h,f)}function df(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Bu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=we(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=we(e.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=we(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=we(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return nt.create(we(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(r=>Bu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function ff(n){return Zd[n]}function mf(n){return tf[n]}function pf(n){return ef[n]}function Ae(n){return{fieldPath:n.canonicalString()}}function we(n){return ct.fromServerFormat(n.fieldPath)}function qu(n){return n instanceof nt?function(e){if(e.op==="=="){if(Jo(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NAN"}};if(Yo(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jo(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NOT_NAN"}};if(Yo(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ae(e.field),op:mf(e.op),value:e.value}}}(n):n instanceof St?function(e){const r=e.getFilters().map(s=>qu(s));return r.length===1?r[0]:{compositeFilter:{op:pf(e.op),filters:r}}}(n):M(54877,{filter:n})}function gf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ju(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,r,s,o=L.min(),a=L.min(),l=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){this.wt=t}}function yf(n){const t=hf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.Cn=new vf}addToCollectionParentIndex(t,e){return this.Cn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Yt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class vf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new st(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new st(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$u=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt($u,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new be(0)}static lr(){return new be(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="LruGarbageCollector",Tf=1048576;function ma([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class If{constructor(t){this.Er=t,this.buffer=new st(ma),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ma(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Af{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){N(fa,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Me(e)?N(fa,"Ignoring IndexedDB error during garbage collection: ",e):await Oe(e)}await this.mr(3e5)})}}class wf{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Er.le);const r=new If(e);return this.gr.forEachTarget(t,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(da)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),da):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,s,o,a,l,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s))).next(y=>(r=y,l=Date.now(),this.removeTargets(t,r,e))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(y=>(f=Date.now(),Te()<=$.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${y} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y})))}}function Rf(n,t){return new wf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.changes=new me(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&dn(r.mutation,s,wt.empty(),rt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const s=le();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=rn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=le();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=Bt();const a=hn(),l=function(){return hn()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof se)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),dn(m.mutation,f,m.mutation.getFieldMask(),rt.now())):a.set(f.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var y;return l.set(f,new Pf(m,(y=a.get(f))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(t,e){const r=hn();let s=new Y((a,l)=>a-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||wt.empty();m=l.applyToLocalView(f,m),r.set(h,m);const y=(s.get(l.batchId)||q()).add(h);s=s.insert(l.batchId,y)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,y=wu();m.forEach(v=>{if(!o.has(v)){const S=bu(e.get(v),r.get(v));S!==null&&y.set(v,S),o=o.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,y))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Eu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(le());let l=pn,h=o;return a.next(f=>P.forEach(f,(m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(v=>{h=h.insert(m,v)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(m=>({batchId:l,changes:Au(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=rn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=rn();return this.indexManager.getCollectionParents(t,o).next(l=>P.forEach(l,h=>{const f=function(y,v){return new Le(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((y,v)=>{a=a.insert(y,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,_t.newInvalidDocument(m)))});let l=rn();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&dn(m.mutation,f,wt.empty(),rt.now()),wr(e,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return P.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Dt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:yf(s.bundledQuery),readTime:Dt(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.overlays=new Y(O.comparator),this.Qr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=le();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=le(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Y((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=le(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=le(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>l.set(f,m)),!(l.size()>=s)););return P.resolve(l)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Qd(e,r));let o=this.Qr.get(e);o===void 0&&(o=q(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.$r=new st(it.Ur),this.Kr=new st(it.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new it(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new it(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new O(new X([])),r=new it(e,t),s=new it(e,t+1),o=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new O(new X([])),r=new it(e,t),s=new it(e,t+1);let o=q();return this.Kr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new it(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return O.comparator(t.key,e.key)||U(t.Zr,e.Zr)}static Wr(t,e){return U(t.Zr,e.Zr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new st(it.Ur)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Kd(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new it(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ti(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Gs:this.nr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);o.push(l)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(U);return e.forEach(s=>{const o=new it(s,0),a=new it(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],l=>{r=r.add(l.Zr)})}),P.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new it(new O(o),0);let l=new st(U);return this.Xr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.Zr)),!0)},a),P.resolve(this.ni(l))}ni(t){const e=[];return t.forEach(r=>{const s=this.ei(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){K(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return P.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new it(e,0),s=this.Xr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t){this.ii=t,this.docs=function(){return new Y(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=Bt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Bt();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||ad(od(m),r)<=0||(s.has(m.key)||wr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}si(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new xf(this)}getSize(t){return P.resolve(this.size)}}class xf extends Cf{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t){this.persistence=t,this.oi=new me(e=>Ws(e),Xs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this._i=0,this.ai=new ei,this.targetCount=0,this.ui=be.cr()}forEachTarget(t,e){return this.oi.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),P.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new be(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Tr(e),P.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e){this.ci={},this.overlays={},this.li=new Er(0),this.hi=!1,this.hi=!0,this.Pi=new Df,this.referenceDelegate=t(this),this.Ti=new Of(this),this.indexManager=new Ef,this.remoteDocumentCache=function(s){return new kf(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new _f(e),this.Ei=new Vf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new Nf(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new Mf(this.li.next());return this.referenceDelegate.di(),r(s).next(o=>this.referenceDelegate.Ai(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ri(t,e){return P.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class Mf extends cd{constructor(t){super(),this.currentSequenceNumber=t}}class ni{constructor(t){this.persistence=t,this.Vi=new ei,this.mi=null}static fi(t){return new ni(t)}get gi(){if(this.mi)return this.mi;throw M(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.gi,r=>{const s=O.fromPath(r);return this.pi(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return P.or([()=>P.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class mr{constructor(t,e){this.persistence=t,this.yi=new me(r=>dd(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Rf(this,e)}static fi(t,e){return new mr(t,e)}di(){}Ai(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}br(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return P.forEach(this.yi,(r,s)=>this.Dr(t,r,s).next(o=>o?P.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.si(t,a=>this.Dr(t,a,e).next(l=>{l||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),P.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Zn(t.data.value)),e}Dr(t,e,r){return P.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ds=r,this.As=s}static Rs(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ri(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Vl()?8:ld($s())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ws(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Lf;return this.Ss(t,e,a).next(l=>{if(o.result=l,this.fs)return this.Ds(t,e,a,l.size)})}).next(()=>o.result)}Ds(t,e,r,s){return r.documentReadCount<this.gs?(Te()<=$.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ie(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),P.resolve()):(Te()<=$.DEBUG&&N("QueryEngine","Query:",Ie(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Te()<=$.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ie(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):P.resolve())}ws(t,e){if(na(e))return P.resolve(null);let r=bt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=bs(e,null,"F"),r=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=q(...o);return this.ys.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.vs(e,l);return this.Cs(e,f,a,h.readTime)?this.ws(t,bs(e,null,"F")):this.Fs(t,f,e,h)}))})))}bs(t,e,r,s){return na(e)||s.isEqual(L.min())?P.resolve(null):this.ys.getDocuments(t,r).next(o=>{const a=this.vs(e,o);return this.Cs(e,a,r,s)?P.resolve(null):(Te()<=$.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ie(e)),this.Fs(t,a,e,id(s,pn)).next(l=>l))})}vs(t,e){let r=new st(Tu(t));return e.forEach((s,o)=>{wr(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return Te()<=$.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ie(e)),this.ys.getDocumentsMatchingQuery(t,e,Yt.min(),r)}Fs(t,e,r,s){return this.ys.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="LocalStore",Uf=3e8;class Bf{constructor(t,e,r,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new Y(U),this.Os=new me(o=>Ws(o),Xs),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sf(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function qf(n,t,e,r){return new Bf(n,t,e,r)}async function Hu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=q();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({ks:f,removedBatchIds:a,addedBatchIds:l}))})})}function jf(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(l,h,f,m){const y=f.batch,v=y.keys();let S=P.resolve();return v.forEach(V=>{S=S.next(()=>m.getEntry(h,V)).next(x=>{const D=f.docVersions.get(V);K(D!==null,48541),x.version.compareTo(D)<0&&(y.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),m.addEntry(x)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=q();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Gu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function $f(n,t){const e=F(n),r=t.snapshotVersion;let s=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Bs.newChangeBuffer({trackRemovals:!0});s=e.xs;const l=[];t.targetChanges.forEach((m,y)=>{const v=s.get(y);if(!v)return;l.push(e.Ti.removeMatchingKeys(o,m.removedDocuments,y).next(()=>e.Ti.addMatchingKeys(o,m.addedDocuments,y)));let S=v.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(y,S),function(x,D,z){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Uf?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(v,S,m)&&l.push(e.Ti.updateTargetData(o,S))});let h=Bt(),f=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(zf(o,a,t.documentUpdates).next(m=>{h=m.qs,f=m.Qs})),!r.isEqual(L.min())){const m=e.Ti.getLastRemoteSnapshotVersion(o).next(y=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(m)}return P.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.xs=s,o))}function zf(n,t,e){let r=q(),s=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Bt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):N(si,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{qs:a,Qs:s}})}function Hf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Gs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Gf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ti.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Ti.allocateTargetId(r).next(a=>(s=new Ht(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.xs=e.xs.insert(r.targetId,r),e.Os.set(t,r.targetId)),r})}async function Os(n,t,e){const r=F(n),s=r.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Me(a))throw a;N(si,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(s.target)}function pa(n,t,e){const r=F(n);let s=L.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const y=F(h),v=y.Os.get(m);return v!==void 0?P.resolve(y.xs.get(v)):y.Ti.getTargetData(f,m)}(r,a,bt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:q())).next(l=>(Kf(r,Dd(t),l),{documents:l,$s:o})))}function Kf(n,t,e){let r=n.Ns.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(t,r)}class ga{constructor(){this.activeTargetIds=Ld()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qf{constructor(){this.xo=new ga,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new ga,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="ConnectivityMonitor";class ya{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(_a,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){N(_a,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn=null;function Ms(){return Yn===null?Yn=function(){return 268435456+Math.round(2147483648*Math.random())}():Yn++,"0x"+Yn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="RestConnection",Xf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Yf{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===cr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(t,e,r,s,o){const a=Ms(),l=this.jo(t,e.toUriEncodedString());N(ps,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,s,o);const{host:f}=new URL(l),m=js(f);return this.Jo(t,l,h,r,m).then(y=>(N(ps,`Received RPC '${t}' ${a}: `,y),y),y=>{throw Ce(ps,`RPC '${t}' ${a} failed with error: `,y,"url: ",l,"request:",r),y})}Yo(t,e,r,s,o,a){return this.zo(t,e,r,s,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}jo(t,e){const r=Xf[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Zf extends Yf{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=Ms();return new Promise((l,h)=>{const f=new Qa;f.setWithCredentials(!0),f.listenOnce(Wa.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Jn.NO_ERROR:const y=f.getResponseJson();N(pt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),l(y);break;case Jn.TIMEOUT:N(pt,`RPC '${t}' ${a} timed out`),h(new k(C.DEADLINE_EXCEEDED,"Request time out"));break;case Jn.HTTP_ERROR:const v=f.getStatus();if(N(pt,`RPC '${t}' ${a} failed with status:`,v,"response text:",f.getResponseText()),v>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const V=S==null?void 0:S.error;if(V&&V.status&&V.message){const x=function(z){const B=z.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(B)>=0?B:C.UNKNOWN}(V.status);h(new k(x,V.message))}else h(new k(C.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new k(C.UNAVAILABLE,"Connection failed."));break;default:M(9055,{h_:t,streamId:a,P_:f.getLastErrorCode(),T_:f.getLastError()})}}finally{N(pt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);N(pt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",m,r,15)})}I_(t,e,r){const s=Ms(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ja(),l=Ya(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");N(pt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const y=a.createWebChannel(m,h);this.E_(y);let v=!1,S=!1;const V=new Jf({Zo:D=>{S?N(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(v||(N(pt,`Opening RPC '${t}' stream ${s} transport.`),y.open(),v=!0),N(pt,`RPC '${t}' stream ${s} sending:`,D),y.send(D))},Xo:()=>y.close()}),x=(D,z,B)=>{D.listen(z,H=>{try{B(H)}catch(tt){setTimeout(()=>{throw tt},0)}})};return x(y,nn.EventType.OPEN,()=>{S||(N(pt,`RPC '${t}' stream ${s} transport opened.`),V.__())}),x(y,nn.EventType.CLOSE,()=>{S||(S=!0,N(pt,`RPC '${t}' stream ${s} transport closed`),V.u_(),this.d_(y))}),x(y,nn.EventType.ERROR,D=>{S||(S=!0,Ce(pt,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),V.u_(new k(C.UNAVAILABLE,"The operation could not be completed")))}),x(y,nn.EventType.MESSAGE,D=>{var z;if(!S){const B=D.data[0];K(!!B,16349);const H=B,tt=(H==null?void 0:H.error)||((z=H[0])===null||z===void 0?void 0:z.error);if(tt){N(pt,`RPC '${t}' stream ${s} received error:`,tt);const xt=tt.status;let ot=function(_){const E=et[_];if(E!==void 0)return ku(E)}(xt),I=tt.message;ot===void 0&&(ot=C.INTERNAL,I="Unknown error status: "+xt+" with message "+tt.message),S=!0,V.u_(new k(ot,I)),y.close()}else N(pt,`RPC '${t}' stream ${s} received:`,B),V.c_(B)}}),x(l,Xa.STAT_EVENT,D=>{D.stat===As.PROXY?N(pt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===As.NOPROXY&&N(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.a_()},0),V}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function gs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){return new nf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,e,r=1e3,s=1.5,o=6e4){this.xi=t,this.timerId=e,this.A_=r,this.R_=s,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="PersistentStream";class Qu{constructor(t,e,r,s,o,a,l,h){this.xi=t,this.S_=r,this.D_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Ku(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Ut(e.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===e&&this.z_(r,s)},r=>{t(()=>{const s=new k(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(t,e){const r=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return N(Ea,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(N(Ea,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tm extends Qu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=of(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Dt(a.readTime):L.min()}(t);return this.listener.Y_(e,r)}Z_(t){const e={};e.database=xs(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=Ss(h)?{documents:cf(o,h)}:{query:lf(o,h).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Mu(o,a.resumeToken);const f=Ds(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=fr(o,a.snapshotVersion.toTimestamp());const f=Ds(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=df(this.serializer,t);r&&(e.labels=r),this.Q_(e)}X_(t){const e={};e.database=xs(this.serializer),e.removeTarget=t,this.Q_(e)}}class em extends Qu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,e){return this.connection.I_("Write",t,e)}J_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const e=uf(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.ra(r,e)}ia(){const t={};t.database=xs(this.serializer),this.Q_(t)}ta(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>af(this.serializer,r))};this.Q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{}class rm extends nm{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new k(C.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(t,Ns(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(C.UNKNOWN,o.toString())})}Yo(t,e,r,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(t,Ns(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(C.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class sm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Ut(e),this.ua=!1):N("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de="RemoteStore";class im{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{pe(this)&&(N(de,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.da.add(4),await Rn(f),f.Va.set("Unknown"),f.da.delete(4),await Vr(f)}(this))})}),this.Va=new sm(r,s)}}async function Vr(n){if(pe(n))for(const t of n.Aa)await t(!0)}async function Rn(n){for(const t of n.Aa)await t(!1)}function Wu(n,t){const e=F(n);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),ui(e)?ai(e):Fe(e).N_()&&oi(e,t))}function ii(n,t){const e=F(n),r=Fe(e);e.Ea.delete(t),r.N_()&&Xu(e,t),e.Ea.size===0&&(r.N_()?r.k_():pe(e)&&e.Va.set("Unknown"))}function oi(n,t){if(n.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fe(n).Z_(t)}function Xu(n,t){n.ma.Ke(t),Fe(n).X_(t)}function ai(n){n.ma=new Jd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Ea.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),Fe(n).start(),n.Va.ca()}function ui(n){return pe(n)&&!Fe(n).O_()&&n.Ea.size>0}function pe(n){return F(n).da.size===0}function Yu(n){n.ma=void 0}async function om(n){n.Va.set("Online")}async function am(n){n.Ea.forEach((t,e)=>{oi(n,t)})}async function um(n,t){Yu(n),ui(n)?(n.Va.Pa(t),ai(n)):n.Va.set("Unknown")}async function cm(n,t,e){if(n.Va.set("Online"),t instanceof Ou&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.ma.removeTarget(l))}(n,t)}catch(r){N(de,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await pr(n,r)}else if(t instanceof nr?n.ma.Xe(t):t instanceof xu?n.ma.ot(t):n.ma.nt(t),!e.isEqual(L.min()))try{const r=await Gu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.ma.It(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ea.get(f);m&&o.Ea.set(f,m.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const m=o.Ea.get(h);if(!m)return;o.Ea.set(h,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),Xu(o,h);const y=new Ht(m.target,h,f,m.sequenceNumber);oi(o,y)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){N(de,"Failed to raise snapshot:",r),await pr(n,r)}}async function pr(n,t,e){if(!Me(t))throw t;n.da.add(1),await Rn(n),n.Va.set("Offline"),e||(e=()=>Gu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(de,"Retrying IndexedDB access"),await e(),n.da.delete(1),await Vr(n)})}function Ju(n,t){return t().catch(e=>pr(n,e,t))}async function br(n){const t=F(n),e=ee(t);let r=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:Gs;for(;lm(t);)try{const s=await Hf(t.localStore,r);if(s===null){t.Ia.length===0&&e.k_();break}r=s.batchId,hm(t,s)}catch(s){await pr(t,s)}Zu(t)&&tc(t)}function lm(n){return pe(n)&&n.Ia.length<10}function hm(n,t){n.Ia.push(t);const e=ee(n);e.N_()&&e.ea&&e.ta(t.mutations)}function Zu(n){return pe(n)&&!ee(n).O_()&&n.Ia.length>0}function tc(n){ee(n).start()}async function dm(n){ee(n).ia()}async function fm(n){const t=ee(n);for(const e of n.Ia)t.ta(e.mutations)}async function mm(n,t,e){const r=n.Ia.shift(),s=Js.from(r,t,e);await Ju(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await br(n)}async function pm(n,t){t&&ee(n).ea&&await async function(r,s){if(function(a){return Xd(a)&&a!==C.ABORTED}(s.code)){const o=r.Ia.shift();ee(r).L_(),await Ju(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await br(r)}}(n,t),Zu(n)&&tc(n)}async function va(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),N(de,"RemoteStore received new credentials");const r=pe(e);e.da.add(3),await Rn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await Vr(e)}async function gm(n,t){const e=F(n);t?(e.da.delete(2),await Vr(e)):t||(e.da.add(2),await Rn(e),e.Va.set("Unknown"))}function Fe(n){return n.fa||(n.fa=function(e,r,s){const o=F(e);return o.oa(),new tm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:om.bind(null,n),n_:am.bind(null,n),i_:um.bind(null,n),Y_:cm.bind(null,n)}),n.Aa.push(async t=>{t?(n.fa.L_(),ui(n)?ai(n):n.Va.set("Unknown")):(await n.fa.stop(),Yu(n))})),n.fa}function ee(n){return n.ga||(n.ga=function(e,r,s){const o=F(e);return o.oa(),new em(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:dm.bind(null,n),i_:pm.bind(null,n),na:fm.bind(null,n),ra:mm.bind(null,n)}),n.Aa.push(async t=>{t?(n.ga.L_(),await br(n)):(await n.ga.stop(),n.Ia.length>0&&(N(de,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new ci(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function li(n,t){if(Ut("AsyncQueue",`${t}: ${n}`),Me(n))return new k(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static emptySet(t){return new Re(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=rn(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Re;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.pa=new Y(O.comparator)}track(t){const e=t.doc.key,r=this.pa.get(e);r?t.type!==0&&r.type===3?this.pa=this.pa.insert(e,t):t.type===3&&r.type!==1?this.pa=this.pa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.pa=this.pa.remove(e):t.type===1&&r.type===2?this.pa=this.pa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):M(63341,{Vt:t,ya:r}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,r)=>{t.push(r)}),t}}class De{constructor(t,e,r,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new De(t,e,Re.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ar(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class ym{constructor(){this.queries=Ia(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=Ia(),o.forEach((a,l)=>{for(const h of l.Sa)h.onError(r)})})(this,new k(C.ABORTED,"Firestore shutting down"))}}function Ia(){return new me(n=>vu(n),Ar)}async function ec(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Da()&&t.va()&&(r=2):(o=new _m,r=t.va()?0:1);try{switch(r){case 0:o.ba=await e.onListen(s,!0);break;case 1:o.ba=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=li(a,`Initialization of query '${Ie(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.Fa(e.onlineState),o.ba&&t.Ma(o.ba)&&hi(e)}async function nc(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.va()?0:1:!o.Da()&&t.va()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Em(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Ma(s)&&(r=!0);a.ba=s}}r&&hi(e)}function vm(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function hi(n){n.Ca.forEach(t=>{t.next()})}var Ls,Aa;(Aa=Ls||(Ls={})).xa="default",Aa.Cache="cache";class rc{constructor(t,e,r){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new De(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const r=e!=="Offline";return(!this.options.Qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=De.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Ls.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t){this.key=t}}class ic{constructor(t){this.key=t}}class Tm{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=q(),this.mutatedKeys=q(),this.Za=Tu(t),this.Xa=new Re(this.Za)}get eu(){return this.Ha}tu(t,e){const r=e?e.nu:new Ta,s=e?e.Xa:this.Xa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,y)=>{const v=s.get(m),S=wr(this.query,y)?y:null,V=!!v&&this.mutatedKeys.has(v.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;v&&S?v.data.isEqual(S.data)?V!==x&&(r.track({type:3,doc:S}),D=!0):this.ru(v,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.Za(S,h)>0||f&&this.Za(S,f)<0)&&(l=!0)):!v&&S?(r.track({type:0,doc:S}),D=!0):v&&!S&&(r.track({type:1,doc:v}),D=!0,(h||f)&&(l=!0)),D&&(S?(a=a.add(S),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Xa:a,nu:r,Cs:l,mutatedKeys:o}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((m,y)=>function(S,V){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:D})}};return x(S)-x(V)}(m.type,y.type)||this.Za(m.doc,y.doc)),this.iu(r),s=s!=null&&s;const l=e&&!s?this.su():[],h=this.Ya.size===0&&this.current&&!s?1:0,f=h!==this.Ja;return this.Ja=h,a.length!==0||f?{snapshot:new De(this.query,t.Xa,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Ta,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=q(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new ic(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new sc(r))}),e}au(t){this.Ha=t.$s,this.Ya=q();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return De.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const di="SyncEngine";class Im{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Am{constructor(t){this.key=t,this.cu=!1}}class wm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new me(l=>vu(l),Ar),this.Pu=new Map,this.Tu=new Set,this.Iu=new Y(O.comparator),this.Eu=new Map,this.du=new ei,this.Au={},this.Ru=new Map,this.Vu=be.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function Rm(n,t,e=!0){const r=hc(n);let s;const o=r.hu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.uu()):s=await oc(r,t,e,!0),s}async function Cm(n,t){const e=hc(n);await oc(e,t,!0,!1)}async function oc(n,t,e,r){const s=await Gf(n.localStore,bt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Pm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Wu(n.remoteStore,s),l}async function Pm(n,t,e,r,s){n.fu=(y,v,S)=>async function(x,D,z,B){let H=D.view.tu(z);H.Cs&&(H=await pa(x.localStore,D.query,!1).then(({documents:I})=>D.view.tu(I,H)));const tt=B&&B.targetChanges.get(D.targetId),xt=B&&B.targetMismatches.get(D.targetId)!=null,ot=D.view.applyChanges(H,x.isPrimaryClient,tt,xt);return Ra(x,D.targetId,ot.ou),ot.snapshot}(n,y,v,S);const o=await pa(n.localStore,t,!0),a=new Tm(t,o.$s),l=a.tu(o.documents),h=wn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,h);Ra(n,e,f.ou);const m=new Im(t,e,a);return n.hu.set(t,m),n.Pu.has(e)?n.Pu.get(e).push(t):n.Pu.set(e,[t]),f.snapshot}async function Sm(n,t,e){const r=F(n),s=r.hu.get(t),o=r.Pu.get(s.targetId);if(o.length>1)return r.Pu.set(s.targetId,o.filter(a=>!Ar(a,t))),void r.hu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Os(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ii(r.remoteStore,s.targetId),Fs(r,s.targetId)}).catch(Oe)):(Fs(r,s.targetId),await Os(r.localStore,s.targetId,!0))}async function Vm(n,t){const e=F(n),r=e.hu.get(t),s=e.Pu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ii(e.remoteStore,r.targetId))}async function bm(n,t,e){const r=Lm(n);try{const s=await function(a,l){const h=F(a),f=rt.now(),m=l.reduce((S,V)=>S.add(V.key),q());let y,v;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let V=Bt(),x=q();return h.Bs.getEntries(S,m).next(D=>{V=D,V.forEach((z,B)=>{B.isValidDocument()||(x=x.add(z))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,V)).next(D=>{y=D;const z=[];for(const B of l){const H=Hd(B,y.get(B.key).overlayedDocument);H!=null&&z.push(new se(B.key,H,du(H.value.mapValue),Ct.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,z,l)}).next(D=>{v=D;const z=D.applyToLocalDocumentSet(y,x);return h.documentOverlayCache.saveOverlays(S,D.batchId,z)})}).then(()=>({batchId:v.batchId,changes:Au(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let f=a.Au[a.currentUser.toKey()];f||(f=new Y(U)),f=f.insert(l,h),a.Au[a.currentUser.toKey()]=f}(r,s.batchId,e),await Cn(r,s.changes),await br(r.remoteStore)}catch(s){const o=li(s,"Failed to persist write");e.reject(o)}}async function ac(n,t){const e=F(n);try{const r=await $f(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Eu.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?K(a.cu,14607):s.removedDocuments.size>0&&(K(a.cu,42227),a.cu=!1))}),await Cn(e,r,t)}catch(r){await Oe(r)}}function wa(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.hu.forEach((o,a)=>{const l=a.view.Fa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach((m,y)=>{for(const v of y.Sa)v.Fa(l)&&(f=!0)}),f&&hi(h)}(r.eventManager,t),s.length&&r.lu.Y_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Dm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new Y(O.comparator);a=a.insert(o,_t.newNoDocument(o,L.min()));const l=q().add(o),h=new Pr(L.min(),new Map,new Y(U),a,l);await ac(r,h),r.Iu=r.Iu.remove(o),r.Eu.delete(t),fi(r)}else await Os(r.localStore,t,!1).then(()=>Fs(r,t,e)).catch(Oe)}async function Nm(n,t){const e=F(n),r=t.batch.batchId;try{const s=await jf(e.localStore,t);cc(e,r,null),uc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Cn(e,s)}catch(s){await Oe(s)}}async function km(n,t,e){const r=F(n);try{const s=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next(y=>(K(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(f,y))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);cc(r,t,e),uc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Cn(r,s)}catch(s){await Oe(s)}}function uc(n,t){(n.Ru.get(t)||[]).forEach(e=>{e.resolve()}),n.Ru.delete(t)}function cc(n,t,e){const r=F(n);let s=r.Au[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Au[r.currentUser.toKey()]=s}}function Fs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Pu.get(t))n.hu.delete(r),e&&n.lu.gu(r,e);n.Pu.delete(t),n.isPrimaryClient&&n.du.Hr(t).forEach(r=>{n.du.containsKey(r)||lc(n,r)})}function lc(n,t){n.Tu.delete(t.path.canonicalString());const e=n.Iu.get(t);e!==null&&(ii(n.remoteStore,e),n.Iu=n.Iu.remove(t),n.Eu.delete(e),fi(n))}function Ra(n,t,e){for(const r of e)r instanceof sc?(n.du.addReference(r.key,t),xm(n,r)):r instanceof ic?(N(di,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,t),n.du.containsKey(r.key)||lc(n,r.key)):M(19791,{pu:r})}function xm(n,t){const e=t.key,r=e.path.canonicalString();n.Iu.get(e)||n.Tu.has(r)||(N(di,"New document in limbo: "+e),n.Tu.add(r),fi(n))}function fi(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const t=n.Tu.values().next().value;n.Tu.delete(t);const e=new O(X.fromString(t)),r=n.Vu.next();n.Eu.set(r,new Am(e)),n.Iu=n.Iu.insert(e,r),Wu(n.remoteStore,new Ht(bt(Ir(e.path)),r,"TargetPurposeLimboResolution",Er.le))}}async function Cn(n,t,e){const r=F(n),s=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((l,h)=>{a.push(r.fu(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const y=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(f){s.push(f);const y=ri.Rs(h.targetId,f);o.push(y)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>P.forEach(f,v=>P.forEach(v.ds,S=>m.persistence.referenceDelegate.addReference(y,v.targetId,S)).next(()=>P.forEach(v.As,S=>m.persistence.referenceDelegate.removeReference(y,v.targetId,S)))))}catch(y){if(!Me(y))throw y;N(si,"Failed to update sequence numbers: "+y)}for(const y of f){const v=y.targetId;if(!y.fromCache){const S=m.xs.get(v),V=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(V);m.xs=m.xs.insert(v,x)}}}(r.localStore,o))}async function Om(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){N(di,"User change. New user:",t.toKey());const r=await Hu(e.localStore,t);e.currentUser=t,function(o,a){o.Ru.forEach(l=>{l.forEach(h=>{h.reject(new k(C.CANCELLED,a))})}),o.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cn(e,r.ks)}}function Mm(n,t){const e=F(n),r=e.Eu.get(t);if(r&&r.cu)return q().add(r.key);{let s=q();const o=e.Pu.get(t);if(!o)return s;for(const a of o){const l=e.hu.get(a);s=s.unionWith(l.view.eu)}return s}}function hc(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ac.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Dm.bind(null,t),t.lu.Y_=Em.bind(null,t.eventManager),t.lu.gu=vm.bind(null,t.eventManager),t}function Lm(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Nm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=km.bind(null,t),t}class gr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return qf(this.persistence,new Ff,t.initialUser,this.serializer)}Su(t){return new zu(ni.fi,this.serializer)}bu(t){return new Qf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gr.provider={build:()=>new gr};class Fm extends gr{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){K(this.persistence.referenceDelegate instanceof mr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Af(r,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new zu(r=>mr.fi(r,e),this.serializer)}}class Us{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Om.bind(null,this.syncEngine),await gm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ym}()}createDatastore(t){const e=Sr(t.databaseInfo.databaseId),r=function(o){return new Zf(o)}(t.databaseInfo);return function(o,a,l,h){return new rm(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new im(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>wa(this.syncEngine,e,0),function(){return ya.C()?new ya:new Wf}())}createSyncEngine(t,e){return function(s,o,a,l,h,f,m){const y=new wm(s,o,a,l,h,f);return m&&(y.mu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);N(de,"RemoteStore shutting down."),o.da.add(5),await Rn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Us.provider={build:()=>new Us};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Ut("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="FirestoreClient";class Um{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(ne,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(ne,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=li(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function _s(n,t){n.asyncQueue.verifyOperationInProgress(),N(ne,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ca(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Bm(n);N(ne,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>va(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>va(t.remoteStore,s)),n._onlineComponents=t}async function Bm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(ne,"Using user provided OfflineComponentProvider");try{await _s(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ce("Error using user provided cache. Falling back to memory cache: "+e),await _s(n,new gr)}}else N(ne,"Using default OfflineComponentProvider"),await _s(n,new Fm(void 0));return n._offlineComponents}async function fc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(ne,"Using user provided OnlineComponentProvider"),await Ca(n,n._uninitializedComponentsProvider._online)):(N(ne,"Using default OnlineComponentProvider"),await Ca(n,new Us))),n._onlineComponents}function qm(n){return fc(n).then(t=>t.syncEngine)}async function Bs(n){const t=await fc(n),e=t.eventManager;return e.onListen=Rm.bind(null,t.syncEngine),e.onUnlisten=Sm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Cm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vm.bind(null,t.syncEngine),e}function jm(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,f){const m=new dc({next:v=>{m.xu(),a.enqueueAndForget(()=>nc(o,y));const S=v.docs.has(l);!S&&v.fromCache?f.reject(new k(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&h&&h.source==="server"?f.reject(new k(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(v)},error:v=>f.reject(v)}),y=new rc(Ir(l.path),m,{includeMetadataChanges:!0,Qa:!0});return ec(o,y)}(await Bs(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,t,e){if(!e)throw new k(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function $m(n,t,e,r){if(t===!0&&r===!0)throw new k(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Sa(n){if(!O.isDocumentKey(n))throw new k(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Va(n){if(O.isDocumentKey(n))throw new k(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Dr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Pt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Dr(n);throw new k(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="firestore.googleapis.com",ba=!0;class Da{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gc,this.ssl=ba}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:ba;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=$u;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Tf)throw new k(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}$m("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Nr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Da({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Da(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xh;switch(r.type){case"firstParty":return new td(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Pa.get(e);r&&(N("ComponentProvider","Removing Datastore"),Pa.delete(e),r.terminate())}(this),Promise.resolve()}}function zm(n,t,e,r={}){var s;n=Pt(n,Nr);const o=js(t),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Al(`https://${h}`),Pl("Firestore",!0)),a.host!==gc&&a.host!==h&&Ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!ir(f,l)&&(n._setSettings(f),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=gt.MOCK_USER;else{m=wl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new k(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new gt(v)}n._authCredentials=new Yh(new tu(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ge(this.firestore,t,this._query)}}class yt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class Xt extends ge{constructor(t,e,r){super(t,e,Ir(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new O(t))}withConverter(t){return new Xt(this.firestore,t,this._path)}}function pp(n,t,...e){if(n=Nt(n),pc("collection","path",t),n instanceof Nr){const r=X.fromString(t,...e);return Va(r),new Xt(n,null,r)}{if(!(n instanceof yt||n instanceof Xt))throw new k(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Va(r),new Xt(n.firestore,null,r)}}function Hm(n,t,...e){if(n=Nt(n),arguments.length===1&&(t=nu.newId()),pc("doc","path",t),n instanceof Nr){const r=X.fromString(t,...e);return Sa(r),new yt(n,null,new O(r))}{if(!(n instanceof yt||n instanceof Xt))throw new k(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Sa(r),new yt(n.firestore,n instanceof Xt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="AsyncQueue";class ka{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Ku(this,"async_queue_retry"),this.rc=()=>{const r=gs();r&&N(Na,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const e=gs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=gs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new Wt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!Me(t))throw t;N(Na,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,Ut("INTERNAL UNHANDLED ERROR: ",xa(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=e,e}enqueueAfterDelay(t,e,r){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const s=ci.createAndSchedule(this,t,e,r,o=>this.uc(o));return this.Zu.push(s),s}oc(){this.Xu&&M(47125,{cc:xa(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function xa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class fe extends Nr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new ka,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ka(t),this._firestoreClient=void 0,await t}}}function gp(n,t){const e=typeof n=="object"?n:Uh(),r=typeof n=="string"?n:cr,s=kh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Tl("firestore");o&&zm(s,...o)}return s}function mi(n){if(n._terminated)throw new k(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gm(n),n._firestoreClient}function Gm(n){var t,e,r;const s=n._freezeSettings(),o=function(l,h,f,m){return new pd(l,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,mc(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Um(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ne(lt.fromBase64String(t))}catch(e){throw new k(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ne(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^__.*__$/;class Qm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new An(t,this.data,e,this.fieldTransforms)}}class _c{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ic:n})}}class _i{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new _i(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Vc(t),s}mc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return _r(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(yc(this.Ic)&&Km.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class Wm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Sr(t)}bc(t,e,r,s=!1){return new _i({Ic:t,methodName:e,wc:r,path:ct.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Or(n){const t=n._freezeSettings(),e=Sr(n._databaseId);return new Wm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ec(n,t,e,r,s,o={}){const a=n.bc(o.merge||o.mergeFields?2:0,t,e,s);Ei("Data must be an object, but it was:",a,r);const l=vc(r,a);let h,f;if(o.merge)h=new wt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const v=qs(t,y,e);if(!a.contains(v))throw new k(C.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Ic(m,v)||m.push(v)}h=new wt(m),f=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,f=a.fieldTransforms;return new Qm(new It(l),h,f)}class Mr extends xr{_toFieldTransform(t){if(t.Ic!==2)throw t.Ic===1?t.gc(`${this._methodName}() can only appear at the top level of your update data`):t.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Mr}}class yi extends xr{_toFieldTransform(t){return new qd(t.path,new vn)}isEqual(t){return t instanceof yi}}function Xm(n,t,e,r){const s=n.bc(1,t,e);Ei("Data must be an object, but it was:",s,r);const o=[],a=It.empty();re(r,(h,f)=>{const m=vi(t,h,e);f=Nt(f);const y=s.mc(m);if(f instanceof Mr)o.push(m);else{const v=Pn(f,y);v!=null&&(o.push(m),a.set(m,v))}});const l=new wt(o);return new _c(a,l,s.fieldTransforms)}function Ym(n,t,e,r,s,o){const a=n.bc(1,t,e),l=[qs(t,r,e)],h=[s];if(o.length%2!=0)throw new k(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<o.length;v+=2)l.push(qs(t,o[v])),h.push(o[v+1]);const f=[],m=It.empty();for(let v=l.length-1;v>=0;--v)if(!Ic(f,l[v])){const S=l[v];let V=h[v];V=Nt(V);const x=a.mc(S);if(V instanceof Mr)f.push(S);else{const D=Pn(V,x);D!=null&&(f.push(S),m.set(S,D))}}const y=new wt(f);return new _c(m,y,a.fieldTransforms)}function Jm(n,t,e,r=!1){return Pn(e,n.bc(r?4:3,t))}function Pn(n,t){if(Tc(n=Nt(n)))return Ei("Unsupported field value:",t,n),vc(n,t);if(n instanceof xr)return function(r,s){if(!yc(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=Pn(l,s.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Fd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=rt.fromDate(r);return{timestampValue:fr(s.serializer,o)}}if(r instanceof rt){const o=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fr(s.serializer,o)}}if(r instanceof pi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ne)return{bytesValue:Mu(s.serializer,r._byteString)};if(r instanceof yt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ti(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof gi)return function(a,l){return{mapValue:{fields:{[lu]:{stringValue:hu},[lr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw l.gc("VectorValues must only contain numeric values.");return Ys(l.serializer,f)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${Dr(r)}`)}(n,t)}function vc(n,t){const e={};return su(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):re(n,(r,s)=>{const o=Pn(s,t.Ac(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Tc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof pi||n instanceof Ne||n instanceof yt||n instanceof xr||n instanceof gi)}function Ei(n,t,e){if(!Tc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Dr(e);throw r==="an object"?t.gc(n+" a custom object"):t.gc(n+" "+r)}}function qs(n,t,e){if((t=Nt(t))instanceof kr)return t._internalPath;if(typeof t=="string")return vi(n,t);throw _r("Field path arguments must be of type string or ",n,!1,void 0,e)}const Zm=new RegExp("[~\\*/\\[\\]]");function vi(n,t,e){if(t.search(Zm)>=0)throw _r(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new kr(...t.split("."))._internalPath}catch{throw _r(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function _r(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new k(C.INVALID_ARGUMENT,l+n+h)}function Ic(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Lr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class tp extends Ac{data(){return super.data()}}function Lr(n,t){return typeof t=="string"?vi(n,t):t instanceof kr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ti{}class wc extends Ti{}function _p(n,t,...e){let r=[];t instanceof Ti&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Ii).length,l=o.filter(h=>h instanceof Fr).length;if(a>1||a>0&&l>0)throw new k(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Fr extends wc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Fr(t,e,r)}_apply(t){const e=this._parse(t);return Rc(t._query,e),new ge(t.firestore,t.converter,Vs(t._query,e))}_parse(t){const e=Or(t.firestore);return function(o,a,l,h,f,m,y){let v;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new k(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){La(y,m);const V=[];for(const x of y)V.push(Ma(h,o,x));v={arrayValue:{values:V}}}else v=Ma(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||La(y,m),v=Jm(l,a,y,m==="in"||m==="not-in");return nt.create(f,m,v)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function yp(n,t,e){const r=t,s=Lr("where",n);return Fr._create(s,r,e)}class Ii extends Ti{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ii(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:St.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)Rc(a,h),a=Vs(a,h)}(t._query,e),new ge(t.firestore,t.converter,Vs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ai extends wc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ai(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new k(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new En(o,a)}(t._query,this._field,this._direction);return new ge(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Le(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Ep(n,t="asc"){const e=t,r=Lr("orderBy",n);return Ai._create(r,e)}function Ma(n,t,e){if(typeof(e=Nt(e))=="string"){if(e==="")throw new k(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Eu(t)&&e.indexOf("/")!==-1)throw new k(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(X.fromString(e));if(!O.isDocumentKey(r))throw new k(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xo(n,new O(r))}if(e instanceof yt)return Xo(n,e._key);throw new k(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dr(e)}.`)}function La(n,t){if(!Array.isArray(n)||n.length===0)throw new k(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Rc(n,t){const e=function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class np{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return re(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[lr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Z(a.doubleValue));return new gi(o)}convertGeoPoint(t){return new pi(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Tr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(gn(t));default:return null}}convertTimestamp(t){const e=Jt(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);K(ju(r),9688,{name:t});const s=new _n(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Ut(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pc extends Ac{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Lr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class rr extends Pc{data(t={}){return super.data(t)}}class rp{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new on(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new rr(this._firestore,this._userDataWriter,r.key,r,new on(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new rr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new on(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new rr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new on(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:sp(l.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function sp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){n=Pt(n,yt);const t=Pt(n.firestore,fe);return jm(mi(t),n._key).then(e=>Vc(t,n,e))}class Sc extends np{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ne(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function Tp(n,t,e){n=Pt(n,yt);const r=Pt(n.firestore,fe),s=Cc(n.converter,t);return wi(r,[Ec(Or(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ct.none())])}function Ip(n,t,e,...r){n=Pt(n,yt);const s=Pt(n.firestore,fe),o=Or(s);let a;return a=typeof(t=Nt(t))=="string"||t instanceof kr?Ym(o,"updateDoc",n._key,t,e,r):Xm(o,"updateDoc",n._key,t),wi(s,[a.toMutation(n._key,Ct.exists(!0))])}function Ap(n,t){const e=Pt(n.firestore,fe),r=Hm(n),s=Cc(n.converter,t);return wi(e,[Ec(Or(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ct.exists(!1))]).then(()=>r)}function wp(n,...t){var e,r,s;n=Nt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Oa(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Oa(t[a])){const y=t[a];t[a]=(e=y.next)===null||e===void 0?void 0:e.bind(y),t[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),t[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let h,f,m;if(n instanceof yt)f=Pt(n.firestore,fe),m=Ir(n._key.path),h={next:y=>{t[a]&&t[a](Vc(f,n,y))},error:t[a+1],complete:t[a+2]};else{const y=Pt(n,ge);f=Pt(y.firestore,fe),m=y._query;const v=new Sc(f);h={next:S=>{t[a]&&t[a](new rp(f,v,y,S))},error:t[a+1],complete:t[a+2]},ep(n._query)}return function(v,S,V,x){const D=new dc(x),z=new rc(S,D,V);return v.asyncQueue.enqueueAndForget(async()=>ec(await Bs(v),z)),()=>{D.xu(),v.asyncQueue.enqueueAndForget(async()=>nc(await Bs(v),z))}}(mi(f),m,l,h)}function wi(n,t){return function(r,s){const o=new Wt;return r.asyncQueue.enqueueAndForget(async()=>bm(await qm(r),s,o)),o.promise}(mi(n),t)}function Vc(n,t,e){const r=e.docs.get(t._key),s=new Sc(n);return new Pc(n,s,t._key,r,new on(e.hasPendingWrites,e.fromCache),t.converter)}function Rp(){return new yi("serverTimestamp")}(function(t,e=!0){(function(s){xe=s})(Lh),ar(new fn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new fe(new Jh(r.getProvider("auth-internal")),new ed(a,r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _n(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),un(Fo,Uo,t),un(Fo,Uo,"esm2017")})();export{$ as A,up as B,pl as C,ap as D,qa as E,ke as F,ar as G,fn as H,un as I,fp as J,gp as K,ja as L,Fh as M,Lh as S,rt as T,kh as _,wp as a,Rp as b,pp as c,Hm as d,Ap as e,Uh as f,vp as g,ip as h,vl as i,ir as j,Nt as k,js as l,Pl as m,xh as n,Ep as o,Al as p,_p as q,$s as r,Tp as s,lp as t,Ip as u,hp as v,yp as w,dp as x,op as y,cp as z};
