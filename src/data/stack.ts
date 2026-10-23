export const principles: {
  index: string;
  title: string;
  body: string;
}[] = [
  {
    index: "A",
    title: "Offline is the default, not the fallback.",
    body: "A Kenyan shop loses signal every afternoon. A POS that needs the cloud to print a receipt stops selling. So the WIK-POS desktop suite writes to local SQLite and syncs when it can, the drivers' transit portal keeps logging checkpoints with no signal at all, and Unsent still unlocks with the same password when the internet is gone.",
  },
  {
    index: "B",
    title: "An agent needs tools, not toys.",
    body: "A model that can only talk is a demo. DueSync ships a native MCP server with 13 tools so an agent can actually schedule work; Hiro exposes real tool plugins, a skills system and scheduled jobs. The interesting work is the boring part — schemas, permissions, audit trails.",
  },
  {
    index: "C",
    title: "The database should refuse, not warn.",
    body: "VoteWatch blocks UPDATE and DELETE on vote counts with a PostgreSQL trigger, because application-level validation loses to a compromised admin key. Hiro's operator routes sit behind tokens. If the data matters, the constraint belongs where the data lives.",
  },
];

export const stackGroups: {
  label: string;
  items: string[];
}[] = [
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
];
