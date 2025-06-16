import { createBaseUrl, getOriginFromRequest } from './index';

describe('createBaseUrl', () => {
  test('関数が正常に定義されている', () => {
    expect(createBaseUrl).toBeDefined();
    expect(typeof createBaseUrl).toBe('function');
  });
});

describe('getOriginFromRequest', () => {
  test('関数が正常に定義されている', () => {
    expect(getOriginFromRequest).toBeDefined();
    expect(typeof getOriginFromRequest).toBe('function');
  });
});