import{L as w}from"./index-CZ5My0ti.js";import"./create-recipe-context-oy0ofMwS.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./flex-CXFJ85Uw.js";import"./h-stack-e-BLBiSK.js";import"./stack-BRg6br_m.js";import"./image-CisOvN2U.js";import"./v-stack-DNelLgfG.js";import"./text-DkCoEBoG.js";import"./box-D1Z_KUxa.js";const I={title:"Features/Draft/DraftPage/Components/ChatLogSection/LogItem",component:w,parameters:{layout:"padded"}},e={args:{log:{id:"1",type:"chat",timestamp:new Date("2025-01-08T10:01:00"),content:"よろしくお願いします！",user:{id:"user1",name:"ユーザー1",avatar:"1"},isMyMessage:!0}}},t={args:{log:{id:"2",type:"chat",timestamp:new Date("2025-01-08T10:01:30"),content:"こちらこそ！頑張りましょう",user:{id:"user2",name:"山田太郎",avatar:"2"},isMyMessage:!1}}},a={args:{log:{id:"3",type:"system",timestamp:new Date("2025-01-08T10:00:00"),content:"Round 1 開始"}}},n={args:{log:{id:"4",type:"draft_result",timestamp:new Date("2025-01-08T10:02:00"),content:"山田太郎が選択を完了しました"}}},s={args:{log:{id:"5",type:"selection_change",timestamp:new Date("2025-01-08T10:02:30"),content:"ユーザー1が選択を変更しました",selectionChange:{roundNumber:2,before:"山田太郎",after:"田中花子",userName:"ユーザー1"}}}};var r,o,m;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    log: {
      id: '1',
      type: 'chat',
      timestamp: new Date('2025-01-08T10:01:00'),
      content: 'よろしくお願いします！',
      user: {
        id: 'user1',
        name: 'ユーザー1',
        avatar: '1'
      },
      isMyMessage: true
    }
  }
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,i,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    log: {
      id: '2',
      type: 'chat',
      timestamp: new Date('2025-01-08T10:01:30'),
      content: 'こちらこそ！頑張りましょう',
      user: {
        id: 'user2',
        name: '山田太郎',
        avatar: '2'
      },
      isMyMessage: false
    }
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var g,d,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    log: {
      id: '3',
      type: 'system',
      timestamp: new Date('2025-01-08T10:00:00'),
      content: 'Round 1 開始'
    }
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,y,f;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    log: {
      id: '4',
      type: 'draft_result',
      timestamp: new Date('2025-01-08T10:02:00'),
      content: '山田太郎が選択を完了しました'
    }
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,D,M;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    log: {
      id: '5',
      type: 'selection_change',
      timestamp: new Date('2025-01-08T10:02:30'),
      content: 'ユーザー1が選択を変更しました',
      selectionChange: {
        roundNumber: 2,
        before: '山田太郎',
        after: '田中花子',
        userName: 'ユーザー1'
      }
    }
  }
}`,...(M=(D=s.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const U=["ChatMessage","OtherUserMessage","SystemNotification","DraftResult","SelectionChange"];export{e as ChatMessage,n as DraftResult,t as OtherUserMessage,s as SelectionChange,a as SystemNotification,U as __namedExportsOrder,I as default};
