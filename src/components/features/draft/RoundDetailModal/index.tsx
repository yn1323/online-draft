'use client';

import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

type RoundDetailState = {
  editMode: { [userId: string]: boolean };
  tempData: { [userId: string]: { item: string; comment?: string } };
};

type RoundSelection = {
  userId: string;
  userName: string;
  item: string;
  comment?: string;
};

type RoundData = {
  roundNumber: number;
  topic: string;
  selections: RoundSelection[];
};

type Participant = {
  id: string;
  name: string;
  avatar: string;
};

type RoundDetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  roundData: RoundData | null;
  participants: Participant[];
  onSaveSelections: (roundNumber: number, selections: RoundSelection[]) => void;
};

export const RoundDetailModal = ({
  isOpen,
  onClose,
  roundData,
  participants,
  onSaveSelections,
}: RoundDetailModalProps) => {
  const [state, setState] = useState<RoundDetailState>({
    editMode: {},
    tempData: {},
  });

  if (!roundData) {
    return null;
  }

  const toggleEditMode = (userId: string) => {
    setState((prev) => ({
      ...prev,
      editMode: {
        ...prev.editMode,
        [userId]: !prev.editMode[userId],
      },
      tempData: prev.editMode[userId]
        ? prev.tempData
        : {
            ...prev.tempData,
            [userId]: {
              item:
                roundData.selections.find((s) => s.userId === userId)?.item ||
                '',
              comment:
                roundData.selections.find((s) => s.userId === userId)
                  ?.comment || '',
            },
          },
    }));
  };

  const updateTempData = (
    userId: string,
    field: 'item' | 'comment',
    value: string,
  ) => {
    setState((prev) => ({
      ...prev,
      tempData: {
        ...prev.tempData,
        [userId]: {
          ...prev.tempData[userId],
          [field]: value,
        },
      },
    }));
  };

  const hasChanges = () => {
    return Object.keys(state.tempData).some((userId) => {
      const original = roundData.selections.find((s) => s.userId === userId);
      const temp = state.tempData[userId];
      return (
        temp &&
        (temp.item !== (original?.item || '') ||
          temp.comment !== (original?.comment || ''))
      );
    });
  };

  const handleSave = () => {
    const updatedSelections = participants
      .map((participant) => {
        const tempData = state.tempData[participant.id];
        const originalSelection = roundData.selections.find(
          (s) => s.userId === participant.id,
        );

        if (tempData) {
          return {
            userId: participant.id,
            userName: participant.name,
            item: tempData.item,
            comment: tempData.comment,
          };
        }

        return (
          originalSelection || {
            userId: participant.id,
            userName: participant.name,
            item: '',
            comment: '',
          }
        );
      })
      .filter((selection) => selection.item.trim() !== '');

    onSaveSelections(roundData.roundNumber, updatedSelections);
    setState({ editMode: {}, tempData: {} });
    onClose();
  };

  const handleCancel = () => {
    setState({ editMode: {}, tempData: {} });
    onClose();
  };

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={
        hasChanges()
          ? () => {
              if (confirm('未保存の変更があります。閉じますか？')) {
                handleCancel();
              }
            }
          : handleCancel
      }
      title={`ラウンド ${roundData.roundNumber}: ${roundData.topic}`}
      actions={{
        cancel: {
          text: 'キャンセル',
          onClick: handleCancel,
        },
        submit: {
          text: '保存',
          colorPalette: 'green',
          disabled: !hasChanges(),
          onClick: handleSave,
        },
      }}
    >
      <VStack gap={4} align="stretch" w="full">
        {participants.map((participant) => {
          const selection = roundData.selections.find(
            (s) => s.userId === participant.id,
          );
          const isEditing = state.editMode[participant.id];
          const tempData = state.tempData[participant.id];

          return (
            <Box
              key={participant.id}
              p={4}
              borderRadius="lg"
              border="1px solid"
              borderColor="gray.200"
              bg="white"
              _dark={{
                bg: 'gray.800',
                borderColor: 'gray.600',
              }}
            >
              {/* ユーザー情報ヘッダー */}
              <HStack justify="space-between" mb={3}>
                <HStack gap={3}>
                  <Image
                    src={`/img/${participant.avatar}.png`}
                    alt={participant.name}
                    width="32px"
                    height="32px"
                    borderRadius="md"
                    objectFit="cover"
                  />
                  <Text
                    fontWeight="bold"
                    color="gray.800"
                    _dark={{ color: 'gray.200' }}
                  >
                    {participant.name}
                  </Text>
                </HStack>
                <Button
                  size="sm"
                  variant="outline"
                  colorPalette={isEditing ? 'red' : 'green'}
                  onClick={() => toggleEditMode(participant.id)}
                >
                  {isEditing ? 'キャンセル' : '編集'}
                </Button>
              </HStack>

              {/* 選択表示・編集 */}
              <VStack gap={3} align="stretch">
                <Box>
                  {isEditing && (
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      mb={1}
                      color="gray.600"
                      _dark={{ color: 'gray.400' }}
                    >
                      選択
                    </Text>
                  )}

                  {isEditing ? (
                    <Input
                      value={tempData?.item || ''}
                      onChange={(e) =>
                        updateTempData(participant.id, 'item', e.target.value)
                      }
                      placeholder="選択を入力..."
                      size="sm"
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
                  ) : (
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      color="gray.800"
                      _dark={{ color: 'gray.200' }}
                    >
                      {selection?.item || '未選択'}
                    </Text>
                  )}
                </Box>

                <Box>
                  {isEditing && (
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      mb={1}
                      color="green.600"
                      _dark={{ color: 'green.300' }}
                    >
                      コメント
                    </Text>
                  )}

                  {isEditing ? (
                    <Textarea
                      value={tempData?.comment || ''}
                      onChange={(e) =>
                        updateTempData(
                          participant.id,
                          'comment',
                          e.target.value,
                        )
                      }
                      placeholder="コメントを入力..."
                      rows={2}
                      resize="none"
                      size="sm"
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
                  ) : (
                    <Text
                      fontSize="sm"
                      color="green.600"
                      fontStyle={selection?.comment ? 'italic' : 'normal'}
                      _dark={{ color: 'green.300' }}
                    >
                      {selection?.comment || '（コメントなし）'}
                    </Text>
                  )}
                </Box>
              </VStack>
            </Box>
          );
        })}
      </VStack>
    </ResponsiveModal>
  );
};
