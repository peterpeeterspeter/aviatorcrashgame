import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/site-navigation";
import { Footer } from "@/components/site-footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aviatorcrashgame.com"),
  title: {
    default: "Aviator Crash Game - Learn How to Play, Strategies & Casino Reviews",
    template: "%s | Aviator Crash Game",
  },
  description:
    "Learn how Aviator crash games work. Beginner guides, honest casino reviews, and real strategy tips. No fake hacks, no predictor apps.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aviatorcrashgame.com",
    siteName: "Aviator Crash Game",
    title: "Aviator Crash Game - Learn How to Play, Strategies & Casino Reviews",
    description:
      "Learn how Aviator crash games work. Beginner guides, honest casino reviews, and real strategy tips.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${outfit.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* GA4 - existing property from WP site */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4DRZM5XN1E');
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4DRZM5XN1E"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        {/* Structured data for LLM/AI crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Aviator Crash Game",
              url: "https://aviatorcrashgame.com",
              description: "Beginner guides, honest casino reviews, and real strategy tips for Aviator crash games.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://aviatorcrashgame.com/guides?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
