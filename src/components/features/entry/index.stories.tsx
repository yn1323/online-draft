import type { Meta, StoryObj } from '@storybook/react';
import EntryPage from './index';

const meta: Meta<typeof EntryPage> = {
  title: 'Features/Entry/EntryPage',
  component: EntryPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    groupId: 'abc123',
    groupName: 'オンラインドラフト会議',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const PC: Story = {
  args: {
    groupId: 'xyz789',
    groupName: '2024年度新入社員歓迎会ドラフト大会',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const SP: Story = {
  args: {
    groupId: 'mobile01',
    groupName: 'モバイルテスト',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
