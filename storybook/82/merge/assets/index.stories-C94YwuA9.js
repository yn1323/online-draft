import{A as h}from"./index-Bb1VYF-4.js";import"./create-recipe-context-DNTG5mYw.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./color-mode-CR7cno4n.js";import"./iconBase-BtwG8oUN.js";import"./button-Dz2diCo_.js";import"./box-DMcbo_cE.js";import"./stack-DVtSLI4T.js";import"./image-DR_fq2ZN.js";import"./router-context.shared-runtime-CczRXcu8.js";import"./index-DGKHe-6Q.js";import"./image-context-BYBggyir.js";import"./use-merged-ref-0PvjutYQ.js";import"./index-taPaNizk.js";import"./simple-grid-D7DxtwhU.js";import"./text-DJUdolDr.js";const o=c=>{console.log("Avatar selected:",c)},s=Array.from({length:18},(c,n)=>({index:`${n+1}`,path:`/img/${n+1}.png`})),w={title:"Features/Lobby/Components/AvatarSelector",component:h,parameters:{layout:"centered"},argTypes:{selectedAvatarIndex:{control:{type:"select"},options:["","1","5","10"]}}},a={args:{avatars:s,onAvatarSelect:o}},e={args:{avatars:s,selectedAvatarIndex:"5",onAvatarSelect:o}},r={args:{avatars:s,onAvatarSelect:o,errorMessage:"アバターを選択してください"}},t={args:{avatars:s.slice(0,6),selectedAvatarIndex:"3",onAvatarSelect:o}};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    avatars: mockAvatars,
    onAvatarSelect: mockOnAvatarSelect
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,v,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    avatars: mockAvatars,
    selectedAvatarIndex: '5',
    onAvatarSelect: mockOnAvatarSelect
  }
}`,...(d=(v=e.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};var A,S,g;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    avatars: mockAvatars,
    onAvatarSelect: mockOnAvatarSelect,
    errorMessage: 'アバターを選択してください'
  }
}`,...(g=(S=r.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var u,k,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    avatars: mockAvatars.slice(0, 6),
    selectedAvatarIndex: '3',
    onAvatarSelect: mockOnAvatarSelect
  }
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const z=["Default","WithSelection","WithError","SmallSet"];export{a as Default,t as SmallSet,r as WithError,e as WithSelection,z as __namedExportsOrder,w as default};
