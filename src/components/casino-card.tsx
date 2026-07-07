"use client";
import Link from "next/link";
import { Star, ArrowRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import type { Casino } from "@/content/casinos";
import { affiliateHref } from "@/lib/affiliate-links";

export function CasinoCard({ casino }: { casino: Casino }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
    >
      {/* Rank badge */}
      <div className="absolute left-4 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
        {casino.rank}
      </div>

      {/* Top accent strip */}
      <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col gap-4 p-6 pt-8">
        {/* Name + rating */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold">{casino.name}</h3>
            <p className="text-sm text-muted-foreground">{casino.tagline}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} weight="fill" className="text-primary" />
            <span className="font-semibold">{casino.rating}</span>
          </div>
        </div>

        {/* Bonus */}
        <div className="rounded-lg bg-secondary px-4 py-3">
          <p className="text-xs text-muted-foreground">Welcome Bonus</p>
          <p className="text-sm font-semibold">{casino.bonus}</p>
        </div>

        {/* Key info */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-muted-foreground">Min Deposit</span>
            <p className="font-medium">{casino.minDeposit}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Payouts</span>
            <p className="font-medium">{casino.payouts}</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-auto flex flex-col gap-2 pt-2">
          <Link
            href={affiliateHref(casino.affiliateSlug)}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform group-hover:scale-[1.02] active:scale-[0.98]"
          >
            Play at {casino.name}
            <ArrowRight size={16} weight="bold" />
          </Link>
          <Link
            href={`/casinos/${casino.slug}`}
            className="text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Read Review
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
