import{j as t}from"./create-recipe-context-oy0ofMwS.js";import{d as u,e as S,f as g}from"./index-DTSGLcC3.js";import{S as b}from"./index-DI1kexgK.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./iconBase-BtwG8oUN.js";import"./v-stack-DNelLgfG.js";import"./stack-BRg6br_m.js";import"./box-D1Z_KUxa.js";import"./heading-DBVE1Ygw.js";import"./text-DkCoEBoG.js";const D={title:"Features/Top/Components/StepCard",component:b,parameters:{layout:"centered"},argTypes:{colorScheme:{control:{type:"select"},options:["green","orange","blue"]},stepNumber:{control:{type:"number",min:1,max:10}}}},e={args:{icon:t.jsx(u,{size:24}),stepNumber:1,title:"会議を作成",description:"ドラフト会議を作成して、メンバーを招待しよう",colorScheme:"green"}},r={args:{icon:t.jsx(S,{size:24}),stepNumber:2,title:"メンバー招待",description:"会議IDをメンバーにシェアして参加してもらおう",colorScheme:"orange"}},o={args:{icon:t.jsx(g,{size:24}),stepNumber:3,title:"ドラフト実行",description:"メンバー全員で選択し、重複したら話し合って決定",colorScheme:"blue"}};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    icon: <MdCreate size={24} />,
    stepNumber: 1,
    title: '会議を作成',
    description: 'ドラフト会議を作成して、メンバーを招待しよう',
    colorScheme: 'green'
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var p,c,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: <MdShare size={24} />,
    stepNumber: 2,
    title: 'メンバー招待',
    description: '会議IDをメンバーにシェアして参加してもらおう',
    colorScheme: 'orange'
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: <MdPlayArrow size={24} />,
    stepNumber: 3,
    title: 'ドラフト実行',
    description: 'メンバー全員で選択し、重複したら話し合って決定',
    colorScheme: 'blue'
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const E=["Step1","Step2","Step3"];export{e as Step1,r as Step2,o as Step3,E as __namedExportsOrder,D as default};
