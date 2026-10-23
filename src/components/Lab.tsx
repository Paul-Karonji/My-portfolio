"use client";

import { useState } from "react";
import { LabProject, LabTag, labProjects, labTags } from "@/data/lab";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function Card({ item }: { item: LabProject }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-ink transition-colors duration-500 hover:border-strong">
      <div className="sheen relative overflow-hidden border-b border-hairline">
        <div className="aspect-[16/10] bg-surface">
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <span className="mono-tag absolute left-3 top-3 rounded-pill bg-ink/85 px-2.5 py-1 text-[10px] text-muted backdrop-blur-sm">
          {item.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-[20px] font-medium tracking-[-0.02em] text-text">
            {item.title}
          </h3>
        </div>
        <p className="mono-tag mt-1.5 text-[11px] text-lav">{item.kicker}</p>

        <p className="mt-4 text-[14.5px] leading-[1.7] text-dim">{item.blurb}</p>
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

        <div className="mt-auto flex items-center gap-5 pt-6">
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-text transition-colors hover:text-lav"
            >
              {item.linkLabel ?? "Live"}
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
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Lab() {
  const [active, setActive] = useState<LabTag>("all");

  const visible =
    active === "all"
      ? labProjects
      : labProjects.filter((project) => project.category === active);

  return (
    <section id="lab" className="section rule-top">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <Reveal>
          <SectionHead
            index="02"
            label="The lab"
            title={
              <>
                Things I built{" "}
                <span className="gradient-wash">to find out if it works.</span>
              </>
            }
            lede="Six of them, each answering a specific question: can an agent drive a real API, can a vote be made unfalsifiable, can a courier run on three currencies, can Kenyan shoppers pay however they want."
            aside={
              <div className="flex flex-wrap gap-1.5">
                {labTags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => setActive(tag.id)}
                    className={`mono-tag rounded-pill border px-3 py-1.5 transition-colors ${
                      active === tag.id
                        ? "border-lav/50 bg-lav/10 text-lavsoft"
                        : "border-hairline text-muted hover:border-strong hover:text-dim"
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            }
          />
        </Reveal>

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
