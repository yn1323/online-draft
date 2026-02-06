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

export const GUIDE_STEPS = [
  {
    step: 1,
    title: '無料でドラフトルームを作成',
    description:
      'トップページの「ルームを作成する」ボタンをタップして、ドラフト会議のルーム名を入力するだけ！登録不要で、あっという間にルームが作成できます。専用のURLが発行されるので、友達にシェアして招待しよう！',
    icon: LuSparkles,
    color: 'blue',
  },
  {
    step: 2,
    title: '友達をオンラインドラフトに招待',
    description:
      'ルームのURLをLINE・Discord・SNSなどで友達にシェアするだけ！リンクを開くだけで参加できるので、アプリのインストールは不要です。2〜8人が揃ったらオンラインドラフト会議の準備完了！',
    icon: LuUsers,
    color: 'green',
  },
  {
    step: 3,
    title: 'ドラフト会議スタート！',
    description:
      '参加者が揃ったらドラフト会議スタート！各ラウンドで欲しいアイテムを指名して、全員の選択が揃ったら一斉に発表。同じアイテムを選んだ人がいたら「重複指名」が発生し、ランダム抽選で勝負！ドキドキの駆け引きを楽しもう！',
    icon: LuCircleCheckBig,
    color: 'purple',
  },
] as const;

const RULES = [
  {
    title: 'ドラフト指名のやり方',
    description:
      '各ラウンドで「指名する」ボタンをタップして、欲しいアイテムの名前を入力するだけ！コメントも一緒に添えられるので、選んだ理由やアピールポイントを伝えよう！',
  },
  {
    title: '重複指名（かぶり）が起きたときのルール',
    description:
      '同じアイテムを複数人が指名すると「重複指名（かぶり）」が発生！完全ランダムの抽選で勝者が1人決まり、外れた人は別のアイテムを再指名します。「かぶるかも...」という読み合いが、オンラインドラフト会議の醍醐味です！',
  },
  {
    title: 'ラウンドの進行と終了のタイミング',
    description:
      '全員の指名が確定したら「指名発表」ボタンで一斉公開！重複指名の抽選を解決したら次のラウンドに進みます。ラウンド数に上限はなく、参加者同士で自由に決められます。好きなだけドラフト会議を楽しもう！',
  },
] as const;

const FEATURES = [
  {
    title: 'リアルタイムチャット機能',
    description:
      'オンラインドラフト会議中にリアルタイムでチャットができる！指名の感想や駆け引きのやり取りをテキストで楽しめます。さらにLINE通話・Discord・Zoomなどの音声通話と併用すると盛り上がり度がアップ！',
    icon: LuMessageCircle,
  },
  {
    title: 'ドキドキの開票演出',
    description:
      '指名発表時に臨場感あふれる開票演出を搭載！「誰が何を指名したか」が順番に明かされ、重複指名（かぶり）が起きるたびに盛り上がること間違いなし。オンラインでも友達と一緒にドキドキの瞬間を共有できます。',
    icon: LuSparkles,
  },
] as const;

const TIPS = [
  'ドラフト会議の前にお題（テーマ）を決めておくとスムーズにスタートできる！',
  '参加人数が増えるほど重複指名（かぶり）が起きやすくなって盛り上がる！4〜6人がおすすめ！',
  'LINE通話やDiscordの音声通話と併用するとオンラインドラフト会議が100倍楽しい！',
  '途中参加も可能！遅れた友達もURLを開いてロビーから参加できるよ。',
] as const;

export const GuidePage = () => {
  return (
    <Box py={[8, 12]}>
      <Container maxW="container.md">
        <VStack gap={[10, 14]} align="stretch">
          {/* ヘッダー */}
          <VStack gap={4} textAlign="center">
            <Heading as="h1" size={['2xl', '3xl']} color="gray.800">
              オンラインドラフト会議の使い方ガイド
            </Heading>
            <Text fontSize={['md', 'lg']} color="gray.600">
              登録不要・完全無料！なんでもドラフトの遊び方を30秒でマスター！
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
                野球選手、サッカー選手、アニメキャラ、好きな曲、行きたい旅行先...どんなお題でもOK！
                <br />
                なんでもドラフトは、友達とリアルタイムでオンラインドラフト会議が楽しめる無料Webアプリです。
                <br />
                <br />
                <strong>登録もアプリも不要</strong>
                で、スマホでもPCでもブラウザからすぐに遊べます。
                <br />
                2〜8人で参加でき、同じアイテムを選んだら「重複指名（かぶり）」が発生してランダム抽選！
                <br />
                誰が何を狙っているか読み合う、ワクワクのドラフト体験をオンラインで楽しもう！
              </Text>
            </VStack>
          </Box>

          {/* オンラインドラフト会議の始め方（3ステップ） */}
          <VStack gap={6} align="stretch">
            <Heading as="h2" size={['lg', 'xl']} color="gray.800">
              オンラインドラフト会議の始め方（3ステップ）
            </Heading>

            <VStack gap={4}>
              {GUIDE_STEPS.map((step) => (
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

          {/* なんでもドラフトの便利な機能 */}
          <VStack gap={6} align="stretch">
            <Heading as="h2" size={['lg', 'xl']} color="gray.800">
              なんでもドラフトの便利な機能
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

          {/* ドラフト会議を楽しむTips */}
          <Box
            bg="green.50"
            p={[6, 8]}
            borderRadius="xl"
            border="1px solid"
            borderColor="green.100"
          >
            <VStack gap={4} align="start">
              <Heading as="h2" size={['lg', 'xl']} color="green.700">
                ドラフト会議を楽しむTips
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
