import { Card } from './index';

describe('Card', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(Card).toBeDefined();
    expect(typeof Card).toBe('function');
  });
});