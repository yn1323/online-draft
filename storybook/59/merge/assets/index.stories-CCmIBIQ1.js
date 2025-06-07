import{j as r}from"./create-recipe-context-DNTG5mYw.js";import{H as l}from"./index-BCS8oiZL.js";import{H as p}from"./index-DTexnqs8.js";import{M as d}from"./index-BpV4TbW_.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./index-DTSGLcC3.js";import"./iconBase-BtwG8oUN.js";import"./v-stack-QJg7n52G.js";import"./stack-DVtSLI4T.js";import"./heading-BGvs0cd3.js";import"./text-DJUdolDr.js";import"./h-stack-BoRIBf53.js";import"./badge-C7O6qwPE.js";import"./index-Bijch6dX.js";import"./box-DMcbo_cE.js";import"./index-gpoCLu1b.js";import"./simple-grid-D7DxtwhU.js";import"./index-ZS65BhKO.js";import"./index-DGLpCWXU.js";import"./router-context.shared-runtime-CczRXcu8.js";import"./add-base-path-_EOwhHC7.js";import"./use-merged-ref-0PvjutYQ.js";import"./button-Dz2diCo_.js";const g=()=>{const t=()=>{console.log("ドラフト作成ボタンがクリックされました（モック）")};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--chakra-colors-bg)"},children:r.jsx("div",{style:{maxWidth:"768px",margin:"0 auto",padding:"2rem"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(l,{}),r.jsx(d,{onCreateDraft:t,isLoading:!1}),r.jsx(p,{})]})})})},R={title:"Features/Top/TopPage",component:g,parameters:{layout:"fullscreen"}},o={},e={render:()=>{const t=()=>{console.log("ドラフト作成ボタンがクリックされました（ローディング中）")};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--chakra-colors-bg)"},children:r.jsx("div",{style:{maxWidth:"768px",margin:"0 auto",padding:"2rem"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(l,{}),r.jsx(d,{onCreateDraft:t,isLoading:!0}),r.jsx(p,{})]})})})},parameters:{}};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,m,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
