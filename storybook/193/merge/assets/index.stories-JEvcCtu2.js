import{j as e}from"./stack-B25eOQea.js";import{u as n,c as a,g as m,s as u}from"./states-Bd1A8IJM.js";import{C as s}from"./index-CFBXrSgY.js";import{u as V}from"./utils-CKwsSTjv.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./react-BSHoCbAh.js";import"./index-DnMZShaJ.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./index-DGKHe-6Q.js";import"./image-context-B4PdNff0.js";import"./box-BDoFiJcT.js";import"./create-slot-recipe-context-BILcAqFF.js";import"./attr-C3Jtgmrz.js";import"./index-DQKawd5P.js";import"./factory-CQjN0O8Q.js";import"./index-D3iQu9n-.js";import"./index-BPRKcNEv.js";import"./index-CrjboX4Z.js";import"./index-6PFvwfVV.js";import"./index-BRNWFSEf.js";import"./index-C9wqLcGi.js";import"./button-BzGfOniU.js";import"./spinner-BaqUdWIg.js";import"./index-_ZCxv-ro.js";import"./card-BfIoSqEc.js";import"./index-ByYvEZYI.js";import"./v-stack-DLbVHDKJ.js";import"./h-stack-Bm4oIVhc.js";import"./text-ddCD_fM-.js";const i=({initialValues:H,children:U})=>(V(H),U),p=[{id:"user1",name:"田中太郎",avatar:"1"},{id:"user2",name:"山田花子",avatar:"3"},{id:"user3",name:"佐藤次郎",avatar:"5"}],j=[{item:"候補A (タイプB)",comment:"いい選択です",round:4,userId:"user1",groupId:"group1",randomNumber:Math.random()},{item:"候補B (タイプA)",comment:"これもいいね",round:4,userId:"user2",groupId:"group1",randomNumber:Math.random()}],O=[{item:"候補A (タイプB)",comment:"いい選択です",round:4,userId:"user1",groupId:"group1",randomNumber:Math.random()},{item:"候補B (タイプA)",comment:"これもいいね",round:4,userId:"user2",groupId:"group1",randomNumber:Math.random()},{item:"候補C (タイプC)",comment:"最高の選択",round:4,userId:"user3",groupId:"group1",randomNumber:Math.random()}],me={title:"Features/draft/CurrentRoundStatus",component:s,parameters:{layout:"centered"}},r={render:()=>e.jsx(i,{initialValues:[[n,p],[a,"user1"],[m,{round:4,groupName:"テストグループ"}],[u,j]],children:e.jsx(s,{variant:"sp",onItemSelect:()=>console.log("アイテム選択"),onOpenResult:()=>console.log("開票")})})},o={render:()=>e.jsx(i,{initialValues:[[n,p],[a,"user1"],[m,{round:4,groupName:"テストグループ"}],[u,j]],children:e.jsx(s,{variant:"pc",onItemSelect:()=>console.log("アイテム選択"),onOpenResult:()=>console.log("開票")})})},t={render:()=>e.jsx(i,{initialValues:[[n,p],[a,"user1"],[m,{round:4,groupName:"テストグループ"}],[u,O]],children:e.jsx(s,{variant:"sp",onOpenResult:()=>console.log("開票")})})};var d,c,l,g,A;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [currentUserIdAtom, 'user1'], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, testSelections]]}>
      <CurrentRoundStatus variant="sp" onItemSelect={() => console.log('アイテム選択')} onOpenResult={() => console.log('開票')} />
    </HydrateAtoms>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:`デフォルト表示（SP版）
一部のユーザーが選択完了している状態`,...(A=(g=r.parameters)==null?void 0:g.docs)==null?void 0:A.description}}};var S,I,y,R,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [currentUserIdAtom, 'user1'], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, testSelections]]}>
      <CurrentRoundStatus variant="pc" onItemSelect={() => console.log('アイテム選択')} onOpenResult={() => console.log('開票')} />
    </HydrateAtoms>
}`,...(y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:y.source},description:{story:`PC版表示
デスクトップでの表示確認用`,...(C=(R=o.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};var N,x,v,f,h;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [currentUserIdAtom, 'user1'], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, allSelectedSelections]]}>
      <CurrentRoundStatus variant="sp" onOpenResult={() => console.log('開票')} />
    </HydrateAtoms>
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:`全員選択完了
全参加者が選択を完了した状態`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};const ue=["Default","PCVersion","AllSelected"];export{t as AllSelected,r as Default,o as PCVersion,ue as __namedExportsOrder,me as default};
