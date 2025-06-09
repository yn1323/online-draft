/**
 * UI関連のブレークポイント・レスポンシブ定数
 * コンポーネント間でのレスポンシブ対応統一
 */

/**
 * レスポンシブブレークポイント（Chakra UI標準）
 */
export const BREAKPOINTS = {
  base: '0px', // モバイル
  sm: '480px', // 小型タブレット
  md: '768px', // タブレット
  lg: '992px', // デスクトップ
  xl: '1280px', // 大型デスクトップ
  '2xl': '1536px', // 超大型デスクトップ
} as const;

/**
 * 共通レスポンシブ値
 */
export const RESPONSIVE_VALUES = {
  /** フォントサイズ */
  fontSize: {
    xs: { base: 'xs', md: 'sm' },
    sm: { base: 'sm', md: 'md' },
    md: { base: 'md', md: 'lg' },
    lg: { base: 'lg', md: 'xl' },
    xl: { base: 'xl', md: '2xl' },
  },
  /** パディング */
  padding: {
    sm: { base: 2, md: 3 },
    md: { base: 3, md: 4 },
    lg: { base: 4, md: 6 },
    xl: { base: 6, md: 8 },
  },
  /** マージン */
  margin: {
    sm: { base: 2, md: 3 },
    md: { base: 3, md: 4 },
    lg: { base: 4, md: 6 },
    xl: { base: 6, md: 8 },
  },
  /** ギャップ */
  gap: {
    sm: { base: 2, md: 3 },
    md: { base: 3, md: 4 },
    lg: { base: 4, md: 6 },
    xl: { base: 6, md: 8 },
  },
  /** 高さ */
  height: {
    sm: { base: '100px', md: '120px' },
    md: { base: '120px', md: '150px' },
    lg: { base: '150px', md: '200px' },
    xl: { base: '200px', md: '250px' },
  },
  /** カードの高さ */
  cardHeight: {
    sm: { base: '80px', md: '100px' },
    md: { base: '100px', md: '120px' },
    lg: { base: '120px', md: '150px' },
  },
} as const;

/**
 * ディスプレイ制御
 */
export const DISPLAY_BREAKPOINTS = {
  /** モバイルのみ表示 */
  mobileOnly: { base: 'block', md: 'none' },
  /** タブレット以上で表示 */
  tabletUp: { base: 'none', md: 'block' },
  /** デスクトップのみ表示 */
  desktopOnly: { base: 'none', lg: 'block' },
  /** モバイル・タブレットで表示 */
  mobileTablet: { base: 'block', lg: 'none' },
} as const;

/**
 * コンテナ幅
 */
export const CONTAINER_WIDTHS = {
  sm: { base: '100%', sm: '540px' },
  md: { base: '100%', md: '720px' },
  lg: { base: '100%', lg: '960px' },
  xl: { base: '100%', xl: '1140px' },
  '2xl': { base: '100%', '2xl': '1320px' },
  full: '100%',
} as const;

/**
 * グリッドレスポンシブ
 */
export const GRID_RESPONSIVE = {
  /** カード系グリッド */
  cards: {
    small: { base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
    medium: { base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
    large: { base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
  },
  /** アクションカード */
  actions: {
    simple: { base: '1fr', md: 'repeat(2, 1fr)' },
    triple: { base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
  },
  /** テーブル系 */
  table: {
    participants: (count: number) => ({
      base: 'repeat(auto-fit, minmax(120px, 1fr))',
      md: `60px repeat(${count}, 1fr)`,
    }),
  },
} as const;
