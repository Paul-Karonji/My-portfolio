export const principles: {
  index: string;
  title: string;
  body: string;
}[] = [
  {
    index: "A",
    title: "Offline is the default, not the fallback.",
    body: "A Kenyan shop loses signal every afternoon. A POS that needs the cloud to print a receipt stops selling. So WIK-POS writes to local SQLite and syncs when it can, drivers keep logging checkpoints with no signal at all, and Unsent still unlocks with the same password when the internet is gone.",
  },
  {
    index: "B",
    title: "An agent needs tools, not toys.",
    body: "A model that can only talk is a demo. So DueSync ships a real MCP server with 13 tools, and Hiro has actual tool plugins, a skills library and scheduled jobs. The fun part turns out to be the boring part — schemas, permissions, audit trails.",
  },
  {
    index: "C",
    title: "The database should refuse, not warn.",
    body: "VoteWatch blocks UPDATE and DELETE on vote counts with a PostgreSQL trigger, because application-level validation loses to a compromised admin key. If the data matters, the constraint belongs where the data lives.",
  },
];

export const stackGroups: {
  label: string;
  items: string[];
}[] = [
  {
    label: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "PHP",
      "Go",
      "SQL",
      "Kotlin",
      "Bash",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React 19",
      "Next.js 15",
      "Vite",
      "Expo",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Electron",
    ],
  },
  {
    label: "Backend & Data",
    items: [
      "NestJS",
      "Express 5",
      "Laravel 12",
      "Prisma",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "TiDB",
      "Redis",
      "Supabase",
    ],
  },
  {
    label: "Money & Compliance",
    items: [
      "M-Pesa Daraja",
      "Paystack",
      "KRA eTIMS",
      "Africa's Talking",
      "SHA insurance",
      "PPB pharmacy",
      "MikroTik RouterOS",
    ],
  },
  {
    label: "Infrastructure",
    items: [
      "Vercel",
      "Netlify",
      "Fly.io",
      "Render",
      "Docker",
      "Cloudflare R2",
      "GitHub Actions",
      "Sentry",
      "Playwright",
    ],
  },
  {
    label: "AI & Agents",
    items: [
      "Model Context Protocol",
      "AI SDK",
      "Multi-model routing",
      "Agent skills",
      "Embeddings",
      "Pinecone",
      "Vector retrieval",
      "Context compression",
    ],
  },
];
