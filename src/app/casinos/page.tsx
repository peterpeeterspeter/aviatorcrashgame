import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { casinos } from "@/content/casinos";
import { CasinoCard } from "@/components/casino-card";
import {
  constructMetadata,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Best Aviator Casinos in 2026 - Tested and Ranked",
  description:
    "We tested every major casino that offers Aviator. See our ranked list of the top crypto and fiat casinos for Aviator players, with honest bonus terms, payout speeds, and wagering contributions.",
  path: "/casinos",
});

const ratingCriteria = [
  {
    number: "01",
    title: "Licensing & Regulation",
    description:
      "Every casino on this list holds a valid gambling license, typically from Curacao eGaming. We verify the license is active and confirm the operator has no unresolved player disputes at major watchdog sites.",
  },
  {
    number: "02",
    title: "Payout Speed",
    description:
      "We test real withdrawal times across crypto and fiat methods. If a casino advertises instant payouts, we confirm it actually delivers. Slow or unpredictable withdrawals drop a casino out of the top ranks.",
  },
  {
    number: "03",
    title: "Bonus Fairness",
    description:
      "A big headline bonus means nothing if the terms are hostile. We read the fine print on wagering requirements, maximum cashouts, and how much Aviator and other crash games contribute toward clearing the bonus.",
  },
  {
    number: "04",
    title: "Game Variety & Aviator Quality",
    description:
      "We confirm Aviator runs smoothly on both desktop and mobile, check for provably fair verification, and review the broader game library so you are not stuck with a thin selection after the novelty wears off.",
  },
];

const casinoFaqs = [
  {
    question: "How do you rank these Aviator casinos?",
    answer:
      "We rank casinos using four criteria: licensing, real payout speed, bonus fairness (including how much crash games contribute to wagering), and overall game variety. We test withdrawals ourselves and read the full bonus terms rather than relying on advertised headline numbers. Casinos that exclude Aviator from bonuses or have slow payouts rank lower regardless of their brand size.",
  },
  {
    question: "Are these casinos safe and legal to play at?",
    answer:
      "Every casino listed here holds a valid Curacao eGaming license, which is the standard for crypto-focused gambling operators. Legality in your specific country depends on local law. We do not provide legal advice, so check whether online gambling is permitted in your jurisdiction before signing up. Always gamble only with money you can afford to lose.",
  },
  {
    question: "Which casino pays out the fastest?",
    answer:
      "TrustDice advertises instant crypto payouts and consistently delivers. BitStarz processes most crypto withdrawals in under 10 minutes, and Cybet completes crypto cashouts within two hours. Fiat withdrawals are always slower than crypto across every operator because of banking settlement times.",
  },
  {
    question: "Can I use my welcome bonus to play Aviator?",
    answer:
      "Usually yes, but the contribution matters. At Cybet, crash games contribute 100% toward wagering, so the bonus clears as advertised. At BitStarz, Mirax, and 7Bit, crash games contribute only 5%, which turns a 40x requirement into an effective 800x. Read each review's wagering contribution note before deciding where to play through a bonus.",
  },
  {
    question: "Do I need crypto to play at these casinos?",
    answer:
      "No. Every casino on the list accepts crypto, and most also accept Visa, Mastercard, and bank transfers. Crypto gives you the fastest withdrawals and often the lowest minimum deposits, but it is not required. TrustDice is the only operator here that is crypto-only with no fiat withdrawal option.",
  },
  {
    question: "How does this site make money?",
    answer:
      "We earn affiliate commissions when you sign up and play at a casino through our links. This never affects our rankings or ratings. Casinos cannot pay for a higher position on this list, and several operators that offered us larger revenue shares were ranked below competitors because their bonus terms or payout speeds were worse for players.",
  },
];

export default function CasinosHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Casinos", url: "/casinos" },
  ]);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-15">
          <Image
            src="/images/casino-reviews.jpg"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:pb-20 lg:pt-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">Casinos</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Updated July 2026
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Best Aviator Casinos
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We tested every major casino that offers Aviator and ranked them by
            payout speed, bonus fairness, and how much crash games actually
            contribute to wagering. These are the {casinos.length} that earned a
            spot. No paid placements.
          </p>

          <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">
                {casinos.length}
              </span>{" "}
              casinos reviewed
            </span>
            <span>
              <span className="font-semibold text-foreground">4</span> rating
              criteria
            </span>
            <span>
              <span className="font-semibold text-foreground">100%</span>{" "}
              independent
            </span>
          </div>
        </div>
      </section>

      {/* Casinos grid */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {casinos.map((casino) => (
              <CasinoCard key={casino.slug} casino={casino} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Rankings reflect payout speed, bonus fairness, and Aviator
            contribution. 18+ | Gamble responsibly.
          </p>
        </div>
      </section>

      {/* How we rate */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How We Rate Casinos
            </h2>
            <p className="mt-3 text-muted-foreground">
              We use the same four criteria on every casino so the comparison is
              fair. No casino can buy a better score.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ratingCriteria.map((criterion) => (
              <div
                key={criterion.number}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-8"
              >
                <span className="font-mono text-sm font-semibold text-primary/70">
                  {criterion.number}
                </span>
                <h3 className="mt-4 text-xl font-bold">{criterion.title}</h3>
                <p className="mt-3 text-muted-foreground">
                  {criterion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Casino Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Straight answers about how we rank casinos and what to expect when
            you sign up.
          </p>

          <div className="mt-10 space-y-4">
            {casinoFaqs.map((faq) => (
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(casinoFaqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
