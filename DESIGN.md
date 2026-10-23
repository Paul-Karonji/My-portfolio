# Design System — Paul Karonji Portfolio

- **Framework:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3
- **Motion:** CSS keyframes + IntersectionObserver (no animation library)
- **Status:** v2 — full rewrite. Replaces the previous "Luzia" template clone.

---

## 1. Positioning

> **AI enthusiast.**
> **Full stack developer.**

The previous build was structured as a **freelance agency landing page** — Services,
Process, FAQs, testimonials, "Download CV". That structure says *"hire me for
consulting"*, which was never the story.

v2 leads with a single plain claim and backs it with evidence. Every project is
sorted into one of three buckets, because "which kind of work is this?" is the
first question a reader has:

| Section | Job it does |
|---|---|
| Hero | The claim, the ask, and a portrait — no gimmicks |
| Principles | Why AI work gets judged on constraints, not demos |
| Flagships | Three deep case studies — problem / build / hard part / outcome |
| Work | The full index, sorted into **Open source / Enterprise builds / Personal tools** |
| Stack | Tooling, grouped by the kind of pressure it has to withstand |
| Contact | One clear ask, one address |

### The three categories

- **Open source** — public source you can read, fork or run. Hiro, DueSync,
  Biashara Hub, VoteWatch.
- **Enterprise builds** — WIK Technologies and client platforms running in real
  businesses: hospital, POS, logistics, telecom, education, property.
- **Personal tools & side projects** — built because the author wanted them to
  exist. Unsent, CineTaste, Framel.

### What was deliberately removed

- The **Hiro mesh-runner terminal** from the hero — it read as a gimmick, and the
  hero now carries the claim and the portrait instead.
- **Hiro as the face of the page.** It stays in the open source list and as a
  case study, but it opens the third case study rather than the first, and
  nothing in the hero points at it.
- The **multi-hue gradient on heading words.** Headings are a single colour.
  Lavender is kept for the mono section numbers, chips and links only.
- The **repository-count stat and the Archive section** — repo counts are noise.
  The archive was replaced by the category index, which says the same thing with
  real projects attached.
- The **"Open to Senior / Lead roles"** framing. The ask is now internship,
  junior or remote roles, stated plainly in the hero, the contact section and
  the page metadata.
- **ARCH, Bags with Mulan and the HMS browser demo** from the work index.

---

## 2. Colour — "Ink"

A warm near-black canvas rather than the previous light-grey template surface. Dark
lets project screenshots glow, and it sets the page apart from the usual white
agency page.

| Token | Value | Use |
|---|---|---|
| `--ink` | `#08080C` | Page canvas |
| `--ink-2` | `#0D0D13` | Raised panels (terminal chrome) |
| `--surface` | `#13131B` | Cards |
| `--surface-2` | `#1A1A24` | Hover fills |
| `--line` | `rgba(255,255,255,.075)` | Hairlines |
| `--line-2` | `rgba(255,255,255,.16)` | Stronger borders, focus |
| `--text` | `#EFEDE9` | Warm off-white body text |
| `--text-2` | `#B3B0BB` | Secondary copy |
| `--muted` | `#7B7887` | Metadata, labels |
| `--lav` | `#B8A4D9` | **Primary accent** — AI / agents |
| `--lav-soft` | `#CFC2E8` | Accent text on dark |
| `--rose` | `#D8A7B1` | **Secondary accent** — craft / detail |
| `--live` | `#5EE68C` | "Live" status dots |
| `--amber` | `#F0B45E` | Building / in-progress |

Lavender and rose echo the "Soft Midnight" palette from **Unsent**, so the portfolio
carries the same design sensibility as the products it describes.

---

## 3. Typography

| Role | Face | Notes |
|---|---|---|
| Display | **Space Grotesk** 700 | Headlines. `letter-spacing: -0.035em`, `line-height: 0.96` |
| Body | **Inter** | Paragraphs at 14–17px, `line-height` 1.7 |
| Mono | **JetBrains Mono** | Eyebrows, tags, terminal, metadata |

Fluid type uses `clamp()` throughout, so headings scale with the viewport instead of
stepping at breakpoints.

### Utilities

- `.display` — Space Grotesk, tight tracking, display line-height
- `.eyebrow` — 11px mono, `0.22em` tracking, uppercase, muted
- `.mono-tag` — 11px mono chip label
- `text-lav` — the single accent colour. Used on mono section numbers, chips
  and links — **never** on heading words, which stay a single colour.

---

## 4. Layout

- Max shell `1280px`, gutters `20px` mobile / `32px` desktop.
- Sections are separated by a single hairline (`.rule-top`), never by a colour block.
- Section headers follow a fixed shape: `01 — LABEL` in mono, then a large
  `h2`, then an optional lede, then a right-hand aside (filters).
- Dense lists (Systems, Archive) use `divide-y` hairlines rather than cards so they
  stay scannable.

---

## 5. Motion

Everything respects `prefers-reduced-motion`.

| Element | Technique |
|---|---|
| Section entrance | `.reveal` — opacity + 22px lift, 750ms `cubic-bezier(.22,1,.36,1)`, staggered via `--reveal-delay` |
| Status dot | `pulseDot` expanding ring, 2.4s |
| Marquee | 42s linear translation, pauses on hover |
| Card sheen | 1.5s diagonal sweep on hover |

`Reveal.tsx` is a thin IntersectionObserver wrapper — `threshold: 0.12`, and it
disconnects after the first intersection.

---

## 6. Components

```
src/components/
├── Nav.tsx         Sticky nav, adds blur + hairline after 24px of scroll
├── Hero.tsx        Claim, ask, interest chips, portrait, stats strip
├── Principles.tsx  Positioning statement + three principles
├── Flagships.tsx   Three case-study blocks
├── Work.tsx        Category-indexed project grid (client)
├── Stack.tsx       Marquee + six grouped tool families
├── Contact.tsx     Closing CTA + details
├── Footer.tsx      Directory footer
├── SectionHead.tsx Shared section header
└── Reveal.tsx      Scroll-reveal primitive (client)
```

## 7. Data

All copy lives in `src/data/` so the site can be re-pointed without touching JSX.

| File | Contents |
|---|---|
| `profile.ts` | Identity, headline, ask, stats, contact details |
| `flagships.ts` | The three case studies |
| `work.ts` | All projects, each with an explicit `category` |
| `stack.ts` | Principles + tooling groups |

## 8. Images

Project images are **live captures** of the deployed sites, not mockups. They were
grabbed with headless Chrome, resized to 1200px wide and re-encoded to WebP
(q80) so the page stays light. Projects with no public deployment keep their
repo screenshot; a few with neither render a monogram tile instead of a broken
image.

| Source | Example |
|---|---|
| `unsent-eosin.vercel.app` | Unsent |
| `pos.wiktechnologies.com` | WIK-POS |
| `hmisdemo.wiktechnologies.com` | WIK HMS |
| `duesync.vercel.app` | DueSync |
| `biashara-hub-storefront.onrender.com` | Biashara Hub |
| `juba-errands.vercel.app` | Logit |
| `ktrack.vercel.app` | K-Track |
| `wikscholar.onrender.com` | WIK Scholar |
| `www.mtaakeys.com` | MtaaKeys |
| `cinetaste.vercel.app` | CineTaste |

## 9. Notes

- Images are plain `<img>` tags with `loading="lazy"` — no `next/image` optimisation,
  so `images.unoptimized` stays on and the build has no native dependency.
- External links are absolute and point at live deployments; every one was verified
  reachable before shipping.
- Runtime dependencies are `next`, `react`, `react-dom`. Everything else is
  dev-only. First Load JS: **111 kB**.
