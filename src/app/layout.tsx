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
  metadataBase: new URL("https://paulkaronji.netlify.app"),
  title: `${profile.name} — ${profile.role}`,
  description: profile.bio,
  keywords: [
    "Paul Karonji Waithaka",
    "Full-Stack Software Engineer",
    "Go Engineer",
    "M-Pesa Daraja",
    "Paystack",
    "KRA eTIMS",
    "Offline-first",
    "React 19",
    "Next.js",
    "MCP",
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
        url: "/images/og-card.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    images: ["/images/og-card.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: profile.role,
              email: `mailto:${profile.email}`,
              telephone: profile.phone,
              url: profile.portfolio,
              image: `${profile.portfolio}/images/hero-portrait.webp`,
              sameAs: [profile.github, profile.linkedin],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "KCA University",
              },
              knowsAbout: [
                "TypeScript",
                "Next.js",
                "Node.js",
                "NestJS",
                "Laravel",
                "Go",
                "M-Pesa Daraja",
                "Paystack",
                "KRA eTIMS",
                "Model Context Protocol",
              ],
            }),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
