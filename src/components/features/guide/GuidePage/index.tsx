'use client';

import {
  Box,
  Container,
  Heading,
  HStack,
  List,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  LuCircleCheckBig,
  LuMessageCircle,
  LuSparkles,
  LuUsers,
} from 'react-icons/lu';

const STEPS = [
  {
    step: 1,
    title: 'ルームを作成する',
    description:
      'トップページの「ルームを作成する」ボタンからルーム名を入力して作成。URLが発行されるので、友達にシェアしよう！',
    icon: LuSparkles,
    color: 'blue',
  },
  {
    step: 2,
    title: '友達を招待する',
    description:
      'ルームURLを友達にシェア！LINEやDiscordで共有すると便利。2〜8人が揃ったらドラフト開始の準備完了！',
    icon: LuUsers,
    color: 'green',
  },
  {
    step: 3,
    title: 'ドラフト開始！',
    description:
      '参加者全員が揃ったらドラフト開始！各ラウンドで指名したいアイテムを選んで、全員の選択が揃ったら一斉に発表。かぶったらランダム抽選で勝負！',
    icon: LuCircleCheckBig,
    color: 'purple',
  },
] as const;

const RULES = [
  {
    title: '指名のやり方',
    description:
      '各ラウンドで「指名する」ボタンをタップして、欲しいアイテムを入力。コメントも添えられるよ！',
  },
  {
    title: '重複指名（かぶり）の仕組み',
    description:
      '同じアイテムを複数人が指名したら「重複指名」発生！ランダム抽選で勝者が決まり、負けた人は別のアイテムを再指名。これがドラフトの醍醐味！',
  },
  {
    title: 'ラウンドの進め方',
    description:
      '全員の指名が確定したら「指名発表」で一斉公開。重複指名を解決したら次のラウンドへ。ラウンド数は自由に決められるよ！',
  },
] as const;

const FEATURES = [
  {
    title: 'チャット機能',
    description:
      'ドラフト画面にチャット機能搭載！盛り上がったら即座にコメントできる。でも音声通話（LINE・Discord等）との併用がおすすめ！',
    icon: LuMessageCircle,
  },
  {
    title: '開票演出',
    description:
      '指名発表時にワクワクする演出が！全員のドキドキを共有しながら結果発表を楽しもう。',
    icon: LuSparkles,
  },
] as const;

const TIPS = [
  '事前にお題（テーマ）を決めておくとスムーズ！',
  '参加者が増えるほど重複指名が起きやすくなって盛り上がる！',
  '音声通話と併用すると100倍楽しい！',
  '途中参加も可能！ロビー画面から参加できるよ。',
] as const;

export const GuidePage = () => {
  return (
    <Box py={[8, 12]}>
      <Container maxW="container.md">
        <VStack gap={[10, 14]} align="stretch">
          {/* ヘッダー */}
          <VStack gap={4} textAlign="center">
            <Heading as="h1" size={['2xl', '3xl']} color="gray.800">
              使い方ガイド
            </Heading>
            <Text fontSize={['md', 'lg']} color="gray.600">
              なんでもドラフトの遊び方を30秒でマスター！
            </Text>
          </VStack>

          {/* なんでもドラフトとは？ */}
          <Box
            bg="blue.50"
            p={[6, 8]}
            borderRadius="xl"
            border="1px solid"
            borderColor="blue.100"
          >
            <VStack gap={4} align="start">
              <Heading as="h2" size={['lg', 'xl']} color="blue.700">
                なんでもドラフトとは？
              </Heading>
              <Text fontSize={['sm', 'md']} color="gray.700" lineHeight="tall">
                野球選手、アニメキャラ、好きな曲、行きたい旅行先...何でもOK！
                <br />
                友達とリアルタイムでドラフト会議ができるWebアプリです。
                <br />
                <br />
                <strong>登録不要・完全無料</strong>
                で、スマホでもPCでもすぐに遊べます。
                <br />
                同じアイテムを選んだら「重複指名」でランダム抽選！
                <br />
                誰が何を狙っているか読み合う、ワクワクのドラフト体験を楽しもう！
              </Text>
            </VStack>
          </Box>

          {/* 基本の流れ（3ステップ） */}
          <VStack gap={6} align="stretch">
            <Heading as="h2" size={['lg', 'xl']} color="gray.800">
              基本の流れ（3ステップ）
            </Heading>

            <VStack gap={4}>
              {STEPS.map((step) => (
                <Box
                  key={step.step}
                  w="full"
                  p={[5, 6]}
                  bg="white"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.200"
                  boxShadow="sm"
                >
                  <HStack gap={4} align="start">
                    <Box
                      p={3}
                      borderRadius="full"
                      bg={`${step.color}.100`}
                      color={`${step.color}.600`}
                    >
                      <Box as={step.icon} boxSize={6} />
                    </Box>
                    <VStack align="start" gap={2} flex={1}>
                      <HStack>
                        <Text
                          fontSize="sm"
                          fontWeight="bold"
                          color={`${step.color}.600`}
                        >
                          STEP {step.step}
                        </Text>
                        <Heading as="h3" size="md" color="gray.800">
                          {step.title}
                        </Heading>
                      </HStack>
                      <Text fontSize={['sm', 'md']} color="gray.600">
                        {step.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </VStack>

          {/* ドラフトのルール */}
          <VStack gap={6} align="stretch">
            <Heading as="h2" size={['lg', 'xl']} color="gray.800">
              ドラフトのルール
            </Heading>

            <VStack gap={3}>
              {RULES.map((rule) => (
                <Box
                  key={rule.title}
                  w="full"
                  p={[4, 5]}
                  bg="gray.50"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <VStack align="start" gap={2}>
                    <Heading as="h3" size="sm" color="gray.800">
                      {rule.title}
                    </Heading>
                    <Text fontSize={['sm', 'md']} color="gray.600">
                      {rule.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </VStack>

          {/* 便利な機能 */}
          <VStack gap={6} align="stretch">
            <Heading as="h2" size={['lg', 'xl']} color="gray.800">
              便利な機能
            </Heading>

            <HStack gap={4} flexWrap="wrap">
              {FEATURES.map((feature) => (
                <Box
                  key={feature.title}
                  flex="1"
                  minW={['full', '280px']}
                  p={[4, 5]}
                  bg="purple.50"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="purple.100"
                >
                  <HStack gap={3} align="start">
                    <Box color="purple.500">
                      <Box as={feature.icon} boxSize={5} />
                    </Box>
                    <VStack align="start" gap={1}>
                      <Heading as="h3" size="sm" color="purple.700">
                        {feature.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600">
                        {feature.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </HStack>
          </VStack>

          {/* Tips */}
          <Box
            bg="green.50"
            p={[6, 8]}
            borderRadius="xl"
            border="1px solid"
            borderColor="green.100"
          >
            <VStack gap={4} align="start">
              <Heading as="h2" size={['lg', 'xl']} color="green.700">
                Tips
              </Heading>
              <List.Root gap={2}>
                {TIPS.map((tip) => (
                  <List.Item
                    key={tip}
                    fontSize={['sm', 'md']}
                    color="gray.700"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Box as={LuCircleCheckBig} color="green.500" boxSize={4} />
                    {tip}
                  </List.Item>
                ))}
              </List.Root>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
