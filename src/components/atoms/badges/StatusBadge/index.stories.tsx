import { HStack, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
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
      options: ['entered', 'completed', 'pending', 'active', 'done'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'subtle'],
    },
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  args: { status: 'entered' },
  render: () => (
    <VStack gap={6}>
      <VStack gap={2}>
        <HStack gap={3}>
          <StatusBadge status="entered" />
          <StatusBadge status="completed" />
          <StatusBadge status="pending" />
        </HStack>
        <HStack gap={3}>
          <StatusBadge status="active" />
          <StatusBadge status="done" />
        </HStack>
      </VStack>
      <VStack gap={2}>
        <HStack gap={3}>
          <StatusBadge status="completed" variant="solid" />
          <StatusBadge status="completed" variant="outline" />
          <StatusBadge status="completed" variant="subtle" />
        </HStack>
      </VStack>
    </VStack>
  ),
};
