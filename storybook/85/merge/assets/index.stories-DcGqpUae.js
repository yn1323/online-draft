import{A as h}from"./index-BTrsfHVN.js";import"./create-recipe-context-LbQq3bM7.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./color-mode-DXikqB90.js";import"./index.esm-DDCHYD5y.js";import"./button-BCCHc0p6.js";import"./iconBase-CzOZFJ-o.js";import"./box-p2MKwv57.js";import"./stack-B-mkjmc_.js";import"./image-DR_fq2ZN.js";import"./router-context.shared-runtime-CczRXcu8.js";import"./index-DGKHe-6Q.js";import"./image-context-BYBggyir.js";import"./use-merged-ref-0PvjutYQ.js";import"./index.esm-CHMTgYdU.js";import"./use-breakpoint-CtC0MXDZ.js";import"./simple-grid-CoY6kqvx.js";import"./text-BOFVnBsW.js";const o=c=>{console.log("Avatar selected:",c)},s=Array.from({length:18},(c,n)=>({index:`${n+1}`,path:`/img/${n+1}.png`})),B={title:"Features/Lobby/Components/AvatarSelector",component:h,parameters:{layout:"centered"},argTypes:{selectedAvatarIndex:{control:{type:"select"},options:["","1","5","10"]}}},a={args:{avatars:s,onAvatarSelect:o}},r={args:{avatars:s,selectedAvatarIndex:"5",onAvatarSelect:o}},e={args:{avatars:s,onAvatarSelect:o,errorMessage:"アバターを選択してください"}},t={args:{avatars:s.slice(0,6),selectedAvatarIndex:"3",onAvatarSelect:o}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    avatars: mockAvatars,
    onAvatarSelect: mockOnAvatarSelect
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,v,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    avatars: mockAvatars,
    selectedAvatarIndex: '5',
    onAvatarSelect: mockOnAvatarSelect
  }
}`,...(d=(v=r.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};var A,S,g;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const G=["Default","WithSelection","WithError","SmallSet"];export{a as Default,t as SmallSet,e as WithError,r as WithSelection,G as __namedExportsOrder,B as default};
