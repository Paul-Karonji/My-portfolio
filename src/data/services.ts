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
    id: "distributed-systems",
    title: "Distributed Backends & Microservices",
    badge: "High Concurrency",
    featured: false,
    description: "Architecting high-throughput Go and NestJS backends capable of ingesting high-frequency IoT streams, managing distributed queues, and fanning out real-time WebSocket payloads with sub-millisecond overhead.",
    tags: ["Go Channels", "NestJS 11", "WebSockets", "PostgreSQL", "Docker"],
    deliverables: [
      "High-throughput IoT & telemetry ingestion pipelines",
      "Event-driven microservice architectures & message queues",
      "Database schema design, indexing & multi-tenant isolation",
      "RESTful & WebSocket API design with rate-limiting"
    ]
  },
  {
    id: "fullstack-saas",
    title: "Full-Stack SaaS & Offline-First Apps",
    badge: "Core Engineering",
    featured: true, // Electric Violet #7430F7
    description: "Delivering modern React 19 and Next.js 15 enterprise SaaS products paired with offline-first mobile and desktop applications that store data locally in SQLite and synchronize seamlessly when connected.",
    tags: ["Next.js 15", "React 19", "React Native Expo", "Offline SQLite", "MCP AI"],
    deliverables: [
      "Next.js App Router enterprise platforms with optimal SSR/SSG",
      "Offline-first mobile (Expo 57) & desktop (Electron) applications",
      "Native Model Context Protocol (MCP) AI agent integrations",
      "Zero-knowledge client-side encryption vaults (PBKDF2/AES-GCM)"
    ]
  },
  {
    id: "fintech-automation",
    title: "Fintech, Fiscalization & Network Automation",
    badge: "Compliance & Telco",
    featured: false,
    description: "Bridging mission-critical hardware and payment infrastructure: automated KRA eTIMS OSCU/VSCU fiscalization, M-Pesa Daraja STK/C2B queues, Paystack split payments, and MikroTik RouterOS network daemons.",
    tags: ["M-Pesa Daraja", "KRA eTIMS", "Paystack", "MikroTik :8728", "NOC Dashboards"],
    deliverables: [
      "Automated KRA eTIMS fiscal tax compliance workers with AES-256 keys",
      "Instant M-Pesa STK Push and C2B Paybill webhook reconciliation queues",
      "MikroTik RouterOS socket API daemon automation for ISPs & hotspots",
      "Paystack recurring subscription lifecycle walls and split payouts"
    ]
  }
];
