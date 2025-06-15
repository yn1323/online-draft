'use client';

import { Avatar } from '@/src/components/atoms/Avatar';
import { Button } from '@/src/components/atoms/Button';
import { Card } from '@/src/components/atoms/Card';
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { LuCheck } from 'react-icons/lu';

/**
 * ドラフト実行画面コンポーネント（PC版）
 * 2カラムレイアウト（7:3）: 左側に現在状況+過去結果、右側にチャット
 */
export const DraftPagePC = () => {
  // テーブル用の共通スタイル
  const tableHeaderCellStyle = {
    p: 2,
    bg: 'gray.100',
    borderRadius: 'md',
    fontSize: 'xs',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    color: 'gray.700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minH: '40px',
  };

  const tableDataCellStyle = {
    p: 2,
    bg: 'white',
    border: '1px solid',
    borderColor: 'gray.200',
    borderRadius: 'md',
    fontSize: 'xs',
    minH: '40px',
    display: 'flex',
    alignItems: 'center',
  };

  const currentRoundCellStyle = {
    p: 2,
    bg: 'orange.100',
    border: '2px solid',
    borderColor: 'orange.400',
    borderRadius: 'md',
    fontSize: 'xs',
    minH: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
      // 実際にはFirestoreに保存、Jotai更新など
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
      // 実際にはFirestoreに保存
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
      currentPick: '候補A (タイプB)',
    },
    { id: '2', name: '山田花子', avatar: '3', currentPick: '候補B (タイプA)' },
    { id: '3', name: '佐藤次郎', avatar: '5', currentPick: '選択中...' },
  ];

  // 過去のドラフト結果モックデータ
  const pastDraftResults = [
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
  ];

  const mockChatMessages = [
    {
      id: '1',
      userName: '田中太郎',
      avatar: '1',
      message: '候補アイテムA選択！',
      timestamp: '14:32',
    },
    {
      id: '2',
      userName: '山田花子',
      avatar: '3',
      message: '候補アイテムBで行きます！',
      timestamp: '14:35',
    },
    {
      id: '3',
      userName: 'システム',
      avatar: '99',
      message: '佐藤次郎さんの選択中です',
      timestamp: '14:38',
      isSystem: true,
    },
  ];

  return (
    <Box bg="gray.50" minH="100vh" py={[4, 8]}>
      <Container maxW="container.xl">
        {/* ヘッダー */}
        <Box mb={6}>
          <Text fontSize={['lg', '2xl']} fontWeight="bold" color="gray.800">
            オンラインドラフト会議
          </Text>
        </Box>

        <Grid templateColumns="7fr 3fr" gap={6} h="calc(100vh - 200px)">
          {/* 左側: ドラフト状況エリア */}
          <GridItem>
            <VStack gap={4} h="full" w="full" align="stretch">
              {/* 上部: 現在ラウンドの選択状況（超コンパクト） */}
              <Box w="full">
                <Card variant="elevated" size="sm">
                  <VStack gap={3} w="full">
                    <Text fontSize="sm" fontWeight="bold" color="gray.800">
                      Round 4 - 現在の選択状況
                    </Text>

                    <Grid templateColumns="1fr 1fr 1fr" gap={2} w="full">
                      {mockParticipants.map((participant, index) => (
                        <Box
                          key={participant.id}
                          p={2}
                          bg={index === 2 ? 'blue.50' : 'green.50'}
                          border="1px solid"
                          borderColor={index === 2 ? 'blue.300' : 'green.300'}
                          borderRadius="md"
                          textAlign="center"
                        >
                          <VStack gap={1}>
                            <Avatar
                              avatarNumber={participant.avatar}
                              name={participant.name}
                              size="xs"
                            />
                            <Text fontSize="2xs" fontWeight="medium" truncate>
                              {participant.name}
                            </Text>
                            {index === 2 ? (
                              <Box
                                bg="blue.400"
                                color="white"
                                px={1}
                                py={0.5}
                                borderRadius="sm"
                                fontSize="2xs"
                                fontWeight="bold"
                              >
                                選択中
                              </Box>
                            ) : (
                              <HStack gap={1} fontSize="2xs" color="green.600">
                                <LuCheck size={10} />
                                <Text>完了</Text>
                              </HStack>
                            )}
                          </VStack>
                        </Box>
                      ))}
                    </Grid>

                    {/* 選択アクション */}
                    <Box w="full" pt={1}>
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

              {/* 下部: 過去のドラフト結果（テーブル風レイアウト） */}
              <Box flex={1} w="full">
                <Card variant="elevated" size="md">
                  <Box h="full" display="flex" flexDirection="column">
                    <Text fontSize="md" fontWeight="bold" mb={3}>
                      過去のドラフト結果
                    </Text>

                    {/* ヘッダー行（参加者名） */}
                    <Grid templateColumns="60px 1fr 1fr 1fr" gap={2} mb={2}>
                      <Box {...tableHeaderCellStyle}>Round</Box>
                      {mockParticipants.map((participant) => (
                        <Box key={participant.id} {...tableHeaderCellStyle}>
                          <HStack gap={1} justify="center">
                            <Avatar
                              avatarNumber={participant.avatar}
                              name={participant.name}
                              size="xs"
                            />
                            <Text>{participant.name}</Text>
                          </HStack>
                        </Box>
                      ))}
                    </Grid>

                    {/* 結果行（スクロール可能） */}
                    <Box flex="1" overflow="auto">
                      <VStack gap={1} align="stretch">
                        {pastDraftResults.map((roundResult) => (
                          <Grid
                            key={roundResult.round}
                            templateColumns="60px 1fr 1fr 1fr"
                            gap={2}
                          >
                            <Box
                              {...tableDataCellStyle}
                              fontSize="sm"
                              fontWeight="bold"
                              textAlign="center"
                              color="gray.800"
                              justifyContent="center"
                            >
                              {roundResult.round}
                            </Box>
                            {mockParticipants.map((participant) => {
                              const pick = roundResult.picks.find(
                                (p) => p.playerId === participant.id,
                              );
                              return (
                                <Box
                                  key={participant.id}
                                  {...tableDataCellStyle}
                                  cursor={pick ? 'pointer' : 'default'}
                                  _hover={
                                    pick
                                      ? {
                                          bg: 'gray.50',
                                          borderColor: 'gray.300',
                                          transition: 'all 0.15s ease',
                                        }
                                      : {}
                                  }
                                  onClick={() => {
                                    if (pick) {
                                      handleEditClick(
                                        roundResult.round,
                                        participant.id,
                                        participant.name,
                                        pick.pick,
                                        pick.category,
                                      );
                                    }
                                  }}
                                >
                                  {pick ? (
                                    <VStack gap={0} align="start" w="full">
                                      <Text
                                        fontWeight="medium"
                                        color="gray.800"
                                        truncate
                                      >
                                        {pick.pick}
                                      </Text>
                                      <Text color="gray.500" fontSize="2xs">
                                        ({pick.category})
                                      </Text>
                                    </VStack>
                                  ) : (
                                    <Text color="gray.400" fontSize="2xs">
                                      -
                                    </Text>
                                  )}
                                </Box>
                              );
                            })}
                          </Grid>
                        ))}

                        {/* 現在ラウンド（Round 4）*/}
                        <Grid templateColumns="60px 1fr 1fr 1fr" gap={2}>
                          <Box
                            {...currentRoundCellStyle}
                            fontSize="sm"
                            fontWeight="bold"
                            textAlign="center"
                            color="orange.800"
                          >
                            4
                          </Box>
                          {mockParticipants.map((participant) => (
                            <Box
                              key={participant.id}
                              {...currentRoundCellStyle}
                            >
                              <Text color="orange.700" fontWeight="medium">
                                [選択中...]
                              </Text>
                            </Box>
                          ))}
                        </Grid>
                      </VStack>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </VStack>
          </GridItem>

          {/* 右側: チャット */}
          <GridItem h="full">
            <Box
              h="full"
              bg="white"
              boxShadow="lg"
              p={4}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
            >
              <Text fontSize={['md', 'lg']} fontWeight="bold" mb={4}>
                チャット
              </Text>
              {/* チャットメッセージエリア */}
              <Box flex="1" overflow="auto" mb={3}>
                <VStack gap={3} align="stretch">
                  {mockChatMessages.map((message) => (
                    <HStack key={message.id} align="start" gap={2}>
                      <Avatar
                        avatarNumber={message.avatar}
                        name={message.userName}
                        size="xs"
                      />
                      <Box
                        p={3}
                        borderRadius="lg"
                        bg={message.isSystem ? 'orange.50' : 'gray.50'}
                        border="1px solid"
                        borderColor={
                          message.isSystem ? 'orange.200' : 'gray.200'
                        }
                        flex={1}
                      >
                        <HStack>
                          <Text
                            fontSize="xs"
                            color={message.isSystem ? 'orange.600' : 'gray.700'}
                            fontWeight="bold"
                          >
                            {message.userName}
                          </Text>
                          <Text fontSize="xs" color="gray.500">
                            {message.timestamp}
                          </Text>
                        </HStack>
                        <Text
                          fontSize={['xs', 'sm']}
                          color={message.isSystem ? 'orange.800' : 'gray.800'}
                          mt={1}
                        >
                          {message.message}
                        </Text>
                      </Box>
                    </HStack>
                  ))}
                </VStack>
              </Box>

              {/* チャット入力エリア */}
              <Box pt={3} borderTop="1px solid" borderColor="gray.200">
                <HStack>
                  <Input placeholder="メッセージを入力..." size="sm" />
                  <Button variant="secondary" size="sm">
                    送信
                  </Button>
                </HStack>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>

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
    </Box>
  );
};
