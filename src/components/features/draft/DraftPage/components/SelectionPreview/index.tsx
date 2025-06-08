import { Box, Text, Button } from '@chakra-ui/react';

interface SelectionPreviewProps {
  selection: string;
  onEdit: () => void;
}

export const SelectionPreview = ({ selection, onEdit }: SelectionPreviewProps) => {
  return (
    <Box
      p={4}
      borderRadius="lg"
      bgGradient="linear(to-br, green.50, emerald.50)"
      border="2px solid"
      borderColor="green.400"
      boxShadow="0 8px 25px -8px rgba(34, 197, 94, 0.3)"
      position="relative"
      overflow="hidden"
      _dark={{
        bgGradient: 'linear(to-br, green.900/50, emerald.900/50)',
        borderColor: 'green.500',
        boxShadow: '0 0 25px rgba(34, 197, 94, 0.4), 0 0 50px rgba(34, 197, 94, 0.2)',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
        _dark: {
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
        },
      }}
    >
      <Text
        fontSize="sm"
        fontWeight="bold"
        color="green.700"
        mb={2}
        _dark={{ color: 'green.300' }}
      >
        ✅ あなたの選択
      </Text>
      <Text fontSize="lg" fontWeight="bold" color="green.800" _dark={{ color: 'green.200' }}>
        {selection}
      </Text>
      <Button
        size="sm"
        variant="outline"
        colorScheme="green"
        onClick={onEdit}
        mt={3}
        w="full"
        _dark={{
          borderColor: 'green.400',
          color: 'green.300',
          _hover: {
            bg: 'green.900/30',
            borderColor: 'green.300',
          },
        }}
      >
        選択を変更
      </Button>
    </Box>
  );
};