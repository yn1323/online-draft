'use client';

import {
  Box,
  Card,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LuTarget, LuUsers, LuZap } from 'react-icons/lu';

const SERVICE_FEATURES = [
  {
    icon: LuTarget,
    title: '一斉選択',
    description: '順番待ちなし！全員同時に選んで開票',
    color: 'blue.500',
  },
  {
    icon: LuUsers,
    title: '2-8人対応',
    description: 'URLシェアで簡単参加、リアルタイム同期',
    color: 'green.500',
  },
  {
    icon: LuZap,
    title: '10-15分',
    description: 'サクッと楽しめる、音声通話しながらプレイ',
    color: 'orange.500',
  },
] as const;

export const ServiceSection = () => {
  return (
    <Box as="section" bg="white" py={[12, 16]}>
      <Container maxW="4xl">
        <VStack gap={[8, 10]}>
          <VStack gap={4} textAlign="center">
            <Heading as="h2" size={['xl', '2xl']} color="gray.800">
              オンラインドラフト会議とは？
            </Heading>
            <Text fontSize={['md', 'lg']} color="gray.600" maxW="2xl">
              友達と一緒に「推し」を選び合う
              <br />
              リアルタイムドラフトゲームです。
            </Text>
          </VStack>

          <Grid
            templateColumns={['1fr', 'repeat(3, 1fr)']}
            gap={[4, 6]}
            w="full"
          >
            {SERVICE_FEATURES.map((feature) => (
              <Card.Root key={feature.title} variant="elevated" size="md">
                <Card.Body>
                  <VStack gap={3} py={4}>
                    <Box
                      as={feature.icon}
                      boxSize={[10, 12]}
                      color={feature.color}
                    />
                    <Text
                      fontSize={['lg', 'xl']}
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {feature.title}
                    </Text>
                    <Text
                      fontSize={['sm', 'md']}
                      color="gray.600"
                      textAlign="center"
                    >
                      {feature.description}
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};
