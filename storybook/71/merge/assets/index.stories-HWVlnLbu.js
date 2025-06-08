import{j as e}from"./create-recipe-context-oy0ofMwS.js";import{R as V}from"./index-DqVBdWsZ.js";import{r as U}from"./index-BXymfbzT.js";import{B as _}from"./box-D1Z_KUxa.js";import{B as F}from"./button-DFylk1V_.js";import"./jsx-runtime-Bw5QeaCk.js";import"./responsive-modal-VBDbG9cT.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bsoqtzk-.js";import"./portal-eUnN6D9k.js";import"./factory-DSzOyGgl.js";import"./index-D2YlXA01.js";import"./create-slot-recipe-context-ihoqZrZU.js";import"./index-CrjboX4Z.js";import"./index-DGKHe-6Q.js";import"./index-CISTR-1f.js";import"./index-BRNWFSEf.js";import"./use-breakpoint-BCFmA5bm.js";import"./v-stack-DNelLgfG.js";import"./stack-BRg6br_m.js";import"./h-stack-e-BLBiSK.js";import"./image-CisOvN2U.js";import"./text-DkCoEBoG.js";import"./input-n8mBWrzc.js";import"./textarea-DbTSzehL.js";const Dr={title:"Features/Draft/RoundDetailModal",component:V,parameters:{layout:"centered",viewport:{defaultViewport:"desktop"}},argTypes:{isOpen:{control:"boolean",description:"モーダルの表示状態"},onClose:{description:"モーダルを閉じる際のコールバック"},onSaveSelections:{description:"選択内容を保存する際のコールバック"}},tags:["autodocs"]},o=[{id:"1",name:"あきら",avatar:"1"},{id:"2",name:"さくら",avatar:"2"},{id:"3",name:"ゆうき",avatar:"3"},{id:"4",name:"みお",avatar:"4"}],p={roundNumber:1,topic:"好きな動物",selections:[{userId:"1",userName:"あきら",item:"パンダ",comment:"かわいいから！"},{userId:"2",userName:"さくら",item:"うさぎ",comment:"ふわふわで癒される"},{userId:"3",userName:"ゆうき",item:"ライオン",comment:"カッコいいから"},{userId:"4",userName:"みお",item:"",comment:""}]},T={roundNumber:3,topic:"最も印象に残っているアニメ作品",selections:[{userId:"1",userName:"あきら",item:"千と千尋の神隠し",comment:"子供の頃に見て、今でも色褪せない美しい世界観と深いメッセージに感動しました。音楽も素晴らしく、何度見ても新しい発見があります。"},{userId:"2",userName:"さくら",item:"エヴァンゲリオン",comment:"複雑な心理描写と哲学的なテーマが印象的。大人になってから見返すと、また違った解釈ができて面白いです。"},{userId:"3",userName:"ゆうき",item:"ワンピース",comment:"友情と冒険の物語として最高。仲間を思う気持ちや夢を追いかける姿勢に何度も勇気をもらいました。"},{userId:"4",userName:"みお",item:"君の名は。",comment:"美しい映像と切ない恋愛ストーリーに心を奪われました。時間と空間を超えた繋がりというテーマが素敵でした。"}]},n=({roundData:r,participants:u})=>{const[B,l]=U.useState(!1);return e.jsxs(_,{children:[e.jsx(F,{onClick:()=>l(!0),colorPalette:"blue",children:"ラウンド詳細を開く"}),e.jsx(V,{isOpen:B,onClose:()=>l(!1),roundData:r,participants:u,onSaveSelections:(L,A)=>{console.log("onSaveSelections:",{roundNumber:L,selections:A})}})]})},t={render:r=>e.jsx(n,{...r}),args:{roundData:p,participants:o},parameters:{docs:{description:{story:"ラウンド詳細モーダルのデフォルト表示。各参加者の選択とコメントを表示・編集できます。"}}}},a={render:r=>e.jsx(n,{...r}),args:{roundData:T,participants:o},parameters:{docs:{description:{story:"長いコンテンツを含むラウンド詳細。コメントが長文の場合の表示を確認できます。"}}}},s={render:r=>e.jsx(n,{...r}),args:{roundData:{roundNumber:2,topic:"好きな食べ物",selections:[]},participants:o},parameters:{docs:{description:{story:"誰も選択していないラウンドの表示。全ユーザーが未選択状態です。"}}}},i={render:r=>e.jsx(n,{...r}),args:{roundData:{roundNumber:4,topic:"好きな季節",selections:[{userId:"1",userName:"あきら",item:"春",comment:"桜が綺麗だから"},{userId:"3",userName:"ゆうき",item:"冬",comment:""}]},participants:o},parameters:{docs:{description:{story:"一部のユーザーのみが選択している状態。選択済み・未選択・コメントありなしの混在状態です。"}}}},c={render:r=>e.jsx(n,{...r}),args:{roundData:p,participants:o},parameters:{viewport:{defaultViewport:"mobile2"},docs:{description:{story:"モバイル表示でのラウンド詳細モーダル。ResponsiveModalによりドロワー形式で表示されます。"}}}},m={render:r=>e.jsx(n,{...r}),args:{roundData:p,participants:o},parameters:{backgrounds:{default:"dark"},chakra:{colorMode:"dark"},docs:{description:{story:"ダークモードでのラウンド詳細モーダル表示。"}}}},d={args:{isOpen:!0,onClose:()=>console.log("onClose"),roundData:p,participants:o,onSaveSelections:(r,u)=>{console.log("onSaveSelections:",{roundNumber:r,selections:u})}},parameters:{docs:{description:{story:"常に開いた状態のモーダル（開発・デバッグ用）。UI要素の詳細確認に使用します。"}}}};var g,D,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(k=(D=t.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var S,R,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(R=a.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var N,C,M;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(C=s.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var b,f,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,I,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(I=c.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var j,P,w;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(P=m.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var O,W,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const kr=["Default","LongContent","EmptyRound","PartialSelections","MobileView","DarkMode","AlwaysOpen"];export{d as AlwaysOpen,m as DarkMode,t as Default,s as EmptyRound,a as LongContent,c as MobileView,i as PartialSelections,kr as __namedExportsOrder,Dr as default};
