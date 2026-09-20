import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWorks from "@/components/FeaturedWorks";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-canvas overflow-x-hidden">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* 2. Cinematic Scroll-Zoom Hero */}
      <Hero />

      {/* 3. Featured 2-Column Bento Project Grid */}
      <FeaturedWorks />

      {/* 4. Social Proof & Quantitative Metrics */}
      <SocialProof />

      {/* 5. Core Architectural Services (Featured Electric Violet Card) */}
      <Services />

      {/* 6. Dark #111111 5-Step Engineering Lifecycle */}
      <HowItWorks />

      {/* 7. Interactive Accordion FAQs */}
      <FAQs />

      {/* 8. Closing Display CTA & Structured Directory Footer */}
      <Footer />
    </main>
  );
}
