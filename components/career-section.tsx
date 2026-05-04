import { careerEntries } from "@/content/career";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CareerSection() {
  return (
    <section
      id="career"
      className="scroll-mt-20 border-y bg-muted/40 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="max-w-3xl space-y-3">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            職務経歴のハイライト
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-[2rem]">
            「何を改善し、誰のための設計にしたか」を中心にまとめています。
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            時系列の詳細レジュメは別途 PDF でお渡しします。本セクションでは、案件ごとの一行サマリと、
            <strong className="font-medium text-foreground">どの領域に踏み込んで成果を出したか</strong>
            を中心に整理しました。
          </p>
        </header>

        <div className="relative space-y-6">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-3 hidden w-px bg-linear-to-b from-primary/40 via-border to-transparent sm:block"
          />
          {careerEntries.map((entry) => (
            <div key={entry.id} className="relative sm:pl-10">
              <span
                aria-hidden
                className="absolute top-7 left-1.5 hidden size-3.5 rounded-full border-2 border-primary bg-background sm:block"
              />
              <Card className="border-border/80 shadow-xs transition-shadow hover:shadow-md">
                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <Badge variant="secondary" className="font-normal">
                      {entry.period}
                    </Badge>
                    <span className="rounded-full border border-border bg-background px-2 py-0.5 text-muted-foreground">
                      {entry.employer}
                    </span>
                    <span className="text-muted-foreground">{entry.role}</span>
                  </div>
                  <CardTitle className="text-lg leading-snug sm:text-xl">
                    {entry.title}
                  </CardTitle>
                  <p className="rounded-md border-l-4 border-primary/60 bg-primary/5 px-3 py-2 text-sm font-medium leading-snug text-foreground">
                    {entry.headline}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {entry.highlights.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground/70">主な利用技術</span>：{entry.tech}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
