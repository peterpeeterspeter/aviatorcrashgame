import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy - How We Handle Your Data",
  description:
    "How Aviator Crash Game collects, uses, and protects your data. Cookies, Google Analytics, affiliate tracking, your GDPR rights, and how to contact us.",
  path: "/privacy",
});

const dataPoints = [
  {
    title: "Information you give us",
    body: "If you email us with a question, correction, or feedback, we receive whatever you choose to include in that message, such as your name, email address, and the content of your message.",
  },
  {
    title: "Usage and analytics data",
    body: "We use Google Analytics 4 to understand how visitors use the site. This includes pages viewed, time on page, referring websites, approximate location (country and city level), device type, and browser.",
  },
  {
    title: "Cookies and similar technologies",
    body: "We set cookies to remember your consent choice, measure traffic, and support basic site functionality. You can control or delete cookies through your browser settings at any time.",
  },
];

const thirdParties = [
  {
    name: "Google Analytics 4",
    purpose:
      "We use GA4 to understand traffic and content performance. Google processes anonymized usage data on its servers and may use it to improve its own services.",
    url: "https://policies.google.com/privacy",
  },
  {
    name: "Affiliate networks",
    purpose:
      "When you click a casino link, you are redirected through our /go/ tracking endpoint to the operator. The affiliate network and the casino set their own cookies to attribute the referral and may process your data under their own privacy policies.",
    url: "https://www.aviatorcrashgame.com/terms",
  },
  {
    name: "Vercel",
    purpose:
      "Our site is hosted on Vercel, which processes request logs and analytics to deliver and secure the site.",
    url: "https://vercel.com/legal/privacy-policy",
  },
];

export default function PrivacyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy" },
  ]);

  return (
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 pb-16 pt-16 sm:px-6 lg:pb-20 lg:pt-20">
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">Privacy Policy</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Last updated: July 2026
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            This policy explains what data Aviator Crash Game collects, why we
            collect it, who we share it with, and the rights you have over your
            information. We aim to collect as little as possible.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Data we collect */}
          <h2 className="text-2xl font-bold tracking-tight">
            What data we collect
          </h2>
          <p className="mt-3 text-muted-foreground">
            We collect only what we need to run the site and understand how it
            is used. We do not sell your data.
          </p>

          <div className="mt-8 space-y-4">
            {dataPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-bold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.body}
                </p>
              </div>
            ))}
          </div>

          {/* How we use it */}
          <h2 className="mt-14 text-2xl font-bold tracking-tight">
            How we use your data
          </h2>
          <p className="mt-3 text-muted-foreground">
            We use the data we collect to:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>- Understand which guides and pages are useful so we can improve them.</li>
            <li>- Respond to your questions and feedback when you contact us.</li>
            <li>- Detect and prevent abuse, fraud, and automated scraping.</li>
            <li>- Measure the effectiveness of our content and affiliate partnerships.</li>
            <li>- Comply with our legal and regulatory obligations.</li>
          </ul>

          {/* Cookies */}
          <h2 className="mt-14 text-2xl font-bold tracking-tight">
            Cookies and analytics
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            We use Google Analytics 4 to measure traffic. GA4 cookies collect
            anonymized data such as page views, session duration, and a
            pseudonymous client ID used to estimate user counts. We do not use
            personally identifiable analytics, and IP addresses are masked at
            the network level. Where required by law, we ask for your consent
            before setting non-essential analytics cookies, and you can withdraw
            that consent at any time. To manage cookies, use your browser
            settings or the consent banner where available.
          </p>

          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-base font-bold text-primary">
              Affiliate tracking
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Our casino links redirect through <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">/go/</code>{" "}
              to the operator. When you click one, the affiliate network and the
              casino may set their own tracking cookies. We do not control those
              cookies, and they are governed by each operator&apos;s privacy
              policy, not ours. Please review the casino&apos;s terms before
              signing up.
            </p>
          </div>

          {/* Third parties */}
          <h2 className="mt-14 text-2xl font-bold tracking-tight">
            Third parties we work with
          </h2>
          <p className="mt-3 text-muted-foreground">
            The following third parties may process limited data when you use
            this site:
          </p>

          <div className="mt-8 space-y-4">
            {thirdParties.map((party) => (
              <div
                key={party.name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-bold">{party.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {party.purpose}
                </p>
                {party.url.startsWith("http") ? (
                  <a
                    href={party.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Read their privacy policy
                  </a>
                ) : (
                  <Link
                    href={party.url}
                    className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Read our terms of service
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* GDPR rights */}
          <h2 className="mt-14 text-2xl font-bold tracking-tight">
            Your data protection rights
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            If you are located in the European Economic Area, the United
            Kingdom, or another jurisdiction with strong data protection laws
            (such as under the GDPR or UK GDPR), you have the following rights:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>- <strong className="text-foreground">Access:</strong> request a copy of the personal data we hold about you.</li>
            <li>- <strong className="text-foreground">Rectification:</strong> correct data that is inaccurate or incomplete.</li>
            <li>- <strong className="text-foreground">Erasure:</strong> ask us to delete your personal data in certain circumstances.</li>
            <li>- <strong className="text-foreground">Objection:</strong> object to processing based on legitimate interests.</li>
            <li>- <strong className="text-foreground">Portability:</strong> receive your data in a structured, machine-readable format.</li>
            <li>- <strong className="text-foreground">Withdraw consent:</strong> withdraw consent for processing that relies on it.</li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            To exercise any of these rights, email us at{" "}
            <a
              href="mailto:privacy@aviatorcrashgame.com"
              className="font-semibold text-primary hover:underline"
            >
              privacy@aviatorcrashgame.com
            </a>
            . We respond to legitimate requests within 30 days. You also have
            the right to lodge a complaint with your local data protection
            authority.
          </p>

          {/* Data retention */}
          <h2 className="mt-14 text-2xl font-bold tracking-tight">
            Data retention
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Analytics data is retained in aggregate form and is not linked to
            you as an identifiable individual. Messages you send us by email are
            kept only as long as needed to resolve your inquiry and meet record
            keeping obligations. We do not maintain user accounts, so there is
            no personal profile for us to store.
          </p>

          {/* Children */}
          <h2 className="mt-14 text-2xl font-bold tracking-tight">
            Children&apos;s privacy
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Our site is intended for adults aged 18 and over. We do not
            knowingly collect personal information from anyone under 18. If you
            believe a minor has provided us with data, please contact us and we
            will delete it. See our{" "}
            <Link
              href="/responsible-gambling"
              className="font-semibold text-primary hover:underline"
            >
              responsible gambling page
            </Link>{" "}
            for more on our age verification stance.
          </p>

          {/* Changes */}
          <h2 className="mt-14 text-2xl font-bold tracking-tight">
            Changes to this policy
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated revision date. If we make
            material changes that affect your rights, we will highlight them
            prominently.
          </p>

          {/* Contact */}
          <h2 className="mt-14 text-2xl font-bold tracking-tight">
            Contact us
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Questions about this privacy policy or your data? Email us at{" "}
            <a
              href="mailto:privacy@aviatorcrashgame.com"
              className="font-semibold text-primary hover:underline"
            >
              privacy@aviatorcrashgame.com
            </a>
            . For partnership or content inquiries, see our{" "}
            <Link href="/about" className="font-semibold text-primary hover:underline">
              about page
            </Link>
            .
          </p>
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
