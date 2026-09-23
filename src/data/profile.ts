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
  role: "Full-Stack Software Engineer",
  tagline: "Shipping production systems across payment rails, offline-first platforms, real-time backends, and AI agent tooling.",
  bio: "Full-stack engineer shipping production systems with live users: a hospital management platform running in 3 hospitals, SaaS products processing real card payments, and an offline-first POS suite with KRA eTIMS fiscalization. Lead Engineer at WIK Technologies and Founding Engineer of FleetTrack (Atlas Data), with 3+ years building across Kenya's payment rails (M-Pesa Daraja, Paystack), offline-first architecture, real-time systems, and MCP AI agent tooling. I work fully remote and async.",
  location: "Nairobi, Kenya (Remote-ready, EAT/UTC+3)",
  statusBadge: "Open to Senior / Lead Remote Roles",
  email: "karonjipaul.w@gmail.com",
  phone: "+254 729 089 168",
  github: "https://github.com/Paul-Karonji",
  linkedin: "https://linkedin.com/in/paul-karonji",
  portfolio: "https://paulkaronji.netlify.app",
  resumeUrl: "/resume.pdf",
  metrics: [
    {
      value: "3+",
      label: "Years Shipping Production",
      subtext: "Fintech, health, SaaS & offline-first systems",
    },
    {
      value: "10+",
      label: "Products Delivered",
      subtext: "End-to-end: architecture to deployment",
    },
    {
      value: "3",
      label: "Hospitals Live on WIK HMS",
      subtext: "200+ endpoints, FEFO pharmacy, triage queues",
    },
    {
      value: "94%",
      label: "Payment Collection Rate",
      subtext: "Real Visa card billing via Paystack (K-Track)",
    },
  ],
};
