"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useMotionValue, useTransform, animate } from "motion/react";

export function MultiplierCounter({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();
  const multiplier = useMotionValue(1.0);
  const crashedRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const crashBadgeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;

    let crashPoint = 1.2 + Math.random() * 7.5;
    let current = 1.0;
    let lastTime = performance.now();
    let raf: number;
    let isCrashed = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isCrashed) {
        current += delta * (0.8 + current * 0.15);

        if (current >= crashPoint) {
          current = crashPoint;
          isCrashed = true;

          // Direct DOM updates - no React re-renders
          if (crashedRef.current) {
            crashedRef.current.textContent = `${crashPoint.toFixed(2)}x`;
            crashedRef.current.style.color = "var(--destructive)";
          }
          if (barRef.current) {
            barRef.current.style.width = "100%";
            barRef.current.style.backgroundColor = "var(--destructive)";
          }
          if (crashBadgeRef.current) {
            crashBadgeRef.current.style.opacity = "1";
            crashBadgeRef.current.style.transform = "translateY(0)";
          }
          if (containerRef.current) {
            containerRef.current.style.borderColor = "var(--destructive)";
          }

          timeout = setTimeout(() => {
            current = 1.0;
            isCrashed = false;
            crashPoint = 1.2 + Math.random() * 7.5;

            if (crashedRef.current) {
              crashedRef.current.textContent = "1.00x";
              crashedRef.current.style.color = "var(--primary)";
            }
            if (barRef.current) {
              barRef.current.style.width = "0%";
              barRef.current.style.backgroundColor = "var(--primary)";
            }
            if (crashBadgeRef.current) {
              crashBadgeRef.current.style.opacity = "0";
              crashBadgeRef.current.style.transform = "translateY(10px)";
            }
            if (containerRef.current) {
              containerRef.current.style.borderColor = "var(--border)";
            }

            lastTime = performance.now();
            raf = requestAnimationFrame(tick);
          }, 1800);
          return;
        }

        // Direct DOM update - zero re-renders
        if (crashedRef.current) {
          crashedRef.current.textContent = `${current.toFixed(2)}x`;
        }
        if (barRef.current) {
          barRef.current.style.width = `${Math.min((current / 10) * 100, 100)}%`;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [reduce]);

  const displayValue = reduce ? "2.47x" : null;

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors duration-300 ${className}`}
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Glow effect */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <span className="relative text-xs font-medium text-muted-foreground">
        Live Demo
      </span>
      <span
        ref={crashedRef}
        className="relative mt-2 font-mono text-6xl font-bold tabular-nums text-primary transition-colors duration-300 md:text-7xl"
        style={{ color: "var(--primary)" }}
      >
        {displayValue ?? "1.00x"}
      </span>

      <div className="relative mt-6 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          ref={barRef}
          className="h-full rounded-full bg-primary transition-all duration-100"
          style={{ width: "0%", backgroundColor: "var(--primary)" }}
        />
      </div>

      <div
        ref={crashBadgeRef}
        className="relative mt-4 rounded-full bg-destructive/10 px-4 py-1 text-sm font-semibold text-destructive transition-all duration-300"
        style={{ opacity: 0, transform: "translateY(10px)" }}
      >
        Crashed! Cash out before this happens.
      </div>
    </div>
  );
}
