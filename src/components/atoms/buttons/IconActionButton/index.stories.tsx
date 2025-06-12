import type { Meta, StoryObj } from '@storybook/react';
import {
  FiDownload,
  FiEdit3,
  FiEye,
  FiHeart,
  FiPlus,
  FiRefreshCw,
  FiSettings,
  FiShare2,
  FiTrash2,
  FiX,
} from 'react-icons/fi';
import { IconActionButton } from './';

const meta: Meta<typeof IconActionButton> = {
  title: 'Atoms/Buttons/IconActionButton',
  component: IconActionButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost', 'subtle'],
    },
    colorPalette: {
      control: { type: 'select' },
      options: ['blue', 'green', 'red', 'yellow', 'purple', 'gray'],
    },
    showTooltip: {
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
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <IconActionButton icon={<FiSettings />} label="デフォルト" />
      <IconActionButton
        icon={<FiEdit3 />}
        label="ツールチップ付き"
        tooltip="このアイテムを編集します"
      />
      <IconActionButton
        icon={<FiEye />}
        label="ツールチップ無し"
        showTooltip={false}
      />
      <IconActionButton icon={<FiTrash2 />} label="無効化" disabled />
      <IconActionButton
        icon={<FiHeart />}
        label="アニメーション無"
        animated={false}
      />
    </div>
  ),
};

export const VariantsAndStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>バリアント</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <IconActionButton
            icon={<FiSettings />}
            label="Solid"
            variant="solid"
            colorPalette="blue"
          />
          <IconActionButton
            icon={<FiEdit3 />}
            label="Outline"
            variant="outline"
            colorPalette="green"
          />
          <IconActionButton
            icon={<FiEye />}
            label="Ghost"
            variant="ghost"
            colorPalette="purple"
          />
          <IconActionButton
            icon={<FiShare2 />}
            label="Subtle"
            variant="subtle"
            colorPalette="red"
          />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>サイズ</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <IconActionButton icon={<FiPlus />} label="XS" size="xs" />
          <IconActionButton icon={<FiPlus />} label="Small" size="sm" />
          <IconActionButton icon={<FiPlus />} label="Medium" size="md" />
          <IconActionButton icon={<FiPlus />} label="Large" size="lg" />
          <IconActionButton icon={<FiPlus />} label="XL" size="xl" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>カラーパレット</h3>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <IconActionButton
            icon={<FiHeart />}
            label="Blue"
            colorPalette="blue"
            variant="solid"
          />
          <IconActionButton
            icon={<FiDownload />}
            label="Green"
            colorPalette="green"
            variant="solid"
          />
          <IconActionButton
            icon={<FiTrash2 />}
            label="Red"
            colorPalette="red"
            variant="solid"
          />
          <IconActionButton
            icon={<FiRefreshCw />}
            label="Yellow"
            colorPalette="yellow"
            variant="solid"
          />
          <IconActionButton
            icon={<FiShare2 />}
            label="Purple"
            colorPalette="purple"
            variant="solid"
          />
          <IconActionButton
            icon={<FiX />}
            label="Gray"
            colorPalette="gray"
            variant="solid"
          />
        </div>
      </div>
    </div>
  ),
};

export const CommonActions: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <IconActionButton
        icon={<FiEdit3 />}
        label="編集"
        tooltip="このアイテムを編集"
        colorPalette="blue"
        variant="outline"
      />
      <IconActionButton
        icon={<FiTrash2 />}
        label="削除"
        tooltip="このアイテムを削除"
        colorPalette="red"
        variant="outline"
      />
      <IconActionButton
        icon={<FiEye />}
        label="表示"
        tooltip="詳細を表示"
        colorPalette="green"
        variant="outline"
      />
      <IconActionButton
        icon={<FiShare2 />}
        label="共有"
        tooltip="他の人と共有"
        colorPalette="purple"
        variant="outline"
      />
      <IconActionButton
        icon={<FiDownload />}
        label="ダウンロード"
        tooltip="ファイルをダウンロード"
        colorPalette="gray"
        variant="outline"
      />
    </div>
  ),
};
