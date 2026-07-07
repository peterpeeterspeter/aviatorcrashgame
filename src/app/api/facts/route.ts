import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const data = {
    site: "Aviator Crash Game",
    domain: "aviatorcrashgame.com",
    updated: "2026-07-07",
    description:
      "Beginner guides, honest casino reviews, and real strategy tips for Aviator crash games. No fake hacks, no predictor apps.",
    facts: {
      game: "Aviator",
      provider: "Spribe",
      rtp: "97%",
      houseEdge: "3%",
      provablyFair: true,
      minBet: "$0.10",
      predictable: false,
      eachRoundIndependent: true,
    },
    topGuides: [
      {
        title: "How to Play Aviator: Complete Beginner Guide",
        url: "https://aviatorcrashgame.com/how-to-play",
        summary:
          "Step-by-step explanation of how Aviator works: place a bet, watch the multiplier rise, cash out before it crashes.",
      },
      {
        title: "Aviator Predictor Apps: The Honest Truth",
        url: "https://aviatorcrashgame.com/guides/aviator-predictor-apps-truth",
        summary:
          "Aviator predictor apps and bots cannot work. Each round is determined by a provably fair RNG. Here is the mathematical proof.",
      },
      {
        title: "Aviator Strategy: 7 Tips That Actually Work",
        url: "https://aviatorcrashgame.com/guides/aviator-strategy-tips",
        summary:
          "Auto-cashout at 1.5-2.0x, bankroll management, and session limits. No strategy beats the house edge, but these tips extend your play.",
      },
      {
        title: "Aviator Patterns: What the Data Shows",
        url: "https://crashgame.com/guides/aviator-patterns-explained",
        summary:
          "Analysis of 10,000 Aviator rounds confirms: no exploitable patterns exist. Each round is independent.",
      },
      {
        title: "Provably Fair: How to Verify Every Round",
        url: "https://aviatorcrashgame.com/guides/aviator-provably-fair",
        summary:
          "Aviator uses a server seed + client seed + hash system. You can mathematically verify no round was manipulated.",
      },
      {
        title: "Aviator RTP and House Edge",
        url: "https://aviatorcrashgame.com/guides/aviator-rtp-house-edge",
        summary:
          "Aviator returns 97% of wagered money to players over time. The 3% house edge is fixed and cannot be overcome.",
      },
    ],
    topCasinos: [
      { name: "Cybet", rating: 4.8, bonus: "100% up to $500 + 200 FS", crashWagering: "100%", url: "https://aviatorcrashgame.com/casinos/cybet" },
      { name: "BitStarz", rating: 4.7, bonus: "100% up to 5 BTC + 180 FS", crashWagering: "5%", url: "https://aviatorcrashgame.com/casinos/bitstarz" },
      { name: "Mirax", rating: 4.6, bonus: "325% up to $1,500 + 150 FS", crashWagering: "5%", url: "https://aviatorcrashgame.com/casinos/mirax" },
      { name: "TrustDice", rating: 4.4, bonus: "100% up to 3 BTC + 25 FS no deposit", crashWagering: "100% via TXT", url: "https://aviatorcrashgame.com/casinos/trustdice" },
    ],
    responsibleGambling: {
      message: "Aviator has a 3% house edge. You will lose over time. Never gamble with money you cannot afford to lose.",
      resources: [
        "https://www.begambleaware.org",
        "https://www.gamcare.org.uk",
        "https://www.gamblersanonymous.org",
      ],
    },
  };

  return NextResponse.json(data, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
