import { Compass, Layers, MessagesSquare } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    icon: Compass,
    eyebrow: "01 / 仕組みで負債を減らす",
    title: "「気をつけて」運用に頼らない",
    body: "Lint・テンプレート・ドキュメント・命名規則。守りたい品質は、レビューに頼り切らず仕組みへ落とすことを優先します。属人化していたテスト仕様作成プロセスを 99% 短縮した事例が、この姿勢を最もよく示しています。",
    samples: [
      "ESLint の `no-restricted-imports` で Next.js のレイヤ境界を物理的に縛る試み",
      "SQL の使用箇所が追えなかった現場で「使い場所マップ」を作成し、デグレリスクを抑制",
      "後任者が研修教材として読める粒度で、Repository / Service / Blade の構造を残す",
    ],
  },
  {
    icon: Layers,
    eyebrow: "02 / 設計テーマを言語化する",
    title: "シリーズで「考え方」を残す",
    body: "オブジェクト指向シリーズ、DDD シリーズ、Next.js のレイヤ設計や例外処理など、ひとつの設計テーマを Qiita で連作として書き続けています。ToDo を統一題材に、Mermaid 図や比較表の使い方まで揃え、伝え方そのものを自分のなかでパターン化しています。",
    samples: [
      "OOP シリーズ：継承・抽象クラス・インターフェース・関連・集約まで一貫した題材で執筆",
      "DDD：ユビキタス言語・事業活動・トランザクションスクリプトまでを地続きで整理",
      "Next.js：レイヤ別の例外設計と ESLint による依存方向制御で、設計と実装を接続",
    ],
  },
  {
    icon: MessagesSquare,
    eyebrow: "03 / 業務とコードをつなぐ",
    title: "要件・運用まで含めて引き受ける",
    body: "業務 Web アプリの開発で要件定義からリリースまで担当してきた経験を活かし、利用者の言葉と開発者の言葉を行き来する動きを得意としています。実装だけでなく、要件整理・運用設計・教育まで含めて「使い続けられる状態」に整えることを意識しています。",
    samples: [
      "紙の帳簿運用などのオペレーションを、データ設計と運用フローの両側から見直す",
      "新人教育やスコープ管理を、自身の現場観察として記事に整理し続けている",
      "BaaS や生成 AI との付き合い方を、トレードオフを誇張せずそのままの形で書く",
    ],
  },
] as const;

export function ValuePropositionSection() {
  return (
    <section id="value" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            私が大切にしている開発の3つの軸
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-[2rem]">
            個人のスキル以上に、
            <span className="text-primary">チームに残せる開発文化</span>
            を意識しています。
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            これまでの 4 年弱で身につけてきたのは、コードの上手さよりも「壊れにくい運用と設計を整える進め方」です。次の3つの軸が、入社後早い段階で価値を出せると考えている領域です。
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, eyebrow, title, body, samples }) => (
            <Card
              key={title}
              className="relative overflow-hidden border-border/80 shadow-xs"
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 size-44 rounded-full bg-primary/5 blur-2xl"
              />
              <CardHeader className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="text-xs font-medium tracking-[0.18em] text-primary/80 uppercase">
                    {eyebrow}
                  </span>
                </div>
                <CardTitle className="text-xl leading-snug">{title}</CardTitle>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  代表的な取り組み
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {samples.map((line) => (
                    <li
                      key={line}
                      className="border-l-2 border-primary/40 pl-3 text-foreground/80"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
