import{j as e}from"./stack-B25eOQea.js";import{w,u as B,s as i,e as s}from"./index-C0w2AICy.js";import{C as l,u as x}from"./index-MyMXTC8k.js";import{V as f}from"./v-stack-DLbVHDKJ.js";import{B as T}from"./button-BzGfOniU.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./zod-Bx0w6FpW.js";import"./index-Bxr0EmBi.js";import"./factory-CQjN0O8Q.js";import"./index-D3iQu9n-.js";import"./index-BPRKcNEv.js";import"./responsive-modal-Cx12ZJOs.js";import"./index-BrT_qiXh.js";import"./icon-button-CZw3PtnZ.js";import"./index-DQKawd5P.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./create-slot-recipe-context-BILcAqFF.js";import"./render-strategy-CvFi1cA2.js";import"./index-D_DKZCCl.js";import"./index-BRNWFSEf.js";import"./use-breakpoint-BiEj9wsk.js";import"./text-ddCD_fM-.js";import"./types-DwQkBYn-.js";import"./attr-C3Jtgmrz.js";import"./spinner-BaqUdWIg.js";const L={title:"features/top/CreateRoomModal",component:l,parameters:{layout:"centered"}},y=()=>{const{openModal:n,modalProps:r}=x(),a=async t=>{console.log("ルーム作成:",t),alert(`ルーム "${t}" を作成しました！`)};return e.jsxs(f,{gap:4,children:[e.jsx(T,{onClick:n,colorPalette:"blue",size:"lg",children:"ルーム作成モーダルを開く"}),e.jsx(l,{...r,onCreateRoom:a})]})},o={render:()=>e.jsx(y,{}),play:async({canvasElement:n})=>{const a=await w(n).findByText("ルーム作成モーダルを開く");await B.click(a),await new Promise(d=>setTimeout(d,500));const t=await i.findByText("キャンセル");await s(t).toBeInTheDocument();const u=await i.findByText("新しいルームを作成");await s(u).toBeInTheDocument()}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ModalWithHookDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // モーダルを開くボタンをクリック
    const openButton = await canvas.findByText('ルーム作成モーダルを開く');
    await userEvent.click(openButton);

    // モーダルが開くまで待機
    await new Promise(resolve => setTimeout(resolve, 500));

    // モーダルがDOM全体に表示されているか確認（ポータルレンダリング対応）
    const cancelButton = await screen.findByText('キャンセル');
    await expect(cancelButton).toBeInTheDocument();
    const modalTitle = await screen.findByText('新しいルームを作成');
    await expect(modalTitle).toBeInTheDocument();
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const Q=["Default"];export{o as Default,Q as __namedExportsOrder,L as default};
