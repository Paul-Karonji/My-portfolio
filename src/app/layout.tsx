import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { profile } from "@/data/profile";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paulkaronji.dev"),
  title: `${profile.name} — ${profile.role}`,
  description: profile.bio,
  keywords: [
    "Paul Karonji Waithaka",
    "Systems Architect",
    "Full-Stack Software Engineer",
    "Go Engineer",
    "NestJS",
    "React 19",
    "Next.js",
    "Offline-first",
    "KRA eTIMS",
    "M-Pesa Daraja",
    "WIK Technologies",
    "Nairobi Kenya"
  ],
  authors: [{ name: profile.name, url: profile.portfolio }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    url: profile.portfolio,
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
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    images: ["/images/hero-portrait.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body className="antialiased min-h-screen selection:bg-accentViolet selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
