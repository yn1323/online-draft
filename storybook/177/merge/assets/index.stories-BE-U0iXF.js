import{j as r}from"./stack-B25eOQea.js";import{u as m,g as n,s as i}from"./states-Bd1A8IJM.js";import{S as a}from"./index-CY2mNfe_.js";import{u as B}from"./utils-CKwsSTjv.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./react-BSHoCbAh.js";import"./responsive-modal-B3DY7mrh.js";import"./index-B9kDuT7e.js";import"./icon-button-CZw3PtnZ.js";import"./button-BzGfOniU.js";import"./attr-C3Jtgmrz.js";import"./spinner-BaqUdWIg.js";import"./index-D3iQu9n-.js";import"./index-BPRKcNEv.js";import"./index-DQKawd5P.js";import"./factory-CQjN0O8Q.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./create-slot-recipe-context-BILcAqFF.js";import"./render-strategy-CvFi1cA2.js";import"./index-D_DKZCCl.js";import"./index-BRNWFSEf.js";import"./use-breakpoint-BiEj9wsk.js";import"./v-stack-DLbVHDKJ.js";import"./useModal-IzikcFvB.js";import"./index-BSJsCTzL.js";import"./index-CWtFKQuP.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./image-context-B4PdNff0.js";import"./box-BDoFiJcT.js";import"./index-6PFvwfVV.js";import"./grid-W1xKhCbE.js";import"./text-ddCD_fM-.js";import"./h-stack-Bm4oIVhc.js";const Ar={title:"Features/draft/modals/StageModal",component:a,parameters:{screenshot:{skip:!0},layout:"centered"},tags:["autodocs"]},u=({initialValues:c,children:T})=>(B(c),T),d=[{id:"user1",name:"田中太郎",avatar:"1"},{id:"user2",name:"佐藤花子",avatar:"2"},{id:"user3",name:"鈴木一郎",avatar:"3"},{id:"user4",name:"高橋次郎",avatar:"4"},{id:"user5",name:"山田美咲",avatar:"5"},{id:"user6",name:"中村翔太",avatar:"6"}],p=[{item:"大谷翔平",comment:"絶対的エース！",round:4,userId:"user1",groupId:"group1",randomNumber:Math.random()},{item:"大谷翔平",comment:"私も大谷！",round:4,userId:"user2",groupId:"group1",randomNumber:Math.random()},{item:"山田太郎",comment:"堅実な選択",round:4,userId:"user3",groupId:"group1",randomNumber:Math.random()},{item:"佐々木朗希",comment:"完全試合の男",round:4,userId:"user4",groupId:"group1",randomNumber:Math.random()},{item:"村上宗隆",comment:"ホームラン王",round:4,userId:"user5",groupId:"group1",randomNumber:Math.random()},{item:"ダルビッシュ有",comment:"変化球の魔術師",round:4,userId:"user6",groupId:"group1",randomNumber:Math.random()}],e={render:()=>r.jsx(u,{initialValues:[[m,d],[n,{round:4,groupName:"テストグループ"}],[i,p]],children:r.jsx(a,{isOpen:!0,variant:"card",onClose:()=>console.log("Modal closed")})}),parameters:{test:{timeout:3e4},chromatic:{delay:8e3}}},o={render:()=>r.jsx(u,{initialValues:[[m,d],[n,{round:4,groupName:"テストグループ"}],[i,p]],children:r.jsx(a,{isOpen:!0,variant:"typing",onClose:()=>console.log("Modal closed")})}),parameters:{test:{timeout:3e4},chromatic:{delay:6e3}}},t={render:()=>r.jsx(u,{initialValues:[[m,d],[n,{round:4,groupName:"テストグループ"}],[i,p]],children:r.jsx(a,{isOpen:!0,variant:"slot",onClose:()=>console.log("Modal closed")})}),parameters:{test:{timeout:3e4},chromatic:{delay:1e4}}},s={render:()=>{const c=[{item:"重複指名アイテム",comment:"コメントA",round:2,userId:"user1",groupId:"group1",randomNumber:100},{item:"重複指名アイテム",comment:"コメントB",round:2,userId:"user2",groupId:"group1",randomNumber:50},{item:"重複指名アイテム",comment:"コメントC",round:2,userId:"user3",groupId:"group1",randomNumber:30}];return r.jsx(u,{initialValues:[[m,d],[n,{round:3,groupName:"テストグループ"}],[i,c]],children:r.jsx(a,{isOpen:!0,onClose:()=>{},variant:"card"})})},parameters:{chromatic:{delay:3e3}}};var l,g,y,A,I;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, currentRoundSelections]]}>
      <StageModal isOpen={true} variant="card" onClose={() => console.log('Modal closed')} />
    </HydrateAtoms>,
  parameters: {
    // テスト用の長いタイムアウト
    test: {
      timeout: 30000 // 30秒
    },
    // アニメーション完了を待つ
    chromatic: {
      delay: 8000 // 8秒待機（カードめくりアニメーション用）
    }
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"カードめくり演出パターン",...(I=(A=e.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};var h,N,S,M,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, currentRoundSelections]]}>
      <StageModal isOpen={true} variant="typing" onClose={() => console.log('Modal closed')} />
    </HydrateAtoms>,
  parameters: {
    // テスト用の長いタイムアウト
    test: {
      timeout: 30000 // 30秒
    },
    // アニメーション完了を待つ
    chromatic: {
      delay: 6000 // 6秒待機（タイピングアニメーション用）
    }
  }
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source},description:{story:"タイピング演出パターン",...(v=(M=o.parameters)==null?void 0:M.docs)==null?void 0:v.description}}};var C,b,x,f,j;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, currentRoundSelections]]}>
      <StageModal isOpen={true} variant="slot" onClose={() => console.log('Modal closed')} />
    </HydrateAtoms>,
  parameters: {
    // テスト用の長いタイムアウト
    test: {
      timeout: 30000 // 30秒
    },
    // アニメーション完了を待つ
    chromatic: {
      delay: 10000 // 10秒待機（スロットマシンアニメーション用）
    }
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:"スロットマシン演出パターン",...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};var H,O,V,R,U;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const conflictSelections: SelectionAtom[] = [{
      item: '重複指名アイテム',
      comment: 'コメントA',
      round: 2,
      // 現在のラウンド
      userId: 'user1',
      groupId: 'group1',
      randomNumber: 100 // 最大値（勝者）
    }, {
      item: '重複指名アイテム',
      comment: 'コメントB',
      round: 2,
      // 現在のラウンド
      userId: 'user2',
      groupId: 'group1',
      randomNumber: 50 // 中間値（敗者）
    }, {
      item: '重複指名アイテム',
      comment: 'コメントC',
      round: 2,
      // 現在のラウンド
      userId: 'user3',
      groupId: 'group1',
      randomNumber: 30 // 最小値（敗者）
    }];
    return <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
      round: 3,
      groupName: 'テストグループ'
    }],
    // 現在Round3、表示はRound2の結果
    [selectionsAtom, conflictSelections]]}>
        <StageModal isOpen={true} onClose={() => {}} variant="card" />
      </HydrateAtoms>;
  },
  parameters: {
    chromatic: {
      delay: 3000 // 3秒待機（カード演出用）
    }
  }
}`,...(V=(O=s.parameters)==null?void 0:O.docs)==null?void 0:V.source},description:{story:`3人重複指名テストケース
3人が同じアイテムを選択した場合の演出確認
randomNumber最大の人が勝者（緑）、他の2人が敗者（赤）`,...(U=(R=s.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};const Ir=["Card","Typing","SlotMachine","ThreeWayConflict"];export{e as Card,t as SlotMachine,s as ThreeWayConflict,o as Typing,Ir as __namedExportsOrder,Ar as default};
