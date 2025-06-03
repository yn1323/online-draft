import type { Meta, StoryObj } from '@storybook/react';
import { AuthComponent } from './index';

const meta: Meta<typeof AuthComponent> = {
  title: 'Features/Auth/AuthComponent',
  component: AuthComponent,
  parameters: {
    docs: {
      description: {
        component: '匿名認証コンポーネントです。Firebase匿名認証を使用してユーザーログインを行います。',
      },
    },
  },
  argTypes: {
    onAuthSuccess: { action: 'onAuthSuccess' },
    onAuthError: { action: 'onAuthError' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};