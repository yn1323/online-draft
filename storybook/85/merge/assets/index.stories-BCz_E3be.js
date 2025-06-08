import{U as S}from"./index-DPAiKUyL.js";import"./create-recipe-context-LbQq3bM7.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./color-mode-DXikqB90.js";import"./index.esm-DDCHYD5y.js";import"./button-BCCHc0p6.js";import"./iconBase-CzOZFJ-o.js";import"./box-p2MKwv57.js";import"./stack-B-mkjmc_.js";import"./index.esm-CHMTgYdU.js";import"./index-ggWioNpP.js";import"./image-DR_fq2ZN.js";import"./router-context.shared-runtime-CczRXcu8.js";import"./index-DGKHe-6Q.js";import"./image-context-BYBggyir.js";import"./use-merged-ref-0PvjutYQ.js";import"./h-stack-BOuMwgNM.js";import"./text-BOFVnBsW.js";import"./badge-B3FQ0tmT.js";import"./v-stack-DfIdlA7P.js";const o=g=>{console.log("User selected:",g)},t=()=>{console.log("Create new user clicked")},d=[{userId:"1",userName:"田中太郎",avatarIndex:"1",avatar:"/img/1.png"},{userId:"2",userName:"山田花子",avatarIndex:"5",avatar:"/img/5.png"}],B={title:"Features/Lobby/UserSelectStep",component:S,parameters:{layout:"centered"}},e={args:{users:d,onUserSelect:o,onCreateNewUser:t}},r={args:{users:[],onUserSelect:o,onCreateNewUser:t}},s={args:{users:d,onUserSelect:o,onCreateNewUser:t,isLoading:!0}};var a,n,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const D=["WithExistingUsers","NoExistingUsers","Loading"];export{s as Loading,r as NoExistingUsers,e as WithExistingUsers,D as __namedExportsOrder,B as default};
