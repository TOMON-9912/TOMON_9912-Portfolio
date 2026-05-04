import { CheckCircle2, MinusCircle, Target } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fitGood = [
  "型・レビュー・テストを、個人スキルだけでなくチームの再現性として整えていきたい",
  "Laravel / PHP の業務開発に加え、Next.js / TypeScript のフロント〜BaaS まで領域を広げていきたい",
  "設計（責務・境界・ドメイン用語）を、実装と同じ粒度で前に進めたい",
  "新人が研修からそのまま現場に入れるドキュメントや運用を残せる人を歓迎している",
];

const fitTask = [
  "Fat Controller や属人化した SQL を整理し、後任者が迷わない構造へ寄せる",
  "手作業や帳票運用のミスを、業務フローとデータ設計の両側から削減する",
  "テスト仕様、レビュー観点、オンボーディングの仕組み化",
  "ドメイン整理（ユビキタス言語、業務分解）のリードや壁打ち",
];

const honestPoints = [
  "大規模トラフィックや SRE 専任での深い経験は限定的です。私の主戦場は「業務ドメインに根ざしたアプリ開発と、開発文化づくり」だと認識しています。",
  "業務スタックは PHP / Laravel が中心で、モダンフロントの実務証明はこれから広げていきたい段階です。Next.js は個人開発で深めており、業務でも比重を増やしていきたいと考えています。",
];

export function BuyerFitSection() {
  return (
    <section id="fit" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-primary shadow-xs">
            <Target className="size-3.5" aria-hidden />
            <span>採用ご担当・現場リードの方への相性チェック</span>
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-[2rem]">
            すべての求人と等しく合うわけではないので、
            <br className="hidden sm:block" />
            <span className="text-primary">先に期待値を共有させてください。</span>
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            私が貢献できる領域も、
            <strong className="font-medium text-foreground">
              現時点で踏み込めていない領域
            </strong>
            も、同じ温度で書きます。重なる部分が多いと感じていただけたら、その後の面談ではより深い話ができると考えています。
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-primary/15 shadow-xs">
            <CardHeader className="border-b border-border/60 bg-primary/5 pb-4">
              <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                マッチしやすい組織
              </p>
              <CardTitle className="text-lg leading-snug">
                こういった組織で力を発揮できます
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {fitGood.map((line) => (
                  <li key={line} className="flex gap-2">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/15 shadow-xs">
            <CardHeader className="border-b border-border/60 bg-primary/5 pb-4">
              <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                得意な役割
              </p>
              <CardTitle className="text-lg leading-snug">
                お任せいただきたい課題
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {fitTask.map((line) => (
                  <li key={line} className="flex gap-2">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-2xl border border-dashed bg-muted/40 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <MinusCircle className="size-4 text-muted-foreground" aria-hidden />
            正直にお伝えしておきたい点
          </div>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {honestPoints.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-foreground">—</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
