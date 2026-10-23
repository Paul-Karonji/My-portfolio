"use client";

import { useEffect, useState } from "react";

interface MeshStep {
  role: string;
  model: string;
  time: string;
  tag?: string;
}

const COMMAND = "/mesh audit the WIK-POS license server for replay attacks";

const STEPS: MeshStep[] = [
  { role: "plan", model: "gemini-2.5-pro", time: "4.1s" },
  { role: "threat model", model: "deepseek-r1", time: "6.8s", tag: "parallel" },
  { role: "exploit sim", model: "codestral-22b", time: "5.2s", tag: "parallel" },
  { role: "critique", model: "groq/llama-3.3-70b", time: "3.4s" },
];

export default function Terminal() {
  const [typed, setTyped] = useState("");
  const [steps, setSteps] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setTyped(COMMAND);
      setSteps(STEPS.length);
      setDone(true);
      return;
    }

    let i = 0;
    const typeTimer = window.setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        window.clearInterval(typeTimer);
        startSteps();
      }
    }, 26);

    const timers: number[] = [];

    function startSteps() {
      STEPS.forEach((_, index) => {
        timers.push(
          window.setTimeout(() => setSteps(index + 1), 520 * (index + 1)),
        );
      });
      timers.push(
        window.setTimeout(() => setDone(true), 520 * (STEPS.length + 1) + 240),
      );
    }

    return () => {
      window.clearInterval(typeTimer);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-card border border-hairline bg-ink2/85 backdrop-blur-xl">
      {/* chrome */}
      <div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a44]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a44]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a44]" />
        </div>
        <div className="mono-tag text-muted">hiro · mesh runner</div>
        <div className="ml-auto flex items-center gap-2">
          <span className="mono-tag rounded-pill border border-hairline px-2 py-0.5 text-dim">
            Telegram
          </span>
          <span className="mono-tag rounded-pill border border-hairline px-2 py-0.5 text-dim">
            WhatsApp
          </span>
          <span className="live-dot ml-1" />
        </div>
      </div>

      {/* body */}
      <div className="min-h-[280px] p-5 font-mono text-[12.5px] leading-[1.75] sm:p-6 sm:text-[13px]">
        <div className="term-line">
          <span className="text-lav">$</span>{" "}
          <span className="text-text">{typed}</span>
          {typed.length < COMMAND.length && (
            <span className="caret inline-block align-baseline" />
          )}
        </div>

        {steps > 0 && (
          <div className="mt-5 space-y-1.5">
            {STEPS.slice(0, steps).map((step, index) => (
              <div
                key={step.role}
                className="term-line flex flex-wrap items-baseline gap-x-3 gap-y-1"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <span className="text-dim">✓</span>
                <span className="w-[104px] shrink-0 text-text">{step.role}</span>
                <span className="text-lavsoft">{step.model}</span>
                {step.tag && (
                  <span className="mono-tag rounded-pill border border-hairline px-1.5 py-0.5 text-[9.5px] text-muted">
                    {step.tag}
                  </span>
                )}
                <span className="text-muted">{step.time}</span>
              </div>
            ))}
          </div>
        )}

        {done && (
          <div className="term-line mt-5 border-t border-hairline pt-4 text-dim">
            <span className="text-rose">→</span> 4 findings · 1 critical ·{" "}
            <span className="text-text">report.md</span> attached
          </div>
        )}
      </div>

      {/* sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent animate-sweep" />
      </div>
    </div>
  );
}
