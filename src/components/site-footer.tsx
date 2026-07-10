"use client";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Guides: [
    { href: "/how-to-play", label: "How to Play" },
    { href: "/strategy", label: "Strategy & Tips" },
    { href: "/guides/aviator-glossary", label: "Glossary" },
    { href: "/guides/aviator-provably-fair", label: "Provably Fair" },
  ],
  Casinos: [
    { href: "/casinos", label: "All Reviews" },
    { href: "/bonuses", label: "Best Bonuses" },
    { href: "/aviator-no-deposit-bonus", label: "No Deposit Bonus" },
    { href: "/aviator-free-spins", label: "Free Spins" },
  ],
  Learn: [
    { href: "/how-to-play/demo", label: "Free Demo" },
    { href: "/aviator-tricks", label: "Aviator Tricks" },
    { href: "/aviator-app", label: "Aviator App" },
    { href: "/aviator-max-win", label: "Max Win" },
  ],
  About: [
    { href: "/about", label: "About Us" },
    { href: "/responsible-gambling", label: "Responsible Gambling" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Image
                src="/images/logo.jpeg"
                alt="Aviator Crash Game"
                width={32}
                height={32}
                className="rounded-lg"
              />
              Aviator Crash Game
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Honest guides and casino reviews for Aviator crash game players.
              Updated July 2026.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Responsible gambling */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">18+</span>
              <span>|</span>
              <Link
                href="/responsible-gambling"
                className="hover:text-foreground"
              >
                Responsible Gambling
              </Link>
              <span>|</span>
              <Link
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                BeGambleAware
              </Link>
              <span>|</span>
              <Link
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                GamCare
              </Link>
            </div>
            <p className="text-xs text-muted-foreground max-w-md">
              Gambling can be addictive. Please play responsibly. This site
              contains affiliate links and we may earn commission from referred
              players.
            </p>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Aviator Crash Game. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
