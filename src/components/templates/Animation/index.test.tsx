import { Animation } from './index';

describe('Animation', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(Animation).toBeDefined();
    expect(typeof Animation).toBe('function');
  });
});
