import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service - Aviator Crash Game",
  description:
    "The terms that govern your use of aviatorcrashgame.com. Eligibility, affiliate disclosure, no guarantee of winnings, responsible gambling, limitation of liability, and changes to these terms.",
  path: "/terms",
});

export default function TermsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms" },
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
            <span className="text-foreground">Terms of Service</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Last updated: July 2026
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            These terms govern your use of aviatorcrashgame.com. By accessing
            the site you agree to them. Please read them carefully, especially
            the affiliate disclosure and limitation of liability sections.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Acceptance */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              1. Acceptance of terms
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              By accessing or using aviatorcrashgame.com (the &quot;Site&quot;),
              you confirm that you have read, understood, and agree to be bound
              by these Terms of Service and our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              . If you do not agree, please do not use the Site. We may update
              these terms from time to time, and continued use after changes are
              posted constitutes acceptance of the revised terms.
            </p>
          </div>

          {/* Eligibility */}
          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              2. Eligibility and age restriction
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The Site is intended for adults aged 18 and over only. Gambling is
              illegal for minors in every jurisdiction we are aware of, and we
              do not permit anyone under 18 to use the Site or click through to
              any recommended casino.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Online gambling is restricted or illegal in some jurisdictions.
              You are solely responsible for determining whether gambling is
              legal in your country, state, or region, and for complying with
              local law. We do not provide legal advice. If online gambling is
              prohibited where you live, you must not access any casino through
              our links.
            </p>
          </div>

          {/* What we provide */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              3. What we provide
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Aviator Crash Game is an informational and review website. We
              publish beginner guides, strategy content, and casino reviews
              about the Aviator crash game and related gambling products. We are
              a content publisher, not a casino operator or gambling provider.
              We do not host real-money games, process deposits or withdrawals,
              or hold player funds.
            </p>
          </div>

          {/* Affiliate disclosure */}
          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              4. Affiliate disclosure
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              This Site earns revenue through affiliate marketing. When you sign
              up and play at a casino through our links, we may receive a
              commission or revenue share from the operator or its affiliate
              network, at no additional cost to you. These commissions fund our
              research and content.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              <strong className="text-foreground">
                Affiliate compensation never influences our ratings or rankings.
              </strong>{" "}
              Casinos cannot pay for a higher position on our lists. Several
              operators have offered us larger revenue shares than the casinos
              we rank above them, and we have declined to adjust our rankings.
              You can read our full methodology on the{" "}
              <Link href="/about" className="font-semibold text-primary hover:underline">
                about page
              </Link>
              .
            </p>
          </div>

          {/* No guarantee */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              5. No guarantee of winnings
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Aviator and all casino games are games of chance with a built-in
              house edge (Aviator runs at 97% RTP, meaning the operator keeps
              roughly 3% of all wagers over time). Over the long run, players
              collectively lose money. There is no strategy, predictor app, bot,
              or signal service that can overcome this edge or guarantee a win.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Any content on this Site about strategy, probability, or expected
              outcomes is educational and should not be read as a promise or
              guarantee of profit. Never gamble with money you cannot afford to
              lose completely. Past results do not influence or predict future
              rounds, since each round is independent.
            </p>
          </div>

          {/* Responsible gambling */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              6. Responsible gambling
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We are committed to promoting responsible gambling. If gambling is
              causing harm to you or someone you know, please use the resources
              on our{" "}
              <Link
                href="/responsible-gambling"
                className="font-semibold text-primary hover:underline"
              >
                responsible gambling page
              </Link>
              , including self-exclusion tools and free, confidential support
              from GamCare, BeGambleAware, and Gamblers Anonymous. We support
              deposit limits, session limits, and reality checks, and we
              encourage every player to set them before playing.
            </p>
          </div>

          {/* External links */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              7. Third-party websites and offers
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Our Site links to third-party casino operators, affiliate
              networks, and support organizations. We do not control these
              websites and are not responsible for their content, terms,
              privacy practices, bonuses, or conduct. Bonus offers, wagering
              requirements, payout speeds, and game availability shown on our
              Site are accurate to the best of our knowledge at the time of
              writing, but casinos change their terms frequently. Always review
              the operator&apos;s current terms before depositing.
            </p>
          </div>

          {/* Limitation of liability */}
          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              8. Limitation of liability
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The Site and all content are provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, express or implied.
              To the fullest extent permitted by law, Aviator Crash Game and its
              operators disclaim all liability for any losses or damages arising
              from your use of the Site, your reliance on its content, or your
              participation in any third-party gambling activity.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              In particular, we are not liable for any gambling losses,
              disputed casino payouts, changed bonus terms, account closures, or
              any action taken by a third-party operator. You gamble at your own
              risk, and any dispute with a casino must be resolved directly with
              that operator or the relevant licensing authority.
            </p>
          </div>

          {/* Intellectual property */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              9. Intellectual property
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              All original content on this Site, including text, graphics,
              guides, and reviews, is owned by Aviator Crash Game and protected
              by copyright. You may not reproduce, republish, or redistribute
              our content for commercial purposes without written permission.
              Casino names, logos, and game titles are trademarks of their
              respective owners and appear here for descriptive and review
              purposes only.
            </p>
          </div>

          {/* Changes */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              10. Changes to these terms
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We may revise these Terms of Service at any time by updating this
              page. The &quot;last updated&quot; date at the top reflects the most
              recent revision. Material changes will be noted prominently. Your
              continued use of the Site after changes take effect means you
              accept the updated terms.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight">11. Contact</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Questions about these terms? Email us at{" "}
              <a
                href="mailto:legal@aviatorcrashgame.com"
                className="font-semibold text-primary hover:underline"
              >
                legal@aviatorcrashgame.com
              </a>
              . For questions about our review methodology, see the{" "}
              <Link href="/about" className="font-semibold text-primary hover:underline">
                about page
              </Link>
              .
            </p>
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
