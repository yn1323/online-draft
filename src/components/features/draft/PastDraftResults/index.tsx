import { Avatar } from '@/src/components/atoms/Avatar';
import { Card } from '@/src/components/atoms/Card';
import {
  groupAtom,
  selectionsAtom,
  usersAtom,
} from '@/src/components/features/draft/states';
import { Accordion, Box, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import { atom, useAtomValue } from 'jotai';
import type {
  DraftPickType,
  DraftRoundType,
  ParticipantType,
} from '../mockData';

type PastDraftResultsProps = {
  variant?: 'pc' | 'sp';
  onEditClick: ({ userId, round }: { userId?: string; round?: number }) => void;
};

/**
 * 過去のドラフト結果をUI表示用に変換するAtom
 * selectionsとusersを組み合わせてDraftRoundType[]を生成
 */
const pastDraftResultsUIAtom = atom<DraftRoundType[]>((get) => {
  const selections = get(selectionsAtom);
  const users = get(usersAtom);
  const { round: currentRound } = get(groupAtom);

  // 現在のラウンドより前のラウンドの結果のみを取得
  const pastSelections = selections.filter(
    (selection) => selection.round < currentRound,
  );

  // ラウンド別にグループ化
  const roundGroups = pastSelections.reduce(
    (acc, selection) => {
      if (!acc[selection.round]) {
        acc[selection.round] = [];
      }
      acc[selection.round].push(selection);
      return acc;
    },
    {} as Record<number, typeof pastSelections>,
  );

  // DraftRoundType[]に変換
  return Object.entries(roundGroups)
    .map(([round, selections]) => {
      const picks: DraftPickType[] = selections.map((selection, index) => {
        const user = users.find((u) => u.id === selection.userId);
        return {
          order: index + 1,
          userId: selection.userId,
          userName: user?.name || 'Unknown User',
          avatar: user?.avatar || '1',
          item: selection.item,
          comment: selection.comment || '-',
        };
      });

      return {
        round: Number(round),
        picks,
      };
    })
    .sort((a, b) => a.round - b.round);
});

/**
 * 参加者情報をUI表示用に変換するAtom
 */
const participantsUIAtom = atom<ParticipantType[]>((get) => {
  const users = get(usersAtom);

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    avatar: user.avatar,
    acquisitions: [], // 今回は使用しないため空配列
  }));
});

/**
 * 過去のドラフト結果表示の共通コンポーネント
 * PC版: テーブル形式表示
 * SP版: アコーディオン形式表示
 */
/**
 * 過去のドラフト結果表示の共通コンポーネント
 * PC版: テーブル形式表示
 * SP版: アコーディオン形式表示
 */
export const PastDraftResults = ({
  variant = 'sp',
  onEditClick,
}: PastDraftResultsProps) => {
  // Atomからデータを取得
  const pastResults = useAtomValue(pastDraftResultsUIAtom);
  const participants = useAtomValue(participantsUIAtom);
  const { round: currentRound } = useAtomValue(groupAtom);
  if (variant === 'pc') {
    // PC版: テーブル形式
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

    if (currentRound === 1) {
      return (
        <Box flex={1} w="full">
          <Card variant="elevated" size="md">
            <Box h="full" display="flex" flexDirection="column">
              <Text fontSize="md" fontWeight="bold" mb={3}>
                過去のドラフト結果
              </Text>
              <Box
                flex={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                py={8}
              >
                <Text fontSize="sm" color="gray.500" textAlign="center">
                  まだ開票が始まっていません
                  <br />
                  最初のRoundの抽選をお待ちください
                </Text>
              </Box>
            </Box>
          </Card>
        </Box>
      );
    }

    return (
      <Box flex={1} w="full">
        <Card variant="elevated" size="md">
          <Box h="full" display="flex" flexDirection="column">
            <Text fontSize="md" fontWeight="bold" mb={3}>
              過去のドラフト結果
            </Text>

            {/* ヘッダー行（参加者名） */}
            <Grid templateColumns="60px 1fr 1fr 1fr" gap={2} mb={2}>
              <Box {...tableHeaderCellStyle}>Round</Box>
              {participants.map((participant) => (
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
                {pastResults
                  .sort((a, b) => a.round - b.round)
                  .map((roundResult) => (
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
                      {participants.map((participant) => {
                        const pick = roundResult.picks.find(
                          (p: DraftPickType) => p.userId === participant.id,
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
                              onEditClick({
                                round: roundResult.round,
                                userId: participant.id,
                              });
                            }}
                          >
                            {pick ? (
                              <VStack gap={0} align="start" w="full">
                                <Text
                                  fontWeight="medium"
                                  color="gray.800"
                                  truncate
                                >
                                  {pick.item}
                                </Text>
                                <Text color="gray.500" fontSize="2xs">
                                  ({pick.comment})
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
              </VStack>
            </Box>
          </Box>
        </Card>
      </Box>
    );
  }

  // SP版: アコーディオン形式
  if (currentRound === 1) {
    return (
      <VStack gap={2} w="full">
        <Text
          fontSize="md"
          fontWeight="bold"
          color="gray.800"
          alignSelf="start"
        >
          ドラフト結果
        </Text>
        <Box
          w="full"
          py={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.50"
          borderRadius="lg"
          border="1px solid"
          borderColor="gray.200"
        >
          <Text fontSize="sm" color="gray.500" textAlign="center">
            まだ開票が始まっていません
            <br />
            最初のRoundの抽選を開始してください
          </Text>
        </Box>
      </VStack>
    );
  }

  return (
    <VStack gap={2} w="full">
      <Text fontSize="md" fontWeight="bold" color="gray.800" alignSelf="start">
        ドラフト結果
      </Text>

      <Accordion.Root defaultValue={[]} multiple w="full" variant="enclosed">
        {pastResults
          .sort((a, b) => a.round - b.round)
          .map((roundResult) => (
            <Accordion.Item
              key={roundResult.round}
              value={`round-${roundResult.round}`}
            >
              <Accordion.ItemTrigger>
                <HStack justify="space-between" w="full" cursor="pointer">
                  <Text fontSize="sm" fontWeight="bold" color="gray.700">
                    Round {roundResult.round}
                  </Text>
                  <Accordion.ItemIndicator />
                </HStack>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <VStack gap={1} w="full" pt={2}>
                  {roundResult.picks.map((pick: DraftPickType) => (
                    <HStack
                      key={pick.userId}
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
                        onEditClick({
                          round: roundResult.round,
                          userId: pick.userId,
                        });
                      }}
                    >
                      <Avatar
                        avatarNumber={pick.avatar}
                        name={pick.userName}
                        size="xs"
                      />
                      <VStack align="start" gap={0} flex={1}>
                        <Text fontSize="sm" fontWeight="medium">
                          {pick.userName}
                        </Text>
                        <Text fontSize="xs" color="gray.600">
                          {pick.item}
                        </Text>
                        <Text fontSize="xs" color="gray.600">
                          ({pick.comment})
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
  );
};
