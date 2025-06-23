import { Box, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import { LuCheck } from 'react-icons/lu';
import { Avatar } from '@/src/components/atoms/Avatar';
import { Button } from '@/src/components/atoms/Button';
import { Card } from '@/src/components/atoms/Card';
import type { ParticipantType } from '../mockData';

type CurrentRoundStatusProps = {
  participants: ParticipantType[];
  currentRound: number;
  variant?: 'pc' | 'sp';
  onItemSelect?: () => void;
  onOpenResult?: () => void;
};

/**
 * 現在のラウンドの参加者選択状況を表示する共通コンポーネント
 * PC版とSP版で表示スタイルを切り替え可能
 */
export const CurrentRoundStatus = ({
  participants,
  currentRound,
  variant = 'sp',
  onItemSelect,
  onOpenResult,
}: CurrentRoundStatusProps) => {
  // 参加者グリッド用の共通スタイル
  const getParticipantCellStyle = (isActive: boolean) => ({
    p: variant === 'pc' ? 2 : 1.5,
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
          fontSize: variant === 'pc' ? '2xs' : 'xs',
          fontWeight: 'bold',
        }
      : {
          gap: 1,
          fontSize: variant === 'pc' ? '2xs' : 'xs',
          color: 'green.600',
        };

  return (
    <Box w="full">
      <Card variant="elevated" size="sm">
        <VStack gap={variant === 'pc' ? 2 : 3} w="full">
          <Text
            fontSize={variant === 'pc' ? 'sm' : 'sm'}
            fontWeight="bold"
            color="gray.800"
          >
            Round {currentRound}
            {variant === 'pc' && ' - 現在の選択状況'}
          </Text>

          <Grid
            templateColumns="1fr 1fr 1fr"
            gap={variant === 'pc' ? 2 : 1}
            w="full"
          >
            {participants.map((participant, index) => {
              // 最後の参加者を選択中とする（モック用）
              const isActive = index === participants.length - 1;
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
                    fontSize={variant === 'pc' ? '2xs' : 'xs'}
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

          {/* 選択アクションボタン */}
          {(onItemSelect || onOpenResult) && (
            <Box w="full" pt={variant === 'pc' ? 1 : 0}>
              {variant === 'pc' ? (
                <HStack gap={2} w="full">
                  {onItemSelect && (
                    <Box flex={1}>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={onItemSelect}
                        width="full"
                      >
                        アイテムを選択する
                      </Button>
                    </Box>
                  )}
                  {onOpenResult && (
                    <Box flex={1}>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={onOpenResult}
                        width="full"
                      >
                        開票する
                      </Button>
                    </Box>
                  )}
                </HStack>
              ) : (
                <VStack gap={2} w="full">
                  {onItemSelect && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={onItemSelect}
                      width="full"
                    >
                      アイテムを選択する
                    </Button>
                  )}
                  {onOpenResult && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={onOpenResult}
                      width="full"
                    >
                      開票する
                    </Button>
                  )}
                </VStack>
              )}
            </Box>
          )}
        </VStack>
      </Card>
    </Box>
  );
};
