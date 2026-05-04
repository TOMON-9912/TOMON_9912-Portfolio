import { Activity, FileCheck2, Hammer, TrendingUp } from "lucide-react";

const proofs = [
  {
    icon: Activity,
    metric: "99%",
    metricLabel: "工数削減",
    title: "テスト仕様書の作成プロセスを再設計",
    body: "属人化していた単体テスト仕様の作成を、設計書からそのままケースを起こす運用に置き換えました。1 案件あたり 1〜2 日かかっていた作業を、5 分未満で再現できる手順にまで整えています。",
    tag: "プロセス改善",
  },
  {
    icon: FileCheck2,
    metric: "1 名で担当",
    metricLabel: "要件 → リリース",
    title: "社内入退室管理 Web アプリを単独で構築",
    body: "要件定義から実装・リリースまでを 1 名体制で担当しました。Repository / Service の責務分離と、後任者がそのまま読める粒度のドキュメントを揃え、社内研修教材としても活用される形で残しています。",
    tag: "設計品質",
  },
  {
    icon: TrendingUp,
    metric: "167%",
    metricLabel: "目標達成率",
    title: "DX 推進サービスの展示会で名刺獲得を最大化",
    body: "デモアプリ・トークスクリプト・ポスターの設計から取りまとめまでを担当し、3 日間で約 500 枚の名刺を獲得しました（目標 300 枚）。技術以外の領域でも、成果につながる仕組みを設計できます。",
    tag: "プリセールス",
  },
  {
    icon: Hammer,
    metric: "1 ヶ月",
    metricLabel: "で自走へ",
    title: "PHP / Laravel 未経験から短期間で立ち上げ",
    body: "未経験スタックでアサインされた案件で、約 1 ヶ月で自走できる状態まで立ち上がりました。Fat Controller の責務分離まで踏み込み、短期間でも品質を担保した実装を行っています。",
    tag: "キャッチアップ力",
  },
] as const;

export function ProofSection() {
  return (
    <section
      id="proof"
      className="scroll-mt-20 border-y bg-muted/40 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            数字で語れる、私の主な実績
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-[2rem]">
            「実装が速い」より、
            <span className="text-primary">仕組みで結果を出すこと</span>
            を重視しています。
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            アーキテクチャを語るより前に、
            <strong className="font-medium text-foreground">
              現場の手戻りを実際に減らせた事実
            </strong>
            と、<strong className="font-medium text-foreground">
              後任者にも価値が残る形でまとめた仕事
            </strong>
            を中心に整理しました。具体の規模感は面談の中ですり合わせさせてください。
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {proofs.map(({ icon: Icon, metric, metricLabel, title, body, tag }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-xs transition-shadow hover:shadow-md sm:p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-primary/5 blur-2xl"
              />
              <div className="relative flex items-start justify-between gap-3">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
                  {tag}
                </span>
                <Icon className="size-5 text-primary/70" aria-hidden />
              </div>
              <div className="relative mt-5 flex items-baseline gap-2">
                <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {metric}
                </p>
                <p className="text-sm text-muted-foreground">{metricLabel}</p>
              </div>
              <h3 className="relative mt-3 text-lg font-semibold leading-snug text-foreground">
                {title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
