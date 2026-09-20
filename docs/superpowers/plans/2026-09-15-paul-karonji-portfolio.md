# Paul Karonji Waithaka Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-grade, contemporary creative developer portfolio for Paul Karonji Waithaka (Full-Stack Software Engineer · Systems Architect · Founder) using Next.js 15, React 19, Tailwind CSS, Framer Motion, and Lenis smooth scrolling, exactly matching the aesthetics of the Luzia design system.

**Architecture:** A static/SSR hybrid Next.js 15 App Router architecture. High-performance client components for interactive scroll-zoom transforms, expandable accordions, and bento project drawers, with zero-latency pre-rendered data structures for 8+ enterprise production projects.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Lenis Smooth Scroll, Lucide React, Pillow (for image processing).

**Spec:** `docs/superpowers/specs/2026-09-15-paul-karonji-portfolio-design.md`

## Global Constraints
- Target Stack: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS
- Design System: Pure Luzia Editorial Style mapped from `DESIGN.md`
- Primary Typography: Instrument Sans (`weights: 400, 500`)
- Hero Visual: `portfolio picture.jfif` from Downloads converted to `public/images/hero-portrait.webp`
- Colors: Canvas `#F7F7F7`, Surfaces `#FFFFFF`, Dark Bento `#111111`, Accent Violet `#7430F7`, Pulse Green `#00C047`, Muted Text `#6C7179`
- Project Coverage: All 8 core systems from CV represented (WIK POS, FleetTrack, DueSync, HotBill, Makunga Hospital, Padi, MtaaKeys, WIK Desktop)

---

### Task 1: Project Scaffolding & Design Tokens Setup
**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`

- [ ] **Step 1: Initialize Next.js 15 project structure and dependencies**
  - Install dependencies: `next@latest`, `react@latest`, `react-dom@latest`, `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `lucide-react`, `lenis`, `clsx`, `tailwind-merge`.
- [ ] **Step 2: Configure Tailwind CSS with Luzia design tokens**
  - Define custom colors: `canvas (#F7F7F7)`, `card (#FFFFFF)`, `darkCard (#111111)`, `charcoal (#1F1F1F)`, `accentViolet (#7430F7)`, `accentGreen (#00C047)`, `accentYellow (#EFCE03)`, `borderHairline (#D1D3D6)`, `mutedText (#6C7179)`.
  - Define border-radius tokens: `40px`, `24px`, `16px`, `100px`.
  - Configure Google Font `Instrument Sans`.
- [ ] **Step 3: Setup Lenis smooth scroll provider in `layout.tsx`**
  - Mount Lenis on the root window for buttery smooth desktop momentum scrolling.
- [ ] **Step 4: Verify build and dev server startup**
  - Run `npm run build` to confirm zero TypeScript / config errors.

---

### Task 2: Asset Pipeline & Media Optimization
**Files:**
- Create: `public/images/hero-portrait.webp` (processed from `C:\Users\paul\Downloads\portfolio picture.jfif`)
- Create: `public/images/projects/` (project mockups / architectural system cards)
- Create: `public/resume.pdf`

- [ ] **Step 1: Convert `portfolio picture.jfif` to optimized WebP**
  - Use Python PIL to resize, crop, and convert to high-res `public/images/hero-portrait.webp`.
- [ ] **Step 2: Generate crisp system architecture preview graphics for the 8 projects**
  - Generate clean visual mockups for WIK POS, FleetTrack IoT, DueSync MCP, and HotBill KE.
- [ ] **Step 3: Verify assets exist in `/public` directory**

---

### Task 3: Data Layer & Content Architecture
**Files:**
- Create: `src/data/profile.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/services.ts`
- Create: `src/data/faqs.ts`

- [ ] **Step 1: Model `profile.ts` with Paul Karonji Waithaka's complete bio & contact metadata**
- [ ] **Step 2: Model `projects.ts` with the 4 flagship systems + 4 extended production systems**
  - Include tags, stack, architecture highlights, metrics, and GitHub/demo links.
- [ ] **Step 3: Model `services.ts` with the 3 core engineering pillars**
- [ ] **Step 4: Model `faqs.ts` with real technical & engagement questions**

---

### Task 4: Navigation Bar & Hero Section
**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Build `Navbar.tsx`**
  - Sticky floating pill layout with `Paul Karonji Waithaka`, center nav links (`Work`, `Services`, `Process`, `Contact`), and `Download CV` primary CTA.
- [ ] **Step 2: Build `Hero.tsx`**
  - Implement the signature Luzia scroll-zoom portrait effect using Framer Motion `useScroll` and `useTransform`.
  - Add the live pulsing green indicator: `● Available for Systems Architecture & Senior Roles`.
  - Add bold display headline and value proposition copy.
  - Add `Schedule Architecture Call` and `Email Me` action buttons.
  - Add the frosted glass bottom blur gradient (`backdrop-blur-xl bg-gradient-to-t from-white/70 to-transparent`).

---

### Task 5: Featured Works & All-Systems Modal
**Files:**
- Create: `src/components/FeaturedWorks.tsx`
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/AllProjectsModal.tsx`

- [ ] **Step 1: Implement 2-Column Bento Grid in `FeaturedWorks.tsx`**
  - Display cards for WIK POS, FleetTrack, DueSync MCP, and HotBill KE with `rounded-[40px]`, hover zoom, and glassmorphic tag pills.
- [ ] **Step 2: Build `AllProjectsModal.tsx`**
  - Interactive modal / drawer to view all 8+ projects with full technical details.

---

### Task 6: Social Proof & Core Engineering Pillars
**Files:**
- Create: `src/components/SocialProof.tsx`
- Create: `src/components/Services.tsx`

- [ ] **Step 1: Build `SocialProof.tsx` (3 Bento Cards)**
  - Card 1: IBM Cybersecurity & JHUB Tech Lead.
  - Card 2: Enterprise Recommendation Quote.
  - Card 3: Metrics Counter (3+ Years, 10+ Systems, 200+ Endpoints, 100k PBKDF2).
- [ ] **Step 2: Build `Services.tsx` (3 Engineering Pillars)**
  - Distributed Systems (Go/NestJS), Full-Stack SaaS (Featured: Electric Violet `#7430F7`), and Fintech & Compliance (M-Pesa/KRA eTIMS).

---

### Task 7: Process Timeline, FAQs, and Footer
**Files:**
- Create: `src/components/HowItWorks.tsx`
- Create: `src/components/FAQs.tsx`
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Build `HowItWorks.tsx`**
  - Dark `#111111` textured bento section with 5-stage engineering lifecycle.
- [ ] **Step 2: Build `FAQs.tsx`**
  - Split 2-column layout with spring-animated collapsible accordions.
- [ ] **Step 3: Build `Footer.tsx`**
  - 3D iridescent visual, display CTA banner, booking link, and 4-column directory.

---

### Task 8: Integration, Testing & Verification
**Files:**
- Modify: `src/app/page.tsx`
- Verify: Full responsive design at Desktop (1440px), Tablet (810px), and Mobile (390px).
- Verify: Zero console errors, smooth 60fps Lenis scroll, and working links.
- Capture visual walkthrough screenshots using Puppeteer.
