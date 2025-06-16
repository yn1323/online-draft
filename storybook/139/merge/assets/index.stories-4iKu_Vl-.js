import{j as s}from"./stack-BPGBxmP7.js";import{w as d,u,s as o,e}from"./index-C0w2AICy.js";import{C,u as R}from"./index-B9lPCFdQ.js";import{V as H}from"./v-stack-Dfms-mlT.js";import{B as S}from"./button-DOuB3_TC.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-C3qgd2Mb.js";import"./factory-DA62BenE.js";import"./index-CXxrkVEp.js";import"./responsive-modal-NtwlyPiQ.js";import"./index-BoOFxg6o.js";import"./index-BF5RIHle.js";import"./index-DGKHe-6Q.js";import"./index-D_wZMSWw.js";import"./create-slot-recipe-context-BnxH4US7.js";import"./index-CxTh1cA0.js";import"./text-CvVCgmJx.js";import"./types-DwQkBYn-.js";import"./attr-C3Jtgmrz.js";const tt={title:"Features/Top/CreateRoomModal",component:C,parameters:{layout:"centered"}},w=()=>{const{openModal:n,modalProps:m}=R(),a=async t=>{console.log("ルーム作成:",t),alert(`ルーム "${t}" を作成しました！`)};return s.jsxs(H,{gap:4,children:[s.jsx(S,{onClick:n,colorPalette:"blue",size:"lg",children:"ルーム作成モーダルを開く"}),s.jsx(C,{...m,onCreateRoom:a})]})},l={render:()=>s.jsx(w,{}),play:async({canvasElement:n})=>{const a=await d(n).findByText("ルーム作成モーダルを開く");await u.click(a),await new Promise(p=>setTimeout(p,500));const t=await o.findByText("キャンセル");await e(t).toBeInTheDocument();const c=await o.findByText("新しいルームを作成");await e(c).toBeInTheDocument()}},i={render:()=>s.jsx(w,{}),play:async({canvasElement:n})=>{const a=await d(n).findByText("ルーム作成モーダルを開く");await u.click(a),await new Promise(g=>setTimeout(g,500));const t=await o.findByText("新しいルームを作成");await e(t).toBeInTheDocument();const c=await o.findByPlaceholderText("例: 2024年プロ野球ドラフト");await e(c).toBeInTheDocument();const p=await o.findByText("キャンセル"),B=await o.findByText("ルームを作成");await e(p).toBeInTheDocument(),await e(B).toBeInTheDocument(),await e(B).toBeDisabled()}},r={render:()=>s.jsx(w,{}),play:async({canvasElement:n})=>{const a=await d(n).findByText("ルーム作成モーダルを開く");await u.click(a),await new Promise(c=>setTimeout(c,800));const t=await o.findByText("新しいルームを作成");await e(t).toBeInTheDocument()}};var T,x,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,v,h,D,I;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source},description:{story:`フォーム表示テスト
モーダル内の基本要素が正しく表示されることを確認`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};var k,E,P,M,j;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
モーダルが開くことを確認するシンプルなテスト`,...(j=(M=r.parameters)==null?void 0:M.docs)==null?void 0:j.description}}};const et=["Default","フォーム表示テスト","基本表示テスト"];export{l as Default,et as __namedExportsOrder,tt as default,i as フォーム表示テスト,r as 基本表示テスト};
