import { Box, Image, Text } from '@chakra-ui/react';
import { statusEmoji } from '../../../mocks';

interface ParticipantCellProps {
  participant: {
    id: string;
    name: string;
    avatar: string;
    status: 'thinking' | 'entered' | 'completed';
  };
}

export const ParticipantCell = ({ participant }: ParticipantCellProps) => {
  const getStatusColors = () => {
    switch (participant.status) {
      case 'completed':
        return {
          bg: 'green.100',
          borderColor: 'green.200',
          textColor: 'green.700',
          bgDark: 'green.800/50',
          borderColorDark: 'green.500',
          textColorDark: 'green.300',
        };
      case 'entered':
        return {
          bg: 'green.100',
          borderColor: 'green.200',
          textColor: 'green.700',
          bgDark: 'green.800/50',
          borderColorDark: 'green.500',
          textColorDark: 'green.300',
        };
      default:
        return {
          bg: 'gray.100',
          borderColor: 'gray.200',
          textColor: 'gray.600',
          bgDark: 'gray.700/50',
          borderColorDark: 'gray.500',
          textColorDark: 'gray.300',
        };
    }
  };

  const colors = getStatusColors();

  return (
    <Box textAlign="center">
      <Box
        textAlign="center"
        p={2}
        borderRadius="md"
        bg={colors.bg}
        border="1px solid"
        borderColor={colors.borderColor}
        minW="60px"
        position="relative"
        transition="all 0.3s ease"
        _hover={{
          transform: 'scale(1.05)',
          boxShadow: '0 4px 12px -4px rgba(0, 0, 0, 0.15)',
        }}
        _dark={{
          bg: colors.bgDark,
          borderColor: colors.borderColorDark,
        }}
      >
        <Image
          src={`/img/${participant.avatar}.png`}
          alt={participant.name}
          width="24px"
          height="24px"
          borderRadius="md"
          objectFit="cover"
          mx="auto"
          mb={1}
        />
        <Text
          fontSize="xs"
          color={colors.textColor}
          fontWeight="medium"
          lineHeight="1.2"
          _dark={{
            color: colors.textColorDark,
          }}
        >
          {participant.name}
        </Text>
        <Text
          fontSize="xs"
          color={colors.textColor}
          _dark={{ color: colors.textColorDark }}
        >
          {statusEmoji[participant.status]}
        </Text>
      </Box>
    </Box>
  );
};
