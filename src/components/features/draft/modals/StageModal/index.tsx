import {
  groupAtom,
  selectionsAtom,
  usersAtom,
} from '@/src/components/features/draft/states';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { atom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useModalWithVariant } from '../../hooks/common/useModal';
import { type ParticipantResult, Stage } from './stage/index';

/**
 * ステージ演出用の参加者情報をUI表示用に変換するAtom
 * users、selections、currentRoundを組み合わせてParticipantResult[]を生成
 * 同じアイテムを選んだ人の中でrandomNumberが最小の人がwillLose=trueになる
 */
const stageParticipantsUIAtom = atom<ParticipantResult[]>((get) => {
  const users = get(usersAtom);
  const selections = get(selectionsAtom);
  const { round } = get(groupAtom);
  const currentRound = round - 1;

  // 現在ラウンドの選択のみを抽出
  const currentRoundSelections = selections.filter(
    (s) => s.round === currentRound,
  );

  // アイテム別にグループ化して、各グループで最小randomNumberを特定
  const itemGroups = currentRoundSelections.reduce(
    (acc, selection) => {
      if (!acc[selection.item]) {
        acc[selection.item] = [];
      }
      acc[selection.item].push(selection);
      return acc;
    },
    {} as Record<string, typeof currentRoundSelections>,
  );

  // 各アイテムグループで最小randomNumberを持つuserIdを特定
  const losingUserIds = new Set<string>();
  Object.values(itemGroups).forEach((group) => {
    if (group.length > 1) {
      // 複数人が同じアイテムを選択した場合のみ
      const minRandomNumber = Math.min(...group.map((s) => s.randomNumber));
      const loser = group.find((s) => s.randomNumber === minRandomNumber);
      if (loser) {
        losingUserIds.add(loser.userId);
      }
    }
  });

  return users.map((user) => {
    // 現在のラウンドでのユーザーの選択を取得
    const selection = currentRoundSelections.find((s) => s.userId === user.id);

    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      choice: selection?.item || '選択中...',
      willLose: losingUserIds.has(user.id), // randomNumberが最小の人がwillLose
    };
  });
});

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
};

/**
 * 開票演出を表示するモーダルコンポーネント
 * ResponsiveModalを使用して、SP/PCで最適な表示を実現
 */
/**
 * 開票演出を表示するモーダルコンポーネント
 * ResponsiveModalを使用して、SP/PCで最適な表示を実現
 */
export const StageModal = ({ isOpen, onClose, variant }: StageModalProps) => {
  // Atomからデータを取得
  const participants = useAtomValue(stageParticipantsUIAtom);
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
