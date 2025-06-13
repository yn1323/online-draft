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

export const BasicStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '400px',
      }}
    >
      <ThemeInput placeholder="デフォルト入力" />
      <ThemeInput label="ユーザー名" placeholder="名前を入力" />
      <ThemeInput
        label="メールアドレス"
        placeholder="email@example.com"
        required
      />
      <ThemeInput
        label="パスワード"
        placeholder="パスワードを入力"
        helperText="8文字以上の英数字"
        type="password"
      />
      <ThemeInput
        label="エラー例"
        placeholder="入力してください"
        errorText="この項目は必須です"
        invalid
      />
      <ThemeInput
        label="文字数カウント"
        placeholder="コメントを入力"
        maxLength={100}
        showCharacterCount
      />
      <ThemeInput
        label="無効な項目"
        placeholder="編集できません"
        disabled
        value="無効な値"
      />
    </div>
  ),
};

export const SizesAndInteractive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>サイズバリエーション</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: '400px',
            }}
          >
            <ThemeInput label="Extra Small" placeholder="xs size" size="xs" />
            <ThemeInput label="Small" placeholder="sm size" size="sm" />
            <ThemeInput label="Medium" placeholder="md size" size="md" />
            <ThemeInput label="Large" placeholder="lg size" size="lg" />
            <ThemeInput label="Extra Large" placeholder="xl size" size="xl" />
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>インタラクティブ例</h3>
          <div style={{ maxWidth: '400px' }}>
            <ThemeInput
              label="リアルタイム入力"
              placeholder="何か入力してみてください"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maxLength={50}
              showCharacterCount
              helperText="リアルタイムで値が更新されます"
            />
          </div>
        </div>
      </div>
    );
  },
};
