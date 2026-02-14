'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

import { Button } from '@/src/components/atoms/Button';

type FooterCTASectionProps = {
  onCreateRoom: () => void;
};

export const FooterCTASection = ({ onCreateRoom }: FooterCTASectionProps) => {
  const t = useTranslations('top');

  return (
    <Box
      as="section"
      background="linear-gradient(135deg, #3182ce, #805ad5, #d53f8c)"
      py={[12, 16]}
      pb={[24, 16]}
    >
      <Container maxW="lg">
        <VStack gap={[8, 10]}>
          <Heading
            as="h2"
            size={['xl', '2xl']}
            color="white"
            textAlign="center"
          >
            {t('footerCta.heading')}
          </Heading>

          <Box w={['full', 'auto']} maxW="sm">
            <Button
              variant="secondary"
              size="lg"
              onClick={onCreateRoom}
              width="full"
            >
              {t('footerCta.cta')}
            </Button>
          </Box>

          <Box
            w="full"
            borderTop="1px solid"
            borderColor="whiteAlpha.300"
            pt={8}
            mt={4}
          >
            <Text fontSize="sm" color="whiteAlpha.800">
              {t('footerCta.copyright')}
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
