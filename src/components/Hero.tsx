import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          {/* ---------------- left ---------------- */}
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2.5 rounded-pill border border-hairline bg-surface/60 py-2 pl-2 pr-4">
                  <img
                    src={profile.heroPortrait}
                    alt={profile.name}
                    className="h-7 w-7 rounded-full object-cover object-top"
                  />
                  <span className="text-[12.5px] text-dim">{profile.role}</span>
                </div>
                <div className="flex items-center gap-2 rounded-pill border border-hairline bg-surface/60 py-2 pl-3.5 pr-4">
                  <span className="live-dot" />
                  <span className="text-[12.5px] text-dim">{profile.status}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="display mt-8 text-[clamp(2.5rem,6.6vw,4.35rem)]">
                {profile.headline}{" "}
                <span className="gradient-wash">{profile.headlineAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-7 max-w-[56ch] text-[16.5px] leading-[1.72] text-dim">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-7 flex flex-wrap items-center gap-2">
                <span className="eyebrow mr-1 !text-[10px]">Into</span>
                {profile.interests.map((item) => (
                  <span
                    key={item}
                    className="mono-tag rounded-pill border border-hairline px-2.5 py-1 text-[10.5px] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={290}>
              <p className="mt-8 text-[15px] text-text">{profile.ask}</p>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
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
                  GitHub
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn btn-ghost"
                >
                  CV
                </a>
              </div>
            </Reveal>
          </div>

          {/* ---------------- right ---------------- */}
          <Reveal delay={200}>
            <div className="relative mx-auto max-w-[340px] lg:ml-auto">
              <div className="absolute left-1/2 top-[18%] -z-10 h-[70%] w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(184,164,217,0.26),rgba(216,167,177,0.1)_45%,transparent_70%)] blur-2xl" />
              <img
                src={profile.heroCutout}
                alt={profile.name}
                className="relative w-full drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
              />

              <div className="absolute -bottom-1 left-1/2 w-[96%] -translate-x-1/2 rounded-tile border border-hairline bg-ink p-4 shadow-[0_18px_40px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2.5">
                  <span className="live-dot" />
                  <span className="eyebrow !text-[9.5px]">Building now</span>
                </div>
                <p className="mt-2 text-[14px] font-medium text-text">
                  Hiro — a self-hosted multi-model agent
                </p>
                <a
                  href="https://github.com/Paul-Karonji/Hiro"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-[12.5px] text-lav transition-colors hover:text-lavsoft"
                >
                  github.com/Paul-Karonji/Hiro
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------------- stats ---------------- */}
        <Reveal delay={380}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="bg-ink px-5 py-5">
                <div className="display text-[30px] leading-none text-lavsoft">
                  {stat.value}
                </div>
                <div className="mt-2.5 text-[12.5px] leading-snug text-dim">
                  {stat.label}
                </div>
                <div className="mono-tag mt-1.5 text-[10.5px] leading-relaxed text-muted">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
