/**
 * UI関連のカラー定数
 * コンポーネント間でのカラーパレット算出ロジック統一
 */

export type ColorScheme =
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'teal'
  | 'pink'
  | 'red'
  | 'yellow'
  | 'gray';

export interface ThemeColors {
  light: {
    bg: string;
    bgGradient: string;
    borderColor: string;
    textColor: string;
    iconBg: string;
    glowColor: string;
    accent: string;
    borderBottom: string;
  };
  dark: {
    bg: string;
    bgGradient: string;
    borderColor: string;
    textColor: string;
    iconBg: string;
    glowColor: string;
    accent: string;
    borderBottom: string;
  };
}

/**
 * テーマカラー設定を取得
 */
export const getThemeColors = (colorScheme: ColorScheme): ThemeColors => {
  const colorMap = {
    blue: {
      light: {
        bg: 'blue.50',
        bgGradient: 'linear(135deg, blue.50, blue.100)',
        borderColor: 'blue.200',
        textColor: 'blue.700',
        iconBg: 'blue.100',
        glowColor: 'blue.400',
        accent: 'linear-gradient(45deg, blue.500, blue.600, blue.500)',
        borderBottom: 'blue.100',
      },
      dark: {
        bg: 'blue.900/40',
        bgGradient: 'linear(135deg, blue.900/40, blue.800/40)',
        borderColor: 'blue.600',
        textColor: 'blue.300',
        iconBg: 'blue.900/30',
        glowColor: 'blue.300',
        accent: 'linear-gradient(45deg, blue.400, blue.500, blue.400)',
        borderBottom: 'blue.600',
      },
    },
    green: {
      light: {
        bg: 'green.50',
        bgGradient: 'linear(135deg, green.50, green.100)',
        borderColor: 'green.200',
        textColor: 'green.700',
        iconBg: 'green.100',
        glowColor: 'green.400',
        accent: 'linear-gradient(45deg, green.500, green.600, green.500)',
        borderBottom: 'green.100',
      },
      dark: {
        bg: 'green.900/40',
        bgGradient: 'linear(135deg, green.900/40, green.800/40)',
        borderColor: 'green.600',
        textColor: 'green.300',
        iconBg: 'green.900/30',
        glowColor: 'green.300',
        accent: 'linear-gradient(45deg, green.400, green.500, green.400)',
        borderBottom: 'green.600',
      },
    },
    purple: {
      light: {
        bg: 'purple.50',
        bgGradient: 'linear(135deg, purple.50, purple.100)',
        borderColor: 'purple.200',
        textColor: 'purple.700',
        iconBg: 'purple.100',
        glowColor: 'purple.400',
        accent: 'linear-gradient(45deg, purple.500, purple.600, purple.500)',
        borderBottom: 'purple.100',
      },
      dark: {
        bg: 'purple.900/40',
        bgGradient: 'linear(135deg, purple.900/40, purple.800/40)',
        borderColor: 'purple.600',
        textColor: 'purple.300',
        iconBg: 'purple.900/30',
        glowColor: 'purple.300',
        accent: 'linear-gradient(45deg, purple.400, purple.500, purple.400)',
        borderBottom: 'purple.600',
      },
    },
    orange: {
      light: {
        bg: 'orange.50',
        bgGradient: 'linear(135deg, orange.50, orange.100)',
        borderColor: 'orange.200',
        textColor: 'orange.700',
        iconBg: 'orange.100',
        glowColor: 'orange.400',
        accent: 'linear-gradient(45deg, orange.500, orange.600, orange.500)',
        borderBottom: 'orange.100',
      },
      dark: {
        bg: 'orange.900/40',
        bgGradient: 'linear(135deg, orange.900/40, orange.800/40)',
        borderColor: 'orange.600',
        textColor: 'orange.300',
        iconBg: 'orange.900/30',
        glowColor: 'orange.300',
        accent: 'linear-gradient(45deg, orange.400, orange.500, orange.400)',
        borderBottom: 'orange.600',
      },
    },
    teal: {
      light: {
        bg: 'teal.50',
        bgGradient: 'linear(135deg, teal.50, teal.100)',
        borderColor: 'teal.200',
        textColor: 'teal.700',
        iconBg: 'teal.100',
        glowColor: 'teal.400',
        accent: 'linear-gradient(45deg, teal.500, teal.600, teal.500)',
        borderBottom: 'teal.100',
      },
      dark: {
        bg: 'teal.900/40',
        bgGradient: 'linear(135deg, teal.900/40, teal.800/40)',
        borderColor: 'teal.600',
        textColor: 'teal.300',
        iconBg: 'teal.900/30',
        glowColor: 'teal.300',
        accent: 'linear-gradient(45deg, teal.400, teal.500, teal.400)',
        borderBottom: 'teal.600',
      },
    },
    pink: {
      light: {
        bg: 'pink.50',
        bgGradient: 'linear(135deg, pink.50, pink.100)',
        borderColor: 'pink.200',
        textColor: 'pink.700',
        iconBg: 'pink.100',
        glowColor: 'pink.400',
        accent: 'linear-gradient(45deg, pink.500, pink.600, pink.500)',
        borderBottom: 'pink.100',
      },
      dark: {
        bg: 'pink.900/40',
        bgGradient: 'linear(135deg, pink.900/40, pink.800/40)',
        borderColor: 'pink.600',
        textColor: 'pink.300',
        iconBg: 'pink.900/30',
        glowColor: 'pink.300',
        accent: 'linear-gradient(45deg, pink.400, pink.500, pink.400)',
        borderBottom: 'pink.600',
      },
    },
    red: {
      light: {
        bg: 'red.50',
        bgGradient: 'linear(135deg, red.50, red.100)',
        borderColor: 'red.200',
        textColor: 'red.700',
        iconBg: 'red.100',
        glowColor: 'red.400',
        accent: 'linear-gradient(45deg, red.500, red.600, red.500)',
        borderBottom: 'red.100',
      },
      dark: {
        bg: 'red.900/40',
        bgGradient: 'linear(135deg, red.900/40, red.800/40)',
        borderColor: 'red.600',
        textColor: 'red.300',
        iconBg: 'red.900/30',
        glowColor: 'red.300',
        accent: 'linear-gradient(45deg, red.400, red.500, red.400)',
        borderBottom: 'red.600',
      },
    },
    yellow: {
      light: {
        bg: 'yellow.50',
        bgGradient: 'linear(135deg, yellow.50, yellow.100)',
        borderColor: 'yellow.200',
        textColor: 'yellow.700',
        iconBg: 'yellow.100',
        glowColor: 'yellow.400',
        accent: 'linear-gradient(45deg, yellow.500, yellow.600, yellow.500)',
        borderBottom: 'yellow.100',
      },
      dark: {
        bg: 'yellow.900/40',
        bgGradient: 'linear(135deg, yellow.900/40, yellow.800/40)',
        borderColor: 'yellow.600',
        textColor: 'yellow.300',
        iconBg: 'yellow.900/30',
        glowColor: 'yellow.300',
        accent: 'linear-gradient(45deg, yellow.400, yellow.500, yellow.400)',
        borderBottom: 'yellow.600',
      },
    },
    gray: {
      light: {
        bg: 'gray.50',
        bgGradient: 'linear(135deg, gray.50, gray.100)',
        borderColor: 'gray.200',
        textColor: 'gray.700',
        iconBg: 'gray.100',
        glowColor: 'gray.400',
        accent: 'linear-gradient(45deg, gray.500, gray.600, gray.500)',
        borderBottom: 'gray.100',
      },
      dark: {
        bg: 'gray.900/40',
        bgGradient: 'linear(135deg, gray.900/40, gray.800/40)',
        borderColor: 'gray.600',
        textColor: 'gray.300',
        iconBg: 'gray.900/30',
        glowColor: 'gray.300',
        accent: 'linear-gradient(45deg, gray.400, gray.500, gray.400)',
        borderBottom: 'gray.600',
      },
    },
  } as const;

  return colorMap[colorScheme];
};

/**
 * 簡易カラー取得（従来の分散ロジック用の後方互換性）
 */
export const getIconBg = (
  colorScheme: ColorScheme,
): { light: string; dark: string } => {
  const colors = getThemeColors(colorScheme);
  return {
    light: colors.light.iconBg,
    dark: colors.dark.iconBg,
  };
};

/**
 * BoxShadow定数
 */
export const BOX_SHADOWS = {
  card: {
    light: '0 10px 30px -10px rgba(59, 130, 246, 0.25)',
    dark: '0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)',
  },
  hover: {
    light: '0 15px 40px -15px rgba(59, 130, 246, 0.4)',
    dark: '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.15)',
  },
  glow: (color: string) => `0 0 20px ${color}, 0 0 40px ${color}`,
} as const;
