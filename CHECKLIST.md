# ひろ（依頼者）がやることチェックリスト ✅

このチェックリストに沿って進めれば、サイトが完成してデプロイまでできるよ！

## 📋 Phase 1: 初期セットアップ（必須）

### 1. プロジェクトのセットアップ
- [ ] Node.js（v18以上）がインストールされているか確認
  ```bash
  node --version
  ```
- [ ] プロジェクトフォルダに移動
- [ ] 依存関係をインストール
  ```bash
  npm install
  ```

### 2. 環境変数の設定
- [ ] `.env.example` をコピーして `.env` を作成
  ```bash
  cp .env.example .env
  ```
- [ ] `.env` ファイルを開いて、以下を実際の値に変更:
  - [ ] `NEXT_PUBLIC_SITE_URL` → あとでVercelのURLに変更
  - [ ] `PODCAST_RSS_URL` → `https://anchor.fm/s/c0e4edf8/podcast/rss`
  - [ ] `NEXT_PUBLIC_SPOTIFY_SHOW_URL` → 既に設定済み✅
  - [ ] `NEXT_PUBLIC_APPLE_PODCASTS_URL` → 既に設定済み✅
  - [ ] `NEXT_PUBLIC_YOUTUBE_URL` → 既に設定済み✅
  - [ ] `NEXT_PUBLIC_AMAZON_MUSIC_URL` → 既に設定済み✅
  - [ ] `NEXT_PUBLIC_X_URL` → 既に設定済み✅
  - [ ] `NEXT_PUBLIC_INSTAGRAM_URL` → 既に設定済み✅
  - [ ] `NEXT_PUBLIC_GOOGLE_FORM_URL` → 既に設定済み✅
  - [ ] `NEXT_PUBLIC_GOODS_URL` → 空欄のまま（グッズショップ開設後に設定）

### 3. ローカルで動作確認
- [ ] 開発サーバーを起動
  ```bash
  npm run dev
  ```
- [ ] ブラウザで `http://localhost:3000` を開く
- [ ] 以下を確認:
  - [ ] トップページが表示される
  - [ ] ヘッダーのナビゲーションが動く
  - [ ] ダークモード切り替えが動く
  - [ ] 「聴く」ページでSpotifyプレイヤーが表示される
  - [ ] 「記事」ページでサンプル記事3件が表示される
  - [ ] 「お便り」ページでGoogleフォームが表示される
  - [ ] 「グッズ」ページで準備中が表示される

## 🎨 Phase 2: カスタマイズ（推奨）

### 4. ロゴ・画像の差し替え（任意）
- [ ] `public/images/` フォルダに以下を配置:
  - [ ] `logo.png` - 番組ロゴ（サイズ自由、正方形推奨）
  - [ ] `cover.jpg` - ポッドキャストのカバーアート
  - [ ] `og-image.jpg` - SNSシェア用画像（1200x630px推奨）
  - [ ] `favicon.ico` - ファビコン（16x16px or 32x32px）

> **Note**: 画像がない場合はプレースホルダー（絵文字）が表示されるので、後からでもOK！

### 5. サイトの色やフォントを変更（任意）
- [ ] `tailwind.config.js` の `colors.brand` セクションで色を変更
- [ ] `src/app/layout.tsx` でフォントを変更

### 6. サイト名・説明文を変更（任意）
- [ ] `src/lib/config.ts` の `siteConfig` を編集
  - [ ] `description` を好みの文章に変更

## 📝 Phase 3: コンテンツ追加（任意）

### 7. 記事を追加
- [ ] `content/articles/` フォルダに新しいMDXファイルを作成
- [ ] フロントマター（title, excerpt, publishedAt, tags）を記述
- [ ] Markdown形式で本文を記述
- [ ] ローカルで確認

> **サンプル記事**: `content/articles/` に3つあるので参考にしてね！

### 8. 既存のサンプル記事を削除または編集（任意）
- [ ] `first-episode-story.mdx` を編集または削除
- [ ] `sake-pairing-guide.mdx` を編集または削除
- [ ] `work-life-balance-20s.mdx` を編集または削除

## 🚀 Phase 4: デプロイ（必須）

### 9. GitHubリポジトリの作成
- [ ] GitHubで新しいリポジトリを作成（public or private）
- [ ] ローカルでGit初期化
  ```bash
  git init
  git add .
  git commit -m "Initial commit: 東京青春酒場サイト"
  git branch -M main
  git remote add origin <your-github-repo-url>
  git push -u origin main
  ```

### 10. Vercelでデプロイ
- [ ] [Vercel](https://vercel.com)にアクセスしてログイン（GitHubアカウントで）
- [ ] 「New Project」をクリック
- [ ] 先ほど作成したGitHubリポジトリを選択
- [ ] 「Import」をクリック
- [ ] **環境変数を設定**（重要！）:
  - [ ] `.env` の内容を1つずつコピペ
  - [ ] `NEXT_PUBLIC_SITE_URL` だけはVercelが自動で生成するURLに変更
  - [ ] すべての変数を「Production」「Preview」「Development」に適用
- [ ] 「Deploy」をクリック

### 11. デプロイ完了後の確認
- [ ] Vercelから発行されたURLにアクセス
- [ ] 以下を確認:
  - [ ] サイトが正常に表示される
  - [ ] RSSからエピソードが取得できている
  - [ ] 記事ページが表示される
  - [ ] Spotifyプレイヤーが動作する
  - [ ] モバイルでも正常に表示される

### 12. 環境変数の最終調整
- [ ] Vercelダッシュボードで `NEXT_PUBLIC_SITE_URL` を正式なURLに変更
  ```
  https://your-site-name.vercel.app
  ```
- [ ] 「Redeploy」して反映

## 🎉 Phase 5: 運用開始

### 13. SNSで告知
- [ ] サイトのURLをXでシェア
- [ ] InstagramのプロフィールリンクにURLを追加

### 14. Google Analytics / GTM設定（任意）
- [ ] Google Analyticsでプロパティを作成
- [ ] 測定ID（G-XXXXXXXXXX）を取得
- [ ] Vercelの環境変数に `NEXT_PUBLIC_GA_MEASUREMENT_ID` を追加
- [ ] Redeploy

### 15. グッズショップ開設後
- [ ] BASE等でショップを開設
- [ ] ショップURLを `.env` の `NEXT_PUBLIC_GOODS_URL` に追加
- [ ] Gitにコミット＆プッシュ（自動デプロイされる）

### 16. 定期的なメンテナンス
- [ ] 記事を定期的に追加
- [ ] エピソード情報がRSSから正常に取得されているか確認
- [ ] お便りフォームに投稿があるかチェック

## 🆘 困った時のチェック項目

### サイトが表示されない
- [ ] Vercelでビルドエラーが出ていないか確認
- [ ] 環境変数が正しく設定されているか確認
- [ ] ブラウザのキャッシュをクリア

### RSSフィードが取得できない
- [ ] `.env` の `PODCAST_RSS_URL` が正しいか確認
- [ ] RSSのURLが有効か確認
- [ ] Vercelで「Redeploy」を実行

### Spotifyプレイヤーが表示されない
- [ ] `NEXT_PUBLIC_SPOTIFY_SHOW_URL` が正しいか確認
- [ ] ブラウザのコンソールにエラーが出ていないか確認

### 記事が表示されない
- [ ] MDXファイルが `content/articles/` にあるか確認
- [ ] フロントマター（title, excerpt等）が正しく書かれているか確認
- [ ] ローカルで `npm run build` を実行してエラーがないか確認

### Googleフォームが埋め込まれない
- [ ] X-Frame-Optionsの制限がある場合は埋め込めません
- [ ] その場合は「別ウィンドウで開く」リンクが表示されます（正常動作）

## 📞 サポート

もし何か困ったことがあったら、README.mdの「よくある質問」セクションを見てね！

それでも解決しない場合は、このプロジェクトのコードを見直すか、技術に詳しい人に相談してみよう。

---

## ✨ 完了後にやること

全部できたら、お祝いしよう！🎉🏮

サイトが完成したら、お酒を片手にポッドキャストを聴きながら、自分のサイトを眺めるのもいいね！

**頑張って！東京青春酒場を盛り上げていこう！** 🍻
