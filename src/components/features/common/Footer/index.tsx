'use client';

import { Box, Container, HStack, Link, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

const FOOTER_LINKS = [
  { href: '/guide', label: '使い方ガイド' },
  { href: '/faq', label: 'よくある質問' },
] as const;

export const Footer = () => {
  return (
    <Box as="footer" bg="gray.50" borderTop="1px solid" borderColor="gray.200">
      <Container maxW="container.lg" py={8}>
        <VStack gap={4}>
          {/* ロゴ */}
          <Link asChild _hover={{ textDecoration: 'none' }}>
            <NextLink href="/">
              <Text
                fontSize="lg"
                fontWeight="bold"
                bgGradient="to-r"
                gradientFrom="blue.500"
                gradientTo="purple.500"
                bgClip="text"
              >
                みんなでドラフト
              </Text>
            </NextLink>
          </Link>

          {/* ナビゲーションリンク */}
          <HStack gap={6}>
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                asChild
                color="gray.600"
                fontSize="sm"
                _hover={{ color: 'blue.500', textDecoration: 'none' }}
                transition="color 0.15s ease"
              >
                <NextLink href={link.href}>{link.label}</NextLink>
              </Link>
            ))}
          </HStack>

          {/* コピーライト */}
          <Text fontSize="xs" color="gray.500">
            © 2024 みんなでドラフト
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
