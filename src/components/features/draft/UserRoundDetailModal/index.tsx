'use client';

import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import {
  Box,
  HStack,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

type RoundSelection = {
  userId: string;
  userName: string;
  item: string;
  comment?: string;
};

type Participant = {
  id: string;
  name: string;
  avatar: string;
};

type UserRoundDetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  roundNumber: number;
  participant: Participant;
  initialSelection?: RoundSelection;
  onSaveSelection: (roundNumber: number, selection: RoundSelection) => void;
};

export const UserRoundDetailModal = ({
  isOpen,
  onClose,
  roundNumber,
  participant,
  initialSelection,
  onSaveSelection,
}: UserRoundDetailModalProps) => {
  const [item, setItem] = useState('');
  const [comment, setComment] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  // モーダルが開くたびに初期値をセット
  useEffect(() => {
    if (isOpen) {
      const initialItem = initialSelection?.item || '';
      const initialComment = initialSelection?.comment || '';
      setItem(initialItem);
      setComment(initialComment);
      setHasChanges(false);
    }
  }, [isOpen, initialSelection]);

  // 変更を検知
  useEffect(() => {
    const currentItem = item.trim();
    const currentComment = comment.trim();
    const originalItem = initialSelection?.item || '';
    const originalComment = initialSelection?.comment || '';

    setHasChanges(
      currentItem !== originalItem || currentComment !== originalComment,
    );
  }, [item, comment, initialSelection]);

  const handleSave = () => {
    const trimmedItem = item.trim();
    if (!trimmedItem) {
      return; // 空の選択は保存しない
    }

    const selection: RoundSelection = {
      userId: participant.id,
      userName: participant.name,
      item: trimmedItem,
      comment: comment.trim() || undefined,
    };

    onSaveSelection(roundNumber, selection);
    onClose();
  };

  const handleCancel = () => {
    setItem(initialSelection?.item || '');
    setComment(initialSelection?.comment || '');
    setHasChanges(false);
    onClose();
  };

  const handleClose = () => {
    if (hasChanges) {
      if (confirm('未保存の変更があります。閉じますか？')) {
        handleCancel();
      }
    } else {
      handleCancel();
    }
  };

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={handleClose}
      title={`ラウンド ${roundNumber}: ${participant.name}の選択`}
      actions={{
        cancel: {
          text: 'キャンセル',
          onClick: handleCancel,
        },
        submit: {
          text: '保存',
          colorPalette: 'green',
          disabled: !hasChanges || !item.trim(),
          onClick: handleSave,
        },
      }}
    >
      <VStack gap={6} align="stretch" w="full">
        {/* ユーザー情報 */}
        <HStack gap={3} justify="center">
          <Image
            src={`/img/${participant.avatar}.png`}
            alt={participant.name}
            width="48px"
            height="48px"
            borderRadius="md"
            objectFit="cover"
          />
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: 'gray.200' }}
          >
            {participant.name}
          </Text>
        </HStack>

        {/* 選択入力 */}
        <VStack gap={4} align="stretch">
          <Box>
            <Text
              fontSize="sm"
              fontWeight="medium"
              mb={2}
              color="gray.600"
              _dark={{ color: 'gray.400' }}
            >
              選択 *
            </Text>
            <Input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              placeholder="選択を入力してください..."
              size="lg"
              borderWidth={2}
              borderColor="gray.300"
              _focus={{
                borderColor: 'green.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-green-500)',
              }}
              _dark={{
                borderColor: 'gray.600',
                bg: 'gray.700',
                _focus: {
                  borderColor: 'green.400',
                  boxShadow: '0 0 0 1px var(--chakra-colors-green-400)',
                },
              }}
            />
          </Box>

          <Box>
            <Text
              fontSize="sm"
              fontWeight="medium"
              mb={2}
              color="green.600"
              _dark={{ color: 'green.300' }}
            >
              コメント（任意）
            </Text>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="選択理由やコメントを入力してください..."
              rows={3}
              resize="none"
              size="lg"
              borderWidth={2}
              borderColor="gray.300"
              _focus={{
                borderColor: 'green.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-green-500)',
              }}
              _dark={{
                borderColor: 'gray.600',
                bg: 'gray.700',
                _focus: {
                  borderColor: 'green.400',
                  boxShadow: '0 0 0 1px var(--chakra-colors-green-400)',
                },
              }}
            />
          </Box>
        </VStack>
      </VStack>
    </ResponsiveModal>
  );
};
