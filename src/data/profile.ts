export interface ProfileData {
  name: string;
  first: string;
  role: string;
  headline: string;
  headlineAccent: string;
  bio: string;
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
  stats: { value: string; label: string; note: string }[];
}

export const profile: ProfileData = {
  name: "Paul Karonji Waithaka",
  first: "Paul",
  role: "AI Engineer · Full-Stack Systems Architect",
  headline: "I build AI agents —",
  headlineAccent: "and the systems they have to survive in.",
  bio: "Lead Engineer at WIK Technologies and Founding Engineer of FleetTrack. I build self-hosted multi-model AI agents, MCP tool servers, and the offline-first hospital, point-of-sale and fintech platforms they run on. Based in Nairobi; work remote across EAT.",
  location: "Nairobi, Kenya",
  timezone: "EAT · UTC+3",
  status: "Open to Senior / Lead roles",
  email: "karonjipaul.w@gmail.com",
  phone: "+254 729 089 168",
  github: "https://github.com/Paul-Karonji",
  linkedin: "https://linkedin.com/in/paul-karonji",
  site: "https://paulkaronji.netlify.app",
  resumeUrl: "/resume.pdf",
  heroPortrait: "/images/hero-portrait.webp",
  stats: [
    {
      value: "30",
      label: "Repositories shipped",
      note: "in 16 months, most of it live",
    },
    {
      value: "8+",
      label: "LLM providers",
      note: "behind one agent interface",
    },
    {
      value: "3",
      label: "Hospitals live",
      note: "running WIK HMS daily",
    },
    {
      value: "94%",
      label: "Card collection",
      note: "K-Track, real Visa payments",
    },
  ],
};
