import { sleep } from './index';

describe('sleep', () => {
  test('関数が正常に定義されている', () => {
    expect(sleep).toBeDefined();
    expect(typeof sleep).toBe('function');
  });
});