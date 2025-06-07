import{h as Ka}from"./index-DFV_8HAr.js";import{j as D}from"./create-recipe-context-DNTG5mYw.js";import{r as q,R as no}from"./index-BXymfbzT.js";import{w as kn,e as z}from"./index-B7YJKKKT.js";import{u as bt}from"./color-mode-CR7cno4n.js";import{F as qa,a as Ja}from"./index-taPaNizk.js";import{U as Xa}from"./index-uIg1hqIU.js";import{U as Ya}from"./index-CJdpbDf6.js";import{S as Za}from"./index-CPifioCQ.js";import{C as ii}from"./container-BotK6VuJ.js";import{V as sn}from"./v-stack-QJg7n52G.js";import{S as Qa}from"./button-Dz2diCo_.js";import{T as Ce}from"./text-DJUdolDr.js";import{B as Ze}from"./box-DMcbo_cE.js";import{H as Wr}from"./heading-BGvs0cd3.js";import{B as ri}from"./badge-C7O6qwPE.js";import{H as Gr}from"./h-stack-BoRIBf53.js";import"./jsx-runtime-Bw5QeaCk.js";import"./iconBase-BtwG8oUN.js";import"./stack-DVtSLI4T.js";import"./schemas-Dej7Eoou.js";import"./types-CvgYpjhN.js";import"./index-Bb1VYF-4.js";import"./image-DR_fq2ZN.js";import"./router-context.shared-runtime-CczRXcu8.js";import"./index-DGKHe-6Q.js";import"./image-context-BYBggyir.js";import"./use-merged-ref-0PvjutYQ.js";import"./simple-grid-D7DxtwhU.js";import"./index-CmmhBdGD.js";const Nt=n=>({uid:"mock-user-id",isAnonymous:!0,displayName:null,email:null,phoneNumber:null,photoURL:null,providerId:"firebase",refreshToken:"mock-refresh-token",tenantId:null,emailVerified:!1,metadata:{creationTime:void 0,lastSignInTime:void 0},providerData:[],delete:async()=>{},getIdToken:async()=>"mock-token",getIdTokenResult:async()=>({}),reload:async()=>{},toJSON:()=>({}),...n});Nt(),Nt({isAnonymous:!1,email:"test@example.com",displayName:"テストユーザー",emailVerified:!0});const kt={},Kr=(n,e)=>n.unstable_is?n.unstable_is(e):e===n,qr=n=>"init"in n,si=n=>!!n.write,Jr=n=>"v"in n||"e"in n,on=n=>{if("e"in n)throw n.e;if((kt?"production":void 0)!=="production"&&!("v"in n))throw new Error("[Bug] atom state is not initialized");return n.v},vn=new WeakMap,Xr=n=>{var e;return yn(n)&&!!((e=vn.get(n))!=null&&e[0])},ec=n=>{const e=vn.get(n);e!=null&&e[0]&&(e[0]=!1,e[1].forEach(i=>i()))},io=(n,e)=>{let i=vn.get(n);if(!i){i=[!0,new Set],vn.set(n,i);const r=()=>{i[0]=!1};n.then(r,r)}i[1].add(e)},yn=n=>typeof(n==null?void 0:n.then)=="function",ro=(n,e,i)=>{i.p.has(n)||(i.p.add(n),e.then(()=>{i.p.delete(n)},()=>{i.p.delete(n)}))},oi=(n,e,i)=>{const r=i(n),o="v"in r,c=r.v;if(yn(e))for(const u of r.d.keys())ro(n,e,i(u));r.v=e,delete r.e,(!o||!Object.is(c,r.v))&&(++r.n,yn(c)&&ec(c))},Yr=(n,e,i)=>{var r;const o=new Set;for(const c of((r=i.get(n))==null?void 0:r.t)||[])i.has(c)&&o.add(c);for(const c of e.p)o.add(c);return o},tc=()=>{const n=new Set,e=()=>{n.forEach(i=>i())};return e.add=i=>(n.add(i),()=>{n.delete(i)}),e},ai=()=>{const n={},e=new WeakMap,i=r=>{var o,c;(o=e.get(n))==null||o.forEach(u=>u(r)),(c=e.get(r))==null||c.forEach(u=>u())};return i.add=(r,o)=>{const c=r||n,u=(e.has(c)?e:e.set(c,new Set)).get(c);return u.add(o),()=>{u==null||u.delete(o),u.size||e.delete(c)}},i},nc=n=>(n.c||(n.c=ai()),n.m||(n.m=ai()),n.u||(n.u=ai()),n.f||(n.f=tc()),n),ic=Symbol(),rc=(n=new WeakMap,e=new WeakMap,i=new WeakMap,r=new Set,o=new Set,c=new Set,u={},y=(E,...R)=>E.read(...R),w=(E,...R)=>E.write(...R),T=(E,R)=>{var C;return(C=E.unstable_onInit)==null?void 0:C.call(E,R)},S=(E,R)=>{var C;return(C=E.onMount)==null?void 0:C.call(E,R)},...b)=>{const E=b[0]||(f=>{if((kt?"production":void 0)!=="production"&&!f)throw new Error("Atom is undefined or null");let h=n.get(f);return h||(h={d:new Map,p:new Set,n:0},n.set(f,h),T==null||T(f,G)),h}),R=b[1]||(()=>{const f=[],h=d=>{try{d()}catch(g){f.push(g)}};do{u.f&&h(u.f);const d=new Set,g=d.add.bind(d);r.forEach(m=>{var v;return(v=e.get(m))==null?void 0:v.l.forEach(g)}),r.clear(),c.forEach(g),c.clear(),o.forEach(g),o.clear(),d.forEach(h),r.size&&C()}while(r.size||c.size||o.size);if(f.length)throw new AggregateError(f)}),C=b[2]||(()=>{const f=[],h=new WeakSet,d=new WeakSet,g=Array.from(r);for(;g.length;){const m=g[g.length-1],v=E(m);if(d.has(m)){g.pop();continue}if(h.has(m)){if(i.get(m)===v.n)f.push([m,v]);else if((kt?"production":void 0)!=="production"&&i.has(m))throw new Error("[Bug] invalidated atom exists");d.add(m),g.pop();continue}h.add(m);for(const p of Yr(m,v,e))h.has(p)||g.push(p)}for(let m=f.length-1;m>=0;--m){const[v,p]=f[m];let V=!1;for(const oe of p.d.keys())if(oe!==v&&r.has(oe)){V=!0;break}V&&(N(v),j(v)),i.delete(v)}}),N=b[3]||(f=>{var h;const d=E(f);if(Jr(d)&&(e.has(f)&&i.get(f)!==d.n||Array.from(d.d).every(([B,he])=>N(B).n===he)))return d;d.d.clear();let g=!0;const m=()=>{e.has(f)&&(j(f),C(),R())},v=B=>{var he;if(Kr(f,B)){const ht=E(B);if(!Jr(ht))if(qr(B))oi(B,B.init,E);else throw new Error("no atom init");return on(ht)}const Ue=N(B);try{return on(Ue)}finally{d.d.set(B,Ue.n),Xr(d.v)&&ro(f,d.v,Ue),(he=e.get(B))==null||he.t.add(f),g||m()}};let p,V;const oe={get signal(){return p||(p=new AbortController),p.signal},get setSelf(){return(kt?"production":void 0)!=="production"&&!si(f)&&console.warn("setSelf function cannot be used with read-only atom"),!V&&si(f)&&(V=(...B)=>{if((kt?"production":void 0)!=="production"&&g&&console.warn("setSelf function cannot be called in sync"),!g)try{return W(f,...B)}finally{C(),R()}}),V}},Ge=d.n;try{const B=y(f,v,oe);return oi(f,B,E),yn(B)&&(io(B,()=>p==null?void 0:p.abort()),B.then(m,m)),d}catch(B){return delete d.v,d.e=B,++d.n,d}finally{g=!1,Ge!==d.n&&i.get(f)===Ge&&(i.set(f,d.n),r.add(f),(h=u.c)==null||h.call(u,f))}}),O=b[4]||(f=>{const h=[f];for(;h.length;){const d=h.pop(),g=E(d);for(const m of Yr(d,g,e)){const v=E(m);i.set(m,v.n),h.push(m)}}}),W=b[5]||((f,...h)=>{let d=!0;const g=v=>on(N(v)),m=(v,...p)=>{var V;const oe=E(v);try{if(Kr(f,v)){if(!qr(v))throw new Error("atom not writable");const Ge=oe.n,B=p[0];oi(v,B,E),j(v),Ge!==oe.n&&(r.add(v),(V=u.c)==null||V.call(u,v),O(v));return}else return W(v,...p)}finally{d||(C(),R())}};try{return w(f,g,m,...h)}finally{d=!1}}),j=b[6]||(f=>{var h;const d=E(f),g=e.get(f);if(g&&!Xr(d.v)){for(const[m,v]of d.d)if(!g.d.has(m)){const p=E(m);U(m).t.add(f),g.d.add(m),v!==p.n&&(r.add(m),(h=u.c)==null||h.call(u,m),O(m))}for(const m of g.d||[])if(!d.d.has(m)){g.d.delete(m);const v=M(m);v==null||v.t.delete(f)}}}),U=b[7]||(f=>{var h;const d=E(f);let g=e.get(f);if(!g){N(f);for(const m of d.d.keys())U(m).t.add(f);if(g={l:new Set,d:new Set(d.d.keys()),t:new Set},e.set(f,g),(h=u.m)==null||h.call(u,f),si(f)){const m=()=>{let v=!0;const p=(...V)=>{try{return W(f,...V)}finally{v||(C(),R())}};try{const V=S(f,p);V&&(g.u=()=>{v=!0;try{V()}finally{v=!1}})}finally{v=!1}};o.add(m)}}return g}),M=b[8]||(f=>{var h;const d=E(f);let g=e.get(f);if(g&&!g.l.size&&!Array.from(g.t).some(m=>{var v;return(v=e.get(m))==null?void 0:v.d.has(f)})){g.u&&c.add(g.u),g=void 0,e.delete(f),(h=u.u)==null||h.call(u,f);for(const m of d.d.keys()){const v=M(m);v==null||v.t.delete(f)}return}return g}),se=[n,e,i,r,o,c,u,y,w,T,S,E,R,C,N,O,W,j,U,M],G={get:f=>on(N(f)),set:(f,...h)=>{try{return W(f,...h)}finally{C(),R()}},sub:(f,h)=>{const g=U(f).l;return g.add(h),R(),()=>{g.delete(h),M(f),R()}}};return Object.defineProperty(G,ic,{value:se}),G},so=rc,sc=nc,Zr=io,Pi={};let oc=0;function Me(n,e){const i=`atom${++oc}`,r={toString(){return(Pi?"production":void 0)!=="production"&&this.debugLabel?i+":"+this.debugLabel:i}};return typeof n=="function"?r.read=n:(r.init=n,r.read=ac,r.write=cc),r}function ac(n){return n(this)}function cc(n,e,i){return e(this,typeof i=="function"?i(n(this)):i)}const lc=()=>{let n=0;const e=sc({}),i=new WeakMap,r=new WeakMap,o=so(i,r,void 0,void 0,void 0,void 0,e,void 0,(y,w,T,...S)=>n?T(y,...S):y.write(w,T,...S)),c=new Set;return e.m.add(void 0,y=>{c.add(y);const w=i.get(y);w.m=r.get(y)}),e.u.add(void 0,y=>{c.delete(y);const w=i.get(y);delete w.m}),Object.assign(o,{dev4_get_internal_weak_map:()=>(console.log("Deprecated: Use devstore from the devtools library"),i),dev4_get_mounted_atoms:()=>c,dev4_restore_atoms:y=>{const w={read:()=>null,write:(T,S)=>{++n;try{for(const[b,E]of y)"init"in b&&S(b,E)}finally{--n}}};o.set(w)}})};function Di(){return(Pi?"production":void 0)!=="production"?lc():so()}let Ct;function uc(){return Ct||(Ct=Di(),(Pi?"production":void 0)!=="production"&&(globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=Ct),globalThis.__JOTAI_DEFAULT_STORE__!==Ct&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))),Ct}const hc={},oo=q.createContext(void 0);function ao(n){return q.useContext(oo)||uc()}function dc({children:n,store:e}){const i=q.useRef(void 0);return!e&&!i.current&&(i.current=Di()),q.createElement(oo.Provider,{value:e||i.current},n)}const vi=n=>typeof(n==null?void 0:n.then)=="function",yi=n=>{n.status||(n.status="pending",n.then(e=>{n.status="fulfilled",n.value=e},e=>{n.status="rejected",n.reason=e}))},fc=no.use||(n=>{if(n.status==="pending")throw n;if(n.status==="fulfilled")return n.value;throw n.status==="rejected"?n.reason:(yi(n),n)}),ci=new WeakMap,Qr=(n,e)=>{let i=ci.get(n);return i||(i=new Promise((r,o)=>{let c=n;const u=T=>S=>{c===T&&r(S)},y=T=>S=>{c===T&&o(S)},w=()=>{try{const T=e();vi(T)?(ci.set(T,i),c=T,T.then(u(T),y(T)),Zr(T,w)):r(T)}catch(T){o(T)}};n.then(u(n),y(n)),Zr(n,w)}),ci.set(n,i)),i};function pc(n,e){const{delay:i,unstable_promiseStatus:r=!no.use}={},o=ao(),[[c,u,y],w]=q.useReducer(S=>{const b=o.get(n);return Object.is(S[0],b)&&S[1]===o&&S[2]===n?S:[b,o,n]},void 0,()=>[o.get(n),o,n]);let T=c;if((u!==o||y!==n)&&(w(),T=o.get(n)),q.useEffect(()=>{const S=o.sub(n,()=>{if(r)try{const b=o.get(n);vi(b)&&yi(Qr(b,()=>o.get(n)))}catch{}if(typeof i=="number"){setTimeout(w,i);return}w()});return w(),S},[o,n,i,r]),q.useDebugValue(T),vi(T)){const S=Qr(T,()=>o.get(n));return r&&yi(S),fc(S)}return T}function co(n,e){const i=ao();return q.useCallback((...o)=>{if((hc?"production":void 0)!=="production"&&!("write"in n))throw new Error("not writable atom");return i.set(n,...o)},[i,n])}function et(n,e){return[pc(n),co(n)]}const lo=Me(null),uo=Me(!0),gc=Me(null),mc=Me({uid:""}),vc=Me(null),yc=Me([]),_c=Me(!1),wc=Me(null),Ic=n=>{const e=Di(),i=(n==null?void 0:n.user)??Nt(),r=(n==null?void 0:n.loading)??!1;return e.set(lo,i),e.set(uo,r),e.set(mc,{uid:(i==null?void 0:i.uid)??"mock-user-id"}),e},rt=n=>e=>{const i=Ic(n);return D.jsx(dc,{store:i,children:D.jsx(e,{})})},_i=rt({user:Nt(),loading:!1}),es=rt({user:null,loading:!1}),ts=rt({user:null,loading:!0}),ns=n=>rt({user:Nt(n),loading:!1});try{rt.displayName="withMockAuth",rt.__docgenInfo={description:"認証状態付きJotaiプロバイダーデコレーター",displayName:"withMockAuth",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User | null"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}try{_i.displayName="withAuthenticatedUser",_i.__docgenInfo={description:"認証済みユーザー用デコレーター",displayName:"withAuthenticatedUser",props:{}}}catch{}try{es.displayName="withUnauthenticatedUser",es.__docgenInfo={description:"未認証ユーザー用デコレーター",displayName:"withUnauthenticatedUser",props:{}}}catch{}try{ts.displayName="withAuthLoading",ts.__docgenInfo={description:"認証ローディング中用デコレーター",displayName:"withAuthLoading",props:{}}}catch{}try{ns.displayName="withCustomUser",ns.__docgenInfo={description:"カスタムユーザー用デコレーター作成",displayName:"withCustomUser",props:{}}}catch{}/**
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
 */const Tc=()=>{};var is={};/**
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
 */const ho=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},Ec=function(n){const e=[];let i=0,r=0;for(;i<n.length;){const o=n[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=n[i++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=n[i++],u=n[i++],y=n[i++],w=((o&7)<<18|(c&63)<<12|(u&63)<<6|y&63)-65536;e[r++]=String.fromCharCode(55296+(w>>10)),e[r++]=String.fromCharCode(56320+(w&1023))}else{const c=n[i++],u=n[i++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|u&63)}}return e.join("")},fo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const c=n[o],u=o+1<n.length,y=u?n[o+1]:0,w=o+2<n.length,T=w?n[o+2]:0,S=c>>2,b=(c&3)<<4|y>>4;let E=(y&15)<<2|T>>6,R=T&63;w||(R=64,u||(E=64)),r.push(i[S],i[b],i[E],i[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ho(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ec(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const c=i[n.charAt(o++)],y=o<n.length?i[n.charAt(o)]:0;++o;const T=o<n.length?i[n.charAt(o)]:64;++o;const b=o<n.length?i[n.charAt(o)]:64;if(++o,c==null||y==null||T==null||b==null)throw new Ac;const E=c<<2|y>>4;if(r.push(E),T!==64){const R=y<<4&240|T>>2;if(r.push(R),b!==64){const C=T<<6&192|b;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ac extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sc=function(n){const e=ho(n);return fo.encodeByteArray(e,!0)},_n=function(n){return Sc(n).replace(/\./g,"")},po=function(n){try{return fo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cc=()=>bc().__FIREBASE_DEFAULTS__,kc=()=>{if(typeof process>"u"||typeof is>"u")return;const n=is.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&po(n[1]);return e&&JSON.parse(e)},Oi=()=>{try{return Tc()||Cc()||kc()||Rc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},go=n=>{var e,i;return(i=(e=Oi())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[n]},Pc=n=>{const e=go(n);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},mo=()=>{var n;return(n=Oi())===null||n===void 0?void 0:n.config},vo=n=>{var e;return(e=Oi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Dc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
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
 */function Rn(n){return n.endsWith(".cloudworkstations.dev")}async function yo(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Oc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},n);return[_n(JSON.stringify(i)),_n(JSON.stringify(u)),""].join(".")}const Rt={};function Nc(){const n={prod:[],emulator:[]};for(const e of Object.keys(Rt))Rt[e]?n.emulator.push(e):n.prod.push(e);return n}function Lc(n){let e=document.getElementById(n),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),i=!0),{created:i,element:e}}let rs=!1;function _o(n,e){if(typeof window>"u"||typeof document>"u"||!Rn(window.location.host)||Rt[n]===e||Rt[n]||rs)return;Rt[n]=e;function i(E){return`__firebase__banner__${E}`}const r="__firebase__banner",c=Nc().prod.length>0;function u(){const E=document.getElementById(r);E&&E.remove()}function y(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function w(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function T(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{rs=!0,u()},E}function S(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function b(){const E=Lc(r),R=i("text"),C=document.getElementById(R)||document.createElement("span"),N=i("learnmore"),O=document.getElementById(N)||document.createElement("a"),W=i("preprendIcon"),j=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const U=E.element;y(U),S(O,N);const M=T();w(j,W),U.append(j,C,O,M),document.body.appendChild(U)}c?(C.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Mc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fc(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jc(){try{return typeof indexedDB=="object"}catch{return!1}}function Vc(){return new Promise((n,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}/**
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
 */const Hc="FirebaseError";class Te extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=Hc,Object.setPrototypeOf(this,Te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mt.prototype.create)}}class Mt{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,c=this.errors[e],u=c?$c(c,r):"Error",y=`${this.serviceName}: ${u} (${o}).`;return new Te(o,y,r)}}function $c(n,e){return n.replace(zc,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const zc=/\{\$([^}]+)}/g;function Wc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $e(n,e){if(n===e)return!0;const i=Object.keys(n),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const c=n[o],u=e[o];if(ss(c)&&ss(u)){if(!$e(c,u))return!1}else if(c!==u)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function ss(n){return n!==null&&typeof n=="object"}/**
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
 */function Ut(n){const e=[];for(const[i,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gc(n,e){const i=new Kc(n,e);return i.subscribe.bind(i)}class Kc{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");qc(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=li),o.error===void 0&&(o.error=li),o.complete===void 0&&(o.complete=li);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qc(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function li(){}/**
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
 */function ct(n){return n&&n._delegate?n._delegate:n}class ze{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ve="[DEFAULT]";/**
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
 */class Jc{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new Dc;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yc(e))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ve){return this.instances.has(e)}getOptions(e=Ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,u]of this.instancesDeferred.entries()){const y=this.normalizeInstanceIdentifier(c);r===y&&u.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const u=this.instances.get(o);return u&&e(u,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xc(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ve){return this.component?this.component.multipleInstances?e:Ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xc(n){return n===Ve?void 0:n}function Yc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Zc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Jc(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const Qc={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},el=x.INFO,tl={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},nl=(n,e,...i)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=tl[e];if(o)console[o](`[${r}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ni{constructor(e){this.name=e,this._logLevel=el,this._logHandler=nl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const il=(n,e)=>e.some(i=>n instanceof i);let os,as;function rl(){return os||(os=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sl(){return as||(as=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wo=new WeakMap,wi=new WeakMap,Io=new WeakMap,ui=new WeakMap,Li=new WeakMap;function ol(n){const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("success",c),n.removeEventListener("error",u)},c=()=>{i(Ne(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",c),n.addEventListener("error",u)});return e.then(i=>{i instanceof IDBCursor&&wo.set(i,n)}).catch(()=>{}),Li.set(e,n),e}function al(n){if(wi.has(n))return;const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",u),n.removeEventListener("abort",u)},c=()=>{i(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",c),n.addEventListener("error",u),n.addEventListener("abort",u)});wi.set(n,e)}let Ii={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return wi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Io.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ne(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cl(n){Ii=n(Ii)}function ll(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=n.call(hi(this),e,...i);return Io.set(r,e.sort?e.sort():[e]),Ne(r)}:sl().includes(n)?function(...e){return n.apply(hi(this),e),Ne(wo.get(this))}:function(...e){return Ne(n.apply(hi(this),e))}}function ul(n){return typeof n=="function"?ll(n):(n instanceof IDBTransaction&&al(n),il(n,rl())?new Proxy(n,Ii):n)}function Ne(n){if(n instanceof IDBRequest)return ol(n);if(ui.has(n))return ui.get(n);const e=ul(n);return e!==n&&(ui.set(n,e),Li.set(e,n)),e}const hi=n=>Li.get(n);function hl(n,e,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const u=indexedDB.open(n,e),y=Ne(u);return r&&u.addEventListener("upgradeneeded",w=>{r(Ne(u.result),w.oldVersion,w.newVersion,Ne(u.transaction),w)}),i&&u.addEventListener("blocked",w=>i(w.oldVersion,w.newVersion,w)),y.then(w=>{c&&w.addEventListener("close",()=>c()),o&&w.addEventListener("versionchange",T=>o(T.oldVersion,T.newVersion,T))}).catch(()=>{}),y}const dl=["get","getKey","getAll","getAllKeys","count"],fl=["put","add","delete","clear"],di=new Map;function cs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(di.get(e))return di.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=fl.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||dl.includes(i)))return;const c=async function(u,...y){const w=this.transaction(u,o?"readwrite":"readonly");let T=w.store;return r&&(T=T.index(y.shift())),(await Promise.all([T[i](...y),o&&w.done]))[0]};return di.set(e,c),c}cl(n=>({...n,get:(e,i,r)=>cs(e,i)||n.get(e,i,r),has:(e,i)=>!!cs(e,i)||n.has(e,i)}));/**
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
 */class pl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(gl(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function gl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ti="@firebase/app",ls="0.13.1";/**
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
 */const _e=new Ni("@firebase/app"),ml="@firebase/app-compat",vl="@firebase/analytics-compat",yl="@firebase/analytics",_l="@firebase/app-check-compat",wl="@firebase/app-check",Il="@firebase/auth",Tl="@firebase/auth-compat",El="@firebase/database",Al="@firebase/data-connect",Sl="@firebase/database-compat",bl="@firebase/functions",Cl="@firebase/functions-compat",kl="@firebase/installations",Rl="@firebase/installations-compat",Pl="@firebase/messaging",Dl="@firebase/messaging-compat",Ol="@firebase/performance",Nl="@firebase/performance-compat",Ll="@firebase/remote-config",xl="@firebase/remote-config-compat",Ml="@firebase/storage",Ul="@firebase/storage-compat",Bl="@firebase/firestore",Fl="@firebase/ai",jl="@firebase/firestore-compat",Vl="firebase",Hl="11.9.0";/**
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
 */const Ei="[DEFAULT]",$l={[Ti]:"fire-core",[ml]:"fire-core-compat",[yl]:"fire-analytics",[vl]:"fire-analytics-compat",[wl]:"fire-app-check",[_l]:"fire-app-check-compat",[Il]:"fire-auth",[Tl]:"fire-auth-compat",[El]:"fire-rtdb",[Al]:"fire-data-connect",[Sl]:"fire-rtdb-compat",[bl]:"fire-fn",[Cl]:"fire-fn-compat",[kl]:"fire-iid",[Rl]:"fire-iid-compat",[Pl]:"fire-fcm",[Dl]:"fire-fcm-compat",[Ol]:"fire-perf",[Nl]:"fire-perf-compat",[Ll]:"fire-rc",[xl]:"fire-rc-compat",[Ml]:"fire-gcs",[Ul]:"fire-gcs-compat",[Bl]:"fire-fst",[jl]:"fire-fst-compat",[Fl]:"fire-vertex","fire-js":"fire-js",[Vl]:"fire-js-all"};/**
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
 */const wn=new Map,zl=new Map,Ai=new Map;function us(n,e){try{n.container.addComponent(e)}catch(i){_e.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function st(n){const e=n.name;if(Ai.has(e))return _e.debug(`There were multiple attempts to register component ${e}.`),!1;Ai.set(e,n);for(const i of wn.values())us(i,n);for(const i of zl.values())us(i,n);return!0}function xi(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function de(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Wl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Le=new Mt("app","Firebase",Wl);/**
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
 */class Gl{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
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
 */const lt=Hl;function To(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ei,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw Le.create("bad-app-name",{appName:String(o)});if(i||(i=mo()),!i)throw Le.create("no-options");const c=wn.get(o);if(c){if($e(i,c.options)&&$e(r,c.config))return c;throw Le.create("duplicate-app",{appName:o})}const u=new Zc(o);for(const w of Ai.values())u.addComponent(w);const y=new Gl(i,r,u);return wn.set(o,y),y}function Eo(n=Ei){const e=wn.get(n);if(!e&&n===Ei&&mo())return To();if(!e)throw Le.create("no-app",{appName:n});return e}function xe(n,e,i){var r;let o=(r=$l[n])!==null&&r!==void 0?r:n;i&&(o+=`-${i}`);const c=o.match(/\s|\//),u=e.match(/\s|\//);if(c||u){const y=[`Unable to register library "${o}" with version "${e}":`];c&&y.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&u&&y.push("and"),u&&y.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_e.warn(y.join(" "));return}st(new ze(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Kl="firebase-heartbeat-database",ql=1,Lt="firebase-heartbeat-store";let fi=null;function Ao(){return fi||(fi=hl(Kl,ql,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lt)}catch(i){console.warn(i)}}}}).catch(n=>{throw Le.create("idb-open",{originalErrorMessage:n.message})})),fi}async function Jl(n){try{const i=(await Ao()).transaction(Lt),r=await i.objectStore(Lt).get(So(n));return await i.done,r}catch(e){if(e instanceof Te)_e.warn(e.message);else{const i=Le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_e.warn(i.message)}}}async function hs(n,e){try{const r=(await Ao()).transaction(Lt,"readwrite");await r.objectStore(Lt).put(e,So(n)),await r.done}catch(i){if(i instanceof Te)_e.warn(i.message);else{const r=Le.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});_e.warn(r.message)}}}function So(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Xl=1024,Yl=30;class Zl{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new eu(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=ds();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(u=>u.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>Yl){const u=tu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_e.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=ds(),{heartbeatsToSend:r,unsentEntries:o}=Ql(this._heartbeatsCache.heartbeats),c=_n(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return _e.warn(i),""}}}function ds(){return new Date().toISOString().substring(0,10)}function Ql(n,e=Xl){const i=[];let r=n.slice();for(const o of n){const c=i.find(u=>u.agent===o.agent);if(c){if(c.dates.push(o.date),fs(i)>e){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),fs(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class eu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jc()?Vc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Jl(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return hs(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return hs(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function fs(n){return _n(JSON.stringify({version:2,heartbeats:n})).length}function tu(n){if(n.length===0)return-1;let e=0,i=n[0].date;for(let r=1;r<n.length;r++)n[r].date<i&&(i=n[r].date,e=r);return e}/**
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
 */function nu(n){st(new ze("platform-logger",e=>new pl(e),"PRIVATE")),st(new ze("heartbeat",e=>new Zl(e),"PRIVATE")),xe(Ti,ls,n),xe(Ti,ls,"esm2017"),xe("fire-js","")}nu("");var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(f,h){function d(){}d.prototype=h.prototype,f.D=h.prototype,f.prototype=new d,f.prototype.constructor=f,f.C=function(g,m,v){for(var p=Array(arguments.length-2),V=2;V<arguments.length;V++)p[V-2]=arguments[V];return h.prototype[m].apply(g,p)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(f,h,d){d||(d=0);var g=Array(16);if(typeof h=="string")for(var m=0;16>m;++m)g[m]=h.charCodeAt(d++)|h.charCodeAt(d++)<<8|h.charCodeAt(d++)<<16|h.charCodeAt(d++)<<24;else for(m=0;16>m;++m)g[m]=h[d++]|h[d++]<<8|h[d++]<<16|h[d++]<<24;h=f.g[0],d=f.g[1],m=f.g[2];var v=f.g[3],p=h+(v^d&(m^v))+g[0]+3614090360&4294967295;h=d+(p<<7&4294967295|p>>>25),p=v+(m^h&(d^m))+g[1]+3905402710&4294967295,v=h+(p<<12&4294967295|p>>>20),p=m+(d^v&(h^d))+g[2]+606105819&4294967295,m=v+(p<<17&4294967295|p>>>15),p=d+(h^m&(v^h))+g[3]+3250441966&4294967295,d=m+(p<<22&4294967295|p>>>10),p=h+(v^d&(m^v))+g[4]+4118548399&4294967295,h=d+(p<<7&4294967295|p>>>25),p=v+(m^h&(d^m))+g[5]+1200080426&4294967295,v=h+(p<<12&4294967295|p>>>20),p=m+(d^v&(h^d))+g[6]+2821735955&4294967295,m=v+(p<<17&4294967295|p>>>15),p=d+(h^m&(v^h))+g[7]+4249261313&4294967295,d=m+(p<<22&4294967295|p>>>10),p=h+(v^d&(m^v))+g[8]+1770035416&4294967295,h=d+(p<<7&4294967295|p>>>25),p=v+(m^h&(d^m))+g[9]+2336552879&4294967295,v=h+(p<<12&4294967295|p>>>20),p=m+(d^v&(h^d))+g[10]+4294925233&4294967295,m=v+(p<<17&4294967295|p>>>15),p=d+(h^m&(v^h))+g[11]+2304563134&4294967295,d=m+(p<<22&4294967295|p>>>10),p=h+(v^d&(m^v))+g[12]+1804603682&4294967295,h=d+(p<<7&4294967295|p>>>25),p=v+(m^h&(d^m))+g[13]+4254626195&4294967295,v=h+(p<<12&4294967295|p>>>20),p=m+(d^v&(h^d))+g[14]+2792965006&4294967295,m=v+(p<<17&4294967295|p>>>15),p=d+(h^m&(v^h))+g[15]+1236535329&4294967295,d=m+(p<<22&4294967295|p>>>10),p=h+(m^v&(d^m))+g[1]+4129170786&4294967295,h=d+(p<<5&4294967295|p>>>27),p=v+(d^m&(h^d))+g[6]+3225465664&4294967295,v=h+(p<<9&4294967295|p>>>23),p=m+(h^d&(v^h))+g[11]+643717713&4294967295,m=v+(p<<14&4294967295|p>>>18),p=d+(v^h&(m^v))+g[0]+3921069994&4294967295,d=m+(p<<20&4294967295|p>>>12),p=h+(m^v&(d^m))+g[5]+3593408605&4294967295,h=d+(p<<5&4294967295|p>>>27),p=v+(d^m&(h^d))+g[10]+38016083&4294967295,v=h+(p<<9&4294967295|p>>>23),p=m+(h^d&(v^h))+g[15]+3634488961&4294967295,m=v+(p<<14&4294967295|p>>>18),p=d+(v^h&(m^v))+g[4]+3889429448&4294967295,d=m+(p<<20&4294967295|p>>>12),p=h+(m^v&(d^m))+g[9]+568446438&4294967295,h=d+(p<<5&4294967295|p>>>27),p=v+(d^m&(h^d))+g[14]+3275163606&4294967295,v=h+(p<<9&4294967295|p>>>23),p=m+(h^d&(v^h))+g[3]+4107603335&4294967295,m=v+(p<<14&4294967295|p>>>18),p=d+(v^h&(m^v))+g[8]+1163531501&4294967295,d=m+(p<<20&4294967295|p>>>12),p=h+(m^v&(d^m))+g[13]+2850285829&4294967295,h=d+(p<<5&4294967295|p>>>27),p=v+(d^m&(h^d))+g[2]+4243563512&4294967295,v=h+(p<<9&4294967295|p>>>23),p=m+(h^d&(v^h))+g[7]+1735328473&4294967295,m=v+(p<<14&4294967295|p>>>18),p=d+(v^h&(m^v))+g[12]+2368359562&4294967295,d=m+(p<<20&4294967295|p>>>12),p=h+(d^m^v)+g[5]+4294588738&4294967295,h=d+(p<<4&4294967295|p>>>28),p=v+(h^d^m)+g[8]+2272392833&4294967295,v=h+(p<<11&4294967295|p>>>21),p=m+(v^h^d)+g[11]+1839030562&4294967295,m=v+(p<<16&4294967295|p>>>16),p=d+(m^v^h)+g[14]+4259657740&4294967295,d=m+(p<<23&4294967295|p>>>9),p=h+(d^m^v)+g[1]+2763975236&4294967295,h=d+(p<<4&4294967295|p>>>28),p=v+(h^d^m)+g[4]+1272893353&4294967295,v=h+(p<<11&4294967295|p>>>21),p=m+(v^h^d)+g[7]+4139469664&4294967295,m=v+(p<<16&4294967295|p>>>16),p=d+(m^v^h)+g[10]+3200236656&4294967295,d=m+(p<<23&4294967295|p>>>9),p=h+(d^m^v)+g[13]+681279174&4294967295,h=d+(p<<4&4294967295|p>>>28),p=v+(h^d^m)+g[0]+3936430074&4294967295,v=h+(p<<11&4294967295|p>>>21),p=m+(v^h^d)+g[3]+3572445317&4294967295,m=v+(p<<16&4294967295|p>>>16),p=d+(m^v^h)+g[6]+76029189&4294967295,d=m+(p<<23&4294967295|p>>>9),p=h+(d^m^v)+g[9]+3654602809&4294967295,h=d+(p<<4&4294967295|p>>>28),p=v+(h^d^m)+g[12]+3873151461&4294967295,v=h+(p<<11&4294967295|p>>>21),p=m+(v^h^d)+g[15]+530742520&4294967295,m=v+(p<<16&4294967295|p>>>16),p=d+(m^v^h)+g[2]+3299628645&4294967295,d=m+(p<<23&4294967295|p>>>9),p=h+(m^(d|~v))+g[0]+4096336452&4294967295,h=d+(p<<6&4294967295|p>>>26),p=v+(d^(h|~m))+g[7]+1126891415&4294967295,v=h+(p<<10&4294967295|p>>>22),p=m+(h^(v|~d))+g[14]+2878612391&4294967295,m=v+(p<<15&4294967295|p>>>17),p=d+(v^(m|~h))+g[5]+4237533241&4294967295,d=m+(p<<21&4294967295|p>>>11),p=h+(m^(d|~v))+g[12]+1700485571&4294967295,h=d+(p<<6&4294967295|p>>>26),p=v+(d^(h|~m))+g[3]+2399980690&4294967295,v=h+(p<<10&4294967295|p>>>22),p=m+(h^(v|~d))+g[10]+4293915773&4294967295,m=v+(p<<15&4294967295|p>>>17),p=d+(v^(m|~h))+g[1]+2240044497&4294967295,d=m+(p<<21&4294967295|p>>>11),p=h+(m^(d|~v))+g[8]+1873313359&4294967295,h=d+(p<<6&4294967295|p>>>26),p=v+(d^(h|~m))+g[15]+4264355552&4294967295,v=h+(p<<10&4294967295|p>>>22),p=m+(h^(v|~d))+g[6]+2734768916&4294967295,m=v+(p<<15&4294967295|p>>>17),p=d+(v^(m|~h))+g[13]+1309151649&4294967295,d=m+(p<<21&4294967295|p>>>11),p=h+(m^(d|~v))+g[4]+4149444226&4294967295,h=d+(p<<6&4294967295|p>>>26),p=v+(d^(h|~m))+g[11]+3174756917&4294967295,v=h+(p<<10&4294967295|p>>>22),p=m+(h^(v|~d))+g[2]+718787259&4294967295,m=v+(p<<15&4294967295|p>>>17),p=d+(v^(m|~h))+g[9]+3951481745&4294967295,f.g[0]=f.g[0]+h&4294967295,f.g[1]=f.g[1]+(m+(p<<21&4294967295|p>>>11))&4294967295,f.g[2]=f.g[2]+m&4294967295,f.g[3]=f.g[3]+v&4294967295}r.prototype.u=function(f,h){h===void 0&&(h=f.length);for(var d=h-this.blockSize,g=this.B,m=this.h,v=0;v<h;){if(m==0)for(;v<=d;)o(this,f,v),v+=this.blockSize;if(typeof f=="string"){for(;v<h;)if(g[m++]=f.charCodeAt(v++),m==this.blockSize){o(this,g),m=0;break}}else for(;v<h;)if(g[m++]=f[v++],m==this.blockSize){o(this,g),m=0;break}}this.h=m,this.o+=h},r.prototype.v=function(){var f=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);f[0]=128;for(var h=1;h<f.length-8;++h)f[h]=0;var d=8*this.o;for(h=f.length-8;h<f.length;++h)f[h]=d&255,d/=256;for(this.u(f),f=Array(16),h=d=0;4>h;++h)for(var g=0;32>g;g+=8)f[d++]=this.g[h]>>>g&255;return f};function c(f,h){var d=y;return Object.prototype.hasOwnProperty.call(d,f)?d[f]:d[f]=h(f)}function u(f,h){this.h=h;for(var d=[],g=!0,m=f.length-1;0<=m;m--){var v=f[m]|0;g&&v==h||(d[m]=v,g=!1)}this.g=d}var y={};function w(f){return-128<=f&&128>f?c(f,function(h){return new u([h|0],0>h?-1:0)}):new u([f|0],0>f?-1:0)}function T(f){if(isNaN(f)||!isFinite(f))return b;if(0>f)return O(T(-f));for(var h=[],d=1,g=0;f>=d;g++)h[g]=f/d|0,d*=4294967296;return new u(h,0)}function S(f,h){if(f.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(f.charAt(0)=="-")return O(S(f.substring(1),h));if(0<=f.indexOf("-"))throw Error('number format error: interior "-" character');for(var d=T(Math.pow(h,8)),g=b,m=0;m<f.length;m+=8){var v=Math.min(8,f.length-m),p=parseInt(f.substring(m,m+v),h);8>v?(v=T(Math.pow(h,v)),g=g.j(v).add(T(p))):(g=g.j(d),g=g.add(T(p)))}return g}var b=w(0),E=w(1),R=w(16777216);n=u.prototype,n.m=function(){if(N(this))return-O(this).m();for(var f=0,h=1,d=0;d<this.g.length;d++){var g=this.i(d);f+=(0<=g?g:4294967296+g)*h,h*=4294967296}return f},n.toString=function(f){if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(C(this))return"0";if(N(this))return"-"+O(this).toString(f);for(var h=T(Math.pow(f,6)),d=this,g="";;){var m=M(d,h).g;d=W(d,m.j(h));var v=((0<d.g.length?d.g[0]:d.h)>>>0).toString(f);if(d=m,C(d))return v+g;for(;6>v.length;)v="0"+v;g=v+g}},n.i=function(f){return 0>f?0:f<this.g.length?this.g[f]:this.h};function C(f){if(f.h!=0)return!1;for(var h=0;h<f.g.length;h++)if(f.g[h]!=0)return!1;return!0}function N(f){return f.h==-1}n.l=function(f){return f=W(this,f),N(f)?-1:C(f)?0:1};function O(f){for(var h=f.g.length,d=[],g=0;g<h;g++)d[g]=~f.g[g];return new u(d,~f.h).add(E)}n.abs=function(){return N(this)?O(this):this},n.add=function(f){for(var h=Math.max(this.g.length,f.g.length),d=[],g=0,m=0;m<=h;m++){var v=g+(this.i(m)&65535)+(f.i(m)&65535),p=(v>>>16)+(this.i(m)>>>16)+(f.i(m)>>>16);g=p>>>16,v&=65535,p&=65535,d[m]=p<<16|v}return new u(d,d[d.length-1]&-2147483648?-1:0)};function W(f,h){return f.add(O(h))}n.j=function(f){if(C(this)||C(f))return b;if(N(this))return N(f)?O(this).j(O(f)):O(O(this).j(f));if(N(f))return O(this.j(O(f)));if(0>this.l(R)&&0>f.l(R))return T(this.m()*f.m());for(var h=this.g.length+f.g.length,d=[],g=0;g<2*h;g++)d[g]=0;for(g=0;g<this.g.length;g++)for(var m=0;m<f.g.length;m++){var v=this.i(g)>>>16,p=this.i(g)&65535,V=f.i(m)>>>16,oe=f.i(m)&65535;d[2*g+2*m]+=p*oe,j(d,2*g+2*m),d[2*g+2*m+1]+=v*oe,j(d,2*g+2*m+1),d[2*g+2*m+1]+=p*V,j(d,2*g+2*m+1),d[2*g+2*m+2]+=v*V,j(d,2*g+2*m+2)}for(g=0;g<h;g++)d[g]=d[2*g+1]<<16|d[2*g];for(g=h;g<2*h;g++)d[g]=0;return new u(d,0)};function j(f,h){for(;(f[h]&65535)!=f[h];)f[h+1]+=f[h]>>>16,f[h]&=65535,h++}function U(f,h){this.g=f,this.h=h}function M(f,h){if(C(h))throw Error("division by zero");if(C(f))return new U(b,b);if(N(f))return h=M(O(f),h),new U(O(h.g),O(h.h));if(N(h))return h=M(f,O(h)),new U(O(h.g),h.h);if(30<f.g.length){if(N(f)||N(h))throw Error("slowDivide_ only works with positive integers.");for(var d=E,g=h;0>=g.l(f);)d=se(d),g=se(g);var m=G(d,1),v=G(g,1);for(g=G(g,2),d=G(d,2);!C(g);){var p=v.add(g);0>=p.l(f)&&(m=m.add(d),v=p),g=G(g,1),d=G(d,1)}return h=W(f,m.j(h)),new U(m,h)}for(m=b;0<=f.l(h);){for(d=Math.max(1,Math.floor(f.m()/h.m())),g=Math.ceil(Math.log(d)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),v=T(d),p=v.j(h);N(p)||0<p.l(f);)d-=g,v=T(d),p=v.j(h);C(v)&&(v=E),m=m.add(v),f=W(f,p)}return new U(m,f)}n.A=function(f){return M(this,f).h},n.and=function(f){for(var h=Math.max(this.g.length,f.g.length),d=[],g=0;g<h;g++)d[g]=this.i(g)&f.i(g);return new u(d,this.h&f.h)},n.or=function(f){for(var h=Math.max(this.g.length,f.g.length),d=[],g=0;g<h;g++)d[g]=this.i(g)|f.i(g);return new u(d,this.h|f.h)},n.xor=function(f){for(var h=Math.max(this.g.length,f.g.length),d=[],g=0;g<h;g++)d[g]=this.i(g)^f.i(g);return new u(d,this.h^f.h)};function se(f){for(var h=f.g.length+1,d=[],g=0;g<h;g++)d[g]=f.i(g)<<1|f.i(g-1)>>>31;return new u(d,f.h)}function G(f,h){var d=h>>5;h%=32;for(var g=f.g.length-d,m=[],v=0;v<g;v++)m[v]=0<h?f.i(v+d)>>>h|f.i(v+d+1)<<32-h:f.i(v+d);return new u(m,f.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=T,u.fromString=S,bo=u}).apply(typeof ps<"u"?ps:typeof self<"u"?self:typeof window<"u"?window:{});var an=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof an=="object"&&an];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=i(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var l=0;l<t.length-1;l++){var _=t[l];if(!(_ in a))break e;a=a[_]}t=t[t.length-1],l=a[t],s=s(l),s!=l&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,l=!1,_={next:function(){if(!l&&a<t.length){var I=a++;return{value:s(I,t[I]),done:!1}}return l=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},y=this||self;function w(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function T(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function S(t,s,a){return t.call.apply(t.bind,arguments)}function b(t,s,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var _=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(_,l),t.apply(s,_)}}return function(){return t.apply(s,arguments)}}function E(t,s,a){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:b,E.apply(null,arguments)}function R(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function C(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(l,_,I){for(var A=Array(arguments.length-2),F=2;F<arguments.length;F++)A[F-2]=arguments[F];return s.prototype[_].apply(l,A)}}function N(t){const s=t.length;if(0<s){const a=Array(s);for(let l=0;l<s;l++)a[l]=t[l];return a}return[]}function O(t,s){for(let a=1;a<arguments.length;a++){const l=arguments[a];if(w(l)){const _=t.length||0,I=l.length||0;t.length=_+I;for(let A=0;A<I;A++)t[_+A]=l[A]}else t.push(l)}}class W{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function j(t){return/^[\s\xa0]*$/.test(t)}function U(){var t=y.navigator;return t&&(t=t.userAgent)?t:""}function M(t){return M[" "](t),t}M[" "]=function(){};var se=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function G(t,s,a){for(const l in t)s.call(a,t[l],l,t)}function f(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function h(t){const s={};for(const a in t)s[a]=t[a];return s}const d="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(t,s){let a,l;for(let _=1;_<arguments.length;_++){l=arguments[_];for(a in l)t[a]=l[a];for(let I=0;I<d.length;I++)a=d[I],Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function v(t){y.setTimeout(()=>{throw t},0)}function p(){var t=Ue;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class V{constructor(){this.h=this.g=null}add(s,a){const l=oe.get();l.set(s,a),this.h?this.h.next=l:this.g=l,this.h=l}}var oe=new W(()=>new Ge,t=>t.reset());class Ge{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let B,he=!1,Ue=new V,ht=()=>{const t=y.Promise.resolve(void 0);B=()=>{t.then(ha)}};var ha=()=>{for(var t;t=p();){try{t.h.call(t.g)}catch(a){v(a)}var s=oe;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}he=!1};function Ee(){this.s=this.s,this.C=this.C}Ee.prototype.s=!1,Ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var da=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};y.addEventListener("test",a,s),y.removeEventListener("test",a,s)}catch{}return t}();function dt(t,s){if(J.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(se){e:{try{M(s.nodeName);var _=!0;break e}catch{}_=!1}_||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:fa[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&dt.aa.h.call(this)}}C(dt,J);var fa={2:"touch",3:"pen",4:"mouse"};dt.prototype.h=function(){dt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ht="closure_listenable_"+(1e6*Math.random()|0),pa=0;function ga(t,s,a,l,_){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.ha=_,this.key=++pa,this.da=this.fa=!1}function $t(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function zt(t){this.src=t,this.g={},this.h=0}zt.prototype.add=function(t,s,a,l,_){var I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);var A=Nn(t,s,l,_);return-1<A?(s=t[A],a||(s.fa=!1)):(s=new ga(s,this.src,I,!!l,_),s.fa=a,t.push(s)),s};function On(t,s){var a=s.type;if(a in t.g){var l=t.g[a],_=Array.prototype.indexOf.call(l,s,void 0),I;(I=0<=_)&&Array.prototype.splice.call(l,_,1),I&&($t(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function Nn(t,s,a,l){for(var _=0;_<t.length;++_){var I=t[_];if(!I.da&&I.listener==s&&I.capture==!!a&&I.ha==l)return _}return-1}var Ln="closure_lm_"+(1e6*Math.random()|0),xn={};function qi(t,s,a,l,_){if(Array.isArray(s)){for(var I=0;I<s.length;I++)qi(t,s[I],a,l,_);return null}return a=Yi(a),t&&t[Ht]?t.K(s,a,T(l)?!!l.capture:!1,_):ma(t,s,a,!1,l,_)}function ma(t,s,a,l,_,I){if(!s)throw Error("Invalid event type");var A=T(_)?!!_.capture:!!_,F=Un(t);if(F||(t[Ln]=F=new zt(t)),a=F.add(s,a,l,A,I),a.proxy)return a;if(l=va(),a.proxy=l,l.src=t,l.listener=a,t.addEventListener)da||(_=A),_===void 0&&(_=!1),t.addEventListener(s.toString(),l,_);else if(t.attachEvent)t.attachEvent(Xi(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function va(){function t(a){return s.call(t.src,t.listener,a)}const s=ya;return t}function Ji(t,s,a,l,_){if(Array.isArray(s))for(var I=0;I<s.length;I++)Ji(t,s[I],a,l,_);else l=T(l)?!!l.capture:!!l,a=Yi(a),t&&t[Ht]?(t=t.i,s=String(s).toString(),s in t.g&&(I=t.g[s],a=Nn(I,a,l,_),-1<a&&($t(I[a]),Array.prototype.splice.call(I,a,1),I.length==0&&(delete t.g[s],t.h--)))):t&&(t=Un(t))&&(s=t.g[s.toString()],t=-1,s&&(t=Nn(s,a,l,_)),(a=-1<t?s[t]:null)&&Mn(a))}function Mn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Ht])On(s.i,t);else{var a=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(a,l,t.capture):s.detachEvent?s.detachEvent(Xi(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=Un(s))?(On(a,t),a.h==0&&(a.src=null,s[Ln]=null)):$t(t)}}}function Xi(t){return t in xn?xn[t]:xn[t]="on"+t}function ya(t,s){if(t.da)t=!0;else{s=new dt(s,this);var a=t.listener,l=t.ha||t.src;t.fa&&Mn(t),t=a.call(l,s)}return t}function Un(t){return t=t[Ln],t instanceof zt?t:null}var Bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yi(t){return typeof t=="function"?t:(t[Bn]||(t[Bn]=function(s){return t.handleEvent(s)}),t[Bn])}function X(){Ee.call(this),this.i=new zt(this),this.M=this,this.F=null}C(X,Ee),X.prototype[Ht]=!0,X.prototype.removeEventListener=function(t,s,a,l){Ji(this,t,s,a,l)};function Q(t,s){var a,l=t.F;if(l)for(a=[];l;l=l.F)a.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new J(s,t);else if(s instanceof J)s.target=s.target||t;else{var _=s;s=new J(l,t),g(s,_)}if(_=!0,a)for(var I=a.length-1;0<=I;I--){var A=s.g=a[I];_=Wt(A,l,!0,s)&&_}if(A=s.g=t,_=Wt(A,l,!0,s)&&_,_=Wt(A,l,!1,s)&&_,a)for(I=0;I<a.length;I++)A=s.g=a[I],_=Wt(A,l,!1,s)&&_}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],l=0;l<a.length;l++)$t(a[l]);delete t.g[s],t.h--}}this.F=null},X.prototype.K=function(t,s,a,l){return this.i.add(String(t),s,!1,a,l)},X.prototype.L=function(t,s,a,l){return this.i.add(String(t),s,!0,a,l)};function Wt(t,s,a,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var _=!0,I=0;I<s.length;++I){var A=s[I];if(A&&!A.da&&A.capture==a){var F=A.listener,K=A.ha||A.src;A.fa&&On(t.i,A),_=F.call(K,l)!==!1&&_}}return _&&!l.defaultPrevented}function Zi(t,s,a){if(typeof t=="function")a&&(t=E(t,a));else if(t&&typeof t.handleEvent=="function")t=E(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:y.setTimeout(t,s||0)}function Qi(t){t.g=Zi(()=>{t.g=null,t.i&&(t.i=!1,Qi(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class _a extends Ee{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Qi(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(t){Ee.call(this),this.h=t,this.g={}}C(ft,Ee);var er=[];function tr(t){G(t.g,function(s,a){this.g.hasOwnProperty(a)&&Mn(s)},t),t.g={}}ft.prototype.N=function(){ft.aa.N.call(this),tr(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fn=y.JSON.stringify,wa=y.JSON.parse,Ia=class{stringify(t){return y.JSON.stringify(t,void 0)}parse(t){return y.JSON.parse(t,void 0)}};function jn(){}jn.prototype.h=null;function nr(t){return t.h||(t.h=t.i())}function Ta(){}var pt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vn(){J.call(this,"d")}C(Vn,J);function Hn(){J.call(this,"c")}C(Hn,J);var Ke={},ir=null;function $n(){return ir=ir||new X}Ke.La="serverreachability";function rr(t){J.call(this,Ke.La,t)}C(rr,J);function gt(t){const s=$n();Q(s,new rr(s))}Ke.STAT_EVENT="statevent";function sr(t,s){J.call(this,Ke.STAT_EVENT,t),this.stat=s}C(sr,J);function ee(t){const s=$n();Q(s,new sr(s,t))}Ke.Ma="timingevent";function or(t,s){J.call(this,Ke.Ma,t),this.size=s}C(or,J);function mt(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){t()},s)}function vt(){this.g=!0}vt.prototype.xa=function(){this.g=!1};function Ea(t,s,a,l,_,I){t.info(function(){if(t.g)if(I)for(var A="",F=I.split("&"),K=0;K<F.length;K++){var L=F[K].split("=");if(1<L.length){var Y=L[0];L=L[1];var Z=Y.split("_");A=2<=Z.length&&Z[1]=="type"?A+(Y+"="+L+"&"):A+(Y+"=redacted&")}}else A=null;else A=I;return"XMLHTTP REQ ("+l+") [attempt "+_+"]: "+s+`
`+a+`
`+A})}function Aa(t,s,a,l,_,I,A){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+_+"]: "+s+`
`+a+`
`+I+" "+A})}function qe(t,s,a,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+ba(t,a)+(l?" "+l:"")})}function Sa(t,s){t.info(function(){return"TIMEOUT: "+s})}vt.prototype.info=function(){};function ba(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var l=a[t];if(!(2>l.length)){var _=l[1];if(Array.isArray(_)&&!(1>_.length)){var I=_[0];if(I!="noop"&&I!="stop"&&I!="close")for(var A=1;A<_.length;A++)_[A]=""}}}}return Fn(a)}catch{return s}}var zn={NO_ERROR:0,TIMEOUT:8},Ca={},Wn;function Gt(){}C(Gt,jn),Gt.prototype.g=function(){return new XMLHttpRequest},Gt.prototype.i=function(){return{}},Wn=new Gt;function Ae(t,s,a,l){this.j=t,this.i=s,this.l=a,this.R=l||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ar}function ar(){this.i=null,this.g="",this.h=!1}var cr={},Gn={};function Kn(t,s,a){t.L=1,t.v=Xt(ge(s)),t.m=a,t.P=!0,lr(t,null)}function lr(t,s){t.F=Date.now(),Kt(t),t.A=ge(t.v);var a=t.A,l=t.R;Array.isArray(l)||(l=[String(l)]),Er(a.i,"t",l),t.C=0,a=t.j.J,t.h=new ar,t.g=Vr(t.j,a?s:null,!t.m),0<t.O&&(t.M=new _a(E(t.Y,t,t.g),t.O)),s=t.U,a=t.g,l=t.ca;var _="readystatechange";Array.isArray(_)||(_&&(er[0]=_.toString()),_=er);for(var I=0;I<_.length;I++){var A=qi(a,_[I],l||s.handleEvent,!1,s.h||s);if(!A)break;s.g[A.key]=A}s=t.H?h(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),gt(),Ea(t.i,t.u,t.A,t.l,t.R,t.m)}Ae.prototype.ca=function(t){t=t.target;const s=this.M;s&&me(t)==3?s.j():this.Y(t)},Ae.prototype.Y=function(t){try{if(t==this.g)e:{const Z=me(this.g);var s=this.g.Ba();const Ye=this.g.Z();if(!(3>Z)&&(Z!=3||this.g&&(this.h.h||this.g.oa()||Pr(this.g)))){this.J||Z!=4||s==7||(s==8||0>=Ye?gt(3):gt(2)),qn(this);var a=this.g.Z();this.X=a;t:if(ur(this)){var l=Pr(this.g);t="";var _=l.length,I=me(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Be(this),yt(this);var A="";break t}this.h.i=new y.TextDecoder}for(s=0;s<_;s++)this.h.h=!0,t+=this.h.i.decode(l[s],{stream:!(I&&s==_-1)});l.length=0,this.h.g+=t,this.C=0,A=this.h.g}else A=this.g.oa();if(this.o=a==200,Aa(this.i,this.u,this.A,this.l,this.R,Z,a),this.o){if(this.T&&!this.K){t:{if(this.g){var F,K=this.g;if((F=K.g?K.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(F)){var L=F;break t}}L=null}if(a=L)qe(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jn(this,a);else{this.o=!1,this.s=3,ee(12),Be(this),yt(this);break e}}if(this.P){a=!0;let ce;for(;!this.J&&this.C<A.length;)if(ce=ka(this,A),ce==Gn){Z==4&&(this.s=4,ee(14),a=!1),qe(this.i,this.l,null,"[Incomplete Response]");break}else if(ce==cr){this.s=4,ee(15),qe(this.i,this.l,A,"[Invalid Chunk]"),a=!1;break}else qe(this.i,this.l,ce,null),Jn(this,ce);if(ur(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||A.length!=0||this.h.h||(this.s=1,ee(16),a=!1),this.o=this.o&&a,!a)qe(this.i,this.l,A,"[Invalid Chunked Response]"),Be(this),yt(this);else if(0<A.length&&!this.W){this.W=!0;var Y=this.j;Y.g==this&&Y.ba&&!Y.M&&(Y.j.info("Great, no buffering proxy detected. Bytes received: "+A.length),ti(Y),Y.M=!0,ee(11))}}else qe(this.i,this.l,A,null),Jn(this,A);Z==4&&Be(this),this.o&&!this.J&&(Z==4?Ur(this.j,this):(this.o=!1,Kt(this)))}else Wa(this.g),a==400&&0<A.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),Be(this),yt(this)}}}catch{}finally{}};function ur(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function ka(t,s){var a=t.C,l=s.indexOf(`
`,a);return l==-1?Gn:(a=Number(s.substring(a,l)),isNaN(a)?cr:(l+=1,l+a>s.length?Gn:(s=s.slice(l,l+a),t.C=l+a,s)))}Ae.prototype.cancel=function(){this.J=!0,Be(this)};function Kt(t){t.S=Date.now()+t.I,hr(t,t.I)}function hr(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mt(E(t.ba,t),s)}function qn(t){t.B&&(y.clearTimeout(t.B),t.B=null)}Ae.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Sa(this.i,this.A),this.L!=2&&(gt(),ee(17)),Be(this),this.s=2,yt(this)):hr(this,this.S-t)};function yt(t){t.j.G==0||t.J||Ur(t.j,t)}function Be(t){qn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,tr(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Jn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Xn(a.h,t))){if(!t.K&&Xn(a.h,t)&&a.G==3){try{var l=a.Da.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var _=l;if(_[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)nn(a),en(a);else break e;ei(a),ee(18)}}else a.za=_[1],0<a.za-a.T&&37500>_[2]&&a.F&&a.v==0&&!a.C&&(a.C=mt(E(a.Za,a),6e3));if(1>=pr(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else je(a,11)}else if((t.K||a.g==t)&&nn(a),!j(s))for(_=a.Da.g.parse(s),s=0;s<_.length;s++){let L=_[s];if(a.T=L[0],L=L[1],a.G==2)if(L[0]=="c"){a.K=L[1],a.ia=L[2];const Y=L[3];Y!=null&&(a.la=Y,a.j.info("VER="+a.la));const Z=L[4];Z!=null&&(a.Aa=Z,a.j.info("SVER="+a.Aa));const Ye=L[5];Ye!=null&&typeof Ye=="number"&&0<Ye&&(l=1.5*Ye,a.L=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const ce=t.g;if(ce){const rn=ce.g?ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rn){var I=l.h;I.g||rn.indexOf("spdy")==-1&&rn.indexOf("quic")==-1&&rn.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Yn(I,I.h),I.h=null))}if(l.D){const ni=ce.g?ce.g.getResponseHeader("X-HTTP-Session-Id"):null;ni&&(l.ya=ni,H(l.I,l.D,ni))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),l=a;var A=t;if(l.qa=jr(l,l.J?l.ia:null,l.W),A.K){gr(l.h,A);var F=A,K=l.L;K&&(F.I=K),F.B&&(qn(F),Kt(F)),l.g=A}else xr(l);0<a.i.length&&tn(a)}else L[0]!="stop"&&L[0]!="close"||je(a,7);else a.G==3&&(L[0]=="stop"||L[0]=="close"?L[0]=="stop"?je(a,7):Qn(a):L[0]!="noop"&&a.l&&a.l.ta(L),a.v=0)}}gt(4)}catch{}}var Ra=class{constructor(t,s){this.g=t,this.map=s}};function dr(t){this.l=t||10,y.PerformanceNavigationTiming?(t=y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(y.chrome&&y.chrome.loadTimes&&y.chrome.loadTimes()&&y.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fr(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function pr(t){return t.h?1:t.g?t.g.size:0}function Xn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Yn(t,s){t.g?t.g.add(s):t.h=s}function gr(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}dr.prototype.cancel=function(){if(this.i=mr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mr(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return N(t.i)}function Pa(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(w(t)){for(var s=[],a=t.length,l=0;l<a;l++)s.push(t[l]);return s}s=[],a=0;for(l in t)s[a++]=t[l];return s}function Da(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(w(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const l in t)s[a++]=l;return s}}}function vr(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(w(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=Da(t),l=Pa(t),_=l.length,I=0;I<_;I++)s.call(void 0,l[I],a&&a[I],t)}var yr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oa(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var l=t[a].indexOf("="),_=null;if(0<=l){var I=t[a].substring(0,l);_=t[a].substring(l+1)}else I=t[a];s(I,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function Fe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Fe){this.h=t.h,qt(this,t.j),this.o=t.o,this.g=t.g,Jt(this,t.s),this.l=t.l;var s=t.i,a=new It;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),_r(this,a),this.m=t.m}else t&&(s=String(t).match(yr))?(this.h=!1,qt(this,s[1]||"",!0),this.o=_t(s[2]||""),this.g=_t(s[3]||"",!0),Jt(this,s[4]),this.l=_t(s[5]||"",!0),_r(this,s[6]||"",!0),this.m=_t(s[7]||"")):(this.h=!1,this.i=new It(null,this.h))}Fe.prototype.toString=function(){var t=[],s=this.j;s&&t.push(wt(s,wr,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(wt(s,wr,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(wt(a,a.charAt(0)=="/"?xa:La,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",wt(a,Ua)),t.join("")};function ge(t){return new Fe(t)}function qt(t,s,a){t.j=a?_t(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Jt(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function _r(t,s,a){s instanceof It?(t.i=s,Ba(t.i,t.h)):(a||(s=wt(s,Ma)),t.i=new It(s,t.h))}function H(t,s,a){t.i.set(s,a)}function Xt(t){return H(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _t(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,Na),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Na(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wr=/[#\/\?@]/g,La=/[#\?:]/g,xa=/[#\?]/g,Ma=/[#\?@]/g,Ua=/#/g;function It(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Se(t){t.g||(t.g=new Map,t.h=0,t.i&&Oa(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}n=It.prototype,n.add=function(t,s){Se(this),this.i=null,t=Je(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function Ir(t,s){Se(t),s=Je(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function Tr(t,s){return Se(t),s=Je(t,s),t.g.has(s)}n.forEach=function(t,s){Se(this),this.g.forEach(function(a,l){a.forEach(function(_){t.call(s,_,l,this)},this)},this)},n.na=function(){Se(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let l=0;l<s.length;l++){const _=t[l];for(let I=0;I<_.length;I++)a.push(s[l])}return a},n.V=function(t){Se(this);let s=[];if(typeof t=="string")Tr(this,t)&&(s=s.concat(this.g.get(Je(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},n.set=function(t,s){return Se(this),this.i=null,t=Je(this,t),Tr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},n.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function Er(t,s,a){Ir(t,s),0<a.length&&(t.i=null,t.g.set(Je(t,s),N(a)),t.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var l=s[a];const I=encodeURIComponent(String(l)),A=this.V(l);for(l=0;l<A.length;l++){var _=I;A[l]!==""&&(_+="="+encodeURIComponent(String(A[l]))),t.push(_)}}return this.i=t.join("&")};function Je(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Ba(t,s){s&&!t.j&&(Se(t),t.i=null,t.g.forEach(function(a,l){var _=l.toLowerCase();l!=_&&(Ir(this,l),Er(this,_,a))},t)),t.j=s}function Fa(t,s){const a=new vt;if(y.Image){const l=new Image;l.onload=R(be,a,"TestLoadImage: loaded",!0,s,l),l.onerror=R(be,a,"TestLoadImage: error",!1,s,l),l.onabort=R(be,a,"TestLoadImage: abort",!1,s,l),l.ontimeout=R(be,a,"TestLoadImage: timeout",!1,s,l),y.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function ja(t,s){const a=new vt,l=new AbortController,_=setTimeout(()=>{l.abort(),be(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(I=>{clearTimeout(_),I.ok?be(a,"TestPingServer: ok",!0,s):be(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(_),be(a,"TestPingServer: error",!1,s)})}function be(t,s,a,l,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),l(a)}catch{}}function Va(){this.g=new Ia}function Ha(t,s,a){const l=a||"";try{vr(t,function(_,I){let A=_;T(_)&&(A=Fn(_)),s.push(l+I+"="+encodeURIComponent(A))})}catch(_){throw s.push(l+"type="+encodeURIComponent("_badmap")),_}}function Yt(t){this.l=t.Ub||null,this.j=t.eb||!1}C(Yt,jn),Yt.prototype.g=function(){return new Zt(this.l,this.j)},Yt.prototype.i=function(t){return function(){return t}}({});function Zt(t,s){X.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Zt,X),n=Zt.prototype,n.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,Et(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||y).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Et(this)),this.g&&(this.readyState=3,Et(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ar(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ar(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?Tt(this):Et(this),this.readyState==3&&Ar(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,Tt(this))},n.Qa=function(t){this.g&&(this.response=t,Tt(this))},n.ga=function(){this.g&&Tt(this)};function Tt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Et(t)}n.setRequestHeader=function(t,s){this.u.append(t,s)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function Et(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Sr(t){let s="";return G(t,function(a,l){s+=l,s+=":",s+=a,s+=`\r
`}),s}function Zn(t,s,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=Sr(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):H(t,s,a))}function $(t){X.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C($,X);var $a=/^https?$/i,za=["POST","PUT"];n=$.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,s,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wn.g(),this.v=this.o?nr(this.o):nr(Wn),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(I){br(this,I);return}if(t=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var _ in l)a.set(_,l[_]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const I of l.keys())a.set(I,l.get(I));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),_=y.FormData&&t instanceof y.FormData,!(0<=Array.prototype.indexOf.call(za,s,void 0))||l||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,A]of a)this.g.setRequestHeader(I,A);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rr(this),this.u=!0,this.g.send(t),this.u=!1}catch(I){br(this,I)}};function br(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,Cr(t),Qt(t)}function Cr(t){t.A||(t.A=!0,Q(t,"complete"),Q(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Q(this,"complete"),Q(this,"abort"),Qt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qt(this,!0)),$.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?kr(this):this.bb())},n.bb=function(){kr(this)};function kr(t){if(t.h&&typeof u<"u"&&(!t.v[1]||me(t)!=4||t.Z()!=2)){if(t.u&&me(t)==4)Zi(t.Ea,0,t);else if(Q(t,"readystatechange"),me(t)==4){t.h=!1;try{const A=t.Z();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var l;if(l=A===0){var _=String(t.D).match(yr)[1]||null;!_&&y.self&&y.self.location&&(_=y.self.location.protocol.slice(0,-1)),l=!$a.test(_?_.toLowerCase():"")}a=l}if(a)Q(t,"complete"),Q(t,"success");else{t.m=6;try{var I=2<me(t)?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.Z()+"]",Cr(t)}}finally{Qt(t)}}}}function Qt(t,s){if(t.g){Rr(t);const a=t.g,l=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||Q(t,"ready");try{a.onreadystatechange=l}catch{}}}function Rr(t){t.I&&(y.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function me(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<me(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),wa(s)}};function Pr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Wa(t){const s={};t=(t.g&&2<=me(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(j(t[l]))continue;var a=m(t[l]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=s[_]||[];s[_]=I,I.push(a)}f(s,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function At(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function Dr(t){this.Aa=0,this.i=[],this.j=new vt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=At("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=At("baseRetryDelayMs",5e3,t),this.cb=At("retryDelaySeedMs",1e4,t),this.Wa=At("forwardChannelMaxRetries",2,t),this.wa=At("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new dr(t&&t.concurrentRequestLimit),this.Da=new Va,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Dr.prototype,n.la=8,n.G=1,n.connect=function(t,s,a,l){ee(0),this.W=t,this.H=s||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.I=jr(this,null,this.W),tn(this)};function Qn(t){if(Or(t),t.G==3){var s=t.U++,a=ge(t.I);if(H(a,"SID",t.K),H(a,"RID",s),H(a,"TYPE","terminate"),St(t,a),s=new Ae(t,t.j,s),s.L=2,s.v=Xt(ge(a)),a=!1,y.navigator&&y.navigator.sendBeacon)try{a=y.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&y.Image&&(new Image().src=s.v,a=!0),a||(s.g=Vr(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Kt(s)}Fr(t)}function en(t){t.g&&(ti(t),t.g.cancel(),t.g=null)}function Or(t){en(t),t.u&&(y.clearTimeout(t.u),t.u=null),nn(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&y.clearTimeout(t.s),t.s=null)}function tn(t){if(!fr(t.h)&&!t.s){t.s=!0;var s=t.Ga;B||ht(),he||(B(),he=!0),Ue.add(s,t),t.B=0}}function Ga(t,s){return pr(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=mt(E(t.Ga,t,s),Br(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const _=new Ae(this,this.j,t);let I=this.o;if(this.S&&(I?(I=h(I),g(I,this.S)):I=this.S),this.m!==null||this.O||(_.H=I,I=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=Lr(this,_,s),a=ge(this.I),H(a,"RID",t),H(a,"CVER",22),this.D&&H(a,"X-HTTP-Session-Id",this.D),St(this,a),I&&(this.O?s="headers="+encodeURIComponent(String(Sr(I)))+"&"+s:this.m&&Zn(a,this.m,I)),Yn(this.h,_),this.Ua&&H(a,"TYPE","init"),this.P?(H(a,"$req",s),H(a,"SID","null"),_.T=!0,Kn(_,a,null)):Kn(_,a,s),this.G=2}}else this.G==3&&(t?Nr(this,t):this.i.length==0||fr(this.h)||Nr(this))};function Nr(t,s){var a;s?a=s.l:a=t.U++;const l=ge(t.I);H(l,"SID",t.K),H(l,"RID",a),H(l,"AID",t.T),St(t,l),t.m&&t.o&&Zn(l,t.m,t.o),a=new Ae(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=Lr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Yn(t.h,a),Kn(a,l,s)}function St(t,s){t.H&&G(t.H,function(a,l){H(s,l,a)}),t.l&&vr({},function(a,l){H(s,l,a)})}function Lr(t,s,a){a=Math.min(t.i.length,a);var l=t.l?E(t.l.Na,t.l,t):null;e:{var _=t.i;let I=-1;for(;;){const A=["count="+a];I==-1?0<a?(I=_[0].g,A.push("ofs="+I)):I=0:A.push("ofs="+I);let F=!0;for(let K=0;K<a;K++){let L=_[K].g;const Y=_[K].map;if(L-=I,0>L)I=Math.max(0,_[K].g-100),F=!1;else try{Ha(Y,A,"req"+L+"_")}catch{l&&l(Y)}}if(F){l=A.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,l}function xr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;B||ht(),he||(B(),he=!0),Ue.add(s,t),t.v=0}}function ei(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=mt(E(t.Fa,t),Br(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,Mr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=mt(E(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),en(this),Mr(this))};function ti(t){t.A!=null&&(y.clearTimeout(t.A),t.A=null)}function Mr(t){t.g=new Ae(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=ge(t.qa);H(s,"RID","rpc"),H(s,"SID",t.K),H(s,"AID",t.T),H(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&H(s,"TO",t.ja),H(s,"TYPE","xmlhttp"),St(t,s),t.m&&t.o&&Zn(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=Xt(ge(s)),a.m=null,a.P=!0,lr(a,t)}n.Za=function(){this.C!=null&&(this.C=null,en(this),ei(this),ee(19))};function nn(t){t.C!=null&&(y.clearTimeout(t.C),t.C=null)}function Ur(t,s){var a=null;if(t.g==s){nn(t),ti(t),t.g=null;var l=2}else if(Xn(t.h,s))a=s.D,gr(t.h,s),l=1;else return;if(t.G!=0){if(s.o)if(l==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var _=t.B;l=$n(),Q(l,new or(l,a)),tn(t)}else xr(t);else if(_=s.s,_==3||_==0&&0<s.X||!(l==1&&Ga(t,s)||l==2&&ei(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),_){case 1:je(t,5);break;case 4:je(t,10);break;case 3:je(t,6);break;default:je(t,2)}}}function Br(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function je(t,s){if(t.j.info("Error code "+s),s==2){var a=E(t.fb,t),l=t.Xa;const _=!l;l=new Fe(l||"//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||qt(l,"https"),Xt(l),_?Fa(l.toString(),a):ja(l.toString(),a)}else ee(2);t.G=0,t.l&&t.l.sa(s),Fr(t),Or(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function Fr(t){if(t.G=0,t.ka=[],t.l){const s=mr(t.h);(s.length!=0||t.i.length!=0)&&(O(t.ka,s),O(t.ka,t.i),t.h.i.length=0,N(t.i),t.i.length=0),t.l.ra()}}function jr(t,s,a){var l=a instanceof Fe?ge(a):new Fe(a);if(l.g!="")s&&(l.g=s+"."+l.g),Jt(l,l.s);else{var _=y.location;l=_.protocol,s=s?s+"."+_.hostname:_.hostname,_=+_.port;var I=new Fe(null);l&&qt(I,l),s&&(I.g=s),_&&Jt(I,_),a&&(I.l=a),l=I}return a=t.D,s=t.ya,a&&s&&H(l,a,s),H(l,"VER",t.la),St(t,l),l}function Vr(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new $(new Yt({eb:a})):new $(t.pa),s.Ha(t.J),s}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hr(){}n=Hr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ae(t,s){X.call(this),this.g=new Dr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!j(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!j(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new Xe(this)}C(ae,X),ae.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ae.prototype.close=function(){Qn(this.g)},ae.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=Fn(t),t=a);s.i.push(new Ra(s.Ya++,t)),s.G==3&&tn(s)},ae.prototype.N=function(){this.g.l=null,delete this.j,Qn(this.g),delete this.g,ae.aa.N.call(this)};function $r(t){Vn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}C($r,Vn);function zr(){Hn.call(this),this.status=1}C(zr,Hn);function Xe(t){this.g=t}C(Xe,Hr),Xe.prototype.ua=function(){Q(this.g,"a")},Xe.prototype.ta=function(t){Q(this.g,new $r(t))},Xe.prototype.sa=function(t){Q(this.g,new zr)},Xe.prototype.ra=function(){Q(this.g,"b")},ae.prototype.send=ae.prototype.o,ae.prototype.open=ae.prototype.m,ae.prototype.close=ae.prototype.close,zn.NO_ERROR=0,zn.TIMEOUT=8,zn.HTTP_ERROR=6,Ca.COMPLETE="complete",Ta.EventType=pt,pt.OPEN="a",pt.CLOSE="b",pt.ERROR="c",pt.MESSAGE="d",X.prototype.listen=X.prototype.K,$.prototype.listenOnce=$.prototype.L,$.prototype.getLastError=$.prototype.Ka,$.prototype.getLastErrorCode=$.prototype.Ba,$.prototype.getStatus=$.prototype.Z,$.prototype.getResponseJson=$.prototype.Oa,$.prototype.getResponseText=$.prototype.oa,$.prototype.send=$.prototype.ea,$.prototype.setWithCredentials=$.prototype.Ha}).apply(typeof an<"u"?an:typeof self<"u"?self:typeof window<"u"?window:{});const gs="@firebase/firestore",ms="4.7.17";/**
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
 */class te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
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
 */let Bt="11.9.0";/**
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
 */const ot=new Ni("@firebase/firestore");function le(n,...e){if(ot.logLevel<=x.DEBUG){const i=e.map(Mi);ot.debug(`Firestore (${Bt}): ${n}`,...i)}}function Co(n,...e){if(ot.logLevel<=x.ERROR){const i=e.map(Mi);ot.error(`Firestore (${Bt}): ${n}`,...i)}}function iu(n,...e){if(ot.logLevel<=x.WARN){const i=e.map(Mi);ot.warn(`Firestore (${Bt}): ${n}`,...i)}}function Mi(n){if(typeof n=="string")return n;try{/**
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
*/return function(i){return JSON.stringify(i)}(n)}catch{return n}}/**
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
 */function ko(n,e,i){let r="Unexpected state";typeof e=="string"?r=e:i=e,Ro(n,r,i)}function Ro(n,e,i){let r=`FIRESTORE (${Bt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(i!==void 0)try{r+=" CONTEXT: "+JSON.stringify(i)}catch{r+=" CONTEXT: "+i}throw Co(r),new Error(r)}function Pt(n,e,i,r){let o="Unexpected state";typeof i=="string"?o=i:r=i,n||Ro(e,o,r)}/**
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
 */const ie={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class re extends Te{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dt{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class Po{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ru{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(te.UNAUTHENTICATED))}shutdown(){}}class su{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class ou{constructor(e){this.t=e,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Pt(this.o===void 0,42304);let r=this.i;const o=w=>this.i!==r?(r=this.i,i(w)):Promise.resolve();let c=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Dt,e.enqueueRetryable(()=>o(this.currentUser))};const u=()=>{const w=c;e.enqueueRetryable(async()=>{await w.promise,await o(this.currentUser)})},y=w=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=w,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(w=>y(w)),setTimeout(()=>{if(!this.auth){const w=this.t.getImmediate({optional:!0});w?y(w):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Dt)}},0),u()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pt(typeof r.accessToken=="string",31837,{l:r}),new Po(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pt(e===null||typeof e=="string",2055,{h:e}),new te(e)}}class au{constructor(e,i,r){this.P=e,this.T=i,this.I=r,this.type="FirstParty",this.user=te.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cu{constructor(e,i,r){this.P=e,this.T=i,this.I=r}getToken(){return Promise.resolve(new au(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable(()=>i(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lu{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,de(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){Pt(this.o===void 0,3512);const r=c=>{c.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const u=c.token!==this.m;return this.m=c.token,le("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vs(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(Pt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new vs(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function uu(n){return n.name==="IndexedDbTransactionError"}const Si="(default)";class In{constructor(e,i){this.projectId=e,this.database=i||Si}static empty(){return new In("","")}get isDefaultDatabase(){return this.database===Si}isEqual(e){return e instanceof In&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var ys,P;(P=ys||(ys={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new bo([4294967295,4294967295],0);/**
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
 */const hu=41943040;/**
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
 */const du=1048576;function pi(){return typeof document<"u"?document:null}/**
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
 */class fu{constructor(e,i,r=1e3,o=1.5,c=6e4){this.xi=e,this.timerId=i,this.A_=r,this.R_=o,this.V_=c,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const i=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),o=Math.max(0,i-r);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */class Ui{constructor(e,i,r,o,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,o,c){const u=Date.now()+r,y=new Ui(e,i,u,o,c);return y.start(r),y}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var _s,ws;(ws=_s||(_s={})).xa="default",ws.Cache="cache";/**
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
 */function pu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Is=new Map;function gu(n,e,i,r){if(e===!0&&r===!0)throw new re(ie.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function mu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ko(12329,{type:typeof n})}function vu(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=mu(n);throw new re(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return n}/**
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
 */const Do="firestore.googleapis.com",Ts=!0;class Es{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Do,this.ssl=Ts}else this.host=e.host,this.ssl=(i=e.ssl)!==null&&i!==void 0?i:Ts;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<du)throw new re(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oo{constructor(e,i,r,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Es({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Es(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ru;switch(r.type){case"firstParty":return new cu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=Is.get(i);r&&(le("ComponentProvider","Removing Datastore"),Is.delete(i),r.terminate())}(this),Promise.resolve()}}function yu(n,e,i,r={}){var o;n=vu(n,Oo);const c=Rn(e),u=n._getSettings(),y=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),w=`${e}:${i}`;c&&(yo(`https://${w}`),_o("Firestore",!0)),u.host!==Do&&u.host!==w&&iu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const T=Object.assign(Object.assign({},u),{host:w,ssl:c,emulatorOptions:r});if(!$e(T,y)&&(n._setSettings(T),r.mockUserToken)){let S,b;if(typeof r.mockUserToken=="string")S=r.mockUserToken,b=te.MOCK_USER;else{S=Oc(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new re(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new te(E)}n._authCredentials=new su(new Po(S,b))}}/**
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
 */const As="AsyncQueue";class Ss{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new fu(this,"async_queue_retry"),this.rc=()=>{const r=pi();r&&le(As,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const i=pi();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const i=pi();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const i=new Dt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!uu(e))throw e;le(As,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const i=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,Co("INTERNAL UNHANDLED ERROR: ",bs(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=i,i}enqueueAfterDelay(e,i,r){this.oc(),this.nc.indexOf(e)>-1&&(i=0);const o=Ui.createAndSchedule(this,e,i,r,c=>this.uc(c));return this.Zu.push(o),o}oc(){this.Xu&&ko(47125,{cc:bs(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const i of this.Zu)if(i.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this.Zu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const i=this.Zu.indexOf(e);this.Zu.splice(i,1)}}function bs(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _u extends Oo{constructor(e,i,r,o){super(e,i,r,o),this.type="firestore",this._queue=new Ss,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ss(e),this._firestoreClient=void 0,await e}}}function wu(n,e){const i=typeof n=="object"?n:Eo(),r=typeof n=="string"?n:Si,o=xi(i,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Pc("firestore");c&&yu(o,...c)}return o}(function(e,i=!0){(function(o){Bt=o})(lt),st(new ze("firestore",(r,{instanceIdentifier:o,options:c})=>{const u=r.getProvider("app").getImmediate(),y=new _u(new ou(r.getProvider("auth-internal")),new lu(u,r.getProvider("app-check-internal")),function(T,S){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new re(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new In(T.options.projectId,S)}(u,o),u);return c=Object.assign({useFetchStreams:i},c),y._setSettings(c),y},"PUBLIC").setMultipleInstances(!0)),xe(gs,ms,e),xe(gs,ms,"esm2017")})();var Iu="firebase",Tu="11.9.0";/**
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
 */xe(Iu,Tu,"app");function Bi(n,e){var i={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(i[r[o]]=n[r[o]]);return i}function No(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eu=No,Lo=new Mt("auth","Firebase",No());/**
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
 */const Tn=new Ni("@firebase/auth");function Au(n,...e){Tn.logLevel<=x.WARN&&Tn.warn(`Auth (${lt}): ${n}`,...e)}function fn(n,...e){Tn.logLevel<=x.ERROR&&Tn.error(`Auth (${lt}): ${n}`,...e)}/**
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
 */function we(n,...e){throw Fi(n,...e)}function fe(n,...e){return Fi(n,...e)}function xo(n,e,i){const r=Object.assign(Object.assign({},Eu()),{[e]:i});return new Mt("auth","Firebase",r).create(e,{appName:n.name})}function He(n){return xo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fi(n,...e){if(typeof n!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(i,...r)}return Lo.create(n,...e)}function k(n,e,...i){if(!n)throw Fi(e,...i)}function ve(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fn(e),new Error(e)}function Ie(n,e){n||ve(e)}/**
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
 */function bi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Su(){return Cs()==="http:"||Cs()==="https:"}function Cs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function bu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Su()||Uc()||"connection"in navigator)?navigator.onLine:!0}function Cu(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ft{constructor(e,i){this.shortDelay=e,this.longDelay=i,Ie(i>e,"Short delay should be less than long delay!"),this.isMobile=xc()||Bc()}get(){return bu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ji(n,e){Ie(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class Mo{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ku={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ru=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Pu=new Ft(3e4,6e4);function Vi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ut(n,e,i,r,o={}){return Uo(n,o,async()=>{let c={},u={};r&&(e==="GET"?u=r:c={body:JSON.stringify(r)});const y=Ut(Object.assign({key:n.config.apiKey},u)).slice(1),w=await n._getAdditionalHeaders();w["Content-Type"]="application/json",n.languageCode&&(w["X-Firebase-Locale"]=n.languageCode);const T=Object.assign({method:e,headers:w},c);return Mc()||(T.referrerPolicy="no-referrer"),n.emulatorConfig&&Rn(n.emulatorConfig.host)&&(T.credentials="include"),Mo.fetch()(await Bo(n,n.config.apiHost,i,y),T)})}async function Uo(n,e,i){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ku),e);try{const o=new Ou(n),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const u=await c.json();if("needConfirmation"in u)throw cn(n,"account-exists-with-different-credential",u);if(c.ok&&!("errorMessage"in u))return u;{const y=c.ok?u.errorMessage:u.error.message,[w,T]=y.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw cn(n,"credential-already-in-use",u);if(w==="EMAIL_EXISTS")throw cn(n,"email-already-in-use",u);if(w==="USER_DISABLED")throw cn(n,"user-disabled",u);const S=r[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw xo(n,S,T);we(n,S)}}catch(o){if(o instanceof Te)throw o;we(n,"network-request-failed",{message:String(o)})}}async function Du(n,e,i,r,o={}){const c=await ut(n,e,i,r,o);return"mfaPendingCredential"in c&&we(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function Bo(n,e,i,r){const o=`${e}${i}?${r}`,c=n,u=c.config.emulator?ji(n.config,o):`${n.config.apiScheme}://${o}`;return Ru.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(u).toString():u}class Ou{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(fe(this.auth,"network-request-failed")),Pu.get())})}}function cn(n,e,i){const r={appName:n.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=fe(n,e,r);return o.customData._tokenResponse=i,o}/**
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
 */async function Nu(n,e){return ut(n,"POST","/v1/accounts:delete",e)}async function En(n,e){return ut(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ot(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lu(n,e=!1){const i=ct(n),r=await i.getIdToken(e),o=Hi(r);k(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,u=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:Ot(gi(o.auth_time)),issuedAtTime:Ot(gi(o.iat)),expirationTime:Ot(gi(o.exp)),signInProvider:u||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function gi(n){return Number(n)*1e3}function Hi(n){const[e,i,r]=n.split(".");if(e===void 0||i===void 0||r===void 0)return fn("JWT malformed, contained fewer than 3 sections"),null;try{const o=po(i);return o?JSON.parse(o):(fn("Failed to decode base64 JWT payload"),null)}catch(o){return fn("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ks(n){const e=Hi(n);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xt(n,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof Te&&xu(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xu({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Mu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ci{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ot(this.lastLoginAt),this.creationTime=Ot(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function An(n){var e;const i=n.auth,r=await n.getIdToken(),o=await xt(n,En(i,{idToken:r}));k(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];n._notifyReloadListener(c);const u=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Fo(c.providerUserInfo):[],y=Bu(n.providerData,u),w=n.isAnonymous,T=!(n.email&&c.passwordHash)&&!(y!=null&&y.length),S=w?T:!1,b={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:y,metadata:new Ci(c.createdAt,c.lastLoginAt),isAnonymous:S};Object.assign(n,b)}async function Uu(n){const e=ct(n);await An(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bu(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Fo(n){return n.map(e=>{var{providerId:i}=e,r=Bi(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Fu(n,e){const i=await Uo(n,{},async()=>{const r=Ut({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=n.config,u=await Bo(n,o,"/v1/token",`key=${c}`),y=await n._getAdditionalHeaders();return y["Content-Type"]="application/x-www-form-urlencoded",Mo.fetch()(u,{method:"POST",headers:y,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function ju(n,e){return ut(n,"POST","/v2/accounts:revokeToken",Vi(n,e))}/**
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
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ks(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){k(e.length!==0,"internal-error");const i=ks(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await Fu(e,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,u=new tt;return r&&(k(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(k(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),c&&(k(typeof c=="number","internal-error",{appName:e}),u.expirationTime=c),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
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
 */function ke(n,e){k(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ue{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,c=Bi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Ci(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await xt(this,this.stsTokenManager.getToken(this.auth,e));return k(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return Lu(this,e)}reload(){return Uu(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await An(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(de(this.auth.app))return Promise.reject(He(this.auth));const e=await this.getIdToken();return await xt(this,Nu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,c,u,y,w,T,S;const b=(r=i.displayName)!==null&&r!==void 0?r:void 0,E=(o=i.email)!==null&&o!==void 0?o:void 0,R=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,C=(u=i.photoURL)!==null&&u!==void 0?u:void 0,N=(y=i.tenantId)!==null&&y!==void 0?y:void 0,O=(w=i._redirectEventId)!==null&&w!==void 0?w:void 0,W=(T=i.createdAt)!==null&&T!==void 0?T:void 0,j=(S=i.lastLoginAt)!==null&&S!==void 0?S:void 0,{uid:U,emailVerified:M,isAnonymous:se,providerData:G,stsTokenManager:f}=i;k(U&&f,e,"internal-error");const h=tt.fromJSON(this.name,f);k(typeof U=="string",e,"internal-error"),ke(b,e.name),ke(E,e.name),k(typeof M=="boolean",e,"internal-error"),k(typeof se=="boolean",e,"internal-error"),ke(R,e.name),ke(C,e.name),ke(N,e.name),ke(O,e.name),ke(W,e.name),ke(j,e.name);const d=new ue({uid:U,auth:e,email:E,emailVerified:M,displayName:b,isAnonymous:se,photoURL:C,phoneNumber:R,tenantId:N,stsTokenManager:h,createdAt:W,lastLoginAt:j});return G&&Array.isArray(G)&&(d.providerData=G.map(g=>Object.assign({},g))),O&&(d._redirectEventId=O),d}static async _fromIdTokenResponse(e,i,r=!1){const o=new tt;o.updateFromServerResponse(i);const c=new ue({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await An(c),c}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];k(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Fo(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),y=new tt;y.updateFromIdToken(r);const w=new ue({uid:o.localId,auth:e,stsTokenManager:y,isAnonymous:u}),T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ci(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(w,T),w}}/**
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
 */const Rs=new Map;function ye(n){Ie(n instanceof Function,"Expected a class definition");let e=Rs.get(n);return e?(Ie(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rs.set(n,e),e)}/**
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
 */class jo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}jo.type="NONE";const Ps=jo;/**
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
 */function pn(n,e,i){return`firebase:${n}:${e}:${i}`}class nt{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=pn(this.userKey,o.apiKey,c),this.fullPersistenceKey=pn("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await En(this.auth,{idToken:e}).catch(()=>{});return i?ue._fromGetAccountInfoResponse(this.auth,i,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new nt(ye(Ps),e,r);const o=(await Promise.all(i.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let c=o[0]||ye(Ps);const u=pn(r,e.config.apiKey,e.name);let y=null;for(const T of i)try{const S=await T._get(u);if(S){let b;if(typeof S=="string"){const E=await En(e,{idToken:S}).catch(()=>{});if(!E)break;b=await ue._fromGetAccountInfoResponse(e,E,S)}else b=ue._fromJSON(e,S);T!==c&&(y=b),c=T;break}}catch{}const w=o.filter(T=>T._shouldAllowMigration);return!c._shouldAllowMigration||!w.length?new nt(c,e,r):(c=w[0],y&&await c._set(u,y.toJSON()),await Promise.all(i.map(async T=>{if(T!==c)try{await T._remove(u)}catch{}})),new nt(c,e,r))}}/**
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
 */function Ds(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Go(e))return"Blackberry";if(Ko(e))return"Webos";if(Ho(e))return"Safari";if((e.includes("chrome/")||$o(e))&&!e.includes("edge/"))return"Chrome";if(Wo(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vo(n=ne()){return/firefox\//i.test(n)}function Ho(n=ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $o(n=ne()){return/crios\//i.test(n)}function zo(n=ne()){return/iemobile/i.test(n)}function Wo(n=ne()){return/android/i.test(n)}function Go(n=ne()){return/blackberry/i.test(n)}function Ko(n=ne()){return/webos/i.test(n)}function $i(n=ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vu(n=ne()){var e;return $i(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hu(){return Fc()&&document.documentMode===10}function qo(n=ne()){return $i(n)||Wo(n)||Ko(n)||Go(n)||/windows phone/i.test(n)||zo(n)}/**
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
 */function Jo(n,e=[]){let i;switch(n){case"Browser":i=Ds(ne());break;case"Worker":i=`${Ds(ne())}-${n}`;break;default:i=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${lt}/${r}`}/**
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
 */class $u{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((u,y)=>{try{const w=e(c);u(w)}catch(w){y(w)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zu(n,e={}){return ut(n,"GET","/v2/passwordPolicy",Vi(n,e))}/**
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
 */const Wu=6;class Gu{constructor(e){var i,r,o,c;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=u.minPasswordLength)!==null&&i!==void 0?i:Wu,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,o,c,u,y;const w={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,w),this.validatePasswordCharacterOptions(e,w),w.isValid&&(w.isValid=(i=w.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),w.isValid&&(w.isValid=(r=w.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),w.isValid&&(w.isValid=(o=w.containsLowercaseLetter)!==null&&o!==void 0?o:!0),w.isValid&&(w.isValid=(c=w.containsUppercaseLetter)!==null&&c!==void 0?c:!0),w.isValid&&(w.isValid=(u=w.containsNumericCharacter)!==null&&u!==void 0?u:!0),w.isValid&&(w.isValid=(y=w.containsNonAlphanumericCharacter)!==null&&y!==void 0?y:!0),w}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Ku{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Os(this),this.idTokenSubscription=new Os(this),this.beforeStateQueue=new $u(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=ye(i)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await nt.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await En(this,{idToken:e}),r=await ue._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(de(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(y=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(y,y))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,y=o==null?void 0:o._redirectEventId,w=await this.tryRedirectSignIn(e);(!u||u===y)&&(w!=null&&w.user)&&(o=w.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await An(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(de(this.app))return Promise.reject(He(this));const i=e?ct(e):null;return i&&k(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return de(this.app)?Promise.reject(He(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return de(this.app)?Promise.reject(He(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zu(this),i=new Gu(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mt("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await ju(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&ye(e)||this._popupRedirectResolver;k(i,this,"argument-error"),this.redirectPersistenceManager=await nt.create(this,[ye(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let u=!1;const y=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(y,this,"internal-error"),y.then(()=>{u||c(this.currentUser)}),typeof i=="function"){const w=e.addObserver(i,r,o);return()=>{u=!0,w()}}else{const w=e.addObserver(i);return()=>{u=!0,w()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;if(de(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&Au(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function zi(n){return ct(n)}class Os{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gc(i=>this.observer=i)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qu(n){Wi=n}function Ju(n){return Wi.loadJS(n)}function Xu(){return Wi.gapiScript}function Yu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Zu(n,e){const i=xi(n,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if($e(c,e??{}))return o;we(o,"already-initialized")}return i.initialize({options:e})}function Qu(n,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eh(n,e,i){const r=zi(n);k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=Xo(e),{host:u,port:y}=th(e),w=y===null?"":`:${y}`,T={url:`${c}//${u}${w}/`},S=Object.freeze({host:u,port:y,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){k(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),k($e(T,r.config.emulator)&&$e(S,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=T,r.emulatorConfig=S,r.settings.appVerificationDisabledForTesting=!0,Rn(u)?(yo(`${c}//${u}${w}`),_o("Auth",!0)):nh()}function Xo(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function th(n){const e=Xo(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:Ns(r.substr(c.length+1))}}else{const[c,u]=r.split(":");return{host:c,port:Ns(u)}}}function Ns(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function nh(){function n(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Yo{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,i){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}/**
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
 */async function it(n,e){return Du(n,"POST","/v1/accounts:signInWithIdp",Vi(n,e))}/**
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
 */const ih="http://localhost";class We extends Yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new We(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):we("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,c=Bi(i,["providerId","signInMethod"]);if(!r||!o)return null;const u=new We(r,o);return u.idToken=c.idToken||void 0,u.accessToken=c.accessToken||void 0,u.secret=c.secret,u.nonce=c.nonce,u.pendingToken=c.pendingToken||null,u}_getIdTokenResponse(e){const i=this.buildRequest();return it(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,it(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,it(e,i)}buildRequest(){const e={requestUri:ih,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Ut(i)}return e}}/**
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
 */class Zo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jt extends Zo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Re extends jt{constructor(){super("facebook.com")}static credential(e){return We._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com";Re.PROVIDER_ID="facebook.com";/**
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
 */class Pe extends jt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return We._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return Pe.credential(i,r)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
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
 */class De extends jt{constructor(){super("github.com")}static credential(e){return We._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com";De.PROVIDER_ID="github.com";/**
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
 */class Oe extends jt{constructor(){super("twitter.com")}static credential(e,i){return We._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Oe.credential(i,r)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
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
 */class at{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const c=await ue._fromIdTokenResponse(e,r,o),u=Ls(r);return new at({user:c,providerId:u,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=Ls(r);return new at({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function Ls(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Sn extends Te{constructor(e,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Sn.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new Sn(e,i,r,o)}}function Qo(n,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Sn._fromErrorAndOperation(n,c,e,r):c})}async function rh(n,e,i=!1){const r=await xt(n,e._linkToIdToken(n.auth,await n.getIdToken()),i);return at._forOperation(n,"link",r)}/**
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
 */async function sh(n,e,i=!1){const{auth:r}=n;if(de(r.app))return Promise.reject(He(r));const o="reauthenticate";try{const c=await xt(n,Qo(r,o,e,n),i);k(c.idToken,r,"internal-error");const u=Hi(c.idToken);k(u,r,"internal-error");const{sub:y}=u;return k(n.uid===y,r,"user-mismatch"),at._forOperation(n,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&we(r,"user-mismatch"),c}}/**
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
 */async function oh(n,e,i=!1){if(de(n.app))return Promise.reject(He(n));const r="signIn",o=await Qo(n,r,e),c=await at._fromIdTokenResponse(n,r,o);return i||await n._updateCurrentUser(c.user),c}function ah(n,e,i,r){return ct(n).onIdTokenChanged(e,i,r)}function ch(n,e,i){return ct(n).beforeAuthStateChanged(e,i)}const bn="__sak";/**
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
 */class ea{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(bn,"1"),this.storage.removeItem(bn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lh=1e3,uh=10;class ta extends ea{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((u,y,w)=>{this.notifyListeners(u,w)});return}const r=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!i&&this.localCache[r]===u||this.notifyListeners(r,u)},c=this.storage.getItem(r);Hu()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,uh):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},lh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}ta.type="LOCAL";const hh=ta;/**
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
 */class na extends ea{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}na.type="SESSION";const ia=na;/**
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
 */function dh(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Pn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new Pn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:c}=i.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const y=Array.from(u).map(async T=>T(i.origin,c)),w=await dh(y);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:w})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pn.receivers=[];/**
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
 */function Gi(n="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return n+i}/**
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
 */class fh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,u;return new Promise((y,w)=>{const T=Gi("",20);o.port1.start();const S=setTimeout(()=>{w(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(b){const E=b;if(E.data.eventId===T)switch(E.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{w(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),y(E.data.response);break;default:clearTimeout(S),clearTimeout(c),w(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:T,data:i},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function pe(){return window}function ph(n){pe().location.href=n}/**
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
 */function ra(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function gh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mh(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function vh(){return ra()?self:null}/**
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
 */const sa="firebaseLocalStorageDb",yh=1,Cn="firebaseLocalStorage",oa="fbase_key";class Vt{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Dn(n,e){return n.transaction([Cn],e?"readwrite":"readonly").objectStore(Cn)}function _h(){const n=indexedDB.deleteDatabase(sa);return new Vt(n).toPromise()}function ki(){const n=indexedDB.open(sa,yh);return new Promise((e,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Cn,{keyPath:oa})}catch(o){i(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Cn)?e(r):(r.close(),await _h(),e(await ki()))})})}async function xs(n,e,i){const r=Dn(n,!0).put({[oa]:e,value:i});return new Vt(r).toPromise()}async function wh(n,e){const i=Dn(n,!1).get(e),r=await new Vt(i).toPromise();return r===void 0?null:r.value}function Ms(n,e){const i=Dn(n,!0).delete(e);return new Vt(i).toPromise()}const Ih=800,Th=3;class aa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ki(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>Th)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ra()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pn._getInstance(vh()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await gh(),!this.activeServiceWorker)return;this.sender=new fh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ki();return await xs(e,bn,"1"),await Ms(e,bn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>xs(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>wh(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ms(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Dn(o,!1).getAll();return new Vt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ih)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aa.type="LOCAL";const Eh=aa;new Ft(3e4,6e4);/**
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
 */function Ah(n,e){return e?ye(e):(k(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ki extends Yo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return it(e,this._buildIdpRequest())}_linkToIdToken(e,i){return it(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return it(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function Sh(n){return oh(n.auth,new Ki(n),n.bypassAuthState)}function bh(n){const{auth:e,user:i}=n;return k(i,e,"internal-error"),sh(i,new Ki(n),n.bypassAuthState)}async function Ch(n){const{auth:e,user:i}=n;return k(i,e,"internal-error"),rh(i,new Ki(n),n.bypassAuthState)}/**
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
 */class ca{constructor(e,i,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:u,type:y}=e;if(u){this.reject(u);return}const w={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(y)(w))}catch(T){this.reject(T)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sh;case"linkViaPopup":case"linkViaRedirect":return Ch;case"reauthViaPopup":case"reauthViaRedirect":return bh;default:we(this.auth,"internal-error")}}resolve(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kh=new Ft(2e3,1e4);class Qe extends ca{constructor(e,i,r,o,c){super(e,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Qe.currentPopupAction&&Qe.currentPopupAction.cancel(),Qe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){Ie(this.filter.length===1,"Popup operations only handle one event");const e=Gi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kh.get())};e()}}Qe.currentPopupAction=null;/**
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
 */const Rh="pendingRedirect",gn=new Map;class Ph extends ca{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=gn.get(this.auth._key());if(!e){try{const r=await Dh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}gn.set(this.auth._key(),e)}return this.bypassAuthState||gn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dh(n,e){const i=Lh(e),r=Nh(n);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function Oh(n,e){gn.set(n._key(),e)}function Nh(n){return ye(n._redirectPersistence)}function Lh(n){return pn(Rh,n.config.apiKey,n.name)}async function xh(n,e,i=!1){if(de(n.app))return Promise.reject(He(n));const r=zi(n),o=Ah(r,e),u=await new Ph(r,o,i).execute();return u&&!i&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const Mh=10*60*1e3;class Uh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bh(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!la(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(fe(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Us(e))}saveEventToCache(e){this.cachedEventUids.add(Us(e)),this.lastProcessedEventTime=Date.now()}}function Us(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function la({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bh(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return la(n);default:return!1}}/**
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
 */async function Fh(n,e={}){return ut(n,"GET","/v1/projects",e)}/**
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
 */const jh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vh=/^https?/;async function Hh(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Fh(n);for(const i of e)try{if($h(i))return}catch{}we(n,"unauthorized-domain")}function $h(n){const e=bi(),{protocol:i,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&u.hostname===r}if(!Vh.test(i))return!1;if(jh.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const zh=new Ft(3e4,6e4);function Bs(){const n=pe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function Wh(n){return new Promise((e,i)=>{var r,o,c;function u(){Bs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bs(),i(fe(n,"network-request-failed"))},timeout:zh.get()})}if(!((o=(r=pe().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=pe().gapi)===null||c===void 0)&&c.load)u();else{const y=Yu("iframefcb");return pe()[y]=()=>{gapi.load?u():i(fe(n,"network-request-failed"))},Ju(`${Xu()}?onload=${y}`).catch(w=>i(w))}}).catch(e=>{throw mn=null,e})}let mn=null;function Gh(n){return mn=mn||Wh(n),mn}/**
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
 */const Kh=new Ft(5e3,15e3),qh="__/auth/iframe",Jh="emulator/auth/iframe",Xh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zh(n){const e=n.config;k(e.authDomain,n,"auth-domain-config-required");const i=e.emulator?ji(e,Jh):`https://${n.config.authDomain}/${qh}`,r={apiKey:e.apiKey,appName:n.name,v:lt},o=Yh.get(n.config.apiHost);o&&(r.eid=o);const c=n._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${Ut(r).slice(1)}`}async function Qh(n){const e=await Gh(n),i=pe().gapi;return k(i,n,"internal-error"),e.open({where:document.body,url:Zh(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xh,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const u=fe(n,"network-request-failed"),y=pe().setTimeout(()=>{c(u)},Kh.get());function w(){pe().clearTimeout(y),o(r)}r.ping(w).then(w,()=>{c(u)})}))}/**
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
 */const ed={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},td=500,nd=600,id="_blank",rd="http://localhost";class Fs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sd(n,e,i,r=td,o=nd){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let y="";const w=Object.assign(Object.assign({},ed),{width:r.toString(),height:o.toString(),top:c,left:u}),T=ne().toLowerCase();i&&(y=$o(T)?id:i),Vo(T)&&(e=e||rd,w.scrollbars="yes");const S=Object.entries(w).reduce((E,[R,C])=>`${E}${R}=${C},`,"");if(Vu(T)&&y!=="_self")return od(e||"",y),new Fs(null);const b=window.open(e||"",y,S);k(b,n,"popup-blocked");try{b.focus()}catch{}return new Fs(b)}function od(n,e){const i=document.createElement("a");i.href=n,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const ad="__/auth/handler",cd="emulator/auth/handler",ld=encodeURIComponent("fac");async function js(n,e,i,r,o,c){k(n.config.authDomain,n,"auth-domain-config-required"),k(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:r,v:lt,eventId:o};if(e instanceof Zo){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Wc(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,b]of Object.entries({}))u[S]=b}if(e instanceof jt){const S=e.getScopes().filter(b=>b!=="");S.length>0&&(u.scopes=S.join(","))}n.tenantId&&(u.tid=n.tenantId);const y=u;for(const S of Object.keys(y))y[S]===void 0&&delete y[S];const w=await n._getAppCheckToken(),T=w?`#${ld}=${encodeURIComponent(w)}`:"";return`${ud(n)}?${Ut(y).slice(1)}${T}`}function ud({config:n}){return n.emulator?ji(n,cd):`https://${n.authDomain}/${ad}`}/**
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
 */const mi="webStorageSupport";class hd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ia,this._completeRedirectFn=xh,this._overrideRedirectResult=Oh}async _openPopup(e,i,r,o){var c;Ie((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const u=await js(e,i,r,bi(),o);return sd(e,u,Gi())}async _openRedirect(e,i,r,o){await this._originValidation(e);const c=await js(e,i,r,bi(),o);return ph(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(Ie(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await Qh(e),r=new Uh(e);return i.register("authEvent",o=>(k(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(mi,{type:mi},o=>{var c;const u=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[mi];u!==void 0&&i(!!u),we(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=Hh(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return qo()||Ho()||$i()}}const dd=hd;var Vs="@firebase/auth",Hs="1.10.6";/**
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
 */class fd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pd(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gd(n){st(new ze("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:u,authDomain:y}=r.options;k(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const w={apiKey:u,authDomain:y,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jo(n)},T=new Ku(r,o,c,w);return Qu(T,i),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),st(new ze("auth-internal",e=>{const i=zi(e.getProvider("auth").getImmediate());return(r=>new fd(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(Vs,Hs,pd(n)),xe(Vs,Hs,"esm2017")}/**
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
 */const md=5*60,vd=vo("authIdTokenMaxAge")||md;let $s=null;const yd=n=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>vd)return;const o=i==null?void 0:i.token;$s!==o&&($s=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function _d(n=Eo()){const e=xi(n,"auth");if(e.isInitialized())return e.getImmediate();const i=Zu(n,{popupRedirectResolver:dd,persistence:[Eh,hh,ia]}),r=vo("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const u=yd(c.toString());ch(i,u,()=>u(i.currentUser)),ah(i,y=>u(y))}}const o=go("auth");return o&&eh(i,`http://${o}`),i}function wd(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}qu({loadJS(n){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const c=fe("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",wd().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gd("Browser");const Id={apiKey:"AIzaSyBHvCIK89pitWN0VmGXiueQxEWD_060m-o",authDomain:"development-aacd3.firebaseapp.com",projectId:"development-aacd3"},ua=To(Id);wu(ua);_d(ua);function Td(){const[n,e]=et(lo),[i,r]=et(uo),[o,c]=et(gc);return q.useEffect(()=>{{console.log("📚 Storybook環境のためFirebase認証監視をスキップ"),r(!1),e(null),c(null);return}},[e,r,c]),{user:n,loading:i,error:o,isAuthenticated:!!n,isAnonymous:(n==null?void 0:n.isAnonymous)||!1}}const Ed=()=>{const{isAuthenticated:n,loading:e}=Td();q.useEffect(()=>{{console.log("📚 Storybook環境のため自動ログインをスキップ");return}},[e,n])},Ad=n=>({ABC123:{groupName:"テストグループ 1",round:3},XYZ789:{groupName:"非常に長いグループ名のテストケースです！これは表示の確認用",round:5},12:{groupName:"短ID",round:1},LOADING_TEST:{groupName:"ローディングテスト用グループ",round:2}})[n]||null,Sd=800,bd=n=>{const[e,i]=q.useState(null),[r,o]=q.useState(!0),[c,u]=q.useState(null);return q.useEffect(()=>{(async()=>{if(n){console.log("📚 Storybook環境のためモックデータを使用"),o(!0),setTimeout(()=>{const w=Ad(n);w?i(w):u("指定されたグループID のグループは存在しないか、削除されている可能性があります。"),o(!1)},Sd);return}})()},[n]),{groupData:e,groupLoading:r,groupError:c}},Cd=n=>({ABC123:[{userId:"user1",groupId:"ABC123",userName:"田中太郎",avatar:"1",deleteFlg:!1},{userId:"user2",groupId:"ABC123",userName:"山田花子",avatar:"5",deleteFlg:!1}],XYZ789:[{userId:"user3",groupId:"XYZ789",userName:"Alice",avatar:"3",deleteFlg:!1}],12:[{userId:"user4",groupId:"12",userName:"Bob",avatar:"2",deleteFlg:!1}]})[n]||[],kd=n=>{const[e,i]=et(yc);return q.useEffect(()=>{if(n){console.log("📚 Storybook環境のためモックユーザーを使用");const r=Cd(n);i(r);return}},[n,i]),{groupUsers:e}},Rd=Array.from({length:18},(n,e)=>({index:`${e+1}`,path:`/img/${e+1}.png`}));function Ri({groupId:n}){const[e,i]=q.useState("select"),[r,o]=q.useState(!1);Ed();const{groupData:c,groupLoading:u,groupError:y}=bd(n),{groupUsers:w}=kd(n);co(vc);const[T,S]=et(_c),[b,E]=et(wc),R=bt("white","gray.800"),C=bt("gray.200","gray.600"),N=bt("blue.50","blue.900"),O=bt("blue.200","blue.700"),W=bt("blue.700","blue.300"),j=async M=>{o(!0),console.log("Login with existing user:",M),await new Promise(se=>setTimeout(se,1e3))},U=async M=>{if(!n){console.error("❌ グループIDが指定されていません");return}{console.log("📚 Storybook環境のためモック処理"),o(!0),await new Promise(se=>setTimeout(se,1e3)),o(!1);return}};return u?D.jsx(ii,{maxW:"container.sm",py:{base:4,md:8},children:D.jsxs(sn,{gap:6,align:"center",justify:"center",minH:"400px",children:[D.jsx(Qa,{size:"lg",color:"blue.500"}),D.jsx(Ce,{color:"gray.500",children:"グループ情報を読み込み中..."})]})}):y||!c?D.jsx(ii,{maxW:"container.sm",py:{base:4,md:8},children:D.jsxs(sn,{gap:6,align:"center",justify:"center",minH:"400px",children:[D.jsx(Ze,{as:qa,fontSize:"48px",color:"red.500"}),D.jsxs(sn,{gap:2,textAlign:"center",children:[D.jsx(Wr,{size:"md",color:"red.500",children:"グループが見つかりません"}),D.jsx(Ce,{color:"gray.500",children:y||"指定されたグループID のグループは存在しないか、削除されている可能性があります。"}),D.jsxs(ri,{variant:"outline",colorScheme:"red",fontSize:"xs",mt:2,children:["グループID: ",n]})]})]})}):D.jsx(ii,{maxW:"container.sm",py:{base:4,md:8},children:D.jsxs(sn,{gap:6,align:"stretch",children:[D.jsxs(Ze,{textAlign:"center",children:[D.jsx(ri,{colorScheme:"blue",fontSize:"xs",px:3,py:1,borderRadius:"full",mb:3,children:D.jsxs(Gr,{gap:1,children:[D.jsx(Ze,{as:Ja}),D.jsx(Ce,{children:"グループに参加"})]})}),D.jsx(Wr,{size:{base:"md",md:"lg"},mb:3,color:"gray.800",_dark:{color:"gray.100"},fontWeight:"bold",children:c.groupName}),D.jsxs(Gr,{justify:"center",gap:2,children:[D.jsx(Ce,{fontSize:"sm",color:"gray.500",children:"グループID:"}),D.jsx(ri,{variant:"outline",colorScheme:"blue",fontSize:"xs",children:n}),D.jsx(Ce,{fontSize:"sm",color:"gray.500",children:"•"}),D.jsxs(Ce,{fontSize:"sm",color:"gray.500",children:["ラウンド: ",c.round]})]})]}),D.jsx(Za,{currentStep:e}),D.jsxs(Ze,{bg:R,borderRadius:"xl",border:"1px solid",borderColor:C,p:{base:4,md:6},boxShadow:"md",overflow:"hidden",children:[e==="select"&&D.jsx(Ya,{users:w.filter(M=>M.userId).map(M=>({userId:M.userId,userName:M.userName,avatarIndex:M.avatar,avatar:`/img/${M.avatar}.png`})),onUserSelect:j,onCreateNewUser:()=>i("create"),isLoading:r}),e==="create"&&D.jsx(Xa,{avatars:Rd,onBack:()=>i("select"),onSubmit:U,isLoading:T})]}),b&&D.jsx(Ze,{bg:"red.50",border:"1px solid",borderColor:"red.200",borderRadius:"lg",p:4,_dark:{bg:"red.900",borderColor:"red.700"},children:D.jsxs(Ce,{fontSize:"sm",color:"red.700",_dark:{color:"red.300"},fontWeight:"medium",children:["❌ ",b]})}),D.jsx(Ze,{bg:N,border:"1px solid",borderColor:O,borderRadius:"lg",p:4,textAlign:"center",children:D.jsxs(Ce,{fontSize:"sm",color:W,fontWeight:"medium",children:["💡"," ",e==="select"?"既存のユーザーを選択するか、新しいユーザーを作成してグループに参加しましょう":"お気に入りのアバターを選んで、ドラフトで使う名前を決めてください"]})})]})})}try{Ri.displayName="LobbyPage",Ri.__docgenInfo={description:"",displayName:"LobbyPage",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}}}}}catch{}const af={title:"Features/Lobby/LobbyPage",component:Ri,parameters:{layout:"fullscreen",msw:{handlers:Ka}},decorators:[_i]},ln={args:{groupId:"ABC123"},play:async({canvasElement:n})=>{const e=kn(n);z(await e.findByText("テストグループ 1")).toBeInTheDocument(),z(await e.findByText("ABC123")).toBeInTheDocument(),z(await e.findByText(/ラウンド: 3/)).toBeInTheDocument(),z(await e.findByText("ユーザー選択")).toBeInTheDocument(),z(await e.findByText("田中太郎")).toBeInTheDocument(),z(await e.findByText("山田花子")).toBeInTheDocument(),z(await e.findByText("登録済みのユーザーで参加")).toBeInTheDocument(),z(await e.findByText("新しいユーザーを作成")).toBeInTheDocument(),z(await e.findByText(/既存のユーザーを選択するか、新しいユーザーを作成して/)).toBeInTheDocument(),z(await e.findByText("グループに参加")).toBeInTheDocument()}},un={args:{groupId:"XYZ789"},play:async({canvasElement:n})=>{const e=kn(n);z(await e.findByText("非常に長いグループ名のテストケースです！これは表示の確認用")).toBeInTheDocument(),z(await e.findByText("XYZ789")).toBeInTheDocument(),z(await e.findByText(/ラウンド: 5/)).toBeInTheDocument(),z(await e.findByText("Alice")).toBeInTheDocument()}},hn={args:{groupId:"12"},play:async({canvasElement:n})=>{const e=kn(n);z(await e.findByText("短ID")).toBeInTheDocument(),z(await e.findByText("12")).toBeInTheDocument(),z(await e.findByText(/ラウンド: 1/)).toBeInTheDocument(),z(await e.findByText("Bob")).toBeInTheDocument()}},dn={args:{groupId:"nonexistent"},play:async({canvasElement:n})=>{const e=kn(n);z(await e.findByText("グループが見つかりません")).toBeInTheDocument(),z(await e.findByText("グループID: nonexistent")).toBeInTheDocument(),z(await e.findByText(/指定されたグループID のグループは存在しないか/)).toBeInTheDocument()}};var zs,Ws,Gs;ln.parameters={...ln.parameters,docs:{...(zs=ln.parameters)==null?void 0:zs.docs,source:{originalSource:`{
  args: {
    groupId: 'ABC123'
  },
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
    expect(await canvas.findByText('新しいユーザーを作成')).toBeInTheDocument();

    // ヘルプテキスト
    expect(await canvas.findByText(/既存のユーザーを選択するか、新しいユーザーを作成して/)).toBeInTheDocument();

    // グループ参加バッジ
    expect(await canvas.findByText('グループに参加')).toBeInTheDocument();
  }
}`,...(Gs=(Ws=ln.parameters)==null?void 0:Ws.docs)==null?void 0:Gs.source}}};var Ks,qs,Js;un.parameters={...un.parameters,docs:{...(Ks=un.parameters)==null?void 0:Ks.docs,source:{originalSource:`{
  args: {
    groupId: 'XYZ789'
  },
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
}`,...(Js=(qs=un.parameters)==null?void 0:qs.docs)==null?void 0:Js.source}}};var Xs,Ys,Zs;hn.parameters={...hn.parameters,docs:{...(Xs=hn.parameters)==null?void 0:Xs.docs,source:{originalSource:`{
  args: {
    groupId: '12'
  },
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
}`,...(Zs=(Ys=hn.parameters)==null?void 0:Ys.docs)==null?void 0:Zs.source}}};var Qs,eo,to;dn.parameters={...dn.parameters,docs:{...(Qs=dn.parameters)==null?void 0:Qs.docs,source:{originalSource:`{
  args: {
    groupId: 'nonexistent'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // エラー状態の表示を待つ
    expect(await canvas.findByText('グループが見つかりません')).toBeInTheDocument();

    // エラー状態の確認
    expect(await canvas.findByText('グループID: nonexistent')).toBeInTheDocument();
    expect(await canvas.findByText(/指定されたグループID のグループは存在しないか/)).toBeInTheDocument();
  }
}`,...(to=(eo=dn.parameters)==null?void 0:eo.docs)==null?void 0:to.source}}};const cf=["Default","LongGroupName","ShortGroupId","NonExistentGroup"];export{ln as Default,un as LongGroupName,dn as NonExistentGroup,hn as ShortGroupId,cf as __namedExportsOrder,af as default};
