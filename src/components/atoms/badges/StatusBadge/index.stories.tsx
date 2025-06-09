import type { Meta, StoryObj } from '@storybook/react';
import { HStack, VStack } from '@chakra-ui/react';
import { StatusBadge } from './index';

const meta = {
  title: 'Atoms/Badges/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['thinking', 'entered', 'completed', 'pending', 'active', 'done'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'subtle'],
    },
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: 'thinking',
  },
};

export const AllStatuses: Story = {
  args: { status: 'thinking' },
  render: () => (
    <VStack gap={4}>
      <HStack gap={3}>
        <StatusBadge status="thinking" />
        <StatusBadge status="entered" />
        <StatusBadge status="completed" />
      </HStack>
      <HStack gap={3}>
        <StatusBadge status="pending" />
        <StatusBadge status="active" />
        <StatusBadge status="done" />
      </HStack>
    </VStack>
  ),
};

export const AllVariants: Story = {
  args: { status: 'completed' },
  render: () => (
    <VStack gap={4}>
      <HStack gap={3}>
        <StatusBadge status="completed" variant="solid" />
        <StatusBadge status="completed" variant="outline" />
        <StatusBadge status="completed" variant="subtle" />
      </HStack>
    </VStack>
  ),
};