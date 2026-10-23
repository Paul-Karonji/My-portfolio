export interface Flagship {
  id: string;
  index: string;
  title: string;
  kicker: string;
  category: string;
  summary: string;
  problem: string;
  build: string;
  hard: string;
  outcome: string;
  stack: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  link?: string;
  linkLabel?: string;
  github?: string;
  badge?: string;
}

/**
 * Three deep case studies. Not a grid of equal cards — each one is written
 * as a problem / build / hard-part / outcome story, because that is the only
 * shape that proves an engineer has actually shipped.
 */
export const flagships: Flagship[] = [
{
    id: "wik-pos",
    index: "01",
    title: "WIK-POS",
    kicker: "Offline-first desktop POS with KRA eTIMS fiscalisation",
    category: "Fintech · Fiscal Compliance · Offline-First",
    summary:
      "A desktop point-of-sale suite that keeps selling when the network drops, and whose receipts are actually legal — fiscalised to KRA eTIMS.",
    problem:
      "A Kenyan shop loses signal every afternoon, so a point-of-sale system that needs the cloud to print a receipt stops selling. And a receipt that is not fiscalised is not a legal receipt. Most POS software in this market solves one of those two problems and quietly ignores the other.",
    build:
      "An Electron, React and SQLite desktop suite with hardware-bound JWT licensing (CPU and MAC fingerprint, verified centrally with remote revocation), M-Pesa Daraja STK Push behind IP-guarded callbacks, and a KRA eTIMS fiscalisation worker that holds AES-256 encrypted tax credentials. Retail, hotel F&B and pharmacy editions ship from the same codebase as modular installs.",
    hard:
      "Fiscalising without connectivity. The eTIMS OSCU/VSCU worker signs fiscal documents locally, queues them when the link is down, and replays them in order on reconnect — and every payment callback has to be IP allow-listed, because STK push moves money on the strength of a webhook arriving from a known address.",
    outcome:
      "Three editions in production across retail, hospitality and pharmacy, with hardware-bound licensing that resists forged activations and supports remote revocation. Installers ship for Windows, Mac and Linux.",
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "SQLite",
      "KRA eTIMS OSCU/VSCU",
      "M-Pesa Daraja",
      "JWT hardware binding",
      "LAN sockets",
      "ESC/POS",
    ],
    highlights: [
      "Hardware-bound JWT licensing with remote revocation",
      "KRA eTIMS fiscalisation with offline queue + replay",
      "M-Pesa Daraja STK Push, IP-guarded callbacks",
      "Retail, hotel F&B and pharmacy editions",
      "Local LAN socket sync across terminals",
    ],
    image: "/images/projects/wik-pos-desktop.webp",
    imageAlt: "WIK-POS desktop application",
    link: "https://pos.wiktechnologies.com/",
    linkLabel: "Live product",
    badge: "In production",
  },
{
    id: "wik-hms",
    index: "02",
    title: "WIK HMS",
    kicker: "Hospital management system, live in three hospitals",
    category: "Healthcare · Enterprise ERP",
    summary:
      "Triage, pharmacy, billing and insurance claims in one system — deployed as white-labelled instances now running clinical operations in three hospitals.",
    problem:
      "Hospitals run on paper and WhatsApp. Triage, pharmacy stock, patient billing and insurance claims each live somewhere different, and the pharmacy's real risk is expiry rather than stock count — yet almost every pharmacy system in the market tracks quantity and ignores dates.",
    build:
      "A Laravel 12 and React 19 hospital platform deployed as per-client white-labelled instances: 200+ REST endpoints across 56 migrations, an Observer pattern that posts every clinical event into the billing ledger automatically, real-time triage queues, and FEFO pharmacy registers that dispense the oldest batch first rather than the easiest to find.",
    hard:
      "Regulatory reality, not feature count. The pharmacy module has to satisfy Pharmacy and Poisons Board rules with complete batch tracking and expiry-driven dispensing, while billing has to reconcile against SHA insurance claims without a nightly reconciliation job hanging off the critical path.",
    outcome:
      "Live in three hospitals. Clinical, pharmacy and billing workflows run every day with real patient volume, on instances that look like the hospital's own software rather than a vendor's template.",
    stack: [
      "Laravel 12",
      "React 19",
      "MySQL",
      "Observer Pattern",
      "REST API",
      "White-label deployment",
    ],
    highlights: [
      "Live in three hospitals as per-client instances",
      "200+ endpoints across 56 migrations",
      "Observer-pattern automated ledger billing",
      "Real-time triage queues",
      "FEFO pharmacy registers with expiry safety",
    ],
    image: "/images/projects/wik-hms.webp",
    imageAlt: "WIK HMS healthcare platform",
    link: "https://hmisdemo.wiktechnologies.com/",
    linkLabel: "Live demo",
    badge: "In production",
  },
{
    id: "hiro",
    index: "03",
    title: "Hiro",
    kicker: "Self-hosted multi-model AI agent",
    category: "AI Agent · Multi-Model Orchestration",
    summary:
      "A personal AI agent that lives on Telegram and WhatsApp, routes work across eight-plus model providers by role, and remembers what it did last month.",
    problem:
      "Chat assistants are single-model, single-shot and stateless. A serious agent needs tools, durable memory, and a way to keep working when you are asleep — and the moment you add more than one provider, routing becomes the product.",
    build:
      "Hiro is a self-hosted agent reachable over Telegram, WhatsApp, or both at once. `/mesh <goal>` decomposes a goal into steps and routes each one by role — planning to Gemini, research to Groq, coding to Codestral, critique to DeepSeek — running independent steps in parallel and failing over between providers mid-flight. Around that sits document ingestion with searchable retrieval, structured context compression, a skills library that writes itself from successful multi-step runs, scheduled proactive tasks, voice in and out, and a browser operator canvas.",
    hard:
      "Making model routing deterministic when the planner emits structured output. The JSON comes back malformed, truncated, or with markers missing, so the router needed defensive parsing, bounded execution loops and per-step failover. Context compression had to preserve goal, decisions, files and next steps rather than a summary, or long sessions drift off-task within a dozen turns.",
    outcome:
      "One interface over eight-plus providers (OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek, Alibaba, OpenRouter). Skills accumulate from usage instead of being hand-written. The same runtime runs on a laptop and on Fly with a persistent volume, and WhatsApp sessions survive redeploys.",
    stack: [
      "Node.js",
      "TypeScript",
      "AI SDK",
      "SQLite",
      "PostgreSQL",
      "Pinecone",
      "Telegram API",
      "WhatsApp",
      "MCP",
      "Fly.io",
    ],
    highlights: [
      "Role-aware model mesh with parallel step execution",
      "Self-improving SKILL.md skills system",
      "Document ingestion + semantic retrieval",
      "Scheduled and proactive tasks with per-channel delivery",
      "Structured context compression across long sessions",
      "Dual Telegram + WhatsApp operation",
    ],
    image: "/images/projects/hiro.jpg",
    imageAlt: "Hiro agent interface",
    github: "https://github.com/Paul-Karonji/Hiro",
    badge: "Open source",
  },
];
