import{j as r}from"./create-recipe-context-oy0ofMwS.js";import{H as p}from"./index-BCADBmWF.js";import{H as l}from"./index-C3TWOSey.js";import{M as d}from"./index-BfEbuitJ.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./index-DTSGLcC3.js";import"./iconBase-BtwG8oUN.js";import"./v-stack-DNelLgfG.js";import"./stack-BRg6br_m.js";import"./heading-DBVE1Ygw.js";import"./text-DkCoEBoG.js";import"./h-stack-e-BLBiSK.js";import"./badge-DcEGXMMU.js";import"./index-DI1kexgK.js";import"./box-D1Z_KUxa.js";import"./index-Dh4sWftF.js";import"./simple-grid-qwmDqksS.js";import"./grid-CQT4z8bD.js";import"./index-ZS65BhKO.js";import"./index-CF7rHh45.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./add-base-path-DRvWOwpu.js";import"./segment-DQKAVVpM.js";import"./router-context.shared-runtime-CTsxCgvG.js";import"./use-merged-ref-0PvjutYQ.js";import"./button-DFylk1V_.js";const g=()=>{const t=()=>{console.log("ドラフト作成ボタンがクリックされました（モック）")};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--chakra-colors-bg)"},children:r.jsx("div",{style:{maxWidth:"768px",margin:"0 auto",padding:"2rem"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(p,{}),r.jsx(d,{onCreateDraft:t,isLoading:!1}),r.jsx(l,{})]})})})},z={title:"Features/Top/TopPage",component:g,parameters:{layout:"fullscreen"}},o={},e={render:()=>{const t=()=>{console.log("ドラフト作成ボタンがクリックされました（ローディング中）")};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--chakra-colors-bg)"},children:r.jsx("div",{style:{maxWidth:"768px",margin:"0 auto",padding:"2rem"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(p,{}),r.jsx(d,{onCreateDraft:t,isLoading:!0}),r.jsx(l,{})]})})})},parameters:{}};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,m,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const B=["Default","Loading"];export{o as Default,e as Loading,B as __namedExportsOrder,z as default};
