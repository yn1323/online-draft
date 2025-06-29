import{R as l}from"./index-B74F9L6-.js";import"./stack-B25eOQea.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B9kDuT7e.js";import"./index-_ZCxv-ro.js";import"./card-BfIoSqEc.js";import"./create-slot-recipe-context-BILcAqFF.js";import"./toaster-Du-873cZ.js";import"./index-BRNWFSEf.js";import"./index-BPRKcNEv.js";import"./box-BDoFiJcT.js";import"./v-stack-DLbVHDKJ.js";import"./text-ddCD_fM-.js";import"./h-stack-Bm4oIVhc.js";import"./icon-button-CZw3PtnZ.js";import"./button-BzGfOniU.js";import"./attr-C3Jtgmrz.js";import"./spinner-BaqUdWIg.js";const Z={title:"features/lobby/RoomInfo",component:l,parameters:{layout:"centered"}},u={groupName:"2024年プロ野球ドラフト",createdAt:new Date("2024-06-17T10:00:00Z"),updatedAt:new Date("2024-06-17T10:00:00Z"),status:"waiting",maxParticipants:8},o={args:{group:u,roomUrl:"https://onlinedraft.com/lobby/abc123"}},r={args:{group:{...u,groupName:"2024年度プロ野球ドラフト会議とセ・パ両リーグ戦力分析セッション"},roomUrl:"https://onlinedraft.com/lobby/abc123"}};var t,e,a,m,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
