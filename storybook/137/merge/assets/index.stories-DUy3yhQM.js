import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{T as t}from"./index-BztEsmkx.js";import{V as s}from"./v-stack-DfIdlA7P.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./color-mode-DpbueTiJ.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./button-Cvi4ewak.js";import"./box-p2MKwv57.js";import"./stack-B-mkjmc_.js";import"./text-BOFVnBsW.js";const S={title:"Atoms/Typography/ThemeText",component:t,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["body","caption","label","helper","error","success"]},responsive:{control:"boolean"},textAlign:{control:{type:"select"},options:["left","center","right","justify"]}}},r={render:()=>e.jsxs(s,{gap:4,align:"stretch",children:[e.jsx(t,{children:"デフォルトのテキストです。"}),e.jsxs(t,{variant:"body",children:[e.jsx("strong",{children:"Body:"})," ","これは本文テキストです。通常のコンテンツに使用します。"]}),e.jsxs(t,{variant:"caption",children:[e.jsx("strong",{children:"Caption:"})," ","これはキャプションテキストです。補足情報に使用します。"]}),e.jsxs(t,{variant:"label",children:[e.jsx("strong",{children:"Label:"})," ","これはラベルテキストです。フォームのラベルなどに使用します。"]}),e.jsxs(t,{variant:"helper",children:[e.jsx("strong",{children:"Helper:"})," ","これはヘルパーテキストです。追加の説明に使用します。"]}),e.jsxs(t,{variant:"error",children:[e.jsx("strong",{children:"Error:"})," ","これはエラーテキストです。エラーメッセージに使用します。"]}),e.jsxs(t,{variant:"success",children:[e.jsx("strong",{children:"Success:"})," ","これは成功テキストです。成功メッセージに使用します。"]})]})},a={render:()=>e.jsxs(s,{gap:6,align:"stretch",children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"レスポンシブ比較"}),e.jsxs(s,{gap:3,align:"stretch",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"label",mb:2,children:"通常テキスト（固定サイズ）:"}),e.jsx(t,{variant:"body",responsive:!1,children:"このテキストは固定サイズです。画面サイズが変わってもフォントサイズは変わりません。"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"label",mb:2,children:"レスポンシブテキスト:"}),e.jsx(t,{variant:"body",responsive:!0,children:"このテキストはレスポンシブです。画面サイズに応じてフォントサイズが変わります。"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"テキスト配置"}),e.jsxs(s,{gap:3,align:"stretch",w:"full",children:[e.jsx(t,{variant:"body",textAlign:"left",children:"左寄せテキスト"}),e.jsx(t,{variant:"body",textAlign:"center",children:"中央寄せテキスト"}),e.jsx(t,{variant:"body",textAlign:"right",children:"右寄せテキスト"}),e.jsx(t,{variant:"body",textAlign:"justify",children:"両端揃えテキスト。このテキストは長めに書いてあり、両端揃えの効果を確認できます。テキストが複数行にわたる場合に、左右の端が揃うように調整されます。"})]})]})]})};var n,i,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <VStack gap={4} align="stretch">
      <ThemeText>デフォルトのテキストです。</ThemeText>
      <ThemeText variant="body">
        <strong>Body:</strong>{' '}
        これは本文テキストです。通常のコンテンツに使用します。
      </ThemeText>
      <ThemeText variant="caption">
        <strong>Caption:</strong>{' '}
        これはキャプションテキストです。補足情報に使用します。
      </ThemeText>
      <ThemeText variant="label">
        <strong>Label:</strong>{' '}
        これはラベルテキストです。フォームのラベルなどに使用します。
      </ThemeText>
      <ThemeText variant="helper">
        <strong>Helper:</strong>{' '}
        これはヘルパーテキストです。追加の説明に使用します。
      </ThemeText>
      <ThemeText variant="error">
        <strong>Error:</strong>{' '}
        これはエラーテキストです。エラーメッセージに使用します。
      </ThemeText>
      <ThemeText variant="success">
        <strong>Success:</strong>{' '}
        これは成功テキストです。成功メッセージに使用します。
      </ThemeText>
    </VStack>
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var l,c,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch">
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>レスポンシブ比較</h3>
        <VStack gap={3} align="stretch">
          <div>
            <ThemeText variant="label" mb={2}>
              通常テキスト（固定サイズ）:
            </ThemeText>
            <ThemeText variant="body" responsive={false}>
              このテキストは固定サイズです。画面サイズが変わってもフォントサイズは変わりません。
            </ThemeText>
          </div>
          <div>
            <ThemeText variant="label" mb={2}>
              レスポンシブテキスト:
            </ThemeText>
            <ThemeText variant="body" responsive={true}>
              このテキストはレスポンシブです。画面サイズに応じてフォントサイズが変わります。
            </ThemeText>
          </div>
        </VStack>
      </div>

      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>テキスト配置</h3>
        <VStack gap={3} align="stretch" w="full">
          <ThemeText variant="body" textAlign="left">
            左寄せテキスト
          </ThemeText>
          <ThemeText variant="body" textAlign="center">
            中央寄せテキスト
          </ThemeText>
          <ThemeText variant="body" textAlign="right">
            右寄せテキスト
          </ThemeText>
          <ThemeText variant="body" textAlign="justify">
            両端揃えテキスト。このテキストは長めに書いてあり、両端揃えの効果を確認できます。テキストが複数行にわたる場合に、左右の端が揃うように調整されます。
          </ThemeText>
        </VStack>
      </div>
    </VStack>
}`,...(h=(c=a.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const V=["AllVariants","AdvancedFeatures"];export{a as AdvancedFeatures,r as AllVariants,V as __namedExportsOrder,S as default};
