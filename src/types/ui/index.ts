/**
 * UI関連型定義
 */

import type { ReactNode } from 'react';

// カラーパレット
export type ColorScheme =
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'red'
  | 'teal'
  | 'pink'
  | 'gray';
export type ColorMode = 'light' | 'dark' | 'system';

// サイズ
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type InputSize = 'xs' | 'sm' | 'md' | 'lg';

// バリアント
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'subtle';
export type BadgeVariant = 'solid' | 'subtle' | 'outline';
export type CardVariant = 'elevated' | 'outline' | 'filled' | 'subtle';

// アニメーション
export type AnimationType = 'lift' | 'bounce' | 'pulse' | 'glow' | 'scale';
export type TransitionDuration = 'fast' | 'normal' | 'slow';

// ステータス
export type Status =
  | 'waiting'
  | 'thinking'
  | 'submitted'
  | 'confirmed'
  | 'conflict'
  | 'winner';
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// レスポンシブ
export type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ResponsiveValue<T> = T | { [key in Breakpoint]?: T };

// レイアウト
export interface LayoutProps {
  children: ReactNode;
  maxWidth?: string | number;
  padding?: string | number;
  margin?: string | number;
  centerContent?: boolean;
}

// モーダル
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: Size;
  scrollBehavior?: 'inside' | 'outside';
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
}

export interface ModalActions {
  cancel?: {
    text: string;
    onClick?: () => void;
  };
  submit?: {
    text: string;
    colorPalette?: ColorScheme;
    form?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
  };
}

// フォーム
export interface FormFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  size?: InputSize;
}

export interface SelectFieldProps extends FormFieldProps {
  options: UISelectOption[];
  multiple?: boolean;
  searchable?: boolean;
  clearable?: boolean;
}

export interface UISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
}

// テーブル
export interface TableColumn<T = unknown> {
  key: string;
  title: string;
  dataIndex?: keyof T;
  render?: (value: unknown, record: T, index: number) => ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  filterable?: boolean;
}

export interface TableProps<T = unknown> {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  pagination?: PaginationProps;
  selection?: TableSelectionProps<T>;
  size?: Size;
  bordered?: boolean;
  striped?: boolean;
}

export interface TableSelectionProps<T = unknown> {
  type: 'checkbox' | 'radio';
  selectedKeys: string[];
  onSelectionChange: (keys: string[]) => void;
  getRowKey: (record: T) => string;
}

export interface PaginationProps {
  current: number;
  total: number;
  pageSize: number;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean;
  onChange: (page: number, pageSize: number) => void;
}

// ナビゲーション
export interface NavItem {
  key: string;
  label: string;
  path?: string;
  icon?: ReactNode;
  children?: NavItem[];
  disabled?: boolean;
  external?: boolean;
}

export interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
  badge?: string | number;
}

// 通知
export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface NotificationConfig {
  type: NotificationType;
  title: string;
  description?: string;
  duration?: number;
  placement?:
    | 'top'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';
  closable?: boolean;
  onClose?: () => void;
}

// Toast
export interface ToastConfig {
  type: NotificationType;
  title: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// テーマ
export interface ThemeConfig {
  colorMode: ColorMode;
  primaryColor: ColorScheme;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  fontFamily: 'system' | 'inter' | 'mono';
  density: 'compact' | 'comfortable' | 'spacious';
}

// ドラッグ&ドロップ
export interface DragDropConfig<T = unknown> {
  draggable?: boolean;
  droppable?: boolean;
  onDragStart?: (item: T, event: DragEvent) => void;
  onDragEnd?: (item: T, event: DragEvent) => void;
  onDrop?: (droppedItem: T, targetItem: T, event: DragEvent) => void;
  dragData?: (item: T) => unknown;
  acceptDrop?: (dragData: unknown, targetItem: T) => boolean;
}

// アクセシビリティ
export interface A11yProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  'aria-disabled'?: boolean;
  role?: string;
  tabIndex?: number;
}
