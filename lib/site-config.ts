export const siteConfig = {
  /** UI・メタでの公開名（本名はサイト上に出さない） */
  displayName: "TOMON_9912",
  publicHandle: "@TOMON_9912",

  title: "TOMON_9912 — 採用・面談前にお読みいただくプロフィール",
  description:
    "要件定義からリリースまでを一人で担当できる開発力と、責務分離・設計テーマの言語化を通じてチームの再現性を高めることを得意としています。テスト仕様作成プロセスを 1〜2 日から 5 分未満まで短縮した実績や、Qiita で継続的に書き続けてきた設計テーマの執筆を中心に、自分の強みをまとめました。",

  /** ヒーローの一行コピー */
  oneLine: "実装の速さよりも、後から入る方が迷わない設計を残すことを大切にしています。",

  /** ヒーロー直下の自己紹介 */
  pitch:
    "要件定義からリリースまでを一人で担当できる開発力と、責務分離・設計テーマの言語化を通じて「チームの再現性」を高めることを得意としています。Next.js × TypeScript × Supabase を個人開発で継続的に深めながら、業務（PHP / Laravel 中心）にも同じ密度の設計品質を持ち込むよう意識しています。",

  location: "大阪府",
  age: 26,

  currentRole: {
    since: "2024年8月〜",
    summary: "Webアプリケーション開発（要件定義〜設計・実装・リリース）／インハウス",
  },
  priorExperience: {
    period: "2022年4月〜2024年7月",
    summary: "受託・SES／ノーコード〜コードベース開発まで幅広く経験",
  },

  qiitaProfileUrl: "https://qiita.com/TOMON_9912",

  /** Findy Skills 由来の参考値 */
  skillSignals: [
    { name: "PHP", note: "偏差値 58（参考）" },
    { name: "TypeScript", note: "偏差値 56（参考）" },
    { name: "Java", note: "偏差値 40（参考）" },
  ],

  skillHighlights: [
    {
      category: "業務での主戦場",
      items: ["PHP", "Laravel", "Java", "MySQL", "業務要件の構造化"],
    },
    {
      category: "個人開発で深めている柱",
      items: [
        "Next.js（App Router）",
        "TypeScript",
        "Supabase / RLS",
        "Vitest",
        "クリーンアーキテクチャ",
      ],
    },
    {
      category: "私が持ち込みたい働き方",
      items: ["ドメイン整理", "責務分離", "仕組み化", "ドキュメント文化"],
    },
  ],

  careerIntent:
    "型・テスト・レビューが文化として定着している環境で、設計・実装・プロセス改善まで一貫して貢献したいと考えています。個人開発で深めてきた設計判断と、業務で培った要件定義力・改善力をひとつに繋ぎ、プロダクトの成長に当事者として関わりたいです。",

  /** フッターなどに足したい外部リンク（追加していけるよう拡張可） */
  links: [] as { label: string; href: string }[],
};
