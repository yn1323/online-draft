'use client';

import {
  Box,
  Button,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { MdHistory } from 'react-icons/md';

interface Meeting {
  id: string;
  name: string;
  lastJoined: string;
}

interface RecentMeetingsListProps {
  meetings: Meeting[];
  onJoinMeeting: (id: string) => Promise<void>;
  loadingMeetingId?: string | null;
}

export default function RecentMeetingsList({
  meetings,
  onJoinMeeting,
  loadingMeetingId = null,
}: RecentMeetingsListProps) {
  return (
    <Box>
      <HStack gap={2} mb={4}>
        <MdHistory size={18} aria-hidden="true" />
        <Heading size="md" color="gray.700" _dark={{ color: 'gray.300' }}>
          最近参加したグループ
        </Heading>
      </HStack>

      {meetings.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
          {meetings.map((meeting) => (
            <Button
              key={meeting.id}
              variant="outline"
              height="auto"
              p={4}
              justifyContent="flex-start"
              textAlign="left"
              disabled={loadingMeetingId === meeting.id}
              loading={loadingMeetingId === meeting.id}
              onClick={() => onJoinMeeting(meeting.id)}
              _hover={{ bg: 'blue.50' }}
              borderRadius="lg"
              borderColor="gray.200"
              _dark={{
                borderColor: 'gray.700',
                _hover: { bg: 'blue.900/20' },
              }}
              aria-label={`${meeting.name}に参加する`}
            >
              <VStack gap={1} align="start" flex={1}>
                <Text fontWeight="semibold" fontSize="sm">
                  {meeting.name}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {meeting.lastJoined}に参加
                </Text>
              </VStack>
            </Button>
          ))}
        </SimpleGrid>
      ) : (
        <Box
          p={4}
          bg="gray.50"
          _dark={{ bg: 'gray.800' }}
          borderRadius="lg"
          textAlign="center"
        >
          <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }}>
            まだ参加履歴がありません
          </Text>
        </Box>
      )}
    </Box>
  );
}
