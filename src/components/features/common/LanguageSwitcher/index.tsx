'use client';

import { Box, HStack, Text } from '@chakra-ui/react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/src/i18n/navigation';

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: 'ja' | 'en') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <HStack gap={1}>
      <Box
        as="button"
        fontSize={['xs', 'sm']}
        fontWeight={locale === 'ja' ? 'bold' : 'normal'}
        color={locale === 'ja' ? 'blue.600' : 'gray.500'}
        onClick={() => handleLocaleChange('ja')}
        cursor="pointer"
        _hover={{ color: 'blue.500' }}
        transition="color 0.15s ease"
      >
        JP
      </Box>
      <Text fontSize="xs" color="gray.300">
        |
      </Text>
      <Box
        as="button"
        fontSize={['xs', 'sm']}
        fontWeight={locale === 'en' ? 'bold' : 'normal'}
        color={locale === 'en' ? 'blue.600' : 'gray.500'}
        onClick={() => handleLocaleChange('en')}
        cursor="pointer"
        _hover={{ color: 'blue.500' }}
        transition="color 0.15s ease"
      >
        EN
      </Box>
    </HStack>
  );
};
