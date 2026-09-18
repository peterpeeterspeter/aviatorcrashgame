// Legal, troubleshooting and promotion-safety explainers suppress casino-acquisition components.
// This governs page chrome, not sourced operator examples within editorial content.
// It is not IP geolocation or legal certification.
export function isNonPromotionalGuide(pathname: string | null): boolean {
  return ["/guides/aviator-india", "/guides/aviator-not-working", "/guides/aviator-rain", "/guides/aviator-kyc-verification", "/guides/aviator-account-blocked"].includes(pathname?.replace(/\/+$/, "") ?? "");
}

export const safetyGuideLinks = [
  { href: "/guides/aviator-glossary", label: "Game terminology" },
  { href: "/guides/aviator-predictor-apps-truth", label: "Predictor claims" },
  { href: "/responsible-gambling", label: "Gambling support" },
];
