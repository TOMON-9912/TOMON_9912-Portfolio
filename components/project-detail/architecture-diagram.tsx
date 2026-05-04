import { ArrowDown, ArrowUp } from "lucide-react";

type Layer = {
  name: string;
  role: string;
  examples: string;
  tone: "neutral" | "highlight";
};

const layers: Layer[] = [
  {
    name: "Presentation",
    role: "UI と Server Action の入口",
    examples: "Server Component / Client Component / Server Action",
    tone: "neutral",
  },
  {
    name: "UseCase",
    role: "ビジネスロジックを束ねる",
    examples: "SignupUseCase / LoginUseCase / ToggleFavoriteUseCase ...",
    tone: "neutral",
  },
  {
    name: "Domain",
    role: "中心。型・エンティティ・Repository インターフェース",
    examples: "User / Recipe / AuthRepository (interface)",
    tone: "highlight",
  },
  {
    name: "Infrastructure",
    role: "外部依存の実装",
    examples: "AuthRepositoryImpl / Supabase client / Storage adapter",
    tone: "neutral",
  },
];

const arrows = [
  { direction: "down" as const, label: "依存する" },
  { direction: "down" as const, label: "依存する" },
  { direction: "up" as const, label: "実装する（依存反転）" },
];

export function ArchitectureDiagram() {
  return (
    <div className="space-y-2">
      {layers.map((layer, index) => (
        <div key={layer.name} className="space-y-2">
          <LayerCard layer={layer} />
          {index < layers.length - 1 ? (
            <ArrowMark
              direction={arrows[index].direction}
              label={arrows[index].label}
            />
          ) : null}
        </div>
      ))}

      <p className="pt-3 text-xs text-muted-foreground">
        矢印は「依存の向き」を表しています。クリーンアーキテクチャでは
        SOLID の依存性逆転（DIP）に沿って、抽象的なポート（インターフェース）は内側が定義し、インフラ層は具象としてそれを実装します。結果として DB や
        SDK への依存が内側へ波及しない構造になります。
      </p>
    </div>
  );
}

function LayerCard({ layer }: { layer: Layer }) {
  const isCenter = layer.tone === "highlight";
  return (
    <div
      className={
        isCenter
          ? "rounded-2xl border-2 border-primary/40 bg-primary/5 p-4 sm:p-5"
          : "rounded-2xl border border-border/80 bg-card p-4 shadow-xs sm:p-5"
      }
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <p
          className={
            isCenter
              ? "text-base font-semibold tracking-tight text-primary sm:text-lg"
              : "text-base font-semibold tracking-tight text-foreground sm:text-lg"
          }
        >
          {layer.name}
          {isCenter ? (
            <span className="ml-2 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 align-middle text-[10px] font-medium tracking-wider text-primary uppercase">
              Center
            </span>
          ) : null}
        </p>
        <p className="text-xs font-medium text-muted-foreground">{layer.role}</p>
      </div>
      <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted-foreground/90 sm:text-xs">
        {layer.examples}
      </p>
    </div>
  );
}

function ArrowMark({
  direction,
  label,
}: {
  direction: "down" | "up";
  label: string;
}) {
  const Icon = direction === "down" ? ArrowDown : ArrowUp;
  return (
    <div className="flex items-center justify-center gap-2 py-0.5 text-xs text-muted-foreground">
      <Icon className="size-3.5 text-primary/70" aria-hidden />
      <span className="font-medium tracking-wide">{label}</span>
    </div>
  );
}
