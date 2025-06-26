import { useEffect, useState } from 'react';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { useModalWithVariant } from '../../hooks/common/useModal';
import { type ParticipantResult, Stage } from './stage/index';

/**
 * StageModal用のカスタムフック
 * 汎用useModalWithVariantを利用した軽量実装
 */
export const useStageModal = () => {
  const variants: ('card' | 'typing' | 'slot')[] = ['card', 'typing', 'slot'];
  return useModalWithVariant(variants, 'card');
};

type StageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  variant: 'card' | 'typing' | 'slot';
  participants: ParticipantResult[];
};

/**
 * 開票演出を表示するモーダルコンポーネント
 * ResponsiveModalを使用して、SP/PCで最適な表示を実現
 */
export const StageModal = ({
  isOpen,
  onClose,
  variant,
  participants,
}: StageModalProps) => {
  const [isRevealing, setIsRevealing] = useState(false);

  // モーダルが開かれたら自動で演出開始
  useEffect(() => {
    if (isOpen) {
      setIsRevealing(true);
    } else {
      setIsRevealing(false);
    }
  }, [isOpen]);

  const handleStartReveal = () => {
    setIsRevealing(true);
  };

  const handleReset = () => {
    setIsRevealing(false);
  };

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={onClose}
      title="開票演出"
      dialogMaxWidth="4xl" // PC版の幅を拡張
      actions={{
        cancel: {
          text: '閉じる',
          onClick: onClose,
        },
      }}
    >
      <Stage
        variant={variant}
        participants={participants}
        isRevealing={isRevealing}
        onStartReveal={handleStartReveal}
        onReset={handleReset}
      />
    </ResponsiveModal>
  );
};
