/**
 * 基盤型定義
 */

// 基本ID型
export type ID = string;
export type Timestamp = Date;

// API共通型
export interface BaseEntity {
  id: ID;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// エラー型
export interface AppError {
  code: string;
  message: string;
  details?: unknown;
}

// APIレスポンス型
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: AppError;
}

// ページネーション型
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: Pagination;
}

// 選択可能項目
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// フォームバリデーション
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState<T> {
  values: T;
  errors: ValidationError[];
  isSubmitting: boolean;
  isDirty: boolean;
}