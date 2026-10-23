"use client";

import { useState } from "react";
import { categories, CategoryId, workByCategory, WorkItem } from "@/data/work";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const statusTone: Record<WorkItem["status"], string> = {
  "Open source": "text-lav",
  "In production": "text-live",
  Live: "text-lav",
  Building: "text-amber",
};

function Monogram({ name }: { name: string }) {
  const initials = name
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-full w-full items-center justify-center bg-surface2">
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(184,164,217,0.22),transparent_70%)] blur-lg" />
        <span className="display relative text-[46px] text-lav/70">
          {initials}
        </span>
      </div>
    </div>
  );
}

function Card({ item }: { item: WorkItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-ink transition-colors duration-500 hover:border-strong">
      <div className="relative overflow-hidden border-b border-hairline">
        <div className="aspect-[16/10]">
          {item.image ? (
            <img
              src={item.image}
              alt={item.imageAlt ?? item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <Monogram name={item.title} />
          )}
        </div>
        <span className="mono-tag absolute left-3 top-3 rounded-pill border border-strong bg-ink px-2.5 py-1 text-[10px] text-text">
          {item.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[19px] font-medium tracking-[-0.02em] text-text">
          {item.title}
        </h3>
        <p className="mono-tag mt-1.5 text-[11px] text-lav">{item.kicker}</p>

        <p className="mt-4 text-[14.5px] leading-[1.7] text-dim">
          {item.blurb}
        </p>
        <p className="mt-3 text-[13.5px] leading-[1.7] text-muted">
          {item.detail}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="mono-tag rounded-pill border border-hairline px-2 py-0.5 text-[10px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-5 pt-6">
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={`text-[13px] transition-colors hover:text-lav ${statusTone[item.status]}`}
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
  );
}

export default function Work() {
  const [active, setActive] = useState<CategoryId>("opensource");
  const visible = workByCategory(active);
  const current = categories.find((c) => c.id === active);

  return (
    <section id="work" className="section rule-top">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <Reveal>
          <SectionHead
            index="02"
            label="The work"
            title={
              <>
                Three kinds of{" "}
                things I build.
              </>
            }
            lede="Some of it is open source because it should be. Some of it runs a hospital or a courier company. Some of it I built just because I wanted it to exist."
            aside={
              <div className="flex flex-wrap gap-1.5">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActive(category.id)}
                    className={`mono-tag rounded-pill border px-3.5 py-2 transition-colors ${
                      active === category.id
                        ? "border-lav/50 bg-lav/10 text-lavsoft"
                        : "border-hairline text-muted hover:border-strong hover:text-dim"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            }
          />
        </Reveal>

        {current && (
          <Reveal delay={80}>
            <p className="mt-8 max-w-[68ch] border-l-2 border-lav/40 pl-4 text-[14.5px] leading-[1.7] text-dim">
              {current.blurb}
            </p>
          </Reveal>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <Reveal key={item.id} delay={index * 70}>
              <Card item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
