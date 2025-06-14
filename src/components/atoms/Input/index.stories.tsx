import type { Meta, StoryObj } from '@storybook/react';
import { VStack, Box, Text } from '@chakra-ui/react';
import { Input } from './index';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <VStack gap={6} align="stretch" maxW="md">
      {/* 基本 */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">基本</Text>
        <VStack gap={3}>
          <Input placeholder="プレースホルダー" />
          <Input placeholder="入力済み" value="入力済みテキスト" />
        </VStack>
      </Box>
      
      {/* サイズ */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">サイズ</Text>
        <VStack gap={3}>
          <Input placeholder="小サイズ" size="sm" />
          <Input placeholder="中サイズ" size="md" />
          <Input placeholder="大サイズ" size="lg" />
        </VStack>
      </Box>
      
      {/* バリアント */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">バリアント</Text>
        <VStack gap={3}>
          <Input placeholder="アウトライン" variant="outline" />
          <Input placeholder="サブトル" variant="subtle" />
          <Input placeholder="フラッシュ" variant="flushed" />
        </VStack>
      </Box>
      
      {/* タイプ */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">タイプ</Text>
        <VStack gap={3}>
          <Input placeholder="テキスト" type="text" />
          <Input placeholder="メール" type="email" />
          <Input placeholder="パスワード" type="password" />
          <Input placeholder="数値" type="number" />
        </VStack>
      </Box>
      
      {/* 状態 */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">状態</Text>
        <VStack gap={3}>
          <Input placeholder="無効化" disabled />
          <Input placeholder="必須" required />
        </VStack>
      </Box>
    </VStack>
  ),
};