import { recruiterArticlePicks } from "@/content/recruiter-picks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ArticlesSection() {
  return (
    <section
      id="articles"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div id="picks" className="scroll-mt-20 space-y-10">
          <header className="max-w-3xl space-y-4">
            <p className="text-sm font-medium tracking-wider text-primary uppercase">
              ペルソナ別おすすめ記事
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-[2rem]">
              貴社が求める人材像に近いテーマから、
              <br className="hidden sm:block" />
              <span className="text-primary">読み進めていただけます。</span>
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              すべての記事に目を通していただく必要はありません。
              <strong className="font-medium text-foreground">
                求人票で重視されている観点
              </strong>
              に近いテーマを 1 つお選びいただければ、私の強みがどこに効くかを 5 分程度で確認いただける構成にしています。各リンクは Qiita に遷移します。
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {recruiterArticlePicks.map((pick, index) => (
              <Card
                key={pick.id}
                className="relative overflow-hidden border-border/80 shadow-xs transition-shadow hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="absolute top-5 right-5 font-mono text-[11px] font-medium tracking-wider text-primary/70"
                >
                  PICK 0{index + 1}
                </span>
                <CardHeader className="space-y-2 border-b border-border/60 bg-card pb-5 pr-16">
                  <CardTitle className="text-lg leading-snug sm:text-xl">
                    {pick.headline}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {pick.subline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 pt-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      私の強みとの接点
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                      {pick.bullets.map((b) => (
                        <li key={b}>・{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2.5">
                    {pick.articles.map((a) => (
                      <a
                        key={a.url}
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group block rounded-lg border border-border/70 bg-background/80 px-4 py-3 transition-colors hover:border-primary/50 hover:bg-primary/5"
                      >
                        <p className="text-sm font-medium text-foreground group-hover:text-primary">
                          {a.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {a.hook}
                        </p>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
