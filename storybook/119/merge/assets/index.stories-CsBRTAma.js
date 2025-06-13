import{u as qe,a as da,b as fa,c as pa,g as ga,d as ma,e as va,f as ya,h as _a,w as Ia,i as kt}from"./storybook-decorators-wUPIH0gk.js";import{h as wa}from"./index-CSCcg9_e.js";import{w as _n,e as H}from"./index-B7YJKKKT.js";import{j as D}from"./create-recipe-context-LbQq3bM7.js";import{u as wt}from"./color-mode-DpbueTiJ.js";import{r as fe}from"./index-BXymfbzT.js";import{h as Ta}from"./index-CVTRJrKK.js";import{j as Ea,k as Aa}from"./index--QnOPJP9.js";import{U as ba}from"./index-BKRLRV3Q.js";import{U as Sa}from"./index-B4rjanpE.js";import{S as Ca}from"./index-B61S8q7K.js";import{C as qn}from"./container-BXrbxM4E.js";import{V as Zt}from"./v-stack-DfIdlA7P.js";import{a as ka}from"./button-Cvi4ewak.js";import{T as Ae}from"./text-BOFVnBsW.js";import{B as We}from"./box-p2MKwv57.js";import{H as kr}from"./heading-B7_y7u_0.js";import{B as Xn}from"./badge-B3FQ0tmT.js";import{H as Rr}from"./h-stack-BOuMwgNM.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./stack-B-mkjmc_.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./segment-DQKAVVpM.js";import"./index-DLok-9d1.js";import"./index-BtdCwzVt.js";import"./input-C3XuNbVL.js";import"./factory-OeC611uy.js";import"./index-B1VjsNl3.js";import"./index-C85FKF7s.js";import"./use-field-context-BeRDi0mX.js";import"./index-BztEsmkx.js";import"./schemas-DAprl8_Q.js";import"./types-DwQkBYn-.js";import"./index-CPDNhJuL.js";import"./layouts-BGugoDGd.js";import"./image-BNXA3K55.js";import"./index-DGKHe-6Q.js";import"./image-context-5CzGecbX.js";import"./router-context.shared-runtime-CTsxCgvG.js";import"./use-merged-ref-0PvjutYQ.js";import"./use-breakpoint-CtC0MXDZ.js";import"./simple-grid-B5XIW-CE.js";import"./grid-DCXQ59mM.js";import"./index-BB5SsZpJ.js";/**
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
 */const Ra=()=>{};var Pr={};/**
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
 */const Rs=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Pa=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],h=i[n++],y=i[n++],I=((o&7)<<18|(c&63)<<12|(h&63)<<6|y&63)-65536;e[r++]=String.fromCharCode(55296+(I>>10)),e[r++]=String.fromCharCode(56320+(I&1023))}else{const c=i[n++],h=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Ps={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const c=i[o],h=o+1<i.length,y=h?i[o+1]:0,I=o+2<i.length,T=I?i[o+2]:0,b=c>>2,C=(c&3)<<4|y>>4;let A=(y&15)<<2|T>>6,L=T&63;I||(L=64,h||(A=64)),r.push(n[b],n[C],n[A],n[L])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Rs(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Pa(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],y=o<i.length?n[i.charAt(o)]:0;++o;const T=o<i.length?n[i.charAt(o)]:64;++o;const C=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||y==null||T==null||C==null)throw new Da;const A=c<<2|y>>4;if(r.push(A),T!==64){const L=y<<4&240|T>>2;if(r.push(L),C!==64){const k=T<<6&192|C;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Da extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oa=function(i){const e=Rs(i);return Ps.encodeByteArray(e,!0)},hn=function(i){return Oa(i).replace(/\./g,"")},Ds=function(i){try{return Ps.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Na(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const La=()=>Na().__FIREBASE_DEFAULTS__,xa=()=>{if(typeof process>"u"||typeof Pr>"u")return;const i=Pr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Ma=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ds(i[1]);return e&&JSON.parse(e)},pi=()=>{try{return Ra()||La()||xa()||Ma()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Os=i=>{var e,n;return(n=(e=pi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Ua=i=>{const e=Os(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ns=()=>{var i;return(i=pi())===null||i===void 0?void 0:i.config},Ls=i=>{var e;return(e=pi())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Ba{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Rt(i){return i.endsWith(".cloudworkstations.dev")}async function xs(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function ja(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[hn(JSON.stringify(n)),hn(JSON.stringify(h)),""].join(".")}const Tt={};function Fa(){const i={prod:[],emulator:[]};for(const e of Object.keys(Tt))Tt[e]?i.emulator.push(e):i.prod.push(e);return i}function Ha(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Dr=!1;function Ms(i,e){if(typeof window>"u"||typeof document>"u"||!Rt(window.location.host)||Tt[i]===e||Tt[i]||Dr)return;Tt[i]=e;function n(A){return`__firebase__banner__${A}`}const r="__firebase__banner",c=Fa().prod.length>0;function h(){const A=document.getElementById(r);A&&A.remove()}function y(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function I(A,L){A.setAttribute("width","24"),A.setAttribute("id",L),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function T(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Dr=!0,h()},A}function b(A,L){A.setAttribute("id",L),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function C(){const A=Ha(r),L=n("text"),k=document.getElementById(L)||document.createElement("span"),U=n("learnmore"),N=document.getElementById(U)||document.createElement("a"),Q=n("preprendIcon"),V=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const j=A.element;y(j),b(N,U);const q=T();I(V,Q),j.append(V,k,N,q),document.body.appendChild(j)}c?(k.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
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
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Va(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function $a(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function za(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Ga(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wa(){const i=Z();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Ka(){try{return typeof indexedDB=="object"}catch{return!1}}function qa(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const Xa="FirebaseError";class _e extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Xa,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pt.prototype.create)}}class Pt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?Ja(c,r):"Error",y=`${this.serviceName}: ${h} (${o}).`;return new _e(o,y,r)}}function Ja(i,e){return i.replace(Ya,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Ya=/\{\$([^}]+)}/g;function Za(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Be(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const c=i[o],h=e[o];if(Or(c)&&Or(h)){if(!Be(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Or(i){return i!==null&&typeof i=="object"}/**
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
 */function Dt(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qa(i,e){const n=new ec(i,e);return n.subscribe.bind(n)}class ec{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tc(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=Jn),o.error===void 0&&(o.error=Jn),o.complete===void 0&&(o.complete=Jn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tc(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Jn(){}/**
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
 */function tt(i){return i&&i._delegate?i._delegate:i}class je{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Me="[DEFAULT]";/**
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
 */class nc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ba;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rc(e))try{this.getOrInitializeService({instanceIdentifier:Me})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Me){return this.instances.has(e)}getOptions(e=Me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,h]of this.instancesDeferred.entries()){const y=this.normalizeInstanceIdentifier(c);r===y&&h.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&e(h,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ic(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Me){return this.component?this.component.multipleInstances?e:Me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ic(i){return i===Me?void 0:i}function rc(i){return i.instantiationMode==="EAGER"}/**
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
 */class sc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(O||(O={}));const oc={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},ac=O.INFO,cc={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},lc=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=cc[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gi{constructor(e){this.name=e,this._logLevel=ac,this._logHandler=lc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const hc=(i,e)=>e.some(n=>i instanceof n);let Nr,Lr;function uc(){return Nr||(Nr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dc(){return Lr||(Lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Us=new WeakMap,ri=new WeakMap,Bs=new WeakMap,Yn=new WeakMap,mi=new WeakMap;function fc(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{n(Pe(i.result)),o()},h=()=>{r(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&Us.set(n,i)}).catch(()=>{}),mi.set(e,i),e}function pc(i){if(ri.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{n(),o()},h=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});ri.set(i,e)}let si={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return ri.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Bs.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pe(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function gc(i){si=i(si)}function mc(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Zn(this),e,...n);return Bs.set(r,e.sort?e.sort():[e]),Pe(r)}:dc().includes(i)?function(...e){return i.apply(Zn(this),e),Pe(Us.get(this))}:function(...e){return Pe(i.apply(Zn(this),e))}}function vc(i){return typeof i=="function"?mc(i):(i instanceof IDBTransaction&&pc(i),hc(i,uc())?new Proxy(i,si):i)}function Pe(i){if(i instanceof IDBRequest)return fc(i);if(Yn.has(i))return Yn.get(i);const e=vc(i);return e!==i&&(Yn.set(i,e),mi.set(e,i)),e}const Zn=i=>mi.get(i);function yc(i,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(i,e),y=Pe(h);return r&&h.addEventListener("upgradeneeded",I=>{r(Pe(h.result),I.oldVersion,I.newVersion,Pe(h.transaction),I)}),n&&h.addEventListener("blocked",I=>n(I.oldVersion,I.newVersion,I)),y.then(I=>{c&&I.addEventListener("close",()=>c()),o&&I.addEventListener("versionchange",T=>o(T.oldVersion,T.newVersion,T))}).catch(()=>{}),y}const _c=["get","getKey","getAll","getAllKeys","count"],Ic=["put","add","delete","clear"],Qn=new Map;function xr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Qn.get(e))return Qn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Ic.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||_c.includes(n)))return;const c=async function(h,...y){const I=this.transaction(h,o?"readwrite":"readonly");let T=I.store;return r&&(T=T.index(y.shift())),(await Promise.all([T[n](...y),o&&I.done]))[0]};return Qn.set(e,c),c}gc(i=>({...i,get:(e,n,r)=>xr(e,n)||i.get(e,n,r),has:(e,n)=>!!xr(e,n)||i.has(e,n)}));/**
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
 */class wc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tc(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oi="@firebase/app",Mr="0.13.1";/**
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
 */const me=new gi("@firebase/app"),Ec="@firebase/app-compat",Ac="@firebase/analytics-compat",bc="@firebase/analytics",Sc="@firebase/app-check-compat",Cc="@firebase/app-check",kc="@firebase/auth",Rc="@firebase/auth-compat",Pc="@firebase/database",Dc="@firebase/data-connect",Oc="@firebase/database-compat",Nc="@firebase/functions",Lc="@firebase/functions-compat",xc="@firebase/installations",Mc="@firebase/installations-compat",Uc="@firebase/messaging",Bc="@firebase/messaging-compat",jc="@firebase/performance",Fc="@firebase/performance-compat",Hc="@firebase/remote-config",Vc="@firebase/remote-config-compat",$c="@firebase/storage",zc="@firebase/storage-compat",Gc="@firebase/firestore",Wc="@firebase/ai",Kc="@firebase/firestore-compat",qc="firebase",Xc="11.9.0";/**
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
 */const ai="[DEFAULT]",Jc={[oi]:"fire-core",[Ec]:"fire-core-compat",[bc]:"fire-analytics",[Ac]:"fire-analytics-compat",[Cc]:"fire-app-check",[Sc]:"fire-app-check-compat",[kc]:"fire-auth",[Rc]:"fire-auth-compat",[Pc]:"fire-rtdb",[Dc]:"fire-data-connect",[Oc]:"fire-rtdb-compat",[Nc]:"fire-fn",[Lc]:"fire-fn-compat",[xc]:"fire-iid",[Mc]:"fire-iid-compat",[Uc]:"fire-fcm",[Bc]:"fire-fcm-compat",[jc]:"fire-perf",[Fc]:"fire-perf-compat",[Hc]:"fire-rc",[Vc]:"fire-rc-compat",[$c]:"fire-gcs",[zc]:"fire-gcs-compat",[Gc]:"fire-fst",[Kc]:"fire-fst-compat",[Wc]:"fire-vertex","fire-js":"fire-js",[qc]:"fire-js-all"};/**
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
 */const un=new Map,Yc=new Map,ci=new Map;function Ur(i,e){try{i.container.addComponent(e)}catch(n){me.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Ze(i){const e=i.name;if(ci.has(e))return me.debug(`There were multiple attempts to register component ${e}.`),!1;ci.set(e,i);for(const n of un.values())Ur(n,i);for(const n of Yc.values())Ur(n,i);return!0}function vi(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function oe(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Zc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new Pt("app","Firebase",Zc);/**
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
 */class Qc{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
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
 */const nt=Xc;function js(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ai,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw De.create("bad-app-name",{appName:String(o)});if(n||(n=Ns()),!n)throw De.create("no-options");const c=un.get(o);if(c){if(Be(n,c.options)&&Be(r,c.config))return c;throw De.create("duplicate-app",{appName:o})}const h=new sc(o);for(const I of ci.values())h.addComponent(I);const y=new Qc(n,r,h);return un.set(o,y),y}function Fs(i=ai){const e=un.get(i);if(!e&&i===ai&&Ns())return js();if(!e)throw De.create("no-app",{appName:i});return e}function Oe(i,e,n){var r;let o=(r=Jc[i])!==null&&r!==void 0?r:i;n&&(o+=`-${n}`);const c=o.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const y=[`Unable to register library "${o}" with version "${e}":`];c&&y.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&y.push("and"),h&&y.push(`version name "${e}" contains illegal characters (whitespace or "/")`),me.warn(y.join(" "));return}Ze(new je(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const el="firebase-heartbeat-database",tl=1,St="firebase-heartbeat-store";let ei=null;function Hs(){return ei||(ei=yc(el,tl,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(St)}catch(n){console.warn(n)}}}}).catch(i=>{throw De.create("idb-open",{originalErrorMessage:i.message})})),ei}async function nl(i){try{const n=(await Hs()).transaction(St),r=await n.objectStore(St).get(Vs(i));return await n.done,r}catch(e){if(e instanceof _e)me.warn(e.message);else{const n=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});me.warn(n.message)}}}async function Br(i,e){try{const r=(await Hs()).transaction(St,"readwrite");await r.objectStore(St).put(e,Vs(i)),await r.done}catch(n){if(n instanceof _e)me.warn(n.message);else{const r=De.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});me.warn(r.message)}}}function Vs(i){return`${i.name}!${i.options.appId}`}/**
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
 */const il=1024,rl=30;class sl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new al(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=jr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>rl){const h=cl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){me.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jr(),{heartbeatsToSend:r,unsentEntries:o}=ol(this._heartbeatsCache.heartbeats),c=hn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return me.warn(n),""}}}function jr(){return new Date().toISOString().substring(0,10)}function ol(i,e=il){const n=[];let r=i.slice();for(const o of i){const c=n.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),Fr(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Fr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class al{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ka()?qa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Fr(i){return hn(JSON.stringify({version:2,heartbeats:i})).length}function cl(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let r=1;r<i.length;r++)i[r].date<n&&(n=i[r].date,e=r);return e}/**
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
 */function ll(i){Ze(new je("platform-logger",e=>new wc(e),"PRIVATE")),Ze(new je("heartbeat",e=>new sl(e),"PRIVATE")),Oe(oi,Mr,i),Oe(oi,Mr,"esm2017"),Oe("fire-js","")}ll("");var Hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $s;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(p,u){function f(){}f.prototype=u.prototype,p.D=u.prototype,p.prototype=new f,p.prototype.constructor=p,p.C=function(g,m,_){for(var d=Array(arguments.length-2),he=2;he<arguments.length;he++)d[he-2]=arguments[he];return u.prototype[m].apply(g,d)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(p,u,f){f||(f=0);var g=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)g[m]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(m=0;16>m;++m)g[m]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=p.g[0],f=p.g[1],m=p.g[2];var _=p.g[3],d=u+(_^f&(m^_))+g[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+g[1]+3905402710&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+g[2]+606105819&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+g[3]+3250441966&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+g[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+g[5]+1200080426&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+g[6]+2821735955&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+g[7]+4249261313&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+g[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+g[9]+2336552879&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+g[10]+4294925233&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+g[11]+2304563134&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+g[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+g[13]+4254626195&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+g[14]+2792965006&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+g[15]+1236535329&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(m^_&(f^m))+g[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+g[6]+3225465664&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+g[11]+643717713&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+g[0]+3921069994&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+g[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+g[10]+38016083&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+g[15]+3634488961&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+g[4]+3889429448&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+g[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+g[14]+3275163606&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+g[3]+4107603335&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+g[8]+1163531501&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+g[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+g[2]+4243563512&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+g[7]+1735328473&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+g[12]+2368359562&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(f^m^_)+g[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+g[8]+2272392833&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+g[11]+1839030562&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+g[14]+4259657740&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+g[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+g[4]+1272893353&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+g[7]+4139469664&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+g[10]+3200236656&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+g[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+g[0]+3936430074&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+g[3]+3572445317&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+g[6]+76029189&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+g[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+g[12]+3873151461&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+g[15]+530742520&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+g[2]+3299628645&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(m^(f|~_))+g[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+g[7]+1126891415&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+g[14]+2878612391&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+g[5]+4237533241&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+g[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+g[3]+2399980690&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+g[10]+4293915773&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+g[1]+2240044497&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+g[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+g[15]+4264355552&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+g[6]+2734768916&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+g[13]+1309151649&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+g[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+g[11]+3174756917&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+g[2]+718787259&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+g[9]+3951481745&4294967295,p.g[0]=p.g[0]+u&4294967295,p.g[1]=p.g[1]+(m+(d<<21&4294967295|d>>>11))&4294967295,p.g[2]=p.g[2]+m&4294967295,p.g[3]=p.g[3]+_&4294967295}r.prototype.u=function(p,u){u===void 0&&(u=p.length);for(var f=u-this.blockSize,g=this.B,m=this.h,_=0;_<u;){if(m==0)for(;_<=f;)o(this,p,_),_+=this.blockSize;if(typeof p=="string"){for(;_<u;)if(g[m++]=p.charCodeAt(_++),m==this.blockSize){o(this,g),m=0;break}}else for(;_<u;)if(g[m++]=p[_++],m==this.blockSize){o(this,g),m=0;break}}this.h=m,this.o+=u},r.prototype.v=function(){var p=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);p[0]=128;for(var u=1;u<p.length-8;++u)p[u]=0;var f=8*this.o;for(u=p.length-8;u<p.length;++u)p[u]=f&255,f/=256;for(this.u(p),p=Array(16),u=f=0;4>u;++u)for(var g=0;32>g;g+=8)p[f++]=this.g[u]>>>g&255;return p};function c(p,u){var f=y;return Object.prototype.hasOwnProperty.call(f,p)?f[p]:f[p]=u(p)}function h(p,u){this.h=u;for(var f=[],g=!0,m=p.length-1;0<=m;m--){var _=p[m]|0;g&&_==u||(f[m]=_,g=!1)}this.g=f}var y={};function I(p){return-128<=p&&128>p?c(p,function(u){return new h([u|0],0>u?-1:0)}):new h([p|0],0>p?-1:0)}function T(p){if(isNaN(p)||!isFinite(p))return C;if(0>p)return N(T(-p));for(var u=[],f=1,g=0;p>=f;g++)u[g]=p/f|0,f*=4294967296;return new h(u,0)}function b(p,u){if(p.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(p.charAt(0)=="-")return N(b(p.substring(1),u));if(0<=p.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=T(Math.pow(u,8)),g=C,m=0;m<p.length;m+=8){var _=Math.min(8,p.length-m),d=parseInt(p.substring(m,m+_),u);8>_?(_=T(Math.pow(u,_)),g=g.j(_).add(T(d))):(g=g.j(f),g=g.add(T(d)))}return g}var C=I(0),A=I(1),L=I(16777216);i=h.prototype,i.m=function(){if(U(this))return-N(this).m();for(var p=0,u=1,f=0;f<this.g.length;f++){var g=this.i(f);p+=(0<=g?g:4294967296+g)*u,u*=4294967296}return p},i.toString=function(p){if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(k(this))return"0";if(U(this))return"-"+N(this).toString(p);for(var u=T(Math.pow(p,6)),f=this,g="";;){var m=q(f,u).g;f=Q(f,m.j(u));var _=((0<f.g.length?f.g[0]:f.h)>>>0).toString(p);if(f=m,k(f))return _+g;for(;6>_.length;)_="0"+_;g=_+g}},i.i=function(p){return 0>p?0:p<this.g.length?this.g[p]:this.h};function k(p){if(p.h!=0)return!1;for(var u=0;u<p.g.length;u++)if(p.g[u]!=0)return!1;return!0}function U(p){return p.h==-1}i.l=function(p){return p=Q(this,p),U(p)?-1:k(p)?0:1};function N(p){for(var u=p.g.length,f=[],g=0;g<u;g++)f[g]=~p.g[g];return new h(f,~p.h).add(A)}i.abs=function(){return U(this)?N(this):this},i.add=function(p){for(var u=Math.max(this.g.length,p.g.length),f=[],g=0,m=0;m<=u;m++){var _=g+(this.i(m)&65535)+(p.i(m)&65535),d=(_>>>16)+(this.i(m)>>>16)+(p.i(m)>>>16);g=d>>>16,_&=65535,d&=65535,f[m]=d<<16|_}return new h(f,f[f.length-1]&-2147483648?-1:0)};function Q(p,u){return p.add(N(u))}i.j=function(p){if(k(this)||k(p))return C;if(U(this))return U(p)?N(this).j(N(p)):N(N(this).j(p));if(U(p))return N(this.j(N(p)));if(0>this.l(L)&&0>p.l(L))return T(this.m()*p.m());for(var u=this.g.length+p.g.length,f=[],g=0;g<2*u;g++)f[g]=0;for(g=0;g<this.g.length;g++)for(var m=0;m<p.g.length;m++){var _=this.i(g)>>>16,d=this.i(g)&65535,he=p.i(m)>>>16,rt=p.i(m)&65535;f[2*g+2*m]+=d*rt,V(f,2*g+2*m),f[2*g+2*m+1]+=_*rt,V(f,2*g+2*m+1),f[2*g+2*m+1]+=d*he,V(f,2*g+2*m+1),f[2*g+2*m+2]+=_*he,V(f,2*g+2*m+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new h(f,0)};function V(p,u){for(;(p[u]&65535)!=p[u];)p[u+1]+=p[u]>>>16,p[u]&=65535,u++}function j(p,u){this.g=p,this.h=u}function q(p,u){if(k(u))throw Error("division by zero");if(k(p))return new j(C,C);if(U(p))return u=q(N(p),u),new j(N(u.g),N(u.h));if(U(u))return u=q(p,N(u)),new j(N(u.g),u.h);if(30<p.g.length){if(U(p)||U(u))throw Error("slowDivide_ only works with positive integers.");for(var f=A,g=u;0>=g.l(p);)f=le(f),g=le(g);var m=B(f,1),_=B(g,1);for(g=B(g,2),f=B(f,2);!k(g);){var d=_.add(g);0>=d.l(p)&&(m=m.add(f),_=d),g=B(g,1),f=B(f,1)}return u=Q(p,m.j(u)),new j(m,u)}for(m=C;0<=p.l(u);){for(f=Math.max(1,Math.floor(p.m()/u.m())),g=Math.ceil(Math.log(f)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),_=T(f),d=_.j(u);U(d)||0<d.l(p);)f-=g,_=T(f),d=_.j(u);k(_)&&(_=A),m=m.add(_),p=Q(p,d)}return new j(m,p)}i.A=function(p){return q(this,p).h},i.and=function(p){for(var u=Math.max(this.g.length,p.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)&p.i(g);return new h(f,this.h&p.h)},i.or=function(p){for(var u=Math.max(this.g.length,p.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)|p.i(g);return new h(f,this.h|p.h)},i.xor=function(p){for(var u=Math.max(this.g.length,p.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)^p.i(g);return new h(f,this.h^p.h)};function le(p){for(var u=p.g.length+1,f=[],g=0;g<u;g++)f[g]=p.i(g)<<1|p.i(g-1)>>>31;return new h(f,p.h)}function B(p,u){var f=u>>5;u%=32;for(var g=p.g.length-f,m=[],_=0;_<g;_++)m[_]=0<u?p.i(_+f)>>>u|p.i(_+f+1)<<32-u:p.i(_+f);return new h(m,p.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=T,h.fromString=b,$s=h}).apply(typeof Hr<"u"?Hr:typeof self<"u"?self:typeof window<"u"?window:{});var Qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qt=="object"&&Qt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var l=0;l<t.length-1;l++){var v=t[l];if(!(v in a))break e;a=a[v]}t=t[t.length-1],l=a[t],s=s(l),s!=l&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,l=!1,v={next:function(){if(!l&&a<t.length){var w=a++;return{value:s(w,t[w]),done:!1}}return l=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},y=this||self;function I(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function T(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function b(t,s,a){return t.call.apply(t.bind,arguments)}function C(t,s,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,l),t.apply(s,v)}}return function(){return t.apply(s,arguments)}}function A(t,s,a){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:C,A.apply(null,arguments)}function L(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function k(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(l,v,w){for(var E=Array(arguments.length-2),x=2;x<arguments.length;x++)E[x-2]=arguments[x];return s.prototype[v].apply(l,E)}}function U(t){const s=t.length;if(0<s){const a=Array(s);for(let l=0;l<s;l++)a[l]=t[l];return a}return[]}function N(t,s){for(let a=1;a<arguments.length;a++){const l=arguments[a];if(I(l)){const v=t.length||0,w=l.length||0;t.length=v+w;for(let E=0;E<w;E++)t[v+E]=l[E]}else t.push(l)}}class Q{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function V(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=y.navigator;return t&&(t=t.userAgent)?t:""}function q(t){return q[" "](t),t}q[" "]=function(){};var le=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function B(t,s,a){for(const l in t)s.call(a,t[l],l,t)}function p(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function u(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(t,s){let a,l;for(let v=1;v<arguments.length;v++){l=arguments[v];for(a in l)t[a]=l[a];for(let w=0;w<f.length;w++)a=f[w],Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function _(t){y.setTimeout(()=>{throw t},0)}function d(){var t=Tn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class he{constructor(){this.h=this.g=null}add(s,a){const l=rt.get();l.set(s,a),this.h?this.h.next=l:this.g=l,this.h=l}}var rt=new Q(()=>new Ro,t=>t.reset());class Ro{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let st,ot=!1,Tn=new he,Pi=()=>{const t=y.Promise.resolve(void 0);st=()=>{t.then(Po)}};var Po=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){_(a)}var s=rt;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}ot=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function z(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};var Do=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};y.addEventListener("test",a,s),y.removeEventListener("test",a,s)}catch{}return t}();function at(t,s){if(z.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(le){e:{try{q(s.nodeName);var v=!0;break e}catch{}v=!1}v||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Oo[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&at.aa.h.call(this)}}k(at,z);var Oo={2:"touch",3:"pen",4:"mouse"};at.prototype.h=function(){at.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),No=0;function Lo(t,s,a,l,v){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.ha=v,this.key=++No,this.da=this.fa=!1}function Ut(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Bt(t){this.src=t,this.g={},this.h=0}Bt.prototype.add=function(t,s,a,l,v){var w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);var E=An(t,s,l,v);return-1<E?(s=t[E],a||(s.fa=!1)):(s=new Lo(s,this.src,w,!!l,v),s.fa=a,t.push(s)),s};function En(t,s){var a=s.type;if(a in t.g){var l=t.g[a],v=Array.prototype.indexOf.call(l,s,void 0),w;(w=0<=v)&&Array.prototype.splice.call(l,v,1),w&&(Ut(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function An(t,s,a,l){for(var v=0;v<t.length;++v){var w=t[v];if(!w.da&&w.listener==s&&w.capture==!!a&&w.ha==l)return v}return-1}var bn="closure_lm_"+(1e6*Math.random()|0),Sn={};function Di(t,s,a,l,v){if(Array.isArray(s)){for(var w=0;w<s.length;w++)Di(t,s[w],a,l,v);return null}return a=Li(a),t&&t[Mt]?t.K(s,a,T(l)?!!l.capture:!1,v):xo(t,s,a,!1,l,v)}function xo(t,s,a,l,v,w){if(!s)throw Error("Invalid event type");var E=T(v)?!!v.capture:!!v,x=kn(t);if(x||(t[bn]=x=new Bt(t)),a=x.add(s,a,l,E,w),a.proxy)return a;if(l=Mo(),a.proxy=l,l.src=t,l.listener=a,t.addEventListener)Do||(v=E),v===void 0&&(v=!1),t.addEventListener(s.toString(),l,v);else if(t.attachEvent)t.attachEvent(Ni(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Mo(){function t(a){return s.call(t.src,t.listener,a)}const s=Uo;return t}function Oi(t,s,a,l,v){if(Array.isArray(s))for(var w=0;w<s.length;w++)Oi(t,s[w],a,l,v);else l=T(l)?!!l.capture:!!l,a=Li(a),t&&t[Mt]?(t=t.i,s=String(s).toString(),s in t.g&&(w=t.g[s],a=An(w,a,l,v),-1<a&&(Ut(w[a]),Array.prototype.splice.call(w,a,1),w.length==0&&(delete t.g[s],t.h--)))):t&&(t=kn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=An(s,a,l,v)),(a=-1<t?s[t]:null)&&Cn(a))}function Cn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Mt])En(s.i,t);else{var a=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(a,l,t.capture):s.detachEvent?s.detachEvent(Ni(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=kn(s))?(En(a,t),a.h==0&&(a.src=null,s[bn]=null)):Ut(t)}}}function Ni(t){return t in Sn?Sn[t]:Sn[t]="on"+t}function Uo(t,s){if(t.da)t=!0;else{s=new at(s,this);var a=t.listener,l=t.ha||t.src;t.fa&&Cn(t),t=a.call(l,s)}return t}function kn(t){return t=t[bn],t instanceof Bt?t:null}var Rn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Li(t){return typeof t=="function"?t:(t[Rn]||(t[Rn]=function(s){return t.handleEvent(s)}),t[Rn])}function G(){Ie.call(this),this.i=new Bt(this),this.M=this,this.F=null}k(G,Ie),G.prototype[Mt]=!0,G.prototype.removeEventListener=function(t,s,a,l){Oi(this,t,s,a,l)};function X(t,s){var a,l=t.F;if(l)for(a=[];l;l=l.F)a.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new z(s,t);else if(s instanceof z)s.target=s.target||t;else{var v=s;s=new z(l,t),g(s,v)}if(v=!0,a)for(var w=a.length-1;0<=w;w--){var E=s.g=a[w];v=jt(E,l,!0,s)&&v}if(E=s.g=t,v=jt(E,l,!0,s)&&v,v=jt(E,l,!1,s)&&v,a)for(w=0;w<a.length;w++)E=s.g=a[w],v=jt(E,l,!1,s)&&v}G.prototype.N=function(){if(G.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],l=0;l<a.length;l++)Ut(a[l]);delete t.g[s],t.h--}}this.F=null},G.prototype.K=function(t,s,a,l){return this.i.add(String(t),s,!1,a,l)},G.prototype.L=function(t,s,a,l){return this.i.add(String(t),s,!0,a,l)};function jt(t,s,a,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var v=!0,w=0;w<s.length;++w){var E=s[w];if(E&&!E.da&&E.capture==a){var x=E.listener,$=E.ha||E.src;E.fa&&En(t.i,E),v=x.call($,l)!==!1&&v}}return v&&!l.defaultPrevented}function xi(t,s,a){if(typeof t=="function")a&&(t=A(t,a));else if(t&&typeof t.handleEvent=="function")t=A(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:y.setTimeout(t,s||0)}function Mi(t){t.g=xi(()=>{t.g=null,t.i&&(t.i=!1,Mi(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class Bo extends Ie{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Mi(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(t){Ie.call(this),this.h=t,this.g={}}k(ct,Ie);var Ui=[];function Bi(t){B(t.g,function(s,a){this.g.hasOwnProperty(a)&&Cn(s)},t),t.g={}}ct.prototype.N=function(){ct.aa.N.call(this),Bi(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=y.JSON.stringify,jo=y.JSON.parse,Fo=class{stringify(t){return y.JSON.stringify(t,void 0)}parse(t){return y.JSON.parse(t,void 0)}};function Dn(){}Dn.prototype.h=null;function ji(t){return t.h||(t.h=t.i())}function Ho(){}var lt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function On(){z.call(this,"d")}k(On,z);function Nn(){z.call(this,"c")}k(Nn,z);var He={},Fi=null;function Ln(){return Fi=Fi||new G}He.La="serverreachability";function Hi(t){z.call(this,He.La,t)}k(Hi,z);function ht(t){const s=Ln();X(s,new Hi(s))}He.STAT_EVENT="statevent";function Vi(t,s){z.call(this,He.STAT_EVENT,t),this.stat=s}k(Vi,z);function J(t){const s=Ln();X(s,new Vi(s,t))}He.Ma="timingevent";function $i(t,s){z.call(this,He.Ma,t),this.size=s}k($i,z);function ut(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){t()},s)}function dt(){this.g=!0}dt.prototype.xa=function(){this.g=!1};function Vo(t,s,a,l,v,w){t.info(function(){if(t.g)if(w)for(var E="",x=w.split("&"),$=0;$<x.length;$++){var P=x[$].split("=");if(1<P.length){var W=P[0];P=P[1];var K=W.split("_");E=2<=K.length&&K[1]=="type"?E+(W+"="+P+"&"):E+(W+"=redacted&")}}else E=null;else E=w;return"XMLHTTP REQ ("+l+") [attempt "+v+"]: "+s+`
`+a+`
`+E})}function $o(t,s,a,l,v,w,E){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+v+"]: "+s+`
`+a+`
`+w+" "+E})}function Ve(t,s,a,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+Go(t,a)+(l?" "+l:"")})}function zo(t,s){t.info(function(){return"TIMEOUT: "+s})}dt.prototype.info=function(){};function Go(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var l=a[t];if(!(2>l.length)){var v=l[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var E=1;E<v.length;E++)v[E]=""}}}}return Pn(a)}catch{return s}}var xn={NO_ERROR:0,TIMEOUT:8},Wo={},Mn;function Ft(){}k(Ft,Dn),Ft.prototype.g=function(){return new XMLHttpRequest},Ft.prototype.i=function(){return{}},Mn=new Ft;function we(t,s,a,l){this.j=t,this.i=s,this.l=a,this.R=l||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zi}function zi(){this.i=null,this.g="",this.h=!1}var Gi={},Un={};function Bn(t,s,a){t.L=1,t.v=zt(ue(s)),t.m=a,t.P=!0,Wi(t,null)}function Wi(t,s){t.F=Date.now(),Ht(t),t.A=ue(t.v);var a=t.A,l=t.R;Array.isArray(l)||(l=[String(l)]),or(a.i,"t",l),t.C=0,a=t.j.J,t.h=new zi,t.g=Ar(t.j,a?s:null,!t.m),0<t.O&&(t.M=new Bo(A(t.Y,t,t.g),t.O)),s=t.U,a=t.g,l=t.ca;var v="readystatechange";Array.isArray(v)||(v&&(Ui[0]=v.toString()),v=Ui);for(var w=0;w<v.length;w++){var E=Di(a,v[w],l||s.handleEvent,!1,s.h||s);if(!E)break;s.g[E.key]=E}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),ht(),Vo(t.i,t.u,t.A,t.l,t.R,t.m)}we.prototype.ca=function(t){t=t.target;const s=this.M;s&&de(t)==3?s.j():this.Y(t)},we.prototype.Y=function(t){try{if(t==this.g)e:{const K=de(this.g);var s=this.g.Ba();const Ge=this.g.Z();if(!(3>K)&&(K!=3||this.g&&(this.h.h||this.g.oa()||fr(this.g)))){this.J||K!=4||s==7||(s==8||0>=Ge?ht(3):ht(2)),jn(this);var a=this.g.Z();this.X=a;t:if(Ki(this)){var l=fr(this.g);t="";var v=l.length,w=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ne(this),ft(this);var E="";break t}this.h.i=new y.TextDecoder}for(s=0;s<v;s++)this.h.h=!0,t+=this.h.i.decode(l[s],{stream:!(w&&s==v-1)});l.length=0,this.h.g+=t,this.C=0,E=this.h.g}else E=this.g.oa();if(this.o=a==200,$o(this.i,this.u,this.A,this.l,this.R,K,a),this.o){if(this.T&&!this.K){t:{if(this.g){var x,$=this.g;if((x=$.g?$.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(x)){var P=x;break t}}P=null}if(a=P)Ve(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fn(this,a);else{this.o=!1,this.s=3,J(12),Ne(this),ft(this);break e}}if(this.P){a=!0;let ie;for(;!this.J&&this.C<E.length;)if(ie=Ko(this,E),ie==Un){K==4&&(this.s=4,J(14),a=!1),Ve(this.i,this.l,null,"[Incomplete Response]");break}else if(ie==Gi){this.s=4,J(15),Ve(this.i,this.l,E,"[Invalid Chunk]"),a=!1;break}else Ve(this.i,this.l,ie,null),Fn(this,ie);if(Ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||E.length!=0||this.h.h||(this.s=1,J(16),a=!1),this.o=this.o&&a,!a)Ve(this.i,this.l,E,"[Invalid Chunked Response]"),Ne(this),ft(this);else if(0<E.length&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.ba&&!W.M&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),Wn(W),W.M=!0,J(11))}}else Ve(this.i,this.l,E,null),Fn(this,E);K==4&&Ne(this),this.o&&!this.J&&(K==4?Ir(this.j,this):(this.o=!1,Ht(this)))}else ha(this.g),a==400&&0<E.indexOf("Unknown SID")?(this.s=3,J(12)):(this.s=0,J(13)),Ne(this),ft(this)}}}catch{}finally{}};function Ki(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Ko(t,s){var a=t.C,l=s.indexOf(`
`,a);return l==-1?Un:(a=Number(s.substring(a,l)),isNaN(a)?Gi:(l+=1,l+a>s.length?Un:(s=s.slice(l,l+a),t.C=l+a,s)))}we.prototype.cancel=function(){this.J=!0,Ne(this)};function Ht(t){t.S=Date.now()+t.I,qi(t,t.I)}function qi(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ut(A(t.ba,t),s)}function jn(t){t.B&&(y.clearTimeout(t.B),t.B=null)}we.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(zo(this.i,this.A),this.L!=2&&(ht(),J(17)),Ne(this),this.s=2,ft(this)):qi(this,this.S-t)};function ft(t){t.j.G==0||t.J||Ir(t.j,t)}function Ne(t){jn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,Bi(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Fn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Hn(a.h,t))){if(!t.K&&Hn(a.h,t)&&a.G==3){try{var l=a.Da.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var v=l;if(v[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Jt(a),qt(a);else break e;Gn(a),J(18)}}else a.za=v[1],0<a.za-a.T&&37500>v[2]&&a.F&&a.v==0&&!a.C&&(a.C=ut(A(a.Za,a),6e3));if(1>=Yi(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else xe(a,11)}else if((t.K||a.g==t)&&Jt(a),!V(s))for(v=a.Da.g.parse(s),s=0;s<v.length;s++){let P=v[s];if(a.T=P[0],P=P[1],a.G==2)if(P[0]=="c"){a.K=P[1],a.ia=P[2];const W=P[3];W!=null&&(a.la=W,a.j.info("VER="+a.la));const K=P[4];K!=null&&(a.Aa=K,a.j.info("SVER="+a.Aa));const Ge=P[5];Ge!=null&&typeof Ge=="number"&&0<Ge&&(l=1.5*Ge,a.L=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const ie=t.g;if(ie){const Yt=ie.g?ie.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yt){var w=l.h;w.g||Yt.indexOf("spdy")==-1&&Yt.indexOf("quic")==-1&&Yt.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Vn(w,w.h),w.h=null))}if(l.D){const Kn=ie.g?ie.g.getResponseHeader("X-HTTP-Session-Id"):null;Kn&&(l.ya=Kn,M(l.I,l.D,Kn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),l=a;var E=t;if(l.qa=Er(l,l.J?l.ia:null,l.W),E.K){Zi(l.h,E);var x=E,$=l.L;$&&(x.I=$),x.B&&(jn(x),Ht(x)),l.g=E}else yr(l);0<a.i.length&&Xt(a)}else P[0]!="stop"&&P[0]!="close"||xe(a,7);else a.G==3&&(P[0]=="stop"||P[0]=="close"?P[0]=="stop"?xe(a,7):zn(a):P[0]!="noop"&&a.l&&a.l.ta(P),a.v=0)}}ht(4)}catch{}}var qo=class{constructor(t,s){this.g=t,this.map=s}};function Xi(t){this.l=t||10,y.PerformanceNavigationTiming?(t=y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(y.chrome&&y.chrome.loadTimes&&y.chrome.loadTimes()&&y.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ji(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Yi(t){return t.h?1:t.g?t.g.size:0}function Hn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Vn(t,s){t.g?t.g.add(s):t.h=s}function Zi(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Xi.prototype.cancel=function(){if(this.i=Qi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qi(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return U(t.i)}function Xo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(I(t)){for(var s=[],a=t.length,l=0;l<a;l++)s.push(t[l]);return s}s=[],a=0;for(l in t)s[a++]=t[l];return s}function Jo(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(I(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const l in t)s[a++]=l;return s}}}function er(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(I(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=Jo(t),l=Xo(t),v=l.length,w=0;w<v;w++)s.call(void 0,l[w],a&&a[w],t)}var tr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yo(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var l=t[a].indexOf("="),v=null;if(0<=l){var w=t[a].substring(0,l);v=t[a].substring(l+1)}else w=t[a];s(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Le(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Le){this.h=t.h,Vt(this,t.j),this.o=t.o,this.g=t.g,$t(this,t.s),this.l=t.l;var s=t.i,a=new mt;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),nr(this,a),this.m=t.m}else t&&(s=String(t).match(tr))?(this.h=!1,Vt(this,s[1]||"",!0),this.o=pt(s[2]||""),this.g=pt(s[3]||"",!0),$t(this,s[4]),this.l=pt(s[5]||"",!0),nr(this,s[6]||"",!0),this.m=pt(s[7]||"")):(this.h=!1,this.i=new mt(null,this.h))}Le.prototype.toString=function(){var t=[],s=this.j;s&&t.push(gt(s,ir,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(gt(s,ir,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(gt(a,a.charAt(0)=="/"?ea:Qo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",gt(a,na)),t.join("")};function ue(t){return new Le(t)}function Vt(t,s,a){t.j=a?pt(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function $t(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function nr(t,s,a){s instanceof mt?(t.i=s,ia(t.i,t.h)):(a||(s=gt(s,ta)),t.i=new mt(s,t.h))}function M(t,s,a){t.i.set(s,a)}function zt(t){return M(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pt(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,Zo),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ir=/[#\/\?@]/g,Qo=/[#\?:]/g,ea=/[#\?]/g,ta=/[#\?@]/g,na=/#/g;function mt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Te(t){t.g||(t.g=new Map,t.h=0,t.i&&Yo(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=mt.prototype,i.add=function(t,s){Te(this),this.i=null,t=$e(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function rr(t,s){Te(t),s=$e(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function sr(t,s){return Te(t),s=$e(t,s),t.g.has(s)}i.forEach=function(t,s){Te(this),this.g.forEach(function(a,l){a.forEach(function(v){t.call(s,v,l,this)},this)},this)},i.na=function(){Te(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let l=0;l<s.length;l++){const v=t[l];for(let w=0;w<v.length;w++)a.push(s[l])}return a},i.V=function(t){Te(this);let s=[];if(typeof t=="string")sr(this,t)&&(s=s.concat(this.g.get($e(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},i.set=function(t,s){return Te(this),this.i=null,t=$e(this,t),sr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function or(t,s,a){rr(t,s),0<a.length&&(t.i=null,t.g.set($e(t,s),U(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var l=s[a];const w=encodeURIComponent(String(l)),E=this.V(l);for(l=0;l<E.length;l++){var v=w;E[l]!==""&&(v+="="+encodeURIComponent(String(E[l]))),t.push(v)}}return this.i=t.join("&")};function $e(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function ia(t,s){s&&!t.j&&(Te(t),t.i=null,t.g.forEach(function(a,l){var v=l.toLowerCase();l!=v&&(rr(this,l),or(this,v,a))},t)),t.j=s}function ra(t,s){const a=new dt;if(y.Image){const l=new Image;l.onload=L(Ee,a,"TestLoadImage: loaded",!0,s,l),l.onerror=L(Ee,a,"TestLoadImage: error",!1,s,l),l.onabort=L(Ee,a,"TestLoadImage: abort",!1,s,l),l.ontimeout=L(Ee,a,"TestLoadImage: timeout",!1,s,l),y.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function sa(t,s){const a=new dt,l=new AbortController,v=setTimeout(()=>{l.abort(),Ee(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(w=>{clearTimeout(v),w.ok?Ee(a,"TestPingServer: ok",!0,s):Ee(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(v),Ee(a,"TestPingServer: error",!1,s)})}function Ee(t,s,a,l,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),l(a)}catch{}}function oa(){this.g=new Fo}function aa(t,s,a){const l=a||"";try{er(t,function(v,w){let E=v;T(v)&&(E=Pn(v)),s.push(l+w+"="+encodeURIComponent(E))})}catch(v){throw s.push(l+"type="+encodeURIComponent("_badmap")),v}}function Gt(t){this.l=t.Ub||null,this.j=t.eb||!1}k(Gt,Dn),Gt.prototype.g=function(){return new Wt(this.l,this.j)},Gt.prototype.i=function(t){return function(){return t}}({});function Wt(t,s){G.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Wt,G),i=Wt.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,yt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||y).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vt(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yt(this)),this.g&&(this.readyState=3,yt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ar(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function ar(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?vt(this):yt(this),this.readyState==3&&ar(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,vt(this))},i.Qa=function(t){this.g&&(this.response=t,vt(this))},i.ga=function(){this.g&&vt(this)};function vt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,yt(t)}i.setRequestHeader=function(t,s){this.u.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function yt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function cr(t){let s="";return B(t,function(a,l){s+=l,s+=":",s+=a,s+=`\r
`}),s}function $n(t,s,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=cr(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):M(t,s,a))}function F(t){G.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(F,G);var ca=/^https?$/i,la=["POST","PUT"];i=F.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,s,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mn.g(),this.v=this.o?ji(this.o):ji(Mn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(w){lr(this,w);return}if(t=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var v in l)a.set(v,l[v]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const w of l.keys())a.set(w,l.get(w));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(w=>w.toLowerCase()=="content-type"),v=y.FormData&&t instanceof y.FormData,!(0<=Array.prototype.indexOf.call(la,s,void 0))||l||v||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,E]of a)this.g.setRequestHeader(w,E);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dr(this),this.u=!0,this.g.send(t),this.u=!1}catch(w){lr(this,w)}};function lr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,hr(t),Kt(t)}function hr(t){t.A||(t.A=!0,X(t,"complete"),X(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,X(this,"complete"),X(this,"abort"),Kt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kt(this,!0)),F.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ur(this):this.bb())},i.bb=function(){ur(this)};function ur(t){if(t.h&&typeof h<"u"&&(!t.v[1]||de(t)!=4||t.Z()!=2)){if(t.u&&de(t)==4)xi(t.Ea,0,t);else if(X(t,"readystatechange"),de(t)==4){t.h=!1;try{const E=t.Z();e:switch(E){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var l;if(l=E===0){var v=String(t.D).match(tr)[1]||null;!v&&y.self&&y.self.location&&(v=y.self.location.protocol.slice(0,-1)),l=!ca.test(v?v.toLowerCase():"")}a=l}if(a)X(t,"complete"),X(t,"success");else{t.m=6;try{var w=2<de(t)?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.Z()+"]",hr(t)}}finally{Kt(t)}}}}function Kt(t,s){if(t.g){dr(t);const a=t.g,l=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||X(t,"ready");try{a.onreadystatechange=l}catch{}}}function dr(t){t.I&&(y.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function de(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<de(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),jo(s)}};function fr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ha(t){const s={};t=(t.g&&2<=de(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(V(t[l]))continue;var a=m(t[l]);const v=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const w=s[v]||[];s[v]=w,w.push(a)}p(s,function(l){return l.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _t(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function pr(t){this.Aa=0,this.i=[],this.j=new dt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_t("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_t("baseRetryDelayMs",5e3,t),this.cb=_t("retryDelaySeedMs",1e4,t),this.Wa=_t("forwardChannelMaxRetries",2,t),this.wa=_t("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Xi(t&&t.concurrentRequestLimit),this.Da=new oa,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=pr.prototype,i.la=8,i.G=1,i.connect=function(t,s,a,l){J(0),this.W=t,this.H=s||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.I=Er(this,null,this.W),Xt(this)};function zn(t){if(gr(t),t.G==3){var s=t.U++,a=ue(t.I);if(M(a,"SID",t.K),M(a,"RID",s),M(a,"TYPE","terminate"),It(t,a),s=new we(t,t.j,s),s.L=2,s.v=zt(ue(a)),a=!1,y.navigator&&y.navigator.sendBeacon)try{a=y.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&y.Image&&(new Image().src=s.v,a=!0),a||(s.g=Ar(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Ht(s)}Tr(t)}function qt(t){t.g&&(Wn(t),t.g.cancel(),t.g=null)}function gr(t){qt(t),t.u&&(y.clearTimeout(t.u),t.u=null),Jt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&y.clearTimeout(t.s),t.s=null)}function Xt(t){if(!Ji(t.h)&&!t.s){t.s=!0;var s=t.Ga;st||Pi(),ot||(st(),ot=!0),Tn.add(s,t),t.B=0}}function ua(t,s){return Yi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=ut(A(t.Ga,t,s),wr(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const v=new we(this,this.j,t);let w=this.o;if(this.S&&(w?(w=u(w),g(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=vr(this,v,s),a=ue(this.I),M(a,"RID",t),M(a,"CVER",22),this.D&&M(a,"X-HTTP-Session-Id",this.D),It(this,a),w&&(this.O?s="headers="+encodeURIComponent(String(cr(w)))+"&"+s:this.m&&$n(a,this.m,w)),Vn(this.h,v),this.Ua&&M(a,"TYPE","init"),this.P?(M(a,"$req",s),M(a,"SID","null"),v.T=!0,Bn(v,a,null)):Bn(v,a,s),this.G=2}}else this.G==3&&(t?mr(this,t):this.i.length==0||Ji(this.h)||mr(this))};function mr(t,s){var a;s?a=s.l:a=t.U++;const l=ue(t.I);M(l,"SID",t.K),M(l,"RID",a),M(l,"AID",t.T),It(t,l),t.m&&t.o&&$n(l,t.m,t.o),a=new we(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=vr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Vn(t.h,a),Bn(a,l,s)}function It(t,s){t.H&&B(t.H,function(a,l){M(s,l,a)}),t.l&&er({},function(a,l){M(s,l,a)})}function vr(t,s,a){a=Math.min(t.i.length,a);var l=t.l?A(t.l.Na,t.l,t):null;e:{var v=t.i;let w=-1;for(;;){const E=["count="+a];w==-1?0<a?(w=v[0].g,E.push("ofs="+w)):w=0:E.push("ofs="+w);let x=!0;for(let $=0;$<a;$++){let P=v[$].g;const W=v[$].map;if(P-=w,0>P)w=Math.max(0,v[$].g-100),x=!1;else try{aa(W,E,"req"+P+"_")}catch{l&&l(W)}}if(x){l=E.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,l}function yr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;st||Pi(),ot||(st(),ot=!0),Tn.add(s,t),t.v=0}}function Gn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=ut(A(t.Fa,t),wr(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,_r(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=ut(A(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,J(10),qt(this),_r(this))};function Wn(t){t.A!=null&&(y.clearTimeout(t.A),t.A=null)}function _r(t){t.g=new we(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=ue(t.qa);M(s,"RID","rpc"),M(s,"SID",t.K),M(s,"AID",t.T),M(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&M(s,"TO",t.ja),M(s,"TYPE","xmlhttp"),It(t,s),t.m&&t.o&&$n(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=zt(ue(s)),a.m=null,a.P=!0,Wi(a,t)}i.Za=function(){this.C!=null&&(this.C=null,qt(this),Gn(this),J(19))};function Jt(t){t.C!=null&&(y.clearTimeout(t.C),t.C=null)}function Ir(t,s){var a=null;if(t.g==s){Jt(t),Wn(t),t.g=null;var l=2}else if(Hn(t.h,s))a=s.D,Zi(t.h,s),l=1;else return;if(t.G!=0){if(s.o)if(l==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var v=t.B;l=Ln(),X(l,new $i(l,a)),Xt(t)}else yr(t);else if(v=s.s,v==3||v==0&&0<s.X||!(l==1&&ua(t,s)||l==2&&Gn(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),v){case 1:xe(t,5);break;case 4:xe(t,10);break;case 3:xe(t,6);break;default:xe(t,2)}}}function wr(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function xe(t,s){if(t.j.info("Error code "+s),s==2){var a=A(t.fb,t),l=t.Xa;const v=!l;l=new Le(l||"//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||Vt(l,"https"),zt(l),v?ra(l.toString(),a):sa(l.toString(),a)}else J(2);t.G=0,t.l&&t.l.sa(s),Tr(t),gr(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),J(2)):(this.j.info("Failed to ping google.com"),J(1))};function Tr(t){if(t.G=0,t.ka=[],t.l){const s=Qi(t.h);(s.length!=0||t.i.length!=0)&&(N(t.ka,s),N(t.ka,t.i),t.h.i.length=0,U(t.i),t.i.length=0),t.l.ra()}}function Er(t,s,a){var l=a instanceof Le?ue(a):new Le(a);if(l.g!="")s&&(l.g=s+"."+l.g),$t(l,l.s);else{var v=y.location;l=v.protocol,s=s?s+"."+v.hostname:v.hostname,v=+v.port;var w=new Le(null);l&&Vt(w,l),s&&(w.g=s),v&&$t(w,v),a&&(w.l=a),l=w}return a=t.D,s=t.ya,a&&s&&M(l,a,s),M(l,"VER",t.la),It(t,l),l}function Ar(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new F(new Gt({eb:a})):new F(t.pa),s.Ha(t.J),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function br(){}i=br.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ne(t,s){G.call(this),this.g=new pr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!V(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!V(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new ze(this)}k(ne,G),ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ne.prototype.close=function(){zn(this.g)},ne.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=Pn(t),t=a);s.i.push(new qo(s.Ya++,t)),s.G==3&&Xt(s)},ne.prototype.N=function(){this.g.l=null,delete this.j,zn(this.g),delete this.g,ne.aa.N.call(this)};function Sr(t){On.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}k(Sr,On);function Cr(){Nn.call(this),this.status=1}k(Cr,Nn);function ze(t){this.g=t}k(ze,br),ze.prototype.ua=function(){X(this.g,"a")},ze.prototype.ta=function(t){X(this.g,new Sr(t))},ze.prototype.sa=function(t){X(this.g,new Cr)},ze.prototype.ra=function(){X(this.g,"b")},ne.prototype.send=ne.prototype.o,ne.prototype.open=ne.prototype.m,ne.prototype.close=ne.prototype.close,xn.NO_ERROR=0,xn.TIMEOUT=8,xn.HTTP_ERROR=6,Wo.COMPLETE="complete",Ho.EventType=lt,lt.OPEN="a",lt.CLOSE="b",lt.ERROR="c",lt.MESSAGE="d",G.prototype.listen=G.prototype.K,F.prototype.listenOnce=F.prototype.L,F.prototype.getLastError=F.prototype.Ka,F.prototype.getLastErrorCode=F.prototype.Ba,F.prototype.getStatus=F.prototype.Z,F.prototype.getResponseJson=F.prototype.Oa,F.prototype.getResponseText=F.prototype.oa,F.prototype.send=F.prototype.ea,F.prototype.setWithCredentials=F.prototype.Ha}).apply(typeof Qt<"u"?Qt:typeof self<"u"?self:typeof window<"u"?window:{});const Vr="@firebase/firestore",$r="4.7.17";/**
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
 */class Y{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
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
 */let Ot="11.9.0";/**
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
 */const Qe=new gi("@firebase/firestore");function re(i,...e){if(Qe.logLevel<=O.DEBUG){const n=e.map(yi);Qe.debug(`Firestore (${Ot}): ${i}`,...n)}}function zs(i,...e){if(Qe.logLevel<=O.ERROR){const n=e.map(yi);Qe.error(`Firestore (${Ot}): ${i}`,...n)}}function hl(i,...e){if(Qe.logLevel<=O.WARN){const n=e.map(yi);Qe.warn(`Firestore (${Ot}): ${i}`,...n)}}function yi(i){if(typeof i=="string")return i;try{/**
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
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function Gs(i,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ws(i,r,n)}function Ws(i,e,n){let r=`FIRESTORE (${Ot}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw zs(r),new Error(r)}function Et(i,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,i||Ws(e,o,r)}/**
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
 */const ee={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class te extends _e{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class At{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ks{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ul{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class dl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fl{constructor(e){this.t=e,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Et(this.o===void 0,42304);let r=this.i;const o=I=>this.i!==r?(r=this.i,n(I)):Promise.resolve();let c=new At;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new At,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const I=c;e.enqueueRetryable(async()=>{await I.promise,await o(this.currentUser)})},y=I=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(I=>y(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?y(I):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new At)}},0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Et(typeof r.accessToken=="string",31837,{l:r}),new Ks(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Et(e===null||typeof e=="string",2055,{h:e}),new Y(e)}}class pl{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gl{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new pl(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ml{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Et(this.o===void 0,3512);const r=c=>{c.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new zr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Et(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new zr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function vl(i){return i.name==="IndexedDbTransactionError"}const li="(default)";class dn{constructor(e,n){this.projectId=e,this.database=n||li}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database===li}isEqual(e){return e instanceof dn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Gr,R;(R=Gr||(Gr={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new $s([4294967295,4294967295],0);/**
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
 */const yl=41943040;/**
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
 */const _l=1048576;function ti(){return typeof document<"u"?document:null}/**
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
 */class Il{constructor(e,n,r=1e3,o=1.5,c=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=o,this.V_=c,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),o=Math.max(0,n-r);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */class _i{constructor(e,n,r,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,c){const h=Date.now()+r,y=new _i(e,n,h,o,c);return y.start(r),y}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Wr,Kr;(Kr=Wr||(Wr={})).xa="default",Kr.Cache="cache";/**
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
 */function wl(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const qr=new Map;function Tl(i,e,n,r){if(e===!0&&r===!0)throw new te(ee.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function El(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Gs(12329,{type:typeof i})}function Al(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new te(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=El(i);throw new te(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
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
 */const qs="firestore.googleapis.com",Xr=!0;class Jr{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qs,this.ssl=Xr}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Xr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_l)throw new te(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wl((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new te(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new te(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new te(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xs{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ul;switch(r.type){case"firstParty":return new gl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qr.get(n);r&&(re("ComponentProvider","Removing Datastore"),qr.delete(n),r.terminate())}(this),Promise.resolve()}}function bl(i,e,n,r={}){var o;i=Al(i,Xs);const c=Rt(e),h=i._getSettings(),y=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),I=`${e}:${n}`;c&&(xs(`https://${I}`),Ms("Firestore",!0)),h.host!==qs&&h.host!==I&&hl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const T=Object.assign(Object.assign({},h),{host:I,ssl:c,emulatorOptions:r});if(!Be(T,y)&&(i._setSettings(T),r.mockUserToken)){let b,C;if(typeof r.mockUserToken=="string")b=r.mockUserToken,C=Y.MOCK_USER;else{b=ja(r.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new te(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new Y(A)}i._authCredentials=new dl(new Ks(b,C))}}/**
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
 */const Yr="AsyncQueue";class Zr{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Il(this,"async_queue_retry"),this.rc=()=>{const r=ti();r&&re(Yr,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=ti();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=ti();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new At;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!vl(e))throw e;re(Yr,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,zs("INTERNAL UNHANDLED ERROR: ",Qr(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const o=_i.createAndSchedule(this,e,n,r,c=>this.uc(c));return this.Zu.push(o),o}oc(){this.Xu&&Gs(47125,{cc:Qr(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function Qr(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Sl extends Xs{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new Zr,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zr(e),this._firestoreClient=void 0,await e}}}function Cl(i,e){const n=typeof i=="object"?i:Fs(),r=typeof i=="string"?i:li,o=vi(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Ua("firestore");c&&bl(o,...c)}return o}(function(e,n=!0){(function(o){Ot=o})(nt),Ze(new je("firestore",(r,{instanceIdentifier:o,options:c})=>{const h=r.getProvider("app").getImmediate(),y=new Sl(new fl(r.getProvider("auth-internal")),new ml(h,r.getProvider("app-check-internal")),function(T,b){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new te(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(T.options.projectId,b)}(h,o),h);return c=Object.assign({useFetchStreams:n},c),y._setSettings(c),y},"PUBLIC").setMultipleInstances(!0)),Oe(Vr,$r,e),Oe(Vr,$r,"esm2017")})();var kl="firebase",Rl="11.9.1";/**
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
 */Oe(kl,Rl,"app");function Ii(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(i);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(i,r[o])&&(n[r[o]]=i[r[o]]);return n}function Js(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pl=Js,Ys=new Pt("auth","Firebase",Js());/**
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
 */const fn=new gi("@firebase/auth");function Dl(i,...e){fn.logLevel<=O.WARN&&fn.warn(`Auth (${nt}): ${i}`,...e)}function on(i,...e){fn.logLevel<=O.ERROR&&fn.error(`Auth (${nt}): ${i}`,...e)}/**
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
 */function ve(i,...e){throw wi(i,...e)}function ae(i,...e){return wi(i,...e)}function Zs(i,e,n){const r=Object.assign(Object.assign({},Pl()),{[e]:n});return new Pt("auth","Firebase",r).create(e,{appName:i.name})}function Ue(i){return Zs(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wi(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return Ys.create(i,...e)}function S(i,e,...n){if(!i)throw wi(e,...n)}function pe(i){const e="INTERNAL ASSERTION FAILED: "+i;throw on(e),new Error(e)}function ye(i,e){i||pe(e)}/**
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
 */function hi(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Ol(){return es()==="http:"||es()==="https:"}function es(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Nl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ol()||za()||"connection"in navigator)?navigator.onLine:!0}function Ll(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Nt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ye(n>e,"Short delay should be less than long delay!"),this.isMobile=Va()||Ga()}get(){return Nl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ti(i,e){ye(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qs{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ml=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ul=new Nt(3e4,6e4);function Ei(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function it(i,e,n,r,o={}){return eo(i,o,async()=>{let c={},h={};r&&(e==="GET"?h=r:c={body:JSON.stringify(r)});const y=Dt(Object.assign({key:i.config.apiKey},h)).slice(1),I=await i._getAdditionalHeaders();I["Content-Type"]="application/json",i.languageCode&&(I["X-Firebase-Locale"]=i.languageCode);const T=Object.assign({method:e,headers:I},c);return $a()||(T.referrerPolicy="no-referrer"),i.emulatorConfig&&Rt(i.emulatorConfig.host)&&(T.credentials="include"),Qs.fetch()(await to(i,i.config.apiHost,n,y),T)})}async function eo(i,e,n){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},xl),e);try{const o=new jl(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw en(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const y=c.ok?h.errorMessage:h.error.message,[I,T]=y.split(" : ");if(I==="FEDERATED_USER_ID_ALREADY_LINKED")throw en(i,"credential-already-in-use",h);if(I==="EMAIL_EXISTS")throw en(i,"email-already-in-use",h);if(I==="USER_DISABLED")throw en(i,"user-disabled",h);const b=r[I]||I.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw Zs(i,b,T);ve(i,b)}}catch(o){if(o instanceof _e)throw o;ve(i,"network-request-failed",{message:String(o)})}}async function Bl(i,e,n,r,o={}){const c=await it(i,e,n,r,o);return"mfaPendingCredential"in c&&ve(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function to(i,e,n,r){const o=`${e}${n}?${r}`,c=i,h=c.config.emulator?Ti(i.config,o):`${i.config.apiScheme}://${o}`;return Ml.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class jl{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ae(this.auth,"network-request-failed")),Ul.get())})}}function en(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=ae(i,e,r);return o.customData._tokenResponse=n,o}/**
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
 */async function Fl(i,e){return it(i,"POST","/v1/accounts:delete",e)}async function pn(i,e){return it(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function bt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hl(i,e=!1){const n=tt(i),r=await n.getIdToken(e),o=Ai(r);S(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:bt(ni(o.auth_time)),issuedAtTime:bt(ni(o.iat)),expirationTime:bt(ni(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function ni(i){return Number(i)*1e3}function Ai(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return on("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ds(n);return o?JSON.parse(o):(on("Failed to decode base64 JWT payload"),null)}catch(o){return on("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ts(i){const e=Ai(i);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ct(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _e&&Vl(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function Vl({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class $l{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ui{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bt(this.lastLoginAt),this.creationTime=bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gn(i){var e;const n=i.auth,r=await i.getIdToken(),o=await Ct(i,pn(n,{idToken:r}));S(o==null?void 0:o.users.length,n,"internal-error");const c=o.users[0];i._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?no(c.providerUserInfo):[],y=Gl(i.providerData,h),I=i.isAnonymous,T=!(i.email&&c.passwordHash)&&!(y!=null&&y.length),b=I?T:!1,C={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:y,metadata:new ui(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(i,C)}async function zl(i){const e=tt(i);await gn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gl(i,e){return[...i.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function no(i){return i.map(e=>{var{providerId:n}=e,r=Ii(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Wl(i,e){const n=await eo(i,{},async()=>{const r=Dt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,h=await to(i,o,"/v1/token",`key=${c}`),y=await i._getAdditionalHeaders();y["Content-Type"]="application/x-www-form-urlencoded";const I={method:"POST",headers:y,body:r};return i.emulatorConfig&&Rt(i.emulatorConfig.host)&&(I.credentials="include"),Qs.fetch()(h,I)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Kl(i,e){return it(i,"POST","/v2/accounts:revokeToken",Ei(i,e))}/**
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
 */class Xe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ts(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){S(e.length!==0,"internal-error");const n=ts(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:c}=await Wl(e,n);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:c}=n,h=new Xe;return r&&(S(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(S(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(S(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xe,this.toJSON())}_performRefresh(){return pe("not implemented")}}/**
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
 */function be(i,e){S(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class se{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,c=Ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $l(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new ui(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await Ct(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hl(this,e)}reload(){return zl(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(oe(this.auth.app))return Promise.reject(Ue(this.auth));const e=await this.getIdToken();return await Ct(this,Fl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,c,h,y,I,T,b;const C=(r=n.displayName)!==null&&r!==void 0?r:void 0,A=(o=n.email)!==null&&o!==void 0?o:void 0,L=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,k=(h=n.photoURL)!==null&&h!==void 0?h:void 0,U=(y=n.tenantId)!==null&&y!==void 0?y:void 0,N=(I=n._redirectEventId)!==null&&I!==void 0?I:void 0,Q=(T=n.createdAt)!==null&&T!==void 0?T:void 0,V=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:j,emailVerified:q,isAnonymous:le,providerData:B,stsTokenManager:p}=n;S(j&&p,e,"internal-error");const u=Xe.fromJSON(this.name,p);S(typeof j=="string",e,"internal-error"),be(C,e.name),be(A,e.name),S(typeof q=="boolean",e,"internal-error"),S(typeof le=="boolean",e,"internal-error"),be(L,e.name),be(k,e.name),be(U,e.name),be(N,e.name),be(Q,e.name),be(V,e.name);const f=new se({uid:j,auth:e,email:A,emailVerified:q,displayName:C,isAnonymous:le,photoURL:k,phoneNumber:L,tenantId:U,stsTokenManager:u,createdAt:Q,lastLoginAt:V});return B&&Array.isArray(B)&&(f.providerData=B.map(g=>Object.assign({},g))),N&&(f._redirectEventId=N),f}static async _fromIdTokenResponse(e,n,r=!1){const o=new Xe;o.updateFromServerResponse(n);const c=new se({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await gn(c),c}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];S(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?no(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),y=new Xe;y.updateFromIdToken(r);const I=new se({uid:o.localId,auth:e,stsTokenManager:y,isAnonymous:h}),T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ui(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(I,T),I}}/**
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
 */const ns=new Map;function ge(i){ye(i instanceof Function,"Expected a class definition");let e=ns.get(i);return e?(ye(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ns.set(i,e),e)}/**
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
 */class io{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}io.type="NONE";const is=io;/**
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
 */function an(i,e,n){return`firebase:${i}:${e}:${n}`}class Je{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=an(this.userKey,o.apiKey,c),this.fullPersistenceKey=an("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pn(this.auth,{idToken:e}).catch(()=>{});return n?se._fromGetAccountInfoResponse(this.auth,n,e):null}return se._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Je(ge(is),e,r);const o=(await Promise.all(n.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let c=o[0]||ge(is);const h=an(r,e.config.apiKey,e.name);let y=null;for(const T of n)try{const b=await T._get(h);if(b){let C;if(typeof b=="string"){const A=await pn(e,{idToken:b}).catch(()=>{});if(!A)break;C=await se._fromGetAccountInfoResponse(e,A,b)}else C=se._fromJSON(e,b);T!==c&&(y=C),c=T;break}}catch{}const I=o.filter(T=>T._shouldAllowMigration);return!c._shouldAllowMigration||!I.length?new Je(c,e,r):(c=I[0],y&&await c._set(h,y.toJSON()),await Promise.all(n.map(async T=>{if(T!==c)try{await T._remove(h)}catch{}})),new Je(c,e,r))}}/**
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
 */function rs(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ao(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ro(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lo(e))return"Blackberry";if(ho(e))return"Webos";if(so(e))return"Safari";if((e.includes("chrome/")||oo(e))&&!e.includes("edge/"))return"Chrome";if(co(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ro(i=Z()){return/firefox\//i.test(i)}function so(i=Z()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oo(i=Z()){return/crios\//i.test(i)}function ao(i=Z()){return/iemobile/i.test(i)}function co(i=Z()){return/android/i.test(i)}function lo(i=Z()){return/blackberry/i.test(i)}function ho(i=Z()){return/webos/i.test(i)}function bi(i=Z()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function ql(i=Z()){var e;return bi(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xl(){return Wa()&&document.documentMode===10}function uo(i=Z()){return bi(i)||co(i)||ho(i)||lo(i)||/windows phone/i.test(i)||ao(i)}/**
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
 */function fo(i,e=[]){let n;switch(i){case"Browser":n=rs(Z());break;case"Worker":n=`${rs(Z())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nt}/${r}`}/**
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
 */class Jl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((h,y)=>{try{const I=e(c);h(I)}catch(I){y(I)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Yl(i,e={}){return it(i,"GET","/v2/passwordPolicy",Ei(i,e))}/**
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
 */const Zl=6;class Ql{constructor(e){var n,r,o,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:Zl,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,c,h,y;const I={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,I),this.validatePasswordCharacterOptions(e,I),I.isValid&&(I.isValid=(n=I.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),I.isValid&&(I.isValid=(r=I.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),I.isValid&&(I.isValid=(o=I.containsLowercaseLetter)!==null&&o!==void 0?o:!0),I.isValid&&(I.isValid=(c=I.containsUppercaseLetter)!==null&&c!==void 0?c:!0),I.isValid&&(I.isValid=(h=I.containsNumericCharacter)!==null&&h!==void 0?h:!0),I.isValid&&(I.isValid=(y=I.containsNonAlphanumericCharacter)!==null&&y!==void 0?y:!0),I}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class eh{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ss(this),this.idTokenSubscription=new ss(this),this.beforeStateQueue=new Jl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ys,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ge(n)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Je.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pn(this,{idToken:e}),r=await se._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(oe(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(y=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(y,y))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,y=o==null?void 0:o._redirectEventId,I=await this.tryRedirectSignIn(e);(!h||h===y)&&(I!=null&&I.user)&&(o=I.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ll()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(oe(this.app))return Promise.reject(Ue(this));const n=e?tt(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return oe(this.app)?Promise.reject(Ue(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return oe(this.app)?Promise.reject(Ue(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yl(this),n=new Ql(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Kl(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ge(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await Je.create(this,[ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let h=!1;const y=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(y,this,"internal-error"),y.then(()=>{h||c(this.currentUser)}),typeof n=="function"){const I=e.addObserver(n,r,o);return()=>{h=!0,I()}}else{const I=e.addObserver(n);return()=>{h=!0,I()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Dl(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Si(i){return tt(i)}class ss{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qa(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ci={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function th(i){Ci=i}function nh(i){return Ci.loadJS(i)}function ih(){return Ci.gapiScript}function rh(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function sh(i,e){const n=vi(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(Be(c,e??{}))return o;ve(o,"already-initialized")}return n.initialize({options:e})}function oh(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ge);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ah(i,e,n){const r=Si(i);S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=po(e),{host:h,port:y}=ch(e),I=y===null?"":`:${y}`,T={url:`${c}//${h}${I}/`},b=Object.freeze({host:h,port:y,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){S(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),S(Be(T,r.config.emulator)&&Be(b,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=T,r.emulatorConfig=b,r.settings.appVerificationDisabledForTesting=!0,Rt(h)?(xs(`${c}//${h}${I}`),Ms("Auth",!0)):lh()}function po(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function ch(i){const e=po(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:os(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:os(h)}}}function os(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function lh(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class go{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pe("not implemented")}_getIdTokenResponse(e){return pe("not implemented")}_linkToIdToken(e,n){return pe("not implemented")}_getReauthenticationResolver(e){return pe("not implemented")}}/**
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
 */async function Ye(i,e){return Bl(i,"POST","/v1/accounts:signInWithIdp",Ei(i,e))}/**
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
 */const hh="http://localhost";class Fe extends go{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,c=Ii(n,["providerId","signInMethod"]);if(!r||!o)return null;const h=new Fe(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return Ye(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ye(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ye(e,n)}buildRequest(){const e={requestUri:hh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dt(n)}return e}}/**
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
 */class mo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lt extends mo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Se extends Lt{constructor(){super("facebook.com")}static credential(e){return Fe._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch{return null}}}Se.FACEBOOK_SIGN_IN_METHOD="facebook.com";Se.PROVIDER_ID="facebook.com";/**
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
 */class Ce extends Lt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fe._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ce.credential(n,r)}catch{return null}}}Ce.GOOGLE_SIGN_IN_METHOD="google.com";Ce.PROVIDER_ID="google.com";/**
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
 */class ke extends Lt{constructor(){super("github.com")}static credential(e){return Fe._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch{return null}}}ke.GITHUB_SIGN_IN_METHOD="github.com";ke.PROVIDER_ID="github.com";/**
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
 */class Re extends Lt{constructor(){super("twitter.com")}static credential(e,n){return Fe._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Re.credential(n,r)}catch{return null}}}Re.TWITTER_SIGN_IN_METHOD="twitter.com";Re.PROVIDER_ID="twitter.com";/**
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
 */class et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const c=await se._fromIdTokenResponse(e,r,o),h=as(r);return new et({user:c,providerId:h,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=as(r);return new et({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function as(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class mn extends _e{constructor(e,n,r,o){var c;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,mn.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new mn(e,n,r,o)}}function vo(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?mn._fromErrorAndOperation(i,c,e,r):c})}async function uh(i,e,n=!1){const r=await Ct(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return et._forOperation(i,"link",r)}/**
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
 */async function dh(i,e,n=!1){const{auth:r}=i;if(oe(r.app))return Promise.reject(Ue(r));const o="reauthenticate";try{const c=await Ct(i,vo(r,o,e,i),n);S(c.idToken,r,"internal-error");const h=Ai(c.idToken);S(h,r,"internal-error");const{sub:y}=h;return S(i.uid===y,r,"user-mismatch"),et._forOperation(i,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&ve(r,"user-mismatch"),c}}/**
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
 */async function fh(i,e,n=!1){if(oe(i.app))return Promise.reject(Ue(i));const r="signIn",o=await vo(i,r,e),c=await et._fromIdTokenResponse(i,r,o);return n||await i._updateCurrentUser(c.user),c}function ph(i,e,n,r){return tt(i).onIdTokenChanged(e,n,r)}function gh(i,e,n){return tt(i).beforeAuthStateChanged(e,n)}const vn="__sak";/**
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
 */class yo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vn,"1"),this.storage.removeItem(vn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mh=1e3,vh=10;class _o extends yo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,y,I)=>{this.notifyListeners(h,I)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!n&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);Xl()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,vh):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_o.type="LOCAL";const yh=_o;/**
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
 */class Io extends yo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Io.type="SESSION";const wo=Io;/**
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
 */function _h(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class In{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new In(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:c}=n.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const y=Array.from(h).map(async T=>T(n.origin,c)),I=await _h(y);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:I})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}In.receivers=[];/**
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
 */function ki(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class Ih{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((y,I)=>{const T=ki("",20);o.port1.start();const b=setTimeout(()=>{I(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(C){const A=C;if(A.data.eventId===T)switch(A.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{I(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),y(A.data.response);break;default:clearTimeout(b),clearTimeout(c),I(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:T,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ce(){return window}function wh(i){ce().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function To(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function Th(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eh(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Ah(){return To()?self:null}/**
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
 */const Eo="firebaseLocalStorageDb",bh=1,yn="firebaseLocalStorage",Ao="fbase_key";class xt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wn(i,e){return i.transaction([yn],e?"readwrite":"readonly").objectStore(yn)}function Sh(){const i=indexedDB.deleteDatabase(Eo);return new xt(i).toPromise()}function di(){const i=indexedDB.open(Eo,bh);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(yn,{keyPath:Ao})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(yn)?e(r):(r.close(),await Sh(),e(await di()))})})}async function cs(i,e,n){const r=wn(i,!0).put({[Ao]:e,value:n});return new xt(r).toPromise()}async function Ch(i,e){const n=wn(i,!1).get(e),r=await new xt(n).toPromise();return r===void 0?null:r.value}function ls(i,e){const n=wn(i,!0).delete(e);return new xt(n).toPromise()}const kh=800,Rh=3;class bo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await di(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return To()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=In._getInstance(Ah()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Th(),!this.activeServiceWorker)return;this.sender=new Ih(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await di();return await cs(e,vn,"1"),await ls(e,vn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cs(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ch(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ls(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=wn(o,!1).getAll();return new xt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bo.type="LOCAL";const Ph=bo;new Nt(3e4,6e4);/**
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
 */function Dh(i,e){return e?ge(e):(S(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Ri extends go{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ye(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Oh(i){return fh(i.auth,new Ri(i),i.bypassAuthState)}function Nh(i){const{auth:e,user:n}=i;return S(n,e,"internal-error"),dh(n,new Ri(i),i.bypassAuthState)}async function Lh(i){const{auth:e,user:n}=i;return S(n,e,"internal-error"),uh(n,new Ri(i),i.bypassAuthState)}/**
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
 */class So{constructor(e,n,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:c,error:h,type:y}=e;if(h){this.reject(h);return}const I={auth:this.auth,requestUri:n,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(y)(I))}catch(T){this.reject(T)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Oh;case"linkViaPopup":case"linkViaRedirect":return Lh;case"reauthViaPopup":case"reauthViaRedirect":return Nh;default:ve(this.auth,"internal-error")}}resolve(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xh=new Nt(2e3,1e4);class Ke extends So{constructor(e,n,r,o,c){super(e,n,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Ke.currentPopupAction&&Ke.currentPopupAction.cancel(),Ke.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){ye(this.filter.length===1,"Popup operations only handle one event");const e=ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ke.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xh.get())};e()}}Ke.currentPopupAction=null;/**
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
 */const Mh="pendingRedirect",cn=new Map;class Uh extends So{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cn.get(this.auth._key());if(!e){try{const r=await Bh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cn.set(this.auth._key(),e)}return this.bypassAuthState||cn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bh(i,e){const n=Hh(e),r=Fh(i);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function jh(i,e){cn.set(i._key(),e)}function Fh(i){return ge(i._redirectPersistence)}function Hh(i){return an(Mh,i.config.apiKey,i.name)}async function Vh(i,e,n=!1){if(oe(i.app))return Promise.reject(Ue(i));const r=Si(i),o=Dh(r,e),h=await new Uh(r,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
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
 */const $h=10*60*1e3;class zh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Co(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ae(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$h&&this.cachedEventUids.clear(),this.cachedEventUids.has(hs(e))}saveEventToCache(e){this.cachedEventUids.add(hs(e)),this.lastProcessedEventTime=Date.now()}}function hs(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Co({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gh(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Co(i);default:return!1}}/**
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
 */async function Wh(i,e={}){return it(i,"GET","/v1/projects",e)}/**
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
 */const Kh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qh=/^https?/;async function Xh(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Wh(i);for(const n of e)try{if(Jh(n))return}catch{}ve(i,"unauthorized-domain")}function Jh(i){const e=hi(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===r}if(!qh.test(n))return!1;if(Kh.test(i))return r===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Yh=new Nt(3e4,6e4);function us(){const i=ce().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function Zh(i){return new Promise((e,n)=>{var r,o,c;function h(){us(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{us(),n(ae(i,"network-request-failed"))},timeout:Yh.get()})}if(!((o=(r=ce().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=ce().gapi)===null||c===void 0)&&c.load)h();else{const y=rh("iframefcb");return ce()[y]=()=>{gapi.load?h():n(ae(i,"network-request-failed"))},nh(`${ih()}?onload=${y}`).catch(I=>n(I))}}).catch(e=>{throw ln=null,e})}let ln=null;function Qh(i){return ln=ln||Zh(i),ln}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const eu=new Nt(5e3,15e3),tu="__/auth/iframe",nu="emulator/auth/iframe",iu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ru=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function su(i){const e=i.config;S(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Ti(e,nu):`https://${i.config.authDomain}/${tu}`,r={apiKey:e.apiKey,appName:i.name,v:nt},o=ru.get(i.config.apiHost);o&&(r.eid=o);const c=i._getFrameworks();return c.length&&(r.fw=c.join(",")),`${n}?${Dt(r).slice(1)}`}async function ou(i){const e=await Qh(i),n=ce().gapi;return S(n,i,"internal-error"),e.open({where:document.body,url:su(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iu,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=ae(i,"network-request-failed"),y=ce().setTimeout(()=>{c(h)},eu.get());function I(){ce().clearTimeout(y),o(r)}r.ping(I).then(I,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const au={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cu=500,lu=600,hu="_blank",uu="http://localhost";class ds{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function du(i,e,n,r=cu,o=lu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let y="";const I=Object.assign(Object.assign({},au),{width:r.toString(),height:o.toString(),top:c,left:h}),T=Z().toLowerCase();n&&(y=oo(T)?hu:n),ro(T)&&(e=e||uu,I.scrollbars="yes");const b=Object.entries(I).reduce((A,[L,k])=>`${A}${L}=${k},`,"");if(ql(T)&&y!=="_self")return fu(e||"",y),new ds(null);const C=window.open(e||"",y,b);S(C,i,"popup-blocked");try{C.focus()}catch{}return new ds(C)}function fu(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pu="__/auth/handler",gu="emulator/auth/handler",mu=encodeURIComponent("fac");async function fs(i,e,n,r,o,c){S(i.config.authDomain,i,"auth-domain-config-required"),S(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:nt,eventId:o};if(e instanceof mo){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Za(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,C]of Object.entries({}))h[b]=C}if(e instanceof Lt){const b=e.getScopes().filter(C=>C!=="");b.length>0&&(h.scopes=b.join(","))}i.tenantId&&(h.tid=i.tenantId);const y=h;for(const b of Object.keys(y))y[b]===void 0&&delete y[b];const I=await i._getAppCheckToken(),T=I?`#${mu}=${encodeURIComponent(I)}`:"";return`${vu(i)}?${Dt(y).slice(1)}${T}`}function vu({config:i}){return i.emulator?Ti(i,gu):`https://${i.authDomain}/${pu}`}/**
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
 */const ii="webStorageSupport";class yu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wo,this._completeRedirectFn=Vh,this._overrideRedirectResult=jh}async _openPopup(e,n,r,o){var c;ye((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await fs(e,n,r,hi(),o);return du(e,h,ki())}async _openRedirect(e,n,r,o){await this._originValidation(e);const c=await fs(e,n,r,hi(),o);return wh(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(ye(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ou(e),r=new zh(e);return n.register("authEvent",o=>(S(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ii,{type:ii},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[ii];h!==void 0&&n(!!h),ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uo()||so()||bi()}}const _u=yu;var ps="@firebase/auth",gs="1.10.7";/**
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
 */class Iu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wu(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tu(i){Ze(new je("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:y}=r.options;S(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const I={apiKey:h,authDomain:y,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fo(i)},T=new eh(r,o,c,I);return oh(T,n),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ze(new je("auth-internal",e=>{const n=Si(e.getProvider("auth").getImmediate());return(r=>new Iu(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oe(ps,gs,wu(i)),Oe(ps,gs,"esm2017")}/**
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
 */const Eu=5*60,Au=Ls("authIdTokenMaxAge")||Eu;let ms=null;const bu=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Au)return;const o=n==null?void 0:n.token;ms!==o&&(ms=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Su(i=Fs()){const e=vi(i,"auth");if(e.isInitialized())return e.getImmediate();const n=sh(i,{popupRedirectResolver:_u,persistence:[Ph,yh,wo]}),r=Ls("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=bu(c.toString());gh(n,h,()=>h(n.currentUser)),ph(n,y=>h(y))}}const o=Os("auth");return o&&ah(n,`http://${o}`),n}function Cu(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}th({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=o=>{const c=ae("internal-error");c.customData=o,n(c)},r.type="text/javascript",r.charset="UTF-8",Cu().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tu("Browser");const ku={apiKey:"AIzaSyBHvCIK89pitWN0VmGXiueQxEWD_060m-o",authDomain:"development-aacd3.firebaseapp.com",projectId:"development-aacd3"},ko=js(ku);Cl(ko);Su(ko);function Ru(){const[i,e]=qe(da),[n,r]=qe(fa),[o,c]=qe(pa);return fe.useEffect(()=>{{console.log("📚 Storybook環境のためFirebase認証監視をスキップ"),r(!1),e(null),c(null);return}},[e,r,c]),{user:i,loading:n,error:o,isAuthenticated:!!i,isAnonymous:(i==null?void 0:i.isAnonymous)||!1}}const Pu=()=>{const{isAuthenticated:i,loading:e}=Ru();fe.useEffect(()=>{{console.log("📚 Storybook環境のため自動ログインをスキップ");return}},[e,i])},Du=i=>({ABC123:{groupName:"テストグループ 1",round:3},XYZ789:{groupName:"非常に長いグループ名のテストケースです！これは表示の確認用",round:5},12:{groupName:"短ID",round:1},LOADING_TEST:{groupName:"ローディングテスト用グループ",round:2}})[i]||null,Ou=800,Nu=i=>{const[e,n]=fe.useState(null),[r,o]=fe.useState(!0),[c,h]=fe.useState(null);return fe.useEffect(()=>{(async()=>{if(i){console.log("📚 Storybook環境のためモックデータを使用"),o(!0),setTimeout(()=>{const I=Du(i);I?n(I):h("指定されたグループID のグループは存在しないか、削除されている可能性があります。"),o(!1)},Ou);return}})()},[i]),{groupData:e,groupLoading:r,groupError:c}},Lu=i=>({ABC123:[{userId:"user1",groupId:"ABC123",userName:"田中太郎",avatar:"1",deleteFlg:!1,createdAt:new Date,updatedAt:new Date},{userId:"user2",groupId:"ABC123",userName:"山田花子",avatar:"5",deleteFlg:!1,createdAt:new Date,updatedAt:new Date}],XYZ789:[{userId:"user3",groupId:"XYZ789",userName:"Alice",avatar:"3",deleteFlg:!1,createdAt:new Date,updatedAt:new Date}],12:[{userId:"user4",groupId:"12",userName:"Bob",avatar:"2",deleteFlg:!1,createdAt:new Date,updatedAt:new Date}]})[i]||[],xu=i=>{const[e,n]=qe(ga);return fe.useEffect(()=>{if(i){console.log("📚 Storybook環境のためモックユーザーを使用");const r=Lu(i);n(r);return}},[i,n]),{groupUsers:e}},Mu=Array.from({length:18},(i,e)=>({index:`${e+1}`,path:`/img/${e+1}.png`}));function fi({groupId:i}){const[e,n]=fe.useState("select"),[r,o]=fe.useState(!1),c=Ta();Pu();const{groupData:h,groupLoading:y,groupError:I}=Nu(i),{groupUsers:T}=xu(i),b=ma(_a),[C,A]=qe(ya),[L,k]=qe(va),U=wt("white","gray.800"),N=wt("gray.200","gray.600"),Q=wt("blue.50","blue.900"),V=wt("blue.200","blue.700"),j=wt("blue.700","blue.300"),q=async B=>{o(!0);try{const p=T.find(u=>u.userId===B);p&&(b({userId:p.userId,groupId:i,userName:p.userName,avatar:p.avatar,deleteFlg:p.deleteFlg||!1,createdAt:p.createdAt,updatedAt:p.updatedAt}),console.log("✅ 既存ユーザーでログイン:",p.userName),c.push(`/draft/${i}`))}catch(p){console.error("❌ ログインエラー:",p)}finally{o(!1)}},le=async B=>{if(!i){console.error("❌ グループIDが指定されていません");return}{console.log("📚 Storybook環境のためモック処理"),o(!0),await new Promise(p=>setTimeout(p,1e3)),o(!1);return}};return y?D.jsx(qn,{maxW:"container.sm",py:{base:4,md:8},children:D.jsxs(Zt,{gap:6,align:"center",justify:"center",minH:"400px",children:[D.jsx(ka,{size:"lg",color:"blue.500"}),D.jsx(Ae,{color:"gray.500",children:"グループ情報を読み込み中..."})]})}):I||!h?D.jsx(qn,{maxW:"container.sm",py:{base:4,md:8},children:D.jsxs(Zt,{gap:6,align:"center",justify:"center",minH:"400px",children:[D.jsx(We,{as:Ea,fontSize:"48px",color:"red.500"}),D.jsxs(Zt,{gap:2,textAlign:"center",children:[D.jsx(kr,{size:"md",color:"red.500",children:"グループが見つかりません"}),D.jsx(Ae,{color:"gray.500",children:I||"指定されたグループID のグループは存在しないか、削除されている可能性があります。"}),D.jsxs(Xn,{variant:"outline",colorScheme:"red",fontSize:"xs",mt:2,children:["グループID: ",i]})]})]})}):D.jsx(qn,{maxW:"container.sm",py:{base:4,md:8},children:D.jsxs(Zt,{gap:6,align:"stretch",children:[D.jsxs(We,{textAlign:"center",children:[D.jsx(Xn,{colorScheme:"blue",fontSize:"xs",px:3,py:1,borderRadius:"full",mb:3,children:D.jsxs(Rr,{gap:1,children:[D.jsx(We,{as:Aa}),D.jsx(Ae,{children:"グループに参加"})]})}),D.jsx(kr,{size:{base:"md",md:"lg"},mb:3,color:"gray.800",_dark:{color:"gray.100"},fontWeight:"bold",children:h.groupName}),D.jsxs(Rr,{justify:"center",gap:2,children:[D.jsx(Ae,{fontSize:"sm",color:"gray.500",children:"グループID:"}),D.jsx(Xn,{variant:"outline",colorScheme:"blue",fontSize:"xs",children:i}),D.jsx(Ae,{fontSize:"sm",color:"gray.500",children:"•"}),D.jsxs(Ae,{fontSize:"sm",color:"gray.500",children:["ラウンド: ",h.round]})]})]}),D.jsx(Ca,{currentStep:e}),D.jsxs(We,{bg:U,borderRadius:"xl",border:"1px solid",borderColor:N,p:{base:4,md:6},boxShadow:"md",overflow:"hidden",children:[e==="select"&&D.jsx(Sa,{users:T.filter(B=>B.userId).map(B=>({userId:B.userId,userName:B.userName,avatarIndex:B.avatar,avatar:`/img/${B.avatar}.png`})),onUserSelect:q,onCreateNewUser:()=>n("create"),isLoading:r}),e==="create"&&D.jsx(ba,{avatars:Mu,onBack:()=>n("select"),onSubmit:le,isLoading:C})]}),L&&D.jsx(We,{bg:"red.50",border:"1px solid",borderColor:"red.200",borderRadius:"lg",p:4,_dark:{bg:"red.900",borderColor:"red.700"},children:D.jsxs(Ae,{fontSize:"sm",color:"red.700",_dark:{color:"red.300"},fontWeight:"medium",children:["❌ ",L]})}),D.jsx(We,{bg:Q,border:"1px solid",borderColor:V,borderRadius:"lg",p:4,textAlign:"center",children:D.jsxs(Ae,{fontSize:"sm",color:j,fontWeight:"medium",children:["💡"," ",e==="select"?"既存のユーザーを選択するか、新しいユーザーを作成してグループに参加しましょう":"お気に入りのアバターを選んで、ドラフトで使う名前を決めてください"]})})]})})}try{fi.displayName="LobbyPage",fi.__docgenInfo={description:"",displayName:"LobbyPage",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}}}}}catch{}const Pd={title:"Features/Lobby/LobbyPage",component:fi,parameters:{layout:"fullscreen",msw:{handlers:wa}},decorators:[Ia,kt({firebaseAuthenticated:!0})]},tn={args:{groupId:"ABC123"},decorators:[kt({firebaseAuthenticated:!0})],play:async({canvasElement:i})=>{const e=_n(i);H(await e.findByText("テストグループ 1")).toBeInTheDocument(),H(await e.findByText("ABC123")).toBeInTheDocument(),H(await e.findByText(/ラウンド: 3/)).toBeInTheDocument(),H(await e.findByText("ユーザー選択")).toBeInTheDocument(),H(await e.findByText("田中太郎")).toBeInTheDocument(),H(await e.findByText("山田花子")).toBeInTheDocument(),H(await e.findByText("登録済みのユーザーで参加")).toBeInTheDocument(),H(await e.findByText("新しいユーザーとして参加")).toBeInTheDocument(),H(await e.findByText(/既存のユーザーを選択するか、新しいユーザーを作成して/)).toBeInTheDocument(),H(await e.findByText("グループに参加")).toBeInTheDocument()}},nn={args:{groupId:"XYZ789"},decorators:[kt({firebaseAuthenticated:!0})],play:async({canvasElement:i})=>{const e=_n(i);H(await e.findByText("非常に長いグループ名のテストケースです！これは表示の確認用")).toBeInTheDocument(),H(await e.findByText("XYZ789")).toBeInTheDocument(),H(await e.findByText(/ラウンド: 5/)).toBeInTheDocument(),H(await e.findByText("Alice")).toBeInTheDocument()}},rn={args:{groupId:"12"},decorators:[kt({firebaseAuthenticated:!0})],play:async({canvasElement:i})=>{const e=_n(i);H(await e.findByText("短ID")).toBeInTheDocument(),H(await e.findByText("12")).toBeInTheDocument(),H(await e.findByText(/ラウンド: 1/)).toBeInTheDocument(),H(await e.findByText("Bob")).toBeInTheDocument()}},sn={args:{groupId:"nonexistent"},decorators:[kt({firebaseAuthenticated:!0})],play:async({canvasElement:i})=>{const e=_n(i);H(await e.findByText("グループが見つかりません")).toBeInTheDocument(),H(await e.findByText("グループID: nonexistent")).toBeInTheDocument(),H(await e.findByText("指定されたグループID のグループは存在しないか、削除されている可能性があります。")).toBeInTheDocument()}};var vs,ys,_s;tn.parameters={...tn.parameters,docs:{...(vs=tn.parameters)==null?void 0:vs.docs,source:{originalSource:`{
  args: {
    groupId: 'ABC123'
  },
  decorators: [
  // SessionUserなしでユーザー選択画面を表示
  withLobbyMock({
    firebaseAuthenticated: true,
    groupExists: true,
    sessionUser: null
  })],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ（グループ名が表示されるまで）
    expect(await canvas.findByText('テストグループ 1')).toBeInTheDocument();

    // 基本的な要素の存在確認
    expect(await canvas.findByText('ABC123')).toBeInTheDocument();
    expect(await canvas.findByText(/ラウンド: 3/)).toBeInTheDocument();

    // ステップインジケーター
    expect(await canvas.findByText('ユーザー選択')).toBeInTheDocument();

    // 既存ユーザー一覧
    expect(await canvas.findByText('田中太郎')).toBeInTheDocument();
    expect(await canvas.findByText('山田花子')).toBeInTheDocument();
    expect(await canvas.findByText('登録済みのユーザーで参加')).toBeInTheDocument();

    // 新規ユーザー作成ボタン
    expect(await canvas.findByText('新しいユーザーとして参加')).toBeInTheDocument();

    // ヘルプテキスト
    expect(await canvas.findByText(/既存のユーザーを選択するか、新しいユーザーを作成して/)).toBeInTheDocument();

    // グループ参加バッジ
    expect(await canvas.findByText('グループに参加')).toBeInTheDocument();
  }
}`,...(_s=(ys=tn.parameters)==null?void 0:ys.docs)==null?void 0:_s.source}}};var Is,ws,Ts;nn.parameters={...nn.parameters,docs:{...(Is=nn.parameters)==null?void 0:Is.docs,source:{originalSource:`{
  args: {
    groupId: 'XYZ789'
  },
  decorators: [withLobbyMock({
    firebaseAuthenticated: true,
    groupExists: true,
    sessionUser: null
  })],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ
    expect(await canvas.findByText('非常に長いグループ名のテストケースです！これは表示の確認用')).toBeInTheDocument();

    // 長いグループ名の表示確認
    expect(await canvas.findByText('XYZ789')).toBeInTheDocument();
    expect(await canvas.findByText(/ラウンド: 5/)).toBeInTheDocument();

    // 対応するユーザー
    expect(await canvas.findByText('Alice')).toBeInTheDocument();
  }
}`,...(Ts=(ws=nn.parameters)==null?void 0:ws.docs)==null?void 0:Ts.source}}};var Es,As,bs;rn.parameters={...rn.parameters,docs:{...(Es=rn.parameters)==null?void 0:Es.docs,source:{originalSource:`{
  args: {
    groupId: '12'
  },
  decorators: [withLobbyMock({
    firebaseAuthenticated: true,
    groupExists: true,
    sessionUser: null
  })],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ
    expect(await canvas.findByText('短ID')).toBeInTheDocument();

    // 短いIDの表示確認
    expect(await canvas.findByText('12')).toBeInTheDocument();
    expect(await canvas.findByText(/ラウンド: 1/)).toBeInTheDocument();

    // 対応するユーザー
    expect(await canvas.findByText('Bob')).toBeInTheDocument();
  }
}`,...(bs=(As=rn.parameters)==null?void 0:As.docs)==null?void 0:bs.source}}};var Ss,Cs,ks;sn.parameters={...sn.parameters,docs:{...(Ss=sn.parameters)==null?void 0:Ss.docs,source:{originalSource:`{
  args: {
    groupId: 'nonexistent'
  },
  decorators: [
  // グループが存在しないケースのモック
  withLobbyMock({
    firebaseAuthenticated: true,
    groupExists: false,
    sessionUser: null
  })],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // エラー状態の表示を待つ
    expect(await canvas.findByText('グループが見つかりません')).toBeInTheDocument();

    // エラー状態の確認
    expect(await canvas.findByText('グループID: nonexistent')).toBeInTheDocument();
    expect(await canvas.findByText('指定されたグループID のグループは存在しないか、削除されている可能性があります。')).toBeInTheDocument();
  }
}`,...(ks=(Cs=sn.parameters)==null?void 0:Cs.docs)==null?void 0:ks.source}}};const Dd=["Default","LongGroupName","ShortGroupId","NonExistentGroup"];export{tn as Default,nn as LongGroupName,sn as NonExistentGroup,rn as ShortGroupId,Dd as __namedExportsOrder,Pd as default};
