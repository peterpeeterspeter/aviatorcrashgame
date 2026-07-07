"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChartLineUp,
  ShieldCheck,
  AirplaneTilt,
  Coins,
  Sparkle,
} from "@phosphor-icons/react";
import { casinos } from "@/content/casinos";
import { guides } from "@/content/guides";
import { CasinoCard } from "@/components/casino-card";
import { MultiplierCounter } from "@/components/multiplier-counter";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { Accordion } from "@/components/ui/accordion";
import { faqSchema } from "@/lib/seo";

const howItWorksSteps = [
  {
    icon: Coins,
    title: "Place Your Bet",
    description: "Choose your stake before each round. Bets start as low as $0.10.",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: AirplaneTilt,
    title: "Watch the Multiplier",
    description: "A multiplier rises from 1.00x. The longer you wait, the higher it goes.",
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ChartLineUp,
    title: "Cash Out in Time",
    description: "Hit cash out before the plane flies away. Miss it and you lose your bet.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

const faqs = [
  {
    question: "Is Aviator rigged or can it be trusted?",
    answer:
      "Aviator by Spribe uses a provably fair system. Each round is determined by a cryptographic random number generator that you can independently verify. The game holds a 97% RTP, meaning the house edge is 3%, which is comparable to European roulette. Reputable licensed casinos cannot alter the game outcome.",
  },
  {
    question: "Can I predict when Aviator will crash?",
    answer:
      "No. Each round is independent and random. Predictor apps, bots, and Telegram signal groups cannot predict crash points. If they could, the casinos would remove the game. We tested the most popular tools and they perform no better than random guessing.",
  },
  {
    question: "What is the best strategy for beginners?",
    answer:
      "Use auto-cashout at 1.5x or 2.0x for most of your bets. This gives you roughly a 50% win rate per round. Never bet more than 5% of your bankroll on a single round, and set a session loss limit before you start playing.",
  },
  {
    question: "Which casino is best for Aviator?",
    answer:
      "Cybet offers the best overall experience for Aviator players, with crash games contributing 100% toward bonus wagering and instant crypto payouts. BitStarz is the most trusted option with fast withdrawals, though crash games there contribute only 5% toward wagering.",
  },
  {
    question: "Can I play Aviator for free?",
    answer:
      "Yes. Most casinos offer a demo mode for Aviator where you play with virtual credits. You can also try our interactive demo on this site, which simulates the multiplier mechanic without any real money involved.",
  },
  {
    question: "How much money do I need to start?",
    answer:
      "The minimum bet per Aviator round is typically $0.10 to $0.20. We recommend starting with at least $50 to $100 so you have enough bankroll to weather variance. Never gamble with money you cannot afford to lose.",
  },
];

export default function HomePage() {
  const topCasinos = casinos.slice(0, 4);
  const featuredGuides = guides.slice(0, 5);

  return (
    <>
      {/* Hero - asymmetric split with background image */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background image - subtle */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-plane.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:pb-24 lg:pt-24">
          {/* Left: content */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Learn Aviator. <span className="text-primary">Win safer.</span>
            </h1>

            <p className="max-w-md text-lg text-muted-foreground">
              The complete beginner resource for Aviator crash games. Real
              strategy, honest casino reviews, and zero predictor-app nonsense.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/how-to-play"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Beginner Guide
                <ArrowRight size={18} weight="bold" />
              </Link>
              <Link
                href="/casinos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-semibold transition-colors hover:border-primary/50"
              >
                Browse Casinos
              </Link>
            </div>
          </div>

          {/* Right: live multiplier */}
          <div className="lg:pl-8">
            <MultiplierCounter />
          </div>
        </div>
      </section>

      {/* How it works - image + steps */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  How Aviator Works
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  Three steps. That is the entire game.
                </p>
              </div>
              {/* Visual */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/how-to-play.jpg"
                  alt="How the Aviator multiplier curve works"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {howItWorksSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <RevealItem key={step.title}>
                  <div className="relative flex h-full flex-col gap-4 bg-card p-8">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.bg} ${step.accent}`}>
                      <Icon size={24} weight="duotone" />
                    </div>
                    <div>
                      <span className="font-mono text-sm text-muted-foreground/60">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <Link
                href="/how-to-play"
                className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
              >
                Read the full beginner guide
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Top casinos */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Top Casinos for Beginners
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  Tested and ranked by payout speed, bonus fairness, and Aviator
                  availability.
                </p>
              </div>
              <Link
                href="/casinos"
                className="text-sm font-semibold text-primary hover:underline"
              >
                View all {casinos.length} casinos
              </Link>
            </div>
          </Reveal>

          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topCasinos.map((casino) => (
              <RevealItem key={casino.slug}>
                <CasinoCard casino={casino} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Featured guides - bento grid with real images */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Start Learning
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              From absolute basics to advanced strategy. Pick where you are.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* Large featured guide - image background */}
            <Reveal delay={0.1} className="md:col-span-2 md:row-span-1">
              <Link
                href={`/guides/${featuredGuides[0].slug}`}
                className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border border-border"
              >
                <Image
                  src="/images/guide-beginner.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
                <div className="relative p-8">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                    <Sparkle size={12} weight="fill" />
                    Most Popular
                  </span>
                  <h3 className="mt-4 max-w-md text-2xl font-bold">
                    {featuredGuides[0].title}
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    {featuredGuides[0].excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-primary">
                    Read guide
                    <ArrowRight
                      size={16}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* Second featured - image background */}
            <Reveal delay={0.2}>
              <Link
                href={`/guides/${featuredGuides[1].slug}`}
                className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border border-border"
              >
                <Image
                  src="/images/guide-predictor.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="relative p-6">
                  <h3 className="text-lg font-bold leading-tight">
                    {featuredGuides[1].title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                    {featuredGuides[1].readingTime}
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* Remaining guides */}
            {featuredGuides.slice(2, 5).map((guide, i) => (
              <Reveal key={guide.slug} delay={0.15 + i * 0.08}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="group flex h-full min-h-[120px] flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div>
                    <h3 className="text-base font-bold leading-tight">
                      {guide.title}
                    </h3>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                    {guide.readingTime}
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Questions Beginners Ask
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion items={faqs} className="mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Trust strip with responsible gambling image */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="grid items-center gap-6 rounded-2xl border border-border bg-card p-8 sm:grid-cols-[auto_1fr_auto]">
              {/* Shield image */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/images/responsible-gambling.jpg"
                  alt="Responsible gambling shield"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Independently reviewed</p>
                <p className="text-sm text-muted-foreground">
                  Every casino tested for licensing, payout speed, and fair
                  bonus terms. 18+ Play responsibly. Updated July 2026.
                </p>
              </div>
              <Link
                href="/about"
                className="text-sm font-semibold text-primary hover:underline"
              >
                About our methodology
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
    </>
  );
}
