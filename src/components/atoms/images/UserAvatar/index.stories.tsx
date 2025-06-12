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

export const BasicVariations: Story = {
  render: () => (
    <VStack gap={6}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>基本バリエーション</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="デフォルト" />
          <UserAvatar src="" alt="フォールバック" fallback="T" />
          <UserAvatar src="/img/2.png" alt="ステータス付き" status="online" showStatus />
          <UserAvatar src="/img/3.png" alt="サークル" shape="circle" />
          <UserAvatar src="/img/4.png" alt="ボーダー付き" borderStyle="solid" />
        </HStack>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>サイズ</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="XS" size="xs" />
          <UserAvatar src="/img/2.png" alt="Small" size="sm" />
          <UserAvatar src="/img/3.png" alt="Medium" size="md" />
          <UserAvatar src="/img/4.png" alt="Large" size="lg" />
          <UserAvatar src="/img/5.png" alt="XL" size="xl" />
        </HStack>
      </div>
    </VStack>
  ),
};

export const StyleVariations: Story = {
  render: () => (
    <VStack gap={6}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>形状</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="Square" shape="square" size="lg" />
          <UserAvatar src="/img/2.png" alt="Circle" shape="circle" size="lg" />
        </HStack>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>ボーダースタイル</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="ボーダー無し" borderStyle="none" size="lg" />
          <UserAvatar src="/img/2.png" alt="サブトルボーダー" borderStyle="subtle" size="lg" />
          <UserAvatar src="/img/3.png" alt="ソリッドボーダー" borderStyle="solid" size="lg" />
        </HStack>
      </div>
    </VStack>
  ),
};

export const AdvancedFeatures: Story = {
  render: () => (
    <VStack gap={6}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>ステータスインジケーター</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="Online" status="online" showStatus size="lg" />
          <UserAvatar src="/img/2.png" alt="Away" status="away" showStatus size="lg" />
          <UserAvatar src="/img/3.png" alt="Busy" status="busy" showStatus size="lg" />
          <UserAvatar src="/img/4.png" alt="Offline" status="offline" showStatus size="lg" />
        </HStack>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'gray' }}>オンライン、離席中、取り込み中、オフライン</p>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>フォールバックバリエーション</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="" alt="Alice" fallback="A" size="lg" />
          <UserAvatar src="" alt="Bob" fallback="B" size="lg" />
          <UserAvatar src="" alt="Charlie" fallback="C" size="lg" />
          <UserAvatar src="" alt="Diana" fallback="D" size="lg" />
        </HStack>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>組み合わせ例</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="Alice" size="lg" shape="circle" borderStyle="solid" status="online" showStatus />
          <UserAvatar src="" alt="Bob" fallback="B" size="lg" shape="circle" borderStyle="subtle" status="away" showStatus />
          <UserAvatar src="/img/3.png" alt="Charlie" size="lg" shape="square" borderStyle="solid" status="busy" showStatus />
        </HStack>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>エラーハンドリング</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/invalid-image.jpg" alt="フォールバック表示" fallback="E" size="lg" />
          <UserAvatar src="/invalid-image.jpg" alt="フォールバック非表示" showFallback={false} size="lg" />
        </HStack>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'gray' }}>左: エラー時フォールバック表示、右: エラー時非表示</p>
      </div>
    </VStack>
  ),
};
