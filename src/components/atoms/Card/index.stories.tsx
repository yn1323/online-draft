import type { Meta, StoryObj } from '@storybook/react';
import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import { Card } from './index';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <VStack gap={6} align="stretch" maxW="2xl">
      {/* バリアント */}
      <Box>
        <Text fontSize="sm" mb={4} color="gray.600">バリアント</Text>
        <HStack gap={4} align="start" wrap="wrap">
          <Card variant="elevated">
            <Text fontWeight="bold" mb={2}>Elevated Card</Text>
            <Text fontSize="sm" color="gray.600">
              シャドウ付きのカード
            </Text>
          </Card>
          
          <Card variant="outline">
            <Text fontWeight="bold" mb={2}>Outline Card</Text>
            <Text fontSize="sm" color="gray.600">
              ボーダー付きのカード
            </Text>
          </Card>
          
          <Card variant="subtle">
            <Text fontWeight="bold" mb={2}>Subtle Card</Text>
            <Text fontSize="sm" color="gray.600">
              控えめな背景のカード
            </Text>
          </Card>
          
          <Card variant="filled">
            <Text fontWeight="bold" mb={2}>Filled Card</Text>
            <Text fontSize="sm" color="gray.600">
              背景色付きのカード
            </Text>
          </Card>
        </HStack>
      </Box>
      
      {/* サイズ */}
      <Box>
        <Text fontSize="sm" mb={4} color="gray.600">サイズ</Text>
        <VStack gap={4} align="stretch">
          <Card size="sm">
            <Text fontWeight="bold">Small Card</Text>
            <Text fontSize="sm" color="gray.600">小さいパディング</Text>
          </Card>
          
          <Card size="md">
            <Text fontWeight="bold">Medium Card</Text>
            <Text fontSize="sm" color="gray.600">標準パディング</Text>
          </Card>
          
          <Card size="lg">
            <Text fontWeight="bold">Large Card</Text>
            <Text fontSize="sm" color="gray.600">大きいパディング</Text>
          </Card>
        </VStack>
      </Box>
      
      {/* カスタムパディング */}
      <Box>
        <Text fontSize="sm" mb={4} color="gray.600">カスタムパディング</Text>
        <Card padding={8}>
          <Text fontWeight="bold">Custom Padding Card</Text>
          <Text fontSize="sm" color="gray.600">
            カスタムパディング設定
          </Text>
        </Card>
      </Box>
    </VStack>
  ),
};