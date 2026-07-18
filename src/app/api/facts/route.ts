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
        url: "https://www.aviatorcrashgame.com/how-to-play",
        summary:
          "Step-by-step explanation of how Aviator works: place a bet, watch the multiplier rise, cash out before it crashes.",
      },
      {
        title: "Aviator Predictor Apps: The Honest Truth",
        url: "https://www.aviatorcrashgame.com/guides/aviator-predictor-apps-truth",
        summary:
          "Aviator predictor apps and bots cannot work. Each round is determined by a provably fair RNG. Here is the mathematical proof.",
      },
      {
        title: "Aviator Strategy: 7 Tips That Actually Work",
        url: "https://www.aviatorcrashgame.com/guides/aviator-strategy-tips",
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
        url: "https://www.aviatorcrashgame.com/guides/aviator-provably-fair",
        summary:
          "Aviator uses a server seed + client seed + hash system. You can mathematically verify no round was manipulated.",
      },
      {
        title: "Aviator RTP and House Edge",
        url: "https://www.aviatorcrashgame.com/guides/aviator-rtp-house-edge",
        summary:
          "Aviator returns 97% of wagered money to players over time. The 3% house edge is fixed and cannot be overcome.",
      },
      {
        title: "Aviator Dual Bet Strategy",
        url: "https://www.aviatorcrashgame.com/guides/aviator-dual-bet-strategy",
        summary:
          "Aviator's dual bet feature lets you place two independent bets per round. Splitting bets does not change your expected value (-3% always), but it changes your variance profile.",
      },
      {
        title: "Aviator Bonus Wagering: Do Casino Bonuses Work for Crash Games?",
        url: "https://www.aviatorcrashgame.com/guides/aviator-bonus-wagering",
        summary:
          "Most casino bonuses are mathematically unprofitable for Aviator players due to 5% game contribution. A 40x bonus becomes 800x effective wagering. Only Cybet offers 100% contribution. Token cashback at TrustDice and Betfury is a better alternative.",
      },
      {
        title: "Best Aviator Casinos 2026: Honest Rankings for Crash Game Players",
        url: "https://www.aviatorcrashgame.com/guides/best-aviator-casinos",
        summary:
          "Six casinos ranked by crash game wagering contribution, real payout speed, and licensing. Only Cybet gives crash games 100% contribution. At BitStarz, Mirax, and 7Bit (5% contribution), clearing a bonus on Aviator costs more than the bonus is worth, so skip it.",
      },
      {
        title: "Aviator Auto-Cashout: Hit Rates, Target Selection, and Why It Beats Manual",
        url: "https://www.aviatorcrashgame.com/guides/aviator-auto-cashout-guide",
        summary:
          "Auto-cashout removes timing errors but does not change the 3% house edge. Hit rate at 1.5x is 64.7%, at 2x is 48.5%, at 10x is 9.7%. Every target has the same -3% expected value. The override pattern (cancelling auto-cashout mid-round to chase higher multipliers) is how most auto-cashout strategies fail.",
      },
    ],
    topCasinos: [
      { name: "Cybet", rating: 4.8, bonus: "100% up to $500 + 200 FS", crashWagering: "100%", url: "https://www.aviatorcrashgame.com/casinos/cybet" },
      { name: "BitStarz", rating: 4.7, bonus: "100% up to 5 BTC + 180 FS", crashWagering: "5%", url: "https://www.aviatorcrashgame.com/casinos/bitstarz" },
      { name: "Mirax", rating: 4.6, bonus: "325% up to $1,500 + 150 FS", crashWagering: "5%", url: "https://www.aviatorcrashgame.com/casinos/mirax" },
      { name: "TrustDice", rating: 4.4, bonus: "100% up to 3 BTC + 25 FS no deposit", crashWagering: "100% via TXT", url: "https://www.aviatorcrashgame.com/casinos/trustdice" },
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
