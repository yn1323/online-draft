import{j as r}from"./create-recipe-context-LbQq3bM7.js";import{H as l}from"./index-CUgxXLd1.js";import{H as p}from"./index-B-eVp3KS.js";import{M as d}from"./index-CeICknMo.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./index.esm-CHvZKYa6.js";import"./iconBase-CzOZFJ-o.js";import"./v-stack-DfIdlA7P.js";import"./stack-B-mkjmc_.js";import"./heading-B7_y7u_0.js";import"./text-BOFVnBsW.js";import"./h-stack-BOuMwgNM.js";import"./badge-B3FQ0tmT.js";import"./index-C7_5YDRa.js";import"./box-p2MKwv57.js";import"./index-CG3zu6TJ.js";import"./simple-grid-CoY6kqvx.js";import"./index.esm-B5kODk4H.js";import"./index-n-S5FQ15.js";import"./router-context.shared-runtime-CczRXcu8.js";import"./add-base-path-_EOwhHC7.js";import"./use-merged-ref-0PvjutYQ.js";import"./button-BCCHc0p6.js";const g=()=>{const t=()=>{console.log("ドラフト作成ボタンがクリックされました（モック）")};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--chakra-colors-bg)"},children:r.jsx("div",{style:{maxWidth:"768px",margin:"0 auto",padding:"2rem"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(l,{}),r.jsx(d,{onCreateDraft:t,isLoading:!1}),r.jsx(p,{})]})})})},R={title:"Features/Top/TopPage",component:g,parameters:{layout:"fullscreen"}},o={},e={render:()=>{const t=()=>{console.log("ドラフト作成ボタンがクリックされました（ローディング中）")};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--chakra-colors-bg)"},children:r.jsx("div",{style:{maxWidth:"768px",margin:"0 auto",padding:"2rem"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(l,{}),r.jsx(d,{onCreateDraft:t,isLoading:!0}),r.jsx(p,{})]})})})},parameters:{}};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,m,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const mockHandleCreateDraft = () => {
      console.log('ドラフト作成ボタンがクリックされました（ローディング中）');
    };
    return <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--chakra-colors-bg)'
    }}>
        <div style={{
        maxWidth: '768px',
        margin: '0 auto',
        padding: '2rem'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
            <HeroSection />
            <MainActionsSection onCreateDraft={mockHandleCreateDraft} isLoading={true} />
            <HowToSection />
          </div>
        </div>
      </div>;
  },
  parameters: {}
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const V=["Default","Loading"];export{o as Default,e as Loading,V as __namedExportsOrder,R as default};
