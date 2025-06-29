import{T as e}from"./index.esm2017-rypblU8U.js";import{P as w}from"./index-3yJYpOTO.js";import"./stack-B25eOQea.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-CUneVrWE.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./index-DGKHe-6Q.js";import"./image-context-B4PdNff0.js";import"./box-BDoFiJcT.js";import"./create-slot-recipe-context-BILcAqFF.js";import"./attr-C3Jtgmrz.js";import"./index-sN4N5U7s.js";import"./factory-GA1w9YC2.js";import"./index-Bkt13QoG.js";import"./index-BEZemFFB.js";import"./index-CrjboX4Z.js";import"./index-CmCyOxug.js";import"./index-BRNWFSEf.js";import"./index-_ZCxv-ro.js";import"./card-BfIoSqEc.js";import"./h-stack-Bm4oIVhc.js";import"./text-ddCD_fM-.js";import"./v-stack-DLbVHDKJ.js";import"./simple-grid-DKuTOOEA.js";import"./grid-W1xKhCbE.js";const Q={title:"features/lobby/ParticipantsList",component:w,parameters:{layout:"centered"}},v=[{userId:"user1",userName:"たろう",groupId:"group123",avatar:"1",joinedAt:e.fromDate(new Date("2024-06-17T10:00:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:00:00Z")),isActive:!0},{userId:"user2",userName:"はなこ",groupId:"group123",avatar:"2",joinedAt:e.fromDate(new Date("2024-06-17T10:05:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:05:00Z")),isActive:!0},{userId:"user3",userName:"じろう",groupId:"group123",avatar:"3",joinedAt:e.fromDate(new Date("2024-06-17T10:10:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:10:00Z")),isActive:!1}],r={args:{users:v,onJoinClick:()=>console.log("Join clicked")}},t={args:{users:[],onJoinClick:()=>console.log("Join clicked")}},o={args:{users:[...v,{userId:"user4",userName:"さぶろう",groupId:"group123",avatar:"4",joinedAt:e.fromDate(new Date("2024-06-17T10:15:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:15:00Z")),isActive:!0},{userId:"user5",userName:"みか",groupId:"group123",avatar:"5",joinedAt:e.fromDate(new Date("2024-06-17T10:20:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:20:00Z")),isActive:!0},{userId:"user6",userName:"けんじ",groupId:"group123",avatar:"6",joinedAt:e.fromDate(new Date("2024-06-17T10:25:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:25:00Z")),isActive:!1}],onJoinClick:()=>console.log("Join clicked")}};var a,s,i,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    onJoinClick: () => console.log('Join clicked')
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"基本の参加者一覧表示（3人）",...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.description}}};var p,u,c,d,D;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    users: [],
    onJoinClick: () => console.log('Join clicked')
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source},description:{story:"参加者なし（新規ルーム）",...(D=(d=t.parameters)==null?void 0:d.docs)==null?void 0:D.description}}};var l,g,A,T,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    users: [...mockUsers, {
      userId: 'user4',
      userName: 'さぶろう',
      groupId: 'group123',
      avatar: '4',
      joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:15:00Z')),
      updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:15:00Z')),
      isActive: true
    }, {
      userId: 'user5',
      userName: 'みか',
      groupId: 'group123',
      avatar: '5',
      joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:20:00Z')),
      updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:20:00Z')),
      isActive: true
    }, {
      userId: 'user6',
      userName: 'けんじ',
      groupId: 'group123',
      avatar: '6',
      joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:25:00Z')),
      updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:25:00Z')),
      isActive: false
    }],
    onJoinClick: () => console.log('Join clicked')
  }
}`,...(A=(g=o.parameters)==null?void 0:g.docs)==null?void 0:A.source},description:{story:"多くの参加者（6人）",...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.description}}};const R=["Basic","Empty","ManyParticipants"];export{r as Basic,t as Empty,o as ManyParticipants,R as __namedExportsOrder,Q as default};
