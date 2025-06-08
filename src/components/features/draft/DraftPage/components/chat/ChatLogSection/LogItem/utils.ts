export const formatTime = (date: Date) => {
  return date.toLocaleTimeString('ja-JP', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getSystemLogStyle = (
  type: 'system' | 'draft_result' | 'selection_change'
) => {
  switch (type) {
    case 'system':
      return {
        bg: 'blue.50',
        borderColor: 'blue.200',
        icon: '📢',
        _dark: { bg: 'blue.800/50', borderColor: 'blue.500' },
      };
    case 'draft_result':
      return {
        bg: 'green.50',
        borderColor: 'green.200',
        icon: '🎯',
        _dark: { bg: 'green.800/50', borderColor: 'green.500' },
      };
    case 'selection_change':
      return {
        bg: 'orange.50',
        borderColor: 'orange.200',
        icon: '✏️',
        _dark: { bg: 'orange.800/50', borderColor: 'orange.500' },
      };
    default:
      return {
        bg: 'gray.50',
        borderColor: 'gray.200',
        icon: 'ℹ️',
        _dark: { bg: 'gray.800', borderColor: 'gray.600' },
      };
  }
};