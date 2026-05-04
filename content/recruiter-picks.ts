/**
 * 採用担当・技術リードの方が短時間で強みを掴めるよう、ペルソナ別に Qiita 記事を束ねたものです。
 * URL は Qiita 側に合わせて維持してください（記事を削除する場合のみ差し替え）。
 */
export type RecruiterPick = {
  id: string;
  headline: string;
  subline: string;
  bullets: string[];
  articles: { title: string; url: string; hook: string }[];
};

export const recruiterArticlePicks: RecruiterPick[] = [
  {
    id: "design-modern-web",
    headline: "設計レビューを仕組みで運用したい開発組織の方へ",
    subline:
      "型・レイヤー・例外の責務を明確にし、属人性を抑えながら開発速度と保守性を両立させたい組織向けにまとめています。",
    bullets: [
      "Next.js のレイヤ境界を ESLint で物理的に縛る試みまで踏み込んでいます",
      "層別の例外処理・ログ方針を、自身の判断ごと言語化しています",
      "クリーンアーキテクチャと Supabase の組み合わせで生じるトレードオフも書いています",
    ],
    articles: [
      {
        title: "Next.jsの層構造で、依存の向きを ESLint で制御してみた",
        url: "https://qiita.com/TOMON_9912/items/2f1b340401f2c9665561",
        hook: "設計の規律をレビュー前段で守る、私なりの仕組み化の記録です。",
      },
      {
        title:
          "【TS & Next.js】例外処理の基本から、レイヤー別の設計・ログ出力まで整理してみた",
        url: "https://qiita.com/TOMON_9912/items/6adef16ccea5bde566c8",
        hook: "横断的な関心事をどの層で抱えるか、自分なりに線引きした記録です。",
      },
      {
        title: "Next.js個人開発でクリーンアーキテクチャの考え方を取り入れてみた",
        url: "https://qiita.com/TOMON_9912/items/528b572a691814ac6c86",
        hook: "業務外でも設計に踏み込み続けている姿勢の裏付けとしてご参考ください。",
      },
      {
        title:
          "Next.js × Supabase × クリーンアーキテクチャでレシピ登録の整合性をどう担保するか悩んだ話",
        url: "https://qiita.com/TOMON_9912/items/00d1d23dcaa66f5537b2",
        hook: "BaaS とドメイン境界の間で、自分がどこまで責任を持つかを書いています。",
      },
    ],
  },
  {
    id: "domain-product",
    headline: "業務理解とドメイン整理を重視するプロダクト組織の方へ",
    subline:
      "ユビキタス言語や業務分解、実装パターンの選定まで、ドメインを足場に開発を進めたい組織向けにまとめています。",
    bullets: [
      "業務をルールと言葉に落とし込むときの考え方を整理しています",
      "「とりあえず動く」と「運用できる」の差を、自身の言葉で言語化しています",
      "DDD は概念だけでなく、実装パターンとの接続まで踏み込んでいます",
    ],
    articles: [
      {
        title: "【DDD】ユビキタス言語で業務整理を円滑にしよう！",
        url: "https://qiita.com/TOMON_9912/items/a1b402e2240b34e18b9b",
        hook: "コミュニケーション設計に近い土台として、自分が捉えている内容です。",
      },
      {
        title:
          "【DDD】トランザクションスクリプトとアクティブレコードについての理解を深めよう",
        url: "https://qiita.com/TOMON_9912/items/ec6a61f75a6a9e13370f",
        hook: "パターンを「正解単品」ではなく道具として扱う、判断の記録です。",
      },
      {
        title: "【DDD】基本である事業活動を学んで業務整理の基本を学ぶ！",
        url: "https://qiita.com/TOMON_9912/items/158d2aa9589f72a4e471",
        hook: "要件の解像度を上げる起点として、私が最初に手を付ける場所です。",
      },
    ],
  },
  {
    id: "team-leadership",
    headline: "若手育成とプロセス整備を任せたい EM / TL の方へ",
    subline:
      "若手の思考停止やスコープの蔓延を、ルール・言葉・教育で予防していきたいチーム向けにまとめています。",
    bullets: [
      "「やらないこと」を先に決める文化と相性が良いと考えています",
      "新人教育やコミュニケーションの型を、自身の経験として言語化しています",
      "テックリードやサブリーダーとして、ルール整備と人を進める動きを担ってきました",
    ],
    articles: [
      {
        title: "新卒が思考停止に陥るのはなぜか？チームで防ぐための考え方",
        url: "https://qiita.com/TOMON_9912/items/b52ac1cad79df5ad624c",
        hook: "現場で感じた違和感を、自分のなかで整理し直した文章です。",
      },
      {
        title: "チームの境界線を守る「やらないことリスト」の重要性",
        url: "https://qiita.com/TOMON_9912/items/e5ed4fdaf18d17b70eff",
        hook: "スコープと期待値のズレを未然に防ぐ、私の視点を書いています。",
      },
      {
        title: "「なぜ伝わらない？」エンジニアの思考タイプ別に考える新人教育",
        url: "https://qiita.com/TOMON_9912/items/9c81341e5403f146a66d",
        hook: "相手の解像度から説明順を組み立て直す際のメモです。",
      },
    ],
  },
  {
    id: "pragmatic-senior",
    headline: "コード以外の業務まで含めて任せたい方へ",
    subline:
      "顧客折衝、要件の構造化、SQL の落とし穴、BaaS の限界まで、現場の温度感ごと書き残しているテーマです。",
    bullets: [
      "顧客接点のある場面でも、課題を構造化して持ち帰ることに慣れています",
      "SQL や BaaS の地味だが重要な論点を、避けずに書いています",
      "うまくいかなかった理由も、同じ密度で書く方針で揃えています",
    ],
    articles: [
      {
        title: "SESエンジニア歴4年目が、現場で意識するようになったコード以外の仕事",
        url: "https://qiita.com/TOMON_9912/items/7b7ebd0d4d78f1a8a4af",
        hook: "プロとして立ち続けるために、私が変えてきた動き方の記録です。",
      },
      {
        title: "SQLの NOT IN はなぜ NULL があると動かなくなるのか",
        url: "https://qiita.com/TOMON_9912/items/f7d82e5b93a74066f7d0",
        hook: "地味だが効く論点を、自分の言葉で噛み砕いた覚え書きです。",
      },
      {
        title: "Supabaseの意外な罠？ユーザー関連処理をBaaSに寄せると苦労したこと",
        url: "https://qiita.com/TOMON_9912/items/a2d5253daf86237ca988",
        hook: "見栄ではなく、トレードオフごと自分の選択を残しました。",
      },
    ],
  },
];
