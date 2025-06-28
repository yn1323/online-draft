import { Loading } from './index';

describe('Loading', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(Loading).toBeDefined();
    expect(typeof Loading).toBe('function');
  });
});
