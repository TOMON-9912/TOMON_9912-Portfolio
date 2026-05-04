import { codeToHtml } from "shiki";

type CodeBlockProps = {
  filename: string;
  language: string;
  code: string;
};

/** `ProjectCodeSample.language` と Shiki の対応（必要ならここだけ足す） */
const SHIKI_LANG = {
  ts: "typescript",
  tsx: "tsx",
} as const satisfies Record<string, "typescript" | "tsx">;

function resolveLang(label: string): "typescript" | "tsx" {
  if (label === "typescript" || label === "tsx") return label;
  return SHIKI_LANG[label as keyof typeof SHIKI_LANG] ?? "typescript";
}

export async function CodeBlock({ filename, language, code }: CodeBlockProps) {
  const shikiLang = resolveLang(language);
  const highlighted = await codeToHtml(code, {
    lang: shikiLang,
    theme: "github-dark",
  });

  return (
    <figure className="overflow-hidden rounded-xl border border-border/80 bg-zinc-950 shadow-xs">
      <figcaption className="flex items-center justify-between gap-3 border-b border-zinc-800/80 bg-zinc-900/80 px-4 py-2 font-mono text-[11px] text-zinc-400">
        <span className="truncate">{filename}</span>
        <span className="shrink-0 rounded-full border border-zinc-700/70 px-2 py-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
          {language}
        </span>
      </figcaption>
      <div
        className="min-w-0 overflow-x-auto text-[12.5px] leading-relaxed sm:text-[13px] [&_pre]:my-0 [&_pre]:min-w-max [&_pre]:rounded-none [&_pre]:border-0 [&_pre]:p-4 [&_.shiki]:bg-transparent [&_code]:font-mono [&_code]:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </figure>
  );
}
