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
  bestFor: string;
}

export const casinos: Casino[] = [
  {
    slug: "cybet",
    name: "Cybet",
    tagline: "Crypto-Only, Very Low Minimum Deposit",
    rating: 4.2,
    bonus: "Reported: 100% up to $500 + 50 Free Spins",
    minDeposit: "$1 (crypto only, reported)",
    payouts: "Crypto only; no fiat option (reported)",
    license: "Anjouan (Comoros), offshore",
    affiliateSlug: "cybet",
    revShare: "50% Revenue Share",
    pros: [
      "Very low $1 minimum deposit (reported)",
      "Advertises no-KYC signup",
      "Crash games lobby with Aviator",
      "10+ cryptocurrencies supported (reported)",
    ],
    cons: [
      "Offshore Anjouan license, a weaker protection tier than Curacao",
      "Crypto-only: no card or bank payments (reported)",
      "Name confusion with a similarly named Cyprus-licensed operator; check you are on the intended site",
      "Aviator's bonus contribution not confirmed in public terms",
    ],
    aviatorNotes:
      "Cybet is a crypto-only casino (launched 2024, Anjouan offshore license) with Aviator in its crash games lobby and a reported $1 minimum deposit. Independent reviews report a 100% up to $500 + 50 free spins welcome offer; we could not re-check the live offer today, so confirm it on the site. Note the reported name-confusion risk with a similarly named Cyprus-licensed operator.",
    wageringContribution:
      "Aviator contribution not confirmed; check the current bonus terms",
    review:
      "Cybet is a crypto-only casino launched in 2024 under an offshore Anjouan (Comoros) license, a weaker protection tier than the Curacao licenses common on this list. Independent reviews (July 2026) report a 100% up to $500 + 50 free spins welcome offer, a $1 minimum deposit, no fiat payments and no-KYC signup; we could not re-verify the live offer on 29 October 2026, so treat these as reported figures and confirm on the site. Aviator is easy to find in the crash games lobby. One caution: a similarly named, separately licensed Cyprus operator exists, so double-check you are on the intended site before depositing.",
    paymentMethods: ["Bitcoin", "Ethereum", "USDT", "10+ cryptocurrencies (reported)"],
    established: "2024",
    games: "1,000+ (reported)",
    accentColor: "#10b981",
    rank: 4,
    bestFor: "Crypto-first players who want the lowest possible minimum deposit",
  },
  {
    slug: "bitstarz",
    name: "BitStarz",
    tagline: "Best Overall for Aviator Players",
    rating: 4.7,
    bonus: "100% up to 5 BTC + 180 Free Spins",
    minDeposit: "$20",
    payouts: "Fast crypto payouts (advertised)",
    license: "Curacao eGaming",
    affiliateSlug: "bitstarz",
    revShare: "25% NGR",
    pros: [
      "Operating since 2014 with a strong public track record",
      "Advertises very fast crypto withdrawals",
      "Large game library alongside Aviator",
      "Crypto and card payments",
    ],
    cons: [
      "Crash games may count at a reduced rate toward bonus wagering; confirm for Aviator",
      "Higher minimum deposit than some competitors (advertised $20)",
    ],
    aviatorNotes:
      "BitStarz is one of the most established crypto casinos and lists SPRIBE's Aviator in its instant games section. If you plan to play through a bonus on Aviator, check the current bonus terms first: crash games often contribute at a reduced rate, so many players clear bonuses on slots and play Aviator with their cash balance.",
    wageringContribution:
      "Reduced rate for crash games per published terms; confirm Aviator's rate before claiming",
    review:
      "BitStarz is a household name in crypto gambling, operating since 2014 with a strong public reputation and industry awards. It advertises very fast crypto withdrawal processing, and Aviator sits in its instant games section. The main consideration for Aviator players is bonus wagering: crash games generally contribute at a reduced rate, so check the current terms before opting in. The advertised minimum deposit is higher than some competitors.",
    paymentMethods: ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash", "Dogecoin", "Visa", "Mastercard"],
    established: "2014",
    games: "6,000+",
    accentColor: "#f59e0b",
    rank: 1,
    bestFor: "Players who value a long track record and advertised fast cashouts",
  },
  {
    slug: "mirax",
    name: "Mirax",
    tagline: "Best Design and Promotions",
    rating: 4.6,
    bonus: "325% up to $1,500 + 150 Free Spins",
    minDeposit: "$10",
    payouts: "Fast crypto payouts (advertised)",
    license: "Curacao eGaming",
    affiliateSlug: "mirax",
    revShare: "25-45%",
    pros: [
      "Modern, polished interface",
      "Large multi-deposit welcome package (advertised)",
      "Recurring promotions for returning players (advertised)",
      "Smooth mobile experience",
    ],
    cons: [
      "Crash-game bonus contribution not confirmed in public terms",
      "Welcome package split across four deposits",
    ],
    aviatorNotes:
      "Mirax offers one of the most polished casino interfaces around and lists Aviator in its instant games collection. The advertised four-part welcome package gives new players plenty to explore. Confirm how Aviator counts toward wagering in the current terms before building your plan around the bonus.",
    wageringContribution:
      "Aviator contribution not confirmed; check the current bonus terms",
    review:
      "Mirax Casino stands out for its design quality: a clean, responsive interface that makes finding Aviator easy. The advertised welcome package is split across four deposits, each with a percentage match and free spins, and the casino promotes recurring reload offers for returning players. Crypto, card and e-wallet payments are supported. Check the current bonus terms for Aviator's wagering contribution before opting in.",
    paymentMethods: ["Bitcoin", "Ethereum", "USDT", "Litecoin", "Visa", "Mastercard", "Skrill"],
    established: "2022",
    games: "7,000+",
    accentColor: "#8b5cf6",
    rank: 2,
    bestFor: "Players who want a modern interface and ongoing promotions",
  },
  {
    slug: "7bit",
    name: "7Bit",
    tagline: "Transparent BTC Bonus Terms",
    rating: 4.5,
    bonus: "100% up to 1.5 BTC + 100 Free Spins",
    minDeposit: "$10",
    payouts: "Fast crypto payouts (advertised)",
    license: "Curacao eGaming",
    affiliateSlug: "7bit",
    revShare: "25-45%",
    pros: [
      "Operating since 2014 with a long track record",
      "Unusually detailed public BTC bonus terms",
      "Crypto and fiat accepted",
      "Large game library including multiple crash titles",
    ],
    cons: [
      "Published terms apply 3x turnover on ordinary deposits before withdrawal",
      "Promotions exclude Belgium and other listed markets (published terms)",
      "Interface feels less modern than newer casinos",
    ],
    aviatorNotes:
      "7Bit lists Aviator alongside other crash titles like JetX. Its published bonus terms (verified 29 October 2026) confirm the first-deposit offer of 100% up to 1.5 BTC plus 100 free spins at 35x wagering with 14-day expiry. Those terms give video slots full contribution and all other games 5% without naming Aviator, so treat the bonus as a slots offer unless support confirms otherwise.",
    wageringContribution:
      "Published terms: slots full, all other games 5%; Aviator not named (verified 29 Oct 2026)",
    review:
      "7Bit Casino has operated since 2014 and offers a large game library with Aviator in the instant games section. Its public bonus terms are unusually specific and were re-verified on 29 October 2026: the first-deposit offer is 100% up to 1.5 BTC plus 100 free spins, 35x wagering, 14-day expiry, with video slots at full contribution and all other games at 5% (Aviator is not named). Two clauses worth knowing: ordinary deposits carry 3x turnover before withdrawal, and the promotion terms exclude Belgium and other listed markets. Crypto and fiat payments are both supported.",
    paymentMethods: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "Bitcoin Cash", "Visa", "Mastercard"],
    established: "2014",
    games: "4,000+",
    accentColor: "#3b82f6",
    rank: 3,
    bestFor: "Players who want detailed, readable BTC bonus terms",
  },
  {
    slug: "trustdice",
    name: "TrustDice",
    tagline: "Privacy-First, Provably Fair",
    rating: 4.4,
    bonus: "100% up to 3 BTC + 25 Free Spins (no deposit)",
    minDeposit: "$1",
    payouts: "Fast crypto payouts (advertised)",
    license: "Curacao eGaming",
    affiliateSlug: "trustdice",
    revShare: "30% Revenue Share",
    pros: [
      "Advertises no-KYC signup with just an email",
      "SPRIBE Aviator plus an in-house provably fair crash game",
      "TXT token rewards on every bet (advertised)",
      "Very low $1 minimum deposit (advertised)",
    ],
    cons: [
      "Crypto-only: no fiat withdrawal option",
      "Smaller game selection than larger competitors",
    ],
    aviatorNotes:
      "TrustDice suits players who value privacy: it advertises account creation without identity verification. Alongside SPRIBE's Aviator it runs its own provably fair crash game where you can verify each round. The advertised TXT token system adds a small reward on every bet.",
    wageringContribution:
      "Aviator contribution not confirmed; check the current bonus terms",
    review:
      "TrustDice appeals to players who prioritize privacy and verifiable fairness. It advertises signup with just an email and no identity verification, and offers both SPRIBE's Aviator and its own provably fair crash game where each round can be checked independently. The advertised TXT token system rewards every bet. It is crypto-only: there is no fiat withdrawal option, and the overall game selection is smaller than the bigger brands.",
    paymentMethods: ["Bitcoin", "Ethereum", "EOS", "USDT", "Litecoin"],
    established: "2018",
    games: "1,500+",
    accentColor: "#06b6d4",
    rank: 5,
    bestFor: "Privacy-focused players comfortable with crypto only",
  },
  {
    slug: "betfury",
    name: "BetFury",
    tagline: "Token Cashback on Every Bet",
    rating: 4.3,
    bonus: "Up to $1,000 + 200 Free Spins across 3 deposits",
    minDeposit: "$5",
    payouts: "Crypto payouts; security reviews can apply (published terms)",
    license: "Curacao eGaming",
    affiliateSlug: "betfury",
    revShare: "20% NGR",
    pros: [
      "SPRIBE Aviator confirmed in the public game catalog",
      "BFG token cashback on every bet (documented in its terms)",
      "Low advertised $5 minimum deposit",
      "Published 1x ordinary turnover on crypto deposits (terms, 28 Sep 2026)",
    ],
    cons: [
      "Published terms restrict the Netherlands, Belgium, UK, US and other markets",
      "Withdrawal security reviews can take seven days or longer (published terms)",
    ],
    aviatorNotes:
      "BetFury lists SPRIBE's Aviator in its public catalog and layers a documented BFG token system on top: every bet earns tokens, and staking them pays a share of the platform's daily revenue. Its published terms apply 1x ordinary turnover to crypto deposits. Important: its terms expressly restrict the Netherlands, Belgium, the UK and the US, so it is only an option where both local law and the operator permit it.",
    wageringContribution:
      "Welcome FAQ documents 40x for eligible Slots/Live games; Aviator contribution not confirmed",
    review:
      "BetFury is a crypto-native casino built around its BFG token economy: every bet, including Aviator rounds, earns tokens that can be staked for a share of daily platform revenue (documented in its public terms, 28 September 2026). Its terms also state 1x ordinary turnover on crypto deposits, lower than several competitors. The trade-offs are equally documented: withdrawal security reviews can run seven days or longer, and the terms expressly restrict the Netherlands, Belgium, the UK and the US among other markets. Only consider it where you are permitted to play.",
    paymentMethods: ["Bitcoin", "Ethereum", "USDT", "TRON", "BNB", "Litecoin"],
    established: "2020",
    games: "6,000+",
    accentColor: "#ec4899",
    rank: 6,
    bestFor: "Regular players who like token cashback, outside restricted markets",
  },
  {
    slug: "1xpartners",
    name: "1xBet",
    tagline: "Sportsbook and Casino Combined",
    rating: 4.1,
    bonus: "Welcome package varies by region (advertised)",
    minDeposit: "$1",
    payouts: "Varies by payment method",
    license: "Curacao eGaming",
    affiliateSlug: "1xpartners",
    revShare: "25%",
    pros: [
      "Aviator plus a wide range of other crash-style games",
      "Very low $1 minimum deposit (advertised)",
      "Combined sportsbook and casino in one account",
      "Dozens of localized payment methods",
    ],
    cons: [
      "Withdrawal speed varies by payment method; check yours before depositing",
      "Busy interface takes some getting used to",
    ],
    aviatorNotes:
      "1xBet offers Aviator alongside a wide range of other crash-style games, and its very low advertised minimum deposit makes it easy to start small. Verify withdrawal times for your specific payment method before depositing larger amounts.",
    wageringContribution:
      "Varies by promotion; check the terms of each offer",
    review:
      "1xBet is one of the largest gambling platforms globally, combining an extensive sportsbook with a big casino. Aviator players get a wide selection of crash-style games, and the platform supports dozens of payment methods including many regional options. The main drawbacks are a busy interface and withdrawal speeds that vary by payment method, so confirm yours before depositing.",
    paymentMethods: ["Bitcoin", "USDT", "Visa", "Mastercard", "Skrill", "Neteller", "Bank Transfer", "50+ local methods"],
    established: "2007",
    games: "10,000+",
    accentColor: "#84cc16",
    rank: 7,
    bestFor: "Players who want one account for sportsbook and casino",
  },
];

export function getCasinoBySlug(slug: string): Casino | undefined {
  return casinos.find((c) => c.slug === slug);
}
