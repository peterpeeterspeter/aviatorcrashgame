import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  guides,
  getGuideBySlug,
  type GuideSummary,
} from "@/content/guides";
import {
  constructMetadata,
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";
import { guideContentMap, type GuideContent } from "@/content/guide-content";

type Params = { slug: string };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return constructMetadata({
      title: "Guide Not Found",
      description: "This guide could not be found.",
      path: "/guides",
    });
  }

  return constructMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
  });
}

const categoryBadgeClass: Record<GuideSummary["category"], string> = {
  basics: "bg-primary/10 text-primary border border-primary/20",
  strategy: "bg-chart-3/10 text-chart-3 border border-chart-3/20",
  safety: "bg-chart-4/10 text-chart-4 border border-chart-4/20",
  casinos: "bg-secondary text-secondary-foreground border border-border",
};

const categoryLabel: Record<GuideSummary["category"], string> = {
  basics: "Basics",
  strategy: "Strategy",
  safety: "Safety",
  casinos: "Casinos",
};

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // Load guide content from static import map
  const content: GuideContent = guideContentMap[slug] || { sections: [], faqs: [] };

  const related = guides
    .filter(
      (g) => g.category === guide.category && g.slug !== guide.slug,
    )
    .slice(0, 4);

  const categoryHubHref =
    guide.category === "strategy"
      ? "/strategy"
      : guide.category === "basics"
        ? "/how-to-play"
        : "/guides";

  const articleJsonLd = articleSchema({
    title: guide.title,
    description: guide.description,
    slug: guide.slug,
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guides" },
    { name: guide.title, url: `/guides/${guide.slug}` },
  ]);

  const faqJsonLd = content.faqs.length > 0 ? faqSchema(content.faqs) : null;

  return (
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-10 sm:px-6 lg:pt-14">
          {/* Breadcrumb */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link
              href="/guides"
              className="transition-colors hover:text-foreground"
            >
              Guides
            </Link>
            <span aria-hidden>/</span>
            <span className="capitalize text-foreground">
              {categoryLabel[guide.category]}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${categoryBadgeClass[guide.category]}`}
            >
              {categoryLabel[guide.category]}
            </span>
            <span className="text-sm text-muted-foreground">
              {guide.readingTime} read
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            {guide.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {guide.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {guide.keywords.map((kw) => (
              <span
                key={kw}
                className="inline-flex items-center rounded-lg border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Body + sidebar */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_320px]">
          {/* Article */}
          <article className="flex flex-col gap-10">
            {/* TL;DR */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                The short version
              </p>
              <p className="mt-3 text-lg leading-relaxed text-foreground">
                {guide.description}
              </p>
            </div>

            {/* Real content sections */}
            {content.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className="text-lg leading-relaxed text-muted-foreground"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* FAQ section */}
            {content.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Frequently Asked Questions
                </h2>
                <div className="mt-6 space-y-6">
                  {content.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <h3 className="font-semibold text-foreground">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next steps CTA */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold">Keep Reading</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Continue with the next {categoryLabel[guide.category]} guide
                or jump back to the full library.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={categoryHubHref}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Browse {categoryLabel[guide.category]} Guides
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
                >
                  All Guides
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-8 lg:self-start">
            {/* Related guides */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Related Guides
              </p>
              <ul className="mt-4 space-y-3">
                {related.length > 0 ? (
                  related.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/guides/${g.slug}`}
                        className="group block rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/50"
                      >
                        <p className="text-xs font-medium uppercase tracking-wide text-primary">
                          {categoryLabel[g.category]}
                        </p>
                        <p className="mt-1 font-semibold leading-tight group-hover:text-primary">
                          {g.title}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {g.readingTime} read
                        </p>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link
                      href="/guides"
                      className="block rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/50"
                    >
                      <p className="font-semibold">Browse all guides</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        See the full library
                      </p>
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* On this guide */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Guide Details
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="font-medium">
                    {categoryLabel[guide.category]}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Reading time</dt>
                  <dd className="font-medium">{guide.readingTime}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Updated</dt>
                  <dd className="font-medium">July 2026</dd>
                </div>
              </dl>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Keep Exploring
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link
                  href="/how-to-play"
                  className="font-medium text-primary hover:underline"
                >
                  How to Play Aviator
                </Link>
                <Link
                  href="/strategy"
                  className="font-medium text-primary hover:underline"
                >
                  Aviator Strategy &amp; Tips
                </Link>
                <Link
                  href="/casinos"
                  className="font-medium text-primary hover:underline"
                >
                  Best Aviator Casinos
                </Link>
                <Link
                  href="/responsible-gambling"
                  className="font-medium text-primary hover:underline"
                >
                  Responsible Gambling
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
