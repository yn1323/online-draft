import { Grid, Flex, Text, Box, HStack, useBreakpointValue } from '@chakra-ui/react';
import { ParticipantCell } from '../ParticipantCell';

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

  // SP用の縦型レイアウト
  if (isMobile) {
    return (
      <Box
        p={4}
        bgGradient="linear(to-r, green.100, green.200)"
        border="2px solid"
        borderColor="green.500"
        borderRadius="lg"
        boxShadow="0 4px 20px -5px rgba(34, 197, 94, 0.25)"
        _dark={{
          bgGradient: 'linear(to-r, green.800/40, green.900/40)',
          borderColor: 'green.600',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.2)',
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
        {/* ラウンド番号ヘッダー */}
        <HStack justify="space-between" align="center" mb={3} pb={2} borderBottom="1px solid" borderColor="green.300" _dark={{ borderColor: 'green.700' }}>
          <Text
            fontWeight="bold"
            color="green.700"
            fontSize="lg"
            _dark={{ color: 'green.300' }}
          >
            現在のラウンド {roundNumber}
          </Text>
          <Text fontSize="sm" color="green.600" _dark={{ color: 'green.500' }}>
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
      bgGradient="linear(to-r, green.100, emerald.100)"
      border="2px solid"
      borderColor="green.400"
      borderRadius="lg"
      alignItems="center"
      boxShadow="0 4px 20px -5px rgba(34, 197, 94, 0.35)"
      _dark={{
        bgGradient: 'linear(to-r, green.800/50, emerald.800/50)',
        borderColor: 'green.500',
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.2)',
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
        <Text fontWeight="bold" color="green.700" fontSize="lg" _dark={{ color: 'green.300' }}>
          {roundNumber}
        </Text>
      </Flex>
      {participants.map((participant) => (
        <ParticipantCell key={participant.id} participant={participant} />
      ))}
    </Grid>
  );
};