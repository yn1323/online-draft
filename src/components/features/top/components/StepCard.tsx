'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import type { ReactElement } from 'react';

interface StepCardProps {
  icon: ReactElement;
  stepNumber: number;
  title: string;
  description: string;
  colorScheme: 'green' | 'orange' | 'blue';
}

export default function StepCard({
  icon,
  stepNumber,
  title,
  description,
  colorScheme,
}: StepCardProps) {
  const bgColor = `${colorScheme}.50`;
  const darkBgColor = `${colorScheme}.900/20`;
  const iconBgColor = `${colorScheme}.500`;
  const badgeBgColor = `${colorScheme}.600`;
  const titleColor = `${colorScheme}.700`;
  const darkTitleColor = `${colorScheme}.300`;

  return (
    <VStack
      gap={4}
      p={6}
      bg={bgColor}
      _dark={{ bg: darkBgColor }}
      borderRadius="xl"
    >
      <Box
        bg={iconBgColor}
        color="white"
        borderRadius="full"
        width="60px"
        height="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="2xl"
        fontWeight="bold"
        position="relative"
      >
        {icon}
        <Box
          position="absolute"
          bottom="-2px"
          right="-2px"
          bg={badgeBgColor}
          borderRadius="full"
          width="20px"
          height="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="xs"
        >
          {stepNumber}
        </Box>
      </Box>
      <Heading size="md" color={titleColor} _dark={{ color: darkTitleColor }}>
        {title}
      </Heading>
      <Text color="gray.600" _dark={{ color: 'gray.400' }} textAlign="center">
        {description}
      </Text>
    </VStack>
  );
}
