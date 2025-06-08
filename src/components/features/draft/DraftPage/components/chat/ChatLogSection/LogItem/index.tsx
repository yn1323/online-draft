import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { formatTime, getSystemLogStyle } from './utils';

export interface LogMessage {
  id: string;
  type: 'chat' | 'system' | 'draft_result' | 'selection_change';
  timestamp: Date;
  content: string;
  user?: {
    id: string;
    name: string;
    avatar: string;
  };
  isMyMessage?: boolean;
  selectionChange?: {
    roundNumber: number;
    before: string;
    after: string;
    userName: string;
  };
}

interface LogItemProps {
  log: LogMessage;
}

export const LogItem = ({ log }: LogItemProps) => {
  if (log.type === 'chat' && log.user) {
    return (
      <Flex
        w="full"
        justify={log.isMyMessage ? 'flex-end' : 'flex-start'}
        mb={3}
      >
        <HStack
          maxW="70%"
          gap={2}
          flexDirection={log.isMyMessage ? 'row-reverse' : 'row'}
        >
          <Image
            src={`/img/${log.user.avatar}.png`}
            alt={log.user.name}
            w="32px"
            h="32px"
            borderRadius="md"
            objectFit="cover"
          />
          <VStack gap={1} align={log.isMyMessage ? 'end' : 'start'}>
            <Text fontSize="xs" color="gray.500" _dark={{ color: 'gray.400' }}>
              {log.user.name} • {formatTime(log.timestamp)}
            </Text>
            <Box
              bg={log.isMyMessage ? 'blue.500' : 'gray.100'}
              color={log.isMyMessage ? 'white' : 'gray.800'}
              px={3}
              py={2}
              borderRadius="lg"
              maxW="full"
              border="1px solid"
              borderColor={log.isMyMessage ? 'blue.500' : 'gray.200'}
              _dark={{
                bg: log.isMyMessage ? 'blue.600' : 'gray.600',
                color: log.isMyMessage ? 'white' : 'gray.100',
                borderColor: log.isMyMessage ? 'blue.600' : 'gray.500',
              }}
            >
              <Text fontSize="sm">{log.content}</Text>
            </Box>
          </VStack>
        </HStack>
      </Flex>
    );
  }

  const style = getSystemLogStyle(
    log.type as 'system' | 'draft_result' | 'selection_change'
  );

  if (log.type === 'selection_change' && log.selectionChange) {
    return (
      <Flex justify="center" mb={3}>
        <Box
          bg={style.bg}
          border="1px solid"
          borderColor={style.borderColor}
          borderRadius="md"
          px={4}
          py={3}
          maxW="90%"
          _dark={style._dark}
        >
          <VStack gap={2}>
            <HStack gap={2} justify="center">
              <Text fontSize="sm">{style.icon}</Text>
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="orange.700"
                _dark={{ color: 'orange.200' }}
              >
                Round {log.selectionChange.roundNumber} 選択変更
              </Text>
              <Text
                fontSize="xs"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
              >
                {formatTime(log.timestamp)}
              </Text>
            </HStack>
            <Box
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="sm"
              p={2}
              w="full"
              _dark={{
                bg: 'gray.700',
                borderColor: 'gray.500',
              }}
            >
              <VStack gap={1} fontSize="xs">
                <HStack justify="space-between" w="full">
                  <Text color="gray.600" _dark={{ color: 'gray.300' }}>
                    変更者:
                  </Text>
                  <Text
                    fontWeight="medium"
                    color="gray.800"
                    _dark={{ color: 'gray.100' }}
                  >
                    {log.selectionChange.userName}
                  </Text>
                </HStack>
                <HStack justify="space-between" w="full">
                  <Text color="red.600" _dark={{ color: 'red.300' }}>
                    変更前:
                  </Text>
                  <Text
                    color="red.700"
                    _dark={{ color: 'red.200' }}
                    fontWeight="medium"
                  >
                    {log.selectionChange.before}
                  </Text>
                </HStack>
                <HStack justify="space-between" w="full">
                  <Text color="green.600" _dark={{ color: 'green.300' }}>
                    変更後:
                  </Text>
                  <Text
                    color="green.700"
                    _dark={{ color: 'green.200' }}
                    fontWeight="medium"
                  >
                    {log.selectionChange.after}
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex justify="center" mb={3}>
      <Box
        bg={style.bg}
        border="1px solid"
        borderColor={style.borderColor}
        borderRadius="md"
        px={3}
        py={2}
        maxW="80%"
        _dark={style._dark}
      >
        <HStack gap={2} justify="center">
          <Text fontSize="sm">{style.icon}</Text>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color="gray.800"
            _dark={{ color: 'gray.200' }}
          >
            {log.content}
          </Text>
          <Text fontSize="xs" color="gray.500" _dark={{ color: 'gray.400' }}>
            {formatTime(log.timestamp)}
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};