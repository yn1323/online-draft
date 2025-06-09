import { Box, VStack } from '@chakra-ui/react';
import { SelectionButton } from '../SelectionButton';
import { SelectionPreview } from '../SelectionPreview';

interface ActionPanelProps {
  currentUserSelection?: string;
  onOpenInputModal: () => void;
}

export const ActionPanel = ({
  currentUserSelection,
  onOpenInputModal,
}: ActionPanelProps) => {
  return (
    <Box position="sticky" top={4}>
      <VStack gap={4} align="stretch">
        {/* Main Action Button */}
        <SelectionButton onClick={onOpenInputModal} />

        {/* Current User Selection Preview */}
        {currentUserSelection && (
          <SelectionPreview
            selection={currentUserSelection}
            onEdit={onOpenInputModal}
          />
        )}
      </VStack>
    </Box>
  );
};
