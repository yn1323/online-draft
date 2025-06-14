import React from 'react';
import { DraftPage } from './index';

describe('DraftPage', () => {
  test('コンポーネントが正常に定義されている', () => {
    // VRTで視覚的確認を行うため、基本的な定義確認のみ
    expect(DraftPage).toBeDefined();
    expect(typeof DraftPage).toBe('function');
  });
});
