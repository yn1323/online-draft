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
      borderColor="green.400"
      bg="green.50"
      color="green.700"
      boxShadow="lg"
      transition="all 0.2s ease"
      _hover={{
        bg: 'green.100',
        borderColor: 'green.500',
        transform: 'translateY(-2px)',
        boxShadow: 'xl',
      }}
      _active={{
        transform: 'translateY(0)',
      }}
      _dark={{
        borderColor: 'green.400',
        bg: 'gray.800',
        color: 'green.300',
        _hover: {
          bg: 'gray.700',
          borderColor: 'green.300',
        },
      }}
    >
      🎯 選択する！
    </Button>
  );
};