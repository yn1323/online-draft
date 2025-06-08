'use client';

import { Box, HStack, Button, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { RoundHistoryTable } from '../RoundHistoryTable';
import { ChatLogSection } from '../ChatLogSection';

interface TabNavigationProps {
  roundNumber: number;
  participants: {
    id: string;
    name: string;
    avatar: string;
    status: 'thinking' | 'entered' | 'completed';
  }[];
  pastRounds: {
    roundNumber: number;
    topic: string;
    selections: {
      userId: string;
      userName: string;
      item: string;
      comment?: string;
    }[];
  }[];
  onRoundClick: (roundNumber: number) => void;
}

type TabType = 'rounds' | 'chat';

export const TabNavigation = ({
  roundNumber,
  participants,
  pastRounds,
  onRoundClick,
}: TabNavigationProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('rounds');

  return (
    <VStack gap={0} align="stretch">
      {/* Tab Navigation */}
      <HStack 
        gap={0} 
        bg="white" 
        borderRadius="lg" 
        p={1}
        boxShadow="sm"
        _dark={{ bg: 'gray.800' }}
      >
        <Button
          flex={1}
          variant={activeTab === 'rounds' ? 'solid' : 'ghost'}
          colorPalette={activeTab === 'rounds' ? 'purple' : 'gray'}
          borderRadius="md"
          fontSize="sm"
          fontWeight="bold"
          onClick={() => setActiveTab('rounds')}
          _active={{ transform: 'none' }}
        >
          📊 ラウンド
        </Button>
        <Button
          flex={1}
          variant={activeTab === 'chat' ? 'solid' : 'ghost'}
          colorPalette={activeTab === 'chat' ? 'blue' : 'gray'}
          borderRadius="md"
          fontSize="sm"
          fontWeight="bold"
          onClick={() => setActiveTab('chat')}
          _active={{ transform: 'none' }}
        >
          💬 ログ
        </Button>
      </HStack>

      {/* Tab Content */}
      <Box mt={4}>
        {activeTab === 'rounds' && (
          <RoundHistoryTable
            roundNumber={roundNumber}
            participants={participants}
            pastRounds={pastRounds}
            onRoundClick={onRoundClick}
            onOpenInputModal={() => {}} // SP版では使用しない
          />
        )}
        {activeTab === 'chat' && (
          <ChatLogSection />
        )}
      </Box>
    </VStack>
  );
};