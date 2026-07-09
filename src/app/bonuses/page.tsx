import type { Metadata } from "next";
import Link from "next/link";
import { casinos } from "@/content/casinos";
import { affiliateHref } from "@/lib/affiliate-links";
import {
  constructMetadata,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Best Aviator Casino Bonuses in 2026 - Claim & Compare",
  description:
    "Compare the best Aviator casino bonuses for 2026: welcome matches, free spins, and no deposit offers. See real wagering contributions for crash games so you know what each bonus is actually worth.",
  path: "/bonuses",
});

const bonusFaqs = [
  {
    question: "Can I use a casino welcome bonus to play Aviator?",
    answer:
      "Usually yes, but the contribution is what matters. Most casinos let you play Aviator with bonus funds, yet only a few count crash games at 100% toward wagering. At casinos where Aviator contributes 5%, a 40x requirement becomes an effective 800x, which is nearly impossible to clear on crash games alone. Cybet is currently the only operator on our list that counts crash games at 100%, making its bonus the most practical choice for Aviator players.",
  },
  {
    question: "Are there any Aviator no deposit bonuses?",
    answer:
      "True no deposit bonuses for Aviator are rare. TrustDice offers 25 free spins with no deposit required on signup, though these spins apply to selected slots rather than Aviator directly. If a site advertises an Aviator no deposit bonus, read the fine print carefully: most are free spins on slots, or bonus credit with steep wagering requirements and low maximum cashout limits. We do not list offers we cannot verify.",
  },
  {
    question: "What does wagering requirement mean?",
    answer:
      "A wagering requirement is the number of times you must bet the bonus amount before you can withdraw it as cash. A 40x requirement on a $100 bonus means wagering $4,000 total. The contribution rate decides how much each game counts toward that total: slots usually count 100%, while crash games often count 5% or nothing. Always check the contribution rate for Aviator specifically before chasing a bonus.",
  },
  {
    question: "Is it better to take a bonus or skip it?",
    answer:
      "It depends on how you play. If you plan to clear the bonus on slots and then play Aviator with your real balance, a bonus adds value. If you want to play Aviator from the first spin, a bonus with a 5% crash game contribution effectively locks your funds behind an 800x playthrough, which is worse than no bonus. For Aviator-first players, we recommend Cybet (100% contribution) or skipping the bonus entirely.",
  },
];

export default function BonusesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Bonuses", url: "/bonuses" },
  ]);

  // Sort by bonus value signal: rank already reflects overall value
  const ranked = [...casinos].sort((a, b) => a.rank - b.rank);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:pb-20 lg:pt-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">Bonuses</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Updated July 2026
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Best Aviator Casino Bonuses
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Welcome matches, free spins, and no deposit offers from casinos that
            carry Aviator. We show the headline bonus and the part most sites
            hide: how much crash games actually contribute toward wagering.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">
                {ranked.length}
              </span>{" "}
              bonuses compared
            </span>
            <span>
              <span className="font-semibold text-foreground">100%</span>{" "}
              wagering transparency
            </span>
            <span>
              <span className="font-semibold text-foreground">No</span> hidden
              exclusions
            </span>
          </div>
        </div>
      </section>

      {/* Bonus comparison cards */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Compare bonuses for Aviator players
            </h2>
            <p className="mt-3 text-muted-foreground">
              The contribution column tells you whether the bonus is realistic
              to clear on Aviator. High contribution means the bonus works as
              advertised; low contribution means clear it on slots first.
            </p>
          </div>

          {/* Desktop table */}
          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-border md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-card text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-5 py-4 font-semibold">#</th>
                  <th className="px-5 py-4 font-semibold">Casino</th>
                  <th className="px-5 py-4 font-semibold">Bonus</th>
                  <th className="px-5 py-4 font-semibold">Min Deposit</th>
                  <th className="px-5 py-4 font-semibold">Aviator Contribution</th>
                  <th className="px-5 py-4 text-right font-semibold">Claim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {ranked.map((casino) => (
                  <tr key={casino.slug} className="bg-card/40 transition-colors hover:bg-card/70">
                    <td className="px-5 py-5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {casino.rank}
                      </span>
                    </td>
                    <td className="px-5 py-5">
                      <Link
                        href={`/casinos/${casino.slug}`}
                        className="font-bold hover:text-primary hover:underline"
                      >
                        {casino.name}
                      </Link>
                      <p className="text-xs text-muted-foreground">
                        {casino.tagline}
                      </p>
                    </td>
                    <td className="px-5 py-5 font-medium">{casino.bonus}</td>
                    <td className="px-5 py-5 text-muted-foreground">
                      {casino.minDeposit}
                    </td>
                    <td className="px-5 py-5">
                      <span
                        className={
                          casino.wageringContribution.includes("100%")
                            ? "inline-flex rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400"
                            : "inline-flex rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400"
                        }
                      >
                        {casino.wageringContribution}
                      </span>
                    </td>
                    <td className="px-5 py-5 text-right">
                      <Link
                        href={affiliateHref(casino.affiliateSlug)}
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.97]"
                      >
                        Get Bonus
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 space-y-4 md:hidden">
            {ranked.map((casino) => (
              <div
                key={casino.slug}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {casino.rank}
                    </span>
                    <div>
                      <Link
                        href={`/casinos/${casino.slug}`}
                        className="font-bold hover:text-primary hover:underline"
                      >
                        {casino.name}
                      </Link>
                      <p className="text-xs text-muted-foreground">
                        {casino.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-secondary px-4 py-3">
                  <p className="text-xs text-muted-foreground">Bonus</p>
                  <p className="text-sm font-semibold">{casino.bonus}</p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground">Min Deposit</span>
                    <p className="font-medium">{casino.minDeposit}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Contribution</span>
                    <p
                      className={
                        casino.wageringContribution.includes("100%")
                          ? "font-medium text-emerald-400"
                          : "font-medium text-amber-400"
                      }
                    >
                      {casino.wageringContribution}
                    </p>
                  </div>
                </div>

                <Link
                  href={affiliateHref(casino.affiliateSlug)}
                  className="mt-4 flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
                >
                  Get Bonus
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Bonus terms change. Always confirm the current offer and wagering
            contribution on the casino&apos;s site before depositing. 18+ | Gamble
            responsibly.
          </p>
        </div>
      </section>

      {/* How bonus value works */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why contribution matters more than bonus size
            </h2>
            <p className="mt-3 text-muted-foreground">
              A big headline bonus is worthless if you can never clear it. The
              contribution rate decides whether the bonus is real value or just
              a deposit trap.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
              <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                100% contribution
              </span>
              <h3 className="mt-4 text-xl font-bold">
                Cybet example: bonus clears as advertised
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A $100 bonus at 40x wagering = $4,000 to bet. With crash games
                at 100%, every Aviator round counts in full. Realistic to clear
                with steady play, and the bonus funds convert to withdrawable
                cash on a believable timeline.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8">
              <span className="inline-flex items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-400">
                5% contribution
              </span>
              <h3 className="mt-4 text-xl font-bold">
                Most casinos: bonus becomes a trap
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The same $100 bonus at 40x with a 5% crash game contribution
                becomes an effective 800x requirement, or $80,000 of Aviator
                betting before withdrawal. Practically impossible. Clear these
                bonuses on slots, then play Aviator with your real balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Bonus questions, answered honestly
          </h2>
          <p className="mt-3 text-muted-foreground">
            Wagering requirements, no deposit offers, and whether to take a
            bonus at all. No sales pitch, just the math.
          </p>

          <div className="mt-10 space-y-4">
            {bonusFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Ready to pick a casino?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Compare full reviews, payout speeds, and game quality side by
                side, then choose where to play.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/casinos"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Browse All Casinos
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
              >
                Read Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(bonusFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
