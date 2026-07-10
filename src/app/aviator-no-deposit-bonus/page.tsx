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
  title: "Aviator No Deposit Bonus in 2026 - What's Real and What's Not",
  description:
    "Aviator no deposit bonuses are rare. Learn which casinos offer real no-deposit value, how wagering requirements work with crash games, and where to find the lowest minimum deposits.",
  path: "/aviator-no-deposit-bonus",
});

const noDepositFaqs = [
  {
    question: "Can I play Aviator with no deposit?",
    answer:
      "Directly, no. Aviator is a real-money game and casinos do not offer free credit specifically for it without a deposit. However, some casinos offer no-deposit free spins on signup. TrustDice, for example, gives 25 free spins with no deposit required. These spins apply to selected slots, not Aviator itself, but winnings from them can build a small balance you could then use on Aviator, subject to wagering requirements.",
  },
  {
    question: "Which casinos offer no deposit Aviator bonuses?",
    answer:
      "No casino currently offers a true Aviator-specific no deposit bonus. The closest thing is TrustDice, which provides 25 no-deposit free spins on signup that you can use on slots. If you want the lowest barrier to playing Aviator with real money, TrustDice and 1xBet both accept a $1 minimum deposit, and BetFury accepts $5. These are not no-deposit, but they are the cheapest way in.",
  },
  {
    question: "Can you win real money with no deposit on Aviator?",
    answer:
      "You cannot play Aviator rounds with no-deposit credit at any casino we list. If you use no-deposit free spins on slots and win, those winnings become bonus funds with wagering requirements attached. Once you meet the requirements, the funds convert to withdrawable cash, at which point you could play Aviator. It is possible but indirect, and the wagering makes it unlikely you will clear a large amount.",
  },
  {
    question: "What are wagering requirements for no deposit bonuses?",
    answer:
      "A wagering requirement is how many times you must bet the bonus before withdrawing it. No-deposit bonuses typically carry the steepest requirements, often 40x to 60x the bonus amount. The critical factor for Aviator players is the contribution rate: at most casinos, crash games count only 5% toward wagering, turning a 40x requirement into an effective 800x. Always check the contribution rate for Aviator before chasing any bonus.",
  },
];

export default function AviatorNoDepositBonusPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Aviator No Deposit Bonus", url: "/aviator-no-deposit-bonus" },
  ]);

  // Lowest minimum deposit casinos for cheapest entry to Aviator
  const lowDeposit = [...casinos]
    .filter((c) => c.minDeposit.replace(/\D/g, "") !== "")
    .sort(
      (a, b) =>
        Number(a.minDeposit.replace(/\D/g, "")) -
        Number(b.minDeposit.replace(/\D/g, "")),
    )
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
            <span className="text-foreground">Aviator No Deposit Bonus</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Updated July 2026
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Aviator No Deposit Bonus
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Let us be honest up front: a true Aviator no deposit bonus does
            not really exist. Aviator is a real-money crash game, and no
            licensed casino hands out free credit you can bet on it without
            depositing. What does exist are no-deposit free spins on slots,
            very low minimum deposits, and bonus structures that can
            indirectly fund your Aviator play. This page explains what is
            real, what is marketing, and where the genuine value is.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">$1</span>{" "}
              lowest min deposit
            </span>
            <span>
              <span className="font-semibold text-foreground">0</span> true
              Aviator no-deposit offers
            </span>
            <span>
              <span className="font-semibold text-foreground">100%</span>{" "}
              transparency
            </span>
          </div>
        </div>
      </section>

      {/* The reality */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Why Aviator no deposit bonuses are basically a myth
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Casinos offer no-deposit bonuses to attract new players, but
                they tightly restrict which games those bonuses can be used
                on. Slots are the usual target because the house edge is
                higher and the outcome is fully random. Aviator, with its
                97% RTP and player-controlled cashout timing, is a poor fit
                for no-deposit promotions from the casino&apos;s perspective.
              </p>
              <p>
                When a site advertises an Aviator no deposit bonus, read
                the fine print. In almost every case it is one of three
                things: free spins on slots (not Aviator), bonus credit with
                a 5% crash-game contribution that makes it impossible to
                clear, or simply a fabricated offer designed to get you to
                sign up through an affiliate link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lowest minimum deposits */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Cheapest ways to start playing Aviator
            </h2>
            <p className="mt-3 text-muted-foreground">
              Since a true no-deposit offer does not exist, the next best
              thing is a casino with a very low minimum deposit. These let
              you fund a real Aviator session for the price of a coffee.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lowDeposit.map((casino) => (
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
                  <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    {casino.minDeposit} min
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {casino.tagline}
                </p>
                <div className="mt-4 rounded-lg bg-secondary px-4 py-3">
                  <p className="text-xs text-muted-foreground">Bonus</p>
                  <p className="text-sm font-semibold">{casino.bonus}</p>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {casino.wageringContribution}
                </p>
                <Link
                  href={affiliateHref(casino.affiliateSlug)}
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Claim Offer
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How no deposit bonuses interact with Aviator */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How no-deposit free spins can fund Aviator play
            </h2>
            <p className="mt-3 text-muted-foreground">
              It is indirect, but the path exists if you understand the
              wagering rules.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-sm font-semibold text-primary">
                01
              </span>
              <h3 className="mt-3 font-bold">Claim the free spins</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sign up at a casino like TrustDice that offers no-deposit
                free spins. Use them on the eligible slot games. No deposit
                required, no risk to your own money.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-sm font-semibold text-primary">
                02
              </span>
              <h3 className="mt-3 font-bold">Clear the wagering</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Any winnings from the spins are bonus funds with a wagering
                requirement, often 40x or more. You clear them by playing
                eligible slots. Do not try to clear them on Aviator, where
                the contribution is usually 5%.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-sm font-semibold text-primary">
                03
              </span>
              <h3 className="mt-3 font-bold">Play Aviator with the balance</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Once wagering is complete and funds convert to cash, that
                balance is yours. You can then play Aviator with it just
                like any deposited funds, with no contribution restrictions.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-background/60 p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                The catch:
              </span>{" "}
              no-deposit bonuses carry the steepest wagering requirements
              and the lowest maximum cashout limits. Most players clear a
              few dollars at most. It is a way to try a platform for free,
              not a reliable way to fund serious Aviator play. For real
              play, a low minimum deposit is more practical.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            No deposit bonus questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            What is real, what is marketing, and what to watch out for.
          </p>

          <div className="mt-10 space-y-4">
            {noDepositFaqs.map((faq) => (
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
                Looking for bonuses that actually work?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Skip the no-deposit myth. Compare welcome bonuses with real
                wagering contributions for crash games and pick the one that
                fits how you play.
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(noDepositFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
