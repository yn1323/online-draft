import { CreateRoomModal, useCreateRoomModal, createRoomSchema } from './index';

describe('CreateRoomModal', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(CreateRoomModal).toBeDefined();
    expect(typeof CreateRoomModal).toBe('function');
  });
});

describe('useCreateRoomModal', () => {
  test('フックが正常に定義されている', () => {
    expect(useCreateRoomModal).toBeDefined();
    expect(typeof useCreateRoomModal).toBe('function');
  });
});

describe('createRoomSchema', () => {
  describe('バリデーション', () => {
    test('空文字列はエラーになる', () => {
      const result = createRoomSchema.safeParse({ roomName: '' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('ルーム名を入力してください');
      }
    });

    test('スペースのみの文字列はtrim後にエラーになる', () => {
      const result = createRoomSchema.safeParse({ roomName: '   ' });
      // trimされて空文字列になるため、エラーになるはず
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('ルーム名を入力してください');
      }
    });

    test('31文字以上はエラーになる', () => {
      const longText = 'あ'.repeat(31);
      const result = createRoomSchema.safeParse({ roomName: longText });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('ルーム名は30文字以内で入力してください');
      }
    });

    test('1文字以上30文字以内は成功する', () => {
      const testCases = [
        'テスト',
        '2024年プロ野球ドラフト',
        'a',
        'あ'.repeat(30),
      ];

      testCases.forEach(roomName => {
        const result = createRoomSchema.safeParse({ roomName });
        expect(result.success).toBe(true);
        if (result.success) {
          expect(result.data.roomName).toBe(roomName);
        }
      });
    });

    test('前後の空白はtrimされる', () => {
      const result = createRoomSchema.safeParse({ roomName: '  テストルーム  ' });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.roomName).toBe('テストルーム');
      }
    });
  });
});