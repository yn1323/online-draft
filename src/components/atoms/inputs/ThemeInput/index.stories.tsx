import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ThemeInput } from './';

const meta: Meta<typeof ThemeInput> = {
  title: 'Atoms/Inputs/ThemeInput',
  component: ThemeInput,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    invalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    showCharacterCount: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'テキストを入力してください',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'ユーザー名',
    placeholder: '名前を入力してください',
  },
};

export const Required: Story = {
  args: {
    label: 'メールアドレス',
    placeholder: 'email@example.com',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'パスワード',
    placeholder: 'パスワードを入力',
    helperText: '8文字以上の英数字で入力してください',
    type: 'password',
  },
};

export const WithError: Story = {
  args: {
    label: 'ユーザー名',
    placeholder: '名前を入力してください',
    errorText: 'この項目は必須です',
    invalid: true,
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'コメント',
    placeholder: 'コメントを入力してください',
    maxLength: 100,
    showCharacterCount: true,
  },
};

export const Disabled: Story = {
  args: {
    label: '無効な項目',
    placeholder: '編集できません',
    disabled: true,
    value: '無効な値',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ThemeInput label="Extra Small" placeholder="xs size" size="xs" />
      <ThemeInput label="Small" placeholder="sm size" size="sm" />
      <ThemeInput label="Medium" placeholder="md size" size="md" />
      <ThemeInput label="Large" placeholder="lg size" size="lg" />
      <ThemeInput label="Extra Large" placeholder="xl size" size="xl" />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <ThemeInput
        label="インタラクティブ入力"
        placeholder="何か入力してみてください"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={50}
        showCharacterCount
        helperText="リアルタイムで値が更新されます"
      />
    );
  },
};
