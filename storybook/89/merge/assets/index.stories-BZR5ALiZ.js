import{f as O}from"./index-B7YJKKKT.js";import{j as o}from"./create-recipe-context-oy0ofMwS.js";import{R as L}from"./responsive-modal-DToSESon.js";import{r as f}from"./index-BXymfbzT.js";import{V as M}from"./v-stack-DNelLgfG.js";import{T as g}from"./text-DkCoEBoG.js";import{I as V}from"./input-Dg388lLb.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-tQjszkaJ.js";import"./button-Duda3c3S.js";import"./index-By25cWhp.js";import"./index-JKOH53Am.js";import"./index-DAFC_qOt.js";import"./factory-4NXM9rHI.js";import"./index-DGKHe-6Q.js";import"./index-CrjboX4Z.js";import"./create-slot-recipe-context-C5Qijpj2.js";import"./index-B5_nCLil.js";import"./index-BRNWFSEf.js";import"./use-breakpoint-BCFmA5bm.js";import"./stack-BRg6br_m.js";const c=({isOpen:a,onClose:s,onCreateDraft:b,isLoading:n=!1})=>{const[r,p]=f.useState(""),[d,i]=f.useState(""),u=async()=>{if(!r.trim()){i("ドラフト名を入力してください");return}if(r.length>48){i("ドラフト名は48文字以内で入力してください");return}i("");try{await b(r.trim()),p(""),s()}catch(t){console.error("CreateDraftModal: エラーが発生しました",t)}},j=()=>{p(""),i(""),s()},N=t=>{t.key==="Enter"&&!n&&u()};return o.jsx(L,{isOpen:a,onClose:j,title:"ドラフトを作成",actions:{cancel:{text:"キャンセル"},submit:{text:"作成する",colorPalette:"green",disabled:n||!r.trim(),loading:n,onClick:u}},children:o.jsxs(M,{gap:4,align:"stretch",width:"100%",children:[o.jsx(g,{fontSize:"sm",color:"fg.muted",children:"ドラフト会議の名前を入力してください"}),o.jsx(V,{placeholder:"例: 〇〇ドラフト会議",value:r,onChange:t=>p(t.target.value),onKeyDown:N,maxLength:48,disabled:n,autoFocus:!0}),d&&o.jsx(g,{fontSize:"sm",color:"red.500",children:d})]})})};try{c.displayName="CreateDraftModal",c.__docgenInfo={description:"",displayName:"CreateDraftModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onCreateDraft:{defaultValue:null,description:"",name:"onCreateDraft",required:!0,type:{name:"(groupName: string) => Promise<void>"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const re={title:"Features/Top/Components/CreateDraftModal",component:c,parameters:{layout:"centered"}},e={args:{isOpen:!0,isLoading:!1,onClose:O(),onCreateDraft:async a=>{console.log("Creating draft:",a),await new Promise(s=>setTimeout(s,2e3))}}},l={args:{...e.args,isLoading:!0}},m={args:{...e.args,isOpen:!1}};var C,y,h;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var D,x,S;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLoading: true
  }
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var _,v,w;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isOpen: false
  }
}`,...(w=(v=m.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const te=["Default","Loading","Closed"];export{m as Closed,e as Default,l as Loading,te as __namedExportsOrder,re as default};
