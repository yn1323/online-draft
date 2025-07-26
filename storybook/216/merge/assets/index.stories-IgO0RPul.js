import{S as d}from"./index-R-01rRaN.js";import"./stack-CmT0cqAp.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./responsive-modal-rHqZ_p7A.js";import"./index-ByYvEZYI.js";import"./icon-button-DnKH20IA.js";import"./button-BLmeD6va.js";import"./attr-C3Jtgmrz.js";import"./spinner-CB2EySOb.js";import"./index-CCD6gxM1.js";import"./index-BaE96_fK.js";import"./index-DtYo_dGY.js";import"./factory-ZXALnO_q.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./create-slot-recipe-context-dODvP4Yo.js";import"./render-strategy-UUNrU8sM.js";import"./index-COhnZ0yv.js";import"./index-BgxHbLYw.js";import"./use-breakpoint-BVMBUtz7.js";import"./v-stack-Dux34f0_.js";import"./toaster-G-AxdkiR.js";import"./useModal-IzikcFvB.js";import"./index-C9wz5Aoq.js";import"./index-vIqmjHZR.js";import"./h-stack-DXlVbU4a.js";const A={title:"Features/draft/modals/ShareModal",component:d,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{isOpen:!0,onClose:()=>console.log("Modal closed"),groupId:"example-group-id",groupName:"テストドラフトグループ"},parameters:{mockData:{navigator:{clipboard:{writeText:()=>Promise.resolve()}}}}},r={args:{isOpen:!0,onClose:()=>console.log("Modal closed"),groupId:"example-group-id",groupName:"とても長いグループ名のドラフト会議室です。この名前は非常に長いので表示がどうなるかテストしています。"},parameters:{mockData:{navigator:{clipboard:{writeText:()=>Promise.resolve()}}}}};var e,a,t,p,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
