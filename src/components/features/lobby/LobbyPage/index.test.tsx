import React from 'react';
import { LobbyPage } from './index';

describe('LobbyPage', () => {
  test('コンポーネントが正常に定義されている', () => {
    // VRTで視覚的確認を行うため、基本的な定義確認のみ
    expect(LobbyPage).toBeDefined();
    expect(typeof LobbyPage).toBe('function');
  });
});
