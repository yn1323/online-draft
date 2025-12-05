'use client';

import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { LuGithub, LuLock, LuSmartphone, LuWallet } from 'react-icons/lu';

import { Button } from '@/src/components/atoms/Button';
import { Input } from '@/src/components/atoms/Input';

type HeroSectionProps = {
  onCreateRoom: () => void;
  onJoinRoom: (roomInput: string) => Promise<void>;
  isJoining: boolean;
};

const BADGES = [
  { icon: LuWallet, text: '完全無料', color: 'green' },
  { icon: LuLock, text: '登録不要', color: 'blue' },
  { icon: LuSmartphone, text: 'スマホOK', color: 'purple' },
] as const;

export const HeroSection = ({
  onCreateRoom,
  onJoinRoom,
  isJoining,
}: HeroSectionProps) => {
  const [roomInput, setRoomInput] = useState('');

  const handleJoinSubmit = async () => {
    await onJoinRoom(roomInput);
  };

  return (
    <Box
      as="section"
      background="linear-gradient(135deg, #3182ce, #805ad5, #d53f8c)"
      pt={[12, 16]}
      pb={[8, 12]}
      position="relative"
    >
      <Link
        href="https://github.com/yn1323/online-draft"
        target="_blank"
        rel="noopener noreferrer"
        position="absolute"
        top={4}
        right={4}
        zIndex={10}
      >
        <IconButton
          aria-label="GitHub Repository"
          variant="ghost"
          color="whiteAlpha.800"
          _hover={{
            bg: 'whiteAlpha.200',
            color: 'white',
            transform: 'scale(1.1)',
          }}
          transition="all 0.15s ease"
        >
          <LuGithub size={24} />
        </IconButton>
      </Link>

      <Container maxW="container.md">
        <VStack gap={[6, 8]} align="center">
          {/* タイトルエリア */}
          <VStack gap={3} textAlign="center">
            <Heading
              as="h1"
              size={['3xl', '4xl']}
              fontWeight="black"
              color="white"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
            >
              オンラインドラフト会議
            </Heading>
            <Text fontSize={['lg', 'xl']} fontWeight="bold" color="white">
              推しを選んで、かぶったら勝負！
            </Text>
            <Text fontSize={['md', 'lg']} color="whiteAlpha.900">
              野球・アニメ・音楽...なんでもドラフト
            </Text>
          </VStack>

          {/* CTAエリア */}
          <VStack gap={6} w="full" maxW="sm">
            <Button
              variant="primary"
              size="lg"
              width="full"
              onClick={onCreateRoom}
            >
              ルームを作成する
            </Button>

            {/* 区切り線 */}
            <HStack w="full">
              <Box flex={1} h="1px" bg="whiteAlpha.300" />
              <Text
                color="whiteAlpha.800"
                fontSize="sm"
                px={4}
                fontWeight="medium"
              >
                または
              </Text>
              <Box flex={1} h="1px" bg="whiteAlpha.300" />
            </HStack>

            {/* ルーム参加 */}
            <VStack gap={3} w="full">
              <Text
                color="whiteAlpha.900"
                fontSize={['sm', 'md']}
                fontWeight="medium"
              >
                既存のルームに参加
              </Text>
              <HStack w="full">
                <Input
                  placeholder="ルームURLまたはID"
                  size="lg"
                  value={roomInput}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRoomInput(e.target.value)
                  }
                />
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleJoinSubmit}
                  loading={isJoining}
                  disabled={isJoining}
                >
                  参加
                </Button>
              </HStack>
            </VStack>
          </VStack>

          {/* バッジエリア */}
          <HStack gap={[2, 4]} flexWrap="wrap" justify="center">
            {BADGES.map((badge) => (
              <Badge
                key={badge.text}
                colorPalette={badge.color}
                size="lg"
                variant="solid"
                px={3}
                py={1.5}
                borderRadius="full"
              >
                <HStack gap={1.5}>
                  <Box as={badge.icon} boxSize={4} />
                  <Text fontWeight="bold">{badge.text}</Text>
                </HStack>
              </Badge>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
