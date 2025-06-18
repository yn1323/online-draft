import{j as i}from"./stack-BPGBxmP7.js";import{w as d,u,s as o,e}from"./index-C0w2AICy.js";import{C,u as R}from"./index-CbtfOD0Y.js";import{V as H}from"./v-stack-Dfms-mlT.js";import{B as S}from"./button-DJPprnzD.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-GQ-29dSp.js";import"./factory--2BDjF06.js";import"./index-Dcv8hpMz.js";import"./index-RgLjKqdB.js";import"./responsive-modal-DDgkGri_.js";import"./index-BbIJ_A6v.js";import"./index-mWDuOQRc.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./create-slot-recipe-context-BnxH4US7.js";import"./index-DkeST5JT.js";import"./index-BRNWFSEf.js";import"./zod-_4ZtKld0.js";import"./text-CvVCgmJx.js";import"./types-DwQkBYn-.js";import"./attr-C3Jtgmrz.js";import"./spinner-BfFBc7wa.js";const ot={title:"Features/Top/CreateRoomModal",component:C,parameters:{layout:"centered"}},w=()=>{const{openModal:n,modalProps:m}=R(),a=async t=>{console.log("ルーム作成:",t),alert(`ルーム "${t}" を作成しました！`)};return i.jsxs(H,{gap:4,children:[i.jsx(S,{onClick:n,colorPalette:"blue",size:"lg",children:"ルーム作成モーダルを開く"}),i.jsx(C,{...m,onCreateRoom:a})]})},l={render:()=>i.jsx(w,{}),play:async({canvasElement:n})=>{const a=await d(n).findByText("ルーム作成モーダルを開く");await u.click(a),await new Promise(p=>setTimeout(p,500));const t=await o.findByText("キャンセル");await e(t).toBeInTheDocument();const s=await o.findByText("新しいルームを作成");await e(s).toBeInTheDocument()}},c={render:()=>i.jsx(w,{}),play:async({canvasElement:n})=>{const a=await d(n).findByText("ルーム作成モーダルを開く");await u.click(a),await new Promise(g=>setTimeout(g,500));const t=await o.findByText("新しいルームを作成");await e(t).toBeInTheDocument();const s=await o.findByPlaceholderText("例: 2024年プロ野球ドラフト");await e(s).toBeInTheDocument();const p=await o.findByText("キャンセル"),B=await o.findByText("ルームを作成");await e(p).toBeInTheDocument(),await e(B).toBeInTheDocument(),await e(B).toBeDisabled()}},r={render:()=>i.jsx(w,{}),play:async({canvasElement:n})=>{const a=await d(n).findByText("ルーム作成モーダルを開く");await u.click(a),await new Promise(s=>setTimeout(s,800));const t=await o.findByText("新しいルームを作成");await e(t).toBeInTheDocument()}};var T,x,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,v,h,D,I;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ModalWithHookDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // モーダルを開く
    const openButton = await canvas.findByText('ルーム作成モーダルを開く');
    await userEvent.click(openButton);
    await new Promise(resolve => setTimeout(resolve, 500));

    // 基本要素の存在確認
    const modalTitle = await screen.findByText('新しいルームを作成');
    await expect(modalTitle).toBeInTheDocument();
    const input = await screen.findByPlaceholderText('例: 2024年プロ野球ドラフト');
    await expect(input).toBeInTheDocument();
    const cancelButton = await screen.findByText('キャンセル');
    const createButton = await screen.findByText('ルームを作成');
    await expect(cancelButton).toBeInTheDocument();
    await expect(createButton).toBeInTheDocument();

    // 初期状態で作成ボタンが無効化されていることを確認
    await expect(createButton).toBeDisabled();
  }
}`,...(h=(v=c.parameters)==null?void 0:v.docs)==null?void 0:h.source},description:{story:`フォーム表示テスト
モーダル内の基本要素が正しく表示されることを確認`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};var k,E,P,M,j;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <ModalWithHookDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // モーダルを開く
    const openButton = await canvas.findByText('ルーム作成モーダルを開く');
    await userEvent.click(openButton);
    await new Promise(resolve => setTimeout(resolve, 800));

    // モーダルのタイトルが表示されることを確認
    const modalTitle = await screen.findByText('新しいルームを作成');
    await expect(modalTitle).toBeInTheDocument();
  }
}`,...(P=(E=r.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:`基本表示テスト
モーダルが開くことを確認するシンプルなテスト`,...(j=(M=r.parameters)==null?void 0:M.docs)==null?void 0:j.description}}};const it=["Default","フォーム表示テスト","基本表示テスト"];export{l as Default,it as __namedExportsOrder,ot as default,c as フォーム表示テスト,r as 基本表示テスト};
