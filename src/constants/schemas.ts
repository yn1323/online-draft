import { z } from 'zod';

// ユーザー作成フォームのスキーマ
export const userCreateSchema = z.object({
  userName: z
    .string()
    .min(1, 'ユーザー名を入力してください')
    .max(12, 'ユーザー名は12文字以内で入力してください')
    .regex(/^[^\s].*[^\s]$|^[^\s]$/, '先頭と末尾にスペースは使用できません'),
  avatarIndex: z
    .string()
    .min(1, 'アバターを選択してください')
    .regex(/^[1-9]|1[0-8]$/, '有効なアバターを選択してください'), // 1-18の範囲
});

export type UserCreateForm = z.infer<typeof userCreateSchema>;

// ドラフト作成フォームのスキーマ
export const draftCreateSchema = z.object({
  groupName: z
    .string()
    .min(1, 'グループ名を入力してください')
    .max(30, 'グループ名は30文字以内で入力してください'),
});

export type DraftCreateForm = z.infer<typeof draftCreateSchema>;

// 会議参加フォームのスキーマ
export const joinMeetingSchema = z.object({
  meetingInput: z
    .string()
    .min(1, '会議IDまたはURLを入力してください')
    .refine(
      (value) => {
        // 会議IDパターン（6-20文字の英数字）
        const idPattern = /^[a-zA-Z0-9]{6,20}$/;
        // URLパターン（https://で始まる）
        const urlPattern = /^https:\/\/.+/;
        return idPattern.test(value) || urlPattern.test(value);
      },
      '有効な会議IDまたはURLを入力してください'
    ),
});

export type JoinMeetingForm = z.infer<typeof joinMeetingSchema>;
