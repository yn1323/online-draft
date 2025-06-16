import { TopPage } from './index';

describe('TopPage', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(TopPage).toBeDefined();
    expect(typeof TopPage).toBe('function');
  });
});