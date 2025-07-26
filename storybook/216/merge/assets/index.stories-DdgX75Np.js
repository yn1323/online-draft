import{j as n}from"./stack-CmT0cqAp.js";import{B as t}from"./index-ldzGPxj6.js";import{V as e}from"./v-stack-Dux34f0_.js";import{B as a}from"./index-C9wz5Aoq.js";import{H as o}from"./h-stack-DXlVbU4a.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./button-BLmeD6va.js";import"./attr-C3Jtgmrz.js";import"./spinner-CB2EySOb.js";const k={title:"Atoms/Button",component:t,parameters:{layout:"padded"}},r={render:()=>n.jsxs(e,{gap:6,align:"stretch",maxW:"md",children:[n.jsx(a,{children:n.jsxs(o,{gap:4,wrap:"wrap",children:[n.jsx(t,{variant:"primary",children:"プライマリ (Blue)"}),n.jsx(t,{variant:"secondary",children:"セカンダリ (Orange)"}),n.jsx(t,{variant:"accent",children:"アクセント (Pink)"}),n.jsx(t,{variant:"outline",children:"アウトライン"}),n.jsx(t,{variant:"ghost",children:"ゴースト"})]})}),n.jsx(a,{children:n.jsxs(o,{gap:4,align:"center",children:[n.jsx(t,{size:"sm",children:"小"}),n.jsx(t,{size:"md",children:"中"}),n.jsx(t,{size:"lg",children:"大"})]})}),n.jsx(a,{children:n.jsxs(o,{gap:4,wrap:"wrap",children:[n.jsx(t,{loading:!0,children:"ローディング"}),n.jsx(t,{disabled:!0,children:"無効化"})]})}),n.jsx(a,{children:n.jsxs(e,{gap:3,children:[n.jsx(t,{width:"full",children:"幅いっぱい"}),n.jsx(t,{width:"auto",children:"自動幅"})]})})]})};var i,s,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const S=["AllVariants"];export{r as AllVariants,S as __namedExportsOrder,k as default};
