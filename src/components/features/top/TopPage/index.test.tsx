import React from 'react';
import { TopPage } from './index';

describe('TopPage', () => {
  test('コンポーネントが正常に定義されている', () => {
    // VRTで視覚的確認を行うため、基本的な定義確認のみ
    expect(TopPage).toBeDefined();
    expect(typeof TopPage).toBe('function');
  });
});
