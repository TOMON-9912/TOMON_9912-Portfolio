import {
  ArrowUpRight,
  BarChart3,
  BookOpenCheck,
  Briefcase,
  Compass,
  Rocket,
  ScanSearch,
  Sparkles,
} from "lucide-react";

const entries = [
  {
    icon: BarChart3,
    label: "成果を数字で確認したい方",
    description: "工数削減・達成率・実装範囲を、定量で先に把握できます。",
    href: "#proof",
  },
  {
    icon: Sparkles,
    label: "開発スタイル・技術観を知りたい方",
    description: "私が日々の開発で大切にしている3つの軸をまとめています。",
    href: "#value",
  },
  {
    icon: ScanSearch,
    label: "自社との相性を判断したい方",
    description: "得意な役割と、踏み込めていない領域を率直に書いています。",
    href: "#fit",
  },
  {
    icon: Compass,
    label: "転職で何を求めているか知りたい方",
    description: "なぜ動くのか、どんな環境を希望しているかを整理しています。",
    href: "#motivation",
  },
  {
    icon: BookOpenCheck,
    label: "求める人材像に近い記事から読みたい方",
    description: "求人票のテーマ別に、Qiita 記事をまとめてご案内します。",
    href: "#picks",
  },
  {
    icon: Rocket,
    label: "個人開発プロジェクトを見たい方",
    description: "業務外で深めている設計・アーキテクチャの実験場をご紹介します。",
    href: "#projects",
  },
  {
    icon: Briefcase,
    label: "経歴を時系列で読みたい方",
    description: "案件ごとの成果と関与範囲を、ハイライト中心にまとめました。",
    href: "#career",
  },
] as const;

export function PersonaNavSection() {
  return (
    <section
      id="persona-nav"
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="max-w-3xl space-y-3">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            目的別の入口
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-[2rem]">
            ご覧になりたい観点から、読み進めてください。
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            採用担当の方、技術リードの方、配属先のメンバーの方では、確認したい情報の優先度が違うはずです。
            <strong className="font-medium text-foreground">
              関心に近い入口
            </strong>
            から読み始めていただけるよう、目次の代わりにご用意しました。
          </p>
        </header>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(({ icon: Icon, label, description, href }) => (
            <li key={href}>
              <a
                href={href}
                className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold leading-snug text-foreground sm:text-[0.95rem]">
                    {label}
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                  該当セクションを開く
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
