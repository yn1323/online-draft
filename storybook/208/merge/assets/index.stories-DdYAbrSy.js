import{j as e}from"./stack-C7hvTRfV.js";import{w,u as B,s as i,e as s}from"./index-C0w2AICy.js";import{C as l,u as x}from"./index-O4elI-BK.js";import{V as f}from"./v-stack-3HiezQxF.js";import{B as T}from"./button-B54MzPQk.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./schemas-CUQ-9AXQ.js";import"./core-Bf_Kmm7K.js";import"./index-NV73bE2y.js";import"./factory-hxkYGFqN.js";import"./index-CzEkc76M.js";import"./index-ytcWRJ8V.js";import"./responsive-modal-COX6Whib.js";import"./index-ByYvEZYI.js";import"./icon-button-CtLJGKtt.js";import"./index-PsSrZQde.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./create-slot-recipe-context-Ct6br2V7.js";import"./render-strategy-F9cfH0Wk.js";import"./index-CJlWB-WU.js";import"./index-BgxHbLYw.js";import"./use-breakpoint-Bx2dcQer.js";import"./text-CD52-QEU.js";import"./attr-C3Jtgmrz.js";import"./spinner-Dzu03cyn.js";const L={title:"features/top/CreateRoomModal",component:l,parameters:{layout:"centered"}},y=()=>{const{openModal:n,modalProps:r}=x(),a=async t=>{console.log("ルーム作成:",t),alert(`ルーム "${t}" を作成しました！`)};return e.jsxs(f,{gap:4,children:[e.jsx(T,{onClick:n,colorPalette:"blue",size:"lg",children:"ルーム作成モーダルを開く"}),e.jsx(l,{...r,onCreateRoom:a})]})},o={render:()=>e.jsx(y,{}),play:async({canvasElement:n})=>{const a=await w(n).findByText("ルーム作成モーダルを開く");await B.click(a),await new Promise(d=>setTimeout(d,500));const t=await i.findByText("キャンセル");await s(t).toBeInTheDocument();const u=await i.findByText("新しいルームを作成");await s(u).toBeInTheDocument()}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
