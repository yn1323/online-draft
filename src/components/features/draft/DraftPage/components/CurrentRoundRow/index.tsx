import { Grid, Flex, Text, Box, HStack, useBreakpointValue } from '@chakra-ui/react';
import { ParticipantCell } from '../ParticipantCell';
import { COMPONENT_THEMES } from '@/src/constants/theme';

interface CurrentRoundRowProps {
  roundNumber: number;
  participants: {
    id: string;
    name: string;
    avatar: string;
    status: 'thinking' | 'entered' | 'completed';
  }[];
}

export const CurrentRoundRow = ({ roundNumber, participants }: CurrentRoundRowProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const theme = COMPONENT_THEMES.currentRound;

  // SP用の縦型レイアウト
  if (isMobile) {
    return (
      <Box
        p={4}
        bgGradient={theme.light.bgGradient}
        border="2px solid"
        borderColor={theme.light.borderColor}
        borderRadius="lg"
        boxShadow={theme.light.boxShadow}
        _dark={{
          bgGradient: theme.dark.bgGradient,
          borderColor: theme.dark.borderColor,
          boxShadow: theme.dark.boxShadow,
        }}
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          inset: '-2px',
          borderRadius: 'lg',
          padding: '2px',
          background: theme.light.accent,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 0.5,
        }}
      >
        {/* ラウンド番号ヘッダー */}
        <HStack justify="space-between" align="center" mb={3} pb={2} borderBottom="1px solid" borderColor={theme.light.borderBottom} _dark={{ borderColor: theme.dark.borderBottom }}>
          <Text
            fontWeight="bold"
            color={theme.light.textColor}
            fontSize="lg"
            _dark={{ color: theme.dark.textColor }}
          >
            現在のラウンド {roundNumber}
          </Text>
          <Text fontSize="sm" color={theme.light.textColor} _dark={{ color: theme.dark.textColor }}>
            ⚡ 進行中
          </Text>
        </HStack>

        {/* 参加者一覧 */}
        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={3}>
          {participants.map((participant) => (
            <ParticipantCell key={participant.id} participant={participant} />
          ))}
        </Grid>
      </Box>
    );
  }

  // PC用のGrid レイアウト
  return (
    <Grid
      templateColumns={`60px repeat(${participants.length}, 1fr)`}
      gap={3}
      p={3}
      bgGradient={theme.light.bgGradient}
      border="2px solid"
      borderColor={theme.light.borderColor}
      borderRadius="lg"
      alignItems="center"
      boxShadow={theme.light.boxShadow}
      _dark={{
        bgGradient: theme.dark.bgGradient,
        borderColor: theme.dark.borderColor,
        boxShadow: theme.dark.boxShadow,
      }}
      position="relative"
      _after={{
        content: '""',
        position: 'absolute',
        inset: '-2px',
        borderRadius: 'lg',
        padding: '2px',
        background: 'linear-gradient(45deg, green.500, green.600, green.500)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        opacity: 0.5,
      }}
    >
      <Flex align="center" justify="center" h="full">
        <Text fontWeight="bold" color={theme.light.textColor} fontSize="lg" _dark={{ color: theme.dark.textColor }}>
          {roundNumber}
        </Text>
      </Flex>
      {participants.map((participant) => (
        <ParticipantCell key={participant.id} participant={participant} />
      ))}
    </Grid>
  );
};