'use client';

import { SimpleGrid } from '@chakra-ui/react';
import { IoEnter } from 'react-icons/io5';
import { MdAdd } from 'react-icons/md';
import ActionCard from '../components/cards/ActionCard';

type MainActionsSectionProps = {
  onCreateDraft: () => void;
  isLoading?: boolean;
};

export default function MainActionsSection({
  onCreateDraft,
  isLoading = false,
}: MainActionsSectionProps) {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={6}
      maxW="600px"
      mx="auto"
      w="full"
    >
      {/* グループを作る */}
      <ActionCard
        icon={<MdAdd size={32} />}
        title="ドラフトを作る"
        description="新しい会議を作成"
        colorScheme="green"
        onClick={onCreateDraft}
        isLoading={isLoading}
      />

      {/* グループに参加 */}
      <ActionCard
        icon={<IoEnter size={32} />}
        title="会議に参加"
        description="IDで参加してドラフト"
        colorScheme="blue"
        href="/join"
      />
    </SimpleGrid>
  );
}
