import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Responsible Gambling - Stay in Control of Your Play",
  description:
    "Resources for staying in control while playing Aviator. Warning signs of problem gambling, self-exclusion tools, deposit and session limits, reality checks, and where to get free, confidential help.",
  path: "/responsible-gambling",
});

const warningSigns = [
  {
    title: "Chasing losses",
    body: "Betting larger amounts or more often to win back money you have lost. This is the single most common pattern that turns casual play into a problem.",
  },
  {
    title: "Borrowing to gamble",
    body: "Using credit cards, loans, or money meant for rent, bills, or family to fund your gambling. Gambling should never come before essentials.",
  },
  {
    title: "Hiding your gambling",
    body: "Lying about how much you play or how much you have lost to family, friends, or your partner. Secrecy is a strong signal that something is wrong.",
  },
  {
    title: "Neglecting responsibilities",
    body: "Skipping work, school, or family commitments in order to play, or gambling late into the night until it affects your sleep and health.",
  },
  {
    title: "Irritability and anxiety",
    body: "Feeling restless, anxious, or short-tempered when you try to cut down or between gambling sessions. These are recognized withdrawal-like symptoms.",
  },
  {
    title: "Needing bigger bets",
    body: "Finding that the same stake no longer feels exciting and increasing your bets to get the same thrill. This is called tolerance and it escalates fast.",
  },
];

const supportResources = [
  {
    name: "GamCare",
    url: "https://www.gamcare.org.uk",
    description:
      "UK-based charity offering free information, advice, and support, plus the National Gambling Helpline. Phone, live chat, and forum support available.",
  },
  {
    name: "BeGambleAware",
    url: "https://www.begambleaware.org",
    description:
      "Free, confidential help for anyone affected by gambling harms. Self-assessment tools, practical advice, and a treatment finder by region.",
  },
  {
    name: "Gamblers Anonymous",
    url: "https://www.gamblersanonymous.org",
    description:
      "A fellowship of people sharing their experience to help each other recover. In-person and online meetings run worldwide on a peer-support model.",
  },
  {
    name: "Gambling Therapy",
    url: "https://www.gamblingtherapy.org",
    description:
      "Global online support service offering free practical advice and emotional support in multiple languages via live chat and email.",
  },
];

const controlTools = [
  {
    title: "Deposit limits",
    body: "Set a hard cap on how much you can deposit per day, week, or month. Every licensed casino we list lets you set these in your account settings, and lowering a limit takes effect immediately.",
  },
  {
    title: "Session and time limits",
    body: "Restrict how long a single playing session can last. Time limits auto-log you out once the window expires, which breaks the loop of just one more round.",
  },
  {
    title: "Reality checks",
    body: "On-screen reminders that pop up every 15, 30, or 60 minutes to show how long you have been playing and your net result for the session. Use them to check in with yourself honestly.",
  },
  {
    title: "Loss limits and self-exclusion",
    body: "Block yourself from playing for a fixed period (24 hours to permanent). Self-exclusion is enforced at the account level and cannot be reversed early, so use it when you need a real break.",
  },
];

export default function ResponsibleGamblingPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Responsible Gambling", url: "/responsible-gambling" },
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
            <span className="text-foreground">Responsible Gambling</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            18+ | Play responsibly
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Responsible Gambling
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Aviator is a fast-paced game of chance with a built-in 3% house
            edge. Over the long run, every player loses money. This page exists
            so you can keep gambling as entertainment, not let it become a
            problem. If it already feels like one, the resources here can help
            you take control today.
          </p>
        </div>
      </section>

      {/* Why this matters */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              The honest starting point
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              There is no strategy, predictor app, or signal group that makes
              Aviator profitable long-term. Each round is independent and
              determined by a provably fair random number generator. Set a
              budget you can afford to lose entirely, treat any win as a bonus,
              and stop playing the moment it stops being fun. If you cannot stop
              when you want to, the rest of this page is for you.
            </p>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Warning signs of problem gambling
            </h2>
            <p className="mt-3 text-muted-foreground">
              These behaviors do not mean you have a problem on their own, but
              if several of them sound familiar, it is worth pausing and asking
              yourself honestly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((sign) => (
              <div
                key={sign.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-bold">{sign.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {sign.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Recognize yourself in three or more of these? Consider taking a
            break and using the support resources below.
          </p>
        </div>
      </section>

      {/* Support resources */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Free, confidential support
            </h2>
            <p className="mt-3 text-muted-foreground">
              These organizations are independent of any casino. They are free,
              confidential, and deal with people affected by gambling every day.
              You do not have to hit rock bottom to reach out.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {supportResources.map((resource) => (
              <div
                key={resource.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="text-xl font-bold">{resource.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {resource.description}
                </p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Visit {resource.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control tools */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Tools to stay in control
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every licensed casino we recommend offers these features. Set them
              up <em>before</em> you start playing, not after a losing streak.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {controlTools.map((tool) => (
              <div
                key={tool.title}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="text-xl font-bold">{tool.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tool.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age verification + practical advice */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Age verification and safe play habits
          </h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">
                Gambling is strictly 18+
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                It is illegal for anyone under 18 to gamble. Every casino on
                this site verifies age and identity as part of sign-up and
                before the first withdrawal. We do not market to minors, and we
                recommend parents use content filters and supervise device
                access. If you are under 18, please close this page.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">
                Practical rules we recommend
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  - Set a fixed session bankroll in cash terms, never as a
                  percentage of what you hope to win.
                </li>
                <li>
                  - Never gamble when stressed, tired, or under the influence of
                  alcohol or other substances.
                </li>
                <li>
                  - Treat Aviator as entertainment you pay for, like a movie or
                  a night out, not as a way to make money.
                </li>
                <li>
                  - Take a break of at least a few hours after every session
                  before deciding whether to play again.
                </li>
                <li>
                  - Keep a separate record of your deposits and losses so you
                  see the real numbers, not just the wins you remember.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Need to take a break right now?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Start with GamCare or BeGambleAware. Both can help you set up
                self-exclusion and talk through what you are dealing with.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/casinos"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
              >
                Browse Casinos
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
              >
                Read Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Responsible Gambling",
            description:
              "Resources for staying in control while playing Aviator. Warning signs of problem gambling, self-exclusion tools, and free confidential support.",
            url: "https://www.aviatorcrashgame.com/responsible-gambling",
            publisher: {
              "@type": "Organization",
              name: "Aviator Crash Game",
            },
          }),
        }}
      />
    </>
  );
}
