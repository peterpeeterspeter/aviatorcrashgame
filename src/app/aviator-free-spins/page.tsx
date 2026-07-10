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
  title: "Aviator Free Spins in 2026 - How Free Plays Actually Work",
  description:
    "Aviator is not a slot, so free spins work differently. Learn how welcome free spins build bankroll, which casinos offer no-deposit spins, and why cashback is the real Aviator equivalent.",
  path: "/aviator-free-spins",
});

const freeSpinsFaqs = [
  {
    question: "Can you get free spins on Aviator?",
    answer:
      "Not in the traditional sense. Free spins are a slot mechanic: the casino funds a spin of the reels at no cost to you. Aviator is a crash game with no reels and no spins, so free spins do not apply. What you can get are free spins on slots through welcome bonuses, which you can use to build a balance and then play Aviator with the proceeds once wagering is cleared.",
  },
  {
    question: "How do I get free plays on Aviator?",
    answer:
      "The closest thing to a free Aviator play is the demo mode available on this site and at most casinos, which uses virtual credits at no cost. For real-money play, the most practical free-play equivalent is cashback. BetFury pays BFG tokens on every Aviator bet, and staking them earns daily dividends from the platform profit pool. This effectively returns a slice of your play over time.",
  },
  {
    question: "What casinos offer Aviator free spins?",
    answer:
      "No casino offers free spins that apply directly to Aviator, because the mechanic does not exist for crash games. Several casinos offer generous free-spin bundles as part of their welcome bonus: Cybet offers 200 spins, BetFury offers 200 across three deposits, and BitStarz offers 180. TrustDice offers 25 no-deposit spins. These are all for slots, but they can fund your Aviator play indirectly.",
  },
  {
    question: "Are free spins worth it for Aviator players?",
    answer:
      "Yes, if you use them strategically. Clear the free spins on slots, meet the wagering requirements, and convert the winnings to cash. Then play Aviator with that balance. The main caveat is the wagering contribution: at most casinos, crash games count only 5% toward wagering, so clear the bonus on slots before touching Aviator. Cashback systems like BetFury's BFG tokens are a simpler, ongoing value for regular Aviator players.",
  },
];

export default function AviatorFreeSpinsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Aviator Free Spins", url: "/aviator-free-spins" },
  ]);

  // Casinos with the most free spins for building bankroll
  const spinsCasinos = [...casinos]
    .filter((c) => /\d+\s*free\s*spins/i.test(c.bonus))
    .sort((a, b) => {
      const aMatch = a.bonus.match(/(\d+)\s*free\s*spins/i);
      const bMatch = b.bonus.match(/(\d+)\s*free\s*spins/i);
      const aNum = aMatch ? Number(aMatch[1]) : 0;
      const bNum = bMatch ? Number(bMatch[1]) : 0;
      return bNum - aNum;
    })
    .slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-16 sm:px-6 lg:pb-20 lg:pt-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">Aviator Free Spins</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Updated July 2026
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Aviator Free Spins
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Here is the thing most sites will not tell you: Aviator does not
            have free spins. It is a crash game, not a slot, so the entire
            concept of a free spin does not apply. What does exist are
            welcome-bonus free spins on slots, no-deposit spins, and
            cashback systems that function as the Aviator equivalent of free
            play. This page explains all three honestly, so you know
            exactly what you are getting.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">0</span> free
              spins on Aviator itself
            </span>
            <span>
              <span className="font-semibold text-foreground">200+</span>{" "}
              spins available via welcome bonuses
            </span>
            <span>
              <span className="font-semibold text-foreground">100%</span>{" "}
              honest framing
            </span>
          </div>
        </div>
      </section>

      {/* Why free spins don't apply */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Why Aviator does not have free spins
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                A free spin is a slot mechanic. The casino covers the cost
                of one spin of the reels, and any winnings go to you. It
                works because a slot spin has a fixed cost and a fixed,
                server-side outcome. Aviator is completely different. It is
                a real-time crash game where you place a bet, watch a
                multiplier rise, and cash out before it crashes.
              </p>
              <p>
                There are no reels and nothing to spin. A casino cannot give
                you a free Aviator round in the same way it gives a free
                slot spin, because the bet size and cashout timing are
                player-controlled. That is why every Aviator free spins
                offer you see is actually free spins on slots, bundled with
                a deposit or welcome bonus. They are useful, just not for
                the reason the headline implies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casinos with best free spin offers */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Casinos with the best free spin offers
            </h2>
            <p className="mt-3 text-muted-foreground">
              These spins are for slots, not Aviator. But you can use them
              to build a bankroll and then play Aviator once the bonus is
              cleared. Sorted by total spins offered.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spinsCasinos.map((casino) => {
              const match = casino.bonus.match(/(\d+)\s*free\s*spins/i);
              const spinCount = match ? match[1] : "";
              return (
                <div
                  key={casino.slug}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={`/casinos/${casino.slug}`}
                      className="font-bold hover:text-primary hover:underline"
                    >
                      {casino.name}
                    </Link>
                    {spinCount ? (
                      <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        {spinCount} spins
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {casino.tagline}
                  </p>
                  <div className="mt-4 rounded-lg bg-secondary px-4 py-3">
                    <p className="text-xs text-muted-foreground">
                      Welcome bonus
                    </p>
                    <p className="text-sm font-semibold">{casino.bonus}</p>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    {casino.wageringContribution}
                  </p>
                  <Link
                    href={affiliateHref(casino.affiliateSlug)}
                    className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Claim Free Spins
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Aviator equivalent of free spins */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The real Aviator equivalent of free spins
            </h2>
            <p className="mt-3 text-muted-foreground">
              Since spins do not apply, the closest thing to free Aviator
              play is cashback. Two casinos build it directly into the
              product.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="text-xl font-bold">BetFury: BFG token cashback</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every Aviator bet you place earns BFG tokens at a rate of
                0.03% of your wager. Stake those tokens and you receive a
                share of the platform&apos;s daily profit pool. This is a
                continuous cashback loop that effectively reduces the house
                edge over time, making it the best ongoing value for regular
                Aviator players.
              </p>
              <Link
                href={affiliateHref("betfury")}
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Visit BetFury
              </Link>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="text-xl font-bold">TrustDice: TXT token rewards</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                TrustDice runs a similar system with TXT tokens. Every bet,
                including Aviator rounds, earns tokens that can be staked
                for daily dividends from the casino&apos;s profit pool. It
                also offers 25 no-deposit free spins on signup, so you can
                test the platform with zero risk before committing funds.
              </p>
              <Link
                href={affiliateHref("trustdice")}
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Visit TrustDice
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-background/60 p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Why cashback beats free spins for Aviator:
              </span>{" "}
              free spins are a one-time welcome perk that only works on
              slots. Cashback through token systems applies to every single
              Aviator round you ever play, with no wagering requirement and
              no game restriction. For anyone who plays Aviator regularly,
              it is far more valuable than any spin bundle.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Free spins questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            How free plays actually work for Aviator, and what to look for
            instead.
          </p>

          <div className="mt-10 space-y-4">
            {freeSpinsFaqs.map((faq) => (
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
                Ready to find the right bonus?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Compare welcome bonuses, free spin bundles, and cashback
                offers side by side to find what fits how you play.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/bonuses"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Compare Bonuses
              </Link>
              <Link
                href="/casinos"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
              >
                Browse Casinos
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            18+ | Gamble responsibly | Bonus terms change. Always confirm
            the current offer on the casino site.
          </p>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(freeSpinsFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
