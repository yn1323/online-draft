import{m as k,a as t}from"./mocks-C8FdBju4.js";import{m as b}from"./index-BW0QPtPT.js";import{T as R}from"./index-CV70qNUd.js";import"./create-recipe-context-LbQq3bM7.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./index-KLwv-BE1.js";import"./flex-CZZAfvJj.js";import"./h-stack-BOuMwgNM.js";import"./stack-B-mkjmc_.js";import"./image-D2VQ_BCA.js";import"./v-stack-DfIdlA7P.js";import"./text-BOFVnBsW.js";import"./box-p2MKwv57.js";import"./index-CjgIjFmL.js";import"./input-D57sxenT.js";import"./factory-B-x4ZR3W.js";import"./index-5qRv5KYD.js";import"./index-DoZAzkdv.js";import"./use-field-context-BZ3mEJCV.js";import"./button-Cvi4ewak.js";import"./index-CpN0Y-_B.js";import"./theme-BEsXwnFK.js";import"./index-Ct2aZRRI.js";import"./index-B0tjTtPU.js";import"./index-B_WG8SGj.js";import"./index-DzZ9wzu-.js";import"./use-breakpoint-CtC0MXDZ.js";import"./grid-DCXQ59mM.js";import"./index-D1nGLV6J.js";import"./icon-button-Bwmz2JOC.js";import"./create-slot-recipe-context-lH_kfrLM.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./index-CK4u9vN_.js";import"./index-BRNWFSEf.js";const N=o=>o.filter(e=>e.type==="chat"||e.type==="system").map(e=>({id:e.id,type:e.type,timestamp:e.timestamp,content:e.content,user:e.user,isMyMessage:e.isMyMessage})),M=N(b),so={title:"Features/Draft/DraftPage/Components/TabNavigation",component:R,parameters:{layout:"padded"},tags:["autodocs"]},s={args:{roundNumber:3,participants:t,pastRounds:k,onRoundClick:o=>console.log("Round clicked:",o),onUserClick:(o,e)=>console.log("User clicked:",o,e),onOpenInputModal:()=>console.log("Input modal opened"),messages:M,onSendMessage:o=>console.log("Message sent:",o)}},n={args:{roundNumber:1,participants:t,pastRounds:[],onRoundClick:o=>console.log("Round clicked:",o),onUserClick:(o,e)=>console.log("User clicked:",o,e),onOpenInputModal:()=>console.log("Input modal opened"),messages:M,onSendMessage:o=>console.log("Message sent:",o)}},r={args:{roundNumber:2,participants:t,pastRounds:k,onRoundClick:o=>console.log("Round clicked:",o),onUserClick:(o,e)=>console.log("User clicked:",o,e),onOpenInputModal:()=>console.log("Input modal opened"),messages:[],onSendMessage:o=>console.log("Message sent:",o)}};var a,m,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    roundNumber: 3,
    participants: mockParticipants,
    pastRounds: mockPastRounds,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId),
    onOpenInputModal: () => console.log('Input modal opened'),
    messages: mockMessages,
    onSendMessage: (message: string) => console.log('Message sent:', message)
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,p,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    roundNumber: 1,
    participants: mockParticipants,
    pastRounds: [],
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId),
    onOpenInputModal: () => console.log('Input modal opened'),
    messages: mockMessages,
    onSendMessage: (message: string) => console.log('Message sent:', message)
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,l,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    roundNumber: 2,
    participants: mockParticipants,
    pastRounds: mockPastRounds,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId),
    onOpenInputModal: () => console.log('Input modal opened'),
    messages: [],
    onSendMessage: (message: string) => console.log('Message sent:', message)
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const no=["Default","WithoutPastRounds","WithoutMessages"];export{s as Default,r as WithoutMessages,n as WithoutPastRounds,no as __namedExportsOrder,so as default};
