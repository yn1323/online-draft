import {
  type ColorScheme,
  type ThemeColors,
  getThemeColors,
} from '@/src/constants/ui/colors';
import { useMemo } from 'react';

/**
 * テーマ色計算フック
 * コンポーネント間でのカラーパレット算出ロジック統一
 */
export const useThemeColors = (colorScheme: ColorScheme): ThemeColors => {
  return useMemo(() => getThemeColors(colorScheme), [colorScheme]);
};
