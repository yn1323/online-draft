import{S as d}from"./index-BGaq2gXr.js";import"./stack-C7hvTRfV.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./responsive-modal-COX6Whib.js";import"./index-ByYvEZYI.js";import"./icon-button-CtLJGKtt.js";import"./button-B54MzPQk.js";import"./attr-C3Jtgmrz.js";import"./spinner-Dzu03cyn.js";import"./index-CzEkc76M.js";import"./index-ytcWRJ8V.js";import"./index-PsSrZQde.js";import"./factory-hxkYGFqN.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./create-slot-recipe-context-Ct6br2V7.js";import"./render-strategy-F9cfH0Wk.js";import"./index-CJlWB-WU.js";import"./index-BgxHbLYw.js";import"./use-breakpoint-Bx2dcQer.js";import"./v-stack-3HiezQxF.js";import"./toaster-fCX_dEN1.js";import"./useModal-IzikcFvB.js";import"./box-DfzLPJuh.js";import"./text-CD52-QEU.js";import"./h-stack-BRlU4uQg.js";const A={title:"Features/draft/modals/ShareModal",component:d,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{isOpen:!0,onClose:()=>console.log("Modal closed"),groupId:"example-group-id",groupName:"テストドラフトグループ"},parameters:{mockData:{navigator:{clipboard:{writeText:()=>Promise.resolve()}}}}},r={args:{isOpen:!0,onClose:()=>console.log("Modal closed"),groupId:"example-group-id",groupName:"とても長いグループ名のドラフト会議室です。この名前は非常に長いので表示がどうなるかテストしています。"},parameters:{mockData:{navigator:{clipboard:{writeText:()=>Promise.resolve()}}}}};var e,a,t,p,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    groupId: 'example-group-id',
    groupName: 'テストドラフトグループ'
  },
  parameters: {
    // ナビゲーションエラー回避のためクリップボードアクセスを無効化
    mockData: {
      navigator: {
        clipboard: {
          writeText: () => Promise.resolve()
        }
      }
    }
  }
}`,...(t=(a=o.parameters)==null?void 0:a.docs)==null?void 0:t.source},description:{story:"基本パターン",...(s=(p=o.parameters)==null?void 0:p.docs)==null?void 0:s.description}}};var n,m,i,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    groupId: 'example-group-id',
    groupName: 'とても長いグループ名のドラフト会議室です。この名前は非常に長いので表示がどうなるかテストしています。'
  },
  parameters: {
    // ナビゲーションエラー回避のためクリップボードアクセスを無効化
    mockData: {
      navigator: {
        clipboard: {
          writeText: () => Promise.resolve()
        }
      }
    }
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source},description:{story:"長いグループ名パターン",...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const B=["Default","LongGroupName"];export{o as Default,r as LongGroupName,B as __namedExportsOrder,A as default};
