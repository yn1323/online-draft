import{R as S}from"./index-CXc0c2I7.js";import"./create-recipe-context-oy0ofMwS.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./index-DTSGLcC3.js";import"./iconBase-BtwG8oUN.js";import"./box-D1Z_KUxa.js";import"./h-stack-e-BLBiSK.js";import"./stack-BRg6br_m.js";import"./heading-DBVE1Ygw.js";import"./simple-grid-qwmDqksS.js";import"./grid-CQT4z8bD.js";import"./button-DFylk1V_.js";import"./v-stack-DNelLgfG.js";import"./text-DkCoEBoG.js";const r=[{id:"abc123",name:"今日のランチドラフト",lastJoined:"2時間前"},{id:"def456",name:"映画選びドラフト",lastJoined:"1日前"},{id:"ghi789",name:"チームドラフト",lastJoined:"3日前"}],i=async O=>(console.log("Join meeting:",O),Promise.resolve()),j={title:"Features/Join/Components/RecentMeetingsList",component:S,parameters:{layout:"centered"}},e={args:{meetings:r,onJoinMeeting:i}},n={args:{meetings:r,onJoinMeeting:i,loadingMeetingId:"abc123"}},o={args:{meetings:[],onJoinMeeting:i}},t={args:{meetings:[r[0]],onJoinMeeting:i}};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    meetings: mockMeetings,
    onJoinMeeting: mockOnJoinMeeting
  }
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var g,c,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    meetings: mockMeetings,
    onJoinMeeting: mockOnJoinMeeting,
    loadingMeetingId: 'abc123'
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,M,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    meetings: [],
    onJoinMeeting: mockOnJoinMeeting
  }
}`,...(l=(M=o.parameters)==null?void 0:M.docs)==null?void 0:l.source}}};var u,J,k;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    meetings: [mockMeetings[0]],
    onJoinMeeting: mockOnJoinMeeting
  }
}`,...(k=(J=t.parameters)==null?void 0:J.docs)==null?void 0:k.source}}};const q=["Default","Loading","Empty","SingleMeeting"];export{e as Default,o as Empty,n as Loading,t as SingleMeeting,q as __namedExportsOrder,j as default};
