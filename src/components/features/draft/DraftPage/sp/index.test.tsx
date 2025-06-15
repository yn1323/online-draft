import { DraftPageSp } from './index';

describe('DraftPage', () => {
  test('コンポーネントが正常に定義されている', () => {
    // VRTで視覚的確認を行うため、基本的な定義確認のみ
    expect(DraftPageSp).toBeDefined();
    expect(typeof DraftPageSp).toBe('function');
  });
});
