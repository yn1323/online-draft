'use client';

import { Box, Container, HStack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/src/i18n/navigation';

import { Button } from '@/src/components/atoms/Button';
import { LanguageSwitcher } from '@/src/components/features/common/LanguageSwitcher';

const NAV_LINKS = [
  { href: '/guide', labelKey: 'nav.guide' },
  { href: '/faq', labelKey: 'nav.faq' },
] as const;

type HeaderProps = {
  onCreateRoom?: () => void;
};

export const Header = ({ onCreateRoom }: HeaderProps) => {
  const pathname = usePathname();
  const t = useTranslations('common');

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
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Text
              fontSize={['md', 'lg']}
              fontWeight="bold"
              bgGradient="to-r"
              gradientFrom="blue.500"
              gradientTo="purple.500"
              bgClip="text"
            >
              {t('brandName')}
            </Text>
          </Link>

          {/* ナビゲーション */}
          <HStack gap={[2, 4]}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color:
                    pathname === link.href
                      ? 'var(--chakra-colors-blue-600)'
                      : 'var(--chakra-colors-gray-600)',
                  fontWeight: pathname === link.href ? 'bold' : '500',
                  fontSize: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Text
                  fontSize={['sm', 'md']}
                  color={pathname === link.href ? 'blue.600' : 'gray.600'}
                  fontWeight={pathname === link.href ? 'bold' : 'medium'}
                  _hover={{ color: 'blue.500' }}
                  transition="color 0.15s ease"
                >
                  {t(link.labelKey)}
                </Text>
              </Link>
            ))}

            {/* 言語切替 */}
            <LanguageSwitcher />

            {/* ルーム作成ボタン（PC版のみ） */}
            {onCreateRoom && (
              <Box display={['none', 'block']}>
                <Button variant="primary" size="sm" onClick={onCreateRoom}>
                  {t('actions.createRoom')}
                </Button>
              </Box>
            )}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
