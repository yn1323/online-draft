'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  name: string;
  items: FAQItem[];
};

export const FAQPage = () => {
  const t = useTranslations('faq');

  const categories = t.raw('categories') as FAQCategory[];

  return (
    <Box py={[8, 12]}>
      <Container maxW="container.md">
        <VStack gap={[8, 12]} align="stretch">
          {/* ヘッダー */}
          <VStack gap={4} textAlign="center">
            <Heading as="h1" size={['2xl', '3xl']} color="gray.800">
              {t('pageTitle')}
            </Heading>
            <Text fontSize={['md', 'lg']} color="gray.600">
              {t('pageSubtitle')}
            </Text>
          </VStack>

          {/* FAQ一覧 */}
          <VStack gap={8} align="stretch">
            {categories.map((category) => (
              <Box key={category.name}>
                <Heading
                  as="h2"
                  size={['md', 'lg']}
                  color="gray.700"
                  mb={4}
                  pb={2}
                  borderBottom="2px solid"
                  borderColor="blue.200"
                >
                  {category.name}
                </Heading>

                <VStack gap={3} w="full">
                  {category.items.map((item) => (
                    <Box
                      key={item.question}
                      w="full"
                      p={[4, 5]}
                      bg="gray.50"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <VStack align="start" gap={2}>
                        <Text
                          fontSize={['sm', 'md']}
                          fontWeight="bold"
                          color="gray.800"
                        >
                          Q. {item.question}
                        </Text>
                        <Text
                          fontSize={['sm', 'md']}
                          color="gray.600"
                          lineHeight="tall"
                        >
                          A. {item.answer}
                        </Text>
                      </VStack>
                    </Box>
                  ))}
                </VStack>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
