import type { Metadata } from "next";
import GuideDetailPage, { generateMetadata as sharedGenerateMetadata } from "../guides/[slug]/page";

// Keep the established landing route, but share the researched guide and its
// canonical URL instead of maintaining a second, contradictory offer article.
const params = Promise.resolve({ slug: "aviator-no-deposit-bonus" });

export async function generateMetadata(): Promise<Metadata> {
  return sharedGenerateMetadata({ params });
}

export default async function AviatorNoDepositBonusPage() {
  return GuideDetailPage({ params });
}
