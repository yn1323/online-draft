import{U as S}from"./index-CJdpbDf6.js";import"./create-recipe-context-DNTG5mYw.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./color-mode-CR7cno4n.js";import"./iconBase-BtwG8oUN.js";import"./button-Dz2diCo_.js";import"./box-DMcbo_cE.js";import"./stack-DVtSLI4T.js";import"./index-taPaNizk.js";import"./index-CmmhBdGD.js";import"./image-DR_fq2ZN.js";import"./router-context.shared-runtime-CczRXcu8.js";import"./index-DGKHe-6Q.js";import"./image-context-BYBggyir.js";import"./use-merged-ref-0PvjutYQ.js";import"./h-stack-BoRIBf53.js";import"./text-DJUdolDr.js";import"./badge-C7O6qwPE.js";import"./v-stack-QJg7n52G.js";const o=g=>{console.log("User selected:",g)},t=()=>{console.log("Create new user clicked")},d=[{userId:"1",userName:"田中太郎",avatarIndex:"1",avatar:"/img/1.png"},{userId:"2",userName:"山田花子",avatarIndex:"5",avatar:"/img/5.png"}],A={title:"Features/Lobby/UserSelectStep",component:S,parameters:{layout:"centered"}},e={args:{users:d,onUserSelect:o,onCreateNewUser:t}},r={args:{users:[],onUserSelect:o,onCreateNewUser:t}},s={args:{users:d,onUserSelect:o,onCreateNewUser:t,isLoading:!0}};var a,n,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    onUserSelect: mockOnUserSelect,
    onCreateNewUser: mockOnCreateNewUser
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    users: [],
    onUserSelect: mockOnUserSelect,
    onCreateNewUser: mockOnCreateNewUser
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var U,u,l;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    onUserSelect: mockOnUserSelect,
    onCreateNewUser: mockOnCreateNewUser,
    isLoading: true
  }
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const B=["WithExistingUsers","NoExistingUsers","Loading"];export{s as Loading,r as NoExistingUsers,e as WithExistingUsers,B as __namedExportsOrder,A as default};
