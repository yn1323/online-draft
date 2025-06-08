import { Button } from '@chakra-ui/react';

interface SelectionButtonProps {
  onClick: () => void;
}

export const SelectionButton = ({ onClick }: SelectionButtonProps) => {
  return (
    <Button
      size="md"
      h="48px"
      onClick={onClick}
      fontSize="md"
      fontWeight="bold"
      borderRadius="lg"
      variant="outline"
      borderWidth={2}
      borderColor="blue.400"
      bg="blue.50"
      color="blue.700"
      boxShadow="lg"
      transition="all 0.2s ease"
      _hover={{
        bg: 'blue.100',
        borderColor: 'blue.500',
        transform: 'translateY(-2px)',
        boxShadow: 'xl',
      }}
      _active={{
        transform: 'translateY(0)',
      }}
      _dark={{
        borderColor: 'blue.400',
        bg: 'gray.800',
        color: 'blue.300',
        _hover: {
          bg: 'gray.700',
          borderColor: 'blue.300',
        },
      }}
    >
      🎯 選択する！
    </Button>
  );
};