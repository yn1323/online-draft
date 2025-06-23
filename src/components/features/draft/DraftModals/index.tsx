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
 * アイテム選択モーダル用hooks
 */
export const useItemSelectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [comment, setComment] = useState('');

  const open = () => setIsOpen(true);

  const close = () => {
    setIsOpen(false);
    setSelectedItem('');
    setComment('');
  };

  const reset = () => {
    setSelectedItem('');
    setComment('');
  };

  return {
    isOpen,
    selectedItem,
    comment,
    setSelectedItem,
    setComment,
    open,
    close,
    reset,
  };
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

/**
 * 開票確認モーダル用hooks
 */
export const useOpenResultModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
};

type DraftModalsProps = {
  // アイテム選択モーダル
  isItemSelectModalOpen: boolean;
  selectedItem: string;
  comment: string;
  onSelectedItemChange: (value: string) => void;
  onCommentChange: (value: string) => void;
  onItemSelectClose: () => void;
  onItemSelect: () => void;

  // 編集モーダル
  isEditModalOpen: boolean;
  editingPick: EditingPickType | null;
  onEditClose: () => void;
  onEditSave: () => void;
  onEditingPickUpdate: (updates: Partial<EditingPickType>) => void;

  // 開票確認モーダル
  isOpenResultConfirmModalOpen: boolean;
  onOpenResultConfirmClose: () => void;
  onExecuteOpenResult: () => void;
};

/**
 * ドラフト関連のモーダル群コンポーネント
 * アイテム選択モーダルとピック編集モーダルを管理
 */
export const DraftModals = ({
  isItemSelectModalOpen,
  selectedItem,
  comment,
  onSelectedItemChange,
  onCommentChange,
  onItemSelectClose,
  onItemSelect,
  isEditModalOpen,
  editingPick,
  onEditClose,
  onEditSave,
  onEditingPickUpdate,
  isOpenResultConfirmModalOpen,
  onOpenResultConfirmClose,
  onExecuteOpenResult,
}: DraftModalsProps) => {
  return (
    <>
      {/* アイテム選択モーダル */}
      <ResponsiveModal
        isOpen={isItemSelectModalOpen}
        onClose={onItemSelectClose}
        title="アイテムを選択"
        actions={{
          cancel: {
            text: 'キャンセル',
            onClick: onItemSelectClose,
          },
          submit: {
            text: '決定',
            disabled: !selectedItem.trim(),
            onClick: onItemSelect,
          },
        }}
      >
        <VStack gap={4} w="full">
          {/* アイテム名入力 */}
          <VStack gap={2} align="start" w="full">
            <Text fontSize="sm" fontWeight="bold" color="gray.700">
              アイテム名
            </Text>
            <Input
              placeholder="アイテム名を入力してください"
              value={selectedItem}
              onChange={onSelectedItemChange}
              maxLength={50}
              size="lg"
            />
          </VStack>

          {/* コメント入力 */}
          <VStack gap={2} align="start" w="full">
            <Text fontSize="sm" fontWeight="bold" color="gray.700">
              コメント（任意）
            </Text>
            <Input
              placeholder="この選択についてのコメント..."
              value={comment}
              onChange={onCommentChange}
              maxLength={100}
              size="lg"
            />
          </VStack>
        </VStack>
      </ResponsiveModal>

      {/* ピック編集モーダル */}
      <ResponsiveModal
        isOpen={isEditModalOpen}
        onClose={onEditClose}
        title="ピックを編集"
        actions={{
          cancel: {
            text: 'キャンセル',
            onClick: onEditClose,
          },
          submit: {
            text: '保存',
            colorPalette: 'blue',
            onClick: onEditSave,
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

      {/* 開票確認モーダル */}
      <ResponsiveModal
        isOpen={isOpenResultConfirmModalOpen}
        onClose={onOpenResultConfirmClose}
        title="開票確認"
        actions={{
          cancel: {
            text: 'キャンセル',
            onClick: onOpenResultConfirmClose,
          },
          submit: {
            text: '開票する',
            colorPalette: 'orange',
            onClick: onExecuteOpenResult,
          },
        }}
      >
        <VStack gap={4} w="full" textAlign="center">
          <Text fontSize="md" color="gray.700">
            まだ入力していない参加者がいます。
          </Text>
          <Text fontSize="md" fontWeight="bold" color="orange.600">
            本当に開票しますか？
          </Text>
          <Text fontSize="sm" color="gray.500">
            開票すると、未入力の参加者は今回のラウンドをスキップします。
          </Text>
        </VStack>
      </ResponsiveModal>
    </>
  );
};
