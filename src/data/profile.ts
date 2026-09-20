export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  statusBadge: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  portfolio: string;
  resumeUrl: string;
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export const profile: ProfileData = {
  name: "Paul Karonji Waithaka",
  role: "Full-Stack Software Engineer · Systems Architect · Founder",
  tagline: "Architecting distributed backends, offline-first systems, and enterprise cloud platforms.",
  bio: "Full-Stack Software Engineer and Systems Architect with 3+ years delivering production-grade systems spanning distributed backends, enterprise cloud platforms, offline-first desktop/mobile architectures, and cryptographic tooling. Founder of WIK Technologies, creator of WIK Online Cloud POS (NestJS 11 + KRA eTIMS fiscal compliance), FleetTrack (high-concurrency Go IoT telematics), HotBill KE (MikroTik network automation & M-Pesa billing), and DueSync (Next.js SaaS + 13-tool native MCP AI server).",
  location: "Nairobi, Kenya",
  statusBadge: "Available for Systems Architecture & Senior Roles",
  email: "karonjipaul.w@gmail.com",
  phone: "+254 729 089 168",
  github: "https://github.com/Paul-Karonji",
  linkedin: "https://linkedin.com/in/paul-karonji-562080381",
  portfolio: "https://paul-karonji.github.io/Portfolio",
  resumeUrl: "/resume.pdf",
  metrics: [
    {
      value: "3+",
      label: "Years in Production",
      subtext: "Delivering enterprise & distributed systems",
    },
    {
      value: "10+",
      label: "Production Systems",
      subtext: "Cloud, IoT, Fintech & Offline-first apps",
    },
    {
      value: "200+",
      label: "Hospital ERP Endpoints",
      subtext: "Clinical triage, ledger & FEFO pharmacy",
    },
    {
      value: "100k",
      label: "PBKDF2 Rounds",
      subtext: "Zero-knowledge cryptographic security",
    },
  ],
};
