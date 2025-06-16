import { FirebaseTest } from './index';

describe('FirebaseTest', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(FirebaseTest).toBeDefined();
    expect(typeof FirebaseTest).toBe('function');
  });
});