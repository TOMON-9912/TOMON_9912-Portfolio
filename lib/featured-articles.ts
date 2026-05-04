import type { QiitaArticle } from "@/content/qiita-articles";

function topicalBoost(tags: string[]): number {
  const t = tags.join(" ").toLowerCase();
  let s = 0;
  if (t.includes("next.js")) s += 8;
  if (t.includes("cleanarchitecture")) s += 6;
  if (t.includes("ddd")) s += 5;
  if (t.includes("typescript")) s += 3;
  if (t.includes("supabase")) s += 3;
  if (t.includes("eslint")) s += 2;
  if (t.includes("設計")) s += 2;
  return s;
}

/** サイト掲載用に、注目度が高そうな記事から抽出します */
export function pickFeaturedArticles(
  items: QiitaArticle[],
  max = 9,
): QiitaArticle[] {
  return [...items]
    .map((article) => {
      const freshness = new Date(article.updatedAt).getTime() / 1e13;
      const score =
        article.likes * 3 + topicalBoost(article.tags) + freshness;
      return { article, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((row) => row.article);
}

export function formatDateJa(iso: string): string {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}
