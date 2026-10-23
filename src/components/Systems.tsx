import { systems } from "@/data/systems";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const statusStyles: Record<string, { label: string; color: string }> = {
  production: { label: "In production", color: "bg-live" },
  live: { label: "Live", color: "bg-lav" },
  building: { label: "Building", color: "bg-amber" },
};

export default function Systems() {
  return (
    <section id="systems" className="section rule-top">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <Reveal>
          <SectionHead
            index="03"
            label="Shipped systems"
            title={
              <>
                Everything else{" "}
                <span className="gradient-wash">that actually runs.</span>
              </>
            }
            lede="Most of this is variations on a theme — a terminal, an ERP, a marketplace — but each one is in front of real users, in a real business, doing real transactions."
          />
        </Reveal>

        <div className="mt-12 divide-y divide-hairline border-y border-hairline">
          {systems.map((item, index) => {
            const status = statusStyles[item.status];
            return (
              <Reveal key={item.id} delay={Math.min(index, 6) * 55}>
                <article className="group grid gap-5 py-6 transition-colors duration-300 sm:grid-cols-[168px_1fr] sm:gap-7">
                  <div className="shot aspect-[16/10] rounded-tile sm:aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="!object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                      <h3 className="font-display text-[18.5px] font-medium tracking-[-0.02em] text-text">
                        {item.title}
                      </h3>
                      {item.kicker && (
                        <span className="mono-tag text-[11px] text-lav">
                          {item.kicker}
                        </span>
                      )}
                      <span className="mono-tag inline-flex items-center gap-1.5 text-[10px] text-muted">
                        <span className={`lang-dot ${status.color}`} />
                        {status.label}
                      </span>
                    </div>

                    <p className="mt-2.5 max-w-[70ch] text-[14.5px] leading-[1.7] text-dim">
                      {item.blurb}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {item.stack.map((tech) => (
                          <span
                            key={tech}
                            className="mono-tag rounded-pill border border-hairline px-2 py-0.5 text-[10px] text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[13px] text-text transition-colors hover:text-lav"
                        >
                          {item.linkLabel ?? "Live"}
                          <span className="ml-1 text-muted">↗</span>
                        </a>
                      )}
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[13px] text-dim transition-colors hover:text-text"
                        >
                          Source
                          <span className="ml-1 text-muted">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
