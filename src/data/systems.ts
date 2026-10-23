export interface SystemEntry {
  id: string;
  title: string;
  kicker?: string;
  blurb: string;
  stack: string[];
  image: string;
  imageAlt: string;
  status: "production" | "live" | "building";
  link?: string;
  linkLabel?: string;
  github?: string;
}

/**
 * The long tail: systems that are real and running, but are variations
 * on a theme rather than a story worth three paragraphs.
 */
export const systems: SystemEntry[] = [
  {
    id: "wik-pos-hotel",
    title: "WIK-POS · Hotel Edition",
    blurb:
      "Food and beverage POS for hotel restaurants and room service — visual table management, Kitchen Order Ticket hold and recall, and room folio billing folded into front-desk invoices.",
    stack: ["Electron", "SQLite", "LAN sockets", "ESC/POS"],
    image: "/images/projects/wik-hotel-pos.webp",
    imageAlt: "Hotel POS table layout",
    status: "production",
    link: "https://wiktechnologies.com/downloads",
    linkLabel: "Download",
  },
  {
    id: "wik-pos-pharmacy",
    title: "WIK-POS · Pharmacy Edition",
    blurb:
      "Built for Pharmacy and Poisons Board compliance: full batch tracking, FEFO dispensing, automated 60-day expiry quarantine, SHA insurance claim reconciliation and KRA eTIMS receipts.",
    stack: ["Electron", "KRA eTIMS", "M-Pesa", "SHA claims"],
    image: "/images/projects/wik-pharmacy-pos.webp",
    imageAlt: "Pharmacy POS batch dispensing",
    status: "production",
    link: "https://wiktechnologies.com/downloads",
    linkLabel: "Download",
  },
  {
    id: "wik-pos-terminal",
    title: "WIK Retail Terminal",
    blurb:
      "An offline-resilient cashier PWA with IndexedDB write queuing, native WebUSB and WebBluetooth thermal printing, cash drawer triggers and instant STK push from the checkout modal.",
    stack: ["Next.js PWA", "IndexedDB", "WebUSB", "M-Pesa"],
    image: "/images/projects/wik-pos-terminal-real.webp",
    imageAlt: "Retail cashier terminal",
    status: "production",
  },
  {
    id: "pos-license-server",
    title: "Pos-License-Server",
    blurb:
      "The licensing authority behind the WIK-POS suite: three tiers (lifetime, subscription, trial), hardware fingerprinting, remote revocation, Neon Postgres and automated R2 backups.",
    stack: ["Node.js", "JWT binding", "Neon Postgres", "Docker", "Caddy"],
    image: "/images/projects/pos-license-server.webp",
    imageAlt: "Licensing server dashboard",
    status: "production",
  },
  {
    id: "mtaakeys",
    title: "MtaaKeys",
    blurb:
      "A Kenyan property marketplace and rental platform — five user roles under row-level security, dual Paystack revenue (agent subscriptions plus pay-per-use listing boosts) driven by node-cron lifecycle jobs, and algorithmic featured-listing curation with recency decay.",
    stack: ["Next.js", "Express 5", "Prisma", "Socket.IO", "Paystack"],
    image: "/images/projects/mtaakeys.webp",
    imageAlt: "MtaaKeys property listings",
    status: "live",
    link: "https://www.mtaakeys.com/",
    linkLabel: "Live site",
  },
  {
    id: "wiktrack",
    title: "wiktrack",
    blurb:
      "An Android app that reads Safaricom M-Pesa SMS on-device through a custom Kotlin module, caches transactions in local SQLite first, then syncs to Supabase — with a daily 8pm EAT push summary via Vercel Cron.",
    stack: ["Expo", "Kotlin module", "SQLite", "Supabase", "FCM"],
    image: "/images/projects/wiktrack.webp",
    imageAlt: "wiktrack income dashboard",
    status: "live",
    link: "https://wiktrack.vercel.app",
    linkLabel: "Live app",
    github: "https://github.com/Paul-Karonji/wiktrack",
  },
  {
    id: "wikscholar",
    title: "WIK Scholar",
    blurb:
      "A multi-tenant school ERP with an automated Kenya CBC competency grading engine, tenant-scoped queries off the signed session, a server-side permission matrix, batch marks import and PDF report cards.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "PDFKit", "Docker"],
    image: "/images/projects/wik-scholar.webp",
    imageAlt: "WIK Scholar grading grid",
    status: "live",
    link: "https://wikscholar.onrender.com",
    linkLabel: "Live demo",
  },
  {
    id: "unsent",
    title: "Unsent",
    kicker: "Design-forward",
    blurb:
      "A private offline-capable diary PWA built around a 'Soft Midnight' design language — mood tags, on-this-day resurfacing, attachments, zip export of your whole journal, and a PBKDF2 local lock that unlocks with the same password when there is no network.",
    stack: ["React", "Vite", "VitePWA", "Supabase", "IndexedDB", "PBKDF2"],
    image: "/images/hero-cutout.webp",
    imageAlt: "Unsent diary interface",
    status: "live",
    link: "https://unsent-eosin.vercel.app",
    linkLabel: "Live app",
    github: "https://github.com/Paul-Karonji/unsent",
  },
  {
    id: "fleettrack",
    title: "FleetTrack",
    blurb:
      "Founding-engineer build of Atlas Data's fleet telematics platform: a high-concurrency Go backend fanning out over WebSockets to dispatcher live maps, with an Expo driver app buffering GPS samples in SQLite and syncing in batches on reconnect.",
    stack: ["Go", "Gorilla WebSocket", "React 19", "Expo", "PostgreSQL"],
    image: "/images/projects/fleettrack.webp",
    imageAlt: "FleetTrack live map",
    status: "live",
    link: "https://fleetops-mauve.vercel.app",
    linkLabel: "Live console",
  },
  {
    id: "padi",
    title: "Padi",
    blurb:
      "A zero-knowledge password vault — a Manifest V3 extension and web vault where key derivation and AES-GCM-256 encryption happen entirely in the browser, and the server only ever stores ciphertext.",
    stack: ["TypeScript", "Web Crypto", "Manifest V3", "AES-GCM", "Supabase"],
    image: "/images/projects/pos-license-server.webp",
    imageAlt: "Padi vault interface",
    status: "building",
  },
  {
    id: "rms",
    title: "RMS",
    blurb:
      "A multi-tenant rental management platform for property companies — rent collection, platform fee handling and financial operations across a portfolio of properties.",
    stack: ["PHP", "MySQL", "Multi-tenant"],
    image: "/images/projects/wik-scholar.webp",
    imageAlt: "RMS property dashboard",
    status: "building",
    github: "https://github.com/Paul-Karonji/RMS",
  },
  {
    id: "remote-dashboard",
    title: "Remote WIK-POS Dashboard",
    blurb:
      "A remote operations console for the POS fleet — watching terminal health, licence state and fiscalisation status across deployed devices.",
    stack: ["JavaScript", "Realtime"],
    image: "/images/projects/pos-license-server.webp",
    imageAlt: "Remote POS dashboard",
    status: "live",
    link: "https://remote-wik-pos-dashboard.vercel.app",
    linkLabel: "Live console",
  },
];
