import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paulkaronji.netlify.app"),
  title: `${profile.name} — AI Engineer & Systems Architect`,
  description:
    "Lead Engineer at WIK Technologies. I build self-hosted multi-model AI agents, MCP tool servers, and the offline-first hospital, point-of-sale and fintech platforms they run on. Based in Nairobi, Kenya.",
  keywords: [
    "Paul Karonji Waithaka",
    "AI Engineer",
    "AI Agent",
    "Multi-Agent Systems",
    "Model Context Protocol",
    "MCP",
    "Full-Stack Engineer",
    "Systems Architect",
    "M-Pesa Daraja",
    "Paystack",
    "KRA eTIMS",
    "Offline-First",
    "Electron",
    "Next.js",
    "NestJS",
    "React",
    "Go",
    "Nairobi Kenya",
    "WIK Technologies",
  ],
  authors: [{ name: profile.name, url: profile.site }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — AI Engineer & Systems Architect`,
    description: profile.bio,
    url: profile.site,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-portrait.webp",
        width: 768,
        height: 1365,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Engineer & Systems Architect`,
    description: profile.bio,
    images: ["/images/hero-portrait.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body className="relative min-h-screen antialiased">
        <div className="bg-field" aria-hidden="true" />
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-noise" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
