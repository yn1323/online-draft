import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from '../HeroSection';
import HowToSection from '../HowToSection';
import MainActionsSection from '../MainActionsSection';

// TopPageの構成要素を個別に表示（useRouter問題を回避）
const TopPageVisual = () => {
  const mockHandleCreateDraft = () => {
    console.log('ドラフト作成ボタンがクリックされました（モック）');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--chakra-colors-bg)' }}>
      <div style={{ maxWidth: '768px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* ヒーローセクション */}
          <HeroSection />

          {/* メインアクション */}
          <MainActionsSection
            onCreateDraft={mockHandleCreateDraft}
            isLoading={false}
          />

          {/* 使い方説明 */}
          <HowToSection />
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof TopPageVisual> = {
  title: 'Features/Top/TopPage',
  component: TopPageVisual,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'トップページのビジュアル表示（useRouter依存を回避したモック版）',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'トップページの通常表示状態',
      },
    },
  },
};

export const Loading: Story = {
  render: () => {
    const mockHandleCreateDraft = () => {
      console.log('ドラフト作成ボタンがクリックされました（ローディング中）');
    };

    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--chakra-colors-bg)' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <HeroSection />
            <MainActionsSection
              onCreateDraft={mockHandleCreateDraft}
              isLoading={true}
            />
            <HowToSection />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'ドラフト作成ボタンがローディング中の状態',
      },
    },
  },
};
