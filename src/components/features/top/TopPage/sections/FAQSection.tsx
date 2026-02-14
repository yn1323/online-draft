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
import { useTranslations } from 'next-intl';

export const FAQSection = () => {
  const t = useTranslations('top');
  const isMobile = useBreakpointValue({ base: true, md: false });
  const faqItems = t.raw('faq.items') as {
    question: string;
    answer: string;
  }[];

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
            {t('faq.heading')}
          </Heading>

          {isMobile ? (
            <Accordion.Root
              multiple
              variant="enclosed"
              w="full"
              defaultValue={[]}
            >
              {faqItems.map((item, index) => (
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
              {faqItems.map((item) => (
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
