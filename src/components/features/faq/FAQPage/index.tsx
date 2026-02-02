'use client';

import {
  Accordion,
  Box,
  Container,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

type FAQCategory = {
  category: string;
  items: {
    question: string;
    answer: string;
  }[];
};

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    category: '基本について',
    items: [
      {
        question: '登録は必要ですか？',
        answer:
          'いいえ、登録不要です！URLにアクセスするだけで今すぐ遊べます。メールアドレスやパスワードの設定も必要ありません。',
      },
      {
        question: '料金はかかりますか？',
        answer:
          '完全無料です！すべての機能を無料で利用できます。追加課金も一切ありません。',
      },
      {
        question: '何人で遊べますか？',
        answer:
          '2〜8人で遊べます。2人でも十分楽しめますが、4〜6人くらいが重複指名も起きやすくて盛り上がります！',
      },
      {
        question: 'どんなジャンルでドラフトできますか？',
        answer:
          '野球選手、アニメキャラ、音楽、映画、旅行先など何でもOK！自由に入力できるので、お題は自分たちで決められます。',
      },
    ],
  },
  {
    category: 'ルームについて',
    items: [
      {
        question: 'ルームに入れないのですが？',
        answer:
          'URLまたはルームIDが正しいか確認してください。また、ルームは24時間で自動削除されるため、古いURLは無効になっている可能性があります。',
      },
      {
        question: '途中参加できますか？',
        answer:
          'はい、ドラフト開始後でも途中参加できます！ロビー画面から「参加する」を選んでください。ただし、過去のラウンドには参加できません。',
      },
      {
        question: 'ルームは何時間有効ですか？',
        answer:
          'ルームは作成から24時間有効です。24時間経過すると自動的に削除されます。',
      },
    ],
  },
  {
    category: 'ドラフトについて',
    items: [
      {
        question: '重複指名ってなんですか？',
        answer:
          '複数人が同じアイテムを指名したときに発生します。ランダム抽選で勝者が決まり、負けた人は別のアイテムを再指名する必要があります。これがドラフトの醍醐味！',
      },
      {
        question: '勝敗はどうやって決まりますか？',
        answer:
          '重複指名が発生した場合、システムがランダムに勝者を決定します。完全にランダムなので、駆け引きを楽しんでください！',
      },
      {
        question: '何ラウンドまでできますか？',
        answer:
          'ラウンド数に制限はありません！好きなだけ続けられます。参加者で相談して終了タイミングを決めてください。',
      },
      {
        question: '指名を変更できますか？',
        answer:
          'はい、全員が指名発表するまでは何度でも変更できます。「指名を変更する」ボタンから修正してください。',
      },
    ],
  },
  {
    category: '通信・端末について',
    items: [
      {
        question: '音声通話機能はありますか？',
        answer:
          '現在、音声通話機能は搭載していません。LINE、Discord、Zoomなどの音声通話アプリと併用していただくことをおすすめします。チャット機能はあります！',
      },
      {
        question: 'スマホでも使えますか？',
        answer:
          'はい、スマホ・タブレット・PCすべて対応しています！ブラウザだけで利用でき、アプリのインストールは不要です。',
      },
      {
        question: '通信が切れたらどうなりますか？',
        answer:
          '同じURLにアクセスし直せば復帰できます。ブラウザを閉じてしまっても、ルームが有効な間は再参加可能です。',
      },
    ],
  },
];

// 構造化データ用のFAQ全項目
const ALL_FAQ_ITEMS = FAQ_CATEGORIES.flatMap((cat) => cat.items);

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ALL_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const FAQPage = () => {
  const isMobile = useBreakpointValue(
    { base: true, md: false },
    { ssr: false },
  );

  return (
    <Box py={[8, 12]}>
      <Container maxW="container.md">
        <VStack gap={[8, 12]} align="stretch">
          {/* ヘッダー */}
          <VStack gap={4} textAlign="center">
            <Heading as="h1" size={['2xl', '3xl']} color="gray.800">
              よくある質問（FAQ）
            </Heading>
            <Text fontSize={['md', 'lg']} color="gray.600">
              なんでもドラフトについてよくある質問をまとめました
            </Text>
          </VStack>

          {/* FAQ一覧 */}
          <VStack gap={8} align="stretch">
            {FAQ_CATEGORIES.map((category) => (
              <Box key={category.category}>
                <Heading
                  as="h2"
                  size={['md', 'lg']}
                  color="gray.700"
                  mb={4}
                  pb={2}
                  borderBottom="2px solid"
                  borderColor="blue.200"
                >
                  {category.category}
                </Heading>

                {isMobile ? (
                  <Accordion.Root
                    multiple
                    variant="enclosed"
                    w="full"
                    defaultValue={[]}
                  >
                    {category.items.map((item, index) => (
                      <Accordion.Item
                        key={item.question}
                        value={`${category.category}-${index}`}
                      >
                        <Accordion.ItemTrigger
                          bg="gray.50"
                          _hover={{ bg: 'gray.100' }}
                        >
                          <HStack
                            justify="space-between"
                            w="full"
                            cursor="pointer"
                          >
                            <Text
                              fontSize="sm"
                              fontWeight="bold"
                              color="gray.700"
                              textAlign="left"
                            >
                              Q. {item.question}
                            </Text>
                            <Accordion.ItemIndicator />
                          </HStack>
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                          <Box py={3} px={1}>
                            <Text fontSize="sm" color="gray.600">
                              A. {item.answer}
                            </Text>
                          </Box>
                        </Accordion.ItemContent>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                ) : (
                  <VStack gap={3} w="full">
                    {category.items.map((item) => (
                      <Box
                        key={item.question}
                        w="full"
                        p={5}
                        bg="gray.50"
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.200"
                      >
                        <VStack align="start" gap={2}>
                          <Text
                            fontSize="md"
                            fontWeight="bold"
                            color="gray.800"
                          >
                            Q. {item.question}
                          </Text>
                          <Text
                            fontSize="md"
                            color="gray.600"
                            lineHeight="tall"
                          >
                            A. {item.answer}
                          </Text>
                        </VStack>
                      </Box>
                    ))}
                  </VStack>
                )}
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
