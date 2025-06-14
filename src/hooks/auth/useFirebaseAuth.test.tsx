import { useFirebaseAuth } from './useFirebaseAuth';

describe('useFirebaseAuth', () => {
  test('フックが正常に定義されている', () => {
    // VRTとE2Eでテストするため、基本的な定義確認のみ
    expect(useFirebaseAuth).toBeDefined();
    expect(typeof useFirebaseAuth).toBe('function');
  });
});
