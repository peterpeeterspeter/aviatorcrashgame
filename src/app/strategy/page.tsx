import type { Metadata } from "next";
import Link from "next/link";
import { guides, type GuideSummary } from "@/content/guides";
import {
  constructMetadata,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Aviator Strategy & Tips - What Actually Works",
  description:
    "Honest Aviator strategy guides. Bankroll management, multiplier math, auto-cashout discipline, and pattern analysis. No predictor apps, no fake hacks, no guaranteed wins.",
  path: "/strategy",
});

const categoryBadgeClass =
  "bg-chart-3/10 text-chart-3 border border-chart-3/20";

const principles = [
  {
    number: "01",
    title: "The house always has the edge",
    body: "Aviator runs at 97% RTP, which means the house keeps about 3 cents of every dollar wagered over the long run. No strategy reverses this. The realistic goal is to extend play and ride variance, not to beat the math.",
  },
  {
    number: "02",
    title: "Bankroll management is the real skill",
    body: "How much you bet per round, when you stop, and how you handle a losing streak matter more than any cashout timing trick. The 5% rule, session limits, and a hard stop-loss are what keep you in the game.",
  },
  {
    number: "03",
    title: "Auto-cashout beats reaction time",
    body: "Human reaction time is around 250 milliseconds, which is plenty of time for the multiplier to crash before you click. Auto-cashout at a fixed target removes emotion and latency from the decision.",
  },
  {
    number: "04",
    title: "Patterns do not exist",
    body: "Each round is independent and determined by a provably fair RNG. After analyzing thousands of rounds we found no exploitable sequence. Anyone selling a pattern-based system is selling fiction.",
  },
];

export default function StrategyHubPage() {
  const strategyGuides = guides.filter(
    (g): g is GuideSummary & { category: "strategy" } =>
      g.category === "strategy",
  );

  const [featured, ...rest] = strategyGuides;

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Strategy", url: "/strategy" },
  ]);

  return (
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:pb-20 lg:pt-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">Strategy</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-chart-3/20 bg-chart-3/5 px-4 py-1.5 text-sm font-medium text-chart-3">
            {strategyGuides.length} strategy guides
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Aviator Strategy &amp; Tips
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Strategy content that respects your intelligence. We do not sell
            predictor apps, we do not promise guaranteed wins, and we do not
            pretend the math works in your favor long-term. What we do give you
            is a realistic framework for managing risk, extending your
            bankroll, and making better cashout decisions.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">97%</span> RTP
              (3% house edge)
            </span>
            <span>
              <span className="font-semibold text-foreground">~49%</span> chance
              to hit 2x
            </span>
            <span>
              <span className="font-semibold text-foreground">0</span> proven
              predictor apps
            </span>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured ? (
        <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-chart-3">
              Featured Strategy
            </p>
            <Link
              href={`/guides/${featured.slug}`}
              className="group mt-4 block overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-chart-3/15 via-card to-card p-8 transition-colors hover:border-chart-3/40 md:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${categoryBadgeClass}`}
                  >
                    Featured
                  </span>
                  <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-chart-3">
                    Read the full guide
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      -&gt;
                    </span>
                  </span>
                </div>

                <div className="rounded-xl border border-border bg-background/60 p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Quick Facts
                  </p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Reading time</dt>
                      <dd className="font-medium">{featured.readingTime}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="font-medium">Strategy</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Focus</dt>
                      <dd className="font-medium">Risk control</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      {/* Strategy principles */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Four Principles Before You Bet
            </h2>
            <p className="mt-3 text-muted-foreground">
              Read these before any of the strategy guides. If a tip
              contradicts one of these principles, the tip is wrong.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.number}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-8"
              >
                <span className="font-mono text-sm font-semibold text-chart-3/70">
                  {p.number}
                </span>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All strategy guides */}
      {rest.length > 0 ? (
        <section className="border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                All Strategy Guides
              </h2>
              <p className="mt-3 text-muted-foreground">
                Deep dives on bankroll, multipliers, patterns, and how Aviator
                compares to other crash games.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-chart-3/40"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${categoryBadgeClass}`}
                      >
                        Strategy
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {guide.readingTime}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-tight">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {guide.excerpt}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-chart-3">
                    Read guide
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      -&gt;
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Never played Aviator before?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Start with the beginner walkthrough. It covers the mechanics
                before you touch strategy.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/how-to-play"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                How to Play
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
              >
                All Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
