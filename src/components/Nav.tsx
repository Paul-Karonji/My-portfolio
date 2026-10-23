"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-hairline bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-shell items-center gap-6 px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-[9px] border border-hairline bg-surface font-mono text-[12px] font-medium text-lav transition-colors group-hover:border-strong">
            PK
          </span>
          <span className="hidden text-[13.5px] font-medium tracking-tight text-text sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-pill px-3 py-1.5 text-[13px] text-dim transition-colors hover:bg-white/[0.05] hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mono-tag hidden rounded-pill border border-hairline px-3 py-1.5 text-dim transition-colors hover:border-strong hover:text-text sm:inline-block"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-primary !px-4 !py-2 !text-[13px]"
          >
            Email me
          </a>
        </div>
      </nav>
    </header>
  );
}
