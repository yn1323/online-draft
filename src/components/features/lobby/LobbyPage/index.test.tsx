import { LobbyPage } from './index';

vi.mock('@/src/i18n/navigation', () => ({
  Link: ({ children }: { children: unknown }) => children,
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

describe('LobbyPage', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(LobbyPage).toBeDefined();
    expect(typeof LobbyPage).toBe('function');
  });
});
