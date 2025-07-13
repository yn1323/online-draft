import { z } from 'zod';

export const customErrorMap: z.ZodErrorMap = (issue) => {
  switch (issue.code) {
    case z.ZodIssueCode.too_small:
      if (issue.type === 'array') {
        return `${issue.minimum}つ以上選択してください。`;
      }
      if (issue.minimum === 1) {
        return '必須項目です';
      }
      return `${issue.minimum}文字以上で入力してください`;

    case z.ZodIssueCode.too_big:
      return `${issue.maximum}文字以内で入力してください`;
  }

  if (
    issue.path?.some((segment: PropertyKey) => String(segment).includes('mail'))
  ) {
    return 'メールアドレスの形式で入力してください';
  }

  return '入力値が無効です';
};
