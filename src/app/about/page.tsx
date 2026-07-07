import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Us - Our Review Methodology",
  description:
    "Learn how we review Aviator casinos and write our guides. Our methodology, rating criteria, and editorial standards.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">About Aviator Crash Games</h1>

      <div className="prose mt-8 max-w-none">
        <p className="text-lg text-muted-foreground">
          We built this site because most Aviator content online is noise.
          Predictor apps that do not work, signal groups that charge for random
          guesses, and casino reviews that hide the real bonus terms.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Our Mission</h2>
        <p className="mt-3 text-muted-foreground">
          To give beginners accurate, honest information about how Aviator crash
          games work. We explain the math, expose the scams, and review casinos
          based on what actually matters to players, not just which affiliate
          program pays the most.
        </p>

        <h2 className="mt-10 text-2xl font-bold">How We Review Casinos</h2>
        <p className="mt-3 text-muted-foreground">
          Every casino on this site is evaluated against four criteria:
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold">1. Licensing and Regulation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We only recommend casinos with a valid gambling license from a
              recognized authority (Curacao, Malta, UK, or equivalent). We verify
              the license number against the regulator database.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold">2. Payout Speed</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We test actual withdrawal times using real accounts. Casinos that
              advertise "instant" but take 48 hours get marked down. We report
              the real numbers.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold">3. Bonus Fairness</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We read the full terms and conditions, including the fine print on
              wagering contributions. Most casinos hide that crash games count
              only 5% toward wagering. We disclose this for every casino.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold">4. Aviator Quality</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Does the casino offer the real Spribe Aviator game (not a clone)?
              Is it easy to find? Does it run smoothly on mobile? Do they offer
              auto-cashout and round history?
            </p>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-bold">Affiliate Disclosure</h2>
        <p className="mt-3 text-muted-foreground">
          This site earns commission through affiliate links when players sign
          up at recommended casinos. This does not affect our ratings or
          recommendations. We have turned down partnerships with casinos that
          did not meet our standards, even when they offered higher commission
          rates.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Responsible Gambling</h2>
        <p className="mt-3 text-muted-foreground">
          Aviator is a gambling game with a built-in house edge. Over time, you
          will lose money. Never gamble with money you cannot afford to lose. If
          gambling is affecting your life, seek help:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="https://www.begambleaware.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              BeGambleAware.org
            </a>
          </li>
          <li>
            <a href="https://www.gamcare.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              GamCare.org.uk
            </a>
          </li>
          <li>
            <a href="https://www.gamblersanonymous.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              GamblersAnonymous.org
            </a>
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold">Contact</h2>
        <p className="mt-3 text-muted-foreground">
          Questions, corrections, or feedback? Reach out through our contact
          page. We respond to every legitimate inquiry.
        </p>
      </div>
    </div>
  );
}
