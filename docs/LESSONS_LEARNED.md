# 重要な開発知見

## 🎯 設計判断の学び

### UI/UX設計原則確立
- **User-First Design採用**: 技術制約よりユーザー体験優先
- **Progressive Enhancement開発**: 動くもの→段階的改善
- **適度なフォーマル感**: ビジネス利用も想定した表現選択

### 重要な技術選択
- **リアルタイム同期パターン**: Jotai + Firebase onSnapshot（TanStack Query/RxJS不採用）
- **Chakra UI v3 Modern API準拠**: spacing→gap、aria-label必須化
- **Direct Import原則**: Barrelエクスポート禁止で依存関係明確化

## 🛠️ 技術課題解決パターン

### Storybookテスト品質確立
- **失敗**: MockXXXコンポーネント作成（品質保証にならない）
- **成功**: 実装同一性テスト原則 + 境界モックテスト戦略
- **効果**: 実コンポーネントのスモークテスト + VRT実現

### E2E設計思想確立  
- **採用**: 操作ベースE2E設計（Operations抽象化パターン）
- **原則**: User-Centric Testing（data-testid禁止、role+name優先）
- **バランス**: 成長段階プロジェクト向け（1操作3-5テスト）

### Firebase統合知見
- **Storybookモック**: MSWでHTTP API、環境分岐でWebSocket
- **型定義**: interfaceではなくtype使用、Legacy互換スキーマ準拠
- **エラーハンドリング**: 権限・ネットワークエラー包括対応

## 📊 開発効率化実績

### カスタムコマンド体系確立
- **`/refactor`**: lint→型チェック→末尾改行→ドキュメント更新
- **`/doc-update`**: 包括的知見蓄積システム
- **`/upload-all`**: 完全自動化ワークフロー

### 品質保証戦略
- **実コンポーネント必須**: MockXXXコンポーネント作成禁止
- **テストユーティリティ共通化**: `src/test-utils/`による再利用構造
- **段階的品質向上**: 機能実装→リファクタリング→知見記録

## 🔧 重要な制約発見

### Chakra UI v3制約対応
- **コンポーネント制限**: FadeとCollapse使用不可→条件分岐に変更
- **型安全性強化**: Box as Icon のsize属性エラー→適切なprops使用
- **API変更対応**: useColorModeValueのimport先変更

### Next.js 15 + Storybook
- **useRouterエラー**: 制約を逆手にとってLinkコンポーネント採用
- **Server Actions分離**: actions.ts分離でクリーンな責務分離実現

## 🎭 今後の開発指針

### 継続すべきパターン  
- **段階的実装**: 完璧より動くもの優先
- **知見記録**: 解決した問題は必ずドキュメント化
- **制約活用**: 技術制約を良い設計の契機として活用

### 警戒すべき落とし穴
- **過度なアニメーション**: 機能性優先、シンプルさ重視
- **Mock過多**: 実装と乖離したテスト回避
- **あやふやな表現**: 設計思想名で明確に言い切る

参考: Chakra UI v3移行、Storybookテスト改善、E2E戦略策定の各セッション