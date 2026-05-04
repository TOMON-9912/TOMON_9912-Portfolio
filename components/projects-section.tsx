import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/content/projects";
import { GithubIcon } from "@/components/icons/github-icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            個人開発プロジェクト
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-[2rem]">
            業務外で深めている、
            <span className="text-primary">設計と長期保守の実験場</span>
            です。
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            個人開発は「業務では取り切れない設計上の意思決定」を一人で繰り返すための場として位置づけています。Next.js × TypeScript × Supabase × Vitest を中心に、クリーンアーキテクチャや RLS によるマルチテナント設計など、業務に持ち込みたい考え方を実験しています。
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="group relative flex h-full flex-col overflow-hidden border-border/80 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-primary/5 blur-2xl"
              />
              <CardHeader className="relative space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 font-medium text-primary">
                    {project.status}
                  </span>
                  {project.englishTitle ? (
                    <span className="font-mono text-[11px] tracking-wider text-muted-foreground/80">
                      {project.englishTitle}
                    </span>
                  ) : null}
                </div>
                <CardTitle className="text-xl leading-snug sm:text-2xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative flex-1 space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="relative flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/projects/${project.slug}/`}
                  className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
                >
                  プロジェクト詳細を見る
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <GithubIcon className="size-4" aria-hidden />
                  GitHub
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
