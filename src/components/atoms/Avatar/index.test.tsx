import React from 'react';
import { Avatar } from './index';

describe('Avatar', () => {
  test('基本Avatarコンポーネントが正常に定義されている', () => {
    // VRTで視覚的確認を行うため、基本的な定義確認のみ
    expect(Avatar).toBeDefined();
    expect(typeof Avatar).toBe('function');
  });
});
