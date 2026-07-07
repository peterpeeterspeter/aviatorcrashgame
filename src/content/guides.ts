export interface GuideSummary {
  slug: string;
  title: string;
  description: string;
  category: "basics" | "strategy" | "casinos" | "safety";
  readingTime: string;
  excerpt: string;
  keywords: string[];
}

export const guides: GuideSummary[] = [
  {
    slug: "how-to-play-aviator",
    title: "How to Play Aviator: Complete Beginner Guide",
    description:
      "Everything a complete beginner needs to know about Aviator. How the game works, how to place bets, when to cash out, and the basic mechanics explained in plain language.",
    category: "basics",
    readingTime: "8 min",
    excerpt:
      "Aviator is a crash game where a multiplier rises from 1.00x and you must cash out before it crashes. Learn the exact mechanics, bet placement, and auto-cashout in this step-by-step guide.",
    keywords: ["how to play aviator", "aviator beginner", "aviator rules"],
  },
  {
    slug: "aviator-strategy-tips",
    title: "Aviator Strategy: 7 Tips That Actually Work",
    description:
      "Practical, honest strategies for Aviator players. No fake hacks or predictor apps, just bankroll management, auto-cashout discipline, and risk control techniques.",
    category: "strategy",
    readingTime: "10 min",
    excerpt:
      "There is no way to predict when Aviator crashes. But there are real strategies that help you manage risk and extend your bankroll. Here are seven that actually work.",
    keywords: ["aviator strategy", "aviator tips", "how to win aviator"],
  },
  {
    slug: "aviator-predictor-apps-truth",
    title: "Aviator Predictor Apps: The Honest Truth",
    description:
      "Do Aviator predictor apps and bots actually work? We tested the most popular ones. Spoiler: they do not work, and here is the math that proves it.",
    category: "safety",
    readingTime: "7 min",
    excerpt:
      "Aviator predictor apps promise to tell you when to cash out. They cannot work because each round is determined by a provably fair random number generator. Here is why they fail and what to do instead.",
    keywords: ["aviator predictor", "aviator hack", "aviator bot"],
  },
  {
    slug: "aviator-patterns-explained",
    title: "Aviator Patterns: What the Data Actually Shows",
    description:
      "Players spend hours looking for patterns in Aviator results. We analyzed 10,000 rounds of crash data to see if any pattern holds up to scrutiny.",
    category: "strategy",
    readingTime: "9 min",
    excerpt:
      "After analyzing thousands of Aviator rounds, the data is clear: there are no exploitable patterns. Each round is independent. But understanding the distribution of crash points can help you set realistic cashout targets.",
    keywords: ["aviator patterns", "aviator results", "crash game data"],
  },
  {
    slug: "aviator-multiplier-guide",
    title: "Aviator Multipliers Explained: Your Odds at Every Level",
    description:
      "What are the actual odds of hitting 2x, 5x, 10x, or 100x in Aviator? We break down the multiplier distribution and show you the math behind the game.",
    category: "strategy",
    readingTime: "6 min",
    excerpt:
      "The chance of hitting 2x in Aviator is about 49%. For 10x, it drops to under 5%. Understanding these probabilities is the foundation of any sound strategy.",
    keywords: ["aviator multiplier", "aviator odds", "crash multiplier"],
  },
  {
    slug: "aviator-signals-explained",
    title: "Aviator Signals: Are Telegram Signal Groups Legit?",
    description:
      "Telegram groups and Discord servers sell Aviator signals that claim to predict crashes. We investigated what these signals actually do and why you should be cautious.",
    category: "safety",
    readingTime: "6 min",
    excerpt:
      "Aviator signal groups on Telegram and Discord charge fees for crash predictions that are statistically indistinguishable from random guessing. Here is how they operate and why they cannot deliver.",
    keywords: ["aviator signals", "aviator telegram", "aviator predictions"],
  },
  {
    slug: "aviator-provably-fair",
    title: "Provably Fair: How to Verify Every Aviator Round",
    description:
      "Aviator uses a provably fair system that lets you verify each round was not manipulated. Learn how the server seed, client seed, and hash work together.",
    category: "safety",
    readingTime: "8 min",
    excerpt:
      "Provably fair technology means you can mathematically verify that no Aviator round was rigged. We walk through the seed system and show you how to check any round yourself.",
    keywords: ["aviator provably fair", "aviator rigged", "verify aviator"],
  },
  {
    slug: "aviator-rtp-house-edge",
    title: "Aviator RTP and House Edge: What Every Player Should Know",
    description:
      "Aviator has a 97% RTP, meaning the house edge is 3%. Learn what this means in practice and how it compares to other casino games.",
    category: "basics",
    readingTime: "7 min",
    excerpt:
      "Aviator returns 97% of wagered money to players over time. This is better than most slots (96%) and comparable to European roulette (97.3%). Here is how the house edge affects your sessions.",
    keywords: ["aviator rtp", "aviator house edge", "aviator return"],
  },
  {
    slug: "aviator-common-mistakes",
    title: "7 Beginner Mistakes That Drain Your Aviator Bankroll",
    description:
      "New Aviator players lose money in predictable ways. Here are the seven most common mistakes and exactly how to avoid each one.",
    category: "basics",
    readingTime: "8 min",
    excerpt:
      "Chasing losses, ignoring auto-cashout, betting too much per round, and trusting predictor apps are the top reasons beginners go broke. Here is how to avoid each trap.",
    keywords: ["aviator mistakes", "aviator bankroll", "aviator tips"],
  },
  {
    slug: "aviator-bankroll-management",
    title: "Aviator Bankroll Management: How to Budget for Crash Games",
    description:
      "The single most important skill in Aviator is not timing your cashout, it is managing your money. Learn the 5% rule, session limits, and stop-loss strategy.",
    category: "strategy",
    readingTime: "9 min",
    excerpt:
      "No strategy beats the house edge long-term. But bankroll management is what determines how long you get to play and how often you walk away with money left.",
    keywords: ["aviator bankroll", "crash game budget", "aviator money management"],
  },
  {
    slug: "aviator-glossary",
    title: "Aviator Glossary: Every Term Beginners Need to Know",
    description:
      "Multiplier, crash, auto-cashout, provably fair, server seed. Definitions for every Aviator and crash game term in plain English.",
    category: "basics",
    readingTime: "5 min",
    excerpt:
      "From auto-cashout to wagering contribution, here is a plain-English reference for every term you will encounter playing Aviator.",
    keywords: ["aviator terms", "aviator glossary", "crash game vocabulary"],
  },
  {
    slug: "aviator-vs-jetx-vs-spaceman",
    title: "Aviator vs JetX vs Spaceman: Crash Games Compared",
    description:
      "Aviator, JetX, and Spaceman are the three most popular crash games. We compare RTP, multipliers, features, and where to play each one.",
    category: "strategy",
    readingTime: "8 min",
    excerpt:
      "All three crash games share the same core mechanic, but they differ in RTP, maximum multipliers, visual style, and availability. Here is how they stack up.",
    keywords: ["aviator vs jetx", "crash games compared", "spaceman crash game"],
  },
];

export function getGuideBySlug(slug: string): GuideSummary | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: GuideSummary["category"]): GuideSummary[] {
  return guides.filter((g) => g.category === category);
}
