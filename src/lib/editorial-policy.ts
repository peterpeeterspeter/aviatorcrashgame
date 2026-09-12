// The India legal explainer must not become a casino-acquisition funnel.
// This is a route-level editorial choice, not IP geolocation or legal certification.
export function isNonPromotionalGuide(pathname: string | null): boolean {
  return pathname?.replace(/\/+$/, "") === "/guides/aviator-india";
}

export const safetyGuideLinks = [
  { href: "/guides/aviator-glossary", label: "Game terminology" },
  { href: "/guides/aviator-predictor-apps-truth", label: "Predictor claims" },
  { href: "/responsible-gambling", label: "Gambling support" },
];
