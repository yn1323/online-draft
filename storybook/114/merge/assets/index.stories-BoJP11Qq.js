import{f as N}from"./index-B7YJKKKT.js";import{j as i}from"./create-recipe-context-LbQq3bM7.js";import{T as O}from"./index-BtdCwzVt.js";import{T as j}from"./index-BztEsmkx.js";import{R as L}from"./responsive-modal-u4uUSmq6.js";import{r as f}from"./index-BXymfbzT.js";import{V as M}from"./v-stack-DfIdlA7P.js";import"./jsx-runtime-Bw5QeaCk.js";import"./color-mode-DpbueTiJ.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./button-Cvi4ewak.js";import"./box-p2MKwv57.js";import"./stack-B-mkjmc_.js";import"./text-BOFVnBsW.js";import"./input-C3XuNbVL.js";import"./factory-OeC611uy.js";import"./index-B1VjsNl3.js";import"./index-C85FKF7s.js";import"./use-field-context-BeRDi0mX.js";import"./portal-DXIUxZbP.js";import"./create-slot-recipe-context-9ZU4Gcb9.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./index-CEI8PRn9.js";import"./index-BRNWFSEf.js";import"./use-breakpoint-CtC0MXDZ.js";const c=({isOpen:a,onClose:o,onCreateDraft:T,isLoading:s=!1})=>{const[r,p]=f.useState(""),[d,n]=f.useState(""),u=async()=>{if(!r.trim()){n("ドラフト名を入力してください");return}if(r.length>48){n("ドラフト名は48文字以内で入力してください");return}n("");try{await T(r.trim()),p(""),o()}catch(t){console.error("CreateDraftModal: エラーが発生しました",t)}},S=()=>{p(""),n(""),o()},b=t=>{t.key==="Enter"&&!s&&u()};return i.jsx(L,{isOpen:a,onClose:S,title:"ドラフトを作成",actions:{cancel:{text:"キャンセル"},submit:{text:"作成する",colorPalette:"green",disabled:s||!r.trim(),loading:s,onClick:u}},children:i.jsxs(M,{gap:4,align:"stretch",width:"100%",children:[i.jsx(j,{variant:"helper",children:"ドラフト会議の名前を入力してください"}),i.jsx(O,{placeholder:"例: 〇〇ドラフト会議",value:r,onChange:t=>p(t.target.value),onKeyDown:b,maxLength:48,showCharacterCount:!0,disabled:s,autoFocus:!0,errorText:d,invalid:!!d})]})})};try{c.displayName="CreateDraftModal",c.__docgenInfo={description:"",displayName:"CreateDraftModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onCreateDraft:{defaultValue:null,description:"",name:"onCreateDraft",required:!0,type:{name:"(groupName: string) => Promise<void>"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const ne={title:"Features/Top/Components/CreateDraftModal",component:c,parameters:{layout:"centered"}},e={args:{isOpen:!0,isLoading:!1,onClose:N(),onCreateDraft:async a=>{console.log("Creating draft:",a),await new Promise(o=>setTimeout(o,2e3))}}},m={args:{...e.args,isLoading:!0}},l={args:{...e.args,isOpen:!1}};var g,C,h;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    isLoading: false,
    onClose: fn(),
    onCreateDraft: async (groupName: string) => {
      console.log('Creating draft:', groupName);
      // Storybookでは2秒待機してからresolve
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}`,...(h=(C=e.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var y,D,x;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLoading: true
  }
}`,...(x=(D=m.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var v,_,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isOpen: false
  }
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const ie=["Default","Loading","Closed"];export{l as Closed,e as Default,m as Loading,ie as __namedExportsOrder,ne as default};
