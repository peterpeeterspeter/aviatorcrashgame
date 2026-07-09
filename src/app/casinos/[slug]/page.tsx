import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { casinos, getCasinoBySlug } from "@/content/casinos";
import { affiliateHref } from "@/lib/affiliate-links";
import {
  constructMetadata,
  casinoReviewSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return casinos.map((casino) => ({ slug: casino.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);

  if (!casino) {
    return constructMetadata({
      title: "Casino Not Found",
      description: "This casino review could not be found.",
      path: "/casinos",
    });
  }

  return constructMetadata({
    title: `${casino.name} Review ${casino.rating}/5 - Aviator Bonus & Payouts`,
    description: `${casino.tagline}. ${casino.bonus}. Read our full ${casino.name} review covering Aviator wagering contribution, payout speed, pros, cons, and payment methods.`,
    path: `/casinos/${casino.slug}`,
  });
}

// Inline SVG star, server-safe (no icon library needed).
function Star({ fillPercent }: { fillPercent: number }) {
  const clamped = Math.max(0, Math.min(100, fillPercent));
  return (
    <span className="relative inline-block" aria-hidden>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        className="text-muted-foreground/30"
        fill="currentColor"
      >
        <path d="M12 2.5l2.9 6.3 6.8.7-5.1 4.6 1.4 6.7L12 17.8 5.9 21.3l1.4-6.7L2.3 9.5l6.8-.7L12 2.5z" />
      </svg>
      <span
        className="absolute inset-0 overflow-hidden text-primary"
        style={{ width: `${clamped}%` }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M12 2.5l2.9 6.3 6.8.7-5.1 4.6 1.4 6.7L12 17.8 5.9 21.3l1.4-6.7L2.3 9.5l6.8-.7L12 2.5z" />
        </svg>
      </span>
    </span>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fillPercent = Math.max(0, Math.min(100, (rating - i) * 100));
        return <Star key={i} fillPercent={fillPercent} />;
      })}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function CasinoReviewPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);

  if (!casino) {
    notFound();
  }

  const stats = [
    { label: "Rating", value: `${casino.rating} / 5` },
    { label: "Welcome Bonus", value: casino.bonus },
    { label: "Min Deposit", value: casino.minDeposit },
    { label: "Payout Speed", value: casino.payouts },
    { label: "License", value: casino.license },
    { label: "Established", value: casino.established },
    { label: "Game Library", value: `${casino.games} games` },
    { label: "Rank", value: `#${casino.rank} overall` },
  ];

  const reviewSchema = casinoReviewSchema({
    name: casino.name,
    rating: casino.rating,
    description: casino.review,
    slug: casino.slug,
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Casinos", url: "/casinos" },
    { name: casino.name, url: `/casinos/${casino.slug}` },
  ]);

  // Casino-specific FAQs for rich snippets
  const casinoFaqs = [
    {
      question: `Does ${casino.name} have Aviator?`,
      answer: casino.aviatorNotes.split(".")[0] + ".",
    },
    {
      question: `What is the welcome bonus at ${casino.name}?`,
      answer: `${casino.name} offers a ${casino.bonus} welcome bonus. ${casino.wageringContribution}.`,
    },
    {
      question: `How fast are withdrawals at ${casino.name}?`,
      answer: `${casino.name} processes withdrawals in ${casino.payouts.toLowerCase()}. The casino has been operating since ${casino.established}.`,
    },
    {
      question: `Is ${casino.name} licensed?`,
      answer: `Yes, ${casino.name} operates under a ${casino.license} license.`,
    },
  ];
  const faqJsonLd = faqSchema(casinoFaqs);

  return (
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 lg:pt-14">
          {/* Breadcrumb */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link
              href="/casinos"
              className="transition-colors hover:text-foreground"
            >
              Casinos
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">{casino.name}</span>
          </nav>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground">
                Rank #{casino.rank}
              </span>
              <span
                className="inline-flex h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: casino.accentColor }}
                aria-hidden
              />
              <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {casino.tagline}
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                  {casino.name}
                </h1>
                <div className="mt-4 flex items-center gap-3">
                  <RatingStars rating={casino.rating} />
                  <span className="font-semibold">{casino.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    out of 5
                  </span>
                </div>
              </div>
            </div>

            {/* Primary CTA pair */}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link
                href={affiliateHref(casino.affiliateSlug)}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Play at {casino.name}
              </Link>
              <Link
                href={affiliateHref(casino.affiliateSlug)}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
              >
                Claim the Bonus
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              18+ | Play responsibly | Bonus terms apply
            </p>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card p-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review body + sidebar */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_320px]">
          {/* Main column */}
          <div className="flex flex-col gap-10">
            {/* Review content */}
            <article>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Our {casino.name} Review
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {casino.review}
              </p>
            </article>

            {/* Aviator notes */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex h-6 items-center rounded-full px-3 text-xs font-bold uppercase tracking-wide text-primary-foreground"
                  style={{ backgroundColor: casino.accentColor }}
                >
                  Aviator
                </span>
                <h3 className="text-lg font-bold">
                  Playing Aviator at {casino.name}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-foreground">
                {casino.aviatorNotes}
              </p>
              <div className="mt-5 rounded-xl bg-background/60 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Wagering Contribution
                </p>
                <p className="mt-1 font-semibold text-primary">
                  {casino.wageringContribution}
                </p>
              </div>
            </div>

            {/* Pros / Cons */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <span className="text-primary">
                    <CheckIcon />
                  </span>
                  Pros
                </h3>
                <ul className="mt-4 space-y-3">
                  {casino.pros.map((pro) => (
                    <li key={pro} className="flex gap-3 text-sm">
                      <span className="mt-0.5 shrink-0 text-primary">
                        <CheckIcon />
                      </span>
                      <span className="text-muted-foreground">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <span className="text-muted-foreground">
                    <CrossIcon />
                  </span>
                  Cons
                </h3>
                <ul className="mt-4 space-y-3">
                  {casino.cons.map((con) => (
                    <li key={con} className="flex gap-3 text-sm">
                      <span className="mt-0.5 shrink-0 text-muted-foreground">
                        <CrossIcon />
                      </span>
                      <span className="text-muted-foreground">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            {/* Bonus card */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Welcome Bonus
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                {casino.bonus}
              </p>
              <Link
                href={affiliateHref(casino.affiliateSlug)}
                className="mt-5 flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Claim Bonus at {casino.name}
              </Link>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {casino.wageringContribution}. New players only. Terms apply.
              </p>
            </div>

            {/* Payment methods */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Payment Methods
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {casino.paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="inline-flex items-center rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Casino Facts
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Established</dt>
                  <dd className="font-medium">{casino.established}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Min Deposit</dt>
                  <dd className="font-medium">{casino.minDeposit}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Payout Speed</dt>
                  <dd className="font-medium">{casino.payouts}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Games</dt>
                  <dd className="font-medium">{casino.games}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">License</dt>
                  <dd className="font-medium">{casino.license}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 text-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Ready to play Aviator at {casino.name}?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Claim the {casino.bonus} welcome bonus and start playing. Crash
                game contribution: {casino.wageringContribution}.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={affiliateHref(casino.affiliateSlug)}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Visit {casino.name}
              </Link>
              <Link
                href="/casinos"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
              >
                Compare All Casinos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {casino.name} FAQ
          </h2>
          <div className="mt-8 space-y-6">
            {casinoFaqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
