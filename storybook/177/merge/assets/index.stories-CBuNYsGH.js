import{S as d}from"./index-4p6OWmYI.js";import"./stack-B25eOQea.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./responsive-modal-B3DY7mrh.js";import"./index-B9kDuT7e.js";import"./icon-button-CZw3PtnZ.js";import"./button-BzGfOniU.js";import"./attr-C3Jtgmrz.js";import"./spinner-BaqUdWIg.js";import"./index-D3iQu9n-.js";import"./index-BPRKcNEv.js";import"./index-DQKawd5P.js";import"./factory-CQjN0O8Q.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./create-slot-recipe-context-BILcAqFF.js";import"./render-strategy-CvFi1cA2.js";import"./index-D_DKZCCl.js";import"./index-BRNWFSEf.js";import"./use-breakpoint-BiEj9wsk.js";import"./v-stack-DLbVHDKJ.js";import"./toaster-Du-873cZ.js";import"./useModal-IzikcFvB.js";import"./box-BDoFiJcT.js";import"./text-ddCD_fM-.js";import"./h-stack-Bm4oIVhc.js";const A={title:"Features/draft/modals/ShareModal",component:d,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{isOpen:!0,onClose:()=>console.log("Modal closed"),groupId:"example-group-id",groupName:"テストドラフトグループ"},parameters:{mockData:{navigator:{clipboard:{writeText:()=>Promise.resolve()}}}}},r={args:{isOpen:!0,onClose:()=>console.log("Modal closed"),groupId:"example-group-id",groupName:"とても長いグループ名のドラフト会議室です。この名前は非常に長いので表示がどうなるかテストしています。"},parameters:{mockData:{navigator:{clipboard:{writeText:()=>Promise.resolve()}}}}};var e,a,t,p,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
