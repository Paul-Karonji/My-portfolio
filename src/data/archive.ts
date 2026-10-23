export interface ArchiveRepo {
  name: string;
  language: string;
  blurb: string;
  url?: string;
  private?: boolean;
}

/**
 * Every repository on the account, public and private. Private entries have
 * no link on purpose — this list exists to show the volume and the range,
 * not to leak private work.
 */
export const archive: ArchiveRepo[] = [
  {
    name: "Hiro",
    language: "TypeScript",
    blurb: "Self-hosted multi-model AI agent for Telegram and WhatsApp",
    url: "https://github.com/Paul-Karonji/Hiro",
  },
  {
    name: "unsent",
    language: "JavaScript",
    blurb: "Offline-first private diary PWA with a PBKDF2 local lock",
    url: "https://github.com/Paul-Karonji/unsent",
  },
  {
    name: "Votewatch",
    language: "TypeScript",
    blurb: "Cryptographically verifiable election observation platform",
    url: "https://github.com/Paul-Karonji/Votewatch",
  },
  {
    name: "DueSync",
    language: "TypeScript",
    blurb: "Task PWA shipping a native 13-tool MCP server",
    url: "https://github.com/Paul-Karonji/DueSync",
  },
  {
    name: "biashara-hub",
    language: "TypeScript",
    blurb: "Headless Medusa v2 commerce with M-Pesa Daraja wired in",
    url: "https://github.com/Paul-Karonji/biashara-hub",
  },
  {
    name: "wiktrack",
    language: "JavaScript",
    blurb: "Android M-Pesa income tracker with on-device SMS parsing",
    url: "https://github.com/Paul-Karonji/wiktrack",
  },
  {
    name: "My-portfolio",
    language: "TypeScript",
    blurb: "This site — Next.js 15, Tailwind CSS, custom design system",
    url: "https://github.com/Paul-Karonji/My-portfolio",
  },
  {
    name: "Portfolio",
    language: "JavaScript",
    blurb: "The earlier build — a plain single-page site",
    url: "https://github.com/Paul-Karonji/Portfolio",
  },
  {
    name: "RMS",
    language: "PHP",
    blurb: "Multi-tenant rental management platform",
    url: "https://github.com/Paul-Karonji/RMS",
  },
  {
    name: "framel",
    language: "TypeScript",
    blurb: "Flower shop commerce API — Express, Firebase, M-Pesa, Cloudinary",
    url: "https://github.com/Paul-Karonji/framel",
  },
  {
    name: "cinetaste",
    language: "TypeScript",
    blurb: "Movie and series companion with taste-based recommendations",
    url: "https://github.com/Paul-Karonji/cinetaste",
  },
  {
    name: "arch",
    language: "HTML",
    blurb: "Architecture studio portfolio — warm earth tones, heavy motion",
    url: "https://github.com/Paul-Karonji/arch",
  },
  {
    name: "Bags",
    language: "HTML",
    blurb: "Bags with Mulan — luxury handcrafted bags, Nairobi",
    url: "https://github.com/Paul-Karonji/Bags",
  },
  {
    name: "Demo",
    language: "HTML",
    blurb: "Fully client-side hospital management system demo",
    url: "https://github.com/Paul-Karonji/Demo",
  },
  {
    name: "wik-pos",
    language: "TypeScript",
    blurb: "Multi-tenant POS — retail, pharmacy, hospitality",
    private: true,
  },
  {
    name: "WIk-pos-VPS-",
    language: "TypeScript",
    blurb: "Self-hosted WIK-POS deployment kit for VPS",
    private: true,
  },
  {
    name: "WIK-POS-Premium",
    language: "TypeScript",
    blurb: "Premium edition of the WIK-POS suite",
    private: true,
  },
  {
    name: "wik-pos-hotel-edition",
    language: "TypeScript",
    blurb: "Hotel F&B edition — tables, KOT, room folios",
    private: true,
  },
  {
    name: "wik-pharmacy",
    language: "TypeScript",
    blurb: "Pharmacy edition — PPB batches, FEFO, quarantine",
    private: true,
  },
  {
    name: "Pos-license-server",
    language: "TypeScript",
    blurb: "Central licensing authority with hardware fingerprinting",
    private: true,
  },
  {
    name: "Ktrack",
    language: "JavaScript",
    blurb: "Tutor-agency commission SaaS with live card payments",
    private: true,
  },
  {
    name: "Wikscholar",
    language: "TypeScript",
    blurb: "School ERP with a Kenya CBC grading engine",
    private: true,
  },
  {
    name: "Logit",
    language: "JavaScript",
    blurb: "Cross-border courier operations platform",
    private: true,
  },
  {
    name: "Hotbill",
    language: "TypeScript",
    blurb: "MikroTik RouterOS billing and provisioning engine",
    private: true,
  },
  {
    name: "MtaaKeys",
    language: "TypeScript",
    blurb: "Property marketplace and rental management",
    private: true,
  },
  {
    name: "hms-demo",
    language: "JavaScript",
    blurb: "Browser-based hospital management demo",
    private: true,
  },
  {
    name: "Remote-wik-pos-dashboard",
    language: "JavaScript",
    blurb: "Remote operations console for the deployed POS fleet",
    private: true,
  },
  {
    name: "desktop-app",
    language: "JavaScript",
    blurb: "Desktop client for the WIK product family",
    private: true,
  },
  {
    name: "Wik",
    language: "HTML",
    blurb: "WIK Technologies product and marketing site",
    private: true,
  },
  {
    name: "jhub-africa-tracker",
    language: "PHP",
    blurb: "Programme tracker for JHUB Africa",
    private: true,
  },
];

export const languageColors: Record<string, string> = {
  TypeScript: "#4E8AD8",
  JavaScript: "#E4C04A",
  Python: "#7BA6D9",
  PHP: "#9B7FC4",
  Go: "#59C3C3",
  HTML: "#E07A5F",
};
