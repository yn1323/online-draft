'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import { Box, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';
import { GRID_COLUMNS } from '@/src/constants/ui/layouts';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';

interface Avatar {
  index: string;
  path: string;
}

interface AvatarSelectorProps {
  avatars: Avatar[];
  selectedAvatarIndex?: string;
  onAvatarSelect: (index: string) => void;
  errorMessage?: string;
}

export default function AvatarSelector({
  avatars,
  selectedAvatarIndex,
  onAvatarSelect,
  errorMessage,
}: AvatarSelectorProps) {
  const hoverBg = useColorModeValue('gray.50', 'gray.700');
  const selectedBg = useColorModeValue('green.50', 'green.900');
  const selectedBorderColor = useColorModeValue('green.500', 'green.300');
  const hoverBorderColor = useColorModeValue('gray.300', 'gray.500');
  const gridColumns = useBreakpointValue(GRID_COLUMNS.avatarSelector);

  return (
    <Box>
      <SimpleGrid columns={gridColumns} gap={3}>
        {avatars.map((avatar) => (
          <Box
            key={avatar.index}
            position="relative"
            cursor="pointer"
            borderRadius="xl"
            border="3px solid"
            borderColor={
              selectedAvatarIndex === avatar.index
                ? selectedBorderColor
                : 'transparent'
            }
            bg={
              selectedAvatarIndex === avatar.index ? selectedBg : 'transparent'
            }
            p={3}
            width="84px"
            height="84px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            transformOrigin="center"
            _hover={{
              transform: 'scale(1.1) rotate(2deg)',
              bg: selectedAvatarIndex === avatar.index ? selectedBg : hoverBg,
              borderColor:
                selectedAvatarIndex === avatar.index
                  ? selectedBorderColor
                  : hoverBorderColor,
              boxShadow: 'md',
            }}
            _active={{
              transform: 'scale(0.95)',
            }}
            onClick={() => onAvatarSelect(avatar.index)}
          >
            <Image
              src={avatar.path}
              alt={`Avatar ${avatar.index}`}
              width={60}
              height={60}
              style={{
                objectFit: 'contain',
                width: '60px',
                height: '60px',
                display: 'block',
              }}
            />
            {selectedAvatarIndex === avatar.index && (
              <Box
                position="absolute"
                top={-1}
                right={-1}
                bg={selectedBorderColor}
                color="white"
                borderRadius="full"
                p={1.5}
                boxShadow="md"
                transform="scale(1.2)"
              >
                <FiCheck size={14} />
              </Box>
            )}
          </Box>
        ))}
      </SimpleGrid>
      {errorMessage && (
        <Text fontSize="sm" color="red.500" mt={2}>
          {errorMessage}
        </Text>
      )}
    </Box>
  );
}
