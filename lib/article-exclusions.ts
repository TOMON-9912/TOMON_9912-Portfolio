import type { QiitaArticle } from "@/content/qiita-articles";

/** Qiita /items の ID のうち、このサイトには掲載しないもの */
export const EXCLUDED_QIITA_ITEM_IDS = new Set([
  /** 【ポートフォリオ開発記】 #1 …（シリーズ未完のため非掲載） */
  "4c8bbf7dca90250ade4b",
]);

export function isExcludedQiitaArticleUrl(url: string): boolean {
  for (const id of EXCLUDED_QIITA_ITEM_IDS) {
    if (url.endsWith(id)) return true;
  }
  return false;
}

export function visibleQiitaArticles(items: QiitaArticle[]): QiitaArticle[] {
  return items.filter((a) => !isExcludedQiitaArticleUrl(a.url));
}
