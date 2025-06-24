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
  currentUserId?: string;
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
  currentUserId,
  onItemSelect,
  onOpenResult,
}: CurrentRoundStatusProps) => {
  // 参加者グリッド用の共通スタイル
  const getParticipantCellStyle = (isActive: boolean, isCurrentUser: boolean) => ({
    p: variant === 'pc' ? 2 : 1.5,
    bg: isCurrentUser 
      ? isActive 
        ? 'blue.100'  // 自分 & 選択中
        : 'green.100' // 自分 & 完了
      : isActive 
        ? 'blue.50'   // 他人 & 選択中
        : 'green.50', // 他人 & 完了
    border: isCurrentUser ? '2px solid' : '1px solid',
    borderColor: isCurrentUser
      ? isActive
        ? 'blue.500'  // 自分 & 選択中
        : 'green.500' // 自分 & 完了
      : isActive 
        ? 'blue.300'  // 他人 & 選択中
        : 'green.300', // 他人 & 完了
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
              const isCurrentUser = participant.id === currentUserId;
              return (
                <VStack
                  key={participant.id}
                  {...getParticipantCellStyle(isActive, isCurrentUser)}
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
