import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { useChat } from '@/src/hooks/firebase/chat/useChat';
import { useSelection } from '@/src/hooks/firebase/selection/useSelection';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtomValue } from 'jotai';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useModal } from '../../hooks/common/useModal';
import {
  groupAtom,
  groupIdAtom,
  selectionsAtom,
  usersAtom,
} from '../../states';

// 型定義をimport
type UserAtom = {
  id: string;
  name: string;
  avatar: string;
};

type SelectionAtom = {
  item: string;
  comment: string;
  round: number;
  userId: string;
  groupId: string;
  randomNumber: number;
};

// 定数定義
const MAX_ITEM_LENGTH = 50;
const MAX_CATEGORY_LENGTH = 20;
const MAX_COMMENT_LENGTH = 100;

/**
 * ItemSelectModalのUI状態を計算する関数
 * userId, roundから現在の選択状況を判定し、必要な情報を生成
 */
const getItemSelectUIState = (
  userId: string | null | undefined,
  round: number | null | undefined,
  selections: SelectionAtom[],
  users: UserAtom[],
) => {
  // userId/roundが未設定の場合はデフォルト状態
  if (!userId || round === null || round === undefined) {
    return {
      modalTitle: 'アイテムを選択',
      defaultItem: '',
      defaultComment: '',
      isEditMode: false,
      editContext: undefined,
    };
  }

  // 該当するuserとselectionを検索
  const user = users.find((u) => u.id === userId);
  const existingSelection = selections.find(
    (s) => s.userId === userId && s.round === round,
  );

  const isEditMode = !!existingSelection;

  return {
    modalTitle: isEditMode ? '選択を編集' : 'アイテムを選択',
    defaultItem: existingSelection?.item || '',
    defaultComment: existingSelection?.comment || '',
    isEditMode,
    editContext:
      isEditMode && user
        ? {
            round,
            playerName: user.name,
          }
        : undefined,
  };
};

// バリデーションスキーマ（重複チェック付き）
const getValidationSchema = (
  isEditMode: boolean,
  selections: SelectionAtom[],
  currentRound: number,
  originalItem?: string,
) =>
  z.object({
    item: z
      .string()
      .min(1, 'アイテム名を入力してください')
      .max(MAX_ITEM_LENGTH, `${MAX_ITEM_LENGTH}文字以内で入力してください`)
      .refine((item) => {
        // 編集モードで元のアイテムと同じ場合はOK
        if (
          isEditMode &&
          originalItem &&
          item.toLowerCase() === originalItem.toLowerCase()
        ) {
          return true;
        }

        // 過去のラウンドで重複チェック
        const pastSelections = selections.filter((s) => s.round < currentRound);
        const isDuplicate = pastSelections.some(
          (s) => s.item.toLowerCase() === item.toLowerCase(),
        );

        return !isDuplicate;
      }, 'このアイテムは過去のラウンドで既に選択されています'),
    comment: z
      .string()
      .max(
        isEditMode ? MAX_CATEGORY_LENGTH : MAX_COMMENT_LENGTH,
        isEditMode
          ? `${MAX_CATEGORY_LENGTH}文字以内で入力してください`
          : `${MAX_COMMENT_LENGTH}文字以内で入力してください`,
      )
      .default(''),
  });

/**
 * アイテム選択モーダル用hooks
 * 汎用useModalを利用した軽量実装
 */
export const useItemSelectModal = useModal;

type ItemSelectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  round: number;
};

/**
 * アイテム選択モーダルコンポーネント
 * react-hook-form + zodバリデーション使用
 */
export const ItemSelectModal = ({
  isOpen,
  onClose,
  userId,
  round,
}: ItemSelectModalProps) => {
  const formId = useId();

  // atomからデータを取得
  const selections = useAtomValue(selectionsAtom);
  const users = useAtomValue(usersAtom);
  const groupId = useAtomValue(groupIdAtom);
  const { round: currentRound } = useAtomValue(groupAtom);

  const { sendSystemMessage } = useChat();

  // propsとatomデータからUI状態を計算
  const { modalTitle, defaultItem, defaultComment, isEditMode, editContext } =
    getItemSelectUIState(userId, round, selections, users);

  const { upsertSelection } = useSelection();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(
      getValidationSchema(isEditMode, selections, currentRound, defaultItem),
    ),
    mode: 'onChange',
    defaultValues: {
      item: defaultItem,
      comment: defaultComment,
    },
  });

  const onFormSubmit = async (data: { item: string; comment: string }) => {
    try {
      await upsertSelection({
        groupId,
        userId,
        item: data.item,
        comment: data.comment,
        round,
        currentSelections: selections,
      });
      if (currentRound !== round && defaultItem !== data.item) {
        await sendSystemMessage(
          groupId,
          `[${round}R-${editContext?.playerName}] ${defaultItem}→${data.item}`,
        );
      }
      onClose();
      reset();
    } catch (error) {
      console.error('アイテム選択エラー:', error);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      reset();
    }
  };

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={handleClose}
      title={modalTitle}
      actions={{
        cancel: {
          text: 'キャンセル',
          onClick: handleClose,
        },
        submit: {
          text: '決定',
          type: 'submit',
          form: formId,
          loading: isSubmitting,
          disabled: isSubmitting,
        },
      }}
    >
      <VStack
        as="form"
        id={formId}
        onSubmit={handleSubmit(onFormSubmit)}
        gap={4}
        w="full"
      >
        {editContext && (
          <Box w="full" p={3} bg="gray.50" borderRadius="md">
            <VStack gap={2} align="start">
              <HStack>
                <Text fontSize="xs" color="gray.600">
                  ラウンド:
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  Round {editContext.round}
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="xs" color="gray.600">
                  プレイヤー:
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {editContext.playerName}
                </Text>
              </HStack>
            </VStack>
          </Box>
        )}

        <VStack gap={2} align="start" w="full">
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            アイテム名
          </Text>
          <Input
            {...register('item')}
            placeholder="アイテム名を入力してください"
            maxLength={MAX_ITEM_LENGTH}
            size="lg"
            error={!!errors.item}
          />
          {errors.item && (
            <Text fontSize="sm" color="red.500">
              {errors.item.message}
            </Text>
          )}
        </VStack>

        <VStack gap={2} align="start" w="full">
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            {editContext ? 'カテゴリ' : 'コメント（任意）'}
          </Text>
          <Input
            {...register('comment')}
            placeholder={
              editContext
                ? 'カテゴリを入力してください'
                : 'この選択についてのコメント...'
            }
            maxLength={editContext ? MAX_CATEGORY_LENGTH : MAX_COMMENT_LENGTH}
            size="lg"
            error={!!errors.comment}
          />
          {errors.comment && (
            <Text fontSize="sm" color="red.500">
              {errors.comment.message}
            </Text>
          )}
        </VStack>
      </VStack>
    </ResponsiveModal>
  );
};
