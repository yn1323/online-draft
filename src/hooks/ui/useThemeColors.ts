import { useMemo } from 'react';
import { getThemeColors, type ColorScheme, type ThemeColors } from '@/src/constants/ui/colors';

/**
 * テーマ色計算フック
 * コンポーネント間でのカラーパレット算出ロジック統一
 */
export const useThemeColors = (colorScheme: ColorScheme): ThemeColors => {
  return useMemo(() => getThemeColors(colorScheme), [colorScheme]);
};