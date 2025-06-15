import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <VStack gap={6} align="stretch" maxW="2xl">
      {/* サイズ */}
      <Box>
        <Text fontSize="sm" mb={4} color="gray.600">
          サイズ
        </Text>
        <HStack gap={4} align="center" wrap="wrap">
          <Avatar size="xs" name="XS" />
          <Avatar size="sm" name="SM" />
          <Avatar size="md" name="MD" />
          <Avatar size="lg" name="LG" />
          <Avatar size="xl" name="XL" />
          <Avatar size="2xl" name="2XL" />
        </HStack>
      </Box>

      {/* 名前での表示 */}
      <Box>
        <Text fontSize="sm" mb={4} color="gray.600">
          名前表示
        </Text>
        <HStack gap={4} align="center" wrap="wrap">
          <Avatar name="田中太郎" />
          <Avatar name="山田花子" />
          <Avatar name="佐藤次郎" />
          <Avatar name="鈴木一郎" />
        </HStack>
      </Box>

      {/* アバター番号 */}
      <Box>
        <Text fontSize="sm" mb={4} color="gray.600">
          アバター番号
        </Text>
        <HStack gap={4} align="center" wrap="wrap">
          <Avatar avatarNumber="1" name="アバター1" />
          <Avatar avatarNumber="2" name="アバター2" />
          <Avatar avatarNumber="3" name="アバター3" />
          <Avatar avatarNumber="4" name="アバター4" />
          <Avatar avatarNumber="5" name="アバター5" />
        </HStack>
      </Box>
    </VStack>
  ),
};
