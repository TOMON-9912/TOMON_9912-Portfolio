import { ArrowRight, Sparkles } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 size-[680px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[-15%] bottom-[-30%] size-[520px] rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr,minmax(0,0.9fr)] lg:items-center">
        <div className="space-y-9">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground shadow-xs">
              <Sparkles className="size-3.5 text-primary" aria-hidden />
              <span>採用・技術面談の前にご一読ください</span>
            </div>
            <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary">
              現職：インハウスでの Web アプリ開発
            </span>
          </div>

          <div className="space-y-6">
            <p className="font-mono text-sm font-medium tracking-wide text-primary">
              {siteConfig.publicHandle}
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.18] tracking-tight sm:text-5xl lg:text-[3rem]">
              {siteConfig.oneLine}
            </h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {siteConfig.pitch}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#persona-nav"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "gap-2 px-6",
              )}
            >
              目的別の入口を見る
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#proof"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}
            >
              数字で語れる成果へ
            </a>
            <a
              href={siteConfig.qiitaProfileUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "px-4")}
            >
              Qiita を開く →
            </a>
          </div>

          <dl className="grid gap-3 text-sm sm:grid-cols-3">
            <Stat label="開発年数" value="約 4 年" sub="ノーコード〜コードまで" />
            <Stat label="Qiita 累計" value="50 本以上" sub="設計テーマを継続して執筆" />
            <Stat
              label="拠点 / 年齢"
              value={`${siteConfig.location} / ${siteConfig.age} 歳`}
              sub={siteConfig.currentRole.since}
            />
          </dl>
        </div>

        <aside className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 -translate-x-3 translate-y-3 rounded-2xl bg-primary/10"
          />
          <div className="relative rounded-2xl border border-primary/20 bg-card p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
              30 秒で伝えたい3つの強み
            </p>
            <ul className="mt-5 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <li>
                <p className="text-base font-semibold leading-snug text-foreground">
                  仕組みで成果を出します
                </p>
                <p className="mt-1.5">
                  単体テスト仕様書の作成プロセスを再設計し、
                  <strong className="font-semibold text-primary">
                    1〜2 日かかっていた工数を 5 分未満
                  </strong>
                  まで短縮しました。
                </p>
              </li>
              <li>
                <p className="text-base font-semibold leading-snug text-foreground">
                  一人で担当しきる開発力
                </p>
                <p className="mt-1.5">
                  社内 Web アプリを<strong className="font-semibold text-foreground">要件定義からリリースまで一人で担当</strong>し、社内研修でも活用できるドキュメントを残しました。
                </p>
              </li>
              <li>
                <p className="text-base font-semibold leading-snug text-foreground">
                  設計テーマを書き続けています
                </p>
                <p className="mt-1.5">
                  オブジェクト指向シリーズ・DDD シリーズ・Next.js のレイヤ設計など、ひとつのテーマを
                  <strong className="font-semibold text-foreground">連作として書き続けて</strong>
                  います。
                </p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border bg-card/70 p-4 shadow-xs backdrop-blur-sm">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-lg font-semibold tracking-tight text-foreground">
        {value}
      </dd>
      <dd className="text-xs text-muted-foreground">{sub}</dd>
    </div>
  );
}
