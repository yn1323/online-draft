import{j as o}from"./create-recipe-context-LbQq3bM7.js";import{r as Y}from"./index-BXymfbzT.js";import{R as re}from"./responsive-modal-u4uUSmq6.js";import{V as _}from"./v-stack-DfIdlA7P.js";import{B as D}from"./box-p2MKwv57.js";import{H as I}from"./h-stack-BOuMwgNM.js";import{I as ne}from"./image-D2VQ_BCA.js";import{T as u}from"./text-BOFVnBsW.js";import{B as Z}from"./button-Cvi4ewak.js";import{I as te}from"./input-C3XuNbVL.js";import{T as ae}from"./textarea-CzEKuGQU.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./portal-DXIUxZbP.js";import"./create-slot-recipe-context-9ZU4Gcb9.js";import"./factory-OeC611uy.js";import"./index-B1VjsNl3.js";import"./index-C85FKF7s.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./index-CEI8PRn9.js";import"./index-BRNWFSEf.js";import"./use-breakpoint-CtC0MXDZ.js";import"./stack-B-mkjmc_.js";import"./use-field-context-BeRDi0mX.js";const C=({isOpen:t,onClose:m,roundData:s,participants:p,onSaveSelections:M})=>{const[d,g]=Y.useState({editMode:{},tempData:{}});if(!s)return null;const ee=r=>{g(e=>{var n,a;return{...e,editMode:{...e.editMode,[r]:!e.editMode[r]},tempData:e.editMode[r]?e.tempData:{...e.tempData,[r]:{item:((n=s.selections.find(i=>i.userId===r))==null?void 0:n.item)||"",comment:((a=s.selections.find(i=>i.userId===r))==null?void 0:a.comment)||""}}}})},N=(r,e,n)=>{g(a=>({...a,tempData:{...a.tempData,[r]:{...a.tempData[r],[e]:n}}}))},v=()=>Object.keys(d.tempData).some(r=>{const e=s.selections.find(a=>a.userId===r),n=d.tempData[r];return n&&(n.item!==((e==null?void 0:e.item)||"")||n.comment!==((e==null?void 0:e.comment)||""))}),oe=()=>{const r=p.map(e=>{const n=d.tempData[e.id],a=s.selections.find(i=>i.userId===e.id);return n?{userId:e.id,userName:e.name,item:n.item,comment:n.comment}:a||{userId:e.id,userName:e.name,item:"",comment:""}}).filter(e=>e.item.trim()!=="");M(s.roundNumber,r),g({editMode:{},tempData:{}}),m()},R=()=>{g({editMode:{},tempData:{}}),m()};return o.jsx(re,{isOpen:t,onClose:v()?()=>{confirm("未保存の変更があります。閉じますか？")&&R()}:R,title:`ラウンド ${s.roundNumber}: ${s.topic}`,actions:{cancel:{text:"キャンセル",onClick:R},submit:{text:"保存",colorPalette:"green",disabled:!v(),onClick:oe}},children:o.jsx(_,{gap:4,align:"stretch",w:"full",children:p.map(r=>{const e=s.selections.find(i=>i.userId===r.id),n=d.editMode[r.id],a=d.tempData[r.id];return o.jsxs(D,{p:4,borderRadius:"lg",border:"1px solid",borderColor:"gray.200",bg:"white",_dark:{bg:"gray.800",borderColor:"gray.600"},children:[o.jsxs(I,{justify:"space-between",mb:3,children:[o.jsxs(I,{gap:3,children:[o.jsx(ne,{src:`/img/${r.avatar}.png`,alt:r.name,width:"32px",height:"32px",borderRadius:"md",objectFit:"cover"}),o.jsx(u,{fontWeight:"bold",color:"gray.800",_dark:{color:"gray.200"},children:r.name})]}),o.jsx(Z,{size:"sm",variant:"outline",colorPalette:n?"red":"green",onClick:()=>ee(r.id),children:n?"キャンセル":"編集"})]}),o.jsxs(_,{gap:3,align:"stretch",children:[o.jsxs(D,{children:[n&&o.jsx(u,{fontSize:"sm",fontWeight:"medium",mb:1,color:"gray.600",_dark:{color:"gray.400"},children:"選択"}),n?o.jsx(te,{value:(a==null?void 0:a.item)||"",onChange:i=>N(r.id,"item",i.target.value),placeholder:"選択を入力...",size:"sm",borderWidth:2,borderColor:"gray.300",_focus:{borderColor:"green.500",boxShadow:"0 0 0 1px var(--chakra-colors-green-500)"},_dark:{borderColor:"gray.600",bg:"gray.700",_focus:{borderColor:"green.400",boxShadow:"0 0 0 1px var(--chakra-colors-green-400)"}}}):o.jsx(u,{fontSize:"lg",fontWeight:"bold",color:"gray.800",_dark:{color:"gray.200"},children:(e==null?void 0:e.item)||"未選択"})]}),o.jsxs(D,{children:[n&&o.jsx(u,{fontSize:"sm",fontWeight:"medium",mb:1,color:"green.600",_dark:{color:"green.300"},children:"コメント"}),n?o.jsx(ae,{value:(a==null?void 0:a.comment)||"",onChange:i=>N(r.id,"comment",i.target.value),placeholder:"コメントを入力...",rows:2,resize:"none",size:"sm",borderWidth:2,borderColor:"gray.300",_focus:{borderColor:"green.500",boxShadow:"0 0 0 1px var(--chakra-colors-green-500)"},_dark:{borderColor:"gray.600",bg:"gray.700",_focus:{borderColor:"green.400",boxShadow:"0 0 0 1px var(--chakra-colors-green-400)"}}}):o.jsx(u,{fontSize:"sm",color:"green.600",fontStyle:e!=null&&e.comment?"italic":"normal",_dark:{color:"green.300"},children:(e==null?void 0:e.comment)||"（コメントなし）"})]})]})]},r.id)})})})};try{C.displayName="RoundDetailModal",C.__docgenInfo={description:"",displayName:"RoundDetailModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},roundData:{defaultValue:null,description:"",name:"roundData",required:!0,type:{name:"RoundData | null"}},participants:{defaultValue:null,description:"",name:"participants",required:!0,type:{name:"Participant[]"}},onSaveSelections:{defaultValue:null,description:"",name:"onSaveSelections",required:!0,type:{name:"(roundNumber: number, selections: RoundSelection[]) => void"}}}}}catch{}const Ve={title:"Features/Draft/RoundDetailModal",component:C,parameters:{layout:"centered",viewport:{defaultViewport:"desktop"}},argTypes:{isOpen:{control:"boolean",description:"モーダルの表示状態"},onClose:{description:"モーダルを閉じる際のコールバック"},onSaveSelections:{description:"選択内容を保存する際のコールバック"}},tags:["autodocs"]},c=[{id:"1",name:"あきら",avatar:"1"},{id:"2",name:"さくら",avatar:"2"},{id:"3",name:"ゆうき",avatar:"3"},{id:"4",name:"みお",avatar:"4"}],j={roundNumber:1,topic:"好きな動物",selections:[{userId:"1",userName:"あきら",item:"パンダ",comment:"かわいいから！"},{userId:"2",userName:"さくら",item:"うさぎ",comment:"ふわふわで癒される"},{userId:"3",userName:"ゆうき",item:"ライオン",comment:"カッコいいから"},{userId:"4",userName:"みお",item:"",comment:""}]},se={roundNumber:3,topic:"最も印象に残っているアニメ作品",selections:[{userId:"1",userName:"あきら",item:"千と千尋の神隠し",comment:"子供の頃に見て、今でも色褪せない美しい世界観と深いメッセージに感動しました。音楽も素晴らしく、何度見ても新しい発見があります。"},{userId:"2",userName:"さくら",item:"エヴァンゲリオン",comment:"複雑な心理描写と哲学的なテーマが印象的。大人になってから見返すと、また違った解釈ができて面白いです。"},{userId:"3",userName:"ゆうき",item:"ワンピース",comment:"友情と冒険の物語として最高。仲間を思う気持ちや夢を追いかける姿勢に何度も勇気をもらいました。"},{userId:"4",userName:"みお",item:"君の名は。",comment:"美しい映像と切ない恋愛ストーリーに心を奪われました。時間と空間を超えた繋がりというテーマが素敵でした。"}]},l=({roundData:t,participants:m})=>{const[s,p]=Y.useState(!1);return o.jsxs(D,{children:[o.jsx(Z,{onClick:()=>p(!0),colorPalette:"blue",children:"ラウンド詳細を開く"}),o.jsx(C,{isOpen:s,onClose:()=>p(!1),roundData:t,participants:m,onSaveSelections:(M,d)=>{console.log("onSaveSelections:",{roundNumber:M,selections:d})}})]})},b={render:t=>o.jsx(l,{...t}),args:{roundData:j,participants:c},parameters:{docs:{description:{story:"ラウンド詳細モーダルのデフォルト表示。各参加者の選択とコメントを表示・編集できます。"}}}},h={render:t=>o.jsx(l,{...t}),args:{roundData:se,participants:c},parameters:{docs:{description:{story:"長いコンテンツを含むラウンド詳細。コメントが長文の場合の表示を確認できます。"}}}},f={render:t=>o.jsx(l,{...t}),args:{roundData:{roundNumber:2,topic:"好きな食べ物",selections:[]},participants:c},parameters:{docs:{description:{story:"誰も選択していないラウンドの表示。全ユーザーが未選択状態です。"}}}},x={render:t=>o.jsx(l,{...t}),args:{roundData:{roundNumber:4,topic:"好きな季節",selections:[{userId:"1",userName:"あきら",item:"春",comment:"桜が綺麗だから"},{userId:"3",userName:"ゆうき",item:"冬",comment:""}]},participants:c},parameters:{docs:{description:{story:"一部のユーザーのみが選択している状態。選択済み・未選択・コメントありなしの混在状態です。"}}}},y={render:t=>o.jsx(l,{...t}),args:{roundData:j,participants:c},parameters:{viewport:{defaultViewport:"mobile2"},docs:{description:{story:"モバイル表示でのラウンド詳細モーダル。ResponsiveModalによりドロワー形式で表示されます。"}}}},k={render:t=>o.jsx(l,{...t}),args:{roundData:j,participants:c},parameters:{backgrounds:{default:"dark"},chakra:{colorMode:"dark"},docs:{description:{story:"ダークモードでのラウンド詳細モーダル表示。"}}}},S={args:{isOpen:!0,onClose:()=>console.log("onClose"),roundData:j,participants:c,onSaveSelections:(t,m)=>{console.log("onSaveSelections:",{roundNumber:t,selections:m})}},parameters:{docs:{description:{story:"常に開いた状態のモーダル（開発・デバッグ用）。UI要素の詳細確認に使用します。"}}}};var w,P,W;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: mockRoundData,
    participants: mockParticipants
  },
  parameters: {
    docs: {
      description: {
        story: 'ラウンド詳細モーダルのデフォルト表示。各参加者の選択とコメントを表示・編集できます。'
      }
    }
  }
}`,...(W=(P=b.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var V,O,z;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: mockRoundDataLongContent,
    participants: mockParticipants
  },
  parameters: {
    docs: {
      description: {
        story: '長いコンテンツを含むラウンド詳細。コメントが長文の場合の表示を確認できます。'
      }
    }
  }
}`,...(z=(O=h.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var E,T,q;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: {
      roundNumber: 2,
      topic: '好きな食べ物',
      selections: []
    },
    participants: mockParticipants
  },
  parameters: {
    docs: {
      description: {
        story: '誰も選択していないラウンドの表示。全ユーザーが未選択状態です。'
      }
    }
  }
}`,...(q=(T=f.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var B,L,$;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: {
      roundNumber: 4,
      topic: '好きな季節',
      selections: [{
        userId: '1',
        userName: 'あきら',
        item: '春',
        comment: '桜が綺麗だから'
      }, {
        userId: '3',
        userName: 'ゆうき',
        item: '冬',
        comment: ''
      } // コメントなし
      ]
    },
    participants: mockParticipants
  },
  parameters: {
    docs: {
      description: {
        story: '一部のユーザーのみが選択している状態。選択済み・未選択・コメントありなしの混在状態です。'
      }
    }
  }
}`,...($=(L=x.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var A,F,H;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: mockRoundData,
    participants: mockParticipants
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    },
    docs: {
      description: {
        story: 'モバイル表示でのラウンド詳細モーダル。ResponsiveModalによりドロワー形式で表示されます。'
      }
    }
  }
}`,...(H=(F=y.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var U,G,J;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: mockRoundData,
    participants: mockParticipants
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    chakra: {
      colorMode: 'dark'
    },
    docs: {
      description: {
        story: 'ダークモードでのラウンド詳細モーダル表示。'
      }
    }
  }
}`,...(J=(G=k.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => console.log('onClose'),
    roundData: mockRoundData,
    participants: mockParticipants,
    onSaveSelections: (roundNumber, selections) => {
      console.log('onSaveSelections:', {
        roundNumber,
        selections
      });
    }
  },
  parameters: {
    docs: {
      description: {
        story: '常に開いた状態のモーダル（開発・デバッグ用）。UI要素の詳細確認に使用します。'
      }
    }
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Oe=["Default","LongContent","EmptyRound","PartialSelections","MobileView","DarkMode","AlwaysOpen"];export{S as AlwaysOpen,k as DarkMode,b as Default,f as EmptyRound,h as LongContent,y as MobileView,x as PartialSelections,Oe as __namedExportsOrder,Ve as default};
