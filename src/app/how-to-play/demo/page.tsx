"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "motion/react";

type GameState = "idle" | "running" | "crashed" | "cashed";

export default function DemoPage() {
  const reduce = useReducedMotion();
  const [gameState, setGameState] = useState<GameState>("idle");
  const [multiplier, setMultiplier] = useState(1.0);
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(10);
  const [autoCashout, setAutoCashout] = useState(2.0);
  const [autoCashoutEnabled, setAutoCashoutEnabled] = useState(false);
  const [lastWin, setLastWin] = useState<number | null>(null);
  const [history, setHistory] = useState<{ mult: number; result: "win" | "loss" }[]>([]);
  const animRef = useRef<number>(0);
  const currentMult = useRef(1.0);
  const cashedOut = useRef(false);

  const generateCrashPoint = () => {
    // Demo-friendly distribution: 99% RTP (more forgiving than real Aviator's 97%).
    // P(crash <= x) = 1 - 0.99/x. A higher RTP lets beginners cash out more often
    // and feel the mechanic without getting discouraged by early crashes.
    const r = Math.random();
    const houseEdge = 0.01;
    const crash = Math.max(1.2, (1 - houseEdge) / (1 - r));
    // Cap at 100x for the demo
    return Math.min(crash, 100);
  };

  const crashPointRef = useRef(2.0);

  const startRound = useCallback(() => {
    if (balance < betAmount || gameState === "running") return;
    setBalance((b) => b - betAmount);
    setGameState("running");
    setLastWin(null);
    currentMult.current = 1.0;
    setMultiplier(1.0);
    cashedOut.current = false;
    crashPointRef.current = generateCrashPoint();

    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      currentMult.current += delta * (0.5 + currentMult.current * 0.2);

      // Auto-cashout check
      if (autoCashoutEnabled && !cashedOut.current && currentMult.current >= autoCashout) {
        cashedOut.current = true;
        const win = betAmount * autoCashout;
        setBalance((b) => b + win);
        setLastWin(win);
        setGameState("cashed");
        setHistory((h) => [{ mult: autoCashout, result: "win" as const }, ...h].slice(0, 15));
        return;
      }

      // Crash check
      if (currentMult.current >= crashPointRef.current) {
        currentMult.current = crashPointRef.current;
        setMultiplier(crashPointRef.current);
        setGameState("crashed");
        setHistory((h) => [{ mult: crashPointRef.current, result: "loss" as const }, ...h].slice(0, 15));
        return;
      }

      setMultiplier(currentMult.current);
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
  }, [balance, betAmount, gameState, autoCashout, autoCashoutEnabled]);

  const cashOut = useCallback(() => {
    if (gameState !== "running" || cashedOut.current) return;
    cashedOut.current = true;
    const win = betAmount * currentMult.current;
    setBalance((b) => b + win);
    setLastWin(win);
    setGameState("cashed");
    setHistory((h) => [{ mult: parseFloat(currentMult.current.toFixed(2)), result: "win" as const }, ...h].slice(0, 15));
  }, [gameState, betAmount]);

  const reset = useCallback(() => {
    cancelAnimationFrame(animRef.current);
    setGameState("idle");
    setMultiplier(1.0);
    setBalance(1000);
    setLastWin(null);
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          Aviator Multiplier Demo
        </h1>
        <p className="mt-4 text-muted-foreground">
          Practice the cash-out mechanic with virtual credits. No real money, no
          sign-up. Just learn how the game feels.
        </p>
      </div>

      {/* Game area */}
      <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
        {/* Balance + multiplier display */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Virtual Balance
            </span>
            <p className="text-2xl font-bold tabular-nums">
              ${balance.toFixed(2)}
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Multiplier
            </span>
            <p
              className={`text-4xl font-bold tabular-nums transition-colors md:text-5xl ${
                gameState === "crashed"
                  ? "text-destructive"
                  : gameState === "cashed"
                    ? "text-primary"
                    : ""
              }`}
            >
              {multiplier.toFixed(2)}x
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="mt-4 min-h-[2rem] text-center">
          {gameState === "running" && !cashedOut.current && (
            <p className="text-sm font-medium text-primary">
              Multiplier is rising. Cash out now!
            </p>
          )}
          {gameState === "crashed" && (
            <p className="text-sm font-semibold text-destructive">
              Crashed at {multiplier.toFixed(2)}x. You lost ${betAmount}.
            </p>
          )}
          {gameState === "cashed" && lastWin !== null && (
            <p className="text-sm font-semibold text-primary">
              Cashed out at {multiplier.toFixed(2)}x. You won ${lastWin.toFixed(2)}!
            </p>
          )}
          {gameState === "idle" && (
            <p className="text-sm text-muted-foreground">
              Set your bet and press Start Round.
            </p>
          )}
        </div>

        {/* Controls */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <label className="text-xs font-medium text-muted-foreground">
              Bet Amount
            </label>
            <div className="mt-1 flex items-center gap-2">
              <button
                onClick={() => setBetAmount((b) => Math.max(1, b - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-sm font-bold"
              >
                -
              </button>
              <span className="flex-1 text-center font-semibold tabular-nums">
                ${betAmount}
              </span>
              <button
                onClick={() => setBetAmount((b) => Math.min(balance, b + 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-sm font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground">
              Auto Cashout
            </label>
            <div className="mt-1 flex items-center gap-2">
              <input
                type="range"
                min="1.2"
                max="15"
                step="0.1"
                value={autoCashout}
                onChange={(e) => setAutoCashout(parseFloat(e.target.value))}
                className="flex-1 accent-primary"
              />
              <span className="w-12 text-center font-semibold tabular-nums">
                {autoCashout.toFixed(1)}x
              </span>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground">
              Auto Cashout Toggle
            </label>
            <button
              onClick={() => setAutoCashoutEnabled(!autoCashoutEnabled)}
              className={`mt-1 flex h-9 w-full items-center justify-center rounded-lg border text-sm font-medium transition-colors ${
                autoCashoutEnabled
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground"
              }`}
            >
              {autoCashoutEnabled ? "Enabled" : "Disabled"}
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex gap-3">
          {gameState === "idle" || gameState === "crashed" || gameState === "cashed" ? (
            <button
              onClick={startRound}
              disabled={balance < betAmount}
              className="flex-1 rounded-xl bg-primary py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              {balance < betAmount ? "Insufficient Balance" : "Start Round"}
            </button>
          ) : (
            <button
              onClick={cashOut}
              className="flex-1 animate-pulse rounded-xl bg-primary py-3 font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Cash Out ({(betAmount * multiplier).toFixed(2)})
            </button>
          )}
          <button
            onClick={reset}
            className="rounded-xl border border-border px-6 py-3 font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Reset
          </button>
        </div>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Recent Rounds
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {history.map((h, i) => (
              <span
                key={i}
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold tabular-nums ${
                  h.result === "win"
                    ? "bg-primary/10 text-primary"
                    : "bg-destructive/10 text-destructive"
                }`}
              >
                {h.mult.toFixed(2)}x
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Educational note */}
      <div className="mt-8 rounded-2xl border border-border bg-secondary/30 p-6">
        <h2 className="text-lg font-bold">What This Demo Teaches</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">The multiplier never stops rising until it crashes.</strong>{" "}
            The longer you wait, the more you win, but the higher the risk.
          </li>
          <li>
            <strong className="text-foreground">Auto-cashout removes the emotional decision.</strong>{" "}
            Set it once and the game cashes out automatically. Most pros use it.
          </li>
          <li>
            <strong className="text-foreground">Each round is independent.</strong>{" "}
            A long streak of high multipliers does not mean a crash is due. The odds are the same every round.
          </li>
          <li>
            <strong className="text-foreground">The house edge is 3%.</strong>{" "}
            Over thousands of rounds, you will lose about 3 cents per dollar bet. No strategy changes this.
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          This is a simulated demo for educational purposes only. No real money
          is involved.
        </p>
      </div>
    </div>
  );
}
