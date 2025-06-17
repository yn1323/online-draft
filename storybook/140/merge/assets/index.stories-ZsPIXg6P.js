import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{I as n}from"./index-CTqBWVyV.js";import{V as r}from"./v-stack-DfIdlA7P.js";import{B as a}from"./box-p2MKwv57.js";import{T as t}from"./text-BOFVnBsW.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./factory--2BDjF06.js";import"./index-Dcv8hpMz.js";import"./index-RgLjKqdB.js";import"./stack-B-mkjmc_.js";const f={title:"Atoms/Input",component:n,parameters:{layout:"padded"}},l={render:()=>e.jsxs(r,{gap:6,align:"stretch",maxW:"md",children:[e.jsxs(a,{children:[e.jsx(t,{fontSize:"sm",mb:2,color:"gray.600",children:"基本"}),e.jsxs(r,{gap:3,children:[e.jsx(n,{placeholder:"プレースホルダー"}),e.jsx(n,{placeholder:"入力済み",value:"入力済みテキスト"})]})]}),e.jsxs(a,{children:[e.jsx(t,{fontSize:"sm",mb:2,color:"gray.600",children:"サイズ"}),e.jsxs(r,{gap:3,children:[e.jsx(n,{placeholder:"小サイズ",size:"sm"}),e.jsx(n,{placeholder:"中サイズ",size:"md"}),e.jsx(n,{placeholder:"大サイズ",size:"lg"})]})]}),e.jsxs(a,{children:[e.jsx(t,{fontSize:"sm",mb:2,color:"gray.600",children:"バリアント"}),e.jsxs(r,{gap:3,children:[e.jsx(n,{placeholder:"アウトライン",variant:"outline"}),e.jsx(n,{placeholder:"サブトル",variant:"subtle"}),e.jsx(n,{placeholder:"フラッシュ",variant:"flushed"})]})]}),e.jsxs(a,{children:[e.jsx(t,{fontSize:"sm",mb:2,color:"gray.600",children:"タイプ"}),e.jsxs(r,{gap:3,children:[e.jsx(n,{placeholder:"テキスト",type:"text"}),e.jsx(n,{placeholder:"メール",type:"email"}),e.jsx(n,{placeholder:"パスワード",type:"password"}),e.jsx(n,{placeholder:"数値",type:"number"})]})]}),e.jsxs(a,{children:[e.jsx(t,{fontSize:"sm",mb:2,color:"gray.600",children:"状態"}),e.jsxs(r,{gap:3,children:[e.jsx(n,{placeholder:"無効化",disabled:!0}),e.jsx(n,{placeholder:"必須",required:!0})]})]})]})};var o,s,p;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch" maxW="md">
      {/* 基本 */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">
          基本
        </Text>
        <VStack gap={3}>
          <Input placeholder="プレースホルダー" />
          <Input placeholder="入力済み" value="入力済みテキスト" />
        </VStack>
      </Box>

      {/* サイズ */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">
          サイズ
        </Text>
        <VStack gap={3}>
          <Input placeholder="小サイズ" size="sm" />
          <Input placeholder="中サイズ" size="md" />
          <Input placeholder="大サイズ" size="lg" />
        </VStack>
      </Box>

      {/* バリアント */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">
          バリアント
        </Text>
        <VStack gap={3}>
          <Input placeholder="アウトライン" variant="outline" />
          <Input placeholder="サブトル" variant="subtle" />
          <Input placeholder="フラッシュ" variant="flushed" />
        </VStack>
      </Box>

      {/* タイプ */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">
          タイプ
        </Text>
        <VStack gap={3}>
          <Input placeholder="テキスト" type="text" />
          <Input placeholder="メール" type="email" />
          <Input placeholder="パスワード" type="password" />
          <Input placeholder="数値" type="number" />
        </VStack>
      </Box>

      {/* 状態 */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">
          状態
        </Text>
        <VStack gap={3}>
          <Input placeholder="無効化" disabled />
          <Input placeholder="必須" required />
        </VStack>
      </Box>
    </VStack>
}`,...(p=(s=l.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const I=["AllVariants"];export{l as AllVariants,I as __namedExportsOrder,f as default};
