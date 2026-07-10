import type { Metadata } from "next";
import Link from "next/link";
import {
  constructMetadata,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Aviator Tricks That Actually Work - 7 Real Tips (No Hacks)",
  description:
    "Seven practical Aviator tricks that genuinely help: auto-cashout discipline, dual bets, bankroll limits, and more. No fake hacks, no predictor apps, no guaranteed wins. Just what works.",
  path: "/aviator-tricks",
});

const tricks = [
  {
    number: "01",
    title: "Set auto-cashout between 1.5x and 2x",
    body: "This is the single most useful trick in Aviator. Pre-setting your cashout target removes reaction time and emotion from the decision. Human reaction takes roughly 250 milliseconds, which is plenty of time for the multiplier to crash before you click. Auto-cashout at 1.5x to 2x keeps you in the ~49% win-rate zone, where variance stays manageable and your bankroll lasts longer.",
  },
  {
    number: "02",
    title: "Use the dual-bet strategy",
    body: "Most Aviator tables let you place two independent bets per round, each with its own stake and cashout target. A common approach is to cash out the first bet at a low multiplier like 1.5x to cover the stake, then let the second bet ride toward a higher target such as 3x or 5x. This is a stylistic choice, not a winning formula, but it makes the game feel less all-or-nothing and smooths out your session.",
  },
  {
    number: "03",
    title: "Cap each bet at 5% of your bankroll",
    body: "If your total bankroll is $100, your maximum stake per round should be $5. This is the 5% rule, and it is the difference between surviving a losing streak and going broke in ten minutes. Small stakes give you enough rounds for variance to average out, and they keep the game sustainable as entertainment rather than a quick loss.",
  },
  {
    number: "04",
    title: "Avoid peak hours for less server lag",
    body: "Casino servers get busy during evening hours in major time zones, and a laggy connection is the last thing you want in a game measured in fractions of a second. Playing during off-peak hours reduces the chance of input lag interfering with your cashout. If you use auto-cashout this matters less, but for manual play a stable, fast connection is a genuine advantage.",
  },
  {
    number: "05",
    title: "Track your results",
    body: "Keep a simple log of your sessions: starting bankroll, bets placed, cashouts, and ending balance. You do not need fancy software, a notes app or spreadsheet works fine. Tracking does not change the odds, but it shows you the truth about your play. Most players who start logging results discover they lose more than they thought, which is the point. Honest data leads to better decisions.",
  },
  {
    number: "06",
    title: "Set a hard stop-loss before you start",
    body: "Decide before your session how much you are willing to lose. If you hit that number, close the tab. No exceptions, no chasing. The stop-loss is what separates entertainment from a problem. Aviator rounds take under 30 seconds, which means a losing streak can drain your bankroll fast if you do not have a limit in place before the emotion kicks in.",
  },
  {
    number: "07",
    title: "Ignore patterns, signals, and predictor apps",
    body: "This is the most important trick, and it is really an anti-trick. Each round of Aviator is independent and determined by a provably fair RNG. There is no exploitable sequence. Anyone selling a pattern-based system, a Telegram signal group, or a predictor app is selling fiction. We tested the popular tools and they perform no better than random guessing. Save your money.",
  },
];

const tricksFaqs = [
  {
    question: "Do Aviator tricks work?",
    answer:
      "Real Aviator tricks work in the sense that they help you manage your bankroll, extend your play, and avoid the worst decisions. They do not work in the sense of giving you an edge over the house. Aviator runs at 97% RTP with a 3% house edge, and no trick reverses that math. The tricks on this page are about playing smarter, not beating the game.",
  },
  {
    question: "What is the best trick for Aviator?",
    answer:
      "Auto-cashout set between 1.5x and 2x is the best trick for most players. It removes reaction time and emotion, keeps you in the roughly 49% win-rate zone, and protects your bankroll from the instinct to hold on too long. Combined with the 5% bankroll rule and a hard stop-loss, it is the foundation of sustainable play.",
  },
  {
    question: "Can you trick Aviator?",
    answer:
      "No. Aviator uses a provably fair RNG, meaning each round is independent and the crash point is determined before the round starts using a cryptographic seed you can verify yourself. You cannot predict, influence, or trick the outcome. Any claim that you can is a scam. The only tricks that work are the ones that improve your own discipline.",
  },
  {
    question: "Are Aviator trick websites legit?",
    answer:
      "Almost all websites promising Aviator tricks, hacks, or predictors are not legit. They typically sell access to fake predictor apps, push you toward specific casinos through affiliate links, or ask for your casino login. A site worth trusting will tell you the truth: the house has a 3% edge, no system beats it, and the only real tricks are bankroll management and cashout discipline.",
  },
];

export default function AviatorTricksPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Aviator Tricks", url: "/aviator-tricks" },
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
            <span className="text-foreground">Aviator Tricks</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            7 tricks that actually work
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Aviator Tricks That Actually Work
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Search for Aviator tricks and you will find hundreds of sites
            promising hacks, predictors, and guaranteed wins. None of them
            work, because none of them can. Aviator runs on a provably fair
            RNG with a fixed 3% house edge. What does work is discipline:
            smart cashout settings, bankroll management, and knowing which
            advice to ignore. Here are seven practical tricks that genuinely
            help you play better.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">7</span> real
              tricks
            </span>
            <span>
              <span className="font-semibold text-foreground">0</span> fake
              hacks
            </span>
            <span>
              <span className="font-semibold text-foreground">97%</span> RTP
              (3% house edge)
            </span>
          </div>
        </div>
      </section>

      {/* Reality check */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              The honest truth first
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Aviator has a 97% return-to-player rate, which means a 3% house
              edge. Over the long run, the casino keeps about 3 cents of
              every dollar wagered. No trick, strategy, or tool changes this.
              The realistic goal of any trick is to extend your play, manage
              variance, and walk away on your own terms. If a trick promises
              to beat the game, it is not a trick. It is a lie.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every round is independent. The chance of hitting 2x is about
              49%, 10x is roughly 9.7%, and 100x is under 1%. What happened
              in the last round has zero effect on the next one. Keep that in
              mind for every trick below.
            </p>
          </div>
        </div>
      </section>

      {/* Tricks */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Seven tricks that genuinely help
            </h2>
            <p className="mt-3 text-muted-foreground">
              These are practical adjustments to how you play. None of them
              create an edge, but all of them reduce the chance you lose
              money through avoidable mistakes.
            </p>
          </div>

          <ol className="mt-12 space-y-6">
            {tricks.map((trick) => (
              <li
                key={trick.number}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                  <div className="flex sm:w-40 sm:shrink-0">
                    <span className="font-mono text-4xl font-bold text-primary">
                      {trick.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold md:text-2xl">
                      {trick.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {trick.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fake tricks warning */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Tricks that are actually scams
            </h2>
            <p className="mt-3 text-muted-foreground">
              If you see any of these, close the tab. They do not work, and
              the people selling them know it.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="text-lg font-bold text-red-400">
                Predictor apps and bots
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Apps claiming to predict the crash point use the publicly
                visible round history to generate plausible-looking guesses.
                Since each round is independent, history tells you nothing
                about the next crash. We tested them. They are random.
              </p>
            </div>
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="text-lg font-bold text-red-400">
                Telegram and Discord signal groups
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Signal groups run the same scam at scale. They post winning
                predictions after the fact and delete the misses, creating
                an illusion of accuracy. Their real goal is affiliate
                revenue from the casino they push you toward.
              </p>
            </div>
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="text-lg font-bold text-red-400">
                Martingale and doubling systems
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Doubling your bet after every loss eventually hits the table
                limit or your bankroll limit, at which point you lose
                everything staked. The house edge makes Martingale a net
                loser over time, guaranteed.
              </p>
            </div>
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="text-lg font-bold text-red-400">
                Hacked or modded Aviator clients
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Downloads claiming to be hacked versions of Aviator are
                malware. At best they steal your casino credentials. At
                worst they compromise your entire device. There is no client
                you can modify to change a server-side provably fair result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Aviator tricks, questioned
          </h2>
          <p className="mt-3 text-muted-foreground">
            Straight answers about what works, what does not, and how to
            spot a scam.
          </p>

          <div className="mt-10 space-y-4">
            {tricksFaqs.map((faq) => (
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

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Want the full strategy framework?
              </h2>
              <p className="mt-2 text-muted-foreground">
                These tricks are the short version. The strategy hub goes
                deeper into bankroll math, multiplier odds, and the
                principles behind every tip on this page.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/strategy"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Read the Strategy Hub
              </Link>
              <Link
                href="/how-to-play"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
              >
                How to Play
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(tricksFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
