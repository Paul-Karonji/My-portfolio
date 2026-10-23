export interface LabProject {
  id: string;
  title: string;
  kicker: string;
  category: string;
  blurb: string;
  detail: string;
  stack: string[];
  image: string;
  imageAlt: string;
  link?: string;
  linkLabel?: string;
  github?: string;
  year: string;
}

export type LabTag = "all" | "agent" | "civic" | "platform" | "commerce";

export const labTags: { id: LabTag; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "agent", label: "Agents & MCP" },
  { id: "civic", label: "Civic & Trust" },
  { id: "platform", label: "Platforms" },
  { id: "commerce", label: "Commerce & Fintech" },
];

export const labProjects: LabProject[] = [
  {
    id: "duesync",
    title: "DueSync",
    kicker: "Task PWA with a native MCP server",
    category: "agent",
    blurb:
      "A task platform that ships a Model Context Protocol server exposing 13 tools, so an AI agent can create, complete and auto-schedule deep work.",
    detail:
      "Next.js 15 and Prisma with two-way Google Calendar sync, recurring tasks, Pomodoro focus mode, timezone-aware reminders and VAPID push — hardened with row-level security, strict CSP and Upstash rate limiting.",
    stack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "MCP", "Upstash Redis"],
    image: "/images/projects/duesync.webp",
    imageAlt: "DueSync task interface",
    link: "https://duesync.vercel.app",
    linkLabel: "Live app",
    github: "https://github.com/Paul-Karonji/DueSync",
    year: "2026",
  },
  {
    id: "votewatch",
    title: "VoteWatch",
    kicker: "Cryptographically verifiable election observation",
    category: "civic",
    blurb:
      "Parallel vote tabulation where every tally is SHA-256 fingerprinted and the database itself refuses to let a vote count be edited.",
    detail:
      "PostgreSQL immutability triggers block UPDATE and DELETE on observations outright; an automated conflict engine quarantines discrepant tallies; Cloudflare R2 presigned uploads keep evidence photos off the server; SSE pushes results in under 500ms.",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "SHA-256", "Cloudflare R2", "SSE"],
    image: "/images/projects/votewatch.webp",
    imageAlt: "VoteWatch tally console",
    github: "https://github.com/Paul-Karonji/Votewatch",
    year: "2026",
  },
  {
    id: "logit",
    title: "Logit",
    kicker: "Cross-border courier operations platform",
    category: "platform",
    blurb:
      "The internal platform for a courier running the Nairobi → Juba → Kampala corridor, replacing handwritten books and forwarded spreadsheets.",
    detail:
      "One backend serving four surfaces: a desktop office system, a mobile-first transit portal for drivers, a public no-login tracking page, and an interactive pitch site. Forward-only waybill lifecycle, immutable audit trail, and a guided Excel import for years of legacy records.",
    stack: ["Turborepo", "Next.js", "Node.js", "PostgreSQL", "Playwright"],
    image: "/images/projects/logit.webp",
    imageAlt: "Logit operator console",
    link: "https://logit-api.vercel.app",
    linkLabel: "Live system",
    year: "2026",
  },
  {
    id: "ktrack",
    title: "K-Track",
    kicker: "Tutor-agency commission SaaS",
    category: "commerce",
    blurb:
      "A multi-tenant academic agency command centre running real Visa card payments through Paystack — at a 94% collection rate.",
    detail:
      "Role-partitioned workspaces for commissioners, tutors and superadmins; transparent milestone quoting; encrypted deliverable storage; personal earnings ledgers; real-time Socket.IO messaging; and HMAC-signed guest checkout URLs verified with timing-safe comparison.",
    stack: ["React 19", "Express 5", "Socket.IO", "TiDB", "Paystack", "Cloudflare R2"],
    image: "/images/projects/ktrack.webp",
    imageAlt: "K-Track agency dashboard",
    link: "https://ktrack.vercel.app",
    linkLabel: "Live app",
    year: "2026",
  },
  {
    id: "biashara-hub",
    title: "Biashara Hub",
    kicker: "Headless commerce with M-Pesa wired in",
    category: "commerce",
    blurb:
      "A Medusa.js v2 commerce engine with Kenyan payment rails built in — STK Push, C2B till verification and Paystack card checkout.",
    detail:
      "Opensource headless commerce that removes SaaS platform fees and vendor lock-in: KES default, 16% VAT and all 47 counties pre-loaded, M-Pesa STK Push with server-side status polling, Africa's Talking SMS order updates, and a Supabase Postgres / Redis / MeiliSearch stack.",
    stack: ["Medusa.js v2", "Next.js 15", "M-Pesa Daraja", "Paystack", "PostgreSQL", "Redis"],
    image: "/images/projects/biashara-hub.webp",
    imageAlt: "Biashara Hub storefront",
    link: "https://biashara-hub-storefront.onrender.com",
    linkLabel: "Live store",
    github: "https://github.com/Paul-Karonji/biashara-hub",
    year: "2026",
  },
  {
    id: "hotbill",
    title: "HotBill KE",
    kicker: "ISP billing engine for MikroTik fleets",
    category: "commerce",
    blurb:
      "A carrier-grade billing daemon that speaks to MikroTik RouterOS over a raw binary socket while M-Pesa pays for the bandwidth.",
    detail:
      "Built for Kenyan ISPs, community networks and hotspot operators: STK Push billing, automated hotspot voucher issuance, queue-tree rate limiting, walled-garden enforcement and session teardown at quota exhaustion — with a zero-dependency captive portal and an operator NOC dashboard.",
    stack: ["Node.js", "MikroTik RouterOS", "M-Pesa Daraja", "Next.js 14", "Docker"],
    image: "/images/projects/hotbill.webp",
    imageAlt: "HotBill NOC dashboard",
    year: "2026",
  },
];
