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
    title: "WIK Online Cloud POS & Fiscal Engine",
    category: "Fintech & Fiscal Compliance",
    tags: ["NestJS 11", "KRA eTIMS", "React 19", "M-Pesa STK"],
    summary: "Multi-tenant cloud retail operations platform with automated KRA eTIMS fiscalization and real-time M-Pesa reconciliation queues.",
    description: "Architected a multi-tenant cloud retail platform on NestJS 11, React 19, and PostgreSQL. Engineered an automated background worker integrating KRA eTIMS (OSCU/VSCU) with AES-256 encrypted tax credentials, real-time M-Pesa STK push & C2B Paybill cashier reconciliation queue (C2BQueueModal), and Paystack recurring SaaS subscription guards.",
    stack: ["NestJS 11", "React 19", "PostgreSQL", "Prisma", "KRA eTIMS API", "M-Pesa Daraja", "Paystack", "Docker"],
    highlights: [
      "Automated KRA eTIMS OSCU/VSCU fiscalization worker with AES-256 encrypted tax credentials",
      "Real-time M-Pesa STK Push & C2B Paybill cashier reconciliation queue (C2BQueueModal)",
      "Paystack recurring subscription lifecycle guards (ActiveSubscriptionGuard, SuspendedWall)",
      "Multi-tenant data isolation with strict tenant scoping"
    ],
    image: "/images/projects/wik-pos.webp",
    featured: true,
    link: "https://pos.wiktechnologies.com/",
  },
  {
    id: "mtaakeys",
    title: "MtaaKeys Property Marketplace & Verification Platform",
    category: "Real Estate & Monorepos",
    tags: ["Next.js 16", "Express 5", "Prisma & Postgres", "Socket.IO"],
    summary: "Premier Kenyan property marketplace connecting seekers with verified agents, landlords, and land agents with strict moderation.",
    description: "Architected MtaaKeys as a high-security monorepo featuring a Next.js 16 discovery frontend, an Express 5 TypeScript API with Prisma ORM, Socket.IO real-time chat, and a dedicated Vite/React 19 Admin Portal with a unified Verification Center for reviewing national IDs, business registrations, and KRA certificates.",
    stack: ["Next.js 16", "Express 5", "TypeScript", "Prisma", "PostgreSQL", "Socket.IO", "React 19", "Tailwind CSS"],
    highlights: [
      "Multi-role RBAC architecture (Seeker, Agent, Landlord, Land Agent, Super Admin)",
      "Centralized Verification Center with document lightbox and one-click compliance review",
      "Real-time property inquiry messaging and notifications via Socket.IO",
      "Live production platform deployed and serving active Kenyan listings"
    ],
    image: "/images/projects/mtaakeys.webp",
    featured: true,
    link: "https://www.mtaakeys.com/",
  },
  {
    id: "hotbill",
    title: "HotBill KE Telecommunications Daemon",
    category: "Network Automation & Telecom",
    tags: ["MikroTik API", "RouterOS :8728", "M-Pesa Daraja", "Docker"],
    summary: "Automated ISP/hotspot billing daemon integrating MikroTik RouterOS socket API with M-Pesa Daraja STK push.",
    description: "Built an automated telecommunications billing daemon integrating the MikroTik RouterOS binary socket API (:8728) with M-Pesa Daraja STK push and a Next.js 14 NOC console for ISP and public hotspot bandwidth provisioning in Docker Compose. Automates hotspot voucher issuance, queue tree rate limiting, and subscriber disconnects upon quota exhaustion.",
    stack: ["Node.js", "MikroTik RouterOS API", "M-Pesa Daraja STK Push", "Next.js 14", "Docker Compose", "PostgreSQL"],
    highlights: [
      "Direct binary socket communication with MikroTik RouterOS API (:8728)",
      "Instant M-Pesa STK Push authorization and automated bandwidth queue provisioning",
      "Dockerized Network Operations Center (NOC) dashboard for live subscriber telemetry",
      "Automated walled-garden enforcement and quota-based session teardown"
    ],
    image: "/images/projects/hotbill.webp",
    featured: true,
  },
  {
    id: "wik-pos-desktop",
    title: "WIK-POS Enterprise Desktop Suite",
    category: "POS Family · Offline-First Suite",
    tags: ["Retail Edition", "Hotel F&B Edition", "Pharmacy Edition", "Hardware License"],
    summary: "Unified offline-first desktop POS suite encompassing Retail Supermarket, Hotel F&B (KOT), and Pharmacy (PPB/FEFO) editions with hardware-bound licensing.",
    description: "Architected the unified WIK-POS Enterprise Desktop Suite on Electron, React, and SQLite. Engineered as a modular multi-industry platform packaging three specialized desktop editions: Retail Supermarket (inventory reordering & customer CRM), Hotel F&B (table management, room folio billing & Kitchen Order Tickets), and Healthcare Pharmacy (PPB compliance, batch tracking & 60-day FEFO expiry quarantine). All editions operate 100% offline with embedded SQLite and share a unified hardware-bound licensing authority (CPU+MAC fingerprinting) with 30-day offline grace buffers.",
    stack: ["Electron", "better-sqlite3", "Node.js", "React", "Hardware Fingerprinting", "KRA eTIMS API"],
    highlights: [
      "Includes 3 specialized desktop editions: Retail Supermarket, Hotel F&B, and Pharmacy",
      "Hardware-bound cryptographic licensing checking CPU/MAC signatures against forged activations",
      "30-day offline grace buffer allowing continuous cash-register operation without internet",
      "Official installers for Windows (.exe), Mac (.dmg), and Linux (.deb/.snap) downloadable at wiktechnologies.com/downloads"
    ],
    image: "/images/projects/wik-pos-desktop.webp",
    featured: true,
    downloadUrl: "https://wiktechnologies.com/downloads",
  },
  {
    id: "hiro",
    title: "Hiro Autonomous Multi-Model AI Agent Mesh",
    category: "Autonomous AI & Multi-Agent Swarms",
    tags: ["TypeScript", "Multi-Agent Mesh", "Telegram & WhatsApp", "SQLite & Pinecone"],
    summary: "Self-hosted autonomous AI agent mesh for Telegram & WhatsApp with role-aware multi-model orchestration, vector memory, dynamic skills, and MCP tools.",
    description: "Architected a self-hosted autonomous agent system supporting dual-channel Telegram and WhatsApp operations. Features a multi-model mesh workflow engine orchestrating role-aware worker pools (Codestral, Gemini, Groq, DeepSeek) with automated failovers, dynamic skills runtime, document vector retrieval, and browser-based operator canvas.",
    stack: ["TypeScript", "Node.js", "Telegram API", "WhatsApp Cloud API", "SQLite", "Pinecone", "Model Context Protocol", "Docker"],
    highlights: [
      "Role-aware multi-model mesh workflow engine with parallel worker execution and automatic failover",
      "Dual-channel Telegram & WhatsApp gateway with single-owner cryptographic session isolation",
      "Dynamic skill generation and live agentskills.io / SKILL.md runtime execution",
      "Document vector indexing and searchable conversational memory in SQLite"
    ],
    image: "/images/projects/hiro.jpg",
    featured: true,
    github: "https://github.com/Paul-Karonji/Hiro",
  },
  {
    id: "wik-hotel-pos",
    title: "WIK-POS Hotel & Hospitality Edition",
    category: "POS Family · Hospitality",
    tags: ["Table Management", "KOT Hold & Recall", "Room Folio", "Offline"],
    summary: "Purpose-built food & beverage POS for hotel restaurants, bars, and room service with table layouts, KOT ticketing, and room billing.",
    description: "Purpose-built for hotel restaurants, bars, and room service. Includes dynamic visual table management, room folio guest billing, Kitchen Order Tickets (KOT) Hold & Recall, and a real-time production log for kitchen staff. Deployed with multi-terminal local LAN socket sync.",
    stack: ["Electron", "React", "SQLite", "Node.js", "LAN Sockets", "ESC/POS Thermal"],
    highlights: [
      "Visual floor plan and interactive table status management (Occupied, Reserved, Billed)",
      "Kitchen Order Tickets (KOT) Hold & Recall queue with kitchen printer routing",
      "Room folio billing integrating restaurant tabs into front-desk guest invoices",
      "Windows (.exe), Mac (.dmg), and Linux (.snap) installers available on wiktechnologies.com"
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
    summary: "Enterprise pharmacy POS engineered for PPB compliance, batch tracking, FEFO dispensing, and automated 60-day expiry quarantine.",
    description: "Engineered specifically for Kenyan pharmacies and healthcare dispensaries. Built for Pharmacy and Poisons Board (PPB) compliance with full batch tracking, FEFO dispensing, and automated 60-day expiry quarantine alerts. Features KRA eTIMS fiscal compliance, M-Pesa STK Push, SHA insurance claims, and multi-modal split payments.",
    stack: ["Electron", "React", "SQLite", "KRA eTIMS API", "M-Pesa Daraja", "SHA Claims"],
    highlights: [
      "Pharmacy & Poisons Board (PPB) regulatory compliance with complete batch tracking",
      "FEFO (First-Expired, First-Out) automated stock picking and fractional dispensing",
      "Automated 60-day expiry quarantine alerts preventing expired drug dispensation",
      "Integrated KRA eTIMS hardware-free fiscal receipts and SHA insurance reconciliation"
    ],
    image: "/images/projects/wik-pharmacy-pos.webp",
    featured: false,
    downloadUrl: "https://wiktechnologies.com/downloads",
  },
  {
    id: "duesync",
    title: "DueSync Smart Task Management & AI Calendar Engine",
    category: "Autonomous AI & Cloud SaaS",
    tags: ["Next.js 15", "13-Tool MCP Server", "Upstash Redis", "OAuth2"],
    summary: "Smart task-management SaaS featuring two-way Google Calendar OAuth2 sync and a native 13-tool Model Context Protocol AI server.",
    description: "Shipped a task-management platform on Next.js 15 featuring two-way Google Calendar OAuth2 synchronization, Upstash Redis rate limiting, and a native 13-tool Model Context Protocol (MCP) server that empowers autonomous AI agents to orchestrate schedule planning, detect calendar conflicts, and auto-allocate deep-work blocks.",
    stack: ["Next.js 15", "React 19", "Model Context Protocol (MCP)", "Google Calendar API v3", "Upstash Redis", "Tailwind CSS"],
    highlights: [
      "Native 13-tool Model Context Protocol (MCP) server for autonomous AI schedule orchestration",
      "Bidirectional Google Calendar sync with OAuth 2.0 incremental authorization",
      "Upstash Redis token-bucket rate limiting for secure public-facing AI endpoints",
      "Live production cloud SaaS deployed at duesync.wiktechnologies.com"
    ],
    image: "/images/projects/duesync.webp",
    featured: true,
    link: "https://duesync.wiktechnologies.com/",
    github: "https://github.com/Paul-Karonji/DueSync",
  },
  {
    id: "wik-scholar",
    title: "Wik Scholar Enterprise School ERP & Grading Engine",
    category: "Enterprise EdTech & ERP",
    tags: ["Next.js", "CBC Grading Scale", "PostgreSQL", "Multi-Tenant"],
    summary: "Multi-tenant school management ERP with automated Kenya CBC grading calculations, fee structures ledger, and parent/teacher portals.",
    description: "Architected an end-to-end multi-tenant school operations platform with automated CBC grading scale engines, batch student marks import, automated fee structure ledgers, and secure PDF report-card generation.",
    stack: ["Next.js", "React 19", "PostgreSQL", "Prisma", "Tailwind CSS", "PDFKit", "Docker"],
    highlights: [
      "Automated CBC (Competency-Based Curriculum) grading scale and assessment calculation engine",
      "Multi-tier fee structure management with automated payment reconciliation ledger",
      "Teacher marks grid with batch grade sheet upload and real-time validation",
      "Live interactive web demo deployed on Render"
    ],
    image: "/images/projects/wik-scholar.webp",
    featured: false,
    link: "https://wikscholar.onrender.com/",
  },
  {
    id: "logit",
    title: "Logit Cargo & Waybill Telemetry Pipeline",
    category: "Distributed Systems & Logistics",
    tags: ["Turbo Monorepo", "Event Streaming", "Waybill Register", "PostgreSQL"],
    summary: "High-throughput distributed waybill and cargo event pipeline with sub-millisecond timeline ingestion and live operator console.",
    description: "Built a distributed cargo tracking and waybill event pipeline organized as a Turbo monorepo. Handles high-velocity freight milestones, multi-office dispatch manifests (Nairobi, Juba, Kampala), real-time handover audit trails, and delivers an immersive dark-mode operator console.",
    stack: ["Turbo Monorepo", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Playwright"],
    highlights: [
      "High-velocity waybill event stream processor with deterministic batch persistence",
      "Real-time dispatch system picker and multi-office transit tracking (Juba/Kampala/Nairobi)",
      "Tamper-evident audit log with chronological state diffing on every package milestone",
      "End-to-end synthetic monitoring and Playwright automated regression suites"
    ],
    image: "/images/projects/logit.webp",
    featured: false,
  },
  {
    id: "brixton-makunga",
    title: "Brixton Makunga Hospital Management ERP",
    category: "Healthcare & Enterprise ERP",
    tags: ["Laravel 12", "React 19", "MySQL 8", "FEFO Inventory"],
    summary: "200+ endpoint clinical hospital ERP with automated ledger billing via Observer pattern and real-time triage queue management.",
    description: "Delivered a comprehensive 200+ endpoint clinical ERP for Brixton Makunga Hospital using Laravel 12, React 19, and MySQL 8. Built automated ledger billing via the Observer pattern, real-time triage queue management, and pharmacy First-Expired-First-Out (FEFO) batch expiry registers.",
    stack: ["Laravel 12", "React 19", "MySQL 8", "Tailwind CSS", "Observer Pattern", "RESTful API"],
    highlights: [
      "200+ secure REST endpoints spanning clinical triage, doctor consultations, and inpatient wards",
      "Automated financial ledger billing triggered via transactional Observer patterns",
      "Pharmacy FEFO (First-Expired, First-Out) batch management ensuring patient safety",
      "Live interactive demo deployed at hmisdemo.wiktechnologies.com"
    ],
    image: "/images/projects/brixton-makunga.webp",
    featured: false,
    link: "https://hmisdemo.wiktechnologies.com/",
  },
  {
    id: "fleettrack",
    title: "FleetTrack Enterprise IoT Telematics",
    category: "High-Concurrency IoT & Mobile",
    tags: ["Go Goroutines", "WebSockets", "Expo 57", "SQLite"],
    summary: "High-concurrency Go backend for batch IoT telematics ingestion paired with an offline-first React Native driver app.",
    description: "Engineered a high-concurrency Go ingestion pipeline handling high-frequency GPS telematics batch ingestion and real-time WebSocket fan-out to dispatchers. Paired with an offline-first React Native (Expo 57) driver mobile app buffering telemetry in local SQLite with QR manifest claiming and automated stoppage detection.",
    stack: ["Go (Golang)", "Goroutines & Channels", "WebSockets", "React Native 0.86", "Expo 57", "SQLite", "PostgreSQL"],
    highlights: [
      "High-throughput Go ingestion pipeline with sub-millisecond channel processing",
      "Real-time WebSocket event fan-out to multi-fleet dispatcher consoles",
      "Offline-first driver app buffering telemetry in local SQLite with deterministic sync",
      "QR manifest claiming and geofence-based stoppage detection algorithms"
    ],
    image: "/images/projects/fleettrack.webp",
    featured: false,
  },
  {
    id: "wik-pos-terminal",
    title: "WIK Retail Cashier Terminal & POS Peripherals",
    category: "POS Family · Hardware & PWA",
    tags: ["Offline PWA", "WebUSB Thermal Print", "FEFO Pharmacy", "M-Pesa STK"],
    summary: "Offline-resilient cashier terminal with ESC/POS thermal printing, barcode scanning, and FEFO pharmacy inventory batch controls.",
    description: "Designed the high-speed cashier terminal interface for WIK POS. Features offline operation with local IndexedDB queuing, WebUSB/WebBluetooth thermal receipt printing, cash drawer kickout, and pharmacy FEFO batch controls.",
    stack: ["Next.js PWA", "IndexedDB", "WebUSB / ESC-POS", "M-Pesa Daraja STK", "Tailwind CSS"],
    highlights: [
      "Offline-first cashier queue with automatic background sync upon reconnection",
      "Native WebUSB / WebBluetooth thermal receipt printing and cash drawer triggers",
      "Pharmacy FEFO (First-Expired, First-Out) batch picking and unit conversion controls",
      "Instant M-Pesa STK push payment prompt direct from the retail checkout modal"
    ],
    image: "/images/projects/wik-pos-terminal-real.webp",
    featured: false,
    downloadUrl: "https://wiktechnologies.com/downloads",
  },
  {
    id: "padi",
    title: "Padi Zero-Knowledge Password Vault",
    category: "Cryptography & Security",
    tags: ["Zero-Knowledge", "PBKDF2 100k", "AES-GCM-256", "Web Crypto"],
    summary: "Zero-knowledge cross-browser extension and Web Vault using client-side Web Crypto PBKDF2 (100,000 iterations) and AES-GCM-256.",
    description: "Developed a zero-knowledge password management vault featuring a Manifest V3 browser extension and Web Vault. All encryption and decryption executes strictly on the client using Web Crypto API PBKDF2 (100,000 iterations) and AES-GCM-256. Encrypted ciphertext blobs synchronize transparently to Supabase without the server ever seeing plaintext or master keys.",
    stack: ["TypeScript", "Web Crypto API", "Manifest V3", "AES-GCM-256", "PBKDF2", "Supabase"],
    highlights: [
      "Strict zero-knowledge architecture: Master passwords never leave client memory",
      "Client-side key derivation via 100,000 rounds of PBKDF2/SHA-256",
      "Authenticated AES-GCM-256 encryption for credential payloads",
      "Cross-browser Manifest V3 compatibility and background worker sync"
    ],
    featured: false,
  }
];