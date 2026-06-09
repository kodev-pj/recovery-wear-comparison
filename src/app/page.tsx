import {
  Activity,
  ArrowDown,
  BedDouble,
  Check,
  ExternalLink,
  JapaneseYen,
  Scale,
  ShieldCheck,
  Shirt,
  Waves,
} from "lucide-react";
import { brands } from "@/data/brands";

export default function Home() {
  const themes = {
    tential: {
      border: "border-[#0a84ff]",
      text: "text-[#0066cc]",
      dot: "bg-[#0a84ff]",
    },
    venex: {
      border: "border-[#ff9f0a]",
      text: "text-[#a65f00]",
      dot: "bg-[#ff9f0a]",
    },
    red: {
      border: "border-[#ff453a]",
      text: "text-[#c9342c]",
      dot: "bg-[#ff453a]",
    },
  } as const;

  const heroStats = [
    { icon: ShieldCheck, label: "3社とも", value: "一般医療機器" },
    { icon: JapaneseYen, label: "長袖上下", value: "15,400円〜" },
    { icon: Scale, label: "同条件で", value: "価格を比較" },
  ];

  const guideItems = [
    {
      number: "01",
      icon: BedDouble,
      title: "着る時間",
      body: "睡眠中心なら寝返りやムレに配慮したモデル。日中も着たいなら、インナーや外出しやすいデザインを確認。",
    },
    {
      number: "02",
      icon: Shirt,
      title: "生地とサイズ",
      body: "同じブランドでもドライ、スウェット、薄手など着心地は別物。身長だけでなく胸囲・ウエストも確認。",
    },
    {
      number: "03",
      icon: JapaneseYen,
      title: "予算と続け方",
      body: "上下セットの価格だけでなく、洗い替えや季節違いも考慮。まず単品やインナーから試す方法も。",
    },
  ];

  return (
    <main className="liquid-page overflow-hidden">
      <header className="glass-nav fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="ページ上部へ">
            <span className="brand-mark grid size-8 place-items-center text-[#5856d6]">
              <Waves aria-hidden="true" size={18} strokeWidth={2.1} />
            </span>
            <span className="text-sm font-semibold text-[#1d1d1f]">
              リカバリーウェア比較
            </span>
          </a>
          <nav
            aria-label="メインナビゲーション"
            className="hidden items-center gap-7 text-sm font-medium text-[#6e6e73] sm:flex"
          >
            <a href="#brands">
              3社の特徴
            </a>
            <a href="#comparison">
              比較表
            </a>
            <a href="#guide">
              選び方
            </a>
          </nav>
        </div>
      </header>

      <section className="hero-photo relative min-h-[600px]">
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-5 pb-10 pt-24 lg:px-8">
          <div className="max-w-[720px]">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold text-[#5145b8]">
              <span className="h-px w-8 bg-[#5856d6]" />
              2026年6月9日 更新
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] text-[#1d1d1f] sm:text-6xl">
              <span className="block whitespace-nowrap">
                リカバリーウェア、
              </span>
              <span className="block">
                <span className="whitespace-nowrap">3社をシンプル</span>
                <span className="block whitespace-nowrap sm:inline">比較。</span>
              </span>
            </h1>
            <p className="mt-7 max-w-[540px] text-base leading-8 text-[#515154] sm:text-lg">
              TENTIAL・VENEX・ReDの違いを、価格、独自素材、サイズ、向いている人で整理しました。
              はじめて選ぶ人にも、買い替えを考える人にも。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#comparison"
                className="glass-button glass-button-strong inline-flex h-12 items-center justify-center gap-2 px-6 text-sm font-bold"
              >
                比較表を見る
                <ArrowDown aria-hidden="true" size={17} />
              </a>
              <a
                href="#guide"
                className="glass-button inline-flex h-12 items-center justify-center gap-2 px-6 text-sm font-bold text-[#1d1d1f]"
              >
                自分に合う選び方
                <ArrowDown aria-hidden="true" size={17} />
              </a>
            </div>
            <div className="mt-8 grid max-w-[650px] grid-cols-3 gap-2 sm:gap-3">
              {heroStats.map((stat) => {
                const StatIcon = stat.icon;

                return (
                  <div
                    className="hero-stat flex min-h-20 flex-col items-start justify-center gap-2 px-3 py-3 sm:flex-row sm:items-center sm:gap-3 sm:px-4"
                    key={stat.value}
                  >
                    <StatIcon
                      aria-hidden="true"
                      className="shrink-0 text-[#5856d6]"
                      size={21}
                    />
                    <div>
                      <p className="text-xs text-[#6e6e73]">{stat.label}</p>
                      <p className="mt-0.5 text-sm font-bold text-[#1d1d1f]">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="brands"
        className="section-clear px-5 py-16 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold text-[#5145b8]">BRAND SNAPSHOT</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#1d1d1f] sm:text-4xl">
                まずは、3社の立ち位置から
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#6e6e73]">
              ここでは各ブランドの役割を整理します。価格・サイズなどの具体的な違いは下の比較表で確認できます。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {brands.map((brand) => {
              const theme = themes[brand.id];

              return (
                <article
                  className={`glass-card flex min-h-[400px] flex-col border-t-4 ${theme.border} p-6 sm:p-7`}
                  key={brand.id}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-xs font-bold ${theme.text}`}>
                        {brand.product}
                      </p>
                      <h3 className="mt-2 text-3xl font-semibold text-[#1d1d1f]">
                        {brand.brand}
                      </h3>
                    </div>
                    <span
                      aria-hidden="true"
                      className={`mt-1 size-3 ${theme.dot}`}
                    />
                  </div>

                  <p className="mt-7 text-2xl font-semibold leading-9 text-[#1d1d1f]">
                    {brand.position}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#6e6e73]">
                    {brand.positionDetail}
                  </p>

                  <div className="mt-7 border-y border-white/70 py-5">
                    <p className="text-xs font-bold text-[#86868b]">
                      比較表で見るポイント
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-[#1d1d1f]">
                      {brand.compareFocus}
                    </p>
                  </div>

                  <div
                    className="mt-auto flex min-h-32 flex-col justify-center border-l-2 border-white/80 px-4 py-3"
                  >
                    <p className={`text-xs font-bold ${theme.text}`}>
                      比較前に考える問い
                    </p>
                    <p className="mt-2 text-sm font-medium leading-7 text-[#515154]">
                      {brand.question}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="comparison"
        className="section-ambient px-5 py-20 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold text-[#5145b8]">
                QUICK COMPARISON
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1d1d1f] sm:text-4xl">
                違いをひと目で比較
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#6e6e73]">
              価格・サイズ・技術などの根拠を確認するための表です。各社の代表的な長袖上下セットを基準にしています。
            </p>
          </div>

          <div className="glass-surface comparison-scroll mt-10 overflow-x-auto">
            <table className="comparison-table">
              <caption className="sr-only">
                TENTIAL、VENEX、ReDのリカバリーウェア比較表
              </caption>
              <thead>
                <tr>
                  <th scope="col">比較項目</th>
                  <th scope="col">TENTIAL</th>
                  <th scope="col">VENEX</th>
                  <th scope="col">ReD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">代表商品</th>
                  <td>BAKUNE Dry</td>
                  <td>STANDARD DRY+</td>
                  <td>ぐっすりパジャマ</td>
                </tr>
                <tr>
                  <th scope="row">長袖上下価格</th>
                  <td>
                    <strong className="text-xl text-[#0066cc]">
                      24,860円
                    </strong>
                  </td>
                  <td>
                    <strong className="text-xl text-[#a65f00]">
                      36,300円
                    </strong>
                  </td>
                  <td>
                    <strong className="text-xl text-[#c9342c]">
                      15,400円
                    </strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row">医療機器区分</th>
                  <td>一般医療機器</td>
                  <td>一般医療機器</td>
                  <td>一般医療機器</td>
                </tr>
                <tr>
                  <th scope="row">独自技術</th>
                  <td>SELFLAME</td>
                  <td>PHT</td>
                  <td>VITALTECH</td>
                </tr>
                <tr>
                  <th scope="row">代表サイズ</th>
                  <td>XS〜5XL</td>
                  <td>M〜XXL</td>
                  <td>SS〜5L</td>
                </tr>
                <tr>
                  <th scope="row">目立つ特徴</th>
                  <td>寝返りを支えるパターン設計</td>
                  <td>日本製・無料修理サービス</td>
                  <td>約1mmの薄い生地・全9色</td>
                </tr>
                <tr>
                  <th scope="row">こんな人に</th>
                  <td>睡眠時の着心地を重視</td>
                  <td>品質と長期使用を重視</td>
                  <td>価格と始めやすさを重視</td>
                </tr>
                <tr>
                  <th scope="row">公式商品</th>
                  {brands.map((brand) => (
                    <td key={brand.id}>
                      <a
                        href={brand.productUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#5145b8]"
                      >
                        商品ページ
                        <ExternalLink aria-hidden="true" size={14} />
                      </a>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">店舗一覧</th>
                  {brands.map((brand) => (
                    <td key={brand.id}>
                      <a
                        href={brand.storeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#5145b8]"
                      >
                        店舗一覧
                        <ExternalLink aria-hidden="true" size={14} />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-[#6e6e73]">
            ※
            表示価格は2026年6月9日時点の各社公式オンラインストア掲載価格（税込）。キャンペーン、在庫、仕様変更は各公式サイトでご確認ください。
          </p>
        </div>
      </section>

      <section
        id="guide"
        className="section-clear px-5 py-20 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-[#5145b8]">HOW TO CHOOSE</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1d1d1f] sm:text-4xl">
              迷ったら、3つの基準で選ぶ
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {guideItems.map((item) => {
              const GuideIcon = item.icon;

              return (
                <article
                  className="glass-card px-6 py-8 md:px-8 md:py-10"
                  key={item.number}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#86868b]">
                      {item.number}
                    </span>
                    <GuideIcon
                      aria-hidden="true"
                      className="text-[#5856d6]"
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#6e6e73]">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="liquid-dark px-5 py-16 text-white sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <Activity aria-hidden="true" className="text-[#a7a5ff]" size={30} />
            <h2 className="mt-6 text-3xl font-semibold">共通するポイント</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              3社の代表商品はいずれも「家庭用遠赤外線血行促進用衣」として届け出された一般医療機器です。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "血行促進",
              "疲労回復",
              "筋肉のハリ・コリの緩和",
              "筋肉の疲労軽減",
            ].map((effect) => (
              <div
                className="glass-dark-item flex min-h-20 items-center gap-3 px-5 py-4 text-sm font-medium"
                key={effect}
              >
                <Check
                  aria-hidden="true"
                  className="shrink-0 text-[#a7a5ff]"
                  size={17}
                  strokeWidth={2.5}
                />
                {effect}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sources" className="section-ambient px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <div>
              <ShieldCheck
                aria-hidden="true"
                className="text-[#5856d6]"
                size={26}
              />
              <h2 className="mt-5 text-2xl font-semibold text-[#1d1d1f]">
                情報について
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6e6e73]">
                本サイトはAI支援を用いて制作した非公式の比較サイトです。現在、広告・アフィリエイトリンクは掲載していません。掲載内容は各社の公式商品ページと技術紹介ページをもとに確認・編集しています。購入前には、最新価格・在庫・注意事項を公式サイトでご確認ください。
              </p>
            </div>
            <div className="glass-surface divide-y divide-white/60 overflow-hidden">
              {brands.map((brand) => (
                <div
                  className="grid gap-3 px-5 py-5 sm:grid-cols-[120px_1fr_auto] sm:items-center"
                  key={brand.id}
                >
                  <p className="text-sm font-bold text-[#1d1d1f]">
                    {brand.brand}
                  </p>
                  <p className="text-xs text-[#6e6e73]">
                    {brand.technology} / {brand.product}
                  </p>
                  <a
                    href={brand.aboutUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#5145b8]"
                  >
                    公式情報
                    <ExternalLink aria-hidden="true" size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 border-t border-white/70 pt-6 text-xs leading-6 text-[#86868b]">
            本サイトは各ブランドの公式サイトではありません。効果の感じ方には個人差があります。使用中に異常を感じた場合は使用を中止し、必要に応じて医療専門家へご相談することをおすすめします。
          </div>
        </div>
      </section>

      <footer className="border-t border-white/60 bg-white/35 px-5 py-7 backdrop-blur-xl lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-[#86868b] sm:flex-row sm:items-center sm:justify-between">
          <p>リカバリーウェア比較</p>
          <p>掲載情報更新日：2026年6月9日</p>
        </div>
      </footer>
    </main>
  );
}
