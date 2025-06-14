import React from 'react';
import { Card } from './index';

describe('Card', () => {
  test('基本Cardコンポーネントが正常に定義されている', () => {
    // VRTで視覚的確認を行うため、基本的な定義確認のみ
    expect(Card).toBeDefined();
    expect(typeof Card).toBe('function');
  });
});
