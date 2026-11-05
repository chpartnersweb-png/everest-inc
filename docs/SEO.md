# SEO設定・公開後の作業

更新日：2026年11月5日

## 正式URLと設定元

正式URLはユーザー指定の **https://everest-inc.pages.dev/** です。

`src/config/seo.mjs` にURL・検索タイトル・説明文・robots指定・SNS画像の代替テキストをまとめています。Astro設定、ページのメタ情報、robots.txt、サイトマップは、この共通設定を参照します。

`PUBLIC_SITE_URL` 環境変数の設定は不要です。公開ドメインが変わった場合は `siteUrl` を変更し、再ビルド・再デプロイしてください。

## 検索結果向けの設定

- タイトル：`佐倉市の家具・家電販売・出張買取｜エベレスト株式会社`
- 説明文：`千葉県佐倉市臼井のエベレスト株式会社。冷蔵庫・洗濯機・家具をお手頃に販売。関東の出張買取・配送に対応し、配線・設置・動作確認は無料です。新生活セットの価格目安は25,000〜50,000円前後。商品により3ヶ月〜最長1年保証。`
- canonical：`https://everest-inc.pages.dev/`
- robots：`index, follow, max-image-preview:large`
- HTMLの言語：`ja`

1ページ構成のため、canonicalとサイトマップはトップページに統一します。`#products` などのページ内リンクや、広告・SNS計測用のクエリは独立したページとして登録しません。

タイトル・説明文は検索結果の表示候補を提供する設定であり、検索エンジンが必ず同じ文章を表示するものではありません。

## SNS共有

OGPとXカードに、タイトル・説明文・画像の絶対URL・画像説明を設定しています。

OGP画像はヒーロー素材を1200×630のJPEGに変換する構成です。写真調の生成画像を暮らしのビジュアルとして用いており、実店舗や実在商品の証明として扱っていません。

## 構造化データ

JSON-LDの `@graph` で以下を関連づけています。

- `Store`：会社名、正規URL、電話、住所、関東の対応エリア、地図検索リンク、古物商許可番号。
- `WebSite`：サイト名、正規URL、日本語、運営主体。
- `WebPage`：ページ名、説明、日本語、所属サイト、紹介する店舗。

住所は `src/data/site.ts` の `postalAddress` から表示住所と構造化データを生成します。電話番号は同ファイルの発信リンクから国際形式を生成します。

具体的な営業時刻・郵便番号・緯度経度・レビュー・評価点・個別商品の型番と在庫は未提供のため追加していません。組み合わせで変動するセットの目安価格を、確定商品の `Offer` にしていません。生成した室内・商品・作業画像を `Store.image` に設定していません。

## クローラー向けファイル

| 出力先 | ソース | 内容 |
| --- | --- | --- |
| `https://everest-inc.pages.dev/robots.txt` | `src/pages/robots.txt.ts` | クロールを許可し、サイトマップの絶対URLを案内 |
| `https://everest-inc.pages.dev/sitemap.xml` | `src/pages/sitemap.xml.ts` | 正式なトップページURLを1件掲載 |

Astroの静的エンドポイントとしてビルド時に生成されます。追加パッケージは不要です。サイトマップには、根拠のない更新日時やページ内リンクを追加していません。

## 今回の実施範囲

ローカルソースのSEO設定を更新しました。ユーザーの指定により、変更後のビルド・型チェック・テスト・ブラウザ表示確認・構造化データ検証は実施していません。開発サーバー起動、デプロイ、Search Console操作も行っていません。

公開URL、robots.txt、sitemap.xmlの現行応答をWeb取得ツールで参照しましたが、取得できませんでした。この取得失敗から、サイトの停止やファイルの有無は断定していません。今回の設定が本番へ反映済みであること、インデックス状態、検索順位は未確認です。

## 再デプロイ後の作業

1. `https://everest-inc.pages.dev/` に変更後のビルドを配信する。
2. `/robots.txt` と `/sitemap.xml` が、それぞれテキストとXMLとして取得できることを確認する。
3. ページのcanonical、OGP画像URL、JSON-LDが正式URLにそろっていることを確認する。
4. Search Consoleでこのサイトの所有権を確認し、`https://everest-inc.pages.dev/sitemap.xml` を送信する。
5. URL検査でトップページを確認し、必要に応じてインデックス登録をリクエストする。

## 参照した公式資料

- [Astro：site設定](https://docs.astro.build/en/reference/configuration-reference/#site)
- [Astro：静的エンドポイント](https://docs.astro.build/en/guides/endpoints/)
- [Google：正規URLの指定](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google：サイトマップの作成と送信](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google：ローカルビジネスの構造化データ](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Schema.org：Store](https://schema.org/Store)
