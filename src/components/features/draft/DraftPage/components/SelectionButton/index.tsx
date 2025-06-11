import { COMPONENT_THEMES } from '@/src/constants/theme';
import { Button } from '@chakra-ui/react';

interface SelectionButtonProps {
  onClick: () => void;
}

export const SelectionButton = ({ onClick }: SelectionButtonProps) => {
  const buttonTheme = COMPONENT_THEMES.button.primary;

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
      borderColor={buttonTheme.borderColor}
      bg={buttonTheme.bg}
      color={buttonTheme.textColor}
      boxShadow="lg"
      transition="all 0.2s ease"
      _hover={{
        bg: buttonTheme.hoverBg,
        borderColor: buttonTheme.hoverBorder,
        transform: 'translateY(-2px)',
        boxShadow: 'xl',
      }}
      _active={{
        transform: 'translateY(0)',
      }}
      _dark={{
        borderColor: buttonTheme.borderColor,
        bg: 'gray.800',
        color: 'green.300',
        _hover: {
          bg: 'gray.700',
          borderColor: 'green.300',
        },
      }}
    >
      エントリー
    </Button>
  );
};
