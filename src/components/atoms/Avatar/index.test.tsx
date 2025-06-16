import { Avatar } from './index';

describe('Avatar', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(Avatar).toBeDefined();
    expect(typeof Avatar).toBe('function');
  });
});