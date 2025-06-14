import React from 'react';
import { Button } from './index';

describe('Button', () => {
  test('基本Buttonコンポーネントが正常に定義されている', () => {
    // VRTで視覚的確認を行うため、基本的な定義確認のみ
    expect(Button).toBeDefined();
    expect(typeof Button).toBe('function');
  });
});
