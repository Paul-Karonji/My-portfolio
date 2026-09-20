export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is your availability for full-time engineering roles vs. consulting?",
    answer: "I am actively open to both Senior/Lead Full-Stack & Systems Architect full-time roles (global remote or hybrid in Nairobi) as well as selective high-impact architectural consulting engagements. For consulting, I take on a limited number of clients per quarter to ensure dedicated, high-velocity execution."
  },
  {
    question: "What is your typical project delivery timeline?",
    answer: "A focused MVP or specialized integration (e.g. KRA eTIMS worker, M-Pesa Daraja payment pipeline, or an MCP server) is typically designed, built, tested, and deployed in 1 to 3 weeks. Comprehensive enterprise cloud platforms (such as multi-tenant ERPs, offline-first mobile suites, or IoT telematics backends) typically range from 4 to 8 weeks."
  },
  {
    question: "How do you handle offline-first data synchronization?",
    answer: "I utilize local-first architectures with embedded SQLite (via Expo SQLite or better-sqlite3) paired with an idempotent, sequence-stamped change log. Local mutations occur instantly with zero latency. When connectivity resumes, a deterministic synchronization worker uploads changes and resolves concurrency using monotonic timestamps or server-side CRDTs."
  },
  {
    question: "Have you worked extensively with African payment rails and regulatory compliance?",
    answer: "Yes. I have architected and deployed production systems integrating M-Pesa Daraja (automated STK Push and C2B Paybill webhook queues with reversal handling), Paystack recurring subscriptions, and Kenya Revenue Authority (KRA) eTIMS OSCU/VSCU automated fiscalization using AES-256 encrypted credential stores."
  },
  {
    question: "What technologies and architectures do you specialize in?",
    answer: "On the backend: Go (high-concurrency goroutines, channels, WebSockets), NestJS 11, Node.js, Laravel 12, PostgreSQL, and MySQL. On the frontend and mobile: Next.js 15/16, React 19, React Native (Expo 57), and Electron. In security & AI: Model Context Protocol (MCP) servers, zero-knowledge Web Crypto (PBKDF2/AES-GCM-256), and Dockerized microservices."
  },
  {
    question: "How do we get started on working together?",
    answer: "You can click 'Schedule an Architecture Call' to set up a quick 20-minute discovery discussion, or email me directly at karonjipaul.w@gmail.com with your project requirements or role specifications. I usually respond within 24 hours."
  }
];
