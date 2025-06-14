import React from 'react';
import { Input } from './index';

describe('Input', () => {
  test('基本Inputコンポーネントが正常に定義されている', () => {
    // VRTで視覚的確認を行うため、基本的な定義確認のみ
    expect(Input).toBeDefined();
    expect(typeof Input).toBe('function');
  });
});