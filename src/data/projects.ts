export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  description: string;
  stack: string[];
  highlights: string[];
  image?: string;
  featured: boolean;
  github?: string;
  link?: string;
  downloadUrl?: string;
}

export const projects: Project[] = [
  {
    id: "wik-pos",
    title: "WIK-POS — Offline-First Desktop POS Suite",
    category: "Offline-First · Fintech & Fiscal Compliance",
    tags: ["Electron", "KRA eTIMS", "M-Pesa STK", "Hardware Licensing"],
    summary:
      "Offline-first desktop POS suite (Electron + React + TypeScript + SQLite) with hardware-bound JWT licensing, M-Pesa Daraja STK Push, and KRA eTIMS fiscalization — modular editions for retail, hotel F&B, and pharmacy.",
    description:
      "Architected WIK-POS, an offline-first desktop POS suite built on Electron, React, TypeScript, and SQLite: hardware-bound JWT licensing (CPU + MAC fingerprint), M-Pesa Daraja STK Push with IP-guarded callbacks, and KRA eTIMS fiscalization (OSCU worker, AES-256-encrypted tax credentials). Modular editions for retail, hotel F&B (KOT), and pharmacy (PPB batch tracking, 60-day FEFO quarantine) — production-deployed and serving live businesses.",
    stack: ["Electron", "React", "TypeScript", "SQLite", "KRA eTIMS OSCU/VSCU", "M-Pesa Daraja", "Hardware Fingerprinting"],
    highlights: [
      "Hardware-bound JWT licensing (CPU + MAC fingerprint) against forged activations",
      "M-Pesa Daraja STK Push with IP-guarded C2B callbacks and reconciliation",
      "KRA eTIMS fiscalization worker with AES-256-encrypted tax credentials",
      "Modular editions: retail, hotel F&B (KOT), pharmacy (PPB batch tracking, 60-day FEFO quarantine)",
    ],
    image: "/images/projects/wik-pos-desktop.webp",
    featured: true,
    link: "https://pos.wiktechnologies.com/",
    downloadUrl: "https://wiktechnologies.com/downloads",
  },
  {
    id: "wik-hms",
    title: "WIK HMS — Hospital Management System",
    category: "Healthcare · Enterprise ERP",
    tags: ["Laravel 12", "React 19", "200+ Endpoints", "FEFO Pharmacy"],
    summary:
      "Hospital management system live in 3 hospitals via white-labeled per-client instances: 200+ REST endpoints, Observer-pattern automated billing, real-time triage queues, and FEFO pharmacy registers.",
    description:
      "Led engineering of WIK HMS, a hospital management system built on Laravel 12 and React 19, deployed live in 3 hospitals via white-labeled per-client instances. Ships 200+ REST endpoints across 56 migrations, Observer-pattern automated billing, real-time triage queues, and FEFO pharmacy batch-expiry registers — running daily clinical operations today.",
    stack: ["Laravel 12", "React 19", "MySQL", "Observer Pattern", "REST API", "White-Labeled Deployment"],
    highlights: [
      "Live in 3 hospitals via white-labeled per-client instances",
      "200+ REST endpoints over 56 migrations spanning clinical, billing, and pharmacy",
      "Observer-pattern automated ledger billing and real-time triage queues",
      "FEFO pharmacy batch registers with expiry-driven dispensing safety",
    ],
    image: "/images/projects/brixton-makunga.webp",
    featured: true,
    link: "https://hmisdemo.wiktechnologies.com/",
  },
  {
    id: "fleettrack",
    title: "FleetTrack — Fleet Telematics & Dispatch Platform",
    category: "Real-Time Systems · High-Concurrency IoT",
    tags: ["Go", "WebSockets", "React Native", "Offline-First"],
    summary:
      "Multi-tenant fleet-telematics and dispatch platform built end-to-end: high-concurrency Go backend, React 19 web console, and Expo driver app with offline-first telemetry sync.",
    description:
      "Founding-engineer build of Atlas Data's FleetTrack: a high-concurrency Go backend (Chi, pgxpool, Gorilla WebSocket), React 19 dispatcher web console, and Expo/React Native driver app. Driver devices buffer GPS/battery samples in SQLite and sync in batches on reconnect; a PostgreSQL hot-state cache feeds real-time WebSocket fan-out to dispatchers' live maps. Deployed in active testing.",
    stack: ["Go (Chi, pgxpool)", "Gorilla WebSocket", "React 19", "Expo / React Native", "PostgreSQL", "SQLite"],
    highlights: [
      "Offline-first telemetry pipeline: SQLite device buffering with batched reconnect sync",
      "Real-time WebSocket fan-out to dispatchers' live maps via a PostgreSQL hot-state cache",
      "30-minute stoppage detection auto-raising critical incidents and live-map alerts",
      "QR/passcode dispatch claiming, pre/post-trip inspections that lock vehicles on critical failures, 4-role RBAC",
    ],
    image: "/images/projects/fleettrack.webp",
    featured: true,
    link: "https://fleetops-mauve.vercel.app",
  },
  {
    id: "ktrack",
    title: "K-Track — Tutor-Agency & Commission SaaS",
    category: "SaaS · Payments",
    tags: ["React 19", "Express 5", "Paystack", "TiDB Serverless"],
    summary:
      "Live SaaS for commission-based tutor agencies processing real Visa card payments via Paystack with USD→KES conversion — 94% payment collection rate across client billing.",
    description:
      "Live multi-tenant SaaS for commission-based tutor agencies: real Visa card payments via Paystack with USD→KES conversion, security-hardened checkout (HMAC-SHA256 timing-safe guest URLs via crypto.timingSafeEqual, raw-byte webhook verification, HttpOnly refresh cookies), an idempotent boot-time schema-patch service for TiDB Serverless, task pooling/claiming, and real-time Socket.IO chat across superadmin/tutor/client roles.",
    stack: ["React 19", "Node.js / Express 5", "TypeScript", "MySQL / TiDB Serverless", "Socket.IO", "Paystack", "Cloudflare R2"],
    highlights: [
      "Real Visa card payments via Paystack with USD→KES conversion; 94% collection rate",
      "HMAC-SHA256 timing-safe guest checkout URLs and raw-byte webhook signature verification",
      "Idempotent boot-time schema-patch service for TiDB Serverless",
      "Real-time Socket.IO chat and task pooling across superadmin/tutor/client roles",
    ],
    image: "/images/projects/ktrack.webp",
    featured: true,
    link: "https://ktrack.vercel.app",
  },
  {
    id: "duesync",
    title: "DueSync — Task-Management PWA & MCP AI Server",
    category: "AI Tooling · Cloud SaaS",
    tags: ["Next.js 15", "13-Tool MCP Server", "Google Calendar", "RLS"],
    summary:
      "Task-management PWA shipping a native Model Context Protocol server exposing 13 tools, so AI agents can create, complete, and auto-schedule deep-work tasks.",
    description:
      "Open-source task platform on Next.js 15 with a native MCP server (stdio + Streamable HTTP) exposing 13 tools for AI-agent schedule orchestration. Two-way Google Calendar sync (OAuth 2.0, proactive token refresh), recurring tasks, Pomodoro mode, timezone-aware reminders, and VAPID push in a PWA + Android TWA. Hardened with row-level security on all tables, strict CSP, Upstash Redis rate limiting, and proactive patching of CVE-2025-55182 / CVE-2025-66478.",
    stack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Model Context Protocol", "Upstash Redis", "Vercel Cron"],
    highlights: [
      "Native MCP server (stdio + Streamable HTTP) exposing 13 AI-agent tools",
      "Two-way Google Calendar sync with OAuth 2.0 and proactive token refresh",
      "RLS on all tables, strict CSP, Upstash Redis rate limiting, Zod validation",
      "Proactively patched CVE-2025-55182 / CVE-2025-66478 (React/Next.js RSC RCE advisory)",
    ],
    image: "/images/projects/duesync.webp",
    featured: true,
    link: "https://duesync.vercel.app",
    github: "https://github.com/Paul-Karonji/DueSync",
  },
  {
    id: "hiro",
    title: "Hiro — Self-Hosted Multi-Model AI Agent",
    category: "Autonomous AI · Multi-Agent",
    tags: ["AI SDK", "Multi-Model Mesh", "Telegram & WhatsApp", "Pinecone"],
    summary:
      "Self-hosted multi-model agent mesh routing across Anthropic, OpenAI, Groq, Mistral, and OpenRouter with parallel task execution and a dynamic self-improving skills system.",
    description:
      "Open-source, self-hosted AI agent: a multi-model mesh routing across Anthropic/OpenAI/Groq/Mistral/OpenRouter with parallel task execution and a dynamic self-improving skills system. Document ingestion (PDF/DOCX), web search, memory-backed conversations, voice I/O, and a rich-output browser canvas — across dual Telegram/WhatsApp interfaces.",
    stack: ["Node.js / TypeScript", "AI SDK", "PostgreSQL / SQLite", "Pinecone", "WhatsApp Cloud API", "Telegram API"],
    highlights: [
      "Multi-model routing across Anthropic/OpenAI/Groq/Mistral/OpenRouter with parallel execution",
      "Dynamic self-improving skills system (live SKILL.md runtime)",
      "Document ingestion (PDF/DOCX), web search, and memory-backed conversations",
      "Voice I/O and rich-output browser canvas over dual Telegram/WhatsApp interfaces",
    ],
    image: "/images/projects/hiro.jpg",
    featured: true,
    github: "https://github.com/Paul-Karonji/Hiro",
  },
  {
    id: "mtaakeys",
    title: "MtaaKeys — Property Marketplace & Rental Management",
    category: "Marketplace · Real Estate",
    tags: ["Next.js", "Express 5", "Paystack", "Socket.IO"],
    summary:
      "Kenyan property marketplace with 5 user roles and row-level security; dual Paystack revenue systems (agent subscriptions + pay-per-use listing Boosts) with node-cron lifecycle jobs.",
    description:
      "Live property marketplace plus rental-management platform: 5 user roles with row-level security, dual Paystack systems (tiered agent subscriptions and pay-per-use listing Boosts) driven by node-cron lifecycle jobs for renewals and downgrades. Algorithmic featured-listing curation (view/inquiry scoring with recency decay), real-time Socket.IO messaging, and Africa's Talking SMS + Resend email notifications.",
    stack: ["Next.js", "Express 5", "TypeScript", "PostgreSQL / Prisma", "Socket.IO", "Paystack", "Africa's Talking"],
    highlights: [
      "5 user roles with row-level security across marketplace and rentals",
      "Dual Paystack systems: tiered agent subscriptions + pay-per-use listing Boosts",
      "node-cron lifecycle jobs for subscription renewals and downgrades",
      "Algorithmic featured-listing curation with view/inquiry scoring and recency decay",
    ],
    image: "/images/projects/mtaakeys.webp",
    featured: true,
    link: "https://www.mtaakeys.com/",
  },
  {
    id: "wiktrack",
    title: "wiktrack — M-Pesa Income Tracker (Android)",
    category: "Mobile · Kenya Fintech Rails",
    tags: ["Expo", "Kotlin Module", "SMS Parsing", "Local-First"],
    summary:
      "Android app with a custom Kotlin module parsing incoming M-Pesa SMS into structured ledgers; local-first SQLite with background Supabase sync and FCM push.",
    description:
      "Expo/React Native income tracker for M-Pesa merchants: a custom native Kotlin module intercepts incoming M-Pesa SMS and parses them into structured ledger entries. Local-first SQLite storage keeps the ledger fully usable offline, with background Supabase sync and FCM push notifications on device.",
    stack: ["Expo / React Native", "Kotlin (custom native module)", "SQLite", "Supabase", "FCM"],
    highlights: [
      "Custom Kotlin module parsing incoming M-Pesa SMS into structured ledgers",
      "Local-first SQLite — fully functional offline",
      "Background Supabase sync and FCM push notifications",
    ],
    image: "/images/projects/wiktrack.webp",
    featured: false,
  },
  {
    id: "pos-license-server",
    title: "Pos-License-Server — Licensing Authority",
    category: "Infrastructure · Security",
    tags: ["3-Tier Licensing", "Hardware Fingerprinting", "Docker + Caddy", "Neon PostgreSQL"],
    summary:
      "Centralized licensing authority for the WIK-POS suite: 3-tier model (lifetime / subscription / trial), hardware fingerprinting, and remote revocation.",
    description:
      "Centralized licensing authority powering WIK-POS activations: a 3-tier model (lifetime / subscription / trial) with hardware fingerprinting and remote revocation. Docker + Caddy deployment across Render/Oracle Cloud with Neon PostgreSQL and automated Cloudflare R2 backups.",
    stack: ["Node.js", "JWT Hardware Binding", "Neon PostgreSQL", "Cloudflare R2", "Docker", "Caddy"],
    highlights: [
      "3-tier licensing: lifetime / subscription / trial",
      "Hardware fingerprinting with remote revocation",
      "Docker + Caddy across Render/Oracle Cloud; automated Cloudflare R2 backups",
    ],
    image: "/images/projects/pos-license-server.webp",
    featured: false,
  },
  {
    id: "biashara-hub",
    title: "biashara-hub — Headless Commerce with Daraja",
    category: "E-Commerce · Open Source",
    tags: ["Medusa.js v2", "M-Pesa Daraja", "Headless", "TypeScript"],
    summary:
      "Medusa.js v2 headless commerce platform with native M-Pesa Daraja (STK Push) checkout integration.",
    description:
      "Open-source headless commerce build on Medusa.js v2 with M-Pesa Daraja integration — STK Push checkout, C2B confirmation webhooks, and a custom storefront, bringing modern composable commerce to Kenyan payment rails.",
    stack: ["Medusa.js v2", "TypeScript", "M-Pesa Daraja", "Node.js", "PostgreSQL"],
    highlights: [
      "Medusa.js v2 composable commerce core",
      "Native M-Pesa Daraja STK Push checkout and C2B webhooks",
    ],
    image: "/images/projects/biashara-hub.webp",
    featured: false,
    github: "https://github.com/Paul-Karonji/biashara-hub",
  },
  {
    id: "votewatch",
    title: "Votewatch — Election-Integrity Platform",
    category: "Civic Tech · In Active Development",
    tags: ["NestJS", "Election Integrity", "TypeScript", "Active Dev"],
    summary:
      "NestJS election-integrity platform for transparent polling observation and results verification — in active development.",
    description:
      "Election-integrity platform built on NestJS for transparent polling observation, incident reporting, and results verification. In active development with public progress on GitHub.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "REST API"],
    highlights: [
      "Structured incident reporting and observer workflows",
      "NestJS modular architecture, in active development",
    ],
    image: "/images/projects/votewatch.webp",
    featured: false,
    github: "https://github.com/Paul-Karonji/Votewatch",
  },
  {
    id: "hotbill",
    title: "HotBill KE — Tenant Wi-Fi Billing Daemon",
    category: "Network Automation & Telecom",
    tags: ["MikroTik API", "RouterOS :8728", "M-Pesa Daraja", "Docker"],
    summary:
      "Automated ISP/hotspot billing daemon integrating MikroTik RouterOS socket API with M-Pesa Daraja STK push.",
    description:
      "Built an automated telecommunications billing daemon integrating the MikroTik RouterOS binary socket API (:8728) with M-Pesa Daraja STK push and a Next.js 14 NOC console for ISP and public hotspot bandwidth provisioning in Docker Compose. Automates hotspot voucher issuance, queue tree rate limiting, and subscriber disconnects upon quota exhaustion.",
    stack: ["Node.js", "MikroTik RouterOS API", "M-Pesa Daraja STK Push", "Next.js 14", "Docker Compose", "PostgreSQL"],
    highlights: [
      "Direct binary socket communication with MikroTik RouterOS API (:8728)",
      "Instant M-Pesa STK Push authorization and automated bandwidth queue provisioning",
      "Dockerized Network Operations Center (NOC) dashboard for live subscriber telemetry",
      "Automated walled-garden enforcement and quota-based session teardown",
    ],
    image: "/images/projects/hotbill.webp",
    featured: false,
  },
  {
    id: "wik-scholar",
    title: "Wikscholar — School ERP & CBC Grading Engine",
    category: "Enterprise EdTech & ERP",
    tags: ["Next.js", "CBC Grading Scale", "PostgreSQL", "Multi-Tenant"],
    summary:
      "Multi-tenant school management ERP with automated Kenya CBC grading calculations, fee structures ledger, and parent/teacher portals.",
    description:
      "Architected an end-to-end multi-tenant school operations platform with automated CBC grading scale engines, batch student marks import, automated fee structure ledgers, and secure PDF report-card generation.",
    stack: ["Next.js", "React 19", "PostgreSQL", "Prisma", "Tailwind CSS", "PDFKit", "Docker"],
    highlights: [
      "Automated CBC (Competency-Based Curriculum) grading scale and assessment calculation engine",
      "Multi-tier fee structure management with automated payment reconciliation ledger",
      "Teacher marks grid with batch grade sheet upload and real-time validation",
      "Live interactive web demo deployed on Render",
    ],
    image: "/images/projects/wik-scholar.webp",
    featured: false,
    link: "https://wikscholar.onrender.com/",
  },
  {
    id: "logit",
    title: "Logit — Cargo & Waybill Telemetry Pipeline",
    category: "Distributed Systems & Logistics",
    tags: ["Turbo Monorepo", "Event Streaming", "Waybill Register", "PostgreSQL"],
    summary:
      "High-throughput distributed waybill and cargo event pipeline with sub-millisecond timeline ingestion and live operator console.",
    description:
      "Built a distributed cargo tracking and waybill event pipeline organized as a Turbo monorepo. Handles high-velocity freight milestones, multi-office dispatch manifests (Nairobi, Juba, Kampala), real-time handover audit trails, and delivers an immersive dark-mode operator console.",
    stack: ["Turborepo", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Playwright"],
    highlights: [
      "High-velocity waybill event stream processor with deterministic batch persistence",
      "Real-time dispatch system picker and multi-office transit tracking (Juba/Kampala/Nairobi)",
      "Tamper-evident audit log with chronological state diffing on every package milestone",
      "End-to-end synthetic monitoring and Playwright automated regression suites",
    ],
    image: "/images/projects/logit.webp",
    featured: false,
  },
  {
    id: "wik-hotel-pos",
    title: "WIK-POS Hotel & Hospitality Edition",
    category: "POS Family · Hospitality",
    tags: ["Table Management", "KOT Hold & Recall", "Room Folio", "Offline"],
    summary:
      "Purpose-built food & beverage POS for hotel restaurants, bars, and room service with table layouts, KOT ticketing, and room billing.",
    description:
      "The hotel F&B edition of the WIK-POS suite: dynamic visual table management, room folio guest billing, Kitchen Order Tickets (KOT) Hold & Recall, and a real-time production log for kitchen staff. Deployed with multi-terminal local LAN socket sync.",
    stack: ["Electron", "React", "SQLite", "Node.js", "LAN Sockets", "ESC/POS Thermal"],
    highlights: [
      "Visual floor plan and interactive table status management (Occupied, Reserved, Billed)",
      "Kitchen Order Tickets (KOT) Hold & Recall queue with kitchen printer routing",
      "Room folio billing integrating restaurant tabs into front-desk guest invoices",
      "Windows (.exe), Mac (.dmg), and Linux (.snap) installers available on wiktechnologies.com",
    ],
    image: "/images/projects/wik-hotel-pos.webp",
    featured: false,
    downloadUrl: "https://wiktechnologies.com/downloads",
  },
  {
    id: "wik-pharmacy-pos",
    title: "WIK-POS Pharmacy & Healthcare Edition",
    category: "POS Family · Healthcare",
    tags: ["PPB Compliance", "FEFO Dispensing", "KRA eTIMS", "60-Day Quarantine"],
    summary:
      "Enterprise pharmacy POS engineered for PPB compliance, batch tracking, FEFO dispensing, and automated 60-day expiry quarantine.",
    description:
      "The healthcare edition of the WIK-POS suite, built for Pharmacy and Poisons Board (PPB) compliance with full batch tracking, FEFO dispensing, and automated 60-day expiry quarantine alerts. Features KRA eTIMS fiscal compliance, M-Pesa STK Push, SHA insurance claims, and multi-modal split payments.",
    stack: ["Electron", "React", "SQLite", "KRA eTIMS API", "M-Pesa Daraja", "SHA Claims"],
    highlights: [
      "Pharmacy & Poisons Board (PPB) regulatory compliance with complete batch tracking",
      "FEFO (First-Expired, First-Out) automated stock picking and fractional dispensing",
      "Automated 60-day expiry quarantine alerts preventing expired drug dispensation",
      "Integrated KRA eTIMS hardware-free fiscal receipts and SHA insurance reconciliation",
    ],
    image: "/images/projects/wik-pharmacy-pos.webp",
    featured: false,
    downloadUrl: "https://wiktechnologies.com/downloads",
  },
  {
    id: "wik-pos-terminal",
    title: "WIK Retail Cashier Terminal & POS Peripherals",
    category: "POS Family · Hardware & PWA",
    tags: ["Offline PWA", "WebUSB Thermal Print", "FEFO Pharmacy", "M-Pesa STK"],
    summary:
      "Offline-resilient cashier terminal with ESC/POS thermal printing, barcode scanning, and FEFO pharmacy inventory batch controls.",
    description:
      "Designed the high-speed cashier terminal interface for WIK POS. Features offline operation with local IndexedDB queuing, WebUSB/WebBluetooth thermal receipt printing, cash drawer kickout, and pharmacy FEFO batch controls.",
    stack: ["Next.js PWA", "IndexedDB", "WebUSB / ESC-POS", "M-Pesa Daraja STK", "Tailwind CSS"],
    highlights: [
      "Offline-first cashier queue with automatic background sync upon reconnection",
      "Native WebUSB / WebBluetooth thermal receipt printing and cash drawer triggers",
      "Pharmacy FEFO (First-Expired, First-Out) batch picking and unit conversion controls",
      "Instant M-Pesa STK push payment prompt direct from the retail checkout modal",
    ],
    image: "/images/projects/wik-pos-terminal-real.webp",
    featured: false,
    downloadUrl: "https://wiktechnologies.com/downloads",
  },
  {
    id: "padi",
    title: "Padi — Zero-Knowledge Password Vault",
    category: "Cryptography & Security",
    tags: ["Zero-Knowledge", "PBKDF2 100k", "AES-GCM-256", "Web Crypto"],
    summary:
      "Zero-knowledge cross-browser extension and Web Vault using client-side Web Crypto PBKDF2 (100,000 iterations) and AES-GCM-256.",
    description:
      "Developed a zero-knowledge password management vault featuring a Manifest V3 browser extension and Web Vault. All encryption and decryption executes strictly on the client using Web Crypto API PBKDF2 (100,000 iterations) and AES-GCM-256. Encrypted ciphertext blobs synchronize transparently to Supabase without the server ever seeing plaintext or master keys.",
    stack: ["TypeScript", "Web Crypto API", "Manifest V3", "AES-GCM-256", "PBKDF2", "Supabase"],
    highlights: [
      "Strict zero-knowledge architecture: master passwords never leave client memory",
      "Client-side key derivation via 100,000 rounds of PBKDF2/SHA-256",
      "Authenticated AES-GCM-256 encryption for credential payloads",
      "Cross-browser Manifest V3 compatibility and background worker sync",
    ],
    featured: false,
  },
];
