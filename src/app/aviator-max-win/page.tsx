import type { Metadata } from "next";
import Link from "next/link";
import {
  constructMetadata,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Aviator Max Win: Highest Multipliers, Odds & Limits (2026)",
  description:
    "How high can Aviator go? The real max multiplier, the ~0.97% chance of hitting 100x, max bet limits per casino, and why a big max win does not change the 3% house edge.",
  path: "/aviator-max-win",
});

const maxWinFaqs = [
  {
    question: "What is the max win on Aviator?",
    answer:
      "The maximum multiplier on Aviator is typically capped at around 100x to 200x or higher depending on the casino, with some operators allowing much larger multipliers in theory. But the practical limit is your bet size and the casino's max payout. A $1 bet at 100x returns $100. The cap exists because the game has a 97% RTP and a 3% house edge built into the math, so the operator can afford very high multipliers since they are so rare.",
  },
  {
    question: "Has anyone hit 100x on Aviator?",
    answer:
      "Yes, 100x does happen, but it is rare. The probability of a single round reaching 100x is about 0.97%, meaning roughly 1 round in 103. For every round that reaches 100x, about 99 rounds crash at a lower multiplier. You will see 100x wins highlighted in the live feed precisely because they are uncommon and exciting. They are not a sign that big wins are frequent.",
  },
  {
    question: "What is the highest Aviator multiplier?",
    answer:
      "In theory the multiplier can climb very high, but casinos enforce a cap that usually sits around 100x to 200x or more, depending on the operator. Once the cap is reached, the round auto-cashes out if you have not already. The cap protects the casino's payout exposure. The exact figure varies by casino, so check the game's info or help section where you play.",
  },
  {
    question: "What is the max bet on Aviator?",
    answer:
      "The maximum bet varies by casino and by your account status or region, and it is usually paired with a maximum payout cap. Typical limits range from a few hundred to several thousand per round at larger casinos. The minimum bet is usually around $0.10. Always check the table limits and max payout in the game's info panel at your chosen casino before sizing a bet.",
  },
];

export default function AviatorMaxWinPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Aviator Max Win", url: "/aviator-max-win" },
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-16 sm:px-6 lg:pb-20 lg:pt-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">Aviator Max Win</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Updated July 2026
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            How high can Aviator actually go?
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Aviator can produce huge multipliers, but the math behind them is
            cold. Here is the real maximum win, the odds of hitting 100x, the bet
            and payout limits that cap everything, and why a big headline payout
            never beats the house edge.
          </p>
        </div>
      </section>

      {/* The real max multiplier */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              The maximum multiplier, explained
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              On most casinos, the maximum multiplier on Aviator is capped at
              roughly 100x to 200x or higher, depending on the operator. Some
              casinos allow higher theoretical caps. When the cap is reached, the
              round ends and auto-cashes out any player still in the game. The
              cap is not a feature you can predict or aim for; it is a backstop
              the operator uses to manage payout exposure.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Why can casinos afford such high multipliers? Because they are so
              unlikely. Aviator runs at a 97% return-to-player rate, which means
              a 3% house edge baked into every round. The math guarantees the
              operator keeps about 3% of all wagers over the long run, no matter
              how spectacular the occasional big win looks.
            </p>
          </div>

          {/* Probability stat cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="text-3xl font-bold text-primary">~49%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                of rounds reach 2x
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="text-3xl font-bold text-primary">~9.7%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                of rounds reach 10x
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="text-3xl font-bold text-primary">~0.97%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                of rounds reach 100x
              </p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Probabilities are approximate, derived from the 97% RTP and the
            provably fair crash distribution. They describe the long-run average,
            not any single session.
          </p>
        </div>
      </section>

      {/* The reality of big wins */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Big wins are real, and still rare
            </h2>
            <p className="mt-3 text-muted-foreground">
              You will see screenshots of huge Aviator multipliers, and they are
              genuine. The catch is how often they happen, and how many rounds
              crash low in between.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
              <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                The headline
              </span>
              <h3 className="mt-4 text-xl font-bold">A 100x win pays out</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                When a round reaches 100x and you cashed out in time, the payout
                is real. A $1 stake returns $100. These moments are exactly what
                the live feed highlights, and they are exciting. Nobody is
                arguing big wins do not happen.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8">
              <span className="inline-flex items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-400">
                The reality
              </span>
              <h3 className="mt-4 text-xl font-bold">~99 rounds crashed lower</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Because only about 0.97% of rounds reach 100x, roughly 1 in 103
                rounds gets there. For every 100x winner you celebrate, about 99
                rounds in that stretch crashed at a lower multiplier, many of
                them early. The rare win is surrounded by far more rounds where
                players lost their stake.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            This is why &quot;chasing the max win&quot; is a losing approach. You
            cannot know which round will be the rare one, and the rounds in
            between steadily drain your balance at the 3% house edge rate.
          </p>
        </div>
      </section>

      {/* The math: expected value */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              The math: why the max win keeps the edge
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A high multiplier feels like an opportunity, but the expected value
              of every Aviator bet is negative. Here is the arithmetic in plain
              terms.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="text-sm font-semibold text-foreground">
                  Example: $1 bet aiming for 100x
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The payout if you hit 100x is $100. But the chance of a round
                  reaching 100x is about 0.97%. Multiply the $100 payout by that
                  probability and the expected return on this outcome is under
                  $1. Across all possible crash points, the game is tuned so the
                  average return is 97% of your stake, meaning you expect to lose
                  about 3 cents per dollar wagered over the long run.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="text-sm font-semibold text-foreground">
                  No bet size changes this
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Bet $1 or $100 and the percentage math is identical. A $100
                  stake at 100x pays $10,000, but your expected loss is still 3%
                  of what you wager. Bigger bets scale the drama, not your odds.
                  The house edge applies to every dollar, every round, regardless
                  of the multiplier you hope to reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bet and payout limits */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Bet limits and max payouts per casino
            </h2>
            <p className="mt-3 text-muted-foreground">
              Your real maximum win is bounded by two things: how much you can
              bet per round, and the maximum the casino will pay out on a single
              round. Both vary by operator.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold">Minimum bet</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The minimum bet on Aviator is usually around $0.10, with some
                casinos going as low as $0.10 or $1. This keeps the game
                accessible for low-stakes players and is useful for testing
                timing without risking much.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold">Maximum bet and payout</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Maximum bets range from a few hundred to several thousand per
                round at larger casinos, and are usually tied to a maximum
                payout cap. The cap, not the multiplier, is what truly limits
                your biggest possible win. Always check the table limits and max
                payout in the game&apos;s info panel before sizing a bet.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">
                Compare casinos carefully.
              </strong>{" "}
              Payout speed, max bet, and max win differ between operators. See
              our{" "}
              <Link
                href="/casinos"
                className="font-semibold text-primary hover:underline"
              >
                casino reviews
              </Link>{" "}
              for verified limits, licenses, and payout times.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Max win questions, answered honestly
          </h2>
          <p className="mt-3 text-muted-foreground">
            Multipliers, odds, and bet limits, with the math attached. No hype
            about guaranteed jackpots.
          </p>

          <div className="mt-10 space-y-4">
            {maxWinFaqs.map((faq) => (
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Understand the odds before you bet
              </h2>
              <p className="mt-2 text-muted-foreground">
                A clear grasp of the 97% RTP and max win limits is your best
                defense against chasing multipliers. Read the strategy guide or
                practice for free first.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/strategy"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Read Strategy Guide
              </Link>
              <Link
                href="/how-to-play/demo"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
              >
                Play Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(maxWinFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
