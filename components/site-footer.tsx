import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t bg-background px-4 py-16 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-0 size-[480px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            最後までお読みいただきありがとうございます
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            ご興味を持っていただけましたら、
            <br className="hidden sm:block" />
            <span className="text-primary">面談で詳しくお話しさせてください。</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            このサイトは、限られた時間のなかで自社との相性をご判断いただけるよう、要点を整理したプロフィールページとして作成しました。記事と職務経歴をあわせてご覧いただければ、私の輪郭はおおよそご理解いただけると考えています。案件の規模感や、ここに書ききれていない判断の話は、ぜひ面談で続きをお話しさせてください。
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={siteConfig.qiitaProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-primary/30 bg-card px-4 py-2 text-sm font-medium text-primary shadow-xs hover:bg-primary/5"
            >
              Qiita（{siteConfig.publicHandle}）を開く
            </a>
            <Link
              href="/#persona-nav"
              className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              目的別の入口に戻る
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.displayName} ・ 採用・面談向けプロフィールページ
          </p>
          <p className="text-muted-foreground/80">
            Built with Next.js · Tailwind CSS · shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
