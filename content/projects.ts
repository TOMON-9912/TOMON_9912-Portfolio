export type ProjectStatus = "開発中（未デプロイ）" | "公開中" | "設計中";

export type TechStackItem = {
  category: string;
  tech: string;
  reason: string;
};

export type ProjectPrinciple = {
  title: string;
  bullets: string[];
};

export type ProjectConcept = {
  title: string;
  body: string;
  bullets?: string[];
};

export type ProjectEntry = {
  slug: string;
  /** UI 上の作品名 */
  title: string;
  /** 作品名の英表記（補助） */
  englishTitle?: string;
  /** カードと冒頭の一行コピー */
  tagline: string;
  /** 開発状況 */
  status: ProjectStatus;
  /** GitHub の公開 URL */
  githubUrl: string;
  /** デモ URL（ある場合のみ） */
  demoUrl?: string;
  /** トップページのカード用の短い説明（120字程度） */
  summary: string;
  /** カードと詳細ページに表示する技術タグ */
  techTags: string[];
  /** 詳細ページ：プロジェクトを始めた背景 */
  why: {
    lead: string;
    problems: string[];
    goal: string;
  };
  /** 詳細ページ：プロダクトのコンセプト */
  concepts: ProjectConcept[];
  /** 詳細ページ：技術スタックと選定理由 */
  techStack: TechStackItem[];
  /** 詳細ページ：設計上のこだわり */
  principles: ProjectPrinciple[];
  /** 詳細ページ：今後の展望 */
  vision: string[];
};

export const projects: ProjectEntry[] = [
  {
    slug: "family-recipe-archive",
    title: "ファミリー味帳",
    englishTitle: "Family Recipe Archive",
    tagline: "家族の味と思い出を一緒に残す、クローズドなレシピアプリ",
    status: "開発中（未デプロイ）",
    githubUrl: "https://github.com/TOMON-9912/cooking-recipe",
    summary:
      "結婚や引越し、世代交代で失われていく「家族の味」を、写真・失敗談・思い出ごと記録するための家族専用のレシピアーカイブです。Next.js 16 × Supabase × クリーンアーキテクチャで、長期保存と家族単位のデータ分離を最優先に設計しています。",
    techTags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Tailwind CSS v4",
      "Vitest",
      "クリーンアーキテクチャ",
    ],
    why: {
      lead: "「料理」という共通体験を通じて、家族のつながりを保存・再構築するために作っています。",
      problems: [
        "結婚や引越しで家族と距離ができ、味の継承が途切れてしまう",
        "親世代が亡くなったあと、思い出の味が再現できなくなる",
        "離乳食やアレルギー対応など、外には出しづらいレシピを安心して残したい",
      ],
      goal: "家族の味を「消耗品」ではなく「記憶資産」として捉え、世代を超えて継承できる場所を目指しています。",
    },
    concepts: [
      {
        title: "Closed Environment（家族単位の閉じた空間）",
        body: "本アプリは家族単位で完全に分離された空間を提供します。安心を最優先に設計しています。",
        bullets: [
          "他の家族のデータには一切アクセスできない",
          "家族単位でデータを管理（招待制）",
          "離乳食などセンシティブな内容も安心して保存できる",
        ],
      },
      {
        title: "Family-Owned Data（個人ではなく家族の資産）",
        body: "レシピは「個人の所有物」ではなく、「家族の資産」として扱います。個人の死亡や離脱によって味が断絶しない設計を中心に置いています。",
        bullets: [
          "レシピの所有権は内部家族に紐づく",
          "招待済みの家族は継続的にアクセス可能",
          "家族全員不在となった場合の削除フローも想定",
        ],
      },
      {
        title: "Memory-Oriented Design（思い出と一緒に保存する）",
        body: "保存できるのはレシピだけではありません。失敗談・写真・思い出のエピソードを同じ場所に置けるようにすることで、料理越しに世代をつなぐコミュニケーションを意図しています。",
        bullets: [
          "レシピ／失敗談／思い出のエピソード／写真をひとつのまとまりとして保存",
          "将来的にコメント機能を追加し、家族間のやりとりを残せるよう拡張予定",
        ],
      },
    ],
    techStack: [
      {
        category: "フレームワーク",
        tech: "Next.js 16（App Router）",
        reason: "Server Actions による型安全なサーバー処理と、ファイル分割の見通しの良さ",
      },
      {
        category: "UI",
        tech: "React 19 + Tailwind CSS v4 + shadcn/ui",
        reason: "高速な UI 開発と、一貫したデザインの保守",
      },
      {
        category: "言語",
        tech: "TypeScript",
        reason: "型安全性と、エディタ補完による開発体験の向上",
      },
      {
        category: "BaaS",
        tech: "Supabase（PostgreSQL / Auth / Storage）",
        reason: "RLS によるマルチテナント対応とコスト効率の両立",
      },
      {
        category: "ホスティング",
        tech: "Vercel",
        reason: "Next.js との親和性、エッジでの配信",
      },
      {
        category: "テスト",
        tech: "Vitest",
        reason: "TypeScript ネイティブで、設計レイヤごとの単体テストを高速に回す",
      },
    ],
    principles: [
      {
        title: "Clean Architecture",
        bullets: [
          "Domain 層を中心に設計し、UseCase 層でビジネスロジックを管理",
          "Infrastructure 層で Supabase 依存を隔離し、将来的な技術変更に耐える",
          "Server Action は UseCase の呼び出しのみに留めて、責務を薄く保つ",
        ],
      },
      {
        title: "Multi-Tenant Design",
        bullets: [
          "`family_id` によるデータ分離を全レイヤで強制",
          "Supabase RLS でアクセス制御",
          "ドメイン層でも整合性チェックを行い、二重防御を設けている",
        ],
      },
      {
        title: "Storage Strategy",
        bullets: [
          "画像データは長期保存を前提に、ストレージ移行に耐える形で抽象化",
          "画像最適化と、PDF / JSON でのエクスポート機能を実装予定",
          "サービス終了時にもユーザーがデータを持ち出せる前提で設計",
        ],
      },
    ],
    vision: [
      "スケールを目的にせず、小さくても長く続くサービスを目指す",
      "ドメインモデルは極力変更しない（家族・レシピ・思い出という核は固定）",
      "開発者がいなくなっても継承可能な設計と、データ主権の尊重",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}
