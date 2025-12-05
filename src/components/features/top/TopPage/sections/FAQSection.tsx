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

const FAQ_ITEMS = [
  {
    question: '何人まで参加できますか？',
    answer: '2人から最大8人まで参加できます。',
  },
  {
    question: '料金はかかりますか？',
    answer: '完全無料です。アカウント登録も不要です。',
  },
  {
    question: 'スマホでも使えますか？',
    answer: 'はい、スマホ・PC両対応です。ブラウザだけで利用できます。',
  },
  {
    question: '1回のゲームにどのくらい時間がかかりますか？',
    answer: '10-15分程度でサクッと楽しめます。',
  },
  {
    question: 'どんなジャンルでドラフトできますか？',
    answer: '野球、アニメ、音楽など何でもOKです。自由に入力できます。',
  },
] as const;

export const FAQSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="section" bg="white" py={[12, 16]}>
      <Container maxW="3xl">
        <VStack gap={[8, 10]}>
          <Heading
            as="h2"
            size={['xl', '2xl']}
            color="gray.800"
            textAlign="center"
          >
            よくある質問
          </Heading>

          {isMobile ? (
            <Accordion.Root
              multiple
              variant="enclosed"
              w="full"
              defaultValue={[]}
            >
              {FAQ_ITEMS.map((item, index) => (
                <Accordion.Item key={item.question} value={`faq-${index}`}>
                  <Accordion.ItemTrigger
                    bg="gray.50"
                    _hover={{ bg: 'gray.100' }}
                  >
                    <HStack justify="space-between" w="full" cursor="pointer">
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
            <VStack gap={4} w="full">
              {FAQ_ITEMS.map((item) => (
                <Box
                  key={item.question}
                  w="full"
                  p={5}
                  bg="gray.50"
                  borderRadius="lg"
                >
                  <VStack align="start" gap={2}>
                    <Text fontSize="md" fontWeight="bold" color="gray.800">
                      Q. {item.question}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      A. {item.answer}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  );
};
