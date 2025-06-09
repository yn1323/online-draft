import { HStack, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { UserAvatar } from './';

const meta: Meta<typeof UserAvatar> = {
  title: 'Atoms/Images/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'custom'],
    },
    shape: {
      control: { type: 'select' },
      options: ['square', 'circle'],
    },
    borderStyle: {
      control: { type: 'select' },
      options: ['none', 'subtle', 'solid'],
    },
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'away', 'busy'],
    },
    showStatus: {
      control: 'boolean',
    },
    showFallback: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '/img/1.png',
    alt: 'ユーザーアバター',
  },
};

export const Fallback: Story = {
  args: {
    src: '', // 意図的に空にしてフォールバックを表示
    alt: 'テストユーザー',
    fallback: 'T',
  },
};

export const WithStatus: Story = {
  args: {
    src: '/img/2.png',
    alt: 'オンラインユーザー',
    status: 'online',
    showStatus: true,
  },
};

export const CircleShape: Story = {
  args: {
    src: '/img/3.png',
    alt: 'サークルアバター',
    shape: 'circle',
  },
};

export const WithBorder: Story = {
  args: {
    src: '/img/4.png',
    alt: 'ボーダー付きアバター',
    borderStyle: 'solid',
  },
};

export const Sizes: Story = {
  render: () => (
    <HStack gap={4} align="center">
      <UserAvatar src="/img/1.png" alt="XS" size="xs" />
      <UserAvatar src="/img/2.png" alt="Small" size="sm" />
      <UserAvatar src="/img/3.png" alt="Medium" size="md" />
      <UserAvatar src="/img/4.png" alt="Large" size="lg" />
      <UserAvatar src="/img/5.png" alt="XL" size="xl" />
    </HStack>
  ),
};

export const Shapes: Story = {
  render: () => (
    <HStack gap={4} align="center">
      <UserAvatar src="/img/1.png" alt="Square" shape="square" size="lg" />
      <UserAvatar src="/img/2.png" alt="Circle" shape="circle" size="lg" />
    </HStack>
  ),
};

export const BorderStyles: Story = {
  render: () => (
    <HStack gap={4} align="center">
      <UserAvatar
        src="/img/1.png"
        alt="No Border"
        borderStyle="none"
        size="lg"
      />
      <UserAvatar
        src="/img/2.png"
        alt="Subtle Border"
        borderStyle="subtle"
        size="lg"
      />
      <UserAvatar
        src="/img/3.png"
        alt="Solid Border"
        borderStyle="solid"
        size="lg"
      />
    </HStack>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <VStack gap={4}>
      <HStack gap={4} align="center">
        <UserAvatar
          src="/img/1.png"
          alt="Online"
          status="online"
          showStatus={true}
          size="lg"
        />
        <UserAvatar
          src="/img/2.png"
          alt="Away"
          status="away"
          showStatus={true}
          size="lg"
        />
        <UserAvatar
          src="/img/3.png"
          alt="Busy"
          status="busy"
          showStatus={true}
          size="lg"
        />
        <UserAvatar
          src="/img/4.png"
          alt="Offline"
          status="offline"
          showStatus={true}
          size="lg"
        />
      </HStack>
      <p>上から: オンライン、離席中、取り込み中、オフライン</p>
    </VStack>
  ),
};

export const FallbackVariations: Story = {
  render: () => (
    <HStack gap={4} align="center">
      <UserAvatar src="" alt="Alice" fallback="A" size="lg" />
      <UserAvatar src="" alt="Bob" fallback="B" size="lg" />
      <UserAvatar src="" alt="Charlie" fallback="C" size="lg" />
      <UserAvatar src="" alt="Diana" fallback="D" size="lg" />
    </HStack>
  ),
};

export const CombinedFeatures: Story = {
  render: () => (
    <VStack gap={4}>
      <HStack gap={4} align="center">
        <UserAvatar
          src="/img/1.png"
          alt="Alice"
          size="lg"
          shape="circle"
          borderStyle="solid"
          status="online"
          showStatus={true}
        />
        <UserAvatar
          src=""
          alt="Bob"
          fallback="B"
          size="lg"
          shape="circle"
          borderStyle="subtle"
          status="away"
          showStatus={true}
        />
        <UserAvatar
          src="/img/3.png"
          alt="Charlie"
          size="lg"
          shape="square"
          borderStyle="solid"
          status="busy"
          showStatus={true}
        />
      </HStack>
      <p>様々な機能を組み合わせた例</p>
    </VStack>
  ),
};

export const ErrorHandling: Story = {
  render: () => (
    <VStack gap={4}>
      <HStack gap={4} align="center">
        <UserAvatar
          src="/invalid-image.jpg"
          alt="エラー画像（フォールバック表示）"
          fallback="E"
          size="lg"
        />
        <UserAvatar
          src="/invalid-image.jpg"
          alt="エラー画像（フォールバック非表示）"
          showFallback={false}
          size="lg"
        />
      </HStack>
      <p>左: エラー時フォールバック表示、右: エラー時非表示</p>
    </VStack>
  ),
};
