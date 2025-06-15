'use client';

import { Avatar } from '@/src/components/atoms/Avatar';
import { Button } from '@/src/components/atoms/Button';
import { Card } from '@/src/components/atoms/Card';
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import {
  Accordion,
  Box,
  Grid,
  HStack,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { LuCheck } from 'react-icons/lu';

/**
 * ドラフト実行画面コンポーネント（スマホ版）
 * タブ形式でリストとチャットを切り替え
 */
export const DraftPageSp = () => {
  // 参加者グリッド用の共通スタイル
  const getParticipantCellStyle = (isActive: boolean) => ({
    p: 1.5,
    bg: isActive ? 'blue.50' : 'green.50',
    border: '1px solid',
    borderColor: isActive ? 'blue.300' : 'green.300',
    borderRadius: 'md',
    gap: 1,
    align: 'center' as const,
    textAlign: 'center' as const,
  });

  const getStatusBadgeStyle = (isActive: boolean) =>
    isActive
      ? {
          bg: 'blue.400',
          color: 'white',
          px: 1,
          py: 0.5,
          borderRadius: 'sm',
          fontSize: 'xs',
          fontWeight: 'bold',
        }
      : {
          gap: 1,
          fontSize: 'xs',
          color: 'green.600',
        };
  // アイテム選択モーダルの状態
  const [isItemSelectModalOpen, setIsItemSelectModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [comment, setComment] = useState('');

  // 編集モーダルの状態
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPick, setEditingPick] = useState<{
    round: number;
    playerId: string;
    playerName: string;
    currentPick: string;
    category: string;
  } | null>(null);

  // アイテム選択確定ハンドラー
  const handleItemSelect = () => {
    if (selectedItem.trim()) {
      console.log('アイテム選択:', { item: selectedItem, comment });
      setIsItemSelectModalOpen(false);
      setSelectedItem('');
      setComment('');
    }
  };

  // ピック編集ハンドラー
  const handleEditClick = (
    round: number,
    playerId: string,
    playerName: string,
    currentPick: string,
    category: string,
  ) => {
    setEditingPick({ round, playerId, playerName, currentPick, category });
    setIsEditModalOpen(true);
  };

  // 編集保存ハンドラー
  const handleEditSave = () => {
    if (editingPick) {
      console.log('ピック編集:', editingPick);
      setIsEditModalOpen(false);
      setEditingPick(null);
    }
  };
  // モックデータ
  const mockParticipants = [
    {
      id: '1',
      name: '田中太郎',
      avatar: '1',
      acquisitions: [
        { name: '大谷翔平', comment: 'やっぱり二刀流！' },
        { name: '佐々木朗希', comment: '完全試合の実績' },
      ],
    },
    {
      id: '2',
      name: '山田花子',
      avatar: '3',
      acquisitions: [{ name: '山本由伸', comment: '最強のエース' }],
    },
    {
      id: '3',
      name: '佐藤次郎',
      avatar: '5',
      acquisitions: [],
    },
  ];

  // 過去のドラフト結果モックデータ
  const pastDraftResults = [
    {
      round: 3,
      picks: [
        {
          order: 1,
          playerId: '2',
          playerName: '山田花子',
          avatar: '3',
          pick: '候補アイテムG',
          category: 'タイプA',
        },
        {
          order: 2,
          playerId: '3',
          playerName: '佐藤次郎',
          avatar: '5',
          pick: '候補アイテムH',
          category: 'タイプB',
        },
        {
          order: 3,
          playerId: '1',
          playerName: '田中太郎',
          avatar: '1',
          pick: '候補アイテムI',
          category: 'タイプC',
        },
      ],
    },
    {
      round: 2,
      picks: [
        {
          order: 1,
          playerId: '3',
          playerName: '佐藤次郎',
          avatar: '5',
          pick: '候補アイテムD',
          category: 'タイプA',
        },
        {
          order: 2,
          playerId: '1',
          playerName: '田中太郎',
          avatar: '1',
          pick: '候補アイテムE',
          category: 'タイプB',
        },
        {
          order: 3,
          playerId: '2',
          playerName: '山田花子',
          avatar: '3',
          pick: '候補アイテムF',
          category: 'タイプC',
        },
      ],
    },
    {
      round: 1,
      picks: [
        {
          order: 1,
          playerId: '1',
          playerName: '田中太郎',
          avatar: '1',
          pick: '候補アイテムA',
          category: 'タイプA',
        },
        {
          order: 2,
          playerId: '2',
          playerName: '山田花子',
          avatar: '3',
          pick: '候補アイテムB',
          category: 'タイプB',
        },
        {
          order: 3,
          playerId: '3',
          playerName: '佐藤次郎',
          avatar: '5',
          pick: '候補アイテムC',
          category: 'タイプC',
        },
      ],
    },
  ];

  const mockMessages = [
    {
      id: '1',
      userName: 'システム',
      avatar: '99',
      content: 'ドラフトを開始しました！',
      timestamp: '14:00',
      isSystem: true,
    },
    {
      id: '2',
      userName: '田中太郎',
      avatar: '1',
      content: '今年は投手中心でいきます！',
      timestamp: '14:01',
    },
    {
      id: '3',
      userName: 'システム',
      avatar: '99',
      content: '第1巡目が完了しました',
      timestamp: '14:05',
      isSystem: true,
    },
    {
      id: '4',
      userName: '山田花子',
      avatar: '3',
      content: '大谷取られた〜😭',
      timestamp: '14:05',
    },
  ];

  return (
    <VStack h="100vh" gap={0}>
      {/* ヘッダー（固定） */}
      <Box
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        p={4}
        w="full"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Text fontSize={['md', 'lg']} fontWeight="bold" textAlign="center">
          ドラフト名がここに入ります
        </Text>
      </Box>

      {/* タブエリア */}
      <Tabs.Root
        defaultValue="draft"
        flex={1}
        display="flex"
        flexDirection="column"
        w="full"
      >
        <Tabs.List>
          <Tabs.Trigger value="draft" flex={1}>
            <Box w="full" textAlign="center">
              ドラフト
            </Box>
          </Tabs.Trigger>
          <Tabs.Trigger value="chat" flex={1}>
            <Box w="full" textAlign="center">
              チャット/ログ
            </Box>
          </Tabs.Trigger>
        </Tabs.List>

        <Box flex={1} overflow="hidden">
          {/* ドラフト状況タブ */}
          <Tabs.Content value="draft" h="full" overflow="auto">
            <VStack gap={3} p={3}>
              {/* 現在ラウンドセクション */}
              <Box w="full">
                <Card variant="elevated" size="sm">
                  <VStack gap={2} w="full">
                    <Text fontSize="sm" fontWeight="bold" color="gray.800">
                      Round 4
                    </Text>

                    <Grid templateColumns="1fr 1fr 1fr" gap={1} w="full">
                      {mockParticipants.map((participant, index) => {
                        const isActive = index === 2;
                        return (
                          <VStack
                            key={participant.id}
                            {...getParticipantCellStyle(isActive)}
                          >
                            <Avatar
                              avatarNumber={participant.avatar}
                              name={participant.name}
                              size="xs"
                            />
                            <Text
                              fontSize="xs"
                              fontWeight="medium"
                              truncate
                              w="full"
                            >
                              {participant.name}
                            </Text>
                            {isActive ? (
                              <Box {...getStatusBadgeStyle(true)}>選択中</Box>
                            ) : (
                              <HStack {...getStatusBadgeStyle(false)}>
                                <LuCheck size={10} />
                                <Text>完了</Text>
                              </HStack>
                            )}
                          </VStack>
                        );
                      })}
                    </Grid>

                    <Box w="full">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => setIsItemSelectModalOpen(true)}
                      >
                        アイテムを選択する
                      </Button>
                    </Box>
                  </VStack>
                </Card>
              </Box>

              {/* 過去ラウンド結果 */}
              <VStack gap={2} w="full">
                <Text
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.800"
                  alignSelf="start"
                >
                  ドラフト結果
                </Text>

                <Accordion.Root
                  defaultValue={[]}
                  multiple
                  w="full"
                  variant="enclosed"
                >
                  {pastDraftResults.reverse().map((roundResult) => (
                    <Accordion.Item
                      key={roundResult.round}
                      value={`round-${roundResult.round}`}
                    >
                      <Accordion.ItemTrigger>
                        <HStack
                          justify="space-between"
                          w="full"
                          cursor="pointer"
                        >
                          <Text
                            fontSize="sm"
                            fontWeight="bold"
                            color="gray.700"
                          >
                            Round {roundResult.round}
                          </Text>
                          <Accordion.ItemIndicator />
                        </HStack>
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent>
                        <VStack gap={1} w="full" pt={2}>
                          {roundResult.picks.map((pick) => (
                            <HStack
                              key={pick.playerId}
                              w="full"
                              p={1.5}
                              bg="gray.50"
                              borderRadius="md"
                              cursor="pointer"
                              _hover={{
                                bg: 'gray.100',
                                transition: 'all 0.15s ease',
                              }}
                              onClick={() => {
                                handleEditClick(
                                  roundResult.round,
                                  pick.playerId,
                                  pick.playerName,
                                  pick.pick,
                                  pick.category,
                                );
                              }}
                            >
                              <Avatar
                                avatarNumber={pick.avatar}
                                name={pick.playerName}
                                size="xs"
                              />
                              <VStack align="start" gap={0} flex={1}>
                                <Text fontSize="sm" fontWeight="medium">
                                  {pick.playerName}
                                </Text>
                                <Text fontSize="xs" color="gray.600">
                                  {pick.pick}
                                </Text>
                                <Text fontSize="xs" color="gray.600">
                                  ({pick.category})
                                </Text>
                              </VStack>
                            </HStack>
                          ))}
                        </VStack>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </VStack>
            </VStack>
          </Tabs.Content>

          {/* チャット・ログタブ */}
          <Tabs.Content value="chat" h="full" overflow="auto" p={3}>
            <VStack gap={2} align="stretch">
              {mockMessages.map((msg) => (
                <HStack key={msg.id} align="start">
                  <Avatar
                    avatarNumber={msg.avatar}
                    name={msg.userName}
                    size="xs"
                  />
                  <VStack align="start" gap={0} flex={1}>
                    <HStack>
                      <Text
                        fontSize="xs"
                        fontWeight="medium"
                        color={msg.isSystem ? 'orange.600' : 'gray.700'}
                      >
                        {msg.userName}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {msg.timestamp}
                      </Text>
                    </HStack>
                    <Text
                      fontSize={['xs', 'sm']}
                      color={msg.isSystem ? 'orange.700' : 'gray.800'}
                    >
                      {msg.content}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

      {/* 入力エリア（固定） - チャット専用 */}
      <Box
        bg="white"
        borderTop="1px"
        borderColor="gray.200"
        p={3}
        w="full"
        position="sticky"
        bottom={0}
      >
        <HStack w="full">
          <Input placeholder="メッセージを入力..." size="md" />
          <Button variant="secondary" size="md">
            送信
          </Button>
        </HStack>
      </Box>

      {/* アイテム選択モーダル */}
      <ResponsiveModal
        isOpen={isItemSelectModalOpen}
        onClose={() => setIsItemSelectModalOpen(false)}
        title="アイテムを選択"
        actions={{
          cancel: {
            text: 'キャンセル',
            onClick: () => setIsItemSelectModalOpen(false),
          },
          submit: {
            text: '決定',
            disabled: !selectedItem.trim(),
            onClick: handleItemSelect,
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
              onChange={setSelectedItem}
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
              onChange={setComment}
              maxLength={100}
              size="lg"
            />
          </VStack>
        </VStack>
      </ResponsiveModal>

      {/* ピック編集モーダル */}
      <ResponsiveModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingPick(null);
        }}
        title="ピックを編集"
        actions={{
          cancel: {
            text: 'キャンセル',
            onClick: () => {
              setIsEditModalOpen(false);
              setEditingPick(null);
            },
          },
          submit: {
            text: '保存',
            colorPalette: 'blue',
            onClick: handleEditSave,
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
                onChange={(value) =>
                  setEditingPick({
                    ...editingPick,
                    currentPick: value,
                  })
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
                onChange={(value) =>
                  setEditingPick({
                    ...editingPick,
                    category: value,
                  })
                }
                maxLength={20}
                size="lg"
              />
            </VStack>
          </VStack>
        )}
      </ResponsiveModal>
    </VStack>
  );
};
