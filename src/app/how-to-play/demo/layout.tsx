import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Free Aviator Demo - Practice Crash Game (No Real Money)",
  description:
    "Play Aviator for free with virtual credits. Practice the cash-out mechanic, test auto-cashout strategies, and learn how crash games work without risking real money.",
  path: "/how-to-play/demo",
});

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
