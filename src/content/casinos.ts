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
    bonus: "Reported Oct 2026: 100% up to 1 BTC + 180 Free Spins (4-deposit package up to 5 BTC)",
    minDeposit: "$20 (reported)",
    payouts: "Crypto about 10 min after approval (reported)",
    license: "Curacao eGaming",
    affiliateSlug: "bitstarz",
    revShare: "25% NGR",
    pros: [
      "Operating since 2014; Curacao license reported verified August 2026",
      "Crypto payouts reported around 10 minutes after approval",
      "Large game library alongside Aviator",
      "Crypto and card payments",
    ],
    cons: [
      "Reported bonus terms: 40x wagering, 7-day expiry, non-slot games about 5% contribution (Aviator not named)",
      "Minimum deposit $20 (reported)",
    ],
    aviatorNotes:
      "BitStarz is one of the most established crypto casinos and lists SPRIBE's Aviator in its instant games section. Dated 2026 reviews report a 40x wagering requirement, 7-day expiry and about 5% contribution for non-slot games (Aviator not named), so treat the welcome package as a slots offer and play Aviator with your cash balance unless support confirms otherwise.",
    wageringContribution:
      "Reported Oct 2026: slots full, table/live/instant games about 5%; Aviator not named",
    review:
      "BitStarz is a household name in crypto gambling, operating since 2014. Dated 2026 reviews report an active Curacao license (Gareton B.V., OGL/2024/165/0185, checked August 2026), crypto withdrawals settling around 10 minutes after approval, and a four-deposit welcome package up to 5 BTC with 180 free spins on the first deposit (100% up to 1 BTC). The reported bonus terms are strict: 40x wagering, 7-day expiry, $5 maximum bet while clearing, and about 5% contribution for non-slot games, so Aviator play will barely clear a bonus. Minimum deposit is a reported $20. We could not re-check the live site on 29 October 2026; confirm the current offer before depositing.",
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
    bonus: "Reported 2026: 325% + 150 Free Spins (first deposit 100% up to 1.5 BTC)",
    minDeposit: "$20 (reported)",
    payouts: "Fast crypto payouts (advertised)",
    license: "Curacao eGaming",
    affiliateSlug: "mirax",
    revShare: "25-45%",
    pros: [
      "Modern, polished interface",
      "Reported 325% + 150 free spins welcome package at 35x wagering",
      "Recurring promotions for returning players (advertised)",
      "Smooth mobile experience",
    ],
    cons: [
      "Crash-game bonus contribution not confirmed; Aviator not named in reported terms",
      "Welcome package split across four deposits",
    ],
    aviatorNotes:
      "Mirax offers one of the most polished casino interfaces around and lists Aviator in its instant games collection. Dated 2026 reviews report a four-deposit welcome package totalling 325% plus 150 free spins at 35x wagering with 14-day expiry (first deposit 100% up to 1.5 BTC). Aviator's contribution is not confirmed in those reports, so check the current terms before building your plan around the bonus.",
    wageringContribution:
      "Reported 2026: 35x wagering on the welcome package; Aviator contribution not confirmed",
    review:
      "Mirax Casino stands out for its design quality: a clean, responsive interface that makes finding Aviator easy. Dated 2026 reviews (August-October) report a four-deposit welcome package totalling 325% plus 150 free spins, 35x wagering, 14-day expiry and a $20 minimum deposit, under a Curacao license (Scores55 Tech B.V.). The casino promotes recurring reload offers for returning players, and crypto, card and e-wallet payments are supported. We could not re-check the live site on 29 October 2026; confirm the current offer and Aviator's wagering contribution before opting in.",
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
    bonus: "Verified 29 Oct 2026: 100% up to 1.5 BTC + 100 Free Spins",
    minDeposit: "From 0.13 mBTC (published terms)",
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
    tagline: "Provably Fair Originals and Token Rewards",
    rating: 4.4,
    bonus: "Reported Oct 2026: up to 3 BTC + 100 Free Spins across 3 deposits",
    minDeposit: "$10 (reported)",
    payouts: "Crypto payouts, fast once approved (reported)",
    license: "Curacao eGaming",
    affiliateSlug: "trustdice",
    revShare: "30% Revenue Share",
    pros: [
      "SPRIBE Aviator plus an in-house provably fair crash game",
      "Daily crypto faucet and TXT token rewards (documented features)",
      "Reported welcome package up to 3 BTC + 100 free spins",
      "Curacao-licensed (reported October 2026)",
    ],
    cons: [
      "KYC may be required before withdrawal (reported)",
      "Reported welcome wagering is heavy (40x-60x across sources) with 7-day expiry",
      "Smaller game selection than larger competitors",
    ],
    aviatorNotes:
      "TrustDice combines SPRIBE's Aviator with its own provably fair crash game where you can verify each round, plus a documented faucet and TXT token reward system. Dated October 2026 reviews report a welcome package up to 3 BTC plus 100 free spins across three deposits, but with heavy wagering (40x-60x reported) and a 7-day expiry. Note: reviews report identity checks can be required before withdrawal, so do not count on fully anonymous play.",
    wageringContribution:
      "Reported Oct 2026: 40x-60x wagering on welcome stages; Aviator contribution not confirmed",
    review:
      "TrustDice pairs SPRIBE's Aviator with its own provably fair crash game, a daily crypto faucet and TXT token rewards. Dated October 2026 reviews report a Curacao license and a three-deposit welcome package up to 3 BTC plus 100 free spins, with heavy wagering (40x-60x depending on the source) and a 7-day expiry. Those same reviews note identity verification can be required before withdrawal, and some player complaints mention account freezes, so start small and finish checks early. It is crypto-only with no fiat withdrawal option. We could not re-check the live site on 29 October 2026.",
    paymentMethods: ["Bitcoin", "Ethereum", "EOS", "USDT", "Litecoin"],
    established: "2018",
    games: "1,500+",
    accentColor: "#06b6d4",
    rank: 5,
    bestFor: "Crypto players who value verifiable fairness and token rewards",
  },
  {
    slug: "betfury",
    name: "BetFury",
    tagline: "Token Cashback on Every Bet",
    rating: 4.3,
    bonus: "Multi-deposit welcome pack; see current offer card (amount not verified)",
    minDeposit: "$5",
    payouts: "Crypto payouts; security reviews can apply (published terms)",
    license: "Curacao eGaming",
    affiliateSlug: "betfury",
    revShare: "20% NGR",
    pros: [
      "SPRIBE Aviator confirmed in the public game catalog",
      "BFG token cashback on every bet (documented in its terms)",
      "Low minimum deposit (advertised $5)",
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
