import{R as U}from"./index-D7XRsVfZ.js";import"./create-recipe-context-LbQq3bM7.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./index-bJkI8e97.js";import"./box-p2MKwv57.js";import"./card-BRR7LBt5.js";import"./create-slot-recipe-context-BXXlVjN6.js";import"./toaster-5U2OXyzs.js";import"./index-BRNWFSEf.js";import"./index-RgLjKqdB.js";import"./index-DrVvecys.js";import"./button-Cus-mLIX.js";import"./attr-C3Jtgmrz.js";import"./spinner-B1ygD-4y.js";import"./v-stack-DfIdlA7P.js";import"./stack-B-mkjmc_.js";import"./text-BOFVnBsW.js";import"./h-stack-BOuMwgNM.js";const P={title:"Features/Lobby/RoomInfo",component:U,parameters:{layout:"centered"},tags:["autodocs"]},e={groupName:"2024年プロ野球ドラフト",createdAt:new Date("2024-06-17T10:00:00Z"),updatedAt:new Date("2024-06-17T10:00:00Z"),status:"waiting",maxParticipants:8},o={args:{group:e,roomUrl:"https://onlinedraft.com/lobby/abc123"}},r={args:{group:{...e,groupName:"2024年度プロ野球ドラフト会議とセ・パ両リーグ戦力分析セッション"},roomUrl:"https://onlinedraft.com/lobby/abc123"}},t={args:{group:e,roomUrl:"https://verylongdomainname.onlinedraft.example.com/lobby/verylongroomidthatexceedstypicallength"}};var a,s,m,n,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    group: mockGroup,
    roomUrl: 'https://onlinedraft.com/lobby/abc123'
  }
}`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source},description:{story:"基本のルーム情報表示",...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.description}}};var c,i,d,l,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    group: {
      ...mockGroup,
      groupName: '2024年度プロ野球ドラフト会議とセ・パ両リーグ戦力分析セッション'
    },
    roomUrl: 'https://onlinedraft.com/lobby/abc123'
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:"長いルーム名の場合",...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.description}}};var u,b,y,f,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    group: mockGroup,
    roomUrl: 'https://verylongdomainname.onlinedraft.example.com/lobby/verylongroomidthatexceedstypicallength'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"長いURLの場合",...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};const j=["Basic","LongRoomName","LongUrl"];export{o as Basic,r as LongRoomName,t as LongUrl,j as __namedExportsOrder,P as default};
