import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import type { EditingPickType } from '../useDraftLogic';

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
    </>
  );
};
