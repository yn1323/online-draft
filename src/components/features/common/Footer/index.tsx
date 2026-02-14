'use client';

import { Box, Container, HStack, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/navigation';

const FOOTER_LINKS = [
  { href: '/guide', labelKey: 'footer.guideLink' },
  { href: '/faq', labelKey: 'footer.faqLink' },
] as const;

export const Footer = () => {
  const t = useTranslations('common');

  return (
    <Box as="footer" bg="gray.50" borderTop="1px solid" borderColor="gray.200">
      <Container maxW="container.lg" py={8}>
        <VStack gap={4}>
          {/* ロゴ */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Text
              fontSize="lg"
              fontWeight="bold"
              bgGradient="to-r"
              gradientFrom="blue.500"
              gradientTo="purple.500"
              bgClip="text"
            >
              {t('brandName')}
            </Text>
          </Link>

          {/* ナビゲーションリンク */}
          <HStack gap={6}>
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ textDecoration: 'none' }}
              >
                <Text
                  color="gray.600"
                  fontSize="sm"
                  _hover={{ color: 'blue.500' }}
                  transition="color 0.15s ease"
                >
                  {t(link.labelKey)}
                </Text>
              </Link>
            ))}
          </HStack>

          {/* コピーライト */}
          <Text fontSize="xs" color="gray.500">
            {t('footer.copyright')}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
