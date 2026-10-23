export interface ProfileData {
  name: string;
  first: string;
  role: string;
  headline: string;
  headlineLine2: string;
  bio: string;
  ask: string;
  location: string;
  timezone: string;
  status: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  site: string;
  resumeUrl: string;
  heroPortrait: string;
  heroCutout: string;
  interests: string[];
  stats: { value: string; label: string; note: string }[];
}

export const profile: ProfileData = {
  name: "Paul Karonji Waithaka",
  first: "Paul",
  role: "AI enthusiast · Full stack developer",
  headline: "AI enthusiast.",
  headlineLine2: "Full stack developer.",
  bio: "I like AI enough to build my own agent stack — a multi-model mesh over Telegram and WhatsApp, an MCP server, a skills system that writes itself. Then I like the unglamorous half: the offline-first POS, hospital and fintech platforms that have to keep working when the network doesn't. Lead Engineer at WIK Technologies, based in Nairobi.",
  ask: "Currently looking for internship, junior or remote roles.",
  location: "Nairobi, Kenya",
  timezone: "EAT · UTC+3",
  status: "Seeking internship, junior or remote roles",
  email: "karonjipaul.w@gmail.com",
  phone: "+254 729 089 168",
  github: "https://github.com/Paul-Karonji",
  linkedin: "https://linkedin.com/in/paul-karonji",
  site: "https://paulkaronji.netlify.app",
  resumeUrl: "/resume.pdf",
  heroPortrait: "/images/hero-portrait.webp",
  heroCutout: "/images/hero-cutout.webp",
  interests: [
    "agents",
    "MCP tool servers",
    "RAG",
    "local models",
    "voice interfaces",
    "offline-first",
  ],
  stats: [
    {
      value: "8+",
      label: "LLM providers",
      note: "behind one agent interface",
    },
    {
      value: "13",
      label: "MCP tools",
      note: "exposed by the DueSync server",
    },
    {
      value: "3",
      label: "Hospitals live",
      note: "running WIK HMS daily",
    },
    {
      value: "94%",
      label: "Card collection",
      note: "real Visa payments via Paystack",
    },
  ],
};
