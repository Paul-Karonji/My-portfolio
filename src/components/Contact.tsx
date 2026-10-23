import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section rule-top relative">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-card border border-hairline bg-surface">
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:p-14">
              <div>
                <div className="flex items-center gap-3">
                  <span className="mono-tag text-lav">04</span>
                  <span className="h-px w-6 bg-hairline" />
                  <span className="eyebrow">Contact</span>
                </div>

                <h2 className="display mt-6 text-[clamp(2.1rem,5.4vw,3.5rem)]">
                  Got something that{" "}
                  <span className="gradient-wash">has to survive?</span>
                </h2>

                <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.7] text-dim">
                  I&apos;m looking for internship, junior or remote roles. If
                  you&apos;re building something where offline behaviour, audit
                  trails or compliance actually matter, I&apos;d like to hear
                  about it. I read every message.
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="group mt-9 inline-flex items-center gap-3 border-b border-hairline pb-2 transition-colors hover:border-lav"
                >
                  <span className="font-display text-[clamp(1.15rem,2.6vw,1.6rem)] tracking-[-0.02em] text-text">
                    {profile.email}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="text-lav transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path
                      d="M3 13 13 3M13 3H5.5M13 3v7.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn btn-primary"
                  >
                    Send an email
                  </a>
                  <a
                    href={profile.resumeUrl}
                    download
                    className="btn btn-ghost"
                  >
                    Download CV
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M7 1.5v8M7 9.5 3.8 6.3M7 9.5l3.2-3.2M2 11.5h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8 border-t border-hairline pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <dl className="space-y-6">
                  <div>
                    <dt className="eyebrow !text-[10px]">Based in</dt>
                    <dd className="mt-2 text-[15px] text-text">
                      {profile.location}
                    </dd>
                    <dd className="mono-tag mt-1 text-[11px] text-muted">
                      {profile.timezone}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow !text-[10px]">Status</dt>
                    <dd className="mt-2 flex items-center gap-2.5 text-[15px] text-text">
                      <span className="live-dot" />
                      {profile.status}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow !text-[10px]">Phone</dt>
                    <dd className="mt-2">
                      <a
                        href={`tel:${profile.phone.replace(/\s/g, "")}`}
                        className="text-[15px] text-dim transition-colors hover:text-text"
                      >
                        {profile.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow !text-[10px]">GitHub</dt>
                    <dd className="mt-2">
                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[15px] text-dim transition-colors hover:text-text"
                      >
                        {profile.github.replace("https://", "")}
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="rounded-tile border border-hairline bg-ink/60 p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="live-dot" />
                    <span className="text-[13.5px] text-text">
                      WIK Technologies
                    </span>
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
                    Lead Engineer. Founding Engineer of FleetTrack at Atlas
                    Data. Technical Lead at JHUB Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
