import { siteConfig } from "@/lib/site-config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            人物像
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-[2rem]">
            業務の言葉とコードの言葉、
            <br className="hidden sm:block" />
            <span className="text-primary">その両方を行き来できる開発者</span>
            でありたいと考えています。
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            社会人になってからはノーコード開発を入口に、PHP / Laravel・Java など業務 Web アプリ開発を経験し、現在は
            {siteConfig.currentRole.summary}
            に従事しています。並行して個人開発で Next.js × TypeScript × Supabase の設計を継続的に深めており、業務と個人開発の両方を自分の素材として育てています。
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            「仕組みで技術的負債を減らすこと」と「業務とコードの語彙を揃えること」、この 2 点が、私の働き方のなかで一貫している軸です。
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr),minmax(0,1fr)]">
          <Card className="border-border/80 shadow-xs">
            <CardHeader>
              <CardTitle className="text-base">現在の立ち位置</CardTitle>
              <CardDescription>
                {siteConfig.currentRole.since} ／ {siteConfig.currentRole.summary}
                <br />
                その前は {siteConfig.priorExperience.period}
                ：{siteConfig.priorExperience.summary}。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                現在の業務は PHP / Laravel を中心とした Web アプリ開発が主軸です。並行して、Cursor や ChatGPT を「設計の壁打ち相手」「テスト観点の整理役」として日常的に活用しています。AI を実装速度を上げる装置としてだけでなく、
                <strong className="font-medium text-foreground">
                  自分が責任を持つ判断を太らせるための補助線
                </strong>
                として位置づけています。
              </p>
              <div className="rounded-xl border border-dashed bg-muted/40 p-4">
                <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                  AI を使う際の自分なりの線引き
                </p>
                <p className="mt-2 text-sm">
                  実装の速度を上げるだけでは付加価値にならないと考えています。そのため「機能追加を見送った判断」「採用しなかった設計の理由」「役割分担の認識合わせ」など、
                  <strong className="font-medium text-foreground">
                    自分が責任を持つ判断はドキュメントとして残す
                  </strong>
                  ようにしています。
                </p>
              </div>
              <p>
                記事を書き続けているのは、自分の頭を整理するため／読者の復習のため／同じ判断を将来の自分が再現できるため、の 3 点に集約されます。Qiita では「定義 → よくある落とし穴 → 設計上の意義」までを 1 本に収める構成を、ほぼすべての記事で踏襲しています。
              </p>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <div className="rounded-xl border bg-card p-5 shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                外部スキルシグナル（参考値）
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {siteConfig.skillSignals.map(({ name, note }) => (
                  <li
                    key={name}
                    className="flex justify-between gap-4 border-b border-border/50 py-2 last:border-0"
                  >
                    <span className="font-medium text-foreground">{name}</span>
                    <span className="text-muted-foreground">{note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                スキル偏差値はあくまで参考値です。Qiita の設計記事と職務経歴のハイライトをあわせてご覧いただく前提で配置しています。
              </p>
            </div>
            <div className="rounded-xl border bg-card p-5 shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                スタック俯瞰
              </p>
              <dl className="mt-4 space-y-4">
                {siteConfig.skillHighlights.map(({ category, items }) => (
                  <div key={category}>
                    <dt className="text-sm font-medium text-foreground">{category}</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-secondary/70 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
