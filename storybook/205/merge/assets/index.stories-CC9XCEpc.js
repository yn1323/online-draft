import{R as l}from"./index-B0oOU8_t.js";import"./stack-C7hvTRfV.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-ByYvEZYI.js";import"./index-CYsJy3kW.js";import"./card-Dcz0m3mf.js";import"./create-slot-recipe-context-Ct6br2V7.js";import"./toaster-fCX_dEN1.js";import"./index-BgxHbLYw.js";import"./index-ytcWRJ8V.js";import"./box-DfzLPJuh.js";import"./v-stack-3HiezQxF.js";import"./text-CD52-QEU.js";import"./h-stack-BRlU4uQg.js";import"./icon-button-CtLJGKtt.js";import"./button-B54MzPQk.js";import"./attr-C3Jtgmrz.js";import"./spinner-Dzu03cyn.js";const Z={title:"features/lobby/RoomInfo",component:l,parameters:{layout:"centered"}},u={groupName:"2024年プロ野球ドラフト",createdAt:new Date("2024-06-17T10:00:00Z"),updatedAt:new Date("2024-06-17T10:00:00Z"),status:"waiting",maxParticipants:8},o={args:{group:u,roomUrl:"https://onlinedraft.com/lobby/abc123"}},r={args:{group:{...u,groupName:"2024年度プロ野球ドラフト会議とセ・パ両リーグ戦力分析セッション"},roomUrl:"https://onlinedraft.com/lobby/abc123"}};var t,e,a,m,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    group: mockGroup,
    roomUrl: 'https://onlinedraft.com/lobby/abc123'
  }
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source},description:{story:"基本のルーム情報表示",...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var s,n,i,c,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    group: {
      ...mockGroup,
      groupName: '2024年度プロ野球ドラフト会議とセ・パ両リーグ戦力分析セッション'
    },
    roomUrl: 'https://onlinedraft.com/lobby/abc123'
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"長いルーム名の場合",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};const _=["Basic","LongRoomName"];export{o as Basic,r as LongRoomName,_ as __namedExportsOrder,Z as default};
