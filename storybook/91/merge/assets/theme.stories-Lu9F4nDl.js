import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{T as h,a as m,b,C as t}from"./theme-M2mYg1Eg.js";import{V as n}from"./v-stack-DfIdlA7P.js";import{T as r}from"./text-BOFVnBsW.js";import{B as o}from"./box-p2MKwv57.js";import{G as l}from"./grid-DCXQ59mM.js";import{H as p}from"./h-stack-BOuMwgNM.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./stack-B-mkjmc_.js";const I={title:"Constants/Theme",parameters:{layout:"padded",docs:{description:{component:`
# 🎨 統一テーマシステム

アプリケーション全体で使用する統一された配色・グラデーション・シャドウ定数の一覧です。

## 設計思想
- **緑ベースの落ち着いた配色**: ユーザーが長時間使用しても疲れにくい配色
- **一元管理**: 全コンポーネントで共通の定数を使用
- **ダークモード対応**: ライト・ダークモード両対応
- **コンポーネント別プリセット**: よく使用される組み合わせをプリセット化
        `}}}},i={render:()=>e.jsxs(n,{gap:6,align:"stretch",children:[e.jsx(r,{fontSize:"2xl",fontWeight:"bold",children:"🎯 メインカラーパレット"}),e.jsxs(o,{children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,children:"基本グリーン系"}),e.jsx(l,{templateColumns:"repeat(auto-fit, minmax(120px, 1fr))",gap:3,children:Object.entries(h.primary).map(([d,a])=>e.jsxs(n,{gap:2,children:[e.jsx(o,{w:"full",h:"60px",bg:a,borderRadius:"md",border:"1px solid",borderColor:"gray.200",_dark:{borderColor:"gray.600"}}),e.jsxs(n,{gap:0,children:[e.jsx(r,{fontSize:"sm",fontWeight:"medium",children:d}),e.jsx(r,{fontSize:"xs",color:"gray.500",children:a})]})]},d))})]}),e.jsxs(o,{children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,children:"ボーダー色"}),e.jsx(l,{templateColumns:"repeat(auto-fit, minmax(120px, 1fr))",gap:3,children:Object.entries(h.border).map(([d,a])=>e.jsxs(n,{gap:2,children:[e.jsx(o,{w:"full",h:"60px",border:"4px solid",borderColor:a,borderRadius:"md",bg:"white",_dark:{bg:"gray.800"}}),e.jsxs(n,{gap:0,children:[e.jsx(r,{fontSize:"sm",fontWeight:"medium",children:d}),e.jsx(r,{fontSize:"xs",color:"gray.500",children:a})]})]},d))})]}),e.jsxs(o,{children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,children:"テキスト色"}),e.jsx(l,{templateColumns:"repeat(auto-fit, minmax(120px, 1fr))",gap:3,children:Object.entries(h.text).map(([d,a])=>e.jsxs(n,{gap:2,children:[e.jsx(o,{w:"full",h:"60px",bg:"white",border:"1px solid",borderColor:"gray.200",borderRadius:"md",display:"flex",alignItems:"center",justifyContent:"center",_dark:{bg:"gray.800",borderColor:"gray.600"},children:e.jsx(r,{color:a,fontWeight:"bold",children:"Sample Text"})}),e.jsxs(n,{gap:0,children:[e.jsx(r,{fontSize:"sm",fontWeight:"medium",children:d}),e.jsx(r,{fontSize:"xs",color:"gray.500",children:a})]})]},d))})]})]})},s={render:()=>e.jsxs(n,{gap:6,align:"stretch",children:[e.jsx(r,{fontSize:"2xl",fontWeight:"bold",children:"🌈 グラデーション一覧"}),e.jsxs(o,{children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,children:"ライトモード"}),e.jsx(l,{templateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:4,children:Object.entries(m.light).map(([d,a])=>e.jsxs(n,{gap:2,children:[e.jsx(o,{w:"full",h:"80px",bgGradient:a,borderRadius:"lg",border:"1px solid",borderColor:"gray.200"}),e.jsxs(n,{gap:0,children:[e.jsx(r,{fontSize:"sm",fontWeight:"medium",children:d}),e.jsx(r,{fontSize:"xs",color:"gray.500",textAlign:"center",children:a})]})]},d))})]}),e.jsxs(o,{children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,children:"ダークモード"}),e.jsx(l,{templateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:4,children:Object.entries(m.dark).map(([d,a])=>e.jsxs(n,{gap:2,children:[e.jsx(o,{w:"full",h:"80px",bgGradient:a,borderRadius:"lg",border:"1px solid",borderColor:"gray.600",bg:"gray.800"}),e.jsxs(n,{gap:0,children:[e.jsx(r,{fontSize:"sm",fontWeight:"medium",children:d}),e.jsx(r,{fontSize:"xs",color:"gray.500",textAlign:"center",children:a})]})]},d))})]})]})},x={render:()=>e.jsxs(n,{gap:6,align:"stretch",children:[e.jsx(r,{fontSize:"2xl",fontWeight:"bold",children:"✨ シャドウ一覧"}),e.jsxs(o,{children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,children:"ライトモード"}),e.jsxs(l,{templateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:4,children:[e.jsxs(n,{gap:2,children:[e.jsx(o,{w:"full",h:"80px",bg:"white",borderRadius:"lg",boxShadow:b.card,display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(r,{fontSize:"sm",fontWeight:"medium",color:"gray.600",children:"card"})}),e.jsx(r,{fontSize:"xs",color:"gray.500",textAlign:"center",children:"カード用シャドウ"})]}),e.jsxs(n,{gap:2,children:[e.jsx(o,{w:"full",h:"80px",bg:"white",borderRadius:"lg",boxShadow:b.button,display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(r,{fontSize:"sm",fontWeight:"medium",color:"gray.600",children:"button"})}),e.jsx(r,{fontSize:"xs",color:"gray.500",textAlign:"center",children:"ボタン用シャドウ"})]}),e.jsxs(n,{gap:2,children:[e.jsx(o,{w:"full",h:"80px",bg:"white",borderRadius:"lg",boxShadow:b.modal,display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(r,{fontSize:"sm",fontWeight:"medium",color:"gray.600",children:"modal"})}),e.jsx(r,{fontSize:"xs",color:"gray.500",textAlign:"center",children:"モーダル用シャドウ"})]})]})]}),e.jsx(o,{p:4,bg:"gray.50",borderRadius:"md",_dark:{bg:"gray.900"},children:e.jsx(r,{fontSize:"sm",color:"gray.600",_dark:{color:"gray.400"},children:"💡 シャドウはライトモード・ダークモード両対応で、緑をベースとした統一感のある陰影を提供します。"})})]})},g={render:()=>e.jsxs(n,{gap:8,align:"stretch",children:[e.jsx(r,{fontSize:"2xl",fontWeight:"bold",children:"🎮 コンポーネント別テーマプレビュー"}),e.jsxs(o,{children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,children:"現在ラウンド表示"}),e.jsxs(p,{gap:4,children:[e.jsxs(o,{children:[e.jsx(r,{fontSize:"sm",mb:2,color:"gray.600",children:"ライトモード"}),e.jsxs(o,{p:4,bgGradient:t.currentRound.light.bgGradient,border:"2px solid",borderColor:t.currentRound.light.borderColor,borderRadius:"lg",boxShadow:t.currentRound.light.boxShadow,w:"200px",children:[e.jsx(r,{color:t.currentRound.light.textColor,fontWeight:"bold",mb:2,children:"現在のラウンド 3"}),e.jsx(r,{fontSize:"sm",color:t.currentRound.light.textColor,children:"⚡ 進行中"})]})]}),e.jsxs(o,{children:[e.jsx(r,{fontSize:"sm",mb:2,color:"gray.600",children:"ダークモード"}),e.jsxs(o,{p:4,bgGradient:t.currentRound.dark.bgGradient,border:"2px solid",borderColor:t.currentRound.dark.borderColor,borderRadius:"lg",boxShadow:t.currentRound.dark.boxShadow,w:"200px",bg:"gray.800",children:[e.jsx(r,{color:t.currentRound.dark.textColor,fontWeight:"bold",mb:2,children:"現在のラウンド 3"}),e.jsx(r,{fontSize:"sm",color:t.currentRound.dark.textColor,children:"⚡ 進行中"})]})]})]})]}),e.jsxs(o,{children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,children:"過去ラウンド表示"}),e.jsxs(p,{gap:4,children:[e.jsxs(o,{children:[e.jsx(r,{fontSize:"sm",mb:2,color:"gray.600",children:"ライトモード"}),e.jsxs(o,{p:3,bg:"white",border:"1px solid",borderColor:t.pastRound.light.borderColor,borderRadius:"lg",w:"200px",_hover:{bg:t.pastRound.light.hoverBg,borderColor:t.pastRound.light.hoverBorder},children:[e.jsx(r,{color:t.pastRound.light.textColor,fontWeight:"bold",mb:1,children:"ラウンド 2"}),e.jsx(r,{fontSize:"sm",color:t.pastRound.light.secondaryText,children:"📊 4人参加"})]})]}),e.jsxs(o,{children:[e.jsx(r,{fontSize:"sm",mb:2,color:"gray.600",children:"ダークモード"}),e.jsxs(o,{p:3,bg:"gray.800",border:"1px solid",borderColor:t.pastRound.dark.borderColor,borderRadius:"lg",w:"200px",_hover:{bg:t.pastRound.dark.hoverBg,borderColor:t.pastRound.dark.hoverBorder},children:[e.jsx(r,{color:t.pastRound.dark.textColor,fontWeight:"bold",mb:1,children:"ラウンド 2"}),e.jsx(r,{fontSize:"sm",color:t.pastRound.dark.secondaryText,children:"📊 4人参加"})]})]})]})]})]})},c={render:()=>e.jsxs(n,{gap:6,align:"stretch",maxW:"800px",children:[e.jsx(r,{fontSize:"2xl",fontWeight:"bold",children:"📋 使用方法ガイド"}),e.jsxs(o,{p:4,bg:"blue.50",borderRadius:"md",_dark:{bg:"blue.900/20"},children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,color:"blue.700",_dark:{color:"blue.300"},children:"基本的な使用方法"}),e.jsx(o,{as:"pre",fontSize:"sm",color:"gray.700",_dark:{color:"gray.300"},overflow:"auto",children:`// コンポーネント内でのインポート
import { COMPONENT_THEMES, THEME_COLORS } from '@/src/constants/theme';

// コンポーネント別テーマの使用
const theme = COMPONENT_THEMES.currentRound;

<Box
  bgGradient={theme.light.bgGradient}
  borderColor={theme.light.borderColor}
  boxShadow={theme.light.boxShadow}
  _dark={{
    bgGradient: theme.dark.bgGradient,
    borderColor: theme.dark.borderColor,
    boxShadow: theme.dark.boxShadow,
  }}
>
  <Text color={theme.light.textColor} _dark={{ color: theme.dark.textColor }}>
    現在のラウンド
  </Text>
</Box>`})]}),e.jsxs(o,{p:4,bg:"green.50",borderRadius:"md",_dark:{bg:"green.900/20"},children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,color:"green.700",_dark:{color:"green.300"},children:"個別定数の使用"}),e.jsx(o,{as:"pre",fontSize:"sm",color:"gray.700",_dark:{color:"gray.300"},overflow:"auto",children:`// 個別の色やグラデーションを使用
import { THEME_COLORS, THEME_GRADIENTS, THEME_SHADOWS } from '@/src/constants/theme';

<Box
  borderColor={THEME_COLORS.border.normal}
  bgGradient={THEME_GRADIENTS.light.primary}
  boxShadow={THEME_SHADOWS.card}
  _dark={{
    borderColor: THEME_COLORS.dark.border,
    bgGradient: THEME_GRADIENTS.dark.primary,
    boxShadow: THEME_SHADOWS.dark.card,
  }}
/>`})]}),e.jsxs(o,{p:4,bg:"purple.50",borderRadius:"md",_dark:{bg:"purple.900/20"},children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",mb:3,color:"purple.700",_dark:{color:"purple.300"},children:"メリット"}),e.jsxs(n,{align:"start",gap:2,children:[e.jsxs(r,{fontSize:"sm",children:["✅ ",e.jsx("strong",{children:"一元管理"}),": 1箇所でカラーパレット変更可能"]}),e.jsxs(r,{fontSize:"sm",children:["🔧 ",e.jsx("strong",{children:"保守性向上"}),": 修正時の影響範囲が明確"]}),e.jsxs(r,{fontSize:"sm",children:["🎨 ",e.jsx("strong",{children:"デザイン統一"}),": より一貫性のある配色"]}),e.jsxs(r,{fontSize:"sm",children:["⚡ ",e.jsx("strong",{children:"開発効率"}),": プリセットで素早い実装"]}),e.jsxs(r,{fontSize:"sm",children:["🌙 ",e.jsx("strong",{children:"ダークモード対応"}),": ライト・ダーク両対応"]})]})]})]})};var S,f,u;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch">
      <Text fontSize="2xl" fontWeight="bold">
        🎯 メインカラーパレット
      </Text>

      {/* 基本グリーン系 */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          基本グリーン系
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={3}>
          {Object.entries(THEME_COLORS.primary).map(([key, value]) => <VStack key={key} gap={2}>
              <Box w="full" h="60px" bg={value} borderRadius="md" border="1px solid" borderColor="gray.200" _dark={{
            borderColor: 'gray.600'
          }} />
              <VStack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {key}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {value}
                </Text>
              </VStack>
            </VStack>)}
        </Grid>
      </Box>

      {/* ボーダー色 */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          ボーダー色
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={3}>
          {Object.entries(THEME_COLORS.border).map(([key, value]) => <VStack key={key} gap={2}>
              <Box w="full" h="60px" border="4px solid" borderColor={value} borderRadius="md" bg="white" _dark={{
            bg: 'gray.800'
          }} />
              <VStack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {key}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {value}
                </Text>
              </VStack>
            </VStack>)}
        </Grid>
      </Box>

      {/* テキスト色 */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          テキスト色
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={3}>
          {Object.entries(THEME_COLORS.text).map(([key, value]) => <VStack key={key} gap={2}>
              <Box w="full" h="60px" bg="white" border="1px solid" borderColor="gray.200" borderRadius="md" display="flex" alignItems="center" justifyContent="center" _dark={{
            bg: 'gray.800',
            borderColor: 'gray.600'
          }}>
                <Text color={value} fontWeight="bold">
                  Sample Text
                </Text>
              </Box>
              <VStack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {key}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {value}
                </Text>
              </VStack>
            </VStack>)}
        </Grid>
      </Box>
    </VStack>
}`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var T,E,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch">
      <Text fontSize="2xl" fontWeight="bold">
        🌈 グラデーション一覧
      </Text>

      {/* ライトモード */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          ライトモード
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          {Object.entries(THEME_GRADIENTS.light).map(([key, value]) => <VStack key={key} gap={2}>
              <Box w="full" h="80px" bgGradient={value} borderRadius="lg" border="1px solid" borderColor="gray.200" />
              <VStack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {key}
                </Text>
                <Text fontSize="xs" color="gray.500" textAlign="center">
                  {value}
                </Text>
              </VStack>
            </VStack>)}
        </Grid>
      </Box>

      {/* ダークモード */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          ダークモード
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          {Object.entries(THEME_GRADIENTS.dark).map(([key, value]) => <VStack key={key} gap={2}>
              <Box w="full" h="80px" bgGradient={value} borderRadius="lg" border="1px solid" borderColor="gray.600" bg="gray.800" />
              <VStack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {key}
                </Text>
                <Text fontSize="xs" color="gray.500" textAlign="center">
                  {value}
                </Text>
              </VStack>
            </VStack>)}
        </Grid>
      </Box>
    </VStack>
}`,...(j=(E=s.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var k,C,y;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch">
      <Text fontSize="2xl" fontWeight="bold">
        ✨ シャドウ一覧
      </Text>

      {/* ライトモード */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          ライトモード
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(180px, 1fr))" gap={4}>
          <VStack gap={2}>
            <Box w="full" h="80px" bg="white" borderRadius="lg" boxShadow={THEME_SHADOWS.card} display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="sm" fontWeight="medium" color="gray.600">
                card
              </Text>
            </Box>
            <Text fontSize="xs" color="gray.500" textAlign="center">
              カード用シャドウ
            </Text>
          </VStack>

          <VStack gap={2}>
            <Box w="full" h="80px" bg="white" borderRadius="lg" boxShadow={THEME_SHADOWS.button} display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="sm" fontWeight="medium" color="gray.600">
                button
              </Text>
            </Box>
            <Text fontSize="xs" color="gray.500" textAlign="center">
              ボタン用シャドウ
            </Text>
          </VStack>

          <VStack gap={2}>
            <Box w="full" h="80px" bg="white" borderRadius="lg" boxShadow={THEME_SHADOWS.modal} display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="sm" fontWeight="medium" color="gray.600">
                modal
              </Text>
            </Box>
            <Text fontSize="xs" color="gray.500" textAlign="center">
              モーダル用シャドウ
            </Text>
          </VStack>
        </Grid>
      </Box>

      <Box p={4} bg="gray.50" borderRadius="md" _dark={{
      bg: 'gray.900'
    }}>
        <Text fontSize="sm" color="gray.600" _dark={{
        color: 'gray.400'
      }}>
          💡
          シャドウはライトモード・ダークモード両対応で、緑をベースとした統一感のある陰影を提供します。
        </Text>
      </Box>
    </VStack>
}`,...(y=(C=x.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var z,R,O;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <VStack gap={8} align="stretch">
      <Text fontSize="2xl" fontWeight="bold">
        🎮 コンポーネント別テーマプレビュー
      </Text>

      {/* 現在ラウンド */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          現在ラウンド表示
        </Text>
        <HStack gap={4}>
          <Box>
            <Text fontSize="sm" mb={2} color="gray.600">
              ライトモード
            </Text>
            <Box p={4} bgGradient={COMPONENT_THEMES.currentRound.light.bgGradient} border="2px solid" borderColor={COMPONENT_THEMES.currentRound.light.borderColor} borderRadius="lg" boxShadow={COMPONENT_THEMES.currentRound.light.boxShadow} w="200px">
              <Text color={COMPONENT_THEMES.currentRound.light.textColor} fontWeight="bold" mb={2}>
                現在のラウンド 3
              </Text>
              <Text fontSize="sm" color={COMPONENT_THEMES.currentRound.light.textColor}>
                ⚡ 進行中
              </Text>
            </Box>
          </Box>

          <Box>
            <Text fontSize="sm" mb={2} color="gray.600">
              ダークモード
            </Text>
            <Box p={4} bgGradient={COMPONENT_THEMES.currentRound.dark.bgGradient} border="2px solid" borderColor={COMPONENT_THEMES.currentRound.dark.borderColor} borderRadius="lg" boxShadow={COMPONENT_THEMES.currentRound.dark.boxShadow} w="200px" bg="gray.800">
              <Text color={COMPONENT_THEMES.currentRound.dark.textColor} fontWeight="bold" mb={2}>
                現在のラウンド 3
              </Text>
              <Text fontSize="sm" color={COMPONENT_THEMES.currentRound.dark.textColor}>
                ⚡ 進行中
              </Text>
            </Box>
          </Box>
        </HStack>
      </Box>

      {/* 過去ラウンド */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          過去ラウンド表示
        </Text>
        <HStack gap={4}>
          <Box>
            <Text fontSize="sm" mb={2} color="gray.600">
              ライトモード
            </Text>
            <Box p={3} bg="white" border="1px solid" borderColor={COMPONENT_THEMES.pastRound.light.borderColor} borderRadius="lg" w="200px" _hover={{
            bg: COMPONENT_THEMES.pastRound.light.hoverBg,
            borderColor: COMPONENT_THEMES.pastRound.light.hoverBorder
          }}>
              <Text color={COMPONENT_THEMES.pastRound.light.textColor} fontWeight="bold" mb={1}>
                ラウンド 2
              </Text>
              <Text fontSize="sm" color={COMPONENT_THEMES.pastRound.light.secondaryText}>
                📊 4人参加
              </Text>
            </Box>
          </Box>

          <Box>
            <Text fontSize="sm" mb={2} color="gray.600">
              ダークモード
            </Text>
            <Box p={3} bg="gray.800" border="1px solid" borderColor={COMPONENT_THEMES.pastRound.dark.borderColor} borderRadius="lg" w="200px" _hover={{
            bg: COMPONENT_THEMES.pastRound.dark.hoverBg,
            borderColor: COMPONENT_THEMES.pastRound.dark.hoverBorder
          }}>
              <Text color={COMPONENT_THEMES.pastRound.dark.textColor} fontWeight="bold" mb={1}>
                ラウンド 2
              </Text>
              <Text fontSize="sm" color={COMPONENT_THEMES.pastRound.dark.secondaryText}>
                📊 4人参加
              </Text>
            </Box>
          </Box>
        </HStack>
      </Box>
    </VStack>
}`,...(O=(R=g.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var _,M,B;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch" maxW="800px">
      <Text fontSize="2xl" fontWeight="bold">
        📋 使用方法ガイド
      </Text>

      <Box p={4} bg="blue.50" borderRadius="md" _dark={{
      bg: 'blue.900/20'
    }}>
        <Text fontSize="lg" fontWeight="bold" mb={3} color="blue.700" _dark={{
        color: 'blue.300'
      }}>
          基本的な使用方法
        </Text>
        <Box as="pre" fontSize="sm" color="gray.700" _dark={{
        color: 'gray.300'
      }} overflow="auto">
          {\`// コンポーネント内でのインポート
import { COMPONENT_THEMES, THEME_COLORS } from '@/src/constants/theme';

// コンポーネント別テーマの使用
const theme = COMPONENT_THEMES.currentRound;

<Box
  bgGradient={theme.light.bgGradient}
  borderColor={theme.light.borderColor}
  boxShadow={theme.light.boxShadow}
  _dark={{
    bgGradient: theme.dark.bgGradient,
    borderColor: theme.dark.borderColor,
    boxShadow: theme.dark.boxShadow,
  }}
>
  <Text color={theme.light.textColor} _dark={{ color: theme.dark.textColor }}>
    現在のラウンド
  </Text>
</Box>\`}
        </Box>
      </Box>

      <Box p={4} bg="green.50" borderRadius="md" _dark={{
      bg: 'green.900/20'
    }}>
        <Text fontSize="lg" fontWeight="bold" mb={3} color="green.700" _dark={{
        color: 'green.300'
      }}>
          個別定数の使用
        </Text>
        <Box as="pre" fontSize="sm" color="gray.700" _dark={{
        color: 'gray.300'
      }} overflow="auto">
          {\`// 個別の色やグラデーションを使用
import { THEME_COLORS, THEME_GRADIENTS, THEME_SHADOWS } from '@/src/constants/theme';

<Box
  borderColor={THEME_COLORS.border.normal}
  bgGradient={THEME_GRADIENTS.light.primary}
  boxShadow={THEME_SHADOWS.card}
  _dark={{
    borderColor: THEME_COLORS.dark.border,
    bgGradient: THEME_GRADIENTS.dark.primary,
    boxShadow: THEME_SHADOWS.dark.card,
  }}
/>\`}
        </Box>
      </Box>

      <Box p={4} bg="purple.50" borderRadius="md" _dark={{
      bg: 'purple.900/20'
    }}>
        <Text fontSize="lg" fontWeight="bold" mb={3} color="purple.700" _dark={{
        color: 'purple.300'
      }}>
          メリット
        </Text>
        <VStack align="start" gap={2}>
          <Text fontSize="sm">
            ✅ <strong>一元管理</strong>: 1箇所でカラーパレット変更可能
          </Text>
          <Text fontSize="sm">
            🔧 <strong>保守性向上</strong>: 修正時の影響範囲が明確
          </Text>
          <Text fontSize="sm">
            🎨 <strong>デザイン統一</strong>: より一貫性のある配色
          </Text>
          <Text fontSize="sm">
            ⚡ <strong>開発効率</strong>: プリセットで素早い実装
          </Text>
          <Text fontSize="sm">
            🌙 <strong>ダークモード対応</strong>: ライト・ダーク両対応
          </Text>
        </VStack>
      </Box>
    </VStack>
}`,...(B=(M=c.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const L=["ColorPalette","Gradients","Shadows","ComponentThemes","Usage"];export{i as ColorPalette,g as ComponentThemes,s as Gradients,x as Shadows,c as Usage,L as __namedExportsOrder,I as default};
