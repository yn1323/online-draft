import React from 'react';
import { FirebaseTest } from './index';

describe('FirebaseTest', () => {
  test('コンポーネントが正常に定義されている', () => {
    // VRTで視覚的確認を行うため、基本的な定義確認のみ
    expect(FirebaseTest).toBeDefined();
    expect(typeof FirebaseTest).toBe('function');
  });
});
