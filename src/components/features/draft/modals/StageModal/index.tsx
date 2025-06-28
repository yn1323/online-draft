import {
  conflictAnalysisAtom,
  groupAtom,
  selectionsAtom,
  usersAtom,
} from '@/src/components/features/draft/states';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { Box, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { atom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useModalWithVariant } from '../../hooks/common/useModal';
import { type ParticipantResult, Stage } from './stage/index';

const MotionBox = motion(Box);

/**
 * ステージ演出用の参加者情報をUI表示用に変換するAtom
 * users、selections、currentRoundを組み合わせてParticipantResult[]を生成
 * 同じアイテムを選んだ人の中でrandomNumberが最大の人が勝者（willLose=false）
 * それ以外の重複指名者は全員敗者（willLose=true）になる
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

  // 各アイテムグループで最大randomNumber以外のuserIdを敗者として特定
  const losingUserIds = new Set<string>();
  Object.values(itemGroups).forEach((group) => {
    if (group.length > 1) {
      // 複数人が同じアイテムを選択した場合のみ
      const maxRandomNumber = Math.max(...group.map((s) => s.randomNumber));
      // 最大値以外の全員が敗者
      group.forEach((selection) => {
        if (selection.randomNumber !== maxRandomNumber) {
          losingUserIds.add(selection.userId);
        }
      });
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
      willLose: losingUserIds.has(user.id), // randomNumberが最大でない人がwillLose
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
  const conflicts = useAtomValue(conflictAnalysisAtom);
  const { round } = useAtomValue(groupAtom);
  const [isRevealing, setIsRevealing] = useState(false);
  const [showConflictMessage, setShowConflictMessage] = useState(false);

  // モーダルが開かれたら自動で演出開始
  useEffect(() => {
    if (isOpen) {
      setIsRevealing(true);
      setShowConflictMessage(false); // 開く時にメッセージをリセット
    } else {
      setIsRevealing(false);
      setShowConflictMessage(false); // 閉じる時にメッセージをリセット
    }
  }, [isOpen]);

  // アニメーション完了後の重複指名メッセージ表示
  useEffect(() => {
    if (isOpen && isRevealing) {
      // 表示中のラウンド（round - 1）で重複指名があるかチェック
      const currentDisplayRound = round - 1;
      const hasConflict = conflicts.some(
        (c) => c.round === currentDisplayRound,
      );

      if (hasConflict) {
        // variantに応じた正確なアニメーション時間を計算
        let animationDuration = 0;
        const participantCount = participants.length;

        switch (variant) {
          case 'card':
            // CardRevealStage: (参加者数) * 800 + 600 + 500 + 1000
            // 順次開始(800ms間隔) + カード回転(600ms) + エフェクト待機(500ms) + 余裕(1000ms)
            animationDuration = participantCount * 800 + 600 + 500 + 1000;
            break;
          case 'typing': {
            // TypingStage: 参加者数 * 1000 + 最長文字数 * 80 + 300 + 1000
            // 順次開始(1000ms間隔) + タイピング(80ms/文字) + エフェクト待機(300ms) + 余裕(1000ms)
            const maxChoiceLength = Math.max(
              ...participants.map((p) => p.choice.length),
            );
            animationDuration =
              participantCount * 1000 + maxChoiceLength * 80 + 300 + 1000;
            break;
          }
          case 'slot':
            // SlotMachineStage: (参加者数 - 1) * 500 + 3000 + 500 + 1000
            // 順次開始(500ms間隔) + スロット回転(3000ms) + エフェクト待機(500ms) + 余裕(1000ms)
            animationDuration =
              (participantCount - 1) * 500 + 3000 + 500 + 1000;
            break;
        }

        // アニメーション完了後にメッセージ表示
        const timer = setTimeout(() => {
          setShowConflictMessage(true);
        }, animationDuration);

        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, isRevealing, variant, conflicts, round, participants]);

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
      <VStack gap={4} w="full">
        <Stage
          variant={'card'}
          participants={participants}
          isRevealing={isRevealing}
          onStartReveal={handleStartReveal}
          onReset={handleReset}
        />

        {/* 重複指名メッセージエリア */}
        {showConflictMessage && (
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            w="full"
            bg="red.50"
            border="2px solid"
            borderColor="red.200"
            borderRadius="lg"
            p={4}
          >
            <VStack gap={2} align="start">
              <Box display="flex" alignItems="center" gap={2}>
                <Text fontSize="lg">⚠️</Text>
                <Text fontSize="md" fontWeight="bold" color="red.700">
                  重複指名が発生しました！
                </Text>
              </Box>
              <Text fontSize="sm" color="red.600" lineHeight="1.5">
                一覧画面で赤く表示されたドラフト結果から順番に編集してください。
                <br />
                重複指名をすべて編集するまで次のラウンドに進めません。
                <br />
                ※重複指名の編集順はランダムに決まります
              </Text>
            </VStack>
          </MotionBox>
        )}
      </VStack>
    </ResponsiveModal>
  );
};
