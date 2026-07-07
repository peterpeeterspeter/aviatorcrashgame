import type { NextConfig } from "next";

const WP_REDIRECTS: Record<string, string> = {
  // High-traffic guides (from GA4 data)
  "/aviator-predictor-apps-bots-2025": "/guides/aviator-predictor-apps-truth",
  "/truth-about-aviator-patterns-2025": "/guides/aviator-patterns-explained",
  "/aviator-multiplier-guide-2025": "/guides/aviator-multiplier-guide",
  "/aviator-signals-decoded-guide-2025": "/guides/aviator-signals-explained",
  "/aviator-crash-game-guide-2025": "/how-to-play",
  "/aviator-crash-point-prediction-guide-2025": "/guides/aviator-predictor-apps-truth",
  "/aviator-game-strategy-2025": "/guides/aviator-strategy-tips",
  "/aviator-game-strategy-2025-6": "/guides/aviator-strategy-tips",
  "/aviator-game-strategy-2025-5": "/guides/aviator-strategy-tips",
  "/proven-aviator-strategies-guide-2025": "/guides/aviator-strategy-tips",
  "/aviator-legit-safety-guide-2025": "/guides/aviator-provably-fair",
  "/aviator-casino-bonuses": "/casinos",
  "/best-aviator-casinos-2026": "/casinos",
  "/aviator-vs-jetx-vs-spaceman-crash-games-compared": "/guides/aviator-vs-jetx-vs-spaceman",
  "/play-aviator-real-money-deposits-withdrawals": "/guides/aviator-bankroll-management",
  "/aviator-game-rtp-house-edge": "/guides/aviator-rtp-house-edge",
  "/aviator-mobile-best-apps-sites-phone": "/how-to-play",
  "/aviator-tips-for-beginners-starter-guide": "/guides/aviator-common-mistakes",
  "/aviator-netherlands-belgium-guide": "/how-to-play",
  "/how-to-win-with-online-casinos": "/guides/aviator-strategy-tips",
  "/reviews": "/casinos",
  "/main-home": "/",
  "/home-bookmakers": "/casinos",
  "/bookmakers": "/casinos",
  "/category/casino-affiliate": "/guides",
  "/tag/tips": "/guides",
  "/slots-launch-games": "/casinos",
  "/lottery": "/casinos",
};

const nextConfig: NextConfig = {
  transpilePackages: ["@base-ui/react", "motion"],
  async redirects() {
    return [
      // Handle trailing-slash versions of all WP URLs
      ...Object.entries(WP_REDIRECTS).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      ...Object.entries(WP_REDIRECTS).map(([source, destination]) => ({
        source: `${source}/`,
        destination,
        permanent: true,
      })),
      // Catch-all for /category/* and /tag/* WordPress archives
      {
        source: "/category/:slug*",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/guides",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
