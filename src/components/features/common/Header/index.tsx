'use client';

import { Box, Container, HStack, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/src/components/atoms/Button';

const NAV_LINKS = [
  { href: '/guide', label: '使い方' },
  { href: '/faq', label: 'FAQ' },
] as const;

type HeaderProps = {
  onCreateRoom?: () => void;
};

export const Header = ({ onCreateRoom }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
    >
      <Container maxW="container.lg">
        <HStack h={14} justify="space-between">
          {/* ロゴ */}
          <Link asChild _hover={{ textDecoration: 'none' }}>
            <NextLink href="/">
              <Text
                fontSize={['md', 'lg']}
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

          {/* ナビゲーション */}
          <HStack gap={[2, 4]}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                asChild
                color={pathname === link.href ? 'blue.600' : 'gray.600'}
                fontWeight={pathname === link.href ? 'bold' : 'medium'}
                fontSize={['sm', 'md']}
                _hover={{ color: 'blue.500', textDecoration: 'none' }}
                transition="color 0.15s ease"
              >
                <NextLink href={link.href}>{link.label}</NextLink>
              </Link>
            ))}

            {/* ルーム作成ボタン（PC版のみ） */}
            {onCreateRoom && (
              <Box display={['none', 'block']}>
                <Button variant="primary" size="sm" onClick={onCreateRoom}>
                  ルームを作成
                </Button>
              </Box>
            )}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
