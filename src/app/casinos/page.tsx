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
  title: "Best Aviator Casinos in 2026 - Compared and Ranked",
  description:
    "Compare the leading casinos that offer SPRIBE Aviator: advertised bonuses, payment options, and what each casino is best for. Clear recommendations, no paid placements.",
  path: "/casinos",
});

const ratingCriteria = [
  {
    number: "01",
    title: "Licensing & Regulation",
    description:
      "Every casino on this list publishes a gambling license, typically from Curacao eGaming, the standard for crypto-focused operators. We also weigh how long the brand has been operating.",
  },
  {
    number: "02",
    title: "Payments",
    description:
      "We compare advertised minimum deposits, supported coins and cards, and the payout speeds each operator publishes. Crypto withdrawals are the fastest advertised option nearly everywhere.",
  },
  {
    number: "03",
    title: "Bonus Fairness",
    description:
      "A big headline bonus means little if the terms are hostile. We read the published bonus terms: wagering requirements, expiry, and whether crash games like Aviator are confirmed to contribute.",
  },
  {
    number: "04",
    title: "Game Variety & Aviator Quality",
    description:
      "We confirm the casino lists SPRIBE's Aviator, not just a lookalike crash title, and look at the surrounding lobby, features and mobile access so you are not stuck with a thin selection.",
  },
];

const casinoFaqs = [
  {
    question: "How do you rank these Aviator casinos?",
    answer:
      "We compare casinos on four criteria: published licensing and track record, payment options, published bonus terms (including whether Aviator's wagering contribution is confirmed), and Aviator fit. We read operator terms and public documentation rather than relying on headline numbers. Casinos with clearer terms and a better Aviator fit rank higher.",
  },
  {
    question: "Are these casinos safe and legal to play at?",
    answer:
      "Casinos on this list publish offshore licenses, usually Curacao eGaming; Cybet operates under an Anjouan (Comoros) license, a weaker protection tier, which its review notes. Legality in your country depends on local law, and some operators restrict specific markets. Check both before signing up, and only gamble with money you can afford to lose.",
  },
  {
    question: "Which casino pays out the fastest?",
    answer:
      "Crypto is the fastest advertised payout option at every casino here; several advertise near-instant processing. Actual times depend on the operator's review process, your verification status and the network, so treat advertised speeds as best-case, and use crypto rather than fiat if speed matters to you.",
  },
  {
    question: "Can I use my welcome bonus to play Aviator?",
    answer:
      "That depends on the specific offer. Crash games like Aviator are often excluded from wagering or count at a reduced rate: 7Bit's published terms, for example, give video slots full contribution and all other games 5% without naming Aviator (verified 29 October 2026). Check the contribution for the exact game before opting in, or ask support and keep the answer.",
  },
  {
    question: "Do I need crypto to play at these casinos?",
    answer:
      "No. Every casino on the list accepts crypto, and most also accept Visa, Mastercard, and bank transfers. Crypto usually gives you the fastest advertised withdrawals and the lowest minimum deposits, but it is not required. TrustDice is the only operator here that is crypto-only with no fiat withdrawal option.",
  },
  {
    question: "How does this site make money?",
    answer:
      "We earn affiliate commissions when you sign up and play at a casino through our links, at no extra cost to you. That is how this site funds itself. The ranking order follows the four criteria on this page, and the disclosure applies to every casino link you see.",
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
            Updated October 2026
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Best Aviator Casinos
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We compared the leading casinos that offer SPRIBE Aviator and
            ranked them on bonus value, payment options, and how well each one
            fits different players. These are the {casinos.length} that made the
            list. We may earn a commission through affiliate links.
          </p>

          <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">
                {casinos.length}
              </span>{" "}
              casinos compared
            </span>
            <span>
              <span className="font-semibold text-foreground">4</span> rating
              criteria
            </span>
            <span>
              Affiliate links{" "}
              <span className="font-semibold text-foreground">disclosed</span>
            </span>
          </div>
        </div>
      </section>

      {/* Casinos grid */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...casinos]
              .sort((a, b) => a.rank - b.rank)
              .map((casino) => (
                <CasinoCard key={casino.slug} casino={casino} />
              ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            Bonus, deposit and payout details are advertised or independently
            reported terms. 7Bit's bonus terms were re-verified on 29 October
            2026; the other operator pages blocked automated checks today, so
            their figures are labelled as advertised or reported. We did not
            deposit, play or withdraw funds for this comparison. Always confirm
            the current offer and terms on the casino site. 18+ | Gamble
            responsibly.
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
              We apply the same four criteria to every casino so the comparison
              stays fair.
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
