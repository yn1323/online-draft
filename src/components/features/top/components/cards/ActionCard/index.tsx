'use client';

import { Box, Button, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import type { ReactElement } from 'react';

type ActionCardProps = {
  icon: ReactElement;
  title: string;
  description: string;
  colorScheme: 'green' | 'blue';
  onClick?: () => void;
  href?: string;
  asChild?: boolean;
  isLoading?: boolean;
};

export default function ActionCard({
  icon,
  title,
  description,
  colorScheme,
  onClick,
  href,
  isLoading = false,
}: ActionCardProps) {
  const iconBg = colorScheme === 'green' ? 'green.100' : 'blue.100';
  const iconColor = colorScheme === 'green' ? 'green.700' : 'blue.700';
  const darkIconBg = colorScheme === 'green' ? 'green.900/30' : 'blue.900/30';
  const darkIconColor = colorScheme === 'green' ? 'green.300' : 'blue.300';

  const content = (
    <>
      <Box
        p={3}
        bg={iconBg}
        borderRadius="full"
        color={iconColor}
        _dark={{ bg: darkIconBg, color: darkIconColor }}
      >
        {icon}
      </Box>
      <VStack gap={1}>
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" opacity={0.8}>
          {description}
        </Text>
      </VStack>
    </>
  );

  const buttonProps = {
    size: 'lg' as const,
    height: { base: '120px', md: '150px' },
    width: 'full',
    colorPalette: colorScheme,
    flexDirection: 'column' as const,
    gap: 3,
    p: 6,
    borderRadius: 'xl',
    transition: 'all 0.2s',
    _hover: { transform: 'translateY(-2px)', shadow: 'lg' },
  };

  if (href) {
    return (
      <Button asChild {...buttonProps}>
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button
      {...buttonProps}
      onClick={onClick}
      loading={isLoading}
      disabled={isLoading}
    >
      {content}
    </Button>
  );
}
