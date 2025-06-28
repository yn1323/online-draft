import { Avatar } from '@/src/components/atoms/Avatar';
import { Card } from '@/src/components/atoms/Card';
import { useToaster } from '@/src/components/ui/toaster';
import {
  conflictAnalysisAtom,
  conflictResolutionAtom,
  currentEditTargetAtom,
  endConflictResolutionAtom,
  groupAtom,
  selectionsAtom,
  startConflictResolutionAtom,
  usersAtom,
} from '@/src/components/features/draft/states';
import { Accordion, Box, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import type {
  DraftPickType,
  DraftRoundType,
  ParticipantType,
} from '../mockData';

type PastDraftResultsProps = {
  variant?: 'pc' | 'sp';
  onEditClick: ({ userId, round }: { userId?: string; round?: number }) => void;
};

type ConflictStatus = 'none' | 'winner' | 'loser' | 'nextEditTarget';

type EnhancedDraftPickType = DraftPickType & {
  conflictStatus: ConflictStatus;
};

/**
 * 過去のドラフト結果をUI表示用に変換するAtom
 * selectionsとusersを組み合わせて、競合状態を含むDraftRoundType[]を生成
 */
const pastDraftResultsUIAtom = atom<DraftRoundType[]>((get) => {
  const selections = get(selectionsAtom);
  const users = get(usersAtom);
  const { round: currentRound } = get(groupAtom);
  const conflicts = get(conflictAnalysisAtom);
  const currentEditTarget = get(currentEditTargetAtom);

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

  // 競合状態を判定するヘルパー関数
  const getConflictStatus = (userId: string, round: number): ConflictStatus => {
    // 次の編集対象かチェック
    if (
      currentEditTarget?.userId === userId &&
      currentEditTarget?.round === round
    ) {
      return 'nextEditTarget';
    }

    // 該当する競合を検索
    const conflict = conflicts.find((c) => c.round === round);
    if (conflict) {
      const conflictUser = conflict.conflictUsers.find(
        (u) => u.userId === userId,
      );
      if (conflictUser) {
        return conflictUser.isWinner ? 'winner' : 'loser';
      }
    }

    return 'none';
  };

  // DraftRoundType[]に変換
  return Object.entries(roundGroups)
    .map(([round, selections]) => {
      const roundNumber = Number(round);

      // 全参加者ベースでpicksを生成（途中参加ユーザーの空欄対応）
      const picks: EnhancedDraftPickType[] = users.map((user, index) => {
        const selection = selections.find((s) => s.userId === user.id);

        return {
          order: index + 1,
          userId: user.id,
          userName: user.name,
          avatar: user.avatar,
          item: selection?.item || '', // 空の場合は空文字
          comment: selection?.comment || '', // 空の場合は空文字
          conflictStatus: getConflictStatus(user.id, roundNumber),
        };
      });

      return {
        round: roundNumber,
        picks: picks as DraftPickType[], // 型キャストでDraftPickType[]として扱う
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
 * 競合状態に応じたスタイルを取得するヘルパー関数
 */
const getConflictStyle = (conflictStatus: ConflictStatus, hasItem: boolean) => {
  switch (conflictStatus) {
    case 'nextEditTarget':
      // 次の編集対象：強い強調（赤背景＋太いボーダー）
      return {
        bg: 'red.100',
        borderColor: 'red.400',
        borderWidth: '2px',
        borderStyle: 'solid' as const,
        _hover: {
          bg: 'red.150',
          borderColor: 'red.500',
          transition: 'all 0.15s ease',
        },
      };
    case 'loser':
      // 修正待ちの敗者：弱い強調（薄いオレンジ背景＋点線ボーダー）
      return {
        bg: 'orange.50',
        borderColor: 'orange.300',
        borderWidth: '1px',
        borderStyle: 'dashed' as const,
        cursor: 'not-allowed',
        opacity: 0.7,
        _hover: {
          bg: 'orange.50', // hoverしても変化なし
        },
      };
    case 'winner':
    case 'none':
      // 通常（競合勝者・非競合者）：既存スタイル
      return {
        borderColor: hasItem ? 'gray.200' : 'gray.300',
        borderWidth: '1px',
        borderStyle: hasItem ? ('solid' as const) : ('dashed' as const),
        _hover: {
          bg: 'gray.50',
          borderColor: 'gray.300',
          transition: 'all 0.15s ease',
        },
      };
  }
};

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
  const conflicts = useAtomValue(conflictAnalysisAtom);
  const conflictResolution = useAtomValue(conflictResolutionAtom);
  const currentEditTarget = useAtomValue(currentEditTargetAtom);
  const startConflictResolution = useSetAtom(startConflictResolutionAtom);
  const endConflictResolution = useSetAtom(endConflictResolutionAtom);
  const { errorToast } = useToaster();

  // 競合解決モードの自動管理
  useEffect(() => {
    if (conflicts.length > 0 && !conflictResolution.isActive) {
      // 競合が検出されたら自動的に解決モードを開始
      startConflictResolution();
    } else if (conflicts.length === 0 && conflictResolution.isActive) {
      // すべての競合が解決されたら自動的に解決モードを終了
      endConflictResolution();
    }
  }, [
    conflicts.length,
    conflictResolution.isActive,
    startConflictResolution,
    endConflictResolution,
  ]);

  // 競合解決モード中のクリック処理
  const handleEditClick = (userId: string, round: number) => {
    // 競合解決モードがアクティブな場合
    if (conflictResolution.isActive && currentEditTarget) {
      // 次の編集対象の場合のみモーダルを開く
      if (
        currentEditTarget.userId === userId &&
        currentEditTarget.round === round
      ) {
        onEditClick({ userId, round });
      } else {
        // クリックされたカードが競合の敗者かどうかを確認
        const clickedConflict = conflicts.find(
          (c) =>
            c.round === round &&
            c.conflictUsers.some((u) => u.userId === userId && !u.isWinner),
        );

        const targetUser = participants.find(
          (p) => p.id === currentEditTarget.userId,
        );

        if (clickedConflict) {
          // 競合の敗者をクリックした場合
          errorToast(
            `このカードは競合で負けたため編集が必要です。まず${targetUser?.name || '対象ユーザー'}のRound ${currentEditTarget.round}から順番に編集してください。`,
          );
        } else {
          // その他のカードをクリックした場合
          errorToast(
            `競合解決中です。まず${targetUser?.name || '対象ユーザー'}のRound ${currentEditTarget.round}を編集してください。`,
          );
        }
      }
    } else {
      // 通常モードの場合は普通にモーダルを開く
      onEditClick({ userId, round });
    }
  };
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
                        ) as EnhancedDraftPickType | undefined;

                        const hasItem = !!pick?.item;
                        const conflictStatus = pick?.conflictStatus || 'none';
                        const conflictStyle = getConflictStyle(
                          conflictStatus,
                          hasItem,
                        );
                        const isClickable = conflictStatus !== 'loser';

                        return (
                          <Box
                            key={participant.id}
                            {...tableDataCellStyle}
                            {...conflictStyle}
                            cursor={isClickable ? 'pointer' : 'not-allowed'}
                            onClick={() => {
                              handleEditClick(
                                participant.id,
                                roundResult.round,
                              );
                            }}
                          >
                            {pick?.item ? (
                              <VStack gap={0} align="start" w="full">
                                <Text
                                  fontWeight="medium"
                                  color="gray.800"
                                  truncate
                                >
                                  {pick.item}
                                </Text>
                                <Text color="gray.500" fontSize="2xs">
                                  {pick.comment !== ''
                                    ? `(${pick.comment})`
                                    : ' '}
                                </Text>
                              </VStack>
                            ) : (
                              <Text color="gray.400" fontSize="2xs">
                                + 追加
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
                <VStack gap={1} w="full" py={2}>
                  {participants.map((participant) => {
                    const pick = roundResult.picks.find(
                      (p: DraftPickType) => p.userId === participant.id,
                    ) as EnhancedDraftPickType | undefined;

                    const hasItem = !!pick?.item;
                    const conflictStatus = pick?.conflictStatus || 'none';
                    const conflictStyle = getConflictStyle(
                      conflictStatus,
                      hasItem,
                    );
                    const isClickable = conflictStatus !== 'loser';

                    return (
                      <HStack
                        key={participant.id}
                        w="full"
                        p={1.5}
                        {...conflictStyle}
                        borderRadius="md"
                        cursor={isClickable ? 'pointer' : 'not-allowed'}
                        onClick={() => {
                          handleEditClick(participant.id, roundResult.round);
                        }}
                      >
                        <Avatar
                          avatarNumber={participant.avatar}
                          name={participant.name}
                          size="xs"
                        />
                        <VStack align="start" gap={0} flex={1}>
                          <Text fontSize="sm" fontWeight="medium">
                            {participant.name}
                          </Text>
                          {pick?.item ? (
                            <>
                              <Text fontSize="sm" color="gray.600">
                                {pick.item}
                              </Text>
                              <Text
                                fontSize="xs"
                                color="gray.600"
                                py={pick.comment !== '' ? 0 : 2}
                              >
                                {pick.comment !== '' ? `(${pick.comment})` : ''}
                              </Text>
                            </>
                          ) : (
                            <Text fontSize="xs" color="gray.400" py={2}>
                              + 追加
                            </Text>
                          )}
                        </VStack>
                      </HStack>
                    );
                  })}
                </VStack>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
      </Accordion.Root>
    </VStack>
  );
};
