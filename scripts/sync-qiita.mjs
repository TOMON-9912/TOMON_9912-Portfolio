#!/usr/bin/env node
/**
 * Qiita の公開記事一覧を取得して content/qiita-articles.ts を上書きします。
 * npm run sync:qiita
 */
import fs from "node:fs";
import https from "node:https";

const USER = process.env.QIITA_USER ?? "TOMON_9912";
const DEST = new URL("../content/qiita-articles.ts", import.meta.url);

const url = `https://qiita.com/api/v2/users/${USER}/items?per_page=100`;

function fetchJson(u) {
  return new Promise((resolve, reject) => {
    https
      .get(u, { headers: { Accept: "application/json" } }, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`HTTP ${res.statusCode}: ${data.slice(0, 200)}`));
            return;
          }
          resolve(JSON.parse(data));
        });
      })
      .on("error", reject);
  });
}

const EXCLUDED_ITEM_IDS = new Set(["4c8bbf7dca90250ade4b"]);

const items = await fetchJson(url);
const rows = items
  .filter((i) => !EXCLUDED_ITEM_IDS.has(i.id))
  .map((i) => ({
    title: i.title,
    url: i.url,
    updatedAt: i.updated_at,
    likes: i.likes_count,
    tags: (i.tags || []).map((t) => t.name),
  }));

const out =
  `export type QiitaArticle = {\n  title: string;\n  url: string;\n  updatedAt: string;\n  likes: number;\n  tags: string[];\n};\n\nexport const qiitaArticles: QiitaArticle[] = ${JSON.stringify(rows, null, 2)};\n`;

fs.mkdirSync(new URL("../content/", import.meta.url), { recursive: true });
fs.writeFileSync(DEST, out);
console.log(
  `Wrote ${rows.length} items (excluding ${items.length - rows.length}) to ${DEST.pathname}`,
);
