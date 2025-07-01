/**
 * 共通バリデーション関数
 * Firebaseフック間で重複していたバリデーションロジックを統一
 */

/**
 * 必須項目バリデーション
 */
export const validateRequired = (value: string, fieldName: string) => {
  if (!value.trim()) {
    throw new Error(`${fieldName}を入力してください`);
  }
};

/**
 * 文字数制限バリデーション
 */
export const validateLength = (
  value: string,
  max: number,
  fieldName: string,
) => {
  if (value.length > max) {
    throw new Error(`${fieldName}は${max}文字以内で入力してください`);
  }
};

/**
 * 必須項目 + 文字数制限バリデーション（組み合わせ）
 */
export const validateRequiredWithLength = (
  value: string,
  max: number,
  fieldName: string,
) => {
  validateRequired(value, fieldName);
  validateLength(value, max, fieldName);
};
