import { Box, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  COMPONENT_THEMES,
  THEME_COLORS,
  THEME_GRADIENTS,
  THEME_SHADOWS,
} from './theme';

const meta: Meta = {
  title: 'Constants/Theme',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# 🎨 統一テーマシステム

アプリケーション全体で使用する統一された配色・グラデーション・シャドウ定数の一覧です。

## 設計思想
- **緑ベースの落ち着いた配色**: ユーザーが長時間使用しても疲れにくい配色
- **一元管理**: 全コンポーネントで共通の定数を使用
- **ダークモード対応**: ライト・ダークモード両対応
- **コンポーネント別プリセット**: よく使用される組み合わせをプリセット化
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

// 🎯 カラーパレット表示
export const ColorPalette: Story = {
  render: () => (
    <VStack gap={6} align="stretch">
      <Text fontSize="2xl" fontWeight="bold">
        🎯 メインカラーパレット
      </Text>

      {/* 基本グリーン系 */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          基本グリーン系
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={3}>
          {Object.entries(THEME_COLORS.primary).map(([key, value]) => (
            <VStack key={key} gap={2}>
              <Box
                w="full"
                h="60px"
                bg={value}
                borderRadius="md"
                border="1px solid"
                borderColor="gray.200"
                _dark={{ borderColor: 'gray.600' }}
              />
              <VStack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {key}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {value}
                </Text>
              </VStack>
            </VStack>
          ))}
        </Grid>
      </Box>

      {/* ボーダー色 */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          ボーダー色
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={3}>
          {Object.entries(THEME_COLORS.border).map(([key, value]) => (
            <VStack key={key} gap={2}>
              <Box
                w="full"
                h="60px"
                border="4px solid"
                borderColor={value}
                borderRadius="md"
                bg="white"
                _dark={{ bg: 'gray.800' }}
              />
              <VStack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {key}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {value}
                </Text>
              </VStack>
            </VStack>
          ))}
        </Grid>
      </Box>

      {/* テキスト色 */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          テキスト色
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={3}>
          {Object.entries(THEME_COLORS.text).map(([key, value]) => (
            <VStack key={key} gap={2}>
              <Box
                w="full"
                h="60px"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _dark={{ bg: 'gray.800', borderColor: 'gray.600' }}
              >
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
            </VStack>
          ))}
        </Grid>
      </Box>
    </VStack>
  ),
};

// 🌈 グラデーション表示
export const Gradients: Story = {
  render: () => (
    <VStack gap={6} align="stretch">
      <Text fontSize="2xl" fontWeight="bold">
        🌈 グラデーション一覧
      </Text>

      {/* ライトモード */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          ライトモード
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          {Object.entries(THEME_GRADIENTS.light).map(([key, value]) => (
            <VStack key={key} gap={2}>
              <Box
                w="full"
                h="80px"
                bgGradient={value}
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
              />
              <VStack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {key}
                </Text>
                <Text fontSize="xs" color="gray.500" textAlign="center">
                  {value}
                </Text>
              </VStack>
            </VStack>
          ))}
        </Grid>
      </Box>

      {/* ダークモード */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          ダークモード
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          {Object.entries(THEME_GRADIENTS.dark).map(([key, value]) => (
            <VStack key={key} gap={2}>
              <Box
                w="full"
                h="80px"
                bgGradient={value}
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.600"
                bg="gray.800"
              />
              <VStack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {key}
                </Text>
                <Text fontSize="xs" color="gray.500" textAlign="center">
                  {value}
                </Text>
              </VStack>
            </VStack>
          ))}
        </Grid>
      </Box>
    </VStack>
  ),
};

// ✨ シャドウ表示
export const Shadows: Story = {
  render: () => (
    <VStack gap={6} align="stretch">
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
            <Box
              w="full"
              h="80px"
              bg="white"
              borderRadius="lg"
              boxShadow={THEME_SHADOWS.card}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="sm" fontWeight="medium" color="gray.600">
                card
              </Text>
            </Box>
            <Text fontSize="xs" color="gray.500" textAlign="center">
              カード用シャドウ
            </Text>
          </VStack>

          <VStack gap={2}>
            <Box
              w="full"
              h="80px"
              bg="white"
              borderRadius="lg"
              boxShadow={THEME_SHADOWS.button}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="sm" fontWeight="medium" color="gray.600">
                button
              </Text>
            </Box>
            <Text fontSize="xs" color="gray.500" textAlign="center">
              ボタン用シャドウ
            </Text>
          </VStack>

          <VStack gap={2}>
            <Box
              w="full"
              h="80px"
              bg="white"
              borderRadius="lg"
              boxShadow={THEME_SHADOWS.modal}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
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

      <Box p={4} bg="gray.50" borderRadius="md" _dark={{ bg: 'gray.900' }}>
        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
          💡
          シャドウはライトモード・ダークモード両対応で、緑をベースとした統一感のある陰影を提供します。
        </Text>
      </Box>
    </VStack>
  ),
};

// 🎮 コンポーネントテーマプレビュー
export const ComponentThemes: Story = {
  render: () => (
    <VStack gap={8} align="stretch">
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
            <Box
              p={4}
              bgGradient={COMPONENT_THEMES.currentRound.light.bgGradient}
              border="2px solid"
              borderColor={COMPONENT_THEMES.currentRound.light.borderColor}
              borderRadius="lg"
              boxShadow={COMPONENT_THEMES.currentRound.light.boxShadow}
              w="200px"
            >
              <Text
                color={COMPONENT_THEMES.currentRound.light.textColor}
                fontWeight="bold"
                mb={2}
              >
                現在のラウンド 3
              </Text>
              <Text
                fontSize="sm"
                color={COMPONENT_THEMES.currentRound.light.textColor}
              >
                ⚡ 進行中
              </Text>
            </Box>
          </Box>

          <Box>
            <Text fontSize="sm" mb={2} color="gray.600">
              ダークモード
            </Text>
            <Box
              p={4}
              bgGradient={COMPONENT_THEMES.currentRound.dark.bgGradient}
              border="2px solid"
              borderColor={COMPONENT_THEMES.currentRound.dark.borderColor}
              borderRadius="lg"
              boxShadow={COMPONENT_THEMES.currentRound.dark.boxShadow}
              w="200px"
              bg="gray.800"
            >
              <Text
                color={COMPONENT_THEMES.currentRound.dark.textColor}
                fontWeight="bold"
                mb={2}
              >
                現在のラウンド 3
              </Text>
              <Text
                fontSize="sm"
                color={COMPONENT_THEMES.currentRound.dark.textColor}
              >
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
            <Box
              p={3}
              bg="white"
              border="1px solid"
              borderColor={COMPONENT_THEMES.pastRound.light.borderColor}
              borderRadius="lg"
              w="200px"
              _hover={{
                bg: COMPONENT_THEMES.pastRound.light.hoverBg,
                borderColor: COMPONENT_THEMES.pastRound.light.hoverBorder,
              }}
            >
              <Text
                color={COMPONENT_THEMES.pastRound.light.textColor}
                fontWeight="bold"
                mb={1}
              >
                ラウンド 2
              </Text>
              <Text
                fontSize="sm"
                color={COMPONENT_THEMES.pastRound.light.secondaryText}
              >
                📊 4人参加
              </Text>
            </Box>
          </Box>

          <Box>
            <Text fontSize="sm" mb={2} color="gray.600">
              ダークモード
            </Text>
            <Box
              p={3}
              bg="gray.800"
              border="1px solid"
              borderColor={COMPONENT_THEMES.pastRound.dark.borderColor}
              borderRadius="lg"
              w="200px"
              _hover={{
                bg: COMPONENT_THEMES.pastRound.dark.hoverBg,
                borderColor: COMPONENT_THEMES.pastRound.dark.hoverBorder,
              }}
            >
              <Text
                color={COMPONENT_THEMES.pastRound.dark.textColor}
                fontWeight="bold"
                mb={1}
              >
                ラウンド 2
              </Text>
              <Text
                fontSize="sm"
                color={COMPONENT_THEMES.pastRound.dark.secondaryText}
              >
                📊 4人参加
              </Text>
            </Box>
          </Box>
        </HStack>
      </Box>
    </VStack>
  ),
};

// 📋 使用方法ガイド
export const Usage: Story = {
  render: () => (
    <VStack gap={6} align="stretch" maxW="800px">
      <Text fontSize="2xl" fontWeight="bold">
        📋 使用方法ガイド
      </Text>

      <Box p={4} bg="blue.50" borderRadius="md" _dark={{ bg: 'blue.900/20' }}>
        <Text
          fontSize="lg"
          fontWeight="bold"
          mb={3}
          color="blue.700"
          _dark={{ color: 'blue.300' }}
        >
          基本的な使用方法
        </Text>
        <Box
          as="pre"
          fontSize="sm"
          color="gray.700"
          _dark={{ color: 'gray.300' }}
          overflow="auto"
        >
          {`// コンポーネント内でのインポート
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
</Box>`}
        </Box>
      </Box>

      <Box p={4} bg="green.50" borderRadius="md" _dark={{ bg: 'green.900/20' }}>
        <Text
          fontSize="lg"
          fontWeight="bold"
          mb={3}
          color="green.700"
          _dark={{ color: 'green.300' }}
        >
          個別定数の使用
        </Text>
        <Box
          as="pre"
          fontSize="sm"
          color="gray.700"
          _dark={{ color: 'gray.300' }}
          overflow="auto"
        >
          {`// 個別の色やグラデーションを使用
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
/>`}
        </Box>
      </Box>

      <Box
        p={4}
        bg="purple.50"
        borderRadius="md"
        _dark={{ bg: 'purple.900/20' }}
      >
        <Text
          fontSize="lg"
          fontWeight="bold"
          mb={3}
          color="purple.700"
          _dark={{ color: 'purple.300' }}
        >
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
  ),
};
