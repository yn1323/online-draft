import { useState } from 'react';

/**
 * 汎用モーダル管理カスタムフック
 * 開閉状態の管理のみを担当する軽量hook
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
};

/**
 * バリアント付きモーダル管理カスタムフック
 * StageModal等の複数バリアントを持つモーダル向け
 */
export const useModalWithVariant = <T extends string>(
  variants: T[],
  defaultVariant: T,
) => {
  const { isOpen, open: openModal, close } = useModal();
  const [variant, setVariant] = useState<T>(defaultVariant);

  const open = (selectedVariant?: T) => {
    // 指定されたバリアント、または一覧からランダム選択
    const finalVariant =
      selectedVariant || variants[Math.floor(Math.random() * variants.length)];
    setVariant(finalVariant);
    openModal();
  };

  return {
    isOpen,
    variant,
    open,
    close,
  };
};
