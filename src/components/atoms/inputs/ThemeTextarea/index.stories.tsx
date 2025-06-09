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

export const Default: Story = {
  args: {
    placeholder: '内容を入力してください',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'コメント',
    placeholder: 'コメントを入力してください',
  },
};

export const Required: Story = {
  args: {
    label: '詳細説明',
    placeholder: '詳細を入力してください',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'フィードバック',
    placeholder: 'ご意見をお聞かせください',
    helperText: '具体的で建設的なフィードバックをお願いします',
  },
};

export const WithError: Story = {
  args: {
    label: 'コメント',
    placeholder: 'コメントを入力してください',
    errorText: 'この項目は必須です',
    invalid: true,
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'レビュー',
    placeholder: 'レビューを入力してください',
    maxLength: 200,
    showCharacterCount: true,
  },
};

export const AutoResize: Story = {
  args: {
    label: '自動リサイズ',
    placeholder: '内容が増えると自動で高さが調整されます',
    autoResize: true,
    rows: 2,
  },
};

export const Disabled: Story = {
  args: {
    label: '無効なテキストエリア',
    placeholder: '編集できません',
    disabled: true,
    value: '無効な値です',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ThemeTextarea
        label="Extra Small"
        placeholder="xs size"
        size="xs"
        rows={2}
      />
      <ThemeTextarea label="Small" placeholder="sm size" size="sm" rows={2} />
      <ThemeTextarea label="Medium" placeholder="md size" size="md" rows={3} />
      <ThemeTextarea label="Large" placeholder="lg size" size="lg" rows={4} />
      <ThemeTextarea
        label="Extra Large"
        placeholder="xl size"
        size="xl"
        rows={5}
      />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <ThemeTextarea
        label="インタラクティブ入力"
        placeholder="何か入力してみてください"
        value={value}
        onChange={setValue}
        maxLength={100}
        showCharacterCount
        autoResize
        helperText="リアルタイムで値が更新されます"
      />
    );
  },
};
