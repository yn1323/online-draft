import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ThemeTextarea } from './';

const meta: Meta<typeof ThemeTextarea> = {
  title: 'Atoms/Inputs/ThemeTextarea',
  component: ThemeTextarea,
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
    autoResize: {
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
      <ThemeTextarea placeholder="デフォルトテキストエリア" />
      <ThemeTextarea label="コメント" placeholder="コメントを入力" />
      <ThemeTextarea label="詳細説明" placeholder="詳細を入力" required />
      <ThemeTextarea
        label="フィードバック"
        placeholder="ご意見をお聞かせください"
        helperText="具体的で建設的なフィードバックをお願いします"
      />
      <ThemeTextarea
        label="エラー例"
        placeholder="入力してください"
        errorText="この項目は必須です"
        invalid
      />
      <ThemeTextarea
        label="文字数カウント"
        placeholder="レビューを入力"
        maxLength={200}
        showCharacterCount
      />
      <ThemeTextarea
        label="自動リサイズ"
        placeholder="内容が増えると自動で高さが調整"
        autoResize
        rows={2}
      />
      <ThemeTextarea
        label="無効なテキストエリア"
        placeholder="編集できません"
        disabled
        value="無効な値です"
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
            <ThemeTextarea
              label="Extra Small"
              placeholder="xs size"
              size="xs"
              rows={2}
            />
            <ThemeTextarea
              label="Small"
              placeholder="sm size"
              size="sm"
              rows={2}
            />
            <ThemeTextarea
              label="Medium"
              placeholder="md size"
              size="md"
              rows={3}
            />
            <ThemeTextarea
              label="Large"
              placeholder="lg size"
              size="lg"
              rows={4}
            />
            <ThemeTextarea
              label="Extra Large"
              placeholder="xl size"
              size="xl"
              rows={5}
            />
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>インタラクティブ例</h3>
          <div style={{ maxWidth: '400px' }}>
            <ThemeTextarea
              label="リアルタイム入力"
              placeholder="何か入力してみてください"
              value={value}
              onChange={setValue}
              maxLength={100}
              showCharacterCount
              autoResize
              helperText="リアルタイムで値が更新されます"
            />
          </div>
        </div>
      </div>
    );
  },
};
