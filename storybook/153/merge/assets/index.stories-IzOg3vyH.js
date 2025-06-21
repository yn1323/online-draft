import{j as o}from"./stack-BPGBxmP7.js";import{w,u as B,s,e as i}from"./index-C0w2AICy.js";import{C as l,u as x}from"./index-BdvtvEhm.js";import{V as T}from"./v-stack-Dfms-mlT.js";import{B as f}from"./button-DJPprnzD.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-Bh4LOzbh.js";import"./factory-GA1w9YC2.js";import"./index-Bkt13QoG.js";import"./index-BEZemFFB.js";import"./responsive-modal-DZnffKWw.js";import"./index-BbIJ_A6v.js";import"./index-B4gNqP-g.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./create-slot-recipe-context-BnxH4US7.js";import"./index-7Dro8rd9.js";import"./index-BRNWFSEf.js";import"./zod-Dx6QHOOk.js";import"./text-CvVCgmJx.js";import"./types-DwQkBYn-.js";import"./attr-C3Jtgmrz.js";import"./spinner-BfFBc7wa.js";const G={title:"Features/Top/CreateRoomModal",component:l,parameters:{layout:"centered"}},y=()=>{const{openModal:n,modalProps:r}=x(),a=async t=>{console.log("ルーム作成:",t),alert(`ルーム "${t}" を作成しました！`)};return o.jsxs(T,{gap:4,children:[o.jsx(f,{onClick:n,colorPalette:"blue",size:"lg",children:"ルーム作成モーダルを開く"}),o.jsx(l,{...r,onCreateRoom:a})]})},e={render:()=>o.jsx(y,{}),play:async({canvasElement:n})=>{const a=await w(n).findByText("ルーム作成モーダルを開く");await B.click(a),await new Promise(d=>setTimeout(d,500));const t=await s.findByText("キャンセル");await i(t).toBeInTheDocument();const u=await s.findByText("新しいルームを作成");await i(u).toBeInTheDocument()}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const J=["Default"];export{e as Default,J as __namedExportsOrder,G as default};
