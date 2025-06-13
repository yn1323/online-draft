import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FormButton } from './';

const meta: Meta<typeof FormButton> = {
  title: 'Atoms/Buttons/FormButton',
  component: FormButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    colorPalette: {
      control: { type: 'select' },
      options: ['blue', 'green', 'red', 'yellow', 'purple', 'gray'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    isLoading: {
      control: 'boolean',
    },
    isValid: {
      control: 'boolean',
    },
    animated: {
      control: 'boolean',
    },
    disabled: {
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
        gap: '1rem',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <FormButton>デフォルト</FormButton>
      <FormButton isLoading loadingText="送信中...">
        ローディング
      </FormButton>
      <FormButton isValid={false}>無効</FormButton>
      <FormButton disabled>無効化</FormButton>
      <FormButton animated={false}>アニメーション無</FormButton>
    </div>
  ),
};

export const VariantsAndSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>カラーバリアント</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <FormButton colorPalette="blue">送信</FormButton>
          <FormButton colorPalette="green">保存</FormButton>
          <FormButton colorPalette="red">削除</FormButton>
          <FormButton colorPalette="yellow">警告</FormButton>
          <FormButton colorPalette="purple">アクション</FormButton>
          <FormButton colorPalette="gray">キャンセル</FormButton>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>サイズ</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <FormButton size="xs">XS</FormButton>
          <FormButton size="sm">Small</FormButton>
          <FormButton size="md">Medium</FormButton>
          <FormButton size="lg">Large</FormButton>
          <FormButton size="xl">XL</FormButton>
        </div>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const isValid = Boolean(formData.name.trim() && formData.email.trim());

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px',
        }}
      >
        <input
          type="text"
          placeholder="名前"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          style={{
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <input
          type="email"
          placeholder="メール"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          style={{
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <FormButton
          type="submit"
          isLoading={isLoading}
          isValid={isValid}
          loadingText="送信中..."
          colorPalette="green"
        >
          フォーム送信
        </FormButton>
      </form>
    );
  },
};
