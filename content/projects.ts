export type ProjectStatus = "開発中（未デプロイ）" | "公開中" | "設計中";

export type TechStackItem = {
  category: string;
  tech: string;
  reason: string;
};

export type ProjectPrinciple = {
  /** 一行で言うと何のためのこだわりか */
  title: string;
  /** 詳細ページの導入文（2〜3 文） */
  description: string;
  /** 具体的に決めたこと・採用したパターン */
  bullets: string[];
  /** トレードオフや、棄却した代替案 */
  tradeoff?: string;
};

/** 実装抜粋（実コードから直接転記したものだけを置く） */
export type ProjectCodeSample = {
  /** 表示用ラベル（小見出し） */
  title: string;
  /** ソースのファイルパス（リポジトリ相対） */
  filename: string;
  /** シンタックスハイライト用の言語タグ */
  language: "ts" | "tsx";
  /** スニペット前の解説（1〜2 文） */
  description: string;
  /** 実コードの抜粋（実装と一致している必要がある） */
  code: string;
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
  /** 詳細ページ：実装からの抜粋（実コードと完全一致） */
  codeSamples: ProjectCodeSample[];
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
        title: "クリーンアーキテクチャで「依存の向き」を物理的に縛る",
        description:
          "Presentation / UseCase / Domain / Infrastructure の 4 層を明確に分離し、依存方向は常に内側に向かう設計を貫いています。レビューや「気をつけて」運用に頼らず、設計が崩れる前に仕組みで止めることを優先しています。",
        bullets: [
          "Domain 層を中心に置き、Repository インターフェースで永続化の詳細を隠蔽する",
          "UseCase 層がビジネスロジックを保持し、Server Action は UseCase の薄い入口に留める",
          "Infrastructure 層に Supabase 依存を集約し、BaaS を差し替えても影響を 1 層内に閉じ込める",
          "ESLint の `no-restricted-imports` でレイヤ間の禁則ルールを CI 上で検査し続ける",
          "Server Component から Repository を直接呼ばない方針を、`_README.md` に明文化",
        ],
        tradeoff:
          "「初期実装は素直に書いた方が早い」という意見もありますが、長期保守と技術スタック変更の可能性を踏まえ、短期効率より境界の維持を優先しました。",
      },
      {
        title: "マルチテナント設計の「二重防御」",
        description:
          "家族単位での分離は本プロダクトの根幹であり、インフラだけに頼らずドメイン層でも整合性を確認する二重防御を採用しています。家族の食卓に紐づくデータが他家族から見えないことは、機能ではなく前提として扱っています。",
        bullets: [
          "すべてのテナント別テーブルに `family_id` を持たせ、Supabase RLS で行レベルのアクセス制御",
          "ドメインモデルでは家族 ID を値オブジェクトとして扱い、不正な ID 混入を型レベルで阻止",
          "認証コンテキストの `family_id` と、リクエスト内 `family_id` をユースケース境界で照合",
          "招待フローは独立した集約として切り出し、メンバーシップの整合性を 1 か所で担保",
          "「RLS だけに頼らない」という原則を、レビュー観点としても運用ルールに組み込む",
        ],
        tradeoff:
          "二重チェックによりコード量と処理ステップが増えますが、家族データの混在は致命的なため、冗長性を引き受ける判断にしています。",
      },
      {
        title: "失敗を「型」で扱う Result 型エラーハンドリング",
        description:
          "Domain / UseCase 層では throw を避け、`Result<T, E>` 型で「想定された失敗」を呼び出し側に返す設計を採っています。例外の伝播経路を読まなくても、何が起こり得るかを型から把握できる状態を目指しています。",
        bullets: [
          "`types/result.ts` に `Result<T, E>` を定義し、Discriminated Union として扱う",
          "ドメイン層のエラーは「業務的に意味のある失敗」を `E` 側で表現する",
          "UseCase 層で複数 Repository の結果を合成し、最終的に Result でラップして返す",
          "Server Action 境界で UI 向けメッセージへ変換し、try/catch のネストを排除する",
          "想定外のエラー（インフラ障害など）は throw のままに残し、両者を意図的に分離",
        ],
        tradeoff:
          "関数型寄りの記述になるため学習コストはありますが、try/catch の見落としを防げる効果と、レビュー時に「失敗の種類」を一覧できるメリットが上回ると判断しました。",
      },
      {
        title: "「Write Once, Read Forever」を支えるストレージ戦略",
        description:
          "家族の味は短期で消費されるコンテンツではなく、世代を越える記憶資産です。短期実装の容易さよりも、長期保存・移行可能性・データ主権を最優先で設計しています。",
        bullets: [
          "画像は Supabase Storage に保存しつつ、DB には URL ではなく `path` を持たせて移行容易性を確保",
          "署名 URL の発行と画像最適化は Infrastructure 層に集約し、UI 層は実装詳細を意識しない",
          "PDF / JSON エクスポート機能を実装予定とし、ユーザーがデータを持ち出せる前提で設計",
          "別 BaaS や自前ストレージへ移行する際、Repository の差し替えのみで完結する構造に",
          "サービス終了時のデータ取り出しまで含めて、運用責任の範囲として明示",
        ],
        tradeoff:
          "短期的には Supabase Storage に密結合した方が実装は楽ですが、ユーザーへの長期的な約束を優先し、抽象化レイヤの維持コストを引き受けています。",
      },
      {
        title: "テスト戦略を「設計レイヤごと」に分けて回す",
        description:
          "Vitest を中心に、層ごとに異なる責務でテストを書く方針です。テスト容易性そのものをアーキテクチャの良し悪しの指標として使い、ドメイン整理が崩れたらテストが書きにくくなる、という形で早期検知できる構造を目指しています。",
        bullets: [
          "Domain / UseCase は in-memory Repository を用意し、BaaS なしで高速に検証",
          "Supabase 依存のテストはレイヤを切り分け、RLS の動作確認に責務を絞る",
          "命名は「対象 - 状況 - 期待」で統一し、レビュー時に論点が見える粒度を維持",
          "CI ではユニット層を高速に走らせ、変更検出のフィードバックループを短く保つ",
          "テストが書きづらい状況を「設計の歪みのシグナル」として扱い、放置せず再設計に回す",
        ],
        tradeoff:
          "in-memory 実装の二重メンテは増えますが、テスト時間の短縮と「ドメインだけ取り出して語れる」状態を維持できる価値が上回ると判断しました。",
      },
    ],
    codeSamples: [
      {
        title: "失敗の種類を「型」で表現する Result 型",
        filename: "src/types/auth.ts",
        language: "ts",
        description:
          "Discriminated Union として `success: true | false` を分岐させ、try/catch のネストに頼らずに「業務的に意味のある失敗」を呼び出し側へ伝えています。型レベルで成功・失敗のどちらに分岐したかが分かるため、UI 側での扱い忘れを防げます。",
        code: `import { User } from "@/domain/repositories/auth-repository";

export type AuthResult =
  | { success: true; user: User }
  | { success: false; error: string };

export type SignupResult = AuthResult;
export type LoginResult = AuthResult;`,
      },
      {
        title: "UseCase でバリデーションと永続化を順序立てて束ねる",
        filename: "src/usecase/auth/signup.usecase.ts",
        language: "ts",
        description:
          "UseCase はビジネスロジックを保持しつつ、Repository のインターフェースだけに依存しています。バリデーションは早期リターン、Repository への呼び出しは Result 型でラップして返し、Server Action 側はこの Result を UI 用メッセージへ変換するだけに留めています。",
        code: `import { AuthRepository, SignupInput } from "@/domain/repositories/auth-repository";
import { SignupResult } from "@/types/auth";
import { isValidEmail, isValidPasswordLength } from "@/utils/validation";
import { ERROR_MESSAGES } from "@/constants/error-messages";

export class SignupUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(input: SignupInput): Promise<SignupResult> {
    if (!isValidEmail(input.email)) {
      return { success: false, error: ERROR_MESSAGES.EMAIL_INVALID_FORMAT };
    }

    if (!isValidPasswordLength(input.password, 8)) {
      return { success: false, error: ERROR_MESSAGES.PASSWORD_MIN_LENGTH(8) };
    }

    const user = await this.authRepository.signup(input);
    return { success: true, user };
  }
}`,
      },
      {
        title: "UseCase を BaaS なしで単体テストする",
        filename: "src/usecase/auth/signup.usecase.test.ts",
        language: "ts",
        description:
          "Repository をインターフェースで切っているため、Vitest のモックだけで Supabase に依存せず UseCase を単体テストできます。「対象 - 状況 - 期待」の命名で、レビュー時に意図が読みやすくなるようテストケースを揃えています。",
        code: `describe("SignupUseCase", () => {
  let mockRepo: AuthRepository;

  beforeEach(() => {
    mockRepo = {
      login: vi.fn(),
      signup: vi.fn().mockResolvedValue(mockUser),
    };
  });

  it("メール形式が不正なら success: false でエラーメッセージを返す", async () => {
    const useCase = new SignupUseCase(mockRepo);
    const result = await useCase.execute({ email: "invalid", password: "password123" });

    expect(result.success).toBe(false);
    if (!result.success) expect(result.error).toContain("メールアドレス");
    expect(mockRepo.signup).not.toHaveBeenCalled();
  });

  it("バリデーションを通過するとリポジトリを呼び success: true でユーザーを返す", async () => {
    const useCase = new SignupUseCase(mockRepo);
    const result = await useCase.execute({ email: "test@example.com", password: "password123" });

    expect(result.success).toBe(true);
    if (result.success) expect(result.user).toEqual(mockUser);
  });
});`,
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
