import { Button } from './index';

describe('Button', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(Button).toBeDefined();
    expect(typeof Button).toBe('function');
  });
});