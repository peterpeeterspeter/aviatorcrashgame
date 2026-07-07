import type { Metadata } from "next";
import Link from "next/link";
import { guides, type GuideSummary } from "@/content/guides";
import {
  constructMetadata,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Aviator Guides - Beginner, Strategy & Safety Tips",
  description:
    "Complete library of Aviator crash game guides. Learn the basics, real strategy that works, and how to stay safe from predictor app scams. Plain English, no hype.",
  path: "/guides",
});

type CategoryKey = "basics" | "strategy" | "safety";

const categorySections: {
  key: CategoryKey;
  title: string;
  blurb: string;
}[] = [
  {
    key: "basics",
    title: "Basics",
    blurb:
      "Start here if you have never played. The rules, the odds, the vocabulary, and the mistakes every beginner makes.",
  },
  {
    key: "strategy",
    title: "Strategy",
    blurb:
      "Bankroll management, multiplier math, and honest risk control. No fake hacks, no predictor apps.",
  },
  {
    key: "safety",
    title: "Safety",
    blurb:
      "How to spot scams, verify rounds with provably fair, and protect yourself from signal groups and bots.",
  },
];

const categoryBadgeClass: Record<GuideSummary["category"], string> = {
  basics:
    "bg-primary/10 text-primary border border-primary/20",
  strategy:
    "bg-chart-3/10 text-chart-3 border border-chart-3/20",
  safety:
    "bg-chart-4/10 text-chart-4 border border-chart-4/20",
  casinos:
    "bg-secondary text-secondary-foreground border border-border",
};

const categoryLabel: Record<GuideSummary["category"], string> = {
  basics: "Basics",
  strategy: "Strategy",
  safety: "Safety",
  casinos: "Casinos",
};

export default function GuidesHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guides" },
  ]);

  const grouped = categorySections.map((section) => ({
    ...section,
    items: guides.filter((g) => g.category === section.key),
  }));

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
            <span className="text-foreground">Guides</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            {guides.length} guides and growing
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Aviator Guides
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Every guide on this site is written in plain English and based on
            real game data, not marketing hype. Pick a category below and start
            with whichever one matches where you are right now.
          </p>

          {/* Category quick nav */}
          <div className="mt-8 flex flex-wrap gap-3">
            {categorySections.map((section) => {
              const count = guides.filter(
                (g) => g.category === section.key,
              ).length;
              return (
                <a
                  key={section.key}
                  href={`#${section.key}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50"
                >
                  <span>{section.title}</span>
                  <span className="rounded-md bg-secondary px-1.5 py-0.5 text-xs text-muted-foreground">
                    {count}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category sections */}
      {grouped.map((section) => (
        <section
          key={section.key}
          id={section.key}
          className="scroll-mt-24 border-b border-border py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {section.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{section.blurb}</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${categoryBadgeClass[guide.category]}`}
                      >
                        {categoryLabel[guide.category]}
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
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
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
      ))}

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                New to Aviator?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Start with the complete beginner walkthrough. Free, no sign up,
                takes about eight minutes.
              </p>
            </div>
            <Link
              href="/how-to-play"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Open Beginner Guide
            </Link>
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
