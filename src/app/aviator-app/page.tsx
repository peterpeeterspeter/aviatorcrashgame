import type { Metadata } from "next";
import Link from "next/link";
import { casinos } from "@/content/casinos";
import { affiliateHref } from "@/lib/affiliate-links";
import {
  constructMetadata,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Aviator App: Is There an Official App? (2026 Honest Guide)",
  description:
    "There is no official standalone Aviator app. Here is how to play Aviator safely on your phone, why third-party Aviator APK downloads are dangerous, and how to add a casino to your home screen.",
  path: "/aviator-app",
});

const appFaqs = [
  {
    question: "Is there an Aviator app?",
    answer:
      "No. There is no official standalone Aviator app from Spribe, the game's developer. Aviator is a game that runs inside licensed online casinos, so you play it in your phone's web browser by signing in to a casino that offers the game. Any app claiming to be the official Aviator app is not made by the developer and is not trustworthy.",
  },
  {
    question: "Can I download Aviator?",
    answer:
      "You cannot download Aviator itself. What you can do is add your casino's mobile website to your home screen, which creates an app-like icon that opens the game in a full-screen browser. This is the safe, legitimate way to get a one-tap Aviator shortcut on your phone, and it uses the same secure, licensed connection as the website.",
  },
  {
    question: "How do I play Aviator on my phone?",
    answer:
      "Open your mobile browser, go to a licensed casino that carries Aviator, sign in, and launch the game. Most modern casinos are mobile-optimized, so Aviator runs smoothly without any download. To make it feel like an app, use the Add to Home Screen option in your browser menu (Safari on iOS, Chrome on Android). This places an icon on your home screen that opens Aviator directly.",
  },
  {
    question: "Are Aviator APK downloads safe?",
    answer:
      "No. Aviator APK files offered by third-party sites are not official, are not reviewed by any app store, and frequently contain malware, adware, or phishing tools designed to steal your casino login or payment details. Because Android allows sideloading, these fake apps spread easily. Never install an Aviator APK. Play in your browser at a licensed casino instead.",
  },
];

export default function AviatorAppPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Aviator App", url: "/aviator-app" },
  ]);

  // Casinos well suited to mobile play
  const mobileCasinos = casinos
    .filter((c) =>
      ["cybet", "bitstarz", "betfury", "trustdice"].includes(c.slug),
    )
    .sort((a, b) => a.rank - b.rank);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-16 sm:px-6 lg:pb-20 lg:pt-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">Aviator App</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Updated July 2026
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Is there an Aviator app?
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Short answer: no. There is no official standalone Aviator app.
            Aviator is a browser game that runs inside licensed casinos, and any
            third-party &quot;Aviator app&quot; you are told to download is a
            scam risk. Here is how to play safely on your phone instead.
          </p>
        </div>
      </section>

      {/* The truth about Aviator apps */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              There is no official Aviator app
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Aviator is built by Spribe and distributed exclusively through
              licensed online casinos. Spribe does not sell or publish a
              separate mobile app on the App Store or Google Play. Every time
              you play Aviator, you are loading it inside a casino&apos;s website
              or in-casino web view. That is true on desktop, and it is true on
              mobile.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              So when a site offers an &quot;Aviator app download&quot; or an
              APK file, it is not the official product. It is something a third
              party built and is asking you to install on your phone. Treat all
              such offers with suspicion.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Why third-party Aviator apps are dangerous
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The most common version of the &quot;Aviator app&quot; scam is an
              Android APK. Because Android allows sideloading apps from outside
              the Play Store, scammers can distribute fake apps freely. These
              downloads are not reviewed by any store, and they regularly
              contain malware, aggressive adware, or phishing screens built to
              capture your casino username, password, and payment details.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Some fake apps simply mirror a casino login page to harvest
              credentials. Others run in the background and steal banking or
              wallet information. A few are paired with the classic{" "}
              <Link
                href="/strategy"
                className="font-semibold text-primary hover:underline"
              >
                Aviator predictor
              </Link>{" "}
              lie, telling you the app can predict crash points. It cannot.
              Aviator uses a provably fair RNG, and every round is independent.
              No app changes the outcome.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The rule is simple: if you have to download and install a file to
              play Aviator, it is not legitimate. Close it and walk away.
            </p>
          </div>
        </div>
      </section>

      {/* How to play on mobile */}
      <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The right way to play Aviator on your phone
            </h2>
            <p className="mt-3 text-muted-foreground">
              You do not need an app. Modern casinos are mobile-optimized, and
              most behave like progressive web apps, meaning Aviator loads fast,
              runs full screen, and feels native right in your browser.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                1
              </span>
              <h3 className="mt-4 text-lg font-bold">Open a licensed casino</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Go to a casino that carries Aviator in your phone&apos;s browser.
                Sign in or create an account. The game lives in the casino&apos;s
                instant games or crash section.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                2
              </span>
              <h3 className="mt-4 text-lg font-bold">Launch Aviator</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tap the game to load it. On a good mobile casino it runs smoothly
                over a normal data connection, with the same live multipliers and
                cash out controls as desktop.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                3
              </span>
              <h3 className="mt-4 text-lg font-bold">Add to Home Screen</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Use your browser&apos;s Add to Home Screen option to place an icon
                on your home screen. It opens Aviator in a clean, full-screen
                view, just like an app, with no download required.
              </p>
            </div>
          </div>

          {/* Add to home screen instructions */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold">Add to Home Screen on iOS</h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">1.</span>
                  <span>Open the casino in the Safari browser (Chrome on iOS cannot install web apps).</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2.</span>
                  <span>Tap the Share icon at the bottom of the screen.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">3.</span>
                  <span>Scroll down and tap &quot;Add to Home Screen.&quot;</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">4.</span>
                  <span>Tap Add. An icon appears on your home screen that opens the game full screen.</span>
                </li>
              </ol>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold">Add to Home Screen on Android</h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">1.</span>
                  <span>Open the casino in Chrome (or your default browser).</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2.</span>
                  <span>Tap the three-dot menu in the top right corner.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">3.</span>
                  <span>Tap &quot;Add to Home screen&quot; or &quot;Install app.&quot;</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">4.</span>
                  <span>Tap Add or Install. The icon launches Aviator in its own window.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-friendly casinos */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Mobile-friendly casinos for Aviator
            </h2>
            <p className="mt-3 text-muted-foreground">
              These casinos carry Aviator and perform well in a mobile browser.
              Each opens directly to the game with no app required. A lower
              minimum deposit makes them easier to try.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {mobileCasinos.map((casino) => (
              <div
                key={casino.slug}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/casinos/${casino.slug}`}
                      className="text-lg font-bold hover:text-primary hover:underline"
                    >
                      {casino.name}
                    </Link>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Min deposit {casino.minDeposit}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {casino.aviatorNotes}
                  </p>
                </div>
                <Link
                  href={affiliateHref(casino.affiliateSlug)}
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Play on Mobile
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Always confirm the casino is legal in your region before depositing.
            18+ | Gamble responsibly.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Aviator app questions, answered honestly
          </h2>
          <p className="mt-3 text-muted-foreground">
            No hype, no fake download links. Just the facts about playing Aviator
            on a phone.
          </p>

          <div className="mt-10 space-y-4">
            {appFaqs.map((faq) => (
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Try Aviator in your browser first
              </h2>
              <p className="mt-2 text-muted-foreground">
                Skip the downloads. Practice the timing and cash out in a free
                demo before you risk real money.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/how-to-play/demo"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Play Free Demo
              </Link>
              <Link
                href="/casinos"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 font-semibold transition-colors hover:border-primary/50"
              >
                Browse Casinos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(appFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
