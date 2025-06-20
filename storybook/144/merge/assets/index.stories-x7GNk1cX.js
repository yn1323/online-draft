import{j as n}from"./stack-BPGBxmP7.js";import{C as r}from"./index-B27ZHokN.js";import{V as a}from"./v-stack-Dfms-mlT.js";import{B as o}from"./box-BF69sWHg.js";import{T as e}from"./text-CvVCgmJx.js";import{H as s}from"./h-stack-CXTYcpFY.js";import"./index-BXymfbzT.js";import"./jsx-runtime-Bw5QeaCk.js";import"./card-DlhQdIZJ.js";import"./create-slot-recipe-context-BnxH4US7.js";const b={title:"Atoms/Card",component:r,parameters:{layout:"padded"}},t={render:()=>n.jsxs(a,{gap:6,align:"stretch",maxW:"2xl",children:[n.jsxs(o,{children:[n.jsx(e,{fontSize:"sm",mb:4,color:"gray.600",children:"バリアント"}),n.jsxs(s,{gap:4,align:"start",wrap:"wrap",children:[n.jsxs(r,{variant:"elevated",children:[n.jsx(e,{fontWeight:"bold",mb:2,children:"Elevated Card"}),n.jsx(e,{fontSize:"sm",color:"gray.600",children:"シャドウ付きのカード"})]}),n.jsxs(r,{variant:"outline",children:[n.jsx(e,{fontWeight:"bold",mb:2,children:"Outline Card"}),n.jsx(e,{fontSize:"sm",color:"gray.600",children:"ボーダー付きのカード"})]}),n.jsxs(r,{variant:"subtle",children:[n.jsx(e,{fontWeight:"bold",mb:2,children:"Subtle Card"}),n.jsx(e,{fontSize:"sm",color:"gray.600",children:"控えめな背景のカード"})]}),n.jsxs(r,{variant:"filled",children:[n.jsx(e,{fontWeight:"bold",mb:2,children:"Filled Card"}),n.jsx(e,{fontSize:"sm",color:"gray.600",children:"背景色付きのカード"})]})]})]}),n.jsxs(o,{children:[n.jsx(e,{fontSize:"sm",mb:4,color:"gray.600",children:"サイズ"}),n.jsxs(a,{gap:4,align:"stretch",children:[n.jsxs(r,{size:"sm",children:[n.jsx(e,{fontWeight:"bold",children:"Small Card"}),n.jsx(e,{fontSize:"sm",color:"gray.600",children:"小さいパディング"})]}),n.jsxs(r,{size:"md",children:[n.jsx(e,{fontWeight:"bold",children:"Medium Card"}),n.jsx(e,{fontSize:"sm",color:"gray.600",children:"標準パディング"})]}),n.jsxs(r,{size:"lg",children:[n.jsx(e,{fontWeight:"bold",children:"Large Card"}),n.jsx(e,{fontSize:"sm",color:"gray.600",children:"大きいパディング"})]})]})]}),n.jsxs(o,{children:[n.jsx(e,{fontSize:"sm",mb:4,color:"gray.600",children:"カスタムパディング"}),n.jsxs(r,{padding:8,children:[n.jsx(e,{fontWeight:"bold",children:"Custom Padding Card"}),n.jsx(e,{fontSize:"sm",color:"gray.600",children:"カスタムパディング設定"})]})]})]})};var i,d,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch" maxW="2xl">
      {/* バリアント */}
      <Box>
        <Text fontSize="sm" mb={4} color="gray.600">
          バリアント
        </Text>
        <HStack gap={4} align="start" wrap="wrap">
          <Card variant="elevated">
            <Text fontWeight="bold" mb={2}>
              Elevated Card
            </Text>
            <Text fontSize="sm" color="gray.600">
              シャドウ付きのカード
            </Text>
          </Card>

          <Card variant="outline">
            <Text fontWeight="bold" mb={2}>
              Outline Card
            </Text>
            <Text fontSize="sm" color="gray.600">
              ボーダー付きのカード
            </Text>
          </Card>

          <Card variant="subtle">
            <Text fontWeight="bold" mb={2}>
              Subtle Card
            </Text>
            <Text fontSize="sm" color="gray.600">
              控えめな背景のカード
            </Text>
          </Card>

          <Card variant="filled">
            <Text fontWeight="bold" mb={2}>
              Filled Card
            </Text>
            <Text fontSize="sm" color="gray.600">
              背景色付きのカード
            </Text>
          </Card>
        </HStack>
      </Box>

      {/* サイズ */}
      <Box>
        <Text fontSize="sm" mb={4} color="gray.600">
          サイズ
        </Text>
        <VStack gap={4} align="stretch">
          <Card size="sm">
            <Text fontWeight="bold">Small Card</Text>
            <Text fontSize="sm" color="gray.600">
              小さいパディング
            </Text>
          </Card>

          <Card size="md">
            <Text fontWeight="bold">Medium Card</Text>
            <Text fontSize="sm" color="gray.600">
              標準パディング
            </Text>
          </Card>

          <Card size="lg">
            <Text fontWeight="bold">Large Card</Text>
            <Text fontSize="sm" color="gray.600">
              大きいパディング
            </Text>
          </Card>
        </VStack>
      </Box>

      {/* カスタムパディング */}
      <Box>
        <Text fontSize="sm" mb={4} color="gray.600">
          カスタムパディング
        </Text>
        <Card padding={8}>
          <Text fontWeight="bold">Custom Padding Card</Text>
          <Text fontSize="sm" color="gray.600">
            カスタムパディング設定
          </Text>
        </Card>
      </Box>
    </VStack>
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const p=["AllVariants"];export{t as AllVariants,p as __namedExportsOrder,b as default};
