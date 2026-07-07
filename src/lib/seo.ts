import type { Metadata } from "next";

const SITE_URL = "https://aviatorcrashgame.com";

export const siteConfig = {
  name: "Aviator Crash Game",
  url: SITE_URL,
  description:
    "Learn how Aviator crash games work. Beginner guides, honest casino reviews, and real strategy tips. No fake hacks, no predictor apps, just straight talk.",
  ogImage: "/images/og-image.png",
};

export function constructMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function articleSchema({
  title,
  description,
  slug,
  datePublished = "2026-07-07",
}: {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: "Aviator Crash Game",
    },
    publisher: {
      "@type": "Organization",
      name: "Aviator Crash Game",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/guides/${slug}`,
    },
  };
}

export function casinoReviewSchema({
  name,
  rating,
  description,
  slug,
}: {
  name: string;
  rating: number;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: rating,
      bestRating: 5,
    },
    author: {
      "@type": "Organization",
      name: "Aviator Crash Game",
    },
    publisher: {
      "@type": "Organization",
      name: "Aviator Crash Game",
    },
    description,
    url: `${SITE_URL}/casinos/${slug}`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
