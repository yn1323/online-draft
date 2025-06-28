'use client';

import { Avatar } from '@/src/components/atoms/Avatar';
import { Card } from '@/src/components/atoms/Card';
import type { UserDataType } from '@/src/hooks/firebase/user/useUser';
import { Box, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';

type ParticipantsListProps = {
  users: UserDataType[];
  onJoinClick: () => void;
  onUserSelect: (userId: string) => void;
};

/**
 * 参加者一覧表示コンポーネント
 * 参加者リスト・新規参加ボタン・参加者数を表示
 */
export const ParticipantsList = ({
  users,
  onJoinClick,
  onUserSelect,
}: ParticipantsListProps) => {
  return (
    <Card variant="elevated" size="md">
      <Box w="full">
        <HStack mb={4}>
          <Text fontWeight="bold" fontSize={['md', 'lg']}>
            参加者 ({users.length}人)
          </Text>
        </HStack>

        <VStack gap={4} align="stretch">
          <SimpleGrid columns={[2, 3]} gap={4}>
            {users.map((participant) => (
              <Box
                key={participant.userId}
                p={3}
                bg="white"
                h="110px"
                border="2px solid"
                borderColor="gray.200"
                borderRadius="lg"
                cursor="pointer"
                transition="all 0.15s"
                onClick={() => onUserSelect(participant.userId)}
                _hover={{
                  borderColor: 'blue.400',
                  transform: 'translateY(-2px)',
                  boxShadow: 'md',
                }}
                _active={{
                  transform: 'translateY(0)',
                  boxShadow: 'sm',
                }}
              >
                <HStack gap={3}>
                  <Avatar
                    avatarNumber={participant.avatar}
                    name={participant.userName}
                    size="md"
                  />
                  <VStack align="start" gap={0}>
                    <Text fontSize={['xs', 'sm']} fontWeight="medium">
                      {participant.userName}
                    </Text>
                    <Text fontSize="xs" color="green.500">
                      参加中
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            ))}

            {/* 新規参加ボタン */}
            <Box
              p={3}
              bg="blue.50"
              border="2px dashed"
              borderColor="blue.300"
              borderRadius="lg"
              cursor="pointer"
              transition="all 0.15s"
              onClick={onJoinClick}
              _hover={{
                bg: 'blue.100',
                borderColor: 'blue.400',
                transform: 'translateY(-2px)',
              }}
              _active={{
                transform: 'translateY(0)',
              }}
            >
              <VStack gap={2}>
                <Box
                  w="48px"
                  h="48px"
                  borderRadius="full"
                  bg="blue.200"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="2xl" color="blue.600">
                    ＋
                  </Text>
                </Box>
                <Text
                  fontSize={['xs', 'sm']}
                  color="blue.600"
                  fontWeight="medium"
                  textAlign="center"
                >
                  登録する
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>

          <Box textAlign="center" pt={2}>
            <Text fontSize={['xs', 'sm']} color="blue.500" fontWeight="medium">
              参加者をタップしてドラフトを開始
            </Text>
            <Text fontSize="xs" color="gray.500" mt={1}>
              新規参加は「＋参加する」から・最小2人で開始可能
            </Text>
          </Box>
        </VStack>
      </Box>
    </Card>
  );
};
