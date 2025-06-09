import{j as r}from"./create-recipe-context-LbQq3bM7.js";import{H as p}from"./index-DLQMuMMa.js";import{H as l}from"./index-C0HfLP7U.js";import{M as d}from"./index-CPg9Ja4E.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./index-DTSGLcC3.js";import"./iconBase-BtwG8oUN.js";import"./v-stack-DfIdlA7P.js";import"./stack-B-mkjmc_.js";import"./heading-B7_y7u_0.js";import"./text-BOFVnBsW.js";import"./h-stack-BOuMwgNM.js";import"./badge-B3FQ0tmT.js";import"./index-C7_5YDRa.js";import"./box-p2MKwv57.js";import"./index-DGzCQ4vp.js";import"./layouts-BGugoDGd.js";import"./simple-grid-B5XIW-CE.js";import"./grid-DCXQ59mM.js";import"./index-ZS65BhKO.js";import"./index-CyKEOGB0.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./add-base-path-DRvWOwpu.js";import"./segment-DQKAVVpM.js";import"./router-context.shared-runtime-CTsxCgvG.js";import"./use-merged-ref-0PvjutYQ.js";import"./button-Cvi4ewak.js";const g=()=>{const t=()=>{console.log("ドラフト作成ボタンがクリックされました（モック）")};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--chakra-colors-bg)"},children:r.jsx("div",{style:{maxWidth:"768px",margin:"0 auto",padding:"2rem"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(p,{}),r.jsx(d,{onCreateDraft:t,isLoading:!1}),r.jsx(l,{})]})})})},B={title:"Features/Top/TopPage",component:g,parameters:{layout:"fullscreen"}},o={},e={render:()=>{const t=()=>{console.log("ドラフト作成ボタンがクリックされました（ローディング中）")};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--chakra-colors-bg)"},children:r.jsx("div",{style:{maxWidth:"768px",margin:"0 auto",padding:"2rem"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(p,{}),r.jsx(d,{onCreateDraft:t,isLoading:!0}),r.jsx(l,{})]})})})},parameters:{}};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,m,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const G=["Default","Loading"];export{o as Default,e as Loading,G as __namedExportsOrder,B as default};
