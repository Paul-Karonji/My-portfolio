import { stackGroups } from "@/data/stack";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const MARQUEE = [
  "TypeScript",
  "Next.js 15",
  "React 19",
  "NestJS",
  "Model Context Protocol",
  "PostgreSQL",
  "Supabase",
  "M-Pesa Daraja",
  "Paystack",
  "KRA eTIMS",
  "Go",
  "Laravel 12",
  "SQLite",
  "Electron",
  "Expo",
  "Docker",
  "Fly.io",
  "Cloudflare R2",
  "Prisma",
  "Redis",
  "Tailwind CSS",
];

export default function Stack() {
  return (
    <section id="stack" className="section rule-top">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <Reveal>
          <SectionHead
            index="04"
            label="Tooling"
            title={
              <>
                The stack I{" "}
                <span className="gradient-wash">reach for, and why.</span>
              </>
            }
            lede="Chosen for what it holds up under, not for what it looks like in a tutorial. Money moves through this — M-Pesa, Paystack, KRA eTIMS — so payments and compliance get the same care as the interface."
          />
        </Reveal>
      </div>

      {/* marquee */}
      <div className="marquee relative mt-12 overflow-hidden border-y border-hairline py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-ink to-transparent" />
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {MARQUEE.map((tech) => (
                <span
                  key={`${copy}-${tech}`}
                  className="mono-tag whitespace-nowrap px-6 text-[12px] text-muted"
                >
                  {tech}
                  <span className="ml-6 text-lav/60">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 80}>
              <div className="h-full bg-ink p-7">
                <div className="eyebrow !text-[10px]">{group.label}</div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="mono-tag rounded-pill border border-hairline px-2.5 py-1 text-[10.5px] text-dim transition-colors hover:border-strong hover:text-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
