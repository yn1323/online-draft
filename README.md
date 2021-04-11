# React Template

## Service Worker
1. Cordova使用時は、 ２４，２５,26行目を修正すること
## Stateを追加するときは。。。
1. src/store内に新規ファイルを作成
1. src/store/index.tsを修正
1. src/type/state.d.tsを修正

## おすすめルール
1. Prop Drillingの回避
   - src/component/organismでデータを管理
   - src/component/organism以下にはsetterを指定
   - src/component/organism -> molecule -> atomのデータやり取りは、Render Propを使用
   1. 以下のようなイメージでやるとうまくいくかも
      - atom・・・最小単位の部品(ボタン、テキストボックスとか)
      - molecules・・・atomの集合体、レイアウト調整
      - organisms・・・Render Propでmolecule, atomを描画+データ管理
      - template・・・お好きにどうぞ
      - page・・・router指定先

## QA
1. ts6142が発生
   - https://github.com/facebook/create-react-app/issues/10144
1. Fast Refreshでブラウザが更新されない
   - Fast Refreshをoffにする
   - https://github.com/facebook/create-react-app/issues/10078
1. 構文エラーチェックが遅い
   - VSCodeのワークスペースに保存して使うと早くなるかも
