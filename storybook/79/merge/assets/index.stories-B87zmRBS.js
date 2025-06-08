import{E as L}from"./index-D56n-WB5.js";import"./create-recipe-context-oy0ofMwS.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./color-mode-CLo8aO5R.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bsoqtzk-.js";import"./button-DFylk1V_.js";import"./box-D1Z_KUxa.js";import"./stack-BRg6br_m.js";import"./image-BNXA3K55.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./index-DGKHe-6Q.js";import"./image-context-5CzGecbX.js";import"./router-context.shared-runtime-CTsxCgvG.js";import"./use-merged-ref-0PvjutYQ.js";import"./index-taPaNizk.js";import"./h-stack-e-BLBiSK.js";import"./text-DkCoEBoG.js";import"./badge-DcEGXMMU.js";import"./v-stack-DNelLgfG.js";const t=x=>{console.log("User selected:",x)},a=[{userId:"1",userName:"田中太郎",avatarIndex:"1",avatar:"/img/1.png"},{userId:"2",userName:"山田花子",avatarIndex:"5",avatar:"/img/5.png"},{userId:"3",userName:"佐藤次郎",avatarIndex:"10",avatar:"/img/10.png"}],K={title:"Features/Lobby/Components/ExistingUserList",component:L,parameters:{layout:"centered"}},e={args:{users:a,onUserSelect:t}},r={args:{users:a,onUserSelect:t,isLoading:!0}},s={args:{users:[a[0]],onUserSelect:t}},o={args:{users:[],onUserSelect:t}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    onUserSelect: mockOnUserSelect
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,p,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    onUserSelect: mockOnUserSelect,
    isLoading: true
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,g,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    users: [mockUsers[0]],
    onUserSelect: mockOnUserSelect
  }
}`,...(l=(g=s.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var U,S,k;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    users: [],
    onUserSelect: mockOnUserSelect
  }
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const M=["Default","Loading","SingleUser","Empty"];export{e as Default,o as Empty,r as Loading,s as SingleUser,M as __namedExportsOrder,K as default};
