import type { Metadata } from "next";
import Link from "next/link";
import { guides, type GuideSummary } from "@/content/guides";
import {
  constructMetadata,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "How to Play Aviator - Complete Beginner Guide",
  description:
    "A full walkthrough of how Aviator works. Place a bet, watch the multiplier rise, and cash out before the crash. Mechanics, odds, auto-cashout, and provably fair explained in plain English.",
  path: "/how-to-play",
});

const steps = [
  {
    number: "01",
    title: "Place Your Bet",
    summary:
      "Before each round starts, choose your stake and confirm. Bets typically open for about five seconds between rounds.",
    body: "The bet window opens after the previous round settles. You set your stake, anywhere from around $0.10 up to whatever the table maximum is, and you can place one or two bets in the same round. Once the betting window closes, no more bets are accepted for that round. Many players place two simultaneous bets so they can cash out one early and let the other ride for a higher multiplier. This is optional and entirely a personal choice.",
  },
  {
    number: "02",
    title: "Watch the Multiplier Rise",
    summary:
      "A plane takes off and a multiplier counts up from 1.00x. The longer it flies, the higher your potential payout.",
    body: "As soon as the round starts, the multiplier begins climbing from 1.00x. A small plane icon flies across the screen and the number ticks upward in real time. Your current potential payout is your stake multiplied by whatever number is showing. If you bet $1 and the multiplier reads 2.50x, you are sitting on $2.50 of potential winnings plus your $1 stake back. The multiplier can stop at any moment. When it stops, the plane flies away and the round ends.",
  },
  {
    number: "03",
    title: "Cash Out Before the Crash",
    summary:
      "Hit the cash out button to lock in your winnings. If the plane flies away before you click, you lose the stake for that round.",
    body: "The entire game is this decision. Press cash out and you get your stake multiplied by the current number. Wait too long and the round crashes, costing you the bet. There is no partial payout. You either cash out in time or you lose. This is why auto-cashout exists. You can pre-set a target multiplier, and the game cashes you out automatically the instant that number is reached, removing your reaction time and your emotions from the equation.",
  },
];

const concepts = [
  {
    term: "Multiplier",
    body: "The number that determines your payout. It starts at 1.00x and rises during the round. A cash out at 2.00x doubles your money, 5.00x multiplies it by five, and so on. The multiplier is what makes Aviator exciting, because even a small stake can return a large amount if you time the cashout correctly. It is also what makes the game dangerous, because the chance of a high multiplier is low and the temptation to wait is strong.",
  },
  {
    term: "Crash Point",
    body: "The multiplier value at which the round ends and the plane flies away. The crash point for every round is determined before the round even starts, using a random number generator combined with the provably fair seed system. Players cannot see the crash point in advance. Once the multiplier reaches the crash point, the round is over instantly and anyone who has not cashed out loses their stake for that round.",
  },
  {
    term: "Auto-Cashout",
    body: "A feature that cashes you out automatically the moment the multiplier hits a target you set in advance. If you set auto-cashout to 2.00x, the game locks in your winnings the instant the multiplier reaches 2.00x, with no clicking required. This is strongly recommended for beginners. It removes reaction-time pressure, removes emotional second-guessing, and lets you commit to a plan before the round gets stressful.",
  },
  {
    term: "Provably Fair",
    body: "A cryptographic system that lets you verify every round was generated fairly and was not tampered with. Before each round, the casino publishes a hash of the server seed. After the round, you can check that the crash point was derived from that committed seed combined with a client seed, and that the result matches the published hash. You do not have to trust the casino. You can mathematically prove each round was honest.",
  },
  {
    term: "RTP and House Edge",
    body: "Aviator runs at a 97% return-to-player rate, meaning the house edge is 3%. Over a very large number of rounds, the casino keeps about 3% of all money wagered and returns the rest to players in the form of winnings. This is comparable to European roulette and slightly better than most online slots. The house edge does not mean you will lose every session, but it does mean that no strategy can produce long-term profit. The realistic goal is to manage variance, not to beat the math.",
  },
  {
    term: "Two-Bet Mode",
    body: "Most Aviator tables let you place two independent bets in the same round, each with its own stake and its own cashout target. A common pattern is to cash out the first bet at a low multiplier like 1.5x to cover the stake, then let the second bet ride toward a higher target. This is a stylistic choice, not a winning formula, but many players find it makes the game feel less all-or-nothing.",
  },
];

const tips = [
  {
    title: "Use auto-cashout at a low target",
    body: "Set auto-cashout at 1.5x or 2.0x for most rounds. At 2.0x you win roughly 49% of the time, which keeps variance manageable while still doubling your money on wins.",
  },
  {
    title: "Cap each bet at 5% of your bankroll",
    body: "If your total bankroll is $100, your maximum stake per round should be $5. This lets you survive a long losing streak without going broke and gives you enough rounds for variance to average out.",
  },
  {
    title: "Set a session stop-loss",
    body: "Decide before you start how much you are willing to lose in this session. If you hit that number, close the tab. No exceptions, no chasing. The stop-loss is what separates entertainment from a problem.",
  },
  {
    title: "Ignore predictor apps and signals",
    body: "Any app, bot, Telegram group, or Discord server that claims to predict Aviator crashes is lying. Each round is independent and determined by a provably fair RNG. We tested the popular tools and they perform no better than random guessing.",
  },
  {
    title: "Try the demo first",
    body: "Before risking real money, play the free demo on this site or at any of our recommended casinos. Get a feel for the pacing, test your auto-cashout settings, and decide whether the game is for you at zero cost.",
  },
  {
    title: "Treat it as entertainment",
    body: "Aviator is a game, not an income source. The house edge guarantees the casino wins over time. Budget for it the way you would budget for any other paid entertainment, and never gamble with money you need for rent, food, or bills.",
  },
];

const faqs = [
  {
    question: "Is Aviator hard to learn?",
    answer:
      "No. The entire game comes down to three steps: place a bet, watch the multiplier rise, and cash out before the crash. A complete beginner can understand the mechanics in under five minutes. What takes longer to learn is bankroll management and emotional control, which is where most players actually lose money.",
  },
  {
    question: "What is the minimum bet in Aviator?",
    answer:
      "The minimum stake is typically $0.10 to $0.20 depending on the casino and currency. The maximum varies by operator. We recommend starting with small stakes while you learn the pacing and test your auto-cashout settings.",
  },
  {
    question: "Can I play Aviator for free?",
    answer:
      "Yes. You can try our free interactive demo on this site with no sign-up required. Most licensed casinos also offer a demo mode that uses virtual credits. We strongly recommend playing the demo first to get a feel for the game before risking real money.",
  },
  {
    question: "What is a good cashout target for beginners?",
    answer:
      "Start with auto-cashout between 1.5x and 2.0x. At 2.0x you win about 49% of rounds, which keeps your bankroll relatively stable while you learn. Higher targets like 5x or 10x pay more but hit far less often, and the longer dry spells are hard for new players to handle emotionally.",
  },
  {
    question: "Is Aviator rigged?",
    answer:
      "No, not at licensed casinos. Aviator uses a provably fair system that lets you independently verify every round was generated honestly. The game has a 97% RTP, meaning the house edge is 3%, comparable to European roulette. You can verify any round yourself using the published server seed and hash.",
  },
];

const relatedGuideSlugs = [
  "aviator-rtp-house-edge",
  "aviator-common-mistakes",
  "aviator-bankroll-management",
  "aviator-glossary",
];

const relatedGuides: GuideSummary[] = relatedGuideSlugs
  .map((slug) => guides.find((g) => g.slug === slug))
  .filter((g): g is GuideSummary => Boolean(g));

export default function HowToPlayPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "How to Play", url: "/how-to-play" },
  ]);

  return (
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 pb-16 pt-16 sm:px-6 lg:pb-20 lg:pt-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">How to Play</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Complete beginner guide
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            How to Play Aviator: Complete Beginner Guide
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Aviator is a crash game built on a single, simple idea. A
            multiplier counts upward from 1.00x, and you have to cash out
            before it crashes. Cash out in time and you win your stake times
            the current multiplier. Wait too long and you lose the bet. That
            is the whole game. This guide walks through every step, explains
            the key concepts, and gives you practical tips for playing
            without losing more than you can afford.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">~8</span> min
              read
            </span>
            <span>
              <span className="font-semibold text-foreground">3</span> core
              steps
            </span>
            <span>
              <span className="font-semibold text-foreground">97%</span> RTP
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/how-to-play/demo"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Try the Free Demo
            </Link>
            <Link
              href="#steps"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
            >
              Jump to the Steps
            </Link>
          </div>
        </div>
      </section>

      {/* What is Aviator */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Is Aviator?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Aviator is a crash-style gambling game developed by Spribe and
              now offered at most major crypto and fiat casinos. It belongs
              to a category sometimes called multiplier games or rocket
              games, where a single number ticks upward and the player
              decides when to exit. The longer you stay in, the more you can
              win, but the higher the chance the round ends and you lose
              everything staked on it.
            </p>
            <p>
              Unlike a slot machine, where you press spin and wait for the
              reels to resolve, Aviator asks you to make a live decision
              every round. This is what makes it feel skill-based, even
              though the underlying outcome is random. Your job is not to
              predict the crash. Your job is to manage your cashouts and
              your bankroll in a way that survives the variance.
            </p>
            <p>
              The game is fast. A full round, including the betting window,
              usually takes under 30 seconds. That speed is part of the
              appeal and part of the risk. It is easy to play dozens of
              rounds in a short session, which means your bankroll can move
              quickly in either direction.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section
        id="steps"
        className="scroll-mt-24 border-b border-border py-16 lg:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How a Round Works: Three Steps
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every round of Aviator follows the same three-step loop. Once
              you understand these, you understand the game.
            </p>
          </div>

          <ol className="mt-12 space-y-6">
            {steps.map((step) => (
              <li
                key={step.number}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                  <div className="flex sm:w-40 sm:shrink-0">
                    <span className="font-mono text-4xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-medium text-foreground">
                      {step.summary}
                    </p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <Link
              href="/how-to-play/demo"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Practice These Steps in the Free Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Key concepts */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Key Concepts Explained
            </h2>
            <p className="mt-3 text-muted-foreground">
              These terms come up constantly. Learn them once and the rest
              of the site will make a lot more sense.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {concepts.map((concept) => (
              <div
                key={concept.term}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  {concept.term}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {concept.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The odds */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Understanding the Odds
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              The probability of any given multiplier is inversely
              proportional to its value, adjusted for the 3% house edge. In
              plain terms, low multipliers happen often and high multipliers
              happen rarely. Here are some rough reference points so you
              know what to expect.
            </p>
            <p>
              The chance of reaching 2x is about 49%. For 5x it is around
              19%, for 10x about 4.8%, and for 100x less than half a
              percent. This is why chasing huge multipliers is so
              dangerous. The math does not care how lucky you feel.
            </p>
            <p>
              Roughly one round in a hundred crashes instantly at 1.00x,
              meaning everyone who bet loses immediately with no chance to
              cash out. This is part of the game and is baked into the
              house edge. It is also why staking your entire bankroll on a
              single round is a terrible idea.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[
              { label: "Chance of 2x", value: "~49%" },
              { label: "Chance of 5x", value: "~19%" },
              { label: "Chance of 10x", value: "~4.8%" },
              { label: "Chance of 100x", value: "<0.5%" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-bold text-primary">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Tips for New Players
            </h2>
            <p className="mt-3 text-muted-foreground">
              Practical, honest advice. None of these will make you a long
              term winner, because nothing can. They will help you lose
              slower, play longer, and walk away on your own terms.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {tips.map((tip, i) => (
              <div
                key={tip.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold">{tip.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tip.body}
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
            Beginner Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            The most common questions from people playing Aviator for the
            first time.
          </p>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
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

      {/* Related guides */}
      {relatedGuides.length > 0 ? (
        <section className="border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Keep Learning
              </h2>
              <p className="mt-3 text-muted-foreground">
                Once the basics click, these guides take you deeper into
                odds, mistakes, and money management.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">
                      {guide.category}
                    </span>
                    <h3 className="mt-3 text-base font-bold leading-tight">
                      {guide.title}
                    </h3>
                  </div>
                  <span className="mt-4 text-xs font-medium text-muted-foreground">
                    {guide.readingTime} read
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Ready to try it for free?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Run the interactive demo. No sign up, no real money, just
                the multiplier mechanic so you can feel how it plays.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/how-to-play/demo"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Open the Demo
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
            18+ | Gamble responsibly | Aviator has a 3% house edge and
            cannot be beaten long term.
          </p>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
