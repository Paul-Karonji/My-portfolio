import { flagships, Flagship } from "@/data/flagships";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/link inline-flex items-center gap-1.5 text-[13.5px] text-text transition-colors hover:text-lav"
    >
      {label}
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      >
        <path
          d="M3 10 10 3M10 3H4.5M10 3v5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function CaseStudy({ item }: { item: Flagship }) {
  return (
    <article className="group relative overflow-hidden rounded-card border border-hairline bg-ink">
      {/* header rail */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-hairline px-6 py-4 sm:px-9">
        <span className="mono-tag text-lav">{item.index}</span>
        <span className="h-3 w-px bg-hairline" />
        <span className="eyebrow !text-[10.5px]">{item.category}</span>
        {item.badge && (
          <span className="mono-tag ml-auto rounded-pill border border-hairline px-2.5 py-1 text-[10px] text-muted">
            {item.badge}
          </span>
        )}
      </div>

      <div className="grid gap-9 px-6 py-9 sm:px-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* copy */}
        <div>
          <h3 className="display text-[clamp(1.9rem,4.4vw,2.9rem)]">
            {item.title}
          </h3>
          <p className="mt-3 font-display text-[15.5px] font-medium text-lavsoft">
            {item.kicker}
          </p>
          <p className="mt-5 max-w-[52ch] text-[15.5px] leading-[1.72] text-dim">
            {item.summary}
          </p>

          <ul className="mt-7 space-y-2.5">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-[14px] text-dim">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-lav" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* shot */}
        <div className="order-first lg:order-none">
          <div className="shot aspect-[4/3] rounded-tile">
            <img
              src={item.image}
              alt={item.imageAlt}
              loading="lazy"
              className="!object-contain"
            />
          </div>
        </div>
      </div>

      {/* the four-column writeup */}
      <div className="grid gap-px border-t border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
        {(
          [
            ["The problem", item.problem],
            ["What I built", item.build],
            ["The hard part", item.hard],
            ["Where it landed", item.outcome],
          ] as const
        ).map(([label, body]) => (
          <div key={label} className="bg-ink p-6 sm:p-7">
            <div className="eyebrow !text-[10px]">{label}</div>
            <p className="mt-4 text-[14px] leading-[1.75] text-dim">{body}</p>
          </div>
        ))}
      </div>

      {/* footer */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-hairline px-6 py-5 sm:px-9">
        <div className="flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="mono-tag rounded-pill border border-hairline px-2.5 py-1 text-[10.5px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-5">
          {item.link && (
            <ArrowLink href={item.link} label={item.linkLabel ?? "Live"} />
          )}
          {item.github && (
            <ArrowLink href={item.github} label="Source code" />
          )}
        </div>
      </div>
    </article>
  );
}

export default function Flagships() {
  return (
    <section id="case-studies" className="section rule-top">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <Reveal>
          <SectionHead
            index="01"
            label="Three I'm proudest of"
            title={
              <>
                Case studies,{" "}
                not a project list.
              </>
            }
            lede="A feature list tells you what someone built. These three tell you what was actually hard — and what it took to make it survive contact with real users."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {flagships.map((item, index) => (
            <Reveal key={item.id} delay={index * 90}>
              <CaseStudy item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
