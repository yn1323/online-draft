import{j as r}from"./stack-C7hvTRfV.js";import{u,g as i,s as a}from"./states-Bd1A8IJM.js";import{P as n}from"./index-BvqL76_m.js";import{u as D}from"./utils-CKwsSTjv.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./react-BSHoCbAh.js";import"./index-IdmUFQYJ.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./index-DGKHe-6Q.js";import"./image-context-B4PdNff0.js";import"./box-DfzLPJuh.js";import"./create-slot-recipe-context-Ct6br2V7.js";import"./attr-C3Jtgmrz.js";import"./index-PsSrZQde.js";import"./factory-hxkYGFqN.js";import"./index-CzEkc76M.js";import"./index-ytcWRJ8V.js";import"./index-CrjboX4Z.js";import"./index-B7ziaFbE.js";import"./index-BgxHbLYw.js";import"./index-DbtT-soW.js";import"./card-Dcz0m3mf.js";import"./toaster-fCX_dEN1.js";import"./text-CD52-QEU.js";import"./grid-BguLyDGn.js";import"./h-stack-BRlU4uQg.js";import"./v-stack-3HiezQxF.js";import"./render-strategy-F9cfH0Wk.js";import"./index-R6MWo6e9.js";const p=({initialValues:e,children:o})=>(D(e),o),c=[{id:"user1",name:"田中太郎",avatar:"1"},{id:"user2",name:"山田花子",avatar:"3"},{id:"user3",name:"佐藤次郎",avatar:"5"}],w=[{item:"候補アイテムA",comment:"最高の選択！",round:1,userId:"user1",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムB",comment:"いい感じ",round:1,userId:"user2",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムC",comment:"これしかない",round:1,userId:"user3",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムD",comment:"狙い通り",round:2,userId:"user3",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムE",comment:"まずまず",round:2,userId:"user1",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムF",comment:"いける",round:2,userId:"user2",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムG",comment:"これで決まり",round:3,userId:"user2",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムH",comment:"Perfect!",round:3,userId:"user3",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムI",comment:"やったー",round:3,userId:"user1",groupId:"group1",randomNumber:Math.random()}],cr={title:"Features/draft/PastDraftResults",component:n,parameters:{layout:"centered"}},t={render:()=>r.jsx(p,{initialValues:[[u,c],[i,{round:4,groupName:"テストグループ"}],[a,w]],children:r.jsx("div",{style:{width:"800px",height:"400px"},children:r.jsx(n,{variant:"pc",onEditClick:({userId:e,round:o})=>console.log("編集クリック:",{userId:e,round:o})})})})},s={render:()=>r.jsx(p,{initialValues:[[u,c],[i,{round:4,groupName:"テストグループ"}],[a,w]],children:r.jsx("div",{style:{width:"400px",height:"500px"},children:r.jsx(n,{variant:"sp",onEditClick:({userId:e,round:o})=>console.log("編集クリック:",{userId:e,round:o})})})})},d={render:()=>r.jsx(p,{initialValues:[[u,c],[i,{round:1,groupName:"テストグループ"}],[a,[]]],children:r.jsx("div",{style:{width:"400px",height:"300px"},children:r.jsx(n,{variant:"sp",onEditClick:({userId:e,round:o})=>console.log("編集クリック:",{userId:e,round:o})})})})},m={render:()=>{const e=[{item:"重複指名アイテム",comment:"コメントA",round:1,userId:"user1",groupId:"group1",randomNumber:100},{item:"重複指名アイテム",comment:"コメントB",round:1,userId:"user2",groupId:"group1",randomNumber:50},{item:"重複指名アイテム",comment:"コメントC",round:1,userId:"user3",groupId:"group1",randomNumber:30}];return r.jsx(p,{initialValues:[[u,c],[i,{round:2,groupName:"テストグループ"}],[a,e]],children:r.jsx("div",{style:{width:"800px",height:"400px"},children:r.jsx(n,{variant:"pc",onEditClick:({userId:o,round:V})=>console.log("編集クリック:",{userId:o,round:V})})})})}};var l,g,h,I,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }],
  // 現在Round4なので1-3が過去結果
  [selectionsAtom, pastSelections]]}>
      <div style={{
      width: '800px',
      height: '400px'
    }}>
        <PastDraftResults variant="pc" onEditClick={({
        userId,
        round
      }) => console.log('編集クリック:', {
        userId,
        round
      })} />
      </div>
    </HydrateAtoms>
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:`PC版スタイル（テーブル形式）
過去3ラウンドの結果を表示`,...(x=(I=t.parameters)==null?void 0:I.docs)==null?void 0:x.description}}};var A,y,N,v,f;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, pastSelections]]}>
      <div style={{
      width: '400px',
      height: '500px'
    }}>
        <PastDraftResults variant="sp" onEditClick={({
        userId,
        round
      }) => console.log('編集クリック:', {
        userId,
        round
      })} />
      </div>
    </HydrateAtoms>
}`,...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source},description:{story:`SP版スタイル（アコーディオン形式）
過去3ラウンドの結果を表示`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var C,b,j,P,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 1,
    groupName: 'テストグループ'
  }],
  // Round1なので過去結果なし
  [selectionsAtom, []] // 空のselections
  ]}>
      <div style={{
      width: '400px',
      height: '300px'
    }}>
        <PastDraftResults variant="sp" onEditClick={({
        userId,
        round
      }) => console.log('編集クリック:', {
        userId,
        round
      })} />
      </div>
    </HydrateAtoms>
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source},description:{story:`過去結果なし（Round 1の状態）
まだ開票が始まっていない状態`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var S,E,H,M,k;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    // 3人重複指名のテストデータ（全員が同じアイテムを選択）
    const conflictSelections: SelectionAtom[] = [{
      item: '重複指名アイテム',
      comment: 'コメントA',
      round: 1,
      userId: 'user1',
      groupId: 'group1',
      randomNumber: 100 // 最大値（勝者）
    }, {
      item: '重複指名アイテム',
      comment: 'コメントB',
      round: 1,
      userId: 'user2',
      groupId: 'group1',
      randomNumber: 50 // 中間値（敗者）
    }, {
      item: '重複指名アイテム',
      comment: 'コメントC',
      round: 1,
      userId: 'user3',
      groupId: 'group1',
      randomNumber: 30 // 最小値（敗者）
    }];
    return <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
      round: 2,
      groupName: 'テストグループ'
    }],
    // 現在Round2なので1が過去結果
    [selectionsAtom, conflictSelections]]}>
        <div style={{
        width: '800px',
        height: '400px'
      }}>
          <PastDraftResults variant="pc" onEditClick={({
          userId,
          round
        }) => console.log('編集クリック:', {
          userId,
          round
        })} />
        </div>
      </HydrateAtoms>;
  }
}`,...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.source},description:{story:`3人重複指名テストケース（重複指名解決機能の動作確認用）
Round 1で3人全員が同じアイテムを選択した状態`,...(k=(M=m.parameters)==null?void 0:M.docs)==null?void 0:k.description}}};const lr=["PC","SP","NoResults","ThreeWayConflict"];export{d as NoResults,t as PC,s as SP,m as ThreeWayConflict,lr as __namedExportsOrder,cr as default};
