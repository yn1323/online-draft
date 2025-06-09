import { COMPONENT_THEMES } from '@/src/constants/theme';
import {
  Box,
  Flex,
  Grid,
  HStack,
  IconButton,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Collapsible } from '@chakra-ui/react';

interface PastRoundRowProps {
  round: {
    roundNumber: number;
    topic: string;
    selections: {
      userId: string;
      userName: string;
      item: string;
      comment?: string;
    }[];
  };
  participants: {
    id: string;
    name: string;
    avatar: string;
    status: 'thinking' | 'entered' | 'completed';
  }[];
  onRoundClick: (roundNumber: number) => void;
  onUserClick: (roundNumber: number, userId: string) => void;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const PastRoundRow = ({
  round,
  participants,
  onRoundClick,
  onUserClick,
  isExpanded = true,
  onToggleExpand,
}: PastRoundRowProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const theme = COMPONENT_THEMES.pastRound;

  // SP用の縦型レイアウト（折りたたみ機能付き）
  if (isMobile) {
    return (
      <Box
        bg="white"
        border="1px solid"
        borderColor={theme.light.borderColor}
        borderRadius="lg"
        transition="all 0.2s ease"
        _dark={{
          bg: 'gray.800/80',
          borderColor: theme.dark.borderColor,
        }}
      >
        {/* ヘッダー部分（常時表示 + アクションボタン） */}
        <HStack justify="space-between" align="center" p={4}>
          {/* 左側：ラウンド情報（折りたたみ領域） */}
          <HStack
            gap={2}
            flex={1}
            cursor="pointer"
            onClick={onToggleExpand}
            _hover={{
              bg: 'green.50',
              _dark: { bg: 'green.900/40' },
            }}
            borderRadius="md"
            p={2}
            mx={-2}
          >
            <Text
              fontWeight="bold"
              color="green.800"
              fontSize="lg"
              _dark={{ color: 'green.200' }}
            >
              ラウンド {round.roundNumber}
            </Text>
          </HStack>

          {/* 右側：アクションボタン */}
          <HStack gap={1}>
            {/* 詳細モーダルボタン */}
            <IconButton
              aria-label="ラウンド詳細を見る"
              size="sm"
              variant="ghost"
              colorPalette="green"
              onClick={(e) => {
                e.stopPropagation();
                onRoundClick(round.roundNumber);
              }}
            >
              <Text fontSize="sm">✏️</Text>
            </IconButton>

            {/* 折りたたみボタン */}
            {onToggleExpand && (
              <IconButton
                aria-label={isExpanded ? '詳細を閉じる' : '詳細を見る'}
                size="sm"
                variant="ghost"
                colorPalette="green"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleExpand();
                }}
              >
                <Text fontSize="lg">{isExpanded ? '▲' : '▼'}</Text>
              </IconButton>
            )}
          </HStack>
        </HStack>

        {/* 詳細部分（折りたたみ対応） */}
        <Collapsible.Root open={isExpanded}>
          <Collapsible.Content>
            <Box px={4} pb={4}>
              <Box h="1px" bg="green.100" mb={3} _dark={{ bg: 'green.800' }} />

              {/* 参加者の選択一覧 */}
              <VStack gap={3} align="stretch">
                {participants.map((participant) => {
                  const selection = round.selections.find(
                    (s) => s.userId === participant.id,
                  );
                  return (
                    <HStack
                      key={participant.id}
                      justify="space-between"
                      align="center"
                      p={2}
                      bg="green.25"
                      borderRadius="md"
                      cursor="pointer"
                      transition="all 0.2s ease"
                      onClick={() =>
                        onUserClick(round.roundNumber, participant.id)
                      }
                      _hover={{
                        bg: 'green.100',
                        transform: 'translateY(-1px)',
                        _dark: { bg: 'green.800/40' },
                      }}
                      _dark={{ bg: 'green.900/20' }}
                    >
                      <HStack gap={2} flex={1} alignItems="center">
                        <Text fontSize="lg">{participant.avatar}</Text>
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          color="gray.700"
                          _dark={{ color: 'gray.300' }}
                          minW="fit-content"
                        >
                          {participant.name}
                        </Text>
                      </HStack>

                      <Box flex={2} textAlign="right">
                        {selection ? (
                          <VStack gap={1} align="flex-end">
                            <Text
                              fontSize="sm"
                              fontWeight="bold"
                              color="gray.800"
                              _dark={{ color: 'gray.200' }}
                              lineHeight="1.2"
                              wordBreak="break-all"
                            >
                              {selection.item}
                            </Text>
                            {selection.comment && (
                              <Text
                                fontSize="xs"
                                color="green.600"
                                fontStyle="italic"
                                _dark={{ color: 'green.300' }}
                                lineHeight="1.2"
                              >
                                {selection.comment}
                              </Text>
                            )}
                          </VStack>
                        ) : (
                          <Text
                            fontSize="sm"
                            color="gray.400"
                            fontWeight="medium"
                            _dark={{ color: 'gray.500' }}
                          >
                            未参加
                          </Text>
                        )}
                      </Box>
                    </HStack>
                  );
                })}
              </VStack>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>
    );
  }

  // PC用のGrid レイアウト（Tooltip付き）
  return (
    <Grid
      templateColumns={`60px repeat(${participants.length}, 1fr)`}
      gap={3}
      p={3}
      bg="white"
      border="1px solid"
      borderColor="green.200"
      borderRadius="lg"
      transition="all 0.2s ease"
      _dark={{
        bg: 'gray.800/80',
        borderColor: 'green.700',
      }}
      alignItems="center"
    >
      <Flex align="center" justify="center" h="full">
        <Text
          fontWeight="bold"
          color="green.800"
          fontSize="lg"
          _dark={{ color: 'green.200' }}
        >
          {round.roundNumber}
        </Text>
      </Flex>
      {participants.map((participant) => {
        const selection = round.selections.find(
          (s) => s.userId === participant.id,
        );
        return (
          <Box
            key={participant.id}
            textAlign="center"
            px={1}
            cursor="pointer"
            borderRadius="md"
            transition="all 0.2s ease"
            onClick={(e) => {
              e.stopPropagation();
              onUserClick(round.roundNumber, participant.id);
            }}
            _hover={{
              bg: 'green.50',
              transform: 'translateY(-1px)',
              _dark: { bg: 'green.900/40' },
            }}
            p={2}
            mx={-1}
          >
            {selection ? (
              <VStack gap={0.5} minH="44px" justify="center">
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  color="gray.800"
                  lineHeight="1.2"
                  _dark={{ color: 'gray.200' }}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                >
                  {selection.item.length > 6
                    ? `${selection.item.slice(0, 6)}...`
                    : selection.item}
                </Text>
                <Text
                  fontSize="xs"
                  color="green.600"
                  fontStyle="italic"
                  lineHeight="1.2"
                  _dark={{ color: 'green.300' }}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  opacity={selection.comment ? 1 : 0}
                >
                  {selection.comment
                    ? selection.comment.length > 8
                      ? `${selection.comment.slice(0, 8)}...`
                      : selection.comment
                    : 'placeholder'}
                </Text>
              </VStack>
            ) : (
              <Box
                minH="44px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="medium"
                  _dark={{ color: 'gray.500' }}
                >
                  未参加
                </Text>
              </Box>
            )}
          </Box>
        );
      })}
    </Grid>
  );
};
