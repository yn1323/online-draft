import type { Meta, StoryObj } from '@storybook/react';
import { VStack, HStack, Box } from '@chakra-ui/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <VStack gap={6} align="stretch" maxW="md">
      {/* バリアント */}
      <Box>
        <HStack gap={4} wrap="wrap">
          <Button variant="primary">プライマリ (Blue)</Button>
          <Button variant="secondary">セカンダリ (Orange)</Button>
          <Button variant="accent">アクセント (Pink)</Button>
          <Button variant="outline">アウトライン</Button>
          <Button variant="ghost">ゴースト</Button>
        </HStack>
      </Box>
      
      {/* サイズ */}
      <Box>
        <HStack gap={4} align="center">
          <Button size="sm">小</Button>
          <Button size="md">中</Button>
          <Button size="lg">大</Button>
        </HStack>
      </Box>
      
      {/* 状態 */}
      <Box>
        <HStack gap={4} wrap="wrap">
          <Button loading>ローディング</Button>
          <Button disabled>無効化</Button>
        </HStack>
      </Box>
      
      {/* 幅 */}
      <Box>
        <VStack gap={3}>
          <Button width="full">幅いっぱい</Button>
          <Button width="auto">自動幅</Button>
        </VStack>
      </Box>
    </VStack>
  ),
};