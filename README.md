# TOMON_9912 — Portfolio Site

採用・技術面談に向けて、私（[@TOMON_9912](https://qiita.com/TOMON_9912)）の経歴・成果・記事・個人開発をまとめた静的サイトのソースコードです。  
Next.js（App Router）の静的エクスポートで構築し、**GitHub Pages** で公開しています。

## Tech Stack

| 領域 | 採用技術 |
|------|----------|
| フレームワーク | [Next.js](https://nextjs.org/)（App Router／`output: "export"`） |
| 言語 | TypeScript |
| スタイル | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI コンポーネント | [shadcn/ui](https://ui.shadcn.com/)（Base UI ベース） |
| 配信 | GitHub Pages（GitHub Actions で自動デプロイ） |

## ディレクトリ構成

| パス | 役割 |
|------|------|
| `app/` | Next.js App Router のルーティングとページ定義 |
| `app/projects/[slug]/` | 個人開発プロジェクトの詳細ページ（動的ルート） |
| `components/` | UI コンポーネント（ヒーロー・経歴・記事一覧 等） |
| `content/` | 職歴／Qiita 記事／推薦記事束／個人開発などのデータ |
| `lib/` | サイト全体の設定、記事フィルタ、ユーティリティ |
| `scripts/` | Qiita API 同期などのオフラインスクリプト |
| `public/` | 静的ファイル（`.nojekyll` など） |
| `docs/` | リポジトリ運用ドキュメント |

## ローカル開発

依存パッケージのインストール後、開発サーバを起動します。

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint         # tsc --noEmit による型チェック
npm run build        # 静的出力（out/ 配下に生成）
```

GitHub Pages と同じサブパス配信の挙動を、ローカルで再現したいときは以下のように `NEXT_PUBLIC_BASE_PATH` を渡してビルドしてください。

```bash
NEXT_PUBLIC_BASE_PATH=/<リポジトリ名> npm run build
npx serve out -l 5000
```

## Qiita 記事の同期

Qiita API から最新一覧を取得し、サイト掲載用のデータ（`content/qiita-articles.ts`）を更新します。

```bash
npm run sync:qiita
```

掲載対象から除外したい記事は `lib/article-exclusions.ts` の `EXCLUDED_QIITA_ITEM_IDS` に追加し、UI 側では `visibleQiitaArticles()` 経由でフィルタしています。

## デプロイ（GitHub Pages）

`.github/workflows/deploy-pages.yml` が `main` への push と手動実行をトリガーに、ビルドから Pages へのデプロイまでを自動で行います。

> 初回セットアップ・通常運用・トラブルシューティングまで含めた手順は **[`docs/deploy-github-pages.md`](./docs/deploy-github-pages.md)** にまとめています。

## 環境変数

すべて任意の設定です。未指定でもビルドは通ります。

| 変数名 | 用途 |
|--------|------|
| `NEXT_PUBLIC_BASE_PATH` | プロジェクトサイトとして配信する際のサブパス（例：`/<リポジトリ名>`）。GitHub Actions では自動付与されます。 |
| `NEXT_PUBLIC_SITE_URL` | OGP 用の絶対 URL（`metadataBase`）の組み立てに利用します。 |

## コンテンツ運用について

サイトに掲載するコピー・記事・経歴の扱いには一定の運用ルール（敬称や匿名化の範囲など）があり、開発時の制約として **`.cursor/rules/portfolio-site-content.mdc`** にまとめています。コードや文言を編集される際はそちらを併せてご確認ください。

## License / Notice

- ソースコードは学習・参考目的での閲覧を想定しています。
- 経歴・記事・プロフィール本文などサイト上のコンテンツの著作権は本人に帰属します。第三者による無断転載・転用はご遠慮ください。
