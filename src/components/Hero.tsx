import { profile } from "@/data/profile";
import Terminal from "./Terminal";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* ---------------- left ---------------- */}
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2.5 rounded-pill border border-hairline bg-surface/60 py-1.5 pl-1.5 pr-4">
                  <img
                    src={profile.heroPortrait}
                    alt={profile.name}
                    className="h-7 w-7 rounded-full object-cover object-top grayscale-[35%]"
                  />
                  <span className="text-[12.5px] text-dim">
                    {profile.role}
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-pill border border-hairline bg-surface/60 py-2 pl-3.5 pr-4">
                  <span className="live-dot" />
                  <span className="text-[12.5px] text-dim">
                    {profile.status}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="display mt-8 text-[clamp(2.6rem,7.2vw,4.65rem)]">
                {profile.headline}{" "}
                <span className="gradient-wash">{profile.headlineAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-7 max-w-[54ch] text-[16.5px] leading-[1.7] text-dim">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#work" className="btn btn-primary">
                  See the work
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 1.5v11M7 12.5 3 8.5M7 12.5l4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                  </svg>
                  30 repos
                </a>
              </div>
            </Reveal>

            {/* stats */}
            <Reveal delay={320}>
              <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-4">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="bg-ink px-5 py-5">
                    <div className="display text-[30px] leading-none text-lavsoft">
                      {stat.value}
                    </div>
                    <div className="mt-2.5 text-[12.5px] leading-snug text-dim">
                      {stat.label}
                    </div>
                    <div className="mono-tag mt-1.5 text-[10.5px] text-muted">
                      {stat.note}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ---------------- right ---------------- */}
          <Reveal delay={200} className="lg:pt-24">
            <Terminal />
            <p className="mono-tag mt-4 text-[11px] leading-relaxed text-muted">
              Hiro routing one goal across four models — planning, threat model,
              simulation and critique — in parallel, with failover.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
