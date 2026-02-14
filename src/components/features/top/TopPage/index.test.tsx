import { TopPage } from './index';

vi.mock('@/src/i18n/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

describe('TopPage', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(TopPage).toBeDefined();
    expect(typeof TopPage).toBe('function');
  });
});
