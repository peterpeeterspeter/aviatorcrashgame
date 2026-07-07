export interface Casino {
  slug: string;
  name: string;
  tagline: string;
  rating: number;
  bonus: string;
  minDeposit: string;
  payouts: string;
  license: string;
  affiliateSlug: string;
  revShare: string;
  pros: string[];
  cons: string[];
  aviatorNotes: string;
  wageringContribution: string;
  review: string;
  paymentMethods: string[];
  established: string;
  games: string;
  accentColor: string;
  rank: number;
}

export const casinos: Casino[] = [
  {
    slug: "cybet",
    name: "Cybet",
    tagline: "Best Overall for Aviator Players",
    rating: 4.8,
    bonus: "100% up to $500 + 200 Free Spins",
    minDeposit: "$10",
    payouts: "Instant to 2 hours",
    license: "Curacao eGaming",
    affiliateSlug: "cybet",
    revShare: "50% Revenue Share",
    pros: [
      "Highest Aviator bonus match in the market",
      "Instant crypto withdrawals",
      "Dedicated crash game section",
      "24/7 live chat support",
    ],
    cons: [
      "Limited availability in some EU countries",
      "Wagering requirement is 40x",
    ],
    aviatorNotes:
      "Cybet features Aviator prominently in its crash games lobby with a minimum bet of $0.10. The welcome bonus is one of the few that applies to crash games at full contribution, making it the strongest choice for new Aviator players.",
    wageringContribution: "Crash games contribute 100% toward wagering",
    review:
      "Cybet has positioned itself as the go-to destination for crash game enthusiasts. The casino offers a clean, fast-loading interface with Aviator front and center in its game lobby. What sets Cybet apart is its generous bonus structure that actually works for Aviator players, unlike many competitors that exclude crash games from bonus wagering. Crypto deposits process instantly, and withdrawals are typically completed within two hours. The platform operates under a Curacao eGaming license, which is standard for crypto-focused casinos.",
    paymentMethods: ["Bitcoin", "Ethereum", "USDT", "Visa", "Mastercard", "Bank Transfer"],
    established: "2022",
    games: "4,000+",
    accentColor: "#10b981",
    rank: 1,
  },
  {
    slug: "bitstarz",
    name: "BitStarz",
    tagline: "Most Trusted, Fast Payouts",
    rating: 4.7,
    bonus: "100% up to 5 BTC + 180 Free Spins",
    minDeposit: "$20",
    payouts: "Instant to 10 minutes",
    license: "Curacao eGaming",
    affiliateSlug: "bitstarz",
    revShare: "25% NGR",
    pros: [
      "Multi-award winning casino (Best Casino 2024)",
      "Lightning-fast crypto withdrawals",
      "Provably fair games available",
      "Excellent reputation since 2014",
    ],
    cons: [
      "Crash games count only 5% toward wagering",
      "Higher minimum deposit than some competitors",
    ],
    aviatorNotes:
      "BitStarz is one of the most established crypto casinos and offers Aviator in its instant games section. While the welcome bonus is generous, be aware that crash games like Aviator contribute only 5% toward the wagering requirement. This means a 40x bonus effectively becomes 800x when playing Aviator. Cash out the bonus on slots first, then play Aviator with your real balance.",
    wageringContribution: "Crash games contribute 5% toward wagering (800x effective)",
    review:
      "BitStarz is a household name in crypto gambling, having won numerous industry awards since its launch in 2014. The casino is known for its remarkably fast withdrawal processing, with most crypto payouts completing in under 10 minutes. Aviator is available in the instant games section. The main consideration for Aviator players is the wagering contribution: crash games count only 5%, so we recommend clearing bonuses on slots first. The game itself runs smoothly with no lag on both desktop and mobile.",
    paymentMethods: ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash", "Dogecoin", "Visa", "Mastercard"],
    established: "2014",
    games: "6,000+",
    accentColor: "#f59e0b",
    rank: 2,
  },
  {
    slug: "mirax",
    name: "Mirax",
    tagline: "Best Design and Promotions",
    rating: 4.6,
    bonus: "325% up to $1,500 + 150 Free Spins",
    minDeposit: "$10",
    payouts: "Instant to 1 hour",
    license: "Curacao eGaming",
    affiliateSlug: "mirax",
    revShare: "25-45%",
    pros: [
      "Visually stunning, modern interface",
      "Massive multi-tier welcome package",
      "Weekly reload bonuses for Aviator players",
      "Fast mobile experience",
    ],
    cons: [
      "Crash games contribute 5% toward wagering",
      "Bonus split across 4 deposits",
    ],
    aviatorNotes:
      "Mirax offers one of the most polished casino interfaces available and includes Aviator in its instant games collection. The four-part welcome bonus gives players plenty of bonus funds to explore. As with most Curacao casinos, crash games contribute 5% toward wagering, so plan accordingly.",
    wageringContribution: "Crash games contribute 5% toward wagering",
    review:
      "Mirax Casino stands out for its exceptional design quality. The interface is clean, responsive, and makes finding Aviator effortless. The welcome package is split across four deposits, each offering a percentage match and free spins. Weekly promotions regularly include reload bonuses that active players can use on crash games. Withdrawals are processed quickly, typically within an hour for crypto users.",
    paymentMethods: ["Bitcoin", "Ethereum", "USDT", "Litecoin", "Visa", "Mastercard", "Skrill"],
    established: "2022",
    games: "7,000+",
    accentColor: "#8b5cf6",
    rank: 3,
  },
  {
    slug: "7bit",
    name: "7Bit",
    tagline: "Classic Crypto Casino",
    rating: 4.5,
    bonus: "100% up to 1.5 BTC + 100 Free Spins",
    minDeposit: "$10",
    payouts: "Instant to 2 hours",
    license: "Curacao eGaming",
    affiliateSlug: "7bit",
    revShare: "25-45%",
    pros: [
      "Established since 2014, strong track record",
      "4,000+ games including multiple crash titles",
      "Bitcoin and fiat accepted",
      "Regular tournaments with cash prizes",
    ],
    cons: [
      "Interface feels slightly dated",
      "Crash games contribute 5% toward wagering",
    ],
    aviatorNotes:
      "7Bit is a reliable choice for players who want a no-frills crypto casino experience. Aviator is available alongside other crash games like JetX and Crash X. The casino runs regular slot tournaments, though Aviator does not typically count toward tournament leaderboards.",
    wageringContribution: "Crash games contribute 5% toward wagering",
    review:
      "7Bit Casino is one of the older crypto casinos still operating, having launched in 2014. While the interface may not be as modern as Mirax, it makes up for it with reliability and a massive game library. Aviator players will find the game in the instant games section. The welcome bonus is straightforward, and the casino offers daily cashback for VIP players.",
    paymentMethods: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "Bitcoin Cash", "Visa", "Mastercard"],
    established: "2014",
    games: "4,000+",
    accentColor: "#3b82f6",
    rank: 4,
  },
  {
    slug: "trustdice",
    name: "TrustDice",
    tagline: "Provably Fair, No KYC",
    rating: 4.4,
    bonus: "100% up to 3 BTC + 25 Free Spins (no deposit)",
    minDeposit: "$1",
    payouts: "Instant",
    license: "Curacao eGaming",
    affiliateSlug: "trustdice",
    revShare: "30% Revenue Share",
    pros: [
      "No deposit free spins on signup",
      "Fully anonymous, no KYC required",
      "Provably fair crash game available",
      "Earn TXT tokens while playing",
    ],
    cons: [
      "Smaller game selection than competitors",
      "No fiat withdrawal option",
    ],
    aviatorNotes:
      "TrustDice is ideal for players who value privacy. The casino offers a provably fair crash game alongside the standard Aviator title. The no-deposit free spins let you try the platform before committing funds. TXT token rewards give cashback on every bet, including Aviator rounds.",
    wageringContribution: "Aviator contributes 100% via TXT staking rewards",
    review:
      "TrustDice appeals to players who prioritize anonymity and fairness. The casino does not require KYC verification, making signup as simple as providing an email. Beyond standard Aviator, TrustDice offers its own provably fair crash game where you can verify each round independently. The TXT token system provides a unique cashback layer: every bet earns tokens that can be staked for daily dividends from the casino's profit pool.",
    paymentMethods: ["Bitcoin", "Ethereum", "EOS", "USDT", "Litecoin"],
    established: "2018",
    games: "1,500+",
    accentColor: "#06b6d4",
    rank: 5,
  },
  {
    slug: "betfury",
    name: "BetFury",
    tagline: "Crypto Ecosystem and Cashback",
    rating: 4.3,
    bonus: "Up to $1,000 + 200 Free Spins across 3 deposits",
    minDeposit: "$5",
    payouts: "Instant to 30 minutes",
    license: "Curacao eGaming",
    affiliateSlug: "betfury",
    revShare: "20% NGR",
    pros: [
      "BFG token cashback on every Aviator bet",
      "Daily dividends from staking BFG",
      "Low minimum deposit of $5",
      "Integrated sportsbook and casino",
    ],
    cons: [
      "Bonus terms less favorable than Cybet",
      "Interface can feel busy for beginners",
    ],
    aviatorNotes:
      "BetFury integrates Aviator into a broader crypto ecosystem. Every Aviator bet earns BFG tokens at a rate of 0.03% of your wager. Staking these tokens gives you a share of the platform's daily profit. This effectively reduces the house edge over time, making it one of the better long-term options for regular Aviator players.",
    wageringContribution: "Aviator earns BFG cashback regardless of bonus status",
    review:
      "BetFury is a crypto-native casino that has built its own token economy around gambling. The BFG token system is the standout feature: every bet you place, including Aviator rounds, earns tokens that entitle you to daily dividends. For frequent Aviator players, this creates a meaningful cashback loop. The casino also features its own in-house crash game. The interface is feature-rich but may overwhelm complete beginners.",
    paymentMethods: ["Bitcoin", "Ethereum", "USDT", "TRON", "BNB", "Litecoin"],
    established: "2020",
    games: "6,000+",
    accentColor: "#ec4899",
    rank: 6,
  },
  {
    slug: "1xpartners",
    name: "1xBet",
    tagline: "Sportsbook and Casino Combined",
    rating: 4.1,
    bonus: "100% up to $100 (Sports) + Casino Bonus",
    minDeposit: "$1",
    payouts: "15 minutes to 24 hours",
    license: "Curacao eGaming",
    affiliateSlug: "1xpartners",
    revShare: "25%",
    pros: [
      "Huge selection of Aviator-style crash games",
      "Very low minimum deposit",
      "Combined sportsbook and casino",
      "Dozens of localized payment methods",
    ],
    cons: [
      "Withdrawal processing can be slow",
      "Interface is cluttered",
      "Customer support response times vary",
    ],
    aviatorNotes:
      "1xBet offers the widest variety of crash games of any operator, including Aviator, Lucky Jet, Crash, and several local variants. The low minimum deposit makes it accessible. However, verify withdrawal times for your specific payment method before depositing significant amounts.",
    wageringContribution: "Varies by promotion, check terms per bonus",
    review:
      "1xBet is one of the largest gambling platforms globally, combining an extensive sportsbook with a massive casino. Aviator players benefit from the widest selection of crash game variants available anywhere. The platform supports dozens of payment methods including many regional options. The main drawbacks are a cluttered interface and variable withdrawal speeds depending on your chosen payment method.",
    paymentMethods: ["Bitcoin", "USDT", "Visa", "Mastercard", "Skrill", "Neteller", "Bank Transfer", "50+ local methods"],
    established: "2007",
    games: "10,000+",
    accentColor: "#84cc16",
    rank: 7,
  },
];

export function getCasinoBySlug(slug: string): Casino | undefined {
  return casinos.find((c) => c.slug === slug);
}
