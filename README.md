# 東京青春酒場 - 公式ブランドサイト 🏮

20代後半〜30代に贈る、お酒と青春のポッドキャスト「東京青春酒場」の公式ウェブサイト。

## 📋 目次

- [プロジェクト概要](#プロジェクト概要)
- [技術スタック](#技術スタック)
- [セットアップ](#セットアップ)
- [環境変数の設定](#環境変数の設定)
- [開発](#開発)
- [ビルド・デプロイ](#ビルドデプロイ)
- [記事の追加方法](#記事の追加方法)
- [カスタマイズ](#カスタマイズ)
- [よくある質問](#よくある質問)

## 🎯 プロジェクト概要

### 実装済み機能

- ✅ レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- ✅ ダークモード/ライトモード切り替え
- ✅ ポッドキャストRSSフィード連携（最新エピソード自動取得）
- ✅ MDX形式の記事管理システム
- ✅ Spotify埋め込みプレイヤー
- ✅ Googleフォーム埋め込み（お便り募集）
- ✅ SEO最適化（メタタグ、OGP、Twitter Card、JSON-LD）
- ✅ sitemap.xml / robots.txt 自動生成
- ✅ アクセシビリティ対応
- ✅ プラットフォームリンク（Spotify, Apple Podcasts, YouTube, Amazon Music）
- ✅ SNS連携（X, Instagram）

### ページ一覧

| ページ | パス | 説明 |
|--------|------|------|
| ホーム | `/` | トップページ、最新エピソード・記事表示 |
| 聴く | `/listen` | ポッドキャスト視聴ページ |
| 記事一覧 | `/articles` | ブログ記事一覧 |
| 記事詳細 | `/articles/[slug]` | 個別記事ページ |
| グッズ | `/goods` | グッズ販売ページ（準備中表示対応） |
| お便り | `/letter` | Googleフォーム埋め込み |
| について | `/about` | 番組紹介・MC紹介 |
| プライバシーポリシー | `/privacy` | 個人情報保護方針 |
| 404 | `/not-found` | ページが見つからない場合 |

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **記事管理**: MDX (Markdown + JSX)
- **RSS解析**: rss-parser
- **アイコン**: lucide-react
- **フォント**: Google Fonts (Noto Sans JP, Shippori Mincho B1)
- **デプロイ**: Vercel（推奨）

## 🚀 セットアップ

### 1. リポジトリのクローンまたはダウンロード

```bash
# Gitを使用する場合
git clone <repository-url>
cd tokyo-seishun-sakaba

# またはZIPをダウンロードして解凍
```

### 2. 依存関係のインストール

```bash
npm install
# または
yarn install
# または
pnpm install
```

### 3. 環境変数の設定

`.env.example` をコピーして `.env` ファイルを作成:

```bash
cp .env.example .env
```

`.env` ファイルを開いて、実際の値を設定してください（詳細は次のセクション）。

### 4. 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
```

ブラウザで `http://localhost:3000` を開きます。

## ⚙️ 環境変数の設定

`.env` ファイルに以下の環境変数を設定してください:

### 必須項目

```env
# サイト基本情報
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=東京青春酒場

# ポッドキャスト情報
PODCAST_RSS_URL=https://anchor.fm/s/c0e4edf8/podcast/rss
NEXT_PUBLIC_SPOTIFY_SHOW_URL=https://open.spotify.com/show/3JP8Ve0FND4KjfIctoklRx
NEXT_PUBLIC_APPLE_PODCASTS_URL=https://podcasts.apple.com/jp/podcast/東京青春酒場/id1655540167
NEXT_PUBLIC_YOUTUBE_URL=https://www.youtube.com/@seishunsakaba
NEXT_PUBLIC_AMAZON_MUSIC_URL=https://music.amazon.co.jp/podcasts/c8ed078b-d79c-4500-b144-e0b9bd87fec0/東京青春酒場

# SNS
NEXT_PUBLIC_X_URL=https://x.com/seishunsakaba
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/seishunsakaba

# 外部サービス
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/1FAIpQLSdJSMC-_A6W7Y3OlCWEOXdhbxEZFN9MZ1XtIczFs14YJ62C9g/viewform
```

### 任意項目

```env
# グッズショップ（BASE等、開設後に設定）
NEXT_PUBLIC_GOODS_URL=

# 分析ツール
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
```

### 環境変数の説明

| 変数名 | 説明 | 必須 |
|--------|------|------|
| `NEXT_PUBLIC_SITE_URL` | サイトのURL（OGP等で使用） | ✅ |
| `PODCAST_RSS_URL` | ポッドキャストのRSSフィードURL | ✅ |
| `NEXT_PUBLIC_SPOTIFY_SHOW_URL` | Spotify番組URL | ✅ |
| `NEXT_PUBLIC_GOOGLE_FORM_URL` | お便りフォームURL | ✅ |
| `NEXT_PUBLIC_GOODS_URL` | グッズショップURL | ❌ |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics測定ID | ❌ |

## 💻 開発

### 開発サーバー起動

```bash
npm run dev
```

### ビルド（本番用）

```bash
npm run build
```

### ビルドしたサイトをローカルで確認

```bash
npm run build
npm run start
```

### Lint実行

```bash
npm run lint
```

### 型チェック

```bash
npm run type-check
```

## 🚢 ビルド・デプロイ

### Vercelへのデプロイ（推奨）

#### 方法1: Vercel CLIを使用

```bash
# Vercel CLIをインストール
npm install -g vercel

# デプロイ
vercel

# 本番環境にデプロイ
vercel --prod
```

#### 方法2: GitHub連携（推奨）

1. コードをGitHubにプッシュ
2. [Vercel](https://vercel.com)にアクセスしてログイン
3. 「New Project」をクリック
4. GitHubリポジトリを選択
5. 環境変数を設定（`.env`の内容をコピー）
6. 「Deploy」をクリック

#### Vercelでの環境変数設定

1. Vercelプロジェクトのダッシュボードへ
2. 「Settings」→「Environment Variables」
3. `.env`の内容を1つずつ追加
4. 「Production」「Preview」「Development」すべてにチェック
5. 「Save」

### デプロイ後の確認事項

- [ ] サイトが正常に表示される
- [ ] RSS連携でエピソードが取得できる
- [ ] 記事ページが表示される
- [ ] Spotifyプレイヤーが動作する
- [ ] Googleフォームが埋め込まれている
- [ ] ダークモードが動作する
- [ ] レスポンシブデザインが正常

## 📝 記事の追加方法

### MDXファイルの作成

`content/articles/` フォルダに新しいMDXファイルを作成します。

```bash
content/articles/your-new-article.mdx
```

### フロントマターの記述

```mdx
---
title: '記事のタイトル'
excerpt: '記事の要約文。OGPやカード表示で使用されます。'
publishedAt: '2024-03-15'
tags: ['タグ1', 'タグ2', 'タグ3']
author: '昆 寛隆'
coverImage: 'https://example.com/image.jpg'
---

## 本文をここに書く

記事本文をMarkdownで記述できます。
```

### フロントマターのフィールド

| フィールド | 説明 | 必須 |
|-----------|------|------|
| `title` | 記事タイトル | ✅ |
| `excerpt` | 記事要約（150文字程度推奨） | ✅ |
| `publishedAt` | 公開日（YYYY-MM-DD形式） | ✅ |
| `tags` | タグの配列 | ✅ |
| `author` | 著者名 | ❌ |
| `coverImage` | カバー画像URL | ❌ |

### MDXで使える記法

- 見出し: `## H2`, `### H3`
- 段落: 普通に書く
- リスト: `- 項目` または `1. 項目`
- リンク: `[テキスト](URL)`
- 画像: `![代替テキスト](URL)`
- 強調: `**太字**`, `*イタリック*`
- コード: `` `インラインコード` `` または ```言語名
- 引用: `> 引用文`

### サンプル記事

`content/articles/` フォルダに3つのサンプル記事があります:
- `first-episode-story.mdx` - 番組裏話
- `sake-pairing-guide.mdx` - 日本酒ペアリング
- `work-life-balance-20s.mdx` - ワークライフバランス

参考にしてください。

## 🎨 カスタマイズ

### カラーテーマの変更

`tailwind.config.js` で色を変更できます:

```js
colors: {
  brand: {
    navy: '#0F2540',      // メインネイビー
    vermilion: '#E4572E', // アクセントカラー
    mustard: '#C7A009',   // セカンダリカラー
    ivory: '#FFF7E5',     // 背景色（ライト）
    charcoal: '#1B1B1B',  // 背景色（ダーク）
  },
},
```

### フォントの変更

`src/app/layout.tsx` でフォントを変更できます:

```tsx
import { Noto_Sans_JP, Shippori_Mincho_B1 } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
```

### ロゴ・画像の差し替え

`public/images/` フォルダに以下の画像を配置:

- `logo.png` - サイトロゴ
- `cover.jpg` - ポッドキャストカバーアート
- `og-image.jpg` - OGP画像（1200x630px推奨）
- `favicon.ico` - ファビコン

### サイト名・説明文の変更

`src/lib/config.ts` で変更できます:

```ts
export const siteConfig: SiteConfig = {
  name: '東京青春酒場',
  description: '20代後半〜30代に贈る、お酒と青春のポッドキャスト。',
  // ...
};
```

## ❓ よくある質問

### Q: RSSフィードが取得できない

**A:** 以下を確認してください:
- `.env` に `PODCAST_RSS_URL` が正しく設定されているか
- RSSフィードのURLが有効か
- ビルド後、`npm run build` を再実行

### Q: Spotifyプレイヤーが表示されない

**A:** 以下を確認してください:
- `.env` に `NEXT_PUBLIC_SPOTIFY_SHOW_URL` が設定されているか
- URLが正しい形式か（`https://open.spotify.com/show/...`）

### Q: Googleフォームが埋め込まれない

**A:** X-Frame-Optionsの制限がある場合、埋め込めません。その場合は別ウィンドウで開くリンクが表示されます。

### Q: 記事が表示されない

**A:** 以下を確認してください:
- MDXファイルが `content/articles/` にあるか
- フロントマターが正しく記述されているか
- 必須フィールド（title, excerpt, publishedAt, tags）が揃っているか

### Q: ダークモードが動作しない

**A:** ブラウザのキャッシュをクリアして再読み込みしてください。

### Q: Vercelへのデプロイでエラーが出る

**A:** 以下を確認してください:
- 環境変数が正しく設定されているか
- ビルドコマンドが `npm run build` になっているか
- Node.jsバージョンが18以上か

### Q: グッズページを有効化したい

**A:** グッズショップのURLを `.env` の `NEXT_PUBLIC_GOODS_URL` に設定してください。

### Q: Google AnalyticsやGTMを追加したい

**A:** `.env` に以下を追加:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
```

## 📦 プロジェクト構成

```
tokyo-seishun-sakaba/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # ホームページ
│   │   ├── globals.css   # グローバルスタイル
│   │   ├── listen/       # 聴くページ
│   │   ├── articles/     # 記事ページ
│   │   ├── goods/        # グッズページ
│   │   ├── letter/       # お便りページ
│   │   ├── about/        # aboutページ
│   │   ├── privacy/      # プライバシーポリシー
│   │   ├── sitemap.ts    # サイトマップ自動生成
│   │   └── robots.ts     # robots.txt自動生成
│   ├── components/       # Reactコンポーネント
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── PodcastPlayer.tsx
│   │   ├── EpisodeCard.tsx
│   │   ├── ArticleCard.tsx
│   │   └── JsonLd.tsx
│   └── lib/              # ユーティリティ関数
│       ├── types.ts      # TypeScript型定義
│       ├── config.ts     # サイト設定
│       ├── rss.ts        # RSS取得
│       ├── mdx.ts        # MDX処理
│       ├── utils.ts      # 共通関数
│       └── jsonld.ts     # JSON-LD生成
├── content/
│   └── articles/         # MDX記事
├── public/
│   └── images/           # 画像ファイル
├── .env.example          # 環境変数サンプル
├── .gitignore
├── next.config.js        # Next.js設定
├── tailwind.config.js    # Tailwind CSS設定
├── tsconfig.json         # TypeScript設定
├── package.json
└── README.md
```

## 🤝 サポート

質問や問題がある場合は、以下からお問い合わせください:

- X (Twitter): [@seishunsakaba](https://x.com/seishunsakaba)
- Instagram: [@seishunsakaba](https://www.instagram.com/seishunsakaba)

## 📜 ライセンス

このプロジェクトは東京青春酒場のために作成されました。

---

**東京青春酒場** - お酒を片手に、青春を語ろう 🏮✨
