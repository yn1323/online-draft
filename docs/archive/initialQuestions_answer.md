# コーディング規約策定 Q&A

このファイルは OnlineDraft プロジェクトのコーディング規約を対話形式で策定するための質問集です。
回答は各Questionの下に記載します。


## 🏗️ アーキテクチャ・設計思想

### コンポーネント設計哲学
- **Q1**: 単一責任の原則をどこまで厳密に適用しますか？（厳格 vs 実用的バランス）
実用的バランス
- **Q2**: props drilling vs context使用の判断基準は何ですか？
基本props drillingです。contextはほぼ利用しません。どうしても状態が必要になったら、外部ライブラリを利用します。
- **Q3**: コンポーネントの抽象化レベルをどう決めますか？（具体的 vs 汎用的）
基本具体。適宜リファクタを通して汎用化を行う。
- **Q4**: 再利用性 vs 特化性のバランスはどう取りますか？
まずは特化で作成。その後リファクタして再利用を意識するスタイル。
- **Q5**: Higher-Order Components vs Custom Hooks vs Render Props の使い分けは？
HOC, RenderPropsは絶対に利用しない。基本CustomHooks。
コード内のちょっとした処理であれば、コンポーネント内の同じファイルにcustomHooksを記載。
複数コンポーネント間で利用するのなら、別ディレクトリで共通化する。

### 状態管理設計思想
- **Q6**: ローカル状態 vs グローバル状態の境界線は何ですか？
基本ローカル。画面遷移で保持する必要のある値のみグローバルとする。
- **Q7**: Jotaiアトムの粒度をどう決めますか？（細分化 vs 統合）
ちょっとよくわからない。
- **Q8**: 状態の正規化 vs 非正規化の判断基準は？
ちょっとよくわからない。
- **Q9**: 楽観的更新 vs 悲観的更新の使い分けは？
基本悲観的更新。楽観的更新を用いる場合は指示をだす。
- **Q10**: 状態の永続化戦略（SessionStorage vs LocalStorage vs Firebase）は？
基本Firebase。どうしてもなときはSessionStorage.

### レイヤー分離・依存関係
- **Q11**: ビジネスロジックとUIロジックの分離方針は？
小さなコンポーネントならコンポーネント内で管理したい。
テストが書きにくければ別ファイルに切り出す方針。
- **Q12**: サービス層の責任範囲をどこまでにしますか？
ちょっとよくわからない。
- **Q13**: 循環依存を防ぐための構造ルールは？
2.ディレクトリで決まりを作るとか。
- **Q14**: 外部APIとの結合度をどう管理しますか？
コンポーネントから直アクセスせず、customHook等を噛ませたい

## 📝 コーディングスタイル・実装パターン

### 関数・メソッドの実装パターン
- **Q15**: Arrow Function vs Function Declaration の使い分けは？
ArrowFunction一択。一部Next.jsの/appを除く。
- **Q16**: 関数の引数が多い時（3個以上）の対処法は？（オブジェクト化 vs 個別引数）
2個以上でオブジェクト化する。ただし、第1引数はメインの処理で使うものとして、第2引数をオブジェクト化する。
- **Q17**: 関数の戻り値の型注釈は明示的 vs 推論どちらを好みますか？
推論！
- **Q18**: Early Return vs ネストした条件分岐どちらを好みますか？
Early Return
- **Q19**: 複雑な条件式の書き方（三項演算子 vs if文 vs switch文）は？
複雑なときはif分。シンプルであれば三項演算子。

### 変数・定数の宣言スタイル
- **Q20**: const vs let の使い分け基準は？
できれば全部const！
- **Q21**: 変数名の長さの好み（短縮 vs 説明的）は？
短縮せずわかりやすさ重視！
- **Q22**: 分割代入をどこまで積極的に使いますか？
積極的に活用してください！
- **Q23**: オブジェクトの初期化パターン（空オブジェクト vs 全プロパティ指定）は？
全プロパティ指定。そうしないとたぶんLintエラーになるよ！
- **Q24**: 配列操作の好み（for loop vs forEach vs map/filter/reduce）は？
map/filter/reduceなど

### 非同期処理の実装パターン
- **Q25**: async/await vs Promise.then() の使い分けは？
async/await一択！
- **Q26**: 複数の非同期処理の並列実行（Promise.all vs 個別await）は？
Promise.all
- **Q27**: エラーハンドリング（try-catch vs .catch()）の好みは？
特にないかなー。見やすい方で！
- **Q28**: ローディング状態の管理パターンは？
今回はstateでOK。
- **Q29**: 非同期処理のキャンセレーション実装は？
特に意識しないでOK

## ⚛️ React特有の実装スタイル

### コンポーネント定義パターン
- **Q30**: React.FC vs 通常の関数コンポーネントどちらを好みますか？
通常の関数コンポーネント
- **Q31**: Propsの型定義（interface vs type）の使い分けは？
type
- **Q32**: デフォルトPropsの実装方法（デフォルト引数 vs defaultProps）は？
- **Q33**: 条件付きレンダリング（&& vs 三項演算子 vs if文）の好みは？
&&
- **Q34**: コンポーネント内の関数定義（useCallback必須 vs 必要時のみ）は？
必要時のみ

### Hooks使用パターン
- **Q35**: useState vs useReducer の使い分け基準は？
基本useState。たぶんuseReducerじゃなきゃできないことは少ないはず。
- **Q36**: useEffect内の依存配列の書き方（全依存 vs 最小限）は？
そもそもuseEffectはバグの原因なので最小限にしたいです！
- **Q37**: カスタムフックの分離タイミングは？
テストが書きやすいかどうか。また、対象のhookをモックする必要があるとか。
- **Q38**: useMemory/useCallback の使用基準（積極的 vs 慎重）は？
基本利用無しでOK.ただ、useMemoはスコープを作りたくてたまに利用します。
- **Q39**: ref使用時（useRef vs createRef）の好みは？
基本useRefで！

## 🆕 React 19・Next.js 15特化戦略

### React 19 新機能活用
- **Q40**: `use()` Hook の使用範囲（Promise vs Context vs どちらも）は？
よくわからない
- **Q41**: `startTransition()` の使用基準（重い処理 vs UI更新 vs 両方）は？
重い処理だけで！
- **Q42**: `useDeferredValue()` vs `useTransition()` の使い分けは？
よくわからない
- **Q43**: Suspense境界の配置戦略（コンポーネント単位 vs ページ単位 vs 機能単位）は？
今回は利用無しでOK
- **Q44**: `<Suspense>` fallback UI の詳細度（スケルトン vs スピナー vs カスタム）は？
今回は利用無しでOK
- **Q45**: Concurrent Rendering での状態管理注意点は？
よくわからない

### Next.js App Router運用
- **Q46**: Server Components使用の最大化度（可能な限り vs 必要時のみ）は？
必要時のみでOK
- **Q47**: Client Components化の判断基準（state使用 vs イベント使用 vs ブラウザAPI）は？
state使用 vs イベント使用 vs ブラウザAPI左記のいずれか利用時
- **Q48**: 'use client' 配置の粒度（ファイル先頭 vs 必要最小限のコンポーネント）は？
よくわからない
- **Q49**: Server/Client境界でのdata passing最適化は？
よくわからない
- **Q50**: Client Components内でのServer Components children pattern使用は？
よくわからない

### キャッシュ・レンダリング戦略
- **Q51**: Static Generation vs Server-Side Rendering の使い分けは？
利用しない
- **Q52**: ISR (Incremental Static Regeneration) 使用の基準は？
利用しない
- **Q53**: revalidate設定の粒度（ページ別 vs 機能別 vs 統一）は？
キャッシュはなし
- **Q54**: Data Cache vs Full Route Cache の使い分けは？
利用しない
- **Q55**: Edge Runtime vs Node.js Runtime の選択基準は？
よくわからない。デフォルトのままで。

## 🔤 命名規則・ファイル構成

### 命名パターンの一貫性
- **Q56**: boolean値の命名規則（is/has/can/should prefix）は？
基本isだけど、has, can, shouldも状況に応じて利用する。
- **Q57**: イベントハンドラーの命名パターン（handle/on prefix）は？
handle
- **Q58**: 定数の命名規則（SCREAMING_SNAKE vs PascalCase）は？
PascalCase
- **Q59**: 型名の接尾辞（Type/Interface/Props/State）は？
Type
- **Q60**: カスタムフックの命名規則（use prefix以外の制約）は？
use prefixのみ！

### ファイル・ディレクトリ構成哲学
- **Q61**: feature-first vs type-first どちらを優先しますか？
まずはfeature-first。共通化できそうなものはtype-first的なディレクトリに流しておく。
- **Q62**: index.tsファイルの使用方針は？
コロケーションですべてのファイルをindex.tsにしたい。（ディレクトリ名が機能、役割名）
- **Q63**: テストファイルの配置（同階層 vs __tests__ディレクトリ）は？
コロケーションあのでindex.ts or index.tsxと同じ階層。
- **Q64**: ユーティリティ関数の分類基準は？
副作用がなく、ドメインロジックを持たないもの。
- **Q65**: 共通コンポーネントの昇格タイミングは？
2回以上利用していたら

## 🔧 TypeScript活用方針

### 型安全性のレベル設定
- **Q66**: strict modeの各オプションをどこまで有効にしますか？
全て
- **Q67**: any使用の例外ケースと代替手段は？
ライブラリ内部の型のとき。
- **Q68**: unknown vs any の使い分けは？
できるならunknown無理そうなら any + biome comment
- **Q69**: 型アサーションの使用ガイドラインは？
よくわからない
- **Q70**: 型ガードの実装パターンは？
よくわからない

### 型定義の組織化戦略
- **Q71**: Domain types vs UI types の分離方針は？
UITypes
- **Q72**: 型の再利用 vs 特化の判断基準は？
ロジックは特化。コンポーネントは再利用できるようにtype Propsで必ず切っておく
- **Q73**: ジェネリクス使用の複雑さの上限は？
なるべく使用しない。汎用関数、汎用コンポーネントはジェネリックスを利用したい。
- **Q74**: 条件型やmapped typesの使用方針は？
必要に応じて
- **Q75**: 型定義ファイルの粒度は？
よくわからない。型は基本そのファイル内で

### TypeScript実装の詳細
- **Q76**: 型エイリアス vs インターフェースの使い分けは？
全てtypeを利用する
- **Q77**: Optional vs Required プロパティの設計方針は？
必要に応じて。
- **Q78**: Union Types vs Enum の使い分けは？
必ずUnion
- **Q79**: ジェネリクスの命名規則（T vs 説明的名前）は？
T
- **Q80**: 型ガードの実装パターン（user-defined type guards vs in演算子）は？
特にこだわりなし

## 🧪 テスト戦略・品質保証

### E2Eテスト運用詳細
- **Q81**: E2Eテストの実行頻度（毎commit vs 毎PR vs 毎リリース）は？
毎PRの
- **Q82**: テストシナリオの粒度（ハッピーパス vs エッジケース比率）は？
ハッピーパスだけでOK
- **Q83**: テストデータ管理（固定 vs 動的生成 vs 本番データコピー）は？
固定でOK
- **Q84**: 並列実行時の分離度（完全独立 vs 部分共有）は？
完全独立
- **Q85**: 失敗時のデバッグ情報保存レベル（スクリーンショット vs 動画 vs DOM状態）は？
スクリーンショットと動画
- **Q86**: cross-browser テストの対象範囲（Chrome only vs Multi-browser）は？
Chrome only
- **Q87**: モバイル端末テストの実装度は？
モバイルは実施しない

### VRT (Visual Regression Testing) 運用
- **Q88**: スクリーンショット比較の閾値設定（ピクセル単位 vs パーセンテージ）は？
よくわからない
- **Q89**: レスポンシブ対応のテスト範囲（デスクトップ vs タブレット vs モバイル）は？
PC、SP両方
- **Q90**: ダークモード vs ライトモードの両方テストしますか？
ライトモードのみ 
- **Q91**: アニメーション中の状態キャプチャ方針は？
5．アニメーション終了時のみでOK
- **Q92**: フォント・ブラウザ差分の許容レベルは？
reg-suitによる
- **Q93**: VRT失敗時の承認プロセス（自動更新 vs 手動確認）は？
手動確認
- **Q94**: Storybook統合レベル（全Story vs 重要Storyのみ）は？
全Story

### Storybook品質戦略
- **Q95**: Story作成の義務レベル（全Component必須 vs 主要のみ）は？
全コンポーネント必須。ただし主要レイアウトのみ
- **Q96**: Story variants の網羅度（全Props組み合わせ vs 代表的パターン）は？
代表的パターンのみ
- **Q97**: Interactive testing の実装度（クリック vs フォーム入力 vs 複雑操作）は？
複雑操作だが、ハッピーパスだけでOK
- **Q98**: A11y addon の活用レベル（基本チェック vs 詳細検証）は？
A11yは重視しない。
- **Q99**: Design token との同期度（手動 vs 自動更新）は？
DesignTokenの考慮はしない
- **Q100**: Storybook デプロイ頻度（開発時のみ vs 本番公開）は？
開発時のみ

### テストケース設計思想
- **Q101**: Happy Path vs Edge Case のテスト比重は？
ハッピーパス 5, edge case 1
- **Q102**: Mock使用の積極度（最小限 vs 広範囲）は？
最小限。ただし、Firestoreの場合はcustom HookにないしてMock化すること
- **Q103**: テストデータの準備方法（ファクトリー vs インライン）は？
インライン
- **Q104**: アサーションの詳細度（厳密 vs 必要最小限）は？
必要最小限
- **Q105**: テスト名の命名パターン（日本語 vs 英語, describe文の構成）は？
日本語

## 🎨 UI/UX設計・実装方針

### デザインシステム・コンポーネント設計
- **Q106**: Atomic Design の厳密度（厳格分類 vs 柔軟運用）は？
柔軟運用。AtomicDesignのディレクトリ名を用いるが、意味は別とする。
- **Q107**: コンポーネントAPI設計の一貫性レベル（props命名統一度）は？
わからない
- **Q108**: バリアント vs 個別コンポーネントの判断基準は？
わからない
- **Q109**: Compound Component pattern の使用度は？
利用しない
- **Q110**: スタイルprops vs styled-component の使い分けは？
わからない。styled-componentは利用しないと思う。
- **Q111**: カスタムフックでのUI状態管理範囲は？
なんでもOK。状態系、外部サービス接続などの粒度では分けておきたい。

### レスポンシブ・アダプティブデザイン
- **Q112**: ブレイクポイント設計の詳細度（5段階 vs 3段階 vs 2段階）は？
2段階でOK
- **Q113**: モバイルファースト vs デスクトップファーストどちらを基準にしますか？
デスクトップファースト
- **Q114**: タッチデバイス対応の詳細度（タップエリアサイズ vs ジェスチャー対応）は？
- **Q115**: フォールバック対応の範囲（古いブラウザサポート度）は？
なし。最新版のみでOK
- **Q116**: 画面回転対応の必要性は？
なし。スマホ横向きは考慮しない

### インタラクション・アニメーション設計
- **Q117**: アニメーション duration の統一基準（150ms vs 300ms vs 状況別）は？
150ms
- **Q118**: イージング関数の使い分け（ease vs ease-in-out vs cubic-bezier）は？
easeに統一
- **Q119**: ローディング状態の表現詳細度（スピナー vs スケルトン vs プログレスバー）は？
スピナーとする
- **Q120**: hover/focus状態の一貫性レベルは？
わからない
- **Q121**: マイクロインタラクションの実装度（ボタン押下感 vs フォーム入力フィードバック）は？
ボタン押下時
- **Q122**: reduced-motion 対応の詳細度は？
reduced-motionとは？

### Chakra UI使用パターン
- **Q123**: inline style props vs sx props の使い分けは？
inline style
- **Q124**: カスタムコンポーネントのスタイル継承方法は？
カスタムコンポーネントとは？
- **Q125**: レスポンシブ対応の書き方（配列記法 vs オブジェクト記法）は？
違いあるの？
- **Q126**: テーマのカスタマイズレベル（最小限 vs 大幅カスタム）は？
最小限
- **Q127**: アニメーション実装（Framer Motion vs CSS Transition）の好みは？
Framer Motion

## ⚡ パフォーマンス・最適化戦略

### Core Web Vitals 具体的目標値
- **Q128**: LCP (Largest Contentful Paint) 目標値（2s vs 2.5s）は？
重視しない
- **Q129**: FID (First Input Delay) 許容値（100ms vs 300ms）は？
重視しない
- **Q130**: CLS (Cumulative Layout Shift) 閾値（0.1 vs 0.25）は？
重視しない
- **Q131**: INP (Interaction to Next Paint) 目標値は？
重視しない
- **Q132**: TTFB (Time to First Byte) 許容値は？
重視しない

### React最適化
- **Q133**: `React.memo()` 使用の判断基準（全コンポーネント vs 重いコンポーネントのみ）は？
重いコンポーネントのみ
- **Q134**: `useMemo()` / `useCallback()` の使用基準（積極的 vs 測定後 vs プロファイル後）は？
重いコンポーネントのみ
- **Q135**: `useRef()` vs `useState()` の使い分け（DOM参照 vs 値保持 vs タイマー管理）は？
基本useState
- **Q136**: Context分割の粒度（機能別 vs データ別 vs パフォーマンス別）は？
利用しない。contextに逃がすのならJotaiにするかprops drillingで頑張る
- **Q137**: Re-render最適化の優先度（開発速度 vs パフォーマンス）は？
？

### リソース最適化
- **Q138**: 画像最適化の自動化度（WebP変換 vs AVIF対応 vs サイズ別最適化）は？
重視しない
- **Q139**: フォント最適化（subset vs display:swap vs preload）の方針は？
早いやつ！
- **Q140**: JavaScript bundle サイズ制限（initial vs chunk単位）は？
chink単位かな？
- **Q141**: CSS最適化レベル（Critical CSS vs 全CSS最適化）は？
こだわりなし
- **Q142**: Third-party script の管理方針（最小限 vs 必要時許可）は？
最小限

### Next.js最適化
- **Q143**: next/image 最適化設定（quality vs size vs format）の詳細は？
最適化！
- **Q144**: next/font 使用方針（Google Fonts vs Local Fonts vs Variable Fonts）は？
google fonts
- **Q145**: Bundle Analyzer使用頻度（毎ビルド vs 定期 vs 問題発生時）は？
わからない
- **Q146**: Code Splitting粒度（ページ単位 vs 機能単位 vs コンポーネント単位）は？
わからない。ChakraUI使うから考慮不要
- **Q147**: Third-party Scripts最適化（next/script strategy設定）は？
基本なし
- **Q148**: Prefetching設定（aggressive vs conservative vs disabled）の方針は？
Aggressive（Linkタグ使うってことだよね）

## 🔄 CI/CD・開発プロセス運用

### CI監視・対応方針
- **Q149**: CI失敗時の対応速度要件（即座 vs 1時間以内 vs 日内）は？
即座
- **Q150**: テスト失敗 vs ビルド失敗 vs Lint失敗の重要度は？
いずれかが失敗したらPRマージできない
- **Q151**: フレーキーテストの対処方針（即修正 vs 一時無効化）は？
即時修正。修正方針検討
- **Q152**: CI実行時間の許容上限（5分 vs 10分 vs 制限なし）は？
10分
- **Q153**: 並列実行 vs 直列実行の判断基準は？
基本並列実行で時間短縮を目指す

### ブランチ戦略・Git運用
- **Q154**: Git Flow vs GitHub Flow vs GitLab Flow どれを採用しますか？
独自のブランチ戦略とします。
- **Q155**: feature branch の粒度（機能単位 vs タスク単位）は？
機能単位、ときどきタスク単位
- **Q156**: 長期ブランチの運用方針（develop branch必要性）は？
こだわりなし
- **Q157**: マージ方式（Merge commit vs Squash vs Rebase）の使い分けは？
Squash
- **Q158**: Conflict解決の責任者（feature作成者 vs レビュアー）は？
feature作成者

### コミット・PR運用
- **Q159**: コミットメッセージの詳細度（Conventional Commits準拠度）は？
よしなに
- **Q160**: PRサイズの制限（行数 vs ファイル数 vs 概念単位）は？
なし
- **Q161**: レビュアー指定方針（自動割当 vs 手動選択）は？
指定なし
- **Q162**: レビュー完了基準（Approve数 vs 特定人承認）は？
指定なし。個人開発なので
- **Q163**: Draft PR の活用度（WIP共有 vs 完成後のみ）は？
基本DraftにしなくてOK。今回初なので

### デプロイ・リリース戦略
- **Q164**: Feature Flag使用方針（積極活用 vs 最小限）は？
利用しない
- **Q165**: ロールバック基準・手順の詳細度は？
利用しない
- **Q166**: カナリアリリース vs Blue-Green vs Rolling deployment選択は？
利用しない
- **Q167**: 本番データベースマイグレーション戦略は？
なし
- **Q168**: ホットフィックスのプロセス（緊急度別対応）は？
なし

## 💳 技術的負債・保守性管理

### 負債の分類・優先順位
- **Q169**: 設計負債 vs コード負債 vs テスト負債 vs ドキュメント負債の重み付けは？
コード負債 > テスト負債 > ドキュメント負債 > 設計負債
- **Q170**: 負債の可視化方法（TODO/FIXME/HACK コメント vs Issue管理）は？
TODOコメントで！
- **Q171**: 負債解消のスプリント内時間配分（新機能 vs リファクタリング比率）は？
基本は新機能開発で！
- **Q172**: レガシーコード改善の判断基準（全書き換え vs 段階改修）は？
全書き換え
- **Q173**: 外部依存関係の更新頻度・方針は？
renovateで自動化してます

### コード品質維持戦略
- **Q174**: 複雑度指標の監視レベル（Cyclomatic Complexity閾値）は？
なにこれ？
- **Q175**: デッドコードの検出・削除頻度は？
なにこれ？たぶんLinterとかで判断できる
- **Q176**: 重複コードの許容レベルは？
2回以上かいたら共通化！
- **Q177**: コメント品質の維持方針（量 vs 質）は？
質

## 📊 監視・ログ・運用戦略

### エラー監視・対応
- **Q178**: エラー率の許容閾値（0.1% vs 1% vs 5%）は？
指定なし。個人開発のため
- **Q179**: アラート設定の粒度（即座通知 vs 集約通知）は？
指定なし。個人開発のため
- **Q180**: ログレベルの運用（本番DEBUG必要性）は？
指定なし。個人開発のため
- **Q181**: パフォーマンス劣化の検知基準（応答時間 vs スループット）は？
指定なし。個人開発のため
- **Q182**: ユーザー行動分析の詳細度は？
指定なし。個人開発のため

### セキュリティ・コンプライアンス
- **Q183**: 依存関係脆弱性の対応速度（Critical即座 vs 週次確認）は？
指定なし。個人開発のため
- **Q184**: 個人情報取扱の厳密度（最小限 vs 利便性重視）は？
指定なし。個人開発のため
- **Q185**: 認証トークンの有効期限設定は？
指定なし。個人開発のため
- **Q186**: HTTPS強制レベル（全強制 vs 部分許可）は？
指定なし。個人開発のため
- **Q187**: セキュリティヘッダーの設定詳細度は？
指定なし。個人開発のため

## 🎯 エラーハンドリング・信頼性

### React・Next.js エラー対応
- **Q188**: Error Boundary配置戦略（Global vs Page vs Component）は？
指定なし。個人開発のため
- **Q189**: Server-side Error vs Client-side Error の処理方針は？
特になし
- **Q190**: Error reporting（Sentry vs 自前 vs 組み合わせ）の詳細度は？
特になし
- **Q191**: 404・500エラーページのカスタマイズレベルは？
指定なし。個人開発のため
- **Q192**: ハイドレーションエラー対策の詳細度は？
指定なし。個人開発のため

### セキュリティ対策
- **Q193**: XSS対策の詳細度（CSP vs Sanitization vs 両方）は？
指定なし。個人開発のため
- **Q194**: CSRF対策（Next.js内蔵 vs 追加対策）の必要性は？
指定なし。個人開発のため
- **Q195**: Security Headers設定（next.config.ts vs Middleware）の詳細は？
指定なし。個人開発のため
- **Q196**: API Routes認証・認可の詳細設計は？
指定なし。個人開発のため
- **Q197**: Client-side secrets管理の厳密度は？
指定なし。個人開発のため

## 🗃️ データ処理・状態管理

### Jotai使用パターン
- **Q198**: Atomの分割粒度（細分化 vs 統合）の好みは？
特になし
- **Q199**: Derived atomsの使用頻度は？
特になし
- **Q200**: Atom with storageの活用範囲は？
特になし
- **Q201**: Async atomsのエラーハンドリングパターンは？
特になし
- **Q202**: Atomの命名規則（接尾辞Atom必須 vs 自由）は？
自由

### Firebase連携パターン
- **Q203**: Firestore クエリの最適化レベルは？
特になし
- **Q204**: リアルタイム更新 vs 手動更新の使い分けは？
全てリアルタイム更新
- **Q205**: オフライン対応の実装度は？
考慮なしでOK
- **Q206**: セキュリティルールの厳密さレベルは？
考慮なしでOK
- **Q207**: バッチ処理 vs 個別処理の判断基準は？
考慮なしでOK

### 状態管理品質保証
- **Q208**: 状態の整合性チェック頻度（リアルタイム vs 定期 vs 手動）は？
リアルタイム
- **Q209**: 楽観的更新失敗時のロールバック詳細度は？
楽観的更新を利用しない。
- **Q210**: オフライン時のデータ同期戦略は？
考慮なしでOK
- **Q211**: データ重複指名状態の検出・解決方針は？
考慮なしでOK
- **Q212**: 状態のバリデーション実装度（型レベル vs ランタイム vs ビジネスルール）は？
おまかせで

## 🌐 アクセシビリティ・国際化

### アクセシビリティ対応
- **Q213**: WCAG準拠レベル（AA vs AAA）の目標は？
考慮なしでOK
- **Q214**: キーボードナビゲーション対応の詳細度（Tab順序 vs ショートカット vs カスタム操作）は？
考慮なしでOK
- **Q215**: スクリーンリーダー対応（aria-label vs aria-describedby vs 構造的マークアップ）の詳細度は？
考慮なしでOK
- **Q216**: 色覚多様性対応（色のみ情報伝達禁止 vs アイコン併用 vs パターン使用）は？
考慮なしでOK
- **Q217**: フォントサイズ・行間設定の柔軟度（ユーザー設定尊重度）は？
考慮なしでOK
- **Q218**: 音声・動画コンテンツの代替手段提供度は？
考慮なしでOK

### 認知アクセシビリティ・ユーザビリティ
- **Q219**: エラーメッセージの明確度（技術的 vs ユーザーフレンドリー）は？
ユーザーフレンドリー
- **Q220**: 操作の取り消し可能度（アンドゥ機能 vs 確認ダイアログ）は？
確認ダイアログ
- **Q221**: 情報構造の分かりやすさ（階層表現 vs フラット表現）は？
なにこれ？
- **Q222**: 認知負荷軽減の工夫レベル（段階的開示 vs 一覧表示）は？
なにこれ？

### 国際化・ローカライゼーション
- **Q223**: 国際化対応の準備度（将来対応 vs 現在必須）は？
考慮なしでOK
- **Q224**: 翻訳キー管理の粒度（単語単位 vs 文章単位 vs 文脈単位）は？
考慮なしでOK
- **Q225**: 動的コンテンツの翻訳対応（リアルタイム vs 事前翻訳）は？
考慮なしでOK
- **Q226**: 数値・日付・通貨フォーマットの地域対応度は？
考慮なしでOK
- **Q227**: RTL言語対応の準備度（レイアウト vs アイコン vs アニメーション）は？
考慮なしでOK
- **Q228**: フォント対応の国際化度（日本語 vs 中国語 vs アラビア語等）は？
考慮なしでOK

## 🛠️ 開発環境・ツール統一

### IDE・エディタ設定
- **Q229**: VSCode拡張機能の推奨・必須レベルは？
.vscodeに該当ファイルを設置済み
- **Q230**: Formatter設定の統一度（Prettier vs Biome設定詳細）は？
すべてBiome
- **Q231**: Linter厳密度（Error vs Warning境界）は？
Biome設定に従う
- **Q232**: デバッガー使用 vs console.log デバッグの方針は？
どちらでも

### 開発効率・自動化
- **Q233**: コード生成ツール（Copilot等）の活用方針は？
Claude Code
- **Q234**: テンプレート・スニペット標準化度は？
なにこれ？
- **Q235**: 開発サーバー起動時間の許容上限は？
30秒
- **Q236**: ホットリロード vs フルリロードの判断基準は？
開発時はホットリロード

### 開発体験品質
- **Q237**: 開発サーバー起動時間の目標値（3秒 vs 10秒 vs 制限なし）は？
10秒
- **Q238**: ホットリロード性能の許容値（変更検知速度）は？
指定なし
- **Q239**: TypeScript型チェック速度の目標値は？
10秒
- **Q240**: Linting・Formatting実行速度の許容値は？
指定なし
- **Q241**: ビルド時間の目標値（本番ビルド vs 開発ビルド）は？
指定なし

### デバッグ・トラブルシューティング
- **Q242**: エラーメッセージの詳細度（スタックトレース vs 原因説明）は？
指定なし
- **Q243**: 開発時ログの出力レベル（詳細 vs 必要最小限）は？
必要最小限
- **Q244**: デバッグツール統合度（React DevTools vs Redux DevTools等）は？
不要
- **Q245**: パフォーマンス分析ツールの活用度は？
不要

## 📚 ドキュメント・ナレッジ管理

### 技術文書戦略
- **Q246**: API仕様書の詳細度（OpenAPI完全準拠度）は？
不要
- **Q247**: アーキテクチャ図の更新頻度は？
不要
- **Q248**: 運用手順書の粒度（ステップバイステップ詳細度）は？
不要
- **Q249**: 障害対応手順の文書化レベルは？
不要

### 知識共有・オンボーディング
- **Q250**: 新メンバー向け教育資料の充実度は？
不要
- **Q251**: 技術選定理由の文書化義務は？
不要
- **Q252**: 設計判断の記録保持期間は？
不要
- **Q253**: コードコメント vs 外部文書の使い分けは？
基本コードコメント。要件定義、設計、USMはMDで残しておきたい。

## 🔮 将来対応・拡張性

### アーキテクチャ拡張性
- **Q254**: Micro-frontends対応の準備度は？
不要
- **Q255**: Multi-tenant対応の考慮度は？
不要
- **Q256**: 大規模チーム開発対応（モノレポ vs マルチレポ）は？
不要
- **Q257**: React Server Components進化への追従方針は？
不要
- **Q258**: Next.js新機能導入の積極度は？
積極

### パフォーマンス・スケーラビリティ対応
- **Q259**: 大量データ表示時の仮想化戦略は？
不要
- **Q260**: リアルタイム機能のスケーリング対応は？
不要
- **Q261**: Global State肥大化対策は？
なるべくstateはコンポーネント内にとどまらせる
- **Q262**: Component tree深度の管理方針は？
あんまりにも深くならよう注意
- **Q263**: Memory leak防止の詳細対策は？
不要
