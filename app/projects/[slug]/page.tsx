import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CircleCheck,
  ExternalLink,
  HeartHandshake,
  Layers,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { getProjectBySlug, projects } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";
import { GithubIcon } from "@/components/icons/github-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Not Found" };
  }
  return {
    title: `${project.title}（${project.englishTitle ?? "個人開発"}） — ${siteConfig.displayName}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -top-32 left-1/2 size-[620px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-[-15%] bottom-[-30%] size-[480px] rounded-full bg-accent/40 blur-3xl" />
          </div>

          <div className="mx-auto max-w-5xl space-y-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" aria-hidden />
              プロフィールページに戻る
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                個人開発プロジェクト
              </span>
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                {project.status}
              </span>
              {project.englishTitle ? (
                <span className="font-mono text-[11px] tracking-wider text-muted-foreground/80">
                  {project.englishTitle}
                </span>
              ) : null}
            </div>

            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-semibold leading-[1.18] tracking-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {project.tagline}
              </p>
              <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <GithubIcon className="size-4" aria-hidden />
                GitHub リポジトリを見る
                <ExternalLink className="size-3.5 opacity-70" aria-hidden />
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                >
                  デモを開く
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border bg-muted/40 px-5 py-2.5 text-sm font-medium text-muted-foreground">
                  デモ URL：未公開（デプロイ準備中）
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="border-b bg-muted/30 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl space-y-8">
            <header className="max-w-3xl space-y-3">
              <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
                <Lightbulb className="size-4" aria-hidden />
                Why This Product
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                なぜ私はこのプロダクトを作っているのか
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {project.why.lead}
              </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)]">
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  捉えている課題
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/90">
                  {project.why.problems.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-7">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-primary uppercase">
                  <HeartHandshake className="size-4" aria-hidden />
                  目指していること
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                  {project.why.goal}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Concepts */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl space-y-10">
            <header className="max-w-3xl space-y-3">
              <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
                <Sparkles className="size-4" aria-hidden />
                Core Concept
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                プロダクトの中心思想
              </h2>
            </header>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {project.concepts.map((concept, index) => (
                <article
                  key={concept.title}
                  className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xs"
                >
                  <span
                    aria-hidden
                    className="absolute top-4 right-5 font-mono text-[11px] font-medium tracking-wider text-primary/60"
                  >
                    0{index + 1}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {concept.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {concept.body}
                  </p>
                  {concept.bullets ? (
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/90">
                      {concept.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <CircleCheck
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="border-y bg-muted/30 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl space-y-8">
            <header className="max-w-3xl space-y-3">
              <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
                <Layers className="size-4" aria-hidden />
                Tech Stack
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                技術スタックと選定理由
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                どの技術を、どんな理由で選んだか。設計判断の手触りが伝わる粒度で整理しています。
              </p>
            </header>
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3">カテゴリ</th>
                    <th className="px-5 py-3">技術</th>
                    <th className="px-5 py-3">選定理由</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/70">
                  {project.techStack.map((row) => (
                    <tr key={row.tech} className="align-top">
                      <td className="px-5 py-3 text-xs font-medium text-muted-foreground sm:text-sm">
                        {row.category}
                      </td>
                      <td className="px-5 py-3 font-medium text-foreground">
                        {row.tech}
                      </td>
                      <td className="px-5 py-3 leading-relaxed text-muted-foreground">
                        {row.reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl space-y-10">
            <header className="max-w-3xl space-y-3">
              <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
                <ShieldCheck className="size-4" aria-hidden />
                Architectural Principles
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                設計上のこだわり
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                個人開発だからこそ、業務では取り切れない「設計判断のトレードオフ」を 1 人で繰り返せる場として位置づけています。**何を採用したか**だけでなく、**何を棄却したか／どのリスクを引き受けたか**まで言語化することを意識しました。
              </p>
            </header>
            <div className="grid gap-6 md:grid-cols-2">
              {project.principles.map((principle, index) => (
                <article
                  key={principle.title}
                  className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xs sm:p-7"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-primary/5 blur-2xl"
                  />
                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-primary uppercase">
                        Principle 0{index + 1}
                      </span>
                      <ShieldCheck
                        className="size-5 text-primary/70"
                        aria-hidden
                      />
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {principle.description}
                    </p>

                    <div className="space-y-2 border-t border-border/60 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        具体的に決めたこと
                      </p>
                      <ul className="space-y-2 text-sm leading-relaxed text-foreground/85">
                        {principle.bullets.map((b) => (
                          <li
                            key={b}
                            className="border-l-2 border-primary/40 pl-3"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {principle.tradeoff ? (
                      <div className="space-y-1.5 rounded-lg border border-dashed border-amber-500/40 bg-amber-50/50 p-4 dark:bg-amber-950/20">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                          トレードオフ／棄却した代替案
                        </p>
                        <p className="text-sm leading-relaxed text-foreground/85">
                          {principle.tradeoff}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="border-t bg-muted/30 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl space-y-8">
            <header className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold tracking-wider text-primary uppercase">
                Future Vision
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                これからの方向性
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                スケールすることが目的ではなく、「小さくても長く続くこと」「データ主権を尊重すること」を中心に置いています。
              </p>
            </header>
            <ul className="grid gap-3 sm:grid-cols-3">
              {project.vision.map((line) => (
                <li
                  key={line}
                  className="rounded-2xl border border-border/80 bg-card p-5 text-sm leading-relaxed text-foreground/90 shadow-xs"
                >
                  {line}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-card p-6 sm:p-7">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">
                  ソースコードと設計意図はリポジトリで公開しています
                </p>
                <p className="text-xs text-muted-foreground">
                  {project.githubUrl.replace("https://", "")}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  <GithubIcon className="size-4" aria-hidden />
                  GitHub を開く
                </a>
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <ArrowLeft className="size-4" aria-hidden />
                  プロフィールに戻る
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
