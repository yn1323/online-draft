/**
 * UI関連のアニメーション定数
 * コンポーネント間でのアニメーション速度・エフェクト統一
 */

/**
 * アニメーション時間定数
 */
export const ANIMATION_DURATIONS = {
  /** 標準的なUIアニメーション */
  fast: '0.15s',
  /** 一般的なホバー・クリック効果 */
  standard: '0.2s',
  /** 少し時間をかけるアニメーション */
  medium: '0.3s',
  /** ページ遷移やモーダル表示 */
  slow: '0.5s',
} as const;

/**
 * イージング関数定数
 */
export const ANIMATION_EASINGS = {
  /** 標準的なイージング */
  ease: 'ease',
  /** スムーズなイン・アウト */
  easeInOut: 'ease-in-out',
  /** 自然な動き */
  easeOut: 'ease-out',
  /** 素早いスタート */
  easeIn: 'ease-in',
  /** カスタムベジェ（Material Design風） */
  material: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  /** 弾性のあるアニメーション */
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

/**
 * 標準的なtransition組み合わせ
 */
export const TRANSITIONS = {
  /** 標準的なUIアニメーション */
  default: `all ${ANIMATION_DURATIONS.standard} ${ANIMATION_EASINGS.ease}`,
  /** スムーズなホバー効果 */
  smooth: `all ${ANIMATION_DURATIONS.standard} ${ANIMATION_EASINGS.easeInOut}`,
  /** 高速レスポンス */
  fast: `all ${ANIMATION_DURATIONS.fast} ${ANIMATION_EASINGS.easeOut}`,
  /** Material Design風 */
  material: `all ${ANIMATION_DURATIONS.standard} ${ANIMATION_EASINGS.material}`,
  /** 弾性のあるアニメーション */
  bounce: `all ${ANIMATION_DURATIONS.medium} ${ANIMATION_EASINGS.bounce}`,
} as const;

/**
 * 共通アニメーション効果
 */
export const ANIMATION_EFFECTS = {
  /** ホバー時の浮上効果 */
  lift: {
    transform: 'translateY(-2px)',
    boxShadow: 'lg',
  },
  /** ホバー時の拡大効果 */
  scale: {
    transform: 'scale(1.05)',
  },
  /** クリック時の縮小効果 */
  shrink: {
    transform: 'scale(0.95)',
  },
  /** 軽い浮上効果 */
  softLift: {
    transform: 'translateY(-1px)',
    boxShadow: 'md',
  },
  /** 大きな拡大効果 */
  bigScale: {
    transform: 'scale(1.08)',
  },
} as const;

/**
 * アニメーション組み合わせヘルパー
 */
export const createTransition = (
  duration: keyof typeof ANIMATION_DURATIONS = 'standard',
  easing: keyof typeof ANIMATION_EASINGS = 'ease',
): string => {
  return `all ${ANIMATION_DURATIONS[duration]} ${ANIMATION_EASINGS[easing]}`;
};

/**
 * ホバー効果組み合わせヘルパー
 */
export const createHoverEffect = (
  effect: keyof typeof ANIMATION_EFFECTS,
  transition: string = TRANSITIONS.default,
) => {
  return {
    transition,
    _hover: {
      ...ANIMATION_EFFECTS[effect],
      _disabled: {
        transform: 'none',
        boxShadow: 'none',
      },
    },
  };
};
