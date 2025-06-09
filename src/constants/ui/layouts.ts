/**
 * レイアウト・グリッド・サイズ関連定数
 */

// グリッド設定
export const GRID_COLUMNS = {
  avatarSelector: { base: 4, sm: 5, md: 6 },
  actionCards: { base: 1, md: 2 },
  useCases: { base: 1, md: 2 },
  howToSteps: { base: 1, md: 3 },
  meetings: { base: 1, md: 2 },
} as const;

// コンテナサイズ
export const CONTAINER_SIZES = {
  lobby: 'container.sm',
  draft: '1600px',
  modal: 'md',
} as const;

// 共通パディング
export const COMMON_SPACING = {
  pageContainer: { base: 4, md: 8 },
  draftPage: { base: 2, md: 3, lg: 4 },
  cardPadding: { base: 4, md: 6 },
  sectionGap: { base: 3, md: 4 },
} as const;

// Z-Index階層
export const Z_INDEX = {
  tooltip: 1000,
  modal: 1200,
  toast: 1400,
  dropdown: 1300,
} as const;
