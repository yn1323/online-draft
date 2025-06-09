/**
 * アバター関連定数
 */

export const AVATAR_CONFIG = {
  /** メインアバター数 */
  COUNT: 18,
  /** 特別アバター */
  SPECIAL: '99',
  /** アバター画像パス */
  BASE_PATH: '/img',
  /** アバター画像拡張子 */
  EXTENSION: '.png',
} as const;

/**
 * アバター画像一覧生成
 */
export const generateAvatarList = () =>
  Array.from({ length: AVATAR_CONFIG.COUNT }, (_, i) => ({
    index: `${i + 1}`,
    path: `${AVATAR_CONFIG.BASE_PATH}/${i + 1}${AVATAR_CONFIG.EXTENSION}`,
  }));

/**
 * アバターパス取得
 */
export const getAvatarPath = (index: string): string =>
  `${AVATAR_CONFIG.BASE_PATH}/${index}${AVATAR_CONFIG.EXTENSION}`;

/**
 * アバター選択肢生成
 */
export const getAvatarOptions = () =>
  generateAvatarList().map(({ index, path }) => ({
    value: index,
    label: `アバター ${index}`,
    image: path,
  }));
