import{a as r}from"./mocks-CTAzMC-z.js";import{P as S}from"./index-DTaVO898.js";import"./create-recipe-context-LbQq3bM7.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./theme-M2mYg1Eg.js";import"./use-breakpoint-CtC0MXDZ.js";import"./box-p2MKwv57.js";import"./h-stack-BOuMwgNM.js";import"./stack-B-mkjmc_.js";import"./text-BOFVnBsW.js";import"./icon-button-Bwmz2JOC.js";import"./button-Cvi4ewak.js";import"./v-stack-DfIdlA7P.js";import"./grid-DCXQ59mM.js";import"./flex-CZZAfvJj.js";import"./create-slot-recipe-context-9ZU4Gcb9.js";import"./factory-OeC611uy.js";import"./index-B1VjsNl3.js";import"./index-C85FKF7s.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./index-BumpzSCx.js";import"./index-BRNWFSEf.js";const Z={title:"Features/Draft/DraftPage/Components/PastRoundRow",component:S,parameters:{layout:"padded"},tags:["autodocs"]},f={roundNumber:1,topic:"好きな食べ物",selections:[{userId:"1",userName:"たけし",item:"ラーメン",comment:"深夜に食べたくなる定番"},{userId:"2",userName:"みさき",item:"寿司",comment:"新鮮なネタが最高"},{userId:"3",userName:"ひろし",item:"カレー"},{userId:"4",userName:"あやか",item:"ピザ",comment:"みんなでシェアできる"}]},n={args:{round:f,participants:r,onRoundClick:e=>console.log("Round clicked:",e),onUserClick:(e,o)=>console.log("User clicked:",e,o)}},m={roundNumber:2,topic:"好きな競走馬",selections:[{userId:"1",userName:"たけし",item:"キングカメハメハ",comment:"無敗の三冠馬"},{userId:"2",userName:"みさき",item:"メイショウサムソン",comment:"最強世代の覇者"},{userId:"3",userName:"ひろし",item:"ゴールドシップ"},{userId:"4",userName:"あやか",item:"ジャスタウェイ",comment:"ドバイ制覇"}]},s={name:"長い馬名の表示",args:{round:m,participants:r,onRoundClick:e=>console.log("Round clicked:",e),onUserClick:(e,o)=>console.log("User clicked:",e,o)}},E={roundNumber:3,topic:"印象に残った競走馬",selections:[{userId:"1",userName:"たけし",item:"ウインバリアシオン",comment:"奇跡の復活"},{userId:"2",userName:"みさき",item:"フサイチコンコルド",comment:"天皇賞春3連覇"},{userId:"3",userName:"ひろし",item:"サクラローレル"},{userId:"4",userName:"あやか",item:"タイキシャトル",comment:"最強の三冠馬"},{userId:"5",userName:"けんじ",item:"エルコンドルパサー",comment:"日本ダービー感動"},{userId:"6",userName:"ゆき",item:"グラスワンダー",comment:"逃げ切りの美学"}]},w=[...r,{id:"5",name:"けんじ",avatar:"🦊",status:"completed"},{id:"6",name:"ゆき",avatar:"🐰",status:"completed"}],a={name:"6人参加×長い馬名",args:{round:E,participants:w,onRoundClick:e=>console.log("Round clicked:",e),onUserClick:(e,o)=>console.log("User clicked:",e,o)}},t={name:"SP版折りたたみ状態（✏️編集ボタン付き）",args:{round:m,participants:r,onRoundClick:e=>console.log("詳細モーダル開く:",e),onUserClick:(e,o)=>console.log("User clicked:",e,o),isExpanded:!1,onToggleExpand:()=>console.log("折りたたみトグル")},parameters:{viewport:{defaultViewport:"mobile1"}}},c={name:"SP版展開状態（✏️編集ボタン付き）",args:{round:m,participants:r,onRoundClick:e=>console.log("詳細モーダル開く:",e),onUserClick:(e,o)=>console.log("User clicked:",e,o),isExpanded:!0,onToggleExpand:()=>console.log("折りたたみトグル")},parameters:{viewport:{defaultViewport:"mobile1"}}};var i,u,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    round: sampleRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId)
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,p,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '長い馬名の表示',
  args: {
    round: horseRaceRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId)
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var k,N,b;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '6人参加×長い馬名',
  args: {
    round: sixParticipantsRound,
    participants: sixParticipants,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId)
  }
}`,...(b=(N=a.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var R,I,C;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'SP版折りたたみ状態（✏️編集ボタン付き）',
  args: {
    round: horseRaceRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('詳細モーダル開く:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId),
    isExpanded: false,
    onToggleExpand: () => console.log('折りたたみトグル')
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(C=(I=t.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var U,P,x;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'SP版展開状態（✏️編集ボタン付き）',
  args: {
    round: horseRaceRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('詳細モーダル開く:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId),
    isExpanded: true,
    onToggleExpand: () => console.log('折りたたみトグル')
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(x=(P=c.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const $=["Default","LongHorseNames","SixParticipantsLongNames","CollapsedState","ExpandedState"];export{t as CollapsedState,n as Default,c as ExpandedState,s as LongHorseNames,a as SixParticipantsLongNames,$ as __namedExportsOrder,Z as default};
