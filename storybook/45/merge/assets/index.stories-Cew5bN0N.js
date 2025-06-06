import{h as Va}from"./index-Dhmk4ZzZ.js";import{j as L}from"./create-recipe-context-DNTG5mYw.js";import{r as Z,R as Ha}from"./index-BXymfbzT.js";import{u as Et}from"./color-mode-CR7cno4n.js";import{F as $a,a as za}from"./index-taPaNizk.js";import{U as Wa}from"./index-BmRTAaSY.js";import{U as Ga}from"./index-CJdpbDf6.js";import{S as Ka}from"./index-CPifioCQ.js";import{C as ei}from"./container-BotK6VuJ.js";import{V as tn}from"./v-stack-QJg7n52G.js";import{S as qa}from"./button-Dz2diCo_.js";import{T as je}from"./text-DJUdolDr.js";import{B as Tt}from"./box-DMcbo_cE.js";import{H as Vr}from"./heading-BGvs0cd3.js";import{B as ti}from"./badge-C7O6qwPE.js";import{H as Hr}from"./h-stack-BoRIBf53.js";import"./jsx-runtime-Bw5QeaCk.js";import"./iconBase-BtwG8oUN.js";import"./stack-DVtSLI4T.js";import"./schemas-yog1WE8L.js";import"./types-2y-X5aQn.js";import"./index-Bb1VYF-4.js";import"./image-DR_fq2ZN.js";import"./router-context.shared-runtime-CczRXcu8.js";import"./index-DGKHe-6Q.js";import"./image-context-BYBggyir.js";import"./use-merged-ref-0PvjutYQ.js";import"./simple-grid-D7DxtwhU.js";import"./index-CmmhBdGD.js";const Pt=n=>({uid:"mock-user-id",isAnonymous:!0,displayName:null,email:null,phoneNumber:null,photoURL:null,providerId:"firebase",refreshToken:"mock-refresh-token",tenantId:null,emailVerified:!1,metadata:{creationTime:void 0,lastSignInTime:void 0},providerData:[],delete:async()=>{},getIdToken:async()=>"mock-token",getIdTokenResult:async()=>({}),reload:async()=>{},toJSON:()=>({}),...n});Pt(),Pt({isAnonymous:!1,email:"test@example.com",displayName:"テストユーザー",emailVerified:!0});const St={},$r=(n,e)=>n.unstable_is?n.unstable_is(e):e===n,zr=n=>"init"in n,ni=n=>!!n.write,Wr=n=>"v"in n||"e"in n,nn=n=>{if("e"in n)throw n.e;if((St?"production":void 0)!=="production"&&!("v"in n))throw new Error("[Bug] atom state is not initialized");return n.v},pn=new WeakMap,Gr=n=>{var e;return gn(n)&&!!((e=pn.get(n))!=null&&e[0])},Ja=n=>{const e=pn.get(n);e!=null&&e[0]&&(e[0]=!1,e[1].forEach(i=>i()))},Ys=(n,e)=>{let i=pn.get(n);if(!i){i=[!0,new Set],pn.set(n,i);const r=()=>{i[0]=!1};n.then(r,r)}i[1].add(e)},gn=n=>typeof(n==null?void 0:n.then)=="function",Zs=(n,e,i)=>{i.p.has(n)||(i.p.add(n),e.then(()=>{i.p.delete(n)},()=>{i.p.delete(n)}))},ii=(n,e,i)=>{const r=i(n),o="v"in r,c=r.v;if(gn(e))for(const u of r.d.keys())Zs(n,e,i(u));r.v=e,delete r.e,(!o||!Object.is(c,r.v))&&(++r.n,gn(c)&&Ja(c))},Kr=(n,e,i)=>{var r;const o=new Set;for(const c of((r=i.get(n))==null?void 0:r.t)||[])i.has(c)&&o.add(c);for(const c of e.p)o.add(c);return o},Xa=()=>{const n=new Set,e=()=>{n.forEach(i=>i())};return e.add=i=>(n.add(i),()=>{n.delete(i)}),e},ri=()=>{const n={},e=new WeakMap,i=r=>{var o,c;(o=e.get(n))==null||o.forEach(u=>u(r)),(c=e.get(r))==null||c.forEach(u=>u())};return i.add=(r,o)=>{const c=r||n,u=(e.has(c)?e:e.set(c,new Set)).get(c);return u.add(o),()=>{u==null||u.delete(o),u.size||e.delete(c)}},i},Ya=n=>(n.c||(n.c=ri()),n.m||(n.m=ri()),n.u||(n.u=ri()),n.f||(n.f=Xa()),n),Za=Symbol(),Qa=(n=new WeakMap,e=new WeakMap,i=new WeakMap,r=new Set,o=new Set,c=new Set,u={},_=(T,...R)=>T.read(...R),w=(T,...R)=>T.write(...R),E=(T,R)=>{var C;return(C=T.unstable_onInit)==null?void 0:C.call(T,R)},S=(T,R)=>{var C;return(C=T.onMount)==null?void 0:C.call(T,R)},...b)=>{const T=b[0]||(f=>{if((St?"production":void 0)!=="production"&&!f)throw new Error("Atom is undefined or null");let h=n.get(f);return h||(h={d:new Map,p:new Set,n:0},n.set(f,h),E==null||E(f,G)),h}),R=b[1]||(()=>{const f=[],h=d=>{try{d()}catch(g){f.push(g)}};do{u.f&&h(u.f);const d=new Set,g=d.add.bind(d);r.forEach(m=>{var v;return(v=e.get(m))==null?void 0:v.l.forEach(g)}),r.clear(),c.forEach(g),c.clear(),o.forEach(g),o.clear(),d.forEach(h),r.size&&C()}while(r.size||c.size||o.size);if(f.length)throw new AggregateError(f)}),C=b[2]||(()=>{const f=[],h=new WeakSet,d=new WeakSet,g=Array.from(r);for(;g.length;){const m=g[g.length-1],v=T(m);if(d.has(m)){g.pop();continue}if(h.has(m)){if(i.get(m)===v.n)f.push([m,v]);else if((St?"production":void 0)!=="production"&&i.has(m))throw new Error("[Bug] invalidated atom exists");d.add(m),g.pop();continue}h.add(m);for(const p of Kr(m,v,e))h.has(p)||g.push(p)}for(let m=f.length-1;m>=0;--m){const[v,p]=f[m];let B=!1;for(const se of p.d.keys())if(se!==v&&r.has(se)){B=!0;break}B&&(D(v),F(v)),i.delete(v)}}),D=b[3]||(f=>{var h;const d=T(f);if(Wr(d)&&(e.has(f)&&i.get(f)!==d.n||Array.from(d.d).every(([x,ue])=>D(x).n===ue)))return d;d.d.clear();let g=!0;const m=()=>{e.has(f)&&(F(f),C(),R())},v=x=>{var ue;if($r(f,x)){const at=T(x);if(!Wr(at))if(zr(x))ii(x,x.init,T);else throw new Error("no atom init");return nn(at)}const Le=D(x);try{return nn(Le)}finally{d.d.set(x,Le.n),Gr(d.v)&&Zs(f,d.v,Le),(ue=e.get(x))==null||ue.t.add(f),g||m()}};let p,B;const se={get signal(){return p||(p=new AbortController),p.signal},get setSelf(){return(St?"production":void 0)!=="production"&&!ni(f)&&console.warn("setSelf function cannot be used with read-only atom"),!B&&ni(f)&&(B=(...x)=>{if((St?"production":void 0)!=="production"&&g&&console.warn("setSelf function cannot be called in sync"),!g)try{return z(f,...x)}finally{C(),R()}}),B}},ze=d.n;try{const x=_(f,v,se);return ii(f,x,T),gn(x)&&(Ys(x,()=>p==null?void 0:p.abort()),x.then(m,m)),d}catch(x){return delete d.v,d.e=x,++d.n,d}finally{g=!1,ze!==d.n&&i.get(f)===ze&&(i.set(f,d.n),r.add(f),(h=u.c)==null||h.call(u,f))}}),O=b[4]||(f=>{const h=[f];for(;h.length;){const d=h.pop(),g=T(d);for(const m of Kr(d,g,e)){const v=T(m);i.set(m,v.n),h.push(m)}}}),z=b[5]||((f,...h)=>{let d=!0;const g=v=>nn(D(v)),m=(v,...p)=>{var B;const se=T(v);try{if($r(f,v)){if(!zr(v))throw new Error("atom not writable");const ze=se.n,x=p[0];ii(v,x,T),F(v),ze!==se.n&&(r.add(v),(B=u.c)==null||B.call(u,v),O(v));return}else return z(v,...p)}finally{d||(C(),R())}};try{return w(f,g,m,...h)}finally{d=!1}}),F=b[6]||(f=>{var h;const d=T(f),g=e.get(f);if(g&&!Gr(d.v)){for(const[m,v]of d.d)if(!g.d.has(m)){const p=T(m);U(m).t.add(f),g.d.add(m),v!==p.n&&(r.add(m),(h=u.c)==null||h.call(u,m),O(m))}for(const m of g.d||[])if(!d.d.has(m)){g.d.delete(m);const v=H(m);v==null||v.t.delete(f)}}}),U=b[7]||(f=>{var h;const d=T(f);let g=e.get(f);if(!g){D(f);for(const m of d.d.keys())U(m).t.add(f);if(g={l:new Set,d:new Set(d.d.keys()),t:new Set},e.set(f,g),(h=u.m)==null||h.call(u,f),ni(f)){const m=()=>{let v=!0;const p=(...B)=>{try{return z(f,...B)}finally{v||(C(),R())}};try{const B=S(f,p);B&&(g.u=()=>{v=!0;try{B()}finally{v=!1}})}finally{v=!1}};o.add(m)}}return g}),H=b[8]||(f=>{var h;const d=T(f);let g=e.get(f);if(g&&!g.l.size&&!Array.from(g.t).some(m=>{var v;return(v=e.get(m))==null?void 0:v.d.has(f)})){g.u&&c.add(g.u),g=void 0,e.delete(f),(h=u.u)==null||h.call(u,f);for(const m of d.d.keys()){const v=H(m);v==null||v.t.delete(f)}return}return g}),W=[n,e,i,r,o,c,u,_,w,E,S,T,R,C,D,O,z,F,U,H],G={get:f=>nn(D(f)),set:(f,...h)=>{try{return z(f,...h)}finally{C(),R()}},sub:(f,h)=>{const g=U(f).l;return g.add(h),R(),()=>{g.delete(h),H(f),R()}}};return Object.defineProperty(G,Za,{value:W}),G},Qs=Qa,ec=Ya,qr=Ys,bi={};let tc=0;function Sn(n,e){const i=`atom${++tc}`,r={toString(){return(bi?"production":void 0)!=="production"&&this.debugLabel?i+":"+this.debugLabel:i}};return typeof n=="function"?r.read=n:(r.init=n,r.read=nc,r.write=ic),r}function nc(n){return n(this)}function ic(n,e,i){return e(this,typeof i=="function"?i(n(this)):i)}const rc=()=>{let n=0;const e=ec({}),i=new WeakMap,r=new WeakMap,o=Qs(i,r,void 0,void 0,void 0,void 0,e,void 0,(_,w,E,...S)=>n?E(_,...S):_.write(w,E,...S)),c=new Set;return e.m.add(void 0,_=>{c.add(_);const w=i.get(_);w.m=r.get(_)}),e.u.add(void 0,_=>{c.delete(_);const w=i.get(_);delete w.m}),Object.assign(o,{dev4_get_internal_weak_map:()=>i,dev4_get_mounted_atoms:()=>c,dev4_restore_atoms:_=>{const w={read:()=>null,write:(E,S)=>{++n;try{for(const[b,T]of _)"init"in b&&S(b,T)}finally{--n}}};o.set(w)}})};function Ci(){return(bi?"production":void 0)!=="production"?rc():Qs()}let At;function sc(){return At||(At=Ci(),(bi?"production":void 0)!=="production"&&(globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=At),globalThis.__JOTAI_DEFAULT_STORE__!==At&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))),At}const oc={},eo=Z.createContext(void 0);function to(n){return Z.useContext(eo)||sc()}function ac({children:n,store:e}){const i=Z.useRef(void 0);return!e&&!i.current&&(i.current=Ci()),Z.createElement(eo.Provider,{value:e||i.current},n)}const no=n=>typeof(n==null?void 0:n.then)=="function",cc=n=>{n.status="pending",n.then(e=>{n.status="fulfilled",n.value=e},e=>{n.status="rejected",n.reason=e})},lc=Ha.use||(n=>{if(n.status==="pending")throw n;if(n.status==="fulfilled")return n.value;throw n.status==="rejected"?n.reason:(cc(n),n)}),si=new WeakMap,uc=(n,e)=>{let i=si.get(n);return i||(i=new Promise((r,o)=>{let c=n;const u=E=>S=>{c===E&&r(S)},_=E=>S=>{c===E&&o(S)},w=()=>{try{const E=e();no(E)?(si.set(E,i),c=E,E.then(u(E),_(E)),qr(E,w)):r(E)}catch(E){o(E)}};n.then(u(n),_(n)),qr(n,w)}),si.set(n,i)),i};function hc(n,e){const i=to(),[[r,o,c],u]=Z.useReducer(E=>{const S=i.get(n);return Object.is(E[0],S)&&E[1]===i&&E[2]===n?E:[S,i,n]},void 0,()=>[i.get(n),i,n]);let _=r;if((o!==i||c!==n)&&(u(),_=i.get(n)),Z.useEffect(()=>{const E=i.sub(n,()=>{u()});return u(),E},[i,n,void 0]),Z.useDebugValue(_),no(_)){const E=uc(_,()=>i.get(n));return lc(E)}return _}function dc(n,e){const i=to();return Z.useCallback((...o)=>{if((oc?"production":void 0)!=="production"&&!("write"in n))throw new Error("not writable atom");return i.set(n,...o)},[i,n])}function oi(n,e){return[hc(n),dc(n)]}const io=Sn(null),ro=Sn(!0),fc=Sn(null),pc=Sn({uid:""}),gc=n=>{const e=Ci(),i=(n==null?void 0:n.user)??Pt(),r=(n==null?void 0:n.loading)??!1;return e.set(io,i),e.set(ro,r),e.set(pc,{uid:(i==null?void 0:i.uid)??"mock-user-id"}),e},et=n=>e=>{const i=gc(n);return L.jsx(ac,{store:i,children:L.jsx(e,{})})},gi=et({user:Pt(),loading:!1}),Jr=et({user:null,loading:!1}),Xr=et({user:null,loading:!0}),Yr=n=>et({user:Pt(n),loading:!1});try{et.displayName="withMockAuth",et.__docgenInfo={description:"認証状態付きJotaiプロバイダーデコレーター",displayName:"withMockAuth",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User | null"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}try{gi.displayName="withAuthenticatedUser",gi.__docgenInfo={description:"認証済みユーザー用デコレーター",displayName:"withAuthenticatedUser",props:{}}}catch{}try{Jr.displayName="withUnauthenticatedUser",Jr.__docgenInfo={description:"未認証ユーザー用デコレーター",displayName:"withUnauthenticatedUser",props:{}}}catch{}try{Xr.displayName="withAuthLoading",Xr.__docgenInfo={description:"認証ローディング中用デコレーター",displayName:"withAuthLoading",props:{}}}catch{}try{Yr.displayName="withCustomUser",Yr.__docgenInfo={description:"カスタムユーザー用デコレーター作成",displayName:"withCustomUser",props:{}}}catch{}/**
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
 */const mc=()=>{};var Zr={};/**
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
 */const so=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},vc=function(n){const e=[];let i=0,r=0;for(;i<n.length;){const o=n[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=n[i++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=n[i++],u=n[i++],_=n[i++],w=((o&7)<<18|(c&63)<<12|(u&63)<<6|_&63)-65536;e[r++]=String.fromCharCode(55296+(w>>10)),e[r++]=String.fromCharCode(56320+(w&1023))}else{const c=n[i++],u=n[i++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|u&63)}}return e.join("")},oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const c=n[o],u=o+1<n.length,_=u?n[o+1]:0,w=o+2<n.length,E=w?n[o+2]:0,S=c>>2,b=(c&3)<<4|_>>4;let T=(_&15)<<2|E>>6,R=E&63;w||(R=64,u||(T=64)),r.push(i[S],i[b],i[T],i[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(so(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const c=i[n.charAt(o++)],_=o<n.length?i[n.charAt(o)]:0;++o;const E=o<n.length?i[n.charAt(o)]:64;++o;const b=o<n.length?i[n.charAt(o)]:64;if(++o,c==null||_==null||E==null||b==null)throw new _c;const T=c<<2|_>>4;if(r.push(T),E!==64){const R=_<<4&240|E>>2;if(r.push(R),b!==64){const C=E<<6&192|b;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yc=function(n){const e=so(n);return oo.encodeByteArray(e,!0)},mn=function(n){return yc(n).replace(/\./g,"")},ao=function(n){try{return oo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ic=()=>wc().__FIREBASE_DEFAULTS__,Ec=()=>{if(typeof process>"u"||typeof Zr>"u")return;const n=Zr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ao(n[1]);return e&&JSON.parse(e)},ki=()=>{try{return mc()||Ic()||Ec()||Tc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},co=n=>{var e,i;return(i=(e=ki())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[n]},Ac=n=>{const e=co(n);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},lo=()=>{var n;return(n=ki())===null||n===void 0?void 0:n.config},uo=n=>{var e;return(e=ki())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Sc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
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
 */function bn(n){return n.endsWith(".cloudworkstations.dev")}async function ho(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function bc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},n);return[mn(JSON.stringify(i)),mn(JSON.stringify(u)),""].join(".")}const bt={};function Cc(){const n={prod:[],emulator:[]};for(const e of Object.keys(bt))bt[e]?n.emulator.push(e):n.prod.push(e);return n}function kc(n){let e=document.getElementById(n),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),i=!0),{created:i,element:e}}let Qr=!1;function fo(n,e){if(typeof window>"u"||typeof document>"u"||!bn(window.location.host)||bt[n]===e||bt[n]||Qr)return;bt[n]=e;function i(T){return`__firebase__banner__${T}`}const r="__firebase__banner",c=Cc().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function _(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function w(T,R){T.setAttribute("width","24"),T.setAttribute("id",R),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function E(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Qr=!0,u()},T}function S(T,R){T.setAttribute("id",R),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function b(){const T=kc(r),R=i("text"),C=document.getElementById(R)||document.createElement("span"),D=i("learnmore"),O=document.getElementById(D)||document.createElement("a"),z=i("preprendIcon"),F=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const U=T.element;_(U),S(O,D);const H=E();w(F,z),U.append(F,C,O,H),document.body.appendChild(U)}c?(C.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Pc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Oc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nc(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lc(){try{return typeof indexedDB=="object"}catch{return!1}}function Mc(){return new Promise((n,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}/**
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
 */const Uc="FirebaseError";class Ie extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=Uc,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nt.prototype.create)}}class Nt{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,c=this.errors[e],u=c?xc(c,r):"Error",_=`${this.serviceName}: ${u} (${o}).`;return new Ie(o,_,r)}}function xc(n,e){return n.replace(jc,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const jc=/\{\$([^}]+)}/g;function Fc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ve(n,e){if(n===e)return!0;const i=Object.keys(n),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const c=n[o],u=e[o];if(es(c)&&es(u)){if(!Ve(c,u))return!1}else if(c!==u)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function es(n){return n!==null&&typeof n=="object"}/**
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
 */function Lt(n){const e=[];for(const[i,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bc(n,e){const i=new Vc(n,e);return i.subscribe.bind(i)}class Vc{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");Hc(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=ai),o.error===void 0&&(o.error=ai),o.complete===void 0&&(o.complete=ai);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hc(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function ai(){}/**
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
 */function rt(n){return n&&n._delegate?n._delegate:n}class He{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fe="[DEFAULT]";/**
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
 */class $c{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new Sc;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wc(e))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fe){return this.instances.has(e)}getOptions(e=Fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,u]of this.instancesDeferred.entries()){const _=this.normalizeInstanceIdentifier(c);r===_&&u.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const u=this.instances.get(o);return u&&e(u,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zc(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fe){return this.component?this.component.multipleInstances?e:Fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zc(n){return n===Fe?void 0:n}function Wc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new $c(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const Kc={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},qc=M.INFO,Jc={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Xc=(n,e,...i)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=Jc[e];if(o)console[o](`[${r}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ri{constructor(e){this.name=e,this._logLevel=qc,this._logHandler=Xc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const Yc=(n,e)=>e.some(i=>n instanceof i);let ts,ns;function Zc(){return ts||(ts=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qc(){return ns||(ns=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const po=new WeakMap,mi=new WeakMap,go=new WeakMap,ci=new WeakMap,Pi=new WeakMap;function el(n){const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("success",c),n.removeEventListener("error",u)},c=()=>{i(Oe(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",c),n.addEventListener("error",u)});return e.then(i=>{i instanceof IDBCursor&&po.set(i,n)}).catch(()=>{}),Pi.set(e,n),e}function tl(n){if(mi.has(n))return;const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",u),n.removeEventListener("abort",u)},c=()=>{i(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",c),n.addEventListener("error",u),n.addEventListener("abort",u)});mi.set(n,e)}let vi={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return mi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||go.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Oe(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nl(n){vi=n(vi)}function il(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=n.call(li(this),e,...i);return go.set(r,e.sort?e.sort():[e]),Oe(r)}:Qc().includes(n)?function(...e){return n.apply(li(this),e),Oe(po.get(this))}:function(...e){return Oe(n.apply(li(this),e))}}function rl(n){return typeof n=="function"?il(n):(n instanceof IDBTransaction&&tl(n),Yc(n,Zc())?new Proxy(n,vi):n)}function Oe(n){if(n instanceof IDBRequest)return el(n);if(ci.has(n))return ci.get(n);const e=rl(n);return e!==n&&(ci.set(n,e),Pi.set(e,n)),e}const li=n=>Pi.get(n);function sl(n,e,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const u=indexedDB.open(n,e),_=Oe(u);return r&&u.addEventListener("upgradeneeded",w=>{r(Oe(u.result),w.oldVersion,w.newVersion,Oe(u.transaction),w)}),i&&u.addEventListener("blocked",w=>i(w.oldVersion,w.newVersion,w)),_.then(w=>{c&&w.addEventListener("close",()=>c()),o&&w.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),_}const ol=["get","getKey","getAll","getAllKeys","count"],al=["put","add","delete","clear"],ui=new Map;function is(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ui.get(e))return ui.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=al.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||ol.includes(i)))return;const c=async function(u,..._){const w=this.transaction(u,o?"readwrite":"readonly");let E=w.store;return r&&(E=E.index(_.shift())),(await Promise.all([E[i](..._),o&&w.done]))[0]};return ui.set(e,c),c}nl(n=>({...n,get:(e,i,r)=>is(e,i)||n.get(e,i,r),has:(e,i)=>!!is(e,i)||n.has(e,i)}));/**
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
 */class cl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(ll(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function ll(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _i="@firebase/app",rs="0.13.0";/**
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
 */const _e=new Ri("@firebase/app"),ul="@firebase/app-compat",hl="@firebase/analytics-compat",dl="@firebase/analytics",fl="@firebase/app-check-compat",pl="@firebase/app-check",gl="@firebase/auth",ml="@firebase/auth-compat",vl="@firebase/database",_l="@firebase/data-connect",yl="@firebase/database-compat",wl="@firebase/functions",Il="@firebase/functions-compat",El="@firebase/installations",Tl="@firebase/installations-compat",Al="@firebase/messaging",Sl="@firebase/messaging-compat",bl="@firebase/performance",Cl="@firebase/performance-compat",kl="@firebase/remote-config",Rl="@firebase/remote-config-compat",Pl="@firebase/storage",Ol="@firebase/storage-compat",Dl="@firebase/firestore",Nl="@firebase/ai",Ll="@firebase/firestore-compat",Ml="firebase",Ul="11.8.0";/**
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
 */const yi="[DEFAULT]",xl={[_i]:"fire-core",[ul]:"fire-core-compat",[dl]:"fire-analytics",[hl]:"fire-analytics-compat",[pl]:"fire-app-check",[fl]:"fire-app-check-compat",[gl]:"fire-auth",[ml]:"fire-auth-compat",[vl]:"fire-rtdb",[_l]:"fire-data-connect",[yl]:"fire-rtdb-compat",[wl]:"fire-fn",[Il]:"fire-fn-compat",[El]:"fire-iid",[Tl]:"fire-iid-compat",[Al]:"fire-fcm",[Sl]:"fire-fcm-compat",[bl]:"fire-perf",[Cl]:"fire-perf-compat",[kl]:"fire-rc",[Rl]:"fire-rc-compat",[Pl]:"fire-gcs",[Ol]:"fire-gcs-compat",[Dl]:"fire-fst",[Ll]:"fire-fst-compat",[Nl]:"fire-vertex","fire-js":"fire-js",[Ml]:"fire-js-all"};/**
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
 */const vn=new Map,jl=new Map,wi=new Map;function ss(n,e){try{n.container.addComponent(e)}catch(i){_e.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function tt(n){const e=n.name;if(wi.has(e))return _e.debug(`There were multiple attempts to register component ${e}.`),!1;wi.set(e,n);for(const i of vn.values())ss(i,n);for(const i of jl.values())ss(i,n);return!0}function Oi(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function he(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Fl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new Nt("app","Firebase",Fl);/**
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
 */class Bl{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
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
 */const st=Ul;function mo(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yi,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw De.create("bad-app-name",{appName:String(o)});if(i||(i=lo()),!i)throw De.create("no-options");const c=vn.get(o);if(c){if(Ve(i,c.options)&&Ve(r,c.config))return c;throw De.create("duplicate-app",{appName:o})}const u=new Gc(o);for(const w of wi.values())u.addComponent(w);const _=new Bl(i,r,u);return vn.set(o,_),_}function vo(n=yi){const e=vn.get(n);if(!e&&n===yi&&lo())return mo();if(!e)throw De.create("no-app",{appName:n});return e}function Ne(n,e,i){var r;let o=(r=xl[n])!==null&&r!==void 0?r:n;i&&(o+=`-${i}`);const c=o.match(/\s|\//),u=e.match(/\s|\//);if(c||u){const _=[`Unable to register library "${o}" with version "${e}":`];c&&_.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&u&&_.push("and"),u&&_.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_e.warn(_.join(" "));return}tt(new He(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Vl="firebase-heartbeat-database",Hl=1,Ot="firebase-heartbeat-store";let hi=null;function _o(){return hi||(hi=sl(Vl,Hl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ot)}catch(i){console.warn(i)}}}}).catch(n=>{throw De.create("idb-open",{originalErrorMessage:n.message})})),hi}async function $l(n){try{const i=(await _o()).transaction(Ot),r=await i.objectStore(Ot).get(yo(n));return await i.done,r}catch(e){if(e instanceof Ie)_e.warn(e.message);else{const i=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_e.warn(i.message)}}}async function os(n,e){try{const r=(await _o()).transaction(Ot,"readwrite");await r.objectStore(Ot).put(e,yo(n)),await r.done}catch(i){if(i instanceof Ie)_e.warn(i.message);else{const r=De.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});_e.warn(r.message)}}}function yo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zl=1024,Wl=30;class Gl{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new ql(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=as();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(u=>u.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>Wl){const u=Jl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_e.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=as(),{heartbeatsToSend:r,unsentEntries:o}=Kl(this._heartbeatsCache.heartbeats),c=mn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return _e.warn(i),""}}}function as(){return new Date().toISOString().substring(0,10)}function Kl(n,e=zl){const i=[];let r=n.slice();for(const o of n){const c=i.find(u=>u.agent===o.agent);if(c){if(c.dates.push(o.date),cs(i)>e){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),cs(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class ql{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lc()?Mc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await $l(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return os(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return os(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function cs(n){return mn(JSON.stringify({version:2,heartbeats:n})).length}function Jl(n){if(n.length===0)return-1;let e=0,i=n[0].date;for(let r=1;r<n.length;r++)n[r].date<i&&(i=n[r].date,e=r);return e}/**
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
 */function Xl(n){tt(new He("platform-logger",e=>new cl(e),"PRIVATE")),tt(new He("heartbeat",e=>new Gl(e),"PRIVATE")),Ne(_i,rs,n),Ne(_i,rs,"esm2017"),Ne("fire-js","")}Xl("");var Yl="firebase",Zl="11.8.1";/**
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
 */Ne(Yl,Zl,"app");function Di(n,e){var i={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(i[r[o]]=n[r[o]]);return i}function wo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ql=wo,Io=new Nt("auth","Firebase",wo());/**
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
 */const _n=new Ri("@firebase/auth");function eu(n,...e){_n.logLevel<=M.WARN&&_n.warn(`Auth (${st}): ${n}`,...e)}function un(n,...e){_n.logLevel<=M.ERROR&&_n.error(`Auth (${st}): ${n}`,...e)}/**
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
 */function ye(n,...e){throw Ni(n,...e)}function de(n,...e){return Ni(n,...e)}function Eo(n,e,i){const r=Object.assign(Object.assign({},Ql()),{[e]:i});return new Nt("auth","Firebase",r).create(e,{appName:n.name})}function Be(n){return Eo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ni(n,...e){if(typeof n!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(i,...r)}return Io.create(n,...e)}function k(n,e,...i){if(!n)throw Ni(e,...i)}function me(n){const e="INTERNAL ASSERTION FAILED: "+n;throw un(e),new Error(e)}function we(n,e){n||me(e)}/**
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
 */function Ii(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function tu(){return ls()==="http:"||ls()==="https:"}function ls(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function nu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tu()||Oc()||"connection"in navigator)?navigator.onLine:!0}function iu(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Mt{constructor(e,i){this.shortDelay=e,this.longDelay=i,we(i>e,"Short delay should be less than long delay!"),this.isMobile=Rc()||Dc()}get(){return nu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Li(n,e){we(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class To{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ru={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const su=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ou=new Mt(3e4,6e4);function Mi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ot(n,e,i,r,o={}){return Ao(n,o,async()=>{let c={},u={};r&&(e==="GET"?u=r:c={body:JSON.stringify(r)});const _=Lt(Object.assign({key:n.config.apiKey},u)).slice(1),w=await n._getAdditionalHeaders();w["Content-Type"]="application/json",n.languageCode&&(w["X-Firebase-Locale"]=n.languageCode);const E=Object.assign({method:e,headers:w},c);return Pc()||(E.referrerPolicy="no-referrer"),n.emulatorConfig&&bn(n.emulatorConfig.host)&&(E.credentials="include"),To.fetch()(await So(n,n.config.apiHost,i,_),E)})}async function Ao(n,e,i){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ru),e);try{const o=new cu(n),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const u=await c.json();if("needConfirmation"in u)throw rn(n,"account-exists-with-different-credential",u);if(c.ok&&!("errorMessage"in u))return u;{const _=c.ok?u.errorMessage:u.error.message,[w,E]=_.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw rn(n,"credential-already-in-use",u);if(w==="EMAIL_EXISTS")throw rn(n,"email-already-in-use",u);if(w==="USER_DISABLED")throw rn(n,"user-disabled",u);const S=r[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Eo(n,S,E);ye(n,S)}}catch(o){if(o instanceof Ie)throw o;ye(n,"network-request-failed",{message:String(o)})}}async function au(n,e,i,r,o={}){const c=await ot(n,e,i,r,o);return"mfaPendingCredential"in c&&ye(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function So(n,e,i,r){const o=`${e}${i}?${r}`,c=n,u=c.config.emulator?Li(n.config,o):`${n.config.apiScheme}://${o}`;return su.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(u).toString():u}class cu{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(de(this.auth,"network-request-failed")),ou.get())})}}function rn(n,e,i){const r={appName:n.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=de(n,e,r);return o.customData._tokenResponse=i,o}/**
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
 */async function lu(n,e){return ot(n,"POST","/v1/accounts:delete",e)}async function yn(n,e){return ot(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ct(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uu(n,e=!1){const i=rt(n),r=await i.getIdToken(e),o=Ui(r);k(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,u=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:Ct(di(o.auth_time)),issuedAtTime:Ct(di(o.iat)),expirationTime:Ct(di(o.exp)),signInProvider:u||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function di(n){return Number(n)*1e3}function Ui(n){const[e,i,r]=n.split(".");if(e===void 0||i===void 0||r===void 0)return un("JWT malformed, contained fewer than 3 sections"),null;try{const o=ao(i);return o?JSON.parse(o):(un("Failed to decode base64 JWT payload"),null)}catch(o){return un("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function us(n){const e=Ui(n);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dt(n,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof Ie&&hu(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function hu({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class du{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ei{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ct(this.lastLoginAt),this.creationTime=Ct(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wn(n){var e;const i=n.auth,r=await n.getIdToken(),o=await Dt(n,yn(i,{idToken:r}));k(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];n._notifyReloadListener(c);const u=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?bo(c.providerUserInfo):[],_=pu(n.providerData,u),w=n.isAnonymous,E=!(n.email&&c.passwordHash)&&!(_!=null&&_.length),S=w?E:!1,b={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:_,metadata:new Ei(c.createdAt,c.lastLoginAt),isAnonymous:S};Object.assign(n,b)}async function fu(n){const e=rt(n);await wn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pu(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function bo(n){return n.map(e=>{var{providerId:i}=e,r=Di(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function gu(n,e){const i=await Ao(n,{},async()=>{const r=Lt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=n.config,u=await So(n,o,"/v1/token",`key=${c}`),_=await n._getAdditionalHeaders();return _["Content-Type"]="application/x-www-form-urlencoded",To.fetch()(u,{method:"POST",headers:_,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function mu(n,e){return ot(n,"POST","/v2/accounts:revokeToken",Mi(n,e))}/**
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
 */class Ye{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):us(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){k(e.length!==0,"internal-error");const i=us(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await gu(e,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,u=new Ye;return r&&(k(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(k(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),c&&(k(typeof c=="number","internal-error",{appName:e}),u.expirationTime=c),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ye,this.toJSON())}_performRefresh(){return me("not implemented")}}/**
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
 */function be(n,e){k(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ce{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,c=Di(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new du(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Ei(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await Dt(this,this.stsTokenManager.getToken(this.auth,e));return k(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return uu(this,e)}reload(){return fu(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await wn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(he(this.auth.app))return Promise.reject(Be(this.auth));const e=await this.getIdToken();return await Dt(this,lu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,c,u,_,w,E,S;const b=(r=i.displayName)!==null&&r!==void 0?r:void 0,T=(o=i.email)!==null&&o!==void 0?o:void 0,R=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,C=(u=i.photoURL)!==null&&u!==void 0?u:void 0,D=(_=i.tenantId)!==null&&_!==void 0?_:void 0,O=(w=i._redirectEventId)!==null&&w!==void 0?w:void 0,z=(E=i.createdAt)!==null&&E!==void 0?E:void 0,F=(S=i.lastLoginAt)!==null&&S!==void 0?S:void 0,{uid:U,emailVerified:H,isAnonymous:W,providerData:G,stsTokenManager:f}=i;k(U&&f,e,"internal-error");const h=Ye.fromJSON(this.name,f);k(typeof U=="string",e,"internal-error"),be(b,e.name),be(T,e.name),k(typeof H=="boolean",e,"internal-error"),k(typeof W=="boolean",e,"internal-error"),be(R,e.name),be(C,e.name),be(D,e.name),be(O,e.name),be(z,e.name),be(F,e.name);const d=new ce({uid:U,auth:e,email:T,emailVerified:H,displayName:b,isAnonymous:W,photoURL:C,phoneNumber:R,tenantId:D,stsTokenManager:h,createdAt:z,lastLoginAt:F});return G&&Array.isArray(G)&&(d.providerData=G.map(g=>Object.assign({},g))),O&&(d._redirectEventId=O),d}static async _fromIdTokenResponse(e,i,r=!1){const o=new Ye;o.updateFromServerResponse(i);const c=new ce({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await wn(c),c}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];k(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?bo(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),_=new Ye;_.updateFromIdToken(r);const w=new ce({uid:o.localId,auth:e,stsTokenManager:_,isAnonymous:u}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ei(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(w,E),w}}/**
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
 */const hs=new Map;function ve(n){we(n instanceof Function,"Expected a class definition");let e=hs.get(n);return e?(we(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hs.set(n,e),e)}/**
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
 */class Co{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Co.type="NONE";const ds=Co;/**
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
 */function hn(n,e,i){return`firebase:${n}:${e}:${i}`}class Ze{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=hn(this.userKey,o.apiKey,c),this.fullPersistenceKey=hn("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await yn(this.auth,{idToken:e}).catch(()=>{});return i?ce._fromGetAccountInfoResponse(this.auth,i,e):null}return ce._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new Ze(ve(ds),e,r);const o=(await Promise.all(i.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=o[0]||ve(ds);const u=hn(r,e.config.apiKey,e.name);let _=null;for(const E of i)try{const S=await E._get(u);if(S){let b;if(typeof S=="string"){const T=await yn(e,{idToken:S}).catch(()=>{});if(!T)break;b=await ce._fromGetAccountInfoResponse(e,T,S)}else b=ce._fromJSON(e,S);E!==c&&(_=b),c=E;break}}catch{}const w=o.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!w.length?new Ze(c,e,r):(c=w[0],_&&await c._set(u,_.toJSON()),await Promise.all(i.map(async E=>{if(E!==c)try{await E._remove(u)}catch{}})),new Ze(c,e,r))}}/**
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
 */function fs(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ko(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(No(e))return"Blackberry";if(Lo(e))return"Webos";if(Ro(e))return"Safari";if((e.includes("chrome/")||Po(e))&&!e.includes("edge/"))return"Chrome";if(Do(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ko(n=ne()){return/firefox\//i.test(n)}function Ro(n=ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Po(n=ne()){return/crios\//i.test(n)}function Oo(n=ne()){return/iemobile/i.test(n)}function Do(n=ne()){return/android/i.test(n)}function No(n=ne()){return/blackberry/i.test(n)}function Lo(n=ne()){return/webos/i.test(n)}function xi(n=ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vu(n=ne()){var e;return xi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _u(){return Nc()&&document.documentMode===10}function Mo(n=ne()){return xi(n)||Do(n)||Lo(n)||No(n)||/windows phone/i.test(n)||Oo(n)}/**
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
 */function Uo(n,e=[]){let i;switch(n){case"Browser":i=fs(ne());break;case"Worker":i=`${fs(ne())}-${n}`;break;default:i=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${st}/${r}`}/**
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
 */class yu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((u,_)=>{try{const w=e(c);u(w)}catch(w){_(w)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wu(n,e={}){return ot(n,"GET","/v2/passwordPolicy",Mi(n,e))}/**
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
 */const Iu=6;class Eu{constructor(e){var i,r,o,c;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=u.minPasswordLength)!==null&&i!==void 0?i:Iu,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,o,c,u,_;const w={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,w),this.validatePasswordCharacterOptions(e,w),w.isValid&&(w.isValid=(i=w.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),w.isValid&&(w.isValid=(r=w.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),w.isValid&&(w.isValid=(o=w.containsLowercaseLetter)!==null&&o!==void 0?o:!0),w.isValid&&(w.isValid=(c=w.containsUppercaseLetter)!==null&&c!==void 0?c:!0),w.isValid&&(w.isValid=(u=w.containsNumericCharacter)!==null&&u!==void 0?u:!0),w.isValid&&(w.isValid=(_=w.containsNonAlphanumericCharacter)!==null&&_!==void 0?_:!0),w}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Tu{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ps(this),this.idTokenSubscription=new ps(this),this.beforeStateQueue=new yu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Io,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=ve(i)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Ze.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await yn(this,{idToken:e}),r=await ce._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(he(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(_=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(_,_))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,_=o==null?void 0:o._redirectEventId,w=await this.tryRedirectSignIn(e);(!u||u===_)&&(w!=null&&w.user)&&(o=w.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await wn(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(he(this.app))return Promise.reject(Be(this));const i=e?rt(e):null;return i&&k(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return he(this.app)?Promise.reject(Be(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return he(this.app)?Promise.reject(Be(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ve(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wu(this),i=new Eu(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Nt("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await mu(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&ve(e)||this._popupRedirectResolver;k(i,this,"argument-error"),this.redirectPersistenceManager=await Ze.create(this,[ve(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let u=!1;const _=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(_,this,"internal-error"),_.then(()=>{u||c(this.currentUser)}),typeof i=="function"){const w=e.addObserver(i,r,o);return()=>{u=!0,w()}}else{const w=e.addObserver(i);return()=>{u=!0,w()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;if(he(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&eu(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function ji(n){return rt(n)}class ps{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bc(i=>this.observer=i)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Au(n){Fi=n}function Su(n){return Fi.loadJS(n)}function bu(){return Fi.gapiScript}function Cu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ku(n,e){const i=Oi(n,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Ve(c,e??{}))return o;ye(o,"already-initialized")}return i.initialize({options:e})}function Ru(n,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(ve);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pu(n,e,i){const r=ji(n);k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=xo(e),{host:u,port:_}=Ou(e),w=_===null?"":`:${_}`,E={url:`${c}//${u}${w}/`},S=Object.freeze({host:u,port:_,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){k(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),k(Ve(E,r.config.emulator)&&Ve(S,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=E,r.emulatorConfig=S,r.settings.appVerificationDisabledForTesting=!0,bn(u)?(ho(`${c}//${u}${w}`),fo("Auth",!0)):Du()}function xo(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ou(n){const e=xo(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:gs(r.substr(c.length+1))}}else{const[c,u]=r.split(":");return{host:c,port:gs(u)}}}function gs(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Du(){function n(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class jo{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return me("not implemented")}_getIdTokenResponse(e){return me("not implemented")}_linkToIdToken(e,i){return me("not implemented")}_getReauthenticationResolver(e){return me("not implemented")}}/**
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
 */async function Qe(n,e){return au(n,"POST","/v1/accounts:signInWithIdp",Mi(n,e))}/**
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
 */const Nu="http://localhost";class $e extends jo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new $e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):ye("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,c=Di(i,["providerId","signInMethod"]);if(!r||!o)return null;const u=new $e(r,o);return u.idToken=c.idToken||void 0,u.accessToken=c.accessToken||void 0,u.secret=c.secret,u.nonce=c.nonce,u.pendingToken=c.pendingToken||null,u}_getIdTokenResponse(e){const i=this.buildRequest();return Qe(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,Qe(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,Qe(e,i)}buildRequest(){const e={requestUri:Nu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Lt(i)}return e}}/**
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
 */class Fo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ut extends Fo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ce extends Ut{constructor(){super("facebook.com")}static credential(e){return $e._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ce.PROVIDER_ID="facebook.com";/**
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
 */class ke extends Ut{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return $e._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return ke.credential(i,r)}catch{return null}}}ke.GOOGLE_SIGN_IN_METHOD="google.com";ke.PROVIDER_ID="google.com";/**
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
 */class Re extends Ut{constructor(){super("github.com")}static credential(e){return $e._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
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
 */class Pe extends Ut{constructor(){super("twitter.com")}static credential(e,i){return $e._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Pe.credential(i,r)}catch{return null}}}Pe.TWITTER_SIGN_IN_METHOD="twitter.com";Pe.PROVIDER_ID="twitter.com";/**
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
 */class nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const c=await ce._fromIdTokenResponse(e,r,o),u=ms(r);return new nt({user:c,providerId:u,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=ms(r);return new nt({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function ms(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class In extends Ie{constructor(e,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,In.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new In(e,i,r,o)}}function Bo(n,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?In._fromErrorAndOperation(n,c,e,r):c})}async function Lu(n,e,i=!1){const r=await Dt(n,e._linkToIdToken(n.auth,await n.getIdToken()),i);return nt._forOperation(n,"link",r)}/**
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
 */async function Mu(n,e,i=!1){const{auth:r}=n;if(he(r.app))return Promise.reject(Be(r));const o="reauthenticate";try{const c=await Dt(n,Bo(r,o,e,n),i);k(c.idToken,r,"internal-error");const u=Ui(c.idToken);k(u,r,"internal-error");const{sub:_}=u;return k(n.uid===_,r,"user-mismatch"),nt._forOperation(n,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&ye(r,"user-mismatch"),c}}/**
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
 */async function Uu(n,e,i=!1){if(he(n.app))return Promise.reject(Be(n));const r="signIn",o=await Bo(n,r,e),c=await nt._fromIdTokenResponse(n,r,o);return i||await n._updateCurrentUser(c.user),c}function xu(n,e,i,r){return rt(n).onIdTokenChanged(e,i,r)}function ju(n,e,i){return rt(n).beforeAuthStateChanged(e,i)}const En="__sak";/**
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
 */class Vo{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(En,"1"),this.storage.removeItem(En),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fu=1e3,Bu=10;class Ho extends Vo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((u,_,w)=>{this.notifyListeners(u,w)});return}const r=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!i&&this.localCache[r]===u||this.notifyListeners(r,u)},c=this.storage.getItem(r);_u()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Bu):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},Fu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ho.type="LOCAL";const Vu=Ho;/**
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
 */class $o extends Vo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}$o.type="SESSION";const zo=$o;/**
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
 */function Hu(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Cn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new Cn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:c}=i.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const _=Array.from(u).map(async E=>E(i.origin,c)),w=await Hu(_);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:w})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cn.receivers=[];/**
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
 */function Bi(n="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return n+i}/**
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
 */class $u{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,u;return new Promise((_,w)=>{const E=Bi("",20);o.port1.start();const S=setTimeout(()=>{w(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(b){const T=b;if(T.data.eventId===E)switch(T.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{w(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),_(T.data.response);break;default:clearTimeout(S),clearTimeout(c),w(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:E,data:i},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function fe(){return window}function zu(n){fe().location.href=n}/**
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
 */function Wo(){return typeof fe().WorkerGlobalScope<"u"&&typeof fe().importScripts=="function"}async function Wu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gu(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ku(){return Wo()?self:null}/**
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
 */const Go="firebaseLocalStorageDb",qu=1,Tn="firebaseLocalStorage",Ko="fbase_key";class xt{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function kn(n,e){return n.transaction([Tn],e?"readwrite":"readonly").objectStore(Tn)}function Ju(){const n=indexedDB.deleteDatabase(Go);return new xt(n).toPromise()}function Ti(){const n=indexedDB.open(Go,qu);return new Promise((e,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Tn,{keyPath:Ko})}catch(o){i(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Tn)?e(r):(r.close(),await Ju(),e(await Ti()))})})}async function vs(n,e,i){const r=kn(n,!0).put({[Ko]:e,value:i});return new xt(r).toPromise()}async function Xu(n,e){const i=kn(n,!1).get(e),r=await new xt(i).toPromise();return r===void 0?null:r.value}function _s(n,e){const i=kn(n,!0).delete(e);return new xt(i).toPromise()}const Yu=800,Zu=3;class qo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ti(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>Zu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cn._getInstance(Ku()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await Wu(),!this.activeServiceWorker)return;this.sender=new $u(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ti();return await vs(e,En,"1"),await _s(e,En),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>vs(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>Xu(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>_s(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=kn(o,!1).getAll();return new xt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qo.type="LOCAL";const Qu=qo;new Mt(3e4,6e4);/**
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
 */function eh(n,e){return e?ve(e):(k(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Vi extends jo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,i){return Qe(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function th(n){return Uu(n.auth,new Vi(n),n.bypassAuthState)}function nh(n){const{auth:e,user:i}=n;return k(i,e,"internal-error"),Mu(i,new Vi(n),n.bypassAuthState)}async function ih(n){const{auth:e,user:i}=n;return k(i,e,"internal-error"),Lu(i,new Vi(n),n.bypassAuthState)}/**
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
 */class Jo{constructor(e,i,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:u,type:_}=e;if(u){this.reject(u);return}const w={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(_)(w))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return th;case"linkViaPopup":case"linkViaRedirect":return ih;case"reauthViaPopup":case"reauthViaRedirect":return nh;default:ye(this.auth,"internal-error")}}resolve(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rh=new Mt(2e3,1e4);class Xe extends Jo{constructor(e,i,r,o,c){super(e,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Xe.currentPopupAction&&Xe.currentPopupAction.cancel(),Xe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){we(this.filter.length===1,"Popup operations only handle one event");const e=Bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rh.get())};e()}}Xe.currentPopupAction=null;/**
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
 */const sh="pendingRedirect",dn=new Map;class oh extends Jo{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=dn.get(this.auth._key());if(!e){try{const r=await ah(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}dn.set(this.auth._key(),e)}return this.bypassAuthState||dn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ah(n,e){const i=uh(e),r=lh(n);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function ch(n,e){dn.set(n._key(),e)}function lh(n){return ve(n._redirectPersistence)}function uh(n){return hn(sh,n.config.apiKey,n.name)}async function hh(n,e,i=!1){if(he(n.app))return Promise.reject(Be(n));const r=ji(n),o=eh(r,e),u=await new oh(r,o,i).execute();return u&&!i&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const dh=10*60*1e3;class fh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ph(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!Xo(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(de(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dh&&this.cachedEventUids.clear(),this.cachedEventUids.has(ys(e))}saveEventToCache(e){this.cachedEventUids.add(ys(e)),this.lastProcessedEventTime=Date.now()}}function ys(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xo({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ph(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xo(n);default:return!1}}/**
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
 */async function gh(n,e={}){return ot(n,"GET","/v1/projects",e)}/**
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
 */const mh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vh=/^https?/;async function _h(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gh(n);for(const i of e)try{if(yh(i))return}catch{}ye(n,"unauthorized-domain")}function yh(n){const e=Ii(),{protocol:i,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&u.hostname===r}if(!vh.test(i))return!1;if(mh.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const wh=new Mt(3e4,6e4);function ws(){const n=fe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function Ih(n){return new Promise((e,i)=>{var r,o,c;function u(){ws(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ws(),i(de(n,"network-request-failed"))},timeout:wh.get()})}if(!((o=(r=fe().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=fe().gapi)===null||c===void 0)&&c.load)u();else{const _=Cu("iframefcb");return fe()[_]=()=>{gapi.load?u():i(de(n,"network-request-failed"))},Su(`${bu()}?onload=${_}`).catch(w=>i(w))}}).catch(e=>{throw fn=null,e})}let fn=null;function Eh(n){return fn=fn||Ih(n),fn}/**
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
 */const Th=new Mt(5e3,15e3),Ah="__/auth/iframe",Sh="emulator/auth/iframe",bh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ch=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kh(n){const e=n.config;k(e.authDomain,n,"auth-domain-config-required");const i=e.emulator?Li(e,Sh):`https://${n.config.authDomain}/${Ah}`,r={apiKey:e.apiKey,appName:n.name,v:st},o=Ch.get(n.config.apiHost);o&&(r.eid=o);const c=n._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${Lt(r).slice(1)}`}async function Rh(n){const e=await Eh(n),i=fe().gapi;return k(i,n,"internal-error"),e.open({where:document.body,url:kh(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bh,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const u=de(n,"network-request-failed"),_=fe().setTimeout(()=>{c(u)},Th.get());function w(){fe().clearTimeout(_),o(r)}r.ping(w).then(w,()=>{c(u)})}))}/**
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
 */const Ph={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Oh=500,Dh=600,Nh="_blank",Lh="http://localhost";class Is{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mh(n,e,i,r=Oh,o=Dh){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let _="";const w=Object.assign(Object.assign({},Ph),{width:r.toString(),height:o.toString(),top:c,left:u}),E=ne().toLowerCase();i&&(_=Po(E)?Nh:i),ko(E)&&(e=e||Lh,w.scrollbars="yes");const S=Object.entries(w).reduce((T,[R,C])=>`${T}${R}=${C},`,"");if(vu(E)&&_!=="_self")return Uh(e||"",_),new Is(null);const b=window.open(e||"",_,S);k(b,n,"popup-blocked");try{b.focus()}catch{}return new Is(b)}function Uh(n,e){const i=document.createElement("a");i.href=n,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const xh="__/auth/handler",jh="emulator/auth/handler",Fh=encodeURIComponent("fac");async function Es(n,e,i,r,o,c){k(n.config.authDomain,n,"auth-domain-config-required"),k(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:r,v:st,eventId:o};if(e instanceof Fo){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Fc(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,b]of Object.entries({}))u[S]=b}if(e instanceof Ut){const S=e.getScopes().filter(b=>b!=="");S.length>0&&(u.scopes=S.join(","))}n.tenantId&&(u.tid=n.tenantId);const _=u;for(const S of Object.keys(_))_[S]===void 0&&delete _[S];const w=await n._getAppCheckToken(),E=w?`#${Fh}=${encodeURIComponent(w)}`:"";return`${Bh(n)}?${Lt(_).slice(1)}${E}`}function Bh({config:n}){return n.emulator?Li(n,jh):`https://${n.authDomain}/${xh}`}/**
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
 */const fi="webStorageSupport";class Vh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zo,this._completeRedirectFn=hh,this._overrideRedirectResult=ch}async _openPopup(e,i,r,o){var c;we((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const u=await Es(e,i,r,Ii(),o);return Mh(e,u,Bi())}async _openRedirect(e,i,r,o){await this._originValidation(e);const c=await Es(e,i,r,Ii(),o);return zu(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(we(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await Rh(e),r=new fh(e);return i.register("authEvent",o=>(k(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(fi,{type:fi},o=>{var c;const u=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[fi];u!==void 0&&i(!!u),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=_h(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return Mo()||Ro()||xi()}}const Hh=Vh;var Ts="@firebase/auth",As="1.10.6";/**
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
 */class $h{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wh(n){tt(new He("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:u,authDomain:_}=r.options;k(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const w={apiKey:u,authDomain:_,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uo(n)},E=new Tu(r,o,c,w);return Ru(E,i),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),tt(new He("auth-internal",e=>{const i=ji(e.getProvider("auth").getImmediate());return(r=>new $h(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ne(Ts,As,zh(n)),Ne(Ts,As,"esm2017")}/**
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
 */const Gh=5*60,Kh=uo("authIdTokenMaxAge")||Gh;let Ss=null;const qh=n=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>Kh)return;const o=i==null?void 0:i.token;Ss!==o&&(Ss=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Jh(n=vo()){const e=Oi(n,"auth");if(e.isInitialized())return e.getImmediate();const i=ku(n,{popupRedirectResolver:Hh,persistence:[Qu,Vu,zo]}),r=uo("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const u=qh(c.toString());ju(i,u,()=>u(i.currentUser)),xu(i,_=>u(_))}}const o=co("auth");return o&&Pu(i,`http://${o}`),i}function Xh(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Au({loadJS(n){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const c=de("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",Xh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wh("Browser");var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(f,h){function d(){}d.prototype=h.prototype,f.D=h.prototype,f.prototype=new d,f.prototype.constructor=f,f.C=function(g,m,v){for(var p=Array(arguments.length-2),B=2;B<arguments.length;B++)p[B-2]=arguments[B];return h.prototype[m].apply(g,p)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(f,h,d){d||(d=0);var g=Array(16);if(typeof h=="string")for(var m=0;16>m;++m)g[m]=h.charCodeAt(d++)|h.charCodeAt(d++)<<8|h.charCodeAt(d++)<<16|h.charCodeAt(d++)<<24;else for(m=0;16>m;++m)g[m]=h[d++]|h[d++]<<8|h[d++]<<16|h[d++]<<24;h=f.g[0],d=f.g[1],m=f.g[2];var v=f.g[3],p=h+(v^d&(m^v))+g[0]+3614090360&4294967295;h=d+(p<<7&4294967295|p>>>25),p=v+(m^h&(d^m))+g[1]+3905402710&4294967295,v=h+(p<<12&4294967295|p>>>20),p=m+(d^v&(h^d))+g[2]+606105819&4294967295,m=v+(p<<17&4294967295|p>>>15),p=d+(h^m&(v^h))+g[3]+3250441966&4294967295,d=m+(p<<22&4294967295|p>>>10),p=h+(v^d&(m^v))+g[4]+4118548399&4294967295,h=d+(p<<7&4294967295|p>>>25),p=v+(m^h&(d^m))+g[5]+1200080426&4294967295,v=h+(p<<12&4294967295|p>>>20),p=m+(d^v&(h^d))+g[6]+2821735955&4294967295,m=v+(p<<17&4294967295|p>>>15),p=d+(h^m&(v^h))+g[7]+4249261313&4294967295,d=m+(p<<22&4294967295|p>>>10),p=h+(v^d&(m^v))+g[8]+1770035416&4294967295,h=d+(p<<7&4294967295|p>>>25),p=v+(m^h&(d^m))+g[9]+2336552879&4294967295,v=h+(p<<12&4294967295|p>>>20),p=m+(d^v&(h^d))+g[10]+4294925233&4294967295,m=v+(p<<17&4294967295|p>>>15),p=d+(h^m&(v^h))+g[11]+2304563134&4294967295,d=m+(p<<22&4294967295|p>>>10),p=h+(v^d&(m^v))+g[12]+1804603682&4294967295,h=d+(p<<7&4294967295|p>>>25),p=v+(m^h&(d^m))+g[13]+4254626195&4294967295,v=h+(p<<12&4294967295|p>>>20),p=m+(d^v&(h^d))+g[14]+2792965006&4294967295,m=v+(p<<17&4294967295|p>>>15),p=d+(h^m&(v^h))+g[15]+1236535329&4294967295,d=m+(p<<22&4294967295|p>>>10),p=h+(m^v&(d^m))+g[1]+4129170786&4294967295,h=d+(p<<5&4294967295|p>>>27),p=v+(d^m&(h^d))+g[6]+3225465664&4294967295,v=h+(p<<9&4294967295|p>>>23),p=m+(h^d&(v^h))+g[11]+643717713&4294967295,m=v+(p<<14&4294967295|p>>>18),p=d+(v^h&(m^v))+g[0]+3921069994&4294967295,d=m+(p<<20&4294967295|p>>>12),p=h+(m^v&(d^m))+g[5]+3593408605&4294967295,h=d+(p<<5&4294967295|p>>>27),p=v+(d^m&(h^d))+g[10]+38016083&4294967295,v=h+(p<<9&4294967295|p>>>23),p=m+(h^d&(v^h))+g[15]+3634488961&4294967295,m=v+(p<<14&4294967295|p>>>18),p=d+(v^h&(m^v))+g[4]+3889429448&4294967295,d=m+(p<<20&4294967295|p>>>12),p=h+(m^v&(d^m))+g[9]+568446438&4294967295,h=d+(p<<5&4294967295|p>>>27),p=v+(d^m&(h^d))+g[14]+3275163606&4294967295,v=h+(p<<9&4294967295|p>>>23),p=m+(h^d&(v^h))+g[3]+4107603335&4294967295,m=v+(p<<14&4294967295|p>>>18),p=d+(v^h&(m^v))+g[8]+1163531501&4294967295,d=m+(p<<20&4294967295|p>>>12),p=h+(m^v&(d^m))+g[13]+2850285829&4294967295,h=d+(p<<5&4294967295|p>>>27),p=v+(d^m&(h^d))+g[2]+4243563512&4294967295,v=h+(p<<9&4294967295|p>>>23),p=m+(h^d&(v^h))+g[7]+1735328473&4294967295,m=v+(p<<14&4294967295|p>>>18),p=d+(v^h&(m^v))+g[12]+2368359562&4294967295,d=m+(p<<20&4294967295|p>>>12),p=h+(d^m^v)+g[5]+4294588738&4294967295,h=d+(p<<4&4294967295|p>>>28),p=v+(h^d^m)+g[8]+2272392833&4294967295,v=h+(p<<11&4294967295|p>>>21),p=m+(v^h^d)+g[11]+1839030562&4294967295,m=v+(p<<16&4294967295|p>>>16),p=d+(m^v^h)+g[14]+4259657740&4294967295,d=m+(p<<23&4294967295|p>>>9),p=h+(d^m^v)+g[1]+2763975236&4294967295,h=d+(p<<4&4294967295|p>>>28),p=v+(h^d^m)+g[4]+1272893353&4294967295,v=h+(p<<11&4294967295|p>>>21),p=m+(v^h^d)+g[7]+4139469664&4294967295,m=v+(p<<16&4294967295|p>>>16),p=d+(m^v^h)+g[10]+3200236656&4294967295,d=m+(p<<23&4294967295|p>>>9),p=h+(d^m^v)+g[13]+681279174&4294967295,h=d+(p<<4&4294967295|p>>>28),p=v+(h^d^m)+g[0]+3936430074&4294967295,v=h+(p<<11&4294967295|p>>>21),p=m+(v^h^d)+g[3]+3572445317&4294967295,m=v+(p<<16&4294967295|p>>>16),p=d+(m^v^h)+g[6]+76029189&4294967295,d=m+(p<<23&4294967295|p>>>9),p=h+(d^m^v)+g[9]+3654602809&4294967295,h=d+(p<<4&4294967295|p>>>28),p=v+(h^d^m)+g[12]+3873151461&4294967295,v=h+(p<<11&4294967295|p>>>21),p=m+(v^h^d)+g[15]+530742520&4294967295,m=v+(p<<16&4294967295|p>>>16),p=d+(m^v^h)+g[2]+3299628645&4294967295,d=m+(p<<23&4294967295|p>>>9),p=h+(m^(d|~v))+g[0]+4096336452&4294967295,h=d+(p<<6&4294967295|p>>>26),p=v+(d^(h|~m))+g[7]+1126891415&4294967295,v=h+(p<<10&4294967295|p>>>22),p=m+(h^(v|~d))+g[14]+2878612391&4294967295,m=v+(p<<15&4294967295|p>>>17),p=d+(v^(m|~h))+g[5]+4237533241&4294967295,d=m+(p<<21&4294967295|p>>>11),p=h+(m^(d|~v))+g[12]+1700485571&4294967295,h=d+(p<<6&4294967295|p>>>26),p=v+(d^(h|~m))+g[3]+2399980690&4294967295,v=h+(p<<10&4294967295|p>>>22),p=m+(h^(v|~d))+g[10]+4293915773&4294967295,m=v+(p<<15&4294967295|p>>>17),p=d+(v^(m|~h))+g[1]+2240044497&4294967295,d=m+(p<<21&4294967295|p>>>11),p=h+(m^(d|~v))+g[8]+1873313359&4294967295,h=d+(p<<6&4294967295|p>>>26),p=v+(d^(h|~m))+g[15]+4264355552&4294967295,v=h+(p<<10&4294967295|p>>>22),p=m+(h^(v|~d))+g[6]+2734768916&4294967295,m=v+(p<<15&4294967295|p>>>17),p=d+(v^(m|~h))+g[13]+1309151649&4294967295,d=m+(p<<21&4294967295|p>>>11),p=h+(m^(d|~v))+g[4]+4149444226&4294967295,h=d+(p<<6&4294967295|p>>>26),p=v+(d^(h|~m))+g[11]+3174756917&4294967295,v=h+(p<<10&4294967295|p>>>22),p=m+(h^(v|~d))+g[2]+718787259&4294967295,m=v+(p<<15&4294967295|p>>>17),p=d+(v^(m|~h))+g[9]+3951481745&4294967295,f.g[0]=f.g[0]+h&4294967295,f.g[1]=f.g[1]+(m+(p<<21&4294967295|p>>>11))&4294967295,f.g[2]=f.g[2]+m&4294967295,f.g[3]=f.g[3]+v&4294967295}r.prototype.u=function(f,h){h===void 0&&(h=f.length);for(var d=h-this.blockSize,g=this.B,m=this.h,v=0;v<h;){if(m==0)for(;v<=d;)o(this,f,v),v+=this.blockSize;if(typeof f=="string"){for(;v<h;)if(g[m++]=f.charCodeAt(v++),m==this.blockSize){o(this,g),m=0;break}}else for(;v<h;)if(g[m++]=f[v++],m==this.blockSize){o(this,g),m=0;break}}this.h=m,this.o+=h},r.prototype.v=function(){var f=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);f[0]=128;for(var h=1;h<f.length-8;++h)f[h]=0;var d=8*this.o;for(h=f.length-8;h<f.length;++h)f[h]=d&255,d/=256;for(this.u(f),f=Array(16),h=d=0;4>h;++h)for(var g=0;32>g;g+=8)f[d++]=this.g[h]>>>g&255;return f};function c(f,h){var d=_;return Object.prototype.hasOwnProperty.call(d,f)?d[f]:d[f]=h(f)}function u(f,h){this.h=h;for(var d=[],g=!0,m=f.length-1;0<=m;m--){var v=f[m]|0;g&&v==h||(d[m]=v,g=!1)}this.g=d}var _={};function w(f){return-128<=f&&128>f?c(f,function(h){return new u([h|0],0>h?-1:0)}):new u([f|0],0>f?-1:0)}function E(f){if(isNaN(f)||!isFinite(f))return b;if(0>f)return O(E(-f));for(var h=[],d=1,g=0;f>=d;g++)h[g]=f/d|0,d*=4294967296;return new u(h,0)}function S(f,h){if(f.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(f.charAt(0)=="-")return O(S(f.substring(1),h));if(0<=f.indexOf("-"))throw Error('number format error: interior "-" character');for(var d=E(Math.pow(h,8)),g=b,m=0;m<f.length;m+=8){var v=Math.min(8,f.length-m),p=parseInt(f.substring(m,m+v),h);8>v?(v=E(Math.pow(h,v)),g=g.j(v).add(E(p))):(g=g.j(d),g=g.add(E(p)))}return g}var b=w(0),T=w(1),R=w(16777216);n=u.prototype,n.m=function(){if(D(this))return-O(this).m();for(var f=0,h=1,d=0;d<this.g.length;d++){var g=this.i(d);f+=(0<=g?g:4294967296+g)*h,h*=4294967296}return f},n.toString=function(f){if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(C(this))return"0";if(D(this))return"-"+O(this).toString(f);for(var h=E(Math.pow(f,6)),d=this,g="";;){var m=H(d,h).g;d=z(d,m.j(h));var v=((0<d.g.length?d.g[0]:d.h)>>>0).toString(f);if(d=m,C(d))return v+g;for(;6>v.length;)v="0"+v;g=v+g}},n.i=function(f){return 0>f?0:f<this.g.length?this.g[f]:this.h};function C(f){if(f.h!=0)return!1;for(var h=0;h<f.g.length;h++)if(f.g[h]!=0)return!1;return!0}function D(f){return f.h==-1}n.l=function(f){return f=z(this,f),D(f)?-1:C(f)?0:1};function O(f){for(var h=f.g.length,d=[],g=0;g<h;g++)d[g]=~f.g[g];return new u(d,~f.h).add(T)}n.abs=function(){return D(this)?O(this):this},n.add=function(f){for(var h=Math.max(this.g.length,f.g.length),d=[],g=0,m=0;m<=h;m++){var v=g+(this.i(m)&65535)+(f.i(m)&65535),p=(v>>>16)+(this.i(m)>>>16)+(f.i(m)>>>16);g=p>>>16,v&=65535,p&=65535,d[m]=p<<16|v}return new u(d,d[d.length-1]&-2147483648?-1:0)};function z(f,h){return f.add(O(h))}n.j=function(f){if(C(this)||C(f))return b;if(D(this))return D(f)?O(this).j(O(f)):O(O(this).j(f));if(D(f))return O(this.j(O(f)));if(0>this.l(R)&&0>f.l(R))return E(this.m()*f.m());for(var h=this.g.length+f.g.length,d=[],g=0;g<2*h;g++)d[g]=0;for(g=0;g<this.g.length;g++)for(var m=0;m<f.g.length;m++){var v=this.i(g)>>>16,p=this.i(g)&65535,B=f.i(m)>>>16,se=f.i(m)&65535;d[2*g+2*m]+=p*se,F(d,2*g+2*m),d[2*g+2*m+1]+=v*se,F(d,2*g+2*m+1),d[2*g+2*m+1]+=p*B,F(d,2*g+2*m+1),d[2*g+2*m+2]+=v*B,F(d,2*g+2*m+2)}for(g=0;g<h;g++)d[g]=d[2*g+1]<<16|d[2*g];for(g=h;g<2*h;g++)d[g]=0;return new u(d,0)};function F(f,h){for(;(f[h]&65535)!=f[h];)f[h+1]+=f[h]>>>16,f[h]&=65535,h++}function U(f,h){this.g=f,this.h=h}function H(f,h){if(C(h))throw Error("division by zero");if(C(f))return new U(b,b);if(D(f))return h=H(O(f),h),new U(O(h.g),O(h.h));if(D(h))return h=H(f,O(h)),new U(O(h.g),h.h);if(30<f.g.length){if(D(f)||D(h))throw Error("slowDivide_ only works with positive integers.");for(var d=T,g=h;0>=g.l(f);)d=W(d),g=W(g);var m=G(d,1),v=G(g,1);for(g=G(g,2),d=G(d,2);!C(g);){var p=v.add(g);0>=p.l(f)&&(m=m.add(d),v=p),g=G(g,1),d=G(d,1)}return h=z(f,m.j(h)),new U(m,h)}for(m=b;0<=f.l(h);){for(d=Math.max(1,Math.floor(f.m()/h.m())),g=Math.ceil(Math.log(d)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),v=E(d),p=v.j(h);D(p)||0<p.l(f);)d-=g,v=E(d),p=v.j(h);C(v)&&(v=T),m=m.add(v),f=z(f,p)}return new U(m,f)}n.A=function(f){return H(this,f).h},n.and=function(f){for(var h=Math.max(this.g.length,f.g.length),d=[],g=0;g<h;g++)d[g]=this.i(g)&f.i(g);return new u(d,this.h&f.h)},n.or=function(f){for(var h=Math.max(this.g.length,f.g.length),d=[],g=0;g<h;g++)d[g]=this.i(g)|f.i(g);return new u(d,this.h|f.h)},n.xor=function(f){for(var h=Math.max(this.g.length,f.g.length),d=[],g=0;g<h;g++)d[g]=this.i(g)^f.i(g);return new u(d,this.h^f.h)};function W(f){for(var h=f.g.length+1,d=[],g=0;g<h;g++)d[g]=f.i(g)<<1|f.i(g-1)>>>31;return new u(d,f.h)}function G(f,h){var d=h>>5;h%=32;for(var g=f.g.length-d,m=[],v=0;v<g;v++)m[v]=0<h?f.i(v+d)>>>h|f.i(v+d+1)<<32-h:f.i(v+d);return new u(m,f.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=E,u.fromString=S,Yo=u}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});var sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof sn=="object"&&sn];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=i(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var l=0;l<t.length-1;l++){var y=t[l];if(!(y in a))break e;a=a[y]}t=t[t.length-1],l=a[t],s=s(l),s!=l&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,l=!1,y={next:function(){if(!l&&a<t.length){var I=a++;return{value:s(I,t[I]),done:!1}}return l=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},_=this||self;function w(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function E(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function S(t,s,a){return t.call.apply(t.bind,arguments)}function b(t,s,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,l),t.apply(s,y)}}return function(){return t.apply(s,arguments)}}function T(t,s,a){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:b,T.apply(null,arguments)}function R(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function C(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(l,y,I){for(var A=Array(arguments.length-2),j=2;j<arguments.length;j++)A[j-2]=arguments[j];return s.prototype[y].apply(l,A)}}function D(t){const s=t.length;if(0<s){const a=Array(s);for(let l=0;l<s;l++)a[l]=t[l];return a}return[]}function O(t,s){for(let a=1;a<arguments.length;a++){const l=arguments[a];if(w(l)){const y=t.length||0,I=l.length||0;t.length=y+I;for(let A=0;A<I;A++)t[y+A]=l[A]}else t.push(l)}}class z{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function F(t){return/^[\s\xa0]*$/.test(t)}function U(){var t=_.navigator;return t&&(t=t.userAgent)?t:""}function H(t){return H[" "](t),t}H[" "]=function(){};var W=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function G(t,s,a){for(const l in t)s.call(a,t[l],l,t)}function f(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function h(t){const s={};for(const a in t)s[a]=t[a];return s}const d="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(t,s){let a,l;for(let y=1;y<arguments.length;y++){l=arguments[y];for(a in l)t[a]=l[a];for(let I=0;I<d.length;I++)a=d[I],Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function v(t){_.setTimeout(()=>{throw t},0)}function p(){var t=Le;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class B{constructor(){this.h=this.g=null}add(s,a){const l=se.get();l.set(s,a),this.h?this.h.next=l:this.g=l,this.h=l}}var se=new z(()=>new ze,t=>t.reset());class ze{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let x,ue=!1,Le=new B,at=()=>{const t=_.Promise.resolve(void 0);x=()=>{t.then(sa)}};var sa=()=>{for(var t;t=p();){try{t.h.call(t.g)}catch(a){v(a)}var s=se;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}ue=!1};function Ee(){this.s=this.s,this.C=this.C}Ee.prototype.s=!1,Ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var oa=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};_.addEventListener("test",a,s),_.removeEventListener("test",a,s)}catch{}return t}();function ct(t,s){if(q.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(W){e:{try{H(s.nodeName);var y=!0;break e}catch{}y=!1}y||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:aa[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.aa.h.call(this)}}C(ct,q);var aa={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),ca=0;function la(t,s,a,l,y){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.ha=y,this.key=++ca,this.da=this.fa=!1}function Bt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Vt(t){this.src=t,this.g={},this.h=0}Vt.prototype.add=function(t,s,a,l,y){var I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);var A=Pn(t,s,l,y);return-1<A?(s=t[A],a||(s.fa=!1)):(s=new la(s,this.src,I,!!l,y),s.fa=a,t.push(s)),s};function Rn(t,s){var a=s.type;if(a in t.g){var l=t.g[a],y=Array.prototype.indexOf.call(l,s,void 0),I;(I=0<=y)&&Array.prototype.splice.call(l,y,1),I&&(Bt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function Pn(t,s,a,l){for(var y=0;y<t.length;++y){var I=t[y];if(!I.da&&I.listener==s&&I.capture==!!a&&I.ha==l)return y}return-1}var On="closure_lm_"+(1e6*Math.random()|0),Dn={};function zi(t,s,a,l,y){if(Array.isArray(s)){for(var I=0;I<s.length;I++)zi(t,s[I],a,l,y);return null}return a=Ki(a),t&&t[Ft]?t.K(s,a,E(l)?!!l.capture:!1,y):ua(t,s,a,!1,l,y)}function ua(t,s,a,l,y,I){if(!s)throw Error("Invalid event type");var A=E(y)?!!y.capture:!!y,j=Ln(t);if(j||(t[On]=j=new Vt(t)),a=j.add(s,a,l,A,I),a.proxy)return a;if(l=ha(),a.proxy=l,l.src=t,l.listener=a,t.addEventListener)oa||(y=A),y===void 0&&(y=!1),t.addEventListener(s.toString(),l,y);else if(t.attachEvent)t.attachEvent(Gi(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function ha(){function t(a){return s.call(t.src,t.listener,a)}const s=da;return t}function Wi(t,s,a,l,y){if(Array.isArray(s))for(var I=0;I<s.length;I++)Wi(t,s[I],a,l,y);else l=E(l)?!!l.capture:!!l,a=Ki(a),t&&t[Ft]?(t=t.i,s=String(s).toString(),s in t.g&&(I=t.g[s],a=Pn(I,a,l,y),-1<a&&(Bt(I[a]),Array.prototype.splice.call(I,a,1),I.length==0&&(delete t.g[s],t.h--)))):t&&(t=Ln(t))&&(s=t.g[s.toString()],t=-1,s&&(t=Pn(s,a,l,y)),(a=-1<t?s[t]:null)&&Nn(a))}function Nn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Ft])Rn(s.i,t);else{var a=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(a,l,t.capture):s.detachEvent?s.detachEvent(Gi(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=Ln(s))?(Rn(a,t),a.h==0&&(a.src=null,s[On]=null)):Bt(t)}}}function Gi(t){return t in Dn?Dn[t]:Dn[t]="on"+t}function da(t,s){if(t.da)t=!0;else{s=new ct(s,this);var a=t.listener,l=t.ha||t.src;t.fa&&Nn(t),t=a.call(l,s)}return t}function Ln(t){return t=t[On],t instanceof Vt?t:null}var Mn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ki(t){return typeof t=="function"?t:(t[Mn]||(t[Mn]=function(s){return t.handleEvent(s)}),t[Mn])}function J(){Ee.call(this),this.i=new Vt(this),this.M=this,this.F=null}C(J,Ee),J.prototype[Ft]=!0,J.prototype.removeEventListener=function(t,s,a,l){Wi(this,t,s,a,l)};function Q(t,s){var a,l=t.F;if(l)for(a=[];l;l=l.F)a.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new q(s,t);else if(s instanceof q)s.target=s.target||t;else{var y=s;s=new q(l,t),g(s,y)}if(y=!0,a)for(var I=a.length-1;0<=I;I--){var A=s.g=a[I];y=Ht(A,l,!0,s)&&y}if(A=s.g=t,y=Ht(A,l,!0,s)&&y,y=Ht(A,l,!1,s)&&y,a)for(I=0;I<a.length;I++)A=s.g=a[I],y=Ht(A,l,!1,s)&&y}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],l=0;l<a.length;l++)Bt(a[l]);delete t.g[s],t.h--}}this.F=null},J.prototype.K=function(t,s,a,l){return this.i.add(String(t),s,!1,a,l)},J.prototype.L=function(t,s,a,l){return this.i.add(String(t),s,!0,a,l)};function Ht(t,s,a,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var y=!0,I=0;I<s.length;++I){var A=s[I];if(A&&!A.da&&A.capture==a){var j=A.listener,K=A.ha||A.src;A.fa&&Rn(t.i,A),y=j.call(K,l)!==!1&&y}}return y&&!l.defaultPrevented}function qi(t,s,a){if(typeof t=="function")a&&(t=T(t,a));else if(t&&typeof t.handleEvent=="function")t=T(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:_.setTimeout(t,s||0)}function Ji(t){t.g=qi(()=>{t.g=null,t.i&&(t.i=!1,Ji(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class fa extends Ee{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Ji(this)}N(){super.N(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(t){Ee.call(this),this.h=t,this.g={}}C(lt,Ee);var Xi=[];function Yi(t){G(t.g,function(s,a){this.g.hasOwnProperty(a)&&Nn(s)},t),t.g={}}lt.prototype.N=function(){lt.aa.N.call(this),Yi(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Un=_.JSON.stringify,pa=_.JSON.parse,ga=class{stringify(t){return _.JSON.stringify(t,void 0)}parse(t){return _.JSON.parse(t,void 0)}};function xn(){}xn.prototype.h=null;function Zi(t){return t.h||(t.h=t.i())}function ma(){}var ut={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){q.call(this,"d")}C(jn,q);function Fn(){q.call(this,"c")}C(Fn,q);var We={},Qi=null;function Bn(){return Qi=Qi||new J}We.La="serverreachability";function er(t){q.call(this,We.La,t)}C(er,q);function ht(t){const s=Bn();Q(s,new er(s))}We.STAT_EVENT="statevent";function tr(t,s){q.call(this,We.STAT_EVENT,t),this.stat=s}C(tr,q);function ee(t){const s=Bn();Q(s,new tr(s,t))}We.Ma="timingevent";function nr(t,s){q.call(this,We.Ma,t),this.size=s}C(nr,q);function dt(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){t()},s)}function ft(){this.g=!0}ft.prototype.xa=function(){this.g=!1};function va(t,s,a,l,y,I){t.info(function(){if(t.g)if(I)for(var A="",j=I.split("&"),K=0;K<j.length;K++){var N=j[K].split("=");if(1<N.length){var X=N[0];N=N[1];var Y=X.split("_");A=2<=Y.length&&Y[1]=="type"?A+(X+"="+N+"&"):A+(X+"=redacted&")}}else A=null;else A=I;return"XMLHTTP REQ ("+l+") [attempt "+y+"]: "+s+`
`+a+`
`+A})}function _a(t,s,a,l,y,I,A){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+y+"]: "+s+`
`+a+`
`+I+" "+A})}function Ge(t,s,a,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+wa(t,a)+(l?" "+l:"")})}function ya(t,s){t.info(function(){return"TIMEOUT: "+s})}ft.prototype.info=function(){};function wa(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var l=a[t];if(!(2>l.length)){var y=l[1];if(Array.isArray(y)&&!(1>y.length)){var I=y[0];if(I!="noop"&&I!="stop"&&I!="close")for(var A=1;A<y.length;A++)y[A]=""}}}}return Un(a)}catch{return s}}var Vn={NO_ERROR:0,TIMEOUT:8},Ia={},Hn;function $t(){}C($t,xn),$t.prototype.g=function(){return new XMLHttpRequest},$t.prototype.i=function(){return{}},Hn=new $t;function Te(t,s,a,l){this.j=t,this.i=s,this.l=a,this.R=l||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ir}function ir(){this.i=null,this.g="",this.h=!1}var rr={},$n={};function zn(t,s,a){t.L=1,t.v=Kt(pe(s)),t.m=a,t.P=!0,sr(t,null)}function sr(t,s){t.F=Date.now(),zt(t),t.A=pe(t.v);var a=t.A,l=t.R;Array.isArray(l)||(l=[String(l)]),yr(a.i,"t",l),t.C=0,a=t.j.J,t.h=new ir,t.g=xr(t.j,a?s:null,!t.m),0<t.O&&(t.M=new fa(T(t.Y,t,t.g),t.O)),s=t.U,a=t.g,l=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Xi[0]=y.toString()),y=Xi);for(var I=0;I<y.length;I++){var A=zi(a,y[I],l||s.handleEvent,!1,s.h||s);if(!A)break;s.g[A.key]=A}s=t.H?h(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),ht(),va(t.i,t.u,t.A,t.l,t.R,t.m)}Te.prototype.ca=function(t){t=t.target;const s=this.M;s&&ge(t)==3?s.j():this.Y(t)},Te.prototype.Y=function(t){try{if(t==this.g)e:{const Y=ge(this.g);var s=this.g.Ba();const Je=this.g.Z();if(!(3>Y)&&(Y!=3||this.g&&(this.h.h||this.g.oa()||br(this.g)))){this.J||Y!=4||s==7||(s==8||0>=Je?ht(3):ht(2)),Wn(this);var a=this.g.Z();this.X=a;t:if(or(this)){var l=br(this.g);t="";var y=l.length,I=ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Me(this),pt(this);var A="";break t}this.h.i=new _.TextDecoder}for(s=0;s<y;s++)this.h.h=!0,t+=this.h.i.decode(l[s],{stream:!(I&&s==y-1)});l.length=0,this.h.g+=t,this.C=0,A=this.h.g}else A=this.g.oa();if(this.o=a==200,_a(this.i,this.u,this.A,this.l,this.R,Y,a),this.o){if(this.T&&!this.K){t:{if(this.g){var j,K=this.g;if((j=K.g?K.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(j)){var N=j;break t}}N=null}if(a=N)Ge(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gn(this,a);else{this.o=!1,this.s=3,ee(12),Me(this),pt(this);break e}}if(this.P){a=!0;let ae;for(;!this.J&&this.C<A.length;)if(ae=Ea(this,A),ae==$n){Y==4&&(this.s=4,ee(14),a=!1),Ge(this.i,this.l,null,"[Incomplete Response]");break}else if(ae==rr){this.s=4,ee(15),Ge(this.i,this.l,A,"[Invalid Chunk]"),a=!1;break}else Ge(this.i,this.l,ae,null),Gn(this,ae);if(or(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||A.length!=0||this.h.h||(this.s=1,ee(16),a=!1),this.o=this.o&&a,!a)Ge(this.i,this.l,A,"[Invalid Chunked Response]"),Me(this),pt(this);else if(0<A.length&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.ba&&!X.M&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+A.length),Zn(X),X.M=!0,ee(11))}}else Ge(this.i,this.l,A,null),Gn(this,A);Y==4&&Me(this),this.o&&!this.J&&(Y==4?Nr(this.j,this):(this.o=!1,zt(this)))}else Fa(this.g),a==400&&0<A.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),Me(this),pt(this)}}}catch{}finally{}};function or(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Ea(t,s){var a=t.C,l=s.indexOf(`
`,a);return l==-1?$n:(a=Number(s.substring(a,l)),isNaN(a)?rr:(l+=1,l+a>s.length?$n:(s=s.slice(l,l+a),t.C=l+a,s)))}Te.prototype.cancel=function(){this.J=!0,Me(this)};function zt(t){t.S=Date.now()+t.I,ar(t,t.I)}function ar(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=dt(T(t.ba,t),s)}function Wn(t){t.B&&(_.clearTimeout(t.B),t.B=null)}Te.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(ya(this.i,this.A),this.L!=2&&(ht(),ee(17)),Me(this),this.s=2,pt(this)):ar(this,this.S-t)};function pt(t){t.j.G==0||t.J||Nr(t.j,t)}function Me(t){Wn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,Yi(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Gn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Kn(a.h,t))){if(!t.K&&Kn(a.h,t)&&a.G==3){try{var l=a.Da.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var y=l;if(y[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Qt(a),Yt(a);else break e;Yn(a),ee(18)}}else a.za=y[1],0<a.za-a.T&&37500>y[2]&&a.F&&a.v==0&&!a.C&&(a.C=dt(T(a.Za,a),6e3));if(1>=ur(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else xe(a,11)}else if((t.K||a.g==t)&&Qt(a),!F(s))for(y=a.Da.g.parse(s),s=0;s<y.length;s++){let N=y[s];if(a.T=N[0],N=N[1],a.G==2)if(N[0]=="c"){a.K=N[1],a.ia=N[2];const X=N[3];X!=null&&(a.la=X,a.j.info("VER="+a.la));const Y=N[4];Y!=null&&(a.Aa=Y,a.j.info("SVER="+a.Aa));const Je=N[5];Je!=null&&typeof Je=="number"&&0<Je&&(l=1.5*Je,a.L=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const ae=t.g;if(ae){const en=ae.g?ae.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(en){var I=l.h;I.g||en.indexOf("spdy")==-1&&en.indexOf("quic")==-1&&en.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(qn(I,I.h),I.h=null))}if(l.D){const Qn=ae.g?ae.g.getResponseHeader("X-HTTP-Session-Id"):null;Qn&&(l.ya=Qn,V(l.I,l.D,Qn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),l=a;var A=t;if(l.qa=Ur(l,l.J?l.ia:null,l.W),A.K){hr(l.h,A);var j=A,K=l.L;K&&(j.I=K),j.B&&(Wn(j),zt(j)),l.g=A}else Or(l);0<a.i.length&&Zt(a)}else N[0]!="stop"&&N[0]!="close"||xe(a,7);else a.G==3&&(N[0]=="stop"||N[0]=="close"?N[0]=="stop"?xe(a,7):Xn(a):N[0]!="noop"&&a.l&&a.l.ta(N),a.v=0)}}ht(4)}catch{}}var Ta=class{constructor(t,s){this.g=t,this.map=s}};function cr(t){this.l=t||10,_.PerformanceNavigationTiming?(t=_.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_.chrome&&_.chrome.loadTimes&&_.chrome.loadTimes()&&_.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lr(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ur(t){return t.h?1:t.g?t.g.size:0}function Kn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function qn(t,s){t.g?t.g.add(s):t.h=s}function hr(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}cr.prototype.cancel=function(){if(this.i=dr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function dr(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return D(t.i)}function Aa(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(w(t)){for(var s=[],a=t.length,l=0;l<a;l++)s.push(t[l]);return s}s=[],a=0;for(l in t)s[a++]=t[l];return s}function Sa(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(w(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const l in t)s[a++]=l;return s}}}function fr(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(w(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=Sa(t),l=Aa(t),y=l.length,I=0;I<y;I++)s.call(void 0,l[I],a&&a[I],t)}var pr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ba(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var l=t[a].indexOf("="),y=null;if(0<=l){var I=t[a].substring(0,l);y=t[a].substring(l+1)}else I=t[a];s(I,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Ue(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Ue){this.h=t.h,Wt(this,t.j),this.o=t.o,this.g=t.g,Gt(this,t.s),this.l=t.l;var s=t.i,a=new vt;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),gr(this,a),this.m=t.m}else t&&(s=String(t).match(pr))?(this.h=!1,Wt(this,s[1]||"",!0),this.o=gt(s[2]||""),this.g=gt(s[3]||"",!0),Gt(this,s[4]),this.l=gt(s[5]||"",!0),gr(this,s[6]||"",!0),this.m=gt(s[7]||"")):(this.h=!1,this.i=new vt(null,this.h))}Ue.prototype.toString=function(){var t=[],s=this.j;s&&t.push(mt(s,mr,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(mt(s,mr,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(mt(a,a.charAt(0)=="/"?Ra:ka,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",mt(a,Oa)),t.join("")};function pe(t){return new Ue(t)}function Wt(t,s,a){t.j=a?gt(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Gt(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function gr(t,s,a){s instanceof vt?(t.i=s,Da(t.i,t.h)):(a||(s=mt(s,Pa)),t.i=new vt(s,t.h))}function V(t,s,a){t.i.set(s,a)}function Kt(t){return V(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gt(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function mt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,Ca),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ca(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mr=/[#\/\?@]/g,ka=/[#\?:]/g,Ra=/[#\?]/g,Pa=/[#\?@]/g,Oa=/#/g;function vt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Ae(t){t.g||(t.g=new Map,t.h=0,t.i&&ba(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}n=vt.prototype,n.add=function(t,s){Ae(this),this.i=null,t=Ke(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function vr(t,s){Ae(t),s=Ke(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function _r(t,s){return Ae(t),s=Ke(t,s),t.g.has(s)}n.forEach=function(t,s){Ae(this),this.g.forEach(function(a,l){a.forEach(function(y){t.call(s,y,l,this)},this)},this)},n.na=function(){Ae(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let l=0;l<s.length;l++){const y=t[l];for(let I=0;I<y.length;I++)a.push(s[l])}return a},n.V=function(t){Ae(this);let s=[];if(typeof t=="string")_r(this,t)&&(s=s.concat(this.g.get(Ke(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},n.set=function(t,s){return Ae(this),this.i=null,t=Ke(this,t),_r(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},n.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function yr(t,s,a){vr(t,s),0<a.length&&(t.i=null,t.g.set(Ke(t,s),D(a)),t.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var l=s[a];const I=encodeURIComponent(String(l)),A=this.V(l);for(l=0;l<A.length;l++){var y=I;A[l]!==""&&(y+="="+encodeURIComponent(String(A[l]))),t.push(y)}}return this.i=t.join("&")};function Ke(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Da(t,s){s&&!t.j&&(Ae(t),t.i=null,t.g.forEach(function(a,l){var y=l.toLowerCase();l!=y&&(vr(this,l),yr(this,y,a))},t)),t.j=s}function Na(t,s){const a=new ft;if(_.Image){const l=new Image;l.onload=R(Se,a,"TestLoadImage: loaded",!0,s,l),l.onerror=R(Se,a,"TestLoadImage: error",!1,s,l),l.onabort=R(Se,a,"TestLoadImage: abort",!1,s,l),l.ontimeout=R(Se,a,"TestLoadImage: timeout",!1,s,l),_.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function La(t,s){const a=new ft,l=new AbortController,y=setTimeout(()=>{l.abort(),Se(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(I=>{clearTimeout(y),I.ok?Se(a,"TestPingServer: ok",!0,s):Se(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(y),Se(a,"TestPingServer: error",!1,s)})}function Se(t,s,a,l,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),l(a)}catch{}}function Ma(){this.g=new ga}function Ua(t,s,a){const l=a||"";try{fr(t,function(y,I){let A=y;E(y)&&(A=Un(y)),s.push(l+I+"="+encodeURIComponent(A))})}catch(y){throw s.push(l+"type="+encodeURIComponent("_badmap")),y}}function qt(t){this.l=t.Ub||null,this.j=t.eb||!1}C(qt,xn),qt.prototype.g=function(){return new Jt(this.l,this.j)},qt.prototype.i=function(t){return function(){return t}}({});function Jt(t,s){J.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Jt,J),n=Jt.prototype,n.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,yt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||_).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_t(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yt(this)),this.g&&(this.readyState=3,yt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wr(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function wr(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?_t(this):yt(this),this.readyState==3&&wr(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,_t(this))},n.Qa=function(t){this.g&&(this.response=t,_t(this))},n.ga=function(){this.g&&_t(this)};function _t(t){t.readyState=4,t.l=null,t.j=null,t.v=null,yt(t)}n.setRequestHeader=function(t,s){this.u.append(t,s)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function yt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Ir(t){let s="";return G(t,function(a,l){s+=l,s+=":",s+=a,s+=`\r
`}),s}function Jn(t,s,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=Ir(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):V(t,s,a))}function $(t){J.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C($,J);var xa=/^https?$/i,ja=["POST","PUT"];n=$.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,s,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hn.g(),this.v=this.o?Zi(this.o):Zi(Hn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(I){Er(this,I);return}if(t=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var y in l)a.set(y,l[y]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const I of l.keys())a.set(I,l.get(I));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),y=_.FormData&&t instanceof _.FormData,!(0<=Array.prototype.indexOf.call(ja,s,void 0))||l||y||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,A]of a)this.g.setRequestHeader(I,A);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sr(this),this.u=!0,this.g.send(t),this.u=!1}catch(I){Er(this,I)}};function Er(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,Tr(t),Xt(t)}function Tr(t){t.A||(t.A=!0,Q(t,"complete"),Q(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Q(this,"complete"),Q(this,"abort"),Xt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xt(this,!0)),$.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ar(this):this.bb())},n.bb=function(){Ar(this)};function Ar(t){if(t.h&&typeof u<"u"&&(!t.v[1]||ge(t)!=4||t.Z()!=2)){if(t.u&&ge(t)==4)qi(t.Ea,0,t);else if(Q(t,"readystatechange"),ge(t)==4){t.h=!1;try{const A=t.Z();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var l;if(l=A===0){var y=String(t.D).match(pr)[1]||null;!y&&_.self&&_.self.location&&(y=_.self.location.protocol.slice(0,-1)),l=!xa.test(y?y.toLowerCase():"")}a=l}if(a)Q(t,"complete"),Q(t,"success");else{t.m=6;try{var I=2<ge(t)?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.Z()+"]",Tr(t)}}finally{Xt(t)}}}}function Xt(t,s){if(t.g){Sr(t);const a=t.g,l=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||Q(t,"ready");try{a.onreadystatechange=l}catch{}}}function Sr(t){t.I&&(_.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function ge(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<ge(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),pa(s)}};function br(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Fa(t){const s={};t=(t.g&&2<=ge(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(F(t[l]))continue;var a=m(t[l]);const y=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=s[y]||[];s[y]=I,I.push(a)}f(s,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function Cr(t){this.Aa=0,this.i=[],this.j=new ft,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wt("baseRetryDelayMs",5e3,t),this.cb=wt("retryDelaySeedMs",1e4,t),this.Wa=wt("forwardChannelMaxRetries",2,t),this.wa=wt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new cr(t&&t.concurrentRequestLimit),this.Da=new Ma,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Cr.prototype,n.la=8,n.G=1,n.connect=function(t,s,a,l){ee(0),this.W=t,this.H=s||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.I=Ur(this,null,this.W),Zt(this)};function Xn(t){if(kr(t),t.G==3){var s=t.U++,a=pe(t.I);if(V(a,"SID",t.K),V(a,"RID",s),V(a,"TYPE","terminate"),It(t,a),s=new Te(t,t.j,s),s.L=2,s.v=Kt(pe(a)),a=!1,_.navigator&&_.navigator.sendBeacon)try{a=_.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&_.Image&&(new Image().src=s.v,a=!0),a||(s.g=xr(s.j,null),s.g.ea(s.v)),s.F=Date.now(),zt(s)}Mr(t)}function Yt(t){t.g&&(Zn(t),t.g.cancel(),t.g=null)}function kr(t){Yt(t),t.u&&(_.clearTimeout(t.u),t.u=null),Qt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&_.clearTimeout(t.s),t.s=null)}function Zt(t){if(!lr(t.h)&&!t.s){t.s=!0;var s=t.Ga;x||at(),ue||(x(),ue=!0),Le.add(s,t),t.B=0}}function Ba(t,s){return ur(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=dt(T(t.Ga,t,s),Lr(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new Te(this,this.j,t);let I=this.o;if(this.S&&(I?(I=h(I),g(I,this.S)):I=this.S),this.m!==null||this.O||(y.H=I,I=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=Pr(this,y,s),a=pe(this.I),V(a,"RID",t),V(a,"CVER",22),this.D&&V(a,"X-HTTP-Session-Id",this.D),It(this,a),I&&(this.O?s="headers="+encodeURIComponent(String(Ir(I)))+"&"+s:this.m&&Jn(a,this.m,I)),qn(this.h,y),this.Ua&&V(a,"TYPE","init"),this.P?(V(a,"$req",s),V(a,"SID","null"),y.T=!0,zn(y,a,null)):zn(y,a,s),this.G=2}}else this.G==3&&(t?Rr(this,t):this.i.length==0||lr(this.h)||Rr(this))};function Rr(t,s){var a;s?a=s.l:a=t.U++;const l=pe(t.I);V(l,"SID",t.K),V(l,"RID",a),V(l,"AID",t.T),It(t,l),t.m&&t.o&&Jn(l,t.m,t.o),a=new Te(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=Pr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),qn(t.h,a),zn(a,l,s)}function It(t,s){t.H&&G(t.H,function(a,l){V(s,l,a)}),t.l&&fr({},function(a,l){V(s,l,a)})}function Pr(t,s,a){a=Math.min(t.i.length,a);var l=t.l?T(t.l.Na,t.l,t):null;e:{var y=t.i;let I=-1;for(;;){const A=["count="+a];I==-1?0<a?(I=y[0].g,A.push("ofs="+I)):I=0:A.push("ofs="+I);let j=!0;for(let K=0;K<a;K++){let N=y[K].g;const X=y[K].map;if(N-=I,0>N)I=Math.max(0,y[K].g-100),j=!1;else try{Ua(X,A,"req"+N+"_")}catch{l&&l(X)}}if(j){l=A.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,l}function Or(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;x||at(),ue||(x(),ue=!0),Le.add(s,t),t.v=0}}function Yn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=dt(T(t.Fa,t),Lr(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,Dr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=dt(T(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),Yt(this),Dr(this))};function Zn(t){t.A!=null&&(_.clearTimeout(t.A),t.A=null)}function Dr(t){t.g=new Te(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=pe(t.qa);V(s,"RID","rpc"),V(s,"SID",t.K),V(s,"AID",t.T),V(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&V(s,"TO",t.ja),V(s,"TYPE","xmlhttp"),It(t,s),t.m&&t.o&&Jn(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=Kt(pe(s)),a.m=null,a.P=!0,sr(a,t)}n.Za=function(){this.C!=null&&(this.C=null,Yt(this),Yn(this),ee(19))};function Qt(t){t.C!=null&&(_.clearTimeout(t.C),t.C=null)}function Nr(t,s){var a=null;if(t.g==s){Qt(t),Zn(t),t.g=null;var l=2}else if(Kn(t.h,s))a=s.D,hr(t.h,s),l=1;else return;if(t.G!=0){if(s.o)if(l==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var y=t.B;l=Bn(),Q(l,new nr(l,a)),Zt(t)}else Or(t);else if(y=s.s,y==3||y==0&&0<s.X||!(l==1&&Ba(t,s)||l==2&&Yn(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),y){case 1:xe(t,5);break;case 4:xe(t,10);break;case 3:xe(t,6);break;default:xe(t,2)}}}function Lr(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function xe(t,s){if(t.j.info("Error code "+s),s==2){var a=T(t.fb,t),l=t.Xa;const y=!l;l=new Ue(l||"//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||Wt(l,"https"),Kt(l),y?Na(l.toString(),a):La(l.toString(),a)}else ee(2);t.G=0,t.l&&t.l.sa(s),Mr(t),kr(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function Mr(t){if(t.G=0,t.ka=[],t.l){const s=dr(t.h);(s.length!=0||t.i.length!=0)&&(O(t.ka,s),O(t.ka,t.i),t.h.i.length=0,D(t.i),t.i.length=0),t.l.ra()}}function Ur(t,s,a){var l=a instanceof Ue?pe(a):new Ue(a);if(l.g!="")s&&(l.g=s+"."+l.g),Gt(l,l.s);else{var y=_.location;l=y.protocol,s=s?s+"."+y.hostname:y.hostname,y=+y.port;var I=new Ue(null);l&&Wt(I,l),s&&(I.g=s),y&&Gt(I,y),a&&(I.l=a),l=I}return a=t.D,s=t.ya,a&&s&&V(l,a,s),V(l,"VER",t.la),It(t,l),l}function xr(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new $(new qt({eb:a})):new $(t.pa),s.Ha(t.J),s}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jr(){}n=jr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oe(t,s){J.call(this),this.g=new Cr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!F(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!F(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new qe(this)}C(oe,J),oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},oe.prototype.close=function(){Xn(this.g)},oe.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=Un(t),t=a);s.i.push(new Ta(s.Ya++,t)),s.G==3&&Zt(s)},oe.prototype.N=function(){this.g.l=null,delete this.j,Xn(this.g),delete this.g,oe.aa.N.call(this)};function Fr(t){jn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}C(Fr,jn);function Br(){Fn.call(this),this.status=1}C(Br,Fn);function qe(t){this.g=t}C(qe,jr),qe.prototype.ua=function(){Q(this.g,"a")},qe.prototype.ta=function(t){Q(this.g,new Fr(t))},qe.prototype.sa=function(t){Q(this.g,new Br)},qe.prototype.ra=function(){Q(this.g,"b")},oe.prototype.send=oe.prototype.o,oe.prototype.open=oe.prototype.m,oe.prototype.close=oe.prototype.close,Vn.NO_ERROR=0,Vn.TIMEOUT=8,Vn.HTTP_ERROR=6,Ia.COMPLETE="complete",ma.EventType=ut,ut.OPEN="a",ut.CLOSE="b",ut.ERROR="c",ut.MESSAGE="d",J.prototype.listen=J.prototype.K,$.prototype.listenOnce=$.prototype.L,$.prototype.getLastError=$.prototype.Ka,$.prototype.getLastErrorCode=$.prototype.Ba,$.prototype.getStatus=$.prototype.Z,$.prototype.getResponseJson=$.prototype.Oa,$.prototype.getResponseText=$.prototype.oa,$.prototype.send=$.prototype.ea,$.prototype.setWithCredentials=$.prototype.Ha}).apply(typeof sn<"u"?sn:typeof self<"u"?self:typeof window<"u"?window:{});const Cs="@firebase/firestore",ks="4.7.16";/**
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
 */let jt="11.8.1";/**
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
 */const it=new Ri("@firebase/firestore");function le(n,...e){if(it.logLevel<=M.DEBUG){const i=e.map(Hi);it.debug(`Firestore (${jt}): ${n}`,...i)}}function Zo(n,...e){if(it.logLevel<=M.ERROR){const i=e.map(Hi);it.error(`Firestore (${jt}): ${n}`,...i)}}function Yh(n,...e){if(it.logLevel<=M.WARN){const i=e.map(Hi);it.warn(`Firestore (${jt}): ${n}`,...i)}}function Hi(n){if(typeof n=="string")return n;try{/**
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
 */function Qo(n,e,i){let r="Unexpected state";typeof e=="string"?r=e:i=e,ea(n,r,i)}function ea(n,e,i){let r=`FIRESTORE (${jt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(i!==void 0)try{r+=" CONTEXT: "+JSON.stringify(i)}catch{r+=" CONTEXT: "+i}throw Zo(r),new Error(r)}function kt(n,e,i,r){let o="Unexpected state";typeof i=="string"?o=i:r=i,n||ea(e,o,r)}/**
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
 */const ie={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class re extends Ie{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rt{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class ta{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(te.UNAUTHENTICATED))}shutdown(){}}class Qh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class ed{constructor(e){this.t=e,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){kt(this.o===void 0,42304);let r=this.i;const o=w=>this.i!==r?(r=this.i,i(w)):Promise.resolve();let c=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Rt,e.enqueueRetryable(()=>o(this.currentUser))};const u=()=>{const w=c;e.enqueueRetryable(async()=>{await w.promise,await o(this.currentUser)})},_=w=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=w,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(w=>_(w)),setTimeout(()=>{if(!this.auth){const w=this.t.getImmediate({optional:!0});w?_(w):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Rt)}},0),u()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(kt(typeof r.accessToken=="string",31837,{l:r}),new ta(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return kt(e===null||typeof e=="string",2055,{h:e}),new te(e)}}class td{constructor(e,i,r){this.P=e,this.T=i,this.I=r,this.type="FirstParty",this.user=te.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nd{constructor(e,i,r){this.P=e,this.T=i,this.I=r}getToken(){return Promise.resolve(new td(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable(()=>i(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class id{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,he(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){kt(this.o===void 0,3512);const r=c=>{c.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const u=c.token!==this.m;return this.m=c.token,le("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Rs(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(kt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Rs(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function rd(n){return n.name==="IndexedDbTransactionError"}const Ai="(default)";class An{constructor(e,i){this.projectId=e,this.database=i||Ai}static empty(){return new An("","")}get isDefaultDatabase(){return this.database===Ai}isEqual(e){return e instanceof An&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Ps,P;(P=Ps||(Ps={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Yo([4294967295,4294967295],0);/**
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
 */const sd=41943040;/**
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
 */const od=1048576;function pi(){return typeof document<"u"?document:null}/**
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
 */class ad{constructor(e,i,r=1e3,o=1.5,c=6e4){this.xi=e,this.timerId=i,this.I_=r,this.E_=o,this.d_=c,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const i=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),o=Math.max(0,i-r);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.A_} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */class $i{constructor(e,i,r,o,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,o,c){const u=Date.now()+r,_=new $i(e,i,u,o,c);return _.start(r),_}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Os,Ds;(Ds=Os||(Os={})).Ca="default",Ds.Cache="cache";/**
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
 */function cd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ns=new Map;function ld(n,e,i,r){if(e===!0&&r===!0)throw new re(ie.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function ud(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Qo(12329,{type:typeof n})}function hd(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=ud(n);throw new re(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return n}/**
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
 */const na="firestore.googleapis.com",Ls=!0;class Ms{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=na,this.ssl=Ls}else this.host=e.host,this.ssl=(i=e.ssl)!==null&&i!==void 0?i:Ls;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<od)throw new re(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ld("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ia{constructor(e,i,r,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ms({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ms(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zh;switch(r.type){case"firstParty":return new nd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=Ns.get(i);r&&(le("ComponentProvider","Removing Datastore"),Ns.delete(i),r.terminate())}(this),Promise.resolve()}}function dd(n,e,i,r={}){var o;n=hd(n,ia);const c=bn(e),u=n._getSettings(),_=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),w=`${e}:${i}`;c&&(ho(`https://${w}`),fo("Firestore",!0)),u.host!==na&&u.host!==w&&Yh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const E=Object.assign(Object.assign({},u),{host:w,ssl:c,emulatorOptions:r});if(!Ve(E,_)&&(n._setSettings(E),r.mockUserToken)){let S,b;if(typeof r.mockUserToken=="string")S=r.mockUserToken,b=te.MOCK_USER;else{S=bc(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new re(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new te(T)}n._authCredentials=new Qh(new ta(S,b))}}/**
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
 */const Us="AsyncQueue";class xs{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new ad(this,"async_queue_retry"),this.ec=()=>{const r=pi();r&&le(Us,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const i=pi();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const i=pi();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const i=new Rt;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!rd(e))throw e;le(Us,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const i=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Zo("INTERNAL UNHANDLED ERROR: ",js(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=i,i}enqueueAfterDelay(e,i,r){this.nc(),this.Xu.indexOf(e)>-1&&(i=0);const o=$i.createAndSchedule(this,e,i,r,c=>this.oc(c));return this.Hu.push(o),o}nc(){this.Ju&&Qo(47125,{_c:js(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const i of this.Hu)if(i.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this.Hu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const i=this.Hu.indexOf(e);this.Hu.splice(i,1)}}function js(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class fd extends ia{constructor(e,i,r,o){super(e,i,r,o),this.type="firestore",this._queue=new xs,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xs(e),this._firestoreClient=void 0,await e}}}function pd(n,e){const i=typeof n=="object"?n:vo(),r=typeof n=="string"?n:Ai,o=Oi(i,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Ac("firestore");c&&dd(o,...c)}return o}(function(e,i=!0){(function(o){jt=o})(st),tt(new He("firestore",(r,{instanceIdentifier:o,options:c})=>{const u=r.getProvider("app").getImmediate(),_=new fd(new ed(r.getProvider("auth-internal")),new id(u,r.getProvider("app-check-internal")),function(E,S){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new re(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(E.options.projectId,S)}(u,o),u);return c=Object.assign({useFetchStreams:i},c),_._setSettings(c),_},"PUBLIC").setMultipleInstances(!0)),Ne(Cs,ks,e),Ne(Cs,ks,"esm2017")})();const gd={apiKey:"AIzaSyBHvCIK89pitWN0VmGXiueQxEWD_060m-o",authDomain:"development-aacd3.firebaseapp.com",projectId:"development-aacd3"},ra=mo(gd);pd(ra);Jh(ra);function md(){const[n,e]=oi(io),[i,r]=oi(ro),[o,c]=oi(fc);return Z.useEffect(()=>{{console.log("📚 Storybook環境のためFirebase認証監視をスキップ"),r(!1),e(null),c(null);return}},[e,r,c]),{user:n,loading:i,error:o,isAuthenticated:!!n,isAnonymous:(n==null?void 0:n.isAnonymous)||!1}}const vd=Array.from({length:18},(n,e)=>({index:`${e+1}`,path:`/img/${e+1}.png`})),_d=[{userId:"1",userName:"田中太郎",avatarIndex:"1",avatar:"/img/1.png"},{userId:"2",userName:"山田花子",avatarIndex:"5",avatar:"/img/5.png"}],yd={ABC123:{groupName:"テストグループ 1",round:3},XYZ789:{groupName:"非常に長いグループ名のテストケースです！これは表示の確認用",round:5},12:{groupName:"短ID",round:1},LOADING_TEST:{groupName:"ローディングテスト用グループ",round:2}},wd=1e3;function Si({groupId:n}){const[e,i]=Z.useState("select"),[r,o]=Z.useState(!1),[c,u]=Z.useState(null),[_,w]=Z.useState(!0),[E,S]=Z.useState(null),{isAuthenticated:b,loading:T}=md(),R=Et("white","gray.800"),C=Et("gray.200","gray.600"),D=Et("blue.50","blue.900"),O=Et("blue.200","blue.700"),z=Et("blue.700","blue.300");Z.useEffect(()=>{{console.log("📚 Storybook環境のため自動ログインをスキップ");return}},[T,b]),Z.useEffect(()=>{(async()=>{if(n){console.log("📚 Storybook環境のためモックデータを使用"),w(!0),setTimeout(()=>{const W=yd[n];W?u(W):S("指定されたグループが見つかりません"),w(!1)},wd);return}})()},[n]);const F=async H=>{o(!0),console.log("Login with existing user:",H),await new Promise(W=>setTimeout(W,1e3))},U=async H=>{o(!0);try{console.log("Create new user:",H),await new Promise(W=>setTimeout(W,1e3))}catch(W){console.error("User creation error:",W)}finally{o(!1)}};return _?L.jsx(ei,{maxW:"container.sm",py:{base:4,md:8},children:L.jsxs(tn,{gap:6,align:"center",justify:"center",minH:"400px",children:[L.jsx(qa,{size:"lg",color:"blue.500"}),L.jsx(je,{color:"gray.500",children:"グループ情報を読み込み中..."})]})}):E||!c?L.jsx(ei,{maxW:"container.sm",py:{base:4,md:8},children:L.jsxs(tn,{gap:6,align:"center",justify:"center",minH:"400px",children:[L.jsx(Tt,{as:$a,fontSize:"48px",color:"red.500"}),L.jsxs(tn,{gap:2,textAlign:"center",children:[L.jsx(Vr,{size:"md",color:"red.500",children:"グループが見つかりません"}),L.jsx(je,{color:"gray.500",children:E||"指定されたグループID のグループは存在しないか、削除されている可能性があります。"}),L.jsxs(ti,{variant:"outline",colorScheme:"red",fontSize:"xs",mt:2,children:["グループID: ",n]})]})]})}):L.jsx(ei,{maxW:"container.sm",py:{base:4,md:8},children:L.jsxs(tn,{gap:6,align:"stretch",children:[L.jsxs(Tt,{textAlign:"center",children:[L.jsx(ti,{colorScheme:"blue",fontSize:"xs",px:3,py:1,borderRadius:"full",mb:3,children:L.jsxs(Hr,{gap:1,children:[L.jsx(Tt,{as:za}),L.jsx(je,{children:"グループに参加"})]})}),L.jsx(Vr,{size:{base:"md",md:"lg"},mb:3,color:"gray.800",_dark:{color:"gray.100"},fontWeight:"bold",children:c.groupName}),L.jsxs(Hr,{justify:"center",gap:2,children:[L.jsx(je,{fontSize:"sm",color:"gray.500",children:"グループID:"}),L.jsx(ti,{variant:"outline",colorScheme:"blue",fontSize:"xs",children:n}),L.jsx(je,{fontSize:"sm",color:"gray.500",children:"•"}),L.jsxs(je,{fontSize:"sm",color:"gray.500",children:["ラウンド: ",c.round]})]})]}),L.jsx(Ka,{currentStep:e}),L.jsxs(Tt,{bg:R,borderRadius:"xl",border:"1px solid",borderColor:C,p:{base:4,md:6},boxShadow:"md",overflow:"hidden",children:[e==="select"&&L.jsx(Ga,{users:_d,onUserSelect:F,onCreateNewUser:()=>i("create"),isLoading:r}),e==="create"&&L.jsx(Wa,{avatars:vd,onBack:()=>i("select"),onSubmit:U,isLoading:r})]}),L.jsx(Tt,{bg:D,border:"1px solid",borderColor:O,borderRadius:"lg",p:4,textAlign:"center",children:L.jsxs(je,{fontSize:"sm",color:z,fontWeight:"medium",children:["💡"," ",e==="select"?"既存のユーザーを選択するか、新しいユーザーを作成してグループに参加しましょう":"お気に入りのアバターを選んで、ドラフトで使う名前を決めてください"]})})]})})}try{Si.displayName="LobbyPage",Si.__docgenInfo={description:"",displayName:"LobbyPage",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}}}}}catch{}const Xd={title:"Features/Lobby/LobbyPage",component:Si,parameters:{layout:"fullscreen",msw:{handlers:Va}},decorators:[gi]},on={args:{groupId:"ABC123"}},an={args:{groupId:"XYZ789"}},cn={args:{groupId:"12"}},ln={args:{groupId:"nonexistent"}};var Fs,Bs,Vs;on.parameters={...on.parameters,docs:{...(Fs=on.parameters)==null?void 0:Fs.docs,source:{originalSource:`{
  args: {
    groupId: 'ABC123'
  }
}`,...(Vs=(Bs=on.parameters)==null?void 0:Bs.docs)==null?void 0:Vs.source}}};var Hs,$s,zs;an.parameters={...an.parameters,docs:{...(Hs=an.parameters)==null?void 0:Hs.docs,source:{originalSource:`{
  args: {
    groupId: 'XYZ789'
  }
}`,...(zs=($s=an.parameters)==null?void 0:$s.docs)==null?void 0:zs.source}}};var Ws,Gs,Ks;cn.parameters={...cn.parameters,docs:{...(Ws=cn.parameters)==null?void 0:Ws.docs,source:{originalSource:`{
  args: {
    groupId: '12'
  }
}`,...(Ks=(Gs=cn.parameters)==null?void 0:Gs.docs)==null?void 0:Ks.source}}};var qs,Js,Xs;ln.parameters={...ln.parameters,docs:{...(qs=ln.parameters)==null?void 0:qs.docs,source:{originalSource:`{
  args: {
    groupId: 'nonexistent'
  }
}`,...(Xs=(Js=ln.parameters)==null?void 0:Js.docs)==null?void 0:Xs.source}}};const Yd=["Default","LongGroupName","ShortGroupId","NonExistentGroup"];export{on as Default,an as LongGroupName,ln as NonExistentGroup,cn as ShortGroupId,Yd as __namedExportsOrder,Xd as default};
