# System Design Spec: Paul Karonji Waithaka Portfolio

- Date: 2026-09-15
- Target Audience: Engineering Leaders, Founders, Recruiters, and Global Enterprise Clients
- Design System Origin: Luzia Contemporary Creative Portfolio (Framer)
- Framework: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Lenis Scroll

---

## 1. Executive Vision & Profile

**Subject:** Paul Karonji Waithaka  
**Title:** Full-Stack Software Engineer · Systems Architect · Founder  
**Location:** Nairobi, Kenya (Open to global remote & hybrid roles)  
**Core Positioning:** 3+ years delivering production-grade distributed backends, offline-first architectures, enterprise cloud platforms, and cryptographic tooling. Founder of WIK Technologies.

---

## 2. Design System Tokens (Mapped from Luzia DESIGN.md)

### Colors
- **Canvas / Body:** `#F7F7F7` (Soft neutral gray)
- **Surfaces / Bento Cards:** `#FFFFFF` (Crisp white)
- **High-Contrast Dark Cards & Accents:** `#111111` and `#1F1F1F` (Charcoal)
- **Primary Typography:** `#111111` (High readability, crisp contrast)
- **Muted Body / Metadata:** `#6C7179`
- **Hairline Borders:** `#D1D3D6`
- **Brand Accent (Violet):** `#7430F7` (Highlights full-stack / SaaS service card)
- **Status Green:** `#00C047` (Live availability pulsing indicator)
- **Accolade Amber:** `#EFCE03` (Badges, ratings)

### Typography
- **Primary Font:** Instrument Sans (Google Fonts)
- **Scale:**
  - Hero H1: 40px (2.5rem), -0.03em letter spacing, leading tight
  - Section Title H2: 36px (2.25rem), -0.025em letter spacing
  - Card Heading H3: 24px (1.5rem)
  - Body Text: 16px (1rem), color #6C7179
  - Micro Tags & Badges: 12px (0.75rem), weight 500

### Curvature & Shadows
- **Card Radii:** 40px on main project showcase cards, 24px on service and process cards, 16px on buttons, 100px on pills.
- **Shadows:** Layered ambient drop shadows with multi-stop elevation on hover.
- **Glassmorphism:** backdrop-filter: blur(20px) with gradient white-to-transparent overlays.

---

## 3. Page Architecture & Section Specifications

### 3.1. Sticky Floating Navbar
- **Brand Identity:** Left-aligned text `Paul Karonji Waithaka` (weight 500).
- **Navigation Links:** Center pill with `Work`, `Services`, `Process`, `Contact`.
- **Primary CTA:** High-contrast pill button `Download CV` (direct download of PDF resume).

### 3.2. Cinematic Scroll-Zoom Hero
- **Asset:** High-resolution headshot in `public/images/hero-portrait.webp` (converted from `portfolio picture.jfif`).
- **Scroll Transform:** Pinned scroll container where portrait gently zooms from close-up to balanced framing with bottom frosted glass blur.
- **Live Status Badge:** `● Available for Systems Architecture & Senior Roles` with animated pulsing green dot.
- **Headline:** `Paul Karonji Waithaka — Architecting distributed backends, offline-first systems, and enterprise cloud platforms.`
- **Value Proposition:** Concise summary highlighting 3+ years in production, Go IoT streams, offline SQLite synchronization, and fintech payment rails (M-Pesa, Paystack).
- **Action Buttons:** `Schedule Architecture Call` (Primary) + `Email Me` (Secondary).

### 3.3. Featured Systems (2-Column Bento Grid)
Four flagship production cards with 40px border-radius, high-res previews, and blur-tag badges:
1. **WIK Online Cloud POS:**
   - Stack: NestJS 11, React 19, PostgreSQL, KRA eTIMS AES-256 OSCU/VSCU, M-Pesa Daraja, Paystack.
   - Highlights: Automated fiscalization worker, real-time C2B Paybill cashier reconciliation queue, recurring subscription guards.
2. **FleetTrack Enterprise Telematics:**
   - Stack: Go Goroutines/Channels, WebSockets, React Native (Expo 57), SQLite.
   - Highlights: Batch IoT telemetry ingestion, real-time WebSocket fan-out, offline driver app buffering data locally with QR manifest claiming.
3. **DueSync Smart Task Management & MCP:**
   - Stack: Next.js 15, 13-Tool Native MCP Server, Upstash Redis, Google Calendar OAuth2.
   - Highlights: Enables AI agent orchestration, bidirectional calendar synchronization, Redis rate-limited API endpoints.
4. **HotBill KE Telecommunications:**
   - Stack: MikroTik RouterOS API (:8728), M-Pesa Daraja STK Push, Next.js 14, Docker Compose.
   - Highlights: Automated ISP/hotspot bandwidth provisioning daemon and NOC admin console.
- **Modal / Secondary View:** An `Explore All Systems` button that opens a drawer/modal detailing:
  - Brixton Makunga Hospital Management System (Laravel 12, React 19, 200+ endpoints)
  - Padi Password Manager (Zero-knowledge PBKDF2 100k iterations, AES-GCM-256)
  - MtaaKeys Property Marketplace (Next.js 16, Express 5, Prisma, Paystack tiers)
  - WIK-POS Desktop Suite (Electron, SQLite, CPU/MAC hardware fingerprinting)

### 3.4. Social Proof & Trust (3 Bento Cards)
- **Card 1 (Recognition & Security):** IBM SkillsBuild Cybersecurity Certified, Technical Lead at JHUB Africa, KRA eTIMS Compliance Architecture.
- **Card 2 (Endorsement Quote):** Client / Stakeholder recommendation highlighting architectural rigor, high delivery velocity, and operational reliability.
- **Card 3 (Quantitative Metrics Counter):**
  - 3+ Years Production Engineering
  - 10+ Production Systems Shipped
  - 200+ Hospital ERP Endpoints
  - 100k PBKDF2 Encryption Rounds

### 3.5. Core Engineering Pillars (Services)
Three sculpted cards:
1. **Distributed Systems & High-Throughput Backends:** Go, NestJS, microservices, WebSocket streams, high-concurrency event handling.
2. **Full-Stack SaaS & Offline-First Apps (Featured: Electric Violet #7430F7):** Next.js 15, React 19, React Native/Expo, local-first SQLite sync, Electron.
3. **Fintech, KRA eTIMS & Network Automation:** M-Pesa Daraja STK/C2B, Paystack split billing, KRA eTIMS tax compliance, MikroTik RouterOS socket API.

### 3.6. How It Works (Dark #111111 Bento)
Five-step engineering consulting workflow:
1. `1 Architecture & Discovery Call`
2. `2 System Design & Technical Spec`
3. `3 High-Velocity Build & Testing`
4. `4 Deployment & Production CI/CD`
5. `5 Observability & SLA Support`

### 3.7. Interactive FAQs Accordion
Expandable accordion items:
- Typical project turnaround timelines (MVP vs. Enterprise ERP)
- Handling offline-first local data syncing with cloud databases
- Experience integrating Kenyan & African payment rails (M-Pesa, Paystack, KRA eTIMS)
- Engagement models: Full-time Senior/Lead roles vs. Fractional Architecture Consulting

### 3.8. Closing CTA & Directory Footer
- Iridescent 3D visual element
- Headline: `Ready to architect and scale your next system?`
- Action: `Schedule an Architecture Call` + `Download Full Resume`
- Directory links: Home, Works, Services, GitHub, LinkedIn, Contact (+254 729 089 168, karonjipaul.w@gmail.com).

---

## 4. Implementation Technology Choices

- **Next.js 15 (App Router)** with static page export capability for high availability and zero-latency loading.
- **Tailwind CSS v3/v4** with custom design token utilities matching the Luzia system.
- **Framer Motion** for spring physics, hover scale, accordion transitions, and scroll progress bindings.
- **Lenis Smooth Scroll** for authentic desktop scroll momentum.
- **Lucide Icons** for modern, crisp UI iconography.
- **Optimized Asset Pipeline:** WebP generation for the portrait and project cards.
