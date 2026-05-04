# TOMON_9912 — 採用・面談向けポートフォリオ（静的サイト）

ローカルに置いてある **engineer-life**（Qiita 記事の下書き・職務経歴の分割メモなど）を参照し、**採用担当・面接官が短時間で強みを把握できる LP 型**のポートフォリオとして公開するためのリポジトリです。

## 依頼時の前提（技術・デプロイ）

| 項目 | 内容 |
|------|------|
| デプロイ先 | **GitHub Pages** |
| フレームワーク | **Next.js**（`output: "export"` による静的エクスポート） |
| スタイル | **Tailwind CSS** |
| UI | **shadcn/ui**（Base UI ベースのコンポーネント） |

ビルド成果物は `out/` に出力されます。GitHub Actions（`.github/workflows/deploy-pages.yml`）で `NEXT_PUBLIC_BASE_PATH` にリポジトリ名を渡してビルドする想定です（プロジェクト用 Pages の URL 向け）。

> **デプロイ手順の詳細は [`docs/deploy-github-pages.md`](./docs/deploy-github-pages.md)** にまとめています。初回セットアップ・通常運用・トラブルシューティングまで一通り確認できます。

## コンテンツの意図（当初の依頼）

- **engineer-life** の「Qiita 記事」「職務経歴（案件ごとの分割ファイル）」を材料に、単なる情報の羅列ではなく **「こういう人材が欲しい」側に刺さる**構成にする。
- **「こういう人材が欲しいと感じる方におすすめの記事はこちら」** のように、ペルソナ別におすすめ Qiita を束ねる導線を付ける。
- サイト全体を **LP（自分という商品を、面接官に「購入してもらう」前提の説明）** として設計する。

主要な実装の置き場所の例：

- 職歴カード：`content/career.ts`
- 記事データ（Qiita API 同期）：`content/qiita-articles.ts`
- 選考側向けおすすめ束：`content/recruiter-picks.ts`
- 固定コピー・メタ：`lib/site-config.ts`
- Qiita でサイトに載せない記事の除外：`lib/article-exclusions.ts`

## あとから追加した注意点（必ず守る）

Cursor のルールは **`.cursor/rules/portfolio-site-content.mdc`**（`alwaysApply: true`）にもまとめています。README では要点だけ再掲します。

1. **社名の非掲載**  
   **現職・前職の会社名・屋号・会社が特定できる表現は、このサイトの本文・設定・コンテンツに書かない。** 職歴表示は「現職」「前職」と役割説明のみに留める。
2. **学歴の具体名の非掲載**  
   **大学名・学部・学科など、特定の学校がわかる学歴情報は載せない。**
3. **文体**  
   メインの説明文は **一人称（「私は〜」）** が基本。**「TOMON_9912 は〜」のようにハンドルを主語にした他人行儀の三人称調**は避ける（ヘッダーや Qiita アカウント表示としての名前の列挙は可）。
4. **未完シリーズの Qiita をサイトに載せない**  
   **「【ポートフォリオ開発記】 #1 アプリの題材について」はシリーズ未完のため掲載対象にしない。**  
   除外は `lib/article-exclusions.ts` の `EXCLUDED_QIITA_ITEM_IDS` と、`npm run sync:qiita`（`scripts/sync-qiita.mjs`）側のフィルタの両方で行う。
5. **資料の境界**  
   engineer-life で社名などを読むことは開発用としてよいが、**そのままサイトの文言に転記しない。**

公開名として UI では **`TOMON_9912` / `@TOMON_9912`** を使う（本名はサイト上で出さない）。

## 開発コマンド

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint         # TypeScript（tsc --noEmit）
npm run build        # 静的出力 → out/

# GitHub Pages と同様にベースパス付きで確認するときの例
NEXT_PUBLIC_BASE_PATH=/リポジトリ名 npm run build
```

Qiita の一覧を API から取り直して `content/qiita-articles.ts` を更新するとき：

```bash
npm run sync:qiita
```

## 環境変数（任意）

| 変数名 | 用途 |
|--------|------|
| `NEXT_PUBLIC_BASE_PATH` | GitHub のプロジェクト用 Pages など、サブパス配信するときのプレフィックス |
| `NEXT_PUBLIC_SITE_URL` | サイトの公開 URL（`metadataBase` 用）。未設定でもビルドは可能 |

---

この README は、**冒頭で依頼した内容**と**運用上あとから足した注意点**をひとつのドキュメントにまとめたものです。
