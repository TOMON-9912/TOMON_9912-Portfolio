# GitHub Pages デプロイ手順書

このリポジトリ（`TOMON_9912-Portfolio`）を **GitHub Pages** に公開するための手順をまとめたドキュメントです。  
ビルドとデプロイは **GitHub Actions（`.github/workflows/deploy-pages.yml`）** が自動で行うため、初回のリポジトリ設定さえ済めば、以降は `main` ブランチへ push するだけで反映されます。

---

## 1. 前提と全体像

| 項目 | 内容 |
|------|------|
| デプロイ先 | GitHub Pages（プロジェクトサイト：`https://<ユーザー名>.github.io/<リポジトリ名>/`） |
| 公開元 | `main`（または `master`）ブランチへの push、もしくは Actions の手動実行 |
| ビルド | Next.js の静的エクスポート（`output: "export"` → `out/` ディレクトリを生成） |
| 配信 | `actions/upload-pages-artifact` → `actions/deploy-pages` で Pages にデプロイ |
| サブパス | `NEXT_PUBLIC_BASE_PATH=/<リポジトリ名>` を Actions 側で自動付与 |

ワークフロー本体：

```24:42:.github/workflows/deploy-pages.yml
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: npm

      - name: Install
        run: npm ci

      - name: Build
        env:
          NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out
```

---

## 2. 初回セットアップ手順

### 2-1. リモートリポジトリを用意する

GitHub 上で空のリポジトリを作成します（例：`TOMON-9912/TOMON_9912-Portfolio`）。  
**Public** リポジトリにすると無料プランでも GitHub Pages を利用できます。

ローカル側でリモートを設定して push します：

```bash
git init                                  # 未 init の場合のみ
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin git@github.com:<ユーザー名>/<リポジトリ名>.git
git push -u origin main
```

> 既に push 済みであれば、この節はスキップしてください。

### 2-2. GitHub Pages を「GitHub Actions」公開モードに切り替える

**1 度だけ** 行う設定です。

1. GitHub のリポジトリページを開く
2. 上部メニューから **`Settings` → `Pages`** を選択
3. **Build and deployment** セクションで、`Source` を **`GitHub Actions`** に変更（`Deploy from a branch` ではない）
4. 設定の保存ボタンは不要（選択した時点で反映されます）

### 2-3. Actions のワークフローが走ることを確認する

`.github/workflows/deploy-pages.yml` が存在する状態で `main` に push すれば、自動でワークフローが走ります。

確認方法：

1. リポジトリの **`Actions` タブ** を開く
2. `Deploy static site to GitHub Pages` というワークフローが緑（成功）になることを確認
3. `deploy` ジョブのログ末尾、または **`Settings` → `Pages`** に表示される URL（`https://<ユーザー名>.github.io/<リポジトリ名>/`）にアクセス

これで初回デプロイが完了です。

---

## 3. 2 回目以降の運用

### 3-1. 通常のデプロイ

`main` ブランチへの push が、そのままデプロイのトリガーになります。

```bash
git switch main
git pull
# 変更を加える
git add .
git commit -m "feat: ...（変更内容）"
git push
```

push 後 1〜3 分ほどで、GitHub Pages 上のサイトが更新されます。

### 3-2. 手動でデプロイを再実行する

ワークフローを手動で走らせたいときは：

1. GitHub の **`Actions` タブ** を開く
2. 左メニューから `Deploy static site to GitHub Pages` を選択
3. 右上の **`Run workflow`** ボタン → ブランチを選んで **`Run workflow`** を再度クリック

これは `workflow_dispatch:` トリガーが定義されているため使えます（`.github/workflows/deploy-pages.yml` の 6 行目）。

### 3-3. Qiita 記事の同期を含めるとき

Qiita 側で新しい記事を書いた／古い記事を更新した場合は、ローカルで以下を実行してから push します（API 同期はローカル側で済ませる方式）。

```bash
npm run sync:qiita     # content/qiita-articles.ts を更新
git add content/qiita-articles.ts
git commit -m "chore: sync qiita articles"
git push
```

`lib/article-exclusions.ts` の除外 ID を変更したときも、上記の流れで push すれば反映されます。

---

## 4. ベースパス（`basePath`）の仕組み

GitHub Pages のプロジェクトサイトはサブパス（`/<リポジトリ名>/`）配下で配信されるため、Next.js 側にも同じ basePath を伝える必要があります。

```1:11:next.config.ts
import type { NextConfig } from "next";

const rawBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
};
```

GitHub Actions では以下のように渡しています（自動）：

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
```

つまりリポジトリ名がそのままサブパスになります。  
**リポジトリ名を変更した場合は、特に追加作業をしなくても次回デプロイ時に自動で追従します。**

> ユーザーサイト（`<ユーザー名>.github.io` 名のリポジトリ）に切り替えたい場合は、`basePath` が不要になります。  
> その場合は GitHub Actions の `NEXT_PUBLIC_BASE_PATH` 行を削除するか、空文字を渡してください。

---

## 5. ローカルで「公開時と同じ条件」を再現する

GitHub Pages 上での挙動をローカルで先に確認したいときは、basePath を環境変数で渡してビルドします。

```bash
# 例：リポジトリ名が TOMON_9912-Portfolio の場合
NEXT_PUBLIC_BASE_PATH=/TOMON_9912-Portfolio npm run build

# 静的サーバで out/ 配下を配信して動作確認
npx serve out -l 5000
# → http://localhost:5000/TOMON_9912-Portfolio/ を開く
```

開発時の `npm run dev` は basePath なしで動かしてもよく、絶対パス参照（`/projects/...`）は Next.js が basePath を加味して解決してくれます。

---

## 6. オプション：OGP の metadataBase を本番 URL に揃える

`app/layout.tsx` で `metadataBase` を `NEXT_PUBLIC_SITE_URL` から組み立てている場合、リポジトリ Settings の **`Secrets and variables` → `Actions` → `Variables`** に以下のような変数を登録すると、OGP 用の絶対 URL が正しく解決されます。

| 変数名 | 値の例 |
|--------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://<ユーザー名>.github.io/<リポジトリ名>` |

その上で、ワークフローの `Build` ステップに以下を追記します（必要な場合のみ）：

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
  NEXT_PUBLIC_SITE_URL: ${{ vars.NEXT_PUBLIC_SITE_URL }}
```

未設定でもビルド・デプロイは通るため、まずは追加せずに進めて問題ありません。

---

## 7. オプション：カスタムドメインを使う

独自ドメインで配信したい場合は、初回のみ以下を行います。

1. **`Settings` → `Pages` → `Custom domain`** に独自ドメインを入力
2. DNS 側に CNAME レコード（`<ユーザー名>.github.io`）を追加
3. リポジトリ直下に **`public/CNAME`** を追加し、独自ドメインを 1 行で記述
4. `Settings` → `Pages` で **`Enforce HTTPS`** にチェック

独自ドメイン使用時は basePath が不要になるため、ワークフローから `NEXT_PUBLIC_BASE_PATH` を外してください。

---

## 8. トラブルシューティング

### 8-1. ページは開けるが CSS や画像が読み込まれない（404）

`basePath` の不一致が原因です。次のいずれかを確認してください。

- `Actions` ログで `NEXT_PUBLIC_BASE_PATH=/<リポジトリ名>` が渡っているか
- リポジトリ名にハイフン以外の特殊文字が含まれていないか
- `next.config.ts` を編集して `basePath` を直接書いている場合、リポジトリ名と一致しているか

### 8-2. デプロイは成功したが 404 が返る

GitHub Pages の Jekyll 処理によって `_next/` ディレクトリが除外されている可能性があります。

- `public/.nojekyll` が存在するか確認してください（このリポジトリには既に配置済み）
- なければ `touch public/.nojekyll` で空ファイルを作成し、コミット → push

### 8-3. プロジェクト詳細ページで 404 になる

`/projects/family-recipe-archive/` のように **末尾スラッシュ付き** で配信されているため、リンクは末尾スラッシュを付けて参照してください。Next.js の `<Link>` を使っていれば自動で正しく解決されます。

### 8-4. Actions のジョブが失敗する

| 表示メッセージの例 | 主な原因 |
|---|---|
| `Failed to create deployment (status: 404)` ／ `HttpError: Not Found` ／ `Ensure GitHub Pages has been enabled` | **Pages が未有効、または `Source` が `GitHub Actions` 以外**。`Settings → Pages → Source: GitHub Actions` を選択してから再実行（2-2 を再確認） |
| `Resource not accessible by integration` | ワークフローの `permissions:` ブロックが欠けている、または `Settings → Pages` で `Source` が `GitHub Actions` になっていない |
| `Get Pages site failed` | リポジトリで Pages がまだ有効化されていない（2-2 を再確認） |
| `npm ci` がエラー | `package-lock.json` がコミット漏れ。ローカルで `npm install` 後に追加コミット |
| TypeScript の型エラー | ローカルで `npm run lint` を実行して再現・修正 |

### 8-5. ビルド時間を短縮したい

`Setup Node` の `cache: npm` 指定により、`package-lock.json` 単位で `node_modules` がキャッシュされます。基本これで充分ですが、依存追加直後はキャッシュミスで遅くなる点だけ留意してください。

---

## 9. ロールバック

公開直後に問題が見つかった場合は、`main` ブランチで一つ前のコミットに戻して push し直すのが最も簡単です。

```bash
git revert HEAD       # 直前のコミットを打ち消す
git push origin main  # → Actions が再走し、自動で復旧する
```

`Actions` タブから過去の成功ワークフローを **`Re-run all jobs`** することでも、その時点の成果物を再デプロイできます。

---

## 10. デプロイチェックリスト（毎回の運用用）

| 項目 | 状態 |
|------|------|
| ローカルで `npm run lint` がグリーン | □ |
| ローカルで `npm run build` がグリーン | □ |
| Qiita 記事の差分を取り込みたい場合は `npm run sync:qiita` を実行済み | □ |
| `main` ブランチへ push 完了 | □ |
| `Actions` タブで該当ワークフローが緑になっている | □ |
| デプロイ後の URL（`https://<ユーザー名>.github.io/<リポジトリ名>/`）を実機で確認 | □ |
| 個人開発ページ（`/projects/family-recipe-archive/`）も実機で確認 | □ |

---

このドキュメントは `docs/deploy-github-pages.md` に置いてあります。  
運用手順を変更する際は、本ファイルもあわせて更新してください。
