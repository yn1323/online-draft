import{j as g}from"./stack-B25eOQea.js";import{r as i}from"./index-BXymfbzT.js";import{R as A}from"./responsive-modal-Cx12ZJOs.js";import{S as L}from"./index-CGerEHqX.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BrT_qiXh.js";import"./icon-button-CZw3PtnZ.js";import"./button-BzGfOniU.js";import"./attr-C3Jtgmrz.js";import"./spinner-BaqUdWIg.js";import"./index-D3iQu9n-.js";import"./index-BPRKcNEv.js";import"./index-DQKawd5P.js";import"./factory-CQjN0O8Q.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./create-slot-recipe-context-BILcAqFF.js";import"./render-strategy-CvFi1cA2.js";import"./index-D_DKZCCl.js";import"./index-BRNWFSEf.js";import"./use-breakpoint-BiEj9wsk.js";import"./v-stack-DLbVHDKJ.js";import"./index-CWtFKQuP.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./image-context-B4PdNff0.js";import"./box-BDoFiJcT.js";import"./index-6PFvwfVV.js";import"./grid-W1xKhCbE.js";import"./text-ddCD_fM-.js";import"./h-stack-Bm4oIVhc.js";const y=()=>{const[e,t]=i.useState(!1),[c,l]=i.useState("card");return{isOpen:e,variant:c,open:p=>{const n=["card","typing","slot"],w=n[Math.floor(Math.random()*n.length)];l(p||w),t(!0)},close:()=>t(!1)}},u=({isOpen:e,onClose:t,variant:c,participants:l})=>{const[m,a]=i.useState(!1);i.useEffect(()=>{a(!!e)},[e]);const p=()=>{a(!0)},n=()=>{a(!1)};return g.jsx(A,{isOpen:e,onClose:t,title:"開票演出",dialogMaxWidth:"4xl",actions:{cancel:{text:"閉じる",onClick:t}},children:g.jsx(L,{variant:c,participants:l,isRevealing:m,onStartReveal:p,onReset:n})})};try{y.displayName="useStageModal",y.__docgenInfo={description:"StageModal用のカスタムフック",displayName:"useStageModal",props:{}}}catch{}try{u.displayName="StageModal",u.__docgenInfo={description:`開票演出を表示するモーダルコンポーネント
ResponsiveModalを使用して、SP/PCで最適な表示を実現`,displayName:"StageModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"slot"'},{value:'"card"'},{value:'"typing"'}]}},participants:{defaultValue:null,description:"",name:"participants",required:!0,type:{name:"ParticipantResult[]"}}}}}catch{}const pe={title:"Features/draft/modals/StageModal",component:u,parameters:{screenshot:{skip:!0},layout:"centered"},tags:["autodocs","skip-test"]},d=[{id:"1",name:"田中太郎",avatar:1,choice:"大谷翔平",willLose:!1},{id:"2",name:"佐藤花子",avatar:2,choice:"大谷翔平",willLose:!0},{id:"3",name:"鈴木一郎",avatar:3,choice:"山田太郎",willLose:!1},{id:"4",name:"高橋次郎",avatar:4,choice:"佐々木朗希",willLose:!1},{id:"5",name:"山田美咲",avatar:5,choice:"村上宗隆",willLose:!1},{id:"6",name:"中村翔太",avatar:6,choice:"ダルビッシュ有",willLose:!1}],o={args:{isOpen:!0,variant:"card",participants:d,onClose:()=>console.log("Modal closed")},parameters:{test:{timeout:3e4},chromatic:{delay:8e3}}},r={args:{isOpen:!0,variant:"typing",participants:d,onClose:()=>console.log("Modal closed")},parameters:{test:{timeout:3e4},chromatic:{delay:6e3}}},s={args:{isOpen:!0,variant:"slot",participants:d,onClose:()=>console.log("Modal closed")},parameters:{test:{timeout:3e4},chromatic:{delay:1e4}}};var v,f,h,M,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    variant: 'card',
    participants: mockParticipants,
    onClose: () => console.log('Modal closed')
  },
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
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"カードめくり演出パターン",...(S=(M=o.parameters)==null?void 0:M.docs)==null?void 0:S.description}}};var _,C,F,R,x;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    variant: 'typing',
    participants: mockParticipants,
    onClose: () => console.log('Modal closed')
  },
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
}`,...(F=(C=r.parameters)==null?void 0:C.docs)==null?void 0:F.source},description:{story:"タイピング演出パターン",...(x=(R=r.parameters)==null?void 0:R.docs)==null?void 0:x.description}}};var E,O,B,k,P;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    variant: 'slot',
    participants: mockParticipants,
    onClose: () => console.log('Modal closed')
  },
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
}`,...(B=(O=s.parameters)==null?void 0:O.docs)==null?void 0:B.source},description:{story:"スロットマシン演出パターン",...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};const ue=["Card","Typing","SlotMachine"];export{o as Card,s as SlotMachine,r as Typing,ue as __namedExportsOrder,pe as default};
