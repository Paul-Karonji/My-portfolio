export type CategoryId = "opensource" | "enterprise" | "personal";

export interface WorkItem {
  id: string;
  category: CategoryId;
  title: string;
  kicker: string;
  blurb: string;
  detail: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  link?: string;
  linkLabel?: string;
  github?: string;
  status: "Open source" | "In production" | "Live" | "Building";
}

export interface WorkCategory {
  id: CategoryId;
  label: string;
  blurb: string;
}

export const categories: WorkCategory[] = [
  {
    id: "opensource",
    label: "Open source",
    blurb:
      "Projects where the source is public and you can read it, fork it, or run it yourself. Two of these are on npm-style registries and one is a full agent you can self-host tonight.",
  },
  {
    id: "enterprise",
    label: "Enterprise builds",
    blurb:
      "Work from WIK Technologies and client platforms — hospital, point-of-sale, logistics, telecom and education systems running in real businesses with real money moving through them.",
  },
  {
    id: "personal",
    label: "Personal tools & side projects",
    blurb:
      "Things I built because I wanted them to exist. Design-led front-ends, experiments in commerce and content, and a few ideas that never grew past a weekend.",
  },
];

export const work: WorkItem[] = [
  /* ------------------------------ open source ------------------------------ */
  {
    id: "hiro",
    category: "opensource",
    title: "Hiro",
    kicker: "Self-hosted multi-model AI agent",
    blurb:
      "A personal AI agent that lives on Telegram and WhatsApp, routes work across eight-plus model providers by role, and remembers what it did last month.",
    detail:
      "`/mesh <goal>` decomposes a goal into steps and routes each one by role — planning to Gemini, research to Groq, coding to Codestral, critique to DeepSeek — running independent steps in parallel and failing over between providers mid-flight. Around it sits document ingestion with searchable retrieval, a skills library that writes itself from successful multi-step runs, scheduled tasks, voice in and out, and a browser operator canvas.",
    stack: [
      "Node.js",
      "TypeScript",
      "AI SDK",
      "SQLite",
      "Pinecone",
      "MCP",
      "Fly.io",
    ],
    image: "/images/projects/hiro.jpg",
    imageAlt: "Hiro agent network",
    github: "https://github.com/Paul-Karonji/Hiro",
    linkLabel: "Source",
    status: "Open source",
  },
  {
    id: "duesync",
    category: "opensource",
    title: "DueSync",
    kicker: "Task PWA with a native MCP server",
    blurb:
      "A task platform that ships a Model Context Protocol server exposing 13 tools, so an AI agent can create, complete and auto-schedule deep work.",
    detail:
      "Next.js 15 and Prisma with two-way Google Calendar sync, recurring tasks, Pomodoro focus mode, timezone-aware reminders and VAPID push — hardened with row-level security, strict CSP and Upstash rate limiting.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "MCP",
      "Upstash Redis",
    ],
    image: "/images/projects/duesync.webp",
    imageAlt: "DueSync task interface",
    link: "https://duesync.vercel.app",
    linkLabel: "Live app",
    github: "https://github.com/Paul-Karonji/DueSync",
    status: "Open source",
  },
  {
    id: "biashara-hub",
    category: "opensource",
    title: "Biashara Hub",
    kicker: "Headless commerce with M-Pesa wired in",
    blurb:
      "A Medusa.js v2 commerce engine with Kenyan payment rails built in — STK Push, C2B till verification and Paystack card checkout.",
    detail:
      "Composable commerce that removes SaaS platform fees and vendor lock-in: KES default, 16% VAT and all 47 counties pre-loaded, M-Pesa STK Push with server-side status polling, Africa's Talking SMS order updates, and a Supabase Postgres / Redis / MeiliSearch stack.",
    stack: [
      "Medusa.js v2",
      "Next.js 15",
      "M-Pesa Daraja",
      "Paystack",
      "PostgreSQL",
      "Redis",
    ],
    image: "/images/projects/biashara-hub.webp",
    imageAlt: "Biashara Hub storefront",
    link: "https://biashara-hub-storefront.onrender.com",
    linkLabel: "Live store",
    github: "https://github.com/Paul-Karonji/biashara-hub",
    status: "Open source",
  },
  {
    id: "votewatch",
    category: "opensource",
    title: "VoteWatch",
    kicker: "Cryptographically verifiable election observation",
    blurb:
      "Parallel vote tabulation where every tally is SHA-256 fingerprinted and the database itself refuses to let a vote count be edited.",
    detail:
      "PostgreSQL immutability triggers block UPDATE and DELETE on observations outright; an automated conflict engine quarantines discrepant tallies; Cloudflare R2 presigned uploads keep evidence photos off the server; SSE pushes results in under 500ms.",
    stack: [
      "Next.js 15",
      "NestJS",
      "PostgreSQL",
      "SHA-256",
      "Cloudflare R2",
      "SSE",
    ],
    github: "https://github.com/Paul-Karonji/Votewatch",
    linkLabel: "Source",
    status: "Open source",
  },

  /* ------------------------------ enterprise ------------------------------ */
  {
    id: "wik-hms",
    category: "enterprise",
    title: "WIK HMS",
    kicker: "Hospital management system",
    blurb:
      "Triage, pharmacy, billing and insurance claims in one system — running clinical operations in three hospitals right now.",
    detail:
      "A Laravel 12 and React 19 platform deployed as per-client white-labelled instances: 200+ REST endpoints across 56 migrations, an Observer pattern that posts every clinical event into the billing ledger automatically, real-time triage queues, and FEFO pharmacy registers that dispense the oldest batch first.",
    stack: [
      "Laravel 12",
      "React 19",
      "MySQL",
      "Observer Pattern",
      "REST API",
    ],
    image: "/images/projects/wik-hms.webp",
    imageAlt: "WIK HMS hospital dashboard",
    link: "https://hmisdemo.wiktechnologies.com/",
    linkLabel: "Live demo",
    status: "In production",
  },
  {
    id: "wik-pos",
    category: "enterprise",
    title: "WIK-POS",
    kicker: "Offline-first desktop POS with KRA eTIMS",
    blurb:
      "A desktop point-of-sale suite that keeps selling when the network drops, and whose receipts are actually legal — fiscalised to KRA eTIMS.",
    detail:
      "Electron, React and SQLite with hardware-bound JWT licensing (CPU and MAC fingerprint, verified centrally with remote revocation), M-Pesa Daraja STK Push behind IP-guarded callbacks, and a KRA eTIMS fiscalisation worker that holds AES-256 encrypted tax credentials. Retail, hotel F&B and pharmacy editions ship from the same codebase.",
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "SQLite",
      "KRA eTIMS",
      "M-Pesa Daraja",
    ],
    image: "/images/projects/wik-pos.webp",
    imageAlt: "WIK-POS product page",
    link: "https://pos.wiktechnologies.com/",
    linkLabel: "Live product",
    status: "In production",
  },
  {
    id: "wik-pos-hotel",
    category: "enterprise",
    title: "WIK-POS · Hotel Edition",
    kicker: "Food & beverage POS for hospitality",
    blurb:
      "Visual table management, Kitchen Order Ticket hold-and-recall, and room folio billing folded into front-desk guest invoices.",
    detail:
      "Built for hotel restaurants, bars and room service. Multi-terminal local LAN socket sync keeps every till in step with the kitchen, and the print path speaks ESC/POS to the thermal printers already on the counter.",
    stack: ["Electron", "SQLite", "LAN sockets", "ESC/POS"],
    image: "/images/projects/wik-hotel-pos.webp",
    imageAlt: "WIK-POS hotel edition table layout",
    link: "https://wiktechnologies.com/downloads",
    linkLabel: "Download",
    status: "In production",
  },
  {
    id: "wik-pos-pharmacy",
    category: "enterprise",
    title: "WIK-POS · Pharmacy Edition",
    kicker: "POS built for PPB compliance",
    blurb:
      "Full batch tracking, FEFO dispensing and automated 60-day expiry quarantine, with KRA eTIMS receipts and SHA insurance claims.",
    detail:
      "The healthcare edition of the suite. A pharmacy's real risk is expiry rather than stock count, so this edition leads with batch tracking, first-expired-first-out dispensing and a quarantine that stops expired stock being handed over.",
    stack: ["Electron", "KRA eTIMS", "M-Pesa", "SHA claims"],
    image: "/images/projects/wik-pharmacy-pos.webp",
    imageAlt: "WIK-POS pharmacy edition dispensing",
    link: "https://wiktechnologies.com/downloads",
    linkLabel: "Download",
    status: "In production",
  },
  {
    id: "ktrack",
    category: "enterprise",
    title: "K-Track",
    kicker: "Tutor-agency commission SaaS",
    blurb:
      "A multi-tenant academic agency command centre running real Visa card payments through Paystack — at a 94% collection rate.",
    detail:
      "Role-partitioned workspaces for commissioners, tutors and superadmins; transparent milestone quoting; encrypted deliverable storage; personal earnings ledgers; real-time Socket.IO messaging; and HMAC-signed guest checkout URLs verified with timing-safe comparison.",
    stack: [
      "React 19",
      "Express 5",
      "Socket.IO",
      "TiDB",
      "Paystack",
      "Cloudflare R2",
    ],
    image: "/images/projects/ktrack.webp",
    imageAlt: "K-Track agency dashboard",
    link: "https://ktrack.vercel.app",
    linkLabel: "Live app",
    status: "In production",
  },
  {
    id: "logit",
    category: "enterprise",
    title: "Logit",
    kicker: "Cross-border courier operations platform",
    blurb:
      "The internal platform for a courier running the Nairobi → Juba → Kampala corridor, replacing handwritten books and forwarded spreadsheets.",
    detail:
      "One backend serving four surfaces: a desktop office system, a mobile-first transit portal for drivers, a public no-login tracking page, and an interactive pitch site. Forward-only waybill lifecycle, immutable audit trail, and a guided Excel import for years of legacy records.",
    stack: ["Turborepo", "Next.js", "Node.js", "PostgreSQL", "Playwright"],
    image: "/images/projects/logit.webp",
    imageAlt: "Logit and Juba Errands live site",
    link: "https://juba-errands.vercel.app",
    linkLabel: "Live site",
    status: "In production",
  },
  {
    id: "hotbill",
    category: "enterprise",
    title: "HotBill KE",
    kicker: "ISP billing engine for MikroTik fleets",
    blurb:
      "A carrier-grade billing daemon that speaks to MikroTik RouterOS over a raw binary socket while M-Pesa pays for the bandwidth.",
    detail:
      "Built for Kenyan ISPs, community networks and hotspot operators: STK Push billing, automated hotspot voucher issuance, queue-tree rate limiting, walled-garden enforcement and session teardown at quota exhaustion — with a zero-dependency captive portal and an operator NOC dashboard.",
    stack: [
      "Node.js",
      "MikroTik RouterOS",
      "M-Pesa Daraja",
      "Next.js 14",
      "Docker",
    ],
    status: "In production",
  },
  {
    id: "mtaakeys",
    category: "enterprise",
    title: "MtaaKeys",
    kicker: "Property marketplace & rental management",
    blurb:
      "A Kenyan property platform — five user roles under row-level security, and two Paystack revenue models running side by side.",
    detail:
      "Tiered agent subscriptions and pay-per-use listing Boosts driven by node-cron lifecycle jobs for renewals and downgrades, algorithmic featured-listing curation with view/inquiry scoring and recency decay, real-time Socket.IO messaging, and Africa's Talking SMS plus Resend email notifications.",
    stack: [
      "Next.js",
      "Express 5",
      "Prisma",
      "Socket.IO",
      "Paystack",
    ],
    image: "/images/projects/mtaakeys.webp",
    imageAlt: "MtaaKeys property listings",
    link: "https://www.mtaakeys.com/",
    linkLabel: "Live site",
    status: "Live",
  },
  {
    id: "wik-scholar",
    category: "enterprise",
    title: "WIK Scholar",
    kicker: "School ERP with a Kenya CBC grading engine",
    blurb:
      "A multi-tenant school ERP with automated competency grading, tenant-scoped queries off the signed session, and a server-side permission matrix.",
    detail:
      "CBC (Competency-Based Curriculum) grading scale and assessment calculation engines, batch student marks import, multi-tier fee structures with an automated payment reconciliation ledger, and secure PDF report-card generation.",
    stack: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "PDFKit",
      "Docker",
    ],
    image: "/images/projects/wik-scholar.webp",
    imageAlt: "WIK Scholar grading grid",
    link: "https://wikscholar.onrender.com",
    linkLabel: "Live demo",
    status: "Live",
  },
  {
    id: "wiktrack",
    category: "enterprise",
    title: "wiktrack",
    kicker: "Android M-Pesa income tracker",
    blurb:
      "An Android app that reads Safaricom M-Pesa SMS on-device through a custom Kotlin module, caches transactions locally, then syncs them up.",
    detail:
      "Native SMS interception parsed into structured ledger entries, local-first SQLite storage that stays fully usable offline, background Supabase sync and FCM push, plus a daily 8pm EAT summary delivered through Vercel Cron.",
    stack: ["Expo", "Kotlin module", "SQLite", "Supabase", "FCM"],
    image: "/images/projects/wiktrack.webp",
    imageAlt: "wiktrack income dashboard",
    link: "https://wiktrack.vercel.app",
    linkLabel: "Live app",
    status: "Live",
  },
  {
    id: "fleettrack",
    category: "enterprise",
    title: "FleetTrack",
    kicker: "Fleet telematics & dispatch platform",
    blurb:
      "Founding-engineer build of Atlas Data's fleet telematics: a high-concurrency Go backend fanning out over WebSockets to dispatcher live maps.",
    detail:
      "An Expo driver app buffers GPS and battery samples in SQLite and syncs them in batches on reconnect, while a PostgreSQL hot-state cache feeds real-time WebSocket fan-out. 30-minute stoppage detection auto-raises critical incidents, with QR dispatch claiming, pre/post-trip inspections and 4-role RBAC.",
    stack: [
      "Go",
      "Gorilla WebSocket",
      "React 19",
      "Expo",
      "PostgreSQL",
      "SQLite",
    ],
    image: "/images/projects/fleettrack.webp",
    imageAlt: "FleetTrack live map",
    link: "https://fleetops-mauve.vercel.app",
    linkLabel: "Live console",
    status: "In production",
  },
  {
    id: "rms",
    category: "enterprise",
    title: "RMS",
    kicker: "Rental management for property companies",
    blurb:
      "A multi-tenant platform for property managers to run portfolios, collect rent and handle the financial side.",
    detail:
      "Two pricing models on one codebase — companies processing payments through the platform and taking a fee, and managers collecting directly — with tenant-scoped data across the whole portfolio.",
    stack: ["PHP", "MySQL", "Multi-tenant"],
    status: "Building",
  },
  {
    id: "pos-license-server",
    category: "enterprise",
    title: "Pos-License-Server",
    kicker: "Licensing authority for the POS suite",
    blurb:
      "Three-tier licensing (lifetime, subscription, trial) with hardware fingerprinting and remote revocation.",
    detail:
      "Hardware-bound JWT activations verified centrally, deployed with Docker and Caddy across Render and Oracle Cloud on Neon Postgres, with automated Cloudflare R2 backups of the licence database.",
    stack: [
      "Node.js",
      "JWT binding",
      "Neon Postgres",
      "Docker",
      "Caddy",
    ],
    status: "In production",
  },
  {
    id: "remote-dashboard",
    category: "enterprise",
    title: "Remote WIK-POS Dashboard",
    kicker: "Operations console for the deployed POS fleet",
    blurb:
      "Watching terminal health, licence state and fiscalisation status across every device in the field.",
    detail:
      "A live operational view of the deployed estate — the fastest way to see when a terminal goes quiet or a fiscalisation queue starts backing up.",
    stack: ["JavaScript", "Realtime"],
    image: "/images/projects/remote-dashboard.webp",
    imageAlt: "Remote POS dashboard",
    link: "https://remote-wik-pos-dashboard.vercel.app",
    linkLabel: "Live console",
    status: "Live",
  },

  /* ------------------------------- personal ------------------------------- */
  {
    id: "unsent",
    category: "personal",
    title: "Unsent",
    kicker: "A private diary that works offline",
    blurb:
      "An offline-capable diary PWA built around a 'Soft Midnight' design language — calm, dark, and private by default.",
    detail:
      "Mood tags, on-this-day resurfacing, attachments, a one-click zip export of your whole journal, and a PBKDF2 local lock that unlocks with the same password when the internet is gone. The database sits behind PostgreSQL row-level security.",
    stack: [
      "React",
      "Vite",
      "VitePWA",
      "Supabase",
      "IndexedDB",
      "PBKDF2",
    ],
    image: "/images/projects/unsent.webp",
    imageAlt: "Unsent diary interface",
    link: "https://unsent-eosin.vercel.app",
    linkLabel: "Live app",
    github: "https://github.com/Paul-Karonji/unsent",
    status: "Live",
  },
  {
    id: "cinetaste",
    category: "personal",
    title: "CineTaste",
    kicker: "Movie & series companion",
    blurb:
      "An entertainment tracker that learns your taste and suggests what to watch next.",
    detail:
      "Built for people who keep a watchlist and a vague sense of what they liked — tracking, rating and taste-based recommendations across films, series and anime.",
    stack: ["TypeScript", "Next.js"],
    image: "/images/projects/cinetaste.webp",
    imageAlt: "CineTaste interface",
    link: "https://cinetaste.vercel.app",
    linkLabel: "Live app",
    status: "Live",
  },
  {
    id: "framel",
    category: "personal",
    title: "Framel",
    kicker: "Flower shop commerce API",
    blurb:
      "An Express + TypeScript backend for an online flower shop, with Firebase, M-Pesa and Cloudinary wired in.",
    detail:
      "A small, complete commerce backend — catalogue, orders, payments and media — for a real shop rather than a tutorial.",
    stack: ["Express", "TypeScript", "Firebase", "M-Pesa", "Cloudinary"],
    github: "https://github.com/Paul-Karonji/framel",
    linkLabel: "Source",
    status: "Live",
  },
  {
    id: "arch",
    category: "personal",
    title: "ARCH Kenya",
    kicker: "Architecture studio portfolio",
    blurb:
      "A luxury-industrial portfolio site — warm earth tones, terracotta and bronze, with heavier motion than this one.",
    detail:
      "A design exercise in a completely different key from the rest of my work — serif display type, project showcase and a warmer palette.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Building",
  },
  {
    id: "bags",
    category: "personal",
    title: "Bags with Mulan",
    kicker: "Luxury handcrafted bags, Nairobi",
    blurb:
      "A boutique e-commerce storefront for a real Nairobi maker — minimalist, black and gold, and quietly premium.",
    detail:
      "Product storytelling, a clean catalogue and a checkout that gets out of the way of the craft.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Building",
  },
  {
    id: "hms-demo",
    category: "personal",
    title: "HMS Browser Demo",
    kicker: "A hospital demo with no backend",
    blurb:
      "The whole hospital management flow — patients, pharmacy with FEFO batches, lab and billing — running entirely client-side.",
    detail:
      "Built so a hospital can click through the entire system on a laptop with no server, no data and no setup. It is how I demo the HMS to people who are not technical.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Building",
  },
];

export const workByCategory = (id: CategoryId) =>
  work.filter((item) => item.category === id);
