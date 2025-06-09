import{j as r}from"./create-recipe-context-LbQq3bM7.js";import{r as y}from"./index-BXymfbzT.js";import{U}from"./index-DlW_aOcq.js";import{V as C}from"./v-stack-DfIdlA7P.js";import{B as E}from"./button-Cvi4ewak.js";import"./jsx-runtime-Bw5QeaCk.js";import"./responsive-modal-u4uUSmq6.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./portal-DXIUxZbP.js";import"./create-slot-recipe-context-9ZU4Gcb9.js";import"./factory-OeC611uy.js";import"./index-B1VjsNl3.js";import"./index-C85FKF7s.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./index-CEI8PRn9.js";import"./index-BRNWFSEf.js";import"./use-breakpoint-CtC0MXDZ.js";import"./h-stack-BOuMwgNM.js";import"./stack-B-mkjmc_.js";import"./image-D2VQ_BCA.js";import"./text-BOFVnBsW.js";import"./box-p2MKwv57.js";import"./input-C3XuNbVL.js";import"./use-field-context-BeRDi0mX.js";import"./textarea-CzEKuGQU.js";const ie={title:"Features/Draft/UserRoundDetailModal",component:U,parameters:{layout:"centered",docs:{description:{component:"ラウンド×ユーザー単位で選択内容を表示・編集するモーダル"}}},argTypes:{onSaveSelection:{action:"save selection"},onClose:{action:"close"}},tags:["autodocs"]},i=e=>{const[P,p]=y.useState(e.isOpen||!1);return r.jsxs(C,{gap:4,children:[r.jsx(E,{onClick:()=>p(!0),children:"モーダルを開く"}),r.jsx(U,{...e,isOpen:P,onClose:()=>p(!1),onSaveSelection:(m,c)=>{var u;console.log("保存:",{roundNumber:m,selection:c}),(u=e.onSaveSelection)==null||u.call(e,m,c),p(!1)}})]})},M={id:"user1",name:"田中太郎",avatar:"1"},a={render:e=>r.jsx(i,{...e}),args:{roundNumber:3,participant:M,initialSelection:{userId:"user1",userName:"田中太郎",item:"ポケモン",comment:"昔からやってて思い入れがあります"}}},n={render:e=>r.jsx(i,{...e}),args:{roundNumber:1,participant:M,initialSelection:void 0}},t={render:e=>r.jsx(i,{...e}),args:{roundNumber:5,participant:{id:"user2",name:"佐藤花子",avatar:"2"},initialSelection:{userId:"user2",userName:"佐藤花子",item:"夏目漱石の「こころ」",comment:"高校生の時に読んで、人間関係の複雑さや心の動きについて深く考えさせられました。特に先生と私の関係性が印象的で、今でも人との関わり方の参考にしています。"}}},o={render:e=>r.jsx(i,{...e}),args:{roundNumber:2,participant:{id:"user3",name:"山田次郎",avatar:"3"},initialSelection:{userId:"user3",userName:"山田次郎",item:"スター・ウォーズ",comment:"SFが好き"}}},s={args:{isOpen:!0,roundNumber:4,participant:{id:"user4",name:"鈴木美咲",avatar:"4"},initialSelection:{userId:"user4",userName:"鈴木美咲",item:"読書とカフェ巡り",comment:"のんびり過ごしたい"}}};var d,l,S;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <UserRoundDetailModalWrapper {...args as WrapperProps} />,
  args: {
    roundNumber: 3,
    participant: sampleParticipant,
    initialSelection: {
      userId: 'user1',
      userName: '田中太郎',
      item: 'ポケモン',
      comment: '昔からやってて思い入れがあります'
    }
  }
}`,...(S=(l=a.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var g,f,N;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <UserRoundDetailModalWrapper {...args as WrapperProps} />,
  args: {
    roundNumber: 1,
    participant: sampleParticipant,
    initialSelection: undefined
  }
}`,...(N=(f=n.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var v,x,D;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <UserRoundDetailModalWrapper {...args as WrapperProps} />,
  args: {
    roundNumber: 5,
    participant: {
      id: 'user2',
      name: '佐藤花子',
      avatar: '2'
    },
    initialSelection: {
      userId: 'user2',
      userName: '佐藤花子',
      item: '夏目漱石の「こころ」',
      comment: '高校生の時に読んで、人間関係の複雑さや心の動きについて深く考えさせられました。特に先生と私の関係性が印象的で、今でも人との関わり方の参考にしています。'
    }
  }
}`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var b,j,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <UserRoundDetailModalWrapper {...args as WrapperProps} />,
  args: {
    roundNumber: 2,
    participant: {
      id: 'user3',
      name: '山田次郎',
      avatar: '3'
    },
    initialSelection: {
      userId: 'user3',
      userName: '山田次郎',
      item: 'スター・ウォーズ',
      comment: 'SFが好き'
    }
  }
}`,...(I=(j=o.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var W,O,R;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    roundNumber: 4,
    participant: {
      id: 'user4',
      name: '鈴木美咲',
      avatar: '4'
    },
    initialSelection: {
      userId: 'user4',
      userName: '鈴木美咲',
      item: '読書とカフェ巡り',
      comment: 'のんびり過ごしたい'
    }
  }
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const pe=["Default","EmptySelection","LongContent","DifferentAvatar","AlwaysOpen"];export{s as AlwaysOpen,a as Default,o as DifferentAvatar,n as EmptySelection,t as LongContent,pe as __namedExportsOrder,ie as default};
