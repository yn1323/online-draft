import{j as t}from"./create-recipe-context-LbQq3bM7.js";import{B as n}from"./index-CZ0VaSOh.js";import{V as e}from"./v-stack-DfIdlA7P.js";import{B as a}from"./box-p2MKwv57.js";import{H as o}from"./h-stack-BOuMwgNM.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./button-Cus-mLIX.js";import"./attr-C3Jtgmrz.js";import"./spinner-B1ygD-4y.js";import"./stack-B-mkjmc_.js";const S={title:"Atoms/Button",component:n,parameters:{layout:"padded"}},r={render:()=>t.jsxs(e,{gap:6,align:"stretch",maxW:"md",children:[t.jsx(a,{children:t.jsxs(o,{gap:4,wrap:"wrap",children:[t.jsx(n,{variant:"primary",children:"プライマリ (Blue)"}),t.jsx(n,{variant:"secondary",children:"セカンダリ (Orange)"}),t.jsx(n,{variant:"accent",children:"アクセント (Pink)"}),t.jsx(n,{variant:"outline",children:"アウトライン"}),t.jsx(n,{variant:"ghost",children:"ゴースト"})]})}),t.jsx(a,{children:t.jsxs(o,{gap:4,align:"center",children:[t.jsx(n,{size:"sm",children:"小"}),t.jsx(n,{size:"md",children:"中"}),t.jsx(n,{size:"lg",children:"大"})]})}),t.jsx(a,{children:t.jsxs(o,{gap:4,wrap:"wrap",children:[t.jsx(n,{loading:!0,children:"ローディング"}),t.jsx(n,{disabled:!0,children:"無効化"})]})}),t.jsx(a,{children:t.jsxs(e,{gap:3,children:[t.jsx(n,{width:"full",children:"幅いっぱい"}),t.jsx(n,{width:"auto",children:"自動幅"})]})})]})};var i,s,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch" maxW="md">
      {/* バリアント */}
      <Box>
        <HStack gap={4} wrap="wrap">
          <Button variant="primary">プライマリ (Blue)</Button>
          <Button variant="secondary">セカンダリ (Orange)</Button>
          <Button variant="accent">アクセント (Pink)</Button>
          <Button variant="outline">アウトライン</Button>
          <Button variant="ghost">ゴースト</Button>
        </HStack>
      </Box>

      {/* サイズ */}
      <Box>
        <HStack gap={4} align="center">
          <Button size="sm">小</Button>
          <Button size="md">中</Button>
          <Button size="lg">大</Button>
        </HStack>
      </Box>

      {/* 状態 */}
      <Box>
        <HStack gap={4} wrap="wrap">
          <Button loading>ローディング</Button>
          <Button disabled>無効化</Button>
        </HStack>
      </Box>

      {/* 幅 */}
      <Box>
        <VStack gap={3}>
          <Button width="full">幅いっぱい</Button>
          <Button width="auto">自動幅</Button>
        </VStack>
      </Box>
    </VStack>
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const w=["AllVariants"];export{r as AllVariants,w as __namedExportsOrder,S as default};
