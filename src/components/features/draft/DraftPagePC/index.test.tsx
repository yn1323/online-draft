import React from 'react';
import { DraftPagePC } from './index';

describe('DraftPagePC', () => {
  test('PC版ドラフトページコンポーネントが正常に定義されている', () => {
    // VRTで視覚的確認を行うため、基本的な定義確認のみ
    expect(DraftPagePC).toBeDefined();
    expect(typeof DraftPagePC).toBe('function');
  });
});