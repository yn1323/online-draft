import{A as h}from"./index-BNkuV3oN.js";import"./create-recipe-context-oy0ofMwS.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./color-mode-DuK3tygI.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-tQjszkaJ.js";import"./button-Duda3c3S.js";import"./box-D1Z_KUxa.js";import"./stack-BRg6br_m.js";import"./layouts-BGugoDGd.js";import"./image-BNXA3K55.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./index-DGKHe-6Q.js";import"./image-context-5CzGecbX.js";import"./router-context.shared-runtime-CTsxCgvG.js";import"./use-merged-ref-0PvjutYQ.js";import"./index-taPaNizk.js";import"./use-breakpoint-BCFmA5bm.js";import"./simple-grid-qwmDqksS.js";import"./grid-CQT4z8bD.js";import"./text-DkCoEBoG.js";const o=c=>{console.log("Avatar selected:",c)},s=Array.from({length:18},(c,n)=>({index:`${n+1}`,path:`/img/${n+1}.png`})),K={title:"Features/Lobby/Components/AvatarSelector",component:h,parameters:{layout:"centered"},argTypes:{selectedAvatarIndex:{control:{type:"select"},options:["","1","5","10"]}}},r={args:{avatars:s,onAvatarSelect:o}},a={args:{avatars:s,selectedAvatarIndex:"5",onAvatarSelect:o}},e={args:{avatars:s,onAvatarSelect:o,errorMessage:"アバターを選択してください"}},t={args:{avatars:s.slice(0,6),selectedAvatarIndex:"3",onAvatarSelect:o}};var m,p,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    avatars: mockAvatars,
    onAvatarSelect: mockOnAvatarSelect
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,v,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    avatars: mockAvatars,
    selectedAvatarIndex: '5',
    onAvatarSelect: mockOnAvatarSelect
  }
}`,...(d=(v=a.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};var A,S,g;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    avatars: mockAvatars,
    onAvatarSelect: mockOnAvatarSelect,
    errorMessage: 'アバターを選択してください'
  }
}`,...(g=(S=e.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var u,k,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    avatars: mockAvatars.slice(0, 6),
    selectedAvatarIndex: '3',
    onAvatarSelect: mockOnAvatarSelect
  }
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const N=["Default","WithSelection","WithError","SmallSet"];export{r as Default,t as SmallSet,e as WithError,a as WithSelection,N as __namedExportsOrder,K as default};
