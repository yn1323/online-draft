'use client';

import { Badge, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import { MdDevices, MdFastForward, MdSpeed } from 'react-icons/md';

export default function HeroSection() {
  return (
    <VStack gap={4} textAlign="center" py={8}>
      <Heading
        as="h1"
        size={{ base: '2xl', md: '4xl' }}
        fontWeight="bold"
        color="gray.800"
        _dark={{ color: 'gray.100' }}
      >
        オンラインドラフト会議
      </Heading>

      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        color="gray.600"
        _dark={{ color: 'gray.400' }}
        maxW="600px"
      >
        オンラインでみんなでドラフト
      </Text>

      <HStack justify="center" gap={3} flexWrap="wrap" mt={2}>
        <Badge colorPalette="green" variant="subtle" size="lg">
          <HStack gap={1}>
            <MdFastForward size="16" />
            <Text>簡単セットアップ</Text>
          </HStack>
        </Badge>
        <Badge colorPalette="blue" variant="subtle" size="lg">
          <HStack gap={1}>
            <MdSpeed size="16" />
            <Text>リアルタイム</Text>
          </HStack>
        </Badge>
        <Badge colorPalette="gray" variant="subtle" size="lg">
          <HStack gap={1}>
            <MdDevices size="16" />
            <Text>スマホ対応</Text>
          </HStack>
        </Badge>
      </HStack>
    </VStack>
  );
}
