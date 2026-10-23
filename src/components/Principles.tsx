import { principles } from "@/data/stack";
import Reveal from "./Reveal";

export default function Principles() {
  return (
    <section className="rule-top relative">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <p className="max-w-[30ch] font-display text-[clamp(1.55rem,3.1vw,2.15rem)] font-medium leading-[1.22] tracking-[-0.025em] text-text">
            A demo that stops at the model{" "}
            <span className="text-muted">is a demo.</span>
          </p>
          <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.7] text-dim">
            Everything I have shipped had to survive a hospital&apos;s midnight
            pharmacy run, a shop that loses signal every afternoon, and a tax
            authority&apos;s audit. Those constraints are not a detour from the
            interesting work — they are the interesting work.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline lg:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.index} delay={index * 110}>
              <div className="group h-full bg-ink p-7 transition-colors duration-500 hover:bg-surface">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-[8px] border border-hairline font-mono text-[11px] text-lav">
                    {principle.index}
                  </span>
                  <span className="h-px flex-1 bg-hairline" />
                </div>
                <h3 className="mt-6 text-[17.5px] font-medium leading-snug tracking-[-0.015em] text-text">
                  {principle.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-[1.72] text-dim">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
