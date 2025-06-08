/**
 * 🎨 統一テーマ定数 - ドラフトアプリケーション
 * 全コンポーネントで共通利用する配色・グラデーション・シャドウ定数
 */

// 🎯 メインカラーパレット（緑ベース）
export const THEME_COLORS = {
  // 基本グリーン系
  primary: {
    50: 'green.50',
    100: 'green.100',
    200: 'green.200',
    300: 'green.300',
    400: 'green.400',
    500: 'green.500',
    600: 'green.600',
    700: 'green.700',
    800: 'green.800',
    900: 'green.900',
  },
  
  // ボーダー色
  border: {
    light: 'green.200',
    normal: 'green.300',
    emphasis: 'green.400',
    strong: 'green.500',
    dark: 'green.600',
  },
  
  // テキスト色
  text: {
    primary: 'green.700',
    secondary: 'green.600',
    emphasis: 'green.800',
  },
  
  // ダークモード対応
  dark: {
    bg: 'green.800/40',
    bgStrong: 'green.900/40',
    border: 'green.600',
    borderStrong: 'green.700',
    text: 'green.300',
    textSecondary: 'green.400',
    textEmphasis: 'green.200',
  },
} as const;

// 🌈 グラデーション定数
export const THEME_GRADIENTS = {
  // ライトモード
  light: {
    primary: 'linear(to-r, green.100, green.200)',
    secondary: 'linear(135deg, green.50, green.100)',
    accent: 'linear(to-r, green.400, green.500, green.400)',
    subtle: 'linear(to-br, green.50, green.100)',
  },
  
  // ダークモード
  dark: {
    primary: 'linear(to-r, green.800/40, green.900/40)',
    secondary: 'linear(135deg, green.900/40, green.800/40)',
    accent: 'linear(to-r, green.300, green.400, green.300)',
    subtle: 'linear(to-br, green.900/40, green.800/40)',
  },
} as const;

// ✨ シャドウ定数
export const THEME_SHADOWS = {
  // ボックスシャドウ
  card: '0 4px 20px -5px rgba(34, 197, 94, 0.25)',
  cardHover: '0 8px 30px -8px rgba(34, 197, 94, 0.35)',
  button: '0 8px 25px -8px rgba(34, 197, 94, 0.5)',
  buttonHover: '0 12px 35px -8px rgba(34, 197, 94, 0.6)',
  modal: '0 10px 30px -10px rgba(34, 197, 94, 0.25)',
  
  // ダークモード用シャドウ
  dark: {
    card: '0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.2)',
    modal: '0 0 30px rgba(34, 197, 94, 0.3), 0 0 60px rgba(34, 197, 94, 0.1)',
    button: '0 8px 25px -8px rgba(34, 197, 94, 0.4)',
    buttonHover: '0 12px 35px -8px rgba(34, 197, 94, 0.5)',
  },
} as const;

// 🎮 コンポーネント別テーマプリセット
export const COMPONENT_THEMES = {
  // 現在ラウンド表示
  currentRound: {
    light: {
      bgGradient: THEME_GRADIENTS.light.primary,
      borderColor: THEME_COLORS.border.strong,
      boxShadow: THEME_SHADOWS.card,
      textColor: THEME_COLORS.text.primary,
      borderBottom: THEME_COLORS.border.normal,
      accent: THEME_GRADIENTS.light.accent,
    },
    dark: {
      bgGradient: THEME_GRADIENTS.dark.primary,
      borderColor: THEME_COLORS.dark.border,
      boxShadow: THEME_SHADOWS.dark.card,
      textColor: THEME_COLORS.dark.text,
      borderBottom: THEME_COLORS.dark.borderStrong,
      accent: THEME_GRADIENTS.dark.accent,
    },
  },
  
  // 過去ラウンド表示
  pastRound: {
    light: {
      borderColor: THEME_COLORS.border.light,
      hoverBg: THEME_COLORS.primary[50],
      hoverBorder: THEME_COLORS.border.normal,
      textColor: THEME_COLORS.text.emphasis,
      secondaryText: THEME_COLORS.text.secondary,
      separatorColor: THEME_COLORS.primary[100],
    },
    dark: {
      borderColor: THEME_COLORS.dark.border,
      hoverBg: `${THEME_COLORS.primary[900]}/40`,
      hoverBorder: THEME_COLORS.dark.border,
      textColor: THEME_COLORS.dark.textEmphasis,
      secondaryText: THEME_COLORS.dark.textSecondary,
      separatorColor: THEME_COLORS.primary[800],
    },
  },
  
  // チャットログセクション
  chatLog: {
    light: {
      bgGradient: THEME_GRADIENTS.light.secondary,
      borderColor: THEME_COLORS.border.normal,
      boxShadow: THEME_SHADOWS.modal,
      textColor: THEME_COLORS.text.primary,
      topBorder: THEME_GRADIENTS.light.accent,
    },
    dark: {
      bgGradient: THEME_GRADIENTS.dark.secondary,
      borderColor: THEME_COLORS.dark.border,
      boxShadow: THEME_SHADOWS.dark.modal,
      textColor: THEME_COLORS.dark.text,
      topBorder: THEME_GRADIENTS.dark.accent,
    },
  },
  
  // ボタン系
  button: {
    primary: {
      colorPalette: 'green',
      borderColor: THEME_COLORS.border.emphasis,
      bg: THEME_COLORS.primary[50],
      textColor: THEME_COLORS.text.primary,
      hoverBg: THEME_COLORS.primary[100],
      hoverBorder: THEME_COLORS.border.strong,
      boxShadow: THEME_SHADOWS.button,
      hoverBoxShadow: THEME_SHADOWS.buttonHover,
    },
    floating: {
      colorPalette: 'green',
      boxShadow: THEME_SHADOWS.button,
      hoverBoxShadow: THEME_SHADOWS.buttonHover,
      darkBoxShadow: THEME_SHADOWS.dark.button,
      darkHoverBoxShadow: THEME_SHADOWS.dark.buttonHover,
    },
  },
  
  // インプット・モーダル系
  input: {
    focusBorderColor: THEME_COLORS.border.strong,
    focusBoxShadow: `0 0 0 1px var(--chakra-colors-${THEME_COLORS.border.strong})`,
    labelColor: THEME_COLORS.text.primary,
    modalColorPalette: 'green',
  },
} as const;

// 🚀 ユーティリティ関数
export const getThemeValue = (light: string, dark: string) => ({
  base: light,
  _dark: { value: dark },
});

export const getComponentTheme = (component: keyof typeof COMPONENT_THEMES) => 
  COMPONENT_THEMES[component];

// 📝 使用例コメント
/*
// CurrentRoundRowでの使用例:
import { COMPONENT_THEMES, THEME_COLORS } from '@/src/constants/theme';

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
*/