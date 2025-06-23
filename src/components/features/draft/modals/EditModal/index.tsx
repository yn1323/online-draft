import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';

/**
 * ピック編集情報の型定義
 */
export type EditingPickType = {
  round: number;
  playerId: string;
  playerName: string;
  currentPick: string;
  category: string;
};

/**
 * 編集モーダル用hooks
 */
export const useEditModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingPick, setEditingPick] = useState<EditingPickType | null>(null);

  const open = (pick: EditingPickType) => {
    setEditingPick(pick);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setEditingPick(null);
  };

  const updatePick = (updates: Partial<EditingPickType>) => {
    if (editingPick) {
      setEditingPick({ ...editingPick, ...updates });
    }
  };

  return {
    isOpen,
    editingPick,
    open,
    close,
    updatePick,
  };
};

type EditModalProps = {
  isOpen: boolean;
  editingPick: EditingPickType | null;
  onClose: () => void;
  onSave: () => void;
  onEditingPickUpdate: (updates: Partial<EditingPickType>) => void;
};

/**
 * ピック編集モーダルコンポーネント
 * 選択したアイテムとカテゴリの編集を受け付ける
 */
export const EditModal = ({
  isOpen,
  editingPick,
  onClose,
  onSave,
  onEditingPickUpdate,
}: EditModalProps) => {
  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={onClose}
      title="ピックを編集"
      actions={{
        cancel: {
          text: 'キャンセル',
          onClick: onClose,
        },
        submit: {
          text: '保存',
          colorPalette: 'blue',
          onClick: onSave,
        },
      }}
    >
      {editingPick && (
        <VStack gap={4} w="full">
          {/* 編集対象情報 */}
          <Box w="full" p={3} bg="gray.50" borderRadius="md">
            <VStack gap={2} align="start">
              <HStack>
                <Text fontSize="xs" color="gray.600">
                  ラウンド:
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  Round {editingPick.round}
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="xs" color="gray.600">
                  プレイヤー:
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {editingPick.playerName}
                </Text>
              </HStack>
            </VStack>
          </Box>

          {/* アイテム名編集 */}
          <VStack gap={2} align="start" w="full">
            <Text fontSize="sm" fontWeight="bold" color="gray.700">
              選択アイテム
            </Text>
            <Input
              placeholder="アイテム名を入力してください"
              value={editingPick.currentPick}
              onChange={(value: string) =>
                onEditingPickUpdate({ currentPick: value })
              }
              maxLength={50}
              size="lg"
            />
          </VStack>

          {/* カテゴリ編集 */}
          <VStack gap={2} align="start" w="full">
            <Text fontSize="sm" fontWeight="bold" color="gray.700">
              カテゴリ
            </Text>
            <Input
              placeholder="カテゴリを入力してください"
              value={editingPick.category}
              onChange={(value: string) =>
                onEditingPickUpdate({ category: value })
              }
              maxLength={20}
              size="lg"
            />
          </VStack>
        </VStack>
      )}
    </ResponsiveModal>
  );
};