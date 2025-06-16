import { Input } from './index';

describe('Input', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(Input).toBeDefined();
    expect(typeof Input).toBe('object');
    expect(Input.$$typeof).toBeDefined();
  });
});