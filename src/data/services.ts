export interface ServicePillar {
  id: string;
  title: string;
  badge: string;
  featured: boolean;
  description: string;
  tags: string[];
  deliverables: string[];
}

export const services: ServicePillar[] = [
  {
    id: "payments-kenya-rails",
    title: "Payments & Kenya Rails Engineering",
    badge: "M-Pesa · Paystack · eTIMS",
    featured: true, // Electric Violet #7430F7
    description: "Production payment integrations across Kenya's rails: M-Pesa Daraja STK Push with IP-guarded C2B callbacks, Paystack card payments with raw-byte webhook verification, and KRA eTIMS OSCU/VSCU fiscalization with encrypted credential stores.",
    tags: ["M-Pesa Daraja", "Paystack", "KRA eTIMS", "HMAC-SHA256", "Webhooks"],
    deliverables: [
      "M-Pesa Daraja STK Push & C2B callback reconciliation queues",
      "Paystack card checkout with timing-safe, raw-byte webhook verification",
      "KRA eTIMS fiscalization workers (OSCU/VSCU, AES-256 credentials)",
      "Subscription lifecycle billing: renewals, dunning, access walls",
    ],
  },
  {
    id: "offline-first-systems",
    title: "Offline-First Desktop, Mobile & POS",
    badge: "SQLite · Sync · Hardware",
    featured: false,
    description: "Desktop and mobile systems that keep working when the network doesn't: Electron POS suites, Expo/React Native apps, and local-first SQLite stores with deterministic batch sync — plus hardware-bound licensing and peripheral integrations.",
    tags: ["Electron", "React Native (Expo)", "SQLite", "Hardware Licensing", "ESC/POS"],
    deliverables: [
      "Offline-first Electron & Expo apps with local-first SQLite",
      "Deterministic reconnect sync and background data pipelines",
      "Hardware-bound JWT licensing (CPU + MAC fingerprinting)",
      "Thermal printing, cash drawers, and POS peripherals",
    ],
  },
  {
    id: "realtime-ai-backends",
    title: "Real-Time Backends & AI Agent Tooling",
    badge: "Go · WebSockets · MCP",
    featured: false,
    description: "High-concurrency backends and AI infrastructure: Go services with WebSocket fan-out, multi-tenant REST APIs, and native Model Context Protocol servers that let AI agents create, complete, and auto-schedule real work.",
    tags: ["Go (Chi, pgxpool)", "WebSockets/Socket.IO", "MCP Servers", "AI SDK", "PostgreSQL"],
    deliverables: [
      "High-concurrency Go ingestion with real-time WebSocket fan-out",
      "Multi-tenant SaaS APIs with row-level security & RBAC",
      "Native MCP servers exposing typed agent tools",
      "Multi-model LLM orchestration (Anthropic, OpenAI, Groq, Mistral)",
    ],
  },
];
