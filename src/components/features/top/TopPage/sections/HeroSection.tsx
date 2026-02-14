'use client';

import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { LuLock, LuSmartphone, LuWallet } from 'react-icons/lu';

import { Button } from '@/src/components/atoms/Button';
import { Input } from '@/src/components/atoms/Input';

type HeroSectionProps = {
  onCreateRoom: () => void;
  onJoinRoom: (roomInput: string) => Promise<void>;
  isJoining: boolean;
};

const BADGE_ICONS = [
  { icon: LuWallet, key: 'free' as const, color: 'green' },
  { icon: LuLock, key: 'noSignup' as const, color: 'blue' },
  { icon: LuSmartphone, key: 'mobile' as const, color: 'purple' },
];

export const HeroSection = ({
  onCreateRoom,
  onJoinRoom,
  isJoining,
}: HeroSectionProps) => {
  const t = useTranslations('top');
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
    >
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
              {t('hero.title')}
            </Heading>
            <Text fontSize={['lg', 'xl']} fontWeight="bold" color="white">
              {t('hero.subtitle')}
            </Text>
            <Text fontSize={['md', 'lg']} color="whiteAlpha.900">
              {t('hero.description')}
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
              {t('hero.createRoom')}
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
                {t('hero.or')}
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
                {t('hero.joinExisting')}
              </Text>
              <HStack w="full">
                <Input
                  placeholder={t('hero.roomPlaceholder')}
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
                  {t('hero.joinButton')}
                </Button>
              </HStack>
            </VStack>
          </VStack>

          {/* バッジエリア */}
          <HStack gap={[2, 4]} flexWrap="wrap" justify="center">
            {BADGE_ICONS.map((badge) => (
              <Badge
                key={badge.key}
                colorPalette={badge.color}
                size="lg"
                variant="solid"
                px={3}
                py={1.5}
                borderRadius="full"
              >
                <HStack gap={1.5}>
                  <Box as={badge.icon} boxSize={4} />
                  <Text fontWeight="bold">{t(`hero.badges.${badge.key}`)}</Text>
                </HStack>
              </Badge>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
