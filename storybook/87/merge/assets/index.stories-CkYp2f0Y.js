import{P as f}from"./index--e8-bTFY.js";import{m as o}from"./mocks-to96wPwC.js";import"./create-recipe-context-oy0ofMwS.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./portal-eUnN6D9k.js";import"./factory-DSzOyGgl.js";import"./index-D2YlXA01.js";import"./create-slot-recipe-context-ihoqZrZU.js";import"./index-CrjboX4Z.js";import"./index-DGKHe-6Q.js";import"./index-Dn30FKhp.js";import"./index-BRNWFSEf.js";import"./theme-M2mYg1Eg.js";import"./use-breakpoint-BCFmA5bm.js";import"./box-D1Z_KUxa.js";import"./h-stack-e-BLBiSK.js";import"./stack-BRg6br_m.js";import"./text-DkCoEBoG.js";import"./icon-button-Bsoqtzk-.js";import"./button-DFylk1V_.js";import"./v-stack-DNelLgfG.js";import"./grid-CQT4z8bD.js";import"./flex-CXFJ85Uw.js";const Y={title:"Features/Draft/DraftPage/Components/PastRoundRow",component:f,parameters:{layout:"padded"},tags:["autodocs"]},C={roundNumber:1,topic:"好きな食べ物",selections:[{userId:"1",userName:"たけし",item:"ラーメン",comment:"深夜に食べたくなる定番"},{userId:"2",userName:"みさき",item:"寿司",comment:"新鮮なネタが最高"},{userId:"3",userName:"ひろし",item:"カレー"},{userId:"4",userName:"あやか",item:"ピザ",comment:"みんなでシェアできる"}]},r={args:{round:C,participants:o,onRoundClick:e=>console.log("Round clicked:",e)}},m={roundNumber:2,topic:"好きな競走馬",selections:[{userId:"1",userName:"たけし",item:"キングカメハメハ",comment:"無敗の三冠馬"},{userId:"2",userName:"みさき",item:"メイショウサムソン",comment:"最強世代の覇者"},{userId:"3",userName:"ひろし",item:"ゴールドシップ"},{userId:"4",userName:"あやか",item:"ジャスタウェイ",comment:"ドバイ制覇"}]},n={name:"長い馬名の表示",args:{round:m,participants:o,onRoundClick:e=>console.log("Round clicked:",e)}},E={roundNumber:3,topic:"印象に残った競走馬",selections:[{userId:"1",userName:"たけし",item:"ウインバリアシオン",comment:"奇跡の復活"},{userId:"2",userName:"みさき",item:"フサイチコンコルド",comment:"天皇賞春3連覇"},{userId:"3",userName:"ひろし",item:"サクラローレル"},{userId:"4",userName:"あやか",item:"タイキシャトル",comment:"最強の三冠馬"},{userId:"5",userName:"けんじ",item:"エルコンドルパサー",comment:"日本ダービー感動"},{userId:"6",userName:"ゆき",item:"グラスワンダー",comment:"逃げ切りの美学"}]},w=[...o,{id:"5",name:"けんじ",avatar:"🦊",status:"completed"},{id:"6",name:"ゆき",avatar:"🐰",status:"completed"}],a={name:"6人参加×長い馬名",args:{round:E,participants:w,onRoundClick:e=>console.log("Round clicked:",e)}},t={name:"SP版折りたたみ状態（✏️編集ボタン付き）",args:{round:m,participants:o,onRoundClick:e=>console.log("詳細モーダル開く:",e),isExpanded:!1,onToggleExpand:()=>console.log("折りたたみトグル")},parameters:{viewport:{defaultViewport:"mobile1"}}},s={name:"SP版展開状態（✏️編集ボタン付き）",args:{round:m,participants:o,onRoundClick:e=>console.log("詳細モーダル開く:",e),isExpanded:!0,onToggleExpand:()=>console.log("折りたたみトグル")},parameters:{viewport:{defaultViewport:"mobile1"}}};var i,c,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    round: sampleRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber)
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '長い馬名の表示',
  args: {
    round: horseRaceRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber)
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,R,N;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '6人参加×長い馬名',
  args: {
    round: sixParticipantsRound,
    participants: sixParticipants,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber)
  }
}`,...(N=(R=a.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var b,k,P;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'SP版折りたたみ状態（✏️編集ボタン付き）',
  args: {
    round: horseRaceRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('詳細モーダル開く:', roundNumber),
    isExpanded: false,
    onToggleExpand: () => console.log('折りたたみトグル')
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(P=(k=t.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var x,S,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'SP版展開状態（✏️編集ボタン付き）',
  args: {
    round: horseRaceRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('詳細モーダル開く:', roundNumber),
    isExpanded: true,
    onToggleExpand: () => console.log('折りたたみトグル')
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Z=["Default","LongHorseNames","SixParticipantsLongNames","CollapsedState","ExpandedState"];export{t as CollapsedState,r as Default,s as ExpandedState,n as LongHorseNames,a as SixParticipantsLongNames,Z as __namedExportsOrder,Y as default};
