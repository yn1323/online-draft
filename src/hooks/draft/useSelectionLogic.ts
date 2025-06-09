import { useCallback, useMemo, useState } from 'react';

/**
 * 選択ロジックフック
 */
export interface SelectionValidation {
  isValid: boolean;
  errors: string[];
}

export const useSelectionLogic = () => {
  const [selection, setSelection] = useState('');
  const [comment, setComment] = useState('');

  const validateSelection = useCallback(
    (selection: string): SelectionValidation => {
      const errors: string[] = [];

      if (!selection.trim()) {
        errors.push('選択が入力されていません');
      }

      if (selection.length > 50) {
        errors.push('選択は50文字以内で入力してください');
      }

      return {
        isValid: errors.length === 0,
        errors,
      };
    },
    [],
  );

  const validateComment = useCallback(
    (comment: string): SelectionValidation => {
      const errors: string[] = [];

      if (comment.length > 200) {
        errors.push('コメントは200文字以内で入力してください');
      }

      return {
        isValid: errors.length === 0,
        errors,
      };
    },
    [],
  );

  const validation = useMemo(() => {
    const selectionValidation = validateSelection(selection);
    const commentValidation = validateComment(comment);

    return {
      isValid: selectionValidation.isValid && commentValidation.isValid,
      errors: [...selectionValidation.errors, ...commentValidation.errors],
      selection: selectionValidation,
      comment: commentValidation,
    };
  }, [selection, comment, validateSelection, validateComment]);

  const submit = useCallback(
    (onSubmit?: (selection: string, comment?: string) => void) => {
      if (validation.isValid && onSubmit) {
        onSubmit(selection.trim(), comment.trim() || undefined);
        setSelection('');
        setComment('');
        return true;
      }
      return false;
    },
    [selection, comment, validation.isValid],
  );

  const reset = useCallback(() => {
    setSelection('');
    setComment('');
  }, []);

  return {
    selection,
    comment,
    setSelection,
    setComment,
    validation,
    submit,
    reset,
  };
};
