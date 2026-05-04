import { ArrowRight, Quote } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const axes = [
  {
    no: "01",
    title: "現代的な開発文化のなかで貢献したい",
    body: "型・テスト・レビューがチームの文化として定着し、変更容易性と品質を両立できる環境で開発に携わりたいと考えています。個人開発では Next.js（App Router）／ TypeScript ／ Supabase ／ Vitest を用いて設計・テストの実践を継続していますが、業務でも同じ方向性で深めていける場所を希望しています。",
  },
  {
    no: "02",
    title: "プロダクトの成長に当事者として関わりたい",
    body: "仕様の実装で終わらず、プロダクトそのものの成長に関わりたいと考えています。これまでも、手書き帳簿の見直しによる運用改善や、保守コストを下げるための再利用設計など、事業の課題と技術選定をつないだ提案を積み重ねてきました。次の環境でも、仮説 → 実装 → 検証のサイクルでビジネスに寄与したいと考えています。",
  },
  {
    no: "03",
    title: "担当範囲と貢献を、市場水準で評価いただける環境",
    body: "要件定義からリリースまでの担当範囲、設計・プロセス改善による貢献を、市場水準に沿って評価していただける環境を希望しています。家族を支える基盤としての安定と、プロフェッショナルとして説明できるキャリアの両立を意識しています。",
  },
] as const;

export function CareerIntentSection() {
  return (
    <section
      id="motivation"
      className="scroll-mt-20 border-y bg-muted/30 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            転職で実現したいこと
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-[2rem]">
            なぜ動くのか、何を求めているのかを
            <br className="hidden sm:block" />
            最初に共有させてください。
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            お互いの期待値が大きくずれない方が、面談の時間も有意義になると考えています。私の転職の軸を、3 つに整理してお伝えします。
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {axes.map(({ no, title, body }) => (
            <Card
              key={no}
              className="relative overflow-hidden border-border/80 shadow-xs transition-shadow hover:shadow-md"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-12 -right-8 text-7xl font-bold text-primary/5"
              >
                {no}
              </div>
              <CardHeader className="relative space-y-2">
                <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  軸 {no}
                </span>
                <CardTitle className="text-lg leading-snug">{title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-card p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:inline-flex">
              <Quote className="size-5" aria-hidden />
            </span>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                転職を考えるに至った背景
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                入社時はコードベースの開発を主軸にしたいという志望でしたが、現職では統合・ノーコード寄りの案件が長期化しており、当初の志望との比重に乖離が生まれています。個人開発で深めてきた TypeScript・テスト・設計の方向性を、業務でも継続的に深められる環境に身を置きたいと考え、転職活動を始めました。
              </p>
              <a
                href="#fit"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                自社との相性を確認する
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
