"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function MultiplierCounter({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [multiplier, setMultiplier] = useState(1.0);
  const [crashed, setCrashed] = useState(false);

  useEffect(() => {
    if (reduce) return;

    let frame: number;
    let current = 1.0;
    const crashPoint = 1.0 + Math.random() * 8.0;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      current += delta * (0.8 + current * 0.15);

      if (current >= crashPoint) {
        setMultiplier(crashPoint);
        setCrashed(true);
        setTimeout(() => {
          current = 1.0;
          setMultiplier(1.0);
          setCrashed(false);
          const newCrash = 1.0 + Math.random() * 8.0;
          crashPointHolder = newCrash;
          lastTime = performance.now();
          frame = requestAnimationFrame(animate);
        }, 2000);
        return;
      }

      setMultiplier(current);
      frame = requestAnimationFrame(animate);
    };

    let crashPointHolder = crashPoint;
    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 ${className}`}
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <span className="relative text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Live Demo Multiplier
      </span>
      <span
        className={`relative mt-2 font-mono text-6xl font-bold tabular-nums transition-colors md:text-7xl ${
          crashed ? "text-destructive" : "text-primary"
        }`}
      >
        {multiplier.toFixed(2)}x
      </span>

      <div className="relative mt-6 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: "0%" }}
          animate={{
            width: crashed ? "100%" : `${Math.min((multiplier / 10) * 100, 100)}%`,
          }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {crashed && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mt-4 rounded-full bg-destructive/10 px-4 py-1 text-sm font-semibold text-destructive"
        >
          Crashed! Cash out before this happens.
        </motion.span>
      )}
    </div>
  );
}
