# 生成画像と独自制作素材

作成日：2026年11月5日

## 制作方法・保存先

写真調画像7点を内蔵 imagegen ツール（built-in mode）で生成しました。CLI/APIフォールバックは使用していません。

最終素材はプロジェクト内の `src/assets/generated/` にPNG形式で保存しています。生成元のファイルは元の保存先にも残しています。サイト表示用のWebPとSNS共有用JPEGはAstroの画像機能で作成する構成です。

| 素材 | プロジェクト内のファイル | 用途 |
| --- | --- | --- |
| PC用ヒーロー | `src/assets/generated/hero-living-desktop.png` | 明るい住空間のメイン画像 |
| モバイル用ヒーロー | `src/assets/generated/hero-living-mobile.png` | 縦長画面用の暮らしの画像 |
| 冷蔵庫 | `src/assets/generated/refrigerator-category.png` | 商品カテゴリ |
| 洗濯機 | `src/assets/generated/washing-machine-category.png` | 商品カテゴリ |
| 家具 | `src/assets/generated/furniture-category.png` | 商品カテゴリ |
| 新生活 | `src/assets/generated/new-life-set.png` | セット相談・暮らしのイメージ |
| 設置作業 | `src/assets/generated/installation-service.png` | サービスのイメージ |

## 表示上の扱い

- すべて架空の暮らし・商品カテゴリ・作業場面を表現したイメージです。
- 実際の在庫、販売商品、店舗、従業員の写真ではありません。
- ユーザーの追加指定により、画像付近とフッターの生成画像に関する表示文言を削除しています。
- 新生活セットの画像に写る全品を、掲載価格の確定セットとして案内していません。
- OGPはヒーローから派生する暮らしのイメージです。構造化データの商品・店舗画像には設定していません。
- ユーザーの指定により、実装後のブラウザ・表示確認は行っていません。

## 独自SVG・文字組み

`src/components/Brand.astro` に山のシンボルと会社名の文字組み、`src/components/Icon.astro` に説明用のアイコン、`public/brand-mark.svg` にfaviconを作成しました。既存の正式ロゴを再現したものではありません。

## 使用した最終プロンプト

以下は内蔵ツールに送信した指示です。画像ごとに独立した生成を行いました。

### 01 hero-living-desktop

出力ファイル：`src/assets/generated/hero-living-desktop.png`  
生成識別子：`C:\Users\callt\.codex\generated_images\01a1aa27-2211-7b92-978b-0a6b407e9b33\exec-10d0e502-9470-4faf-bf11-9c078eb4783f.png`

```text
Use case: photorealistic-natural. Asset type: original editorial photograph for a Japanese used furniture and appliance company website, Everest. Consistent visual direction: warm natural sunlight, ivory plaster, pale oak, subtle deep forest green accents, realistic ordinary Japanese home, attainable everyday living, beautiful photographic composition, gently analog texture, warm whites not yellow. No text, no letters, no prices, no watermark, no logos, no recognizable brands. Not a collage, one single photograph. Create a landscape hero photograph, approximately 16:9. A sunlit modest Japanese apartment dining and kitchen space with plain ivory refrigerator near the right third, pale oak dining table and two chairs centrally, gentle green upholstery and small houseplant, everyday ceramic bowl, linen curtains. Viewed from living space toward kitchen. Wide inviting architectural photograph, straight verticals, daylight shadows across oak floor. Composition: left third has quiet softly shaded blank wall and low furniture for white headline overlay, main appliances and table occupy middle and right; lower left also quiet. The room feels possible on a budget, elegantly styled but not luxurious. No people.
```

### 02 hero-living-mobile

出力ファイル：`src/assets/generated/hero-living-mobile.png`  
生成識別子：`C:\Users\callt\.codex\generated_images\01a1aa27-2211-7b92-978b-0a6b407e9b33\exec-7686330d-62bc-4716-ab57-c06e361da0ba.png`

```text
Use case: photorealistic-natural. Asset type: original editorial photograph for a Japanese used furniture and appliance company website, Everest. Consistent visual direction: warm natural sunlight, ivory plaster, pale oak, subtle deep forest green accents, realistic ordinary Japanese home, attainable everyday living, beautiful photographic composition, gently analog texture, warm whites not yellow. No text, no letters, no prices, no watermark, no logos, no recognizable brands. Not a collage, one single photograph. Create a portrait 3:4 hero photograph. A sunlit modest Japanese apartment dining and kitchen space, plain ivory refrigerator on right, small pale oak table, two chairs, small green plant, linen curtain. Top left half is mostly quiet pale wall and soft shadow, usable for a bold white headline overlay with dark gradient supplied in CSS later. Furniture and appliances in lower right. Same warm green oak ivory palette throughout. Natural ordinary realistic furniture, not luxury. No people.
```

### 03 refrigerator-category

出力ファイル：`src/assets/generated/refrigerator-category.png`  
生成識別子：`C:\Users\callt\.codex\generated_images\01a1aa27-2211-7b92-978b-0a6b407e9b33\exec-20e6b11d-39b7-4094-947d-bbb720dfc365.png`

```text
Use case: photorealistic-natural. Asset type: original editorial photograph for a Japanese used furniture and appliance company website, Everest. Consistent visual direction: warm natural sunlight, ivory plaster, pale oak, subtle deep forest green accents, realistic ordinary Japanese home, attainable everyday living, beautiful photographic composition, gently analog texture, warm whites not yellow. No text, no letters, no prices, no watermark, no logos, no recognizable brands. Not a collage, one single photograph. Create a landscape 4:3 close editorial product photograph of a simple unbranded two-door light silver refrigerator in a modest bright Japanese kitchen. Fridge main subject, full height visible, three-quarter angle. Small pale oak shelf with ceramic cup nearby, tiny leafy plant in background. Simple clear intact handles and doors, plausible proportions. No people. Category illustration, not an actual listing.
```

### 04 washing-machine-category

出力ファイル：`src/assets/generated/washing-machine-category.png`  
生成識別子：`C:\Users\callt\.codex\generated_images\01a1aa27-2211-7b92-978b-0a6b407e9b33\exec-ffb28448-16cc-40c0-a10e-8b8abdfe30a0.png`

```text
Use case: photorealistic-natural. Asset type: original editorial photograph for a Japanese used furniture and appliance company website, Everest. Consistent visual direction: warm natural sunlight, ivory plaster, pale oak, subtle deep forest green accents, realistic ordinary Japanese home, attainable everyday living, beautiful photographic composition, gently analog texture, warm whites not yellow. No text, no letters, no prices, no watermark, no logos, no recognizable brands. Not a collage, one single photograph. Create a landscape 4:3 editorial photograph of a simple unbranded white front-loading drum washing machine, full machine visible in a realistic compact Japanese laundry alcove. Round dark glass door, physically plausible controls with no legible text, clean ivory wall, folded cream towels and pale oak shelf, soft daylight from left. Tasteful everyday home. No people. No brand or symbols.
```

### 05 furniture-category

出力ファイル：`src/assets/generated/furniture-category.png`  
生成識別子：`C:\Users\callt\.codex\generated_images\01a1aa27-2211-7b92-978b-0a6b407e9b33\exec-3f91f7ea-4844-462e-b9fb-dd4d918b0197.png`

```text
Use case: photorealistic-natural. Asset type: original editorial photograph for a Japanese used furniture and appliance company website, Everest. Consistent visual direction: warm natural sunlight, ivory plaster, pale oak, subtle deep forest green accents, realistic ordinary Japanese home, attainable everyday living, beautiful photographic composition, gently analog texture, warm whites not yellow. No text, no letters, no prices, no watermark, no logos, no recognizable brands. Not a collage, one single photograph. Create a landscape 4:3 editorial interior photograph focusing on a compact oak dining table and two simple chairs in a warm modest Japanese apartment, sage green chair seat, small plain ceramic cup, woven linen curtain and plant, softly sunlit wood floor, quiet welcoming everyday furniture. No expensive designer items. No appliances or people. A natural category image of furniture for everyday life.
```

### 06 new-life-set

出力ファイル：`src/assets/generated/new-life-set.png`  
生成識別子：`C:\Users\callt\.codex\generated_images\01a1aa27-2211-7b92-978b-0a6b407e9b33\exec-3db154b0-b089-483a-8196-89f5f69b0657.png`

```text
Use case: photorealistic-natural. Asset type: original editorial photograph for a Japanese used furniture and appliance company website, Everest. Consistent visual direction: warm natural sunlight, ivory plaster, pale oak, subtle deep forest green accents, realistic ordinary Japanese home, attainable everyday living, beautiful photographic composition, gently analog texture, warm whites not yellow. No text, no letters, no prices, no watermark, no logos, no recognizable brands. Not a collage, one single photograph. Create a wide landscape 3:2 editorial photograph of a small bright Japanese apartment, compact white refrigerator and plain white washing machine in adjacent practical kitchen/laundry area, small pale oak table and a chair visible in foreground, a closed moving cardboard box at edge, sunlight and soft shadows. Simple affordable new-home feeling, not luxury, no exact branded items. Appliances realistically installed rather than a lineup or collage. No text on cardboard box. No people. This is an illustrative lifestyle scene, not a fixed product set.
```

### 07 installation-service

出力ファイル：`src/assets/generated/installation-service.png`  
生成識別子：`C:\Users\callt\.codex\generated_images\01a1aa27-2211-7b92-978b-0a6b407e9b33\exec-e22b6fde-0779-4441-ad69-031939668107.png`

```text
Use case: photorealistic-natural. Asset type: original editorial photograph for a Japanese used furniture and appliance company website, Everest. Consistent visual direction: warm natural sunlight, ivory plaster, pale oak, subtle deep forest green accents, realistic ordinary Japanese home, attainable everyday living, beautiful photographic composition, gently analog texture, warm whites not yellow. No text, no letters, no prices, no watermark, no logos, no recognizable brands. Not a collage, one single photograph. Create a landscape 3:2 candid editorial photograph, closely framed view of a delivery/installation worker in plain dark forest-green work shirt and neutral work trousers crouching beside a white washing machine in a modest Japanese apartment, checking that the machine is level with one gloved hand resting naturally on machine corner. Show shoulder, back and hands, face out of frame. Physically plausible body and hands. No electric work, no dangerous pose, no logos or text on uniform. Warm soft daylight, pale oak and ivory interior. Calm capable service feeling, not posed handshake.
```

