const i=()=>null,l={title:"Layout/ThemeToggle",component:i,parameters:{layout:"fullscreen"},tags:["skip-test"]},e={},a={};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var r,o,c;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  // ライトモード強制時はplayテストを無効化
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   // 少し待ってから設定アイコンをクリック
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   const settingsButton = await canvas.findByLabelText('テーマ設定を開く');
  //   await userEvent.click(settingsButton);
  // },
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const m=["Basic","Expanded"];export{e as Basic,a as Expanded,m as __namedExportsOrder,l as default};
