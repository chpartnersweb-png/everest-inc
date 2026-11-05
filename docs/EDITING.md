# 編集ガイド

## 実装内容と確認状況

2026年11月5日、1ページの家具・家電販売／買取サイトを実装しました。写真調の生成画像7点、独自SVGのブランド表現・アイコンを使用しています。

ユーザーの指定により、実装後のビルド、型チェック、テスト、ブラウザ表示・動作確認、開発サーバー起動は実施していません。デプロイも行っていません。

## 主な編集箇所

| 編集する内容 | ファイル |
| --- | --- |
| 会社名、電話、住所、営業情報、Facebook、価格目安 | `src/data/site.ts` |
| よくあるご質問 | `src/data/faqs.ts` |
| 画像の読み込み | `src/data/images.ts` |
| 商品カテゴリの説明 | `src/components/Products.astro` |
| 新生活セットの見出し・説明 | `src/components/NewLifeSet.astro` |
| 引越しサポート・配送・設置の条件 | `src/components/DeliverySupport.astro` |
| 買取案内 | `src/components/Purchase.astro` |
| 相談の流れ・保証表示 | `src/components/FlowAndWarranty.astro` |
| サイトの色・文字・余白・画面幅への対応 | `src/styles/global.css` |
| 正式URL、タイトル、説明文、robots指定 | `src/config/seo.mjs` |
| OGP、構造化データ、メタタグの出力 | `src/components/Seo.astro` |
| ページ全体の順番 | `src/pages/index.astro` |

価格・サービス内容を変更した際は、関連するFAQ、検索用説明文、保証・サービスの見出しも合わせて編集してください。電話番号は表示用と `tel:` リンク用の両方を更新します。住所は `site.ts` の `postalAddress` で管理し、表示住所とSEOの住所へ反映します。構造化データの電話番号も同ファイルの発信リンクから生成します。

## 画像

生成元のPNGは `src/assets/generated/` にあります。Astroの画像機能で表示サイズを指定し、ページ用にWebPへ変換する構成です。

PC・スマートフォン用ヒーローは `<picture>` で切り替えます。商品・暮らし・設置の画像は実在の商品の写真ではありません。画像の用途と生成指示は `GENERATED-ASSETS.md` を参照してください。

ユーザーの追加指定により、画像上・画像付近の注記とフッターの生成画像に関する説明文言は削除しています。実際の商品写真へ置き換える場合は、対応する画像と代替テキストを同時に更新してください。

## 公開URLの設定

正式な公開URLは `https://everest-inc.pages.dev/` です。`src/config/seo.mjs` の `siteUrl` に設定済みで、環境変数 `PUBLIC_SITE_URL` は不要です。

`astro.config.mjs`、canonical、OGP、構造化データ、robots.txt、sitemap.xmlはこの共通URLを参照します。OGP画像はヒーロー画像から1200×630のJPEGを作る設定です。

robots.txtとsitemap.xmlは `src/pages/` の静的エンドポイントでビルド時に生成されます。SEO設定の詳細と公開後の作業は `SEO.md` を参照してください。今回のSEO更新後も、ご指定によりビルド・表示確認・デプロイは実施していません。

## 開発サーバー

このプロジェクトの `AGENTS.md` の指定コマンドは以下です。今回は実行していません。

```text
npx astro dev --background
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## 公開前に確定する情報

- セット価格の税込・税別、具体的な組み合わせ・点数。
- 引越しサポートの対象距離・注文条件・作業範囲。
- 配送料と追加料金が生じる条件。
- 商品ごとの保証期間・保証内容。
- 公開先への変更反映（正式URLは確定済み）。

現状はいただいた情報に基づき、価格は目安として表示し、未確定の詳細は電話で確認する案内を掲載しています。
